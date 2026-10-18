// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:cupertino_ui/cupertino_ui.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart' as api1;
import 'package:flutter/painting.dart' as api2;

import 'dart:ui' as api3;

import 'package:flutter/foundation.dart' as api4;
import 'package:flutter/services.dart' as api5;

import 'dart:core' as api6;

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
            _flaxBinding0,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "navigatorKey",
            _flaxBinding1,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "home",
            _flaxBinding2,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "theme",
            _flaxBinding3,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "routes",
            _flaxBinding9,
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "initialRoute",
            _flaxBinding10,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onGenerateRoute",
            _flaxBinding14,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onGenerateInitialRoutes",
            _flaxBinding19,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onUnknownRoute",
            _flaxBinding14,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onNavigationNotification",
            _flaxBinding23,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "navigatorObservers",
            _flaxBinding26,
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "builder",
            _flaxBinding28,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "title",
            _flaxBinding10,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onGenerateTitle",
            _flaxBinding30,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "locale",
            _flaxBinding32,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "localizationsDelegates",
            _flaxBinding34,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "localeListResolutionCallback",
            _flaxBinding39,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "localeResolutionCallback",
            _flaxBinding41,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "supportedLocales",
            _flaxBinding36,
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "showPerformanceOverlay",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "checkerboardRasterCacheImages",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "checkerboardOffscreenLayers",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "showSemanticsDebugger",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "debugShowCheckedModeBanner",
            _flaxBinding21,
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "shortcuts",
            _flaxBinding44,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "actions",
            _flaxBinding47,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "restorationScopeId",
            _flaxBinding10,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "scrollBehavior",
            _flaxBinding48,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "useInheritedMediaQuery",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
        "router": [
          FlaxParameter(
            "key",
            _flaxBinding0,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "routeInformationProvider",
            _flaxBinding49,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "routeInformationParser",
            _flaxBinding50,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "routerDelegate",
            _flaxBinding51,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "backButtonDispatcher",
            _flaxBinding52,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "routerConfig",
            _flaxBinding53,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "theme",
            _flaxBinding3,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "builder",
            _flaxBinding28,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "title",
            _flaxBinding10,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onGenerateTitle",
            _flaxBinding30,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onNavigationNotification",
            _flaxBinding23,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "locale",
            _flaxBinding32,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "localizationsDelegates",
            _flaxBinding34,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "localeListResolutionCallback",
            _flaxBinding39,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "localeResolutionCallback",
            _flaxBinding41,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "supportedLocales",
            _flaxBinding36,
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "showPerformanceOverlay",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "checkerboardRasterCacheImages",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "checkerboardOffscreenLayers",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "showSemanticsDebugger",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "debugShowCheckedModeBanner",
            _flaxBinding21,
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "shortcuts",
            _flaxBinding44,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "actions",
            _flaxBinding47,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "restorationScopeId",
            _flaxBinding10,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "scrollBehavior",
            _flaxBinding48,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "useInheritedMediaQuery",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
      },
      _CupertinoAppHost.new,
      matches: _isCupertinoApp,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.cupertino/cupertino#type:CupertinoButton",
      {
        "": [
          FlaxParameter(
            "key",
            _flaxBinding0,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            _flaxBinding5,
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "padding",
            _flaxBinding54,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "foregroundColor",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "disabledColor",
            _flaxBinding55,
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "minSize",
            _flaxBinding56,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "minimumSize",
            _flaxBinding57,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "pressedOpacity",
            _flaxBinding56,
            required: false,
            defaultValue: 0.4,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "borderRadius",
            _flaxBinding58,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            _flaxBinding59,
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "focusColor",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "focusNode",
            _flaxBinding60,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onFocusChange",
            _flaxBinding63,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "autofocus",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mouseCursor",
            _flaxBinding64,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onLongPress",
            _flaxBinding66,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPressed",
            _flaxBinding66,
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "tinted": [
          FlaxParameter(
            "key",
            _flaxBinding0,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            _flaxBinding5,
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "padding",
            _flaxBinding54,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "foregroundColor",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "disabledColor",
            _flaxBinding55,
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "minSize",
            _flaxBinding56,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "minimumSize",
            _flaxBinding57,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "pressedOpacity",
            _flaxBinding56,
            required: false,
            defaultValue: 0.4,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "borderRadius",
            _flaxBinding58,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            _flaxBinding59,
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "focusColor",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "focusNode",
            _flaxBinding60,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onFocusChange",
            _flaxBinding63,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "autofocus",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mouseCursor",
            _flaxBinding64,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onLongPress",
            _flaxBinding66,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPressed",
            _flaxBinding66,
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "filled": [
          FlaxParameter(
            "key",
            _flaxBinding0,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            _flaxBinding5,
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "padding",
            _flaxBinding54,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "disabledColor",
            _flaxBinding55,
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "foregroundColor",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "minSize",
            _flaxBinding56,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "minimumSize",
            _flaxBinding57,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "pressedOpacity",
            _flaxBinding56,
            required: false,
            defaultValue: 0.4,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "borderRadius",
            _flaxBinding58,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            _flaxBinding59,
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "focusColor",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "focusNode",
            _flaxBinding60,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onFocusChange",
            _flaxBinding63,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "autofocus",
            _flaxBinding21,
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mouseCursor",
            _flaxBinding64,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onLongPress",
            _flaxBinding66,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPressed",
            _flaxBinding66,
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
      "flax.cupertino/cupertino#type:CupertinoNavigationBar",
      [
        _flaxBinding68,
        _flaxBinding69,
        _flaxBinding70,
        _flaxBinding71,
        _flaxBinding72,
        _flaxBinding73,
        _flaxBinding74,
        _flaxBinding75,
        _flaxBinding76,
        _flaxBinding77,
        _flaxBinding79,
        _flaxBinding81,
        _flaxBinding83,
        _flaxBinding84,
        _flaxBinding85,
        _flaxBinding87,
        _flaxBinding89,
        _flaxBinding90,
      ],
      {
        "toStringShallow": _flaxBinding93,
        "toStringDeep": _flaxBinding96,
        "toStringShort": _flaxBinding98,
        "toDiagnosticsNode": _flaxBinding102,
        "debugDescribeChildren": _flaxBinding105,
        "debugFillProperties": _flaxBinding108,
        "toString": _flaxBinding110,
        "shouldFullyObstruct": _flaxBinding112,
        "createState": _flaxBinding114,
        "createElement": _flaxBinding116,
      },
      constructors: {"": _flaxBinding117, "large": _flaxBinding118},
      setters: [],
      create: _createCupertinoNavigationBar,
      matches: _isCupertinoNavigationBar,
      supertypes: [
        "flax.core/components#type:StatefulWidget",
        "flax.core/sdk_widgets#type:Widget",
        "flax.core/sdk_foundation#type:DiagnosticableTree",
        "dart:core::Object",
        "flax.core/sdk_foundation#type:Diagnosticable",
        "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
        "flax.core/flutter#type:PreferredSizeWidget",
      ],
    ),
    FlaxWidgetBinding(
      "flax.cupertino/cupertino#type:CupertinoPageScaffold",
      {
        "": [
          FlaxParameter(
            "key",
            _flaxBinding0,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "navigationBar",
            _flaxBinding119,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "backgroundColor",
            _flaxBinding31,
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "resizeToAvoidBottomInset",
            _flaxBinding21,
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            _flaxBinding5,
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
    _flaxBinding137,
    _flaxBinding168,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.cupertino/cupertino#function:CupertinoApp.createCupertinoHeroController",
      [],
      _flaxBinding169,
      _CupertinoApp_createCupertinoHeroController,
    ),
    FlaxFunctionBinding(
      "flax.cupertino/cupertino#function:CupertinoButton.tapMoveSlop",
      [],
      _flaxBinding170,
      _CupertinoButton_tapMoveSlop,
    ),
  ],
  moduleId: "flax.cupertino/cupertino",
  dependencyModules: [
    "flax.core/components",
    "flax.core/flutter",
    "flax.core/sdk_dart_ui",
    "flax.core/sdk_foundation",
    "flax.core/sdk_widgets",
  ],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "lazy-js-iterables",
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
      "flax.cupertino/cupertino#type:CupertinoButton",
      api.CupertinoButton,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.cupertino/cupertino#type:CupertinoNavigationBar",
      api.CupertinoNavigationBar,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.cupertino/cupertino#type:CupertinoPageScaffold",
      api.CupertinoPageScaffold,
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
  ],
  dartShapes: _flaxDartShapes,
);
bool _isCupertinoApp(Object value) => value is api.CupertinoApp;
Object? _CupertinoApp_createCupertinoHeroController(
  Map<String, Object?> values,
) {
  return api.CupertinoApp.createCupertinoHeroController();
}

class _CupertinoAppHost extends FlaxWidgetHost {
  _CupertinoAppHost(super.node);
  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createCupertinoApp(node.ctor, values);
}

api1.Widget _createCupertinoApp(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("routes")) {
        if (!values.containsKey("navigatorObservers")) {
          if (!values.containsKey("supportedLocales")) {
            return api.CupertinoApp(
              key: values["key"] as api4.Key?,
              navigatorKey:
                  values["navigatorKey"]
                      as api1.GlobalKey<api1.NavigatorState>?,
              home: values["home"] as api1.Widget?,
              theme: values["theme"] as api.CupertinoThemeData?,
              initialRoute: values["initialRoute"] as String?,
              onGenerateRoute:
                  values["onGenerateRoute"]
                      as api1.Route<Object?>? Function(
                        api1.RouteSettings settings,
                      )?,
              onGenerateInitialRoutes:
                  values["onGenerateInitialRoutes"]
                      as List<api1.Route<Object?>> Function(
                        String initialRoute,
                      )?,
              onUnknownRoute:
                  values["onUnknownRoute"]
                      as api1.Route<Object?>? Function(
                        api1.RouteSettings settings,
                      )?,
              onNavigationNotification:
                  values["onNavigationNotification"]
                      as bool Function(
                        api1.NavigationNotification notification,
                      )?,
              builder:
                  values["builder"]
                      as api1.Widget Function(
                        api1.BuildContext context,
                        api1.Widget? child,
                      )?,
              title: values["title"] as String?,
              onGenerateTitle:
                  values["onGenerateTitle"]
                      as String Function(api1.BuildContext context)?,
              color: values["color"] as api3.Color?,
              locale: values["locale"] as api3.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api3.Locale? Function(
                        List<api3.Locale>? locales,
                        Iterable<api3.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api3.Locale? Function(
                        api3.Locale? locale,
                        Iterable<api3.Locale> supportedLocales,
                      )?,
              showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
              checkerboardRasterCacheImages:
                  values["checkerboardRasterCacheImages"] as bool,
              checkerboardOffscreenLayers:
                  values["checkerboardOffscreenLayers"] as bool,
              showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
              debugShowCheckedModeBanner:
                  values["debugShowCheckedModeBanner"] as bool,
              shortcuts:
                  values["shortcuts"]
                      as Map<api1.ShortcutActivator, api1.Intent>?,
              actions:
                  values["actions"]
                      as Map<api6.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            );
          }
          return api.CupertinoApp(
            key: values["key"] as api4.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
            theme: values["theme"] as api.CupertinoThemeData?,
            initialRoute: values["initialRoute"] as String?,
            onGenerateRoute:
                values["onGenerateRoute"]
                    as api1.Route<Object?>? Function(
                      api1.RouteSettings settings,
                    )?,
            onGenerateInitialRoutes:
                values["onGenerateInitialRoutes"]
                    as List<api1.Route<Object?>> Function(String initialRoute)?,
            onUnknownRoute:
                values["onUnknownRoute"]
                    as api1.Route<Object?>? Function(
                      api1.RouteSettings settings,
                    )?,
            onNavigationNotification:
                values["onNavigationNotification"]
                    as bool Function(api1.NavigationNotification notification)?,
            builder:
                values["builder"]
                    as api1.Widget Function(
                      api1.BuildContext context,
                      api1.Widget? child,
                    )?,
            title: values["title"] as String?,
            onGenerateTitle:
                values["onGenerateTitle"]
                    as String Function(api1.BuildContext context)?,
            color: values["color"] as api3.Color?,
            locale: values["locale"] as api3.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api3.Locale? Function(
                      List<api3.Locale>? locales,
                      Iterable<api3.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api3.Locale? Function(
                      api3.Locale? locale,
                      Iterable<api3.Locale> supportedLocales,
                    )?,
            supportedLocales:
                values["supportedLocales"] as Iterable<api3.Locale>,
            showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
            checkerboardRasterCacheImages:
                values["checkerboardRasterCacheImages"] as bool,
            checkerboardOffscreenLayers:
                values["checkerboardOffscreenLayers"] as bool,
            showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
            debugShowCheckedModeBanner:
                values["debugShowCheckedModeBanner"] as bool,
            shortcuts:
                values["shortcuts"]
                    as Map<api1.ShortcutActivator, api1.Intent>?,
            actions:
                values["actions"] as Map<api6.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          );
        }
        if (!values.containsKey("supportedLocales")) {
          return api.CupertinoApp(
            key: values["key"] as api4.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
            theme: values["theme"] as api.CupertinoThemeData?,
            initialRoute: values["initialRoute"] as String?,
            onGenerateRoute:
                values["onGenerateRoute"]
                    as api1.Route<Object?>? Function(
                      api1.RouteSettings settings,
                    )?,
            onGenerateInitialRoutes:
                values["onGenerateInitialRoutes"]
                    as List<api1.Route<Object?>> Function(String initialRoute)?,
            onUnknownRoute:
                values["onUnknownRoute"]
                    as api1.Route<Object?>? Function(
                      api1.RouteSettings settings,
                    )?,
            onNavigationNotification:
                values["onNavigationNotification"]
                    as bool Function(api1.NavigationNotification notification)?,
            navigatorObservers:
                values["navigatorObservers"] as List<api1.NavigatorObserver>,
            builder:
                values["builder"]
                    as api1.Widget Function(
                      api1.BuildContext context,
                      api1.Widget? child,
                    )?,
            title: values["title"] as String?,
            onGenerateTitle:
                values["onGenerateTitle"]
                    as String Function(api1.BuildContext context)?,
            color: values["color"] as api3.Color?,
            locale: values["locale"] as api3.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api3.Locale? Function(
                      List<api3.Locale>? locales,
                      Iterable<api3.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api3.Locale? Function(
                      api3.Locale? locale,
                      Iterable<api3.Locale> supportedLocales,
                    )?,
            showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
            checkerboardRasterCacheImages:
                values["checkerboardRasterCacheImages"] as bool,
            checkerboardOffscreenLayers:
                values["checkerboardOffscreenLayers"] as bool,
            showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
            debugShowCheckedModeBanner:
                values["debugShowCheckedModeBanner"] as bool,
            shortcuts:
                values["shortcuts"]
                    as Map<api1.ShortcutActivator, api1.Intent>?,
            actions:
                values["actions"] as Map<api6.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          );
        }
        return api.CupertinoApp(
          key: values["key"] as api4.Key?,
          navigatorKey:
              values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
          home: values["home"] as api1.Widget?,
          theme: values["theme"] as api.CupertinoThemeData?,
          initialRoute: values["initialRoute"] as String?,
          onGenerateRoute:
              values["onGenerateRoute"]
                  as api1.Route<Object?>? Function(
                    api1.RouteSettings settings,
                  )?,
          onGenerateInitialRoutes:
              values["onGenerateInitialRoutes"]
                  as List<api1.Route<Object?>> Function(String initialRoute)?,
          onUnknownRoute:
              values["onUnknownRoute"]
                  as api1.Route<Object?>? Function(
                    api1.RouteSettings settings,
                  )?,
          onNavigationNotification:
              values["onNavigationNotification"]
                  as bool Function(api1.NavigationNotification notification)?,
          navigatorObservers:
              values["navigatorObservers"] as List<api1.NavigatorObserver>,
          builder:
              values["builder"]
                  as api1.Widget Function(
                    api1.BuildContext context,
                    api1.Widget? child,
                  )?,
          title: values["title"] as String?,
          onGenerateTitle:
              values["onGenerateTitle"]
                  as String Function(api1.BuildContext context)?,
          color: values["color"] as api3.Color?,
          locale: values["locale"] as api3.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api3.Locale? Function(
                    List<api3.Locale>? locales,
                    Iterable<api3.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api3.Locale? Function(
                    api3.Locale? locale,
                    Iterable<api3.Locale> supportedLocales,
                  )?,
          supportedLocales: values["supportedLocales"] as Iterable<api3.Locale>,
          showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
          checkerboardRasterCacheImages:
              values["checkerboardRasterCacheImages"] as bool,
          checkerboardOffscreenLayers:
              values["checkerboardOffscreenLayers"] as bool,
          showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
          debugShowCheckedModeBanner:
              values["debugShowCheckedModeBanner"] as bool,
          shortcuts:
              values["shortcuts"] as Map<api1.ShortcutActivator, api1.Intent>?,
          actions:
              values["actions"] as Map<api6.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
        );
      }
      if (!values.containsKey("navigatorObservers")) {
        if (!values.containsKey("supportedLocales")) {
          return api.CupertinoApp(
            key: values["key"] as api4.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
            theme: values["theme"] as api.CupertinoThemeData?,
            routes:
                values["routes"]
                    as Map<String, api1.Widget Function(api1.BuildContext p0)>,
            initialRoute: values["initialRoute"] as String?,
            onGenerateRoute:
                values["onGenerateRoute"]
                    as api1.Route<Object?>? Function(
                      api1.RouteSettings settings,
                    )?,
            onGenerateInitialRoutes:
                values["onGenerateInitialRoutes"]
                    as List<api1.Route<Object?>> Function(String initialRoute)?,
            onUnknownRoute:
                values["onUnknownRoute"]
                    as api1.Route<Object?>? Function(
                      api1.RouteSettings settings,
                    )?,
            onNavigationNotification:
                values["onNavigationNotification"]
                    as bool Function(api1.NavigationNotification notification)?,
            builder:
                values["builder"]
                    as api1.Widget Function(
                      api1.BuildContext context,
                      api1.Widget? child,
                    )?,
            title: values["title"] as String?,
            onGenerateTitle:
                values["onGenerateTitle"]
                    as String Function(api1.BuildContext context)?,
            color: values["color"] as api3.Color?,
            locale: values["locale"] as api3.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api3.Locale? Function(
                      List<api3.Locale>? locales,
                      Iterable<api3.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api3.Locale? Function(
                      api3.Locale? locale,
                      Iterable<api3.Locale> supportedLocales,
                    )?,
            showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
            checkerboardRasterCacheImages:
                values["checkerboardRasterCacheImages"] as bool,
            checkerboardOffscreenLayers:
                values["checkerboardOffscreenLayers"] as bool,
            showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
            debugShowCheckedModeBanner:
                values["debugShowCheckedModeBanner"] as bool,
            shortcuts:
                values["shortcuts"]
                    as Map<api1.ShortcutActivator, api1.Intent>?,
            actions:
                values["actions"] as Map<api6.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          );
        }
        return api.CupertinoApp(
          key: values["key"] as api4.Key?,
          navigatorKey:
              values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
          home: values["home"] as api1.Widget?,
          theme: values["theme"] as api.CupertinoThemeData?,
          routes:
              values["routes"]
                  as Map<String, api1.Widget Function(api1.BuildContext p0)>,
          initialRoute: values["initialRoute"] as String?,
          onGenerateRoute:
              values["onGenerateRoute"]
                  as api1.Route<Object?>? Function(
                    api1.RouteSettings settings,
                  )?,
          onGenerateInitialRoutes:
              values["onGenerateInitialRoutes"]
                  as List<api1.Route<Object?>> Function(String initialRoute)?,
          onUnknownRoute:
              values["onUnknownRoute"]
                  as api1.Route<Object?>? Function(
                    api1.RouteSettings settings,
                  )?,
          onNavigationNotification:
              values["onNavigationNotification"]
                  as bool Function(api1.NavigationNotification notification)?,
          builder:
              values["builder"]
                  as api1.Widget Function(
                    api1.BuildContext context,
                    api1.Widget? child,
                  )?,
          title: values["title"] as String?,
          onGenerateTitle:
              values["onGenerateTitle"]
                  as String Function(api1.BuildContext context)?,
          color: values["color"] as api3.Color?,
          locale: values["locale"] as api3.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api3.Locale? Function(
                    List<api3.Locale>? locales,
                    Iterable<api3.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api3.Locale? Function(
                    api3.Locale? locale,
                    Iterable<api3.Locale> supportedLocales,
                  )?,
          supportedLocales: values["supportedLocales"] as Iterable<api3.Locale>,
          showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
          checkerboardRasterCacheImages:
              values["checkerboardRasterCacheImages"] as bool,
          checkerboardOffscreenLayers:
              values["checkerboardOffscreenLayers"] as bool,
          showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
          debugShowCheckedModeBanner:
              values["debugShowCheckedModeBanner"] as bool,
          shortcuts:
              values["shortcuts"] as Map<api1.ShortcutActivator, api1.Intent>?,
          actions:
              values["actions"] as Map<api6.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
        );
      }
      if (!values.containsKey("supportedLocales")) {
        return api.CupertinoApp(
          key: values["key"] as api4.Key?,
          navigatorKey:
              values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
          home: values["home"] as api1.Widget?,
          theme: values["theme"] as api.CupertinoThemeData?,
          routes:
              values["routes"]
                  as Map<String, api1.Widget Function(api1.BuildContext p0)>,
          initialRoute: values["initialRoute"] as String?,
          onGenerateRoute:
              values["onGenerateRoute"]
                  as api1.Route<Object?>? Function(
                    api1.RouteSettings settings,
                  )?,
          onGenerateInitialRoutes:
              values["onGenerateInitialRoutes"]
                  as List<api1.Route<Object?>> Function(String initialRoute)?,
          onUnknownRoute:
              values["onUnknownRoute"]
                  as api1.Route<Object?>? Function(
                    api1.RouteSettings settings,
                  )?,
          onNavigationNotification:
              values["onNavigationNotification"]
                  as bool Function(api1.NavigationNotification notification)?,
          navigatorObservers:
              values["navigatorObservers"] as List<api1.NavigatorObserver>,
          builder:
              values["builder"]
                  as api1.Widget Function(
                    api1.BuildContext context,
                    api1.Widget? child,
                  )?,
          title: values["title"] as String?,
          onGenerateTitle:
              values["onGenerateTitle"]
                  as String Function(api1.BuildContext context)?,
          color: values["color"] as api3.Color?,
          locale: values["locale"] as api3.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api3.Locale? Function(
                    List<api3.Locale>? locales,
                    Iterable<api3.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api3.Locale? Function(
                    api3.Locale? locale,
                    Iterable<api3.Locale> supportedLocales,
                  )?,
          showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
          checkerboardRasterCacheImages:
              values["checkerboardRasterCacheImages"] as bool,
          checkerboardOffscreenLayers:
              values["checkerboardOffscreenLayers"] as bool,
          showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
          debugShowCheckedModeBanner:
              values["debugShowCheckedModeBanner"] as bool,
          shortcuts:
              values["shortcuts"] as Map<api1.ShortcutActivator, api1.Intent>?,
          actions:
              values["actions"] as Map<api6.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
        );
      }
      return api.CupertinoApp(
        key: values["key"] as api4.Key?,
        navigatorKey:
            values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
        home: values["home"] as api1.Widget?,
        theme: values["theme"] as api.CupertinoThemeData?,
        routes:
            values["routes"]
                as Map<String, api1.Widget Function(api1.BuildContext p0)>,
        initialRoute: values["initialRoute"] as String?,
        onGenerateRoute:
            values["onGenerateRoute"]
                as api1.Route<Object?>? Function(api1.RouteSettings settings)?,
        onGenerateInitialRoutes:
            values["onGenerateInitialRoutes"]
                as List<api1.Route<Object?>> Function(String initialRoute)?,
        onUnknownRoute:
            values["onUnknownRoute"]
                as api1.Route<Object?>? Function(api1.RouteSettings settings)?,
        onNavigationNotification:
            values["onNavigationNotification"]
                as bool Function(api1.NavigationNotification notification)?,
        navigatorObservers:
            values["navigatorObservers"] as List<api1.NavigatorObserver>,
        builder:
            values["builder"]
                as api1.Widget Function(
                  api1.BuildContext context,
                  api1.Widget? child,
                )?,
        title: values["title"] as String?,
        onGenerateTitle:
            values["onGenerateTitle"]
                as String Function(api1.BuildContext context)?,
        color: values["color"] as api3.Color?,
        locale: values["locale"] as api3.Locale?,
        localizationsDelegates:
            values["localizationsDelegates"]
                as Iterable<api1.LocalizationsDelegate<Object?>>?,
        localeListResolutionCallback:
            values["localeListResolutionCallback"]
                as api3.Locale? Function(
                  List<api3.Locale>? locales,
                  Iterable<api3.Locale> supportedLocales,
                )?,
        localeResolutionCallback:
            values["localeResolutionCallback"]
                as api3.Locale? Function(
                  api3.Locale? locale,
                  Iterable<api3.Locale> supportedLocales,
                )?,
        supportedLocales: values["supportedLocales"] as Iterable<api3.Locale>,
        showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
        checkerboardRasterCacheImages:
            values["checkerboardRasterCacheImages"] as bool,
        checkerboardOffscreenLayers:
            values["checkerboardOffscreenLayers"] as bool,
        showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
        debugShowCheckedModeBanner:
            values["debugShowCheckedModeBanner"] as bool,
        shortcuts:
            values["shortcuts"] as Map<api1.ShortcutActivator, api1.Intent>?,
        actions: values["actions"] as Map<api6.Type, api1.Action<api1.Intent>>?,
        restorationScopeId: values["restorationScopeId"] as String?,
        scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
        useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
      );
    case "router":
      if (!values.containsKey("supportedLocales")) {
        return api.CupertinoApp.router(
          key: values["key"] as api4.Key?,
          routeInformationProvider:
              values["routeInformationProvider"]
                  as api1.RouteInformationProvider?,
          routeInformationParser:
              values["routeInformationParser"]
                  as api1.RouteInformationParser<Object>?,
          routerDelegate:
              values["routerDelegate"] as api1.RouterDelegate<Object>?,
          backButtonDispatcher:
              values["backButtonDispatcher"] as api1.BackButtonDispatcher?,
          routerConfig: values["routerConfig"] as api1.RouterConfig<Object>?,
          theme: values["theme"] as api.CupertinoThemeData?,
          builder:
              values["builder"]
                  as api1.Widget Function(
                    api1.BuildContext context,
                    api1.Widget? child,
                  )?,
          title: values["title"] as String?,
          onGenerateTitle:
              values["onGenerateTitle"]
                  as String Function(api1.BuildContext context)?,
          onNavigationNotification:
              values["onNavigationNotification"]
                  as bool Function(api1.NavigationNotification notification)?,
          color: values["color"] as api3.Color?,
          locale: values["locale"] as api3.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api3.Locale? Function(
                    List<api3.Locale>? locales,
                    Iterable<api3.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api3.Locale? Function(
                    api3.Locale? locale,
                    Iterable<api3.Locale> supportedLocales,
                  )?,
          showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
          checkerboardRasterCacheImages:
              values["checkerboardRasterCacheImages"] as bool,
          checkerboardOffscreenLayers:
              values["checkerboardOffscreenLayers"] as bool,
          showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
          debugShowCheckedModeBanner:
              values["debugShowCheckedModeBanner"] as bool,
          shortcuts:
              values["shortcuts"] as Map<api1.ShortcutActivator, api1.Intent>?,
          actions:
              values["actions"] as Map<api6.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
        );
      }
      return api.CupertinoApp.router(
        key: values["key"] as api4.Key?,
        routeInformationProvider:
            values["routeInformationProvider"]
                as api1.RouteInformationProvider?,
        routeInformationParser:
            values["routeInformationParser"]
                as api1.RouteInformationParser<Object>?,
        routerDelegate:
            values["routerDelegate"] as api1.RouterDelegate<Object>?,
        backButtonDispatcher:
            values["backButtonDispatcher"] as api1.BackButtonDispatcher?,
        routerConfig: values["routerConfig"] as api1.RouterConfig<Object>?,
        theme: values["theme"] as api.CupertinoThemeData?,
        builder:
            values["builder"]
                as api1.Widget Function(
                  api1.BuildContext context,
                  api1.Widget? child,
                )?,
        title: values["title"] as String?,
        onGenerateTitle:
            values["onGenerateTitle"]
                as String Function(api1.BuildContext context)?,
        onNavigationNotification:
            values["onNavigationNotification"]
                as bool Function(api1.NavigationNotification notification)?,
        color: values["color"] as api3.Color?,
        locale: values["locale"] as api3.Locale?,
        localizationsDelegates:
            values["localizationsDelegates"]
                as Iterable<api1.LocalizationsDelegate<Object?>>?,
        localeListResolutionCallback:
            values["localeListResolutionCallback"]
                as api3.Locale? Function(
                  List<api3.Locale>? locales,
                  Iterable<api3.Locale> supportedLocales,
                )?,
        localeResolutionCallback:
            values["localeResolutionCallback"]
                as api3.Locale? Function(
                  api3.Locale? locale,
                  Iterable<api3.Locale> supportedLocales,
                )?,
        supportedLocales: values["supportedLocales"] as Iterable<api3.Locale>,
        showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
        checkerboardRasterCacheImages:
            values["checkerboardRasterCacheImages"] as bool,
        checkerboardOffscreenLayers:
            values["checkerboardOffscreenLayers"] as bool,
        showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
        debugShowCheckedModeBanner:
            values["debugShowCheckedModeBanner"] as bool,
        shortcuts:
            values["shortcuts"] as Map<api1.ShortcutActivator, api1.Intent>?,
        actions: values["actions"] as Map<api6.Type, api1.Action<api1.Intent>>?,
        restorationScopeId: values["restorationScopeId"] as String?,
        scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
        useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCupertinoButton(Object value) => value is api.CupertinoButton;
Object? _CupertinoButton_tapMoveSlop(Map<String, Object?> values) {
  return api.CupertinoButton.tapMoveSlop();
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
      if (!values.containsKey("disabledColor")) {
        if (!values.containsKey("alignment")) {
          return api.CupertinoButton(
            key: values["key"] as api4.Key?,
            child: values["child"] as api1.Widget,
            padding: values["padding"] as api2.EdgeInsetsGeometry?,
            color: values["color"] as api3.Color?,
            foregroundColor: values["foregroundColor"] as api3.Color?,
            minSize: values["minSize"] as double?,
            minimumSize: values["minimumSize"] as api3.Size?,
            pressedOpacity: values["pressedOpacity"] as double?,
            borderRadius: values["borderRadius"] as api2.BorderRadius?,
            focusColor: values["focusColor"] as api3.Color?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            onFocusChange:
                values["onFocusChange"] as void Function(bool value)?,
            autofocus: values["autofocus"] as bool,
            mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
            onLongPress: values["onLongPress"] as void Function()?,
            onPressed: values["onPressed"] as void Function()?,
          );
        }
        return api.CupertinoButton(
          key: values["key"] as api4.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api2.EdgeInsetsGeometry?,
          color: values["color"] as api3.Color?,
          foregroundColor: values["foregroundColor"] as api3.Color?,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api3.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api2.BorderRadius?,
          alignment: values["alignment"] as api2.AlignmentGeometry,
          focusColor: values["focusColor"] as api3.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      if (!values.containsKey("alignment")) {
        return api.CupertinoButton(
          key: values["key"] as api4.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api2.EdgeInsetsGeometry?,
          color: values["color"] as api3.Color?,
          foregroundColor: values["foregroundColor"] as api3.Color?,
          disabledColor: values["disabledColor"] as api3.Color,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api3.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api2.BorderRadius?,
          focusColor: values["focusColor"] as api3.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      return api.CupertinoButton(
        key: values["key"] as api4.Key?,
        child: values["child"] as api1.Widget,
        padding: values["padding"] as api2.EdgeInsetsGeometry?,
        color: values["color"] as api3.Color?,
        foregroundColor: values["foregroundColor"] as api3.Color?,
        disabledColor: values["disabledColor"] as api3.Color,
        minSize: values["minSize"] as double?,
        minimumSize: values["minimumSize"] as api3.Size?,
        pressedOpacity: values["pressedOpacity"] as double?,
        borderRadius: values["borderRadius"] as api2.BorderRadius?,
        alignment: values["alignment"] as api2.AlignmentGeometry,
        focusColor: values["focusColor"] as api3.Color?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        autofocus: values["autofocus"] as bool,
        mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
        onLongPress: values["onLongPress"] as void Function()?,
        onPressed: values["onPressed"] as void Function()?,
      );
    case "tinted":
      if (!values.containsKey("disabledColor")) {
        if (!values.containsKey("alignment")) {
          return api.CupertinoButton.tinted(
            key: values["key"] as api4.Key?,
            child: values["child"] as api1.Widget,
            padding: values["padding"] as api2.EdgeInsetsGeometry?,
            color: values["color"] as api3.Color?,
            foregroundColor: values["foregroundColor"] as api3.Color?,
            minSize: values["minSize"] as double?,
            minimumSize: values["minimumSize"] as api3.Size?,
            pressedOpacity: values["pressedOpacity"] as double?,
            borderRadius: values["borderRadius"] as api2.BorderRadius?,
            focusColor: values["focusColor"] as api3.Color?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            onFocusChange:
                values["onFocusChange"] as void Function(bool value)?,
            autofocus: values["autofocus"] as bool,
            mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
            onLongPress: values["onLongPress"] as void Function()?,
            onPressed: values["onPressed"] as void Function()?,
          );
        }
        return api.CupertinoButton.tinted(
          key: values["key"] as api4.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api2.EdgeInsetsGeometry?,
          color: values["color"] as api3.Color?,
          foregroundColor: values["foregroundColor"] as api3.Color?,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api3.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api2.BorderRadius?,
          alignment: values["alignment"] as api2.AlignmentGeometry,
          focusColor: values["focusColor"] as api3.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      if (!values.containsKey("alignment")) {
        return api.CupertinoButton.tinted(
          key: values["key"] as api4.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api2.EdgeInsetsGeometry?,
          color: values["color"] as api3.Color?,
          foregroundColor: values["foregroundColor"] as api3.Color?,
          disabledColor: values["disabledColor"] as api3.Color,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api3.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api2.BorderRadius?,
          focusColor: values["focusColor"] as api3.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      return api.CupertinoButton.tinted(
        key: values["key"] as api4.Key?,
        child: values["child"] as api1.Widget,
        padding: values["padding"] as api2.EdgeInsetsGeometry?,
        color: values["color"] as api3.Color?,
        foregroundColor: values["foregroundColor"] as api3.Color?,
        disabledColor: values["disabledColor"] as api3.Color,
        minSize: values["minSize"] as double?,
        minimumSize: values["minimumSize"] as api3.Size?,
        pressedOpacity: values["pressedOpacity"] as double?,
        borderRadius: values["borderRadius"] as api2.BorderRadius?,
        alignment: values["alignment"] as api2.AlignmentGeometry,
        focusColor: values["focusColor"] as api3.Color?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        autofocus: values["autofocus"] as bool,
        mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
        onLongPress: values["onLongPress"] as void Function()?,
        onPressed: values["onPressed"] as void Function()?,
      );
    case "filled":
      if (!values.containsKey("disabledColor")) {
        if (!values.containsKey("alignment")) {
          return api.CupertinoButton.filled(
            key: values["key"] as api4.Key?,
            child: values["child"] as api1.Widget,
            padding: values["padding"] as api2.EdgeInsetsGeometry?,
            color: values["color"] as api3.Color?,
            foregroundColor: values["foregroundColor"] as api3.Color?,
            minSize: values["minSize"] as double?,
            minimumSize: values["minimumSize"] as api3.Size?,
            pressedOpacity: values["pressedOpacity"] as double?,
            borderRadius: values["borderRadius"] as api2.BorderRadius?,
            focusColor: values["focusColor"] as api3.Color?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            onFocusChange:
                values["onFocusChange"] as void Function(bool value)?,
            autofocus: values["autofocus"] as bool,
            mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
            onLongPress: values["onLongPress"] as void Function()?,
            onPressed: values["onPressed"] as void Function()?,
          );
        }
        return api.CupertinoButton.filled(
          key: values["key"] as api4.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api2.EdgeInsetsGeometry?,
          color: values["color"] as api3.Color?,
          foregroundColor: values["foregroundColor"] as api3.Color?,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api3.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api2.BorderRadius?,
          alignment: values["alignment"] as api2.AlignmentGeometry,
          focusColor: values["focusColor"] as api3.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      if (!values.containsKey("alignment")) {
        return api.CupertinoButton.filled(
          key: values["key"] as api4.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api2.EdgeInsetsGeometry?,
          color: values["color"] as api3.Color?,
          disabledColor: values["disabledColor"] as api3.Color,
          foregroundColor: values["foregroundColor"] as api3.Color?,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api3.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api2.BorderRadius?,
          focusColor: values["focusColor"] as api3.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      return api.CupertinoButton.filled(
        key: values["key"] as api4.Key?,
        child: values["child"] as api1.Widget,
        padding: values["padding"] as api2.EdgeInsetsGeometry?,
        color: values["color"] as api3.Color?,
        disabledColor: values["disabledColor"] as api3.Color,
        foregroundColor: values["foregroundColor"] as api3.Color?,
        minSize: values["minSize"] as double?,
        minimumSize: values["minimumSize"] as api3.Size?,
        pressedOpacity: values["pressedOpacity"] as double?,
        borderRadius: values["borderRadius"] as api2.BorderRadius?,
        alignment: values["alignment"] as api2.AlignmentGeometry,
        focusColor: values["focusColor"] as api3.Color?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        autofocus: values["autofocus"] as bool,
        mouseCursor: values["mouseCursor"] as api5.MouseCursor?,
        onLongPress: values["onLongPress"] as void Function()?,
        onPressed: values["onPressed"] as void Function()?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCupertinoNavigationBar(Object value) =>
    value is api.CupertinoNavigationBar;
Object? _CupertinoNavigationBar_preferredSize(Object value) =>
    (value as api.CupertinoNavigationBar).preferredSize;
Object? _CupertinoNavigationBar_largeTitle(Object value) =>
    (value as api.CupertinoNavigationBar).largeTitle;
Object? _CupertinoNavigationBar_leading(Object value) =>
    (value as api.CupertinoNavigationBar).leading;
Object? _CupertinoNavigationBar_automaticallyImplyLeading(Object value) =>
    (value as api.CupertinoNavigationBar).automaticallyImplyLeading;
Object? _CupertinoNavigationBar_automaticallyImplyMiddle(Object value) =>
    (value as api.CupertinoNavigationBar).automaticallyImplyMiddle;
Object? _CupertinoNavigationBar_previousPageTitle(Object value) =>
    (value as api.CupertinoNavigationBar).previousPageTitle;
Object? _CupertinoNavigationBar_middle(Object value) =>
    (value as api.CupertinoNavigationBar).middle;
Object? _CupertinoNavigationBar_trailing(Object value) =>
    (value as api.CupertinoNavigationBar).trailing;
Object? _CupertinoNavigationBar_backgroundColor(Object value) =>
    (value as api.CupertinoNavigationBar).backgroundColor;
Object? _CupertinoNavigationBar_automaticBackgroundVisibility(Object value) =>
    (value as api.CupertinoNavigationBar).automaticBackgroundVisibility;
Object? _CupertinoNavigationBar_brightness(Object value) =>
    (value as api.CupertinoNavigationBar).brightness;
Object? _CupertinoNavigationBar_padding(Object value) =>
    (value as api.CupertinoNavigationBar).padding;
Object? _CupertinoNavigationBar_border(Object value) =>
    (value as api.CupertinoNavigationBar).border;
Object? _CupertinoNavigationBar_transitionBetweenRoutes(Object value) =>
    (value as api.CupertinoNavigationBar).transitionBetweenRoutes;
Object? _CupertinoNavigationBar_enableBackgroundFilterBlur(Object value) =>
    (value as api.CupertinoNavigationBar).enableBackgroundFilterBlur;
Object? _CupertinoNavigationBar_heroTag(Object value) =>
    (value as api.CupertinoNavigationBar).heroTag;
Object? _CupertinoNavigationBar_bottom(Object value) =>
    (value as api.CupertinoNavigationBar).bottom;
Object? _CupertinoNavigationBar_key(Object value) =>
    (value as api.CupertinoNavigationBar).key;
Object? _CupertinoNavigationBar_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api4.DiagnosticLevel,
  );
}

Object? _CupertinoNavigationBar_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).toStringDeep(
    minLevel: values["minLevel"] as api4.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _CupertinoNavigationBar_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).toStringShort();
}

Object? _CupertinoNavigationBar_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api4.DiagnosticsTreeStyle?,
  );
}

Object? _CupertinoNavigationBar_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).debugDescribeChildren();
}

Object? _CupertinoNavigationBar_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CupertinoNavigationBar).debugFillProperties(
    values["properties"] as api4.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _CupertinoNavigationBar_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).toString(
    minLevel: values["minLevel"] as api4.DiagnosticLevel,
  );
}

Object? _CupertinoNavigationBar_shouldFullyObstruct(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).shouldFullyObstruct(
    values["context"] as api1.BuildContext,
  );
}

Object? _CupertinoNavigationBar_createState(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).createState();
}

Object? _CupertinoNavigationBar_createElement(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).createElement();
}

api1.Widget _createCupertinoNavigationBar(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      if (!values.containsKey("border")) {
        if (!values.containsKey("heroTag")) {
          return api.CupertinoNavigationBar(
            key: values["key"] as api4.Key?,
            leading: values["leading"] as api1.Widget?,
            automaticallyImplyLeading:
                values["automaticallyImplyLeading"] as bool,
            automaticallyImplyMiddle:
                values["automaticallyImplyMiddle"] as bool,
            previousPageTitle: values["previousPageTitle"] as String?,
            middle: values["middle"] as api1.Widget?,
            trailing: values["trailing"] as api1.Widget?,
            backgroundColor: values["backgroundColor"] as api3.Color?,
            automaticBackgroundVisibility:
                values["automaticBackgroundVisibility"] as bool,
            enableBackgroundFilterBlur:
                values["enableBackgroundFilterBlur"] as bool,
            brightness: values["brightness"] as api3.Brightness?,
            padding: values["padding"] as api2.EdgeInsetsDirectional?,
            transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
            bottom: values["bottom"] as api1.PreferredSizeWidget?,
          );
        }
        return api.CupertinoNavigationBar(
          key: values["key"] as api4.Key?,
          leading: values["leading"] as api1.Widget?,
          automaticallyImplyLeading:
              values["automaticallyImplyLeading"] as bool,
          automaticallyImplyMiddle: values["automaticallyImplyMiddle"] as bool,
          previousPageTitle: values["previousPageTitle"] as String?,
          middle: values["middle"] as api1.Widget?,
          trailing: values["trailing"] as api1.Widget?,
          backgroundColor: values["backgroundColor"] as api3.Color?,
          automaticBackgroundVisibility:
              values["automaticBackgroundVisibility"] as bool,
          enableBackgroundFilterBlur:
              values["enableBackgroundFilterBlur"] as bool,
          brightness: values["brightness"] as api3.Brightness?,
          padding: values["padding"] as api2.EdgeInsetsDirectional?,
          transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
          heroTag: values["heroTag"] as Object,
          bottom: values["bottom"] as api1.PreferredSizeWidget?,
        );
      }
      if (!values.containsKey("heroTag")) {
        return api.CupertinoNavigationBar(
          key: values["key"] as api4.Key?,
          leading: values["leading"] as api1.Widget?,
          automaticallyImplyLeading:
              values["automaticallyImplyLeading"] as bool,
          automaticallyImplyMiddle: values["automaticallyImplyMiddle"] as bool,
          previousPageTitle: values["previousPageTitle"] as String?,
          middle: values["middle"] as api1.Widget?,
          trailing: values["trailing"] as api1.Widget?,
          border: values["border"] as api2.Border?,
          backgroundColor: values["backgroundColor"] as api3.Color?,
          automaticBackgroundVisibility:
              values["automaticBackgroundVisibility"] as bool,
          enableBackgroundFilterBlur:
              values["enableBackgroundFilterBlur"] as bool,
          brightness: values["brightness"] as api3.Brightness?,
          padding: values["padding"] as api2.EdgeInsetsDirectional?,
          transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
          bottom: values["bottom"] as api1.PreferredSizeWidget?,
        );
      }
      return api.CupertinoNavigationBar(
        key: values["key"] as api4.Key?,
        leading: values["leading"] as api1.Widget?,
        automaticallyImplyLeading: values["automaticallyImplyLeading"] as bool,
        automaticallyImplyMiddle: values["automaticallyImplyMiddle"] as bool,
        previousPageTitle: values["previousPageTitle"] as String?,
        middle: values["middle"] as api1.Widget?,
        trailing: values["trailing"] as api1.Widget?,
        border: values["border"] as api2.Border?,
        backgroundColor: values["backgroundColor"] as api3.Color?,
        automaticBackgroundVisibility:
            values["automaticBackgroundVisibility"] as bool,
        enableBackgroundFilterBlur:
            values["enableBackgroundFilterBlur"] as bool,
        brightness: values["brightness"] as api3.Brightness?,
        padding: values["padding"] as api2.EdgeInsetsDirectional?,
        transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
        heroTag: values["heroTag"] as Object,
        bottom: values["bottom"] as api1.PreferredSizeWidget?,
      );
    case "large":
      if (!values.containsKey("border")) {
        if (!values.containsKey("heroTag")) {
          return api.CupertinoNavigationBar.large(
            key: values["key"] as api4.Key?,
            largeTitle: values["largeTitle"] as api1.Widget?,
            leading: values["leading"] as api1.Widget?,
            automaticallyImplyLeading:
                values["automaticallyImplyLeading"] as bool,
            automaticallyImplyTitle: values["automaticallyImplyTitle"] as bool,
            previousPageTitle: values["previousPageTitle"] as String?,
            trailing: values["trailing"] as api1.Widget?,
            backgroundColor: values["backgroundColor"] as api3.Color?,
            automaticBackgroundVisibility:
                values["automaticBackgroundVisibility"] as bool,
            enableBackgroundFilterBlur:
                values["enableBackgroundFilterBlur"] as bool,
            brightness: values["brightness"] as api3.Brightness?,
            padding: values["padding"] as api2.EdgeInsetsDirectional?,
            transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
            bottom: values["bottom"] as api1.PreferredSizeWidget?,
          );
        }
        return api.CupertinoNavigationBar.large(
          key: values["key"] as api4.Key?,
          largeTitle: values["largeTitle"] as api1.Widget?,
          leading: values["leading"] as api1.Widget?,
          automaticallyImplyLeading:
              values["automaticallyImplyLeading"] as bool,
          automaticallyImplyTitle: values["automaticallyImplyTitle"] as bool,
          previousPageTitle: values["previousPageTitle"] as String?,
          trailing: values["trailing"] as api1.Widget?,
          backgroundColor: values["backgroundColor"] as api3.Color?,
          automaticBackgroundVisibility:
              values["automaticBackgroundVisibility"] as bool,
          enableBackgroundFilterBlur:
              values["enableBackgroundFilterBlur"] as bool,
          brightness: values["brightness"] as api3.Brightness?,
          padding: values["padding"] as api2.EdgeInsetsDirectional?,
          transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
          heroTag: values["heroTag"] as Object,
          bottom: values["bottom"] as api1.PreferredSizeWidget?,
        );
      }
      if (!values.containsKey("heroTag")) {
        return api.CupertinoNavigationBar.large(
          key: values["key"] as api4.Key?,
          largeTitle: values["largeTitle"] as api1.Widget?,
          leading: values["leading"] as api1.Widget?,
          automaticallyImplyLeading:
              values["automaticallyImplyLeading"] as bool,
          automaticallyImplyTitle: values["automaticallyImplyTitle"] as bool,
          previousPageTitle: values["previousPageTitle"] as String?,
          trailing: values["trailing"] as api1.Widget?,
          border: values["border"] as api2.Border?,
          backgroundColor: values["backgroundColor"] as api3.Color?,
          automaticBackgroundVisibility:
              values["automaticBackgroundVisibility"] as bool,
          enableBackgroundFilterBlur:
              values["enableBackgroundFilterBlur"] as bool,
          brightness: values["brightness"] as api3.Brightness?,
          padding: values["padding"] as api2.EdgeInsetsDirectional?,
          transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
          bottom: values["bottom"] as api1.PreferredSizeWidget?,
        );
      }
      return api.CupertinoNavigationBar.large(
        key: values["key"] as api4.Key?,
        largeTitle: values["largeTitle"] as api1.Widget?,
        leading: values["leading"] as api1.Widget?,
        automaticallyImplyLeading: values["automaticallyImplyLeading"] as bool,
        automaticallyImplyTitle: values["automaticallyImplyTitle"] as bool,
        previousPageTitle: values["previousPageTitle"] as String?,
        trailing: values["trailing"] as api1.Widget?,
        border: values["border"] as api2.Border?,
        backgroundColor: values["backgroundColor"] as api3.Color?,
        automaticBackgroundVisibility:
            values["automaticBackgroundVisibility"] as bool,
        enableBackgroundFilterBlur:
            values["enableBackgroundFilterBlur"] as bool,
        brightness: values["brightness"] as api3.Brightness?,
        padding: values["padding"] as api2.EdgeInsetsDirectional?,
        transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
        heroTag: values["heroTag"] as Object,
        bottom: values["bottom"] as api1.PreferredSizeWidget?,
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
        key: values["key"] as api4.Key?,
        navigationBar:
            values["navigationBar"] as api.ObstructingPreferredSizeWidget?,
        backgroundColor: values["backgroundColor"] as api3.Color?,
        resizeToAvoidBottomInset: values["resizeToAvoidBottomInset"] as bool,
        child: values["child"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCupertinoThemeData(Object value) => value is api.CupertinoThemeData;
Object? _CupertinoThemeData_primaryColor(Object value) =>
    (value as api.CupertinoThemeData).primaryColor;
Object? _CupertinoThemeData_primaryContrastingColor(Object value) =>
    (value as api.CupertinoThemeData).primaryContrastingColor;
Object? _CupertinoThemeData_barBackgroundColor(Object value) =>
    (value as api.CupertinoThemeData).barBackgroundColor;
Object? _CupertinoThemeData_scaffoldBackgroundColor(Object value) =>
    (value as api.CupertinoThemeData).scaffoldBackgroundColor;
Object? _CupertinoThemeData_selectionHandleColor(Object value) =>
    (value as api.CupertinoThemeData).selectionHandleColor;
Object? _CupertinoThemeData_applyThemeToAll(Object value) =>
    (value as api.CupertinoThemeData).applyThemeToAll;
Object? _CupertinoThemeData_brightness(Object value) =>
    (value as api.CupertinoThemeData).brightness;
Object? _CupertinoThemeData_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoThemeData).toStringShort();
}

Object? _CupertinoThemeData_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoThemeData).toString(
    minLevel: values["minLevel"] as api4.DiagnosticLevel,
  );
}

Object? _CupertinoThemeData_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoThemeData).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api4.DiagnosticsTreeStyle?,
  );
}

Object? _CupertinoThemeData_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CupertinoThemeData).debugFillProperties(
    values["properties"] as api4.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _CupertinoThemeData_resolveFrom(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoThemeData).resolveFrom(
    values["context"] as api1.BuildContext,
  );
}

Object? _CupertinoThemeData_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoThemeData).copyWith(
    applyThemeToAll: values["applyThemeToAll"] as bool?,
    barBackgroundColor: values["barBackgroundColor"] as api3.Color?,
    brightness: values["brightness"] as api3.Brightness?,
    primaryColor: values["primaryColor"] as api3.Color?,
    primaryContrastingColor: values["primaryContrastingColor"] as api3.Color?,
    scaffoldBackgroundColor: values["scaffoldBackgroundColor"] as api3.Color?,
    selectionHandleColor: values["selectionHandleColor"] as api3.Color?,
  );
}

Object _createCupertinoThemeData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.CupertinoThemeData(
        brightness: values["brightness"] as api3.Brightness?,
        primaryColor: values["primaryColor"] as api3.Color?,
        primaryContrastingColor:
            values["primaryContrastingColor"] as api3.Color?,
        barBackgroundColor: values["barBackgroundColor"] as api3.Color?,
        scaffoldBackgroundColor:
            values["scaffoldBackgroundColor"] as api3.Color?,
        selectionHandleColor: values["selectionHandleColor"] as api3.Color?,
        applyThemeToAll: values["applyThemeToAll"] as bool?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isObstructingPreferredSizeWidget(Object value) =>
    value is api.ObstructingPreferredSizeWidget;
Object? _ObstructingPreferredSizeWidget_preferredSize(Object value) =>
    (value as api.ObstructingPreferredSizeWidget).preferredSize;
Object? _ObstructingPreferredSizeWidget_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ObstructingPreferredSizeWidget).toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api4.DiagnosticLevel,
  );
}

Object? _ObstructingPreferredSizeWidget_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ObstructingPreferredSizeWidget).toStringDeep(
    minLevel: values["minLevel"] as api4.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _ObstructingPreferredSizeWidget_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ObstructingPreferredSizeWidget).toStringShort();
}

Object? _ObstructingPreferredSizeWidget_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ObstructingPreferredSizeWidget).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api4.DiagnosticsTreeStyle?,
  );
}

Object? _ObstructingPreferredSizeWidget_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ObstructingPreferredSizeWidget)
      .debugDescribeChildren();
}

Object? _ObstructingPreferredSizeWidget_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ObstructingPreferredSizeWidget).debugFillProperties(
    values["properties"] as api4.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _ObstructingPreferredSizeWidget_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ObstructingPreferredSizeWidget).toString(
    minLevel: values["minLevel"] as api4.DiagnosticLevel,
  );
}

Object? _ObstructingPreferredSizeWidget_shouldFullyObstruct(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ObstructingPreferredSizeWidget).shouldFullyObstruct(
    values["context"] as api1.BuildContext,
  );
}

Object? _ObstructingPreferredSizeWidget_super_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ObstructingPreferredSizeWidgetProxy)
      ._flaxSuper_toStringShallow(
        joiner: values["joiner"] as String,
        minLevel: values["minLevel"] as api4.DiagnosticLevel,
      );
}

Object? _ObstructingPreferredSizeWidget_super_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ObstructingPreferredSizeWidgetProxy)
      ._flaxSuper_toStringDeep(
        minLevel: values["minLevel"] as api4.DiagnosticLevel,
        prefixLineOne: values["prefixLineOne"] as String,
        prefixOtherLines: values["prefixOtherLines"] as String?,
        wrapWidth: values["wrapWidth"] as int,
      );
}

Object? _ObstructingPreferredSizeWidget_super_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ObstructingPreferredSizeWidgetProxy)
      ._flaxSuper_toStringShort();
}

Object? _ObstructingPreferredSizeWidget_super_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ObstructingPreferredSizeWidgetProxy)
      ._flaxSuper_toDiagnosticsNode(
        name: values["name"] as String?,
        style: values["style"] as api4.DiagnosticsTreeStyle?,
      );
}

Object? _ObstructingPreferredSizeWidget_super_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ObstructingPreferredSizeWidgetProxy)
      ._flaxSuper_debugDescribeChildren();
}

Object? _ObstructingPreferredSizeWidget_super_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ObstructingPreferredSizeWidgetProxy)
      ._flaxSuper_debugFillProperties(
        values["properties"] as api4.DiagnosticPropertiesBuilder,
      );
  return null;
}

Object? _ObstructingPreferredSizeWidget_super_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ObstructingPreferredSizeWidgetProxy)._flaxSuper_toString(
    minLevel: values["minLevel"] as api4.DiagnosticLevel,
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
        key: values["key"] as api4.Key?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _ObstructingPreferredSizeWidgetProxy extends api1.StatelessWidget
    with FlaxWidgetProxy
    implements api.ObstructingPreferredSizeWidget {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _ObstructingPreferredSizeWidgetProxy(this._flaxPeer, {api4.Key? super.key});
  @override
  String toStringShallow({
    Object? joiner = _flaxOmitted,
    Object? minLevel = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{
      if (!identical(joiner, _flaxOmitted)) "joiner": joiner,
      if (!identical(minLevel, _flaxOmitted)) "minLevel": minLevel,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toStringShallow(joiner: joiner, minLevel: minLevel);
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_toStringShallow({
    Object? joiner = _flaxOmitted,
    Object? minLevel = _flaxOmitted,
  }) {
    if (identical(joiner, _flaxOmitted)) {
      if (identical(minLevel, _flaxOmitted)) {
        return super.toStringShallow();
      }
      return super.toStringShallow(minLevel: minLevel as api4.DiagnosticLevel);
    }
    if (identical(minLevel, _flaxOmitted)) {
      return super.toStringShallow(joiner: joiner as String);
    }
    return super.toStringShallow(
      joiner: joiner as String,
      minLevel: minLevel as api4.DiagnosticLevel,
    );
  }

  @override
  String toStringDeep({
    Object? prefixLineOne = _flaxOmitted,
    Object? prefixOtherLines = _flaxOmitted,
    Object? minLevel = _flaxOmitted,
    Object? wrapWidth = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{
      if (!identical(prefixLineOne, _flaxOmitted))
        "prefixLineOne": prefixLineOne,
      if (!identical(prefixOtherLines, _flaxOmitted))
        "prefixOtherLines": prefixOtherLines,
      if (!identical(minLevel, _flaxOmitted)) "minLevel": minLevel,
      if (!identical(wrapWidth, _flaxOmitted)) "wrapWidth": wrapWidth,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toStringDeep(
        prefixLineOne: prefixLineOne,
        prefixOtherLines: prefixOtherLines,
        minLevel: minLevel,
        wrapWidth: wrapWidth,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_toStringDeep({
    Object? prefixLineOne = _flaxOmitted,
    Object? prefixOtherLines = _flaxOmitted,
    Object? minLevel = _flaxOmitted,
    Object? wrapWidth = _flaxOmitted,
  }) {
    if (identical(prefixLineOne, _flaxOmitted)) {
      if (identical(prefixOtherLines, _flaxOmitted)) {
        if (identical(minLevel, _flaxOmitted)) {
          if (identical(wrapWidth, _flaxOmitted)) {
            return super.toStringDeep();
          }
          return super.toStringDeep(wrapWidth: wrapWidth as int);
        }
        if (identical(wrapWidth, _flaxOmitted)) {
          return super.toStringDeep(minLevel: minLevel as api4.DiagnosticLevel);
        }
        return super.toStringDeep(
          minLevel: minLevel as api4.DiagnosticLevel,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(minLevel, _flaxOmitted)) {
        if (identical(wrapWidth, _flaxOmitted)) {
          return super.toStringDeep(
            prefixOtherLines: prefixOtherLines as String?,
          );
        }
        return super.toStringDeep(
          prefixOtherLines: prefixOtherLines as String?,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(wrapWidth, _flaxOmitted)) {
        return super.toStringDeep(
          prefixOtherLines: prefixOtherLines as String?,
          minLevel: minLevel as api4.DiagnosticLevel,
        );
      }
      return super.toStringDeep(
        prefixOtherLines: prefixOtherLines as String?,
        minLevel: minLevel as api4.DiagnosticLevel,
        wrapWidth: wrapWidth as int,
      );
    }
    if (identical(prefixOtherLines, _flaxOmitted)) {
      if (identical(minLevel, _flaxOmitted)) {
        if (identical(wrapWidth, _flaxOmitted)) {
          return super.toStringDeep(prefixLineOne: prefixLineOne as String);
        }
        return super.toStringDeep(
          prefixLineOne: prefixLineOne as String,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(wrapWidth, _flaxOmitted)) {
        return super.toStringDeep(
          prefixLineOne: prefixLineOne as String,
          minLevel: minLevel as api4.DiagnosticLevel,
        );
      }
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        minLevel: minLevel as api4.DiagnosticLevel,
        wrapWidth: wrapWidth as int,
      );
    }
    if (identical(minLevel, _flaxOmitted)) {
      if (identical(wrapWidth, _flaxOmitted)) {
        return super.toStringDeep(
          prefixLineOne: prefixLineOne as String,
          prefixOtherLines: prefixOtherLines as String?,
        );
      }
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        prefixOtherLines: prefixOtherLines as String?,
        wrapWidth: wrapWidth as int,
      );
    }
    if (identical(wrapWidth, _flaxOmitted)) {
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        prefixOtherLines: prefixOtherLines as String?,
        minLevel: minLevel as api4.DiagnosticLevel,
      );
    }
    return super.toStringDeep(
      prefixLineOne: prefixLineOne as String,
      prefixOtherLines: prefixOtherLines as String?,
      minLevel: minLevel as api4.DiagnosticLevel,
      wrapWidth: wrapWidth as int,
    );
  }

  @override
  String toStringShort() {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_toStringShort();
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_toStringShort() {
    return super.toStringShort();
  }

  @override
  api4.DiagnosticsNode toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[], <String, Object?>{
      if (!identical(name, _flaxOmitted)) "name": name,
      if (!identical(style, _flaxOmitted)) "style": style,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toDiagnosticsNode(name: name, style: style);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api4.DiagnosticsNode;
    return _flaxConvertedResult;
  }

  api4.DiagnosticsNode _flaxSuper_toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    if (identical(name, _flaxOmitted)) {
      if (identical(style, _flaxOmitted)) {
        return super.toDiagnosticsNode();
      }
      return super.toDiagnosticsNode(
        style: style as api4.DiagnosticsTreeStyle?,
      );
    }
    if (identical(style, _flaxOmitted)) {
      return super.toDiagnosticsNode(name: name as String?);
    }
    return super.toDiagnosticsNode(
      name: name as String?,
      style: style as api4.DiagnosticsTreeStyle?,
    );
  }

  @override
  List<api4.DiagnosticsNode> debugDescribeChildren() {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_debugDescribeChildren();
    }
    final _flaxConvertedResult = _flaxResult.$2 as List<api4.DiagnosticsNode>;
    return _flaxConvertedResult;
  }

  List<api4.DiagnosticsNode> _flaxSuper_debugDescribeChildren() {
    return super.debugDescribeChildren();
  }

  @override
  // ignore: must_call_super
  void debugFillProperties(api4.DiagnosticPropertiesBuilder properties) {
    if (!_flaxPeer.active) return;
    final _flaxPreviousSuperMember = _flaxActiveSuperMember;
    final _flaxPreviousCalledSuper = _flaxCalledSuper;
    _flaxActiveSuperMember = "debugFillProperties";
    _flaxCalledSuper = false;
    try {
      final _flaxResult = _flaxPeer.call(5, <Object?>[
        properties,
      ], <String, Object?>{});
      if (!_flaxResult.$1) {
        _flaxSuper_debugFillProperties(properties);
        return;
      }
      if (!(_flaxCalledSuper))
        throw StateError(
          "debugFillProperties must call super.debugFillProperties()",
        );
      return;
    } finally {
      _flaxActiveSuperMember = _flaxPreviousSuperMember;
      _flaxCalledSuper = _flaxPreviousCalledSuper;
    }
  }

  void _flaxSuper_debugFillProperties(
    api4.DiagnosticPropertiesBuilder properties,
  ) {
    if (_flaxActiveSuperMember == "debugFillProperties")
      _flaxCalledSuper = true;
    super.debugFillProperties(properties);
    return;
  }

  @override
  String toString({Object? minLevel = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(6, <Object?>[], <String, Object?>{
      if (!identical(minLevel, _flaxOmitted)) "minLevel": minLevel,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toString(minLevel: minLevel);
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_toString({Object? minLevel = _flaxOmitted}) {
    if (identical(minLevel, _flaxOmitted)) {
      return super.toString();
    }
    return super.toString(minLevel: minLevel as api4.DiagnosticLevel);
  }

  @override
  bool shouldFullyObstruct(api1.BuildContext context) {
    final _flaxResult = _flaxPeer.call(7, <Object?>[
      context,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: shouldFullyObstruct');
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  @override
  api1.Widget build(api1.BuildContext context) {
    final _flaxResult = _flaxPeer.call(8, <Object?>[
      context,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: build');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Widget;
    return _flaxConvertedResult;
  }

  @override
  api3.Size get preferredSize {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as api3.Size;
    return _flaxConvertedResult;
  }
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[1,1,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[2,2,[],[]]]", _flaxShape1),
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape2),
];
Function _flaxShape0<_Shape0, _Shape1>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape1 Function(_Shape0 p0)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "p0",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Shape1>(withinCallback: true),
            FlaxCallbackAdapters.wrap1<_Shape0, _Shape1>,
            id:
                types.key<_Shape1 Function(_Shape0 p0)>() +
                ":callback:<>(p:r:p0:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke1<_Shape0, _Shape1>,
            matches: FlaxCallbackAdapters.matches1<_Shape0, _Shape1>,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape1<_Shape0, _Shape1, _Shape2>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape2 Function(_Shape0 context, _Shape1 child)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "context",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "child",
                types.ref<_Shape1>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Shape2>(withinCallback: true),
            FlaxCallbackAdapters.wrap2<_Shape0, _Shape1, _Shape2>,
            id: types.key<_Shape2 Function(_Shape0 context, _Shape1 child)>() + ":callback:<>(p:r:context:parameter:,p:r:child:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke2<_Shape0, _Shape1, _Shape2>,
            matches: FlaxCallbackAdapters.matches2<_Shape0, _Shape1, _Shape2>,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape2<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
  return types.define<_Shape0 Function()>(
    FlaxTypeRef(
      "callback",
      nullable: false,
      callback: FlaxCallbackBinding(
        [],
        types.ref<_Shape0>(withinCallback: true),
        FlaxCallbackAdapters.wrap0<_Shape0>,
        id: types.key<_Shape0 Function()>() + ":callback:<>()->parameter:",
        invoke: FlaxCallbackAdapters.invoke0<_Shape0>,
        matches: FlaxCallbackAdapters.matches0<_Shape0>,
      ),
    ),
    withinCallback: withinCallback,
  );
};
Object _collection0Create() =>
    <String, api1.Widget Function(api1.BuildContext p0)>{};
bool _collection0Matches(Object value) =>
    value is Map<String, api1.Widget Function(api1.BuildContext p0)>;
Object _collection1Create() => <api1.Route<Object?>>[];
bool _collection1Matches(Object value) => value is List<api1.Route<Object?>>;
Object _collection2Create() => <api1.Route<Object?>>[];
Object _collection2Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.Route<Object?>>();
bool _collection2Matches(Object value) =>
    value is Iterable<api1.Route<Object?>>;
Object _collection3Create() => <api1.NavigatorObserver>[];
bool _collection3Matches(Object value) => value is List<api1.NavigatorObserver>;
Object _collection4Create() => <api1.NavigatorObserver>[];
Object _collection4Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.NavigatorObserver>();
bool _collection4Matches(Object value) =>
    value is Iterable<api1.NavigatorObserver>;
Object _collection5Create() => <api1.LocalizationsDelegate<Object?>>[];
Object _collection5Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.LocalizationsDelegate<Object?>>();
bool _collection5Matches(Object value) =>
    value is Iterable<api1.LocalizationsDelegate<Object?>>;
Object _collection6Create() => <api3.Locale>[];
bool _collection6Matches(Object value) => value is List<api3.Locale>;
Object _collection7Create() => <api3.Locale>[];
Object _collection7Restore(Object value) =>
    (value as Iterable<Object?>).cast<api3.Locale>();
bool _collection7Matches(Object value) => value is Iterable<api3.Locale>;
Object _collection8Create() => <api1.ShortcutActivator, api1.Intent>{};
bool _collection8Matches(Object value) =>
    value is Map<api1.ShortcutActivator, api1.Intent>;
Object _collection9Create() => <api6.Type, api1.Action<api1.Intent>>{};
bool _collection9Matches(Object value) =>
    value is Map<api6.Type, api1.Action<api1.Intent>>;
Object _collection10Create() => <api4.DiagnosticsNode>[];
bool _collection10Matches(Object value) => value is List<api4.DiagnosticsNode>;
Object _collection11Create() => <api4.DiagnosticsNode>[];
Object _collection11Restore(Object value) =>
    (value as Iterable<Object?>).cast<api4.DiagnosticsNode>();
bool _collection11Matches(Object value) =>
    value is Iterable<api4.DiagnosticsNode>;
const _flaxBinding0 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Key",
  nullable: true,
);
const _flaxBinding1 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:GlobalKey",
  dartType: FlaxDartTypes.typeOf<api1.GlobalKey<api1.NavigatorState>?>,
  nullable: true,
);
const _flaxBinding2 = FlaxTypeRef("widget", nullable: true);
const _flaxBinding3 = FlaxTypeRef(
  "object",
  id: "flax.cupertino/cupertino#type:CupertinoThemeData",
  nullable: true,
);
const _flaxBinding4 = FlaxTypeRef(
  "context",
  id: "flax.core/flutter#type:BuildContext",
);
const _flaxBinding5 = FlaxTypeRef("widget");
const _flaxBinding6 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "p0",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding5,
  FlaxCallbackAdapters.wrap1<api1.BuildContext, api1.Widget>,
  id: "callback:<>(p:r:p0:context:flax.core/flutter#type:BuildContext)->widget:",
  invoke: FlaxCallbackAdapters.invoke1<api1.BuildContext, api1.Widget>,
  matches: FlaxCallbackAdapters.matches1<api1.BuildContext, api1.Widget>,
);
const _flaxBinding7 = FlaxTypeRef("callback", callback: _flaxBinding6);
const _flaxBinding8 = FlaxTypeRef("String");
const _flaxBinding9 = FlaxTypeRef(
  "map",
  item: _flaxBinding7,
  key: _flaxBinding8,
  collection: FlaxCollectionBinding(
    "map:[callback:<>(p:r:p0:context:flax.core/flutter#type:BuildContext)->widget:][String:]",
    _collection0Create,
    _collection0Matches,
  ),
);
const _flaxBinding10 = FlaxTypeRef("String", nullable: true);
const _flaxBinding11 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:RouteSettings",
);
const _flaxBinding12 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Route",
  dartType: FlaxDartTypes.typeOf<api1.Route<Object?>?>,
  nullable: true,
);
const _flaxBinding13 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "settings",
      _flaxBinding11,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding12,
  FlaxCallbackAdapters.wrap1<api1.RouteSettings, api1.Route<Object?>?>,
  id: "callback:<>(p:r:settings:object:flax.core/flutter#type:RouteSettings)->object?:flax.core/flutter#type:Route<Object?><any?:>",
  invoke:
      FlaxCallbackAdapters.invoke1<api1.RouteSettings, api1.Route<Object?>?>,
  matches:
      FlaxCallbackAdapters.matches1<api1.RouteSettings, api1.Route<Object?>?>,
);
const _flaxBinding14 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding13,
);
const _flaxBinding15 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Route",
  dartType: FlaxDartTypes.typeOf<api1.Route<Object?>>,
);
const _flaxBinding16 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding15,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:Route<Object?><any?:>]",
    _collection2Create,
    _collection2Matches,
    restore: _collection2Restore,
  ),
);
const _flaxBinding17 = FlaxTypeRef(
  "list",
  item: _flaxBinding15,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Route<Object?><any?:>]",
    _collection1Create,
    _collection1Matches,
  ),
  iterable: _flaxBinding16,
);
const _flaxBinding18 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "initialRoute",
      _flaxBinding8,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding17,
  FlaxCallbackAdapters.wrap1<String, List<api1.Route<Object?>>>,
  id: "callback:<>(p:r:initialRoute:String:)->list:[object:flax.core/flutter#type:Route<Object?><any?:>]",
  invoke: FlaxCallbackAdapters.invoke1<String, List<api1.Route<Object?>>>,
  matches: FlaxCallbackAdapters.matches1<String, List<api1.Route<Object?>>>,
);
const _flaxBinding19 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding18,
);
const _flaxBinding20 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:NavigationNotification",
);
const _flaxBinding21 = FlaxTypeRef("bool");
const _flaxBinding22 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "notification",
      _flaxBinding20,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding21,
  FlaxCallbackAdapters.wrap1<api1.NavigationNotification, bool>,
  id: "callback:<>(p:r:notification:object:flax.core/sdk_widgets#type:NavigationNotification)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api1.NavigationNotification, bool>,
  matches: FlaxCallbackAdapters.matches1<api1.NavigationNotification, bool>,
);
const _flaxBinding23 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding22,
);
const _flaxBinding24 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:NavigatorObserver",
);
const _flaxBinding25 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding24,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:NavigatorObserver]",
    _collection4Create,
    _collection4Matches,
    restore: _collection4Restore,
  ),
);
const _flaxBinding26 = FlaxTypeRef(
  "list",
  item: _flaxBinding24,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:NavigatorObserver]",
    _collection3Create,
    _collection3Matches,
  ),
  iterable: _flaxBinding25,
);
const _flaxBinding27 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "child",
      _flaxBinding2,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding5,
  FlaxCallbackAdapters.wrap2<api1.BuildContext, api1.Widget?, api1.Widget>,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:child:widget?:)->widget:",
  invoke: FlaxCallbackAdapters
      .invoke2<api1.BuildContext, api1.Widget?, api1.Widget>,
  matches: FlaxCallbackAdapters
      .matches2<api1.BuildContext, api1.Widget?, api1.Widget>,
  independentWidgetResult: true,
);
const _flaxBinding28 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding27,
);
const _flaxBinding29 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding8,
  FlaxCallbackAdapters.wrap1<api1.BuildContext, String>,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->String:",
  invoke: FlaxCallbackAdapters.invoke1<api1.BuildContext, String>,
  matches: FlaxCallbackAdapters.matches1<api1.BuildContext, String>,
);
const _flaxBinding30 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding29,
);
const _flaxBinding31 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Color",
  nullable: true,
);
const _flaxBinding32 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
  nullable: true,
);
const _flaxBinding33 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:LocalizationsDelegate",
  dartType: FlaxDartTypes.typeOf<api1.LocalizationsDelegate<Object?>>,
);
const _flaxBinding34 = FlaxTypeRef(
  "iterable",
  nullable: true,
  item: _flaxBinding33,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_widgets#type:LocalizationsDelegate<Object?><any?:>]",
    _collection5Create,
    _collection5Matches,
    restore: _collection5Restore,
  ),
);
const _flaxBinding35 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding36 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding35,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection7Create,
    _collection7Matches,
    restore: _collection7Restore,
  ),
);
const _flaxBinding37 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding35,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection6Create,
    _collection6Matches,
  ),
  iterable: _flaxBinding36,
);
const _flaxBinding38 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "locales",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "supportedLocales",
      _flaxBinding36,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding32,
  FlaxCallbackAdapters
      .wrap2<List<api3.Locale>?, Iterable<api3.Locale>, api3.Locale?>,
  id: "callback:<>(p:r:locales:list?:[object:flax.core/sdk_dart_ui#type:Locale],p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
  invoke: FlaxCallbackAdapters
      .invoke2<List<api3.Locale>?, Iterable<api3.Locale>, api3.Locale?>,
  matches: FlaxCallbackAdapters
      .matches2<List<api3.Locale>?, Iterable<api3.Locale>, api3.Locale?>,
);
const _flaxBinding39 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding38,
);
const _flaxBinding40 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "locale",
      _flaxBinding32,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "supportedLocales",
      _flaxBinding36,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding32,
  FlaxCallbackAdapters.wrap2<api3.Locale?, Iterable<api3.Locale>, api3.Locale?>,
  id: "callback:<>(p:r:locale:object?:flax.core/sdk_dart_ui#type:Locale,p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
  invoke: FlaxCallbackAdapters
      .invoke2<api3.Locale?, Iterable<api3.Locale>, api3.Locale?>,
  matches: FlaxCallbackAdapters
      .matches2<api3.Locale?, Iterable<api3.Locale>, api3.Locale?>,
);
const _flaxBinding41 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding40,
);
const _flaxBinding42 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:Intent",
);
const _flaxBinding43 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ShortcutActivator",
);
const _flaxBinding44 = FlaxTypeRef(
  "map",
  nullable: true,
  item: _flaxBinding42,
  key: _flaxBinding43,
  collection: FlaxCollectionBinding(
    "map:[object:flax.core/sdk_widgets#type:Intent][object:flax.core/sdk_widgets#type:ShortcutActivator]",
    _collection8Create,
    _collection8Matches,
  ),
);
const _flaxBinding45 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:Action",
  dartType: FlaxDartTypes.typeOf<api1.Action<api1.Intent>>,
);
const _flaxBinding46 = FlaxTypeRef("object", id: "flax.core/flutter#type:Type");
const _flaxBinding47 = FlaxTypeRef(
  "map",
  nullable: true,
  item: _flaxBinding45,
  key: _flaxBinding46,
  collection: FlaxCollectionBinding(
    "map:[object:flax.core/sdk_widgets#type:Action<Intent><object:flax.core/sdk_widgets#type:Intent>][object:flax.core/flutter#type:Type]",
    _collection9Create,
    _collection9Matches,
  ),
);
const _flaxBinding48 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ScrollBehavior",
  nullable: true,
);
const _flaxBinding49 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouteInformationProvider",
  nullable: true,
);
const _flaxBinding50 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouteInformationParser",
  dartType: FlaxDartTypes.typeOf<api1.RouteInformationParser<Object>?>,
  nullable: true,
);
const _flaxBinding51 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouterDelegate",
  dartType: FlaxDartTypes.typeOf<api1.RouterDelegate<Object>?>,
  nullable: true,
);
const _flaxBinding52 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:BackButtonDispatcher",
  nullable: true,
);
const _flaxBinding53 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouterConfig",
  dartType: FlaxDartTypes.typeOf<api1.RouterConfig<Object>?>,
  nullable: true,
);
const _flaxBinding54 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EdgeInsetsGeometry",
  nullable: true,
);
const _flaxBinding55 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Color",
);
const _flaxBinding56 = FlaxTypeRef("double", nullable: true);
const _flaxBinding57 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Size",
  nullable: true,
);
const _flaxBinding58 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BorderRadius",
  nullable: true,
);
const _flaxBinding59 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:AlignmentGeometry",
);
const _flaxBinding60 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:FocusNode",
  nullable: true,
);
const _flaxBinding61 = FlaxTypeRef("void");
const _flaxBinding62 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding21,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding61,
  FlaxCallbackAdapters.wrapVoid1<bool>,
  id: "callback:<>(p:r:value:bool:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<bool>,
  matches: FlaxCallbackAdapters.matchesVoid1<bool>,
);
const _flaxBinding63 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding62,
);
const _flaxBinding64 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:MouseCursor",
  nullable: true,
);
const _flaxBinding65 = FlaxCallbackBinding(
  [],
  _flaxBinding61,
  FlaxCallbackAdapters.wrapVoid0,
  id: "callback:<>()->void:",
  invoke: FlaxCallbackAdapters.invokeVoid0,
  matches: FlaxCallbackAdapters.matchesVoid0,
);
const _flaxBinding66 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding65,
);
const _flaxBinding67 = FlaxTypeRef("object", id: "flax.core/flutter#type:Size");
const _flaxBinding68 = FlaxGetter(
  "preferredSize",
  _flaxBinding67,
  _CupertinoNavigationBar_preferredSize,
);
const _flaxBinding69 = FlaxGetter(
  "largeTitle",
  _flaxBinding2,
  _CupertinoNavigationBar_largeTitle,
);
const _flaxBinding70 = FlaxGetter(
  "leading",
  _flaxBinding2,
  _CupertinoNavigationBar_leading,
);
const _flaxBinding71 = FlaxGetter(
  "automaticallyImplyLeading",
  _flaxBinding21,
  _CupertinoNavigationBar_automaticallyImplyLeading,
);
const _flaxBinding72 = FlaxGetter(
  "automaticallyImplyMiddle",
  _flaxBinding21,
  _CupertinoNavigationBar_automaticallyImplyMiddle,
);
const _flaxBinding73 = FlaxGetter(
  "previousPageTitle",
  _flaxBinding10,
  _CupertinoNavigationBar_previousPageTitle,
);
const _flaxBinding74 = FlaxGetter(
  "middle",
  _flaxBinding2,
  _CupertinoNavigationBar_middle,
);
const _flaxBinding75 = FlaxGetter(
  "trailing",
  _flaxBinding2,
  _CupertinoNavigationBar_trailing,
);
const _flaxBinding76 = FlaxGetter(
  "backgroundColor",
  _flaxBinding31,
  _CupertinoNavigationBar_backgroundColor,
);
const _flaxBinding77 = FlaxGetter(
  "automaticBackgroundVisibility",
  _flaxBinding21,
  _CupertinoNavigationBar_automaticBackgroundVisibility,
);
const _flaxBinding78 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Brightness",
  nullable: true,
);
const _flaxBinding79 = FlaxGetter(
  "brightness",
  _flaxBinding78,
  _CupertinoNavigationBar_brightness,
);
const _flaxBinding80 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EdgeInsetsDirectional",
  nullable: true,
);
const _flaxBinding81 = FlaxGetter(
  "padding",
  _flaxBinding80,
  _CupertinoNavigationBar_padding,
);
const _flaxBinding82 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Border",
  nullable: true,
);
const _flaxBinding83 = FlaxGetter(
  "border",
  _flaxBinding82,
  _CupertinoNavigationBar_border,
);
const _flaxBinding84 = FlaxGetter(
  "transitionBetweenRoutes",
  _flaxBinding21,
  _CupertinoNavigationBar_transitionBetweenRoutes,
);
const _flaxBinding85 = FlaxGetter(
  "enableBackgroundFilterBlur",
  _flaxBinding21,
  _CupertinoNavigationBar_enableBackgroundFilterBlur,
);
const _flaxBinding86 = FlaxTypeRef("any");
const _flaxBinding87 = FlaxGetter(
  "heroTag",
  _flaxBinding86,
  _CupertinoNavigationBar_heroTag,
);
const _flaxBinding88 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:PreferredSizeWidget",
  nullable: true,
);
const _flaxBinding89 = FlaxGetter(
  "bottom",
  _flaxBinding88,
  _CupertinoNavigationBar_bottom,
);
const _flaxBinding90 = FlaxGetter(
  "key",
  _flaxBinding0,
  _CupertinoNavigationBar_key,
);
const _flaxBinding91 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding92 = <FlaxParameter>[
  FlaxParameter("joiner", _flaxBinding8, required: false, defaultValue: ', '),
  FlaxParameter(
    "minLevel",
    _flaxBinding91,
    required: false,
    defaultValue: api4.DiagnosticLevel.debug,
  ),
];
const _flaxBinding93 = FlaxInstanceMethod(
  _flaxBinding92,
  _flaxBinding8,
  _CupertinoNavigationBar_toStringShallow,
);
const _flaxBinding94 = FlaxTypeRef("int");
const _flaxBinding95 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding91,
    required: false,
    defaultValue: api4.DiagnosticLevel.debug,
  ),
  FlaxParameter(
    "prefixLineOne",
    _flaxBinding8,
    required: false,
    defaultValue: '',
  ),
  FlaxParameter("prefixOtherLines", _flaxBinding10, required: false),
  FlaxParameter("wrapWidth", _flaxBinding94, required: false, defaultValue: 65),
];
const _flaxBinding96 = FlaxInstanceMethod(
  _flaxBinding95,
  _flaxBinding8,
  _CupertinoNavigationBar_toStringDeep,
);
const _flaxBinding97 = <FlaxParameter>[];
const _flaxBinding98 = FlaxInstanceMethod(
  _flaxBinding97,
  _flaxBinding8,
  _CupertinoNavigationBar_toStringShort,
);
const _flaxBinding99 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
  nullable: true,
);
const _flaxBinding100 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding10, required: false),
  FlaxParameter("style", _flaxBinding99, required: false),
];
const _flaxBinding101 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding102 = FlaxInstanceMethod(
  _flaxBinding100,
  _flaxBinding101,
  _CupertinoNavigationBar_toDiagnosticsNode,
);
const _flaxBinding103 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding101,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection11Create,
    _collection11Matches,
    restore: _collection11Restore,
  ),
);
const _flaxBinding104 = FlaxTypeRef(
  "list",
  item: _flaxBinding101,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection10Create,
    _collection10Matches,
  ),
  iterable: _flaxBinding103,
);
const _flaxBinding105 = FlaxInstanceMethod(
  _flaxBinding97,
  _flaxBinding104,
  _CupertinoNavigationBar_debugDescribeChildren,
);
const _flaxBinding106 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder",
);
const _flaxBinding107 = <FlaxParameter>[
  FlaxParameter("properties", _flaxBinding106, required: true),
];
const _flaxBinding108 = FlaxInstanceMethod(
  _flaxBinding107,
  _flaxBinding61,
  _CupertinoNavigationBar_debugFillProperties,
);
const _flaxBinding109 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding91,
    required: false,
    defaultValue: api4.DiagnosticLevel.info,
  ),
];
const _flaxBinding110 = FlaxInstanceMethod(
  _flaxBinding109,
  _flaxBinding8,
  _CupertinoNavigationBar_toString,
);
const _flaxBinding111 = <FlaxParameter>[
  FlaxParameter("context", _flaxBinding4, required: true),
];
const _flaxBinding112 = FlaxInstanceMethod(
  _flaxBinding111,
  _flaxBinding21,
  _CupertinoNavigationBar_shouldFullyObstruct,
);
const _flaxBinding113 = FlaxTypeRef(
  "state",
  id: "flax.core/components#type:State",
  dartType: FlaxDartTypes.typeOf<api1.State<api.CupertinoNavigationBar>>,
);
const _flaxBinding114 = FlaxInstanceMethod(
  _flaxBinding97,
  _flaxBinding113,
  _CupertinoNavigationBar_createState,
);
const _flaxBinding115 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:StatefulElement",
);
const _flaxBinding116 = FlaxInstanceMethod(
  _flaxBinding97,
  _flaxBinding115,
  _CupertinoNavigationBar_createElement,
);
const _flaxBinding117 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding0, required: false),
  FlaxParameter("leading", _flaxBinding2, required: false),
  FlaxParameter(
    "automaticallyImplyLeading",
    _flaxBinding21,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "automaticallyImplyMiddle",
    _flaxBinding21,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("previousPageTitle", _flaxBinding10, required: false),
  FlaxParameter("middle", _flaxBinding2, required: false),
  FlaxParameter("trailing", _flaxBinding2, required: false),
  FlaxParameter(
    "border",
    _flaxBinding82,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("backgroundColor", _flaxBinding31, required: false),
  FlaxParameter(
    "automaticBackgroundVisibility",
    _flaxBinding21,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "enableBackgroundFilterBlur",
    _flaxBinding21,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("brightness", _flaxBinding78, required: false),
  FlaxParameter("padding", _flaxBinding80, required: false),
  FlaxParameter(
    "transitionBetweenRoutes",
    _flaxBinding21,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "heroTag",
    _flaxBinding86,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("bottom", _flaxBinding88, required: false),
];
const _flaxBinding118 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding0, required: false),
  FlaxParameter("largeTitle", _flaxBinding2, required: false),
  FlaxParameter("leading", _flaxBinding2, required: false),
  FlaxParameter(
    "automaticallyImplyLeading",
    _flaxBinding21,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "automaticallyImplyTitle",
    _flaxBinding21,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("previousPageTitle", _flaxBinding10, required: false),
  FlaxParameter("trailing", _flaxBinding2, required: false),
  FlaxParameter(
    "border",
    _flaxBinding82,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("backgroundColor", _flaxBinding31, required: false),
  FlaxParameter(
    "automaticBackgroundVisibility",
    _flaxBinding21,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "enableBackgroundFilterBlur",
    _flaxBinding21,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("brightness", _flaxBinding78, required: false),
  FlaxParameter("padding", _flaxBinding80, required: false),
  FlaxParameter(
    "transitionBetweenRoutes",
    _flaxBinding21,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "heroTag",
    _flaxBinding86,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("bottom", _flaxBinding88, required: false),
];
const _flaxBinding119 = FlaxTypeRef(
  "object",
  id: "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
  nullable: true,
);
const _flaxBinding120 = FlaxGetter(
  "primaryColor",
  _flaxBinding55,
  _CupertinoThemeData_primaryColor,
);
const _flaxBinding121 = FlaxGetter(
  "primaryContrastingColor",
  _flaxBinding55,
  _CupertinoThemeData_primaryContrastingColor,
);
const _flaxBinding122 = FlaxGetter(
  "barBackgroundColor",
  _flaxBinding55,
  _CupertinoThemeData_barBackgroundColor,
);
const _flaxBinding123 = FlaxGetter(
  "scaffoldBackgroundColor",
  _flaxBinding55,
  _CupertinoThemeData_scaffoldBackgroundColor,
);
const _flaxBinding124 = FlaxGetter(
  "selectionHandleColor",
  _flaxBinding55,
  _CupertinoThemeData_selectionHandleColor,
);
const _flaxBinding125 = FlaxGetter(
  "applyThemeToAll",
  _flaxBinding21,
  _CupertinoThemeData_applyThemeToAll,
);
const _flaxBinding126 = FlaxGetter(
  "brightness",
  _flaxBinding78,
  _CupertinoThemeData_brightness,
);
const _flaxBinding127 = FlaxInstanceMethod(
  _flaxBinding97,
  _flaxBinding8,
  _CupertinoThemeData_toStringShort,
);
const _flaxBinding128 = FlaxInstanceMethod(
  _flaxBinding109,
  _flaxBinding8,
  _CupertinoThemeData_toString,
);
const _flaxBinding129 = FlaxInstanceMethod(
  _flaxBinding100,
  _flaxBinding101,
  _CupertinoThemeData_toDiagnosticsNode,
);
const _flaxBinding130 = FlaxInstanceMethod(
  _flaxBinding107,
  _flaxBinding61,
  _CupertinoThemeData_debugFillProperties,
);
const _flaxBinding131 = FlaxTypeRef(
  "object",
  id: "flax.cupertino/cupertino#type:CupertinoThemeData",
);
const _flaxBinding132 = FlaxInstanceMethod(
  _flaxBinding111,
  _flaxBinding131,
  _CupertinoThemeData_resolveFrom,
);
const _flaxBinding133 = FlaxTypeRef("bool", nullable: true);
const _flaxBinding134 = <FlaxParameter>[
  FlaxParameter("applyThemeToAll", _flaxBinding133, required: false),
  FlaxParameter("barBackgroundColor", _flaxBinding31, required: false),
  FlaxParameter("brightness", _flaxBinding78, required: false),
  FlaxParameter("primaryColor", _flaxBinding31, required: false),
  FlaxParameter("primaryContrastingColor", _flaxBinding31, required: false),
  FlaxParameter("scaffoldBackgroundColor", _flaxBinding31, required: false),
  FlaxParameter("selectionHandleColor", _flaxBinding31, required: false),
];
const _flaxBinding135 = FlaxInstanceMethod(
  _flaxBinding134,
  _flaxBinding131,
  _CupertinoThemeData_copyWith,
);
const _flaxBinding136 = <FlaxParameter>[
  FlaxParameter("brightness", _flaxBinding78, required: false),
  FlaxParameter("primaryColor", _flaxBinding31, required: false),
  FlaxParameter("primaryContrastingColor", _flaxBinding31, required: false),
  FlaxParameter("barBackgroundColor", _flaxBinding31, required: false),
  FlaxParameter("scaffoldBackgroundColor", _flaxBinding31, required: false),
  FlaxParameter("selectionHandleColor", _flaxBinding31, required: false),
  FlaxParameter("applyThemeToAll", _flaxBinding133, required: false),
];
const _flaxBinding137 = FlaxObjectBinding(
  "flax.cupertino/cupertino#type:CupertinoThemeData",
  [
    _flaxBinding120,
    _flaxBinding121,
    _flaxBinding122,
    _flaxBinding123,
    _flaxBinding124,
    _flaxBinding125,
    _flaxBinding126,
  ],
  {
    "toStringShort": _flaxBinding127,
    "toString": _flaxBinding128,
    "toDiagnosticsNode": _flaxBinding129,
    "debugFillProperties": _flaxBinding130,
    "resolveFrom": _flaxBinding132,
    "copyWith": _flaxBinding135,
  },
  constructors: {"": _flaxBinding136},
  create: _createCupertinoThemeData,
  matches: _isCupertinoThemeData,
  setters: [],
  supertypes: [
    "package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding138 = FlaxGetter(
  "preferredSize",
  _flaxBinding67,
  _ObstructingPreferredSizeWidget_preferredSize,
);
const _flaxBinding139 = FlaxInstanceMethod(
  _flaxBinding92,
  _flaxBinding8,
  _ObstructingPreferredSizeWidget_toStringShallow,
);
const _flaxBinding140 = FlaxInstanceMethod(
  _flaxBinding95,
  _flaxBinding8,
  _ObstructingPreferredSizeWidget_toStringDeep,
);
const _flaxBinding141 = FlaxInstanceMethod(
  _flaxBinding97,
  _flaxBinding8,
  _ObstructingPreferredSizeWidget_toStringShort,
);
const _flaxBinding142 = FlaxInstanceMethod(
  _flaxBinding100,
  _flaxBinding101,
  _ObstructingPreferredSizeWidget_toDiagnosticsNode,
);
const _flaxBinding143 = FlaxInstanceMethod(
  _flaxBinding97,
  _flaxBinding104,
  _ObstructingPreferredSizeWidget_debugDescribeChildren,
);
const _flaxBinding144 = FlaxInstanceMethod(
  _flaxBinding107,
  _flaxBinding61,
  _ObstructingPreferredSizeWidget_debugFillProperties,
);
const _flaxBinding145 = FlaxInstanceMethod(
  _flaxBinding109,
  _flaxBinding8,
  _ObstructingPreferredSizeWidget_toString,
);
const _flaxBinding146 = FlaxInstanceMethod(
  _flaxBinding111,
  _flaxBinding21,
  _ObstructingPreferredSizeWidget_shouldFullyObstruct,
);
const _flaxBinding147 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding0, required: false),
];
const _flaxBinding148 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "joiner",
      _flaxBinding8,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "minLevel",
      _flaxBinding91,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding8,
  id: "callback:<>(n:o:joiner:String:,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding149 = FlaxProxyMember(
  "toStringShallow",
  0,
  _flaxBinding148,
  hasSuper: true,
);
const _flaxBinding150 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "prefixLineOne",
      _flaxBinding8,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "prefixOtherLines",
      _flaxBinding10,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "minLevel",
      _flaxBinding91,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "wrapWidth",
      _flaxBinding94,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding8,
  id: "callback:<>(n:o:prefixLineOne:String:,n:o:prefixOtherLines:String?:,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel,n:o:wrapWidth:int:)->String:",
);
const _flaxBinding151 = FlaxProxyMember(
  "toStringDeep",
  0,
  _flaxBinding150,
  hasSuper: true,
);
const _flaxBinding152 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding8,
  id: "callback:<>()->String:",
);
const _flaxBinding153 = FlaxProxyMember(
  "toStringShort",
  0,
  _flaxBinding152,
  hasSuper: true,
);
const _flaxBinding154 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding10,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "style",
      _flaxBinding99,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding101,
  id: "callback:<>(n:o:name:String?:,n:o:style:enum?:flax.core/sdk_foundation#type:DiagnosticsTreeStyle)->object:flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding155 = FlaxProxyMember(
  "toDiagnosticsNode",
  0,
  _flaxBinding154,
  hasSuper: true,
);
const _flaxBinding156 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding104,
  id: "callback:<>()->list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
);
const _flaxBinding157 = FlaxProxyMember(
  "debugDescribeChildren",
  0,
  _flaxBinding156,
  hasSuper: true,
);
const _flaxBinding158 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "properties",
      _flaxBinding106,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding61,
  id: "callback:<>(p:r:properties:object:flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder)->void:",
);
const _flaxBinding159 = FlaxProxyMember(
  "debugFillProperties",
  0,
  _flaxBinding158,
  hasSuper: true,
);
const _flaxBinding160 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "minLevel",
      _flaxBinding91,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding8,
  id: "callback:<>(n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding161 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding160,
  hasSuper: true,
);
const _flaxBinding162 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding21,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->bool:",
);
const _flaxBinding163 = FlaxProxyMember(
  "shouldFullyObstruct",
  0,
  _flaxBinding162,
);
const _flaxBinding164 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding5,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
);
const _flaxBinding165 = FlaxProxyMember("build", 0, _flaxBinding164);
const _flaxBinding166 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding67,
  id: "callback:<>()->object:flax.core/flutter#type:Size",
);
const _flaxBinding167 = FlaxProxyMember("preferredSize", 1, _flaxBinding166);
const _flaxBinding168 = FlaxObjectBinding(
  "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
  [_flaxBinding138],
  {
    "toStringShallow": _flaxBinding139,
    "toStringDeep": _flaxBinding140,
    "toStringShort": _flaxBinding141,
    "toDiagnosticsNode": _flaxBinding142,
    "debugDescribeChildren": _flaxBinding143,
    "debugFillProperties": _flaxBinding144,
    "toString": _flaxBinding145,
    "shouldFullyObstruct": _flaxBinding146,
    "@super:toStringShallow": FlaxInstanceMethod(
      _flaxBinding92,
      _flaxBinding8,
      _ObstructingPreferredSizeWidget_super_toStringShallow,
    ),
    "@super:toStringDeep": FlaxInstanceMethod(
      _flaxBinding95,
      _flaxBinding8,
      _ObstructingPreferredSizeWidget_super_toStringDeep,
    ),
    "@super:toStringShort": FlaxInstanceMethod(
      _flaxBinding97,
      _flaxBinding8,
      _ObstructingPreferredSizeWidget_super_toStringShort,
    ),
    "@super:toDiagnosticsNode": FlaxInstanceMethod(
      _flaxBinding100,
      _flaxBinding101,
      _ObstructingPreferredSizeWidget_super_toDiagnosticsNode,
    ),
    "@super:debugDescribeChildren": FlaxInstanceMethod(
      _flaxBinding97,
      _flaxBinding104,
      _ObstructingPreferredSizeWidget_super_debugDescribeChildren,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod(
      _flaxBinding107,
      _flaxBinding61,
      _ObstructingPreferredSizeWidget_super_debugFillProperties,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding109,
      _flaxBinding8,
      _ObstructingPreferredSizeWidget_super_toString,
    ),
  },
  constructors: {"@implementation": _flaxBinding147},
  create: _createObstructingPreferredSizeWidget,
  matches: _isObstructingPreferredSizeWidget,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/flutter#type:PreferredSizeWidget",
    "flax.core/sdk_widgets#type:Widget",
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding149,
    _flaxBinding151,
    _flaxBinding153,
    _flaxBinding155,
    _flaxBinding157,
    _flaxBinding159,
    _flaxBinding161,
    _flaxBinding163,
    _flaxBinding165,
    _flaxBinding167,
  ]),
);
const _flaxBinding169 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:HeroController",
);
const _flaxBinding170 = FlaxTypeRef("double");
