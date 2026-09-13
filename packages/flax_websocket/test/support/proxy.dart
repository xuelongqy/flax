import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

// A real test proxy. Parsing is confined to the HTTP request header; upgraded
// bytes pass unchanged in both directions, including TLS and half-closes.
class TestProxy {
  TestProxy._(this.server, this.targetPort, this.requireAuthentication) {
    server.listen(_accept);
  }
  final ServerSocket server;
  final int targetPort;
  final bool requireAuthentication;
  final sockets = <Socket>[];
  int requests = 0, challenges = 0;
  int get port => server.port;
  static Future<TestProxy> open(
    int targetPort, {
    bool authentication = false,
  }) async => TestProxy._(
    await ServerSocket.bind('127.0.0.1', 0),
    targetPort,
    authentication,
  );
  Future<void> _accept(Socket downstream) async {
    sockets.add(downstream);
    final input = StreamIterator(downstream);
    final pending = <int>[];
    try {
      while (true) {
        var end = -1;
        while (end < 0) {
          if (!await input.moveNext()) return;
          pending.addAll(input.current);
          if (pending.length > 65536) {
            throw StateError('Oversized proxy header');
          }
          end = latin1.decode(pending).indexOf('\r\n\r\n');
        }
        final header = latin1.decode(pending.sublist(0, end));
        final remainder = Uint8List.fromList(pending.sublist(end + 4));
        pending.clear();
        requests++;
        if (requireAuthentication &&
            !header.toLowerCase().contains(
              'proxy-authorization: basic ${base64Encode(utf8.encode('user:pass')).toLowerCase()}',
            )) {
          challenges++;
          downstream.write(
            'HTTP/1.1 407 Proxy Authentication Required\r\nProxy-Authenticate: Basic realm="local"\r\nContent-Length: 0\r\n\r\n',
          );
          await downstream.flush();
          continue;
        }
        final upstream = await Socket.connect('127.0.0.1', targetPort);
        sockets.add(upstream);
        if (header.startsWith('CONNECT ')) {
          downstream.write('HTTP/1.1 200 Connection Established\r\n\r\n');
          await downstream.flush();
        } else {
          final lines = header.split('\r\n');
          final request = lines.first.split(' ');
          final url = Uri.parse(request[1]);
          request[1] = url.replace(scheme: '', host: '', port: 0).toString();
          // The origin-form request target must have no authority.
          request[1] =
              '${url.path.isEmpty ? '/' : url.path}${url.hasQuery ? '?${url.query}' : ''}';
          lines[0] = request.join(' ');
          upstream.write('${lines.join('\r\n')}\r\n\r\n');
          await upstream.flush();
        }
        Stream<List<int>> outgoing() async* {
          if (remainder.isNotEmpty) yield remainder;
          while (await input.moveNext()) {
            yield input.current;
          }
        }

        await Future.wait([
          upstream.addStream(outgoing()).then((_) => upstream.close()),
          downstream.addStream(upstream).then((_) => downstream.close()),
        ]);
        return;
      }
    } catch (_) {
      downstream.destroy();
    } finally {
      await input.cancel();
    }
  }

  Future<void> close() async {
    for (final socket in sockets) {
      socket.destroy();
    }
    await server.close();
  }
}
