// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import
import 'dart:core';

import 'package:cupertino_ui/cupertino_ui.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart' as api1;
import 'package:cupertino_ui/cupertino_ui.dart' as _flaxNative2;

import 'dart:core' as _flaxNative1;

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
      fixedArguments: false,
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
      fixedArguments: false,
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
      fixedArguments: false,
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
      methods: {},
      staticGetters: {},
    ),
    FlaxWidgetInterfaceBinding(
      "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
      _isObstructingPreferredSizeWidget,
    ),
    FlaxWidgetBinding(
      "flax.cupertino/cupertino#type:CupertinoNavigationBar",
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
      _CupertinoNavigationBarHost.new,
      fixedArguments: true,
      methods: {},
    ),
  ],
  functions: [],
  moduleId: "flax.cupertino/cupertino",
  uiProtocol: 21,
  requiredCapabilities: const <String>[],
  stateVariants: [],
);

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

class _CupertinoNavigationBarHost extends FlaxWidgetHost
    implements api.ObstructingPreferredSizeWidget {
  _CupertinoNavigationBarHost(super.node);
  @override
  _flaxNative2.Size get preferredSize =>
      (configuration as _flaxNative2.ObstructingPreferredSizeWidget)
          .preferredSize;
  @override
  _flaxNative1.bool shouldFullyObstruct(_flaxNative2.BuildContext context) =>
      (configuration as _flaxNative2.ObstructingPreferredSizeWidget)
          .shouldFullyObstruct(context);
  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createCupertinoNavigationBar(node.ctor, values);
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

Object _callback0(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
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
