import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:web_socket_channel/web_socket_channel.dart';

/// Sends the HTTP upgrade and supplied frames in one write, without an HTTP server
/// splitting the response. A paused peer also exercises real socket backpressure.
class RawWebSocketServer {
  RawWebSocketServer._(this.server);
  final ServerSocket server;
  final _sockets = <Socket>[];
  final _subscriptions = <StreamSubscription<List<int>>>[];
  int get port => server.port;

  static Future<RawWebSocketServer> start({
    List<int> frames = const [],
    bool pauseAfterUpgrade = false,
    bool closeAfterUpgrade = false,
  }) async {
    final fixture = RawWebSocketServer._(
      await ServerSocket.bind('127.0.0.1', 0),
    );
    fixture.server.listen((socket) {
      fixture._sockets.add(socket);
      var request = '', upgraded = false;
      late StreamSubscription<List<int>> subscription;
      subscription = socket.listen((bytes) {
        if (upgraded) return;
        request += latin1.decode(bytes);
        if (!request.contains('\r\n\r\n')) return;
        upgraded = true;
        final key = RegExp(
          r'Sec-WebSocket-Key: ([^\r]+)',
          caseSensitive: false,
        ).firstMatch(request)!.group(1)!;
        socket.add([
          ...ascii.encode(
            'HTTP/1.1 101 Switching Protocols\r\n'
            'Upgrade: websocket\r\nConnection: Upgrade\r\n'
            'Sec-WebSocket-Accept: ${WebSocketChannel.signKey(key)}\r\n\r\n',
          ),
          ...frames,
        ]);
        if (closeAfterUpgrade) socket.close().ignore();
        if (pauseAfterUpgrade) subscription.pause();
      }, onError: (Object _) {});
      fixture._subscriptions.add(subscription);
    });
    return fixture;
  }

  Future<void> close() async {
    for (final socket in _sockets) {
      socket.destroy();
    }
    for (final subscription in _subscriptions) {
      await subscription.cancel();
    }
    await server.close();
  }
}
