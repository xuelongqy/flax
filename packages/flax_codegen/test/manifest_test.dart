import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/src/diagnostic.dart';
import 'package:flax_codegen/src/emitter.dart';
import 'package:flax_codegen/src/identity.dart';
import 'package:flax_codegen/src/manifest.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:flax_codegen/src/manifest_projection.dart';
import 'package:flax_codegen/src/model.dart';
import 'package:flax_codegen/src/ownership.dart';
import 'package:flax_codegen/src/package_metadata.dart';
import 'package:test/test.dart';

void main() {
  test('runtime, codegen and official manifests use one UI protocol', () {
    int sourceProtocol(String path, RegExp pattern) {
      final match = pattern.firstMatch(File(path).readAsStringSync());
      expect(match, isNotNull, reason: 'Missing UI protocol constant in $path');
      return int.parse(match!.group(1)!);
    }

    final protocol = FlaxCodegenManifest.uiProtocol;
    expect(
      sourceProtocol(
        '../flax/lib/src/ui/definitions.dart',
        RegExp(r'const flaxBindingVersion = (\d+);'),
      ),
      protocol,
    );
    expect(
      sourceProtocol(
        '../flax/js/src/runtime/bindings.ts',
        RegExp(r'export const bindingVersion = (\d+);'),
      ),
      protocol,
    );

    final manifests = Directory('..')
        .listSync()
        .whereType<Directory>()
        .map((directory) => File('${directory.path}/bindings/manifest.json'))
        .where((file) => file.existsSync())
        .toList();
    expect(manifests, isNotEmpty);
    for (final manifest in manifests) {
      final data =
          jsonDecode(manifest.readAsStringSync()) as Map<String, Object?>;
      expect(
        data['formatVersion'],
        FlaxCodegenManifest.formatVersion,
        reason: '${manifest.path} must use the current Manifest format',
      );
      expect(data['bindingNamespace'], isA<String>());
      final modules = data['modules'] as List<Object?>;
      expect(modules, isNotEmpty, reason: manifest.path);
      for (final module in modules) {
        final entry = Map<String, Object?>.from(module! as Map);
        expect(
          entry['uiProtocol'],
          protocol,
          reason: '${manifest.path} module ${entry['moduleId']} protocol',
        );
        expect(entry['moduleId'], isA<String>());
        expect(entry['requiredCapabilities'], isA<List<Object?>>());
        expect((entry['model']! as Map)['typedefs'], isA<List<Object?>>());
      }
    }
  });

  test('maximal TypeRef Parameter and Generic round-trip every field', () {
    const intType = FlaxCodegenTypeRef('int');
    const stringType = FlaxCodegenTypeRef('String', nullable: true);
    const voidType = FlaxCodegenTypeRef('void');
    const declaration = FlaxCodegenTypeRef(
      'object',
      id: 'flax.core/flutter#type:Element',
      name: 'Element',
    );
    final bound = FlaxCodegenTypeRef(
      'object',
      id: 'flax.core/flutter#type:Widget',
      name: 'Widget',
      nullable: true,
      typeArguments: const ['Widget'],
      dartArguments: const [intType],
      primitiveKinds: const ['int', 'String'],
      declaration: declaration,
      tsArguments: const [stringType],
    );
    final mapType = FlaxCodegenTypeRef(
      'map',
      nullable: true,
      item: bound,
      key: stringType,
    );
    final typeIdentity = Object();
    final genericIdentity = Object();
    final generic = FlaxCodegenGenericParameter(
      'T',
      bound,
      defaultType: intType,
      genericIdentity: genericIdentity,
    );
    final parameter = FlaxCodegenParameterModel(
      name: 'builder',
      type: mapType,
      required: false,
      positional: false,
      defaultCode: 'const <int, Widget>{}',
      omitWhenAbsent: true,
      independentWidgetResult: true,
      snapshot: 'Offset',
      encodeKind: 'error',
      scoped: true,
    );
    final type = FlaxCodegenTypeRef(
      'callback',
      nullable: true,
      parameters: [parameter],
      typeParameters: [generic],
      result: voidType,
      primitiveKinds: const ['scalar'],
      declaration: declaration,
      tsArguments: const [intType],
      genericIdentity: typeIdentity,
    );

    expect(type.genericIdentity, same(typeIdentity));
    expect(generic.genericIdentity, same(genericIdentity));

    final encodedType = FlaxCodegenManifestCodec.encodeTypeRef(type);
    final encodedParameter = FlaxCodegenManifestCodec.encodeParameter(
      parameter,
    );
    final encodedGeneric = FlaxCodegenManifestCodec.encodeGenericParameter(
      generic,
    );
    _expectTypeJson(encodedType);
    _expectParameterJson(encodedParameter);
    _expectGenericJson(encodedGeneric);

    final decodedType = _decodeType(encodedType);
    final decodedParameter = _decodeParameter(encodedParameter);
    final decodedGeneric = _decodeGeneric(encodedGeneric);
    final correspondence = <Object, Object>{};
    _expectType(decodedType, type, correspondence);
    _expectParameter(decodedParameter, parameter, correspondence);
    // Standalone encodeGenericParameter/decodeGenericParameter drop lexical
    // identity; compare bound/default fields only.
    _expectGeneric(
      decodedGeneric,
      FlaxCodegenGenericParameter(
        generic.name,
        generic.bound,
        defaultType: generic.defaultType,
      ),
    );
  });

  test('Record TypeRef round-trips fields in canonical order', () {
    const record = FlaxCodegenTypeRef(
      'record',
      nullable: true,
      recordFields: [
        FlaxCodegenRecordFieldModel(
          name: '\$1',
          type: FlaxCodegenTypeRef('int'),
          positional: true,
        ),
        FlaxCodegenRecordFieldModel(
          name: 'label',
          type: FlaxCodegenTypeRef('String', nullable: true),
          positional: false,
        ),
        FlaxCodegenRecordFieldModel(
          name: 'widget',
          type: FlaxCodegenTypeRef(
            'object',
            id: 'flax.core/flutter#type:Widget',
            name: 'Widget',
          ),
          positional: false,
        ),
      ],
    );

    final encoded = FlaxCodegenManifestCodec.encodeTypeRef(record);
    _expectTypeJson(encoded);
    final fields = encoded['recordFields']! as List<Object?>;
    expect(fields.map((field) => (field! as Map<String, Object?>)['name']), [
      '\$1',
      'label',
      'widget',
    ]);
    _expectType(_decodeType(encoded), record);
  });

  test('malformed objects aggregate stable FCG_MANIFEST diagnostics', () {
    _expectMappingError(
      FlaxCodegenManifestCodec.decodeTypeRef,
      '/a~1b/~0tilde',
    );
    _expectMappingError(
      FlaxCodegenManifestCodec.decodeParameter,
      '/a~1b/~0tilde',
    );
    _expectMappingError(
      FlaxCodegenManifestCodec.decodeGenericParameter,
      '/a~1b/~0tilde',
    );

    final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
    expect(
      FlaxCodegenManifestCodec.decodeTypeRef(_malformedType, diagnostics, ''),
      isNull,
    );
    final error = _throwIfAny(diagnostics);
    expect(_records(error), [
      _record('/a~1b', 'Unknown field.'),
      _record('/kind', 'Expected a string.'),
      _record('/name', 'Expected a string or null.'),
      _record('/parameters/0/defaultCode', 'Missing field.'),
      _record('/parameters/0/encodeKind', 'Missing field.'),
      _record('/parameters/0/extra', 'Unknown field.'),
      _record('/parameters/0/foo~1bar', 'Unknown field.'),
      _record('/parameters/0/independentWidgetResult', 'Missing field.'),
      _record('/parameters/0/name', 'Expected a string.'),
      _record('/parameters/0/omitWhenAbsent', 'Missing field.'),
      _record('/parameters/0/positional', 'Missing field.'),
      _record('/parameters/0/required', 'Missing field.'),
      _record('/parameters/0/scoped', 'Missing field.'),
      _record('/parameters/0/snapshot', 'Missing field.'),
      _record('/parameters/0/type', 'Missing field.'),
      _record('/typeArguments', 'Expected a list.'),
      _record('/typeParameters/0/bound', 'Missing field.'),
      _record('/typeParameters/0/defaultType', 'Missing field.'),
      _record('/typeParameters/0/name', 'Expected a string.'),
      _record('/typeParameters/0/~0x', 'Unknown field.'),
      _record('/~0tilde', 'Unknown field.'),
    ]);
  });

  test('invalid TypeRef semantics fail as FCG_MANIFEST', () {
    final cases = <String, FlaxCodegenTypeRef>{
      'unsupported kind': const FlaxCodegenTypeRef('not-a-kind'),
      'inconsistent item': const FlaxCodegenTypeRef(
        'int',
        item: FlaxCodegenTypeRef('bool'),
      ),
      'inconsistent key': const FlaxCodegenTypeRef(
        'int',
        key: FlaxCodegenTypeRef('String'),
      ),
      'inconsistent result': const FlaxCodegenTypeRef(
        'int',
        result: FlaxCodegenTypeRef('void'),
      ),
      'collection without item': const FlaxCodegenTypeRef('list'),
      'map without key': const FlaxCodegenTypeRef(
        'map',
        item: FlaxCodegenTypeRef('int'),
      ),
      'callback without result': const FlaxCodegenTypeRef('callback'),
    };
    for (final entry in cases.entries) {
      final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
      try {
        final decoded = FlaxCodegenManifestCodec.decodeTypeRef(
          FlaxCodegenManifestCodec.encodeTypeRef(entry.value),
          diagnostics,
          '',
        );
        diagnostics.throwIfAny();
        fail('${entry.key} decoded as ${decoded?.kind}');
      } on FlaxCodegenException catch (error) {
        expect(error.diagnostics, isNotEmpty, reason: entry.key);
        expect(
          {for (final diagnostic in error.diagnostics) diagnostic.code.value},
          {'FCG_MANIFEST'},
          reason: entry.key,
        );
      } catch (error) {
        if (error is TestFailure) rethrow;
        fail('${entry.key} leaked ${error.runtimeType}: $error');
      }
    }
  });

  test('maximal Getter Constructor Method Proxy PageAdapter and RouteCall '
      'round-trip every field', () {
    const intType = FlaxCodegenTypeRef('int');
    const stringType = FlaxCodegenTypeRef('String', nullable: true);
    const voidType = FlaxCodegenTypeRef('void');
    const widgetType = FlaxCodegenTypeRef(
      'object',
      id: 'flax.core/flutter#type:Widget',
      name: 'Widget',
    );
    final genericIdentity = Object();
    final generic = FlaxCodegenGenericParameter(
      'T',
      widgetType,
      defaultType: intType,
      genericIdentity: genericIdentity,
    );
    final parameter = FlaxCodegenParameterModel(
      name: 'builder',
      type: stringType,
      required: false,
      positional: false,
      defaultCode: 'null',
      omitWhenAbsent: true,
      independentWidgetResult: true,
      snapshot: 'Offset',
      encodeKind: 'error',
      scoped: true,
    );
    final getter = FlaxCodegenGetterModel(
      'value',
      widgetType,
      encodeKind: 'error',
    );
    const setter = FlaxCodegenGetterModel('value', intType);
    final constructor = FlaxCodegenConstructorModel('named', [
      parameter,
      FlaxCodegenParameterModel(
        name: 'child',
        type: intType,
        required: true,
        positional: true,
        defaultCode: '0',
        omitWhenAbsent: true,
        independentWidgetResult: true,
        snapshot: 'Size',
        encodeKind: 'error',
        scoped: true,
      ),
    ]);
    final method = FlaxCodegenMethodModel(
      'create',
      [parameter],
      voidType,
      instance: true,
      typeArguments: const ['Widget', 'Element'],
      startsRoute: true,
      typeParameters: [generic],
      mustCallSuper: true,
      deferredFactory: true,
    );
    final proxy = FlaxCodegenProxyModel(
      'extends',
      [method],
      superMethods: const ['initState', 'dispose'],
      getters: [getter],
      setters: const [setter],
    );
    const adapter = FlaxCodegenPageAdapterModel(
      'package:example/adapter.dart',
      'createRoute',
    );
    const route = FlaxCodegenRouteCallModel('context', 'rootNavigator', [
      'builder',
      'pageBuilder',
    ]);

    expect(generic.genericIdentity, same(genericIdentity));
    expect(setter.encodeKind, isNull);

    final encodedGetter = FlaxCodegenManifestCodec.encodeGetter(getter);
    final encodedSetter = FlaxCodegenManifestCodec.encodeGetter(setter);
    final encodedConstructor = FlaxCodegenManifestCodec.encodeConstructor(
      constructor,
    );
    final encodedMethod = FlaxCodegenManifestCodec.encodeMethod(method);
    final encodedProxy = FlaxCodegenManifestCodec.encodeProxy(proxy);
    final encodedAdapter = FlaxCodegenManifestCodec.encodePageAdapter(adapter);
    final encodedRoute = FlaxCodegenManifestCodec.encodeRouteCall(route);

    _expectGetterJson(encodedGetter);
    _expectGetterJson(encodedSetter);
    expect(encodedSetter['encodeKind'], isNull);
    _expectConstructorJson(encodedConstructor);
    _expectMethodJson(encodedMethod);
    _expectProxyJson(encodedProxy);
    _expectPageAdapterJson(encodedAdapter);
    _expectRouteCallJson(encodedRoute);

    _expectGetter(_decodeGetter(encodedGetter), getter);
    _expectGetter(_decodeGetter(encodedSetter), setter);
    _expectConstructor(_decodeConstructor(encodedConstructor), constructor);
    final methodCorrespondence = <Object, Object>{};
    _expectMethod(_decodeMethod(encodedMethod), method, methodCorrespondence);
    _expectProxy(_decodeProxy(encodedProxy), proxy, methodCorrespondence);
    _expectPageAdapter(_decodePageAdapter(encodedAdapter), adapter);
    _expectRouteCall(_decodeRouteCall(encodedRoute), route);
  });

  test('malformed members aggregate stable FCG_MANIFEST diagnostics', () {
    _expectMappingError(FlaxCodegenManifestCodec.decodeGetter, '/a~1b/~0tilde');
    _expectMappingError(
      FlaxCodegenManifestCodec.decodeConstructor,
      '/a~1b/~0tilde',
    );
    _expectMappingError(FlaxCodegenManifestCodec.decodeMethod, '/a~1b/~0tilde');
    _expectMappingError(FlaxCodegenManifestCodec.decodeProxy, '/a~1b/~0tilde');
    _expectMappingError(
      FlaxCodegenManifestCodec.decodePageAdapter,
      '/a~1b/~0tilde',
    );
    _expectMappingError(
      FlaxCodegenManifestCodec.decodeRouteCall,
      '/a~1b/~0tilde',
    );

    _expectDecodeError(
      FlaxCodegenManifestCodec.decodeGetter,
      _malformedGetter,
      [
        _record('/encodeKind', 'Expected a string or null.'),
        _record('/extra', 'Unknown field.'),
        _record('/foo~1bar', 'Unknown field.'),
        _record('/name', 'Expected a string.'),
        _record('/type/a~1b', 'Unknown field.'),
        _record('/type/dartArguments', 'Missing field.'),
        _record('/type/declaration', 'Missing field.'),
        _record('/type/id', 'Missing field.'),
        _record('/type/item', 'Missing field.'),
        _record('/type/key', 'Missing field.'),
        _record('/type/kind', 'Expected a string.'),
        _record('/type/name', 'Missing field.'),
        _record('/type/nullable', 'Missing field.'),
        _record('/type/parameters', 'Missing field.'),
        _record('/type/primitiveKinds', 'Missing field.'),
        _record('/type/result', 'Missing field.'),
        _record('/type/tsArguments', 'Missing field.'),
        _record('/type/typeArguments', 'Missing field.'),
        _record('/type/typeParameters', 'Missing field.'),
        _record('/type/~0tilde', 'Unknown field.'),
      ],
    );
    _expectDecodeError(
      FlaxCodegenManifestCodec.decodeConstructor,
      _malformedConstructor,
      [
        _record('/a~1b', 'Unknown field.'),
        _record('/name', 'Expected a string.'),
        _record('/parameters/0/defaultCode', 'Missing field.'),
        _record('/parameters/0/encodeKind', 'Missing field.'),
        _record('/parameters/0/extra', 'Unknown field.'),
        _record('/parameters/0/foo~1bar', 'Unknown field.'),
        _record('/parameters/0/independentWidgetResult', 'Missing field.'),
        _record('/parameters/0/name', 'Expected a string.'),
        _record('/parameters/0/omitWhenAbsent', 'Missing field.'),
        _record('/parameters/0/positional', 'Missing field.'),
        _record('/parameters/0/required', 'Missing field.'),
        _record('/parameters/0/scoped', 'Missing field.'),
        _record('/parameters/0/snapshot', 'Missing field.'),
        _record('/parameters/0/type', 'Missing field.'),
        _record('/specializations', 'Missing field.'),
        _record('/~0tilde', 'Unknown field.'),
      ],
    );
    _expectDecodeError(
      FlaxCodegenManifestCodec.decodeMethod,
      _malformedMethod,
      [
        _record('/deferredFactory', 'Expected a boolean.'),
        _record('/extra', 'Unknown field.'),
        _record('/instance', 'Expected a boolean.'),
        _record('/mustCallSuper', 'Expected a boolean.'),
        _record('/name', 'Expected a string.'),
        _record('/parameters/0/defaultCode', 'Missing field.'),
        _record('/parameters/0/encodeKind', 'Missing field.'),
        _record('/parameters/0/extra', 'Unknown field.'),
        _record('/parameters/0/foo~1bar', 'Unknown field.'),
        _record('/parameters/0/independentWidgetResult', 'Missing field.'),
        _record('/parameters/0/name', 'Expected a string.'),
        _record('/parameters/0/omitWhenAbsent', 'Missing field.'),
        _record('/parameters/0/positional', 'Missing field.'),
        _record('/parameters/0/required', 'Missing field.'),
        _record('/parameters/0/scoped', 'Missing field.'),
        _record('/parameters/0/snapshot', 'Missing field.'),
        _record('/parameters/0/type', 'Missing field.'),
        _record('/result/a~1b', 'Unknown field.'),
        _record('/result/dartArguments', 'Missing field.'),
        _record('/result/declaration', 'Missing field.'),
        _record('/result/id', 'Missing field.'),
        _record('/result/item', 'Missing field.'),
        _record('/result/key', 'Missing field.'),
        _record('/result/kind', 'Expected a string.'),
        _record('/result/name', 'Missing field.'),
        _record('/result/nullable', 'Missing field.'),
        _record('/result/parameters', 'Missing field.'),
        _record('/result/primitiveKinds', 'Missing field.'),
        _record('/result/result', 'Missing field.'),
        _record('/result/tsArguments', 'Missing field.'),
        _record('/result/typeArguments', 'Missing field.'),
        _record('/result/typeParameters', 'Missing field.'),
        _record('/result/~0tilde', 'Unknown field.'),
        _record('/startsRoute', 'Expected a boolean.'),
        _record('/typeArguments', 'Expected a list.'),
        _record('/typeParameters/0/bound', 'Missing field.'),
        _record('/typeParameters/0/defaultType', 'Missing field.'),
        _record('/typeParameters/0/name', 'Expected a string.'),
        _record('/typeParameters/0/slot', 'Missing slot.'),
        _record('/typeParameters/0/~0x', 'Unknown field.'),
      ],
    );
    _expectDecodeError(FlaxCodegenManifestCodec.decodeProxy, _malformedProxy, [
      _record('/extra', 'Unknown field.'),
      _record('/getters/0/encodeKind', 'Missing field.'),
      _record('/getters/0/foo~1bar', 'Unknown field.'),
      _record('/getters/0/name', 'Expected a string.'),
      _record('/getters/0/type', 'Missing field.'),
      _record('/kind', 'Expected a string.'),
      _record('/methods/0/deferredFactory', 'Missing field.'),
      _record('/methods/0/extra', 'Unknown field.'),
      _record('/methods/0/instance', 'Missing field.'),
      _record('/methods/0/mustCallSuper', 'Missing field.'),
      _record('/methods/0/name', 'Expected a string.'),
      _record('/methods/0/parameters', 'Missing field.'),
      _record('/methods/0/result', 'Missing field.'),
      _record('/methods/0/startsRoute', 'Missing field.'),
      _record('/methods/0/typeArguments', 'Missing field.'),
      _record('/methods/0/typeParameters', 'Missing field.'),
      _record('/setters/0/encodeKind', 'Expected a string or null.'),
      _record('/setters/0/name', 'Missing field.'),
      _record('/setters/0/type', 'Missing field.'),
      _record('/setters/0/~0x', 'Unknown field.'),
      _record('/superMethods/0', 'Expected a string.'),
    ]);
    _expectDecodeError(
      FlaxCodegenManifestCodec.decodePageAdapter,
      _malformedPageAdapter,
      [
        _record('/a~1b', 'Unknown field.'),
        _record('/extra', 'Unknown field.'),
        _record('/function', 'Expected a string.'),
        _record('/library', 'Expected a string.'),
      ],
    );
    _expectDecodeError(
      FlaxCodegenManifestCodec.decodeRouteCall,
      _malformedRouteCall,
      [
        _record('/builders/0', 'Expected a string.'),
        _record('/builders/1', 'Expected a string.'),
        _record('/context', 'Expected a string.'),
        _record('/extra', 'Unknown field.'),
        _record('/rootNavigator', 'Expected a string.'),
        _record('/~0tilde', 'Unknown field.'),
      ],
    );
  });

  test('maximal Class NamedType Function Snapshot and SnapshotField '
      'round-trip every field', () {
    const intType = FlaxCodegenTypeRef('int');
    const stringType = FlaxCodegenTypeRef('String', nullable: true);
    const voidType = FlaxCodegenTypeRef('void');
    const widgetType = FlaxCodegenTypeRef(
      'object',
      id: 'flax.core/flutter#type:Widget',
      name: 'Widget',
    );
    final genericIdentity = Object();
    final generic = FlaxCodegenGenericParameter(
      'T',
      widgetType,
      defaultType: intType,
      genericIdentity: genericIdentity,
    );
    final methodGenericIdentity = Object();
    final methodGeneric = FlaxCodegenGenericParameter(
      'T',
      widgetType,
      defaultType: intType,
      genericIdentity: methodGenericIdentity,
    );
    final parameter = FlaxCodegenParameterModel(
      name: 'builder',
      type: stringType,
      required: false,
      positional: false,
      defaultCode: 'null',
      omitWhenAbsent: true,
      independentWidgetResult: true,
      snapshot: 'Offset',
      encodeKind: 'error',
      scoped: true,
    );
    final getter = FlaxCodegenGetterModel(
      'value',
      widgetType,
      encodeKind: 'error',
    );
    const setter = FlaxCodegenGetterModel('value', intType);
    final constructor = FlaxCodegenConstructorModel('named', [
      parameter,
      FlaxCodegenParameterModel(
        name: 'child',
        type: intType,
        required: true,
        positional: true,
        defaultCode: '0',
        omitWhenAbsent: true,
        independentWidgetResult: true,
        snapshot: 'Size',
        encodeKind: 'error',
        scoped: true,
      ),
    ]);
    final method = FlaxCodegenMethodModel(
      'create',
      [parameter],
      voidType,
      instance: true,
      typeArguments: const ['Widget', 'Element'],
      startsRoute: true,
      typeParameters: [methodGeneric],
      mustCallSuper: true,
      deferredFactory: true,
    );
    final proxyMethodGenericIdentity = Object();
    final proxyMethodGeneric = FlaxCodegenGenericParameter(
      'T',
      widgetType,
      defaultType: intType,
      genericIdentity: proxyMethodGenericIdentity,
    );
    final proxyMethod = FlaxCodegenMethodModel(
      'create',
      [parameter],
      voidType,
      instance: true,
      typeArguments: const ['Widget', 'Element'],
      startsRoute: true,
      typeParameters: [proxyMethodGeneric],
      mustCallSuper: true,
      deferredFactory: true,
    );
    final proxy = FlaxCodegenProxyModel(
      'extends',
      [proxyMethod],
      superMethods: const ['initState', 'dispose'],
      getters: [getter],
      setters: const [setter],
    );
    const adapter = FlaxCodegenPageAdapterModel(
      'package:example/adapter.dart',
      'createRoute',
    );
    const route = FlaxCodegenRouteCallModel('context', 'rootNavigator', [
      'builder',
      'pageBuilder',
    ]);
    final type = FlaxCodegenClassModel(
      name: 'Gauge',
      id: 'com.acme.widgets/widgets#type:Gauge',
      kind: 'object',
      constructors: [constructor],
      supertypes: const ['Widget', 'Element'],
      superTypes: const [widgetType],
      asyncIterableFactory: 'fromAsyncIterable',
      typeArguments: const ['Widget', 'Element'],
      getters: [getter],
      methods: [method],
      pageAdapter: adapter,
      setters: const [setter],
      disposeMethod: 'dispose',
      listenerPairs: {'watch': 'unwatch', 'addListener': 'removeListener'},
      staticGetters: [getter],
      typeParameters: [generic],
      proxy: proxy,
      widgetInterfaces: const [widgetType],
      jsName: 'CanvasView',
    );
    final namedType = FlaxCodegenNamedTypeModel(
      name: 'Axis',
      id: 'com.acme.widgets/widgets#type:Axis',
      enumNames: const ['horizontal', 'vertical'],
      typeParameters: [generic],
    );
    final function = FlaxCodegenFunctionModel(
      'com.acme.widgets/widgets#function:show',
      method,
      route: route,
    );
    final functionWithoutRoute = FlaxCodegenFunctionModel(
      'com.acme.widgets/widgets#function:hide',
      method,
    );
    const snapshotField = FlaxCodegenSnapshotFieldModel(
      name: 'dx',
      kind: 'double',
      enumNames: ['horizontal', 'vertical'],
      snapshot: 'Offset',
      nullable: true,
    );
    const emptySnapshotField = FlaxCodegenSnapshotFieldModel(
      name: 'delta',
      kind: 'int',
    );
    const snapshot = FlaxCodegenSnapshotModel(
      name: 'Scroll',
      id: 'com.acme.widgets/widgets#type:Scroll',
      parent: 'Offset',
      fields: [snapshotField, emptySnapshotField],
    );

    expect(generic.genericIdentity, same(genericIdentity));
    expect(setter.encodeKind, isNull);
    expect(emptySnapshotField.snapshot, isNull);
    expect(emptySnapshotField.enumNames, isEmpty);
    expect(functionWithoutRoute.route, isNull);
    expect(type.listenerPairs.keys.toList(), ['watch', 'addListener']);

    final encodedClass = FlaxCodegenManifestCodec.encodeClass(type);
    final encodedNamedType = FlaxCodegenManifestCodec.encodeNamedType(
      namedType,
    );
    final encodedFunction = FlaxCodegenManifestCodec.encodeFunction(function);
    final encodedFunctionWithoutRoute = FlaxCodegenManifestCodec.encodeFunction(
      functionWithoutRoute,
    );
    final encodedSnapshot = FlaxCodegenManifestCodec.encodeSnapshot(snapshot);
    final encodedSnapshotField = FlaxCodegenManifestCodec.encodeSnapshotField(
      snapshotField,
    );
    final encodedEmptySnapshotField =
        FlaxCodegenManifestCodec.encodeSnapshotField(emptySnapshotField);

    _expectClassJson(encodedClass);
    _expectNamedTypeJson(encodedNamedType);
    _expectFunctionJson(encodedFunction);
    _expectFunctionJson(encodedFunctionWithoutRoute);
    expect(encodedFunctionWithoutRoute.containsKey('route'), isTrue);
    expect(encodedFunctionWithoutRoute['route'], isNull);
    _expectSnapshotJson(encodedSnapshot);
    _expectSnapshotFieldJson(encodedSnapshotField);
    _expectSnapshotFieldJson(encodedEmptySnapshotField);
    expect(encodedEmptySnapshotField['snapshot'], isNull);
    expect(encodedEmptySnapshotField['enumNames'], isEmpty);
    expect(encodedClass['jsName'], 'CanvasView');
    expect(encodedClass['asyncIterableFactory'], 'fromAsyncIterable');
    expect(encodedClass['disposeMethod'], 'dispose');
    expect((encodedClass['listenerPairs'] as Map).keys.toList(), [
      'addListener',
      'watch',
    ]);
    final reversed = FlaxCodegenClassModel(
      name: type.name,
      id: type.id,
      kind: type.kind,
      constructors: type.constructors,
      supertypes: type.supertypes,
      superTypes: type.superTypes,
      asyncIterableFactory: type.asyncIterableFactory,
      typeArguments: type.typeArguments,
      getters: type.getters,
      methods: type.methods,
      pageAdapter: type.pageAdapter,
      setters: type.setters,
      disposeMethod: type.disposeMethod,
      listenerPairs: {'addListener': 'removeListener', 'watch': 'unwatch'},
      staticGetters: type.staticGetters,
      typeParameters: type.typeParameters,
      proxy: type.proxy,
      widgetInterfaces: type.widgetInterfaces,
      jsName: type.jsName,
    );
    expect(
      FlaxCodegenManifestCodec.encodeClass(reversed)['listenerPairs'],
      encodedClass['listenerPairs'],
    );

    final decodedClass = _decodeClass(encodedClass);
    final classCorrespondence = <Object, Object>{};
    _expectClass(decodedClass, type, classCorrespondence);
    expect(decodedClass.listenerPairs.keys.toList(), ['addListener', 'watch']);
    final namedCorrespondence = <Object, Object>{};
    _expectNamedType(
      _decodeNamedType(encodedNamedType),
      namedType,
      namedCorrespondence,
    );
    final functionCorrespondence = <Object, Object>{};
    _expectFunction(
      _decodeFunction(encodedFunction),
      function,
      functionCorrespondence,
    );
    _expectFunction(
      _decodeFunction(encodedFunctionWithoutRoute),
      functionWithoutRoute,
      functionCorrespondence,
    );
    _expectSnapshot(_decodeSnapshot(encodedSnapshot), snapshot);
    _expectSnapshotField(
      _decodeSnapshotField(encodedSnapshotField),
      snapshotField,
    );
    _expectSnapshotField(
      _decodeSnapshotField(encodedEmptySnapshotField),
      emptySnapshotField,
    );
  });

  test('malformed Class NamedType Function Snapshot and SnapshotField '
      'aggregate stable FCG_MANIFEST diagnostics', () {
    _expectMappingError(FlaxCodegenManifestCodec.decodeClass, '/a~1b/~0tilde');
    _expectMappingError(
      FlaxCodegenManifestCodec.decodeNamedType,
      '/a~1b/~0tilde',
    );
    _expectMappingError(
      FlaxCodegenManifestCodec.decodeFunction,
      '/a~1b/~0tilde',
    );
    _expectMappingError(
      FlaxCodegenManifestCodec.decodeSnapshot,
      '/a~1b/~0tilde',
    );
    _expectMappingError(
      FlaxCodegenManifestCodec.decodeSnapshotField,
      '/a~1b/~0tilde',
    );

    _expectDecodeError(FlaxCodegenManifestCodec.decodeClass, _malformedClass, [
      _record('/asyncIterableFactory', 'Expected a string or null.'),
      _record('/a~1b', 'Unknown field.'),
      _record('/constructors/0/extra', 'Unknown field.'),
      _record('/constructors/0/foo~1bar', 'Unknown field.'),
      _record('/constructors/0/name', 'Expected a string.'),
      _record('/constructors/0/parameters', 'Missing field.'),
      _record('/constructors/0/specializations', 'Missing field.'),
      _record('/disposeMethod', 'Expected a string or null.'),
      _record('/getters/0/encodeKind', 'Missing field.'),
      _record('/getters/0/foo~1bar', 'Unknown field.'),
      _record('/getters/0/name', 'Expected a string.'),
      _record('/getters/0/type', 'Missing field.'),
      _record('/id', 'Expected a string.'),
      _record('/jsName', 'Expected a string or null.'),
      _record('/kind', 'Expected a string.'),
      _record('/listenerPairs', 'Expected sorted keys.'),
      _record('/listenerPairs/a~1b', 'Expected a string.'),
      _record('/methods/0/deferredFactory', 'Missing field.'),
      _record('/methods/0/extra', 'Unknown field.'),
      _record('/methods/0/instance', 'Missing field.'),
      _record('/methods/0/mustCallSuper', 'Missing field.'),
      _record('/methods/0/name', 'Expected a string.'),
      _record('/methods/0/parameters', 'Missing field.'),
      _record('/methods/0/result', 'Missing field.'),
      _record('/methods/0/startsRoute', 'Missing field.'),
      _record('/methods/0/typeArguments', 'Missing field.'),
      _record('/methods/0/typeParameters', 'Missing field.'),
      _record('/name', 'Expected a string.'),
      _record('/pageAdapter/extra', 'Unknown field.'),
      _record('/pageAdapter/function', 'Expected a string.'),
      _record('/pageAdapter/library', 'Expected a string.'),
      _record('/proxy/extra', 'Unknown field.'),
      _record('/proxy/getters', 'Missing field.'),
      _record('/proxy/kind', 'Expected a string.'),
      _record('/proxy/methods', 'Missing field.'),
      _record('/proxy/setters', 'Missing field.'),
      _record('/proxy/superMethods', 'Missing field.'),
      _record('/setters/0/encodeKind', 'Expected a string or null.'),
      _record('/setters/0/name', 'Missing field.'),
      _record('/setters/0/type', 'Missing field.'),
      _record('/setters/0/~0x', 'Unknown field.'),
      _record('/staticGetters/0/encodeKind', 'Missing field.'),
      _record('/staticGetters/0/foo~1bar', 'Unknown field.'),
      _record('/staticGetters/0/name', 'Expected a string.'),
      _record('/staticGetters/0/type', 'Missing field.'),
      _record('/superTypes/0', 'Expected a mapping.'),
      _record('/supertypes/0', 'Expected a string.'),
      _record('/typeArguments', 'Expected a list.'),
      _record('/typeParameters/0/bound', 'Missing field.'),
      _record('/typeParameters/0/defaultType', 'Missing field.'),
      _record('/typeParameters/0/name', 'Expected a string.'),
      _record('/typeParameters/0/slot', 'Missing slot.'),
      _record('/typeParameters/0/~0x', 'Unknown field.'),
      _record('/widgetInterfaces/0/a~1b', 'Unknown field.'),
      _record('/widgetInterfaces/0/dartArguments', 'Missing field.'),
      _record('/widgetInterfaces/0/declaration', 'Missing field.'),
      _record('/widgetInterfaces/0/id', 'Missing field.'),
      _record('/widgetInterfaces/0/item', 'Missing field.'),
      _record('/widgetInterfaces/0/key', 'Missing field.'),
      _record('/widgetInterfaces/0/kind', 'Expected a string.'),
      _record('/widgetInterfaces/0/name', 'Missing field.'),
      _record('/widgetInterfaces/0/nullable', 'Missing field.'),
      _record('/widgetInterfaces/0/parameters', 'Missing field.'),
      _record('/widgetInterfaces/0/primitiveKinds', 'Missing field.'),
      _record('/widgetInterfaces/0/result', 'Missing field.'),
      _record('/widgetInterfaces/0/tsArguments', 'Missing field.'),
      _record('/widgetInterfaces/0/typeArguments', 'Missing field.'),
      _record('/widgetInterfaces/0/typeParameters', 'Missing field.'),
      _record('/widgetInterfaces/0/~0tilde', 'Unknown field.'),
      _record('/~0tilde', 'Unknown field.'),
    ]);
    _expectDecodeError(
      FlaxCodegenManifestCodec.decodeNamedType,
      _malformedNamedType,
      [
        _record('/a~1b', 'Unknown field.'),
        _record('/enumNames', 'Expected a list.'),
        _record('/extra', 'Unknown field.'),
        _record('/id', 'Expected a string.'),
        _record('/name', 'Expected a string.'),
        _record('/typeParameters/0/bound', 'Missing field.'),
        _record('/typeParameters/0/defaultType', 'Missing field.'),
        _record('/typeParameters/0/name', 'Expected a string.'),
        _record('/typeParameters/0/slot', 'Missing slot.'),
        _record('/typeParameters/0/~0x', 'Unknown field.'),
        _record('/~0tilde', 'Unknown field.'),
      ],
    );
    _expectDecodeError(
      FlaxCodegenManifestCodec.decodeFunction,
      _malformedFunction,
      [
        _record('/a~1b', 'Unknown field.'),
        _record('/call/deferredFactory', 'Missing field.'),
        _record('/call/extra', 'Unknown field.'),
        _record('/call/instance', 'Missing field.'),
        _record('/call/mustCallSuper', 'Missing field.'),
        _record('/call/name', 'Expected a string.'),
        _record('/call/parameters', 'Missing field.'),
        _record('/call/result', 'Missing field.'),
        _record('/call/startsRoute', 'Missing field.'),
        _record('/call/typeArguments', 'Missing field.'),
        _record('/call/typeParameters', 'Missing field.'),
        _record('/extra', 'Unknown field.'),
        _record('/id', 'Expected a string.'),
        _record('/route/builders/0', 'Expected a string.'),
        _record('/route/context', 'Expected a string.'),
        _record('/route/extra', 'Unknown field.'),
        _record('/route/rootNavigator', 'Expected a string.'),
        _record('/route/~0tilde', 'Unknown field.'),
        _record('/~0tilde', 'Unknown field.'),
      ],
    );
    _expectDecodeError(
      FlaxCodegenManifestCodec.decodeSnapshot,
      _malformedSnapshot,
      [
        _record('/a~1b', 'Unknown field.'),
        _record('/extra', 'Unknown field.'),
        _record('/fields/0/enumNames', 'Missing field.'),
        _record('/fields/0/extra', 'Unknown field.'),
        _record('/fields/0/kind', 'Expected a string.'),
        _record('/fields/0/name', 'Expected a string.'),
        _record('/fields/0/nullable', 'Missing field.'),
        _record('/fields/0/snapshot', 'Missing field.'),
        _record('/id', 'Expected a string.'),
        _record('/name', 'Expected a string.'),
        _record('/parent', 'Expected a string or null.'),
        _record('/~0tilde', 'Unknown field.'),
      ],
    );
    _expectDecodeError(
      FlaxCodegenManifestCodec.decodeSnapshotField,
      _malformedSnapshotField,
      [
        _record('/a~1b', 'Unknown field.'),
        _record('/enumNames', 'Expected a list.'),
        _record('/extra', 'Unknown field.'),
        _record('/kind', 'Expected a string.'),
        _record('/name', 'Expected a string.'),
        _record('/nullable', 'Expected a boolean.'),
        _record('/snapshot', 'Expected a string or null.'),
        _record('/~0tilde', 'Unknown field.'),
      ],
    );
  });

  test(
    'maximal Module round-trips every semantic field with envelope name',
    () {
      const intType = FlaxCodegenTypeRef('int');
      const voidType = FlaxCodegenTypeRef('void');
      final method = FlaxCodegenMethodModel('run', [
        FlaxCodegenParameterModel(
          name: 'value',
          type: intType,
          required: true,
          positional: true,
          defaultCode: '0',
        ),
      ], voidType);
      final type = FlaxCodegenClassModel(
        name: 'Gauge',
        id: 'com.acme.widgets/widgets#type:Gauge',
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('named', [
            FlaxCodegenParameterModel(
              name: 'value',
              type: intType,
              required: true,
              positional: false,
              defaultCode: '0',
            ),
          ]),
        ],
        supertypes: const [],
        getters: [FlaxCodegenGetterModel('value', intType)],
        setters: [FlaxCodegenGetterModel('value', intType)],
        methods: [method],
        disposeMethod: 'dispose',
        listenerPairs: {'watch': 'unwatch', 'addListener': 'removeListener'},
        staticGetters: [FlaxCodegenGetterModel('zero', intType)],
        jsName: 'CanvasView',
      );
      final namedType = FlaxCodegenNamedTypeModel(
        name: 'Axis',
        id: 'com.acme.widgets/widgets#type:Axis',
        enumNames: const ['horizontal', 'vertical'],
      );
      final function = FlaxCodegenFunctionModel(
        'com.acme.widgets/widgets#function:show',
        FlaxCodegenMethodModel('show', [
          FlaxCodegenParameterModel(
            name: 'value',
            type: intType,
            required: true,
            positional: true,
            defaultCode: '0',
          ),
        ], voidType),
        route: const FlaxCodegenRouteCallModel('context', 'rootNavigator', [
          'builder',
        ]),
      );
      const snapshot = FlaxCodegenSnapshotModel(
        name: 'Scroll',
        id: 'com.acme.widgets/widgets#type:Scroll',
        parent: 'Offset',
        fields: [
          FlaxCodegenSnapshotFieldModel(
            name: 'dx',
            kind: 'double',
            nullable: true,
          ),
        ],
      );
      final module = FlaxCodegenModuleModel(
        name: 'ignored-live-name',
        library: 'package:acme_widgets/widgets.dart',
        jsPackage: '@acme/widgets',
        dartOutput: 'ignored.dart',
        tsOutput: 'ignored.ts',
        classes: [type],
        types: [namedType],
        typeLibraries: {
          'Widget': 'package:flutter/widgets.dart',
          'Element': 'package:flutter/element.dart',
        },
        functions: [function],
        snapshots: [snapshot],
      );
      expect(module.typeLibraries.keys.toList(), ['Widget', 'Element']);

      final encoded = FlaxCodegenManifestCodec.encodeModule(module);
      _expectModuleJson(encoded);
      expect(encoded.containsKey('name'), isFalse);
      expect(encoded.containsKey('dartOutput'), isFalse);
      expect(encoded.containsKey('tsOutput'), isFalse);
      expect((encoded['typeLibraries'] as Map).keys.toList(), [
        'Element',
        'Widget',
      ]);
      final reversed = FlaxCodegenModuleModel(
        name: module.name,
        library: module.library,
        jsPackage: module.jsPackage,
        dartOutput: module.dartOutput,
        tsOutput: module.tsOutput,
        classes: module.classes,
        types: module.types,
        typeLibraries: {
          'Element': 'package:flutter/element.dart',
          'Widget': 'package:flutter/widgets.dart',
        },
        functions: module.functions,
        snapshots: module.snapshots,
      );
      expect(FlaxCodegenManifestCodec.encodeModule(reversed), encoded);

      final decoded = _decodeModule(encoded, 'envelope-widgets');
      _expectModule(
        decoded,
        FlaxCodegenModuleModel(
          name: 'envelope-widgets',
          library: 'package:acme_widgets/widgets.dart',
          jsPackage: '@acme/widgets',
          dartOutput: '',
          tsOutput: '',
          classes: [
            FlaxCodegenClassModel(
              name: 'Gauge',
              id: 'com.acme.widgets/widgets#type:Gauge',
              kind: 'object',
              constructors: [
                FlaxCodegenConstructorModel('named', [
                  FlaxCodegenParameterModel(
                    name: 'value',
                    type: const FlaxCodegenTypeRef('int'),
                    required: true,
                    positional: false,
                    defaultCode: '0',
                  ),
                ]),
              ],
              supertypes: const [],
              getters: [
                const FlaxCodegenGetterModel(
                  'value',
                  FlaxCodegenTypeRef('int'),
                ),
              ],
              setters: [
                const FlaxCodegenGetterModel(
                  'value',
                  FlaxCodegenTypeRef('int'),
                ),
              ],
              methods: [
                FlaxCodegenMethodModel('run', [
                  FlaxCodegenParameterModel(
                    name: 'value',
                    type: const FlaxCodegenTypeRef('int'),
                    required: true,
                    positional: true,
                    defaultCode: '0',
                  ),
                ], const FlaxCodegenTypeRef('void')),
              ],
              disposeMethod: 'dispose',
              listenerPairs: {
                'watch': 'unwatch',
                'addListener': 'removeListener',
              },
              staticGetters: [
                const FlaxCodegenGetterModel('zero', FlaxCodegenTypeRef('int')),
              ],
              jsName: 'CanvasView',
            ),
          ],
          types: [
            const FlaxCodegenNamedTypeModel(
              name: 'Axis',
              id: 'com.acme.widgets/widgets#type:Axis',
              enumNames: ['horizontal', 'vertical'],
            ),
          ],
          typeLibraries: {
            'Element': 'package:flutter/element.dart',
            'Widget': 'package:flutter/widgets.dart',
          },
          functions: [
            FlaxCodegenFunctionModel(
              'com.acme.widgets/widgets#function:show',
              FlaxCodegenMethodModel('show', [
                FlaxCodegenParameterModel(
                  name: 'value',
                  type: const FlaxCodegenTypeRef('int'),
                  required: true,
                  positional: true,
                  defaultCode: '0',
                ),
              ], const FlaxCodegenTypeRef('void')),
              route: const FlaxCodegenRouteCallModel(
                'context',
                'rootNavigator',
                ['builder'],
              ),
            ),
          ],
          snapshots: const [
            FlaxCodegenSnapshotModel(
              name: 'Scroll',
              id: 'com.acme.widgets/widgets#type:Scroll',
              parent: 'Offset',
              fields: [
                FlaxCodegenSnapshotFieldModel(
                  name: 'dx',
                  kind: 'double',
                  nullable: true,
                ),
              ],
            ),
          ],
        ),
      );
      expect(decoded.name, 'envelope-widgets');
      expect(decoded.dartOutput, isEmpty);
      expect(decoded.tsOutput, isEmpty);
      expect(decoded.typeLibraries.keys.toList(), ['Element', 'Widget']);

      final empty = FlaxCodegenModuleModel(
        name: 'ignored-empty',
        library: 'package:acme_widgets/empty.dart',
        jsPackage: '@acme/empty',
        dartOutput: 'empty.dart',
        tsOutput: 'empty.ts',
        classes: const [],
        types: const [],
      );
      final encodedEmpty = FlaxCodegenManifestCodec.encodeModule(empty);
      _expectModuleJson(encodedEmpty);
      expect(encodedEmpty['typeLibraries'], isEmpty);
      expect(encodedEmpty['classes'], isEmpty);
      expect(encodedEmpty['types'], isEmpty);
      expect(encodedEmpty['functions'], isEmpty);
      expect(encodedEmpty['snapshots'], isEmpty);
      final decodedEmpty = _decodeModule(encodedEmpty, 'envelope-empty');
      _expectModule(
        decodedEmpty,
        const FlaxCodegenModuleModel(
          name: 'envelope-empty',
          library: 'package:acme_widgets/empty.dart',
          jsPackage: '@acme/empty',
          dartOutput: '',
          tsOutput: '',
          classes: [],
          types: [],
        ),
      );
    },
  );

  test('malformed Module aggregates stable FCG_MANIFEST diagnostics', () {
    final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
    expect(
      FlaxCodegenManifestCodec.decodeModule(
        'nope',
        diagnostics,
        '/a~1b/~0tilde',
        'widgets',
      ),
      isNull,
    );
    expect(
      FlaxCodegenManifestCodec.decodeModule(
        <Object?>[],
        diagnostics,
        '/a~1b/~0tilde',
        'widgets',
      ),
      isNull,
    );
    expect(_records(_throwIfAny(diagnostics)), [
      _record('/a~1b/~0tilde', 'Expected a mapping.'),
      _record('/a~1b/~0tilde', 'Expected a mapping.'),
    ]);

    final malformedDiagnostics = FlaxCodegenManifestDiagnostics(
      'manifest.json',
    );
    expect(
      FlaxCodegenManifestCodec.decodeModule(
        _malformedModule,
        malformedDiagnostics,
        '',
        'widgets',
      ),
      isNull,
    );
    expect(_records(_throwIfAny(malformedDiagnostics)), [
      _record('/a~1b', 'Unknown field.'),
      _record('/classes', 'Missing field.'),
      _record('/dartOutput', 'Unknown field.'),
      _record('/extra', 'Unknown field.'),
      _record('/jsPackage', 'Expected a string.'),
      _record('/library', 'Missing field.'),
      _record('/name', 'Unknown field.'),
      _record('/snapshots', 'Expected a list.'),
      _record('/stateVariants', 'Missing field.'),
      _record('/tsOutput', 'Unknown field.'),
      _record('/typeLibraries', 'Expected sorted keys.'),
      _record('/typeLibraries/z', 'Expected a string.'),
      _record('/typedefs', 'Missing field.'),
      _record('/types', 'Expected a list.'),
      _record('/~0tilde', 'Unknown field.'),
    ]);
  });

  test('invalid live Module semantics fail as FCG_MANIFEST', () {
    final invalid = FlaxCodegenModuleModel(
      name: 'widgets',
      library: 'package:acme_widgets/widgets.dart',
      jsPackage: '@acme/widgets',
      dartOutput: 'a.dart',
      tsOutput: 'b.ts',
      classes: [
        FlaxCodegenClassModel(
          name: 'Gauge',
          id: 'com.acme.widgets/widgets#type:Gauge',
          kind: 'object',
          constructors: const [],
          supertypes: const [],
          asyncIterableFactory: 'fromAsyncIterable',
        ),
      ],
      types: const [],
    );
    final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
    FlaxCodegenModuleModel? result;
    try {
      result = FlaxCodegenManifestCodec.decodeModule(
        FlaxCodegenManifestCodec.encodeModule(invalid),
        diagnostics,
        '',
        'widgets',
      );
      diagnostics.throwIfAny();
      fail('expected module semantic failure');
    } on FlaxCodegenException catch (error) {
      expect(result, isNull);
      expect(_records(error), [_record('', 'Invalid module.')]);
    } catch (error) {
      if (error is TestFailure) rethrow;
      fail('leaked ${error.runtimeType}: $error');
    }
  });

  group('Manifest 12 typeLibraries URI semantics', () {
    test('accepts public package URIs, cross-package names, and dart:core', () {
      final module = _typeLibrariesModule({
        'Core': 'dart:core',
        'Cross': 'package:flutter/widgets.dart',
        'NestedSrc': 'package:foo/public/src/model.dart',
        'Public': 'package:any/public.dart',
        'UnderscoreDir': 'package:foo/public/_model.dart',
        'UnderscoreFile': 'package:foo/_internal.dart',
      });
      final decoded = _decodeModule(
        FlaxCodegenManifestCodec.encodeModule(module),
        'widgets',
      );
      expect(decoded.typeLibraries, {
        'Core': 'dart:core',
        'Cross': 'package:flutter/widgets.dart',
        'NestedSrc': 'package:foo/public/src/model.dart',
        'Public': 'package:any/public.dart',
        'UnderscoreDir': 'package:foo/public/_model.dart',
        'UnderscoreFile': 'package:foo/_internal.dart',
      });
      expect(decoded.library, 'package:acme_widgets/widgets.dart');
    });

    test('rejects every invalid typeLibraries URI with exact FCG_MANIFEST pointers', () {
      const message = 'Invalid type library URI.';
      final cases = <String, String>{
        'absolute': '/tmp/public.dart',
        'emptyPackage': 'package:/public.dart',
        'emptyPath': 'package:acme_widgets',
        'file': 'file:///tmp/public.dart',
        'fragment': 'package:any/public.dart#Widget',
        'http': 'http://example.com/public.dart',
        'https': 'https://example.com/public.dart',
        'malformed': 'package:Any/public.dart',
        'noncanonical': 'package:any/./public.dart',
        'port': 'package://host:8080/any/public.dart',
        'privateDart': 'dart:_internal',
        'query': 'package:any/public.dart?x=1',
        'relative': './public.dart',
        'src': 'package:foo/src/model.dart',
        'userinfo': 'package://user@host/any/public.dart',
      };
      expect(cases.keys.toList(), List.of(cases.keys)..sort());

      final aggregateDiagnostics = FlaxCodegenManifestDiagnostics(
        'manifest.json',
      );
      final aggregateDecoded = FlaxCodegenManifestCodec.decodeModule(
        FlaxCodegenManifestCodec.encodeModule(_typeLibrariesModule(cases)),
        aggregateDiagnostics,
        '',
        'widgets',
      );
      expect(
        aggregateDecoded,
        isNull,
        reason: 'aggregate invalid typeLibraries must not decode',
      );
      expect(_records(_throwIfAny(aggregateDiagnostics)), [
        for (final key in cases.keys) _record('/typeLibraries/$key', message),
      ]);

      for (final entry in cases.entries) {
        final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
        final decoded = FlaxCodegenManifestCodec.decodeModule(
          FlaxCodegenManifestCodec.encodeModule(
            _typeLibrariesModule({entry.key: entry.value}),
          ),
          diagnostics,
          '',
          'widgets',
        );
        expect(decoded, isNull, reason: entry.key);
        expect(_records(_throwIfAny(diagnostics)), [
          _record('/typeLibraries/${entry.key}', message),
        ], reason: entry.key);
      }
    });
  });

  test(
    'sourceIdentity and identity round-trip type owner and function reference',
    () {
      const widgetUri = 'package:flutter/src/widgets/framework.dart';
      const boxFitUri = 'package:flutter/src/painting/box_fit.dart';
      final widgetSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: widgetUri,
        name: 'Widget',
        origin: FlaxCodegenOriginState.resolved,
      );
      final showSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.function,
        originatingUri: boxFitUri,
        name: 'applyBoxFit',
        origin: FlaxCodegenOriginState.resolved,
      );
      final widgetWire = FlaxCodegenWireId.parse(
        'flax.core/flutter#type:Widget',
      );
      final showWire = FlaxCodegenWireId.parse(
        'flax.core/painting#function:applyBoxFit',
      );
      final owned = FlaxCodegenManifestIdentity(
        sourceIdentity: widgetSource,
        wireId: widgetWire,
        owner: true,
      );
      final referenced = FlaxCodegenManifestIdentity(
        sourceIdentity: showSource,
        wireId: showWire,
        owner: false,
      );

      final encodedSource = FlaxCodegenManifestCodec.encodeSourceIdentity(
        widgetSource,
      );
      final encodedOwned = FlaxCodegenManifestCodec.encodeIdentity(owned);
      final encodedReferenced = FlaxCodegenManifestCodec.encodeIdentity(
        referenced,
      );
      _expectSourceIdentityJson(encodedSource);
      _expectIdentityJson(encodedOwned);
      _expectIdentityJson(encodedReferenced);
      expect(encodedOwned['owner'], isTrue);
      expect(encodedReferenced['owner'], isFalse);
      expect(encodedOwned['wireId'], widgetWire.value);
      expect(encodedReferenced['wireId'], showWire.value);

      final decodedSource = _decodeSourceIdentity(encodedSource);
      expect(decodedSource.kind, widgetSource.kind);
      expect(decodedSource.originatingUri, widgetSource.originatingUri);
      expect(decodedSource.name, widgetSource.name);
      expect(decodedSource, widgetSource);

      final decodedOwned = _decodeIdentity(encodedOwned);
      expect(decodedOwned.sourceIdentity, widgetSource);
      expect(decodedOwned.wireId, widgetWire);
      expect(decodedOwned.owner, isTrue);

      final decodedReferenced = _decodeIdentity(encodedReferenced);
      expect(decodedReferenced.sourceIdentity, showSource);
      expect(decodedReferenced.wireId, showWire);
      expect(decodedReferenced.owner, isFalse);
    },
  );

  test('malformed sourceIdentity and identity aggregate FCG_MANIFEST', () {
    _expectMappingError(
      FlaxCodegenManifestCodec.decodeSourceIdentity,
      '/a~1b/~0tilde',
    );
    _expectMappingError(
      FlaxCodegenManifestCodec.decodeIdentity,
      '/a~1b/~0tilde',
    );
    _expectDecodeError(
      FlaxCodegenManifestCodec.decodeSourceIdentity,
      _malformedSourceIdentity,
      [
        _record('/a~1b', 'Unknown field.'),
        _record('/extra', 'Unknown field.'),
        _record('/kind', 'Expected a string.'),
        _record('/name', 'Expected a string.'),
        _record('/originatingUri', 'Missing field.'),
        _record('/~0tilde', 'Unknown field.'),
      ],
    );
    _expectDecodeError(
      FlaxCodegenManifestCodec.decodeIdentity,
      _malformedIdentity,
      [
        _record('/a~1b', 'Unknown field.'),
        _record('/extra', 'Unknown field.'),
        _record('/owner', 'Expected a boolean.'),
        _record('/sourceIdentity', 'Missing field.'),
        _record('/wireId', 'Expected a string.'),
        _record('/~0tilde', 'Unknown field.'),
      ],
    );
  });

  test('invalid sourceIdentity and identity fail as FCG_MANIFEST', () {
    _expectSourceIdentityFailure(
      {
        'kind': 'type',
        'originatingUri': 'file:///tmp/widget.dart',
        'name': 'Widget',
      },
      [_record('/originatingUri', 'Invalid originating URI.')],
    );
    _expectSourceIdentityFailure(
      {
        'kind': 'type',
        'originatingUri': 'package:flutter/src/widgets/framework.dart',
        'name': '_Widget',
      },
      [_record('/name', 'Invalid public binding name.')],
    );
    _expectSourceIdentityFailure(
      {
        'kind': 'type',
        'originatingUri': 'package:flutter/src/widgets/framework.dart',
        'name': '',
      },
      [_record('/name', 'Invalid public binding name.')],
    );
    _expectIdentityFailure(
      {
        'sourceIdentity': {
          'kind': 'type',
          'originatingUri': 'package:flutter/src/widgets/framework.dart',
          'name': 'Widget',
        },
        'wireId': 'not-a-wire',
        'owner': true,
      },
      [_record('/wireId', 'Invalid wireId.')],
    );
    _expectIdentityFailure(
      {
        'sourceIdentity': {
          'kind': 'type',
          'originatingUri': 'package:flutter/src/widgets/framework.dart',
          'name': 'Widget',
        },
        'wireId': 'flax.core/flutter#function:Widget',
        'owner': true,
      },
      [_record('/wireId', 'Wire kind mismatch.')],
    );
    _expectIdentityFailure(
      {
        'sourceIdentity': {
          'kind': 'type',
          'originatingUri': 'package:flutter/src/widgets/framework.dart',
          'name': 'Widget',
        },
        'wireId': 'flax.core/flutter#type:Element',
        'owner': true,
      },
      [_record('/wireId', 'Wire name mismatch.')],
    );
  });

  group('Manifest 12 envelope positives', () {
    test('fromResolved round-trips rich and zero-entry modules', () {
      final fixture = _envelopeFixture();
      final manifest = FlaxCodegenManifest.fromResolved(
        package: fixture.package,
        modules: fixture.models,
        importPackageNames: fixture.imports,
      );
      _expectEnvelopeShape(manifest, fixture);
      expect(manifest.encode(), fixture.canonicalBytes);

      final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
      final parsed = FlaxCodegenManifest.parse(manifest.encode(), diagnostics);
      diagnostics.throwIfAny();
      expect(parsed, isNotNull);
      _expectEnvelope(parsed!, manifest);
      _expectEnvelopeShape(parsed, fixture);
      expect(parsed.encode(), fixture.canonicalBytes);
    });

    test('input permutations encode identically', () {
      final fixture = _envelopeFixture();
      final expected = fixture.canonicalBytes;
      final reversedPackage = FlaxCodegenResolvedPackage(
        dartPackage: fixture.package.dartPackage,
        namespace: fixture.package.namespace,
        modules: fixture.package.modules.reversed.toList(),
      );
      final widgetsResolved = fixture.package.modules.firstWhere(
        (module) => module.moduleId.name.value == 'widgets',
      );
      final host = fixture.package.modules.firstWhere(
        (module) => module.moduleId.name.value == 'host',
      );
      final reversedOwnersPackage = FlaxCodegenResolvedPackage(
        dartPackage: fixture.package.dartPackage,
        namespace: fixture.package.namespace,
        modules: [
          FlaxCodegenResolvedModule(
            moduleId: widgetsResolved.moduleId,
            source: widgetsResolved.source,
            owners: widgetsResolved.owners.reversed.toList(),
            references: widgetsResolved.references.reversed.toList(),
            requiredCapabilities: widgetsResolved.requiredCapabilities,
          ),
          host,
        ],
      );
      final reversedModels = <String, FlaxCodegenModuleModel>{
        for (final name in fixture.models.keys.toList().reversed)
          name: fixture.models[name]!,
      };
      final unorderedWidgets = _widgetsModel(
        typeLibraries: {
          'Widget': 'package:flutter/widgets.dart',
          'Element': 'package:flutter/element.dart',
        },
        listenerPairs: {'watch': 'unwatch', 'addListener': 'removeListener'},
      );
      expect(
        FlaxCodegenManifest.fromResolved(
          package: reversedPackage,
          modules: reversedModels,
          importPackageNames: fixture.imports.reversed,
        ).encode(),
        expected,
      );
      expect(
        FlaxCodegenManifest.fromResolved(
          package: reversedOwnersPackage,
          modules: {
            'widgets': unorderedWidgets,
            'host': fixture.models['host']!,
          },
          importPackageNames: ['flax_material', 'flax'],
        ).encode(),
        expected,
      );

      final duplicateReference = widgetsResolved.references.firstWhere(
        (reference) => reference.sourceIdentity == fixture.widgetSource,
      );
      final collapsedPackage = FlaxCodegenResolvedPackage(
        dartPackage: fixture.package.dartPackage,
        namespace: fixture.package.namespace,
        modules: [
          FlaxCodegenResolvedModule(
            moduleId: widgetsResolved.moduleId,
            source: widgetsResolved.source,
            owners: widgetsResolved.owners,
            references: [...widgetsResolved.references, duplicateReference],
            requiredCapabilities: widgetsResolved.requiredCapabilities,
          ),
          host,
        ],
      );
      final collapsed = FlaxCodegenManifest.fromResolved(
        package: collapsedPackage,
        modules: fixture.models,
        importPackageNames: fixture.imports,
      );
      final widgets = collapsed.modules.singleWhere(
        (module) => module.name == 'widgets',
      );
      expect(
        widgets.model.identities.where((row) => !row.owner),
        hasLength(1),
        reason: 'repeated identical nominal references must collapse to one identity row',
      );
      expect(
        widgets.model.identities
            .singleWhere((row) => !row.owner)
            .sourceIdentity,
        fixture.widgetSource,
      );
      expect(collapsed.encode(), expected);
    });

    test('exposed collections resist mutation', () {
      final fixture = _envelopeFixture();
      final manifest = FlaxCodegenManifest.fromResolved(
        package: fixture.package,
        modules: fixture.models,
        importPackageNames: fixture.imports,
      );
      String encode() => manifest.encode();
      final before = encode();
      final widgets = manifest.modules.singleWhere(
        (module) => module.name == 'widgets',
      );
      _expectImmutable(encode, () => manifest.imports.add('extra'));
      _expectImmutable(encode, () => manifest.modules.removeLast());
      _expectImmutable(encode, () => widgets.requiredCapabilities.add('host'));
      _expectImmutable(encode, () => widgets.model.identities.removeLast());
      _expectImmutable(encode, () {
        widgets.model.module.classes.add(widgets.model.module.classes.first);
      });
      _expectImmutable(encode, () {
        widgets.model.module.types.add(widgets.model.module.types.first);
      });
      _expectImmutable(encode, () {
        widgets.model.module.functions.add(
          widgets.model.module.functions.first,
        );
      });
      _expectImmutable(encode, () {
        widgets.model.module.snapshots.add(
          widgets.model.module.snapshots.first,
        );
      });
      _expectImmutable(encode, () {
        widgets.model.module.typeLibraries['Extra'] =
            'package:acme_widgets/extra.dart';
      });
      _expectImmutable(encode, () {
        widgets.model.module.classes.first.listenerPairs['extra'] = 'gone';
      });
      expect(encode(), before);
    });
  });

  group('Manifest 12 envelope negatives', () {
    test('invalid JSON and duplicate keys fail closed', () {
      _expectEnvelopeFailure('{', [_record('', 'Invalid JSON.')]);
      _expectEnvelopeFailure(
        '{\n  "formatVersion": 12,\n  "package": "a",\n  "package": "b"\n}\n',
        [_record('', 'Duplicate mapping key.')],
      );
      final withModuleDup =
          '{\n'
          '  "formatVersion": 12,\n'
          '  "package": "acme_widgets",\n'
          '  "bindingNamespace": "com.acme.widgets",\n'
          '  "imports": [],\n'
          '  "modules": [\n'
          '    {\n'
          '      "name": "host",\n'
          '      "name": "host",\n'
          '      "moduleId": "com.acme.widgets/host",\n'
          '      "uiProtocol": 21,\n'
          '      "requiredCapabilities": [],\n'
          '      "model": {"library":"package:acme_widgets/host.dart","jsPackage":"@acme/host","typeLibraries":{},"classes":[],"types":[],"functions":[],"snapshots":[],"identities":[]}\n'
          '    }\n'
          '  ]\n'
          '}\n';
      _expectEnvelopeFailure(withModuleDup, [
        _record('', 'Duplicate mapping key.'),
      ]);
      final withModelDup =
          '{\n'
          '  "formatVersion": 12,\n'
          '  "package": "acme_widgets",\n'
          '  "bindingNamespace": "com.acme.widgets",\n'
          '  "imports": [],\n'
          '  "modules": [\n'
          '    {\n'
          '      "name": "host",\n'
          '      "moduleId": "com.acme.widgets/host",\n'
          '      "uiProtocol": 21,\n'
          '      "requiredCapabilities": [],\n'
          '      "model": {"library":"package:acme_widgets/host.dart","library":"package:acme_widgets/host.dart","jsPackage":"@acme/host","typeLibraries":{},"classes":[],"types":[],"functions":[],"snapshots":[],"identities":[]}\n'
          '    }\n'
          '  ]\n'
          '}\n';
      _expectEnvelopeFailure(withModelDup, [
        _record('', 'Duplicate mapping key.'),
      ]);
    });

    test('closed schema rejects unknown missing and mistyped fields', () {
      final baseline = _envelopeBaseline();
      _expectEnvelopeMutation(baseline, (json) {
        json['extra'] = true;
      }, [_record('/extra', 'Unknown field.')]);
      _expectEnvelopeMutation(baseline, (json) {
        json.remove('formatVersion');
      }, [_record('/formatVersion', 'Missing field.')]);
      _expectEnvelopeMutation(baseline, (json) {
        json['imports'] = true;
      }, [_record('/imports', 'Expected a list.')]);

      _expectEnvelopeMutation(baseline, (json) {
        final module = _moduleAt(json, 0);
        module['extra'] = true;
      }, [_record('/modules/0/extra', 'Unknown field.')]);
      _expectEnvelopeMutation(baseline, (json) {
        final module = _moduleAt(json, 0);
        module.remove('uiProtocol');
      }, [_record('/modules/0/uiProtocol', 'Missing field.')]);
      _expectEnvelopeMutation(baseline, (json) {
        final module = _moduleAt(json, 0);
        module['requiredCapabilities'] = true;
      }, [_record('/modules/0/requiredCapabilities', 'Expected a list.')]);

      _expectEnvelopeMutation(baseline, (json) {
        final model = _modelAt(json, 1);
        model['dartOutput'] = 'x.dart';
      }, [_record('/modules/1/model/dartOutput', 'Unknown field.')]);
      _expectEnvelopeMutation(baseline, (json) {
        final model = _modelAt(json, 1);
        model.remove('library');
      }, [_record('/modules/1/model/library', 'Missing field.')]);
      _expectEnvelopeMutation(baseline, (json) {
        final model = _modelAt(json, 1);
        model['classes'] = true;
      }, [_record('/modules/1/model/classes', 'Expected a list.')]);
    });

    test('format protocol package namespace and module tuples fail closed', () {
      final baseline = _envelopeBaseline();
      _expectEnvelopeMutation(baseline, (json) {
        json['formatVersion'] = 999;
      }, [_record('/formatVersion', 'Invalid formatVersion.')]);
      _expectEnvelopeMutation(baseline, (json) {
        json['formatVersion'] = '12';
      }, [_record('/formatVersion', 'Expected an integer.')]);
      _expectEnvelopeMutation(baseline, (json) {
        json['package'] = '';
      }, [_record('/package', 'Invalid Dart package name.')]);
      _expectEnvelopeMutation(baseline, (json) {
        json['bindingNamespace'] = 'Bad Namespace';
      }, [_record('/bindingNamespace', 'Invalid bindingNamespace.')]);

      _expectEnvelopeMutation(baseline, (json) {
        final module = _moduleAt(json, 0);
        module['name'] = 'Host';
      }, [_record('/modules/0/name', 'Invalid module name.')]);
      _expectEnvelopeMutation(baseline, (json) {
        final module = _moduleAt(json, 0);
        module['moduleId'] = 'com.acme.widgets';
      }, [_record('/modules/0/moduleId', 'Invalid moduleId.')]);
      _expectEnvelopeMutation(baseline, (json) {
        final module = _moduleAt(json, 0);
        module['name'] = 'widgets';
        module['moduleId'] = 'com.acme.widgets/host';
      }, [_record('/modules/0/moduleId', 'Tuple mismatch.')]);
      _expectEnvelopeMutation(baseline, (json) {
        final module = _moduleAt(json, 0);
        module['moduleId'] = 'aaa.ns/host';
      }, [_record('', 'Tuple mismatch.')]);
      _expectEnvelopeMutation(baseline, (json) {
        final module = _moduleAt(json, 0);
        module['uiProtocol'] = 19;
      }, [_record('/modules/0/uiProtocol', 'Invalid uiProtocol.')]);
      _expectEnvelopeMutation(baseline, (json) {
        final module = _moduleAt(json, 0);
        module['uiProtocol'] = '20';
      }, [_record('/modules/0/uiProtocol', 'Expected an integer.')]);
    });

    test('noncanonical package name fails closed', () {
      _expectEnvelopeMutation(_envelopeBaseline(), (json) {
        json['package'] = 'Acme_Widgets';
      }, [_record('/package', 'Invalid Dart package name.')]);
    });

    test('self-import fails closed', () {
      _expectEnvelopeMutation(_envelopeBaseline(), (json) {
        json['imports'] = ['acme_widgets', 'flax'];
      }, [_record('/imports', 'Self-import.')]);
    });

    test('noncanonical import package name fails closed', () {
      _expectEnvelopeMutation(_envelopeBaseline(), (json) {
        json['imports'] = ['Flax'];
      }, [_record('/imports/0', 'Invalid Dart package name.')]);
    });

    test('sorted unique collections and identity rows fail closed', () {
      final baseline = _envelopeBaseline();
      _expectEnvelopeMutation(baseline, (json) {
        json['imports'] = ['flax_material', 'flax'];
      }, [_record('/imports', 'Expected sorted imports.')]);
      _expectEnvelopeMutation(baseline, (json) {
        json['imports'] = ['flax', 'flax'];
      }, [_record('/imports', 'Duplicate import.')]);
      _expectEnvelopeMutation(
        baseline,
        (json) {
          final module = _moduleAt(json, 1);
          module['requiredCapabilities'] = ['host'];
        },
        [
          _record(
            '/modules/1/requiredCapabilities',
            'Nonempty requiredCapabilities.',
          ),
        ],
      );
      _expectEnvelopeMutation(
        baseline,
        (json) {
          final module = _moduleAt(json, 1);
          module['requiredCapabilities'] = ['b', 'a'];
        },
        [
          _record(
            '/modules/1/requiredCapabilities',
            'Expected sorted capabilities.',
          ),
          _record(
            '/modules/1/requiredCapabilities',
            'Nonempty requiredCapabilities.',
          ),
        ],
      );
      _expectEnvelopeMutation(baseline, (json) {
        final modules = json['modules'] as List<dynamic>;
        final host = modules[0];
        final widgets = modules[1];
        modules[0] = widgets;
        modules[1] = host;
      }, [_record('/modules', 'Expected sorted modules.')]);
      _expectEnvelopeMutation(baseline, (json) {
        final modules = json['modules'] as List<dynamic>;
        modules.insert(
          1,
          jsonDecode(jsonEncode(modules[0])) as Map<String, dynamic>,
        );
      }, [_record('/modules', 'Duplicate moduleId.')]);

      _expectEnvelopeMutation(
        baseline,
        (json) {
          final identities = _identitiesAt(json, 1);
          final first = identities[0];
          final last = identities[identities.length - 1];
          identities[0] = last;
          identities[identities.length - 1] = first;
        },
        [
          _record(
            '/modules/1/model~1identities',
            'Expected sorted identities.',
          ),
        ],
      );
      _expectEnvelopeMutation(
        baseline,
        (json) {
          final identities = _identitiesAt(json, 1);
          identities.add(Map<String, dynamic>.from(identities.last as Map));
        },
        [
          _record('/modules/1/model~1identities', 'Duplicate sourceIdentity.'),
          _record('/modules/1/model~1identities', 'Duplicate wireId.'),
        ],
      );
      _expectEnvelopeMutation(
        baseline,
        (json) {
          final identity = Map<String, dynamic>.from(
            _identitiesAt(json, 1).first as Map,
          );
          final source = Map<String, dynamic>.from(
            identity['sourceIdentity'] as Map,
          );
          source['originatingUri'] = 'file:///tmp/x.dart';
          identity['sourceIdentity'] = source;
          _identitiesAt(json, 1)[0] = identity;
        },
        [
          _record(
            '/modules/1/model/identities/0/sourceIdentity/originatingUri',
            'Invalid originating URI.',
          ),
        ],
      );
      _expectEnvelopeMutation(baseline, (json) {
        final identity = Map<String, dynamic>.from(
          _identitiesAt(json, 1).first as Map,
        );
        identity['wireId'] = 'not-a-wire';
        _identitiesAt(json, 1)[0] = identity;
      }, [_record('/modules/1/model/identities/0/wireId', 'Invalid wireId.')]);
    });
  });

  group('Manifest 12 ownership model and fromResolved negatives', () {
    test('declaration owner rows are required at id pointers', () {
      const gauge = 'com.acme.widgets/widgets#type:Gauge';
      const axis = 'com.acme.widgets/widgets#type:Axis';
      const show = 'com.acme.widgets/widgets#function:show';
      const scroll = 'com.acme.widgets/widgets#type:Scroll';
      final baseline = _envelopeBaseline();

      _expectEnvelopeMutation(baseline, (json) {
        _setIdentityOwner(json, 1, gauge, false);
      }, [_record('/modules/1/model/classes/0/id', 'Missing owner.')]);
      _expectEnvelopeMutation(baseline, (json) {
        _removeIdentity(json, 1, gauge);
      }, [_record('/modules/1/model/classes/0/id', 'Missing owner.')]);

      _expectEnvelopeMutation(baseline, (json) {
        _setIdentityOwner(json, 1, axis, false);
      }, [_record('/modules/1/model/types/0/id', 'Missing owner.')]);
      _expectEnvelopeMutation(baseline, (json) {
        _removeIdentity(json, 1, axis);
      }, [_record('/modules/1/model/types/0/id', 'Missing owner.')]);

      _expectEnvelopeMutation(baseline, (json) {
        _setIdentityOwner(json, 1, show, false);
      }, [_record('/modules/1/model/functions/0/id', 'Missing owner.')]);
      _expectEnvelopeMutation(baseline, (json) {
        _removeIdentity(json, 1, show);
      }, [_record('/modules/1/model/functions/0/id', 'Missing owner.')]);

      _expectEnvelopeMutation(baseline, (json) {
        _setIdentityOwner(json, 1, scroll, false);
      }, [_record('/modules/1/model/snapshots/0/id', 'Missing owner.')]);
      _expectEnvelopeMutation(baseline, (json) {
        _removeIdentity(json, 1, scroll);
      }, [_record('/modules/1/model/snapshots/0/id', 'Missing owner.')]);
    });

    test(
      'nested TypeRef dependency identities are required at id pointers',
      () {
        const widget = 'flax.core/flutter#type:Widget';
        final baseline = _envelopeBaseline();
        _expectEnvelopeMutation(
          baseline,
          (json) {
            _removeIdentity(json, 1, widget);
          },
          [
            _record(
              '/modules/1/model/classes/0/superTypes/0/id',
              'Missing identity.',
            ),
          ],
        );
        _expectEnvelopeMutation(
          baseline,
          (json) {
            final model = _modelAt(json, 1);
            final classes = List<dynamic>.from(model['classes'] as List);
            final gauge = Map<String, dynamic>.from(classes[0] as Map);
            final superTypes = List<dynamic>.from(gauge['superTypes'] as List);
            final typeRef = Map<String, dynamic>.from(superTypes[0] as Map);
            typeRef['id'] = 'flax.core/flutter#type:Element';
            typeRef['name'] = 'Element';
            superTypes[0] = typeRef;
            gauge['superTypes'] = superTypes;
            gauge['supertypes'] = ['Element'];
            classes[0] = gauge;
            model['classes'] = classes;
          },
          [
            _record(
              '/modules/1/model/classes/0/superTypes/0/id',
              'Missing identity.',
            ),
          ],
        );
        _expectEnvelopeMutation(
          baseline,
          (json) {
            final model = _modelAt(json, 1);
            final classes = List<dynamic>.from(model['classes'] as List);
            final gauge = Map<String, dynamic>.from(classes[0] as Map);
            gauge['superTypes'] = <Object?>[];
            gauge['supertypes'] = <Object?>[];
            classes[0] = gauge;
            model['classes'] = classes;

            final functions = List<dynamic>.from(model['functions'] as List);
            final function = Map<String, dynamic>.from(functions[0] as Map);
            final call = Map<String, dynamic>.from(function['call'] as Map);
            final parameters = List<dynamic>.from(call['parameters'] as List);
            final parameter = Map<String, dynamic>.from(parameters[0] as Map);
            parameter['type'] = FlaxCodegenManifestCodec.encodeTypeRef(
              const FlaxCodegenTypeRef(
                'record',
                recordFields: [
                  FlaxCodegenRecordFieldModel(
                    name: 'widget',
                    type: FlaxCodegenTypeRef(
                      'object',
                      id: 'flax.core/flutter#type:Widget',
                      name: 'Widget',
                    ),
                    positional: false,
                  ),
                ],
              ),
            );
            parameters[0] = parameter;
            call['parameters'] = parameters;
            function['call'] = call;
            functions[0] = function;
            model['functions'] = functions;
            _removeIdentity(json, 1, widget);
          },
          [
            _record(
              '/modules/1/model/functions/0/call/parameters/0/type/recordFields/0/type/id',
              'Missing identity.',
            ),
          ],
        );
      },
    );

    test('owner wire constraints and identity conflicts fail closed', () {
      const gauge = 'com.acme.widgets/widgets#type:Gauge';
      const axis = 'com.acme.widgets/widgets#type:Axis';
      final baseline = _envelopeBaseline();

      _expectEnvelopeMutation(
        baseline,
        (json) {
          _setIdentityWire(json, 1, gauge, 'com.acme.widgets/host#type:Gauge');
        },
        [
          _record(
            '/modules/1/model~1identities/2/wireId',
            'Owner wire outside module.',
          ),
          _record(
            '/modules/1/model~1identities/2/wireId',
            'Ownership inconsistency.',
          ),
        ],
      );
      _expectEnvelopeMutation(
        baseline,
        (json) {
          _setIdentityWire(
            json,
            1,
            gauge,
            'com.acme.widgets/widgets#type:Wrong',
          );
        },
        [
          _record(
            '/modules/1/model/identities/2/wireId',
            'Wire name mismatch.',
          ),
        ],
      );
      _expectEnvelopeMutation(
        baseline,
        (json) {
          _setIdentityWire(
            json,
            1,
            gauge,
            'com.acme.widgets/widgets#function:Gauge',
          );
        },
        [
          _record(
            '/modules/1/model/identities/2/wireId',
            'Wire kind mismatch.',
          ),
        ],
      );

      _expectEnvelopeMutation(
        baseline,
        (json) {
          final identities = _identitiesAt(json, 1);
          final gaugeRow = _identityMap(identities, gauge);
          final source = Map<String, dynamic>.from(
            gaugeRow['sourceIdentity'] as Map,
          );
          identities.insert(_identityIndex(identities, gauge), {
            'sourceIdentity': source,
            'wireId': 'com.acme.widgets/host#type:Gauge',
            'owner': false,
          });
        },
        [
          _record(
            '/modules/1/model~1identities',
            'Conflicting sourceIdentity.',
          ),
        ],
      );
      _expectEnvelopeMutation(baseline, (json) {
        final identities = _identitiesAt(json, 1);
        final gaugeIndex = _identityIndex(identities, gauge);
        identities.insert(gaugeIndex + 1, {
          'sourceIdentity': {
            'kind': 'type',
            'originatingUri': 'package:acme_widgets/other.dart',
            'name': 'Gauge',
          },
          'wireId': gauge,
          'owner': false,
        });
      }, [_record('/modules/1/model~1identities', 'Conflicting wireId.')]);

      _expectEnvelopeMutation(
        baseline,
        (json) {
          final widgets = _identitiesAt(json, 1);
          final gaugeRow = _identityMap(widgets, gauge);
          final source = Map<String, dynamic>.from(
            gaugeRow['sourceIdentity'] as Map,
          );
          _identitiesAt(json, 0).add({
            'sourceIdentity': source,
            'wireId': 'com.acme.widgets/host#type:Gauge',
            'owner': true,
          });
        },
        [
          _record('', 'Conflicting sourceIdentity.'),
          _record('', 'Conflicting sourceIdentity.'),
        ],
      );
      _expectEnvelopeMutation(baseline, (json) {
        final widgets = _identitiesAt(json, 1);
        final axisRow = _identityMap(widgets, axis);
        _identitiesAt(json, 0)
          ..add({
            'sourceIdentity': Map<String, dynamic>.from(
              axisRow['sourceIdentity'] as Map,
            ),
            'wireId': 'com.acme.widgets/host#type:Axis',
            'owner': true,
          })
          ..add({
            'sourceIdentity': {
              'kind': 'type',
              'originatingUri': 'package:acme_widgets/axis_alt.dart',
              'name': 'Axis',
            },
            'wireId': 'com.acme.widgets/host#type:Axis',
            'owner': true,
          });
      }, [_record('/modules/0/model~1identities', 'Conflicting wireId.')]);
    });

    test('fromResolved rejects inconsistent package inputs', () {
      final fixture = _envelopeFixture();
      final widgets = fixture.package.modules.firstWhere(
        (module) => module.moduleId.name.value == 'widgets',
      );
      final host = fixture.package.modules.firstWhere(
        (module) => module.moduleId.name.value == 'host',
      );
      final gaugeOwner = widgets.owners.firstWhere(
        (owner) => owner.sourceIdentity.name == 'Gauge',
      );

      _expectFromResolvedFailure(
        package: FlaxCodegenResolvedPackage(
          dartPackage: fixture.package.dartPackage,
          namespace: fixture.package.namespace,
          modules: [widgets, host],
        ),
        modules: {'host': fixture.models['host']!},
        importPackageNames: fixture.imports,
        records: [_record('/modules', 'Missing module model.')],
      );
      _expectFromResolvedFailure(
        package: FlaxCodegenResolvedPackage(
          dartPackage: fixture.package.dartPackage,
          namespace: fixture.package.namespace,
          modules: [host],
        ),
        modules: fixture.models,
        importPackageNames: fixture.imports,
        records: [_record('/modules/widgets', 'Unexpected module model.')],
      );
      _expectFromResolvedFailure(
        package: fixture.package,
        modules: {
          'host': fixture.models['host']!,
          'widgets': fixture.models['host']!,
        },
        importPackageNames: fixture.imports,
        records: [_record('/modules', 'Tuple mismatch.')],
      );
      _expectFromResolvedFailure(
        package: FlaxCodegenResolvedPackage(
          dartPackage: fixture.package.dartPackage,
          namespace: fixture.package.namespace,
          modules: [
            FlaxCodegenResolvedModule(
              moduleId: FlaxCodegenModuleId(
                namespace: FlaxCodegenBindingNamespace.parse('other.ns'),
                name: widgets.moduleId.name,
              ),
              source: widgets.source,
              owners: widgets.owners,
              references: widgets.references,
              requiredCapabilities: widgets.requiredCapabilities,
            ),
            host,
          ],
        ),
        modules: fixture.models,
        importPackageNames: fixture.imports,
        records: [_record('/modules', 'Tuple mismatch.')],
      );

      _expectFromResolvedFailure(
        package: FlaxCodegenResolvedPackage(
          dartPackage: fixture.package.dartPackage,
          namespace: fixture.package.namespace,
          modules: [
            FlaxCodegenResolvedModule(
              moduleId: widgets.moduleId,
              source: widgets.source,
              owners: [...widgets.owners, gaugeOwner],
              references: widgets.references,
              requiredCapabilities: widgets.requiredCapabilities,
            ),
            host,
          ],
        ),
        modules: fixture.models,
        importPackageNames: fixture.imports,
        records: [_record('/modules/widgets', 'Duplicate sourceIdentity.')],
      );
      _expectFromResolvedFailure(
        package: FlaxCodegenResolvedPackage(
          dartPackage: fixture.package.dartPackage,
          namespace: fixture.package.namespace,
          modules: [
            FlaxCodegenResolvedModule(
              moduleId: widgets.moduleId,
              source: widgets.source,
              owners: [
                ...widgets.owners.where(
                  (owner) => owner.sourceIdentity.name != 'Gauge',
                ),
                FlaxCodegenResolvedOwner(
                  sourceIdentity: gaugeOwner.sourceIdentity,
                  wireId: FlaxCodegenWireId.type(
                    moduleId: widgets.moduleId,
                    publicBindingName: 'Other',
                  ),
                ),
              ],
              references: widgets.references,
              requiredCapabilities: widgets.requiredCapabilities,
            ),
            host,
          ],
        ),
        modules: fixture.models,
        importPackageNames: fixture.imports,
        records: [_record('/modules/widgets', 'Conflicting sourceIdentity.')],
      );
      // Conflicting owners: same wire, different sources.
      final axisOwner = widgets.owners.firstWhere(
        (owner) => owner.sourceIdentity.name == 'Axis',
      );
      _expectFromResolvedFailure(
        package: FlaxCodegenResolvedPackage(
          dartPackage: fixture.package.dartPackage,
          namespace: fixture.package.namespace,
          modules: [
            FlaxCodegenResolvedModule(
              moduleId: widgets.moduleId,
              source: widgets.source,
              owners: [
                ...widgets.owners.where(
                  (owner) => owner.sourceIdentity.name != 'Axis',
                ),
                FlaxCodegenResolvedOwner(
                  sourceIdentity: axisOwner.sourceIdentity,
                  wireId: gaugeOwner.wireId,
                ),
              ],
              references: widgets.references,
              requiredCapabilities: widgets.requiredCapabilities,
            ),
            host,
          ],
        ),
        modules: fixture.models,
        importPackageNames: fixture.imports,
        records: [_record('/modules/widgets', 'Conflicting wireId.')],
      );
      _expectFromResolvedFailure(
        package: FlaxCodegenResolvedPackage(
          dartPackage: fixture.package.dartPackage,
          namespace: fixture.package.namespace,
          modules: [
            FlaxCodegenResolvedModule(
              moduleId: widgets.moduleId,
              source: widgets.source,
              owners: widgets.owners,
              references: [
                ...widgets.references,
                FlaxCodegenResolvedReference(
                  sourceIdentity: gaugeOwner.sourceIdentity,
                  ownerWireId: FlaxCodegenWireId.type(
                    moduleId: widgets.moduleId,
                    publicBindingName: 'Other',
                  ),
                ),
              ],
              requiredCapabilities: widgets.requiredCapabilities,
            ),
            host,
          ],
        ),
        modules: fixture.models,
        importPackageNames: fixture.imports,
        records: [_record('/modules/widgets', 'Conflicting sourceIdentity.')],
      );

      _expectFromResolvedFailure(
        package: FlaxCodegenResolvedPackage(
          dartPackage: 'Acme_Widgets',
          namespace: fixture.package.namespace,
          modules: fixture.package.modules,
        ),
        modules: fixture.models,
        importPackageNames: fixture.imports,
        records: [_record('/package', 'Invalid Dart package name.')],
      );
      _expectFromResolvedFailure(
        package: fixture.package,
        modules: fixture.models,
        importPackageNames: const ['Flax'],
        records: [_record('/imports/0', 'Invalid Dart package name.')],
      );
      _expectFromResolvedFailure(
        package: fixture.package,
        modules: fixture.models,
        importPackageNames: const ['acme_widgets', 'flax'],
        records: [_record('/imports', 'Self-import.')],
      );
      _expectFromResolvedFailure(
        package: fixture.package,
        modules: fixture.models,
        importPackageNames: const ['flax', 'flax'],
        records: [_record('/imports', 'Duplicate import.')],
      );
    });
  });

  group('Manifest 12 generic lexical slot positives', () {
    test(
      'fresh decoded tokens preserve declaration/reference identity sharing',
      () {
        final token = Object();
        final expected = _slotSharingCallback(token);
        final json = FlaxCodegenManifestCodec.encodeTypeRef(expected);
        _expectTypeJson(json);
        final decoded = _decodeType(json);
        final correspondence = <Object, Object>{};
        _expectType(decoded, expected, correspondence);
        final decodedToken = decoded.typeParameters.single.genericIdentity;
        expect(
          decodedToken,
          same(decoded.parameters.single.type.genericIdentity),
        );
        expect(decodedToken, same(decoded.result!.genericIdentity));
      },
    );

    test('nested outer capture shares the same decoded token', () {
      const expectedShape =
          'shape-v1:["callback",0,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null]],[],[["param","requiredPositional",null,["callback",0,[["generic","g1",["type-parameter","g0",0],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0],["param","requiredPositional",null,["type-parameter","g1",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0]';
      final expected = _slotNestedCaptureCallback();
      final before = FlaxCodegenShapeV1.encode(expected).value;
      expect(before, expectedShape);
      final json = FlaxCodegenManifestCodec.encodeTypeRef(expected);
      final decoded = _decodeType(json);
      final correspondence = <Object, Object>{};
      _expectType(decoded, expected, correspondence);
      final after = FlaxCodegenShapeV1.encode(decoded).value;
      expect(after, expectedShape);
      expect(after, before);
      final outerToken = decoded.typeParameters.single.genericIdentity;
      final nested = decoded.parameters.single.type;
      final innerToken = nested.typeParameters.single.genericIdentity;
      expect(outerToken, isNot(same(innerToken)));
      expect(outerToken, same(nested.parameters[0].type.genericIdentity));
      expect(innerToken, same(nested.parameters[1].type.genericIdentity));
    });

    test('same-name inner shadow keeps distinct decoded tokens', () {
      const expectedShape =
          'shape-v1:["callback",0,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null]],[],[["param","requiredPositional",null,["callback",0,[["generic","g1",["type-parameter","g0",0],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0],["param","requiredPositional",null,["type-parameter","g1",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0]';
      final expected = _slotInnerShadowCallback();
      final before = FlaxCodegenShapeV1.encode(expected).value;
      expect(before, expectedShape);
      final json = FlaxCodegenManifestCodec.encodeTypeRef(expected);
      final decoded = _decodeType(json);
      final correspondence = <Object, Object>{};
      _expectType(decoded, expected, correspondence);
      final after = FlaxCodegenShapeV1.encode(decoded).value;
      expect(after, expectedShape);
      expect(after, before);
      final outerToken = decoded.typeParameters.single.genericIdentity;
      final nested = decoded.parameters.single.type;
      final innerToken = nested.typeParameters.single.genericIdentity;
      expect(outerToken, isNot(same(innerToken)));
      expect(decoded.typeParameters.single.name, 'T');
      expect(nested.typeParameters.single.name, 'T');
      expect(nested.parameters[0].name, 'outerRef');
      expect(nested.parameters[1].name, 'innerRef');
      expect(nested.parameters[0].type.genericIdentity, same(outerToken));
      expect(nested.parameters[1].type.genericIdentity, same(innerToken));
    });

    test('self-bound references share the declaration token', () {
      const expectedShape =
          'shape-v1:["callback",0,[["generic","g0",["type-parameter","g0",0],null]],[],[],[],["type-parameter","g0",0],"sync",0]';
      final token = Object();
      final expected = _slotSelfBoundCallback(token);
      final before = FlaxCodegenShapeV1.encode(expected).value;
      expect(before, expectedShape);
      final json = FlaxCodegenManifestCodec.encodeTypeRef(expected);
      final decoded = _decodeType(json);
      final correspondence = <Object, Object>{};
      _expectType(decoded, expected, correspondence);
      final after = FlaxCodegenShapeV1.encode(decoded).value;
      expect(after, expectedShape);
      expect(after, before);
      final declaration = decoded.typeParameters.single.genericIdentity;
      expect(
        declaration,
        same(decoded.typeParameters.single.bound.genericIdentity),
      );
      expect(declaration, same(decoded.result!.genericIdentity));
    });

    test('F-bound references share the declaration token', () {
      const expectedShape =
          'shape-v1:["callback",0,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null],["generic","g1",["type-parameter","g0",0],null]],[],[],[],["type-parameter","g1",0],"sync",0]';
      final tToken = Object();
      final uToken = Object();
      final expected = _slotFBoundCallback(tToken, uToken);
      final before = FlaxCodegenShapeV1.encode(expected).value;
      expect(before, expectedShape);
      final json = FlaxCodegenManifestCodec.encodeTypeRef(expected);
      final decoded = _decodeType(json);
      final correspondence = <Object, Object>{};
      _expectType(decoded, expected, correspondence);
      final after = FlaxCodegenShapeV1.encode(decoded).value;
      expect(after, expectedShape);
      expect(after, before);
      final decodedT = decoded.typeParameters[0].genericIdentity;
      final decodedU = decoded.typeParameters[1].genericIdentity;
      expect(decodedT, isNot(same(decodedU)));
      expect(decodedT, same(decoded.typeParameters[1].bound.genericIdentity));
      expect(decodedU, same(decoded.result!.genericIdentity));
    });

    test('sibling nested callbacks keep shape-v1 strings across manifest round-trip', () {
      final first = Object();
      final second = Object();
      final expected = _slotSiblingNestedCallback(first, second);
      final before = FlaxCodegenShapeV1.encode(expected).value;
      final json = FlaxCodegenManifestCodec.encodeTypeRef(expected);
      final decoded = _decodeType(json);
      final after = FlaxCodegenShapeV1.encode(decoded).value;
      expect(after, before);
      expect(
        decoded.parameters[0].type.typeParameters.single.genericIdentity,
        isNot(
          same(
            decoded.parameters[1].type.typeParameters.single.genericIdentity,
          ),
        ),
      );
    });

    test(
      'fromResolved module round-trip preserves generic identity sharing',
      () {
        final token = Object();
        final callback = _slotEmitterSharingCallback(token);
        final module = _slotGenericModule(callback);
        final encoded = FlaxCodegenManifestCodec.encodeModule(module);
        final decoded = _decodeModule(encoded, module.name);
        final correspondence = <Object, Object>{};
        final roundTrip =
            decoded.classes.single.constructors.single.parameters.single.type;
        _expectType(roundTrip, callback, correspondence);
        final roundTripToken = roundTrip.typeParameters.single.genericIdentity;
        expect(
          roundTripToken,
          same(roundTrip.parameters.single.type.genericIdentity),
        );
        expect(roundTripToken, same(roundTrip.result!.genericIdentity));
      },
    );

    test('projection modulesByModuleId snapshot preserves generic sharing', () {
      final token = Object();
      final callback = _slotEmitterSharingCallback(token);
      final slotPackage = _slotGenericProjectionPackage(callback);
      final root = _rootImporting(const ['pkg_slot']);
      final a = FlaxCodegenManifestProjection(
        root: root,
        directDependencies: {'pkg_slot': slotPackage.projection},
        source: 'package:pkg_a/manifest.json',
      );
      final projected = a.modulesByModuleId[slotPackage.moduleId.value]!;
      final correspondence = <Object, Object>{};
      final projectedCallback =
          projected.classes.single.constructors.single.parameters.single.type;
      _expectType(projectedCallback, callback, correspondence);
      expect(
        projectedCallback.typeParameters.single.genericIdentity,
        same(projectedCallback.parameters.single.type.genericIdentity),
      );
      expect(
        projectedCallback.typeParameters.single.genericIdentity,
        same(projectedCallback.result!.genericIdentity),
      );
    });

    test('emitter bytes match for generic callback module via projection', () {
      final token = Object();
      final callback = _slotEmitterSharingCallback(token);
      final slotPackage = _slotGenericProjectionPackage(callback);
      final directModule = slotPackage.model;
      final projectedModule =
          slotPackage.projection.modulesByModuleId[slotPackage.moduleId.value]!;
      final directEmitter = FlaxCodegenBindingEmitter([directModule]);
      final projectedEmitter = FlaxCodegenBindingEmitter([projectedModule]);
      expect(
        directEmitter.dart(directModule),
        projectedEmitter.dart(projectedModule),
      );
      expect(
        directEmitter.typescript(directModule),
        projectedEmitter.typescript(projectedModule),
      );
    });

    test(
      'method id<T>(T)->T preserves tokens across codec module and projection',
      () {
        final token = Object();
        final method = _slotIdMethod(token);
        final encoded = FlaxCodegenManifestCodec.encodeMethod(method);
        final decoded = _decodeMethod(encoded);
        final correspondence = <Object, Object>{};
        _expectMethod(decoded, method, correspondence);
        expect(
          decoded.typeParameters.single.genericIdentity,
          same(decoded.parameters.single.type.genericIdentity),
        );
        expect(
          decoded.typeParameters.single.genericIdentity,
          same(decoded.result.genericIdentity),
        );

        final module = _slotIdMethodModule(method);
        final roundTrip = _decodeModule(
          FlaxCodegenManifestCodec.encodeModule(module),
          module.name,
        );
        final expectedRoundTrip = _slotIdMethodModule(
          method,
          dartOutput: '',
          tsOutput: '',
        );
        final moduleCorrespondence = <Object, Object>{};
        _expectModule(roundTrip, expectedRoundTrip, moduleCorrespondence);
        final roundTripMethod = roundTrip.classes.single.methods.single;
        expect(
          roundTripMethod.typeParameters.single.genericIdentity,
          same(roundTripMethod.parameters.single.type.genericIdentity),
        );
        expect(
          roundTripMethod.typeParameters.single.genericIdentity,
          same(roundTripMethod.result.genericIdentity),
        );

        final pkg = _slotIdMethodProjectionPackage(method);
        final projected = pkg.projection.modulesByModuleId[pkg.moduleId.value]!;
        final projectionCorrespondence = <Object, Object>{};
        _expectModule(projected, expectedRoundTrip, projectionCorrespondence);
        final projectedMethod = projected.classes.single.methods.single;
        expect(
          projectedMethod.typeParameters.single.genericIdentity,
          same(projectedMethod.parameters.single.type.genericIdentity),
        );
        final directEmitter = FlaxCodegenBindingEmitter([module]);
        final projectedEmitter = FlaxCodegenBindingEmitter([projected]);
        expect(directEmitter.dart(module), projectedEmitter.dart(projected));
        expect(
          directEmitter.typescript(module),
          projectedEmitter.typescript(projected),
        );
      },
    );

    test(
      'class generic capture nests method shadow with shared outer token',
      () {
        final classToken = Object();
        final methodToken = Object();
        final type = _slotGenericCaptureClass(classToken, methodToken);
        final encoded = FlaxCodegenManifestCodec.encodeClass(type);
        final decoded = _decodeClass(encoded);
        final correspondence = <Object, Object>{};
        _expectClass(decoded, type, correspondence);
        final classId = decoded.typeParameters.single.genericIdentity;
        expect(
          classId,
          same(
            decoded.constructors.single.parameters.single.type.genericIdentity,
          ),
        );
        expect(classId, same(decoded.getters.single.type.genericIdentity));
        final nested = decoded.methods.single;
        final methodId = nested.typeParameters.single.genericIdentity;
        expect(classId, isNot(same(methodId)));
        expect(classId, same(nested.parameters.single.type.genericIdentity));
        expect(methodId, same(nested.result.genericIdentity));
      },
    );

    test('named-type F-bound generics preserve declaration tokens', () {
      final tToken = Object();
      final uToken = Object();
      final named = _slotNamedFBoundType(tToken, uToken);
      final encoded = FlaxCodegenManifestCodec.encodeNamedType(named);
      final decoded = _decodeNamedType(encoded);
      final correspondence = <Object, Object>{};
      _expectNamedType(decoded, named, correspondence);
      expect(
        decoded.typeParameters[0].genericIdentity,
        same(decoded.typeParameters[1].bound.genericIdentity),
      );
      expect(
        decoded.typeParameters[0].genericIdentity,
        isNot(same(decoded.typeParameters[1].genericIdentity)),
      );
    });
  });

  group('Manifest 12 generic lexical slot negatives', () {
    test('missing declaration slot fails closed', () {
      final json = _cloneJsonMap(
        _slotCallbackJson(_slotSharingCallback(Object())),
      );
      (json['typeParameters'] as List)[0] = Map<String, Object?>.from(
        (json['typeParameters'] as List)[0] as Map,
      )..remove('slot');
      _expectSlotDecodeFailure(json, [
        _record('/parameters/0/type/slot', 'Out-of-scope slot.'),
        _record('/result/slot', 'Out-of-scope slot.'),
        _record('/typeParameters/0/slot', 'Missing field.'),
        _record('/typeParameters/0/slot', 'Missing slot.'),
      ]);
    });

    test('missing parameter-reference slot fails closed', () {
      final json = _cloneJsonMap(
        _slotCallbackJson(_slotSharingCallback(Object())),
      );
      final parameters = json['parameters'] as List;
      final parameter = Map<String, Object?>.from(
        parameters[0] as Map<String, Object?>,
      );
      final type = Map<String, Object?>.from(
        parameter['type'] as Map<String, Object?>,
      )..remove('slot');
      parameter['type'] = type;
      parameters[0] = parameter;
      _expectSlotDecodeFailure(json, [
        _record('/parameters/0/type/slot', 'Missing field.'),
      ]);
    });

    test('malformed slot strings fail closed', () {
      for (final slot in ['g01', 'G0']) {
        final json = _cloneJsonMap(
          _slotCallbackJson(_slotSharingCallback(Object())),
        );
        (json['typeParameters'] as List)[0] = Map<String, Object?>.from(
          (json['typeParameters'] as List)[0] as Map,
        )..['slot'] = slot;
        _expectSlotDecodeFailure(json, [
          _record('/parameters/0/type/slot', 'Out-of-scope slot.'),
          _record('/result/slot', 'Out-of-scope slot.'),
          _record('/typeParameters/0/slot', 'Invalid slot.'),
        ]);
      }
    });

    test('oversized slot digits fail closed', () {
      final json = _cloneJsonMap(
        _slotCallbackJson(_slotSharingCallback(Object())),
      );
      (json['typeParameters'] as List)[0] = Map<String, Object?>.from(
        (json['typeParameters'] as List)[0] as Map,
      )..['slot'] = 'g${'9' * 40}';
      _expectSlotDecodeFailure(json, [
        _record('/parameters/0/type/slot', 'Out-of-scope slot.'),
        _record('/result/slot', 'Out-of-scope slot.'),
        _record('/typeParameters/0/slot', 'Invalid slot.'),
      ]);
    });

    test('duplicate declaration slot fails closed', () {
      final json = _cloneJsonMap(
        _slotCallbackJson(_slotTwoGenericCallback(Object(), Object())),
      );
      (json['typeParameters'] as List)[1] = Map<String, Object?>.from(
        (json['typeParameters'] as List)[1] as Map,
      )..['slot'] = 'g0';
      _expectSlotDecodeFailure(json, [
        _record('/typeParameters/1/slot', 'Illegal shadowing.'),
      ]);
    });

    test('slot gap fails closed', () {
      final json = _cloneJsonMap(
        _slotCallbackJson(_slotTwoGenericCallback(Object(), Object())),
      );
      (json['typeParameters'] as List)[1] = Map<String, Object?>.from(
        (json['typeParameters'] as List)[1] as Map,
      )..['slot'] = 'g2';
      _expectSlotDecodeFailure(json, [
        _record('/typeParameters/1/slot', 'Slot gap.'),
      ]);
    });

    test('slot reuse fails closed', () {
      final json = _cloneJsonMap(
        _slotCallbackJson(_slotSiblingNestedCallback(Object(), Object())),
      );
      final parameters = List<Object?>.from(json['parameters'] as List);
      final secondParameter = Map<String, Object?>.from(
        parameters[1] as Map<String, Object?>,
      );
      final secondCallback = Map<String, Object?>.from(
        secondParameter['type'] as Map<String, Object?>,
      );
      final nestedTypeParameters = List<Object?>.from(
        secondCallback['typeParameters'] as List,
      );
      nestedTypeParameters[0] = Map<String, Object?>.from(
        nestedTypeParameters[0] as Map<String, Object?>,
      )..['slot'] = 'g0';
      secondCallback['typeParameters'] = nestedTypeParameters;
      secondParameter['type'] = secondCallback;
      parameters[1] = secondParameter;
      json['parameters'] = parameters;
      _expectSlotDecodeFailure(json, [
        _record('/parameters/1/type/typeParameters/0/slot', 'Slot reuse.'),
      ]);
    });

    test('non-preorder slot fails closed', () {
      final json = _cloneJsonMap(
        _slotCallbackJson(_slotTwoGenericCallback(Object(), Object())),
      );
      final typeParameters = List<Object?>.from(json['typeParameters'] as List);
      final first = Map<String, Object?>.from(
        typeParameters[0] as Map<String, Object?>,
      )..['slot'] = 'g1';
      final second = Map<String, Object?>.from(
        typeParameters[1] as Map<String, Object?>,
      )..['slot'] = 'g0';
      json['typeParameters'] = [first, second];
      _expectSlotDecodeFailure(json, [
        _record('/typeParameters/0/slot', 'Slot gap.'),
      ]);
    });

    test('out-of-scope slot fails closed', () {
      final json = _cloneJsonMap(
        _slotCallbackJson(_slotSharingCallback(Object())),
      );
      final parameters = json['parameters'] as List;
      final parameter = Map<String, Object?>.from(
        parameters[0] as Map<String, Object?>,
      );
      final type = Map<String, Object?>.from(
        parameter['type'] as Map<String, Object?>,
      )..['slot'] = 'g9';
      parameter['type'] = type;
      parameters[0] = parameter;
      _expectSlotDecodeFailure(json, [
        _record('/parameters/0/type/slot', 'Out-of-scope slot.'),
      ]);
    });

    test('illegal capture fails closed', () {
      final json = _cloneJsonMap(
        _slotCallbackJson(_slotNestedCaptureCallback()),
      );
      json['result'] = {
        'kind': 'parameter',
        'id': null,
        'name': null,
        'nullable': false,
        'item': null,
        'key': null,
        'parameters': <Object?>[],
        'typeParameters': <Object?>[],
        'result': null,
        'typeArguments': <String>[],
        'dartArguments': <Object?>[],
        'primitiveKinds': <String>[],
        'declaration': null,
        'tsArguments': <Object?>[],
        'slot': 'g1',
      };
      _expectSlotDecodeFailure(json, [
        _record('/result/slot', 'Illegal capture.'),
      ]);
    });

    test('illegal shadowing fails closed', () {
      final json = _slotCallbackJson(_slotSharingCallback(Object()));
      final typeParameters = json['typeParameters'] as List;
      typeParameters.add(Map<String, Object?>.from(typeParameters[0] as Map));
      _expectSlotDecodeFailure(json, [
        _record('/typeParameters/1/slot', 'Illegal shadowing.'),
      ]);
    });

    test('non-null slot on non-parameter type fails closed', () {
      final json = _cloneJsonMap(
        _slotCallbackJson(_slotSharingCallback(Object())),
      );
      (json['dartArguments'] as List).add({
        'kind': 'int',
        'id': null,
        'name': null,
        'nullable': false,
        'item': null,
        'key': null,
        'parameters': <Object?>[],
        'typeParameters': <Object?>[],
        'result': null,
        'typeArguments': <String>[],
        'dartArguments': <Object?>[],
        'primitiveKinds': <String>[],
        'declaration': null,
        'tsArguments': <Object?>[],
        'slot': 'g0',
      });
      _expectSlotDecodeFailure(json, [
        _record('/dartArguments/0/slot', 'Unexpected slot.'),
      ]);
    });
  });

  group('Manifest 12 Quality P1 maximal projection', () {
    test('independently constructed maximal module survives fromResolved encode parse projection and input mutation', () {
      final inIntType = FlaxCodegenTypeRef('int');
      final inStringType = FlaxCodegenTypeRef('String', nullable: true);
      final inVoidType = FlaxCodegenTypeRef('void');
      final inWidgetNominal = FlaxCodegenTypeRef(
        'object',
        id: 'flax.core/flutter#type:Widget',
        name: 'Widget',
      );
      final inElementNominal = FlaxCodegenTypeRef(
        'object',
        id: 'flax.core/flutter#type:Element',
        name: 'Element',
      );
      final inMountedWidget = FlaxCodegenTypeRef('widget');
      final inContextType = FlaxCodegenTypeRef(
        'context',
        id: 'flax.core/flutter#type:BuildContext',
        name: 'BuildContext',
      );

      final namespace = FlaxCodegenBindingNamespace.parse(
        'com.example.maximal',
      );
      final moduleId = FlaxCodegenModuleId(
        namespace: namespace,
        name: FlaxCodegenModuleName.parse('core'),
      );
      final gaugeWire = FlaxCodegenWireId.type(
        moduleId: moduleId,
        publicBindingName: 'Gauge',
      );
      final eventsWire = FlaxCodegenWireId.type(
        moduleId: moduleId,
        publicBindingName: 'Events',
      );
      final pageWire = FlaxCodegenWireId.type(
        moduleId: moduleId,
        publicBindingName: 'LeafPage',
      );
      final cardWire = FlaxCodegenWireId.type(
        moduleId: moduleId,
        publicBindingName: 'Card',
      );
      final hostedWire = FlaxCodegenWireId.type(
        moduleId: moduleId,
        publicBindingName: 'Hosted',
      );
      final axisWire = FlaxCodegenWireId.type(
        moduleId: moduleId,
        publicBindingName: 'Axis',
      );
      final showWire = FlaxCodegenWireId.function(
        moduleId: moduleId,
        publicBindingName: 'show',
      );
      final scrollWire = FlaxCodegenWireId.type(
        moduleId: moduleId,
        publicBindingName: 'Scroll',
      );
      final widgetWire = FlaxCodegenWireId.parse(
        'flax.core/flutter#type:Widget',
      );
      final elementWire = FlaxCodegenWireId.parse(
        'flax.core/flutter#type:Element',
      );
      final contextWire = FlaxCodegenWireId.parse(
        'flax.core/flutter#type:BuildContext',
      );

      final gaugeSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_maximal/core.dart',
        name: 'Gauge',
        origin: FlaxCodegenOriginState.resolved,
      );
      final eventsSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_maximal/core.dart',
        name: 'Events',
        origin: FlaxCodegenOriginState.resolved,
      );
      final pageSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_maximal/core.dart',
        name: 'LeafPage',
        origin: FlaxCodegenOriginState.resolved,
      );
      final cardSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_maximal/core.dart',
        name: 'Card',
        origin: FlaxCodegenOriginState.resolved,
      );
      final hostedSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_maximal/core.dart',
        name: 'Hosted',
        origin: FlaxCodegenOriginState.resolved,
      );
      final axisSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_maximal/core.dart',
        name: 'Axis',
        origin: FlaxCodegenOriginState.resolved,
      );
      final showSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.function,
        originatingUri: 'package:pkg_maximal/core.dart',
        name: 'show',
        origin: FlaxCodegenOriginState.resolved,
      );
      final scrollSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_maximal/core.dart',
        name: 'Scroll',
        origin: FlaxCodegenOriginState.resolved,
      );
      final widgetSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:flutter/src/widgets/framework.dart',
        name: 'Widget',
        origin: FlaxCodegenOriginState.resolved,
      );
      final elementSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:flutter/src/widgets/framework.dart',
        name: 'Element',
        origin: FlaxCodegenOriginState.resolved,
      );
      final contextSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:flutter/src/widgets/framework.dart',
        name: 'BuildContext',
        origin: FlaxCodegenOriginState.resolved,
      );

      final flaxNamespace = FlaxCodegenBindingNamespace.parse('flax.core');
      final flutterModuleId = FlaxCodegenModuleId(
        namespace: flaxNamespace,
        name: FlaxCodegenModuleName.parse('flutter'),
      );
      final flaxManifest = FlaxCodegenManifest.fromResolved(
        package: FlaxCodegenResolvedPackage(
          dartPackage: 'flax',
          namespace: flaxNamespace,
          modules: [
            FlaxCodegenResolvedModule(
              moduleId: flutterModuleId,
              source: 'flutter.yaml',
              owners: [
                FlaxCodegenResolvedOwner(
                  sourceIdentity: widgetSource,
                  wireId: widgetWire,
                ),
                FlaxCodegenResolvedOwner(
                  sourceIdentity: elementSource,
                  wireId: elementWire,
                ),
                FlaxCodegenResolvedOwner(
                  sourceIdentity: contextSource,
                  wireId: contextWire,
                ),
              ],
              references: const [],
              requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
            ),
          ],
        ),
        modules: {
          'flutter': FlaxCodegenModuleModel(
            name: 'flutter',
            library: 'package:flax/flutter.dart',
            jsPackage: '@flax/flutter',
            dartOutput: 'flutter.dart',
            tsOutput: 'flutter.ts',
            classes: [
              FlaxCodegenClassModel(
                name: 'Widget',
                id: widgetWire.value,
                kind: 'object',
                constructors: const [],
                getters: const [],
                methods: const [],
                supertypes: const [],
              ),
              FlaxCodegenClassModel(
                name: 'Element',
                id: elementWire.value,
                kind: 'object',
                constructors: const [],
                getters: const [],
                methods: const [],
                supertypes: const [],
              ),
              FlaxCodegenClassModel(
                name: 'BuildContext',
                id: contextWire.value,
                kind: 'context',
                constructors: const [],
                getters: const [],
                methods: const [],
                supertypes: const [],
              ),
            ],
            types: const [],
          ),
        },
        importPackageNames: const [],
      );
      final flaxProjection = FlaxCodegenManifestProjection(
        root: flaxManifest,
        directDependencies: const {},
        source: 'package:flax/manifest.json',
      );

      // --- Independent input construction (fresh tokens) ---
      final inSelf = Object();
      final inMethodU = Object();
      final inNestedOuter = Object();
      final inNestedInner = Object();
      final inShadowOuter = Object();
      final inShadowInner = Object();
      final inCallback = Object();
      final inProxyMethod = Object();
      final inStream = Object();
      final inNamedT = Object();
      final inNamedU = Object();

      final inputRichItem = FlaxCodegenTypeRef(
        'object',
        id: widgetWire.value,
        name: 'Widget',
        nullable: true,
        typeArguments: const ['Widget'],
        dartArguments: [inIntType],
        primitiveKinds: const ['int', 'String'],
        declaration: inElementNominal,
        tsArguments: [inStringType],
      );
      final inputNested = FlaxCodegenTypeRef(
        'callback',
        typeParameters: [
          FlaxCodegenGenericParameter(
            'T',
            inWidgetNominal,
            genericIdentity: inNestedOuter,
          ),
        ],
        parameters: [
          FlaxCodegenParameterModel(
            name: 'nested',
            type: FlaxCodegenTypeRef(
              'callback',
              typeParameters: [
                FlaxCodegenGenericParameter(
                  'U',
                  FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: inNestedOuter,
                  ),
                  genericIdentity: inNestedInner,
                ),
              ],
              parameters: [
                FlaxCodegenParameterModel(
                  name: 'captured',
                  type: FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: inNestedOuter,
                  ),
                  required: true,
                  positional: true,
                  defaultCode: 'null',
                ),
                FlaxCodegenParameterModel(
                  name: 'inner',
                  type: FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: inNestedInner,
                  ),
                  required: true,
                  positional: true,
                  defaultCode: 'null',
                ),
              ],
              result: inVoidType,
            ),
            required: true,
            positional: true,
            defaultCode: 'null',
          ),
        ],
        result: inVoidType,
      );
      final inputShadow = FlaxCodegenTypeRef(
        'callback',
        typeParameters: [
          FlaxCodegenGenericParameter(
            'T',
            inWidgetNominal,
            genericIdentity: inShadowOuter,
          ),
        ],
        parameters: [
          FlaxCodegenParameterModel(
            name: 'nested',
            type: FlaxCodegenTypeRef(
              'callback',
              typeParameters: [
                FlaxCodegenGenericParameter(
                  'T',
                  FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: inShadowOuter,
                  ),
                  genericIdentity: inShadowInner,
                ),
              ],
              parameters: [
                FlaxCodegenParameterModel(
                  name: 'outerRef',
                  type: FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: inShadowOuter,
                  ),
                  required: true,
                  positional: true,
                  defaultCode: 'null',
                ),
                FlaxCodegenParameterModel(
                  name: 'innerRef',
                  type: FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: inShadowInner,
                  ),
                  required: true,
                  positional: true,
                  defaultCode: 'null',
                ),
              ],
              result: inVoidType,
            ),
            required: true,
            positional: true,
            defaultCode: 'null',
          ),
        ],
        result: inVoidType,
      );
      final inputCallback = FlaxCodegenTypeRef(
        'callback',
        typeParameters: [
          FlaxCodegenGenericParameter(
            'T',
            inWidgetNominal,
            defaultType: inWidgetNominal,
            genericIdentity: inCallback,
          ),
        ],
        parameters: [
          FlaxCodegenParameterModel(
            name: 'value',
            type: FlaxCodegenTypeRef('parameter', genericIdentity: inCallback),
            required: true,
            positional: true,
            defaultCode: 'null',
          ),
        ],
        result: FlaxCodegenTypeRef('parameter', genericIdentity: inCallback),
      );
      final inputGaugeMethod = FlaxCodegenMethodModel(
        'create',
        [
          FlaxCodegenParameterModel(
            name: 'input',
            type: FlaxCodegenTypeRef('parameter', genericIdentity: inSelf),
            required: true,
            positional: true,
            defaultCode: 'null',
          ),
        ],
        FlaxCodegenTypeRef('parameter', genericIdentity: inMethodU),
        instance: true,
        typeArguments: const ['Widget', 'Element'],
        startsRoute: true,
        typeParameters: [
          FlaxCodegenGenericParameter(
            'U',
            FlaxCodegenTypeRef('parameter', genericIdentity: inSelf),
            defaultType: inWidgetNominal,
            genericIdentity: inMethodU,
          ),
        ],
        mustCallSuper: true,
        deferredFactory: true,
      );
      final inputProxyMethod = FlaxCodegenMethodModel(
        'create',
        [
          FlaxCodegenParameterModel(
            name: 'value',
            type: inStringType,
            required: false,
            positional: false,
            defaultCode: 'null',
            omitWhenAbsent: true,
            snapshot: 'Offset',
            encodeKind: 'error',
            scoped: true,
          ),
        ],
        inVoidType,
        instance: true,
        typeArguments: const ['Widget'],
        startsRoute: false,
        typeParameters: [
          FlaxCodegenGenericParameter(
            'T',
            inWidgetNominal,
            defaultType: inIntType,
            genericIdentity: inProxyMethod,
          ),
        ],
        mustCallSuper: true,
        deferredFactory: false,
      );
      final inputGetter = FlaxCodegenGetterModel(
        'value',
        inWidgetNominal,
        encodeKind: 'error',
      );
      final inputSetter = FlaxCodegenGetterModel('value', inIntType);
      final inputClasses = <FlaxCodegenClassModel>[
        FlaxCodegenClassModel(
          name: 'Gauge',
          id: gaugeWire.value,
          kind: 'object',
          typeParameters: [
            FlaxCodegenGenericParameter(
              'T',
              FlaxCodegenTypeRef('parameter', genericIdentity: inSelf),
              genericIdentity: inSelf,
            ),
          ],
          constructors: [
            FlaxCodegenConstructorModel('named', [
              FlaxCodegenParameterModel(
                name: 'config',
                type: FlaxCodegenTypeRef(
                  'map',
                  nullable: true,
                  item: inputRichItem,
                  key: inStringType,
                ),
                required: false,
                positional: false,
                defaultCode: 'const <String, Widget>{}',
                omitWhenAbsent: true,
                snapshot: 'Size',
                encodeKind: 'error',
                scoped: true,
              ),
              FlaxCodegenParameterModel(
                name: 'nested',
                type: inputNested,
                required: true,
                positional: true,
                defaultCode: 'null',
              ),
              FlaxCodegenParameterModel(
                name: 'shadow',
                type: inputShadow,
                required: true,
                positional: true,
                defaultCode: 'null',
              ),
              FlaxCodegenParameterModel(
                name: 'builder',
                type: inputCallback,
                required: true,
                positional: false,
                defaultCode: 'null',
              ),
            ]),
          ],
          getters: [inputGetter],
          setters: [inputSetter],
          staticGetters: [inputGetter],
          methods: [inputGaugeMethod],
          disposeMethod: 'dispose',
          listenerPairs: {'watch': 'unwatch', 'addListener': 'removeListener'},
          jsName: 'CanvasView',
          typeArguments: const ['Widget', 'Element'],
          supertypes: const ['Widget', 'Element'],
          superTypes: [inWidgetNominal],
          proxy: FlaxCodegenProxyModel(
            'extends',
            [inputProxyMethod],
            superMethods: const ['initState', 'dispose'],
            getters: [inputGetter],
            setters: [inputSetter],
          ),
        ),
        FlaxCodegenClassModel(
          name: 'Events',
          id: eventsWire.value,
          kind: 'stream',
          typeParameters: [
            FlaxCodegenGenericParameter(
              'E',
              inWidgetNominal,
              defaultType: inIntType,
              genericIdentity: inStream,
            ),
          ],
          constructors: const [],
          getters: const [],
          asyncIterableFactory: 'fromAsyncIterable',
          disposeMethod: 'dispose',
          supertypes: const [],
        ),
        FlaxCodegenClassModel(
          name: 'LeafPage',
          id: pageWire.value,
          kind: 'page',
          constructors: [
            FlaxCodegenConstructorModel('', [
              FlaxCodegenParameterModel(
                name: 'title',
                type: inStringType,
                required: false,
                positional: false,
                defaultCode: "''",
              ),
            ]),
          ],
          pageAdapter: const FlaxCodegenPageAdapterModel(
            'package:pkg_maximal/adapter.dart',
            'createRoute',
          ),
          getters: const [],
          methods: const [],
          supertypes: const [],
        ),
        FlaxCodegenClassModel(
          name: 'Card',
          id: cardWire.value,
          kind: 'widget',
          constructors: [
            FlaxCodegenConstructorModel('', [
              FlaxCodegenParameterModel(
                name: 'child',
                type: inWidgetNominal,
                required: true,
                positional: false,
                defaultCode: 'null',
              ),
            ]),
          ],
          getters: const [],
          methods: const [],
          widgetInterfaces: [inWidgetNominal],
          supertypes: const ['Widget'],
          superTypes: [inWidgetNominal],
        ),
        FlaxCodegenClassModel(
          name: 'Hosted',
          id: hostedWire.value,
          kind: 'widget',
          constructors: [
            FlaxCodegenConstructorModel('', [
              FlaxCodegenParameterModel(
                name: 'builder',
                type: FlaxCodegenTypeRef(
                  'callback',
                  parameters: [
                    FlaxCodegenParameterModel(
                      name: 'context',
                      type: inContextType,
                      required: true,
                      positional: true,
                      defaultCode: 'null',
                    ),
                  ],
                  result: inMountedWidget,
                ),
                required: true,
                positional: false,
                defaultCode: 'null',
                independentWidgetResult: true,
              ),
            ]),
          ],
          getters: const [],
          methods: const [],
          widgetInterfaces: const [],
          supertypes: const ['Widget'],
          superTypes: [inWidgetNominal],
        ),
      ];
      final input = FlaxCodegenModuleModel(
        name: 'core',
        library: 'package:pkg_maximal/core.dart',
        jsPackage: '@example/maximal',
        dartOutput: 'core.dart',
        tsOutput: 'core.ts',
        classes: inputClasses,
        types: [
          FlaxCodegenNamedTypeModel(
            name: 'Axis',
            id: axisWire.value,
            enumNames: const ['horizontal', 'vertical'],
            typeParameters: [
              FlaxCodegenGenericParameter(
                'T',
                inWidgetNominal,
                defaultType: inWidgetNominal,
                genericIdentity: inNamedT,
              ),
              FlaxCodegenGenericParameter(
                'U',
                FlaxCodegenTypeRef('parameter', genericIdentity: inNamedT),
                defaultType: inWidgetNominal,
                genericIdentity: inNamedU,
              ),
            ],
          ),
        ],
        typeLibraries: {
          'Widget': 'package:flutter/widgets.dart',
          'Element': 'package:flutter/element.dart',
        },
        functions: [
          FlaxCodegenFunctionModel(
            showWire.value,
            FlaxCodegenMethodModel('show', [
              FlaxCodegenParameterModel(
                name: 'value',
                type: inIntType,
                required: true,
                positional: true,
                defaultCode: '0',
              ),
            ], inVoidType),
            route: const FlaxCodegenRouteCallModel('context', 'rootNavigator', [
              'builder',
              'pageBuilder',
            ]),
          ),
        ],
        snapshots: const [
          FlaxCodegenSnapshotModel(
            name: 'Scroll',
            id: 'com.example.maximal/core#type:Scroll',
            parent: 'Offset',
            fields: [
              FlaxCodegenSnapshotFieldModel(
                name: 'dx',
                kind: 'double',
                enumNames: ['horizontal', 'vertical'],
                snapshot: 'Offset',
                nullable: true,
              ),
              FlaxCodegenSnapshotFieldModel(name: 'delta', kind: 'int'),
            ],
          ),
        ],
      );

      const nestedShape =
          'shape-v1:["callback",0,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null]],[],[["param","requiredPositional",null,["callback",0,[["generic","g1",["type-parameter","g0",0],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0],["param","requiredPositional",null,["type-parameter","g1",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0]';
      const shadowShape = nestedShape;
      const selfShape =
          'shape-v1:["callback",0,[["generic","g0",["type-parameter","g0",0],null]],[],[],[],["type-parameter","g0",0],"sync",0]';
      const fboundShape =
          'shape-v1:["callback",0,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]]],["generic","g1",["type-parameter","g0",0],["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]]]],[],[],[],["type-parameter","g1",0],"sync",0]';

      final inputSelfShapeType = FlaxCodegenTypeRef(
        'callback',
        typeParameters: input.classes[0].typeParameters,
        result: FlaxCodegenTypeRef('parameter', genericIdentity: inSelf),
      );
      final inputFBoundShapeType = FlaxCodegenTypeRef(
        'callback',
        typeParameters: input.types.single.typeParameters,
        result: FlaxCodegenTypeRef('parameter', genericIdentity: inNamedU),
      );
      expect(FlaxCodegenShapeV1.encode(inputNested).value, nestedShape);
      expect(FlaxCodegenShapeV1.encode(inputShadow).value, shadowShape);
      expect(FlaxCodegenShapeV1.encode(inputSelfShapeType).value, selfShape);
      expect(
        FlaxCodegenShapeV1.encode(inputFBoundShapeType).value,
        fboundShape,
      );

      // --- Independent expected construction (separate fresh tokens) ---
      final exSelf = Object();
      final exMethodU = Object();
      final exNestedOuter = Object();
      final exNestedInner = Object();
      final exShadowOuter = Object();
      final exShadowInner = Object();
      final exCallback = Object();
      final exProxyMethod = Object();
      final exStream = Object();
      final exNamedT = Object();
      final exNamedU = Object();
      final expectedTokens = <Object>{
        exSelf,
        exMethodU,
        exNestedOuter,
        exNestedInner,
        exShadowOuter,
        exShadowInner,
        exCallback,
        exProxyMethod,
        exStream,
        exNamedT,
        exNamedU,
      };

      final exIntType = FlaxCodegenTypeRef('int');
      final exStringType = FlaxCodegenTypeRef('String', nullable: true);
      final exVoidType = FlaxCodegenTypeRef('void');
      final exWidgetNominal = FlaxCodegenTypeRef(
        'object',
        id: 'flax.core/flutter#type:Widget',
        name: 'Widget',
      );
      final exElementNominal = FlaxCodegenTypeRef(
        'object',
        id: 'flax.core/flutter#type:Element',
        name: 'Element',
      );
      final exMountedWidget = FlaxCodegenTypeRef('widget');
      final exContextType = FlaxCodegenTypeRef(
        'context',
        id: 'flax.core/flutter#type:BuildContext',
        name: 'BuildContext',
      );

      final expectedRichItem = FlaxCodegenTypeRef(
        'object',
        id: widgetWire.value,
        name: 'Widget',
        nullable: true,
        typeArguments: const ['Widget'],
        dartArguments: [exIntType],
        primitiveKinds: const ['int', 'String'],
        declaration: exElementNominal,
        tsArguments: [exStringType],
      );
      final expectedNested = FlaxCodegenTypeRef(
        'callback',
        typeParameters: [
          FlaxCodegenGenericParameter(
            'T',
            exWidgetNominal,
            genericIdentity: exNestedOuter,
          ),
        ],
        parameters: [
          FlaxCodegenParameterModel(
            name: 'nested',
            type: FlaxCodegenTypeRef(
              'callback',
              typeParameters: [
                FlaxCodegenGenericParameter(
                  'U',
                  FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: exNestedOuter,
                  ),
                  genericIdentity: exNestedInner,
                ),
              ],
              parameters: [
                FlaxCodegenParameterModel(
                  name: 'captured',
                  type: FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: exNestedOuter,
                  ),
                  required: true,
                  positional: true,
                  defaultCode: 'null',
                ),
                FlaxCodegenParameterModel(
                  name: 'inner',
                  type: FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: exNestedInner,
                  ),
                  required: true,
                  positional: true,
                  defaultCode: 'null',
                ),
              ],
              result: exVoidType,
            ),
            required: true,
            positional: true,
            defaultCode: 'null',
          ),
        ],
        result: exVoidType,
      );
      final expectedShadow = FlaxCodegenTypeRef(
        'callback',
        typeParameters: [
          FlaxCodegenGenericParameter(
            'T',
            exWidgetNominal,
            genericIdentity: exShadowOuter,
          ),
        ],
        parameters: [
          FlaxCodegenParameterModel(
            name: 'nested',
            type: FlaxCodegenTypeRef(
              'callback',
              typeParameters: [
                FlaxCodegenGenericParameter(
                  'T',
                  FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: exShadowOuter,
                  ),
                  genericIdentity: exShadowInner,
                ),
              ],
              parameters: [
                FlaxCodegenParameterModel(
                  name: 'outerRef',
                  type: FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: exShadowOuter,
                  ),
                  required: true,
                  positional: true,
                  defaultCode: 'null',
                ),
                FlaxCodegenParameterModel(
                  name: 'innerRef',
                  type: FlaxCodegenTypeRef(
                    'parameter',
                    genericIdentity: exShadowInner,
                  ),
                  required: true,
                  positional: true,
                  defaultCode: 'null',
                ),
              ],
              result: exVoidType,
            ),
            required: true,
            positional: true,
            defaultCode: 'null',
          ),
        ],
        result: exVoidType,
      );
      final expectedCallback = FlaxCodegenTypeRef(
        'callback',
        typeParameters: [
          FlaxCodegenGenericParameter(
            'T',
            exWidgetNominal,
            defaultType: exWidgetNominal,
            genericIdentity: exCallback,
          ),
        ],
        parameters: [
          FlaxCodegenParameterModel(
            name: 'value',
            type: FlaxCodegenTypeRef('parameter', genericIdentity: exCallback),
            required: true,
            positional: true,
            defaultCode: 'null',
          ),
        ],
        result: FlaxCodegenTypeRef('parameter', genericIdentity: exCallback),
      );
      final expectedGaugeMethod = FlaxCodegenMethodModel(
        'create',
        [
          FlaxCodegenParameterModel(
            name: 'input',
            type: FlaxCodegenTypeRef('parameter', genericIdentity: exSelf),
            required: true,
            positional: true,
            defaultCode: 'null',
          ),
        ],
        FlaxCodegenTypeRef('parameter', genericIdentity: exMethodU),
        instance: true,
        typeArguments: const ['Widget', 'Element'],
        startsRoute: true,
        typeParameters: [
          FlaxCodegenGenericParameter(
            'U',
            FlaxCodegenTypeRef('parameter', genericIdentity: exSelf),
            defaultType: exWidgetNominal,
            genericIdentity: exMethodU,
          ),
        ],
        mustCallSuper: true,
        deferredFactory: true,
      );
      final expectedProxyMethod = FlaxCodegenMethodModel(
        'create',
        [
          FlaxCodegenParameterModel(
            name: 'value',
            type: exStringType,
            required: false,
            positional: false,
            defaultCode: 'null',
            omitWhenAbsent: true,
            snapshot: 'Offset',
            encodeKind: 'error',
            scoped: true,
          ),
        ],
        exVoidType,
        instance: true,
        typeArguments: const ['Widget'],
        startsRoute: false,
        typeParameters: [
          FlaxCodegenGenericParameter(
            'T',
            exWidgetNominal,
            defaultType: exIntType,
            genericIdentity: exProxyMethod,
          ),
        ],
        mustCallSuper: true,
        deferredFactory: false,
      );
      final expectedGetter = FlaxCodegenGetterModel(
        'value',
        exWidgetNominal,
        encodeKind: 'error',
      );
      final expectedSetter = FlaxCodegenGetterModel('value', exIntType);
      final expected = FlaxCodegenModuleModel(
        name: 'core',
        library: 'package:pkg_maximal/core.dart',
        jsPackage: '@example/maximal',
        dartOutput: '',
        tsOutput: '',
        classes: [
          FlaxCodegenClassModel(
            name: 'Gauge',
            id: gaugeWire.value,
            kind: 'object',
            typeParameters: [
              FlaxCodegenGenericParameter(
                'T',
                FlaxCodegenTypeRef('parameter', genericIdentity: exSelf),
                genericIdentity: exSelf,
              ),
            ],
            constructors: [
              FlaxCodegenConstructorModel('named', [
                FlaxCodegenParameterModel(
                  name: 'config',
                  type: FlaxCodegenTypeRef(
                    'map',
                    nullable: true,
                    item: expectedRichItem,
                    key: exStringType,
                  ),
                  required: false,
                  positional: false,
                  defaultCode: 'const <String, Widget>{}',
                  omitWhenAbsent: true,
                  snapshot: 'Size',
                  encodeKind: 'error',
                  scoped: true,
                ),
                FlaxCodegenParameterModel(
                  name: 'nested',
                  type: expectedNested,
                  required: true,
                  positional: true,
                  defaultCode: 'null',
                ),
                FlaxCodegenParameterModel(
                  name: 'shadow',
                  type: expectedShadow,
                  required: true,
                  positional: true,
                  defaultCode: 'null',
                ),
                FlaxCodegenParameterModel(
                  name: 'builder',
                  type: expectedCallback,
                  required: true,
                  positional: false,
                  defaultCode: 'null',
                ),
              ]),
            ],
            getters: [expectedGetter],
            setters: [expectedSetter],
            staticGetters: [expectedGetter],
            methods: [expectedGaugeMethod],
            disposeMethod: 'dispose',
            listenerPairs: {
              'addListener': 'removeListener',
              'watch': 'unwatch',
            },
            jsName: 'CanvasView',
            typeArguments: const ['Widget', 'Element'],
            supertypes: const ['Widget', 'Element'],
            superTypes: [exWidgetNominal],
            proxy: FlaxCodegenProxyModel(
              'extends',
              [expectedProxyMethod],
              superMethods: const ['initState', 'dispose'],
              getters: [expectedGetter],
              setters: [expectedSetter],
            ),
          ),
          FlaxCodegenClassModel(
            name: 'Events',
            id: eventsWire.value,
            kind: 'stream',
            typeParameters: [
              FlaxCodegenGenericParameter(
                'E',
                exWidgetNominal,
                defaultType: exIntType,
                genericIdentity: exStream,
              ),
            ],
            constructors: const [],
            getters: const [],
            asyncIterableFactory: 'fromAsyncIterable',
            disposeMethod: 'dispose',
            supertypes: const [],
          ),
          FlaxCodegenClassModel(
            name: 'LeafPage',
            id: pageWire.value,
            kind: 'page',
            constructors: [
              FlaxCodegenConstructorModel('', [
                FlaxCodegenParameterModel(
                  name: 'title',
                  type: exStringType,
                  required: false,
                  positional: false,
                  defaultCode: "''",
                ),
              ]),
            ],
            pageAdapter: const FlaxCodegenPageAdapterModel(
              'package:pkg_maximal/adapter.dart',
              'createRoute',
            ),
            getters: const [],
            methods: const [],
            supertypes: const [],
          ),
          FlaxCodegenClassModel(
            name: 'Card',
            id: cardWire.value,
            kind: 'widget',
            constructors: [
              FlaxCodegenConstructorModel('', [
                FlaxCodegenParameterModel(
                  name: 'child',
                  type: exWidgetNominal,
                  required: true,
                  positional: false,
                  defaultCode: 'null',
                ),
              ]),
            ],
            getters: const [],
            methods: const [],
            widgetInterfaces: [exWidgetNominal],
            supertypes: const ['Widget'],
            superTypes: [exWidgetNominal],
          ),
          FlaxCodegenClassModel(
            name: 'Hosted',
            id: hostedWire.value,
            kind: 'widget',
            constructors: [
              FlaxCodegenConstructorModel('', [
                FlaxCodegenParameterModel(
                  name: 'builder',
                  type: FlaxCodegenTypeRef(
                    'callback',
                    parameters: [
                      FlaxCodegenParameterModel(
                        name: 'context',
                        type: exContextType,
                        required: true,
                        positional: true,
                        defaultCode: 'null',
                      ),
                    ],
                    result: exMountedWidget,
                  ),
                  required: true,
                  positional: false,
                  defaultCode: 'null',
                  independentWidgetResult: true,
                ),
              ]),
            ],
            getters: const [],
            methods: const [],
            widgetInterfaces: const [],
            supertypes: const ['Widget'],
            superTypes: [exWidgetNominal],
          ),
        ],
        types: [
          FlaxCodegenNamedTypeModel(
            name: 'Axis',
            id: axisWire.value,
            enumNames: const ['horizontal', 'vertical'],
            typeParameters: [
              FlaxCodegenGenericParameter(
                'T',
                exWidgetNominal,
                defaultType: exWidgetNominal,
                genericIdentity: exNamedT,
              ),
              FlaxCodegenGenericParameter(
                'U',
                FlaxCodegenTypeRef('parameter', genericIdentity: exNamedT),
                defaultType: exWidgetNominal,
                genericIdentity: exNamedU,
              ),
            ],
          ),
        ],
        typeLibraries: {
          'Element': 'package:flutter/element.dart',
          'Widget': 'package:flutter/widgets.dart',
        },
        functions: [
          FlaxCodegenFunctionModel(
            showWire.value,
            FlaxCodegenMethodModel('show', [
              FlaxCodegenParameterModel(
                name: 'value',
                type: exIntType,
                required: true,
                positional: true,
                defaultCode: '0',
              ),
            ], exVoidType),
            route: const FlaxCodegenRouteCallModel('context', 'rootNavigator', [
              'builder',
              'pageBuilder',
            ]),
          ),
        ],
        snapshots: const [
          FlaxCodegenSnapshotModel(
            name: 'Scroll',
            id: 'com.example.maximal/core#type:Scroll',
            parent: 'Offset',
            fields: [
              FlaxCodegenSnapshotFieldModel(
                name: 'dx',
                kind: 'double',
                enumNames: ['horizontal', 'vertical'],
                snapshot: 'Offset',
                nullable: true,
              ),
              FlaxCodegenSnapshotFieldModel(name: 'delta', kind: 'int'),
            ],
          ),
        ],
      );

      final leafManifest = FlaxCodegenManifest.fromResolved(
        package: FlaxCodegenResolvedPackage(
          dartPackage: 'pkg_maximal',
          namespace: namespace,
          modules: [
            FlaxCodegenResolvedModule(
              moduleId: moduleId,
              source: 'core.yaml',
              owners: [
                FlaxCodegenResolvedOwner(
                  sourceIdentity: gaugeSource,
                  wireId: gaugeWire,
                ),
                FlaxCodegenResolvedOwner(
                  sourceIdentity: eventsSource,
                  wireId: eventsWire,
                ),
                FlaxCodegenResolvedOwner(
                  sourceIdentity: pageSource,
                  wireId: pageWire,
                ),
                FlaxCodegenResolvedOwner(
                  sourceIdentity: cardSource,
                  wireId: cardWire,
                ),
                FlaxCodegenResolvedOwner(
                  sourceIdentity: hostedSource,
                  wireId: hostedWire,
                ),
                FlaxCodegenResolvedOwner(
                  sourceIdentity: axisSource,
                  wireId: axisWire,
                ),
                FlaxCodegenResolvedOwner(
                  sourceIdentity: showSource,
                  wireId: showWire,
                ),
                FlaxCodegenResolvedOwner(
                  sourceIdentity: scrollSource,
                  wireId: scrollWire,
                ),
              ],
              references: [
                FlaxCodegenResolvedReference(
                  sourceIdentity: widgetSource,
                  ownerWireId: widgetWire,
                ),
                FlaxCodegenResolvedReference(
                  sourceIdentity: elementSource,
                  ownerWireId: elementWire,
                ),
                FlaxCodegenResolvedReference(
                  sourceIdentity: contextSource,
                  ownerWireId: contextWire,
                ),
              ],
              requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
            ),
          ],
        ),
        modules: {'core': input},
        importPackageNames: const ['flax'],
      );
      final canonicalBytes = leafManifest.encode();
      final parseDiagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
      final parsed = FlaxCodegenManifest.parse(
        canonicalBytes,
        parseDiagnostics,
      );
      parseDiagnostics.throwIfAny();
      expect(parsed, isNotNull);
      expect(parsed!.encode(), canonicalBytes);

      final leafProjection = FlaxCodegenManifestProjection(
        root: parsed,
        directDependencies: {'flax': flaxProjection},
        source: 'package:pkg_maximal/manifest.json',
      );

      final aNamespace = FlaxCodegenBindingNamespace.parse('com.example.a');
      final aModuleId = FlaxCodegenModuleId(
        namespace: aNamespace,
        name: FlaxCodegenModuleName.parse('app'),
      );
      final aOwnerSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_a/app.dart',
        name: 'Root',
        origin: FlaxCodegenOriginState.resolved,
      );
      final aOwnerWire = FlaxCodegenWireId.type(
        moduleId: aModuleId,
        publicBindingName: 'Root',
      );
      final aManifest = FlaxCodegenManifest.fromResolved(
        package: FlaxCodegenResolvedPackage(
          dartPackage: 'pkg_a',
          namespace: aNamespace,
          modules: [
            FlaxCodegenResolvedModule(
              moduleId: aModuleId,
              source: 'app.yaml',
              owners: [
                FlaxCodegenResolvedOwner(
                  sourceIdentity: aOwnerSource,
                  wireId: aOwnerWire,
                ),
              ],
              references: const [],
              requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
            ),
          ],
        ),
        modules: {
          'app': FlaxCodegenModuleModel(
            name: 'app',
            library: 'package:pkg_a/app.dart',
            jsPackage: '@example/a',
            dartOutput: 'app.dart',
            tsOutput: 'app.ts',
            classes: [
              FlaxCodegenClassModel(
                name: 'Root',
                id: aOwnerWire.value,
                kind: 'object',
                constructors: [FlaxCodegenConstructorModel('', [])],
                getters: const [],
                methods: const [],
                supertypes: const [],
              ),
            ],
            types: const [],
          ),
        },
        importPackageNames: const ['pkg_maximal'],
      );
      final aProjection = FlaxCodegenManifestProjection(
        root: aManifest,
        directDependencies: {'pkg_maximal': leafProjection},
        source: 'package:pkg_a/manifest.json',
      );

      final loaded = aProjection.modulesByModuleId[moduleId.value]!;
      final beforeBytes = FlaxCodegenManifestCodec.encodeModule(loaded);
      final correspondence = <Object, Object>{};
      _expectModule(loaded, expected, correspondence);
      _expectIdentityBijection(correspondence, expectedTokens);

      final expectedNestedType =
          expected.classes[0].constructors.single.parameters[1].type;
      final expectedShadowType =
          expected.classes[0].constructors.single.parameters[2].type;
      final expectedSelfShapeType = FlaxCodegenTypeRef(
        'callback',
        typeParameters: expected.classes[0].typeParameters,
        result: FlaxCodegenTypeRef('parameter', genericIdentity: exSelf),
      );
      final expectedFBoundShapeType = FlaxCodegenTypeRef(
        'callback',
        typeParameters: expected.types.single.typeParameters,
        result: FlaxCodegenTypeRef('parameter', genericIdentity: exNamedU),
      );
      expect(FlaxCodegenShapeV1.encode(expectedNestedType).value, nestedShape);
      expect(FlaxCodegenShapeV1.encode(expectedShadowType).value, shadowShape);
      expect(FlaxCodegenShapeV1.encode(expectedSelfShapeType).value, selfShape);
      expect(
        FlaxCodegenShapeV1.encode(expectedFBoundShapeType).value,
        fboundShape,
      );

      final loadedNestedType =
          loaded.classes[0].constructors.single.parameters[1].type;
      final loadedShadowType =
          loaded.classes[0].constructors.single.parameters[2].type;
      final loadedSelfShapeType = FlaxCodegenTypeRef(
        'callback',
        typeParameters: loaded.classes[0].typeParameters,
        result: FlaxCodegenTypeRef(
          'parameter',
          genericIdentity:
              loaded.classes[0].typeParameters.single.genericIdentity,
        ),
      );
      final loadedFBoundShapeType = FlaxCodegenTypeRef(
        'callback',
        typeParameters: loaded.types.single.typeParameters,
        result: FlaxCodegenTypeRef(
          'parameter',
          genericIdentity:
              loaded.types.single.typeParameters[1].genericIdentity,
        ),
      );
      expect(FlaxCodegenShapeV1.encode(loadedNestedType).value, nestedShape);
      expect(FlaxCodegenShapeV1.encode(loadedShadowType).value, shadowShape);
      expect(FlaxCodegenShapeV1.encode(loadedSelfShapeType).value, selfShape);
      expect(
        FlaxCodegenShapeV1.encode(loadedFBoundShapeType).value,
        fboundShape,
      );

      final loadedGauge = loaded.classes[0];
      final loadedSelf = loadedGauge.typeParameters.single.genericIdentity;
      expect(
        loadedSelf,
        same(loadedGauge.typeParameters.single.bound.genericIdentity),
      );
      final loadedMethod = loadedGauge.methods.single;
      final loadedMethodU = loadedMethod.typeParameters.single.genericIdentity;
      expect(loadedSelf, isNot(same(loadedMethodU)));
      expect(
        loadedSelf,
        same(loadedMethod.typeParameters.single.bound.genericIdentity),
      );
      expect(loadedMethodU, same(loadedMethod.result.genericIdentity));
      expect(
        loadedSelf,
        same(loadedMethod.parameters.single.type.genericIdentity),
      );

      final loadedCtor = loadedGauge.constructors.single;
      final loadedNestedOuter =
          loadedCtor.parameters[1].type.typeParameters.single.genericIdentity;
      final loadedNestedInner = loadedCtor
          .parameters[1]
          .type
          .parameters
          .single
          .type
          .typeParameters
          .single
          .genericIdentity;
      expect(loadedNestedOuter, isNot(same(loadedNestedInner)));
      expect(
        loadedNestedOuter,
        same(
          loadedCtor
              .parameters[1]
              .type
              .parameters
              .single
              .type
              .parameters[0]
              .type
              .genericIdentity,
        ),
      );
      expect(
        loadedNestedInner,
        same(
          loadedCtor
              .parameters[1]
              .type
              .parameters
              .single
              .type
              .parameters[1]
              .type
              .genericIdentity,
        ),
      );

      final loadedShadowOuter =
          loadedCtor.parameters[2].type.typeParameters.single.genericIdentity;
      final loadedShadowInner = loadedCtor
          .parameters[2]
          .type
          .parameters
          .single
          .type
          .typeParameters
          .single
          .genericIdentity;
      expect(loadedShadowOuter, isNot(same(loadedShadowInner)));
      expect(loadedCtor.parameters[2].type.typeParameters.single.name, 'T');
      expect(
        loadedCtor
            .parameters[2]
            .type
            .parameters
            .single
            .type
            .typeParameters
            .single
            .name,
        'T',
      );
      expect(
        loadedCtor.parameters[2].type.parameters.single.type.parameters[0].name,
        'outerRef',
      );
      expect(
        loadedCtor.parameters[2].type.parameters.single.type.parameters[1].name,
        'innerRef',
      );
      expect(
        loadedShadowOuter,
        same(
          loadedCtor
              .parameters[2]
              .type
              .parameters
              .single
              .type
              .parameters[0]
              .type
              .genericIdentity,
        ),
      );
      expect(
        loadedShadowInner,
        same(
          loadedCtor
              .parameters[2]
              .type
              .parameters
              .single
              .type
              .parameters[1]
              .type
              .genericIdentity,
        ),
      );

      final loadedCallback = loadedCtor.parameters[3].type;
      final loadedCallbackToken =
          loadedCallback.typeParameters.single.genericIdentity;
      expect(
        loadedCallbackToken,
        same(loadedCallback.parameters.single.type.genericIdentity),
      );
      expect(loadedCallbackToken, same(loadedCallback.result!.genericIdentity));

      final loadedProxyToken = loadedGauge
          .proxy!
          .methods
          .single
          .typeParameters
          .single
          .genericIdentity;
      expect(loadedProxyToken, isNot(same(loadedSelf)));
      expect(loadedProxyToken, isNot(same(loadedMethodU)));

      final loadedStream =
          loaded.classes[1].typeParameters.single.genericIdentity;
      expect(loadedStream, isNot(same(loadedSelf)));

      final loadedNamedT =
          loaded.types.single.typeParameters[0].genericIdentity;
      final loadedNamedU =
          loaded.types.single.typeParameters[1].genericIdentity;
      expect(loadedNamedT, isNot(same(loadedNamedU)));
      expect(
        loadedNamedT,
        same(loaded.types.single.typeParameters[1].bound.genericIdentity),
      );

      expect(correspondence[loadedSelf], same(exSelf));
      expect(correspondence[loadedMethodU], same(exMethodU));
      expect(correspondence[loadedNestedOuter], same(exNestedOuter));
      expect(correspondence[loadedNestedInner], same(exNestedInner));
      expect(correspondence[loadedShadowOuter], same(exShadowOuter));
      expect(correspondence[loadedShadowInner], same(exShadowInner));
      expect(correspondence[loadedCallbackToken], same(exCallback));
      expect(correspondence[loadedProxyToken], same(exProxyMethod));
      expect(correspondence[loadedStream], same(exStream));
      expect(correspondence[loadedNamedT], same(exNamedT));
      expect(correspondence[loadedNamedU], same(exNamedU));

      final reverse = <Object, Object>{
        for (final entry in correspondence.entries) entry.value: entry.key,
      };
      expect(reverse[exSelf], same(loadedSelf));
      expect(reverse[exMethodU], same(loadedMethodU));
      expect(reverse[exNestedOuter], same(loadedNestedOuter));
      expect(reverse[exNestedInner], same(loadedNestedInner));
      expect(reverse[exShadowOuter], same(loadedShadowOuter));
      expect(reverse[exShadowInner], same(loadedShadowInner));
      expect(reverse[exCallback], same(loadedCallbackToken));
      expect(reverse[exProxyMethod], same(loadedProxyToken));
      expect(reverse[exStream], same(loadedStream));
      expect(reverse[exNamedT], same(loadedNamedT));
      expect(reverse[exNamedU], same(loadedNamedU));

      final beforeLength = input.classes.length;
      input.classes.clear();
      expect(input.classes, isEmpty);
      expect(beforeLength, greaterThan(0));
      final afterMutation = aProjection.modulesByModuleId[moduleId.value]!;
      expect(FlaxCodegenManifestCodec.encodeModule(afterMutation), beforeBytes);
      final mutationCorrespondence = <Object, Object>{};
      _expectModule(afterMutation, expected, mutationCorrespondence);
      _expectIdentityBijection(mutationCorrespondence, expectedTokens);
    });
  });

  group('Manifest 12 direct dependency projection positives', () {
    test('A→B→C flattens packages owners modules and importedPackages', () {
      final chain = _projectionChain();
      final a = chain.aProjection;
      expect(
        [for (final package in a.packageManifests) package.package],
        ['pkg_a', 'pkg_b', 'pkg_c'],
      );
      expect(a.modulesByModuleId.keys.toList()..sort(), [
        chain.aModuleId.value,
        chain.bModuleId.value,
        chain.cModuleId.value,
      ]);
      expect(a.authoritativeWireId(chain.leafSource), chain.leafWire);
      expect(a.authoritativeWireId(chain.nodeSource), chain.nodeWire);
      expect(a.authoritativeWireId(chain.rootSource), chain.rootWire);
      expect(
        [for (final package in a.importedPackages) package.dartPackage],
        ['pkg_b', 'pkg_c'],
      );
      expect(a.importedPackages.map((package) => package.namespace.value), [
        'com.example.b',
        'com.example.c',
      ]);
      final importedB = a.importedPackages.singleWhere(
        (package) => package.dartPackage == 'pkg_b',
      );
      final importedC = a.importedPackages.singleWhere(
        (package) => package.dartPackage == 'pkg_c',
      );
      expect(importedB.source, 'package:pkg_b/manifest.json');
      expect(importedC.source, 'package:pkg_c/manifest.json');
      expect(importedB.owners.single.wireId, chain.nodeWire);
      expect(importedB.owners.single.sourceIdentity, chain.nodeSource);
      expect(importedC.owners.single.wireId, chain.leafWire);
      expect(importedC.owners.single.sourceIdentity, chain.leafSource);
      expect(
        a.authoritativeOwner(chain.rootSource)!.location.source,
        'package:pkg_a/manifest.json',
      );
      expect(
        a.authoritativeOwner(chain.nodeSource)!.location.source,
        'package:pkg_b/manifest.json',
      );
      expect(
        a.authoritativeOwner(chain.leafSource)!.location.source,
        'package:pkg_c/manifest.json',
      );

      final projected = a.modulesByModuleId;
      expect(
        projected[chain.bModuleId.value]!
            .classes
            .single
            .constructors
            .single
            .parameters
            .single
            .type
            .id,
        chain.leafWire.value,
      );
      expect(
        projected[chain.aModuleId.value]!
            .classes
            .single
            .constructors
            .single
            .parameters
            .single
            .type
            .id,
        chain.nodeWire.value,
      );
      final bIdentities = a.packageManifests
          .singleWhere((package) => package.package == 'pkg_b')
          .modules
          .single
          .model
          .identities;
      expect(
        bIdentities.singleWhere((row) => !row.owner).wireId,
        chain.leafWire,
      );
      final aIdentities = a.packageManifests
          .singleWhere((package) => package.package == 'pkg_a')
          .modules
          .single
          .model
          .identities;
      expect(
        aIdentities.singleWhere((row) => !row.owner).wireId,
        chain.nodeWire,
      );

      final metadata = FlaxCodegenPackageMetadataProjection.parseStrict('''
format: 1
capabilities:
  - bindings
bindingNamespace: com.example.local
''');
      final localSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:local_app/app.dart',
        name: 'Local',
        origin: FlaxCodegenOriginState.resolved,
      );
      final resolved = FlaxCodegenOwnership.resolvePackage(
        dartPackage: 'local_app',
        metadata: metadata,
        metadataSource: 'flax_package.yaml',
        modules: [
          FlaxCodegenSiblingModuleInput(
            name: 'app',
            source: 'app.yaml',
            claims: [
              FlaxCodegenOwnerClaim(
                sourceIdentity: localSource,
                location: const FlaxCodegenSourceLocation(
                  source: 'app.yaml',
                  offset: 0,
                  line: 1,
                  column: 1,
                  pointer: '/classes/Local',
                ),
              ),
            ],
            references: [
              FlaxCodegenNominalReference(
                sourceIdentity: chain.leafSource,
                location: const FlaxCodegenSourceLocation(
                  source: 'app.yaml',
                  offset: 0,
                  line: 1,
                  column: 1,
                  pointer: '/classes/Local/Leaf',
                ),
              ),
            ],
          ),
        ],
        importedPackages: a.importedPackages,
      );
      expect(
        resolved.modules.single.references.single.ownerWireId,
        chain.leafWire,
      );
      expect(
        resolved.modules.single.references.single.sourceIdentity,
        chain.leafSource,
      );
      expect(
        resolved.importedOwners.any(
          (owner) =>
              owner.sourceIdentity == chain.leafSource &&
              owner.wireId == chain.leafWire,
        ),
        isTrue,
      );

      expect(() => a.packageManifests.removeLast(), throwsUnsupportedError);
      expect(() => a.importedPackages.removeLast(), throwsUnsupportedError);
      expect(
        () => a.importedPackages.first.owners.add(
          a.importedPackages.first.owners.first,
        ),
        throwsUnsupportedError,
      );
      final modules = a.modulesByModuleId;
      expect(
        () => modules.remove(chain.cModuleId.value),
        throwsUnsupportedError,
      );
      expect(a.modulesByModuleId.containsKey(chain.cModuleId.value), isTrue);
    });

    test('diamond dedupes C and resists mutation across permutations', () {
      final diamond = _projectionDiamond();
      final forward = diamond.aProjection;
      final reversed = FlaxCodegenManifestProjection(
        root: diamond.aManifest,
        directDependencies: {
          'pkg_d': diamond.dProjection,
          'pkg_b': diamond.bProjection,
        },
        source: 'package:pkg_a/manifest.json',
      );
      expect(
        [for (final package in forward.packageManifests) package.package],
        ['pkg_a', 'pkg_b', 'pkg_c', 'pkg_d'],
      );
      expect(
        [for (final package in reversed.packageManifests) package.package],
        [for (final package in forward.packageManifests) package.package],
      );
      expect(
        [for (final package in forward.importedPackages) package.dartPackage],
        ['pkg_b', 'pkg_c', 'pkg_d'],
      );
      expect(
        [for (final package in reversed.importedPackages) package.dartPackage],
        [for (final package in forward.importedPackages) package.dartPackage],
      );
      expect(
        forward.packageManifests
            .where((package) => package.package == 'pkg_c')
            .length,
        1,
      );
      expect(
        forward.packageManifests
            .singleWhere((package) => package.package == 'pkg_c')
            .encode(),
        diamond.cProjection.manifest.encode(),
      );

      final firstMaps = forward.modulesByModuleId;
      final secondMaps = forward.modulesByModuleId;
      expect(identical(firstMaps, secondMaps), isFalse);
      expect(
        () => firstMaps.remove(diamond.cModuleId.value),
        throwsUnsupportedError,
      );
      expect(
        forward.modulesByModuleId.containsKey(diamond.cModuleId.value),
        isTrue,
      );

      final model = forward.modulesByModuleId[diamond.aModuleId.value]!;
      final beforeLength = model.classes.length;
      try {
        model.classes.add(model.classes.first);
      } on UnsupportedError {
        // Snapshot lists may already be frozen.
      }
      expect(
        forward.modulesByModuleId[diamond.aModuleId.value]!.classes,
        hasLength(beforeLength),
      );

      final imported = List<FlaxCodegenImportedPackage>.of(
        forward.importedPackages,
      );
      imported.removeLast();
      expect(forward.importedPackages, hasLength(3));
      expect(
        identical(forward.importedPackages, reversed.importedPackages),
        isFalse,
      );
      expect(
        _importedPackageSnapshots(reversed),
        _importedPackageSnapshots(forward),
      );
      expect(
        _authoritativeOwnerSources(reversed, diamond),
        _authoritativeOwnerSources(forward, diamond),
      );
    });

    test(
      'emitter bytes match direct models versus projection-loaded models',
      () {
        final chain = _projectionChain();
        final directModules = [chain.aModel, chain.bModel, chain.cModel];
        final projected = chain.aProjection.modulesByModuleId;
        final projectedModules = [
          projected[chain.aModuleId.value]!,
          projected[chain.bModuleId.value]!,
          projected[chain.cModuleId.value]!,
        ];
        final directEmitter = FlaxCodegenBindingEmitter(directModules);
        final projectedEmitter = FlaxCodegenBindingEmitter(projectedModules);

        for (final pair in [
          (chain.aModel, chain.aModuleId.value),
          (chain.bModel, chain.bModuleId.value),
          (chain.cModel, chain.cModuleId.value),
        ]) {
          final direct = pair.$1;
          final projectedModel = projected[pair.$2]!;
          expect(
            directEmitter.dart(direct),
            projectedEmitter.dart(projectedModel),
            reason: 'Dart bytes for ${direct.name}',
          );
          expect(
            directEmitter.typescript(direct),
            projectedEmitter.typescript(projectedModel),
            reason: 'TypeScript bytes for ${direct.name}',
          );
        }

        final cProjected = projected[chain.cModuleId.value]!;
        expect(
          cProjected
              .classes
              .single
              .constructors
              .single
              .parameters
              .single
              .type
              .kind,
          'callback',
        );
        final beforeBytes = FlaxCodegenManifestCodec.encodeModule(cProjected);
        final beforeLength = chain.cModel.classes.length;
        try {
          chain.cModel.classes.clear();
        } on UnsupportedError {
          // Some snapshots may already be frozen.
        }
        expect(chain.cModel.classes, isEmpty);
        expect(
          FlaxCodegenManifestCodec.encodeModule(
            chain.aProjection.modulesByModuleId[chain.cModuleId.value]!,
          ),
          beforeBytes,
        );
        expect(beforeLength, greaterThan(0));
      },
    );
  });

  group('Manifest 12 direct dependency projection negatives', () {
    test('missing direct import fails closed', () {
      final b = _packageB(_packageC());
      final a = _packageA(b);
      _expectProjectionFailure(
        root: a.projection.manifest,
        directDependencies: const {},
        source: 'package:pkg_a/manifest.json',
        records: [
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/imports/0',
            message: 'Missing import.',
          ),
        ],
      );
    });

    test('unexpected direct import fails closed', () {
      final c = _packageC();
      final b = _packageB(c);
      final a = _packageA(b);
      final root = FlaxCodegenManifest(
        package: a.projection.manifest.package,
        bindingNamespace: a.projection.manifest.bindingNamespace,
        imports: const [],
        modules: a.projection.manifest.modules,
      );
      _expectProjectionFailure(
        root: root,
        directDependencies: {'pkg_b': b.projection},
        source: 'package:pkg_a/manifest.json',
        records: [
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/imports/pkg_b',
            message: 'Unexpected import.',
          ),
        ],
      );
    });

    test('map key versus dependency root package mismatch fails closed', () {
      final c = _packageC();
      final b = _packageB(c);
      final a = _packageA(b);
      _expectProjectionFailure(
        root: a.projection.manifest,
        directDependencies: {'pkg_b': c.projection},
        source: 'package:pkg_a/manifest.json',
        records: [
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/imports/pkg_b',
            message: 'Import package mismatch.',
          ),
        ],
      );
    });

    test('cycle back to the root fails closed', () {
      final aLeaf = _ownedPackage(
        dartPackage: 'pkg_a',
        namespace: 'com.example.a',
        moduleName: 'app',
        typeName: 'Root',
        library: 'package:pkg_a/app.dart',
        jsPackage: '@example/a',
        source: 'package:pkg_a/manifest.json',
      );
      final b = _ownedPackage(
        dartPackage: 'pkg_b',
        namespace: 'com.example.b',
        moduleName: 'mid',
        typeName: 'Node',
        library: 'package:pkg_b/mid.dart',
        jsPackage: '@example/b',
        source: 'package:pkg_b/manifest.json',
        imports: const ['pkg_a'],
        directDependencies: {'pkg_a': aLeaf.projection},
      );
      final cycleRoot = FlaxCodegenManifest(
        package: 'pkg_a',
        bindingNamespace: aLeaf.projection.manifest.bindingNamespace,
        imports: const ['pkg_b'],
        modules: aLeaf.projection.manifest.modules,
      );
      _expectProjectionFailure(
        root: cycleRoot,
        directDependencies: {'pkg_b': b.projection},
        source: 'package:pkg_a/manifest.json',
        records: [
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/imports',
            message: 'Import cycle.',
          ),
        ],
      );
    });

    test(
      'diamond same encode bytes with different package sources fails closed',
      () {
        final c = _packageC();
        final cAltProjection = FlaxCodegenManifestProjection(
          root: c.projection.manifest,
          directDependencies: const {},
          source: 'package:pkg_c/manifest-alt.json',
        );
        expect(
          c.projection.manifest.encode(),
          cAltProjection.manifest.encode(),
        );
        final b = _packageB(c);
        final d = _packageD(
          _ProjectionPackage(
            projection: cAltProjection,
            model: c.model,
            moduleId: c.moduleId,
            ownerSource: c.ownerSource,
            ownerWire: c.ownerWire,
          ),
        );
        final diamond = _projectionDiamondRoot(b: b, d: d);
        for (final dependencies in [
          {'pkg_b': b.projection, 'pkg_d': d.projection},
          {'pkg_d': d.projection, 'pkg_b': b.projection},
        ]) {
          _expectProjectionFailure(
            root: diamond,
            directDependencies: dependencies,
            source: 'package:pkg_a/manifest.json',
            records: [
              _projectionRecord(
                source: 'package:pkg_c/manifest-alt.json',
                pointer: '',
                message: 'Conflicting package source.',
              ),
              _projectionRecord(
                source: 'package:pkg_c/manifest.json',
                pointer: '',
                message: 'Conflicting package source.',
              ),
            ],
          );
        }
      },
    );

    test('identical pkg_c bytes from three distinct sources fail closed', () {
      final c = _packageC();
      final cAltProjection = FlaxCodegenManifestProjection(
        root: c.projection.manifest,
        directDependencies: const {},
        source: 'package:pkg_c/manifest-alt.json',
      );
      final cThirdProjection = FlaxCodegenManifestProjection(
        root: c.projection.manifest,
        directDependencies: const {},
        source: 'package:pkg_c/manifest-third.json',
      );
      final b = _packageB(c);
      final d = _packageD(
        _ProjectionPackage(
          projection: cAltProjection,
          model: c.model,
          moduleId: c.moduleId,
          ownerSource: c.ownerSource,
          ownerWire: c.ownerWire,
        ),
      );
      final e = _packageE(
        _ProjectionPackage(
          projection: cThirdProjection,
          model: c.model,
          moduleId: c.moduleId,
          ownerSource: c.ownerSource,
          ownerWire: c.ownerWire,
        ),
      );
      final root = _projectionTripleRoot(b: b, d: d, e: e);
      final records = [
        _projectionRecord(
          source: 'package:pkg_c/manifest-alt.json',
          pointer: '',
          message: 'Conflicting package source.',
        ),
        _projectionRecord(
          source: 'package:pkg_c/manifest-third.json',
          pointer: '',
          message: 'Conflicting package source.',
        ),
        _projectionRecord(
          source: 'package:pkg_c/manifest.json',
          pointer: '',
          message: 'Conflicting package source.',
        ),
      ];
      for (final dependencies in [
        {'pkg_b': b.projection, 'pkg_d': d.projection, 'pkg_e': e.projection},
        {'pkg_e': e.projection, 'pkg_d': d.projection, 'pkg_b': b.projection},
      ]) {
        _expectProjectionFailure(
          root: root,
          directDependencies: dependencies,
          source: 'package:pkg_a/manifest.json',
          records: records,
        );
      }
    });

    test(
      'diamond same Dart package with different encode bytes fails closed',
      () {
        final c = _packageC();
        final cAlt = _manifestWithModule(
          c.projection.manifest,
          (model) => FlaxCodegenModuleModel(
            name: model.name,
            library: model.library,
            jsPackage: '@example/c-alt',
            dartOutput: model.dartOutput,
            tsOutput: model.tsOutput,
            classes: model.classes,
            types: model.types,
          ),
        );
        expect(cAlt.encode(), isNot(c.projection.manifest.encode()));
        final cAltProjection = FlaxCodegenManifestProjection(
          root: cAlt,
          directDependencies: const {},
          source: 'package:pkg_c/manifest.json',
        );
        final b = _packageB(c);
        final d = _packageD(
          _ProjectionPackage(
            projection: cAltProjection,
            model: cAlt.modules.single.model.module,
            moduleId: c.moduleId,
            ownerSource: c.ownerSource,
            ownerWire: c.ownerWire,
          ),
        );
        final diamond = _projectionDiamondRoot(b: b, d: d);
        _expectProjectionFailure(
          root: diamond,
          directDependencies: {'pkg_b': b.projection, 'pkg_d': d.projection},
          source: 'package:pkg_a/manifest.json',
          records: [
            _projectionRecord(
              source: 'package:pkg_a/manifest.json',
              pointer: '',
              message: 'Conflicting package projection.',
            ),
          ],
        );
      },
    );

    test('different Dart packages sharing bindingNamespace fails closed', () {
      final left = _ownedPackage(
        dartPackage: 'pkg_b',
        namespace: 'com.example.shared',
        moduleName: 'left',
        typeName: 'Left',
        library: 'package:pkg_b/left.dart',
        jsPackage: '@example/b',
        source: 'package:pkg_b/manifest.json',
      );
      final right = _ownedPackage(
        dartPackage: 'pkg_d',
        namespace: 'com.example.shared',
        moduleName: 'right',
        typeName: 'Right',
        library: 'package:pkg_d/right.dart',
        jsPackage: '@example/d',
        source: 'package:pkg_d/manifest.json',
      );
      final root = _rootImporting(const ['pkg_b', 'pkg_d']);
      _expectProjectionFailure(
        root: root,
        directDependencies: {
          'pkg_b': left.projection,
          'pkg_d': right.projection,
        },
        source: 'package:pkg_a/manifest.json',
        records: [
          _projectionRecord(
            source: 'package:pkg_b/manifest.json',
            pointer: '/bindingNamespace',
            message: 'Duplicate bindingNamespace.',
          ),
          _projectionRecord(
            source: 'package:pkg_d/manifest.json',
            pointer: '/bindingNamespace',
            message: 'Duplicate bindingNamespace.',
          ),
        ],
      );
    });

    test('duplicate moduleId across packages fails closed', () {
      final left = _ownedPackage(
        dartPackage: 'pkg_b',
        namespace: 'com.example.b',
        moduleName: 'mid',
        typeName: 'Node',
        library: 'package:pkg_b/mid.dart',
        jsPackage: '@example/b',
        source: 'package:pkg_b/manifest.json',
      );
      final rightNs = FlaxCodegenBindingNamespace.parse('com.example.d');
      final stolenModuleId = left.moduleId;
      final rightSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_d/side.dart',
        name: 'Branch',
        origin: FlaxCodegenOriginState.resolved,
      );
      final rightWire = FlaxCodegenWireId.type(
        moduleId: FlaxCodegenModuleId(
          namespace: rightNs,
          name: FlaxCodegenModuleName.parse('side'),
        ),
        publicBindingName: 'Branch',
      );
      final rightModel = FlaxCodegenModuleModel(
        name: 'side',
        library: 'package:pkg_d/side.dart',
        jsPackage: '@example/d',
        dartOutput: 'side.dart',
        tsOutput: 'side.ts',
        classes: [
          FlaxCodegenClassModel(
            name: 'Branch',
            id: rightWire.value,
            kind: 'object',
            constructors: [FlaxCodegenConstructorModel('', [])],
            supertypes: const [],
          ),
        ],
        types: const [],
      );
      final rightManifest = FlaxCodegenManifest(
        package: 'pkg_d',
        bindingNamespace: rightNs,
        imports: const [],
        modules: [
          FlaxCodegenManifestModule(
            name: 'side',
            moduleId: stolenModuleId,
            uiProtocol: FlaxCodegenManifest.uiProtocol,
            requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
            model: FlaxCodegenManifestModel(
              module: rightModel,
              identities: [
                FlaxCodegenManifestIdentity(
                  sourceIdentity: rightSource,
                  wireId: rightWire,
                  owner: true,
                ),
              ],
            ),
          ),
        ],
      );
      final rightProjection = FlaxCodegenManifestProjection(
        root: rightManifest,
        directDependencies: const {},
        source: 'package:pkg_d/manifest.json',
      );
      final root = _rootImporting(const ['pkg_b', 'pkg_d']);
      _expectProjectionFailure(
        root: root,
        directDependencies: {
          'pkg_b': left.projection,
          'pkg_d': rightProjection,
        },
        source: 'package:pkg_a/manifest.json',
        records: [
          _projectionRecord(
            source: 'package:pkg_b/manifest.json',
            pointer: '/modules/0',
            message: 'Duplicate moduleId.',
          ),
          _projectionRecord(
            source: 'package:pkg_d/manifest.json',
            pointer: '/modules/0',
            message: 'Duplicate moduleId.',
          ),
        ],
      );
    });

    test(
      'sibling conflicting and duplicate authoritative sourceIdentity fail',
      () {
        final shared = FlaxCodegenSourceIdentity(
          kind: FlaxCodegenDeclarationKind.type,
          originatingUri: 'package:shared/shared.dart',
          name: 'Shared',
          origin: FlaxCodegenOriginState.resolved,
        );
        final sharedModuleId = FlaxCodegenModuleId(
          namespace: FlaxCodegenBindingNamespace.parse('com.example.shared'),
          name: FlaxCodegenModuleName.parse('lib'),
        );
        final wireSame = FlaxCodegenWireId.type(
          moduleId: sharedModuleId,
          publicBindingName: 'Shared',
        );
        final leftConflict = _ownedPackage(
          dartPackage: 'pkg_b',
          namespace: 'com.example.b',
          moduleName: 'mid',
          typeName: 'Shared',
          library: 'package:pkg_b/mid.dart',
          jsPackage: '@example/b',
          source: 'package:pkg_b/manifest.json',
          ownerSource: shared,
        );
        final rightConflict = _ownedPackage(
          dartPackage: 'pkg_d',
          namespace: 'com.example.d',
          moduleName: 'side',
          typeName: 'Shared',
          library: 'package:pkg_d/side.dart',
          jsPackage: '@example/d',
          source: 'package:pkg_d/manifest.json',
          ownerSource: shared,
        );
        final root = _rootImporting(const ['pkg_b', 'pkg_d']);
        _expectProjectionFailure(
          root: root,
          directDependencies: {
            'pkg_b': leftConflict.projection,
            'pkg_d': rightConflict.projection,
          },
          source: 'package:pkg_a/manifest.json',
          records: [
            _projectionRecord(
              source: 'package:pkg_b/manifest.json',
              pointer: '/modules/0/model/identities/0',
              message: 'Conflicting sourceIdentity.',
            ),
            _projectionRecord(
              source: 'package:pkg_d/manifest.json',
              pointer: '/modules/0/model/identities/0',
              message: 'Conflicting sourceIdentity.',
            ),
          ],
        );

        final leftDup = _ownedPackage(
          dartPackage: 'pkg_b',
          namespace: 'com.example.b',
          moduleName: 'mid',
          typeName: 'Node',
          library: 'package:pkg_b/mid.dart',
          jsPackage: '@example/b',
          source: 'package:pkg_b/manifest.json',
          ownerSource: shared,
          ownerWire: wireSame,
          allowForeignWire: true,
        );
        final rightDup = _ownedPackage(
          dartPackage: 'pkg_d',
          namespace: 'com.example.d',
          moduleName: 'side',
          typeName: 'Branch',
          library: 'package:pkg_d/side.dart',
          jsPackage: '@example/d',
          source: 'package:pkg_d/manifest.json',
          ownerSource: shared,
          ownerWire: wireSame,
          allowForeignWire: true,
        );
        _expectProjectionFailure(
          root: root,
          directDependencies: {
            'pkg_b': leftDup.projection,
            'pkg_d': rightDup.projection,
          },
          source: 'package:pkg_a/manifest.json',
          records: [
            _projectionRecord(
              source: 'package:pkg_b/manifest.json',
              pointer: '/modules/0/model/identities/0',
              message: 'Duplicate sourceIdentity.',
            ),
            _projectionRecord(
              source: 'package:pkg_d/manifest.json',
              pointer: '/modules/0/model/identities/0',
              message: 'Duplicate sourceIdentity.',
            ),
          ],
        );
      },
    );

    test('sibling conflicting authoritative wireId fails closed', () {
      final sharedWire = FlaxCodegenWireId.type(
        moduleId: FlaxCodegenModuleId(
          namespace: FlaxCodegenBindingNamespace.parse('com.example.shared'),
          name: FlaxCodegenModuleName.parse('lib'),
        ),
        publicBindingName: 'Shared',
      );
      final leftSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_b/mid.dart',
        name: 'Node',
        origin: FlaxCodegenOriginState.resolved,
      );
      final rightSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_d/side.dart',
        name: 'Branch',
        origin: FlaxCodegenOriginState.resolved,
      );
      final left = _ownedPackage(
        dartPackage: 'pkg_b',
        namespace: 'com.example.b',
        moduleName: 'mid',
        typeName: 'Node',
        library: 'package:pkg_b/mid.dart',
        jsPackage: '@example/b',
        source: 'package:pkg_b/manifest.json',
        ownerSource: leftSource,
        ownerWire: sharedWire,
        allowForeignWire: true,
      );
      final right = _ownedPackage(
        dartPackage: 'pkg_d',
        namespace: 'com.example.d',
        moduleName: 'side',
        typeName: 'Branch',
        library: 'package:pkg_d/side.dart',
        jsPackage: '@example/d',
        source: 'package:pkg_d/manifest.json',
        ownerSource: rightSource,
        ownerWire: sharedWire,
        allowForeignWire: true,
      );
      final root = _rootImporting(const ['pkg_b', 'pkg_d']);
      _expectProjectionFailure(
        root: root,
        directDependencies: {
          'pkg_b': left.projection,
          'pkg_d': right.projection,
        },
        source: 'package:pkg_a/manifest.json',
        records: [
          _projectionRecord(
            source: 'package:pkg_b/manifest.json',
            pointer: '/modules/0/model/identities/0',
            message: 'Conflicting wireId.',
          ),
          _projectionRecord(
            source: 'package:pkg_d/manifest.json',
            pointer: '/modules/0/model/identities/0',
            message: 'Conflicting wireId.',
          ),
        ],
      );
    });

    test('dependent republish along a dependency edge fails closed', () {
      final c = _packageC();
      final b = _packageB(c);
      final a = _packageA(b);
      final aLeafWire = FlaxCodegenWireId.type(
        moduleId: a.moduleId,
        publicBindingName: 'Leaf',
      );
      final republishRoot = _manifestWithIdentities(a.projection.manifest, [
        FlaxCodegenManifestIdentity(
          sourceIdentity: a.ownerSource,
          wireId: a.ownerWire,
          owner: true,
        ),
        FlaxCodegenManifestIdentity(
          sourceIdentity: b.ownerSource,
          wireId: b.ownerWire,
          owner: false,
        ),
        FlaxCodegenManifestIdentity(
          sourceIdentity: c.ownerSource,
          wireId: aLeafWire,
          owner: true,
        ),
      ]);
      _expectProjectionFailure(
        root: republishRoot,
        directDependencies: {'pkg_b': b.projection},
        source: 'package:pkg_a/manifest.json',
        records: [
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/modules/0/model/identities/2',
            message: 'Conflicting sourceIdentity.',
          ),
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/modules/0/model/identities/2',
            message: 'Dependent republish.',
          ),
          _projectionRecord(
            source: 'package:pkg_b/manifest.json',
            pointer: '/modules/0/model/identities/1',
            message: 'Missing owner.',
          ),
          _projectionRecord(
            source: 'package:pkg_c/manifest.json',
            pointer: '/modules/0/model/identities/0',
            message: 'Conflicting sourceIdentity.',
          ),
          _projectionRecord(
            source: 'package:pkg_c/manifest.json',
            pointer: '/modules/0/model/identities/0',
            message: 'Dependent republish.',
          ),
        ],
      );

      final duplicateRoot = _manifestWithIdentities(a.projection.manifest, [
        FlaxCodegenManifestIdentity(
          sourceIdentity: a.ownerSource,
          wireId: a.ownerWire,
          owner: true,
        ),
        FlaxCodegenManifestIdentity(
          sourceIdentity: b.ownerSource,
          wireId: b.ownerWire,
          owner: false,
        ),
        FlaxCodegenManifestIdentity(
          sourceIdentity: c.ownerSource,
          wireId: c.ownerWire,
          owner: true,
        ),
      ]);
      _expectProjectionFailure(
        root: duplicateRoot,
        directDependencies: {'pkg_b': b.projection},
        source: 'package:pkg_a/manifest.json',
        records: [
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/modules/0/model/identities/2',
            message: 'Duplicate sourceIdentity.',
          ),
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/modules/0/model/identities/2',
            message: 'Dependent republish.',
          ),
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/modules/0/model/identities/2',
            message: 'Dependent shadow.',
          ),
          _projectionRecord(
            source: 'package:pkg_b/manifest.json',
            pointer: '/modules/0/model/identities/1',
            message: 'Missing owner.',
          ),
          _projectionRecord(
            source: 'package:pkg_c/manifest.json',
            pointer: '/modules/0/model/identities/0',
            message: 'Duplicate sourceIdentity.',
          ),
          _projectionRecord(
            source: 'package:pkg_c/manifest.json',
            pointer: '/modules/0/model/identities/0',
            message: 'Dependent republish.',
          ),
          _projectionRecord(
            source: 'package:pkg_c/manifest.json',
            pointer: '/modules/0/model/identities/0',
            message: 'Dependent shadow.',
          ),
        ],
      );
    });

    test('dependent shadow along a dependency edge fails closed', () {
      final c = _packageC();
      final b = _packageB(c);
      final a = _packageA(b);
      final altSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_a/alt.dart',
        name: 'AltLeaf',
        origin: FlaxCodegenOriginState.resolved,
      );
      final shadowRoot = _manifestWithIdentities(a.projection.manifest, [
        FlaxCodegenManifestIdentity(
          sourceIdentity: altSource,
          wireId: c.ownerWire,
          owner: true,
        ),
        FlaxCodegenManifestIdentity(
          sourceIdentity: a.ownerSource,
          wireId: a.ownerWire,
          owner: true,
        ),
        FlaxCodegenManifestIdentity(
          sourceIdentity: b.ownerSource,
          wireId: b.ownerWire,
          owner: false,
        ),
      ]);
      _expectProjectionFailure(
        root: shadowRoot,
        directDependencies: {'pkg_b': b.projection},
        source: 'package:pkg_a/manifest.json',
        records: [
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/modules/0/model/identities/0',
            message: 'Conflicting wireId.',
          ),
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/modules/0/model/identities/0',
            message: 'Dependent shadow.',
          ),
          _projectionRecord(
            source: 'package:pkg_c/manifest.json',
            pointer: '/modules/0/model/identities/0',
            message: 'Conflicting wireId.',
          ),
          _projectionRecord(
            source: 'package:pkg_c/manifest.json',
            pointer: '/modules/0/model/identities/0',
            message: 'Dependent shadow.',
          ),
        ],
      );
    });

    test('owner false reference with no authoritative owner fails closed', () {
      final orphanSource = FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:pkg_c/core.dart',
        name: 'Leaf',
        origin: FlaxCodegenOriginState.resolved,
      );
      final orphanWire = FlaxCodegenWireId.type(
        moduleId: FlaxCodegenModuleId(
          namespace: FlaxCodegenBindingNamespace.parse('com.example.c'),
          name: FlaxCodegenModuleName.parse('core'),
        ),
        publicBindingName: 'Leaf',
      );
      final local = _ownedPackage(
        dartPackage: 'pkg_a',
        namespace: 'com.example.a',
        moduleName: 'app',
        typeName: 'Root',
        library: 'package:pkg_a/app.dart',
        jsPackage: '@example/a',
        source: 'package:pkg_a/manifest.json',
      );
      final root = _manifestWithIdentities(local.projection.manifest, [
        FlaxCodegenManifestIdentity(
          sourceIdentity: local.ownerSource,
          wireId: local.ownerWire,
          owner: true,
        ),
        FlaxCodegenManifestIdentity(
          sourceIdentity: orphanSource,
          wireId: orphanWire,
          owner: false,
        ),
      ]);
      _expectProjectionFailure(
        root: root,
        directDependencies: const {},
        source: 'package:pkg_a/manifest.json',
        records: [
          _projectionRecord(
            source: 'package:pkg_a/manifest.json',
            pointer: '/modules/0/model/identities/1',
            message: 'Missing owner.',
          ),
        ],
      );
    });

    test(
      'owner false reference whose source resolves but wire differs fails',
      () {
        final c = _packageC();
        final b = _packageB(c);
        final a = _packageA(b);
        final wrongWire = FlaxCodegenWireId.type(
          moduleId: a.moduleId,
          publicBindingName: 'Leaf',
        );
        final mismatchRoot = _manifestWithIdentities(a.projection.manifest, [
          FlaxCodegenManifestIdentity(
            sourceIdentity: a.ownerSource,
            wireId: a.ownerWire,
            owner: true,
          ),
          FlaxCodegenManifestIdentity(
            sourceIdentity: b.ownerSource,
            wireId: b.ownerWire,
            owner: false,
          ),
          FlaxCodegenManifestIdentity(
            sourceIdentity: c.ownerSource,
            wireId: wrongWire,
            owner: false,
          ),
        ]);
        _expectProjectionFailure(
          root: mismatchRoot,
          directDependencies: {'pkg_b': b.projection},
          source: 'package:pkg_a/manifest.json',
          records: [
            _projectionRecord(
              source: 'package:pkg_a/manifest.json',
              pointer: '/modules/0/model/identities/2',
              message: 'Owner mismatch.',
            ),
          ],
        );
      },
    );
  });
}

const _typeKeys = {
  'kind',
  'id',
  'name',
  'nullable',
  'item',
  'key',
  'parameters',
  'typeParameters',
  'result',
  'typeArguments',
  'dartArguments',
  'primitiveKinds',
  'declaration',
  'tsArguments',
  'slot',
};

const _recordFieldKeys = {'name', 'type', 'positional'};

const _parameterKeys = {
  'name',
  'type',
  'required',
  'positional',
  'defaultCode',
  'omitWhenAbsent',
  'independentWidgetResult',
  'snapshot',
  'encodeKind',
  'scoped',
};

const _genericKeys = {'name', 'bound', 'defaultType', 'slot'};

const _getterKeys = {'name', 'type', 'encodeKind'};

const _constructorKeys = {'name', 'parameters', 'specializations'};
const _constructorSpecializationKeys = {
  'typeArguments',
  'parameterTypes',
  'runtimeDomains',
};

const _methodKeys = {
  'name',
  'parameters',
  'result',
  'instance',
  'typeArguments',
  'startsRoute',
  'typeParameters',
  'mustCallSuper',
  'deferredFactory',
};

const _proxyKeys = {'kind', 'methods', 'superMethods', 'getters', 'setters'};
const _stateMixinKeys = {'name', 'sourceId', 'library', 'typeArguments'};
const _stateInterfaceKeys = {'name', 'sourceId', 'wireId', 'library'};
const _stateVariantKeys = {
  'name',
  'variantId',
  'stateId',
  'stateWireId',
  'mixins',
  'interfaces',
  'getters',
  'setters',
  'methods',
  'superMethods',
  'mustCallSuperMethods',
  'providerModule',
};
const _widgetMemberKeys = {'name', 'kind', 'parameters', 'source', 'imports'};

const _pageAdapterKeys = {'library', 'function'};

const _routeCallKeys = {'context', 'rootNavigator', 'builders'};

const _classKeys = {
  'name',
  'id',
  'kind',
  'jsName',
  'asyncIterableFactory',
  'typeArguments',
  'typeParameters',
  'constructors',
  'getters',
  'setters',
  'staticGetters',
  'methods',
  'widgetInterfaces',
  'supertypes',
  'superTypes',
  'proxy',
  'pageAdapter',
  'disposeMethod',
  'listenerPairs',
};

const _namedTypeKeys = {'name', 'id', 'enumNames', 'typeParameters'};

const _functionKeys = {'id', 'call', 'route'};

const _snapshotKeys = {'name', 'id', 'parent', 'fields'};

const _snapshotFieldKeys = {
  'name',
  'kind',
  'enumNames',
  'snapshot',
  'nullable',
};

const _moduleKeys = {
  'library',
  'jsPackage',
  'typeLibraries',
  'classes',
  'types',
  'functions',
  'snapshots',
  'typedefs',
  'stateVariants',
};

const _envelopeKeys = {
  'formatVersion',
  'package',
  'bindingNamespace',
  'imports',
  'modules',
};

const _moduleEntryKeys = {
  'name',
  'moduleId',
  'uiProtocol',
  'requiredCapabilities',
  'model',
};

const _modelProjectionKeys = {
  'library',
  'jsPackage',
  'typeLibraries',
  'classes',
  'types',
  'functions',
  'snapshots',
  'typedefs',
  'stateVariants',
  'identities',
};

const _sourceIdentityKeys = {'kind', 'originatingUri', 'name'};

const _identityKeys = {'sourceIdentity', 'wireId', 'owner'};

final _malformedType = <String, Object?>{
  'kind': 1,
  '~tilde': true,
  'a/b': false,
  'id': null,
  'name': 2,
  'nullable': true,
  'item': null,
  'key': null,
  'parameters': [
    <String, Object?>{'name': 1, 'extra': true, 'foo/bar': true},
  ],
  'typeParameters': [
    <String, Object?>{'name': true, '~x': 1, 'slot': null},
  ],
  'result': null,
  'typeArguments': true,
  'dartArguments': <Object?>[],
  'primitiveKinds': <Object?>[],
  'declaration': null,
  'tsArguments': <Object?>[],
  'slot': null,
};

final _malformedGetter = <String, Object?>{
  'name': 1,
  'type': <String, Object?>{
    'kind': 1,
    '~tilde': true,
    'a/b': false,
    'slot': null,
  },
  'encodeKind': 2,
  'extra': true,
  'foo/bar': true,
};

final _malformedConstructor = <String, Object?>{
  'name': 1,
  'parameters': [
    <String, Object?>{'name': 1, 'extra': true, 'foo/bar': true},
  ],
  'a/b': false,
  '~tilde': true,
};

final _malformedMethod = <String, Object?>{
  'name': 1,
  'parameters': [
    <String, Object?>{'name': 1, 'extra': true, 'foo/bar': true},
  ],
  'result': <String, Object?>{
    'kind': 1,
    '~tilde': true,
    'a/b': false,
    'slot': null,
  },
  'instance': 1,
  'typeArguments': true,
  'startsRoute': 1,
  'typeParameters': [
    <String, Object?>{'name': true, '~x': 1, 'slot': null},
  ],
  'mustCallSuper': 1,
  'deferredFactory': 1,
  'extra': true,
};

final _malformedProxy = <String, Object?>{
  'kind': 1,
  'methods': [
    <String, Object?>{'name': 1, 'extra': true},
  ],
  'superMethods': <Object?>[1],
  'getters': [
    <String, Object?>{'name': 1, 'foo/bar': true},
  ],
  'setters': [
    <String, Object?>{'encodeKind': 1, '~x': 1},
  ],
  'extra': true,
};

final _malformedPageAdapter = <String, Object?>{
  'library': 1,
  'function': true,
  'extra': true,
  'a/b': false,
};

final _malformedRouteCall = <String, Object?>{
  'context': 1,
  'rootNavigator': true,
  'builders': <Object?>[1, true],
  'extra': true,
  '~tilde': true,
};

final _malformedClass = <String, Object?>{
  'name': 1,
  'id': true,
  'kind': 1,
  'jsName': 1,
  'asyncIterableFactory': 1,
  'typeArguments': true,
  'typeParameters': [
    <String, Object?>{'name': true, '~x': 1, 'slot': null},
  ],
  'constructors': [
    <String, Object?>{'name': 1, 'extra': true, 'foo/bar': true},
  ],
  'getters': [
    <String, Object?>{'name': 1, 'foo/bar': true},
  ],
  'setters': [
    <String, Object?>{'encodeKind': 1, '~x': 1},
  ],
  'staticGetters': [
    <String, Object?>{'name': 1, 'foo/bar': true},
  ],
  'methods': [
    <String, Object?>{'name': 1, 'extra': true},
  ],
  'widgetInterfaces': [
    <String, Object?>{'kind': 1, '~tilde': true, 'a/b': false, 'slot': null},
  ],
  'supertypes': <Object?>[1],
  'superTypes': <Object?>[1],
  'proxy': <String, Object?>{'kind': 1, 'extra': true},
  'pageAdapter': <String, Object?>{
    'library': 1,
    'function': true,
    'extra': true,
  },
  'disposeMethod': 1,
  'listenerPairs': {'z': 'ok', 'a/b': 1},
  'a/b': false,
  '~tilde': true,
};

final _malformedNamedType = <String, Object?>{
  'name': 1,
  'id': true,
  'enumNames': true,
  'typeParameters': [
    <String, Object?>{'name': true, '~x': 1, 'slot': null},
  ],
  'extra': true,
  'a/b': false,
  '~tilde': true,
};

final _malformedFunction = <String, Object?>{
  'id': 1,
  'call': <String, Object?>{'name': 1, 'extra': true},
  'route': <String, Object?>{
    'context': 1,
    'rootNavigator': true,
    'builders': <Object?>[1],
    'extra': true,
    '~tilde': true,
  },
  'extra': true,
  'a/b': false,
  '~tilde': true,
};

final _malformedSnapshot = <String, Object?>{
  'name': 1,
  'id': true,
  'parent': 1,
  'fields': [
    <String, Object?>{'name': 1, 'kind': true, 'extra': true},
  ],
  'extra': true,
  'a/b': false,
  '~tilde': true,
};

final _malformedSnapshotField = <String, Object?>{
  'name': 1,
  'kind': true,
  'enumNames': true,
  'snapshot': 1,
  'nullable': 1,
  'extra': true,
  'a/b': false,
  '~tilde': true,
};

final _malformedModule = <String, Object?>{
  'jsPackage': true,
  'typeLibraries': {'z': 1, 'a': 'ok'},
  'types': 1,
  'functions': <Object?>[],
  'snapshots': true,
  'name': 'widgets',
  'dartOutput': 'a.dart',
  'tsOutput': 'b.ts',
  'extra': true,
  'a/b': false,
  '~tilde': true,
};

final _malformedSourceIdentity = <String, Object?>{
  'kind': 1,
  'name': true,
  'extra': true,
  'a/b': false,
  '~tilde': true,
};

final _malformedIdentity = <String, Object?>{
  'wireId': true,
  'owner': 1,
  'extra': true,
  'a/b': false,
  '~tilde': true,
};

FlaxCodegenTypeRef _decodeType(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeTypeRef(json, diagnostics, '');
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenParameterModel _decodeParameter(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeParameter(
    json,
    diagnostics,
    '',
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenGenericParameter _decodeGeneric(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeGenericParameter(
    json,
    diagnostics,
    '',
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

void _expectMappingError(
  Object? Function(
    Object? value,
    FlaxCodegenManifestDiagnostics diagnostics,
    String pointer,
  )
  decode,
  String pointer,
) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  expect(decode('nope', diagnostics, pointer), isNull);
  expect(decode(<Object?>[], diagnostics, pointer), isNull);
  expect(_records(_throwIfAny(diagnostics)), [
    _record(pointer, 'Expected a mapping.'),
    _record(pointer, 'Expected a mapping.'),
  ]);
}

FlaxCodegenException _throwIfAny(FlaxCodegenManifestDiagnostics diagnostics) {
  try {
    diagnostics.throwIfAny();
    fail('expected FlaxCodegenException');
  } on FlaxCodegenException catch (error) {
    for (final diagnostic in error.diagnostics) {
      expect(diagnostic.code, FlaxCodegenDiagnosticCode.manifest);
      expect(diagnostic.source, 'manifest.json');
      expect(diagnostic.offset, 0);
      expect(diagnostic.line, 1);
      expect(diagnostic.column, 1);
    }
    return error;
  } catch (error) {
    if (error is TestFailure) rethrow;
    fail('leaked ${error.runtimeType}: $error');
  }
}

List<Map<String, String>> _records(FlaxCodegenException error) => [
  for (final diagnostic in error.diagnostics)
    _record(diagnostic.pointer, diagnostic.message),
];

Map<String, String> _record(String pointer, String message) => {
  'code': 'FCG_MANIFEST',
  'pointer': pointer,
  'message': message,
};

void _expectCorrespondingIdentity(
  Object? actual,
  Object? expected,
  Map<Object, Object>? correspondence,
) {
  if (expected == null) {
    expect(actual, isNull);
    return;
  }
  expect(
    actual,
    isNotNull,
    reason: 'non-null expected identity requires non-null actual',
  );
  expect(
    correspondence,
    isNotNull,
    reason: 'non-null expected identity requires correspondence',
  );
  final mapped = correspondence![actual];
  if (mapped == null) {
    correspondence[actual!] = expected;
  } else {
    expect(identical(mapped, expected), isTrue);
  }
}

/// Asserts [actualToExpected] is a bijection onto [expectedTokens] with
/// explicit [same] identity in both directions for every entry.
void _expectIdentityBijection(
  Map<Object, Object> actualToExpected,
  Set<Object> expectedTokens,
) {
  expect(actualToExpected.length, expectedTokens.length);
  final expectedToActual = <Object, Object>{};
  for (final entry in actualToExpected.entries) {
    expect(
      expectedTokens.contains(entry.value),
      isTrue,
      reason: 'actual token mapped outside expected set',
    );
    expect(
      expectedToActual.containsKey(entry.value),
      isFalse,
      reason: 'expected token mapped from multiple actuals',
    );
    expectedToActual[entry.value] = entry.key;
  }
  expect(expectedToActual.length, expectedTokens.length);
  for (final entry in actualToExpected.entries) {
    expect(actualToExpected[entry.key], same(entry.value));
    expect(expectedToActual[entry.value], same(entry.key));
  }
  for (final token in expectedTokens) {
    final actual = expectedToActual[token];
    expect(
      actual,
      isNotNull,
      reason: 'expected token missing from reverse map',
    );
    expect(actualToExpected[actual!], same(token));
    expect(expectedToActual[token], same(actual));
  }
}

void _expectType(
  FlaxCodegenTypeRef actual,
  FlaxCodegenTypeRef expected, [
  Map<Object, Object>? correspondence,
]) {
  expect(actual.kind, expected.kind);
  expect(actual.id, expected.id);
  expect(actual.name, expected.name);
  expect(actual.nullable, expected.nullable);
  _expectCorrespondingIdentity(
    actual.genericIdentity,
    expected.kind == 'parameter' ? expected.genericIdentity : null,
    correspondence,
  );
  _expectOptionalType(actual.item, expected.item, correspondence);
  _expectOptionalType(actual.key, expected.key, correspondence);
  _expectOptionalType(actual.result, expected.result, correspondence);
  _expectOptionalType(actual.declaration, expected.declaration, correspondence);
  expect(actual.recordFields, hasLength(expected.recordFields.length));
  for (var index = 0; index < expected.recordFields.length; index++) {
    final actualField = actual.recordFields[index];
    final expectedField = expected.recordFields[index];
    expect(actualField.name, expectedField.name);
    expect(actualField.positional, expectedField.positional);
    _expectType(actualField.type, expectedField.type, correspondence);
  }
  expect(actual.parameters, hasLength(expected.parameters.length));
  for (var index = 0; index < expected.parameters.length; index++) {
    _expectParameter(
      actual.parameters[index],
      expected.parameters[index],
      correspondence,
    );
  }
  expect(actual.typeParameters, hasLength(expected.typeParameters.length));
  for (var index = 0; index < expected.typeParameters.length; index++) {
    _expectGeneric(
      actual.typeParameters[index],
      expected.typeParameters[index],
      correspondence,
    );
  }
  expect(actual.typeArguments, expected.typeArguments);
  expect(actual.primitiveKinds, expected.primitiveKinds);
  expect(actual.dartArguments, hasLength(expected.dartArguments.length));
  for (var index = 0; index < expected.dartArguments.length; index++) {
    _expectType(
      actual.dartArguments[index],
      expected.dartArguments[index],
      correspondence,
    );
  }
  expect(actual.tsArguments, hasLength(expected.tsArguments.length));
  for (var index = 0; index < expected.tsArguments.length; index++) {
    _expectType(
      actual.tsArguments[index],
      expected.tsArguments[index],
      correspondence,
    );
  }
}

void _expectParameter(
  FlaxCodegenParameterModel actual,
  FlaxCodegenParameterModel expected, [
  Map<Object, Object>? correspondence,
]) {
  expect(actual.name, expected.name);
  _expectType(actual.type, expected.type, correspondence);
  expect(actual.required, expected.required);
  expect(actual.positional, expected.positional);
  expect(actual.defaultCode, expected.defaultCode);
  expect(actual.omitWhenAbsent, expected.omitWhenAbsent);
  expect(actual.independentWidgetResult, expected.independentWidgetResult);
  expect(actual.snapshot, expected.snapshot);
  expect(actual.encodeKind, expected.encodeKind);
  expect(actual.scoped, expected.scoped);
}

void _expectGeneric(
  FlaxCodegenGenericParameter actual,
  FlaxCodegenGenericParameter expected, [
  Map<Object, Object>? correspondence,
]) {
  expect(actual.name, expected.name);
  _expectCorrespondingIdentity(
    actual.genericIdentity,
    expected.genericIdentity,
    correspondence,
  );
  _expectType(actual.bound, expected.bound, correspondence);
  _expectOptionalType(actual.defaultType, expected.defaultType, correspondence);
}

void _expectOptionalType(
  FlaxCodegenTypeRef? actual,
  FlaxCodegenTypeRef? expected, [
  Map<Object, Object>? correspondence,
]) {
  if (expected == null) {
    expect(actual, isNull);
    return;
  }
  expect(actual, isNotNull);
  _expectType(actual!, expected, correspondence);
}

void _expectTypeJson(Object? json) {
  final object = _expectObject(json);
  final kind = object['kind'];
  expect(
    object.keys.toSet(),
    kind == 'record' ? {..._typeKeys, 'recordFields'} : _typeKeys,
  );
  expect(object.containsKey('genericIdentity'), isFalse);
  expect(object.containsKey('slot'), isTrue);
  if (kind == 'record') {
    _expectJsonList(object['recordFields'], _expectRecordFieldJson);
  } else {
    expect(object.containsKey('recordFields'), isFalse);
  }
  if (object['item'] != null) _expectTypeJson(object['item']);
  if (object['key'] != null) _expectTypeJson(object['key']);
  if (object['result'] != null) _expectTypeJson(object['result']);
  if (object['declaration'] != null) _expectTypeJson(object['declaration']);
  _expectJsonList(object['parameters'], _expectParameterJson);
  _expectJsonList(object['typeParameters'], _expectGenericJson);
  _expectJsonList(object['dartArguments'], _expectTypeJson);
  _expectJsonList(object['tsArguments'], _expectTypeJson);
  expect(object['typeArguments'], isA<List<String>>());
  expect(object['primitiveKinds'], isA<List<String>>());
}

void _expectRecordFieldJson(Object? json) {
  final object = _expectObject(json);
  expect(object.keys.toSet(), _recordFieldKeys);
  expect(object['name'], isA<String>());
  expect(object['positional'], isA<bool>());
  _expectTypeJson(object['type']);
}

void _expectParameterJson(Object? json) {
  final object = _expectObject(json);
  expect(object.keys.toSet(), _parameterKeys);
  expect(object.containsKey('genericIdentity'), isFalse);
  _expectTypeJson(object['type']);
}

void _expectGenericJson(Object? json) {
  final object = _expectObject(json);
  expect(object.keys.toSet(), _genericKeys);
  expect(object.containsKey('genericIdentity'), isFalse);
  expect(object.containsKey('slot'), isTrue);
  _expectTypeJson(object['bound']);
  if (object['defaultType'] != null) _expectTypeJson(object['defaultType']);
}

Map<String, Object?> _expectObject(Object? json) {
  expect(json, isA<Map<String, Object?>>());
  return json! as Map<String, Object?>;
}

void _expectJsonList(Object? json, void Function(Object?) inspect) {
  expect(json, isA<List<Object?>>());
  for (final item in json as List<Object?>) {
    inspect(item);
  }
}

FlaxCodegenGetterModel _decodeGetter(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeGetter(json, diagnostics, '');
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenConstructorModel _decodeConstructor(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeConstructor(
    json,
    diagnostics,
    '',
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenMethodModel _decodeMethod(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeMethod(json, diagnostics, '');
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenProxyModel _decodeProxy(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeProxy(json, diagnostics, '');
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenPageAdapterModel _decodePageAdapter(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodePageAdapter(
    json,
    diagnostics,
    '',
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenRouteCallModel _decodeRouteCall(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeRouteCall(
    json,
    diagnostics,
    '',
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

void _expectDecodeError(
  Object? Function(
    Object? value,
    FlaxCodegenManifestDiagnostics diagnostics,
    String pointer,
  )
  decode,
  Object? json,
  List<Map<String, String>> records,
) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  expect(decode(json, diagnostics, ''), isNull);
  expect(_records(_throwIfAny(diagnostics)), records);
}

void _expectExactKeys(Map<String, Object?> object, Set<String> keys) {
  expect(object.keys.toSet(), keys);
  expect(object.keys.toList(), keys.toList());
}

void _expectGetter(
  FlaxCodegenGetterModel actual,
  FlaxCodegenGetterModel expected, [
  Map<Object, Object>? correspondence,
]) {
  expect(actual.name, expected.name);
  _expectType(actual.type, expected.type, correspondence);
  expect(actual.encodeKind, expected.encodeKind);
}

void _expectConstructor(
  FlaxCodegenConstructorModel actual,
  FlaxCodegenConstructorModel expected, [
  Map<Object, Object>? correspondence,
]) {
  expect(actual.name, expected.name);
  expect(actual.parameters, hasLength(expected.parameters.length));
  for (var index = 0; index < expected.parameters.length; index++) {
    _expectParameter(
      actual.parameters[index],
      expected.parameters[index],
      correspondence,
    );
  }
}

void _expectMethod(
  FlaxCodegenMethodModel actual,
  FlaxCodegenMethodModel expected, [
  Map<Object, Object>? correspondence,
]) {
  expect(actual.name, expected.name);
  expect(actual.parameters, hasLength(expected.parameters.length));
  for (var index = 0; index < expected.parameters.length; index++) {
    _expectParameter(
      actual.parameters[index],
      expected.parameters[index],
      correspondence,
    );
  }
  _expectType(actual.result, expected.result, correspondence);
  expect(actual.instance, expected.instance);
  expect(actual.typeArguments, expected.typeArguments);
  expect(actual.startsRoute, expected.startsRoute);
  expect(actual.typeParameters, hasLength(expected.typeParameters.length));
  for (var index = 0; index < expected.typeParameters.length; index++) {
    _expectGeneric(
      actual.typeParameters[index],
      expected.typeParameters[index],
      correspondence,
    );
  }
  expect(actual.mustCallSuper, expected.mustCallSuper);
  expect(actual.deferredFactory, expected.deferredFactory);
}

void _expectProxy(
  FlaxCodegenProxyModel actual,
  FlaxCodegenProxyModel expected, [
  Map<Object, Object>? correspondence,
]) {
  expect(actual.kind, expected.kind);
  expect(actual.methods, hasLength(expected.methods.length));
  for (var index = 0; index < expected.methods.length; index++) {
    _expectMethod(
      actual.methods[index],
      expected.methods[index],
      correspondence,
    );
  }
  expect(actual.superMethods, expected.superMethods);
  expect(actual.getters, hasLength(expected.getters.length));
  for (var index = 0; index < expected.getters.length; index++) {
    _expectGetter(
      actual.getters[index],
      expected.getters[index],
      correspondence,
    );
  }
  expect(actual.setters, hasLength(expected.setters.length));
  for (var index = 0; index < expected.setters.length; index++) {
    _expectGetter(
      actual.setters[index],
      expected.setters[index],
      correspondence,
    );
  }
}

void _expectPageAdapter(
  FlaxCodegenPageAdapterModel actual,
  FlaxCodegenPageAdapterModel expected,
) {
  expect(actual.library, expected.library);
  expect(actual.function, expected.function);
}

void _expectRouteCall(
  FlaxCodegenRouteCallModel actual,
  FlaxCodegenRouteCallModel expected,
) {
  expect(actual.context, expected.context);
  expect(actual.rootNavigator, expected.rootNavigator);
  expect(actual.builders, expected.builders);
}

void _expectGetterJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _getterKeys);
  _expectTypeJson(object['type']);
}

void _expectConstructorJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _constructorKeys);
  _expectJsonList(object['parameters'], _expectParameterJson);
  _expectJsonList(object['specializations'], (json) {
    final specialization = _expectObject(json);
    _expectExactKeys(specialization, _constructorSpecializationKeys);
    expect(specialization['typeArguments'], isA<List<String>>());
    _expectJsonList(specialization['parameterTypes'], _expectTypeJson);
    expect(specialization['runtimeDomains'], isA<Map<String, String>>());
  });
}

void _expectMethodJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _methodKeys);
  _expectJsonList(object['parameters'], _expectParameterJson);
  _expectTypeJson(object['result']);
  _expectJsonList(object['typeParameters'], _expectGenericJson);
  expect(object['typeArguments'], isA<List<String>>());
}

void _expectProxyJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _proxyKeys);
  _expectJsonList(object['methods'], _expectMethodJson);
  _expectJsonList(object['getters'], _expectGetterJson);
  _expectJsonList(object['setters'], _expectGetterJson);
  expect(object['superMethods'], isA<List<String>>());
}

void _expectStateMixinJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _stateMixinKeys);
  expect(object['typeArguments'], isA<List<String>>());
}

void _expectStateInterfaceJson(Object? json) {
  _expectExactKeys(_expectObject(json), _stateInterfaceKeys);
}

void _expectStateVariantJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _stateVariantKeys);
  _expectJsonList(object['mixins'], _expectStateMixinJson);
  _expectJsonList(object['interfaces'], _expectStateInterfaceJson);
  _expectJsonList(object['getters'], _expectGetterJson);
  _expectJsonList(object['setters'], _expectGetterJson);
  _expectJsonList(object['methods'], _expectMethodJson);
  expect(object['superMethods'], isA<List<String>>());
  expect(object['mustCallSuperMethods'], isA<List<String>>());
}

void _expectPageAdapterJson(Object? json) {
  _expectExactKeys(_expectObject(json), _pageAdapterKeys);
}

void _expectRouteCallJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _routeCallKeys);
  expect(object['builders'], isA<List<String>>());
}

FlaxCodegenClassModel _decodeClass(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeClass(json, diagnostics, '');
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenNamedTypeModel _decodeNamedType(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeNamedType(
    json,
    diagnostics,
    '',
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenFunctionModel _decodeFunction(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeFunction(
    json,
    diagnostics,
    '',
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenSnapshotModel _decodeSnapshot(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeSnapshot(
    json,
    diagnostics,
    '',
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenSnapshotFieldModel _decodeSnapshotField(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeSnapshotField(
    json,
    diagnostics,
    '',
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

void _expectClass(
  FlaxCodegenClassModel actual,
  FlaxCodegenClassModel expected, [
  Map<Object, Object>? correspondence,
]) {
  expect(actual.name, expected.name);
  expect(actual.id, expected.id);
  expect(actual.kind, expected.kind);
  expect(actual.jsName, expected.jsName);
  expect(actual.asyncIterableFactory, expected.asyncIterableFactory);
  expect(actual.typeArguments, expected.typeArguments);
  expect(actual.typeParameters, hasLength(expected.typeParameters.length));
  for (var index = 0; index < expected.typeParameters.length; index++) {
    _expectGeneric(
      actual.typeParameters[index],
      expected.typeParameters[index],
      correspondence,
    );
  }
  expect(actual.constructors, hasLength(expected.constructors.length));
  for (var index = 0; index < expected.constructors.length; index++) {
    _expectConstructor(
      actual.constructors[index],
      expected.constructors[index],
      correspondence,
    );
  }
  expect(actual.getters, hasLength(expected.getters.length));
  for (var index = 0; index < expected.getters.length; index++) {
    _expectGetter(
      actual.getters[index],
      expected.getters[index],
      correspondence,
    );
  }
  expect(actual.setters, hasLength(expected.setters.length));
  for (var index = 0; index < expected.setters.length; index++) {
    _expectGetter(
      actual.setters[index],
      expected.setters[index],
      correspondence,
    );
  }
  expect(actual.staticGetters, hasLength(expected.staticGetters.length));
  for (var index = 0; index < expected.staticGetters.length; index++) {
    _expectGetter(
      actual.staticGetters[index],
      expected.staticGetters[index],
      correspondence,
    );
  }
  expect(actual.methods, hasLength(expected.methods.length));
  for (var index = 0; index < expected.methods.length; index++) {
    _expectMethod(
      actual.methods[index],
      expected.methods[index],
      correspondence,
    );
  }
  expect(actual.widgetInterfaces, hasLength(expected.widgetInterfaces.length));
  for (var index = 0; index < expected.widgetInterfaces.length; index++) {
    _expectType(
      actual.widgetInterfaces[index],
      expected.widgetInterfaces[index],
      correspondence,
    );
  }
  expect(actual.supertypes, expected.supertypes);
  expect(actual.superTypes, hasLength(expected.superTypes.length));
  for (var index = 0; index < expected.superTypes.length; index++) {
    _expectType(
      actual.superTypes[index],
      expected.superTypes[index],
      correspondence,
    );
  }
  if (expected.proxy == null) {
    expect(actual.proxy, isNull);
  } else {
    expect(actual.proxy, isNotNull);
    _expectProxy(actual.proxy!, expected.proxy!, correspondence);
  }
  if (expected.pageAdapter == null) {
    expect(actual.pageAdapter, isNull);
  } else {
    expect(actual.pageAdapter, isNotNull);
    _expectPageAdapter(actual.pageAdapter!, expected.pageAdapter!);
  }
  expect(actual.disposeMethod, expected.disposeMethod);
  expect(actual.listenerPairs, expected.listenerPairs);
}

void _expectNamedType(
  FlaxCodegenNamedTypeModel actual,
  FlaxCodegenNamedTypeModel expected, [
  Map<Object, Object>? correspondence,
]) {
  expect(actual.name, expected.name);
  expect(actual.id, expected.id);
  expect(actual.enumNames, expected.enumNames);
  expect(actual.typeParameters, hasLength(expected.typeParameters.length));
  for (var index = 0; index < expected.typeParameters.length; index++) {
    _expectGeneric(
      actual.typeParameters[index],
      expected.typeParameters[index],
      correspondence,
    );
  }
}

void _expectFunction(
  FlaxCodegenFunctionModel actual,
  FlaxCodegenFunctionModel expected, [
  Map<Object, Object>? correspondence,
]) {
  expect(actual.id, expected.id);
  _expectMethod(actual.call, expected.call, correspondence);
  if (expected.route == null) {
    expect(actual.route, isNull);
  } else {
    expect(actual.route, isNotNull);
    _expectRouteCall(actual.route!, expected.route!);
  }
}

void _expectSnapshot(
  FlaxCodegenSnapshotModel actual,
  FlaxCodegenSnapshotModel expected,
) {
  expect(actual.name, expected.name);
  expect(actual.id, expected.id);
  expect(actual.parent, expected.parent);
  expect(actual.fields, hasLength(expected.fields.length));
  for (var index = 0; index < expected.fields.length; index++) {
    _expectSnapshotField(actual.fields[index], expected.fields[index]);
  }
}

void _expectSnapshotField(
  FlaxCodegenSnapshotFieldModel actual,
  FlaxCodegenSnapshotFieldModel expected,
) {
  expect(actual.name, expected.name);
  expect(actual.kind, expected.kind);
  expect(actual.enumNames, expected.enumNames);
  expect(actual.snapshot, expected.snapshot);
  expect(actual.nullable, expected.nullable);
}

void _expectClassJson(Object? json) {
  final object = _expectObject(json);
  expect(object.keys.toSet(), containsAll(_classKeys));
  expect(
    object.keys.toSet().difference({..._classKeys, 'widgetMembers'}),
    isEmpty,
  );
  _expectJsonList(object['typeParameters'], _expectGenericJson);
  _expectJsonList(object['constructors'], _expectConstructorJson);
  _expectJsonList(object['getters'], _expectGetterJson);
  _expectJsonList(object['setters'], _expectGetterJson);
  _expectJsonList(object['staticGetters'], _expectGetterJson);
  _expectJsonList(object['methods'], _expectMethodJson);
  _expectJsonList(object['widgetInterfaces'], _expectTypeJson);
  if (object['widgetMembers'] case final members?) {
    _expectJsonList(members, (json) {
      final member = _expectObject(json);
      _expectExactKeys(member, _widgetMemberKeys);
      expect(member['parameters'], isA<List<String>>());
      expect(member['imports'], isA<Map<String, String>>());
    });
  }
  expect(object['typeArguments'], isA<List<String>>());
  expect(object['supertypes'], isA<List<String>>());
  _expectJsonList(object['superTypes'], _expectTypeJson);
  if (object['proxy'] != null) _expectProxyJson(object['proxy']);
  if (object['pageAdapter'] != null) {
    _expectPageAdapterJson(object['pageAdapter']);
  }
  expect(object['listenerPairs'], isA<Map<String, String>>());
  final pairKeys = (object['listenerPairs'] as Map<String, String>).keys
      .toList();
  expect(pairKeys, List.of(pairKeys)..sort());
}

void _expectNamedTypeJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _namedTypeKeys);
  expect(object['enumNames'], isA<List<String>>());
  _expectJsonList(object['typeParameters'], _expectGenericJson);
}

void _expectFunctionJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _functionKeys);
  _expectMethodJson(object['call']);
  if (object['route'] != null) _expectRouteCallJson(object['route']);
}

void _expectSnapshotJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _snapshotKeys);
  _expectJsonList(object['fields'], _expectSnapshotFieldJson);
}

void _expectSnapshotFieldJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _snapshotFieldKeys);
  expect(object['enumNames'], isA<List<String>>());
}

FlaxCodegenModuleModel _decodeModule(Object? json, String name) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeModule(
    json,
    diagnostics,
    '',
    name,
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenModuleModel _typeLibrariesModule(Map<String, String> typeLibraries) {
  return FlaxCodegenModuleModel(
    name: 'widgets',
    library: 'package:acme_widgets/widgets.dart',
    jsPackage: '@acme/widgets',
    dartOutput: 'a.dart',
    tsOutput: 'b.ts',
    classes: const [],
    types: const [],
    typeLibraries: typeLibraries,
  );
}

void _expectModule(
  FlaxCodegenModuleModel actual,
  FlaxCodegenModuleModel expected, [
  Map<Object, Object>? correspondence,
]) {
  expect(actual.name, expected.name);
  expect(actual.library, expected.library);
  expect(actual.jsPackage, expected.jsPackage);
  expect(actual.dartOutput, expected.dartOutput);
  expect(actual.tsOutput, expected.tsOutput);
  expect(actual.typeLibraries, expected.typeLibraries);
  expect(actual.classes, hasLength(expected.classes.length));
  for (var index = 0; index < expected.classes.length; index++) {
    _expectClass(
      actual.classes[index],
      expected.classes[index],
      correspondence,
    );
  }
  expect(actual.types, hasLength(expected.types.length));
  for (var index = 0; index < expected.types.length; index++) {
    _expectNamedType(
      actual.types[index],
      expected.types[index],
      correspondence,
    );
  }
  expect(actual.functions, hasLength(expected.functions.length));
  for (var index = 0; index < expected.functions.length; index++) {
    _expectFunction(
      actual.functions[index],
      expected.functions[index],
      correspondence,
    );
  }
  expect(actual.snapshots, hasLength(expected.snapshots.length));
  for (var index = 0; index < expected.snapshots.length; index++) {
    _expectSnapshot(actual.snapshots[index], expected.snapshots[index]);
  }
}

void _expectModuleJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _moduleKeys);
  expect(object.containsKey('name'), isFalse);
  expect(object.containsKey('dartOutput'), isFalse);
  expect(object.containsKey('tsOutput'), isFalse);
  expect(object['typeLibraries'], isA<Map<String, String>>());
  final libraryKeys = (object['typeLibraries'] as Map<String, String>).keys
      .toList();
  expect(libraryKeys, List.of(libraryKeys)..sort());
  _expectJsonList(object['classes'], _expectClassJson);
  _expectJsonList(object['types'], _expectNamedTypeJson);
  _expectJsonList(object['functions'], _expectFunctionJson);
  _expectJsonList(object['snapshots'], _expectSnapshotJson);
  _expectJsonList(object['stateVariants'], _expectStateVariantJson);
}

FlaxCodegenSourceIdentity _decodeSourceIdentity(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeSourceIdentity(
    json,
    diagnostics,
    '',
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

FlaxCodegenManifestIdentity _decodeIdentity(Object? json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final decoded = FlaxCodegenManifestCodec.decodeIdentity(
    json,
    diagnostics,
    '',
  );
  diagnostics.throwIfAny();
  expect(decoded, isNotNull);
  return decoded!;
}

void _expectSourceIdentityJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _sourceIdentityKeys);
}

void _expectIdentityJson(Object? json) {
  final object = _expectObject(json);
  _expectExactKeys(object, _identityKeys);
  _expectSourceIdentityJson(object['sourceIdentity']);
  expect(object['wireId'], isA<String>());
  expect(object['owner'], isA<bool>());
}

void _expectSourceIdentityFailure(
  Object? json,
  List<Map<String, String>> records,
) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  FlaxCodegenSourceIdentity? result;
  try {
    result = FlaxCodegenManifestCodec.decodeSourceIdentity(
      json,
      diagnostics,
      '',
    );
    diagnostics.throwIfAny();
    fail('expected sourceIdentity failure');
  } on FlaxCodegenException catch (error) {
    expect(result, isNull);
    expect(_records(error), records);
  } catch (error) {
    if (error is TestFailure) rethrow;
    fail('leaked ${error.runtimeType}: $error');
  }
}

void _expectIdentityFailure(Object? json, List<Map<String, String>> records) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  FlaxCodegenManifestIdentity? result;
  try {
    result = FlaxCodegenManifestCodec.decodeIdentity(json, diagnostics, '');
    diagnostics.throwIfAny();
    fail('expected identity failure');
  } on FlaxCodegenException catch (error) {
    expect(result, isNull);
    expect(_records(error), records);
  } catch (error) {
    if (error is TestFailure) rethrow;
    fail('leaked ${error.runtimeType}: $error');
  }
}

final class _EnvelopeFixture {
  const _EnvelopeFixture({
    required this.package,
    required this.models,
    required this.imports,
    required this.widgetSource,
    required this.canonicalBytes,
    required this.expectedWidgetsModule,
    required this.expectedHostModule,
  });

  final FlaxCodegenResolvedPackage package;
  final Map<String, FlaxCodegenModuleModel> models;
  final List<String> imports;
  final FlaxCodegenSourceIdentity widgetSource;
  final String canonicalBytes;
  final FlaxCodegenModuleModel expectedWidgetsModule;
  final FlaxCodegenModuleModel expectedHostModule;
}

_EnvelopeFixture _envelopeFixture() {
  const gaugeUri = 'package:acme_widgets/gauge.dart';
  const axisUri = 'package:acme_widgets/axis.dart';
  const scrollUri = 'package:acme_widgets/scroll.dart';
  const showUri = 'package:acme_widgets/show.dart';
  const widgetUri = 'package:flutter/src/widgets/framework.dart';
  final namespace = FlaxCodegenBindingNamespace.parse('com.acme.widgets');
  final widgetsId = FlaxCodegenModuleId(
    namespace: namespace,
    name: FlaxCodegenModuleName.parse('widgets'),
  );
  final hostId = FlaxCodegenModuleId(
    namespace: namespace,
    name: FlaxCodegenModuleName.parse('host'),
  );
  final gaugeSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: gaugeUri,
    name: 'Gauge',
    origin: FlaxCodegenOriginState.resolved,
  );
  final axisSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: axisUri,
    name: 'Axis',
    origin: FlaxCodegenOriginState.resolved,
  );
  final scrollSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: scrollUri,
    name: 'Scroll',
    origin: FlaxCodegenOriginState.resolved,
  );
  final showSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.function,
    originatingUri: showUri,
    name: 'show',
    origin: FlaxCodegenOriginState.resolved,
  );
  final widgetSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: widgetUri,
    name: 'Widget',
    origin: FlaxCodegenOriginState.resolved,
  );
  final gaugeWire = FlaxCodegenWireId.type(
    moduleId: widgetsId,
    publicBindingName: 'Gauge',
  );
  final axisWire = FlaxCodegenWireId.type(
    moduleId: widgetsId,
    publicBindingName: 'Axis',
  );
  final scrollWire = FlaxCodegenWireId.type(
    moduleId: widgetsId,
    publicBindingName: 'Scroll',
  );
  final showWire = FlaxCodegenWireId.function(
    moduleId: widgetsId,
    publicBindingName: 'show',
  );
  final widgetWire = FlaxCodegenWireId.parse('flax.core/flutter#type:Widget');
  final widgetReference = FlaxCodegenResolvedReference(
    sourceIdentity: widgetSource,
    ownerWireId: widgetWire,
  );
  final widgetsResolved = FlaxCodegenResolvedModule(
    moduleId: widgetsId,
    source: 'widgets.yaml',
    owners: [
      FlaxCodegenResolvedOwner(sourceIdentity: gaugeSource, wireId: gaugeWire),
      FlaxCodegenResolvedOwner(sourceIdentity: axisSource, wireId: axisWire),
      FlaxCodegenResolvedOwner(
        sourceIdentity: scrollSource,
        wireId: scrollWire,
      ),
      FlaxCodegenResolvedOwner(sourceIdentity: showSource, wireId: showWire),
    ],
    references: [
      widgetReference,
      FlaxCodegenResolvedReference(
        sourceIdentity: gaugeSource,
        ownerWireId: gaugeWire,
      ),
    ],
    requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
  );
  final hostResolved = FlaxCodegenResolvedModule(
    moduleId: hostId,
    source: 'host.yaml',
    owners: const [],
    references: const [],
    requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
  );
  final package = FlaxCodegenResolvedPackage(
    dartPackage: 'acme_widgets',
    namespace: namespace,
    modules: [widgetsResolved, hostResolved],
  );
  final widgetsModel = _widgetsModel(
    typeLibraries: {
      'Widget': 'package:flutter/widgets.dart',
      'Element': 'package:flutter/element.dart',
    },
    listenerPairs: {'watch': 'unwatch', 'addListener': 'removeListener'},
  );
  final hostModel = FlaxCodegenModuleModel(
    name: 'host',
    library: 'package:acme_widgets/host.dart',
    jsPackage: '@acme/host',
    dartOutput: 'host.dart',
    tsOutput: 'host.ts',
    classes: const [],
    types: const [],
  );
  final models = <String, FlaxCodegenModuleModel>{
    'widgets': widgetsModel,
    'host': hostModel,
  };
  final imports = ['flax', 'flax_material'];
  final manifest = FlaxCodegenManifest.fromResolved(
    package: package,
    modules: models,
    importPackageNames: imports,
  );
  final expectedWidgets = _widgetsModel(
    typeLibraries: {
      'Element': 'package:flutter/element.dart',
      'Widget': 'package:flutter/widgets.dart',
    },
    listenerPairs: {'addListener': 'removeListener', 'watch': 'unwatch'},
    dartOutput: '',
    tsOutput: '',
  );
  const expectedHost = FlaxCodegenModuleModel(
    name: 'host',
    library: 'package:acme_widgets/host.dart',
    jsPackage: '@acme/host',
    dartOutput: '',
    tsOutput: '',
    classes: [],
    types: [],
  );
  return _EnvelopeFixture(
    package: package,
    models: models,
    imports: imports,
    widgetSource: widgetSource,
    canonicalBytes: manifest.encode(),
    expectedWidgetsModule: expectedWidgets,
    expectedHostModule: expectedHost,
  );
}

FlaxCodegenModuleModel _widgetsModel({
  required Map<String, String> typeLibraries,
  required Map<String, String> listenerPairs,
  String dartOutput = 'widgets.dart',
  String tsOutput = 'widgets.ts',
}) {
  const intType = FlaxCodegenTypeRef('int');
  const voidType = FlaxCodegenTypeRef('void');
  const widgetType = FlaxCodegenTypeRef(
    'object',
    id: 'flax.core/flutter#type:Widget',
    name: 'Widget',
  );
  final method = FlaxCodegenMethodModel('run', [
    FlaxCodegenParameterModel(
      name: 'value',
      type: intType,
      required: true,
      positional: true,
      defaultCode: '0',
    ),
  ], voidType);
  return FlaxCodegenModuleModel(
    name: 'widgets',
    library: 'package:acme_widgets/widgets.dart',
    jsPackage: '@acme/widgets',
    dartOutput: dartOutput,
    tsOutput: tsOutput,
    classes: [
      FlaxCodegenClassModel(
        name: 'Gauge',
        id: 'com.acme.widgets/widgets#type:Gauge',
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('named', [
            FlaxCodegenParameterModel(
              name: 'value',
              type: intType,
              required: true,
              positional: false,
              defaultCode: '0',
            ),
          ]),
        ],
        supertypes: const ['Widget'],
        superTypes: const [widgetType],
        getters: [FlaxCodegenGetterModel('value', intType)],
        setters: [FlaxCodegenGetterModel('value', intType)],
        methods: [method],
        disposeMethod: 'dispose',
        listenerPairs: listenerPairs,
        staticGetters: [FlaxCodegenGetterModel('zero', intType)],
        jsName: 'CanvasView',
      ),
    ],
    types: [
      const FlaxCodegenNamedTypeModel(
        name: 'Axis',
        id: 'com.acme.widgets/widgets#type:Axis',
        enumNames: ['horizontal', 'vertical'],
      ),
    ],
    typeLibraries: typeLibraries,
    functions: [
      FlaxCodegenFunctionModel(
        'com.acme.widgets/widgets#function:show',
        FlaxCodegenMethodModel('show', [
          FlaxCodegenParameterModel(
            name: 'value',
            type: intType,
            required: true,
            positional: true,
            defaultCode: '0',
          ),
        ], voidType),
        route: const FlaxCodegenRouteCallModel('context', 'rootNavigator', [
          'builder',
        ]),
      ),
    ],
    snapshots: const [
      FlaxCodegenSnapshotModel(
        name: 'Scroll',
        id: 'com.acme.widgets/widgets#type:Scroll',
        parent: 'Offset',
        fields: [
          FlaxCodegenSnapshotFieldModel(
            name: 'dx',
            kind: 'double',
            nullable: true,
          ),
        ],
      ),
    ],
  );
}

void _expectEnvelopeShape(
  FlaxCodegenManifest manifest,
  _EnvelopeFixture fixture,
) {
  expect(manifest.package, 'acme_widgets');
  expect(manifest.bindingNamespace.value, 'com.acme.widgets');
  expect(manifest.imports, ['flax', 'flax_material']);
  expect(FlaxCodegenManifest.formatVersion, 12);
  expect(FlaxCodegenManifest.uiProtocol, 21);
  final encoded = manifest.toJson();
  _expectExactKeys(encoded, _envelopeKeys);
  expect(encoded['formatVersion'], 12);
  expect(encoded['modules'], isA<List<Object?>>());
  final modules = encoded['modules']! as List<Object?>;
  expect(modules, hasLength(2));
  for (final moduleJson in modules) {
    final module = _expectObject(moduleJson);
    _expectExactKeys(module, _moduleEntryKeys);
    expect(module['uiProtocol'], 21);
    expect(module['requiredCapabilities'], isEmpty);
    final model = _expectObject(module['model']);
    _expectExactKeys(model, _modelProjectionKeys);
    expect(model.containsKey('dartOutput'), isFalse);
    expect(model.containsKey('tsOutput'), isFalse);
    expect(model.containsKey('name'), isFalse);
    _expectModuleJson({for (final key in _moduleKeys) key: model[key]});
    _expectJsonList(model['identities'], _expectIdentityJson);
  }
  expect(
    [for (final module in manifest.modules) module.moduleId.value],
    ['com.acme.widgets/host', 'com.acme.widgets/widgets'],
  );
  final host = manifest.modules.first;
  expect(host.name, 'host');
  expect(host.requiredCapabilities, isEmpty);
  expect(host.model.identities, isEmpty);
  _expectModule(host.model.module, fixture.expectedHostModule);
  expect(host.model.module.dartOutput, isEmpty);
  expect(host.model.module.tsOutput, isEmpty);

  final widgets = manifest.modules.last;
  expect(widgets.name, 'widgets');
  expect(widgets.requiredCapabilities, isEmpty);
  _expectModule(widgets.model.module, fixture.expectedWidgetsModule);
  expect(widgets.model.module.dartOutput, isEmpty);
  expect(widgets.model.module.tsOutput, isEmpty);
  expect(widgets.model.module.classes.single.id, endsWith('#type:Gauge'));
  expect(widgets.model.module.classes.single.supertypes, ['Widget']);
  expect(
    widgets.model.module.classes.single.superTypes.single.id,
    'flax.core/flutter#type:Widget',
  );
  expect(widgets.model.module.types.single.id, endsWith('#type:Axis'));
  expect(widgets.model.module.functions.single.id, endsWith('#function:show'));
  expect(widgets.model.module.snapshots.single.id, endsWith('#type:Scroll'));
  expect(widgets.model.identities, hasLength(5));
  expect(
    [for (final row in widgets.model.identities) (row.owner, row.wireId.value)],
    [
      (true, 'com.acme.widgets/widgets#function:show'),
      (true, 'com.acme.widgets/widgets#type:Axis'),
      (true, 'com.acme.widgets/widgets#type:Gauge'),
      (true, 'com.acme.widgets/widgets#type:Scroll'),
      (false, 'flax.core/flutter#type:Widget'),
    ],
  );
  expect(widgets.model.identities.where((row) => !row.owner), hasLength(1));
}

Map<String, dynamic> _envelopeBaseline() {
  final fixture = _envelopeFixture();
  return jsonDecode(fixture.canonicalBytes) as Map<String, dynamic>;
}

Map<String, dynamic> _cloneEnvelopeJson(Map<String, dynamic> json) =>
    jsonDecode(jsonEncode(json)) as Map<String, dynamic>;

Map<String, dynamic> _moduleAt(Map<String, dynamic> json, int index) {
  final modules = json['modules'] as List<dynamic>;
  final module = Map<String, dynamic>.from(modules[index] as Map);
  modules[index] = module;
  return module;
}

Map<String, dynamic> _modelAt(Map<String, dynamic> json, int index) {
  final module = _moduleAt(json, index);
  final model = Map<String, dynamic>.from(module['model'] as Map);
  module['model'] = model;
  (json['modules'] as List<dynamic>)[index] = module;
  return model;
}

List<dynamic> _identitiesAt(Map<String, dynamic> json, int index) {
  final model = _modelAt(json, index);
  final identities = List<dynamic>.from(model['identities'] as List);
  model['identities'] = identities;
  return identities;
}

void _expectEnvelopeMutation(
  Map<String, dynamic> baseline,
  void Function(Map<String, dynamic> json) mutate,
  List<Map<String, String>> records,
) {
  final json = _cloneEnvelopeJson(baseline);
  mutate(json);
  _expectEnvelopeFailure(
    '${const JsonEncoder.withIndent('  ').convert(json)}\n',
    records,
  );
}

void _expectEnvelopeFailure(
  String contents,
  List<Map<String, String>> records,
) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  FlaxCodegenManifest? result;
  try {
    result = FlaxCodegenManifest.parse(contents, diagnostics);
  } catch (error) {
    if (error is TestFailure) rethrow;
    fail('leaked ${error.runtimeType}: $error');
  }
  expect(result, isNull);
  expect(_records(_throwIfAny(diagnostics)), records);
}

int _identityIndex(List<dynamic> identities, String wireId) {
  for (var index = 0; index < identities.length; index++) {
    final row = identities[index];
    if (row is Map && row['wireId'] == wireId) return index;
  }
  fail('missing identity $wireId');
}

Map<String, dynamic> _identityMap(List<dynamic> identities, String wireId) =>
    Map<String, dynamic>.from(
      identities[_identityIndex(identities, wireId)] as Map,
    );

void _setIdentityOwner(
  Map<String, dynamic> json,
  int moduleIndex,
  String wireId,
  bool owner,
) {
  final identities = _identitiesAt(json, moduleIndex);
  final index = _identityIndex(identities, wireId);
  final row = Map<String, dynamic>.from(identities[index] as Map);
  row['owner'] = owner;
  identities[index] = row;
}

void _setIdentityWire(
  Map<String, dynamic> json,
  int moduleIndex,
  String wireId,
  String nextWireId,
) {
  final identities = _identitiesAt(json, moduleIndex);
  final index = _identityIndex(identities, wireId);
  final row = Map<String, dynamic>.from(identities[index] as Map);
  row['wireId'] = nextWireId;
  identities[index] = row;
}

void _removeIdentity(
  Map<String, dynamic> json,
  int moduleIndex,
  String wireId,
) {
  final identities = _identitiesAt(json, moduleIndex);
  identities.removeAt(_identityIndex(identities, wireId));
}

void _expectFromResolvedFailure({
  required FlaxCodegenResolvedPackage package,
  required Map<String, FlaxCodegenModuleModel> modules,
  required Iterable<String> importPackageNames,
  required List<Map<String, String>> records,
}) {
  FlaxCodegenManifest? result;
  try {
    result = FlaxCodegenManifest.fromResolved(
      package: package,
      modules: modules,
      importPackageNames: importPackageNames,
    );
    fail('expected fromResolved failure');
  } on FlaxCodegenException catch (error) {
    expect(result, isNull);
    for (final diagnostic in error.diagnostics) {
      expect(diagnostic.code, FlaxCodegenDiagnosticCode.manifest);
      expect(diagnostic.source, 'manifest.json');
      expect(diagnostic.offset, 0);
      expect(diagnostic.line, 1);
      expect(diagnostic.column, 1);
    }
    expect(_records(error), records);
  } catch (error) {
    if (error is TestFailure) rethrow;
    fail('leaked ${error.runtimeType}: $error');
  }
}

void _expectEnvelope(FlaxCodegenManifest actual, FlaxCodegenManifest expected) {
  expect(actual.package, expected.package);
  expect(actual.bindingNamespace, expected.bindingNamespace);
  expect(actual.imports, expected.imports);
  expect(actual.modules, hasLength(expected.modules.length));
  for (var index = 0; index < expected.modules.length; index++) {
    final left = actual.modules[index];
    final right = expected.modules[index];
    expect(left.name, right.name);
    expect(left.moduleId, right.moduleId);
    expect(left.uiProtocol, right.uiProtocol);
    expect(left.requiredCapabilities, right.requiredCapabilities);
    _expectModule(left.model.module, right.model.module);
    expect(left.model.identities, hasLength(right.model.identities.length));
    for (var row = 0; row < right.model.identities.length; row++) {
      expect(
        left.model.identities[row].sourceIdentity,
        right.model.identities[row].sourceIdentity,
      );
      expect(
        left.model.identities[row].wireId,
        right.model.identities[row].wireId,
      );
      expect(
        left.model.identities[row].owner,
        right.model.identities[row].owner,
      );
    }
  }
}

void _expectImmutable(String Function() encode, void Function() mutate) {
  final before = encode();
  try {
    mutate();
  } on UnsupportedError {
    expect(encode(), before);
    return;
  }
  expect(
    encode(),
    before,
    reason: 'mutation must not alter subsequent encoded bytes',
  );
}

const _slotWidgetType = FlaxCodegenTypeRef(
  'object',
  id: 'flax.core/flutter#type:Widget',
  name: 'Widget',
);

Map<String, Object?> _slotCallbackJson(FlaxCodegenTypeRef type) =>
    Map<String, Object?>.from(FlaxCodegenManifestCodec.encodeTypeRef(type));

Map<String, Object?> _cloneJsonMap(Map<String, Object?> json) =>
    jsonDecode(jsonEncode(json)) as Map<String, Object?>;

void _expectSlotDecodeFailure(
  Map<String, Object?> json,
  List<Map<String, String>> records,
) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  expect(FlaxCodegenManifestCodec.decodeTypeRef(json, diagnostics, ''), isNull);
  expect(_records(_throwIfAny(diagnostics)), records);
}

FlaxCodegenParameterModel _slotParam({
  required String name,
  required FlaxCodegenTypeRef type,
  bool required = true,
  bool positional = true,
}) => FlaxCodegenParameterModel(
  name: name,
  type: type,
  required: required,
  positional: positional,
  defaultCode: 'null',
);

FlaxCodegenTypeRef _slotSharingCallback(Object token) => FlaxCodegenTypeRef(
  'callback',
  typeParameters: [
    FlaxCodegenGenericParameter('T', _slotWidgetType, genericIdentity: token),
  ],
  parameters: [
    _slotParam(
      name: 'value',
      type: FlaxCodegenTypeRef('parameter', genericIdentity: token),
    ),
  ],
  result: FlaxCodegenTypeRef('parameter', genericIdentity: token),
);

FlaxCodegenTypeRef _slotEmitterSharingCallback(
  Object token,
) => FlaxCodegenTypeRef(
  'callback',
  typeParameters: [
    FlaxCodegenGenericParameter(
      'T',
      _slotWidgetType,
      defaultType: _slotWidgetType,
      genericIdentity: token,
    ),
  ],
  parameters: [
    _slotParam(
      name: 'value',
      type: FlaxCodegenTypeRef('parameter', name: 'T', genericIdentity: token),
    ),
  ],
  result: FlaxCodegenTypeRef('parameter', name: 'T', genericIdentity: token),
);

FlaxCodegenMethodModel _slotIdMethod(Object token) => FlaxCodegenMethodModel(
  'id',
  [
    FlaxCodegenParameterModel(
      name: 'value',
      type: FlaxCodegenTypeRef('parameter', name: 'T', genericIdentity: token),
      required: true,
      positional: true,
      defaultCode: 'null',
    ),
  ],
  FlaxCodegenTypeRef('parameter', name: 'T', genericIdentity: token),
  typeParameters: [
    FlaxCodegenGenericParameter(
      'T',
      _slotWidgetType,
      defaultType: _slotWidgetType,
      genericIdentity: token,
    ),
  ],
);

FlaxCodegenModuleModel _slotIdMethodModule(
  FlaxCodegenMethodModel method, {
  String dartOutput = 'generic.dart',
  String tsOutput = 'generic.ts',
}) {
  const hostWire = 'com.example.slot/generic#type:Host';
  return FlaxCodegenModuleModel(
    name: 'generic',
    library: 'package:pkg_slot/generic.dart',
    jsPackage: '@example/slot',
    dartOutput: dartOutput,
    tsOutput: tsOutput,
    classes: [
      FlaxCodegenClassModel(
        name: 'Host',
        id: hostWire,
        kind: 'object',
        constructors: const [],
        methods: [method],
        supertypes: const [],
      ),
    ],
    types: const [],
    typeLibraries: {'Widget': 'package:flutter/widgets.dart'},
  );
}

_ProjectionPackage _slotIdMethodProjectionPackage(
  FlaxCodegenMethodModel method,
) {
  final namespace = FlaxCodegenBindingNamespace.parse('com.example.slot');
  final moduleId = FlaxCodegenModuleId(
    namespace: namespace,
    name: FlaxCodegenModuleName.parse('generic'),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:pkg_slot/generic.dart',
    name: 'Host',
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'Host',
  );
  final model = _slotIdMethodModule(method);
  final manifest = FlaxCodegenManifest(
    package: 'pkg_slot',
    bindingNamespace: namespace,
    imports: const [],
    modules: [
      FlaxCodegenManifestModule(
        name: 'generic',
        moduleId: moduleId,
        uiProtocol: FlaxCodegenManifest.uiProtocol,
        requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        model: FlaxCodegenManifestModel(
          module: model,
          identities: [
            FlaxCodegenManifestIdentity(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
              owner: true,
            ),
          ],
        ),
      ),
    ],
  );
  return _ProjectionPackage(
    projection: FlaxCodegenManifestProjection(
      root: manifest,
      directDependencies: const {},
      source: 'package:pkg_slot/manifest.json',
    ),
    model: model,
    moduleId: moduleId,
    ownerSource: ownerSource,
    ownerWire: ownerWire,
  );
}

FlaxCodegenClassModel _slotGenericCaptureClass(
  Object classToken,
  Object methodToken,
) {
  const hostWire = 'com.example.slot/generic#type:Box';
  return FlaxCodegenClassModel(
    name: 'Box',
    id: hostWire,
    kind: 'object',
    typeParameters: [
      FlaxCodegenGenericParameter(
        'T',
        _slotWidgetType,
        defaultType: _slotWidgetType,
        genericIdentity: classToken,
      ),
    ],
    constructors: [
      FlaxCodegenConstructorModel('', [
        FlaxCodegenParameterModel(
          name: 'value',
          type: FlaxCodegenTypeRef(
            'parameter',
            name: 'T',
            genericIdentity: classToken,
          ),
          required: true,
          positional: false,
          defaultCode: 'null',
        ),
      ]),
    ],
    getters: [
      FlaxCodegenGetterModel(
        'current',
        FlaxCodegenTypeRef('parameter', name: 'T', genericIdentity: classToken),
      ),
    ],
    methods: [
      FlaxCodegenMethodModel(
        'map',
        [
          FlaxCodegenParameterModel(
            name: 'input',
            type: FlaxCodegenTypeRef(
              'parameter',
              name: 'T',
              genericIdentity: classToken,
            ),
            required: true,
            positional: true,
            defaultCode: 'null',
          ),
        ],
        FlaxCodegenTypeRef(
          'parameter',
          name: 'U',
          genericIdentity: methodToken,
        ),
        typeParameters: [
          FlaxCodegenGenericParameter(
            'U',
            FlaxCodegenTypeRef(
              'parameter',
              name: 'T',
              genericIdentity: classToken,
            ),
            defaultType: _slotWidgetType,
            genericIdentity: methodToken,
          ),
        ],
      ),
    ],
    supertypes: const [],
  );
}

FlaxCodegenNamedTypeModel _slotNamedFBoundType(Object tToken, Object uToken) =>
    FlaxCodegenNamedTypeModel(
      name: 'Pair',
      id: 'com.example.slot/generic#type:Pair',
      typeParameters: [
        FlaxCodegenGenericParameter(
          'T',
          _slotWidgetType,
          defaultType: _slotWidgetType,
          genericIdentity: tToken,
        ),
        FlaxCodegenGenericParameter(
          'U',
          FlaxCodegenTypeRef('parameter', name: 'T', genericIdentity: tToken),
          defaultType: _slotWidgetType,
          genericIdentity: uToken,
        ),
      ],
    );

FlaxCodegenTypeRef _slotTwoGenericCallback(Object first, Object second) =>
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
          genericIdentity: second,
        ),
      ],
      result: const FlaxCodegenTypeRef('void'),
    );

FlaxCodegenTypeRef _slotNestedCaptureCallback() {
  final outer = Object();
  final inner = Object();
  return FlaxCodegenTypeRef(
    'callback',
    typeParameters: [
      FlaxCodegenGenericParameter('T', _slotWidgetType, genericIdentity: outer),
    ],
    parameters: [
      _slotParam(
        name: 'nested',
        type: FlaxCodegenTypeRef(
          'callback',
          typeParameters: [
            FlaxCodegenGenericParameter(
              'U',
              FlaxCodegenTypeRef('parameter', genericIdentity: outer),
              genericIdentity: inner,
            ),
          ],
          parameters: [
            _slotParam(
              name: 'captured',
              type: FlaxCodegenTypeRef('parameter', genericIdentity: outer),
            ),
            _slotParam(
              name: 'inner',
              type: FlaxCodegenTypeRef('parameter', genericIdentity: inner),
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      ),
    ],
    result: const FlaxCodegenTypeRef('void'),
  );
}

FlaxCodegenTypeRef _slotInnerShadowCallback() {
  final outer = Object();
  final inner = Object();
  return FlaxCodegenTypeRef(
    'callback',
    typeParameters: [
      FlaxCodegenGenericParameter('T', _slotWidgetType, genericIdentity: outer),
    ],
    parameters: [
      _slotParam(
        name: 'nested',
        type: FlaxCodegenTypeRef(
          'callback',
          typeParameters: [
            FlaxCodegenGenericParameter(
              'T',
              FlaxCodegenTypeRef('parameter', genericIdentity: outer),
              genericIdentity: inner,
            ),
          ],
          parameters: [
            _slotParam(
              name: 'outerRef',
              type: FlaxCodegenTypeRef('parameter', genericIdentity: outer),
            ),
            _slotParam(
              name: 'innerRef',
              type: FlaxCodegenTypeRef('parameter', genericIdentity: inner),
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      ),
    ],
    result: const FlaxCodegenTypeRef('void'),
  );
}

FlaxCodegenTypeRef _slotSelfBoundCallback(Object token) => FlaxCodegenTypeRef(
  'callback',
  typeParameters: [
    FlaxCodegenGenericParameter(
      'T',
      FlaxCodegenTypeRef('parameter', genericIdentity: token),
      genericIdentity: token,
    ),
  ],
  result: FlaxCodegenTypeRef('parameter', genericIdentity: token),
);

FlaxCodegenTypeRef _slotFBoundCallback(Object tToken, Object uToken) =>
    FlaxCodegenTypeRef(
      'callback',
      typeParameters: [
        FlaxCodegenGenericParameter(
          'T',
          _slotWidgetType,
          genericIdentity: tToken,
        ),
        FlaxCodegenGenericParameter(
          'U',
          FlaxCodegenTypeRef('parameter', genericIdentity: tToken),
          genericIdentity: uToken,
        ),
      ],
      result: FlaxCodegenTypeRef('parameter', genericIdentity: uToken),
    );

FlaxCodegenTypeRef _slotSiblingNestedCallback(Object first, Object second) =>
    FlaxCodegenTypeRef(
      'callback',
      parameters: [
        _slotParam(
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
        ),
        _slotParam(
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
        ),
      ],
      result: const FlaxCodegenTypeRef('void'),
    );

FlaxCodegenModuleModel _slotGenericModule(FlaxCodegenTypeRef callback) {
  const hostWire = 'com.example.slot/generic#type:Host';
  return FlaxCodegenModuleModel(
    name: 'generic',
    library: 'package:pkg_slot/generic.dart',
    jsPackage: '@example/slot',
    dartOutput: 'generic.dart',
    tsOutput: 'generic.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Host',
        id: hostWire,
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('', [
            FlaxCodegenParameterModel(
              name: 'builder',
              type: callback,
              required: true,
              positional: false,
              defaultCode: 'null',
            ),
          ]),
        ],
        supertypes: const [],
      ),
    ],
    types: const [],
  );
}

_ProjectionPackage _slotGenericProjectionPackage(FlaxCodegenTypeRef callback) {
  final namespace = FlaxCodegenBindingNamespace.parse('com.example.slot');
  final moduleId = FlaxCodegenModuleId(
    namespace: namespace,
    name: FlaxCodegenModuleName.parse('generic'),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:pkg_slot/generic.dart',
    name: 'Host',
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'Host',
  );
  final model = _slotGenericModule(callback);
  final manifest = FlaxCodegenManifest(
    package: 'pkg_slot',
    bindingNamespace: namespace,
    imports: const [],
    modules: [
      FlaxCodegenManifestModule(
        name: 'generic',
        moduleId: moduleId,
        uiProtocol: FlaxCodegenManifest.uiProtocol,
        requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        model: FlaxCodegenManifestModel(
          module: model,
          identities: [
            FlaxCodegenManifestIdentity(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
              owner: true,
            ),
          ],
        ),
      ),
    ],
  );
  return _ProjectionPackage(
    projection: FlaxCodegenManifestProjection(
      root: manifest,
      directDependencies: const {},
      source: 'package:pkg_slot/manifest.json',
    ),
    model: model,
    moduleId: moduleId,
    ownerSource: ownerSource,
    ownerWire: ownerWire,
  );
}

List<(String, String, String)> _importedPackageSnapshots(
  FlaxCodegenManifestProjection projection,
) => [
  for (final package in projection.importedPackages)
    (package.dartPackage, package.namespace.value, package.source),
];

List<(String, String)> _authoritativeOwnerSources(
  FlaxCodegenManifestProjection projection,
  _ProjectionDiamond diamond,
) {
  final c = _packageC();
  final b = _packageB(c);
  final d = _packageD(c);
  final sources = <FlaxCodegenSourceIdentity>[
    diamond.aManifest.modules.single.model.identities
        .singleWhere((row) => row.owner)
        .sourceIdentity,
    b.ownerSource,
    c.ownerSource,
    d.ownerSource,
  ];
  return [
    for (final source in sources)
      (source.name, projection.authoritativeOwner(source)!.location.source),
  ];
}

final class _ProjectionChain {
  const _ProjectionChain({
    required this.aProjection,
    required this.aModel,
    required this.bModel,
    required this.cModel,
    required this.aModuleId,
    required this.bModuleId,
    required this.cModuleId,
    required this.rootSource,
    required this.nodeSource,
    required this.leafSource,
    required this.rootWire,
    required this.nodeWire,
    required this.leafWire,
  });

  final FlaxCodegenManifestProjection aProjection;
  final FlaxCodegenModuleModel aModel;
  final FlaxCodegenModuleModel bModel;
  final FlaxCodegenModuleModel cModel;
  final FlaxCodegenModuleId aModuleId;
  final FlaxCodegenModuleId bModuleId;
  final FlaxCodegenModuleId cModuleId;
  final FlaxCodegenSourceIdentity rootSource;
  final FlaxCodegenSourceIdentity nodeSource;
  final FlaxCodegenSourceIdentity leafSource;
  final FlaxCodegenWireId rootWire;
  final FlaxCodegenWireId nodeWire;
  final FlaxCodegenWireId leafWire;
}

final class _ProjectionDiamond {
  const _ProjectionDiamond({
    required this.aProjection,
    required this.aManifest,
    required this.bProjection,
    required this.dProjection,
    required this.cProjection,
    required this.aModuleId,
    required this.cModuleId,
  });

  final FlaxCodegenManifestProjection aProjection;
  final FlaxCodegenManifest aManifest;
  final FlaxCodegenManifestProjection bProjection;
  final FlaxCodegenManifestProjection dProjection;
  final FlaxCodegenManifestProjection cProjection;
  final FlaxCodegenModuleId aModuleId;
  final FlaxCodegenModuleId cModuleId;
}

_ProjectionChain _projectionChain() {
  final c = _packageC();
  final b = _packageB(c);
  final a = _packageA(b);
  return _ProjectionChain(
    aProjection: a.projection,
    aModel: a.model,
    bModel: b.model,
    cModel: c.model,
    aModuleId: a.moduleId,
    bModuleId: b.moduleId,
    cModuleId: c.moduleId,
    rootSource: a.ownerSource,
    nodeSource: b.ownerSource,
    leafSource: c.ownerSource,
    rootWire: a.ownerWire,
    nodeWire: b.ownerWire,
    leafWire: c.ownerWire,
  );
}

_ProjectionDiamond _projectionDiamond() {
  final c = _packageC();
  final b = _packageB(c);
  final d = _packageD(c);
  final aNs = FlaxCodegenBindingNamespace.parse('com.example.a');
  final aModuleId = FlaxCodegenModuleId(
    namespace: aNs,
    name: FlaxCodegenModuleName.parse('app'),
  );
  final rootSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:pkg_a/app.dart',
    name: 'Root',
    origin: FlaxCodegenOriginState.resolved,
  );
  final rootWire = FlaxCodegenWireId.type(
    moduleId: aModuleId,
    publicBindingName: 'Root',
  );
  final nodeType = FlaxCodegenTypeRef(
    'object',
    id: b.ownerWire.value,
    name: 'Node',
  );
  final aModel = FlaxCodegenModuleModel(
    name: 'app',
    library: 'package:pkg_a/app.dart',
    jsPackage: '@example/a',
    dartOutput: 'app.dart',
    tsOutput: 'app.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Root',
        id: rootWire.value,
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('', [
            FlaxCodegenParameterModel(
              name: 'node',
              type: nodeType,
              required: true,
              positional: false,
              defaultCode: 'null',
            ),
          ]),
        ],
        supertypes: const [],
      ),
    ],
    types: const [],
    typeLibraries: {
      'Node': 'package:pkg_b/mid.dart',
      'Branch': 'package:pkg_d/side.dart',
    },
  );
  final aManifest = FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: 'pkg_a',
      namespace: aNs,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: aModuleId,
          source: 'app.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: rootSource,
              wireId: rootWire,
            ),
          ],
          references: [
            FlaxCodegenResolvedReference(
              sourceIdentity: b.ownerSource,
              ownerWireId: b.ownerWire,
            ),
          ],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {'app': aModel},
    importPackageNames: const ['pkg_b', 'pkg_d'],
  );
  final aProjection = FlaxCodegenManifestProjection(
    root: aManifest,
    directDependencies: {'pkg_b': b.projection, 'pkg_d': d.projection},
    source: 'package:pkg_a/manifest.json',
  );
  return _ProjectionDiamond(
    aProjection: aProjection,
    aManifest: aManifest,
    bProjection: b.projection,
    dProjection: d.projection,
    cProjection: c.projection,
    aModuleId: aModuleId,
    cModuleId: c.moduleId,
  );
}

final class _ProjectionPackage {
  const _ProjectionPackage({
    required this.projection,
    required this.model,
    required this.moduleId,
    required this.ownerSource,
    required this.ownerWire,
  });

  final FlaxCodegenManifestProjection projection;
  final FlaxCodegenModuleModel model;
  final FlaxCodegenModuleId moduleId;
  final FlaxCodegenSourceIdentity ownerSource;
  final FlaxCodegenWireId ownerWire;
}

_ProjectionPackage _packageC() {
  final namespace = FlaxCodegenBindingNamespace.parse('com.example.c');
  final moduleId = FlaxCodegenModuleId(
    namespace: namespace,
    name: FlaxCodegenModuleName.parse('core'),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:pkg_c/core.dart',
    name: 'Leaf',
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'Leaf',
  );
  final callbackToken = Object();
  final builder = _slotEmitterSharingCallback(callbackToken);
  final model = FlaxCodegenModuleModel(
    name: 'core',
    library: 'package:pkg_c/core.dart',
    jsPackage: '@example/c',
    dartOutput: 'core.dart',
    tsOutput: 'core.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Leaf',
        id: ownerWire.value,
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('', [
            FlaxCodegenParameterModel(
              name: 'builder',
              type: builder,
              required: true,
              positional: false,
              defaultCode: 'null',
            ),
          ]),
        ],
        supertypes: const [],
      ),
    ],
    types: const [],
    typeLibraries: {'Widget': 'package:flutter/widgets.dart'},
  );
  final manifest = FlaxCodegenManifest(
    package: 'pkg_c',
    bindingNamespace: namespace,
    imports: const [],
    modules: [
      FlaxCodegenManifestModule(
        name: 'core',
        moduleId: moduleId,
        uiProtocol: FlaxCodegenManifest.uiProtocol,
        requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        model: FlaxCodegenManifestModel(
          module: model,
          identities: [
            FlaxCodegenManifestIdentity(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
              owner: true,
            ),
          ],
        ),
      ),
    ],
  );
  return _ProjectionPackage(
    projection: FlaxCodegenManifestProjection(
      root: manifest,
      directDependencies: const {},
      source: 'package:pkg_c/manifest.json',
    ),
    model: model,
    moduleId: moduleId,
    ownerSource: ownerSource,
    ownerWire: ownerWire,
  );
}

_ProjectionPackage _packageB(_ProjectionPackage c) {
  final namespace = FlaxCodegenBindingNamespace.parse('com.example.b');
  final moduleId = FlaxCodegenModuleId(
    namespace: namespace,
    name: FlaxCodegenModuleName.parse('mid'),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:pkg_b/mid.dart',
    name: 'Node',
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'Node',
  );
  final leafType = FlaxCodegenTypeRef(
    'object',
    id: c.ownerWire.value,
    name: 'Leaf',
  );
  final model = FlaxCodegenModuleModel(
    name: 'mid',
    library: 'package:pkg_b/mid.dart',
    jsPackage: '@example/b',
    dartOutput: 'mid.dart',
    tsOutput: 'mid.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Node',
        id: ownerWire.value,
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('', [
            FlaxCodegenParameterModel(
              name: 'leaf',
              type: leafType,
              required: true,
              positional: false,
              defaultCode: 'null',
            ),
          ]),
        ],
        supertypes: const [],
      ),
    ],
    types: const [],
    typeLibraries: {'Leaf': 'package:pkg_c/core.dart'},
  );
  final manifest = FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: 'pkg_b',
      namespace: namespace,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: 'mid.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
          ],
          references: [
            FlaxCodegenResolvedReference(
              sourceIdentity: c.ownerSource,
              ownerWireId: c.ownerWire,
            ),
          ],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {'mid': model},
    importPackageNames: const ['pkg_c'],
  );
  return _ProjectionPackage(
    projection: FlaxCodegenManifestProjection(
      root: manifest,
      directDependencies: {'pkg_c': c.projection},
      source: 'package:pkg_b/manifest.json',
    ),
    model: model,
    moduleId: moduleId,
    ownerSource: ownerSource,
    ownerWire: ownerWire,
  );
}

_ProjectionPackage _packageD(_ProjectionPackage c) {
  final namespace = FlaxCodegenBindingNamespace.parse('com.example.d');
  final moduleId = FlaxCodegenModuleId(
    namespace: namespace,
    name: FlaxCodegenModuleName.parse('side'),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:pkg_d/side.dart',
    name: 'Branch',
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'Branch',
  );
  final leafType = FlaxCodegenTypeRef(
    'object',
    id: c.ownerWire.value,
    name: 'Leaf',
  );
  final model = FlaxCodegenModuleModel(
    name: 'side',
    library: 'package:pkg_d/side.dart',
    jsPackage: '@example/d',
    dartOutput: 'side.dart',
    tsOutput: 'side.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Branch',
        id: ownerWire.value,
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('', [
            FlaxCodegenParameterModel(
              name: 'leaf',
              type: leafType,
              required: true,
              positional: false,
              defaultCode: 'null',
            ),
          ]),
        ],
        supertypes: const [],
      ),
    ],
    types: const [],
    typeLibraries: {'Leaf': 'package:pkg_c/core.dart'},
  );
  final manifest = FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: 'pkg_d',
      namespace: namespace,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: 'side.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
          ],
          references: [
            FlaxCodegenResolvedReference(
              sourceIdentity: c.ownerSource,
              ownerWireId: c.ownerWire,
            ),
          ],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {'side': model},
    importPackageNames: const ['pkg_c'],
  );
  return _ProjectionPackage(
    projection: FlaxCodegenManifestProjection(
      root: manifest,
      directDependencies: {'pkg_c': c.projection},
      source: 'package:pkg_d/manifest.json',
    ),
    model: model,
    moduleId: moduleId,
    ownerSource: ownerSource,
    ownerWire: ownerWire,
  );
}

_ProjectionPackage _packageA(_ProjectionPackage b) {
  final namespace = FlaxCodegenBindingNamespace.parse('com.example.a');
  final moduleId = FlaxCodegenModuleId(
    namespace: namespace,
    name: FlaxCodegenModuleName.parse('app'),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:pkg_a/app.dart',
    name: 'Root',
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'Root',
  );
  final nodeType = FlaxCodegenTypeRef(
    'object',
    id: b.ownerWire.value,
    name: 'Node',
  );
  final model = FlaxCodegenModuleModel(
    name: 'app',
    library: 'package:pkg_a/app.dart',
    jsPackage: '@example/a',
    dartOutput: 'app.dart',
    tsOutput: 'app.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Root',
        id: ownerWire.value,
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('', [
            FlaxCodegenParameterModel(
              name: 'node',
              type: nodeType,
              required: true,
              positional: false,
              defaultCode: 'null',
            ),
          ]),
        ],
        supertypes: const [],
      ),
    ],
    types: const [],
    typeLibraries: {'Node': 'package:pkg_b/mid.dart'},
  );
  final manifest = FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: 'pkg_a',
      namespace: namespace,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: 'app.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
          ],
          references: [
            FlaxCodegenResolvedReference(
              sourceIdentity: b.ownerSource,
              ownerWireId: b.ownerWire,
            ),
          ],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {'app': model},
    importPackageNames: const ['pkg_b'],
  );
  return _ProjectionPackage(
    projection: FlaxCodegenManifestProjection(
      root: manifest,
      directDependencies: {'pkg_b': b.projection},
      source: 'package:pkg_a/manifest.json',
    ),
    model: model,
    moduleId: moduleId,
    ownerSource: ownerSource,
    ownerWire: ownerWire,
  );
}

void _expectProjectionFailure({
  required FlaxCodegenManifest root,
  required Map<String, FlaxCodegenManifestProjection> directDependencies,
  required String source,
  required List<Map<String, String>> records,
}) {
  FlaxCodegenManifestProjection? projection;
  late final FlaxCodegenException error;
  try {
    projection = FlaxCodegenManifestProjection(
      root: root,
      directDependencies: directDependencies,
      source: source,
    );
  } on FlaxCodegenException catch (caught) {
    error = caught;
    expect(projection, isNull);
    expect([
      for (final diagnostic in error.diagnostics)
        {
          'code': diagnostic.code.value,
          'source': diagnostic.source,
          'pointer': diagnostic.pointer,
          'message': diagnostic.message,
        },
    ], records);
    return;
  }
  fail('expected FlaxCodegenException, got projection');
}

Map<String, String> _projectionRecord({
  required String source,
  required String pointer,
  required String message,
}) => {
  'code': 'FCG_MANIFEST',
  'source': source,
  'pointer': pointer,
  'message': message,
};

FlaxCodegenManifest _manifestWithIdentities(
  FlaxCodegenManifest base,
  List<FlaxCodegenManifestIdentity> identities,
) {
  final module = base.modules.single;
  final sorted = List<FlaxCodegenManifestIdentity>.of(identities)
    ..sort(_compareProjectionIdentities);
  return FlaxCodegenManifest(
    package: base.package,
    bindingNamespace: base.bindingNamespace,
    imports: List<String>.of(base.imports),
    modules: [
      FlaxCodegenManifestModule(
        name: module.name,
        moduleId: module.moduleId,
        uiProtocol: module.uiProtocol,
        requiredCapabilities: List<String>.of(module.requiredCapabilities),
        model: FlaxCodegenManifestModel(
          module: module.model.module,
          identities: sorted,
        ),
      ),
    ],
  );
}

FlaxCodegenManifest _manifestWithModule(
  FlaxCodegenManifest base,
  FlaxCodegenModuleModel Function(FlaxCodegenModuleModel model) update,
) {
  final module = base.modules.single;
  return FlaxCodegenManifest(
    package: base.package,
    bindingNamespace: base.bindingNamespace,
    imports: List<String>.of(base.imports),
    modules: [
      FlaxCodegenManifestModule(
        name: module.name,
        moduleId: module.moduleId,
        uiProtocol: module.uiProtocol,
        requiredCapabilities: List<String>.of(module.requiredCapabilities),
        model: FlaxCodegenManifestModel(
          module: update(module.model.module),
          identities: List<FlaxCodegenManifestIdentity>.of(
            module.model.identities,
          ),
        ),
      ),
    ],
  );
}

int _compareProjectionIdentities(
  FlaxCodegenManifestIdentity left,
  FlaxCodegenManifestIdentity right,
) {
  final kind = left.sourceIdentity.kind.name.compareTo(
    right.sourceIdentity.kind.name,
  );
  if (kind != 0) return kind;
  final uri = left.sourceIdentity.originatingUri.compareTo(
    right.sourceIdentity.originatingUri,
  );
  if (uri != 0) return uri;
  final name = left.sourceIdentity.name.compareTo(right.sourceIdentity.name);
  if (name != 0) return name;
  final wire = left.wireId.value.compareTo(right.wireId.value);
  if (wire != 0) return wire;
  return (left.owner ? 1 : 0).compareTo(right.owner ? 1 : 0);
}

FlaxCodegenManifest _rootImporting(List<String> imports) {
  final namespace = FlaxCodegenBindingNamespace.parse('com.example.a');
  final moduleId = FlaxCodegenModuleId(
    namespace: namespace,
    name: FlaxCodegenModuleName.parse('app'),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:pkg_a/app.dart',
    name: 'Root',
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'Root',
  );
  final model = FlaxCodegenModuleModel(
    name: 'app',
    library: 'package:pkg_a/app.dart',
    jsPackage: '@example/a',
    dartOutput: 'app.dart',
    tsOutput: 'app.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Root',
        id: ownerWire.value,
        kind: 'object',
        constructors: [FlaxCodegenConstructorModel('', [])],
        supertypes: const [],
      ),
    ],
    types: const [],
  );
  return FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: 'pkg_a',
      namespace: namespace,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: 'app.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
          ],
          references: const [],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {'app': model},
    importPackageNames: imports,
  );
}

FlaxCodegenManifest _projectionDiamondRoot({
  required _ProjectionPackage b,
  required _ProjectionPackage d,
}) {
  final aNs = FlaxCodegenBindingNamespace.parse('com.example.a');
  final aModuleId = FlaxCodegenModuleId(
    namespace: aNs,
    name: FlaxCodegenModuleName.parse('app'),
  );
  final rootSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:pkg_a/app.dart',
    name: 'Root',
    origin: FlaxCodegenOriginState.resolved,
  );
  final rootWire = FlaxCodegenWireId.type(
    moduleId: aModuleId,
    publicBindingName: 'Root',
  );
  final aModel = FlaxCodegenModuleModel(
    name: 'app',
    library: 'package:pkg_a/app.dart',
    jsPackage: '@example/a',
    dartOutput: 'app.dart',
    tsOutput: 'app.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Root',
        id: rootWire.value,
        kind: 'object',
        constructors: [FlaxCodegenConstructorModel('', [])],
        supertypes: const [],
      ),
    ],
    types: const [],
  );
  return FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: 'pkg_a',
      namespace: aNs,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: aModuleId,
          source: 'app.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: rootSource,
              wireId: rootWire,
            ),
          ],
          references: [
            FlaxCodegenResolvedReference(
              sourceIdentity: b.ownerSource,
              ownerWireId: b.ownerWire,
            ),
            FlaxCodegenResolvedReference(
              sourceIdentity: d.ownerSource,
              ownerWireId: d.ownerWire,
            ),
          ],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {'app': aModel},
    importPackageNames: const ['pkg_b', 'pkg_d'],
  );
}

FlaxCodegenManifest _projectionTripleRoot({
  required _ProjectionPackage b,
  required _ProjectionPackage d,
  required _ProjectionPackage e,
}) {
  final aNs = FlaxCodegenBindingNamespace.parse('com.example.a');
  final aModuleId = FlaxCodegenModuleId(
    namespace: aNs,
    name: FlaxCodegenModuleName.parse('app'),
  );
  final rootSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:pkg_a/app.dart',
    name: 'Root',
    origin: FlaxCodegenOriginState.resolved,
  );
  final rootWire = FlaxCodegenWireId.type(
    moduleId: aModuleId,
    publicBindingName: 'Root',
  );
  final aModel = FlaxCodegenModuleModel(
    name: 'app',
    library: 'package:pkg_a/app.dart',
    jsPackage: '@example/a',
    dartOutput: 'app.dart',
    tsOutput: 'app.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Root',
        id: rootWire.value,
        kind: 'object',
        constructors: [FlaxCodegenConstructorModel('', [])],
        supertypes: const [],
      ),
    ],
    types: const [],
  );
  return FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: 'pkg_a',
      namespace: aNs,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: aModuleId,
          source: 'app.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: rootSource,
              wireId: rootWire,
            ),
          ],
          references: [
            FlaxCodegenResolvedReference(
              sourceIdentity: b.ownerSource,
              ownerWireId: b.ownerWire,
            ),
            FlaxCodegenResolvedReference(
              sourceIdentity: d.ownerSource,
              ownerWireId: d.ownerWire,
            ),
            FlaxCodegenResolvedReference(
              sourceIdentity: e.ownerSource,
              ownerWireId: e.ownerWire,
            ),
          ],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {'app': aModel},
    importPackageNames: const ['pkg_b', 'pkg_d', 'pkg_e'],
  );
}

_ProjectionPackage _packageE(_ProjectionPackage c) {
  final namespace = FlaxCodegenBindingNamespace.parse('com.example.e');
  final moduleId = FlaxCodegenModuleId(
    namespace: namespace,
    name: FlaxCodegenModuleName.parse('extra'),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:pkg_e/extra.dart',
    name: 'Extra',
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'Extra',
  );
  final leafType = FlaxCodegenTypeRef(
    'object',
    id: c.ownerWire.value,
    name: 'Leaf',
  );
  final model = FlaxCodegenModuleModel(
    name: 'extra',
    library: 'package:pkg_e/extra.dart',
    jsPackage: '@example/e',
    dartOutput: 'extra.dart',
    tsOutput: 'extra.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Extra',
        id: ownerWire.value,
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('', [
            FlaxCodegenParameterModel(
              name: 'leaf',
              type: leafType,
              required: true,
              positional: false,
              defaultCode: 'null',
            ),
          ]),
        ],
        supertypes: const [],
      ),
    ],
    types: const [],
    typeLibraries: {'Leaf': 'package:pkg_c/core.dart'},
  );
  final manifest = FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: 'pkg_e',
      namespace: namespace,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: 'extra.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
          ],
          references: [
            FlaxCodegenResolvedReference(
              sourceIdentity: c.ownerSource,
              ownerWireId: c.ownerWire,
            ),
          ],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {'extra': model},
    importPackageNames: const ['pkg_c'],
  );
  return _ProjectionPackage(
    projection: FlaxCodegenManifestProjection(
      root: manifest,
      directDependencies: {'pkg_c': c.projection},
      source: 'package:pkg_e/manifest.json',
    ),
    model: model,
    moduleId: moduleId,
    ownerSource: ownerSource,
    ownerWire: ownerWire,
  );
}

_ProjectionPackage _ownedPackage({
  required String dartPackage,
  required String namespace,
  required String moduleName,
  required String typeName,
  required String library,
  required String jsPackage,
  required String source,
  List<String> imports = const [],
  Map<String, FlaxCodegenManifestProjection> directDependencies = const {},
  FlaxCodegenSourceIdentity? ownerSource,
  FlaxCodegenWireId? ownerWire,
  bool allowForeignWire = false,
}) {
  final ns = FlaxCodegenBindingNamespace.parse(namespace);
  final moduleId = FlaxCodegenModuleId(
    namespace: ns,
    name: FlaxCodegenModuleName.parse(moduleName),
  );
  final resolvedSource =
      ownerSource ??
      FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: library,
        name: typeName,
        origin: FlaxCodegenOriginState.resolved,
      );
  final resolvedWire =
      ownerWire ??
      FlaxCodegenWireId.type(moduleId: moduleId, publicBindingName: typeName);
  final model = FlaxCodegenModuleModel(
    name: moduleName,
    library: library,
    jsPackage: jsPackage,
    dartOutput: '$moduleName.dart',
    tsOutput: '$moduleName.ts',
    classes: [
      FlaxCodegenClassModel(
        name: typeName,
        id: allowForeignWire
            ? FlaxCodegenWireId.type(
                moduleId: moduleId,
                publicBindingName: typeName,
              ).value
            : resolvedWire.value,
        kind: 'object',
        constructors: [FlaxCodegenConstructorModel('', [])],
        supertypes: const [],
      ),
    ],
    types: const [],
  );
  final FlaxCodegenManifest manifest;
  if (allowForeignWire) {
    manifest = FlaxCodegenManifest(
      package: dartPackage,
      bindingNamespace: ns,
      imports: imports,
      modules: [
        FlaxCodegenManifestModule(
          name: moduleName,
          moduleId: moduleId,
          uiProtocol: FlaxCodegenManifest.uiProtocol,
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
          model: FlaxCodegenManifestModel(
            module: model,
            identities: [
              FlaxCodegenManifestIdentity(
                sourceIdentity: resolvedSource,
                wireId: resolvedWire,
                owner: true,
              ),
            ],
          ),
        ),
      ],
    );
  } else {
    manifest = FlaxCodegenManifest.fromResolved(
      package: FlaxCodegenResolvedPackage(
        dartPackage: dartPackage,
        namespace: ns,
        modules: [
          FlaxCodegenResolvedModule(
            moduleId: moduleId,
            source: '$moduleName.yaml',
            owners: [
              FlaxCodegenResolvedOwner(
                sourceIdentity: resolvedSource,
                wireId: resolvedWire,
              ),
            ],
            references: const [],
            requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
          ),
        ],
      ),
      modules: {moduleName: model},
      importPackageNames: imports,
    );
  }
  return _ProjectionPackage(
    projection: FlaxCodegenManifestProjection(
      root: manifest,
      directDependencies: directDependencies,
      source: source,
    ),
    model: model,
    moduleId: moduleId,
    ownerSource: resolvedSource,
    ownerWire: resolvedWire,
  );
}
