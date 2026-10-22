// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:flutter/widgets.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/foundation.dart' as api1;
import 'package:flutter/scheduler.dart' as api2;
import 'package:flutter/cupertino.dart' as api3;

// ignore: unused_element
const _flaxOmitted = Object();
const componentsBindings = FlaxBindingModule(
  'components',
  [
    _flaxBinding19,
    FlaxStateBinding(
      "flax.core/components#type:State",
      [],
      {},
      matches: _isState,
    ),
  ],
  functions: [],
  constants: [],
  moduleId: "flax.core/components",
  dependencyModules: ["flax.core/flutter", "flax.core/sdk_foundation"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "call-layouts",
    "dart-type-tokens",
    "engine-type-handles",
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "native-navigation-objects",
    "native-widget-proxies",
  ],
  stateVariants: [
    _stateVariant_KeepAliveState,
    _stateVariant_SingleTickerProviderState,
    _stateVariant_TickerProviderState,
    _stateVariant_KeepAliveTickerState,
    _stateVariant_KeepAliveSingleTickerState,
  ],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.core/components#type:StatefulWidget",
      api.StatefulWidget,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.core/components#type:State",
      api.State<api.StatefulWidget>,
      "state",
      typeFactory: _flaxType_State,
      factory: _flaxClass_State,
    ),
  ],
  dartShapes: _flaxDartShapes,
);
const _stateVariant_KeepAliveState = FlaxStateVariantBinding(
  "flax.core/components#stateVariant:KeepAliveState",
  _KeepAliveStateStateHost.new,
  stateType: "flax.core/components#type:State",
  interfaces: [],
  getters: [],
  setters: [],
  methods: {
    "updateKeepAlive": FlaxInstanceMethod.plain(
      [],
      flaxVoidType,
      _KeepAliveState_call_updateKeepAlive,
    ),
  },
);

abstract class _KeepAliveStateStateHostBase extends FlaxComponentStateBase
    with api3.AutomaticKeepAliveClientMixin<api.StatefulWidget> {
  _KeepAliveStateStateHostBase(Object seed) : super(seed);
  @override
  bool get wantKeepAlive =>
      flaxInvokeMember("get:wantKeepAlive", const [], const [], flaxBoolType)
          as bool;
  Object? _flaxCall_updateKeepAlive(Map<String, Object?> values) {
    updateKeepAlive();
    return null;
  }

  @override
  bool get flaxRequiresBuildSuper => true;
  @override
  api.Widget flaxBuildSuper(api.BuildContext context) => super.build(context);
}

class _KeepAliveStateStateHost extends _KeepAliveStateStateHostBase
    with FlaxStateProxy {
  _KeepAliveStateStateHost(Object seed) : super(seed);
}

Object? _KeepAliveState_call_updateKeepAlive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _KeepAliveStateStateHostBase)._flaxCall_updateKeepAlive(
    values,
  );
}

const _stateVariant_SingleTickerProviderState = FlaxStateVariantBinding(
  "flax.core/components#stateVariant:SingleTickerProviderState",
  _SingleTickerProviderStateStateHost.new,
  stateType: "flax.core/components#type:State",
  interfaces: ["flax.core/flutter#type:TickerProvider"],
  getters: [],
  setters: [],
  methods: {},
);

abstract class _SingleTickerProviderStateStateHostBase
    extends FlaxComponentStateBase
    with api3.SingleTickerProviderStateMixin<api.StatefulWidget> {
  _SingleTickerProviderStateStateHostBase(Object seed) : super(seed);
}

class _SingleTickerProviderStateStateHost
    extends _SingleTickerProviderStateStateHostBase
    with FlaxStateProxy {
  _SingleTickerProviderStateStateHost(Object seed) : super(seed);
}

const _stateVariant_TickerProviderState = FlaxStateVariantBinding(
  "flax.core/components#stateVariant:TickerProviderState",
  _TickerProviderStateStateHost.new,
  stateType: "flax.core/components#type:State",
  interfaces: ["flax.core/flutter#type:TickerProvider"],
  getters: [],
  setters: [],
  methods: {},
);

abstract class _TickerProviderStateStateHostBase extends FlaxComponentStateBase
    with api3.TickerProviderStateMixin<api.StatefulWidget> {
  _TickerProviderStateStateHostBase(Object seed) : super(seed);
}

class _TickerProviderStateStateHost extends _TickerProviderStateStateHostBase
    with FlaxStateProxy {
  _TickerProviderStateStateHost(Object seed) : super(seed);
}

const _stateVariant_KeepAliveTickerState = FlaxStateVariantBinding(
  "flax.core/components#stateVariant:KeepAliveTickerState",
  _KeepAliveTickerStateStateHost.new,
  stateType: "flax.core/components#type:State",
  interfaces: ["flax.core/flutter#type:TickerProvider"],
  getters: [],
  setters: [],
  methods: {
    "updateKeepAlive": FlaxInstanceMethod.plain(
      [],
      flaxVoidType,
      _KeepAliveTickerState_call_updateKeepAlive,
    ),
  },
);

abstract class _KeepAliveTickerStateStateHostBase extends FlaxComponentStateBase
    with
        api3.AutomaticKeepAliveClientMixin<api.StatefulWidget>,
        api3.TickerProviderStateMixin<api.StatefulWidget> {
  _KeepAliveTickerStateStateHostBase(Object seed) : super(seed);
  @override
  bool get wantKeepAlive =>
      flaxInvokeMember("get:wantKeepAlive", const [], const [], flaxBoolType)
          as bool;
  Object? _flaxCall_updateKeepAlive(Map<String, Object?> values) {
    updateKeepAlive();
    return null;
  }

  @override
  bool get flaxRequiresBuildSuper => true;
  @override
  api.Widget flaxBuildSuper(api.BuildContext context) => super.build(context);
}

class _KeepAliveTickerStateStateHost extends _KeepAliveTickerStateStateHostBase
    with FlaxStateProxy {
  _KeepAliveTickerStateStateHost(Object seed) : super(seed);
}

Object? _KeepAliveTickerState_call_updateKeepAlive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _KeepAliveTickerStateStateHostBase)
      ._flaxCall_updateKeepAlive(values);
}

const _stateVariant_KeepAliveSingleTickerState = FlaxStateVariantBinding(
  "flax.core/components#stateVariant:KeepAliveSingleTickerState",
  _KeepAliveSingleTickerStateStateHost.new,
  stateType: "flax.core/components#type:State",
  interfaces: ["flax.core/flutter#type:TickerProvider"],
  getters: [],
  setters: [],
  methods: {
    "updateKeepAlive": FlaxInstanceMethod.plain(
      [],
      flaxVoidType,
      _KeepAliveSingleTickerState_call_updateKeepAlive,
    ),
  },
);

abstract class _KeepAliveSingleTickerStateStateHostBase
    extends FlaxComponentStateBase
    with
        api3.AutomaticKeepAliveClientMixin<api.StatefulWidget>,
        api3.SingleTickerProviderStateMixin<api.StatefulWidget> {
  _KeepAliveSingleTickerStateStateHostBase(Object seed) : super(seed);
  @override
  bool get wantKeepAlive =>
      flaxInvokeMember("get:wantKeepAlive", const [], const [], flaxBoolType)
          as bool;
  Object? _flaxCall_updateKeepAlive(Map<String, Object?> values) {
    updateKeepAlive();
    return null;
  }

  @override
  bool get flaxRequiresBuildSuper => true;
  @override
  api.Widget flaxBuildSuper(api.BuildContext context) => super.build(context);
}

class _KeepAliveSingleTickerStateStateHost
    extends _KeepAliveSingleTickerStateStateHostBase
    with FlaxStateProxy {
  _KeepAliveSingleTickerStateStateHost(Object seed) : super(seed);
}

Object? _KeepAliveSingleTickerState_call_updateKeepAlive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _KeepAliveSingleTickerStateStateHostBase)
      ._flaxCall_updateKeepAlive(values);
}

bool _isStatefulWidget(Object value) => value is api.StatefulWidget;
Object? _StatefulWidget_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.StatefulWidget).toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api1.DiagnosticLevel,
  );
}

Object? _StatefulWidget_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.StatefulWidget).toStringDeep(
    minLevel: values["minLevel"] as api1.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _StatefulWidget_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.StatefulWidget).toStringShort();
}

Object? _StatefulWidget_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.StatefulWidget).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api1.DiagnosticsTreeStyle?,
  );
}

Object? _StatefulWidget_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.StatefulWidget).debugDescribeChildren();
}

Object? _StatefulWidget_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.StatefulWidget).debugFillProperties(
    values["properties"] as api1.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _StatefulWidget_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.StatefulWidget).toString(
    minLevel: values["minLevel"] as api1.DiagnosticLevel,
  );
}

Object _createStatefulWidget(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isState(Object value) => value is api.State<api.StatefulWidget>;
Type _flaxType_State<_Owner0 extends api.StatefulWidget>() =>
    api.State<_Owner0>;
Function _flaxClass_State<_Owner0 extends api.StatefulWidget>() =>
    (FlaxDartTypes types, String id) {
      // ignore: unused_element
      bool _isState(Object value) => value is api.State<_Owner0>;
      // ignore: unused_element
      Object _createState(String ctor, Map<String, Object?> values) {
        switch (ctor) {
          default:
            throw ArgumentError("Unknown constructor");
        }
      }

      return FlaxDartClass(
        api.State<_Owner0>,
        FlaxStateBinding(id, [], {}, matches: _isState),
      );
    };
const _flaxDartShapes = <FlaxDartShapeTemplate>[];
Object _collection0Create() => <api1.DiagnosticsNode>[];
bool _collection0Matches(Object value) => value is List<api1.DiagnosticsNode>;
Object _collection1Create() => <api1.DiagnosticsNode>[];
Object _collection1Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.DiagnosticsNode>();
bool _collection1Matches(Object value) =>
    value is Iterable<api1.DiagnosticsNode>;
const _flaxBinding0 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding1 = <FlaxParameter>[
  FlaxParameter("joiner", flaxStringType, required: false, defaultValue: ', '),
  FlaxParameter(
    "minLevel",
    _flaxBinding0,
    required: false,
    defaultValue: api1.DiagnosticLevel.debug,
  ),
];
const _flaxBinding2 = FlaxInstanceMethod.plain(
  _flaxBinding1,
  flaxStringType,
  _StatefulWidget_toStringShallow,
);
const _flaxBinding3 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding0,
    required: false,
    defaultValue: api1.DiagnosticLevel.debug,
  ),
  FlaxParameter(
    "prefixLineOne",
    flaxStringType,
    required: false,
    defaultValue: '',
  ),
  FlaxParameter("prefixOtherLines", flaxNullableStringType, required: false),
  FlaxParameter("wrapWidth", flaxIntType, required: false, defaultValue: 65),
];
const _flaxBinding4 = FlaxInstanceMethod.plain(
  _flaxBinding3,
  flaxStringType,
  _StatefulWidget_toStringDeep,
);
const _flaxBinding5 = <FlaxParameter>[];
const _flaxBinding6 = FlaxInstanceMethod.plain(
  _flaxBinding5,
  flaxStringType,
  _StatefulWidget_toStringShort,
);
const _flaxBinding7 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
  nullable: true,
);
const _flaxBinding8 = <FlaxParameter>[
  FlaxParameter("name", flaxNullableStringType, required: false),
  FlaxParameter("style", _flaxBinding7, required: false),
];
const _flaxBinding9 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding10 = FlaxInstanceMethod.plain(
  _flaxBinding8,
  _flaxBinding9,
  _StatefulWidget_toDiagnosticsNode,
);
const _flaxBinding11 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding9,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding12 = FlaxTypeRef(
  "list",
  item: _flaxBinding9,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding11,
);
const _flaxBinding13 = FlaxInstanceMethod.plain(
  _flaxBinding5,
  _flaxBinding12,
  _StatefulWidget_debugDescribeChildren,
);
const _flaxBinding14 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder",
);
const _flaxBinding15 = <FlaxParameter>[
  FlaxParameter.required("properties", _flaxBinding14),
];
const _flaxBinding16 = FlaxInstanceMethod.plain(
  _flaxBinding15,
  flaxVoidType,
  _StatefulWidget_debugFillProperties,
);
const _flaxBinding17 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding0,
    required: false,
    defaultValue: api1.DiagnosticLevel.info,
  ),
];
const _flaxBinding18 = FlaxInstanceMethod.plain(
  _flaxBinding17,
  flaxStringType,
  _StatefulWidget_toString,
);
const _flaxBinding19 = FlaxObjectBinding(
  "flax.core/components#type:StatefulWidget",
  [],
  {
    "toStringShallow": _flaxBinding2,
    "toStringDeep": _flaxBinding4,
    "toStringShort": _flaxBinding6,
    "toDiagnosticsNode": _flaxBinding10,
    "debugDescribeChildren": _flaxBinding13,
    "debugFillProperties": _flaxBinding16,
    "toString": _flaxBinding18,
  },
  constructors: {},
  create: _createStatefulWidget,
  matches: _isStatefulWidget,
  setters: [],
  supertypes: [
    "flax.core/sdk_widgets#type:Widget",
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
