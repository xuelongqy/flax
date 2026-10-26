import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:flax/runtime.dart';
import 'package:test/test.dart' as tests;

const _wasmAnswer = [
  0,
  97,
  115,
  109,
  1,
  0,
  0,
  0,
  1,
  5,
  1,
  96,
  0,
  1,
  127,
  3,
  2,
  1,
  0,
  7,
  10,
  1,
  6,
  97,
  110,
  115,
  119,
  101,
  114,
  0,
  0,
  10,
  6,
  1,
  4,
  0,
  65,
  42,
  11,
];

FlaxModuleSource _source(
  String path,
  String source, {
  FlaxModuleKind kind = FlaxModuleKind.javascript,
}) => FlaxModuleSource(
  uri: Uri.parse('https://modules.invalid/$path'),
  kind: kind,
  bytes: utf8.encode(source),
);

void flaxModuleContract(
  FlaxJsRuntime Function() createRuntime, {
  void Function(String, dynamic Function())? registerTest,
}) {
  final register = registerTest ?? tests.test;
  late FlaxJsRuntime runtime;
  final loaders = <FlaxModuleLoader>[];
  FlaxModuleLoader loader(
    List<FlaxModuleSource> sources, {
    FlaxModuleSourceLoader? load,
    FlaxJsObject? Function(String)? host,
  }) {
    final modules = {for (final source in sources) source.uri: source};
    final result = FlaxModuleLoader(
      runtime: runtime,
      hostModule: host,
      loadSource:
          load ??
          (request) async {
            final value = modules[request.uri];
            if (value == null) {
              throw StateError('Missing test module ${request.uri.path}');
            }
            return value;
          },
    );
    loaders.add(result);
    return result;
  }

  void test(String name, Future<void> Function() body) {
    register(name, () async {
      runtime = createRuntime();
      try {
        await body();
      } finally {
        for (final instance in loaders.reversed) {
          instance.close();
        }
        loaders.clear();
        runtime.dispose();
      }
    });
  }

  test(
    'closing during asynchronous Wasm compilation retires the owning Context',
    () async {
      final modules = loader([]);
      final invalid = [..._wasmAnswer]..last = 255;
      runtime.registerHostFunction('closeModuleLoader', (_, _) {
        modules.close();
        return const FlaxJsUndefined();
      });
      await tests.expectLater(
        modules.load(
          _source('closing.js', '''
      const pending = WebAssembly.compile(new Uint8Array(${jsonEncode(invalid)}));
      closeModuleLoader();
      await pending;
    '''),
        ),
        tests.throwsStateError,
      );
      runtime.dispose();
      final next = createRuntime();
      try {
        for (var i = 0; i < 5; i++) {
          await Future<void>.delayed(const Duration(milliseconds: 5));
          next.drainMicrotasks();
        }
        tests.expect((next.evaluate('21 * 2') as FlaxJsNumber).value, 42);
      } finally {
        next.dispose();
      }
    },
  );

  test(
    'asynchronous Wasm byte APIs wake an idle module after entry readiness',
    () async {
      final complete = Completer<double>();
      runtime.registerHostFunction('wasmComplete', (_, args) {
        complete.complete((args.single as FlaxJsNumber).value);
        return const FlaxJsUndefined();
      });
      final modules = loader([]);
      final namespace = await modules.load(
        _source('background.js', '''
      export function start() {
        WebAssembly.compile(new Uint8Array(${jsonEncode(_wasmAnswer)}))
          .then(module => WebAssembly.instantiate(module, {}))
          .then(instance => wasmComplete(instance.exports.answer()));
      }
    '''),
      );
      final start = namespace.getProperty('start') as FlaxJsFunction;
      try {
        start.call(const []);
        tests.expect(
          await complete.future.timeout(const Duration(seconds: 5)),
          42,
        );
      } finally {
        start.release();
        namespace.release();
      }
    },
  );

  test(
    'Wasm memory grows and traps safely across copied Dart buffer access',
    () async {
      final view = runtime.evaluate('''
      const reader = new WebAssembly.Instance(new WebAssembly.Module(
        new Uint8Array([
          0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,
          5,3,1,0,1,7,17,2,4,114,101,97,100,0,0,
          6,109,101,109,111,114,121,2,0,10,9,1,7,0,32,0,40,2,0,11
        ]))).exports;
      let trapped = false;
      try { reader.read(65536); }
      catch (error) { trapped = error instanceof WebAssembly.RuntimeError; }
      if (!trapped || reader.read(0) !== 0)
        throw new Error('Wasm out-of-bounds load must trap and remain usable');
      globalThis.memory = new WebAssembly.Memory({initial: 1, maximum: 2});
      const view = new Uint8Array(memory.buffer, 0, 4);
      view[0] = 17;
      view;
    ''') as FlaxJsObject;
      try {
        final copy = runtime.readBytes(view);
        tests.expect(copy, [17, 0, 0, 0]);
        tests.expect(
          () => runtime.readUint8Array(view),
          tests.throwsArgumentError,
        );
        runtime.evaluate('memory.grow(1)');
        tests.expect(copy, [17, 0, 0, 0]);
        tests.expect(() => runtime.readBytes(view), tests.throwsArgumentError);
        final grown = runtime.evaluate(
          'new Uint8Array(memory.buffer, 0, 4)',
        ) as FlaxJsObject;
        try {
          tests.expect(runtime.readBytes(grown), [17, 0, 0, 0]);
        } finally {
          grown.release();
        }
      } finally {
        view.release();
      }
    },
  );

  test(
    'native ESM links JS, JSON and Wasm with dynamic import and await',
    () async {
      final json = _source(
        'data.json',
        '{"count":6}',
        kind: FlaxModuleKind.json,
      );
      final wasm = FlaxModuleSource(
        uri: Uri.parse('https://modules.invalid/math.wasm'),
        kind: FlaxModuleKind.wasm,
        bytes: Uint8List.fromList(_wasmAnswer),
      );
      final dynamic = _source('dynamic.js', 'export const value = 17;');
      final entry = _source('main.js?revision=1', """
      import settings from './data.json' with { type: 'json' };
      import { answer } from './math.wasm';
      import source algorithm from './math.wasm';
      export const value = settings.count + answer() +
          new WebAssembly.Instance(algorithm).exports.answer();
      export const dynamic = (await import('./dynamic.js')).value;
      const source = await import.source('./math.wasm');
      const compiled = await WebAssembly.compile(new Uint8Array(${jsonEncode(_wasmAnswer)}));
      export const asyncWasm = new WebAssembly.Instance(source).exports.answer() +
          (await WebAssembly.instantiate(compiled, {})).exports.answer();
      export const url = import.meta.url;
    """);
      final reads = <Uri, int>{};
      final data = {
        for (final source in [json, wasm, dynamic]) source.uri: source,
      };
      final modules = loader(
        [],
        load: (request) async {
          reads.update(request.uri, (count) => count + 1, ifAbsent: () => 1);
          return data[request.uri]!;
        },
      );
      final namespace = await modules.load(entry);
      try {
        tests.expect(
          (namespace.getProperty('value') as FlaxJsNumber).value,
          90,
        );
        tests.expect(
          (namespace.getProperty('dynamic') as FlaxJsNumber).value,
          17,
        );
        tests.expect(
          (namespace.getProperty('asyncWasm') as FlaxJsNumber).value,
          84,
        );
        tests.expect(
          (namespace.getProperty('url') as FlaxJsString).value,
          entry.uri.toString(),
        );
        tests.expect(reads[wasm.uri], 1);
        await tests.expectLater(
          modules.load(_source('math.wasm', 'export const value = 1;')),
          tests.throwsA(tests.isA<FormatException>()),
        );
      } finally {
        namespace.release();
      }
    },
  );

  test(
    'native ESM preserves cycles, live bindings and entry namespace then',
    () async {
      final a = _source('a.js', """
      import { read } from './b.js';
      export let value = 1;
      export function bump() { value++; }
      export function observed() { return read(); }
      export function then() { throw new Error('Entry must not assimilate then'); }
    """);
      final b = _source('b.js', """
      import { value } from './a.js';
      export function read() { return value; }
    """);
      final modules = loader([a, b]);
      final namespace = await modules.load(a);
      final bump = namespace.getProperty('bump') as FlaxJsFunction;
      final observed = namespace.getProperty('observed') as FlaxJsFunction;
      try {
        bump.call(const []);
        tests.expect((observed.call(const []) as FlaxJsNumber).value, 2);
        final again = await modules.load(a);
        try {
          tests.expect(namespace.strictEquals(again), tests.isTrue);
        } finally {
          again.release();
        }
      } finally {
        bump.release();
        observed.release();
        namespace.release();
      }
    },
  );

  test(
    'JSON imports require attributes and preserve default value identity',
    () async {
      final json = _source(
        'data.json',
        '{"count":2}',
        kind: FlaxModuleKind.json,
      );
      final entry = _source('json.js', """
      import first from './data.json' with { type: 'json' };
      import second from './data.json' with { type: 'json' };
      first.count++;
      export const same = first === second;
      export const count = second.count;
      export const primitive = (await import('./primitive.json',
          { with: { type: 'json' } })).default;
    """);
      final modules = loader([
        json,
        _source('primitive.json', 'false', kind: FlaxModuleKind.json),
      ]);
      final namespace = await modules.load(entry);
      try {
        tests.expect(
          (namespace.getProperty('same') as FlaxJsBoolean).value,
          tests.isTrue,
        );
        tests.expect((namespace.getProperty('count') as FlaxJsNumber).value, 3);
        tests.expect(
          (namespace.getProperty('primitive') as FlaxJsBoolean).value,
          tests.isFalse,
        );
      } finally {
        namespace.release();
      }
      await tests.expectLater(
        modules.load(_source('invalid.js', "import value from './data.json';")),
        tests.throwsA(tests.isA<FormatException>()),
      );
    },
  );

  test('invalid module sources and JSON named exports never execute script fallback', () async {
    final modules = loader([
      _source(
        'bad.json',
        'globalThis.executed = true;',
        kind: FlaxModuleKind.json,
      ),
      _source('data.json', '{"name":1}', kind: FlaxModuleKind.json),
      FlaxModuleSource(
        uri: Uri.parse('https://modules.invalid/bad.wasm'),
        kind: FlaxModuleKind.wasm,
        bytes: Uint8List.fromList([0, 1, 2, 3]),
      ),
    ]);
    await tests.expectLater(
      modules.load(
        _source(
          'bad-entry.js',
          "import data from './bad.json' with { type: 'json' };",
        ),
      ),
      tests.throwsA(tests.isA<FlaxJsException>()),
    );
    tests.expect(runtime.getGlobal('executed'), tests.isA<FlaxJsUndefined>());
    for (var i = 0; i < 2; i++) {
      await tests.expectLater(
        modules.importModule(Uri.parse('https://modules.invalid/bad.wasm')),
        tests.throwsA(tests.isA<FlaxJsException>()),
      );
    }
    await tests.expectLater(
      modules.load(
        _source(
          'named-entry.js',
          "import { name } from './data.json' with { type: 'json' };",
        ),
      ),
      tests.throwsA(tests.isA<FlaxJsException>()),
    );
  });

  test(
    'source imports do not fetch Wasm imports until explicit instantiation',
    () async {
      // (i32) -> i32 imports ./dep.js.inc and exports transform.
      final wasm = FlaxModuleSource(
        uri: Uri.parse('https://modules.invalid/algorithm.wasm'),
        kind: FlaxModuleKind.wasm,
        bytes: Uint8List.fromList([
          0,
          97,
          115,
          109,
          1,
          0,
          0,
          0,
          1,
          6,
          1,
          96,
          1,
          127,
          1,
          127,
          2,
          16,
          1,
          8,
          46,
          47,
          100,
          101,
          112,
          46,
          106,
          115,
          3,
          105,
          110,
          99,
          0,
          0,
          3,
          2,
          1,
          0,
          7,
          13,
          1,
          9,
          116,
          114,
          97,
          110,
          115,
          102,
          111,
          114,
          109,
          0,
          1,
          10,
          8,
          1,
          6,
          0,
          32,
          0,
          16,
          0,
          11,
        ]),
      );
      final dep = _source(
        'dep.js',
        'export function inc(value) { return value + 1; }',
      );
      final reads = <String>[];
      final modules = loader(
        [],
        load: (request) async {
          reads.add(request.uri.path);
          return request.uri == wasm.uri ? wasm : dep;
        },
      );
      final source = await modules.importModule(wasm.uri, sourcePhase: true);
      source.release();
      tests.expect(reads, ['/algorithm.wasm']);
      final namespace = await modules.importModule(wasm.uri);
      final transform = namespace.getProperty('transform') as FlaxJsFunction;
      try {
        tests.expect(
          (transform.call([const FlaxJsNumber(4)]) as FlaxJsNumber).value,
          5,
        );
        tests.expect(reads, ['/algorithm.wasm', '/dep.js']);
      } finally {
        transform.release();
        namespace.release();
      }
    },
  );

  test('failed dynamic imports reject locally while the application remains usable', () async {
    final modules = loader([
      _source('throws.js', 'throw globalThis.expectedModuleError;'),
      _source('syntax.js', 'export const = ;'),
    ]);
    final error = runtime.evaluate(
      'globalThis.expectedModuleError = new RangeError("module failure")',
    ) as FlaxJsObject;
    error.release();
    final entry = _source('main.js', """
      export async function attempt() {
        try { await import('./missing.js'); } catch { return 23; }
      }
      export async function preserve() {
        try { await import('./throws.js'); }
        catch (error) { return error === globalThis.expectedModuleError; }
      }
      export async function syntax() {
        try { await import('./syntax.js'); }
        catch (error) { return error instanceof SyntaxError; }
      }
      export const stillAlive = 42;
    """);
    final namespace = await modules.load(entry);
    try {
      final checked = await modules.load(
        _source('check.js', """
        import { attempt, preserve, syntax } from './main.js';
        export const value = await attempt();
        export const sameError = await preserve() && await preserve();
        export const syntaxError = await syntax() && await syntax();
      """),
      );
      try {
        tests.expect((checked.getProperty('value') as FlaxJsNumber).value, 23);
        tests.expect(
          (checked.getProperty('sameError') as FlaxJsBoolean).value,
          tests.isTrue,
        );
        tests.expect(
          (checked.getProperty('syntaxError') as FlaxJsBoolean).value,
          tests.isTrue,
        );
      } finally {
        checked.release();
      }
      tests.expect(
        (namespace.getProperty('stillAlive') as FlaxJsNumber).value,
        42,
      );
    } finally {
      namespace.release();
    }
  });

  test('closing a module loader cancels unresolved top-level await', () async {
    final modules = loader([]);
    final pending = modules.load(
      _source('pending.js', """
      globalThis.moduleWaiting = true;
      await new Promise(() => {});
    """),
    );
    final stopped = tests.expectLater(pending, tests.throwsStateError);
    for (var i = 0; i < 30; i++) {
      await Future<void>.delayed(const Duration(milliseconds: 2));
      if (runtime.getGlobal('moduleWaiting') is FlaxJsBoolean) break;
    }
    modules.close();
    await stopped;
  });

  test(
    'host module facades retain the installed SDK function identity',
    () async {
      final sdk =
          runtime.evaluate('({ identity: value => value })') as FlaxJsObject;
      final expected = sdk.getProperty('identity') as FlaxJsFunction;
      final modules = loader(
        [],
        host: (specifier) => specifier == '@flax/test' ? sdk.retain() : null,
      );
      try {
        final namespace = await modules.load(
          _source('host.js', """
        import { identity } from '@flax/test';
        export { identity };
      """),
        );
        final actual = namespace.getProperty('identity') as FlaxJsFunction;
        try {
          tests.expect(actual.strictEquals(expected), tests.isTrue);
        } finally {
          actual.release();
          namespace.release();
        }
      } finally {
        expected.release();
        sdk.release();
      }
    },
  );
}
