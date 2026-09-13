import 'package:flax_codegen/src/identity.dart';
import 'package:flax_codegen/src/model.dart';
import 'package:test/test.dart';

void main() {
  test('encodes the ADR nullable List<String?>? golden', () {
    const type = FlaxCodegenTypeRef(
      'list',
      nullable: true,
      item: FlaxCodegenTypeRef('String', nullable: true),
    );
    const golden =
        'shape-v1:["collection","list",1,["primitive","String",1,[]]]';
    expect(FlaxCodegenShapeV1.encode(type).value, golden);
    expect(FlaxCodegenShapeV1.matches(golden, type), isTrue);
  });

  test('encodes the ADR adapter async Stream<int> golden', () {
    const type = FlaxCodegenTypeRef(
      'stream',
      item: FlaxCodegenTypeRef('int'),
      id: 'flax.core/flutter#type:Stream',
      name: 'Stream',
    );
    const adapter = FlaxCodegenShapeAdapter(
      kind: 'stream',
      asyncIterableFactory: 'fromAsyncIterable',
    );
    const golden =
        'shape-v1:["adapter","stream",null,0,"fromAsyncIterable",["stream",0,["primitive","int",0,[]],"flax.core%2Fflutter%23type%3AStream"]]';
    expect(FlaxCodegenShapeV1.encode(type, adapter: adapter).value, golden);
    expect(FlaxCodegenShapeV1.matches(golden, type, adapter: adapter), isTrue);
  });

  test('encodes a nonempty custom adapter kind', () {
    const type = FlaxCodegenTypeRef('int');
    const adapter = FlaxCodegenShapeAdapter(kind: 'future/bridge');
    expect(
      FlaxCodegenShapeV1.encode(type, adapter: adapter).value,
      'shape-v1:["adapter","future%2Fbridge",null,0,null,["primitive","int",0,[]]]',
    );
  });

  test('encodes every non-callback tag', () {
    expect(
      FlaxCodegenShapeV1.encode(const FlaxCodegenTypeRef('bool')).value,
      'shape-v1:["primitive","bool",0,[]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(const FlaxCodegenTypeRef('double')).value,
      'shape-v1:["primitive","double",0,[]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(const FlaxCodegenTypeRef('num')).value,
      'shape-v1:["primitive","num",0,[]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(const FlaxCodegenTypeRef('scalar')).value,
      'shape-v1:["primitive","scalar",0,[]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(const FlaxCodegenTypeRef('void')).value,
      'shape-v1:["primitive","void",0,[]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(const FlaxCodegenTypeRef('any', nullable: true))
          .value,
      'shape-v1:["primitive","any",1,[]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(const FlaxCodegenTypeRef('data')).value,
      'shape-v1:["primitive","data",0,[]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(const FlaxCodegenTypeRef('widget')).value,
      'shape-v1:["primitive","widget",0,[]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'int',
          primitiveKinds: ['widget', 'data', 'data'],
        ),
      ).value,
      'shape-v1:["primitive","int",0,["data","widget"]]',
    );

    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'widget',
          id: 'flax.core/flutter#type:Widget',
          name: 'Widget',
        ),
      ).value,
      'shape-v1:["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'object',
          id: 'com.acme.flax.widgets/buttons#type:Fancy%24Button',
          name: r'Fancy$Button',
          nullable: true,
          dartArguments: [FlaxCodegenTypeRef('int')],
        ),
      ).value,
      'shape-v1:["nominal","com.acme.flax.widgets%2Fbuttons%23type%3AFancy%2524Button",1,[["primitive","int",0,[]]]]',
    );

    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('iterable', item: FlaxCodegenTypeRef('bool')),
      ).value,
      'shape-v1:["collection","iterable",0,["primitive","bool",0,[]]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('set', item: FlaxCodegenTypeRef('num')),
      ).value,
      'shape-v1:["collection","set",0,["primitive","num",0,[]]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'map',
          nullable: true,
          key: FlaxCodegenTypeRef('String'),
          item: FlaxCodegenTypeRef('int'),
        ),
      ).value,
      'shape-v1:["map",1,["primitive","String",0,[]],["primitive","int",0,[]]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('future', item: FlaxCodegenTypeRef('int')),
      ).value,
      'shape-v1:["future",0,["primitive","int",0,[]]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'futureOr',
          nullable: true,
          item: FlaxCodegenTypeRef('String'),
        ),
      ).value,
      'shape-v1:["futureOr",1,["primitive","String",0,[]]]',
    );
    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('stream', item: FlaxCodegenTypeRef('int')),
      ).value,
      'shape-v1:["stream",0,["primitive","int",0,[]],null]',
    );
  });

  test('reader comparison uses the complete canonical string', () {
    const type = FlaxCodegenTypeRef(
      'list',
      nullable: true,
      item: FlaxCodegenTypeRef('String', nullable: true),
    );
    const golden =
        'shape-v1:["collection","list",1,["primitive","String",1,[]]]';
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1: ["collection","list",1,["primitive","String",1,[]]]',
        type,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["collection","list",true,["primitive","String",1,[]]]',
        type,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        '["collection","list",1,["primitive","String",1,[]]]',
        type,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["collection","List",1,["primitive","String",1,[]]]',
        type,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["collection","list",1,["primitive","String",1,[]],null]',
        type,
      ),
      isFalse,
    );
    expect(FlaxCodegenShapeV1.matches(golden, type), isTrue);
  });

  test('rejects type-parameters outside callbacks and invalid inputs', () {
    expect(
      () => FlaxCodegenShapeV1.encode(const FlaxCodegenTypeRef('parameter')),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Type-parameter outside callback.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(const FlaxCodegenTypeRef('Integer')),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('void', nullable: true),
      ),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('list', nullable: true),
      ),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('map', item: FlaxCodegenTypeRef('int')),
      ),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('object', name: 'Widget'),
      ),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('widget', id: 'not-a-wire-id', name: 'Widget'),
      ),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('stream', item: FlaxCodegenTypeRef('int')),
        adapter: const FlaxCodegenShapeAdapter(kind: ''),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Invalid adapter kind.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('int', item: FlaxCodegenTypeRef('bool')),
      ),
      throwsFormatException,
    );
  });

  test('encodes the ADR mixed Widget callback golden', () {
    final type = _mixedWidgetCallback();
    const golden =
        'shape-v1:["callback",1,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0],["param","optionalPositional",null,["primitive","String",1,[]],null,1,null,null,0]],[["param","optionalNamed","child",["nominal","flax.core%2Fflutter%23type%3AWidget",1,[]],null,1,null,null,0],["param","optionalNamed","error",["primitive","any",1,[]],null,1,null,"error",0],["param","requiredNamed","label",["primitive","String",0,[]],null,0,null,null,0],["param","optionalNamed","origin",["nominal","flax.core%2Fflutter%23type%3AOffset",1,[]],null,1,"Offset",null,0],["param","optionalNamed","sink",["primitive","any",1,[]],null,1,null,null,1]],["nominal","flax.core%2Fflutter%23type%3AWidget",1,[]],"sync",1]';
    expect(
      FlaxCodegenShapeV1.encode(type, independentWidgetResult: true).value,
      golden,
    );
    expect(
      FlaxCodegenShapeV1.matches(golden, type, independentWidgetResult: true),
      isTrue,
    );
  });

  test('generic rename is stable for callback shapes', () {
    const golden =
        'shape-v1:["callback",0,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0]],[],["type-parameter","g0",0],"sync",0]';
    expect(
      FlaxCodegenShapeV1.encode(_genericRename('T', 'value')).value,
      golden,
    );
    expect(
      FlaxCodegenShapeV1.encode(_genericRename('U', 'item')).value,
      golden,
    );
  });

  test('positional rename is stable for callback shapes', () {
    const golden =
        'shape-v1:["callback",0,[],[],[["param","requiredPositional",null,["primitive","int",0,[]],null,0,null,null,0]],[],["primitive","int",0,[]],"sync",0]';
    expect(FlaxCodegenShapeV1.encode(_intCallback('value')).value, golden);
    expect(FlaxCodegenShapeV1.encode(_intCallback('count')).value, golden);
  });

  test('named rename changes callback identity', () {
    const label =
        'shape-v1:["callback",0,[],[],[],[["param","requiredNamed","label",["primitive","String",0,[]],null,0,null,null,0]],["primitive","void",0,[]],"sync",0]';
    const caption =
        'shape-v1:["callback",0,[],[],[],[["param","requiredNamed","caption",["primitive","String",0,[]],null,0,null,null,0]],["primitive","void",0,[]],"sync",0]';
    expect(FlaxCodegenShapeV1.encode(_namedString('label')).value, label);
    expect(FlaxCodegenShapeV1.encode(_namedString('caption')).value, caption);
    expect(label, isNot(caption));
  });

  test('mounted and independent Widget results differ only in the final slot', () {
    const mounted =
        'shape-v1:["callback",0,[],[],[["param","requiredPositional",null,["nominal","flax.core%2Fflutter%23type%3ABuildContext",0,[]],null,0,null,null,0],["param","requiredPositional",null,["primitive","int",0,[]],null,0,null,null,0]],[],["nominal","flax.core%2Fflutter%23type%3AWidget",1,[]],"sync",0]';
    const independent =
        'shape-v1:["callback",0,[],[],[["param","requiredPositional",null,["nominal","flax.core%2Fflutter%23type%3ABuildContext",0,[]],null,0,null,null,0],["param","requiredPositional",null,["primitive","int",0,[]],null,0,null,null,0]],[],["nominal","flax.core%2Fflutter%23type%3AWidget",1,[]],"sync",1]';
    final type = _widgetIndexCallback();
    expect(FlaxCodegenShapeV1.encode(type).value, mounted);
    expect(
      FlaxCodegenShapeV1.encode(type, independentWidgetResult: true).value,
      independent,
    );
  });

  test('nested capture and inner declaration are stable under rename', () {
    const golden =
        'shape-v1:["callback",0,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0],["param","requiredPositional",null,["callback",0,[["generic","g1",["type-parameter","g0",0],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0],["param","requiredPositional",null,["type-parameter","g1",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0]';
    expect(
      FlaxCodegenShapeV1.encode(_nestedCapture('T', 'U', 'value', 'nested'))
          .value,
      golden,
    );
    expect(
      FlaxCodegenShapeV1.encode(_nestedCapture('A', 'B', 'item', 'callback'))
          .value,
      golden,
    );
  });

  test('callback asyncMode follows future, futureOr, and stream results', () {
    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'callback',
          result: FlaxCodegenTypeRef('future', item: FlaxCodegenTypeRef('int')),
        ),
      ).value,
      'shape-v1:["callback",0,[],[],[],[],["future",0,["primitive","int",0,[]]],"future",0]',
    );
    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'callback',
          result: FlaxCodegenTypeRef(
            'futureOr',
            item: FlaxCodegenTypeRef('String'),
          ),
        ),
      ).value,
      'shape-v1:["callback",0,[],[],[],[],["futureOr",0,["primitive","String",0,[]]],"futureOr",0]',
    );
    expect(
      FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'callback',
          result: FlaxCodegenTypeRef('stream', item: FlaxCodegenTypeRef('int')),
        ),
      ).value,
      'shape-v1:["callback",0,[],[],[],[],["stream",0,["primitive","int",0,[]],null],"stream",0]',
    );
  });

  test('callback concrete type arguments keep dartArguments order', () {
    final identity = Object();
    final type = FlaxCodegenTypeRef(
      'callback',
      typeParameters: [
        FlaxCodegenGenericParameter(
          'T',
          const FlaxCodegenTypeRef('any'),
          genericIdentity: identity,
        ),
      ],
      dartArguments: const [
        FlaxCodegenTypeRef('String'),
        FlaxCodegenTypeRef('int'),
      ],
      result: const FlaxCodegenTypeRef('void'),
    );
    expect(
      FlaxCodegenShapeV1.encode(type).value,
      'shape-v1:["callback",0,[["generic","g0",["primitive","any",0,[]],null]],[["primitive","String",0,[]],["primitive","int",0,[]]],[],[],["primitive","void",0,[]],"sync",0]',
    );
  });

  test('encodes all generic bounds before all defaults', () {
    final t = Object();
    final u = Object();
    final v = Object();
    final w = Object();
    final type = FlaxCodegenTypeRef(
      'callback',
      typeParameters: [
        FlaxCodegenGenericParameter(
          'T',
          const FlaxCodegenTypeRef('int'),
          defaultType: FlaxCodegenTypeRef(
            'callback',
            typeParameters: [
              FlaxCodegenGenericParameter(
                'V',
                const FlaxCodegenTypeRef('bool'),
                genericIdentity: v,
              ),
            ],
            result: const FlaxCodegenTypeRef('void'),
          ),
          genericIdentity: t,
        ),
        FlaxCodegenGenericParameter(
          'U',
          FlaxCodegenTypeRef(
            'callback',
            typeParameters: [
              FlaxCodegenGenericParameter(
                'W',
                const FlaxCodegenTypeRef('String'),
                genericIdentity: w,
              ),
            ],
            result: const FlaxCodegenTypeRef('void'),
          ),
          genericIdentity: u,
        ),
      ],
      result: const FlaxCodegenTypeRef('void'),
    );
    const golden =
        'shape-v1:["callback",0,[["generic","g0",["primitive","int",0,[]],["callback",0,[["generic","g3",["primitive","bool",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0]],["generic","g1",["callback",0,[["generic","g2",["primitive","String",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0],null]],[],[],[],["primitive","void",0,[]],"sync",0]';
    expect(FlaxCodegenShapeV1.encode(type).value, golden);
  });

  test('generic identity lookup does not use Object == or hashCode', () {
    final first = _EqualToken('T');
    final second = _EqualToken('T');
    expect(first, second);
    expect(identical(first, second), isFalse);
    final type = FlaxCodegenTypeRef(
      'callback',
      typeParameters: [
        FlaxCodegenGenericParameter(
          'T',
          const FlaxCodegenTypeRef('int'),
          genericIdentity: first,
        ),
        FlaxCodegenGenericParameter(
          'U',
          const FlaxCodegenTypeRef('bool'),
          genericIdentity: second,
        ),
      ],
      result: const FlaxCodegenTypeRef('void'),
    );
    expect(
      FlaxCodegenShapeV1.encode(type).value,
      'shape-v1:["callback",0,[["generic","g0",["primitive","int",0,[]],null],["generic","g1",["primitive","bool",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0]',
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        FlaxCodegenTypeRef(
          'callback',
          typeParameters: [
            FlaxCodegenGenericParameter(
              'T',
              const FlaxCodegenTypeRef('int'),
              genericIdentity: first,
            ),
            FlaxCodegenGenericParameter(
              'U',
              const FlaxCodegenTypeRef('bool'),
              genericIdentity: first,
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Duplicate generic identity.',
        ),
      ),
    );
  });

  test('sibling nested callbacks allocate monotonically', () {
    const golden =
        'shape-v1:["callback",0,[],[],[["param","requiredPositional",null,["callback",0,[["generic","g0",["primitive","any",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0],null,0,null,null,0],["param","requiredPositional",null,["callback",0,[["generic","g1",["primitive","any",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0]';
    expect(
      FlaxCodegenShapeV1.encode(_siblingNested(Object(), Object())).value,
      golden,
    );
  });

  test('sibling nested callbacks reject reused declaration identities', () {
    final token = Object();
    expect(
      () => FlaxCodegenShapeV1.encode(_siblingNested(token, token)),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Duplicate generic identity.',
        ),
      ),
    );
  });

  test('self-bounds and F-bounds resolve after reservation', () {
    final t = Object();
    expect(
      FlaxCodegenShapeV1.encode(
        FlaxCodegenTypeRef(
          'callback',
          typeParameters: [
            FlaxCodegenGenericParameter(
              'T',
              FlaxCodegenTypeRef('parameter', genericIdentity: t),
              genericIdentity: t,
            ),
          ],
          result: FlaxCodegenTypeRef('parameter', genericIdentity: t),
        ),
      ).value,
      'shape-v1:["callback",0,[["generic","g0",["type-parameter","g0",0],null]],[],[],[],["type-parameter","g0",0],"sync",0]',
    );

    final u = Object();
    expect(
      FlaxCodegenShapeV1.encode(
        FlaxCodegenTypeRef(
          'callback',
          typeParameters: [
            FlaxCodegenGenericParameter('T', _widget(), genericIdentity: t),
            FlaxCodegenGenericParameter(
              'U',
              FlaxCodegenTypeRef('parameter', genericIdentity: t),
              genericIdentity: u,
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      ).value,
      'shape-v1:["callback",0,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null],["generic","g1",["type-parameter","g0",0],null]],[],[],[],["primitive","void",0,[]],"sync",0]',
    );
  });

  test('encode rejects non-null callback defaults and independent misuse', () {
    expect(
      () => FlaxCodegenShapeV1.encode(
        FlaxCodegenTypeRef(
          'callback',
          parameters: [
            _param(
              name: 'value',
              type: const FlaxCodegenTypeRef('int'),
              required: true,
              positional: true,
              defaultCode: '0',
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Callback parameter default must be null.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('int'),
        independentWidgetResult: true,
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'independentWidgetResult requires a callback.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('callback', result: FlaxCodegenTypeRef('int')),
        independentWidgetResult: true,
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'independentWidgetResult requires a Widget result.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        FlaxCodegenTypeRef(
          'callback',
          parameters: [
            _param(
              name: 'value',
              type: const FlaxCodegenTypeRef('int'),
              required: true,
              positional: true,
              independentWidgetResult: true,
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'independentWidgetResult requires a callback.',
        ),
      ),
    );
  });

  test('encode rejects empty and duplicate named parameters', () {
    expect(
      () => FlaxCodegenShapeV1.encode(
        FlaxCodegenTypeRef(
          'callback',
          parameters: [
            _param(
              name: '',
              type: const FlaxCodegenTypeRef('int'),
              required: true,
              positional: false,
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Empty name.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        FlaxCodegenTypeRef(
          'callback',
          parameters: [
            _param(
              name: 'label',
              type: const FlaxCodegenTypeRef('int'),
              required: true,
              positional: false,
            ),
            _param(
              name: 'label',
              type: const FlaxCodegenTypeRef('String'),
              required: false,
              positional: false,
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Duplicate named parameter.',
        ),
      ),
    );
  });

  test('encode rejects empty snapshot, encodeKind, and identity misuse', () {
    expect(
      () => FlaxCodegenShapeV1.encode(
        FlaxCodegenTypeRef(
          'callback',
          parameters: [
            _param(
              name: 'origin',
              type: const FlaxCodegenTypeRef('int'),
              required: false,
              positional: false,
              snapshot: '',
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Invalid snapshot.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        FlaxCodegenTypeRef(
          'callback',
          parameters: [
            _param(
              name: 'error',
              type: const FlaxCodegenTypeRef('int'),
              required: false,
              positional: false,
              encodeKind: '',
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Invalid encodeKind.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'callback',
          typeParameters: [
            FlaxCodegenGenericParameter('T', FlaxCodegenTypeRef('int')),
          ],
          result: FlaxCodegenTypeRef('void'),
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Missing generic identity.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        FlaxCodegenTypeRef(
          'callback',
          parameters: [
            _param(
              name: 'value',
              type: FlaxCodegenTypeRef('parameter', genericIdentity: Object()),
              required: true,
              positional: true,
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Type-parameter outside callback.',
        ),
      ),
    );
  });

  test('encode rejects empty and function-kind nominal and stream IDs', () {
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef('widget', id: '', name: 'Widget'),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Invalid nominal wireId.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'stream',
          item: FlaxCodegenTypeRef('int'),
          id: '',
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Invalid stream wireId.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'widget',
          id: 'flax.core/flutter#function:runApp',
          name: 'runApp',
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Invalid type wireId.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'stream',
          item: FlaxCodegenTypeRef('int'),
          id: 'flax.core/flutter#function:listen',
        ),
      ),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Invalid type wireId.',
        ),
      ),
    );
  });

  test('encode rejects semantically extraneous children', () {
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'list',
          item: FlaxCodegenTypeRef('int'),
          key: FlaxCodegenTypeRef('String'),
        ),
      ),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'map',
          key: FlaxCodegenTypeRef('String'),
          item: FlaxCodegenTypeRef('int'),
          result: FlaxCodegenTypeRef('void'),
        ),
      ),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'future',
          item: FlaxCodegenTypeRef('int'),
          dartArguments: [FlaxCodegenTypeRef('int')],
        ),
      ),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'stream',
          item: FlaxCodegenTypeRef('int'),
          parameters: [
            FlaxCodegenParameterModel(
              name: 'ignored',
              type: FlaxCodegenTypeRef('int'),
              required: true,
              positional: true,
              defaultCode: 'null',
            ),
          ],
        ),
      ),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'callback',
          result: FlaxCodegenTypeRef('void'),
          item: FlaxCodegenTypeRef('int'),
        ),
      ),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        const FlaxCodegenTypeRef(
          'widget',
          id: 'flax.core/flutter#type:Widget',
          name: 'Widget',
          item: FlaxCodegenTypeRef('int'),
        ),
      ),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenShapeV1.encode(
        FlaxCodegenTypeRef(
          'parameter',
          genericIdentity: Object(),
          item: const FlaxCodegenTypeRef('int'),
        ),
      ),
      throwsFormatException,
    );
  });

  test('matches rejects complete-string mutations without parsing JSON', () {
    final positional = _intCallback('value');
    const positionalGolden =
        'shape-v1:["callback",0,[],[],[["param","requiredPositional",null,["primitive","int",0,[]],null,0,null,null,0]],[],["primitive","int",0,[]],"sync",0]';
    expect(FlaxCodegenShapeV1.encode(positional).value, positionalGolden);
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["callback",0,[],[],[["param","requiredPositional","value",["primitive","int",0,[]],null,0,null,null,0]],[],["primitive","int",0,[]],"sync",0]',
        positional,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["fn",0,[],[],[["param","requiredPositional",null,["primitive","int",0,[]],null,0,null,null,0]],[],["primitive","int",0,[]],"sync",0]',
        positional,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["callback",0,[],[],[["param","required",null,["primitive","int",0,[]],null,0,null,null,0]],[],["primitive","int",0,[]],"sync",0]',
        positional,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["callback",0,[],[],[["param","requiredPositional",null,["primitive","int",0,[]],null,0,null,null,0]],[],["primitive","int",0,[]],"sync",0,0]',
        positional,
      ),
      isFalse,
    );

    final twoGenerics = _twoGenerics();
    const twoGenericGolden =
        'shape-v1:["callback",0,[["generic","g0",["primitive","int",0,[]],null],["generic","g1",["primitive","bool",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0]';
    expect(FlaxCodegenShapeV1.encode(twoGenerics).value, twoGenericGolden);
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["callback",0,[["generic","g0",["primitive","int",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0]',
        twoGenerics,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["callback",0,[["generic","g0",["primitive","int",0,[]],null],["generic","g2",["primitive","bool",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0]',
        twoGenerics,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["callback",0,[["generic","g0",["primitive","int",0,[]],null],["generic","g0",["primitive","bool",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0]',
        twoGenerics,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["callback",0,[["generic","g1",["primitive","int",0,[]],null],["generic","g0",["primitive","bool",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0]',
        twoGenerics,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["callback",0,[["generic","g00",["primitive","int",0,[]],null],["generic","g1",["primitive","bool",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0]',
        twoGenerics,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["callback",0,[["generic","g+0",["primitive","int",0,[]],null],["generic","g1",["primitive","bool",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0]',
        twoGenerics,
      ),
      isFalse,
    );
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["callback",0,[["generic","g-0",["primitive","int",0,[]],null],["generic","g1",["primitive","bool",0,[]],null]],[],[],[],["primitive","void",0,[]],"sync",0]',
        twoGenerics,
      ),
      isFalse,
    );

    final nested = _nestedCapture('T', 'U', 'value', 'nested');
    const nestedGolden =
        'shape-v1:["callback",0,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0],["param","requiredPositional",null,["callback",0,[["generic","g1",["type-parameter","g0",0],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0],["param","requiredPositional",null,["type-parameter","g1",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0]';
    expect(FlaxCodegenShapeV1.encode(nested).value, nestedGolden);
    expect(
      FlaxCodegenShapeV1.matches(
        nestedGolden.replaceFirst('"generic","g1"', '"generic","g0"'),
        nested,
      ),
      isFalse,
    );

    final named = _namedPair();
    const namedGolden =
        'shape-v1:["callback",0,[],[],[],[["param","requiredNamed","caption",["primitive","String",0,[]],null,0,null,null,0],["param","requiredNamed","label",["primitive","int",0,[]],null,0,null,null,0]],["primitive","void",0,[]],"sync",0]';
    expect(FlaxCodegenShapeV1.encode(named).value, namedGolden);
    expect(
      FlaxCodegenShapeV1.matches(
        'shape-v1:["callback",0,[],[],[],[["param","requiredNamed","label",["primitive","int",0,[]],null,0,null,null,0],["param","requiredNamed","caption",["primitive","String",0,[]],null,0,null,null,0]],["primitive","void",0,[]],"sync",0]',
        named,
      ),
      isFalse,
    );
  });
}

FlaxCodegenTypeRef _widget({bool nullable = false}) => FlaxCodegenTypeRef(
  'widget',
  id: 'flax.core/flutter#type:Widget',
  name: 'Widget',
  nullable: nullable,
);

FlaxCodegenParameterModel _param({
  required String name,
  required FlaxCodegenTypeRef type,
  required bool required,
  required bool positional,
  bool omit = false,
  String? snapshot,
  String? encodeKind,
  bool scoped = false,
  String defaultCode = 'null',
  bool independentWidgetResult = false,
}) => FlaxCodegenParameterModel(
  name: name,
  type: type,
  required: required,
  positional: positional,
  defaultCode: defaultCode,
  omitWhenAbsent: omit,
  snapshot: snapshot,
  encodeKind: encodeKind,
  scoped: scoped,
  independentWidgetResult: independentWidgetResult,
);

FlaxCodegenTypeRef _mixedWidgetCallback() {
  final identity = Object();
  return FlaxCodegenTypeRef(
    'callback',
    nullable: true,
    typeParameters: [
      FlaxCodegenGenericParameter('T', _widget(), genericIdentity: identity),
    ],
    parameters: [
      _param(
        name: 'value',
        type: FlaxCodegenTypeRef('parameter', genericIdentity: identity),
        required: true,
        positional: true,
      ),
      _param(
        name: 'hint',
        type: const FlaxCodegenTypeRef('String', nullable: true),
        required: false,
        positional: true,
        omit: true,
      ),
      _param(
        name: 'label',
        type: const FlaxCodegenTypeRef('String'),
        required: true,
        positional: false,
      ),
      _param(
        name: 'child',
        type: _widget(nullable: true),
        required: false,
        positional: false,
        omit: true,
      ),
      _param(
        name: 'origin',
        type: const FlaxCodegenTypeRef(
          'object',
          id: 'flax.core/flutter#type:Offset',
          name: 'Offset',
          nullable: true,
        ),
        required: false,
        positional: false,
        omit: true,
        snapshot: 'Offset',
      ),
      _param(
        name: 'error',
        type: const FlaxCodegenTypeRef('any', nullable: true),
        required: false,
        positional: false,
        omit: true,
        encodeKind: 'error',
      ),
      _param(
        name: 'sink',
        type: const FlaxCodegenTypeRef('any', nullable: true),
        required: false,
        positional: false,
        omit: true,
        scoped: true,
      ),
    ],
    result: _widget(nullable: true),
  );
}

FlaxCodegenTypeRef _genericRename(String typeName, String parameterName) {
  final identity = Object();
  return FlaxCodegenTypeRef(
    'callback',
    typeParameters: [
      FlaxCodegenGenericParameter(
        typeName,
        _widget(),
        genericIdentity: identity,
      ),
    ],
    parameters: [
      _param(
        name: parameterName,
        type: FlaxCodegenTypeRef('parameter', genericIdentity: identity),
        required: true,
        positional: true,
      ),
    ],
    result: FlaxCodegenTypeRef('parameter', genericIdentity: identity),
  );
}

FlaxCodegenTypeRef _intCallback(String parameterName) => FlaxCodegenTypeRef(
  'callback',
  parameters: [
    _param(
      name: parameterName,
      type: const FlaxCodegenTypeRef('int'),
      required: true,
      positional: true,
    ),
  ],
  result: const FlaxCodegenTypeRef('int'),
);

FlaxCodegenTypeRef _namedString(String parameterName) => FlaxCodegenTypeRef(
  'callback',
  parameters: [
    _param(
      name: parameterName,
      type: const FlaxCodegenTypeRef('String'),
      required: true,
      positional: false,
    ),
  ],
  result: const FlaxCodegenTypeRef('void'),
);

FlaxCodegenTypeRef _widgetIndexCallback() => FlaxCodegenTypeRef(
  'callback',
  parameters: [
    _param(
      name: 'context',
      type: const FlaxCodegenTypeRef(
        'context',
        id: 'flax.core/flutter#type:BuildContext',
        name: 'BuildContext',
      ),
      required: true,
      positional: true,
    ),
    _param(
      name: 'index',
      type: const FlaxCodegenTypeRef('int'),
      required: true,
      positional: true,
    ),
  ],
  result: _widget(nullable: true),
);

FlaxCodegenTypeRef _nestedCapture(
  String outerName,
  String innerName,
  String valueName,
  String nestedName,
) {
  final outer = Object();
  final inner = Object();
  return FlaxCodegenTypeRef(
    'callback',
    typeParameters: [
      FlaxCodegenGenericParameter(outerName, _widget(), genericIdentity: outer),
    ],
    parameters: [
      _param(
        name: valueName,
        type: FlaxCodegenTypeRef('parameter', genericIdentity: outer),
        required: true,
        positional: true,
      ),
      _param(
        name: nestedName,
        type: FlaxCodegenTypeRef(
          'callback',
          typeParameters: [
            FlaxCodegenGenericParameter(
              innerName,
              FlaxCodegenTypeRef('parameter', genericIdentity: outer),
              genericIdentity: inner,
            ),
          ],
          parameters: [
            _param(
              name: 'captured',
              type: FlaxCodegenTypeRef('parameter', genericIdentity: outer),
              required: true,
              positional: true,
            ),
            _param(
              name: 'inner',
              type: FlaxCodegenTypeRef('parameter', genericIdentity: inner),
              required: true,
              positional: true,
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
        required: true,
        positional: true,
      ),
    ],
    result: const FlaxCodegenTypeRef('void'),
  );
}

FlaxCodegenTypeRef _siblingNested(Object first, Object second) =>
    FlaxCodegenTypeRef(
      'callback',
      parameters: [
        _param(
          name: 'first',
          type: FlaxCodegenTypeRef(
            'callback',
            typeParameters: [
              FlaxCodegenGenericParameter(
                'A',
                const FlaxCodegenTypeRef('any'),
                genericIdentity: first,
              ),
            ],
            result: const FlaxCodegenTypeRef('void'),
          ),
          required: true,
          positional: true,
        ),
        _param(
          name: 'second',
          type: FlaxCodegenTypeRef(
            'callback',
            typeParameters: [
              FlaxCodegenGenericParameter(
                'B',
                const FlaxCodegenTypeRef('any'),
                genericIdentity: second,
              ),
            ],
            result: const FlaxCodegenTypeRef('void'),
          ),
          required: true,
          positional: true,
        ),
      ],
      result: const FlaxCodegenTypeRef('void'),
    );

FlaxCodegenTypeRef _twoGenerics() {
  final t = Object();
  final u = Object();
  return FlaxCodegenTypeRef(
    'callback',
    typeParameters: [
      FlaxCodegenGenericParameter(
        'T',
        const FlaxCodegenTypeRef('int'),
        genericIdentity: t,
      ),
      FlaxCodegenGenericParameter(
        'U',
        const FlaxCodegenTypeRef('bool'),
        genericIdentity: u,
      ),
    ],
    result: const FlaxCodegenTypeRef('void'),
  );
}

FlaxCodegenTypeRef _namedPair() => FlaxCodegenTypeRef(
  'callback',
  parameters: [
    _param(
      name: 'label',
      type: const FlaxCodegenTypeRef('int'),
      required: true,
      positional: false,
    ),
    _param(
      name: 'caption',
      type: const FlaxCodegenTypeRef('String'),
      required: true,
      positional: false,
    ),
  ],
  result: const FlaxCodegenTypeRef('void'),
);

final class _EqualToken {
  const _EqualToken(this.label);

  final String label;

  @override
  bool operator ==(Object other) =>
      other is _EqualToken && label == other.label;

  @override
  int get hashCode => label.hashCode;
}
