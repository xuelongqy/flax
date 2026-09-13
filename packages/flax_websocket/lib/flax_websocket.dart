/// Optional session WebSocket host environment.
library;

import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flax/flax.dart';

import 'src/connection.dart';
import 'src/generated/host_bootstrap.g.dart';

/// Installs WebSocket without Fetch. Each connection owns a fresh HTTP client.
class FlaxWebSocketPlugin extends FlaxPlugin {
  const FlaxWebSocketPlugin({this.baseUrl, this.createHttpClient});
  final String? baseUrl;
  final HttpClient Function()? createHttpClient;
  @override
  String get id => 'flax.websocket';
  @override
  Set<String> get globals => const {'WebSocket', 'CloseEvent'};
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    if (baseUrl != null) {
      final url = Uri.parse(baseUrl!);
      if (!url.hasAuthority ||
          !['ws', 'wss', 'http', 'https'].contains(url.scheme) ||
          url.hasFragment ||
          url.userInfo.isNotEmpty) {
        throw ArgumentError(
          'baseUrl must be an absolute WebSocket or HTTP(S) URL',
        );
      }
    }
    final host = _WebSocketHost(context, this);
    try {
      host.install();
      return host;
    } catch (_) {
      host.dispose();
      rethrow;
    }
  }
}

class _WebSocketHost implements FlaxPluginInstance {
  _WebSocketHost(this.context, this.plugin);
  final FlaxHostContext context;
  final FlaxWebSocketPlugin plugin;
  final _connections = <int, FlaxWebSocketConnection>{};
  final _clients = Set<HttpClient>.identity();
  FlaxJsObject? _state;
  bool _closed = false;
  int _pendingMessages = 0, _pendingBytes = 0;

  void install() {
    context.registerFunction('__flaxWebSocketCall', (_, args) {
      final operation = (args[0] as FlaxJsString).value;
      if (operation == 'baseUrl') {
        return plugin.baseUrl == null
            ? const FlaxJsUndefined()
            : FlaxJsString(plugin.baseUrl!);
      }
      final id = (args[1] as FlaxJsNumber).value.toInt();
      if (operation == 'abort') {
        _connections[id]?.abort();
        return const FlaxJsUndefined();
      }
      if (operation == 'beginClose') {
        _connections[id]?.beginClose();
        return const FlaxJsUndefined();
      }
      if (operation == 'close') {
        _connections[id]?.close(
          args[2] is FlaxJsNull
              ? null
              : (args[2] as FlaxJsNumber).value.toInt(),
          (args[3] as FlaxJsString).value,
        );
        return const FlaxJsUndefined();
      }
      if (_closed || context.isClosing) throw StateError('FlaxSessionClosed');
      switch (operation) {
        case 'open':
          if (_connections.containsKey(id)) {
            throw ArgumentError('Duplicate WebSocket');
          }
          final settings = (jsonDecode((args[2] as FlaxJsString).value) as Map)
              .cast<String, Object?>();
          final client = plugin.createHttpClient?.call() ?? HttpClient();
          if (!_clients.add(client)) {
            throw StateError(
              'createHttpClient must return a new client per connection',
            );
          }
          final connection = FlaxWebSocketConnection(
            client,
            (kind, value) => _emit(id, kind, value),
            () {
              _connections.remove(id);
              _clients.remove(client);
            },
          );
          _connections[id] = connection;
          connection.open(settings).ignore();
        case 'send':
          final connection = _connections[id];
          if (connection == null) return const FlaxJsUndefined();
          final value = args[2];
          connection.send(
            value is FlaxJsString
                ? value.value
                : context.runtime.readBytes(value as FlaxJsObject),
          );
        default:
          throw ArgumentError('Unknown WebSocket operation');
      }
      return const FlaxJsUndefined();
    }, allowClosing: true);
    _state = context.evaluate(
      flaxWebSocketBootstrap,
      sourceUrl: 'flax:websocket',
    ) as FlaxJsObject;
  }

  void _emit(int id, String kind, Object? value) {
    if (!context.isActive || _state == null) return;
    final size = value is List<int>
        ? value.length
        : value is String
        ? utf8.encode(value).length
        : 0;
    if (kind == 'message' &&
        (_pendingMessages >= 1024 || _pendingBytes + size > 32 * 1024 * 1024)) {
      _connections[id]?.abort();
      return;
    }
    _pendingMessages++;
    _pendingBytes += size;
    context.enqueue(() {
      _pendingMessages--;
      _pendingBytes -= size;
      if (_closed) return;
      final data = switch (value) {
        Uint8List() => context.runtime.createArrayBuffer(value),
        List<int>() => context.runtime.createArrayBuffer(
          Uint8List.fromList(value),
        ),
        String() => FlaxJsString(value),
        null => const FlaxJsNull(),
        _ => throw StateError('Invalid WebSocket event'),
      };
      try {
        _call('event', [FlaxJsNumber(id.toDouble()), FlaxJsString(kind), data]);
      } finally {
        if (data is FlaxJsObject) data.release();
      }
    });
  }

  void _call(String name, List<FlaxJsValue> arguments) {
    final state = _state;
    if (state == null) return;
    final function = state.getProperty(name) as FlaxJsFunction;
    try {
      final result = function.call(arguments, thisValue: state);
      if (result is FlaxJsObject) result.release();
    } finally {
      function.release();
    }
  }

  @override
  void close() {
    if (_closed) return;
    _closed = true;
    for (final connection in _connections.values.toList()) {
      connection.abort();
    }
    context.enqueue(() => _call('close', const []));
  }

  @override
  void dispose() {
    close();
    _state?.release();
    _state = null;
  }
}
