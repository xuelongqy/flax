import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

// Observe frame boundaries only. Dart still validates and decodes the protocol.
// A bounded header and close payload suffice; data payloads are never accumulated.
class FrameObserver {
  FrameObserver({required this.onFrame, this.maxPayload});
  final void Function(int opcode, List<int> closePayload) onFrame;
  final int? maxPayload;
  final _header = <int>[];
  final _close = <int>[];
  int _headerLength = 2;
  int _remaining = 0;
  int _opcode = 0;
  int _messageBytes = 0;
  int _payloadOffset = 0;
  bool _final = false;
  bool _masked = false;

  void add(List<int> bytes) {
    var offset = 0;
    while (offset < bytes.length) {
      if (_header.length < _headerLength) {
        _header.add(bytes[offset++]);
        if (_header.length == 2) {
          _masked = _header[1] & 128 != 0;
          final size = _header[1] & 127;
          _headerLength =
              2 + (size == 126 ? 2 : (size == 127 ? 8 : 0)) + (_masked ? 4 : 0);
        }
        if (_header.length != _headerLength) continue;
        _opcode = _header[0] & 15;
        _final = _header[0] & 128 != 0;
        _remaining = _header[1] & 127;
        if (_remaining >= 126) {
          final end = _remaining == 126 ? 4 : 10;
          _remaining = 0;
          for (var i = 2; i < end; i++) {
            // Avoid signed 64-bit overflow before checking the advertised length.
            if (_remaining > 0x1fffffffffffff) {
              throw const WebSocketException('Frame too large');
            }
            _remaining = _remaining * 256 + _header[i];
          }
        }
        if (_opcode < 8) {
          if (_opcode != 0) _messageBytes = 0;
          _messageBytes += _remaining;
          if (maxPayload != null && _messageBytes > maxPayload!) {
            throw const WebSocketException('Message exceeds maxPayload');
          }
        }
        if (_opcode == 8 && _remaining > 125) {
          throw const WebSocketException('Invalid close frame');
        }
        if (_remaining == 0) _complete();
        continue;
      }
      final count = (_remaining < bytes.length - offset)
          ? _remaining
          : bytes.length - offset;
      if (_opcode == 8) {
        for (var i = 0; i < count; i++) {
          final mask = _masked
              ? _header[_headerLength - 4 + ((_payloadOffset + i) & 3)]
              : 0;
          _close.add(bytes[offset + i] ^ mask);
        }
      }
      offset += count;
      _payloadOffset += count;
      _remaining -= count;
      if (_remaining == 0) _complete();
    }
  }

  void _complete() {
    onFrame(_opcode, _close);
    if (_opcode < 8 && _final) _messageBytes = 0;
    _header.clear();
    _close.clear();
    _headerLength = 2;
    _payloadOffset = 0;
  }
}

// Keep reading transport completion after Dart's protocol stream consumes a close
// frame and cancels its subscription. Never use sink.done as peer-close evidence.
class ObservedSocket extends Stream<Uint8List> implements Socket {
  ObservedSocket(
    this.inner, {
    required int maxPayload,
    required this.onFailure,
    required this.onDataWritten,
  }) {
    outgoing = FrameObserver(
      onFrame: (opcode, payload) {
        if (opcode == 8) sentClose = true;
        if (opcode == 1 || opcode == 2) onDataWritten();
      },
    );
    incoming = FrameObserver(
      maxPayload: maxPayload,
      onFrame: (opcode, payload) {
        if (opcode == 8) {
          receivedClose = true;
          receivedCode = payload.isEmpty
              ? 1005
              : (payload.length >= 2 ? payload[0] * 256 + payload[1] : null);
        }
      },
    );
    _input = StreamController<Uint8List>(
      sync: true,
      onCancel: () {
        _consumerGone = true;
      },
    );
    // The upgraded socket can already contain bytes. Subscribe only when the
    // WebSocket decoder is ready, so the adapter never queues an unbounded input.
    _input.onListen = () {
      _subscription = inner.listen(
        (bytes) {
          try {
            incoming.add(bytes);
            if (!_consumerGone && !_input.isClosed) _input.add(bytes);
          } catch (error, stack) {
            onFailure(error, stack);
          }
        },
        onError: (Object error, StackTrace stack) {
          onFailure(error, stack);
          if (!_consumerGone && !_input.isClosed) _input.addError(error, stack);
        },
        onDone: () {
          if (!ended.isCompleted) ended.complete();
          _input.close();
        },
      );
    };
    inner.done.catchError((Object error, StackTrace stack) {
      onFailure(error, stack);
      return inner;
    });
  }
  final Socket inner;
  final void Function(Object, StackTrace) onFailure;
  final void Function() onDataWritten;
  late final FrameObserver incoming, outgoing;
  late final StreamController<Uint8List> _input;
  StreamSubscription<Uint8List>? _subscription;
  final ended = Completer<void>();
  final outputEnded = Completer<void>();
  bool sentClose = false, receivedClose = false, outputClosed = false;
  int? receivedCode;
  bool _consumerGone = false;

  @override
  StreamSubscription<Uint8List> listen(
    void Function(Uint8List)? onData, {
    Function? onError,
    void Function()? onDone,
    bool? cancelOnError,
  }) => _input.stream.listen(
    onData,
    onError: onError,
    onDone: onDone,
    cancelOnError: cancelOnError,
  );
  @override
  Future<void> addStream(Stream<List<int>> stream) async {
    // Per-chunk flush bounds acceptance into the Socket sink. It does NOT prove
    // TLS/network drainage and is deliberately not exposed as bufferedAmount.
    await for (final chunk in stream) {
      inner.add(chunk);
      await inner.flush();
      outgoing.add(chunk);
    }
  }

  @override
  void add(List<int> bytes) {
    inner.add(bytes);
    outgoing.add(bytes);
  }

  @override
  Future<void> close() async {
    await inner.close();
    outputClosed = true;
    if (!outputEnded.isCompleted) outputEnded.complete();
  }

  @override
  void destroy() {
    inner.destroy();
    _subscription?.cancel().ignore();
    _input.close();
    if (!ended.isCompleted) ended.complete();
    if (!outputEnded.isCompleted) outputEnded.complete();
  }

  @override
  Encoding get encoding => inner.encoding;
  @override
  set encoding(Encoding value) => inner.encoding = value;
  @override
  void addError(Object error, [StackTrace? stackTrace]) =>
      inner.addError(error, stackTrace);
  @override
  void write(Object? object) => inner.write(object);
  @override
  void writeln([Object? object = '']) => inner.writeln(object);
  @override
  void writeAll(Iterable<Object?> objects, [String separator = '']) =>
      inner.writeAll(objects, separator);
  @override
  void writeCharCode(int charCode) => inner.writeCharCode(charCode);
  @override
  Future<void> flush() async => inner.flush();
  @override
  Future<void> get done async => inner.done;
  @override
  int get port => inner.port;
  @override
  int get remotePort => inner.remotePort;
  @override
  InternetAddress get address => inner.address;
  @override
  InternetAddress get remoteAddress => inner.remoteAddress;
  @override
  bool setOption(SocketOption option, bool enabled) =>
      inner.setOption(option, enabled);
  @override
  Uint8List getRawOption(RawSocketOption option) => inner.getRawOption(option);
  @override
  void setRawOption(RawSocketOption option) => inner.setRawOption(option);
}
