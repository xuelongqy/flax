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
          FlaxParameter("key", _flaxBinding10, required: false),
          FlaxParameter("navigatorKey", _flaxBinding11, required: false),
          FlaxParameter("home", _flaxBinding12, required: false),
          FlaxParameter("theme", _flaxBinding13, required: false),
          FlaxParameter(
            "routes",
            _flaxBinding16,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "initialRoute",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter("onGenerateRoute", _flaxBinding20, required: false),
          FlaxParameter(
            "onGenerateInitialRoutes",
            _flaxBinding25,
            required: false,
          ),
          FlaxParameter("onUnknownRoute", _flaxBinding20, required: false),
          FlaxParameter(
            "onNavigationNotification",
            _flaxBinding28,
            required: false,
          ),
          FlaxParameter(
            "navigatorObservers",
            _flaxBinding31,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("builder", _flaxBinding33, required: false),
          FlaxParameter("title", flaxNullableStringType, required: false),
          FlaxParameter("onGenerateTitle", _flaxBinding35, required: false),
          FlaxParameter("color", _flaxBinding36, required: false),
          FlaxParameter("locale", _flaxBinding37, required: false),
          FlaxParameter(
            "localizationsDelegates",
            _flaxBinding39,
            required: false,
          ),
          FlaxParameter(
            "localeListResolutionCallback",
            _flaxBinding44,
            required: false,
          ),
          FlaxParameter(
            "localeResolutionCallback",
            _flaxBinding46,
            required: false,
          ),
          FlaxParameter(
            "supportedLocales",
            _flaxBinding41,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "showPerformanceOverlay",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "checkerboardRasterCacheImages",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "checkerboardOffscreenLayers",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "showSemanticsDebugger",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "debugShowCheckedModeBanner",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("shortcuts", _flaxBinding49, required: false),
          FlaxParameter("actions", _flaxBinding51, required: false),
          FlaxParameter(
            "restorationScopeId",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter("scrollBehavior", _flaxBinding52, required: false),
          FlaxParameter(
            "useInheritedMediaQuery",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
        ],
        "router": [
          FlaxParameter("key", _flaxBinding10, required: false),
          FlaxParameter(
            "routeInformationProvider",
            _flaxBinding53,
            required: false,
          ),
          FlaxParameter(
            "routeInformationParser",
            _flaxBinding54,
            required: false,
          ),
          FlaxParameter("routerDelegate", _flaxBinding55, required: false),
          FlaxParameter(
            "backButtonDispatcher",
            _flaxBinding56,
            required: false,
          ),
          FlaxParameter("routerConfig", _flaxBinding57, required: false),
          FlaxParameter("theme", _flaxBinding13, required: false),
          FlaxParameter("builder", _flaxBinding33, required: false),
          FlaxParameter("title", flaxNullableStringType, required: false),
          FlaxParameter("onGenerateTitle", _flaxBinding35, required: false),
          FlaxParameter(
            "onNavigationNotification",
            _flaxBinding28,
            required: false,
          ),
          FlaxParameter("color", _flaxBinding36, required: false),
          FlaxParameter("locale", _flaxBinding37, required: false),
          FlaxParameter(
            "localizationsDelegates",
            _flaxBinding39,
            required: false,
          ),
          FlaxParameter(
            "localeListResolutionCallback",
            _flaxBinding44,
            required: false,
          ),
          FlaxParameter(
            "localeResolutionCallback",
            _flaxBinding46,
            required: false,
          ),
          FlaxParameter(
            "supportedLocales",
            _flaxBinding41,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "showPerformanceOverlay",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "checkerboardRasterCacheImages",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "checkerboardOffscreenLayers",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "showSemanticsDebugger",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "debugShowCheckedModeBanner",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("shortcuts", _flaxBinding49, required: false),
          FlaxParameter("actions", _flaxBinding51, required: false),
          FlaxParameter(
            "restorationScopeId",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter("scrollBehavior", _flaxBinding52, required: false),
          FlaxParameter(
            "useInheritedMediaQuery",
            flaxBoolType,
            required: false,
            defaultValue: false,
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
          FlaxParameter("key", _flaxBinding10, required: false),
          FlaxParameter.required("child", flaxWidgetType),
          FlaxParameter("padding", _flaxBinding58, required: false),
          FlaxParameter("color", _flaxBinding36, required: false),
          FlaxParameter("foregroundColor", _flaxBinding36, required: false),
          FlaxParameter(
            "disabledColor",
            flaxColorType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("minSize", flaxNullableDoubleType, required: false),
          FlaxParameter("minimumSize", flaxNullableSizeType, required: false),
          FlaxParameter(
            "pressedOpacity",
            flaxNullableDoubleType,
            required: false,
            defaultValue: 0.4,
          ),
          FlaxParameter("borderRadius", _flaxBinding59, required: false),
          FlaxParameter(
            "alignment",
            _flaxBinding60,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("focusColor", _flaxBinding36, required: false),
          FlaxParameter("focusNode", _flaxBinding61, required: false),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("mouseCursor", _flaxBinding62, required: false),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
        ],
        "tinted": [
          FlaxParameter("key", _flaxBinding10, required: false),
          FlaxParameter.required("child", flaxWidgetType),
          FlaxParameter("padding", _flaxBinding58, required: false),
          FlaxParameter("color", _flaxBinding36, required: false),
          FlaxParameter("foregroundColor", _flaxBinding36, required: false),
          FlaxParameter(
            "disabledColor",
            flaxColorType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("minSize", flaxNullableDoubleType, required: false),
          FlaxParameter("minimumSize", flaxNullableSizeType, required: false),
          FlaxParameter(
            "pressedOpacity",
            flaxNullableDoubleType,
            required: false,
            defaultValue: 0.4,
          ),
          FlaxParameter("borderRadius", _flaxBinding59, required: false),
          FlaxParameter(
            "alignment",
            _flaxBinding60,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("focusColor", _flaxBinding36, required: false),
          FlaxParameter("focusNode", _flaxBinding61, required: false),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("mouseCursor", _flaxBinding62, required: false),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
        ],
        "filled": [
          FlaxParameter("key", _flaxBinding10, required: false),
          FlaxParameter.required("child", flaxWidgetType),
          FlaxParameter("padding", _flaxBinding58, required: false),
          FlaxParameter("color", _flaxBinding36, required: false),
          FlaxParameter(
            "disabledColor",
            flaxColorType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("foregroundColor", _flaxBinding36, required: false),
          FlaxParameter("minSize", flaxNullableDoubleType, required: false),
          FlaxParameter("minimumSize", flaxNullableSizeType, required: false),
          FlaxParameter(
            "pressedOpacity",
            flaxNullableDoubleType,
            required: false,
            defaultValue: 0.4,
          ),
          FlaxParameter("borderRadius", _flaxBinding59, required: false),
          FlaxParameter(
            "alignment",
            _flaxBinding60,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("focusColor", _flaxBinding36, required: false),
          FlaxParameter("focusNode", _flaxBinding61, required: false),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("mouseCursor", _flaxBinding62, required: false),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
        ],
      },
      _CupertinoButtonHost.new,
      matches: _isCupertinoButton,
      methods: {},
    ),
    _flaxBinding122,
    FlaxWidgetBinding(
      "flax.cupertino/cupertino#type:CupertinoPageScaffold",
      {
        "": [
          FlaxParameter("key", _flaxBinding10, required: false),
          FlaxParameter("navigationBar", _flaxBinding123, required: false),
          FlaxParameter("backgroundColor", _flaxBinding36, required: false),
          FlaxParameter(
            "resizeToAvoidBottomInset",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter.required("child", flaxWidgetType),
        ],
      },
      _CupertinoPageScaffoldHost.new,
      matches: _isCupertinoPageScaffold,
      methods: {},
    ),
    _flaxBinding145,
    _flaxBinding167,
    _flaxBinding177,
    _flaxBinding93,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.cupertino/cupertino#function:CupertinoApp.createCupertinoHeroController",
      [],
      _flaxBinding178,
      _CupertinoApp_createCupertinoHeroController,
    ),
    FlaxFunctionBinding(
      "flax.cupertino/cupertino#function:CupertinoButton.tapMoveSlop",
      [],
      flaxDoubleType,
      _CupertinoButton_tapMoveSlop,
    ),
  ],
  constants: [],
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
      "flax.cupertino/cupertino#type:CupertinoTextThemeData",
      api.CupertinoTextThemeData,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.cupertino/cupertino#type:CupertinoThemeData",
      api.CupertinoThemeData,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData",
      api.NoDefaultCupertinoThemeData,
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

bool _isCupertinoTextThemeData(Object value) =>
    value is api.CupertinoTextThemeData;
Object? _CupertinoTextThemeData_textStyle(Object value) =>
    (value as api.CupertinoTextThemeData).textStyle;
Object? _CupertinoTextThemeData_actionTextStyle(Object value) =>
    (value as api.CupertinoTextThemeData).actionTextStyle;
Object? _CupertinoTextThemeData_actionSmallTextStyle(Object value) =>
    (value as api.CupertinoTextThemeData).actionSmallTextStyle;
Object? _CupertinoTextThemeData_tabLabelTextStyle(Object value) =>
    (value as api.CupertinoTextThemeData).tabLabelTextStyle;
Object? _CupertinoTextThemeData_navTitleTextStyle(Object value) =>
    (value as api.CupertinoTextThemeData).navTitleTextStyle;
Object? _CupertinoTextThemeData_navLargeTitleTextStyle(Object value) =>
    (value as api.CupertinoTextThemeData).navLargeTitleTextStyle;
Object? _CupertinoTextThemeData_navActionTextStyle(Object value) =>
    (value as api.CupertinoTextThemeData).navActionTextStyle;
Object? _CupertinoTextThemeData_pickerTextStyle(Object value) =>
    (value as api.CupertinoTextThemeData).pickerTextStyle;
Object? _CupertinoTextThemeData_dateTimePickerTextStyle(Object value) =>
    (value as api.CupertinoTextThemeData).dateTimePickerTextStyle;
Object? _CupertinoTextThemeData_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoTextThemeData).toStringShort();
}

Object? _CupertinoTextThemeData_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoTextThemeData).toString(
    minLevel: values["minLevel"] as api4.DiagnosticLevel,
  );
}

Object? _CupertinoTextThemeData_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoTextThemeData).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api4.DiagnosticsTreeStyle?,
  );
}

Object? _CupertinoTextThemeData_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CupertinoTextThemeData).debugFillProperties(
    values["properties"] as api4.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _CupertinoTextThemeData_resolveFrom(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoTextThemeData).resolveFrom(
    values["context"] as api1.BuildContext,
  );
}

Object? _CupertinoTextThemeData_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoTextThemeData).copyWith(
    actionSmallTextStyle: values["actionSmallTextStyle"] as api2.TextStyle?,
    actionTextStyle: values["actionTextStyle"] as api2.TextStyle?,
    dateTimePickerTextStyle:
        values["dateTimePickerTextStyle"] as api2.TextStyle?,
    navActionTextStyle: values["navActionTextStyle"] as api2.TextStyle?,
    navLargeTitleTextStyle: values["navLargeTitleTextStyle"] as api2.TextStyle?,
    navTitleTextStyle: values["navTitleTextStyle"] as api2.TextStyle?,
    pickerTextStyle: values["pickerTextStyle"] as api2.TextStyle?,
    primaryColor: values["primaryColor"] as api3.Color?,
    tabLabelTextStyle: values["tabLabelTextStyle"] as api2.TextStyle?,
    textStyle: values["textStyle"] as api2.TextStyle?,
  );
}

Object _createCupertinoTextThemeData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("primaryColor")) {
        return api.CupertinoTextThemeData(
          textStyle: values["textStyle"] as api2.TextStyle?,
          actionTextStyle: values["actionTextStyle"] as api2.TextStyle?,
          actionSmallTextStyle:
              values["actionSmallTextStyle"] as api2.TextStyle?,
          tabLabelTextStyle: values["tabLabelTextStyle"] as api2.TextStyle?,
          navTitleTextStyle: values["navTitleTextStyle"] as api2.TextStyle?,
          navLargeTitleTextStyle:
              values["navLargeTitleTextStyle"] as api2.TextStyle?,
          navActionTextStyle: values["navActionTextStyle"] as api2.TextStyle?,
          pickerTextStyle: values["pickerTextStyle"] as api2.TextStyle?,
          dateTimePickerTextStyle:
              values["dateTimePickerTextStyle"] as api2.TextStyle?,
        );
      }
      return api.CupertinoTextThemeData(
        primaryColor: values["primaryColor"] as api3.Color,
        textStyle: values["textStyle"] as api2.TextStyle?,
        actionTextStyle: values["actionTextStyle"] as api2.TextStyle?,
        actionSmallTextStyle: values["actionSmallTextStyle"] as api2.TextStyle?,
        tabLabelTextStyle: values["tabLabelTextStyle"] as api2.TextStyle?,
        navTitleTextStyle: values["navTitleTextStyle"] as api2.TextStyle?,
        navLargeTitleTextStyle:
            values["navLargeTitleTextStyle"] as api2.TextStyle?,
        navActionTextStyle: values["navActionTextStyle"] as api2.TextStyle?,
        pickerTextStyle: values["pickerTextStyle"] as api2.TextStyle?,
        dateTimePickerTextStyle:
            values["dateTimePickerTextStyle"] as api2.TextStyle?,
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
Object? _CupertinoThemeData_textTheme(Object value) =>
    (value as api.CupertinoThemeData).textTheme;
Object? _CupertinoThemeData_barBackgroundColor(Object value) =>
    (value as api.CupertinoThemeData).barBackgroundColor;
Object? _CupertinoThemeData_scaffoldBackgroundColor(Object value) =>
    (value as api.CupertinoThemeData).scaffoldBackgroundColor;
Object? _CupertinoThemeData_selectionHandleColor(Object value) =>
    (value as api.CupertinoThemeData).selectionHandleColor;
Object? _CupertinoThemeData_applyThemeToAll(Object value) =>
    (value as api.CupertinoThemeData).applyThemeToAll;
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
    textTheme: values["textTheme"] as api.CupertinoTextThemeData?,
  );
}

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

Object _createCupertinoThemeData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.CupertinoThemeData(
        brightness: values["brightness"] as api3.Brightness?,
        primaryColor: values["primaryColor"] as api3.Color?,
        primaryContrastingColor:
            values["primaryContrastingColor"] as api3.Color?,
        textTheme: values["textTheme"] as api.CupertinoTextThemeData?,
        barBackgroundColor: values["barBackgroundColor"] as api3.Color?,
        scaffoldBackgroundColor:
            values["scaffoldBackgroundColor"] as api3.Color?,
        selectionHandleColor: values["selectionHandleColor"] as api3.Color?,
        applyThemeToAll: values["applyThemeToAll"] as bool?,
      );
    case "raw":
      return api.CupertinoThemeData.raw(
        values["brightness"] as api3.Brightness?,
        values["primaryColor"] as api3.Color?,
        values["primaryContrastingColor"] as api3.Color?,
        values["textTheme"] as api.CupertinoTextThemeData?,
        values["barBackgroundColor"] as api3.Color?,
        values["scaffoldBackgroundColor"] as api3.Color?,
        values["selectionHandleColor"] as api3.Color?,
        values["applyThemeToAll"] as bool?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isNoDefaultCupertinoThemeData(Object value) =>
    value is api.NoDefaultCupertinoThemeData;
Object? _NoDefaultCupertinoThemeData_brightness(Object value) =>
    (value as api.NoDefaultCupertinoThemeData).brightness;
Object? _NoDefaultCupertinoThemeData_primaryColor(Object value) =>
    (value as api.NoDefaultCupertinoThemeData).primaryColor;
Object? _NoDefaultCupertinoThemeData_primaryContrastingColor(Object value) =>
    (value as api.NoDefaultCupertinoThemeData).primaryContrastingColor;
Object? _NoDefaultCupertinoThemeData_textTheme(Object value) =>
    (value as api.NoDefaultCupertinoThemeData).textTheme;
Object? _NoDefaultCupertinoThemeData_barBackgroundColor(Object value) =>
    (value as api.NoDefaultCupertinoThemeData).barBackgroundColor;
Object? _NoDefaultCupertinoThemeData_scaffoldBackgroundColor(Object value) =>
    (value as api.NoDefaultCupertinoThemeData).scaffoldBackgroundColor;
Object? _NoDefaultCupertinoThemeData_selectionHandleColor(Object value) =>
    (value as api.NoDefaultCupertinoThemeData).selectionHandleColor;
Object? _NoDefaultCupertinoThemeData_applyThemeToAll(Object value) =>
    (value as api.NoDefaultCupertinoThemeData).applyThemeToAll;
Object? _NoDefaultCupertinoThemeData_noDefault(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.NoDefaultCupertinoThemeData).noDefault();
}

Object? _NoDefaultCupertinoThemeData_resolveFrom(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.NoDefaultCupertinoThemeData).resolveFrom(
    values["context"] as api1.BuildContext,
  );
}

Object? _NoDefaultCupertinoThemeData_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.NoDefaultCupertinoThemeData).copyWith(
    applyThemeToAll: values["applyThemeToAll"] as bool?,
    barBackgroundColor: values["barBackgroundColor"] as api3.Color?,
    brightness: values["brightness"] as api3.Brightness?,
    primaryColor: values["primaryColor"] as api3.Color?,
    primaryContrastingColor: values["primaryContrastingColor"] as api3.Color?,
    scaffoldBackgroundColor: values["scaffoldBackgroundColor"] as api3.Color?,
    selectionHandleColor: values["selectionHandleColor"] as api3.Color?,
    textTheme: values["textTheme"] as api.CupertinoTextThemeData?,
  );
}

Object _createNoDefaultCupertinoThemeData(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.NoDefaultCupertinoThemeData(
        brightness: values["brightness"] as api3.Brightness?,
        primaryColor: values["primaryColor"] as api3.Color?,
        primaryContrastingColor:
            values["primaryContrastingColor"] as api3.Color?,
        textTheme: values["textTheme"] as api.CupertinoTextThemeData?,
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
              FlaxCallbackParameter.plain(
                "p0",
                types.ref<_Shape0>(withinCallback: true),
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
              FlaxCallbackParameter.plain(
                "context",
                types.ref<_Shape0>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "child",
                types.ref<_Shape1>(withinCallback: true),
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
Object _collection0Create() => <api4.DiagnosticsNode>[];
bool _collection0Matches(Object value) => value is List<api4.DiagnosticsNode>;
Object _collection1Create() => <api4.DiagnosticsNode>[];
Object _collection1Restore(Object value) =>
    (value as Iterable<Object?>).cast<api4.DiagnosticsNode>();
bool _collection1Matches(Object value) =>
    value is Iterable<api4.DiagnosticsNode>;
Object _collection2Create() =>
    <String, api1.Widget Function(api1.BuildContext p0)>{};
bool _collection2Matches(Object value) =>
    value is Map<String, api1.Widget Function(api1.BuildContext p0)>;
Object _collection3Create() => <api1.Route<Object?>>[];
bool _collection3Matches(Object value) => value is List<api1.Route<Object?>>;
Object _collection4Create() => <api1.Route<Object?>>[];
Object _collection4Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.Route<Object?>>();
bool _collection4Matches(Object value) =>
    value is Iterable<api1.Route<Object?>>;
Object _collection5Create() => <api1.NavigatorObserver>[];
bool _collection5Matches(Object value) => value is List<api1.NavigatorObserver>;
Object _collection6Create() => <api1.NavigatorObserver>[];
Object _collection6Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.NavigatorObserver>();
bool _collection6Matches(Object value) =>
    value is Iterable<api1.NavigatorObserver>;
Object _collection7Create() => <api1.LocalizationsDelegate<Object?>>[];
Object _collection7Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.LocalizationsDelegate<Object?>>();
bool _collection7Matches(Object value) =>
    value is Iterable<api1.LocalizationsDelegate<Object?>>;
Object _collection8Create() => <api3.Locale>[];
bool _collection8Matches(Object value) => value is List<api3.Locale>;
Object _collection9Create() => <api3.Locale>[];
Object _collection9Restore(Object value) =>
    (value as Iterable<Object?>).cast<api3.Locale>();
bool _collection9Matches(Object value) => value is Iterable<api3.Locale>;
Object _collection10Create() => <api1.ShortcutActivator, api1.Intent>{};
bool _collection10Matches(Object value) =>
    value is Map<api1.ShortcutActivator, api1.Intent>;
Object _collection11Create() => <api6.Type, api1.Action<api1.Intent>>{};
bool _collection11Matches(Object value) =>
    value is Map<api6.Type, api1.Action<api1.Intent>>;
const _flaxBinding0 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding1 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding2 = FlaxTypeRef(
  "list",
  item: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding1,
);
const _flaxBinding3 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding2,
  id: "callback:<>()->list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
);
const _flaxBinding4 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder",
);
const _flaxBinding5 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("properties", _flaxBinding4)],
  flaxVoidType,
  id: "callback:<>(p:r:properties:object:flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder)->void:",
);
const _flaxBinding6 = FlaxTypeRef(
  "context",
  id: "flax.core/flutter#type:BuildContext",
);
const _flaxBinding7 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("context", _flaxBinding6)],
  flaxBoolType,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->bool:",
);
const _flaxBinding8 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("context", _flaxBinding6)],
  flaxWidgetType,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
);
const _flaxBinding9 = FlaxCallbackBinding.signature(
  [],
  flaxSizeType,
  id: "callback:<>()->object:flax.core/flutter#type:Size",
);
const _flaxBinding10 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Key",
  nullable: true,
);
const _flaxBinding11 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:GlobalKey",
  dartType: FlaxDartTypes.typeOf<api1.GlobalKey<api1.NavigatorState>?>,
  nullable: true,
);
const _flaxBinding12 = FlaxTypeRef("widget", nullable: true);
const _flaxBinding13 = FlaxTypeRef(
  "object",
  id: "flax.cupertino/cupertino#type:CupertinoThemeData",
  nullable: true,
);
const _flaxBinding14 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("p0", _flaxBinding6)],
  flaxWidgetType,
  FlaxCallbackAdapters.wrap1<api1.BuildContext, api1.Widget>,
  id: "callback:<>(p:r:p0:context:flax.core/flutter#type:BuildContext)->widget:",
  invoke: FlaxCallbackAdapters.invoke1<api1.BuildContext, api1.Widget>,
  matches: FlaxCallbackAdapters.matches1<api1.BuildContext, api1.Widget>,
);
const _flaxBinding15 = FlaxTypeRef("callback", callback: _flaxBinding14);
const _flaxBinding16 = FlaxTypeRef(
  "map",
  item: _flaxBinding15,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[callback:<>(p:r:p0:context:flax.core/flutter#type:BuildContext)->widget:][String:]",
    _collection2Create,
    _collection2Matches,
  ),
);
const _flaxBinding17 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:RouteSettings",
);
const _flaxBinding18 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Route",
  dartType: FlaxDartTypes.typeOf<api1.Route<Object?>?>,
  nullable: true,
);
const _flaxBinding19 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("settings", _flaxBinding17)],
  _flaxBinding18,
  FlaxCallbackAdapters.wrap1<api1.RouteSettings, api1.Route<Object?>?>,
  id: "callback:<>(p:r:settings:object:flax.core/flutter#type:RouteSettings)->object?:flax.core/flutter#type:Route<Object?><any?:>",
  invoke:
      FlaxCallbackAdapters.invoke1<api1.RouteSettings, api1.Route<Object?>?>,
  matches:
      FlaxCallbackAdapters.matches1<api1.RouteSettings, api1.Route<Object?>?>,
);
const _flaxBinding20 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding19,
);
const _flaxBinding21 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Route",
  dartType: FlaxDartTypes.typeOf<api1.Route<Object?>>,
);
const _flaxBinding22 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding21,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:Route<Object?><any?:>]",
    _collection4Create,
    _collection4Matches,
    restore: _collection4Restore,
  ),
);
const _flaxBinding23 = FlaxTypeRef(
  "list",
  item: _flaxBinding21,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Route<Object?><any?:>]",
    _collection3Create,
    _collection3Matches,
  ),
  iterable: _flaxBinding22,
);
const _flaxBinding24 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("initialRoute", flaxStringType)],
  _flaxBinding23,
  FlaxCallbackAdapters.wrap1<String, List<api1.Route<Object?>>>,
  id: "callback:<>(p:r:initialRoute:String:)->list:[object:flax.core/flutter#type:Route<Object?><any?:>]",
  invoke: FlaxCallbackAdapters.invoke1<String, List<api1.Route<Object?>>>,
  matches: FlaxCallbackAdapters.matches1<String, List<api1.Route<Object?>>>,
);
const _flaxBinding25 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding24,
);
const _flaxBinding26 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:NavigationNotification",
);
const _flaxBinding27 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("notification", _flaxBinding26)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<api1.NavigationNotification, bool>,
  id: "callback:<>(p:r:notification:object:flax.core/sdk_widgets#type:NavigationNotification)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api1.NavigationNotification, bool>,
  matches: FlaxCallbackAdapters.matches1<api1.NavigationNotification, bool>,
);
const _flaxBinding28 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding27,
);
const _flaxBinding29 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:NavigatorObserver",
);
const _flaxBinding30 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding29,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:NavigatorObserver]",
    _collection6Create,
    _collection6Matches,
    restore: _collection6Restore,
  ),
);
const _flaxBinding31 = FlaxTypeRef(
  "list",
  item: _flaxBinding29,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:NavigatorObserver]",
    _collection5Create,
    _collection5Matches,
  ),
  iterable: _flaxBinding30,
);
const _flaxBinding32 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("context", _flaxBinding6),
    FlaxCallbackParameter.plain("child", _flaxBinding12),
  ],
  flaxWidgetType,
  FlaxCallbackAdapters.wrap2<api1.BuildContext, api1.Widget?, api1.Widget>,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:child:widget?:)->widget:",
  invoke: FlaxCallbackAdapters
      .invoke2<api1.BuildContext, api1.Widget?, api1.Widget>,
  matches: FlaxCallbackAdapters
      .matches2<api1.BuildContext, api1.Widget?, api1.Widget>,
  independentWidgetResult: true,
);
const _flaxBinding33 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding32,
);
const _flaxBinding34 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("context", _flaxBinding6)],
  flaxStringType,
  FlaxCallbackAdapters.wrap1<api1.BuildContext, String>,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->String:",
  invoke: FlaxCallbackAdapters.invoke1<api1.BuildContext, String>,
  matches: FlaxCallbackAdapters.matches1<api1.BuildContext, String>,
);
const _flaxBinding35 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding34,
);
const _flaxBinding36 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Color",
  nullable: true,
);
const _flaxBinding37 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
  nullable: true,
);
const _flaxBinding38 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:LocalizationsDelegate",
  dartType: FlaxDartTypes.typeOf<api1.LocalizationsDelegate<Object?>>,
);
const _flaxBinding39 = FlaxTypeRef(
  "iterable",
  nullable: true,
  item: _flaxBinding38,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_widgets#type:LocalizationsDelegate<Object?><any?:>]",
    _collection7Create,
    _collection7Matches,
    restore: _collection7Restore,
  ),
);
const _flaxBinding40 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding41 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding40,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection9Create,
    _collection9Matches,
    restore: _collection9Restore,
  ),
);
const _flaxBinding42 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding40,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection8Create,
    _collection8Matches,
  ),
  iterable: _flaxBinding41,
);
const _flaxBinding43 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("locales", _flaxBinding42),
    FlaxCallbackParameter.plain("supportedLocales", _flaxBinding41),
  ],
  _flaxBinding37,
  FlaxCallbackAdapters
      .wrap2<List<api3.Locale>?, Iterable<api3.Locale>, api3.Locale?>,
  id: "callback:<>(p:r:locales:list?:[object:flax.core/sdk_dart_ui#type:Locale],p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
  invoke: FlaxCallbackAdapters
      .invoke2<List<api3.Locale>?, Iterable<api3.Locale>, api3.Locale?>,
  matches: FlaxCallbackAdapters
      .matches2<List<api3.Locale>?, Iterable<api3.Locale>, api3.Locale?>,
);
const _flaxBinding44 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding43,
);
const _flaxBinding45 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("locale", _flaxBinding37),
    FlaxCallbackParameter.plain("supportedLocales", _flaxBinding41),
  ],
  _flaxBinding37,
  FlaxCallbackAdapters.wrap2<api3.Locale?, Iterable<api3.Locale>, api3.Locale?>,
  id: "callback:<>(p:r:locale:object?:flax.core/sdk_dart_ui#type:Locale,p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
  invoke: FlaxCallbackAdapters
      .invoke2<api3.Locale?, Iterable<api3.Locale>, api3.Locale?>,
  matches: FlaxCallbackAdapters
      .matches2<api3.Locale?, Iterable<api3.Locale>, api3.Locale?>,
);
const _flaxBinding46 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding45,
);
const _flaxBinding47 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:Intent",
);
const _flaxBinding48 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ShortcutActivator",
);
const _flaxBinding49 = FlaxTypeRef(
  "map",
  nullable: true,
  item: _flaxBinding47,
  key: _flaxBinding48,
  collection: FlaxCollectionBinding(
    "map:[object:flax.core/sdk_widgets#type:Intent][object:flax.core/sdk_widgets#type:ShortcutActivator]",
    _collection10Create,
    _collection10Matches,
  ),
);
const _flaxBinding50 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:Action",
  dartType: FlaxDartTypes.typeOf<api1.Action<api1.Intent>>,
);
const _flaxBinding51 = FlaxTypeRef(
  "map",
  nullable: true,
  item: _flaxBinding50,
  key: flaxTypeType,
  collection: FlaxCollectionBinding(
    "map:[object:flax.core/sdk_widgets#type:Action<Intent><object:flax.core/sdk_widgets#type:Intent>][object:flax.core/flutter#type:Type]",
    _collection11Create,
    _collection11Matches,
  ),
);
const _flaxBinding52 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ScrollBehavior",
  nullable: true,
);
const _flaxBinding53 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouteInformationProvider",
  nullable: true,
);
const _flaxBinding54 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouteInformationParser",
  dartType: FlaxDartTypes.typeOf<api1.RouteInformationParser<Object>?>,
  nullable: true,
);
const _flaxBinding55 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouterDelegate",
  dartType: FlaxDartTypes.typeOf<api1.RouterDelegate<Object>?>,
  nullable: true,
);
const _flaxBinding56 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:BackButtonDispatcher",
  nullable: true,
);
const _flaxBinding57 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouterConfig",
  dartType: FlaxDartTypes.typeOf<api1.RouterConfig<Object>?>,
  nullable: true,
);
const _flaxBinding58 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EdgeInsetsGeometry",
  nullable: true,
);
const _flaxBinding59 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BorderRadius",
  nullable: true,
);
const _flaxBinding60 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:AlignmentGeometry",
);
const _flaxBinding61 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:FocusNode",
  nullable: true,
);
const _flaxBinding62 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:MouseCursor",
  nullable: true,
);
const _flaxBinding63 = FlaxGetter.plain(
  "preferredSize",
  flaxSizeType,
  _ObstructingPreferredSizeWidget_preferredSize,
);
const _flaxBinding64 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding65 = <FlaxParameter>[
  FlaxParameter("joiner", flaxStringType, required: false, defaultValue: ', '),
  FlaxParameter(
    "minLevel",
    _flaxBinding64,
    required: false,
    defaultValue: api4.DiagnosticLevel.debug,
  ),
];
const _flaxBinding66 = FlaxInstanceMethod.plain(
  _flaxBinding65,
  flaxStringType,
  _ObstructingPreferredSizeWidget_toStringShallow,
);
const _flaxBinding67 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding64,
    required: false,
    defaultValue: api4.DiagnosticLevel.debug,
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
const _flaxBinding68 = FlaxInstanceMethod.plain(
  _flaxBinding67,
  flaxStringType,
  _ObstructingPreferredSizeWidget_toStringDeep,
);
const _flaxBinding69 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ObstructingPreferredSizeWidget_toStringShort,
);
const _flaxBinding70 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
  nullable: true,
);
const _flaxBinding71 = <FlaxParameter>[
  FlaxParameter("name", flaxNullableStringType, required: false),
  FlaxParameter("style", _flaxBinding70, required: false),
];
const _flaxBinding72 = FlaxInstanceMethod.plain(
  _flaxBinding71,
  _flaxBinding0,
  _ObstructingPreferredSizeWidget_toDiagnosticsNode,
);
const _flaxBinding73 = FlaxInstanceMethod.shared(
  _flaxBinding3,
  _ObstructingPreferredSizeWidget_debugDescribeChildren,
);
const _flaxBinding74 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _ObstructingPreferredSizeWidget_debugFillProperties,
);
const _flaxBinding75 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding64,
    required: false,
    defaultValue: api4.DiagnosticLevel.info,
  ),
];
const _flaxBinding76 = FlaxInstanceMethod.plain(
  _flaxBinding75,
  flaxStringType,
  _ObstructingPreferredSizeWidget_toString,
);
const _flaxBinding77 = FlaxInstanceMethod.shared(
  _flaxBinding7,
  _ObstructingPreferredSizeWidget_shouldFullyObstruct,
);
const _flaxBinding78 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding10, required: false),
];
const _flaxBinding79 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "joiner",
      flaxStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "minLevel",
      _flaxBinding64,
      required: false,
      positional: false,
    ),
  ],
  flaxStringType,
  id: "callback:<>(n:o:joiner:String:,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding80 = FlaxProxyMember(
  "toStringShallow",
  0,
  _flaxBinding79,
  hasSuper: true,
);
const _flaxBinding81 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "prefixLineOne",
      flaxStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "prefixOtherLines",
      flaxNullableStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "minLevel",
      _flaxBinding64,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "wrapWidth",
      flaxIntType,
      required: false,
      positional: false,
    ),
  ],
  flaxStringType,
  id: "callback:<>(n:o:prefixLineOne:String:,n:o:prefixOtherLines:String?:,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel,n:o:wrapWidth:int:)->String:",
);
const _flaxBinding82 = FlaxProxyMember(
  "toStringDeep",
  0,
  _flaxBinding81,
  hasSuper: true,
);
const _flaxBinding83 = FlaxProxyMember(
  "toStringShort",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding84 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "name",
      flaxNullableStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "style",
      _flaxBinding70,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(n:o:name:String?:,n:o:style:enum?:flax.core/sdk_foundation#type:DiagnosticsTreeStyle)->object:flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding85 = FlaxProxyMember(
  "toDiagnosticsNode",
  0,
  _flaxBinding84,
  hasSuper: true,
);
const _flaxBinding86 = FlaxProxyMember(
  "debugDescribeChildren",
  0,
  _flaxBinding3,
  hasSuper: true,
);
const _flaxBinding87 = FlaxProxyMember(
  "debugFillProperties",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding88 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "minLevel",
      _flaxBinding64,
      required: false,
      positional: false,
    ),
  ],
  flaxStringType,
  id: "callback:<>(n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding89 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding88,
  hasSuper: true,
);
const _flaxBinding90 = FlaxProxyMember("shouldFullyObstruct", 0, _flaxBinding7);
const _flaxBinding91 = FlaxProxyMember("build", 0, _flaxBinding8);
const _flaxBinding92 = FlaxProxyMember("preferredSize", 1, _flaxBinding9);
const _flaxBinding93 = FlaxObjectBinding(
  "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
  [_flaxBinding63],
  {
    "toStringShallow": _flaxBinding66,
    "toStringDeep": _flaxBinding68,
    "toStringShort": _flaxBinding69,
    "toDiagnosticsNode": _flaxBinding72,
    "debugDescribeChildren": _flaxBinding73,
    "debugFillProperties": _flaxBinding74,
    "toString": _flaxBinding76,
    "shouldFullyObstruct": _flaxBinding77,
    "@super:toStringShallow": FlaxInstanceMethod.plain(
      _flaxBinding65,
      flaxStringType,
      _ObstructingPreferredSizeWidget_super_toStringShallow,
    ),
    "@super:toStringDeep": FlaxInstanceMethod.plain(
      _flaxBinding67,
      flaxStringType,
      _ObstructingPreferredSizeWidget_super_toStringDeep,
    ),
    "@super:toStringShort": FlaxInstanceMethod.shared(
      flaxStringCall,
      _ObstructingPreferredSizeWidget_super_toStringShort,
    ),
    "@super:toDiagnosticsNode": FlaxInstanceMethod.plain(
      _flaxBinding71,
      _flaxBinding0,
      _ObstructingPreferredSizeWidget_super_toDiagnosticsNode,
    ),
    "@super:debugDescribeChildren": FlaxInstanceMethod.shared(
      _flaxBinding3,
      _ObstructingPreferredSizeWidget_super_debugDescribeChildren,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _ObstructingPreferredSizeWidget_super_debugFillProperties,
    ),
    "@super:toString": FlaxInstanceMethod.plain(
      _flaxBinding75,
      flaxStringType,
      _ObstructingPreferredSizeWidget_super_toString,
    ),
  },
  constructors: {"@implementation": _flaxBinding78},
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
    _flaxBinding80,
    _flaxBinding82,
    _flaxBinding83,
    _flaxBinding85,
    _flaxBinding86,
    _flaxBinding87,
    _flaxBinding89,
    _flaxBinding90,
    _flaxBinding91,
    _flaxBinding92,
  ]),
);
const _flaxBinding94 = FlaxGetter.plain(
  "largeTitle",
  _flaxBinding12,
  _CupertinoNavigationBar_largeTitle,
);
const _flaxBinding95 = FlaxGetter.plain(
  "leading",
  _flaxBinding12,
  _CupertinoNavigationBar_leading,
);
const _flaxBinding96 = FlaxGetter.plain(
  "automaticallyImplyLeading",
  flaxBoolType,
  _CupertinoNavigationBar_automaticallyImplyLeading,
);
const _flaxBinding97 = FlaxGetter.plain(
  "automaticallyImplyMiddle",
  flaxBoolType,
  _CupertinoNavigationBar_automaticallyImplyMiddle,
);
const _flaxBinding98 = FlaxGetter.plain(
  "previousPageTitle",
  flaxNullableStringType,
  _CupertinoNavigationBar_previousPageTitle,
);
const _flaxBinding99 = FlaxGetter.plain(
  "middle",
  _flaxBinding12,
  _CupertinoNavigationBar_middle,
);
const _flaxBinding100 = FlaxGetter.plain(
  "trailing",
  _flaxBinding12,
  _CupertinoNavigationBar_trailing,
);
const _flaxBinding101 = FlaxGetter.plain(
  "backgroundColor",
  _flaxBinding36,
  _CupertinoNavigationBar_backgroundColor,
);
const _flaxBinding102 = FlaxGetter.plain(
  "automaticBackgroundVisibility",
  flaxBoolType,
  _CupertinoNavigationBar_automaticBackgroundVisibility,
);
const _flaxBinding103 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Brightness",
  nullable: true,
);
const _flaxBinding104 = FlaxGetter.plain(
  "brightness",
  _flaxBinding103,
  _CupertinoNavigationBar_brightness,
);
const _flaxBinding105 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EdgeInsetsDirectional",
  nullable: true,
);
const _flaxBinding106 = FlaxGetter.plain(
  "padding",
  _flaxBinding105,
  _CupertinoNavigationBar_padding,
);
const _flaxBinding107 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Border",
  nullable: true,
);
const _flaxBinding108 = FlaxGetter.plain(
  "border",
  _flaxBinding107,
  _CupertinoNavigationBar_border,
);
const _flaxBinding109 = FlaxGetter.plain(
  "transitionBetweenRoutes",
  flaxBoolType,
  _CupertinoNavigationBar_transitionBetweenRoutes,
);
const _flaxBinding110 = FlaxGetter.plain(
  "enableBackgroundFilterBlur",
  flaxBoolType,
  _CupertinoNavigationBar_enableBackgroundFilterBlur,
);
const _flaxBinding111 = FlaxGetter.plain(
  "heroTag",
  flaxAnyType,
  _CupertinoNavigationBar_heroTag,
);
const _flaxBinding112 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:PreferredSizeWidget",
  nullable: true,
);
const _flaxBinding113 = FlaxGetter.plain(
  "bottom",
  _flaxBinding112,
  _CupertinoNavigationBar_bottom,
);
const _flaxBinding114 = FlaxGetter.plain(
  "key",
  _flaxBinding10,
  _CupertinoNavigationBar_key,
);
const _flaxBinding115 = FlaxTypeRef(
  "state",
  id: "flax.core/components#type:State",
  dartType: FlaxDartTypes.typeOf<api1.State<api.CupertinoNavigationBar>>,
);
const _flaxBinding116 = <FlaxParameter>[];
const _flaxBinding117 = FlaxInstanceMethod.plain(
  _flaxBinding116,
  _flaxBinding115,
  _CupertinoNavigationBar_createState,
);
const _flaxBinding118 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:StatefulElement",
);
const _flaxBinding119 = FlaxInstanceMethod.plain(
  _flaxBinding116,
  _flaxBinding118,
  _CupertinoNavigationBar_createElement,
);
const _flaxBinding120 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding10, required: false),
  FlaxParameter("leading", _flaxBinding12, required: false),
  FlaxParameter(
    "automaticallyImplyLeading",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "automaticallyImplyMiddle",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("previousPageTitle", flaxNullableStringType, required: false),
  FlaxParameter("middle", _flaxBinding12, required: false),
  FlaxParameter("trailing", _flaxBinding12, required: false),
  FlaxParameter(
    "border",
    _flaxBinding107,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("backgroundColor", _flaxBinding36, required: false),
  FlaxParameter(
    "automaticBackgroundVisibility",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "enableBackgroundFilterBlur",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("brightness", _flaxBinding103, required: false),
  FlaxParameter("padding", _flaxBinding105, required: false),
  FlaxParameter(
    "transitionBetweenRoutes",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("heroTag", flaxAnyType, required: false, omitWhenAbsent: true),
  FlaxParameter("bottom", _flaxBinding112, required: false),
];
const _flaxBinding121 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding10, required: false),
  FlaxParameter("largeTitle", _flaxBinding12, required: false),
  FlaxParameter("leading", _flaxBinding12, required: false),
  FlaxParameter(
    "automaticallyImplyLeading",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "automaticallyImplyTitle",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("previousPageTitle", flaxNullableStringType, required: false),
  FlaxParameter("trailing", _flaxBinding12, required: false),
  FlaxParameter(
    "border",
    _flaxBinding107,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("backgroundColor", _flaxBinding36, required: false),
  FlaxParameter(
    "automaticBackgroundVisibility",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "enableBackgroundFilterBlur",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("brightness", _flaxBinding103, required: false),
  FlaxParameter("padding", _flaxBinding105, required: false),
  FlaxParameter(
    "transitionBetweenRoutes",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("heroTag", flaxAnyType, required: false, omitWhenAbsent: true),
  FlaxParameter("bottom", _flaxBinding112, required: false),
];
const _flaxBinding122 = FlaxObjectBinding(
  "flax.cupertino/cupertino#type:CupertinoNavigationBar",
  [
    _flaxBinding94,
    _flaxBinding95,
    _flaxBinding96,
    _flaxBinding97,
    _flaxBinding98,
    _flaxBinding99,
    _flaxBinding100,
    _flaxBinding101,
    _flaxBinding102,
    _flaxBinding104,
    _flaxBinding106,
    _flaxBinding108,
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding111,
    _flaxBinding113,
    _flaxBinding114,
  ],
  {"createState": _flaxBinding117, "createElement": _flaxBinding119},
  constructors: {"": _flaxBinding120, "large": _flaxBinding121},
  create: _createCupertinoNavigationBar,
  matches: _isCupertinoNavigationBar,
  setters: [],
  supertypes: [
    "flax.core/components#type:StatefulWidget",
    "flax.core/sdk_widgets#type:Widget",
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
    "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
    "flax.core/flutter#type:PreferredSizeWidget",
  ],
  parent: _flaxBinding93,
);
const _flaxBinding123 = FlaxTypeRef(
  "object",
  id: "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget",
  nullable: true,
);
const _flaxBinding124 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextStyle",
);
const _flaxBinding125 = FlaxGetter.plain(
  "textStyle",
  _flaxBinding124,
  _CupertinoTextThemeData_textStyle,
);
const _flaxBinding126 = FlaxGetter.plain(
  "actionTextStyle",
  _flaxBinding124,
  _CupertinoTextThemeData_actionTextStyle,
);
const _flaxBinding127 = FlaxGetter.plain(
  "actionSmallTextStyle",
  _flaxBinding124,
  _CupertinoTextThemeData_actionSmallTextStyle,
);
const _flaxBinding128 = FlaxGetter.plain(
  "tabLabelTextStyle",
  _flaxBinding124,
  _CupertinoTextThemeData_tabLabelTextStyle,
);
const _flaxBinding129 = FlaxGetter.plain(
  "navTitleTextStyle",
  _flaxBinding124,
  _CupertinoTextThemeData_navTitleTextStyle,
);
const _flaxBinding130 = FlaxGetter.plain(
  "navLargeTitleTextStyle",
  _flaxBinding124,
  _CupertinoTextThemeData_navLargeTitleTextStyle,
);
const _flaxBinding131 = FlaxGetter.plain(
  "navActionTextStyle",
  _flaxBinding124,
  _CupertinoTextThemeData_navActionTextStyle,
);
const _flaxBinding132 = FlaxGetter.plain(
  "pickerTextStyle",
  _flaxBinding124,
  _CupertinoTextThemeData_pickerTextStyle,
);
const _flaxBinding133 = FlaxGetter.plain(
  "dateTimePickerTextStyle",
  _flaxBinding124,
  _CupertinoTextThemeData_dateTimePickerTextStyle,
);
const _flaxBinding134 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _CupertinoTextThemeData_toStringShort,
);
const _flaxBinding135 = FlaxInstanceMethod.plain(
  _flaxBinding75,
  flaxStringType,
  _CupertinoTextThemeData_toString,
);
const _flaxBinding136 = FlaxInstanceMethod.plain(
  _flaxBinding71,
  _flaxBinding0,
  _CupertinoTextThemeData_toDiagnosticsNode,
);
const _flaxBinding137 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _CupertinoTextThemeData_debugFillProperties,
);
const _flaxBinding138 = FlaxTypeRef(
  "object",
  id: "flax.cupertino/cupertino#type:CupertinoTextThemeData",
);
const _flaxBinding139 = <FlaxParameter>[
  FlaxParameter.required("context", _flaxBinding6),
];
const _flaxBinding140 = FlaxInstanceMethod.plain(
  _flaxBinding139,
  _flaxBinding138,
  _CupertinoTextThemeData_resolveFrom,
);
const _flaxBinding141 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextStyle",
  nullable: true,
);
const _flaxBinding142 = <FlaxParameter>[
  FlaxParameter("actionSmallTextStyle", _flaxBinding141, required: false),
  FlaxParameter("actionTextStyle", _flaxBinding141, required: false),
  FlaxParameter("dateTimePickerTextStyle", _flaxBinding141, required: false),
  FlaxParameter("navActionTextStyle", _flaxBinding141, required: false),
  FlaxParameter("navLargeTitleTextStyle", _flaxBinding141, required: false),
  FlaxParameter("navTitleTextStyle", _flaxBinding141, required: false),
  FlaxParameter("pickerTextStyle", _flaxBinding141, required: false),
  FlaxParameter("primaryColor", _flaxBinding36, required: false),
  FlaxParameter("tabLabelTextStyle", _flaxBinding141, required: false),
  FlaxParameter("textStyle", _flaxBinding141, required: false),
];
const _flaxBinding143 = FlaxInstanceMethod.plain(
  _flaxBinding142,
  _flaxBinding138,
  _CupertinoTextThemeData_copyWith,
);
const _flaxBinding144 = <FlaxParameter>[
  FlaxParameter(
    "primaryColor",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("textStyle", _flaxBinding141, required: false),
  FlaxParameter("actionTextStyle", _flaxBinding141, required: false),
  FlaxParameter("actionSmallTextStyle", _flaxBinding141, required: false),
  FlaxParameter("tabLabelTextStyle", _flaxBinding141, required: false),
  FlaxParameter("navTitleTextStyle", _flaxBinding141, required: false),
  FlaxParameter("navLargeTitleTextStyle", _flaxBinding141, required: false),
  FlaxParameter("navActionTextStyle", _flaxBinding141, required: false),
  FlaxParameter("pickerTextStyle", _flaxBinding141, required: false),
  FlaxParameter("dateTimePickerTextStyle", _flaxBinding141, required: false),
];
const _flaxBinding145 = FlaxObjectBinding(
  "flax.cupertino/cupertino#type:CupertinoTextThemeData",
  [
    _flaxBinding125,
    _flaxBinding126,
    _flaxBinding127,
    _flaxBinding128,
    _flaxBinding129,
    _flaxBinding130,
    _flaxBinding131,
    _flaxBinding132,
    _flaxBinding133,
  ],
  {
    "toStringShort": _flaxBinding134,
    "toString": _flaxBinding135,
    "toDiagnosticsNode": _flaxBinding136,
    "debugFillProperties": _flaxBinding137,
    "resolveFrom": _flaxBinding140,
    "copyWith": _flaxBinding143,
  },
  constructors: {"": _flaxBinding144},
  create: _createCupertinoTextThemeData,
  matches: _isCupertinoTextThemeData,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding146 = FlaxGetter.plain(
  "brightness",
  _flaxBinding103,
  _NoDefaultCupertinoThemeData_brightness,
);
const _flaxBinding147 = FlaxGetter.plain(
  "primaryColor",
  flaxColorType,
  _CupertinoThemeData_primaryColor,
);
const _flaxBinding148 = FlaxGetter.plain(
  "primaryContrastingColor",
  flaxColorType,
  _CupertinoThemeData_primaryContrastingColor,
);
const _flaxBinding149 = FlaxGetter.plain(
  "textTheme",
  _flaxBinding138,
  _CupertinoThemeData_textTheme,
);
const _flaxBinding150 = FlaxGetter.plain(
  "barBackgroundColor",
  flaxColorType,
  _CupertinoThemeData_barBackgroundColor,
);
const _flaxBinding151 = FlaxGetter.plain(
  "scaffoldBackgroundColor",
  flaxColorType,
  _CupertinoThemeData_scaffoldBackgroundColor,
);
const _flaxBinding152 = FlaxGetter.plain(
  "selectionHandleColor",
  flaxColorType,
  _CupertinoThemeData_selectionHandleColor,
);
const _flaxBinding153 = FlaxGetter.plain(
  "applyThemeToAll",
  flaxBoolType,
  _CupertinoThemeData_applyThemeToAll,
);
const _flaxBinding154 = FlaxTypeRef(
  "object",
  id: "flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData",
);
const _flaxBinding155 = FlaxInstanceMethod.plain(
  _flaxBinding116,
  _flaxBinding154,
  _NoDefaultCupertinoThemeData_noDefault,
);
const _flaxBinding156 = FlaxTypeRef(
  "object",
  id: "flax.cupertino/cupertino#type:CupertinoThemeData",
);
const _flaxBinding157 = FlaxInstanceMethod.plain(
  _flaxBinding139,
  _flaxBinding156,
  _CupertinoThemeData_resolveFrom,
);
const _flaxBinding158 = FlaxTypeRef(
  "object",
  id: "flax.cupertino/cupertino#type:CupertinoTextThemeData",
  nullable: true,
);
const _flaxBinding159 = <FlaxParameter>[
  FlaxParameter("applyThemeToAll", flaxNullableBoolType, required: false),
  FlaxParameter("barBackgroundColor", _flaxBinding36, required: false),
  FlaxParameter("brightness", _flaxBinding103, required: false),
  FlaxParameter("primaryColor", _flaxBinding36, required: false),
  FlaxParameter("primaryContrastingColor", _flaxBinding36, required: false),
  FlaxParameter("scaffoldBackgroundColor", _flaxBinding36, required: false),
  FlaxParameter("selectionHandleColor", _flaxBinding36, required: false),
  FlaxParameter("textTheme", _flaxBinding158, required: false),
];
const _flaxBinding160 = FlaxInstanceMethod.plain(
  _flaxBinding159,
  _flaxBinding156,
  _CupertinoThemeData_copyWith,
);
const _flaxBinding161 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _CupertinoThemeData_toStringShort,
);
const _flaxBinding162 = FlaxInstanceMethod.plain(
  _flaxBinding75,
  flaxStringType,
  _CupertinoThemeData_toString,
);
const _flaxBinding163 = FlaxInstanceMethod.plain(
  _flaxBinding71,
  _flaxBinding0,
  _CupertinoThemeData_toDiagnosticsNode,
);
const _flaxBinding164 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _CupertinoThemeData_debugFillProperties,
);
const _flaxBinding165 = <FlaxParameter>[
  FlaxParameter("brightness", _flaxBinding103, required: false),
  FlaxParameter("primaryColor", _flaxBinding36, required: false),
  FlaxParameter("primaryContrastingColor", _flaxBinding36, required: false),
  FlaxParameter("textTheme", _flaxBinding158, required: false),
  FlaxParameter("barBackgroundColor", _flaxBinding36, required: false),
  FlaxParameter("scaffoldBackgroundColor", _flaxBinding36, required: false),
  FlaxParameter("selectionHandleColor", _flaxBinding36, required: false),
  FlaxParameter("applyThemeToAll", flaxNullableBoolType, required: false),
];
const _flaxBinding166 = <FlaxParameter>[
  FlaxParameter.required("brightness", _flaxBinding103),
  FlaxParameter.required("primaryColor", _flaxBinding36),
  FlaxParameter.required("primaryContrastingColor", _flaxBinding36),
  FlaxParameter.required("textTheme", _flaxBinding158),
  FlaxParameter.required("barBackgroundColor", _flaxBinding36),
  FlaxParameter.required("scaffoldBackgroundColor", _flaxBinding36),
  FlaxParameter.required("selectionHandleColor", _flaxBinding36),
  FlaxParameter.required("applyThemeToAll", flaxNullableBoolType),
];
const _flaxBinding167 = FlaxObjectBinding(
  "flax.cupertino/cupertino#type:CupertinoThemeData",
  [
    _flaxBinding146,
    _flaxBinding147,
    _flaxBinding148,
    _flaxBinding149,
    _flaxBinding150,
    _flaxBinding151,
    _flaxBinding152,
    _flaxBinding153,
  ],
  {
    "noDefault": _flaxBinding155,
    "resolveFrom": _flaxBinding157,
    "copyWith": _flaxBinding160,
    "toStringShort": _flaxBinding161,
    "toString": _flaxBinding162,
    "toDiagnosticsNode": _flaxBinding163,
    "debugFillProperties": _flaxBinding164,
  },
  constructors: {"": _flaxBinding165, "raw": _flaxBinding166},
  create: _createCupertinoThemeData,
  matches: _isCupertinoThemeData,
  setters: [],
  supertypes: [
    "flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding168 = FlaxGetter.plain(
  "primaryColor",
  _flaxBinding36,
  _NoDefaultCupertinoThemeData_primaryColor,
);
const _flaxBinding169 = FlaxGetter.plain(
  "primaryContrastingColor",
  _flaxBinding36,
  _NoDefaultCupertinoThemeData_primaryContrastingColor,
);
const _flaxBinding170 = FlaxGetter.plain(
  "textTheme",
  _flaxBinding158,
  _NoDefaultCupertinoThemeData_textTheme,
);
const _flaxBinding171 = FlaxGetter.plain(
  "barBackgroundColor",
  _flaxBinding36,
  _NoDefaultCupertinoThemeData_barBackgroundColor,
);
const _flaxBinding172 = FlaxGetter.plain(
  "scaffoldBackgroundColor",
  _flaxBinding36,
  _NoDefaultCupertinoThemeData_scaffoldBackgroundColor,
);
const _flaxBinding173 = FlaxGetter.plain(
  "selectionHandleColor",
  _flaxBinding36,
  _NoDefaultCupertinoThemeData_selectionHandleColor,
);
const _flaxBinding174 = FlaxGetter.plain(
  "applyThemeToAll",
  flaxNullableBoolType,
  _NoDefaultCupertinoThemeData_applyThemeToAll,
);
const _flaxBinding175 = FlaxInstanceMethod.plain(
  _flaxBinding139,
  _flaxBinding154,
  _NoDefaultCupertinoThemeData_resolveFrom,
);
const _flaxBinding176 = FlaxInstanceMethod.plain(
  _flaxBinding159,
  _flaxBinding154,
  _NoDefaultCupertinoThemeData_copyWith,
);
const _flaxBinding177 = FlaxObjectBinding(
  "flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData",
  [
    _flaxBinding146,
    _flaxBinding168,
    _flaxBinding169,
    _flaxBinding170,
    _flaxBinding171,
    _flaxBinding172,
    _flaxBinding173,
    _flaxBinding174,
  ],
  {
    "noDefault": _flaxBinding155,
    "resolveFrom": _flaxBinding175,
    "copyWith": _flaxBinding176,
  },
  constructors: {"": _flaxBinding165},
  create: _createNoDefaultCupertinoThemeData,
  matches: _isNoDefaultCupertinoThemeData,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding178 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:HeroController",
);
