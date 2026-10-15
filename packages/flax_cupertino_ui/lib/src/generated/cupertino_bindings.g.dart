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
              "widget",
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
    FlaxWidgetInterfaceBinding(
      "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
      _isObstructingPreferredSizeWidget,
    ),
    FlaxObjectBinding(
      "flax.cupertino/cupertino#type:CupertinoNavigationBar",
      [],
      {},
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
    "native-widget-proxies",
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
      "widget",
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
      return api.CupertinoApp(
        key: values["key"] as api1.Key?,
        home: values["home"] as api1.Widget?,
        theme: values["theme"] as api.CupertinoThemeData?,
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
bool _isCupertinoNavigationBar(Object value) =>
    value is api.CupertinoNavigationBar;
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
