import 'dart:async';
import 'dart:convert';
import 'dart:io';

/// Loopback-only endpoints for examples declaring Fetch or WebSocket modules.
final class ExampleNetworkServer {
  ExampleNetworkServer._(this._server) {
    _server.listen(_handle);
  }

  static Future<ExampleNetworkServer?> forExample(String project) async {
    final manifest = File('$project/js/flax.modules.json');
    if (!manifest.existsSync()) return null;
    final modules =
        (jsonDecode(manifest.readAsStringSync()) as Map)['modules'] as List;
    if (!modules.any(
      (entry) => const {
        '@flax/fetch',
        '@flax/websocket',
      }.contains((entry as Map)['specifier']),
    )) {
      return null;
    }
    return start();
  }

  static Future<ExampleNetworkServer> start() async => ExampleNetworkServer._(
    await HttpServer.bind(InternetAddress.loopbackIPv4, 0),
  );

  final HttpServer _server;
  final _sockets = <WebSocket>{};
  final _delays = <Timer>{};
  Future<void>? _closing;

  String get baseUrl => 'http://127.0.0.1:${_server.port}/';

  Future<void> _handle(HttpRequest request) async {
    if (_closing != null) {
      await _respond(request, HttpStatus.serviceUnavailable, {
        'error': 'Example stopped',
      });
      return;
    }
    if (request.uri.path == '/socket' &&
        WebSocketTransformer.isUpgradeRequest(request)) {
      try {
        final socket = await WebSocketTransformer.upgrade(request);
        if (_closing != null) {
          await socket.close(WebSocketStatus.goingAway);
          return;
        }
        _sockets.add(socket);
        socket.listen(
          socket.add,
          onDone: () => _sockets.remove(socket),
          onError: (Object _) => _sockets.remove(socket),
          cancelOnError: true,
        );
      } on HttpException {
        // A client can leave while the upgrade is in flight.
      } on SocketException {
        // A client can leave while the upgrade is in flight.
      }
    } else if (request.uri.path == '/slow') {
      late Timer delay;
      delay = Timer(const Duration(seconds: 5), () {
        _delays.remove(delay);
        unawaited(
          _respond(request, HttpStatus.ok, {
            'message': 'The delayed request finished.',
          }),
        );
      });
      _delays.add(delay);
    } else {
      final found = request.uri.path == '/status';
      await _respond(
        request,
        found ? HttpStatus.ok : HttpStatus.notFound,
        found
            ? {
                'message': 'Hello from the Dart example server',
                'method': request.method,
                'path': request.uri.path,
                'endpoints': ['/status', '/slow', '/socket'],
              }
            : {'error': 'Not found'},
      );
    }
  }

  Future<void> _respond(
    HttpRequest request,
    int status,
    Map<String, Object> body,
  ) async {
    try {
      request.response
        ..statusCode = status
        ..headers.contentType = ContentType.json
        ..write(jsonEncode(body));
      await request.response.close();
    } on HttpException {
      // Cancellation can close the connection before the response is written.
    } on SocketException {
      // Cancellation can close the connection before the response is written.
    }
  }

  Future<void> close() => _closing ??= _close();

  Future<void> _close() async {
    for (final delay in _delays) {
      delay.cancel();
    }
    _delays.clear();
    await _server.close(force: true);
    await Future.wait([
      for (final socket in _sockets.toList())
        socket.close(WebSocketStatus.goingAway, 'Example stopped'),
    ]);
    _sockets.clear();
  }
}
