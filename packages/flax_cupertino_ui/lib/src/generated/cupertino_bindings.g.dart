// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member
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
            "routes",
            FlaxTypeRef(
              "map",
              item: FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "p0",
                      FlaxTypeRef(
                        "context",
                        id: "flax.core/flutter#type:BuildContext",
                      ),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("widget"),
                  _callback0,
                  id: "callback:<>(p:r:p0:context:flax.core/flutter#type:BuildContext)->widget:",
                  invoke: _callback0Invoke,
                  matches: _callback0Matches,
                ),
              ),
              key: FlaxTypeRef("String"),
              collection: FlaxCollectionBinding(
                "map:[callback:<>(p:r:p0:context:flax.core/flutter#type:BuildContext)->widget:][String:]",
                _collection0Create,
                _collection0Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "initialRoute",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onGenerateRoute",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "settings",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:RouteSettings",
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef(
                  "object",
                  id: "flax.core/flutter#type:Route",
                  dartType: FlaxDartTypes.typeOf<api1.Route<Object?>?>,
                  nullable: true,
                ),
                _callback1,
                id: "callback:<>(p:r:settings:object:flax.core/flutter#type:RouteSettings)->object?:flax.core/flutter#type:Route<Object?><any?:>",
                invoke: _callback1Invoke,
                matches: _callback1Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onGenerateInitialRoutes",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "initialRoute",
                    FlaxTypeRef("String"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef(
                  "list",
                  item: FlaxTypeRef(
                    "object",
                    id: "flax.core/flutter#type:Route",
                    dartType: FlaxDartTypes.typeOf<api1.Route<Object?>>,
                  ),
                  collection: FlaxCollectionBinding(
                    "list:[object:flax.core/flutter#type:Route<Object?><any?:>]",
                    _collection1Create,
                    _collection1Matches,
                  ),
                  iterable: FlaxTypeRef(
                    "iterable",
                    item: FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:Route",
                      dartType: FlaxDartTypes.typeOf<api1.Route<Object?>>,
                    ),
                    collection: FlaxCollectionBinding(
                      "iterable:[object:flax.core/flutter#type:Route<Object?><any?:>]",
                      _collection2Create,
                      _collection2Matches,
                      restore: _collection2Restore,
                    ),
                  ),
                ),
                _callback2,
                id: "callback:<>(p:r:initialRoute:String:)->list:[object:flax.core/flutter#type:Route<Object?><any?:>]",
                invoke: _callback2Invoke,
                matches: _callback2Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onUnknownRoute",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "settings",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:RouteSettings",
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef(
                  "object",
                  id: "flax.core/flutter#type:Route",
                  dartType: FlaxDartTypes.typeOf<api1.Route<Object?>?>,
                  nullable: true,
                ),
                _callback3,
                id: "callback:<>(p:r:settings:object:flax.core/flutter#type:RouteSettings)->object?:flax.core/flutter#type:Route<Object?><any?:>",
                invoke: _callback3Invoke,
                matches: _callback3Matches,
              ),
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
                _collection3Create,
                _collection3Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef(
                  "object",
                  id: "flax.core/flutter#type:NavigatorObserver",
                ),
                collection: FlaxCollectionBinding(
                  "iterable:[object:flax.core/flutter#type:NavigatorObserver]",
                  _collection4Create,
                  _collection4Matches,
                  restore: _collection4Restore,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "builder",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
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
                  FlaxCallbackParameter(
                    "child",
                    FlaxTypeRef("widget", nullable: true),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("widget"),
                _callback4,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:child:widget?:)->widget:",
                invoke: _callback4Invoke,
                matches: _callback4Matches,
                independentWidgetResult: true,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "title",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onGenerateTitle",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
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
                FlaxTypeRef("String"),
                _callback5,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->String:",
                invoke: _callback5Invoke,
                matches: _callback5Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
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
            "showPerformanceOverlay",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "checkerboardRasterCacheImages",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "checkerboardOffscreenLayers",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "showSemanticsDebugger",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "debugShowCheckedModeBanner",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "restorationScopeId",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "useInheritedMediaQuery",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
        "router": [
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
            "builder",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
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
                  FlaxCallbackParameter(
                    "child",
                    FlaxTypeRef("widget", nullable: true),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("widget"),
                _callback6,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:child:widget?:)->widget:",
                invoke: _callback6Invoke,
                matches: _callback6Matches,
                independentWidgetResult: true,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "title",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onGenerateTitle",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
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
                FlaxTypeRef("String"),
                _callback7,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->String:",
                invoke: _callback7Invoke,
                matches: _callback7Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
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
            "showPerformanceOverlay",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "checkerboardRasterCacheImages",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "checkerboardOffscreenLayers",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "showSemanticsDebugger",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "debugShowCheckedModeBanner",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "restorationScopeId",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "useInheritedMediaQuery",
            FlaxTypeRef("bool"),
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
            "padding",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:EdgeInsetsGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
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
            "foregroundColor",
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
            "disabledColor",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "minSize",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "minimumSize",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Size",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "pressedOpacity",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: 0.4,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "borderRadius",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:BorderRadius",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "focusColor",
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
            "focusNode",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:FocusNode",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onFocusChange",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "value",
                    FlaxTypeRef("bool"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback8,
                id: "callback:<>(p:r:value:bool:)->void:",
                invoke: _callback8Invoke,
                matches: _callback8Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mouseCursor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:MouseCursor",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onLongPress",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback9,
                id: "callback:<>()->void:",
                invoke: _callback9Invoke,
                matches: _callback9Matches,
              ),
            ),
            required: false,
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
                _callback10,
                id: "callback:<>()->void:",
                invoke: _callback10Invoke,
                matches: _callback10Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "tinted": [
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
            "padding",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:EdgeInsetsGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
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
            "foregroundColor",
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
            "disabledColor",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "minSize",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "minimumSize",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Size",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "pressedOpacity",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: 0.4,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "borderRadius",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:BorderRadius",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "focusColor",
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
            "focusNode",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:FocusNode",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onFocusChange",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "value",
                    FlaxTypeRef("bool"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback11,
                id: "callback:<>(p:r:value:bool:)->void:",
                invoke: _callback11Invoke,
                matches: _callback11Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mouseCursor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:MouseCursor",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onLongPress",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback12,
                id: "callback:<>()->void:",
                invoke: _callback12Invoke,
                matches: _callback12Matches,
              ),
            ),
            required: false,
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
                _callback13,
                id: "callback:<>()->void:",
                invoke: _callback13Invoke,
                matches: _callback13Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "filled": [
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
            "padding",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:EdgeInsetsGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
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
            "disabledColor",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "foregroundColor",
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
            "minSize",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "minimumSize",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Size",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "pressedOpacity",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: 0.4,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "borderRadius",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:BorderRadius",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "focusColor",
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
            "focusNode",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:FocusNode",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onFocusChange",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "value",
                    FlaxTypeRef("bool"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback14,
                id: "callback:<>(p:r:value:bool:)->void:",
                invoke: _callback14Invoke,
                matches: _callback14Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mouseCursor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:MouseCursor",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onLongPress",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback15,
                id: "callback:<>()->void:",
                invoke: _callback15Invoke,
                matches: _callback15Matches,
              ),
            ),
            required: false,
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
                _callback16,
                id: "callback:<>()->void:",
                invoke: _callback16Invoke,
                matches: _callback16Matches,
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
      "flax.cupertino/cupertino#type:CupertinoNavigationBar",
      [
        FlaxGetter(
          "preferredSize",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Size"),
          _CupertinoNavigationBar_preferredSize,
        ),
        FlaxGetter(
          "largeTitle",
          FlaxTypeRef("widget", nullable: true),
          _CupertinoNavigationBar_largeTitle,
        ),
        FlaxGetter(
          "leading",
          FlaxTypeRef("widget", nullable: true),
          _CupertinoNavigationBar_leading,
        ),
        FlaxGetter(
          "automaticallyImplyLeading",
          FlaxTypeRef("bool"),
          _CupertinoNavigationBar_automaticallyImplyLeading,
        ),
        FlaxGetter(
          "automaticallyImplyMiddle",
          FlaxTypeRef("bool"),
          _CupertinoNavigationBar_automaticallyImplyMiddle,
        ),
        FlaxGetter(
          "previousPageTitle",
          FlaxTypeRef("String", nullable: true),
          _CupertinoNavigationBar_previousPageTitle,
        ),
        FlaxGetter(
          "middle",
          FlaxTypeRef("widget", nullable: true),
          _CupertinoNavigationBar_middle,
        ),
        FlaxGetter(
          "trailing",
          FlaxTypeRef("widget", nullable: true),
          _CupertinoNavigationBar_trailing,
        ),
        FlaxGetter(
          "backgroundColor",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:Color",
            nullable: true,
          ),
          _CupertinoNavigationBar_backgroundColor,
        ),
        FlaxGetter(
          "automaticBackgroundVisibility",
          FlaxTypeRef("bool"),
          _CupertinoNavigationBar_automaticBackgroundVisibility,
        ),
        FlaxGetter(
          "padding",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:EdgeInsetsDirectional",
            nullable: true,
          ),
          _CupertinoNavigationBar_padding,
        ),
        FlaxGetter(
          "border",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:Border",
            nullable: true,
          ),
          _CupertinoNavigationBar_border,
        ),
        FlaxGetter(
          "transitionBetweenRoutes",
          FlaxTypeRef("bool"),
          _CupertinoNavigationBar_transitionBetweenRoutes,
        ),
        FlaxGetter(
          "enableBackgroundFilterBlur",
          FlaxTypeRef("bool"),
          _CupertinoNavigationBar_enableBackgroundFilterBlur,
        ),
        FlaxGetter(
          "heroTag",
          FlaxTypeRef("any"),
          _CupertinoNavigationBar_heroTag,
        ),
        FlaxGetter(
          "bottom",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:PreferredSizeWidget",
            nullable: true,
          ),
          _CupertinoNavigationBar_bottom,
        ),
        FlaxGetter(
          "key",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:Key",
            nullable: true,
          ),
          _CupertinoNavigationBar_key,
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
        "createState": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "state",
            id: "flax.core/components#type:State",
            dartType:
                FlaxDartTypes.typeOf<api1.State<api.CupertinoNavigationBar>>,
          ),
          _CupertinoNavigationBar_createState,
          startsRoute: false,
        ),
        "toStringShort": FlaxInstanceMethod(
          [],
          FlaxTypeRef("String"),
          _CupertinoNavigationBar_toStringShort,
          startsRoute: false,
        ),
        "toStringShallow": FlaxInstanceMethod(
          [
            FlaxParameter(
              "joiner",
              FlaxTypeRef("String"),
              required: false,
              defaultValue: ', ',
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("String"),
          _CupertinoNavigationBar_toStringShallow,
          startsRoute: false,
        ),
        "toStringDeep": FlaxInstanceMethod(
          [
            FlaxParameter(
              "prefixLineOne",
              FlaxTypeRef("String"),
              required: false,
              defaultValue: '',
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "prefixOtherLines",
              FlaxTypeRef("String", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "wrapWidth",
              FlaxTypeRef("int"),
              required: false,
              defaultValue: 65,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("String"),
          _CupertinoNavigationBar_toStringDeep,
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
            "automaticallyImplyMiddle",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "previousPageTitle",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
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
            "automaticBackgroundVisibility",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "enableBackgroundFilterBlur",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "padding",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:EdgeInsetsDirectional",
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
          FlaxParameter(
            "heroTag",
            FlaxTypeRef("any"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "bottom",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:PreferredSizeWidget",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "large": [
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
            "largeTitle",
            FlaxTypeRef("widget", nullable: true),
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
            "automaticallyImplyTitle",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "previousPageTitle",
            FlaxTypeRef("String", nullable: true),
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
            "automaticBackgroundVisibility",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "enableBackgroundFilterBlur",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "padding",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:EdgeInsetsDirectional",
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
          FlaxParameter(
            "heroTag",
            FlaxTypeRef("any"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "bottom",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:PreferredSizeWidget",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
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
    FlaxObjectBinding(
      "flax.cupertino/cupertino#type:CupertinoThemeData",
      [
        FlaxGetter(
          "primaryColor",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _CupertinoThemeData_primaryColor,
        ),
        FlaxGetter(
          "primaryContrastingColor",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _CupertinoThemeData_primaryContrastingColor,
        ),
        FlaxGetter(
          "barBackgroundColor",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _CupertinoThemeData_barBackgroundColor,
        ),
        FlaxGetter(
          "scaffoldBackgroundColor",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _CupertinoThemeData_scaffoldBackgroundColor,
        ),
        FlaxGetter(
          "selectionHandleColor",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _CupertinoThemeData_selectionHandleColor,
        ),
        FlaxGetter(
          "applyThemeToAll",
          FlaxTypeRef("bool"),
          _CupertinoThemeData_applyThemeToAll,
        ),
      ],
      {
        "resolveFrom": FlaxInstanceMethod(
          [
            FlaxParameter(
              "context",
              FlaxTypeRef("context", id: "flax.core/flutter#type:BuildContext"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "object",
            id: "flax.cupertino/cupertino#type:CupertinoThemeData",
          ),
          _CupertinoThemeData_resolveFrom,
          startsRoute: false,
        ),
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "applyThemeToAll",
              FlaxTypeRef("bool", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "barBackgroundColor",
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
              "primaryContrastingColor",
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
            FlaxParameter(
              "selectionHandleColor",
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
          FlaxTypeRef(
            "object",
            id: "flax.cupertino/cupertino#type:CupertinoThemeData",
          ),
          _CupertinoThemeData_copyWith,
          startsRoute: false,
        ),
        "toStringShort": FlaxInstanceMethod(
          [],
          FlaxTypeRef("String"),
          _CupertinoThemeData_toStringShort,
          startsRoute: false,
        ),
      },
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
            "primaryContrastingColor",
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
            "barBackgroundColor",
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
          FlaxParameter(
            "selectionHandleColor",
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
            "applyThemeToAll",
            FlaxTypeRef("bool", nullable: true),
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
            _callback17,
            id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->bool:",
            invoke: _callback17Invoke,
            matches: _callback17Matches,
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
            _callback18,
            id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
            invoke: _callback18Invoke,
            matches: _callback18Matches,
          ),
          hasSuper: false,
        ),
        FlaxProxyMember(
          "preferredSize",
          1,
          FlaxCallbackBinding(
            [],
            FlaxTypeRef("object", id: "flax.core/flutter#type:Size"),
            _callback19,
            id: "callback:<>()->object:flax.core/flutter#type:Size",
            invoke: _callback19Invoke,
            matches: _callback19Matches,
          ),
          hasSuper: false,
        ),
      ]),
    ),
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.cupertino/cupertino#function:CupertinoButton.tapMoveSlop",
      [],
      FlaxTypeRef("double"),
      _CupertinoButton_tapMoveSlop,
    ),
  ],
  moduleId: "flax.cupertino/cupertino",
  dependencyModules: ["flax.core/components", "flax.core/flutter"],
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
          return api.CupertinoApp(
            key: values["key"] as api1.Key?,
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
            color: values["color"] as api1.Color?,
            showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
            checkerboardRasterCacheImages:
                values["checkerboardRasterCacheImages"] as bool,
            checkerboardOffscreenLayers:
                values["checkerboardOffscreenLayers"] as bool,
            showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
            debugShowCheckedModeBanner:
                values["debugShowCheckedModeBanner"] as bool,
            restorationScopeId: values["restorationScopeId"] as String?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          );
        }
        return api.CupertinoApp(
          key: values["key"] as api1.Key?,
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
          color: values["color"] as api1.Color?,
          showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
          checkerboardRasterCacheImages:
              values["checkerboardRasterCacheImages"] as bool,
          checkerboardOffscreenLayers:
              values["checkerboardOffscreenLayers"] as bool,
          showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
          debugShowCheckedModeBanner:
              values["debugShowCheckedModeBanner"] as bool,
          restorationScopeId: values["restorationScopeId"] as String?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
        );
      }
      if (!values.containsKey("navigatorObservers")) {
        return api.CupertinoApp(
          key: values["key"] as api1.Key?,
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
          color: values["color"] as api1.Color?,
          showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
          checkerboardRasterCacheImages:
              values["checkerboardRasterCacheImages"] as bool,
          checkerboardOffscreenLayers:
              values["checkerboardOffscreenLayers"] as bool,
          showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
          debugShowCheckedModeBanner:
              values["debugShowCheckedModeBanner"] as bool,
          restorationScopeId: values["restorationScopeId"] as String?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
        );
      }
      return api.CupertinoApp(
        key: values["key"] as api1.Key?,
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
        color: values["color"] as api1.Color?,
        showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
        checkerboardRasterCacheImages:
            values["checkerboardRasterCacheImages"] as bool,
        checkerboardOffscreenLayers:
            values["checkerboardOffscreenLayers"] as bool,
        showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
        debugShowCheckedModeBanner:
            values["debugShowCheckedModeBanner"] as bool,
        restorationScopeId: values["restorationScopeId"] as String?,
        useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
      );
    case "router":
      return api.CupertinoApp.router(
        key: values["key"] as api1.Key?,
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
        color: values["color"] as api1.Color?,
        showPerformanceOverlay: values["showPerformanceOverlay"] as bool,
        checkerboardRasterCacheImages:
            values["checkerboardRasterCacheImages"] as bool,
        checkerboardOffscreenLayers:
            values["checkerboardOffscreenLayers"] as bool,
        showSemanticsDebugger: values["showSemanticsDebugger"] as bool,
        debugShowCheckedModeBanner:
            values["debugShowCheckedModeBanner"] as bool,
        restorationScopeId: values["restorationScopeId"] as String?,
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
            key: values["key"] as api1.Key?,
            child: values["child"] as api1.Widget,
            padding: values["padding"] as api1.EdgeInsetsGeometry?,
            color: values["color"] as api1.Color?,
            foregroundColor: values["foregroundColor"] as api1.Color?,
            minSize: values["minSize"] as double?,
            minimumSize: values["minimumSize"] as api1.Size?,
            pressedOpacity: values["pressedOpacity"] as double?,
            borderRadius: values["borderRadius"] as api1.BorderRadius?,
            focusColor: values["focusColor"] as api1.Color?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            onFocusChange:
                values["onFocusChange"] as void Function(bool value)?,
            autofocus: values["autofocus"] as bool,
            mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
            onLongPress: values["onLongPress"] as void Function()?,
            onPressed: values["onPressed"] as void Function()?,
          );
        }
        return api.CupertinoButton(
          key: values["key"] as api1.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api1.EdgeInsetsGeometry?,
          color: values["color"] as api1.Color?,
          foregroundColor: values["foregroundColor"] as api1.Color?,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api1.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api1.BorderRadius?,
          alignment: values["alignment"] as api1.AlignmentGeometry,
          focusColor: values["focusColor"] as api1.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      if (!values.containsKey("alignment")) {
        return api.CupertinoButton(
          key: values["key"] as api1.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api1.EdgeInsetsGeometry?,
          color: values["color"] as api1.Color?,
          foregroundColor: values["foregroundColor"] as api1.Color?,
          disabledColor: values["disabledColor"] as api1.Color,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api1.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api1.BorderRadius?,
          focusColor: values["focusColor"] as api1.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      return api.CupertinoButton(
        key: values["key"] as api1.Key?,
        child: values["child"] as api1.Widget,
        padding: values["padding"] as api1.EdgeInsetsGeometry?,
        color: values["color"] as api1.Color?,
        foregroundColor: values["foregroundColor"] as api1.Color?,
        disabledColor: values["disabledColor"] as api1.Color,
        minSize: values["minSize"] as double?,
        minimumSize: values["minimumSize"] as api1.Size?,
        pressedOpacity: values["pressedOpacity"] as double?,
        borderRadius: values["borderRadius"] as api1.BorderRadius?,
        alignment: values["alignment"] as api1.AlignmentGeometry,
        focusColor: values["focusColor"] as api1.Color?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        autofocus: values["autofocus"] as bool,
        mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
        onLongPress: values["onLongPress"] as void Function()?,
        onPressed: values["onPressed"] as void Function()?,
      );
    case "tinted":
      if (!values.containsKey("disabledColor")) {
        if (!values.containsKey("alignment")) {
          return api.CupertinoButton.tinted(
            key: values["key"] as api1.Key?,
            child: values["child"] as api1.Widget,
            padding: values["padding"] as api1.EdgeInsetsGeometry?,
            color: values["color"] as api1.Color?,
            foregroundColor: values["foregroundColor"] as api1.Color?,
            minSize: values["minSize"] as double?,
            minimumSize: values["minimumSize"] as api1.Size?,
            pressedOpacity: values["pressedOpacity"] as double?,
            borderRadius: values["borderRadius"] as api1.BorderRadius?,
            focusColor: values["focusColor"] as api1.Color?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            onFocusChange:
                values["onFocusChange"] as void Function(bool value)?,
            autofocus: values["autofocus"] as bool,
            mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
            onLongPress: values["onLongPress"] as void Function()?,
            onPressed: values["onPressed"] as void Function()?,
          );
        }
        return api.CupertinoButton.tinted(
          key: values["key"] as api1.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api1.EdgeInsetsGeometry?,
          color: values["color"] as api1.Color?,
          foregroundColor: values["foregroundColor"] as api1.Color?,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api1.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api1.BorderRadius?,
          alignment: values["alignment"] as api1.AlignmentGeometry,
          focusColor: values["focusColor"] as api1.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      if (!values.containsKey("alignment")) {
        return api.CupertinoButton.tinted(
          key: values["key"] as api1.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api1.EdgeInsetsGeometry?,
          color: values["color"] as api1.Color?,
          foregroundColor: values["foregroundColor"] as api1.Color?,
          disabledColor: values["disabledColor"] as api1.Color,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api1.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api1.BorderRadius?,
          focusColor: values["focusColor"] as api1.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      return api.CupertinoButton.tinted(
        key: values["key"] as api1.Key?,
        child: values["child"] as api1.Widget,
        padding: values["padding"] as api1.EdgeInsetsGeometry?,
        color: values["color"] as api1.Color?,
        foregroundColor: values["foregroundColor"] as api1.Color?,
        disabledColor: values["disabledColor"] as api1.Color,
        minSize: values["minSize"] as double?,
        minimumSize: values["minimumSize"] as api1.Size?,
        pressedOpacity: values["pressedOpacity"] as double?,
        borderRadius: values["borderRadius"] as api1.BorderRadius?,
        alignment: values["alignment"] as api1.AlignmentGeometry,
        focusColor: values["focusColor"] as api1.Color?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        autofocus: values["autofocus"] as bool,
        mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
        onLongPress: values["onLongPress"] as void Function()?,
        onPressed: values["onPressed"] as void Function()?,
      );
    case "filled":
      if (!values.containsKey("disabledColor")) {
        if (!values.containsKey("alignment")) {
          return api.CupertinoButton.filled(
            key: values["key"] as api1.Key?,
            child: values["child"] as api1.Widget,
            padding: values["padding"] as api1.EdgeInsetsGeometry?,
            color: values["color"] as api1.Color?,
            foregroundColor: values["foregroundColor"] as api1.Color?,
            minSize: values["minSize"] as double?,
            minimumSize: values["minimumSize"] as api1.Size?,
            pressedOpacity: values["pressedOpacity"] as double?,
            borderRadius: values["borderRadius"] as api1.BorderRadius?,
            focusColor: values["focusColor"] as api1.Color?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            onFocusChange:
                values["onFocusChange"] as void Function(bool value)?,
            autofocus: values["autofocus"] as bool,
            mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
            onLongPress: values["onLongPress"] as void Function()?,
            onPressed: values["onPressed"] as void Function()?,
          );
        }
        return api.CupertinoButton.filled(
          key: values["key"] as api1.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api1.EdgeInsetsGeometry?,
          color: values["color"] as api1.Color?,
          foregroundColor: values["foregroundColor"] as api1.Color?,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api1.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api1.BorderRadius?,
          alignment: values["alignment"] as api1.AlignmentGeometry,
          focusColor: values["focusColor"] as api1.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      if (!values.containsKey("alignment")) {
        return api.CupertinoButton.filled(
          key: values["key"] as api1.Key?,
          child: values["child"] as api1.Widget,
          padding: values["padding"] as api1.EdgeInsetsGeometry?,
          color: values["color"] as api1.Color?,
          disabledColor: values["disabledColor"] as api1.Color,
          foregroundColor: values["foregroundColor"] as api1.Color?,
          minSize: values["minSize"] as double?,
          minimumSize: values["minimumSize"] as api1.Size?,
          pressedOpacity: values["pressedOpacity"] as double?,
          borderRadius: values["borderRadius"] as api1.BorderRadius?,
          focusColor: values["focusColor"] as api1.Color?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          onFocusChange: values["onFocusChange"] as void Function(bool value)?,
          autofocus: values["autofocus"] as bool,
          mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
          onLongPress: values["onLongPress"] as void Function()?,
          onPressed: values["onPressed"] as void Function()?,
        );
      }
      return api.CupertinoButton.filled(
        key: values["key"] as api1.Key?,
        child: values["child"] as api1.Widget,
        padding: values["padding"] as api1.EdgeInsetsGeometry?,
        color: values["color"] as api1.Color?,
        disabledColor: values["disabledColor"] as api1.Color,
        foregroundColor: values["foregroundColor"] as api1.Color?,
        minSize: values["minSize"] as double?,
        minimumSize: values["minimumSize"] as api1.Size?,
        pressedOpacity: values["pressedOpacity"] as double?,
        borderRadius: values["borderRadius"] as api1.BorderRadius?,
        alignment: values["alignment"] as api1.AlignmentGeometry,
        focusColor: values["focusColor"] as api1.Color?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        autofocus: values["autofocus"] as bool,
        mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
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

Object? _CupertinoNavigationBar_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).toStringShort();
}

Object? _CupertinoNavigationBar_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).toStringShallow(
    joiner: values["joiner"] as String,
  );
}

Object? _CupertinoNavigationBar_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoNavigationBar).toStringDeep(
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
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
            key: values["key"] as api1.Key?,
            leading: values["leading"] as api1.Widget?,
            automaticallyImplyLeading:
                values["automaticallyImplyLeading"] as bool,
            automaticallyImplyMiddle:
                values["automaticallyImplyMiddle"] as bool,
            previousPageTitle: values["previousPageTitle"] as String?,
            middle: values["middle"] as api1.Widget?,
            trailing: values["trailing"] as api1.Widget?,
            backgroundColor: values["backgroundColor"] as api1.Color?,
            automaticBackgroundVisibility:
                values["automaticBackgroundVisibility"] as bool,
            enableBackgroundFilterBlur:
                values["enableBackgroundFilterBlur"] as bool,
            padding: values["padding"] as api1.EdgeInsetsDirectional?,
            transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
            bottom: values["bottom"] as api1.PreferredSizeWidget?,
          );
        }
        return api.CupertinoNavigationBar(
          key: values["key"] as api1.Key?,
          leading: values["leading"] as api1.Widget?,
          automaticallyImplyLeading:
              values["automaticallyImplyLeading"] as bool,
          automaticallyImplyMiddle: values["automaticallyImplyMiddle"] as bool,
          previousPageTitle: values["previousPageTitle"] as String?,
          middle: values["middle"] as api1.Widget?,
          trailing: values["trailing"] as api1.Widget?,
          backgroundColor: values["backgroundColor"] as api1.Color?,
          automaticBackgroundVisibility:
              values["automaticBackgroundVisibility"] as bool,
          enableBackgroundFilterBlur:
              values["enableBackgroundFilterBlur"] as bool,
          padding: values["padding"] as api1.EdgeInsetsDirectional?,
          transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
          heroTag: values["heroTag"] as Object,
          bottom: values["bottom"] as api1.PreferredSizeWidget?,
        );
      }
      if (!values.containsKey("heroTag")) {
        return api.CupertinoNavigationBar(
          key: values["key"] as api1.Key?,
          leading: values["leading"] as api1.Widget?,
          automaticallyImplyLeading:
              values["automaticallyImplyLeading"] as bool,
          automaticallyImplyMiddle: values["automaticallyImplyMiddle"] as bool,
          previousPageTitle: values["previousPageTitle"] as String?,
          middle: values["middle"] as api1.Widget?,
          trailing: values["trailing"] as api1.Widget?,
          border: values["border"] as api1.Border?,
          backgroundColor: values["backgroundColor"] as api1.Color?,
          automaticBackgroundVisibility:
              values["automaticBackgroundVisibility"] as bool,
          enableBackgroundFilterBlur:
              values["enableBackgroundFilterBlur"] as bool,
          padding: values["padding"] as api1.EdgeInsetsDirectional?,
          transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
          bottom: values["bottom"] as api1.PreferredSizeWidget?,
        );
      }
      return api.CupertinoNavigationBar(
        key: values["key"] as api1.Key?,
        leading: values["leading"] as api1.Widget?,
        automaticallyImplyLeading: values["automaticallyImplyLeading"] as bool,
        automaticallyImplyMiddle: values["automaticallyImplyMiddle"] as bool,
        previousPageTitle: values["previousPageTitle"] as String?,
        middle: values["middle"] as api1.Widget?,
        trailing: values["trailing"] as api1.Widget?,
        border: values["border"] as api1.Border?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        automaticBackgroundVisibility:
            values["automaticBackgroundVisibility"] as bool,
        enableBackgroundFilterBlur:
            values["enableBackgroundFilterBlur"] as bool,
        padding: values["padding"] as api1.EdgeInsetsDirectional?,
        transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
        heroTag: values["heroTag"] as Object,
        bottom: values["bottom"] as api1.PreferredSizeWidget?,
      );
    case "large":
      if (!values.containsKey("border")) {
        if (!values.containsKey("heroTag")) {
          return api.CupertinoNavigationBar.large(
            key: values["key"] as api1.Key?,
            largeTitle: values["largeTitle"] as api1.Widget?,
            leading: values["leading"] as api1.Widget?,
            automaticallyImplyLeading:
                values["automaticallyImplyLeading"] as bool,
            automaticallyImplyTitle: values["automaticallyImplyTitle"] as bool,
            previousPageTitle: values["previousPageTitle"] as String?,
            trailing: values["trailing"] as api1.Widget?,
            backgroundColor: values["backgroundColor"] as api1.Color?,
            automaticBackgroundVisibility:
                values["automaticBackgroundVisibility"] as bool,
            enableBackgroundFilterBlur:
                values["enableBackgroundFilterBlur"] as bool,
            padding: values["padding"] as api1.EdgeInsetsDirectional?,
            transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
            bottom: values["bottom"] as api1.PreferredSizeWidget?,
          );
        }
        return api.CupertinoNavigationBar.large(
          key: values["key"] as api1.Key?,
          largeTitle: values["largeTitle"] as api1.Widget?,
          leading: values["leading"] as api1.Widget?,
          automaticallyImplyLeading:
              values["automaticallyImplyLeading"] as bool,
          automaticallyImplyTitle: values["automaticallyImplyTitle"] as bool,
          previousPageTitle: values["previousPageTitle"] as String?,
          trailing: values["trailing"] as api1.Widget?,
          backgroundColor: values["backgroundColor"] as api1.Color?,
          automaticBackgroundVisibility:
              values["automaticBackgroundVisibility"] as bool,
          enableBackgroundFilterBlur:
              values["enableBackgroundFilterBlur"] as bool,
          padding: values["padding"] as api1.EdgeInsetsDirectional?,
          transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
          heroTag: values["heroTag"] as Object,
          bottom: values["bottom"] as api1.PreferredSizeWidget?,
        );
      }
      if (!values.containsKey("heroTag")) {
        return api.CupertinoNavigationBar.large(
          key: values["key"] as api1.Key?,
          largeTitle: values["largeTitle"] as api1.Widget?,
          leading: values["leading"] as api1.Widget?,
          automaticallyImplyLeading:
              values["automaticallyImplyLeading"] as bool,
          automaticallyImplyTitle: values["automaticallyImplyTitle"] as bool,
          previousPageTitle: values["previousPageTitle"] as String?,
          trailing: values["trailing"] as api1.Widget?,
          border: values["border"] as api1.Border?,
          backgroundColor: values["backgroundColor"] as api1.Color?,
          automaticBackgroundVisibility:
              values["automaticBackgroundVisibility"] as bool,
          enableBackgroundFilterBlur:
              values["enableBackgroundFilterBlur"] as bool,
          padding: values["padding"] as api1.EdgeInsetsDirectional?,
          transitionBetweenRoutes: values["transitionBetweenRoutes"] as bool,
          bottom: values["bottom"] as api1.PreferredSizeWidget?,
        );
      }
      return api.CupertinoNavigationBar.large(
        key: values["key"] as api1.Key?,
        largeTitle: values["largeTitle"] as api1.Widget?,
        leading: values["leading"] as api1.Widget?,
        automaticallyImplyLeading: values["automaticallyImplyLeading"] as bool,
        automaticallyImplyTitle: values["automaticallyImplyTitle"] as bool,
        previousPageTitle: values["previousPageTitle"] as String?,
        trailing: values["trailing"] as api1.Widget?,
        border: values["border"] as api1.Border?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        automaticBackgroundVisibility:
            values["automaticBackgroundVisibility"] as bool,
        enableBackgroundFilterBlur:
            values["enableBackgroundFilterBlur"] as bool,
        padding: values["padding"] as api1.EdgeInsetsDirectional?,
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
    barBackgroundColor: values["barBackgroundColor"] as api1.Color?,
    primaryColor: values["primaryColor"] as api1.Color?,
    primaryContrastingColor: values["primaryContrastingColor"] as api1.Color?,
    scaffoldBackgroundColor: values["scaffoldBackgroundColor"] as api1.Color?,
    selectionHandleColor: values["selectionHandleColor"] as api1.Color?,
  );
}

Object? _CupertinoThemeData_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CupertinoThemeData).toStringShort();
}

Object _createCupertinoThemeData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.CupertinoThemeData(
        primaryColor: values["primaryColor"] as api1.Color?,
        primaryContrastingColor:
            values["primaryContrastingColor"] as api1.Color?,
        barBackgroundColor: values["barBackgroundColor"] as api1.Color?,
        scaffoldBackgroundColor:
            values["scaffoldBackgroundColor"] as api1.Color?,
        selectionHandleColor: values["selectionHandleColor"] as api1.Color?,
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
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  @override
  api1.Widget build(api1.BuildContext context) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      context,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: build');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Widget;
    return _flaxConvertedResult;
  }

  @override
  api1.Size get preferredSize {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as api1.Size;
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
      Object _callback0(FlaxCallback _flaxBridgeCallback) => (_Shape0 p0) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        return _flaxBridgeCallback.call(positional, named) as _Shape1;
      };
      bool _callback0Matches(Object value) =>
          value is _Shape1 Function(_Shape0 p0);
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function as _Shape1 Function(_Shape0 p0))(
          positional[0] as _Shape0,
        );
      }

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
            _callback0,
            id:
                types.key<_Shape1 Function(_Shape0 p0)>() +
                ":callback:<>(p:r:p0:parameter:)->parameter:",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape1<_Shape0, _Shape1, _Shape2>() =>
    (FlaxDartTypes types, bool withinCallback) {
      Object _callback0(FlaxCallback _flaxBridgeCallback) =>
          (_Shape0 p0, _Shape1 p1) {
            final positional = <Object?>[];
            final named = <String, Object?>{};
            positional.add(p0);
            positional.add(p1);
            return _flaxBridgeCallback.call(positional, named) as _Shape2;
          };
      bool _callback0Matches(Object value) =>
          value is _Shape2 Function(_Shape0 context, _Shape1 child);
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function as _Shape2 Function(_Shape0 context, _Shape1 child))(
          positional[0] as _Shape0,
          positional[1] as _Shape1,
        );
      }

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
            _callback0,
            id: types.key<_Shape2 Function(_Shape0 context, _Shape1 child)>() + ":callback:<>(p:r:context:parameter:,p:r:child:parameter:)->parameter:",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape2<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
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
Object _callback0(FlaxCallback _flaxBridgeCallback) => (api1.BuildContext p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api1.Widget;
};
bool _callback0Matches(Object value) =>
    value is api1.Widget Function(api1.BuildContext p0);
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Widget Function(api1.BuildContext p0))(
    positional[0] as api1.BuildContext,
  );
}

Object _callback1(FlaxCallback _flaxBridgeCallback) => (api1.RouteSettings p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api1.Route<Object?>?;
};
bool _callback1Matches(Object value) =>
    value is api1.Route<Object?>? Function(api1.RouteSettings settings);
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.Route<Object?>? Function(api1.RouteSettings settings))(
    positional[0] as api1.RouteSettings,
  );
}

Object _callback2(FlaxCallback _flaxBridgeCallback) => (String p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named)
      as List<api1.Route<Object?>>;
};
bool _callback2Matches(Object value) =>
    value is List<api1.Route<Object?>> Function(String initialRoute);
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as List<api1.Route<Object?>> Function(String initialRoute))(
    positional[0] as String,
  );
}

Object _callback3(FlaxCallback _flaxBridgeCallback) => (api1.RouteSettings p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api1.Route<Object?>?;
};
bool _callback3Matches(Object value) =>
    value is api1.Route<Object?>? Function(api1.RouteSettings settings);
Object? _callback3Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.Route<Object?>? Function(api1.RouteSettings settings))(
    positional[0] as api1.RouteSettings,
  );
}

Object _callback4(FlaxCallback _flaxBridgeCallback) =>
    (api1.BuildContext p0, api1.Widget? p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return _flaxBridgeCallback.call(positional, named) as api1.Widget;
    };
bool _callback4Matches(Object value) =>
    value
        is api1.Widget Function(api1.BuildContext context, api1.Widget? child);
Object? _callback4Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.Widget Function(api1.BuildContext context, api1.Widget? child))(
    positional[0] as api1.BuildContext,
    positional[1] as api1.Widget?,
  );
}

Object _callback5(FlaxCallback _flaxBridgeCallback) => (api1.BuildContext p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as String;
};
bool _callback5Matches(Object value) =>
    value is String Function(api1.BuildContext context);
Object? _callback5Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as String Function(api1.BuildContext context))(
    positional[0] as api1.BuildContext,
  );
}

Object _callback6(FlaxCallback _flaxBridgeCallback) =>
    (api1.BuildContext p0, api1.Widget? p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return _flaxBridgeCallback.call(positional, named) as api1.Widget;
    };
bool _callback6Matches(Object value) =>
    value
        is api1.Widget Function(api1.BuildContext context, api1.Widget? child);
Object? _callback6Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.Widget Function(api1.BuildContext context, api1.Widget? child))(
    positional[0] as api1.BuildContext,
    positional[1] as api1.Widget?,
  );
}

Object _callback7(FlaxCallback _flaxBridgeCallback) => (api1.BuildContext p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as String;
};
bool _callback7Matches(Object value) =>
    value is String Function(api1.BuildContext context);
Object? _callback7Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as String Function(api1.BuildContext context))(
    positional[0] as api1.BuildContext,
  );
}

Object _callback8(FlaxCallback _flaxBridgeCallback) => (bool p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  _flaxBridgeCallback.call(positional, named);
};
bool _callback8Matches(Object value) => value is void Function(bool value);
Object? _callback8Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(bool value))(positional[0] as bool);
  return null;
}

Object _callback9(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  _flaxBridgeCallback.call(positional, named);
};
bool _callback9Matches(Object value) => value is void Function();
Object? _callback9Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback10(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  _flaxBridgeCallback.call(positional, named);
};
bool _callback10Matches(Object value) => value is void Function();
Object? _callback10Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback11(FlaxCallback _flaxBridgeCallback) => (bool p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  _flaxBridgeCallback.call(positional, named);
};
bool _callback11Matches(Object value) => value is void Function(bool value);
Object? _callback11Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(bool value))(positional[0] as bool);
  return null;
}

Object _callback12(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  _flaxBridgeCallback.call(positional, named);
};
bool _callback12Matches(Object value) => value is void Function();
Object? _callback12Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback13(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  _flaxBridgeCallback.call(positional, named);
};
bool _callback13Matches(Object value) => value is void Function();
Object? _callback13Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback14(FlaxCallback _flaxBridgeCallback) => (bool p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  _flaxBridgeCallback.call(positional, named);
};
bool _callback14Matches(Object value) => value is void Function(bool value);
Object? _callback14Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(bool value))(positional[0] as bool);
  return null;
}

Object _callback15(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  _flaxBridgeCallback.call(positional, named);
};
bool _callback15Matches(Object value) => value is void Function();
Object? _callback15Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback16(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  _flaxBridgeCallback.call(positional, named);
};
bool _callback16Matches(Object value) => value is void Function();
Object? _callback16Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback17(FlaxCallback _flaxBridgeCallback) => (api1.BuildContext p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as bool;
};
bool _callback17Matches(Object value) =>
    value is bool Function(api1.BuildContext context);
Object? _callback17Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(api1.BuildContext context))(
    positional[0] as api1.BuildContext,
  );
}

Object _callback18(FlaxCallback _flaxBridgeCallback) => (api1.BuildContext p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api1.Widget;
};
bool _callback18Matches(Object value) =>
    value is api1.Widget Function(api1.BuildContext context);
Object? _callback18Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Widget Function(api1.BuildContext context))(
    positional[0] as api1.BuildContext,
  );
}

Object _callback19(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return _flaxBridgeCallback.call(positional, named) as api1.Size;
};
bool _callback19Matches(Object value) => value is api1.Size Function();
Object? _callback19Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Size Function())();
}

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
