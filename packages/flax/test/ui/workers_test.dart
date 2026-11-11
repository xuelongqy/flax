import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:isolate';
import 'dart:typed_data';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax/src/native/engine.dart' show createDetachedWorkerRuntime;
import 'package:flutter_test/flutter_test.dart';

Future<void> script(
  String source, {
  bool waitForWorkersToExit = false,
  FlaxApplication? application,
  FlaxModuleSourceLoader? loadModule,
  FlaxTestPermissions? permissions,
  bool approved = true,
  Future<void> Function(FlaxJsRuntime)? whileRunning,
  void Function(FlaxJsRuntime)? prepareRuntime,
  void Function()? afterSuccess,
  List<FlaxPlugin> plugins = const [],
}) async {
  late FlaxJsRuntime runtime;
  final errors = <Object>[];
  final fixture =
      permissions ??
      (approved
          ? await FlaxTestPermissions.create(
              manifest: application?.manifest?.permissions,
              permissions: const {
                'flax.network': null,
                'flax.module.remote': null,
                'flax.wasm': null,
              },
            )
          : null);
  final cache = await Directory.systemTemp.createTemp(
    'flax-worker-module-cache-',
  );
  final session = FlaxSession(
    createRuntime: () {
      runtime = FlaxEngine.createRuntime();
      prepareRuntime?.call(runtime);
      return runtime;
    },
    source: application?.source ?? "import {runApp,Text} from '@flax/flutter/widgets'; runApp(Text('Host ready'));",
    sourceUrl: application?.sourceUrl ?? 'flax:app',
    entryUri: application?.entryUri,
    loadModule:
        application?.loadModule ??
        loadModule ??
        (request) =>
            FlaxApplication.loadRemoteModule(request, cacheDirectory: cache),
    imports: application?.imports ?? const {},
    assetBundle: application?.assetBundle,
    sandbox: application?.sandbox,
    permissionManifest: application?.manifest?.permissions ?? fixture?.manifest,
    permissions: fixture?.policy,
    bindings: FlaxBindingRegistry([flutterBindings]),
    plugins: plugins,
    onError: (error, _) => errors.add(error),
  );
  try {
    await session.ready;
    runtime.evaluate(
      'globalThis.result = null; (async () => { $source })().then(() => result="ok", e => result=String(e.stack || e)); undefined;',
    );
    runtime.drainMicrotasks();
    await whileRunning?.call(runtime);
    final clock = Stopwatch()..start();
    while (clock.elapsed < const Duration(seconds: 20)) {
      runtime.drainMicrotasks();
      final result = runtime.getGlobal('result');
      if (result is FlaxJsString) {
        expect(result.value, 'ok');
        expect(errors, isEmpty);
        if (waitForWorkersToExit) {
          final native = runtime as FlaxNativeJsRuntime;
          while (native.workerCountsForTesting() != (0, 0) &&
              clock.elapsed < const Duration(seconds: 20)) {
            runtime.drainMicrotasks();
            await Future<void>.delayed(const Duration(milliseconds: 5));
          }
          expect(native.workerCountsForTesting(), (0, 0));
        }
        afterSuccess?.call();
        return;
      }
      await Future<void>.delayed(const Duration(milliseconds: 5));
    }
    fail('Worker timed out: $errors');
  } finally {
    await session.close();
    final native = runtime as FlaxNativeJsRuntime;
    expect(native.workerCountsForTesting(), (
      0,
      0,
    ), reason: 'Worker channels and runtimes retire after close');
    if (permissions == null) await fixture?.close();
    await cache.delete(recursive: true);
  }
}

class _WorkerSetupPlugin extends FlaxPlugin {
  _WorkerSetupPlugin(this.configure);

  final Future<Map<String, Object?>> Function() configure;

  @override
  String get id => 'test.worker-setup';
  @override
  Set<String> get globals => const {};
  @override
  Set<String> get jsModules => const {'@flax/core/host'};
  @override
  FlaxPluginInstance install(FlaxHostContext context) =>
      _WorkerSetupProvider(configure);
}

class _WorkerSetupProvider
    implements FlaxPluginInstance, FlaxWorkerPluginInstance {
  _WorkerSetupProvider(this.configure);

  final Future<Map<String, Object?>> Function() configure;

  @override
  String get workerModule => '@flax/core/host';
  @override
  Set<String> get workerNativeAssets => const {};
  @override
  Future<Map<String, Object?>> get workerConfiguration => configure();
  @override
  void workerMessage(String operation, List<Object?> arguments) {}
  @override
  void close() {}
  @override
  void dispose() {}
}

Future<void> waitForWorkerSignal(FlaxJsRuntime runtime) async {
  final timer = Stopwatch()..start();
  while (timer.elapsed < const Duration(seconds: 10)) {
    runtime.drainMicrotasks();
    if (runtime.getGlobal('workerSignal') case FlaxJsBoolean(value: true)) {
      return;
    }
    await Future<void>.delayed(const Duration(milliseconds: 2));
  }
  fail('Worker did not reach the permission revocation boundary');
}

Future<void> waitForWorkerRetirement(FlaxJsRuntime runtime) async {
  final native = runtime as FlaxNativeJsRuntime;
  final timer = Stopwatch()..start();
  while (native.workerCountsForTesting() != (0, 0) &&
      timer.elapsed < const Duration(seconds: 10)) {
    runtime.drainMicrotasks();
    await Future<void>.delayed(const Duration(milliseconds: 2));
  }
  expect(native.workerCountsForTesting(), (0, 0));
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() {
    final previous = HttpOverrides.current;
    HttpOverrides.global = null;
    addTearDown(() => HttpOverrides.global = previous);
  });
  setUpAll(() async {
    if (Flax.moduleAssets != null) return;
    final root = Directory('.local/ui-module-inventory').existsSync()
        ? Directory('.local/ui-module-inventory')
        : Directory('../../.local/ui-module-inventory');
    Flax.moduleAssets = await FlaxModuleAssets.load(
      bundle: FlaxDirectoryAssetBundle(root),
      manifest: 'modules/modules.json',
    );
  });
  test(
    'Session close cancels Worker startup waiting for a native provider',
    () async {
      await script(
        '''
      const worker = new Worker('data:text/javascript,onmessage=()=>{}');
      await new Promise(resolve => setTimeout(resolve, 10));
    ''',
        plugins: [
          _WorkerSetupPlugin(() => Completer<Map<String, Object?>>().future),
        ],
      );
    },
  );
  test('Worker reports rejected provider configuration and finishes', () async {
    await script(
      '''
      const events = globalThis.workerStartupEvents;
      const worker = new Worker('data:text/javascript,postMessage("started")');
      await new Promise((resolve, reject) => {
        worker.onerror = event => { events.push(event.message); resolve(); };
        worker.onmessage = () => reject(Error('Worker ran with rejected configuration'));
      });
      await new Promise(resolve => setTimeout(resolve, 0));
      if (events.join('|') !== 'Bad state: Worker provider rejected|finish')
        throw Error('Worker startup events: ' + events.join('|'));
    ''',
      waitForWorkersToExit: true,
      prepareRuntime: (runtime) => runtime.evaluate('''
        const events = globalThis.workerStartupEvents = [];
        Object.defineProperty(globalThis, '__flaxNativeWorker', {
          configurable: true,
          set(bridge) {
            const finish = bridge.finish;
            bridge.finish = id => { events.push('finish'); finish.call(bridge, id); };
            Object.defineProperty(globalThis, '__flaxNativeWorker', {
              value: bridge, configurable: true,
            });
          },
        });
        undefined;
      '''),
      plugins: [
        _WorkerSetupPlugin(
          () async => throw StateError('Worker provider rejected'),
        ),
      ],
    );
  });
  test(
    'Worker startup messages and host tasks retain FIFO microtask boundaries',
    () => script(r'''
      const source = `
        await new Promise(resolve => setTimeout(resolve, 0));
        const order = [];
        onmessage = ({data}) => {
          order.push('message:' + data);
          Promise.resolve().then(() => order.push('microtask:' + data));
          if (data !== 1) return;
          setTimeout(() => {
            order.push('timer:1');
            Promise.resolve().then(() => order.push('timer:microtask'));
          }, 0);
          setTimeout(() => {
            order.push('timer:2');
            postMessage(order);
            close();
          }, 0);
        };
      `;
      const url = URL.createObjectURL(new Blob([source]));
      const worker = new Worker(url, {type:'module'});
      const answer = new Promise((resolve, reject) => {
        worker.onmessage = ({data}) => resolve(data);
        worker.onerror = event => reject(Error(event.message));
      });
      worker.postMessage(1);
      worker.postMessage(2);
      const order = await answer;
      URL.revokeObjectURL(url);
      const expected = 'message:1,microtask:1,message:2,microtask:2,timer:1,timer:microtask,timer:2';
      if (String(order) !== expected)
        throw Error('Worker task order: ' + String(order) + '; expected ' + expected);
    ''', waitForWorkersToExit: true),
  );
  test(
    'MessagePort transfer moves a paused FIFO between sibling Workers',
    () => script(r'''
      const {port1: send, port2: receive} = new MessageChannel();
      const {port1: extra, port2: extraPeer} = new MessageChannel();
      const urls = [];
      const worker = source => {
        const url = URL.createObjectURL(new Blob([source]));
        urls.push(url);
        return new Worker(url, {type:'module'});
      };
      const next = worker => new Promise((resolve, reject) => {
        worker.onmessage = resolve;
        worker.onerror = event => reject(Error(event.message));
        worker.onmessageerror = () => reject(Error('Worker messageerror'));
      });
      try {
        const receiver = worker(`
          const local = new MessageChannel();
          await new Promise(resolve => {
            local.port1.onmessage = resolve;
            local.port2.postMessage('module startup');
          });
          local.port1.close(); local.port2.close();
          let receive;
          const seen = [];
          onmessage = async ({data, ports}) => {
            if (data === 'start') {
              await new Promise(resolve => setTimeout(resolve, 15));
              if (seen.length !== 0) throw Error('Transferred port started early');
              receive.start();
              return;
            }
            const [extra, port] = ports;
            if (!Object.isFrozen(ports) || ports.length !== 2 ||
                !(port instanceof MessagePort) || port !== data.port ||
                port !== data.alias || new Uint8Array(data.buffer)[0] !== 73)
              throw Error('Worker event did not restore transfers in order');
            receive = port;
            receive.addEventListener('message', ({data, ports}) => {
              const tag = typeof data === 'string' ? data : data.tag;
              seen.push(tag);
              Promise.resolve().then(() => seen.push('microtask:' + tag));
              if (tag === 'after') {
                if (ports.length !== 1) throw Error('Port transfer-only list was lost');
                ports[0].postMessage('reply');
                ports[0].close();
                receive.close();
                Promise.resolve().then(() => { postMessage(seen); close(); });
              }
            });
            const extraMessage = await new Promise(resolve => {
              extra.onmessage = null;
              extra.addEventListener('message', ({data}) => resolve(data));
            });
            extra.close();
            postMessage(extraMessage);
          };
        `);
        const sender = worker(`
          onmessage = ({ports: [send]}) => {
            const reply = new MessageChannel();
            reply.port2.onmessage = ({data}) => {
              reply.port2.close();
              const outbound = new MessageChannel();
              outbound.port1.postMessage(data);
              outbound.port1.close();
              postMessage(null, [outbound.port2]);
              close();
            };
            send.postMessage({get tag() {
              send.close();
              postMessage('sent');
              // Let the sibling drain the old queue after the peer loss wake.
              const end = performance.now() + 300;
              while (performance.now() < end) {}
              return 'after';
            }}, {transfer:[reply.port1]});
          };
        `);
        const buffer = new Uint8Array([73]).buffer;
        let stale = 0;
        receive.onmessage = () => stale++;
        send.postMessage('before');
        extraPeer.postMessage('transfer-only');
        extraPeer.close();
        const ready = next(receiver);
        receiver.postMessage({port:receive, alias:receive, buffer}, [extra, buffer, receive]);
        if (buffer.byteLength !== 0) throw Error('Mixed transfer did not detach ArrayBuffer');
        receive.postMessage('stale');
        receive.close();
        if ((await ready).data !== 'transfer-only') throw Error('Transfer-only port did not deliver');
        const sent = next(sender);
        sender.postMessage(null, [send]);
        if ((await sent).data !== 'sent') throw Error('Sibling did not send');
        const reply = next(sender), delivered = next(receiver);
        receiver.postMessage('start');
        const {ports: [outbound]} = await Promise.race([
          reply,
          new Promise((_, reject) => setTimeout(() =>
            reject(Error('Lost a send when its source closed during serialization')), 2000)),
        ]);
        const ack = await new Promise(resolve => {
          outbound.onmessage = ({data}) => { outbound.close(); resolve(data); };
        });
        if (ack !== 'reply' ||
            String((await delivered).data) !== 'before,microtask:before,after,microtask:after' || stale)
          throw Error('Port transfer broke direct delivery, FIFO, or detachment');
      } finally {
        for (const url of urls) URL.revokeObjectURL(url);
      }
    ''', waitForWorkersToExit: true),
  );
  test(
    'Structured clone commits MessagePort transfers only after validation',
    () async {
      final probe = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
      int? portCount() {
        final count = probe.evaluate('__flaxNativeWorker.portCount?.()');
        return count is FlaxJsNumber ? count.value.toInt() : null;
      }

      try {
        probe.installWorkerBridge(0);
        final before = portCount();
        await script(
          r'''
      const channel = new MessageChannel();
      const {port1: send, port2: receive} = channel;
      const rejected = operation => {
        try { operation(); } catch (error) {
          if (error.name === 'DataCloneError') return;
          throw error;
        }
        throw Error('Expected DataCloneError');
      };
      const buffer = new ArrayBuffer(8);
      rejected(() => structuredClone(channel));
      rejected(() => structuredClone(receive));
      rejected(() => structuredClone(receive, {transfer:[buffer, receive, receive]}));
      rejected(() => structuredClone({}, {transfer:[buffer, Object.create(MessagePort.prototype)]}));
      rejected(() => receive.postMessage(null, [receive, buffer]));
      send.postMessage('before');
      let moved;
      rejected(() => structuredClone({get reentry() {
        moved = structuredClone({port:receive, alias:receive}, {transfer:[receive]});
        return 1;
      }}, {transfer:[buffer, receive]}));
      if (buffer.byteLength !== 8 || moved.port === receive || moved.port !== moved.alias)
        throw Error('Failed transfer changed ArrayBuffer or lost clone identity');
      rejected(() => structuredClone(null, {transfer:[receive]}));
      receive.close();
      send.postMessage('after');
      send.close();
      const seen = [];
      await new Promise(resolve => {
        moved.port.onmessage = ({data}) => {
          seen.push(data);
          if (data === 'after') resolve();
        };
      });
      if (String(seen) !== 'before,after') throw Error('Clone lost its port queue: ' + seen);
      moved.port.close();

      const guarded = new MessageChannel(), bytes = new ArrayBuffer(3);
      const oldGet = WeakMap.prototype.get, oldValues = Map.prototype.values,
        oldIterator = Array.prototype[Symbol.iterator];
      let hooks = 0, packet;
      try {
        packet = structuredClone({port:guarded.port2, get last() {
          WeakMap.prototype.get = Map.prototype.values = Array.prototype[Symbol.iterator] = () => {
            hooks++; throw Error('Prototype hook during port transfer');
          };
          return 1;
        }}, {transfer:[guarded.port2, bytes]});
      } finally {
        WeakMap.prototype.get = oldGet; Map.prototype.values = oldValues;
        Array.prototype[Symbol.iterator] = oldIterator;
      }
      if (hooks || bytes.byteLength || packet.last !== 1 ||
          !(packet.port instanceof MessagePort) || packet.port === guarded.port2)
        throw Error('Port transfer called a prototype hook or lost ownership');
      packet.port.close(); guarded.port1.close();

      const discarded = new MessageChannel();
      discarded.port2.onmessage = () => { throw Error('Closed port received a message'); };
      discarded.port1.postMessage('queued');
      discarded.port2.close();
      discarded.port1.postMessage('ignored');
      discarded.port1.close();

      const url = URL.createObjectURL(new Blob(['await new Promise(()=>{})']));
      try {
        const unopened = new Worker(url, {type:'module'});
        const channel = new MessageChannel();
        const nested = new MessageChannel();
        channel.port1.postMessage(null, [nested.port2]);
        unopened.postMessage(null, [channel.port2]);
        unopened.terminate();
        rejected(() => structuredClone(null, {transfer:[channel.port2]}));
        rejected(() => structuredClone(null, {transfer:[nested.port2]}));
        channel.port1.close(); nested.port1.close();
      } finally {
        URL.revokeObjectURL(url);
      }

      const cycleA = new MessageChannel(), cycleB = new MessageChannel();
      cycleA.port1.postMessage(null, [cycleB.port2]);
      cycleB.port1.postMessage(null, [cycleA.port2]);
      cycleA.port1.close(); cycleB.port1.close();
      await new Promise(resolve => setTimeout(resolve, 10));
    ''',
          waitForWorkersToExit: true,
          afterSuccess: () {
            expect(
              before,
              isNotNull,
              reason: 'Native port counter is installed',
            );
            expect(portCount(), before, reason: 'Unopened port packets retire');
          },
        );
      } finally {
        probe.dispose();
      }
    },
  );
  test(
    'Worker rejection events finish before the next queued message',
    () => script(r'''
      const source = `
        await new Promise(resolve => setTimeout(resolve, 0));
        const events = [], reason = {message:'late handler'};
        let rejected;
        onunhandledrejection = event => {
          event.preventDefault();
          if (event.promise !== rejected || event.reason !== reason)
            throw Error('Unhandled rejection identity changed');
          events.push('unhandled');
        };
        onrejectionhandled = event => {
          if (event.promise !== rejected || event.reason !== reason)
            throw Error('Handled rejection identity changed');
          events.push('handled');
        };
        onmessage = ({data}) => {
          if (data === 1) rejected = Promise.reject(reason);
          else {
            rejected.catch(() => {});
            setTimeout(() => {postMessage(events); close();}, 0);
          }
        };
      `;
      const url = URL.createObjectURL(new Blob([source]));
      const worker = new Worker(url, {type:'module'});
      const answer = new Promise((resolve, reject) => {
        worker.onmessage = ({data}) => resolve(data);
        worker.onerror = event => reject(Error(event.message));
      });
      worker.postMessage(1);
      worker.postMessage(2);
      const events = await answer;
      URL.revokeObjectURL(url);
      if (String(events) !== 'unhandled,handled')
        throw Error('Worker rejection order: ' + String(events) + '; expected unhandled,handled');
      const fairnessUrl = URL.createObjectURL(new Blob([`
        let count = 0;
        onunhandledrejection = event => {
          event.preventDefault();
          if (++count < 8) Promise.reject('next checkpoint');
        };
        onmessage = () => {
          setTimeout(() => {postMessage(count); close();}, 0);
          Promise.reject('first checkpoint');
        };
      `]));
      const fairnessWorker = new Worker(fairnessUrl);
      const fairnessAnswer = new Promise((resolve, reject) => {
        fairnessWorker.onmessage = ({data}) => resolve(data);
        fairnessWorker.onerror = event => reject(Error(event.message));
      });
      fairnessWorker.postMessage(null);
      const count = await fairnessAnswer;
      URL.revokeObjectURL(fairnessUrl);
      if (!(count > 0 && count < 8))
        throw Error('Worker rejection checkpoints starved the queued Dart timer: ' + count);
    ''', waitForWorkersToExit: true),
  );
  test(
    'Core Worker still images use CPU codec and transform without UI',
    () async {
      await script(r'''
      const source = `
        (async () => {
          for (const name of ['Image', 'HTMLImageElement', 'document', 'OffscreenCanvas'])
            if (typeof globalThis[name] !== 'undefined') throw Error('Unexpected Worker global ' + name);
          const host = globalThis[Symbol.for('flax.image.host')];
          const data = new ImageData(new Uint8ClampedArray([
            255,0,0,255, 0,255,0,255,
            0,0,255,255, 255,255,255,255,
          ]), 2, 2);
          const bitmap = await createImageBitmap(data, {imageOrientation:'flipY'});
          const pixels = Array.from(host.read(bitmap).data);
          if (pixels.join() !== '0,0,255,255,255,255,255,255,255,0,0,255,0,255,0,255')
            throw Error('CPU transform pixels ' + pixels);
          const blob = await host.encode(host.read(bitmap), 'image/png');
          const decoded = await createImageBitmap(blob);
          if (decoded.width !== 2 || decoded.height !== 2 ||
              Array.from(host.read(decoded).data).join() !== pixels.join())
            throw Error('CPU PNG round trip');
          const cropped = await createImageBitmap(decoded, 0, 0, 1, 1, {
            resizeWidth:2, resizeHeight:2, resizeQuality:'pixelated',
          });
          if (Array.from(host.read(cropped).data).join() !== '0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255')
            throw Error('CPU crop and resize');
          for (const [width, height, options, expected] of [
            [4, 3, {resizeHeight:1}, [2, 1]],
            [3, 4, {resizeWidth:1}, [1, 2]],
          ]) {
            const resized = await createImageBitmap(new ImageData(width, height), options);
            if (resized.width !== expected[0] || resized.height !== expected[1])
              throw Error('Inferred resize dimensions must round up');
            resized.close();
          }
          bitmap.close(); decoded.close(); cropped.close();
          postMessage({ok:true, type:blob.type, size:blob.size}); close();
        })().catch(error => { postMessage({error:String(error.stack || error)}); close(); });
      `;
      const url = URL.createObjectURL(new Blob([source]));
      const answer = await new Promise((resolve, reject) => {
        const worker = new Worker(url);
        worker.onmessage = event => resolve(event.data);
        worker.onerror = event => reject(Error(event.message));
      });
      URL.revokeObjectURL(url);
      if (!answer.ok || answer.type !== 'image/png' || answer.size < 20)
        throw Error(JSON.stringify(answer));
    ''', waitForWorkersToExit: true);
    },
  );
  test(
    'Worker image graphs preserve aliases and ownership across nested realms',
    () async {
      await script(r'''
      async function checkImages(post) {
        const host = globalThis[Symbol.for('flax.image.host')];
        const assert = (ok, message) => { if (!ok) throw Error(message); };
        const rejected = (operation, name = 'DataCloneError', label = 'clone') => {
          try { operation(); } catch (error) {
            assert(error.name === name, label + ': expected ' + name + ', got ' + error); return;
          }
          throw Error(label + ': expected ' + name);
        };
        for (const reverse of [false, true]) for (const transfer of [false, true]) {
          const data = new Uint8ClampedArray(new ArrayBuffer(16), 4, 8);
          data.set([17,34,51,255, 90,80,70,128]);
          const image = new ImageData(data, 2);
          const graph = reverse ? {data, buffer:data.buffer, image} : {image, data, buffer:data.buffer};
          graph.again = image;
          graph.map = new Map([[image, data]]);
          for (const key of ['width','height','data','colorSpace','pixelFormat'])
            Object.defineProperty(image, key, {get(){throw Error('ImageData getter ' + key)}});
          const copy = structuredClone(graph, {transfer: transfer ? [data.buffer] : []});
          assert(copy.image instanceof ImageData && copy.image === copy.again, 'ImageData identity');
          assert(copy.image.data === copy.data && copy.data.buffer === copy.buffer, 'ImageData aliases');
          assert(copy.map.get(copy.image) === copy.data && copy.data.byteOffset === 4, 'map and offset');
          assert(copy.image.width === 2 && copy.image.height === 1 && copy.data[0] === 17, 'private dimensions');
          assert(data.byteLength === (transfer ? 0 : 8), 'ImageData buffer ownership');
          if (transfer) rejected(() => structuredClone(image));
        }
        const pixels = new ImageData(new Uint8ClampedArray([17,34,51,255]),1);
        const make = () => createImageBitmap(pixels);
        const image = await make();
        Object.defineProperty(image, 'width', {get(){throw Error('bitmap width getter')}});
        const cloned = structuredClone({image, again:image, map:new Map([[image,image]])});
        assert(cloned.image instanceof ImageBitmap && cloned.image === cloned.again &&
          cloned.map.get(cloned.image) === cloned.image, 'bitmap graph identity');
        host.read(cloned.image).data.fill(0);
        assert(host.read(cloned.image).data[0] === 17, 'bitmap pixels immutable');
        image.close();
        assert(host.read(cloned.image).data[0] === 17, 'clone survives sender close');
        cloned.image.close();
        for (const mode of ['post-close','duplicate','unsupported','throw','close','transfer-only','reentrant']) {
          const bitmap = await make(), buffer = new ArrayBuffer(7);
          let received;
          const payload = {bitmap};
          let list = [bitmap, buffer];
          if (mode === 'duplicate') list = [bitmap, buffer, bitmap];
          if (mode === 'unsupported') payload.bad = () => {};
          if (mode === 'transfer-only') delete payload.bitmap;
          if (['post-close','throw','close','transfer-only','reentrant'].includes(mode))
            Object.defineProperty(payload,'last',{enumerable:true,get(){
              if (mode === 'throw') throw new RangeError('getter failed');
              if (mode === 'reentrant') received = structuredClone(bitmap,{transfer:[bitmap]});
              else bitmap.close();
              return true;
            }});
          rejected(
            () => mode === 'post-close' ? post(payload,list) : structuredClone(payload,{transfer:list}),
            mode === 'throw' ? 'RangeError' : 'DataCloneError', mode,
          );
          assert(buffer.byteLength === 7, 'atomic ordinary buffer: ' + mode);
          if (['duplicate','unsupported','throw'].includes(mode))
            assert(bitmap.width === 1 && host.read(bitmap).data[0] === 17, 'atomic bitmap: ' + mode);
          if (received) { assert(received.width === 1, 'inner transfer'); received.close(); }
          bitmap.close();
        }
        const transferOnly = await make(), bytes = new ArrayBuffer(9);
        const oldGet = WeakMap.prototype.get, oldValues = Map.prototype.values,
          oldIterator = Array.prototype[Symbol.iterator];
        let hooks = 0;
        try {
          const packet = structuredClone({get last(){
            WeakMap.prototype.get = Map.prototype.values = Array.prototype[Symbol.iterator] = () => {
              hooks++; throw Error('prototype hook');
            };
            return 1;
          }},{transfer:[transferOnly,bytes]});
          if (packet.last !== 1) throw Error('transfer-only value');
        } finally {
          WeakMap.prototype.get = oldGet; Map.prototype.values = oldValues;
          Array.prototype[Symbol.iterator] = oldIterator;
        }
        assert(hooks === 0 && transferOnly.width === 0 && bytes.byteLength === 0,'transfer-only precommit');
        const invalid = new ImageData(1,1);
        rejected(() => structuredClone(invalid,{transfer:[invalid]}));
        assert(invalid.data.byteLength === 4,'ImageData itself is not transferable');
        const closed = await make(); closed.close();
        rejected(() => structuredClone(closed));
        const moved = await make();
        const receiver = structuredClone(moved,{transfer:[moved]});
        assert(moved.width === 0 && receiver.width === 1,'same realm commit');
        receiver.close();
        const captured = host.elementImage(host.read(pixels));
        rejected(() => structuredClone(captured));
        const untouched = new ArrayBuffer(3);
        rejected(() => structuredClone({captured, get last(){ captured.close(); return 1; }},
          {transfer:[captured,untouched]}));
        assert(untouched.byteLength === 3, 'failed ElementImage transfer must not detach siblings');
        const snapshot = host.elementImage(host.read(pixels));
        const transferred = structuredClone({snapshot, again:snapshot},{transfer:[snapshot]});
        assert(transferred.snapshot instanceof ElementImage && transferred.snapshot === transferred.again,
          'ElementImage transfer brand and identity');
        assert(host.readElementImage(transferred.snapshot).data.join() === '17,34,51,255',
          'ElementImage transfer pixels');
        rejected(() => host.readElementImage(snapshot), 'InvalidStateError');
        transferred.snapshot.close();
        return true;
      }
      function verifyGraphs(values) {
        const host = globalThis[Symbol.for('flax.image.host')];
        for (const value of values) {
          const ArrayType = value.hdr ? Float16Array : Uint8ClampedArray;
          const colorSpace = value.hdr ? 'display-p3' : 'srgb';
          const pixelFormat = value.hdr ? 'rgba-float16' : 'rgba-unorm8';
          if (!(value.image instanceof ImageData) || !(value.bitmap instanceof ImageBitmap) ||
              !(value.data instanceof ArrayType) || value.image !== value.alias ||
              value.image.data !== value.data || value.data.buffer !== value.buffer ||
              value.data.byteOffset !== (value.hdr ? 4 : 0) ||
              value.map.get(value.image) !== value.bitmap || value.bitmap !== value.again ||
              value.data.join() !== (value.hdr ? '1.5,-0.25,0.03125,0.5' : '17,34,51,255') ||
              value.image.colorSpace !== colorSpace || value.image.pixelFormat !== pixelFormat ||
              value.bytes.byteLength !== 5)
            throw Error('Cross-realm image graph lost identity or pixels: ' + pixelFormat);
          const pixels = host.read(value.bitmap);
          const data = value.hdr
            ? new Float16Array(pixels.data.buffer, pixels.data.byteOffset, 4)
            : pixels.data;
          if (pixels.colorSpace !== colorSpace || pixels.pixelFormat !== pixelFormat ||
              pixels.premultiplied !== value.hdr ||
              data.join() !== (value.hdr ? '0.75,-0.125,0.015625,0.5' : '17,34,51,255'))
            throw Error('Cross-realm bitmap pixels: ' + pixelFormat);
        }
      }
      function transfers(values) {
        return values.flatMap(value => [value.bitmap, value.buffer, value.bytes]);
      }
      function entry(checkImages, verifyGraphs, transfers) {
        onmessage = async ({data}) => {
          try {
            if (data.check) { postMessage({checked:await checkImages(postMessage)}); return; }
            verifyGraphs(data.values);
            if (data.nested) {
              const source = '('+entry.toString()+')('+[checkImages,verifyGraphs,transfers].join(',')+')';
              const url = URL.createObjectURL(new Blob([source]));
              const child = new Worker(url);
              const values = await new Promise((resolve,reject) => {
                child.onerror = event => reject(Error(event.message));
                child.onmessage = ({data}) => data.error ? reject(Error(data.error)) : resolve(data.values);
                child.postMessage({values:data.values},transfers(data.values));
              });
              URL.revokeObjectURL(url);
              verifyGraphs(values);
              postMessage({values},transfers(values));
            } else {
              const values = structuredClone(data.values);
              for (const value of data.values) value.bitmap.close();
              verifyGraphs(values);
              postMessage({values},transfers(values));
            }
            close();
          } catch(error) { postMessage({error:String(error.stack||error)}); close(); }
        };
      }
      const source = '('+entry.toString()+')('+[checkImages,verifyGraphs,transfers].join(',')+')';
      const url = URL.createObjectURL(new Blob([source]));
      for (const nested of [false,true]) {
        const worker = new Worker(url);
        if (!nested) await checkImages((value,list) => worker.postMessage(value,list));
        const receive = () => new Promise((resolve,reject) => {
          worker.onerror = event => reject(Error(event.message));
          worker.onmessage = ({data}) => data.error ? reject(Error(data.error)) : resolve(data);
        });
        let answer = receive(); worker.postMessage({check:true});
        if (!(await answer).checked) throw Error('Worker image checks omitted');
        const values = [];
        for (const hdr of [false,true]) {
          const data = hdr ? new Float16Array(new ArrayBuffer(16),4,4) : new Uint8ClampedArray(4);
          data.set(hdr ? [1.5,-0.25,0.03125,0.5] : [17,34,51,255]);
          const settings = hdr ? {colorSpace:'display-p3',pixelFormat:'rgba-float16'} : undefined;
          const image = new ImageData(data,1,1,settings);
          const bitmap = await createImageBitmap(image, hdr ? {premultiplyAlpha:'premultiply'} : undefined);
          const bytes = new ArrayBuffer(5);
          values.push({hdr,image,alias:image,data,buffer:data.buffer,bitmap,again:bitmap,bytes,map:new Map([[image,bitmap]])});
        }
        answer = receive();
        worker.postMessage({values,nested},nested ? transfers(values) : []);
        for (const {hdr,bitmap,data} of values)
          if (bitmap.width !== (nested ? 0 : 1) || data.byteLength !== (nested ? 0 : hdr ? 8 : 4))
            throw Error('Sender ownership');
        const returned = (await answer).values;
        await new Promise(resolve => setTimeout(resolve,20));
        verifyGraphs(returned);
        for (const value of [...returned,...values]) value.bitmap.close();
      }
      URL.revokeObjectURL(url);
    ''', waitForWorkersToExit: true);
    },
  );
  test(
    'Worker image-only checkpoints sweep real garbage in root and Worker',
    () async {
      await script(r'''
      async function collectImages() {
        const host = globalThis[Symbol.for('flax.image.host')];
        let released = 0;
        async function allocate() {
          const bitmap = await createImageBitmap(new ImageData(16, 16));
          host.onClose(bitmap, () => released++);
          return new WeakRef(bitmap);
        }
        const refs = [await allocate(), await allocate()];
        for (let attempt = 0; attempt < 40 && released < refs.length; attempt++) {
          globalThis.imageGarbage = [];
          for (let i = 0; i < 100; i++) imageGarbage.push(new Array(20000).fill(i));
          globalThis.imageGarbage = null;
          await new Promise(resolve => setTimeout(resolve, 5));
        }
        if (released !== refs.length || refs.some(ref => ref.deref() !== undefined))
          throw Error('Image-only checkpoint did not collect and release bitmaps: ' + released);
        const alive = await createImageBitmap(new ImageData(1, 1));
        if (alive.width !== 1) throw Error('Image host stopped after garbage collection');
        alive.close();
        return released;
      }
      await collectImages();
      const url = URL.createObjectURL(new Blob([
        `(${collectImages.toString()})().then(count=>{postMessage({count});close()},
          error=>{postMessage({error:String(error.stack||error)});close()});`,
      ]));
      const result = await new Promise((resolve, reject) => {
        const worker = new Worker(url);
        worker.onmessage = ({data}) => data.error ? reject(Error(data.error)) : resolve(data);
        worker.onerror = event => reject(Error(event.message));
      });
      URL.revokeObjectURL(url);
      if (result.count !== 2) throw Error('Worker GC receipt missing');
    ''', waitForWorkersToExit: true);
    },
  );
  test(
    'Worker still-image shutdown drops late codecs and unopened mixed packets',
    () async {
      await script(r'''
      const host = globalThis[Symbol.for('flax.image.host')];
      const input = new ImageData(256, 256);
      input.data.fill(255);
      const blob = await host.encode(host.read(input), 'image/png');
      function producer() {
        onmessage = async ({data}) => {
          try {
            const host = globalThis[Symbol.for('flax.image.host')];
            const retained = await createImageBitmap(new ImageData(16, 16));
            // Shutdown must release native ownership without running application cleanup.
            host.onClose(retained, () => { for (;;) {} });
            globalThis.retainedImage = retained;
            const work = data.mode.includes('decode')
              ? createImageBitmap(data.blob)
              : createImageBitmap(new ImageData(1024, 1024), {resizeWidth:512});
            work.then(() => postMessage({late:true}), () => postMessage({late:true}));
            // Blob.arrayBuffer and decode dispatch run before shutdown, without yielding a task.
            await Promise.resolve();
            await Promise.resolve();
            postMessage({armed:true});
            if (data.mode.startsWith('close')) close();
            else for (;;) {}
          } catch (error) {
            postMessage({error:String(error.stack || error)});
          }
        };
      }
      const url = URL.createObjectURL(new Blob([`(${producer.toString()})();`]));
      try {
        for (const mode of ['close-transform','terminate-transform','close-decode','terminate-decode']) {
          const worker = new Worker(url);
          await new Promise((resolve, reject) => {
            worker.onmessage = ({data}) => data.armed ? resolve() : reject(Error(JSON.stringify(data)));
            worker.onerror = event => reject(Error(event.message));
            worker.postMessage({mode, blob});
          });
          if (mode.startsWith('terminate')) worker.terminate();
          await new Promise(resolve => setTimeout(resolve, 10));
        }
        const parentUrl = URL.createObjectURL(new Blob([`
          const child = new Worker(${JSON.stringify(url)});
          child.onmessage = ({data}) => postMessage(data);
          onmessage = ({data}) => child.postMessage(data);
        `]));
        const parent = new Worker(parentUrl);
        await new Promise((resolve, reject) => {
          parent.onmessage = ({data}) => data.armed ? resolve() : reject(Error(JSON.stringify(data)));
          parent.onerror = event => reject(Error(event.message));
          parent.postMessage({mode:'terminate-decode', blob});
        });
        parent.terminate();
        URL.revokeObjectURL(parentUrl);

        const neverUrl = URL.createObjectURL(new Blob(['await new Promise(()=>{})']));
        const unopened = new Worker(neverUrl, {type:'module'});
        const bitmap = await createImageBitmap(input);
        const copy = structuredClone(bitmap);
        const bytes = new ArrayBuffer(8);
        unopened.postMessage({image:bitmap, again:bitmap}, [bitmap, bytes]);
        if (bitmap.width !== 0 || bytes.byteLength !== 0) throw Error('Dropped packet did not detach');
        unopened.terminate();
        URL.revokeObjectURL(neverUrl);
        await new Promise(resolve => setTimeout(resolve, 50));
        if (copy.width !== 256 || host.read(copy).data[0] !== 255)
          throw Error('Receiver lost pixels when a different owner retired');
        copy.close();
        const after = await createImageBitmap(blob);
        if (after.width !== 256 || host.read(after).data[0] !== 255)
          throw Error('Root image host failed after Worker retirement');
        after.close();
      } finally {
        URL.revokeObjectURL(url);
      }
    ''', waitForWorkersToExit: true);
    },
  );
  test(
    'Session close retires pending Worker images without application teardown',
    () async {
      await script(r'''
      const worker = new Worker(URL.createObjectURL(new Blob([`
        (async () => {
          const host = globalThis[Symbol.for('flax.image.host')];
          globalThis.bitmap = await createImageBitmap(new ImageData(32,32));
          host.onClose(bitmap, () => { for (;;) {} });
          createImageBitmap(new ImageData(1024,1024), {resizeWidth:512})
            .then(() => { for (;;) {} }, () => { for (;;) {} });
          postMessage('armed');
          for (;;) {}
        })();
      `])));
      await new Promise((resolve,reject) => {
        worker.onmessage = ({data}) => data === 'armed' ? resolve() : reject(Error(String(data)));
        worker.onerror = event => reject(Error(event.message));
      });
      // The harness closes the Session while CPU work and the Worker runtime are live.
    ''');
    },
  );
  test('Worker host entries recheck resource and inline source URLs', () async {
    final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    final cache = await Directory.systemTemp.createTemp(
      'flax-worker-resource-guard-',
    );
    var contacts = 0;
    server.listen((request) async {
      contacts++;
      request.response.headers.contentType = ContentType(
        'application',
        'javascript',
      );
      request.response.write('forbidden-body');
      await request.response.close();
    });
    final origin = 'http://127.0.0.1:${server.port}';
    final remoteLoaderCalls = <Uri>[];
    try {
      await script(
        '''
        const source=`(async()=>{
          const changed=new Request('flax://fixture/local');
          let reads=0;
          Object.defineProperty(changed,'url',{get(){
            return ++reads===1?'flax://fixture/local':'$origin/secret';
          }});
          for(const request of [changed,'flax://fixture/metadata','flax://fixture/redirect']) {
            let delivered=false,denied=false;
            try{await(await fetch(request)).text();delivered=true}catch{denied=true}
            if(delivered || !denied)throw Error('non-local resource body delivered');
          }
          const bytes=new Uint8Array(await(await fetch('flax://fixture/local.wasm')).arrayBuffer());
          if(bytes.length!==8 || bytes[0]!==0 || bytes[1]!==97)throw Error('Wasm byte read gained execution guard');
          if(typeof __flaxBaseCall!=='function')throw Error('Worker host bridge unavailable');
          let importDenied=false;
          try{__flaxBaseCall('workerImportSource','globalThis.badImport=true','$origin/unread.js')}
          catch{importDenied=true}
          if(!importDenied || globalThis.badImport)throw Error('non-Blob import source accepted');
        })().then(()=>{postMessage('guarded');close()},e=>{postMessage(String(e.stack||e));close()});`;
        const answer=await new Promise((resolve,reject)=>{
          const worker=new Worker(URL.createObjectURL(new Blob([source])));
          worker.onmessage=e=>resolve(e.data);worker.onerror=e=>reject(Error(e.message));
        });
        if(answer!=='guarded')throw Error(answer);
        const originalFetch=globalThis.fetch;
        for(const url of [${jsonEncode('$origin/inline.js')},'file:///unread.js',
          'flax://fixture/unread.js','blob://user:pass@localhost/unread.js']) {
          let worker;
          try {
            globalThis.fetch=async()=>{
              const response=new Response('postMessage("unvalidated-start");close()');
              Object.defineProperty(response,'url',{value:url});return response;
            };
            worker=new Worker('data:text/javascript,postMessage("original");close()');
          } finally {globalThis.fetch=originalFetch}
          const result=await new Promise(resolve=>{
            worker.onmessage=()=>resolve('executed');worker.onerror=()=>resolve('rejected');
          });
          worker.terminate();
          if(result!=='rejected')throw Error('inline source accepted non-inline URL '+url);
        }
      ''',
        approved: false,
        waitForWorkersToExit: true,
        loadModule: (request) async {
          if (request.uri.scheme == 'http' || request.uri.scheme == 'https') {
            remoteLoaderCalls.add(request.uri);
            return FlaxApplication.loadRemoteModule(
              request,
              cacheDirectory: cache,
            );
          }
          if (request.uri.path == '/redirect') {
            final target = Uri.parse('$origin/redirected');
            request.authorize?.call(target);
            return FlaxApplication.loadRemoteModule(
              FlaxModuleRequest(
                uri: target,
                expectedKind: request.expectedKind,
                cancelled: request.cancelled,
                authorize: request.authorize,
              ),
              cacheDirectory: cache,
            );
          }
          return FlaxModuleSource(
            uri: request.uri.path == '/metadata'
                ? Uri.parse('$origin/returned')
                : request.uri,
            kind: request.uri.path.endsWith('.wasm')
                ? FlaxModuleKind.wasm
                : FlaxModuleKind.javascript,
            bytes: request.uri.path.endsWith('.wasm')
                ? Uint8List.fromList([0, 97, 115, 109, 1, 0, 0, 0])
                : Uint8List.fromList(utf8.encode('forbidden-body')),
          );
        },
      );
      expect(remoteLoaderCalls, isEmpty);
      expect(contacts, 0);
    } finally {
      await server.close(force: true);
      await cache.delete(recursive: true);
    }
  });
  test('unapproved Blob and data Workers keep JS but reject network, modules and every Wasm path', () async {
    await script(
      r'''
      const source=`onmessage=async({data:received})=>{
        const denied=[];
        const bytes=new Uint8Array([0,97,115,109,1,0,0,0]);
        const response=()=>new Response(bytes,{headers:{'content-type':'application/wasm'}});
        for(const action of [
          ()=>fetch('https://denied.invalid/data'),
          ()=>import('https://denied.invalid/module.js'),
          ()=>import('flax://fixture/denied.wasm'),
          ()=>new WebAssembly.Memory({initial:1}),
          ()=>new WebAssembly.Memory.prototype.constructor({initial:1}),
          ()=>new WebAssembly.Module(bytes),
          ()=>new WebAssembly.Module.prototype.constructor(bytes),
          ()=>new WebAssembly.Instance(received),
          ()=>new WebAssembly.Instance.prototype.constructor(received),
          ()=>WebAssembly.validate(bytes),
          ()=>WebAssembly.compile(bytes),
          ()=>WebAssembly.instantiate(bytes),
          ()=>WebAssembly.compileStreaming(response()),
          ()=>WebAssembly.instantiateStreaming(response())]) {
          try { await action(); denied.push('allowed'); }
          catch(e){denied.push([e.name,e.code,e.reason]);}
        }
        postMessage(denied);close();
      };`;
      for(const url of [URL.createObjectURL(new Blob([source])),
        'data:text/javascript,'+encodeURIComponent(source)]) {
        const data=await new Promise((resolve,reject)=>{
          const worker=new Worker(url,{type:'module'});
          worker.onmessage=e=>resolve(e.data);worker.onerror=e=>reject(new Error(e.message));
          worker.postMessage(trustedModule);
        });
        if(data.length!==14 || data.some(e=>e[0]!=='FlaxPermissionError' ||
          e[1]!=='FLAX_PERMISSION_DENIED' || e[2]!=='notDeclared'))
          throw Error('Worker permission bypass: '+JSON.stringify(data));
      }
    ''',
      approved: false,
      prepareRuntime: (runtime) => runtime.evaluate(
        'globalThis.trustedModule=new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0]));undefined;',
      ),
      loadModule: (request) async => FlaxModuleSource(
        uri: request.uri,
        kind: FlaxModuleKind.wasm,
        bytes: Uint8List.fromList([0, 97, 115, 109, 1, 0, 0, 0]),
      ),
      waitForWorkersToExit: true,
    );
  });
  test('Worker network and module grants are separate and redirects never contact denied origins', () async {
    final deniedServer = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    final allowedServer = await HttpServer.bind(
      InternetAddress.loopbackIPv4,
      0,
    );
    var deniedContacts = 0;
    deniedServer.listen((request) async {
      deniedContacts++;
      await request.response.close();
    });
    allowedServer.listen((request) async {
      request.response.headers.contentType = ContentType(
        'application',
        'javascript',
      );
      if (request.uri.path == '/redirect.js') {
        request.response.statusCode = 302;
        request.response.headers.set(
          HttpHeaders.locationHeader,
          'http://127.0.0.1:${deniedServer.port}/denied.js',
        );
      } else if (request.uri.path == '/entry.js') {
        request.response.write('postMessage(42);close()');
      } else {
        request.response.write('body');
      }
      await request.response.close();
    });
    final origin = 'http://127.0.0.1:${allowedServer.port}';
    try {
      for (final module in [false, true]) {
        final fixture = await FlaxTestPermissions.create(
          permissions: {
            module ? 'flax.module.remote' : 'flax.network': {
              'origins': [origin],
            },
          },
        );
        try {
          await script(
            '''
            const origin=${jsonEncode(origin)}, module=$module;
            const worker=new Worker(URL.createObjectURL(new Blob([`
              let result;try{result=await(await fetch('$origin/body')).text()}
              catch(e){result=e.code}postMessage(result);close();
            `])),{type:'module'});
            const fetched=await new Promise((resolve,reject)=>{worker.onmessage=e=>resolve(e.data);worker.onerror=e=>reject(e.message)});
            if(fetched!==(module?'FLAX_PERMISSION_DENIED':'body'))throw Error('network grant confused '+module+': '+JSON.stringify(fetched));
            for(const path of ['/entry.js','/redirect.js']) {
              const result=await new Promise((resolve)=>{
                const worker=new Worker(origin+path);
                worker.onmessage=e=>resolve(e.data);worker.onerror=e=>resolve(e.message);
              });
              if(module) {
                const expected=path==='/entry.js' ? 42 :
                  'HttpException: Default downloader only follows same-origin redirects';
                if(result!==expected)throw Error('module grant or redirect boundary '+result);
              } else if(!String(result).includes('FLAX_PERMISSION_DENIED')) {
                throw Error('network permission granted module access '+result);
              }
            }
            if(!module) {
              const source=`try{await fetch('$origin/redirect.js');postMessage('allowed')}
                catch(e){postMessage(e.code)}close()`;
              const result=await new Promise((resolve,reject)=>{
                const worker=new Worker(URL.createObjectURL(new Blob([source])),{type:'module'});
                worker.onmessage=e=>resolve(e.data);worker.onerror=e=>reject(e.message);
              });
              if(result!=='FLAX_PERMISSION_DENIED')throw Error('network redirect escaped');
            }
          ''',
            permissions: fixture,
            waitForWorkersToExit: true,
          );
        } finally {
          await fixture.close();
        }
      }
      expect(deniedContacts, 0);
    } finally {
      await allowedServer.close(force: true);
      await deniedServer.close(force: true);
    }
  });
  test('Worker module cache and completed Fetch retain authority without closing the parent Session', () async {
    final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    var moduleRequests = 0;
    server.listen((request) async {
      if (request.uri.path == '/module.js') {
        moduleRequests++;
        request.response.headers.contentType = ContentType(
          'application',
          'javascript',
        );
        request.response.write("export const value='body'");
      } else {
        request.response.write('body');
      }
      await request.response.close();
    });
    final origin = 'http://127.0.0.1:${server.port}';
    try {
      for (final permission in ['flax.network', 'flax.module.remote']) {
        final fixture = await FlaxTestPermissions.create(
          permissions: {
            permission: {
              'origins': [origin],
            },
          },
        );
        try {
          final task = permission == 'flax.network'
              ? "const value=await(await fetch('$origin/body')).text();"
              : "const a=await import('$origin/module.js'),b=await import('$origin/module.js');if(a!==b)throw Error('module cache identity');const value=a.value;";
          await script(
            '''
            const child=${jsonEncode('$task postMessage(value);while(true){}')};
            const parent=`const worker=new Worker(URL.createObjectURL(new Blob([\${JSON.stringify(child)}])),{type:'module'});
              worker.onmessage=e=>postMessage(e.data);worker.onerror=e=>{throw Error(e.message)};`;
            let messages=0;
            const worker=new Worker(URL.createObjectURL(new Blob([parent])));
            await new Promise((resolve,reject)=>{
              worker.onerror=e=>reject(Error(e.message));
              worker.onmessage=e=>{messages++;if(e.data!=='body')reject(Error('body changed'));else resolve();};
            });
            globalThis.workerSignal=true;
            await new Promise(resolve=>globalThis.finishRevocation=resolve);
            await new Promise(resolve=>setTimeout(resolve,30));
            if(messages!==1)throw Error('late Worker delivery');
          ''',
            permissions: fixture,
            waitForWorkersToExit: true,
            whileRunning: (runtime) async {
              await waitForWorkerSignal(runtime);
              await fixture.manager.revoke(fixture.application, permission);
              await waitForWorkerRetirement(runtime);
              expect((runtime.evaluate('21*2') as FlaxJsNumber).value, 42);
              runtime.evaluate('finishRevocation();undefined;');
            },
          );
        } finally {
          await fixture.close();
        }
      }
      expect(
        moduleRequests,
        1,
        reason: 'the repeated Worker import uses its module cache',
      );
    } finally {
      await server.close(force: true);
    }
  });
  test(
    'permission revocation cancels a Worker Fetch waiting for headers',
    () async {
      final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
      final requested = Completer<void>();
      server.listen((request) {
        if (!requested.isCompleted) requested.complete();
      });
      final origin = 'http://127.0.0.1:${server.port}';
      final fixture = await FlaxTestPermissions.create(
        permissions: {
          'flax.network': {
            'origins': [origin],
          },
        },
      );
      try {
        await script(
          '''
        let messages=0;
        const worker=new Worker(URL.createObjectURL(new Blob([`
          fetch('$origin/pending').then(()=>postMessage('late'),()=>postMessage('denied'));
        `])));
        worker.onmessage=()=>messages++;
        await new Promise(resolve=>globalThis.finishRevocation=resolve);
        await new Promise(resolve=>setTimeout(resolve,30));
        if(messages!==0)throw Error('pending Fetch delivered after revoke');
      ''',
          permissions: fixture,
          waitForWorkersToExit: true,
          whileRunning: (runtime) async {
            await requested.future.timeout(const Duration(seconds: 10));
            await fixture.manager.revoke(fixture.application, 'flax.network');
            await waitForWorkerRetirement(runtime);
            runtime.evaluate('finishRevocation();undefined;');
          },
        );
      } finally {
        await fixture.close();
        await server.close(force: true);
      }
    },
  );
  test(
    'revoking startup Wasm authority interrupts executing nested Workers',
    () async {
      final fixture = await FlaxTestPermissions.create(
        permissions: {'flax.wasm': null},
      );
      try {
        await script(
          r'''
        const child=`new WebAssembly.Memory({initial:1});postMessage('ready');while(true){}`;
        const parent=`const child=new Worker(URL.createObjectURL(new Blob([${JSON.stringify(child)}])));
          child.onmessage=e=>postMessage(e.data);child.onerror=e=>{throw Error(e.message)};`;
        const worker=new Worker(URL.createObjectURL(new Blob([parent])));
        await new Promise((resolve,reject)=>{worker.onmessage=resolve;worker.onerror=e=>reject(Error(e.message));});
        globalThis.workerSignal=true;
        await new Promise(resolve=>globalThis.finishRevocation=resolve);
      ''',
          permissions: fixture,
          waitForWorkersToExit: true,
          whileRunning: (runtime) async {
            await waitForWorkerSignal(runtime);
            await fixture.manager.revoke(fixture.application, 'flax.wasm');
            await waitForWorkerRetirement(runtime);
            expect((runtime.evaluate('21*2') as FlaxJsNumber).value, 42);
            runtime.evaluate('finishRevocation();undefined;');
          },
        );
      } finally {
        await fixture.close();
      }
    },
  );
  test(
    'packaged and file Workers reuse module boundaries and load Wasm resources',
    () async {
      final root = await Directory.systemTemp.createTemp(
        'flax-worker-resources-',
      );
      try {
        final sources = <String, String>{
          'app.js': "import {runApp,Text} from '@flax/flutter/widgets'; runApp(Text('Resources'));",
          'classic.js': 'onmessage=()=>postMessage(42)',
          'worker.js': """
          import {n} from './dep.js';
          onmessage=async()=>{
            const wasm = await WebAssembly.compile(await (await fetch(new URL('./empty.wasm',import.meta.url))).arrayBuffer());
            let denied = false;
            try { await fetch(new URL('../outside.wasm',import.meta.url)); } catch { denied=true; }
            postMessage({n, wasm:wasm instanceof WebAssembly.Module, denied});
          };
        """,
          'dep.js': 'export const n=42',
          'undeclared.js': 'postMessage("must not execute")',
        };
        for (final entry in sources.entries) {
          await File('${root.path}/${entry.key}').writeAsString(entry.value);
        }
        await File('${root.path}/empty.wasm')
            .writeAsBytes([0, 97, 115, 109, 1, 0, 0, 0]);
        await File('${root.path}/flax.assets.json')
            .writeAsString('{"formatVersion":1,"assets":{}}');
        await File('${root.path}/flax.json').writeAsString(
          jsonEncode({
            'id': 'worker.resources',
            'version': '1',
            'entry': 'app.js',
            'defaultLocale': 'en',
            'permissions': {
              'flax.wasm': {
                'purpose': {'en': 'Compile the checked-in Worker fixture'},
              },
            },
            'modules': {
              for (final key in sources.keys.where(
                (key) => key != 'undeclared.js',
              ))
                key: 'javascript',
              'empty.wasm': 'wasm',
            },
          }),
        );
        final packaged = await FlaxApplication.directory(root);
        final file = await FlaxApplication.file(File('${root.path}/app.js'));
        for (final application in [packaged, file]) {
          await script(
            r'''
          for (const type of ['classic','module']) {
            const worker = new Worker(type==='classic'?'./classic.js':'./worker.js',{type});
            const result = new Promise((resolve,reject)=>{worker.onmessage=e=>resolve(e.data);worker.onerror=e=>reject(new Error(e.message));});
            worker.postMessage(null);
            const answer = await result;
            if (type==='classic' ? answer!==42 : answer.n!==42 || !answer.wasm || !answer.denied) throw new Error('local worker failed');
            worker.terminate();
          }
          const denied = new Worker('../outside.js');
          await new Promise((resolve,reject)=>{denied.onerror=resolve;denied.onmessage=()=>reject(new Error('escaped root'));});
          denied.terminate();
        ''',
            application: application,
            waitForWorkersToExit: true,
          );
        }
        await script(
          r'''
        const worker = new Worker('./undeclared.js');
        await new Promise((resolve,reject)=>{worker.onerror=resolve;worker.onmessage=()=>reject(new Error('undeclared worker ran'));});
        worker.terminate();
      ''',
          application: packaged,
          waitForWorkersToExit: true,
        );
      } finally {
        await root.delete(recursive: true);
      }
    },
  );
  test(
    'Worker errors retain script positions and Promise rejection events retain identity',
    () => script(r'''
    const source = `
      const reasons=[];
      const late=Promise.reject('later');
      Promise.reject({value:42});
      const handled=Promise.reject('same-turn');
      queueMicrotask(()=>handled.catch(()=>{}));
      onunhandledrejection=event=>{
        event.preventDefault(); reasons.push(event.reason);
        if(reasons.length===2) {
          postMessage({kind:'unhandled',reasons,identity:event.promise instanceof Promise});
          setTimeout(()=>late.catch(()=>{}),10);
        }
      };
      onrejectionhandled=event=>{
        postMessage({kind:'handled',reason:event.reason,identity:event.promise===late}); close();
      };
    `;
    const worker=new Worker(URL.createObjectURL(new Blob([source])));
    await new Promise((resolve,reject)=>{
      let first=false;
      worker.onerror=e=>reject(new Error(e.message));
      worker.onmessage=({data})=>{
        if(data.kind==='unhandled') {
          first=data.identity && data.reasons.length===2 && data.reasons[0]==='later' && data.reasons[1].value===42;
        } else if(first && data.reason==='later' && data.identity) resolve();
        else reject(new Error('rejection semantics'));
      };
    });
    const primitive=new Worker(URL.createObjectURL(new Blob(['setTimeout(()=>{throw 42},0)'])));
    await new Promise((resolve,reject)=>{
      primitive.onerror=e=>{
        primitive.terminate();
        if(e.message==='42' && e.lineno===0 && e.colno===0) resolve();
        else reject(new Error('invented primitive position'));
      };
    });
    const url=URL.createObjectURL(new Blob(['\nfunction fail(){throw new Error("position-check")}\nsetTimeout(fail,0)']));
    const failing=new Worker(url);
    await new Promise((resolve,reject)=>{
      failing.onerror=e=>{
        failing.terminate();
        if(e.message.includes('position-check') && e.filename===url && e.lineno===2 && e.colno>0) resolve();
        else reject(new Error('missing position '+[e.message,e.filename,e.lineno,e.colno]));
      };
    });
  ''', waitForWorkersToExit: true),
  );
  test('termination cancels pending application resource loads', () async {
    var cancelled = false;
    await script(
      r'''
      const worker = new Worker('flax://pending/worker.js');
      const buffer = new ArrayBuffer(1024);
      worker.postMessage(buffer,[buffer]);
      if(buffer.byteLength!==0) throw new Error('pending transfer did not detach');
      worker.terminate(); worker.terminate();
      await new Promise(resolve=>setTimeout(resolve,0));
    ''',
      loadModule: (request) async {
        await request.cancelled;
        cancelled = true;
        throw StateError('cancelled resource');
      },
      waitForWorkersToExit: true,
    );
    expect(cancelled, isTrue);
    var fetchCancelled = false;
    await script(
      '''
      await new Promise((resolve,reject)=>{
        const worker=new Worker('flax://pending/worker.js');
        worker.onmessage=({data})=>data==='ok'?resolve():reject(new Error(data));
        worker.onerror=e=>reject(new Error(e.message));
      });
      ''',
      loadModule: (request) async {
        if (request.uri.path.endsWith('pending.json')) {
          await request.cancelled;
          fetchCancelled = true;
          throw StateError('request cancelled');
        }
        return FlaxModuleSource(
          uri: request.uri,
          kind: request.uri.path.endsWith('.json')
              ? FlaxModuleKind.json
              : FlaxModuleKind.javascript,
          bytes: Uint8List.fromList(
            utf8.encode(
              request.uri.path.endsWith('.json')
                  ? '{"value":42}'
                  : r'''
            (async()=>{
              const reason=new Error('pending abort'), controller=new AbortController();
              const pending=fetch('flax://pending/pending.json',{signal:controller.signal});
              setTimeout(()=>controller.abort(reason),0);
              let error;try{await pending}catch(e){error=e}
              if(error!==reason)throw new Error('pending abort reason');
              const bodyReason=new Error('body abort'), bodyController=new AbortController();
              const response=await fetch('flax://pending/ready.json',{signal:bodyController.signal});
              bodyController.abort(bodyReason);
              try{await response.arrayBuffer();throw new Error('body resolved')}catch(e){if(e!==bodyReason)throw e}
              const head=await fetch('flax://pending/ready.json',{method:'HEAD'});
              if(head.body!==null || head.headers.get('content-type')!=='application/json')throw new Error('HEAD metadata');
              postMessage('ok');close();
            })().catch(e=>postMessage(String(e.stack||e)));
            ''',
            ),
          ),
        );
      },
      waitForWorkersToExit: true,
    );
    expect(fetchCancelled, isTrue);
  });
  test(
    'detached carrier copies bytes and rejects Dart buffer sharing',
    () async {
      final result = await Isolate.run(() {
        final runtime = createDetachedWorkerRuntime();
        try {
          final bytes = Uint8List.fromList([1, 2, 3]);
          final buffer = runtime.createArrayBuffer(bytes);
          try {
            bytes[0] = 9;
            var rejectedWrite = false, rejectedRead = false;
            try {
              runtime.createUint8Array(bytes);
            } on UnsupportedError {
              rejectedWrite = true;
            }
            try {
              runtime.readUint8Array(buffer);
            } on UnsupportedError {
              rejectedRead = true;
            }
            return (
              runtime.readBytes(buffer).toList(),
              rejectedWrite,
              rejectedRead,
            );
          } finally {
            buffer.release();
          }
        } finally {
          runtime.dispose();
        }
      });
      expect(result.$1, [1, 2, 3]);
      expect(result.$2, isTrue);
      expect(result.$3, isTrue);
    },
  );
  test(
    'close delivers queued messages and releases workers before Session close',
    () => script(r'''
    const url = URL.createObjectURL(new Blob([
      'postMessage(1); postMessage(2); close();'
    ]));
    for (let i = 0; i < 10; i++) {
      await new Promise((resolve, reject) => {
        const worker = new Worker(url);
        const messages = [];
        worker.onerror = reject;
        worker.onmessage = ({data}) => {
          messages.push(data);
          if (messages.length === 2) {
            if (String(messages) !== '1,2') reject(new Error('message order'));
            else resolve();
          }
        };
      });
    }
    URL.revokeObjectURL(url);
  ''', waitForWorkersToExit: true),
  );
  test(
    'Worker clones graphs and transfers real buffer storage in both directions',
    () => script(r'''
    const url = URL.createObjectURL(new Blob([`
      onmessage = ({data}) => {
        if (typeof window !== 'undefined' || typeof document !== 'undefined' || self !== globalThis)
          throw new Error('wrong worker host');
        if (data.self !== data || data.map.get('self') !== data || data.big !== 123n)
          throw new Error('graph clone failed');
        const b = data.view.buffer;
        data.view[0] += 1; data.second[0] += 1;
        postMessage(data, [data.second.buffer, b]);
        if (b.byteLength !== 0) throw new Error('worker transfer did not detach');
      };
    `], {type:'text/javascript'}));
    const worker = new Worker(url);
    URL.revokeObjectURL(url);
    const a = new ArrayBuffer(128), view = new Uint8Array(a, 3, 9);
    view[0] = 41;
    const second = new Uint32Array([17]);
    const value = {view, second, map:new Map(), big:123n, date:new Date(42)};
    value.self=value; value.map.set('self',value);
    const answer = new Promise((resolve,reject) => {
      worker.onmessage = e => resolve(e.data);
      worker.onerror = e => reject(new Error(e.message));
    });
    worker.postMessage(value, {transfer:[a, second.buffer]});
    if (a.byteLength !== 0) throw new Error('parent transfer did not detach');
    const returned = await answer;
    if (returned.self !== returned || returned.map.get('self') !== returned ||
        returned.view.byteOffset !== 3 || returned.view[0] !== 42 || returned.second[0] !== 18 || returned.date.getTime() !== 42)
      throw new Error('round trip clone failed');
    worker.terminate(); worker.terminate();
  '''),
  );
  test(
    'DataCloneError validates transfer lists before detaching',
    () => script(r'''
    const worker = new Worker(URL.createObjectURL(new Blob(['onmessage = ({data}) => postMessage(data)'])));
    const a = new ArrayBuffer(8);
    for (const [value, list] of [[{},[a,a]], [()=>{},[a]], [{},[new Uint8Array(a)]],
      [new Response('x'),[]], [Promise.resolve(1),[]]]) {
      let error;
      try { worker.postMessage(value,list); } catch(e) { error=e; }
      if (!(error instanceof DOMException) || error.name !== 'DataCloneError' || a.byteLength !== 8)
        throw new Error('invalid clone accepted or buffer detached: '+error);
    }
    const failure = new Error('getter failed');
    try { worker.postMessage({get x(){throw failure;}},[a]); throw new Error('getter ignored'); }
    catch(error) { if(error !== failure || a.byteLength !== 8) throw new Error('getter failure changed'); }
    const primitive = new Promise(resolve => worker.onmessage=e=>resolve(e.data===undefined));
    worker.postMessage(undefined);
    if (!await primitive) throw new Error('undefined message changed');
    worker.terminate();
  '''),
  );
  test(
    'Core structuredClone preserves platform values and transfer atomicity',
    () => script(r"""
    const check=(v,m)=>{if(!v)throw new Error(m)};
    check(navigator.hardwareConcurrency>=1,'processor count');
    const file=new File(['hello'], 'greeting.txt',{type:'TEXT/PLAIN',lastModified:42});
    const value={file,again:file,blob:new Blob(['bytes']),error:new DOMException('bad','DataError'),map:new Map()};
    value.self=value;value.map.set(file,value);
    const copy=structuredClone(value);
    check(copy!==value && copy.self===copy && copy.again===copy.file && copy.map.get(copy.file)===copy,'graph identity');
    check(copy.file instanceof File && copy.file.name==='greeting.txt' && copy.file.lastModified===42 && copy.file.type==='text/plain','File metadata');
    check(await copy.file.text()==='hello' && await copy.blob.text()==='bytes','Blob contents');
    const mark=performance.mark('platform-detail',{detail:file});
    check(mark.detail instanceof File && mark.detail!==file && await mark.detail.text()==='hello','User Timing uses native clone');
    check(copy.error instanceof DOMException && copy.error.name==='DataError' && copy.error.message==='bad','DOMException clone');
    const hostile={toString:1,valueOf:1};
    for(const [object,fields] of [[file,['type','name','lastModified']],[value.blob,['type']],[value.error,['name','message']]]){
      for(const field of fields)Object.defineProperty(object,field,{value:hostile,configurable:true});
      const buffer=new ArrayBuffer(8),clone=structuredClone(object,{transfer:[buffer]});
      check(buffer.byteLength===0,'host metadata transfer');
      if(object===file)check(clone.name==='greeting.txt' && clone.type==='text/plain' && clone.lastModified===42,'canonical File metadata');
      else if(object===value.blob)check(clone.type==='' && await clone.text()==='bytes','canonical Blob metadata');
      else check(clone.name==='DataError' && clone.message==='bad','canonical DOMException metadata');
    }
    for(const value of [()=>{},Promise.resolve(),new Response('x'),new URL('https://example.test')]) {
      const buffer=new ArrayBuffer(8);let error;
      try{structuredClone(value,{transfer:[buffer]})}catch(e){error=e}
      check(error instanceof DOMException && error.name==='DataCloneError' && buffer.byteLength===8,'atomic clone failure');
    }
    const buffer=new ArrayBuffer(16);new Uint8Array(buffer)[3]=42;
    const cloned=structuredClone({view:new Uint8Array(buffer,3,5)},{transfer:[buffer]});
    check(buffer.byteLength===0 && cloned.view.byteOffset===3 && cloned.view[0]===42,'local transfer');
    const untouched=new ArrayBuffer(8);structuredClone(null,[untouched]);
    check(untouched.byteLength===8,'structuredClone takes an options dictionary');
    check(typeof FileReaderSync==='undefined','FileReaderSync is Worker-only');
  """),
  );
  test(
    'Worker clones Blob File Wasm modules and resizable backing stores',
    () => script(r"""
    const check=(v,m)=>{if(!v)throw new Error(m)};
    const source=`onmessage=async({data})=>{
      const reader=new FileReaderSync();
      if(reader.readAsText(data.file)!=='hello' || reader.readAsDataURL(data.blob)!=='data:application/octet-stream;base64,AQI=' ||
        reader.readAsBinaryString(data.blob)!=='\\x01\\x02' || new Uint8Array(reader.readAsArrayBuffer(data.blob))[1]!==2)
        throw new Error('FileReaderSync contents');
      if(!(data.module instanceof WebAssembly.Module) || !(await WebAssembly.instantiate(data.module) instanceof WebAssembly.Instance)) throw new Error('Wasm module');
      if(!data.buffer.resizable || data.buffer.maxByteLength!==64 || data.tracking.length!==8 || data.fixed.length!==4)throw new Error('resizable transfer');
      data.buffer.resize(16);
      if(data.tracking.length!==16 || data.fixed.length!==4)throw new Error('view tracking');
      const local=URL.createObjectURL(new Blob(['globalThis.imported=42']));WorkerGlobalScope.prototype.importScripts.call(self,local);URL.revokeObjectURL(local);
      if(imported!==42 || navigator.hardwareConcurrency<1)throw new Error('Worker host');
      const cloned=structuredClone(data);cloned.tag='cloned';postMessage(cloned);
      postMessage(data,[data.buffer]);close();
    }`;
    const module=await WebAssembly.compile(new Uint8Array([0,97,115,109,1,0,0,0]));
    const buffer=new ArrayBuffer(8,{maxByteLength:64});new Uint8Array(buffer)[0]=42;
    const file=new File(['hello'],'x.txt',{lastModified:42});
    const value={module,buffer,tracking:new Uint8Array(buffer),fixed:new Uint8Array(buffer,0,4),file,again:file,blob:new Blob([new Uint8Array([1,2])])};
    const worker=new Worker(URL.createObjectURL(new Blob([source])));
    const answers=[];
    await new Promise((resolve,reject)=>{
      worker.onerror=e=>reject(new Error(e.message));
      worker.onmessage=({data})=>{answers.push(data);if(answers.length===2)resolve()};
      worker.postMessage(value,[buffer]);check(buffer.byteLength===0,'resizable sender detached');
    });
    for(const data of answers){
      check(data.file instanceof File && data.again===data.file && await data.file.text()==='hello','returned File identity');
      check(data.module instanceof WebAssembly.Module && await WebAssembly.instantiate(data.module) instanceof WebAssembly.Instance,'returned Wasm module');
      check(data.buffer.resizable && data.buffer.maxByteLength===64 && data.buffer.byteLength===16 && data.tracking[0]===42,'returned backing store');
    }
  """, waitForWorkersToExit: true),
  );
  test(
    'Worker modules and Fetch resolve live parent and Worker Blob URLs',
    () => script(r"""
    const dep=URL.createObjectURL(new Blob(['export const n=42'],{type:'text/javascript'}));
    const resource=URL.createObjectURL(new Blob(['resource'],{type:'text/plain'}));
    const revoked=URL.createObjectURL(new Blob(['revoked']));URL.revokeObjectURL(revoked);
    const entry=URL.createObjectURL(new Blob([`
      import {n} from '${dep}';
      const response=await fetch('${resource}');
      if(response.headers.get('content-type')!=='text/plain')throw new Error('Blob MIME');
      const text=await response.text();
      const ranged=await fetch('${resource}',{headers:{range:'bytes=1-3'}});
      if(ranged.status!==206 || await ranged.text()!=='eso' || ranged.headers.get('content-range')!=='bytes 1-3/8')throw new Error('Blob range');
      let denied=false;try{await fetch('${revoked}')}catch{denied=true}
      const controller=new AbortController(),reason=new Error('parent Blob abort');
      const aborted=await fetch('${resource}',{signal:controller.signal});controller.abort(reason);
      try{await aborted.arrayBuffer();throw new Error('Blob body resolved after abort')}catch(e){if(e!==reason)throw e}
      const local=URL.createObjectURL(new Blob(['export const local=7'],{type:'text/javascript'}));
      const {local:value}=await import(local);URL.revokeObjectURL(local);
      postMessage({n,text,denied,value});close();
    `],{type:'text/javascript'}));
    const result=await new Promise((resolve,reject)=>{
      const worker=new Worker(entry,{type:'module'});
      worker.onmessage=e=>resolve(e.data);worker.onerror=e=>reject(new Error(e.message));
    });
    URL.revokeObjectURL(entry);URL.revokeObjectURL(dep);URL.revokeObjectURL(resource);
    if(result.n!==42 || result.text!=='resource' || !result.denied || result.value!==7)throw new Error('Blob resource broker');
  """, waitForWorkersToExit: true),
  );
  test(
    'Worker global prototypes and streaming Wasm use the real host',
    () => script(r"""
    const bytes=new Uint8Array([0,97,115,109,1,0,0,0]);
    if(typeof WebAssembly.compileStreaming!=='function')throw new Error('missing streaming API');
    const module=await WebAssembly.compileStreaming(Promise.resolve(new Response(bytes,{headers:{'content-type':'application/wasm'}})));
    if(!(module instanceof WebAssembly.Module))throw new Error('main streaming');
    const source=`
      if(!(self instanceof DedicatedWorkerGlobalScope) || !(self instanceof WorkerGlobalScope) || !(self instanceof EventTarget) ||
        !(navigator instanceof WorkerNavigator) || !(location instanceof WorkerLocation) || origin!==location.origin)
        throw new Error('Worker prototype chain');
      let delivered=false;const listener=e=>delivered=e.target===self;
      EventTarget.prototype.addEventListener.call(self,'probe',listener);
      EventTarget.prototype.dispatchEvent.call(self,new Event('probe'));
      EventTarget.prototype.removeEventListener.call(self,'probe',listener);
      if(!delivered)throw new Error('global EventTarget receiver');
      for(const [C,key,receiver,expected] of [
        [WorkerGlobalScope,'self',self,self],[WorkerGlobalScope,'navigator',self,navigator],
        [WorkerGlobalScope,'location',self,location],[WorkerGlobalScope,'origin',self,origin],
        [WorkerNavigator,'userAgent',navigator,navigator.userAgent],
        [WorkerNavigator,'platform',navigator,navigator.platform],
        [WorkerNavigator,'hardwareConcurrency',navigator,navigator.hardwareConcurrency],
        ...['href','origin','protocol','host','hostname','port','pathname','search','hash'].map(k=>[WorkerLocation,k,location,location[k]])
      ]){
        const getter=Object.getOwnPropertyDescriptor(C.prototype,key)?.get;
        if(!getter || getter.call(receiver)!==expected || Object.hasOwn(receiver,key))throw new Error('prototype getter '+key);
        let rejected=false;try{getter.call({})}catch(e){rejected=e instanceof TypeError}
        if(!rejected)throw new Error('getter receiver '+key);
      }
      if(WorkerLocation.prototype.toString.call(location)!==location.href)throw new Error('location stringifier');
      for(const [C,key] of [[WorkerGlobalScope,'importScripts'],[DedicatedWorkerGlobalScope,'postMessage'],[DedicatedWorkerGlobalScope,'close']]){
        if(Object.hasOwn(self,key) || typeof C.prototype[key]!=='function')throw new Error('scope method '+key);
        let rejected=false;try{C.prototype[key].call({})}catch(e){rejected=e instanceof TypeError}
        if(!rejected)throw new Error('method receiver '+key);
      }
      let importRejected=false;try{WorkerGlobalScope.prototype.importScripts.call(self)}catch(e){importRejected=e instanceof TypeError}
      if(!importRejected)throw new Error('prototype importScripts');
      const bytes=new Uint8Array([0,97,115,109,1,0,0,0]);
      let chunks=0;
      const response=new Response(new ReadableStream({pull(c){
        chunks++;if(chunks===1)c.enqueue(bytes.slice(0,4));else if(chunks===2)c.enqueue(bytes.slice(4));else c.close();
      }}),{headers:{'content-type':'application/wasm'}});
      const {module,instance}=await WebAssembly.instantiateStreaming(response,{});
      if(!(module instanceof WebAssembly.Module) || !(instance instanceof WebAssembly.Instance) || chunks!==3 || !response.bodyUsed)throw new Error('chunked streaming');
      const used=new Response(bytes,{headers:{'content-type':'application/wasm'}});await used.arrayBuffer();
      const locked=new Response(bytes,{headers:{'content-type':'application/wasm'}});locked.body.getReader();
      const reason=new Error('stream failed');
      const throwingUrl=new Response(bytes,{headers:{'content-type':'application/wasm'}});
      Object.defineProperty(throwingUrl,'url',{get(){throw reason}});
      for(const [response,expected] of [
        [new Response(bytes),'TypeError'],[new Response(bytes,{status:404,headers:{'content-type':'application/wasm'}}),'TypeError'],
        [used,'TypeError'],[locked,'TypeError'],[Promise.reject(reason),reason],
        [new Response(new Uint8Array([1,2]),{headers:{'content-type':'application/wasm'}}),'CompileError'],
        [new Response(new ReadableStream({start(c){c.error(reason)}}),{headers:{'content-type':'application/wasm'}}),reason],
        [throwingUrl,reason],
      ]){
        let error;try{await WebAssembly.compileStreaming(response)}catch(e){error=e}
        if(typeof expected==='string' ? error?.name!==expected : error!==expected)throw new Error('stream error propagation '+error);
      }
      DedicatedWorkerGlobalScope.prototype.postMessage.call(self,'ok');
      DedicatedWorkerGlobalScope.prototype.close.call(self);
    `;
    await new Promise((resolve,reject)=>{
      const worker=new Worker(URL.createObjectURL(new Blob([source])),{type:'module'});
      worker.onmessage=({data})=>data==='ok'?resolve():reject(new Error('stream result'));
      worker.onerror=e=>reject(new Error(e.message));
    });
  """, waitForWorkersToExit: true),
  );
  test(
    'Nested Workers transfer buffers and retire their descendants',
    () => script(r"""
    for(const mode of ['natural','terminate']){
      const inner='onmessage=({data})=>{new Uint8Array(data)[0]++;postMessage(data,[data]);if('+JSON.stringify(mode)+'==="natural")close();else while(true){}}';
      const outer=`
        const child=new Worker(URL.createObjectURL(new Blob([${JSON.stringify(inner)}])));
        child.onerror=e=>{throw new Error(e.message)};
        child.onmessage=({data})=>{postMessage(data,[data]);if(${JSON.stringify(mode)}==='natural')close()};
        onmessage=({data})=>child.postMessage(data,[data]);
      `;
      const worker=new Worker(URL.createObjectURL(new Blob([outer])));
      const result=await new Promise((resolve,reject)=>{
        worker.onmessage=e=>resolve(e.data);worker.onerror=e=>reject(new Error(e.message));
        const buffer=new Uint8Array([41]).buffer;worker.postMessage(buffer,[buffer]);
        if(buffer.byteLength!==0)reject(new Error('nested input did not detach'));
      });
      if(new Uint8Array(result)[0]!==42)throw new Error('nested buffer result');
      if(mode==='terminate')worker.terminate();
    }
    for(const mode of ['terminate','natural','close-busy','nested-terminate','nested-natural']){
      const nested=mode.startsWith('nested-');
      const streamSource=`
        let prefix=false;
        WebAssembly.compileStreaming(new Response(new ReadableStream({
          type:'bytes',
          pull(controller){
            if(!prefix){prefix=true;controller.enqueue(new Uint8Array([0,97,115,109,1,0,0,0]));return}
            postMessage('stream-reading');
            if(${JSON.stringify(mode)}==='natural')close();
            if(${JSON.stringify(mode)}==='close-busy'){close();while(true){}}
            return new Promise(()=>{});
          },
          cancel(){while(true){}}
        }),{headers:{'content-type':'application/wasm'}})).catch(()=>{});
      `;
      const source=nested?`
        const child=new Worker(URL.createObjectURL(new Blob([${JSON.stringify(streamSource)}])));
        child.onmessage=()=>{postMessage('stream-reading');if(${JSON.stringify(mode)}==='nested-natural')close()};
        child.onerror=e=>{throw new Error(e.message)};
      `:streamSource;
      const worker=new Worker(URL.createObjectURL(new Blob([source])),{name:'shutdown-'+mode});
      await new Promise((resolve,reject)=>{
        worker.onmessage=({data})=>data==='stream-reading'?resolve():reject(new Error('stream not reading'));
        worker.onerror=e=>reject(new Error(e.message));
      });
      if(mode!=='natural' && mode!=='nested-natural')worker.terminate();
    }
  """, waitForWorkersToExit: true),
  );
  test(
    'module Worker runs ESM, timers, Fetch, crypto and rejects importScripts',
    () => script('''
    const source = ${jsonEncode("""
      import { n } from 'data:text/javascript,export const n = 42';
      let moduleImportRejected = false;
      try { importScripts(); } catch(e) { moduleImportRejected = e instanceof TypeError; }
      const observedError = new Promise(resolve => {
        onerror = (message, filename, line, column, error) => {
          resolve(typeof message === 'string' && error instanceof Error);
          return true;
        };
        setTimeout(() => {throw new Error('handled worker timer');}, 0);
      });
      onmessage = async () => {
        const text = await (await fetch('data:text/plain,worker-fetch')).text();
        await new Promise(resolve => setTimeout(resolve, 1));
        performance.mark('ready');
        postMessage({n, text, name, observedError:await observedError, uuid:crypto.randomUUID(), moduleImportRejected,
          wasm: await WebAssembly.compile(new Uint8Array([0,97,115,109,1,0,0,0])).then(()=>true)});
        close();
      };
    """)};
    const worker = new Worker(URL.createObjectURL(new Blob([source])), {type:'module',name:'decoder'});
    const answer = new Promise((resolve,reject)=> {
      worker.onmessage=e=>resolve(e.data); worker.onerror=e=>reject(new Error(e.message));
    });
    worker.postMessage(null);
    const data = await answer;
    if (data.n!==42 || data.text!=='worker-fetch' || data.uuid.length!==36 || !data.wasm || !data.moduleImportRejected || data.name!=='decoder' || !data.observedError)
      throw new Error('module environment failed');
    worker.terminate();
  '''),
  );
  test(
    'uncaught errors, loading failure, termination and repeated lifecycle',
    () => script(r'''
    for (const source of ['throw new Error("expected-worker-error")','this is not valid JavaScript']) {
      const worker = new Worker(URL.createObjectURL(new Blob([source])));
      await new Promise((resolve,reject) => {worker.onerror=e=>{worker.terminate();resolve();};worker.onmessage=()=>reject('unexpected message');});
    }
    const missing = new Worker('blob:null/missing');
    await new Promise(resolve=>{missing.onerror=()=>{missing.terminate();resolve();};});
    const loops = [
      'onmessage=()=>{postMessage(1);for(;;){}}',
      'onmessage=()=>Promise.resolve().then(()=>{postMessage(1);for(;;){}})',
      'onmessage=()=>{const module=new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,7,7,1,3,114,117,110,0,0,10,9,1,7,0,3,64,12,0,11,11]));const instance=new WebAssembly.Instance(module);postMessage(1);instance.exports.run();}'
    ];
    for(let i=0;i<10;i++) {
      const worker = new Worker(URL.createObjectURL(new Blob([loops[i%loops.length]])));
      const started = new Promise((resolve,reject)=>{worker.onmessage=resolve;worker.onerror=e=>reject(e.message);});
      worker.postMessage(0); await started; worker.terminate();
    }
  '''),
  );
  test(
    'session close interrupts execution and cancels unresolved module startup',
    () => script(r'''
    const stuck = new Worker(URL.createObjectURL(new Blob(['await new Promise(()=>{})'])), {type:'module'});
    const busy = new Worker(URL.createObjectURL(new Blob(['postMessage(1); for(;;){}'])));
    const queued = new ArrayBuffer(8*1024*1024);
    busy.postMessage(queued, [queued]);
    if (queued.byteLength !== 0) throw new Error('Queued transfer must detach immediately');
    await new Promise((resolve,reject) => {busy.onmessage=resolve;busy.onerror=e=>reject(e.message);});
    const streaming=new Worker(URL.createObjectURL(new Blob([`
      let prefix=false;
      WebAssembly.compileStreaming(new Response(new ReadableStream({
        type:'bytes',
        pull(controller){
          if(!prefix){prefix=true;controller.enqueue(new Uint8Array([0,97,115,109,1,0,0,0]));return}
          postMessage('reading');return new Promise(()=>{});
        },cancel(){while(true){}}
      }),{headers:{'content-type':'application/wasm'}})).catch(()=>{});
    `])));
    await new Promise((resolve,reject)=>{streaming.onmessage=resolve;streaming.onerror=e=>reject(new Error(e.message));});
    // The Dart harness closes the Session with startup, execution and streaming still active.
  '''),
  );
  test(
    'HTTP classic and module Workers load scripts and relative dependencies',
    () async {
      final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
      server.listen((request) async {
        request.response.headers.contentType = ContentType(
          'application',
          'javascript',
        );
        switch (request.uri.path) {
          case '/classic.js':
            request.response.write('onmessage = () => postMessage(42)');
          case '/echo':
            request.response.write(await utf8.decoder.bind(request).join());
          case '/module.js':
            request.response.write(
              "import {n} from './value.js'; onmessage=async()=>{ const request=new Request(new URL('./echo',location.href),{method:'POST',body:'worker-body'}); postMessage([n,await(await fetch(request)).text()]); }",
            );
          case '/value.js':
            request.response.statusCode = HttpStatus.found;
            request.response.headers.set(
              HttpHeaders.locationHeader,
              '/deps/value.js',
            );
          case '/deps/value.js':
            request.response.write("export {n} from './number.js'");
          case '/deps/number.js':
            request.response.write('export const n=42');
          default:
            request.response.statusCode = 404;
        }
        await request.response.close();
      });
      try {
        await script('''
        for (const type of ['classic','module']) {
          const worker = new Worker('http://127.0.0.1:${server.port}/'+type+'.js',{type});
          const answer = new Promise((resolve,reject)=> {worker.onmessage=e=>resolve(e.data);worker.onerror=e=>reject(e.message);});
          worker.postMessage(0);
          const data=await answer;
          if (type==='classic' ? data!==42 : data[0]!==42 || data[1]!=='worker-body') throw new Error('HTTP Worker failed');
          worker.terminate();
        }
      ''');
      } finally {
        await server.close(force: true);
      }
    },
  );
  test('closing one Session preserves another Session worker on the shared UI heap', () async {
    final runtimes = <FlaxJsRuntime>[];
    FlaxSession create() => FlaxSession(
      createRuntime: () {
        final runtime = FlaxEngine.createRuntime();
        runtimes.add(runtime);
        return runtime;
      },
      source: "import {runApp,Text} from '@flax/flutter/widgets';runApp(Text('Host ready'));",
      bindings: FlaxBindingRegistry([flutterBindings]),
    );
    final first = create(), second = create();
    Future<void> wait(
      FlaxJsRuntime runtime,
      String name,
      double expected,
    ) async {
      final clock = Stopwatch()..start();
      while (clock.elapsedMilliseconds < 3000) {
        runtime.drainMicrotasks();
        final value = runtime.getGlobal(name);
        if (value is FlaxJsNumber && value.value == expected) return;
        await Future<void>.delayed(const Duration(milliseconds: 5));
      }
      fail('Independent Session worker did not respond');
    }

    try {
      await first.ready;
      await second.ready;
      for (final runtime in runtimes) {
        runtime.evaluate(
          "globalThis.answer=0;globalThis.worker=new Worker(URL.createObjectURL(new Blob(['onmessage=({data})=>postMessage(data)'])));worker.onmessage=e=>answer=e.data;worker.postMessage(1)",
        );
        await wait(runtime, 'answer', 1);
      }
      await first.close();
      runtimes[1].evaluate('worker.postMessage(42)');
      await wait(runtimes[1], 'answer', 42);
    } finally {
      await first.close();
      await second.close();
    }
    expect((runtimes.last as FlaxNativeJsRuntime).workerCountsForTesting(), (
      0,
      0,
    ));
  });
}
