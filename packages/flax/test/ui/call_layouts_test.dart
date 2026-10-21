import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';

const _moduleId = 'test.compat/calls';
const _objectId = '$_moduleId#type:Counter';
const _objectType = FlaxTypeRef('object', id: _objectId);
const _objectParameter = [FlaxParameter.required('value', _objectType)];
const _sumParameters = [
  FlaxParameter('left', flaxIntType, required: false, defaultValue: 1),
  FlaxParameter('middle', flaxIntType, required: false, defaultValue: 9),
  FlaxParameter('right', flaxIntType, required: false, defaultValue: 2),
];

class _Counter {
  _Counter(this.peer);
  final FlaxProxyPeer? peer;

  int get added {
    final result = peer?.call(0, const [], const {});
    return result?.$1 == true ? result!.$2 as int : 9;
  }

  int sum({int left = 1, int middle = 9, int right = 2}) {
    final result = peer?.call(1, const [], {
      'left': left,
      'middle': middle,
      'right': right,
    });
    return result?.$1 == true
        ? result!.$2 as int
        : nativeSum(left: left, middle: middle, right: right);
  }

  int nativeSum({int left = 1, int middle = 9, int right = 2}) =>
      left * 10000 + middle * 100 + right;
}

final _object = FlaxObjectBinding(
  _objectId,
  [FlaxGetter.plain('added', flaxIntType, (v) => (v as _Counter).added)],
  {
    '@super:sum': FlaxInstanceMethod.plain(
      _sumParameters,
      flaxIntType,
      (value, args) => (value as _Counter).nativeSum(
        left: args['left'] as int,
        middle: args['middle'] as int,
        right: args['right'] as int,
      ),
    ),
  },
  constructors: const {'': [], '@implementation': []},
  create: (_, args) => _Counter(args['@peer'] as FlaxProxyPeer?),
  matches: (v) => v is _Counter,
  proxy: const FlaxProxyBinding([
    // A newly added getter precedes the old method's native slot.
    FlaxProxyMember(
      'added',
      1,
      FlaxCallbackBinding.signature([], flaxIntType, id: 'compat:get:added'),
      hasSuper: true,
    ),
    FlaxProxyMember(
      'sum',
      0,
      FlaxCallbackBinding.signature(
        [
          FlaxCallbackParameter.plain(
            'left',
            flaxIntType,
            required: false,
            positional: false,
          ),
          FlaxCallbackParameter.plain(
            'middle',
            flaxIntType,
            required: false,
            positional: false,
          ),
          FlaxCallbackParameter.plain(
            'right',
            flaxIntType,
            required: false,
            positional: false,
          ),
        ],
        flaxIntType,
        id: 'compat:sum',
      ),
      hasSuper: true,
    ),
  ]),
);

@pragma('vm:never-inline')
bool _alive(WeakReference<Object> value) => value.target != null;

var _entered = 0;
final _module = FlaxBindingModule(
  'calls',
  [_object],
  moduleId: _moduleId,
  uiProtocol: flaxBindingVersion,
  requiredCapabilities: const ['call-layouts'],
  functions: [
    FlaxFunctionBinding(
      '$_moduleId#function:readSum',
      _objectParameter,
      flaxIntType,
      (args) =>
          (args['value'] as _Counter).sum(left: 11, middle: 90, right: 22),
    ),
    FlaxFunctionBinding(
      '$_moduleId#function:readAdded',
      _objectParameter,
      flaxIntType,
      (args) => (args['value'] as _Counter).added,
    ),
    FlaxFunctionBinding(
      '$_moduleId#function:sum',
      const [
        FlaxParameter('before', flaxIntType, required: false, defaultValue: 8),
        FlaxParameter('left', flaxIntType, required: false, defaultValue: 1),
        FlaxParameter('middle', flaxIntType, required: false, defaultValue: 9),
        FlaxParameter(
          'right',
          FlaxTypeRef('int', nullable: true),
          required: false,
          defaultValue: 2,
        ),
        FlaxParameter('after', flaxIntType, required: false, defaultValue: 7),
      ],
      flaxIntType,
      (args) {
        _entered++;
        return (args['before'] as int) * 1000000 +
            (args['left'] as int) * 10000 +
            (args['middle'] as int) * 100 +
            (args['right'] as int? ?? -1) * 10 +
            (args['after'] as int);
      },
    ),
    FlaxFunctionBinding(
      '$_moduleId#function:renamed',
      const [FlaxParameter.required('currentName', flaxIntType)],
      flaxIntType,
      (args) => args['currentName'],
    ),
    FlaxFunctionBinding(
      '$_moduleId#function:required',
      const [FlaxParameter.required('value', flaxIntType)],
      flaxIntType,
      (args) {
        _entered++;
        return args['value'];
      },
    ),
  ],
);

Future<FlaxOwnedTestHarness> _start(
  WidgetTester tester, {
  void Function(FlaxObjectBinding, Object)? onCreate,
}) async {
  final h = FlaxOwnedTestHarness(
    createRuntime: createTestRuntime,
    bindings: FlaxBindingRegistry([flutterBindings, _module]),
    onCreate: onCreate,
    source: '''
const w=__flaxModules.require('@flax/flutter/widgets'); w.runApp(w.SizedBox());
var compat=__flaxModules.require('@flax/core/bindings');
var oldLayout=Object.freeze([{name:'left'},{name:'right'}]);
var reorderedLayout=Object.freeze([{name:'right'},{name:'left'}]);
''',
  );
  await tester.pumpWidget(FlaxView.session(session: h.session));
  expect(h.errors, isEmpty);
  return h;
}

void main() {
  testWidgets('old proxy slots preserve super calls and rootless collection', (
    t,
  ) async {
    final peers = <WeakReference<Object>>[];
    final h = await _start(
      t,
      onCreate: (binding, value) {
        if (binding.id == _objectId) peers.add(WeakReference(value));
      },
    );
    try {
      h.execute('''
const definition = {
  type: '$_objectId', parameters: [], constructors: {'': []},
  methods: {sum: oldLayout}, getters: [], setters: [],
  superMembers: ['sum'], contextMembers: []
};
compat.defineObject('$_objectId', [], [], {}, []);
class Native extends compat.FlaxProxyBase {
  constructor() { super(definition, []); }
}
compat.defineProxyBase(Native.prototype, definition);
class First extends Native {
  #bonus = 1000000;
  sum(options) { return super.sum(options) + this.#bonus; }
}
class Last extends First {
  sum(options) { return super.sum(options) + 100; }
  get added() { return 999; }
}
var counter = new Last();
var weakCounter = new WeakRef(counter);
var inputLayout = [{name: 'value', required: true, positional: true}];
''');
      expect(h.number('counter.sum({left: 11, right: 22})'), 1111022);
      expect(
        h.number(
          "compat.invokeTopLevel('$_moduleId#function:readSum',[counter],inputLayout)",
        ),
        1119122,
      );
      expect(
        h.number(
          "compat.invokeTopLevel('$_moduleId#function:readAdded',[counter],inputLayout)",
        ),
        9,
      );
      expect(peers, hasLength(1));
      h.execute(flaxTestJsGarbagePressure);
      await t.runAsync(flaxTestCollectDartGarbage);
      await t.pumpAndSettle();
      expect(peers.any(_alive), isTrue);
      h.execute('counter = undefined');
      for (var i = 0; i < 8 && peers.any(_alive); i++) {
        h.execute(flaxTestJsGarbagePressure);
        await t.runAsync(flaxTestCollectDartGarbage);
        await t.pumpAndSettle();
      }
      expect(peers.any(_alive), isFalse);
      expect(h.boolean('weakCounter.deref() === undefined'), isTrue);
      expect(h.runtime.isDisposed, isFalse);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('old call layouts preserve named identity and native defaults', (
    t,
  ) async {
    final h = await _start(t);
    try {
      expect(
        h.number(
          "compat.invokeTopLevel('$_moduleId#function:sum',[11,22],oldLayout)",
        ),
        8111127,
      );
      final resolutions = h.runtime.hostCalls['__flaxResolveOperation'];
      expect(
        h.number(
          "compat.invokeTopLevel('$_moduleId#function:sum',[12,23],oldLayout)",
        ),
        8121137,
      );
      expect(h.runtime.hostCalls['__flaxResolveOperation'], resolutions);
      expect(
        h.number(
          "compat.invokeTopLevel('$_moduleId#function:sum',[22,11],reorderedLayout)",
        ),
        8111127,
      );
      expect(
        h.number(
          "compat.invokeTopLevel('$_moduleId#function:sum',[undefined,null],oldLayout)",
        ),
        8010897,
      );
      expect(
        h.number(
          "compat.invokeTopLevel('$_moduleId#function:renamed',[42],[{name:'oldName',positional:true,required:true}])",
        ),
        42,
      );
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('incompatible layouts reject before Dart business code executes', (
    t,
  ) async {
    final h = await _start(t);
    try {
      final before = _entered;
      for (final code in [
        "__flaxResolveOperation(24,'$_moduleId#function:sum','top','call','',[{get name(){throw Error('bad native layout')}}])",
        "compat.invokeTopLevel('$_moduleId#function:sum',[3],[{name:{}}])",
        "compat.invokeTopLevel('$_moduleId#function:sum',[3],[{get name(){throw Error('bad layout')}}])",
        "compat.invokeTopLevel('$_moduleId#function:sum',[11,22])",
        "compat.invokeTopLevel('$_moduleId#function:sum',[3],[{name:'removed'}])",
        "compat.invokeTopLevel('$_moduleId#function:sum',[3,4],[{name:'left'},{name:'left'}])",
        "compat.invokeTopLevel('$_moduleId#function:required',[],[])",
        "compat.invokeTopLevel('$_moduleId#function:required',[3],[{name:'value'}])",
        "compat.invokeTopLevel('$_moduleId#function:sum',['wrong',4],oldLayout)",
      ]) {
        expect(
          () => h.execute(code),
          throwsA(isA<FlaxJsException>()),
          reason: code,
        );
      }
      expect(_entered, before);
      expect(
        h.number(
          "compat.invokeTopLevel('$_moduleId#function:required',[3],[{name:'value',required:true,positional:true}])",
        ),
        3,
      );
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });
}
