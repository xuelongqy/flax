import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flax/flax.dart';
import 'package:flax_fetch/flax_fetch.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart';

import 'package:flax_test/flax_test.dart';

import '../support/runtime_tracker.dart';

Future<void> runScript(WidgetTester tester, Harness h, String script) async {
  h.execute(
    'globalThis.hostResult = null; (async () => {$script})().then(() => hostResult = "ok", e => hostResult = String(e.stack || e)); undefined;',
  );
  h.execute('queueMicrotask(() => {}); undefined;');
  for (var i = 0; i < 500; i++) {
    await tester.pump(const Duration(milliseconds: 10));
    final value = h.runtime.getGlobal('hostResult');
    if (value is FlaxJsString) {
      expect(value.value, 'ok');
      return;
    }
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
  }
  fail(
    'Host script did not complete at ${(h.runtime.getGlobal('hostStage') as FlaxJsString).value}: ${h.errors}',
  );
}

void main() {
  tearDown(() => Flax.registerPlugins([]));
  setUp(() {
    final previous = HttpOverrides.current;
    HttpOverrides.global = null;
    addTearDown(() => HttpOverrides.global = previous);
  });
  for (final name in [
    'emptyChunks',
    'streamOwnership',
    'disturbedInput',
    'bodyUsed',
    'requestTransfer',
    'reusedBuffer',
    'cancellationAndErrors',
  ]) {
    testWidgets('Body stream contract: $name', (tester) async {
      final h = _TrackedHarness();
      await tester.pumpWidget(
        MaterialApp(
          home: FlaxView(
            createRuntime: h.create,
            source: source,
            bindings: registry,
            plugins: const [FlaxFetchPlugin()],
            onError: (e, _) => h.errors.add(e),
          ),
        ),
      );
      h.execute(flaxTestFixtureSource('host_body'));
      await runScript(
        tester,
        h,
        'globalThis.hostStage = "$name"; await hostBodyCases.$name();',
      );
      expect(h.errors, isEmpty);
      await tester.pumpWidget(const SizedBox());
      for (var i = 0; i < 4; i++) {
        await tester.pump(const Duration(milliseconds: 1));
      }
      await tester.pumpAndSettle();
      expect(h.tracker.isDisposed, isTrue);
      expect(h.tracker.handlesAtDispose, 0);
    });
  }
  testWidgets(
    'abort listeners survive real JS collection and release after removal',
    (tester) async {
      final h = _TrackedHarness();
      await tester.pumpWidget(h.app());
      h.execute(flaxTestFixtureSource('host_body'));
      h.execute('prepareAbortProbes(); undefined;');
      Future<void> collect() async {
        h.runtime.drainMicrotasks();
        h.execute(
          '${flaxTestJsGarbagePressure}queueMicrotask(()=>{}); undefined;',
        );
        await tester.pumpAndSettle();
      }

      for (var i = 0; i < 30; i++) {
        await collect();
        if (h.number(
              'abortProbes.filter(p => !["active", "onabort"].includes(p.mode)).every(p => p.weak.deref() === undefined) ? 1 : 0',
            ) ==
            1) {
          break;
        }
      }
      h.execute('checkAbortProbes(); undefined;');
      for (var i = 0; i < 30; i++) {
        await collect();
        if (h.number(
              'abortProbes.every(p => p.weak.deref() === undefined) ? 1 : 0',
            ) ==
            1) {
          break;
        }
      }
      expect(
        h.number(
          'abortProbes.every(p => p.weak.deref() === undefined) ? 1 : 0',
        ),
        1,
      );
      expect(h.errors, isEmpty);
      await tester.pumpWidget(const SizedBox());
      for (var i = 0; i < 4; i++) {
        await tester.pump(const Duration(milliseconds: 1));
      }
      await tester.pumpAndSettle();
      expect(h.tracker.isDisposed, isTrue);
      expect(h.tracker.handlesAtDispose, 0);
    },
  );
  testWidgets('Fetch preserves base objects created before installation', (
    tester,
  ) async {
    final h = _TrackedHarness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: h.create,
          source: source,
          bindings: registry,
          plugins: const [_IdentityFetch()],
          onError: (e, _) => h.errors.add(e),
        ),
      ),
    );
    stdout.writeln(
      'Base/Fetch startup: ${h.tracker.evaluationMicroseconds}; calls=${h.tracker.hostCalls}; handles=${h.tracker.handles}',
    );
    await runScript(tester, h, r'''
      globalThis.hostStage='base identity';
      if (![Blob,File,FormData,ReadableStream,TransformStream,TextEncoderStream].every((c,i)=>c===originals[i])) throw Error('Constructors replaced');
      if (await new Response(earlyBlob).text() !== 'early') throw Error('Blob');
      if (new Response(earlyStream).body !== earlyStream) throw Error('Stream identity');
      const form=await new Response(earlyForm).formData();
      if (!(form instanceof FormData) || !(form.get('file') instanceof File)) throw Error('Form identity');
    ''');
    expect(h.errors, isEmpty);
    await tester.pumpWidget(const SizedBox());
    await tester.pump();
    await tester.pumpAndSettle();
    expect(h.tracker.isDisposed, isTrue);
    expect(h.tracker.handlesAtDispose, 0);
  });

  testWidgets('base host exists without Fetch and preserves task checkpoints', (
    tester,
  ) async {
    final h = _TrackedHarness();
    await tester.pumpWidget(h.app());
    expect(h.errors, isEmpty);
    stdout.writeln(
      'Base-only startup: ${h.tracker.evaluationMicroseconds}; calls=${h.tracker.hostCalls}; handles=${h.tracker.handles}',
    );
    await runScript(tester, h, r'''
      function check(value, message) { globalThis.hostStage = message; if (!value) throw Error(message); }
      check(typeof fetch === 'undefined', 'Fetch must be opt-in');
      check([typeof Headers, typeof Request, typeof Response].every(x => x === 'undefined'), 'HTTP globals absent');
      const blob = new Blob(['base']); const file = new File([blob], 'base.txt');
      const form = new FormData(); form.append('file', file);
      check(form.get('file') === file && await blob.text() === 'base', 'base data');
      const view = new Uint8Array(16); const reader = blob.stream().getReader({mode:'byob'});
      const result = await reader.read(view);
      check(view.byteLength === 0 && new TextDecoder().decode(result.value) === 'base', 'base BYOB');
      await reader.cancel();
      const textStream = new ReadableStream({start(c) {c.enqueue('中文');c.close();}})
        .pipeThrough(new TextEncoderStream()).pipeThrough(new TextDecoderStream());
      const textReader = textStream.getReader();
      check((await textReader.read()).value === '中文', 'base encoding streams');
      await textReader.cancel();
      let pulls=0, streamCancelled=false;
      const demand=new ReadableStream({pull(c){pulls++;c.enqueue(7);},cancel(){streamCancelled=true;}},{highWaterMark:0});
      await Promise.resolve();check(pulls===0,'no eager pull');
      const demandReader=demand.getReader();check((await demandReader.read()).value===7 && pulls===1,'demand pull');
      await demandReader.cancel();check(streamCancelled,'base stream cancellation');
      const streamError={};const failed=new ReadableStream({start(c){c.error(streamError);}}).getReader();
      let caught;try{await failed.read();}catch(e){caught=e;}check(caught===streamError,'base stream error');failed.releaseLock();


      check(typeof window === 'undefined' && typeof process === 'undefined', 'No fake platform');
      check(new URL('../b?x=1&x=2', 'https://example.com/a/c').searchParams.getAll('x').join() === '1,2', 'URL');
      check(new TextDecoder('gbk').decode(new Uint8Array([0xc4, 0xe3, 0xba, 0xc3])) === '你好', 'full encoding');
      check(new TextDecoder().decode(new TextEncoder().encode('中文🌱')) === '中文🌱', 'UTF-8');
      check(atob(btoa('\x00\xff')) === '\x00\xff', 'base64');
      const order = [];
      const cancelled = setTimeout(() => order.push('cancelled'), 0); clearInterval(cancelled);
      await new Promise(resolve => {
        setTimeout((x) => { order.push(x); queueMicrotask(() => order.push('micro')); }, 0, 'timer');
        setTimeout(() => { order.push('last'); resolve(); }, 5);
        Promise.resolve().then(() => order.push('promise'));
      });
      check(order.join() === 'promise,timer,micro,last', order.join());
      const controller = new AbortController();
      const reason = {}; const combined = AbortSignal.any([controller.signal]);
      controller.abort(reason); check(combined.reason === reason, 'abort identity');
      let calls = 0; const target = new EventTarget();
      target.addEventListener('x', event => { calls++; event.preventDefault(); }, {once:true});
      check(!target.dispatchEvent(new Event('x', {cancelable:true})), 'cancel event');
      target.dispatchEvent(new Event('x')); check(calls === 1, 'once');
      let ticks=0;await new Promise(resolve=>{const id=setInterval(()=>{if(++ticks===3){clearTimeout(id);resolve();}},1);});
      check(ticks===3,'interval clears with shared ID pool');
      const timeout=AbortSignal.timeout(2);await new Promise(resolve=>timeout.addEventListener('abort',resolve));
      check(timeout.reason instanceof DOMException && timeout.reason.name==='TimeoutError','timeout reason');
      check(new DOMException('invalid','SyntaxError').code===12,'DOMException codes');
      let invalid;try{atob('!');}catch(e){invalid=e;}
      check(invalid instanceof DOMException && invalid.name==='InvalidCharacterError','base64 exception identity');
      const before=performance.now();await new Promise(resolve=>setTimeout(resolve,2));check(performance.now()>=before,'monotonic clock');
      queueMicrotask(()=>{throw Error('microtask fixture');});
      setTimeout(()=>{throw Error('timer fixture');},0);
      await new Promise(resolve=>setTimeout(resolve,5));
    ''');
    expect(
      h.errors.map((e) => e.toString()).join(),
      contains('microtask fixture'),
    );
    expect(h.errors.map((e) => e.toString()).join(), contains('timer fixture'));
    expect(h.errors.length, 2);
    await tester.pumpWidget(const SizedBox());
    await tester.pump();
    expect(h.runtimes.single.isDisposed, isTrue);
  });

  testWidgets('plugin snapshots, replacement, isolation and reverse cleanup', (
    tester,
  ) async {
    final log = <String>[];
    final a = _ProbePlugin('a', log);
    final b = _ProbePlugin('b', log);
    Flax.registerPlugins([a]);
    final h = Harness();
    final session = FlaxSession(
      createRuntime: h.create,
      source: source,
      bindings: registry,
      onError: (e, _) => h.errors.add(e),
    );
    Flax.registerPlugins([b]);
    await tester.pumpWidget(
      MaterialApp(
        home: Row(
          children: [
            Expanded(child: FlaxView.session(session: session)),
            const SizedBox(),
          ],
        ),
      ),
    );
    expect(h.errors, isEmpty);
    expect(log, ['install:a']);
    expect(h.number('probe_a()'), 1);
    await tester.pumpWidget(
      MaterialApp(
        home: Row(
          children: [
            Expanded(child: FlaxView.session(session: session)),
            const SizedBox(),
          ],
        ),
      ),
    );
    expect(log, ['install:a']);
    final second = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: Row(
          children: [
            Expanded(child: FlaxView.session(session: session)),
            Expanded(child: second.view()),
          ],
        ),
      ),
    );
    expect(second.errors, isEmpty);
    expect(log, ['install:a', 'install:b']);
    expect(second.number('probe_b()'), 1);
    var closed = false;
    unawaited(session.close().then((_) => closed = true));
    await tester.pump();
    expect(closed, isFalse);
    expect(
      () => h.runtime.evaluate('probe_a()'),
      throwsA(isA<FlaxJsException>()),
    );
    expect(second.number('probe_b()'), 2);
    await tester.pumpWidget(const SizedBox());
    for (var i = 0; i < 4; i++) {
      await tester.pump(const Duration(milliseconds: 1));
    }
    expect(closed, isTrue);
    expect(log.where((e) => e == 'dispose:a').length, 1);
    expect(log.where((e) => e == 'dispose:b').length, 1);
    expect(
      h.runtimes.single.isDisposed && second.runtimes.single.isDisposed,
      isTrue,
    );
  });

  testWidgets(
    'explicit plugin lists replace defaults and snapshot caller lists',
    (tester) async {
      final log = <String>[];
      Flax.registerPlugins([_ProbePlugin('default', log)]);
      final selected = <FlaxPlugin>[_ProbePlugin('selected', log)];
      final h = Harness();
      final empty = Harness();
      final session = FlaxSession(
        createRuntime: h.create,
        source: source,
        bindings: registry,
        plugins: selected,
        onError: (e, _) => h.errors.add(e),
      );
      selected.clear();
      expect(() => session.plugins.clear(), throwsUnsupportedError);
      await tester.pumpWidget(
        MaterialApp(
          home: Row(
            children: [
              Expanded(child: FlaxView.session(session: session)),
              Expanded(
                child: FlaxView(
                  createRuntime: empty.create,
                  source: source,
                  bindings: registry,
                  plugins: const [],
                  onError: (e, _) => empty.errors.add(e),
                ),
              ),
            ],
          ),
        ),
      );
      expect(log, ['install:selected']);
      expect(h.number('probe_selected()'), 1);
      expect(empty.runtime.getGlobal('probe_default'), isA<FlaxJsUndefined>());
      expect(empty.runtime.getGlobal('fetch'), isA<FlaxJsUndefined>());
      expect(empty.number('performance.now()'), greaterThanOrEqualTo(0));
      expect([...h.errors, ...empty.errors], isEmpty);
      await tester.pumpWidget(const SizedBox());
      await tester.pumpAndSettle();
      final closed = session.close();
      await tester.pumpAndSettle();
      await closed;
      expect(log, ['install:selected', 'close:selected', 'dispose:selected']);
    },
  );

  testWidgets('duplicate globals and partial installation fail with cleanup', (
    tester,
  ) async {
    final log = <String>[];
    expect(
      () => Flax.registerPlugins([
        _ProbePlugin('x', log),
        _ProbePlugin('x', log),
      ]),
      throwsArgumentError,
    );
    final h = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: h.create,
          source: source,
          bindings: registry,
          plugins: [
            _ProbePlugin('a', log),
            _ProbePlugin('bad', log, fail: true),
          ],
          onError: (e, _) => h.errors.add(e),
        ),
      ),
    );
    expect(log, [
      'install:a',
      'install:bad',
      'rollback:bad',
      'close:a',
      'dispose:a',
    ]);
    expect(h.runtimes.single.isDisposed, isTrue);
    expect(h.errors.single.toString(), contains('install failure'));
    for (final name in [
      'console',
      'Blob',
      'ReadableStream',
      '__flaxBindings',
      '__flaxMount',
    ]) {
      final collision = Harness();
      await tester.pumpWidget(
        MaterialApp(
          home: FlaxView(
            createRuntime: collision.create,
            source: source,
            bindings: registry,
            plugins: [_ProbePlugin('console', log, global: name)],
            onError: (e, _) => collision.errors.add(e),
          ),
        ),
      );
      expect(
        collision.errors.single.toString(),
        contains('Conflicting host global'),
      );
    }
  });

  testWidgets(
    'Fetch streams, binary, form data, redirects and real cancellation',
    (tester) async {
      final server = await tester.runAsync(
        () => HttpServer.bind(InternetAddress.loopbackIPv4, 0),
      );
      final requests = <String>[];
      await tester.runAsync(() async {
        server!.listen((request) async {
          requests.add(request.uri.path);
          try {
            switch (request.uri.path) {
              case '/redirect':
                request.response.statusCode = 302;
                request.response.headers.set('location', '/json');
              case '/redirect-post':
              case '/redirect-stream':
                await request.drain<void>();
                request.response.statusCode =
                    request.uri.path == '/redirect-post' ? 303 : 307;
                request.response.headers.set('location', '/inspect');
              case '/cross-origin':
                request.response.statusCode = 302;
                request.response.headers.set(
                  'location',
                  'http://localhost:${server.port}/inspect',
                );
              case '/inspect':
                final body = await utf8.decoder.bind(request).join();
                request.response.headers.contentType = ContentType.json;
                request.response.write(
                  jsonEncode({
                    'method': request.method,
                    'body': body,
                    'authorization': request.headers.value('authorization'),
                    'cookie': request.headers.value('cookie'),
                  }),
                );
              case '/disconnect':
                final socket = await request.response.detachSocket(
                  writeHeaders: false,
                );
                socket.add(
                  ascii.encode(
                    'HTTP/1.1 200 OK\r\nContent-Length: 100\r\n\r\nx',
                  ),
                );
                await socket.flush();
                socket.destroy();
                return;
              case '/json':
                request.response.headers.contentType = ContentType.json;
                request.response.headers.add('set-cookie', 'session=ignored');
                request.response.write(
                  jsonEncode({
                    'ok': true,
                    'cookie': request.headers.value('cookie'),
                  }),
                );
              case '/echo':
                request.response.headers.set(
                  'content-type',
                  request.headers.contentType?.toString() ??
                      'application/octet-stream',
                );
                await for (final chunk in request) {
                  request.response.add(chunk);
                }
              case '/large':
                for (var i = 0; i < 64; i++) {
                  request.response.add(List<int>.filled(65536, 42));
                  await request.response.flush();
                }
              case '/slow':
                request.response.headers.contentType = ContentType.binary;
                request.response.add([1, 2, 3]);
                await request.response.flush();
                await Future<void>.delayed(const Duration(seconds: 1));
                request.response.add([4, 5]);
              default:
                request.response.statusCode = 418;
            }
            await request.response.close();
          } catch (_) {
            /* A cancelled client closes the socket. */
          }
        });
      });
      final h = _TrackedHarness();
      await tester.pumpWidget(
        MaterialApp(
          home: FlaxView(
            createRuntime: h.create,
            source: source,
            bindings: registry,
            plugins: [
              FlaxFetchPlugin(baseUrl: 'http://127.0.0.1:${server!.port}/'),
            ],
            onError: (e, _) => h.errors.add(e),
          ),
        ),
      );
      expect(h.errors, isEmpty);
      final frozenBuffer = h.runtime.createArrayBuffer(Uint8List(6));
      final globals = h.runtime.evaluate('globalThis') as FlaxJsObject;
      globals.setProperty('bridgeBuffer', frozenBuffer);
      globals.release();
      frozenBuffer.release();
      await runScript(tester, h, r'''
      function check(value, message) { globalThis.hostStage = message; if (!value) throw Error(message); }
      globalThis.hostStage = 'fetch'; const response = await fetch('/json');globalThis.hostStage = 'json';
      check((await response.json()).ok && response.bodyUsed, 'JSON');
      let duplicate = false; try { await response.text(); } catch { duplicate = true; }
      check(duplicate, 'single consumption');
      check((await (await fetch('/json')).json()).cookie === null, 'cookie jar absent');
      const redirect = await fetch('/redirect'); check(redirect.redirected && redirect.url.endsWith('/json'), 'follow'); await redirect.body.cancel();
      const manual = await fetch('/redirect', {redirect:'manual'}); check(manual.status === 302, 'manual'); await manual.body.cancel();
      check((await fetch('/missing')).status === 418, 'HTTP error is a response');
      const input = new Uint8Array([9,0,128,255,9]);
      const binary = await fetch('/echo', {method:'POST', body:input.subarray(1,4)});
      const reader = binary.body.getReader({mode:'byob'});
      const target = new Uint8Array(Object.freeze(bridgeBuffer)); const sibling = new DataView(target.buffer);
      const first = await reader.read(target);
      check(target.byteLength === 0 && sibling.buffer.byteLength === 0, 'real BYOB detach');
      check([...first.value].join() === '0,128,255', 'view bytes');
      const last = await reader.read(new Uint8Array(4)); check(last.done, 'BYOB EOF');
      const form = new FormData(); form.append('x','one'); form.append('x','two');
      form.append('file', new File([new Uint8Array([0,255,2])], 'a.bin'));
      const posted = await fetch('/echo', {method:'POST', body:form});
      const received = await posted.formData();
      check(received.getAll('x').join() === 'one,two', 'repeated fields');
      check([...(await received.get('file').bytes())].join() === '0,255,2', 'multipart file');
      const streamed = await fetch('/echo', {method:'POST', duplex:'half', body:new ReadableStream({start(c){c.enqueue(new Uint8Array([1]));c.enqueue(new Uint8Array([2]));c.close();}})});
      const copy = streamed.clone(); check([...await streamed.bytes()].join() === '1,2' && [...await copy.bytes()].join() === '1,2', 'upload and clone');
      const ac = new AbortController(); const reason = {custom:true};
      const slow = await fetch('/slow', {signal:ac.signal}); const slowReader = slow.body.getReader();
      check(!(await slowReader.read()).done, 'headers before body completion'); ac.abort(reason);
      let caught; try { await slowReader.read(); } catch (e) {caught=e;} check(caught === reason, 'abort reason');
    ''');
      expect(requests.where((p) => p == '/echo').length, 3);
      final writesBefore =
          h.tracker.hostOperations['__flaxFetchCall:write'] ?? 0;
      final bytesBefore = h.tracker.copiedFromJs;
      await runScript(tester, h, r'''
        const chunks = [[], [], [65], [], [66], []];
        const buffers = chunks.map(chunk => new Uint8Array(chunk));
        let index=0;
        const body = new ReadableStream({pull(c) {
          if(index===buffers.length) c.close(); else c.enqueue(buffers[index++]);
        }});
        const result = await fetch('/echo', {method:'POST', body});
        if(await result.text() !== 'AB') throw Error('Empty upload progress');
        if(buffers[2].byteLength !== 1 || buffers[4].byteLength !== 1) throw Error('Upload detached producer buffers');
      ''');
      expect(
        (h.tracker.hostOperations['__flaxFetchCall:write'] ?? 0) - writesBefore,
        2,
      );
      expect(h.tracker.copiedFromJs - bytesBefore, 2);
      stdout.writeln('Empty upload: 6 chunks, 2 writes, 2 copied bytes.');
      await runScript(tester, h, r'''
        function check(v,m){globalThis.hostStage=m;if(!v)throw Error(m);}
        globalThis.hostStage='redirect error start';
        let rejected=false;try{await fetch('/redirect',{redirect:'error'});}catch(e){rejected=e instanceof TypeError;}
        check(rejected,'redirect error');
        const rewritten=await (await fetch('/redirect-post',{method:'POST',body:'payload'})).json();
        check(rewritten.method==='GET' && rewritten.body==='','303 method and body');
        const replay=await (await fetch('/redirect-stream',{method:'POST',body:'payload'})).json();
        check(replay.method==='POST' && replay.body==='payload','307 replayable body');
        rejected=false;try{await fetch('/redirect-stream',{method:'POST',body:new ReadableStream({start(c){c.enqueue(new Uint8Array([1]));c.close();}})});}catch(e){rejected=e instanceof TypeError;}
        check(rejected,'307 streamed body cannot replay');
        const stripped=await (await fetch('/cross-origin',{headers:{Authorization:'secret',Cookie:'explicit=1'}})).json();
        check(stripped.authorization===null && stripped.cookie===null,'cross-origin sensitive headers');
        rejected=false;try{await (await fetch('/disconnect')).bytes();}catch(e){rejected=e instanceof TypeError;}
        check(rejected,'partial response body error');
        const reason={upload:true};
        let failure;try{await fetch('/echo',{method:'POST',body:new ReadableStream({start(c){c.error(reason);}})});}catch(e){failure=e;}
        check(failure===reason,'upload source error');
      ''');

      final beforeRead = h.tracker.hostOperations['__flaxFetchCall:read'] ?? 0;
      final beforeCopy = h.tracker.copiedToJs;
      await runScript(
        tester,
        h,
        "globalThis.slowDownload = await fetch('/large');",
      );
      for (var i = 0; i < 5; i++) {
        await tester.pump(const Duration(milliseconds: 10));
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 10)),
        );
      }
      expect(h.tracker.hostOperations['__flaxFetchCall:read'] ?? 0, beforeRead);
      expect(h.tracker.copiedToJs, beforeCopy);
      await runScript(tester, h, r'''
        const reader = slowDownload.body.getReader({mode:'byob'});
        for(let i=0;i<5;i++) {
          const {value,done}=await reader.read(new Uint8Array(1024));
          if(done || value.some(byte=>byte!==42)) throw Error('Slow download bytes');
        }
        await reader.cancel();
      ''');
      expect(
        (h.tracker.hostOperations['__flaxFetchCall:read'] ?? 0) - beforeRead,
        lessThanOrEqualTo(5),
      );
      expect(h.tracker.copiedToJs - beforeCopy, lessThanOrEqualTo(5 * 65536));

      h.execute(flaxTestFixtureSource('host_wpt'));
      expect(h.number('wptResults.length'), greaterThan(20));
      h.execute(flaxTestFixtureSource('host_axios'));
      await runScript(tester, h, r'''
      function check(v,m){globalThis.hostStage=m;if(!v)throw Error(m);}
      const client = axios.create({adapter:'fetch'});
      let intercepted=0; client.interceptors.response.use(r => {intercepted++;return r;});
      check((await client.get('/json', {params:{query:'中文'}})).data.ok, 'Axios JSON');
      let up=0,down=0;
      const payload = new Uint8Array(150000).fill(42);
      const binary = await client.post('/echo', payload, {responseType:'arraybuffer',
        onUploadProgress:e=>{up=e.loaded;},onDownloadProgress:e=>{down=e.loaded;}});
      check(binary.data.byteLength===payload.length,'Axios bytes');
      await new Promise(r=>setTimeout(r,50));
      check(up===150000 && down===150000, 'Axios upload/download progress');
      const fd=new FormData();fd.append('field','value');
      const form=await client.postForm('/echo',fd,{responseType:'formData'});
      check(form.data.get('field')==='value','Axios multipart');
      let timeout=false;try{await client.get('/slow',{timeout:10});}catch(e){timeout=e.code==='ETIMEDOUT';}
      check(timeout,'Axios timeout');
      const controller = new AbortController();
      const tasks=[1,2].map(()=>client.get('/slow',{signal:controller.signal}).catch(e=>axios.isCancel(e)));
      controller.abort();check((await Promise.all(tasks)).every(Boolean),'Axios concurrent cancellation');
      check(intercepted===3,'Axios interceptors');
    ''');
      await tester.pumpWidget(const SizedBox());
      for (var i = 0; i < 4; i++) {
        await tester.pump(const Duration(milliseconds: 1));
      }
      await tester.runAsync(() => server.close(force: true));
      expect(h.errors, isEmpty);
      expect(h.runtimes.single.isDisposed, isTrue);
      expect(h.tracker.handlesAtDispose, 0);
      // Test-only evidence distinguishes transport copies from Widget rebuilds.
      stdout.writeln(
        'Host copies: upload=${h.tracker.copiedFromJs}/${h.tracker.byteReads} calls; download=${h.tracker.copiedToJs}/${h.tracker.byteWrites} calls; final handles=${h.tracker.handlesAtDispose}',
      );
    },
  );
  testWidgets('close wins over response headers queued for JS delivery', (
    tester,
  ) async {
    final server = await tester.runAsync(() async {
      final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
      server.listen((request) async {
        request.response.write('response');
        await request.response.close();
      });
      return server;
    });
    final h = _TrackedHarness();
    late final FlaxSession session;
    var closed = false;
    session = FlaxSession(
      createRuntime: h.create,
      source: source,
      bindings: registry,
      plugins: [
        _QueuedFetch('http://127.0.0.1:${server!.port}/', () {
          unawaited(session.close().then((_) => closed = true));
        }),
      ],
      onError: (e, _) => h.errors.add(e),
    );
    try {
      await tester.pumpWidget(
        MaterialApp(home: FlaxView.session(session: session)),
      );
      await runScript(tester, h, r'''
        let rejected=false;
        try { await fetch('/'); } catch(e) { rejected=String(e).includes('FlaxSessionClosed'); }
        if(!rejected) throw Error('Queued headers escaped session close');
      ''');
      expect(closed, isFalse);
      await tester.pumpWidget(const SizedBox());
      await tester.pumpAndSettle();
      expect(closed, isTrue);
      expect(h.errors, isEmpty);
      expect(h.tracker.handlesAtDispose, 0);
    } finally {
      await tester.runAsync(() => server.close(force: true));
    }
  });

  testWidgets(
    'session close rejects pending network work before releasing handles',
    (tester) async {
      final server = await tester.runAsync(() async {
        final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
        server.listen((request) async {
          request.response.add([1]);
          await request.response.flush();
        });
        return server;
      });
      final h = _TrackedHarness();
      final session = FlaxSession(
        createRuntime: h.create,
        source: source,
        bindings: registry,
        plugins: [
          FlaxFetchPlugin(baseUrl: 'http://127.0.0.1:${server!.port}/'),
        ],
        onError: (e, _) => h.errors.add(e),
      );
      await tester.pumpWidget(
        MaterialApp(home: FlaxView.session(session: session)),
      );
      await runScript(tester, h, r'''
      const response = await fetch('/pending');
      globalThis.closedBody = 'waiting';
      response.text().catch(e => closedBody = e.message);
      globalThis.interval = setInterval(() => {}, 10000);
    ''');
      var done = false;
      unawaited(session.close().then((_) => done = true));
      for (var i = 0; i < 5; i++) {
        await tester.pump(const Duration(milliseconds: 1));
      }
      expect(done, isFalse);
      expect(
        (h.runtime.getGlobal('closedBody') as FlaxJsString).value,
        'FlaxSessionClosed',
      );
      expect(
        () => h.execute('setTimeout(() => {},0)'),
        throwsA(isA<FlaxJsException>()),
      );
      await tester.pumpWidget(const SizedBox());
      for (var i = 0; i < 5; i++) {
        await tester.pump(const Duration(milliseconds: 1));
      }
      expect(done, isTrue);
      expect(h.tracker.handlesAtDispose, 0);
      expect(h.errors, isEmpty);
      await tester.runAsync(() => server.close(force: true));
    },
  );

  testWidgets(
    'HTTPS validates certificates and accepts an explicitly trusted local certificate',
    (tester) async {
      final temp = Directory.systemTemp.createTempSync('flax-host-tls-');
      final cert = '${temp.path}/certificate.pem', key = '${temp.path}/key.pem';
      final server = await tester.runAsync(() async {
        final result = await Process.run('openssl', [
          'req',
          '-x509',
          '-newkey',
          'rsa:2048',
          '-nodes',
          '-keyout',
          key,
          '-out',
          cert,
          '-days',
          '1',
          '-subj',
          '/CN=localhost',
          '-addext',
          'subjectAltName=DNS:localhost,IP:127.0.0.1',
        ]);
        if (result.exitCode != 0) {
          throw StateError('Cannot create local TLS fixture: ${result.stderr}');
        }
        final context = SecurityContext()
          ..useCertificateChain(cert)
          ..usePrivateKey(key);
        final server = await HttpServer.bindSecure(
          InternetAddress.loopbackIPv4,
          0,
          context,
        );
        server.listen((r) async {
          r.response.write('trusted');
          await r.response.close();
        });
        return server;
      });
      final previous = HttpOverrides.current;
      try {
        for (final trusted in [false, true]) {
          HttpOverrides.global = trusted ? _TrustedHttp(cert) : null;
          final h = Harness();
          await tester.pumpWidget(
            MaterialApp(
              home: FlaxView(
                createRuntime: h.create,
                source: source,
                bindings: registry,
                plugins: [
                  FlaxFetchPlugin(
                    baseUrl: 'https://127.0.0.1:${server!.port}/',
                  ),
                ],
                onError: (e, _) => h.errors.add(e),
              ),
            ),
          );
          await runScript(
            tester,
            h,
            trusted
                ? "if(await (await fetch('/')).text() !== 'trusted') throw Error('TLS data');"
                : "let failed=false;try{await fetch('/');}catch(e){failed=e instanceof TypeError;}if(!failed)throw Error('Untrusted TLS accepted');",
          );
          await tester.pumpWidget(const SizedBox());
          for (var i = 0; i < 4; i++) {
            await tester.pump(const Duration(milliseconds: 1));
          }
          expect(h.errors, isEmpty);
        }
      } finally {
        HttpOverrides.global = previous;
        await tester.runAsync(() => server!.close(force: true));
        temp.deleteSync(recursive: true);
      }
    },
  );

  testWidgets('plugin binding modules merge and conflict before source', (
    tester,
  ) async {
    const extra = FlaxBindingModule(
      'test.extra',
      [],
      moduleId: 'test/extra',
      uiProtocol: 21,
      requiredCapabilities: [],
    );
    final merged = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: merged.create,
          source: source,
          bindings: registry,
          plugins: [
            _ModulePlugin('extra', const [extra]),
          ],
          onError: (e, _) => merged.errors.add(e),
        ),
      ),
    );
    expect(merged.errors, isEmpty);
    merged.execute(
      'if (typeof probe_extra !== "function") throw Error("merged")',
    );
    await tester.pumpWidget(const SizedBox());
    await tester.pumpAndSettle();

    final duplicate = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: duplicate.create,
          source: source,
          bindings: registry,
          plugins: [
            _ModulePlugin('dup', [flutterBindings]),
          ],
          onError: (e, _) => duplicate.errors.add(e),
        ),
      ),
    );
    expect(
      duplicate.errors.single.toString(),
      contains('Duplicate binding module'),
    );

    final version = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: version.create,
          source: source,
          bindings: registry,
          plugins: [
            _ModulePlugin('ver', [
              const FlaxBindingModule(
                'test.ver',
                [],
                moduleId: 'test/ver',
                uiProtocol: 16,
                requiredCapabilities: [],
              ),
            ]),
          ],
          onError: (e, _) => version.errors.add(e),
        ),
      ),
    );
    expect(
      version.errors.single.toString(),
      contains('Incompatible binding module'),
    );
  });

  testWidgets('exposeObject identity, type and cross-session', (tester) async {
    final box = _ExposeBox();
    final a = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: a.create,
          source: source,
          bindings: registry,
          plugins: [_ExposePlugin(box)],
          onError: (e, _) => a.errors.add(e),
        ),
      ),
    );
    expect(a.errors, isEmpty);
    a.execute(r'''
      const first = exposeProbe('put');
      if (first !== exposeProbe('put')) throw Error('identity');
      if (first.width !== 3 || first.height !== 4) throw Error('fields');
      if (!exposeProbe('same', first)) throw Error('require');
      let wrong = false;
      try { exposeProbe('wrongType', first); } catch { wrong = true; }
      if (!wrong) throw Error('type');
      let bad = false;
      try { exposeProbe('badId'); } catch { bad = true; }
      if (!bad) throw Error('id');
    ''');
    await tester.pumpWidget(const SizedBox());
    for (var i = 0; i < 4; i++) {
      await tester.pump(const Duration(milliseconds: 1));
    }
    final b = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: b.create,
          source: source,
          bindings: registry,
          plugins: [_ExposePlugin(box)],
          onError: (e, _) => b.errors.add(e),
        ),
      ),
    );
    expect(b.errors, isEmpty);
    b.execute(r'''
      let rejected = false;
      try { exposeProbe('cross'); } catch { rejected = true; }
      if (!rejected) throw Error('cross-session');
    ''');
    expect(box.crossSessionRejected, isTrue);
    await tester.pumpWidget(const SizedBox());
    for (var i = 0; i < 4; i++) {
      await tester.pump(const Duration(milliseconds: 1));
    }
  });

  testWidgets(
    'rAF runs after script and microtasks then drains raf microtasks',
    (tester) async {
      final h = Harness();
      await tester.pumpWidget(h.app());
      expect(h.errors, isEmpty);
      h.execute(r'''
      globalThis.rafOrder = ['script'];
      queueMicrotask(() => rafOrder.push('microtask'));
      const cancelled = requestAnimationFrame(() => rafOrder.push('cancelled'));
      cancelAnimationFrame(cancelled);
      requestAnimationFrame(() => { throw Error('raf boom'); });
      requestAnimationFrame(() => {
        rafOrder.push('raf');
        queueMicrotask(() => rafOrder.push('raf-microtask'));
      });
    ''');
      expect(
        (h.runtime.evaluate('rafOrder.join()') as FlaxJsString).value,
        'script',
      );
      h.runtime.drainMicrotasks();
      expect(
        (h.runtime.evaluate('rafOrder.join()') as FlaxJsString).value,
        'script,microtask',
      );
      await tester.pump();
      expect(
        (h.runtime.evaluate('rafOrder.join()') as FlaxJsString).value,
        'script,microtask,raf,raf-microtask',
      );
      expect(h.errors.join(), contains('raf boom'));
      await tester.pumpWidget(const SizedBox());
      await tester.pumpAndSettle();
    },
  );
}

class _ProbePlugin extends FlaxPlugin {
  _ProbePlugin(this.id, this.log, {this.fail = false, this.global});
  @override
  final String id;
  final List<String> log;
  final bool fail;
  final String? global;
  @override
  Set<String> get globals => {global ?? 'probe_$id'};
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    log.add('install:$id');
    var count = 0;
    context.registerFunction(
      global ?? 'probe_$id',
      (_, _) => FlaxJsNumber((++count).toDouble()),
    );
    if (fail) {
      log.add('rollback:$id');
      throw StateError('install failure');
    }
    return _ProbeInstance(id, log);
  }
}

class _ProbeInstance implements FlaxPluginInstance {
  _ProbeInstance(this.id, this.log);
  final String id;
  final List<String> log;
  @override
  void close() => log.add('close:$id');
  @override
  void dispose() => log.add('dispose:$id');
}

class _ModulePlugin extends FlaxPlugin {
  _ModulePlugin(this.id, this.bindingModules);
  @override
  final String id;
  @override
  final List<FlaxBindingModule> bindingModules;
  @override
  Set<String> get globals => {'probe_$id'};
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('probe_$id', (_, _) => const FlaxJsUndefined());
    return _ProbeInstance(id, []);
  }
}

class _ExposeBox {
  FlaxJsObject? stolen;
  var crossSessionRejected = false;
  static const size = Size(3, 4);
  static const sizeId = 'flax.core/flutter#type:Size';
}

class _ExposePlugin extends FlaxPlugin {
  _ExposePlugin(this.box);
  final _ExposeBox box;
  @override
  String get id => 'test.expose';
  @override
  Set<String> get globals => const {'exposeProbe'};
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('exposeProbe', (_, args) {
      switch ((args[0] as FlaxJsString).value) {
        case 'put':
          final exposed = context.exposeObject(
            _ExposeBox.size,
            _ExposeBox.sizeId,
          );
          box.stolen ??= exposed;
          return exposed;
        case 'same':
          return FlaxJsBoolean(
            identical(
              context.requireObject<Size>(args[1], _ExposeBox.sizeId),
              _ExposeBox.size,
            ),
          );
        case 'wrongType':
          context.requireObject<Size>(args[1], 'flax.core/flutter#type:Offset');
        case 'badId':
          context.exposeObject(_ExposeBox.size, 'not-a-type');
        case 'cross':
          try {
            context.requireObject<Size>(box.stolen!, _ExposeBox.sizeId);
          } catch (_) {
            box.crossSessionRejected = true;
            rethrow;
          }
      }
      return const FlaxJsUndefined();
    });
    return _ProbeInstance('expose', []);
  }
}

class _TrackedHarness extends Harness {
  final tracker = RuntimeTracker();
  @override
  FlaxJsRuntime create() {
    runtimes.add(tracker);
    return tracker;
  }
}

class _TrustedHttp extends HttpOverrides {
  _TrustedHttp(String certificate)
    : pem = File(certificate).readAsStringSync(),
      trusted = SecurityContext()..setTrustedCertificates(certificate);
  final SecurityContext trusted;
  final String pem;
  @override
  HttpClient createHttpClient(SecurityContext? context) =>
      super.createHttpClient(trusted)
        ..badCertificateCallback = (certificate, host, port) =>
            host == '127.0.0.1' && certificate.pem.trim() == pem.trim();
}

// Delay close until the real HTTP headers are queued, before that task enters JS.
class _QueuedFetch extends FlaxPlugin {
  _QueuedFetch(this.baseUrl, this.closeSession);
  final String baseUrl;
  final void Function() closeSession;
  @override
  String get id => 'test.queued-fetch';
  @override
  Set<String> get globals => const FlaxFetchPlugin().globals;
  @override
  FlaxPluginInstance install(FlaxHostContext context) =>
      FlaxFetchPlugin(baseUrl: baseUrl)
          .install(_QueueHook(context, closeSession));
}

class _QueueHook implements FlaxHostContext {
  @override
  String? get namespace => inner.namespace;
  _QueueHook(this.inner, this.closeSession);
  final FlaxHostContext inner;
  final void Function() closeSession;
  int queued = 0;
  @override
  void enqueue(void Function() action) {
    inner.enqueue(action);
    if (++queued == 2) closeSession(); // open, then response headers.
  }

  @override
  FlaxJsRuntime get runtime => inner.runtime;
  @override
  List<FlaxBindingModule> get bindingModules => inner.bindingModules;
  @override
  bool get isClosing => inner.isClosing;
  @override
  bool get isActive => inner.isActive;
  @override
  void registerFunction(
    String name,
    FlaxJsHostFunction callback, {
    bool allowClosing = false,
  }) => inner.registerFunction(name, callback, allowClosing: allowClosing);
  @override
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:host'}) =>
      inner.evaluate(source, sourceUrl: sourceUrl);
  @override
  FlaxJsObject exposeObject(Object value, String typeId) =>
      inner.exposeObject(value, typeId);
  @override
  T requireObject<T>(FlaxJsValue value, String typeId) =>
      inner.requireObject<T>(value, typeId);
  @override
  void requestCheckpoint() => inner.requestCheckpoint();
  @override
  void report(Object error, StackTrace stack) => inner.report(error, stack);
}

class _IdentityFetch extends FlaxPlugin {
  const _IdentityFetch();
  @override
  String get id => 'test.base-identity';
  @override
  Set<String> get globals => const FlaxFetchPlugin().globals;
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    final result = context.evaluate(r'''
      globalThis.originals=[Blob,File,FormData,ReadableStream,TransformStream,TextEncoderStream];
      globalThis.earlyBlob=new Blob(['early']);
      globalThis.earlyStream=earlyBlob.stream();
      globalThis.earlyForm=new FormData(); earlyForm.append('file',new File([earlyBlob],'early.txt'));
      undefined;
    ''');
    if (result is FlaxJsObject) result.release();
    return const FlaxFetchPlugin().install(context);
  }
}
