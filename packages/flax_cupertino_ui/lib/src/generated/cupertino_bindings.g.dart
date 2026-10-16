// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast
import 'dart:core';

import 'package:cupertino_ui/cupertino_ui.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart' as api1;

// ignore: unused_element
const _flaxOmitted = Object();
const cupertinoBindings = FlaxBindingModule(
  'cupertino',
  [
    FlaxWidgetBinding(
      "flax.cupertino/cupertino#type:CupertinoApp",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "home",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "theme",
            FlaxTypeRef(
              "object",
              id: "flax.cupertino/cupertino#type:CupertinoThemeData",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "navigatorObservers",
            FlaxTypeRef(
              "list",
              item: FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:NavigatorObserver",
              ),
              collection: FlaxCollectionBinding(
                "list:[object:flax.core/flutter#type:NavigatorObserver]",
                _collection0Create,
                _collection0Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef(
                  "object",
                  id: "flax.core/flutter#type:NavigatorObserver",
                ),
                collection: FlaxCollectionBinding(
                  "iterable:[object:flax.core/flutter#type:NavigatorObserver]",
                  _collection1Create,
                  _collection1Matches,
                  restore: _collection1Restore,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "debugShowCheckedModeBanner",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
        ],
      },
      _CupertinoAppHost.new,
      matches: _isCupertinoApp,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.cupertino/cupertino#type:CupertinoPageScaffold",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "navigationBar",
            FlaxTypeRef(
              "object",
              id: "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "backgroundColor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Color",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "resizeToAvoidBottomInset",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _CupertinoPageScaffoldHost.new,
      matches: _isCupertinoPageScaffold,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.cupertino/cupertino#type:CupertinoButton",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPressed",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback0,
                id: "callback:<>()->void:",
                invoke: _callback0Invoke,
                matches: _callback0Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _CupertinoButtonHost.new,
      matches: _isCupertinoButton,
      methods: {},
    ),
    FlaxObjectBinding(
      "flax.cupertino/cupertino#type:CupertinoThemeData",
      [
        FlaxGetter(
          "primaryColor",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _CupertinoThemeData_primaryColor,
        ),
        FlaxGetter(
          "scaffoldBackgroundColor",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _CupertinoThemeData_scaffoldBackgroundColor,
        ),
      ],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "primaryColor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Color",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "scaffoldBackgroundColor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Color",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createCupertinoThemeData,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData",
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isCupertinoThemeData,
      methods: const {},
    ),
    FlaxObjectBinding(
      "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
      [
        FlaxGetter(
          "preferredSize",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Size"),
          _ObstructingPreferredSizeWidget_preferredSize,
        ),
      ],
      {
        "shouldFullyObstruct": FlaxInstanceMethod(
          [
            FlaxParameter(
              "context",
              FlaxTypeRef("context", id: "flax.core/flutter#type:BuildContext"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("bool"),
          _ObstructingPreferredSizeWidget_shouldFullyObstruct,
          startsRoute: false,
        ),
      },
      constructors: {
        "@implementation": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createObstructingPreferredSizeWidget,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "flax.core/flutter#type:PreferredSizeWidget",
        "package:flutter/src/widgets/framework.dart::Widget",
        "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isObstructingPreferredSizeWidget,
      methods: const {},
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "shouldFullyObstruct",
          0,
          FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "context",
                FlaxTypeRef(
                  "context",
                  id: "flax.core/flutter#type:BuildContext",
                ),
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("bool"),
            _callback1,
            id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->bool:",
            invoke: _callback1Invoke,
            matches: _callback1Matches,
          ),
          hasSuper: false,
        ),
        FlaxProxyMember(
          "build",
          0,
          FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "context",
                FlaxTypeRef(
                  "context",
                  id: "flax.core/flutter#type:BuildContext",
                ),
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("widget"),
            _callback2,
            id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
            invoke: _callback2Invoke,
            matches: _callback2Matches,
          ),
          hasSuper: false,
        ),
        FlaxProxyMember(
          "preferredSize",
          1,
          FlaxCallbackBinding(
            [],
            FlaxTypeRef("object", id: "flax.core/flutter#type:Size"),
            _callback3,
            id: "callback:<>()->object:flax.core/flutter#type:Size",
            invoke: _callback3Invoke,
            matches: _callback3Matches,
          ),
          hasSuper: false,
        ),
      ]),
    ),
    FlaxObjectBinding(
      "flax.cupertino/cupertino#type:CupertinoNavigationBar",
      [
        FlaxGetter(
          "preferredSize",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Size"),
          _CupertinoNavigationBar_preferredSize,
        ),
      ],
      {
        "shouldFullyObstruct": FlaxInstanceMethod(
          [
            FlaxParameter(
              "context",
              FlaxTypeRef("context", id: "flax.core/flutter#type:BuildContext"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("bool"),
          _CupertinoNavigationBar_shouldFullyObstruct,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "leading",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "automaticallyImplyLeading",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "middle",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "trailing",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "border",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Border",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "backgroundColor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Color",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "transitionBetweenRoutes",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
        ],
      },
      setters: [],
      create: _createCupertinoNavigationBar,
      matches: _isCupertinoNavigationBar,
      supertypes: [
        "flax.core/components#type:StatefulWidget",
        "package:flutter/src/widgets/framework.dart::Widget",
        "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree",
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
        "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
        "flax.core/flutter#type:PreferredSizeWidget",
      ],
    ),
  ],
  functions: [],
  moduleId: "flax.cupertino/cupertino",
  dependencyModules: ["flax.core/flutter"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "generic-member-views",
    "instance-checks",
    "native-navigation-objects",
    "native-widget-proxies",
    "widget-interface-proxies",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.cupertino/cupertino#type:CupertinoApp",
      api.CupertinoApp,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.cupertino/cupertino#type:CupertinoPageScaffold",
      api.CupertinoPageScaffold,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.cupertino/cupertino#type:CupertinoButton",
      api.CupertinoButton,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.cupertino/cupertino#type:CupertinoThemeData",
      api.CupertinoThemeData,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
      api.ObstructingPreferredSizeWidget,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.cupertino/cupertino#type:CupertinoNavigationBar",
      api.CupertinoNavigationBar,
      "widget",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
bool _isCupertinoApp(Object value) => value is api.CupertinoApp;

class _CupertinoAppHost extends FlaxWidgetHost {
  _CupertinoAppHost(super.node);
  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createCupertinoApp(node.ctor, values);
}

api1.Widget _createCupertinoApp(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("navigatorObservers")) {
        return api.CupertinoApp(
          key: values["key"] as api1.Key?,
          home: values["home"] as api1.Widget?,
          theme: values["theme"] as api.CupertinoThemeData?,
          debugShowCheckedModeBanner:
              values["debugShowCheckedModeBanner"] as bool,
        );
      }
      return api.CupertinoApp(
        key: values["key"] as api1.Key?,
        home: values["home"] as api1.Widget?,
        theme: values["theme"] as api.CupertinoThemeData?,
        navigatorObservers:
            values["navigatorObservers"] as List<api1.NavigatorObserver>,
        debugShowCheckedModeBanner:
            values["debugShowCheckedModeBanner"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCupertinoPageScaffold(Object value) =>
    value is api.CupertinoPageScaffold;

class _CupertinoPageScaffoldHost extends FlaxWidgetHost {
  _CupertinoPageScaffoldHost(super.node);
  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createCupertinoPageScaffold(node.ctor, values);
}

api1.Widget _createCupertinoPageScaffold(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.CupertinoPageScaffold(
        key: values["key"] as api1.Key?,
        navigationBar:
            values["navigationBar"] as api.ObstructingPreferredSizeWidget?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        resizeToAvoidBottomInset: values["resizeToAvoidBottomInset"] as bool,
        child: values["child"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCupertinoButton(Object value) => value is api.CupertinoButton;

class _CupertinoButtonHost extends FlaxWidgetHost {
  _CupertinoButtonHost(super.node);
  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createCupertinoButton(node.ctor, values);
}

api1.Widget _createCupertinoButton(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.CupertinoButton(
        key: values["key"] as api1.Key?,
        child: values["child"] as api1.Widget,
        onPressed: values["onPressed"] as void Function()?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCupertinoThemeData(Object value) => value is api.CupertinoThemeData;
Object? _CupertinoThemeData_primaryColor(Object value) =>
    (value as api.CupertinoThemeData).primaryColor;
Object? _CupertinoThemeData_scaffoldBackgroundColor(Object value) =>
    (value as api.CupertinoThemeData).scaffoldBackgroundColor;
Object _createCupertinoThemeData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.CupertinoThemeData(
        primaryColor: values["primaryColor"] as api1.Color?,
        scaffoldBackgroundColor:
            values["scaffoldBackgroundColor"] as api1.Color?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isObstructingPreferredSizeWidget(Object value) =>
    value is api.ObstructingPreferredSizeWidget;
Object? _ObstructingPreferredSizeWidget_preferredSize(Object value) =>
    (value as api.ObstructingPreferredSizeWidget).preferredSize;
Object? _ObstructingPreferredSizeWidget_shouldFullyObstruct(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ObstructingPreferredSizeWidget).shouldFullyObstruct(
    values["context"] as api1.BuildContext,
  );
}

Object _createObstructingPreferredSizeWidget(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case '@implementation':
      return _ObstructingPreferredSizeWidgetProxy(
        values['@peer'] as FlaxProxyPeer,
        key: values["key"] as api1.Key?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCupertinoNavigationBar(Object value) =>
    value is api.CupertinoNavigationBar;
Object? _CupertinoNavigationBar_preferredSize(Object value) =>
    (value as api.CupertinoNavigationBar).preferredSize;
Object? _CupertinoNavigationBar_shouldFullyObstruct(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).shouldFullyObstruct(
    values["context"] as api1.BuildContext,
  );
}

api1.Widget _createCupertinoNavigationBar(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      if (!values.containsKey("border")) {
        return api.CupertinoNavigationBar(
          key: values["key"] as api1.Key?,
          leading: values["leading"] as api1.Widget?,
          automaticallyImplyLeading:
              values["automaticallyImplyLeading"] as bool,
          middle: values["middle"] as api1.Widget?,
          trailing: values["trailing"] as api1.Widget?,
          backgroundColor: values["backgroundColor"] as api1.Color?,
          transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
        );
      }
      return api.CupertinoNavigationBar(
        key: values["key"] as api1.Key?,
        leading: values["leading"] as api1.Widget?,
        automaticallyImplyLeading: values["automaticallyImplyLeading"] as bool,
        middle: values["middle"] as api1.Widget?,
        trailing: values["trailing"] as api1.Widget?,
        border: values["border"] as api1.Border?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

final class _ObstructingPreferredSizeWidgetProxy extends api1.StatelessWidget
    with FlaxWidgetProxy
    implements api.ObstructingPreferredSizeWidget {
  final FlaxProxyPeer _flaxPeer;
  _ObstructingPreferredSizeWidgetProxy(this._flaxPeer, {api1.Key? super.key});
  @override
  bool shouldFullyObstruct(api1.BuildContext context) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      context,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: shouldFullyObstruct');
    }
    final result = _flaxResult.$2 as bool;
    return result;
  }

  @override
  api1.Widget build(api1.BuildContext context) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      context,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: build');
    }
    final result = _flaxResult.$2 as api1.Widget;
    return result;
  }

  @override
  api1.Size get preferredSize {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    final result = _flaxResult.$2 as api1.Size;
    return result;
  }
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape0),
];
Function _flaxShape0<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
  Object _callback0(FlaxCallback _flaxBridgeCallback) => () {
    final positional = <Object?>[];
    final named = <String, Object?>{};
    return _flaxBridgeCallback.call(positional, named) as _Shape0;
  };
  bool _callback0Matches(Object value) => value is _Shape0 Function();
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as _Shape0 Function())();
  }

  return types.define<_Shape0 Function()>(
    FlaxTypeRef(
      "callback",
      nullable: false,
      callback: FlaxCallbackBinding(
        [],
        types.ref<_Shape0>(withinCallback: true),
        _callback0,
        id: types.key<_Shape0 Function()>() + ":callback:<>()->parameter:",
        invoke: _callback0Invoke,
        matches: _callback0Matches,
      ),
    ),
    withinCallback: withinCallback,
  );
};
Object _callback0(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  _flaxBridgeCallback.call(positional, named);
};
bool _callback0Matches(Object value) => value is void Function();
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback1(FlaxCallback _flaxBridgeCallback) => (api1.BuildContext p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as bool;
};
bool _callback1Matches(Object value) =>
    value is bool Function(api1.BuildContext context);
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(api1.BuildContext context))(
    positional[0] as api1.BuildContext,
  );
}

Object _callback2(FlaxCallback _flaxBridgeCallback) => (api1.BuildContext p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api1.Widget;
};
bool _callback2Matches(Object value) =>
    value is api1.Widget Function(api1.BuildContext context);
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Widget Function(api1.BuildContext context))(
    positional[0] as api1.BuildContext,
  );
}

Object _callback3(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return _flaxBridgeCallback.call(positional, named) as api1.Size;
};
bool _callback3Matches(Object value) => value is api1.Size Function();
Object? _callback3Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Size Function())();
}

Object _collection0Create() => <api1.NavigatorObserver>[];
bool _collection0Matches(Object value) => value is List<api1.NavigatorObserver>;
Object _collection1Create() => <api1.NavigatorObserver>[];
Object _collection1Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.NavigatorObserver>();
bool _collection1Matches(Object value) =>
    value is Iterable<api1.NavigatorObserver>;
