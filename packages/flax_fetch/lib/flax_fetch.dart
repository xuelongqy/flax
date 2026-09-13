/// Standard Fetch environment, installed independently for each Flax session.
library;

import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flax/flax.dart';

import 'src/generated/host_bootstrap.g.dart';

/// Installs Fetch using the session base data types and Streams. Does not manage a cookie jar.
class FlaxFetchPlugin extends FlaxPlugin {
  const FlaxFetchPlugin({this.baseUrl});
  final String? baseUrl;
  @override
  String get id => 'flax.fetch';
  @override
  Set<String> get globals => const {'fetch', 'Headers', 'Request', 'Response'};
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    if (baseUrl != null) {
      final url = Uri.parse(baseUrl!);
      if (!url.hasAuthority || !['http', 'https'].contains(url.scheme)) {
        throw ArgumentError('baseUrl must be an absolute HTTP(S) URL');
      }
    }
    final instance = _FetchHost(context, baseUrl);
    try {
      instance.install();
      return instance;
    } catch (_) {
      instance.dispose();
      rethrow;
    }
  }
}

class _Request {
  bool isCancelled = false;
  final _cancelPending = <void Function()>{};
  HttpClientRequest? request;
  StreamIterator<List<int>>? response;
  void abort() {
    if (isCancelled) return;
    isCancelled = true;
    request?.abort(StateError('Fetch request cancelled'));
    response?.cancel().ignore();
    for (final cancel in _cancelPending.toList()) {
      cancel();
    }
    _cancelPending.clear();
  }

  Future<T> wait<T>(Future<T> future) {
    final result = Completer<T>();
    void cancel() {
      if (!result.isCompleted) {
        result.completeError(StateError('Fetch request cancelled'));
      }
    }

    if (isCancelled) {
      cancel();
    } else {
      _cancelPending.add(cancel);
    }
    future.then(
      (value) {
        _cancelPending.remove(cancel);
        if (!result.isCompleted) result.complete(value);
      },
      onError: (Object error, StackTrace stack) {
        _cancelPending.remove(cancel);
        if (!result.isCompleted) result.completeError(error, stack);
      },
    );
    return result.future;
  }
}

class _FetchHost implements FlaxPluginInstance {
  _FetchHost(this.context, this.baseUrl);
  final FlaxHostContext context;
  final String? baseUrl;
  final _client = HttpClient();
  final _requests = <int, _Request>{};
  final _pending = <int>{};
  FlaxJsObject? _state;
  bool _closed = false;

  void install() {
    context.registerFunction('__flaxFetchCall', (_, args) {
      final operation = (args[0] as FlaxJsString).value;
      if (operation == 'baseUrl') {
        return baseUrl == null
            ? const FlaxJsUndefined()
            : FlaxJsString(baseUrl!);
      }
      if (operation == 'abort') {
        _requests.remove((args[1] as FlaxJsNumber).value.toInt())?.abort();
        return const FlaxJsUndefined();
      }
      if (_closed || context.isClosing) throw StateError('FlaxSessionClosed');
      final id = (args[1] as FlaxJsNumber).value.toInt();
      final requestId = (args[2] as FlaxJsNumber).value.toInt();
      if (!_pending.add(id)) throw ArgumentError('Duplicate Fetch operation');
      try {
        Future<Object?> result;
        switch (operation) {
          case 'open':
            final settings = jsonDecode(
              (args[3] as FlaxJsString).value,
            ) as Map<String, Object?>;
            if (_requests.containsKey(requestId)) {
              throw ArgumentError('Duplicate request');
            }
            final record = _Request();
            _requests[requestId] = record;
            result = _open(record, settings);
          case 'write':
            final record = _record(requestId);
            final bytes = context.runtime.readBytes(args[3] as FlaxJsObject);
            result = record.wait(_write(record, bytes));
          case 'headers':
            final record = _record(requestId);
            result = record.wait(_headers(record));
          case 'read':
            final record = _record(requestId);
            result = record.wait(_read(requestId, record));
          default:
            throw ArgumentError('Unknown Fetch operation: $operation');
        }
        result.then(
          (value) => _settle(id, true, value),
          onError: (Object error, StackTrace stack) =>
              _settle(id, false, error.toString()),
        );
      } catch (error) {
        _settle(id, false, error.toString());
      }
      return const FlaxJsUndefined();
    }, allowClosing: true);
    _state = context.evaluate(
      flaxFetchBootstrap,
      sourceUrl: 'flax:fetch',
    ) as FlaxJsObject;
  }

  _Request _record(int id) {
    final record = _requests[id];
    if (record == null || record.isCancelled) {
      throw StateError('Fetch request cancelled');
    }
    return record;
  }

  Future<Object?> _open(_Request record, Map<String, Object?> settings) async {
    final url = Uri.parse(settings['url'] as String);
    if (!['http', 'https'].contains(url.scheme)) {
      throw ArgumentError('Unsupported URL scheme');
    }
    final opening = _client.openUrl(settings['method'] as String, url);
    // openUrl itself has no per-request cancellation API. Abort as soon as it returns.
    opening.then((request) {
      record.request = request;
      if (record.isCancelled) request.abort();
    }, onError: (Object error) {});
    final request = await record.wait(opening);
    request.followRedirects = false;
    request.contentLength = (settings['length'] as num).toInt();
    for (final pair
        in (settings['headers'] as List<Object?>).cast<List<Object?>>()) {
      request.headers.add(pair[0] as String, pair[1] as String);
    }
    return null;
  }

  Future<Object?> _write(_Request record, Uint8List bytes) async {
    record.request!.add(bytes);
    await record.request!.flush();
    return null;
  }

  Future<Object?> _headers(_Request record) async {
    final response = await record.request!.close();
    if (record.isCancelled) {
      await response.listen((_) {}).cancel();
      throw StateError('Fetch request cancelled');
    }
    record.response = StreamIterator(response);
    final headers = <List<String>>[];
    response.headers.forEach((name, values) {
      for (final value in values) {
        headers.add([name, value]);
      }
    });
    return jsonEncode({
      'status': response.statusCode,
      'statusText': response.reasonPhrase,
      'headers': headers,
    });
  }

  Future<Object?> _read(int id, _Request record) async {
    final iterator = record.response;
    if (iterator == null) throw StateError('Response headers have not arrived');
    while (await iterator.moveNext()) {
      if (iterator.current.isNotEmpty) {
        return Uint8List.fromList(iterator.current);
      }
    }
    _requests.remove(id);
    await iterator.cancel();
    return null;
  }

  void _settle(int id, bool ok, Object? value) {
    if (!_pending.remove(id) || !context.isActive) return;
    context.enqueue(() {
      // Close must win over a completed transport result still waiting for JS.
      if (_closed) return;
      final result = switch (value) {
        Uint8List() => context.runtime.createArrayBuffer(value),
        String() => FlaxJsString(value),
        null => const FlaxJsNull(),
        _ => throw StateError('Invalid Fetch result'),
      };
      try {
        _call('settle', [
          FlaxJsNumber(id.toDouble()),
          FlaxJsBoolean(ok),
          result,
        ]);
      } finally {
        if (result is FlaxJsObject) result.release();
      }
    });
  }

  void _call(String name, List<FlaxJsValue> args) {
    final state = _state;
    if (state == null) return;
    final function = state.getProperty(name) as FlaxJsFunction;
    try {
      final result = function.call(args, thisValue: state);
      if (result is FlaxJsObject) result.release();
    } finally {
      function.release();
    }
  }

  @override
  void close() {
    if (_closed) return;
    _closed = true;
    for (final record in _requests.values) {
      record.abort();
    }
    _requests.clear();
    _pending.clear();
    _client.close(force: true);
    context.enqueue(() => _call('close', const []));
  }

  @override
  void dispose() {
    close();
    _state?.release();
    _state = null;
  }
}
