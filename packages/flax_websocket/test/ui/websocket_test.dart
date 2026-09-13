import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_websocket/flax_websocket.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart';

import 'package:flax_test/flax_test.dart';

import '../support/runtime_tracker.dart';
import '../support/raw_server.dart';

class _Harness extends Harness {
  late RuntimeTracker tracker;
  @override
  FlaxJsRuntime create() {
    tracker = RuntimeTracker();
    runtimes.add(tracker);
    return tracker;
  }
}

Future<HttpServer> echoServer() async {
  final server = await HttpServer.bind('127.0.0.1', 0);
  server.listen((request) async {
    if (request.uri.path == '/delay') {
      await Future<void>.delayed(const Duration(seconds: 1));
    }
    try {
      final peer = await WebSocketTransformer.upgrade(
        request,
        protocolSelector: (protocols) =>
            protocols.contains('chat') ? 'chat' : null,
        compression: CompressionOptions.compressionOff,
      );
      peer.listen((data) {
        if (data == 'server-close') {
          peer.close(3001, 'peer').ignore();
        } else {
          peer.add(data);
        }
      }, onError: (Object _) {});
    } catch (_) {
      request.response.close().ignore();
    }
  });
  return server;
}

void main() {
  setUp(() {
    final old = HttpOverrides.current;
    HttpOverrides.global = null;
    addTearDown(() {
      Flax.registerPlugins([]);
      HttpOverrides.global = old;
    });
  });
  for (final immediateClose in [false, true]) {
    testWidgets('upgrade messages reach JS after open; close=$immediateClose', (
      tester,
    ) async {
      final server = (await tester.runAsync(
        () => RawWebSocketServer.start(
          closeAfterUpgrade: immediateClose,
          frames: [
            0x81,
            7,
            ...ascii.encode('welcome'),
            0x81,
            6,
            ...ascii.encode('second'),
            if (immediateClose) ...[0x88, 2, 3, 232],
          ],
        ),
      ))!;
      addTearDown(server.close);
      final h = _Harness();
      Flax.registerPlugins([
        FlaxWebSocketPlugin(baseUrl: 'ws://127.0.0.1:${server.port}'),
      ]);
      await tester.pumpWidget(h.app());
      await flaxTestRunHostScript(tester, h, '''
        const events=[];
        const ws=new WebSocket('/');
        let finish; const received=new Promise(r=>finish=r);
        ws.onopen=()=>{events.push('open');Promise.resolve().then(()=>events.push('microtask'));};
        ws.onmessage=e=>{events.push(e.data);if(e.data==='second')finish();};
        const closed=new Promise(r=>ws.onclose=()=>{events.push('close');r();});
        await received;
        if($immediateClose)await closed;
        const expected=${immediateClose ? '["open","microtask","welcome","second","close"]' : '["open","microtask","welcome","second"]'};
        if(JSON.stringify(events)!==JSON.stringify(expected))throw Error(JSON.stringify(events));
      ''');
      await tester.pumpWidget(const SizedBox());
      await tester.pumpAndSettle();
      expect(h.errors, isEmpty);
      expect(h.tracker.handlesAtDispose, 0);
    });
  }
  testWidgets('close interrupts a blocked send within the total budget', (
    tester,
  ) async {
    final server = (await tester.runAsync(
      () => RawWebSocketServer.start(pauseAfterUpgrade: true),
    ))!;
    addTearDown(server.close);
    final h = _Harness();
    Flax.registerPlugins([
      FlaxWebSocketPlugin(baseUrl: 'ws://127.0.0.1:${server.port}'),
    ]);
    await tester.pumpWidget(h.app());
    final baseline = h.tracker.handles;
    await flaxTestRunHostScript(tester, h, r'''
      const controller=new AbortController();
      const ws=new WebSocket('/', {signal:controller.signal});
      const events=[];
      ws.onerror=()=>events.push('error');
      const closed=new Promise(r=>ws.onclose=e=>{events.push(e.code,e.wasClean);r();});
      await new Promise(r=>ws.onopen=r);
      ws.send(new Uint8Array(16*1024*1024));ws.send('queued');
      ws.close(1000);ws.close();
      let timer;
      try {
        await Promise.race([closed,new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('close deadline')),7000);})]);
      } finally { clearTimeout(timer); }
      if(ws.readyState!==3||JSON.stringify(events)!=='["error",1006,false]')throw Error(JSON.stringify(events));
      controller.abort();
    ''');
    expect(h.tracker.hostOperations['__flaxWebSocketCall:beginClose'], 1);
    expect(h.tracker.hostOperations['__flaxWebSocketCall:send'], 1);
    expect(h.tracker.hostOperations['__flaxWebSocketCall:close'] ?? 0, 0);
    expect(h.tracker.hostOperations['__flaxWebSocketCall:abort'] ?? 0, 0);
    stdout.writeln('WebSocket blocked close: ${h.tracker.hostOperations}');
    expect(h.tracker.handles, baseline);
    await tester.pumpWidget(const SizedBox());
    await tester.pumpAndSettle();
    expect(h.errors, isEmpty);
    expect(h.tracker.handlesAtDispose, 0);
  });
  testWidgets('WebSocket is optional; MessageEvent is a base type', (
    tester,
  ) async {
    final h = _Harness();
    await tester.pumpWidget(h.app());
    expect(h.errors, isEmpty);
    expect(
      h.number(
        'typeof WebSocket === "undefined" && typeof MessageEvent === "function" ? 1 : 0',
      ),
      1,
    );
    await tester.pumpWidget(const SizedBox());
    await tester.pumpAndSettle();
    expect(h.tracker.handlesAtDispose, 0);
  });
  testWidgets('pinned WPT protocol subset and repeated connection resources', (
    tester,
  ) async {
    final server = await tester.runAsync(echoServer);
    addTearDown(() => server!.close(force: true));
    final h = _Harness();
    Flax.registerPlugins([
      FlaxWebSocketPlugin(baseUrl: 'ws://127.0.0.1:${server!.port}'),
    ]);
    await tester.pumpWidget(h.app());
    h.execute(flaxTestFixtureSource('websocket_wpt'));
    expect(h.number('wptResults.length'), 4);
    final baseline = h.tracker.handles;
    await flaxTestRunHostScript(tester, h, r'''
      for(let i=0;i<20;i++) {
        const ws=new WebSocket('/echo');
        await new Promise(r=>ws.onopen=r);
        const done=new Promise((r,j)=>{ws.onerror=()=>j(Error('connection'));ws.onclose=e=>e.wasClean?r():j(Error('close'));});
        ws.close(1000);await done;
      }
    ''');
    expect(h.tracker.handles, baseline);
    stdout.writeln(
      'WebSocket repeated connections: handles=$baseline -> ${h.tracker.handles}, bridge=${h.tracker.hostOperations}',
    );
    // Standard properties are local reads: no per-property bridge calls.
    final calls = h.tracker.hostCalls['__flaxWebSocketCall'] ?? 0;
    h.execute("globalThis.probe = new WebSocket('/echo'); undefined;");
    final afterOpen = h.tracker.hostCalls['__flaxWebSocketCall'] ?? 0;
    h.execute(
      "for(let i=0;i<100;i++){probe.readyState;probe.url;probe.protocol;probe.extensions;probe.binaryType;} undefined;",
    );
    expect(h.tracker.hostCalls['__flaxWebSocketCall'], afterOpen);
    expect(afterOpen, calls + 1);
    await tester.pumpWidget(const SizedBox());
    await tester.pumpAndSettle();
    expect(h.tracker.handlesAtDispose, 0);
  });
  testWidgets('real messages, copied views, Blob order, events and clean close', (
    tester,
  ) async {
    final server = await tester.runAsync(echoServer);
    addTearDown(() => server!.close(force: true));
    final h = _Harness();
    Flax.registerPlugins([
      FlaxWebSocketPlugin(baseUrl: 'http://127.0.0.1:${server!.port}/'),
    ]);
    await tester.pumpWidget(h.app());
    await flaxTestRunHostScript(tester, h, r'''
      const check=(v,m)=>{if(!v)throw Error(m);};
      check(typeof fetch==='undefined','Fetch must remain absent');
      const ws=new WebSocket('/echo',['chat'],{headers:{Authorization:'local'},pingInterval:1000});
      check(!('bufferedAmount' in ws),'bufferedAmount is deferred');
      const log=[];let settled; const done=new Promise((r,j)=>{settled=r;ws.onerror=()=>j(Error('socket error'));});
      ws.onclose=e=>{check(e.wasClean&&e.code===1000,'clean close');check(ws.readyState===3,'closed first');settled();};
      ws.onmessage=async e=>{
        log.push(typeof e.data==='string'?e.data:await e.data.text());
        if(log.length===4)ws.close(1000,'done');
      };
      await new Promise(r=>ws.onopen=r);
      check(ws.protocol==='chat'&&ws.extensions===''&&ws.readyState===1,'open metadata');
      const bytes=new Uint8Array([0,65,66,0]);
      ws.send(new Blob(['first']));ws.send('中文🙂');ws.send(bytes.subarray(1,3));bytes.fill(0);ws.send('');
      check(bytes.byteLength===4,'send must not detach');
      await done;check(log.join('|')==='first|中文🙂|AB|','ordered messages');
    ''');
    expect(h.errors, isEmpty);
    stdout.writeln(
      'WebSocket copies: upload=${h.tracker.copiedFromJs}/${h.tracker.byteReads}, download=${h.tracker.copiedToJs}/${h.tracker.byteWrites}; bridge=${h.tracker.hostOperations}',
    );
    await tester.pumpWidget(const SizedBox());
    await tester.pumpAndSettle();
    expect(h.tracker.handlesAtDispose, 0);
  });
  testWidgets(
    'abort and timeout cancel actual connections; other session survives',
    (tester) async {
      final server = await tester.runAsync(echoServer);
      addTearDown(() => server!.close(force: true));
      final a = _Harness(), b = _Harness();
      Flax.registerPlugins([
        FlaxWebSocketPlugin(baseUrl: 'ws://127.0.0.1:${server!.port}'),
      ]);
      Widget views(bool both) => MaterialApp(
        home: Row(
          children: [
            if (both) Expanded(key: const ValueKey('a'), child: a.view()),
            Expanded(key: const ValueKey('b'), child: b.view()),
          ],
        ),
      );
      await tester.pumpWidget(views(true));
      await flaxTestRunHostScript(tester, a, r'''
      for(const mode of ['connecting','open','timeout']){
        const controller=new AbortController();
        const ws=new WebSocket(mode==='open'?'/echo':'/delay',{signal:controller.signal,handshakeTimeout:mode==='timeout'?10:1000});
        const done=new Promise((r,j)=>{ws.onclose=e=>e.code===1006&&!e.wasClean?r():j(Error('bad abort close'));});
        if(mode==='open')await new Promise(r=>ws.onopen=r);
        if(mode!=='timeout')controller.abort({private:'reason'});
        await done;
      }
      globalThis.live=new WebSocket('/echo');await new Promise(r=>live.onopen=r);
    ''');
      await flaxTestRunHostScript(
        tester,
        b,
        "globalThis.live=new WebSocket('/echo');await new Promise(r=>live.onopen=r);",
      );
      await tester.pumpWidget(views(false));
      await tester.pumpAndSettle();
      expect(a.tracker.isDisposed, isTrue);
      expect(a.tracker.handlesAtDispose, 0);
      await flaxTestRunHostScript(
        tester,
        b,
        "const reply=new Promise(r=>live.onmessage=e=>r(e.data));live.send('alive');if(await reply!=='alive')throw Error('isolation');live.close();",
      );
      await tester.pumpWidget(const SizedBox());
      await tester.pumpAndSettle();
      expect(b.tracker.handlesAtDispose, 0);
      expect(a.errors, isEmpty);
      expect(b.errors, isEmpty);
    },
  );
  testWidgets(
    'plugin list snapshot, explicit empty list and factory rollback',
    (tester) async {
      final a = _Harness();
      Flax.registerPlugins([
        FlaxWebSocketPlugin(
          createHttpClient: () => throw StateError('factory failed'),
        ),
      ]);
      final session = FlaxSession(
        createRuntime: a.create,
        source: source,
        bindings: registry,
        onError: (e, _) => a.errors.add(e),
      );
      Flax.registerPlugins([]);
      await tester.pumpWidget(
        MaterialApp(home: FlaxView.session(session: session)),
      );
      expect(a.number("typeof WebSocket === 'function' ? 1 : 0"), 1);
      expect(
        () => a.execute("new WebSocket('ws://127.0.0.1:1/');"),
        throwsA(isA<FlaxJsException>()),
      );
      await tester.pumpWidget(const SizedBox());
      await tester.pumpAndSettle();
      final closing = session.close();
      await tester.pumpAndSettle();
      await closing;
      expect(a.tracker.handlesAtDispose, 0);
    },
  );
  testWidgets('handshake headers and binaryType at dispatch', (tester) async {
    final seen = Completer<HttpHeaders>();
    final server = await tester.runAsync(() async {
      final server = await HttpServer.bind('127.0.0.1', 0);
      server.listen((request) async {
        if (!seen.isCompleted) seen.complete(request.headers);
        final peer = await WebSocketTransformer.upgrade(
          request,
          compression: CompressionOptions.compressionOff,
        );
        peer.listen((_) {
          peer.add([0, 1, 255]);
        }, onError: (Object _) {});
      });
      return server;
    });
    addTearDown(() => server!.close(force: true));
    final h = _Harness();
    Flax.registerPlugins([
      FlaxWebSocketPlugin(baseUrl: 'ws://127.0.0.1:${server!.port}'),
    ]);
    await tester.pumpWidget(h.app());
    await flaxTestRunHostScript(tester, h, r'''
      const ws=new WebSocket('/',{headers:{Authorization:'Bearer test',Cookie:['a=1','b=2'],Origin:'app://flax'}});
      await new Promise(r=>ws.onopen=r);ws.binaryType='arraybuffer';
      const result=new Promise(r=>ws.onmessage=e=>r(e.data));ws.send('binary');
      const data=await result;if(!(data instanceof ArrayBuffer)||new Uint8Array(data).join()!=='0,1,255')throw Error('binary');
      const close=new Promise(r=>ws.onclose=r);ws.close();await close;
    ''');
    final headers = await seen.future;
    expect(headers.value('authorization'), 'Bearer test');
    expect(headers.value('origin'), 'app://flax');
    expect(
      headers['cookie']!.join(','),
      allOf(contains('a=1'), contains('b=2')),
    );
    expect(base64Decode(headers.value('sec-websocket-key')!), hasLength(16));
    await tester.pumpWidget(const SizedBox());
    await tester.pumpAndSettle();
    expect(h.tracker.handlesAtDispose, 0);
  });
}
