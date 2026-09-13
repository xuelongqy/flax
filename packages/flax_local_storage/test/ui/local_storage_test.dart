import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart';
import '../support/runtime_tracker.dart';
import '../support/storage_io.dart';

class _Harness extends Harness {
  late RuntimeTracker tracker;
  @override
  FlaxJsRuntime create() {
    tracker = RuntimeTracker();
    runtimes.add(tracker);
    return tracker;
  }

  FlaxSession session([String? namespace]) => FlaxSession(
    namespace: namespace,
    createRuntime: create,
    source: source,
    bindings: registry,
    plugins: const [FlaxLocalStoragePlugin()],
    onError: (e, _) => errors.add(e),
  );
}

void main() {
  late Directory directory;
  setUp(() async {
    directory = await Directory.systemTemp.createTemp('flax-storage-host-');
  });
  tearDown(() async {
    Flax.registerPlugins([]);
    await FlaxLocalStoragePlugin.shutdown();
    await directory.delete(recursive: true);
  });

  testWidgets('initialization is explicit, shared and configuration checked', (
    t,
  ) async {
    final h = _Harness();
    final failed = h.session();
    await t.pumpWidget(MaterialApp(home: FlaxView.session(session: failed)));
    expect(h.errors.single.toString(), contains('initialize()'));
    await t.pumpWidget(const SizedBox());
    await t.pumpAndSettle();
    final failedClose = failed.close();
    await t.pumpAndSettle();
    await failedClose;
    expect(h.tracker.isDisposed, isTrue);
    await t.runAsync(() async {
      final blocker = File('${directory.path}/not-a-directory');
      await blocker.writeAsString('occupied');
      await expectLater(
        FlaxLocalStoragePlugin.initialize(directory: blocker.path),
        throwsA(isA<FileSystemException>()),
      );
      final first = FlaxLocalStoragePlugin.initialize(
        directory: directory.path,
      );
      final second = FlaxLocalStoragePlugin.initialize(
        directory: directory.path,
      );
      expect(identical(first, second), isTrue);
      expect(
        () => FlaxLocalStoragePlugin.initialize(
          directory: '${directory.path}/other',
        ),
        throwsStateError,
      );
      await first;
      await FlaxLocalStoragePlugin.initialize(directory: directory.path);
    });
    expect(() => h.session(''), throwsArgumentError);
    final live = h.session('shop');
    await t.pumpWidget(MaterialApp(home: FlaxView.session(session: live)));
    expect(() => FlaxLocalStoragePlugin.shutdown(), throwsStateError);
    await t.pumpWidget(const SizedBox());
    final liveClose = live.close();
    await t.pumpAndSettle();
    await liveClose;
    await t.runAsync(() async {
      await FlaxLocalStoragePlugin.shutdown();
      await FlaxLocalStoragePlugin.shutdown();
    });
  });

  testWidgets(
    'default plugin snapshot, replacement and namespace view identity',
    (t) async {
      await t.runAsync(
        () => FlaxLocalStoragePlugin.initialize(directory: directory.path),
      );
      Flax.registerPlugins(const [FlaxLocalStoragePlugin()]);
      final h = _Harness();
      Widget view(String? namespace, {List<FlaxPlugin>? plugins}) =>
          MaterialApp(
            home: FlaxView(
              namespace: namespace,
              createRuntime: h.create,
              source: source,
              bindings: registry,
              plugins: plugins,
              onError: (e, _) => h.errors.add(e),
            ),
          );
      await t.pumpWidget(view('shop'));
      h.execute("localStorage.setItem('x', 'shop'); undefined;");
      final first = h.tracker;
      await t.pumpWidget(view('shop'));
      expect(h.runtimes, hasLength(1));
      expect(h.number("localStorage.getItem('x') === 'shop' ? 1 : 0"), 1);
      await t.pumpWidget(view('other'));
      await t.pumpAndSettle();
      expect(first.isDisposed, isTrue);
      expect(first.handlesAtDispose, 0);
      expect(h.number("localStorage.getItem('x') === null ? 1 : 0"), 1);
      await t.pumpWidget(view('shop'));
      expect(h.number("localStorage.getItem('x') === 'shop' ? 1 : 0"), 1);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await t.pumpWidget(view(null, plugins: const []));
      expect(
        h.number(
          "typeof localStorage === 'undefined' && typeof addEventListener === 'function' ? 1 : 0",
        ),
        1,
      );
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      expect(h.errors, isEmpty);
      await flushStorage(t);
      await closeStorage(t);
    },
  );

  testWidgets(
    'shared namespaces deliver ordered receiver-owned events and isolate defaults',
    (t) async {
      await t.runAsync(
        () => FlaxLocalStoragePlugin.initialize(directory: directory.path),
      );
      final a = _Harness(), b = _Harness(), isolated = _Harness();
      final sessions = [
        a.session('shop'),
        b.session('shop'),
        isolated.session(),
      ];
      await t.pumpWidget(
        MaterialApp(
          home: Stack(
            children: [
              for (final session in sessions)
                FlaxView.session(session: session),
            ],
          ),
        ),
      );
      for (final h in [a, b, isolated]) {
        h.execute('''
        globalThis.events = [];
        addEventListener('storage', function(e) {
          if (this !== globalThis || e.target !== globalThis || e.storageArea !== localStorage || e.url !== '')
            throw Error('Incorrect storage event receiver');
          events.push([e.key, e.oldValue, e.newValue]);
        }); undefined;
      ''');
      }
      a.execute(
        "localStorage.x = '1'; localStorage.x = '1'; localStorage.x = '2'; delete localStorage.x; localStorage.y = '3'; localStorage.clear(); undefined;",
      );
      expect(
        b.number('events.length'),
        0,
        reason: 'No synchronous entry into a peer runtime',
      );
      await t.pumpAndSettle();
      expect(a.number('events.length'), 0);
      expect(b.number('events.length'), 5);
      expect(isolated.number('events.length'), 0);
      expect(
        b.number(
          "JSON.stringify(events) === JSON.stringify([['x',null,'1'],['x','1','2'],['x','2',null],['y',null,'3'],[null,null,null]]) ? 1 : 0",
        ),
        1,
      );
      b.execute(
        "onstorage = e => { if (e.key === 'echo') localStorage.reply = e.newValue; }; undefined;",
      );
      a.execute("localStorage.echo = 'yes'; undefined;");
      await t.pumpAndSettle();
      expect(
        a.number("localStorage.reply === 'yes' && events.length === 1 ? 1 : 0"),
        1,
      );
      a.execute("localStorage.late = 'cancel delivery'; undefined;");
      final closing = sessions[1].close();
      await t.pumpWidget(const SizedBox());
      final closes = sessions.map((session) => session.close()).toList();
      await t.pumpAndSettle();
      await Future.wait(closes);
      await closing;
      for (final h in [a, b, isolated]) {
        expect(h.errors, isEmpty);
        expect(h.tracker.isDisposed, isTrue);
        expect(h.tracker.handlesAtDispose, 0);
      }
      await flushStorage(t);
      await closeStorage(t);
    },
  );

  testWidgets(
    'UTF-16, proxy operations and quota preserve old values on both engines',
    (t) async {
      await t.runAsync(
        () => FlaxLocalStoragePlugin.initialize(
          directory: directory.path,
          quotaBytes: 2048,
        ),
      );
      final h = _Harness();
      final session = h.session();
      await t.pumpWidget(MaterialApp(home: FlaxView.session(session: session)));
      h.execute(r'''
      const key = '😀\ud800\0'.repeat(70), value = '\udfff\0汉';
      localStorage.setItem(key, value);
      if (localStorage.getItem(key) !== value) throw Error('UTF-16 bridge corruption');
      localStorage.setItem('getItem', 'collision');
      if (typeof localStorage.getItem !== 'function' || localStorage.getItem('getItem') !== 'collision') throw Error('name collision');
      localStorage.foo = 'bar';
      if (!('foo' in localStorage) || !Object.keys(localStorage).includes('foo')) throw Error('named properties');
      try { localStorage.foo = 'x'.repeat(2048); throw Error('missing quota error'); }
      catch (e) { if (e.name !== 'QuotaExceededError') throw e; }
      if (localStorage.foo !== 'bar') throw Error('quota modified data');
      delete localStorage.foo;
      if (localStorage.foo !== undefined || localStorage.getItem('foo') !== null) throw Error('delete');
      undefined;
    ''');
      expect(h.errors, isEmpty);
      final handles = h.tracker.handles;
      final watch = Stopwatch()..start();
      h.execute(
        "for (let i = 0; i < 100; i++) { localStorage.setItem('probe', String(i)); localStorage.getItem('probe'); } undefined;",
      );
      watch.stop();
      expect(h.tracker.handles, handles);
      // Test-only evidence; this includes synchronous conversion and Hive admission.
      stdout.writeln(
        'Storage: 100 write/read pairs in ${watch.elapsedMicroseconds} us; '
        'base install ${h.tracker.evaluationMicroseconds['flax:base']} us; '
        'plugin install ${h.tracker.evaluationMicroseconds['flax:local-storage']} us; '
        'live handles $handles',
      );
      final calls = h.tracker.hostCalls['__flaxLocalStorageCall'] ?? 0;
      h.execute('Object.keys(localStorage); undefined;');
      expect(
        h.tracker.hostCalls['__flaxLocalStorageCall']! - calls,
        lessThan(6),
      );
      await t.pumpWidget(const SizedBox());
      final close = session.close();
      await t.pumpAndSettle();
      await close;
      expect(h.tracker.handlesAtDispose, 0);
      await flushStorage(t);
      await closeStorage(t);
    },
  );
}
