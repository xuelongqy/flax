// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import
import 'dart:core';

import 'package:flutter/widgets.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/cupertino.dart' as api1;

// ignore: unused_element
const _flaxOmitted = Object();
const componentsBindings = FlaxBindingModule(
  'components',
  [
    FlaxObjectBinding(
      "flax.core/components#type:StatefulWidget",
      [],
      {},
      constructors: {},
      create: _createStatefulWidget,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "package:flutter/src/widgets/framework.dart::Widget",
        "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree",
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isStatefulWidget,
      methods: {},
      staticGetters: {},
    ),
    FlaxStateBinding("flax.core/components#type:State", [], {}),
  ],
  functions: [],
  moduleId: "flax.core/components",
  uiProtocol: 21,
  requiredCapabilities: const <String>[],
  stateVariants: [
    _stateVariant_SingleTickerProviderState,
    _stateVariant_TickerProviderState,
    _stateVariant_KeepAliveTickerState,
  ],
);
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
    with api1.SingleTickerProviderStateMixin<api.StatefulWidget> {
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
    with api1.TickerProviderStateMixin<api.StatefulWidget> {
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
    "updateKeepAlive": FlaxInstanceMethod(
      [],
      FlaxTypeRef("void"),
      _KeepAliveTickerState_call_updateKeepAlive,
    ),
  },
);

abstract class _KeepAliveTickerStateStateHostBase extends FlaxComponentStateBase
    with
        api1.AutomaticKeepAliveClientMixin<api.StatefulWidget>,
        api1.TickerProviderStateMixin<api.StatefulWidget> {
  _KeepAliveTickerStateStateHostBase(Object seed) : super(seed);
  @override
  bool get wantKeepAlive => flaxInvokeMember(
    "get:wantKeepAlive",
    const [],
    const [],
    FlaxTypeRef("bool"),
  ) as bool;
  Object? _flaxCall_updateKeepAlive(Map<String, Object?> values) {
    updateKeepAlive();
    return null;
  }

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

bool _isStatefulWidget(Object value) => value is api.StatefulWidget;
Object _createStatefulWidget(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
