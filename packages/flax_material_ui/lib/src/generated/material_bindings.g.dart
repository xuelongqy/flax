// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import
import 'dart:core';

import 'package:material_ui/material_ui.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart' as api1;

import 'dart:core' as api2;

import 'package:flutter/services.dart' as api3;
import 'package:material_ui/material_ui.dart' as _flaxNative8;
import 'package:flax_material_ui/src/material_page_route.dart'
    as adapterMaterialPage;

// ignore: unused_element
const _flaxOmitted = Object();
const materialBindings = FlaxBindingModule(
  'material',
  [
    FlaxEnumBinding("flax.material/material#type:Brightness", {
      "dark": api.Brightness.dark,
      "light": api.Brightness.light,
    }),
    FlaxEnumBinding("flax.material/material#type:ListTileStyle", {
      "list": api.ListTileStyle.list,
      "drawer": api.ListTileStyle.drawer,
    }),
    FlaxEnumBinding("flax.material/material#type:MaterialType", {
      "canvas": api.MaterialType.canvas,
      "card": api.MaterialType.card,
      "circle": api.MaterialType.circle,
      "button": api.MaterialType.button,
      "transparency": api.MaterialType.transparency,
    }),
    FlaxEnumBinding(
      "flax.material/material#type:NavigationDestinationLabelBehavior",
      {
        "alwaysShow": api.NavigationDestinationLabelBehavior.alwaysShow,
        "alwaysHide": api.NavigationDestinationLabelBehavior.alwaysHide,
        "onlyShowSelected":
            api.NavigationDestinationLabelBehavior.onlyShowSelected,
      },
    ),
    FlaxEnumBinding("flax.material/material#type:TextInputAction", {
      "none": api.TextInputAction.none,
      "unspecified": api.TextInputAction.unspecified,
      "done": api.TextInputAction.done,
      "go": api.TextInputAction.go,
      "search": api.TextInputAction.search,
      "send": api.TextInputAction.send,
      "next": api.TextInputAction.next,
      "previous": api.TextInputAction.previous,
      "continueAction": api.TextInputAction.continueAction,
      "join": api.TextInputAction.join,
      "route": api.TextInputAction.route,
      "emergencyCall": api.TextInputAction.emergencyCall,
      "newline": api.TextInputAction.newline,
    }),
    FlaxEnumBinding("flax.material/material#type:ThemeMode", {
      "system": api.ThemeMode.system,
      "light": api.ThemeMode.light,
      "dark": api.ThemeMode.dark,
    }),
    FlaxWidgetBinding(
      "flax.material/material#type:Material",
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
            "type",
            FlaxTypeRef("enum", id: "flax.material/material#type:MaterialType"),
            required: false,
            defaultValue: api.MaterialType.canvas,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "elevation",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
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
            "shadowColor",
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
            "surfaceTintColor",
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
            "textStyle",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "borderRadius",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:BorderRadiusGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "shape",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:ShapeBorder",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "clipBehavior",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:Clip"),
            required: false,
            defaultValue: api1.Clip.none,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _MaterialHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:InkWell",
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
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onTap",
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
                _callback1,
                id: "callback:<>()->void:",
                invoke: _callback1Invoke,
                matches: _callback1Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onHighlightChanged",
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
                _callback2,
                id: "callback:<>(p:r:value:bool:)->void:",
                invoke: _callback2Invoke,
                matches: _callback2Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onHover",
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
                _callback3,
                id: "callback:<>(p:r:value:bool:)->void:",
                invoke: _callback3Invoke,
                matches: _callback3Matches,
              ),
            ),
            required: false,
            defaultValue: null,
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
            "hoverColor",
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
            "highlightColor",
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
            "splashColor",
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
            "customBorder",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:ShapeBorder",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "enableFeedback",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
        ],
      },
      _InkWellHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:LinearProgressIndicator",
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
            "value",
            FlaxTypeRef("double", nullable: true),
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
            "minHeight",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "semanticsLabel",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "semanticsValue",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "borderRadius",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:BorderRadiusGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _LinearProgressIndicatorHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:AlertDialog",
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
            "title",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "content",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "actions",
            FlaxTypeRef(
              "list",
              nullable: true,
              item: FlaxTypeRef("widget"),
              collection: FlaxCollectionBinding(
                "list:[widget:]",
                _collection0Create,
                _collection0Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("widget"),
                collection: FlaxCollectionBinding(
                  "iterable:[widget:]",
                  _collection1Create,
                  _collection1Matches,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "scrollable",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
      },
      _AlertDialogHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:MaterialApp",
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
            "navigatorObservers",
            FlaxTypeRef(
              "list",
              item: FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:NavigatorObserver",
              ),
              collection: FlaxCollectionBinding(
                "list:[object:flax.core/flutter#type:NavigatorObserver]",
                _collection2Create,
                _collection2Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef(
                  "object",
                  id: "flax.core/flutter#type:NavigatorObserver",
                ),
                collection: FlaxCollectionBinding(
                  "iterable:[object:flax.core/flutter#type:NavigatorObserver]",
                  _collection3Create,
                  _collection3Matches,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "title",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: '',
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "theme",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ThemeData",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "darkTheme",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ThemeData",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "themeMode",
            FlaxTypeRef(
              "enum",
              id: "flax.material/material#type:ThemeMode",
              nullable: true,
            ),
            required: false,
            defaultValue: api.ThemeMode.system,
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
      _MaterialAppHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Scaffold",
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
            "appBar",
            FlaxTypeRef(
              "widget",
              id: "flax.core/flutter#type:PreferredSizeWidget",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "body",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "floatingActionButton",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "drawer",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "endDrawer",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "bottomNavigationBar",
            FlaxTypeRef("widget", nullable: true),
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
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "primary",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "extendBody",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "extendBodyBehindAppBar",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
      },
      _ScaffoldHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:RefreshIndicator",
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
            "onRefresh",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef(
                  "future",
                  item: FlaxTypeRef("void"),
                  future: FlaxFutureBinding("void:", _future0Adapt),
                ),
                _callback4,
                id: "callback:<>()->future:[void:]",
                invoke: _callback4Invoke,
                matches: _callback4Matches,
              ),
            ),
            required: true,
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
        ],
      },
      _RefreshIndicatorHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxObjectBinding(
      "flax.material/material#type:ButtonStyle",
      [
        FlaxGetter(
          "backgroundColor",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:WidgetStateProperty",
            nullable: true,
            deferredFactories: {
              "resolveWith": FlaxDeferredFactoryBinding(
                "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
                [
                  FlaxParameter(
                    "callback",
                    FlaxTypeRef(
                      "callback",
                      callback: FlaxCallbackBinding(
                        [
                          FlaxCallbackParameter(
                            "states",
                            FlaxTypeRef(
                              "set",
                              item: FlaxTypeRef(
                                "enum",
                                id: "flax.core/flutter#type:WidgetState",
                              ),
                              collection: FlaxCollectionBinding(
                                "set:[enum:flax.core/flutter#type:WidgetState]",
                                _collection4Create,
                                _collection4Matches,
                              ),
                              iterable: FlaxTypeRef(
                                "iterable",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection5Create,
                                  _collection5Matches,
                                ),
                              ),
                            ),
                            required: true,
                            positional: true,
                          ),
                        ],
                        FlaxTypeRef(
                          "object",
                          id: "flax.core/flutter#type:Color",
                          nullable: true,
                        ),
                        _callback5,
                        id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
                        invoke: _callback5Invoke,
                        matches: _callback5Matches,
                      ),
                    ),
                    required: true,
                    defaultValue: null,
                    omitWhenAbsent: false,
                  ),
                ],
                _deferred0,
              ),
            },
          ),
          _ButtonStyle_backgroundColor,
        ),
        FlaxGetter(
          "foregroundColor",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:WidgetStateProperty",
            nullable: true,
            deferredFactories: {
              "resolveWith": FlaxDeferredFactoryBinding(
                "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
                [
                  FlaxParameter(
                    "callback",
                    FlaxTypeRef(
                      "callback",
                      callback: FlaxCallbackBinding(
                        [
                          FlaxCallbackParameter(
                            "states",
                            FlaxTypeRef(
                              "set",
                              item: FlaxTypeRef(
                                "enum",
                                id: "flax.core/flutter#type:WidgetState",
                              ),
                              collection: FlaxCollectionBinding(
                                "set:[enum:flax.core/flutter#type:WidgetState]",
                                _collection4Create,
                                _collection4Matches,
                              ),
                              iterable: FlaxTypeRef(
                                "iterable",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection5Create,
                                  _collection5Matches,
                                ),
                              ),
                            ),
                            required: true,
                            positional: true,
                          ),
                        ],
                        FlaxTypeRef(
                          "object",
                          id: "flax.core/flutter#type:Color",
                          nullable: true,
                        ),
                        _callback6,
                        id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
                        invoke: _callback6Invoke,
                        matches: _callback6Matches,
                      ),
                    ),
                    required: true,
                    defaultValue: null,
                    omitWhenAbsent: false,
                  ),
                ],
                _deferred0,
              ),
            },
          ),
          _ButtonStyle_foregroundColor,
        ),
        FlaxGetter(
          "overlayColor",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:WidgetStateProperty",
            nullable: true,
            deferredFactories: {
              "resolveWith": FlaxDeferredFactoryBinding(
                "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
                [
                  FlaxParameter(
                    "callback",
                    FlaxTypeRef(
                      "callback",
                      callback: FlaxCallbackBinding(
                        [
                          FlaxCallbackParameter(
                            "states",
                            FlaxTypeRef(
                              "set",
                              item: FlaxTypeRef(
                                "enum",
                                id: "flax.core/flutter#type:WidgetState",
                              ),
                              collection: FlaxCollectionBinding(
                                "set:[enum:flax.core/flutter#type:WidgetState]",
                                _collection4Create,
                                _collection4Matches,
                              ),
                              iterable: FlaxTypeRef(
                                "iterable",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection5Create,
                                  _collection5Matches,
                                ),
                              ),
                            ),
                            required: true,
                            positional: true,
                          ),
                        ],
                        FlaxTypeRef(
                          "object",
                          id: "flax.core/flutter#type:Color",
                          nullable: true,
                        ),
                        _callback7,
                        id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
                        invoke: _callback7Invoke,
                        matches: _callback7Matches,
                      ),
                    ),
                    required: true,
                    defaultValue: null,
                    omitWhenAbsent: false,
                  ),
                ],
                _deferred0,
              ),
            },
          ),
          _ButtonStyle_overlayColor,
        ),
        FlaxGetter(
          "elevation",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:WidgetStateProperty",
            nullable: true,
            deferredFactories: {
              "resolveWith": FlaxDeferredFactoryBinding(
                "object:flax.core/flutter#type:WidgetStateProperty<Object?><double?:>",
                [
                  FlaxParameter(
                    "callback",
                    FlaxTypeRef(
                      "callback",
                      callback: FlaxCallbackBinding(
                        [
                          FlaxCallbackParameter(
                            "states",
                            FlaxTypeRef(
                              "set",
                              item: FlaxTypeRef(
                                "enum",
                                id: "flax.core/flutter#type:WidgetState",
                              ),
                              collection: FlaxCollectionBinding(
                                "set:[enum:flax.core/flutter#type:WidgetState]",
                                _collection4Create,
                                _collection4Matches,
                              ),
                              iterable: FlaxTypeRef(
                                "iterable",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection5Create,
                                  _collection5Matches,
                                ),
                              ),
                            ),
                            required: true,
                            positional: true,
                          ),
                        ],
                        FlaxTypeRef("double", nullable: true),
                        _callback8,
                        id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->double?:",
                        invoke: _callback8Invoke,
                        matches: _callback8Matches,
                      ),
                    ),
                    required: true,
                    defaultValue: null,
                    omitWhenAbsent: false,
                  ),
                ],
                _deferred1,
              ),
            },
          ),
          _ButtonStyle_elevation,
        ),
        FlaxGetter(
          "shape",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:WidgetStateProperty",
            nullable: true,
            deferredFactories: {
              "resolveWith": FlaxDeferredFactoryBinding(
                "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:OutlinedBorder>",
                [
                  FlaxParameter(
                    "callback",
                    FlaxTypeRef(
                      "callback",
                      callback: FlaxCallbackBinding(
                        [
                          FlaxCallbackParameter(
                            "states",
                            FlaxTypeRef(
                              "set",
                              item: FlaxTypeRef(
                                "enum",
                                id: "flax.core/flutter#type:WidgetState",
                              ),
                              collection: FlaxCollectionBinding(
                                "set:[enum:flax.core/flutter#type:WidgetState]",
                                _collection4Create,
                                _collection4Matches,
                              ),
                              iterable: FlaxTypeRef(
                                "iterable",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection5Create,
                                  _collection5Matches,
                                ),
                              ),
                            ),
                            required: true,
                            positional: true,
                          ),
                        ],
                        FlaxTypeRef(
                          "object",
                          id: "flax.core/flutter#type:OutlinedBorder",
                          nullable: true,
                        ),
                        _callback9,
                        id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:OutlinedBorder",
                        invoke: _callback9Invoke,
                        matches: _callback9Matches,
                      ),
                    ),
                    required: true,
                    defaultValue: null,
                    omitWhenAbsent: false,
                  ),
                ],
                _deferred2,
              ),
            },
          ),
          _ButtonStyle_shape,
        ),
        FlaxGetter(
          "mouseCursor",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:WidgetStateProperty",
            nullable: true,
            deferredFactories: {
              "resolveWith": FlaxDeferredFactoryBinding(
                "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:MouseCursor>",
                [
                  FlaxParameter(
                    "callback",
                    FlaxTypeRef(
                      "callback",
                      callback: FlaxCallbackBinding(
                        [
                          FlaxCallbackParameter(
                            "states",
                            FlaxTypeRef(
                              "set",
                              item: FlaxTypeRef(
                                "enum",
                                id: "flax.core/flutter#type:WidgetState",
                              ),
                              collection: FlaxCollectionBinding(
                                "set:[enum:flax.core/flutter#type:WidgetState]",
                                _collection4Create,
                                _collection4Matches,
                              ),
                              iterable: FlaxTypeRef(
                                "iterable",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection5Create,
                                  _collection5Matches,
                                ),
                              ),
                            ),
                            required: true,
                            positional: true,
                          ),
                        ],
                        FlaxTypeRef(
                          "object",
                          id: "flax.core/flutter#type:MouseCursor",
                          nullable: true,
                        ),
                        _callback10,
                        id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:MouseCursor",
                        invoke: _callback10Invoke,
                        matches: _callback10Matches,
                      ),
                    ),
                    required: true,
                    defaultValue: null,
                    omitWhenAbsent: false,
                  ),
                ],
                _deferred3,
              ),
            },
          ),
          _ButtonStyle_mouseCursor,
        ),
        FlaxGetter(
          "visualDensity",
          FlaxTypeRef(
            "object",
            id: "flax.material/material#type:VisualDensity",
            nullable: true,
          ),
          _ButtonStyle_visualDensity,
        ),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "backgroundColor",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:WidgetStateProperty",
                nullable: true,
                deferredFactories: {
                  "resolveWith": FlaxDeferredFactoryBinding(
                    "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
                    [
                      FlaxParameter(
                        "callback",
                        FlaxTypeRef(
                          "callback",
                          callback: FlaxCallbackBinding(
                            [
                              FlaxCallbackParameter(
                                "states",
                                FlaxTypeRef(
                                  "set",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "set:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection4Create,
                                    _collection4Matches,
                                  ),
                                  iterable: FlaxTypeRef(
                                    "iterable",
                                    item: FlaxTypeRef(
                                      "enum",
                                      id: "flax.core/flutter#type:WidgetState",
                                    ),
                                    collection: FlaxCollectionBinding(
                                      "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                      _collection5Create,
                                      _collection5Matches,
                                    ),
                                  ),
                                ),
                                required: true,
                                positional: true,
                              ),
                            ],
                            FlaxTypeRef(
                              "object",
                              id: "flax.core/flutter#type:Color",
                              nullable: true,
                            ),
                            _callback11,
                            id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
                            invoke: _callback11Invoke,
                            matches: _callback11Matches,
                          ),
                        ),
                        required: true,
                        defaultValue: null,
                        omitWhenAbsent: false,
                      ),
                    ],
                    _deferred0,
                  ),
                },
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "elevation",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:WidgetStateProperty",
                nullable: true,
                deferredFactories: {
                  "resolveWith": FlaxDeferredFactoryBinding(
                    "object:flax.core/flutter#type:WidgetStateProperty<Object?><double?:>",
                    [
                      FlaxParameter(
                        "callback",
                        FlaxTypeRef(
                          "callback",
                          callback: FlaxCallbackBinding(
                            [
                              FlaxCallbackParameter(
                                "states",
                                FlaxTypeRef(
                                  "set",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "set:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection4Create,
                                    _collection4Matches,
                                  ),
                                  iterable: FlaxTypeRef(
                                    "iterable",
                                    item: FlaxTypeRef(
                                      "enum",
                                      id: "flax.core/flutter#type:WidgetState",
                                    ),
                                    collection: FlaxCollectionBinding(
                                      "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                      _collection5Create,
                                      _collection5Matches,
                                    ),
                                  ),
                                ),
                                required: true,
                                positional: true,
                              ),
                            ],
                            FlaxTypeRef("double", nullable: true),
                            _callback12,
                            id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->double?:",
                            invoke: _callback12Invoke,
                            matches: _callback12Matches,
                          ),
                        ),
                        required: true,
                        defaultValue: null,
                        omitWhenAbsent: false,
                      ),
                    ],
                    _deferred1,
                  ),
                },
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "foregroundColor",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:WidgetStateProperty",
                nullable: true,
                deferredFactories: {
                  "resolveWith": FlaxDeferredFactoryBinding(
                    "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
                    [
                      FlaxParameter(
                        "callback",
                        FlaxTypeRef(
                          "callback",
                          callback: FlaxCallbackBinding(
                            [
                              FlaxCallbackParameter(
                                "states",
                                FlaxTypeRef(
                                  "set",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "set:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection4Create,
                                    _collection4Matches,
                                  ),
                                  iterable: FlaxTypeRef(
                                    "iterable",
                                    item: FlaxTypeRef(
                                      "enum",
                                      id: "flax.core/flutter#type:WidgetState",
                                    ),
                                    collection: FlaxCollectionBinding(
                                      "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                      _collection5Create,
                                      _collection5Matches,
                                    ),
                                  ),
                                ),
                                required: true,
                                positional: true,
                              ),
                            ],
                            FlaxTypeRef(
                              "object",
                              id: "flax.core/flutter#type:Color",
                              nullable: true,
                            ),
                            _callback13,
                            id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
                            invoke: _callback13Invoke,
                            matches: _callback13Matches,
                          ),
                        ),
                        required: true,
                        defaultValue: null,
                        omitWhenAbsent: false,
                      ),
                    ],
                    _deferred0,
                  ),
                },
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "mouseCursor",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:WidgetStateProperty",
                nullable: true,
                deferredFactories: {
                  "resolveWith": FlaxDeferredFactoryBinding(
                    "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:MouseCursor>",
                    [
                      FlaxParameter(
                        "callback",
                        FlaxTypeRef(
                          "callback",
                          callback: FlaxCallbackBinding(
                            [
                              FlaxCallbackParameter(
                                "states",
                                FlaxTypeRef(
                                  "set",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "set:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection4Create,
                                    _collection4Matches,
                                  ),
                                  iterable: FlaxTypeRef(
                                    "iterable",
                                    item: FlaxTypeRef(
                                      "enum",
                                      id: "flax.core/flutter#type:WidgetState",
                                    ),
                                    collection: FlaxCollectionBinding(
                                      "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                      _collection5Create,
                                      _collection5Matches,
                                    ),
                                  ),
                                ),
                                required: true,
                                positional: true,
                              ),
                            ],
                            FlaxTypeRef(
                              "object",
                              id: "flax.core/flutter#type:MouseCursor",
                              nullable: true,
                            ),
                            _callback14,
                            id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:MouseCursor",
                            invoke: _callback14Invoke,
                            matches: _callback14Matches,
                          ),
                        ),
                        required: true,
                        defaultValue: null,
                        omitWhenAbsent: false,
                      ),
                    ],
                    _deferred3,
                  ),
                },
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "overlayColor",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:WidgetStateProperty",
                nullable: true,
                deferredFactories: {
                  "resolveWith": FlaxDeferredFactoryBinding(
                    "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
                    [
                      FlaxParameter(
                        "callback",
                        FlaxTypeRef(
                          "callback",
                          callback: FlaxCallbackBinding(
                            [
                              FlaxCallbackParameter(
                                "states",
                                FlaxTypeRef(
                                  "set",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "set:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection4Create,
                                    _collection4Matches,
                                  ),
                                  iterable: FlaxTypeRef(
                                    "iterable",
                                    item: FlaxTypeRef(
                                      "enum",
                                      id: "flax.core/flutter#type:WidgetState",
                                    ),
                                    collection: FlaxCollectionBinding(
                                      "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                      _collection5Create,
                                      _collection5Matches,
                                    ),
                                  ),
                                ),
                                required: true,
                                positional: true,
                              ),
                            ],
                            FlaxTypeRef(
                              "object",
                              id: "flax.core/flutter#type:Color",
                              nullable: true,
                            ),
                            _callback15,
                            id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
                            invoke: _callback15Invoke,
                            matches: _callback15Matches,
                          ),
                        ),
                        required: true,
                        defaultValue: null,
                        omitWhenAbsent: false,
                      ),
                    ],
                    _deferred0,
                  ),
                },
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "shape",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:WidgetStateProperty",
                nullable: true,
                deferredFactories: {
                  "resolveWith": FlaxDeferredFactoryBinding(
                    "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:OutlinedBorder>",
                    [
                      FlaxParameter(
                        "callback",
                        FlaxTypeRef(
                          "callback",
                          callback: FlaxCallbackBinding(
                            [
                              FlaxCallbackParameter(
                                "states",
                                FlaxTypeRef(
                                  "set",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "set:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection4Create,
                                    _collection4Matches,
                                  ),
                                  iterable: FlaxTypeRef(
                                    "iterable",
                                    item: FlaxTypeRef(
                                      "enum",
                                      id: "flax.core/flutter#type:WidgetState",
                                    ),
                                    collection: FlaxCollectionBinding(
                                      "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                      _collection5Create,
                                      _collection5Matches,
                                    ),
                                  ),
                                ),
                                required: true,
                                positional: true,
                              ),
                            ],
                            FlaxTypeRef(
                              "object",
                              id: "flax.core/flutter#type:OutlinedBorder",
                              nullable: true,
                            ),
                            _callback16,
                            id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:OutlinedBorder",
                            invoke: _callback16Invoke,
                            matches: _callback16Matches,
                          ),
                        ),
                        required: true,
                        defaultValue: null,
                        omitWhenAbsent: false,
                      ),
                    ],
                    _deferred2,
                  ),
                },
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "visualDensity",
              FlaxTypeRef(
                "object",
                id: "flax.material/material#type:VisualDensity",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.material/material#type:ButtonStyle"),
          _ButtonStyle_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "backgroundColor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:WidgetStateProperty",
              nullable: true,
              deferredFactories: {
                "resolveWith": FlaxDeferredFactoryBinding(
                  "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
                  [
                    FlaxParameter(
                      "callback",
                      FlaxTypeRef(
                        "callback",
                        callback: FlaxCallbackBinding(
                          [
                            FlaxCallbackParameter(
                              "states",
                              FlaxTypeRef(
                                "set",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "set:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection4Create,
                                  _collection4Matches,
                                ),
                                iterable: FlaxTypeRef(
                                  "iterable",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection5Create,
                                    _collection5Matches,
                                  ),
                                ),
                              ),
                              required: true,
                              positional: true,
                            ),
                          ],
                          FlaxTypeRef(
                            "object",
                            id: "flax.core/flutter#type:Color",
                            nullable: true,
                          ),
                          _callback17,
                          id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
                          invoke: _callback17Invoke,
                          matches: _callback17Matches,
                        ),
                      ),
                      required: true,
                      defaultValue: null,
                      omitWhenAbsent: false,
                    ),
                  ],
                  _deferred0,
                ),
              },
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "foregroundColor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:WidgetStateProperty",
              nullable: true,
              deferredFactories: {
                "resolveWith": FlaxDeferredFactoryBinding(
                  "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
                  [
                    FlaxParameter(
                      "callback",
                      FlaxTypeRef(
                        "callback",
                        callback: FlaxCallbackBinding(
                          [
                            FlaxCallbackParameter(
                              "states",
                              FlaxTypeRef(
                                "set",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "set:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection4Create,
                                  _collection4Matches,
                                ),
                                iterable: FlaxTypeRef(
                                  "iterable",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection5Create,
                                    _collection5Matches,
                                  ),
                                ),
                              ),
                              required: true,
                              positional: true,
                            ),
                          ],
                          FlaxTypeRef(
                            "object",
                            id: "flax.core/flutter#type:Color",
                            nullable: true,
                          ),
                          _callback18,
                          id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
                          invoke: _callback18Invoke,
                          matches: _callback18Matches,
                        ),
                      ),
                      required: true,
                      defaultValue: null,
                      omitWhenAbsent: false,
                    ),
                  ],
                  _deferred0,
                ),
              },
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "overlayColor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:WidgetStateProperty",
              nullable: true,
              deferredFactories: {
                "resolveWith": FlaxDeferredFactoryBinding(
                  "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
                  [
                    FlaxParameter(
                      "callback",
                      FlaxTypeRef(
                        "callback",
                        callback: FlaxCallbackBinding(
                          [
                            FlaxCallbackParameter(
                              "states",
                              FlaxTypeRef(
                                "set",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "set:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection4Create,
                                  _collection4Matches,
                                ),
                                iterable: FlaxTypeRef(
                                  "iterable",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection5Create,
                                    _collection5Matches,
                                  ),
                                ),
                              ),
                              required: true,
                              positional: true,
                            ),
                          ],
                          FlaxTypeRef(
                            "object",
                            id: "flax.core/flutter#type:Color",
                            nullable: true,
                          ),
                          _callback19,
                          id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
                          invoke: _callback19Invoke,
                          matches: _callback19Matches,
                        ),
                      ),
                      required: true,
                      defaultValue: null,
                      omitWhenAbsent: false,
                    ),
                  ],
                  _deferred0,
                ),
              },
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "elevation",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:WidgetStateProperty",
              nullable: true,
              deferredFactories: {
                "resolveWith": FlaxDeferredFactoryBinding(
                  "object:flax.core/flutter#type:WidgetStateProperty<Object?><double?:>",
                  [
                    FlaxParameter(
                      "callback",
                      FlaxTypeRef(
                        "callback",
                        callback: FlaxCallbackBinding(
                          [
                            FlaxCallbackParameter(
                              "states",
                              FlaxTypeRef(
                                "set",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "set:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection4Create,
                                  _collection4Matches,
                                ),
                                iterable: FlaxTypeRef(
                                  "iterable",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection5Create,
                                    _collection5Matches,
                                  ),
                                ),
                              ),
                              required: true,
                              positional: true,
                            ),
                          ],
                          FlaxTypeRef("double", nullable: true),
                          _callback20,
                          id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->double?:",
                          invoke: _callback20Invoke,
                          matches: _callback20Matches,
                        ),
                      ),
                      required: true,
                      defaultValue: null,
                      omitWhenAbsent: false,
                    ),
                  ],
                  _deferred1,
                ),
              },
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "shape",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:WidgetStateProperty",
              nullable: true,
              deferredFactories: {
                "resolveWith": FlaxDeferredFactoryBinding(
                  "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:OutlinedBorder>",
                  [
                    FlaxParameter(
                      "callback",
                      FlaxTypeRef(
                        "callback",
                        callback: FlaxCallbackBinding(
                          [
                            FlaxCallbackParameter(
                              "states",
                              FlaxTypeRef(
                                "set",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "set:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection4Create,
                                  _collection4Matches,
                                ),
                                iterable: FlaxTypeRef(
                                  "iterable",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection5Create,
                                    _collection5Matches,
                                  ),
                                ),
                              ),
                              required: true,
                              positional: true,
                            ),
                          ],
                          FlaxTypeRef(
                            "object",
                            id: "flax.core/flutter#type:OutlinedBorder",
                            nullable: true,
                          ),
                          _callback21,
                          id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:OutlinedBorder",
                          invoke: _callback21Invoke,
                          matches: _callback21Matches,
                        ),
                      ),
                      required: true,
                      defaultValue: null,
                      omitWhenAbsent: false,
                    ),
                  ],
                  _deferred2,
                ),
              },
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mouseCursor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:WidgetStateProperty",
              nullable: true,
              deferredFactories: {
                "resolveWith": FlaxDeferredFactoryBinding(
                  "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:MouseCursor>",
                  [
                    FlaxParameter(
                      "callback",
                      FlaxTypeRef(
                        "callback",
                        callback: FlaxCallbackBinding(
                          [
                            FlaxCallbackParameter(
                              "states",
                              FlaxTypeRef(
                                "set",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "set:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection4Create,
                                  _collection4Matches,
                                ),
                                iterable: FlaxTypeRef(
                                  "iterable",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection5Create,
                                    _collection5Matches,
                                  ),
                                ),
                              ),
                              required: true,
                              positional: true,
                            ),
                          ],
                          FlaxTypeRef(
                            "object",
                            id: "flax.core/flutter#type:MouseCursor",
                            nullable: true,
                          ),
                          _callback22,
                          id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:MouseCursor",
                          invoke: _callback22Invoke,
                          matches: _callback22Matches,
                        ),
                      ),
                      required: true,
                      defaultValue: null,
                      omitWhenAbsent: false,
                    ),
                  ],
                  _deferred3,
                ),
              },
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "visualDensity",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:VisualDensity",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createButtonStyle,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isButtonStyle,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.material/material#type:VisualDensity",
      [
        FlaxGetter(
          "horizontal",
          FlaxTypeRef("double"),
          _VisualDensity_horizontal,
        ),
        FlaxGetter("vertical", FlaxTypeRef("double"), _VisualDensity_vertical),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "horizontal",
              FlaxTypeRef("double", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "vertical",
              FlaxTypeRef("double", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "object",
            id: "flax.material/material#type:VisualDensity",
          ),
          _VisualDensity_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "horizontal",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "vertical",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createVisualDensity,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isVisualDensity,
      methods: {},
      staticGetters: {
        "standard": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.material/material#type:VisualDensity",
          ),
          _VisualDensity_static_standard,
        ),
        "comfortable": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.material/material#type:VisualDensity",
          ),
          _VisualDensity_static_comfortable,
        ),
        "compact": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.material/material#type:VisualDensity",
          ),
          _VisualDensity_static_compact,
        ),
      },
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:AppBar",
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
            "title",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "actions",
            FlaxTypeRef(
              "list",
              nullable: true,
              item: FlaxTypeRef("widget"),
              collection: FlaxCollectionBinding(
                "list:[widget:]",
                _collection0Create,
                _collection0Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("widget"),
                collection: FlaxCollectionBinding(
                  "iterable:[widget:]",
                  _collection1Create,
                  _collection1Matches,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "bottom",
            FlaxTypeRef(
              "widget",
              id: "flax.core/flutter#type:PreferredSizeWidget",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "elevation",
            FlaxTypeRef("double", nullable: true),
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
            "primary",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "centerTitle",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "toolbarHeight",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _AppBarHost.new,
      fixedArguments: true,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Theme",
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
            "data",
            FlaxTypeRef("object", id: "flax.material/material#type:ThemeData"),
            required: true,
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
        ],
      },
      _ThemeHost.new,
      fixedArguments: false,
      methods: {
        "of": FlaxStaticMethod(
          [
            FlaxParameter(
              "context",
              FlaxTypeRef("context", id: "flax.core/flutter#type:BuildContext"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.material/material#type:ThemeData"),
          _Theme_of,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.material/material#type:ThemeData",
      [
        FlaxGetter(
          "brightness",
          FlaxTypeRef("enum", id: "flax.material/material#type:Brightness"),
          _ThemeData_brightness,
        ),
        FlaxGetter(
          "colorScheme",
          FlaxTypeRef("object", id: "flax.material/material#type:ColorScheme"),
          _ThemeData_colorScheme,
        ),
        FlaxGetter(
          "textTheme",
          FlaxTypeRef("object", id: "flax.material/material#type:TextTheme"),
          _ThemeData_textTheme,
        ),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "brightness",
              FlaxTypeRef(
                "enum",
                id: "flax.material/material#type:Brightness",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "colorScheme",
              FlaxTypeRef(
                "object",
                id: "flax.material/material#type:ColorScheme",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "textTheme",
              FlaxTypeRef(
                "object",
                id: "flax.material/material#type:TextTheme",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.material/material#type:ThemeData"),
          _ThemeData_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "colorScheme",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ColorScheme",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "brightness",
            FlaxTypeRef(
              "enum",
              id: "flax.material/material#type:Brightness",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "colorSchemeSeed",
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
            "textTheme",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:TextTheme",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createThemeData,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isThemeData,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.material/material#type:TextTheme",
      [
        FlaxGetter(
          "titleLarge",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:TextStyle",
            nullable: true,
          ),
          _TextTheme_titleLarge,
        ),
        FlaxGetter(
          "titleMedium",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:TextStyle",
            nullable: true,
          ),
          _TextTheme_titleMedium,
        ),
        FlaxGetter(
          "bodyLarge",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:TextStyle",
            nullable: true,
          ),
          _TextTheme_bodyLarge,
        ),
        FlaxGetter(
          "bodyMedium",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:TextStyle",
            nullable: true,
          ),
          _TextTheme_bodyMedium,
        ),
        FlaxGetter(
          "labelLarge",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:TextStyle",
            nullable: true,
          ),
          _TextTheme_labelLarge,
        ),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "bodyLarge",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextStyle",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "bodyMedium",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextStyle",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "labelLarge",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextStyle",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "titleLarge",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextStyle",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "titleMedium",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextStyle",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.material/material#type:TextTheme"),
          _TextTheme_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "titleLarge",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "titleMedium",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "bodyLarge",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "bodyMedium",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "labelLarge",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createTextTheme,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isTextTheme,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.material/material#type:ColorScheme",
      [
        FlaxGetter(
          "brightness",
          FlaxTypeRef("enum", id: "flax.material/material#type:Brightness"),
          _ColorScheme_brightness,
        ),
        FlaxGetter(
          "primary",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _ColorScheme_primary,
        ),
        FlaxGetter(
          "onPrimary",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _ColorScheme_onPrimary,
        ),
        FlaxGetter(
          "surface",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _ColorScheme_surface,
        ),
        FlaxGetter(
          "onSurface",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _ColorScheme_onSurface,
        ),
        FlaxGetter(
          "error",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _ColorScheme_error,
        ),
        FlaxGetter(
          "onError",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _ColorScheme_onError,
        ),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "brightness",
              FlaxTypeRef(
                "enum",
                id: "flax.material/material#type:Brightness",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "error",
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
              "onError",
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
              "onPrimary",
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
              "onSurface",
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
              "primary",
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
              "surface",
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
          FlaxTypeRef("object", id: "flax.material/material#type:ColorScheme"),
          _ColorScheme_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "fromSeed": [
          FlaxParameter(
            "seedColor",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "brightness",
            FlaxTypeRef("enum", id: "flax.material/material#type:Brightness"),
            required: false,
            defaultValue: api.Brightness.light,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createColorScheme,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isColorScheme,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.material/material#type:InputDecoration",
      [
        FlaxGetter(
          "labelText",
          FlaxTypeRef("String", nullable: true),
          _InputDecoration_labelText,
        ),
        FlaxGetter(
          "hintText",
          FlaxTypeRef("String", nullable: true),
          _InputDecoration_hintText,
        ),
        FlaxGetter(
          "helperText",
          FlaxTypeRef("String", nullable: true),
          _InputDecoration_helperText,
        ),
        FlaxGetter(
          "errorText",
          FlaxTypeRef("String", nullable: true),
          _InputDecoration_errorText,
        ),
        FlaxGetter(
          "labelStyle",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:TextStyle",
            nullable: true,
          ),
          _InputDecoration_labelStyle,
        ),
        FlaxGetter(
          "hintStyle",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:TextStyle",
            nullable: true,
          ),
          _InputDecoration_hintStyle,
        ),
        FlaxGetter(
          "helperStyle",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:TextStyle",
            nullable: true,
          ),
          _InputDecoration_helperStyle,
        ),
        FlaxGetter(
          "errorStyle",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:TextStyle",
            nullable: true,
          ),
          _InputDecoration_errorStyle,
        ),
        FlaxGetter(
          "isDense",
          FlaxTypeRef("bool", nullable: true),
          _InputDecoration_isDense,
        ),
        FlaxGetter(
          "contentPadding",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:EdgeInsetsGeometry",
            nullable: true,
          ),
          _InputDecoration_contentPadding,
        ),
        FlaxGetter(
          "filled",
          FlaxTypeRef("bool", nullable: true),
          _InputDecoration_filled,
        ),
        FlaxGetter(
          "fillColor",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:Color",
            nullable: true,
          ),
          _InputDecoration_fillColor,
        ),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "contentPadding",
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
              "errorStyle",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextStyle",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "errorText",
              FlaxTypeRef("String", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "fillColor",
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
              "filled",
              FlaxTypeRef("bool", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "helperStyle",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextStyle",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "helperText",
              FlaxTypeRef("String", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "hintStyle",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextStyle",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "hintText",
              FlaxTypeRef("String", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "isDense",
              FlaxTypeRef("bool", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "labelStyle",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextStyle",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "labelText",
              FlaxTypeRef("String", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "object",
            id: "flax.material/material#type:InputDecoration",
          ),
          _InputDecoration_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "labelText",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "labelStyle",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "helperText",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "helperStyle",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "hintText",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "hintStyle",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "errorText",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "errorStyle",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "isDense",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "contentPadding",
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
            "filled",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "fillColor",
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
      create: _createInputDecoration,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isInputDecoration,
      methods: {},
      staticGetters: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:TextField",
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
            "controller",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextEditingController",
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
            "decoration",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:InputDecoration",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "textInputAction",
            FlaxTypeRef(
              "enum",
              id: "flax.material/material#type:TextInputAction",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "readOnly",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
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
            "obscureText",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "autocorrect",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "enableSuggestions",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maxLines",
            FlaxTypeRef("int", nullable: true),
            required: false,
            defaultValue: 1,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "minLines",
            FlaxTypeRef("int", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onChanged",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "value",
                    FlaxTypeRef("String"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback23,
                id: "callback:<>(p:r:value:String:)->void:",
                invoke: _callback23Invoke,
                matches: _callback23Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onEditingComplete",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback24,
                id: "callback:<>()->void:",
                invoke: _callback24Invoke,
                matches: _callback24Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onSubmitted",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "value",
                    FlaxTypeRef("String"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback25,
                id: "callback:<>(p:r:value:String:)->void:",
                invoke: _callback25Invoke,
                matches: _callback25Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "inputFormatters",
            FlaxTypeRef(
              "list",
              nullable: true,
              item: FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextInputFormatter",
              ),
              collection: FlaxCollectionBinding(
                "list:[object:flax.core/flutter#type:TextInputFormatter]",
                _collection6Create,
                _collection6Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef(
                  "object",
                  id: "flax.core/flutter#type:TextInputFormatter",
                ),
                collection: FlaxCollectionBinding(
                  "iterable:[object:flax.core/flutter#type:TextInputFormatter]",
                  _collection7Create,
                  _collection7Matches,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "enabled",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _TextFieldHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxRouteBinding(
      "flax.material/material#type:MaterialPageRoute",
      {
        "": [
          FlaxParameter(
            "builder",
            FlaxTypeRef(
              "callback",
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
                FlaxTypeRef("widget"),
                _callback26,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
                invoke: _callback26Invoke,
                matches: _callback26Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "settings",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:RouteSettings",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maintainState",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "fullscreenDialog",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
      },
      _createMaterialPageRoute,
      [
        "package:flutter/src/widgets/pages.dart::PageRoute",
        "package:flutter/src/widgets/routes.dart::ModalRoute",
        "package:flutter/src/widgets/routes.dart::TransitionRoute",
        "package:flutter/src/widgets/routes.dart::OverlayRoute",
        "flax.core/flutter#type:Route",
        "package:flutter/src/widgets/navigator.dart::_RoutePlaceholder",
        "package:flutter/src/widgets/routes.dart::PredictiveBackRoute",
        "package:flutter/src/widgets/routes.dart::LocalHistoryRoute",
        "package:material_ui/src/page.dart::MaterialRouteTransitionMixin",
      ],
    ),
    FlaxPageBinding(
      "flax.material/material#type:MaterialPage",
      {
        "": [
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maintainState",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "fullscreenDialog",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:LocalKey",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "canPop",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPopInvoked",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "didPop",
                    FlaxTypeRef("bool"),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "result",
                    FlaxTypeRef("data", nullable: true),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback27,
                id: "callback:<>(p:r:didPop:bool:,p:r:result:data?:)->void:",
                invoke: _callback27Invoke,
                matches: _callback27Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "name",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "arguments",
            FlaxTypeRef("data", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _createMaterialPage,
      [
        "flax.core/flutter#type:Page",
        "flax.core/flutter#type:RouteSettings",
        "dart:core::Object",
      ],
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:TextButton",
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
            "onPressed",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback28,
                id: "callback:<>()->void:",
                invoke: _callback28Invoke,
                matches: _callback28Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ButtonStyle",
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
        ],
      },
      _TextButtonHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:ElevatedButton",
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
            "onPressed",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback29,
                id: "callback:<>()->void:",
                invoke: _callback29Invoke,
                matches: _callback29Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ButtonStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _ElevatedButtonHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:OutlinedButton",
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
            "onPressed",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback30,
                id: "callback:<>()->void:",
                invoke: _callback30Invoke,
                matches: _callback30Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ButtonStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _OutlinedButtonHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:FilledButton",
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
            "onPressed",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback31,
                id: "callback:<>()->void:",
                invoke: _callback31Invoke,
                matches: _callback31Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ButtonStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "tonal": [
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
            "onPressed",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback32,
                id: "callback:<>()->void:",
                invoke: _callback32Invoke,
                matches: _callback32Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ButtonStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _FilledButtonHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:IconButton",
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
            "iconSize",
            FlaxTypeRef("double", nullable: true),
            required: false,
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
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
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
            "onPressed",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback33,
                id: "callback:<>()->void:",
                invoke: _callback33Invoke,
                matches: _callback33Matches,
              ),
            ),
            required: true,
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
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "tooltip",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ButtonStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "isSelected",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "selectedIcon",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "icon",
            FlaxTypeRef("widget"),
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
            "iconSize",
            FlaxTypeRef("double", nullable: true),
            required: false,
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
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
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
            "onPressed",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback34,
                id: "callback:<>()->void:",
                invoke: _callback34Invoke,
                matches: _callback34Matches,
              ),
            ),
            required: true,
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
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "tooltip",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ButtonStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "isSelected",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "selectedIcon",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "icon",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "filledTonal": [
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
            "iconSize",
            FlaxTypeRef("double", nullable: true),
            required: false,
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
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
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
            "onPressed",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback35,
                id: "callback:<>()->void:",
                invoke: _callback35Invoke,
                matches: _callback35Matches,
              ),
            ),
            required: true,
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
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "tooltip",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ButtonStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "isSelected",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "selectedIcon",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "icon",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "outlined": [
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
            "iconSize",
            FlaxTypeRef("double", nullable: true),
            required: false,
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
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
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
            "onPressed",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback36,
                id: "callback:<>()->void:",
                invoke: _callback36Invoke,
                matches: _callback36Matches,
              ),
            ),
            required: true,
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
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "tooltip",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "object",
              id: "flax.material/material#type:ButtonStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "isSelected",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "selectedIcon",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "icon",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _IconButtonHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:FloatingActionButton",
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
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "tooltip",
            FlaxTypeRef("String", nullable: true),
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
            "elevation",
            FlaxTypeRef("double", nullable: true),
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
                _callback37,
                id: "callback:<>()->void:",
                invoke: _callback37Invoke,
                matches: _callback37Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mini",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
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
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
        "small": [
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
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "tooltip",
            FlaxTypeRef("String", nullable: true),
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
            "elevation",
            FlaxTypeRef("double", nullable: true),
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
                _callback38,
                id: "callback:<>()->void:",
                invoke: _callback38Invoke,
                matches: _callback38Matches,
              ),
            ),
            required: true,
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
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
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
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "tooltip",
            FlaxTypeRef("String", nullable: true),
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
            "elevation",
            FlaxTypeRef("double", nullable: true),
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
                _callback39,
                id: "callback:<>()->void:",
                invoke: _callback39Invoke,
                matches: _callback39Matches,
              ),
            ),
            required: true,
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
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
        "extended": [
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
            "tooltip",
            FlaxTypeRef("String", nullable: true),
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
            "elevation",
            FlaxTypeRef("double", nullable: true),
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
                _callback40,
                id: "callback:<>()->void:",
                invoke: _callback40Invoke,
                matches: _callback40Matches,
              ),
            ),
            required: true,
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
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "icon",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "label",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _FloatingActionButtonHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Drawer",
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
            "elevation",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "shadowColor",
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
            "width",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "semanticLabel",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "clipBehavior",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:Clip",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _DrawerHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Divider",
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
            "height",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "thickness",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "indent",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "endIndent",
            FlaxTypeRef("double", nullable: true),
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
            "radius",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:BorderRadiusGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _DividerHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:VerticalDivider",
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
            "width",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "thickness",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "indent",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "endIndent",
            FlaxTypeRef("double", nullable: true),
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
            "radius",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:BorderRadiusGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _VerticalDividerHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Card",
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
            "shadowColor",
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
            "surfaceTintColor",
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
            "elevation",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "margin",
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
            "clipBehavior",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:Clip",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "semanticContainer",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
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
            "shadowColor",
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
            "surfaceTintColor",
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
            "elevation",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "margin",
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
            "clipBehavior",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:Clip",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "semanticContainer",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
        ],
        "outlined": [
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
            "shadowColor",
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
            "surfaceTintColor",
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
            "elevation",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "margin",
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
            "clipBehavior",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:Clip",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "semanticContainer",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
        ],
      },
      _CardHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:ListTile",
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
            "title",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "subtitle",
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
            "isThreeLine",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "dense",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "enum",
              id: "flax.material/material#type:ListTileStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "selectedColor",
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
            "iconColor",
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
            "textColor",
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
            "titleTextStyle",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "contentPadding",
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
            "enabled",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onTap",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback41,
                id: "callback:<>()->void:",
                invoke: _callback41Invoke,
                matches: _callback41Matches,
              ),
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
                _callback42,
                id: "callback:<>()->void:",
                invoke: _callback42Invoke,
                matches: _callback42Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "selected",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
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
            "tileColor",
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
            "selectedTileColor",
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
      _ListTileHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Checkbox",
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
            "value",
            FlaxTypeRef("bool", nullable: true),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "tristate",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onChanged",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "value",
                    FlaxTypeRef("bool", nullable: true),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback43,
                id: "callback:<>(p:r:value:bool?:)->void:",
                invoke: _callback43Invoke,
                matches: _callback43Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "activeColor",
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
            "fillColor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:WidgetStateProperty",
              nullable: true,
              deferredFactories: {
                "resolveWith": FlaxDeferredFactoryBinding(
                  "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
                  [
                    FlaxParameter(
                      "callback",
                      FlaxTypeRef(
                        "callback",
                        callback: FlaxCallbackBinding(
                          [
                            FlaxCallbackParameter(
                              "states",
                              FlaxTypeRef(
                                "set",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "set:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection4Create,
                                  _collection4Matches,
                                ),
                                iterable: FlaxTypeRef(
                                  "iterable",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection5Create,
                                    _collection5Matches,
                                  ),
                                ),
                              ),
                              required: true,
                              positional: true,
                            ),
                          ],
                          FlaxTypeRef(
                            "object",
                            id: "flax.core/flutter#type:Color",
                            nullable: true,
                          ),
                          _callback44,
                          id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
                          invoke: _callback44Invoke,
                          matches: _callback44Matches,
                        ),
                      ),
                      required: true,
                      defaultValue: null,
                      omitWhenAbsent: false,
                    ),
                  ],
                  _deferred0,
                ),
              },
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "checkColor",
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
            "overlayColor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:WidgetStateProperty",
              nullable: true,
              deferredFactories: {
                "resolveWith": FlaxDeferredFactoryBinding(
                  "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
                  [
                    FlaxParameter(
                      "callback",
                      FlaxTypeRef(
                        "callback",
                        callback: FlaxCallbackBinding(
                          [
                            FlaxCallbackParameter(
                              "states",
                              FlaxTypeRef(
                                "set",
                                item: FlaxTypeRef(
                                  "enum",
                                  id: "flax.core/flutter#type:WidgetState",
                                ),
                                collection: FlaxCollectionBinding(
                                  "set:[enum:flax.core/flutter#type:WidgetState]",
                                  _collection4Create,
                                  _collection4Matches,
                                ),
                                iterable: FlaxTypeRef(
                                  "iterable",
                                  item: FlaxTypeRef(
                                    "enum",
                                    id: "flax.core/flutter#type:WidgetState",
                                  ),
                                  collection: FlaxCollectionBinding(
                                    "iterable:[enum:flax.core/flutter#type:WidgetState]",
                                    _collection5Create,
                                    _collection5Matches,
                                  ),
                                ),
                              ),
                              required: true,
                              positional: true,
                            ),
                          ],
                          FlaxTypeRef(
                            "object",
                            id: "flax.core/flutter#type:Color",
                            nullable: true,
                          ),
                          _callback45,
                          id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
                          invoke: _callback45Invoke,
                          matches: _callback45Matches,
                        ),
                      ),
                      required: true,
                      defaultValue: null,
                      omitWhenAbsent: false,
                    ),
                  ],
                  _deferred0,
                ),
              },
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
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "isError",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
      },
      _CheckboxHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Switch",
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
            "value",
            FlaxTypeRef("bool"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onChanged",
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
                _callback46,
                id: "callback:<>(p:r:value:bool:)->void:",
                invoke: _callback46Invoke,
                matches: _callback46Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "activeThumbColor",
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
            "activeTrackColor",
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
            "inactiveThumbColor",
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
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
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
        ],
      },
      _SwitchHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:CircularProgressIndicator",
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
            "value",
            FlaxTypeRef("double", nullable: true),
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
            "strokeWidth",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "semanticsLabel",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _CircularProgressIndicatorHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:NavigationDestination",
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
            "icon",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "selectedIcon",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "label",
            FlaxTypeRef("String"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "tooltip",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "enabled",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
        ],
      },
      _NavigationDestinationHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:NavigationBar",
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
            "selectedIndex",
            FlaxTypeRef("int"),
            required: false,
            defaultValue: 0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "destinations",
            FlaxTypeRef(
              "list",
              item: FlaxTypeRef("widget"),
              collection: FlaxCollectionBinding(
                "list:[widget:]",
                _collection0Create,
                _collection0Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("widget"),
                collection: FlaxCollectionBinding(
                  "iterable:[widget:]",
                  _collection1Create,
                  _collection1Matches,
                ),
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onDestinationSelected",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "value",
                    FlaxTypeRef("int"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback47,
                id: "callback:<>(p:r:value:int:)->void:",
                invoke: _callback47Invoke,
                matches: _callback47Matches,
              ),
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
            "elevation",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "shadowColor",
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
            "indicatorColor",
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
            "height",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "labelBehavior",
            FlaxTypeRef(
              "enum",
              id: "flax.material/material#type:NavigationDestinationLabelBehavior",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _NavigationBarHost.new,
      fixedArguments: false,
      methods: {},
    ),
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.material/material#read:kTabScrollDuration",
      [],
      FlaxTypeRef("object", id: "flax.core/flutter#type:Duration"),
      _read_kTabScrollDuration,
    ),
    FlaxFunctionBinding(
      "flax.material/material#read:kToolbarHeight",
      [],
      FlaxTypeRef("double"),
      _read_kToolbarHeight,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:showDialog",
      [
        FlaxParameter(
          "barrierColor",
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
          "barrierDismissible",
          FlaxTypeRef("bool"),
          required: false,
          defaultValue: true,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "barrierLabel",
          FlaxTypeRef("String", nullable: true),
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "builder",
          FlaxTypeRef(
            "callback",
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
              FlaxTypeRef("widget"),
              _callback48,
              id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
              invoke: _callback48Invoke,
              matches: _callback48Matches,
            ),
          ),
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "context",
          FlaxTypeRef("context", id: "flax.core/flutter#type:BuildContext"),
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "fullscreenDialog",
          FlaxTypeRef("bool"),
          required: false,
          defaultValue: false,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "requestFocus",
          FlaxTypeRef("bool", nullable: true),
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "routeSettings",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:RouteSettings",
            nullable: true,
          ),
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "useRootNavigator",
          FlaxTypeRef("bool"),
          required: false,
          defaultValue: true,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "useSafeArea",
          FlaxTypeRef("bool"),
          required: false,
          defaultValue: true,
          omitWhenAbsent: false,
        ),
      ],
      FlaxTypeRef(
        "future",
        item: FlaxTypeRef("data", nullable: true),
        future: FlaxFutureBinding("data?:", _future1Adapt),
      ),
      _function_showDialog,
      route: FlaxRouteCallBinding("context", "useRootNavigator", ["builder"]),
    ),
  ],
  moduleId: "flax.material/material",
  uiProtocol: 21,
  requiredCapabilities: const <String>[],
  stateVariants: [],
);
Object? _function_showDialog(Map<String, Object?> values) {
  return api.showDialog<Object?>(
    barrierColor: values["barrierColor"] as api1.Color?,
    barrierDismissible: values["barrierDismissible"] as bool,
    barrierLabel: values["barrierLabel"] as String?,
    builder:
        values["builder"] as api1.Widget Function(api1.BuildContext context),
    context: values["context"] as api1.BuildContext,
    fullscreenDialog: values["fullscreenDialog"] as bool,
    requestFocus: values["requestFocus"] as bool?,
    routeSettings: values["routeSettings"] as api1.RouteSettings?,
    useRootNavigator: values["useRootNavigator"] as bool,
    useSafeArea: values["useSafeArea"] as bool,
  );
}

Object? _read_kTabScrollDuration(Map<String, Object?> values) =>
    api.kTabScrollDuration;
Object? _read_kToolbarHeight(Map<String, Object?> values) => api.kToolbarHeight;

class _MaterialHost extends FlaxWidgetHost {
  _MaterialHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createMaterial(node.ctor, values);
}

api1.Widget _createMaterial(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Material(
        key: values["key"] as api1.Key?,
        type: values["type"] as api.MaterialType,
        elevation: values["elevation"] as double,
        color: values["color"] as api1.Color?,
        shadowColor: values["shadowColor"] as api1.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api1.Color?,
        textStyle: values["textStyle"] as api1.TextStyle?,
        borderRadius: values["borderRadius"] as api1.BorderRadiusGeometry?,
        shape: values["shape"] as api1.ShapeBorder?,
        clipBehavior: values["clipBehavior"] as api1.Clip,
        child: values["child"] as api1.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _InkWellHost extends FlaxWidgetHost {
  _InkWellHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createInkWell(node.ctor, values);
}

api1.Widget _createInkWell(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.InkWell(
        key: values["key"] as api1.Key?,
        child: values["child"] as api1.Widget?,
        onTap: values["onTap"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onHighlightChanged:
            values["onHighlightChanged"] as void Function(bool value)?,
        onHover: values["onHover"] as void Function(bool value)?,
        mouseCursor: values["mouseCursor"] as api1.MouseCursor?,
        hoverColor: values["hoverColor"] as api1.Color?,
        highlightColor: values["highlightColor"] as api1.Color?,
        splashColor: values["splashColor"] as api1.Color?,
        borderRadius: values["borderRadius"] as api1.BorderRadius?,
        customBorder: values["customBorder"] as api1.ShapeBorder?,
        enableFeedback: values["enableFeedback"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _LinearProgressIndicatorHost extends FlaxWidgetHost {
  _LinearProgressIndicatorHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createLinearProgressIndicator(node.ctor, values);
}

api1.Widget _createLinearProgressIndicator(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.LinearProgressIndicator(
        key: values["key"] as api1.Key?,
        value: values["value"] as double?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        color: values["color"] as api1.Color?,
        minHeight: values["minHeight"] as double?,
        semanticsLabel: values["semanticsLabel"] as String?,
        semanticsValue: values["semanticsValue"] as String?,
        borderRadius: values["borderRadius"] as api1.BorderRadiusGeometry?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _AlertDialogHost extends FlaxWidgetHost {
  _AlertDialogHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createAlertDialog(node.ctor, values);
}

api1.Widget _createAlertDialog(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AlertDialog(
        key: values["key"] as api1.Key?,
        title: values["title"] as api1.Widget?,
        content: values["content"] as api1.Widget?,
        actions: values["actions"] as List<api1.Widget>?,
        scrollable: values["scrollable"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _MaterialAppHost extends FlaxWidgetHost {
  _MaterialAppHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createMaterialApp(node.ctor, values);
}

api1.Widget _createMaterialApp(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("navigatorObservers")) {
        return api.MaterialApp(
          key: values["key"] as api1.Key?,
          home: values["home"] as api1.Widget?,
          title: values["title"] as String?,
          theme: values["theme"] as api.ThemeData?,
          darkTheme: values["darkTheme"] as api.ThemeData?,
          themeMode: values["themeMode"] as api.ThemeMode?,
          debugShowCheckedModeBanner:
              values["debugShowCheckedModeBanner"] as bool,
        );
      }
      return api.MaterialApp(
        key: values["key"] as api1.Key?,
        home: values["home"] as api1.Widget?,
        navigatorObservers:
            values["navigatorObservers"] as List<api1.NavigatorObserver>,
        title: values["title"] as String?,
        theme: values["theme"] as api.ThemeData?,
        darkTheme: values["darkTheme"] as api.ThemeData?,
        themeMode: values["themeMode"] as api.ThemeMode?,
        debugShowCheckedModeBanner:
            values["debugShowCheckedModeBanner"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ScaffoldHost extends FlaxWidgetHost {
  _ScaffoldHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createScaffold(node.ctor, values);
}

api1.Widget _createScaffold(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Scaffold(
        key: values["key"] as api1.Key?,
        appBar: values["appBar"] as api1.PreferredSizeWidget?,
        body: values["body"] as api1.Widget?,
        floatingActionButton: values["floatingActionButton"] as api1.Widget?,
        drawer: values["drawer"] as api1.Widget?,
        endDrawer: values["endDrawer"] as api1.Widget?,
        bottomNavigationBar: values["bottomNavigationBar"] as api1.Widget?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        resizeToAvoidBottomInset: values["resizeToAvoidBottomInset"] as bool?,
        primary: values["primary"] as bool,
        extendBody: values["extendBody"] as bool,
        extendBodyBehindAppBar: values["extendBodyBehindAppBar"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _RefreshIndicatorHost extends FlaxWidgetHost {
  _RefreshIndicatorHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createRefreshIndicator(node.ctor, values);
}

api1.Widget _createRefreshIndicator(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.RefreshIndicator(
        key: values["key"] as api1.Key?,
        onRefresh: values["onRefresh"] as Future<void> Function(),
        child: values["child"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isButtonStyle(Object value) => value is api.ButtonStyle;
Object? _ButtonStyle_backgroundColor(Object value) =>
    (value as api.ButtonStyle).backgroundColor;
Object? _ButtonStyle_foregroundColor(Object value) =>
    (value as api.ButtonStyle).foregroundColor;
Object? _ButtonStyle_overlayColor(Object value) =>
    (value as api.ButtonStyle).overlayColor;
Object? _ButtonStyle_elevation(Object value) =>
    (value as api.ButtonStyle).elevation;
Object? _ButtonStyle_shape(Object value) => (value as api.ButtonStyle).shape;
Object? _ButtonStyle_mouseCursor(Object value) =>
    (value as api.ButtonStyle).mouseCursor;
Object? _ButtonStyle_visualDensity(Object value) =>
    (value as api.ButtonStyle).visualDensity;
Object? _ButtonStyle_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ButtonStyle).copyWith(
    backgroundColor:
        values["backgroundColor"] as api1.WidgetStateProperty<api1.Color?>?,
    elevation: values["elevation"] as api1.WidgetStateProperty<double?>?,
    foregroundColor:
        values["foregroundColor"] as api1.WidgetStateProperty<api1.Color?>?,
    mouseCursor:
        values["mouseCursor"] as api1.WidgetStateProperty<api1.MouseCursor?>?,
    overlayColor:
        values["overlayColor"] as api1.WidgetStateProperty<api1.Color?>?,
    shape: values["shape"] as api1.WidgetStateProperty<api1.OutlinedBorder?>?,
    visualDensity: values["visualDensity"] as api.VisualDensity?,
  );
}

Object _createButtonStyle(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ButtonStyle(
        backgroundColor:
            values["backgroundColor"] as api1.WidgetStateProperty<api1.Color?>?,
        foregroundColor:
            values["foregroundColor"] as api1.WidgetStateProperty<api1.Color?>?,
        overlayColor:
            values["overlayColor"] as api1.WidgetStateProperty<api1.Color?>?,
        elevation: values["elevation"] as api1.WidgetStateProperty<double?>?,
        shape:
            values["shape"] as api1.WidgetStateProperty<api1.OutlinedBorder?>?,
        mouseCursor:
            values["mouseCursor"]
                as api1.WidgetStateProperty<api1.MouseCursor?>?,
        visualDensity: values["visualDensity"] as api.VisualDensity?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVisualDensity(Object value) => value is api.VisualDensity;
Object? _VisualDensity_horizontal(Object value) =>
    (value as api.VisualDensity).horizontal;
Object? _VisualDensity_vertical(Object value) =>
    (value as api.VisualDensity).vertical;
Object? _VisualDensity_static_standard() => api.VisualDensity.standard;
Object? _VisualDensity_static_comfortable() => api.VisualDensity.comfortable;
Object? _VisualDensity_static_compact() => api.VisualDensity.compact;
Object? _VisualDensity_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.VisualDensity).copyWith(
    horizontal: values["horizontal"] as double?,
    vertical: values["vertical"] as double?,
  );
}

Object _createVisualDensity(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.VisualDensity(
        horizontal: values["horizontal"] as double,
        vertical: values["vertical"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _AppBarHost extends FlaxWidgetHost implements api1.PreferredSizeWidget {
  _AppBarHost(super.node);
  @override
  _flaxNative8.Size get preferredSize =>
      (configuration as _flaxNative8.PreferredSizeWidget).preferredSize;
  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createAppBar(node.ctor, values);
}

api1.Widget _createAppBar(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AppBar(
        key: values["key"] as api1.Key?,
        leading: values["leading"] as api1.Widget?,
        automaticallyImplyLeading: values["automaticallyImplyLeading"] as bool,
        title: values["title"] as api1.Widget?,
        actions: values["actions"] as List<api1.Widget>?,
        bottom: values["bottom"] as api1.PreferredSizeWidget?,
        elevation: values["elevation"] as double?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        foregroundColor: values["foregroundColor"] as api1.Color?,
        primary: values["primary"] as bool,
        centerTitle: values["centerTitle"] as bool?,
        toolbarHeight: values["toolbarHeight"] as double?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

Object? _Theme_of(Map<String, Object?> values) {
  return api.Theme.of(values["context"] as api1.BuildContext);
}

class _ThemeHost extends FlaxWidgetHost {
  _ThemeHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createTheme(node.ctor, values);
}

api1.Widget _createTheme(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Theme(
        key: values["key"] as api1.Key?,
        data: values["data"] as api.ThemeData,
        child: values["child"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isThemeData(Object value) => value is api.ThemeData;
Object? _ThemeData_brightness(Object value) =>
    (value as api.ThemeData).brightness;
Object? _ThemeData_colorScheme(Object value) =>
    (value as api.ThemeData).colorScheme;
Object? _ThemeData_textTheme(Object value) =>
    (value as api.ThemeData).textTheme;
Object? _ThemeData_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ThemeData).copyWith(
    brightness: values["brightness"] as api.Brightness?,
    colorScheme: values["colorScheme"] as api.ColorScheme?,
    textTheme: values["textTheme"] as api.TextTheme?,
  );
}

Object _createThemeData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ThemeData(
        colorScheme: values["colorScheme"] as api.ColorScheme?,
        brightness: values["brightness"] as api.Brightness?,
        colorSchemeSeed: values["colorSchemeSeed"] as api1.Color?,
        textTheme: values["textTheme"] as api.TextTheme?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextTheme(Object value) => value is api.TextTheme;
Object? _TextTheme_titleLarge(Object value) =>
    (value as api.TextTheme).titleLarge;
Object? _TextTheme_titleMedium(Object value) =>
    (value as api.TextTheme).titleMedium;
Object? _TextTheme_bodyLarge(Object value) =>
    (value as api.TextTheme).bodyLarge;
Object? _TextTheme_bodyMedium(Object value) =>
    (value as api.TextTheme).bodyMedium;
Object? _TextTheme_labelLarge(Object value) =>
    (value as api.TextTheme).labelLarge;
Object? _TextTheme_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextTheme).copyWith(
    bodyLarge: values["bodyLarge"] as api1.TextStyle?,
    bodyMedium: values["bodyMedium"] as api1.TextStyle?,
    labelLarge: values["labelLarge"] as api1.TextStyle?,
    titleLarge: values["titleLarge"] as api1.TextStyle?,
    titleMedium: values["titleMedium"] as api1.TextStyle?,
  );
}

Object _createTextTheme(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TextTheme(
        titleLarge: values["titleLarge"] as api1.TextStyle?,
        titleMedium: values["titleMedium"] as api1.TextStyle?,
        bodyLarge: values["bodyLarge"] as api1.TextStyle?,
        bodyMedium: values["bodyMedium"] as api1.TextStyle?,
        labelLarge: values["labelLarge"] as api1.TextStyle?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isColorScheme(Object value) => value is api.ColorScheme;
Object? _ColorScheme_brightness(Object value) =>
    (value as api.ColorScheme).brightness;
Object? _ColorScheme_primary(Object value) =>
    (value as api.ColorScheme).primary;
Object? _ColorScheme_onPrimary(Object value) =>
    (value as api.ColorScheme).onPrimary;
Object? _ColorScheme_surface(Object value) =>
    (value as api.ColorScheme).surface;
Object? _ColorScheme_onSurface(Object value) =>
    (value as api.ColorScheme).onSurface;
Object? _ColorScheme_error(Object value) => (value as api.ColorScheme).error;
Object? _ColorScheme_onError(Object value) =>
    (value as api.ColorScheme).onError;
Object? _ColorScheme_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ColorScheme).copyWith(
    brightness: values["brightness"] as api.Brightness?,
    error: values["error"] as api1.Color?,
    onError: values["onError"] as api1.Color?,
    onPrimary: values["onPrimary"] as api1.Color?,
    onSurface: values["onSurface"] as api1.Color?,
    primary: values["primary"] as api1.Color?,
    surface: values["surface"] as api1.Color?,
  );
}

Object _createColorScheme(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "fromSeed":
      return api.ColorScheme.fromSeed(
        seedColor: values["seedColor"] as api1.Color,
        brightness: values["brightness"] as api.Brightness,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isInputDecoration(Object value) => value is api.InputDecoration;
Object? _InputDecoration_labelText(Object value) =>
    (value as api.InputDecoration).labelText;
Object? _InputDecoration_hintText(Object value) =>
    (value as api.InputDecoration).hintText;
Object? _InputDecoration_helperText(Object value) =>
    (value as api.InputDecoration).helperText;
Object? _InputDecoration_errorText(Object value) =>
    (value as api.InputDecoration).errorText;
Object? _InputDecoration_labelStyle(Object value) =>
    (value as api.InputDecoration).labelStyle;
Object? _InputDecoration_hintStyle(Object value) =>
    (value as api.InputDecoration).hintStyle;
Object? _InputDecoration_helperStyle(Object value) =>
    (value as api.InputDecoration).helperStyle;
Object? _InputDecoration_errorStyle(Object value) =>
    (value as api.InputDecoration).errorStyle;
Object? _InputDecoration_isDense(Object value) =>
    (value as api.InputDecoration).isDense;
Object? _InputDecoration_contentPadding(Object value) =>
    (value as api.InputDecoration).contentPadding;
Object? _InputDecoration_filled(Object value) =>
    (value as api.InputDecoration).filled;
Object? _InputDecoration_fillColor(Object value) =>
    (value as api.InputDecoration).fillColor;
Object? _InputDecoration_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.InputDecoration).copyWith(
    contentPadding: values["contentPadding"] as api1.EdgeInsetsGeometry?,
    errorStyle: values["errorStyle"] as api1.TextStyle?,
    errorText: values["errorText"] as String?,
    fillColor: values["fillColor"] as api1.Color?,
    filled: values["filled"] as bool?,
    helperStyle: values["helperStyle"] as api1.TextStyle?,
    helperText: values["helperText"] as String?,
    hintStyle: values["hintStyle"] as api1.TextStyle?,
    hintText: values["hintText"] as String?,
    isDense: values["isDense"] as bool?,
    labelStyle: values["labelStyle"] as api1.TextStyle?,
    labelText: values["labelText"] as String?,
  );
}

Object _createInputDecoration(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.InputDecoration(
        labelText: values["labelText"] as String?,
        labelStyle: values["labelStyle"] as api1.TextStyle?,
        helperText: values["helperText"] as String?,
        helperStyle: values["helperStyle"] as api1.TextStyle?,
        hintText: values["hintText"] as String?,
        hintStyle: values["hintStyle"] as api1.TextStyle?,
        errorText: values["errorText"] as String?,
        errorStyle: values["errorStyle"] as api1.TextStyle?,
        isDense: values["isDense"] as bool?,
        contentPadding: values["contentPadding"] as api1.EdgeInsetsGeometry?,
        filled: values["filled"] as bool?,
        fillColor: values["fillColor"] as api1.Color?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _TextFieldHost extends FlaxWidgetHost {
  _TextFieldHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createTextField(node.ctor, values);
}

api1.Widget _createTextField(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("decoration")) {
        return api.TextField(
          key: values["key"] as api1.Key?,
          controller: values["controller"] as api1.TextEditingController?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          textInputAction: values["textInputAction"] as api.TextInputAction?,
          style: values["style"] as api1.TextStyle?,
          readOnly: values["readOnly"] as bool,
          autofocus: values["autofocus"] as bool,
          obscureText: values["obscureText"] as bool,
          autocorrect: values["autocorrect"] as bool?,
          enableSuggestions: values["enableSuggestions"] as bool,
          maxLines: values["maxLines"] as int?,
          minLines: values["minLines"] as int?,
          onChanged: values["onChanged"] as void Function(String value)?,
          onEditingComplete: values["onEditingComplete"] as void Function()?,
          onSubmitted: values["onSubmitted"] as void Function(String value)?,
          inputFormatters:
              values["inputFormatters"] as List<api3.TextInputFormatter>?,
          enabled: values["enabled"] as bool?,
        );
      }
      return api.TextField(
        key: values["key"] as api1.Key?,
        controller: values["controller"] as api1.TextEditingController?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        decoration: values["decoration"] as api.InputDecoration?,
        textInputAction: values["textInputAction"] as api.TextInputAction?,
        style: values["style"] as api1.TextStyle?,
        readOnly: values["readOnly"] as bool,
        autofocus: values["autofocus"] as bool,
        obscureText: values["obscureText"] as bool,
        autocorrect: values["autocorrect"] as bool?,
        enableSuggestions: values["enableSuggestions"] as bool,
        maxLines: values["maxLines"] as int?,
        minLines: values["minLines"] as int?,
        onChanged: values["onChanged"] as void Function(String value)?,
        onEditingComplete: values["onEditingComplete"] as void Function()?,
        onSubmitted: values["onSubmitted"] as void Function(String value)?,
        inputFormatters:
            values["inputFormatters"] as List<api3.TextInputFormatter>?,
        enabled: values["enabled"] as bool?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

api1.Route<Object?> _createMaterialPageRoute(
  String ctor,
  Map<String, Object?> values,
  FlaxRouteLease lease,
) {
  switch (ctor) {
    case "":
      return _MaterialPageRoute(
        lease,
        builder: lease.builder("builder"),
        settings: values["settings"] as api1.RouteSettings?,
        maintainState: values["maintainState"] as bool,
        fullscreenDialog: values["fullscreenDialog"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

api1.Page<Object?> _createMaterialPage(
  String ctor,
  Map<String, Object?> values,
  FlaxPageLease lease,
) {
  switch (ctor) {
    case "":
      if (!values.containsKey("onPopInvoked")) {
        return _MaterialPage(
          lease,
          child: values["child"] as api1.Widget,
          maintainState: values["maintainState"] as bool,
          fullscreenDialog: values["fullscreenDialog"] as bool,
          key: values["key"] as api1.LocalKey?,
          canPop: values["canPop"] as bool,
          name: values["name"] as String?,
          arguments: values["arguments"],
        );
      }
      return _MaterialPage(
        lease,
        child: values["child"] as api1.Widget,
        maintainState: values["maintainState"] as bool,
        fullscreenDialog: values["fullscreenDialog"] as bool,
        key: values["key"] as api1.LocalKey?,
        canPop: values["canPop"] as bool,
        onPopInvoked:
            values["onPopInvoked"]
                as void Function(bool didPop, Object? result),
        name: values["name"] as String?,
        arguments: values["arguments"],
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _TextButtonHost extends FlaxWidgetHost {
  _TextButtonHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createTextButton(node.ctor, values);
}

api1.Widget _createTextButton(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TextButton(
        key: values["key"] as api1.Key?,
        onPressed: values["onPressed"] as void Function()?,
        style: values["style"] as api.ButtonStyle?,
        child: values["child"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ElevatedButtonHost extends FlaxWidgetHost {
  _ElevatedButtonHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createElevatedButton(node.ctor, values);
}

api1.Widget _createElevatedButton(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ElevatedButton(
        key: values["key"] as api1.Key?,
        onPressed: values["onPressed"] as void Function()?,
        style: values["style"] as api.ButtonStyle?,
        child: values["child"] as api1.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _OutlinedButtonHost extends FlaxWidgetHost {
  _OutlinedButtonHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createOutlinedButton(node.ctor, values);
}

api1.Widget _createOutlinedButton(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.OutlinedButton(
        key: values["key"] as api1.Key?,
        onPressed: values["onPressed"] as void Function()?,
        style: values["style"] as api.ButtonStyle?,
        child: values["child"] as api1.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _FilledButtonHost extends FlaxWidgetHost {
  _FilledButtonHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createFilledButton(node.ctor, values);
}

api1.Widget _createFilledButton(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FilledButton(
        key: values["key"] as api1.Key?,
        onPressed: values["onPressed"] as void Function()?,
        style: values["style"] as api.ButtonStyle?,
        child: values["child"] as api1.Widget?,
      );
    case "tonal":
      return api.FilledButton.tonal(
        key: values["key"] as api1.Key?,
        onPressed: values["onPressed"] as void Function()?,
        style: values["style"] as api.ButtonStyle?,
        child: values["child"] as api1.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _IconButtonHost extends FlaxWidgetHost {
  _IconButtonHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createIconButton(node.ctor, values);
}

api1.Widget _createIconButton(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.IconButton(
        key: values["key"] as api1.Key?,
        iconSize: values["iconSize"] as double?,
        padding: values["padding"] as api1.EdgeInsetsGeometry?,
        alignment: values["alignment"] as api1.AlignmentGeometry?,
        color: values["color"] as api1.Color?,
        disabledColor: values["disabledColor"] as api1.Color?,
        onPressed: values["onPressed"] as void Function()?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        tooltip: values["tooltip"] as String?,
        style: values["style"] as api.ButtonStyle?,
        isSelected: values["isSelected"] as bool?,
        selectedIcon: values["selectedIcon"] as api1.Widget?,
        icon: values["icon"] as api1.Widget,
      );
    case "filled":
      return api.IconButton.filled(
        key: values["key"] as api1.Key?,
        iconSize: values["iconSize"] as double?,
        padding: values["padding"] as api1.EdgeInsetsGeometry?,
        alignment: values["alignment"] as api1.AlignmentGeometry?,
        color: values["color"] as api1.Color?,
        disabledColor: values["disabledColor"] as api1.Color?,
        onPressed: values["onPressed"] as void Function()?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        tooltip: values["tooltip"] as String?,
        style: values["style"] as api.ButtonStyle?,
        isSelected: values["isSelected"] as bool?,
        selectedIcon: values["selectedIcon"] as api1.Widget?,
        icon: values["icon"] as api1.Widget,
      );
    case "filledTonal":
      return api.IconButton.filledTonal(
        key: values["key"] as api1.Key?,
        iconSize: values["iconSize"] as double?,
        padding: values["padding"] as api1.EdgeInsetsGeometry?,
        alignment: values["alignment"] as api1.AlignmentGeometry?,
        color: values["color"] as api1.Color?,
        disabledColor: values["disabledColor"] as api1.Color?,
        onPressed: values["onPressed"] as void Function()?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        tooltip: values["tooltip"] as String?,
        style: values["style"] as api.ButtonStyle?,
        isSelected: values["isSelected"] as bool?,
        selectedIcon: values["selectedIcon"] as api1.Widget?,
        icon: values["icon"] as api1.Widget,
      );
    case "outlined":
      return api.IconButton.outlined(
        key: values["key"] as api1.Key?,
        iconSize: values["iconSize"] as double?,
        padding: values["padding"] as api1.EdgeInsetsGeometry?,
        alignment: values["alignment"] as api1.AlignmentGeometry?,
        color: values["color"] as api1.Color?,
        disabledColor: values["disabledColor"] as api1.Color?,
        onPressed: values["onPressed"] as void Function()?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        tooltip: values["tooltip"] as String?,
        style: values["style"] as api.ButtonStyle?,
        isSelected: values["isSelected"] as bool?,
        selectedIcon: values["selectedIcon"] as api1.Widget?,
        icon: values["icon"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _FloatingActionButtonHost extends FlaxWidgetHost {
  _FloatingActionButtonHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createFloatingActionButton(node.ctor, values);
}

api1.Widget _createFloatingActionButton(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.FloatingActionButton(
        key: values["key"] as api1.Key?,
        child: values["child"] as api1.Widget?,
        tooltip: values["tooltip"] as String?,
        foregroundColor: values["foregroundColor"] as api1.Color?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        elevation: values["elevation"] as double?,
        onPressed: values["onPressed"] as void Function()?,
        mini: values["mini"] as bool,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
      );
    case "small":
      return api.FloatingActionButton.small(
        key: values["key"] as api1.Key?,
        child: values["child"] as api1.Widget?,
        tooltip: values["tooltip"] as String?,
        foregroundColor: values["foregroundColor"] as api1.Color?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        elevation: values["elevation"] as double?,
        onPressed: values["onPressed"] as void Function()?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
      );
    case "large":
      return api.FloatingActionButton.large(
        key: values["key"] as api1.Key?,
        child: values["child"] as api1.Widget?,
        tooltip: values["tooltip"] as String?,
        foregroundColor: values["foregroundColor"] as api1.Color?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        elevation: values["elevation"] as double?,
        onPressed: values["onPressed"] as void Function()?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
      );
    case "extended":
      return api.FloatingActionButton.extended(
        key: values["key"] as api1.Key?,
        tooltip: values["tooltip"] as String?,
        foregroundColor: values["foregroundColor"] as api1.Color?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        elevation: values["elevation"] as double?,
        onPressed: values["onPressed"] as void Function()?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        icon: values["icon"] as api1.Widget?,
        label: values["label"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _DrawerHost extends FlaxWidgetHost {
  _DrawerHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createDrawer(node.ctor, values);
}

api1.Widget _createDrawer(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Drawer(
        key: values["key"] as api1.Key?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        elevation: values["elevation"] as double?,
        shadowColor: values["shadowColor"] as api1.Color?,
        width: values["width"] as double?,
        child: values["child"] as api1.Widget?,
        semanticLabel: values["semanticLabel"] as String?,
        clipBehavior: values["clipBehavior"] as api1.Clip?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _DividerHost extends FlaxWidgetHost {
  _DividerHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createDivider(node.ctor, values);
}

api1.Widget _createDivider(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Divider(
        key: values["key"] as api1.Key?,
        height: values["height"] as double?,
        thickness: values["thickness"] as double?,
        indent: values["indent"] as double?,
        endIndent: values["endIndent"] as double?,
        color: values["color"] as api1.Color?,
        radius: values["radius"] as api1.BorderRadiusGeometry?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _VerticalDividerHost extends FlaxWidgetHost {
  _VerticalDividerHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createVerticalDivider(node.ctor, values);
}

api1.Widget _createVerticalDivider(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.VerticalDivider(
        key: values["key"] as api1.Key?,
        width: values["width"] as double?,
        thickness: values["thickness"] as double?,
        indent: values["indent"] as double?,
        endIndent: values["endIndent"] as double?,
        color: values["color"] as api1.Color?,
        radius: values["radius"] as api1.BorderRadiusGeometry?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _CardHost extends FlaxWidgetHost {
  _CardHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createCard(node.ctor, values);
}

api1.Widget _createCard(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Card(
        key: values["key"] as api1.Key?,
        color: values["color"] as api1.Color?,
        shadowColor: values["shadowColor"] as api1.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api1.Color?,
        elevation: values["elevation"] as double?,
        margin: values["margin"] as api1.EdgeInsetsGeometry?,
        clipBehavior: values["clipBehavior"] as api1.Clip?,
        child: values["child"] as api1.Widget?,
        semanticContainer: values["semanticContainer"] as bool,
      );
    case "filled":
      return api.Card.filled(
        key: values["key"] as api1.Key?,
        color: values["color"] as api1.Color?,
        shadowColor: values["shadowColor"] as api1.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api1.Color?,
        elevation: values["elevation"] as double?,
        margin: values["margin"] as api1.EdgeInsetsGeometry?,
        clipBehavior: values["clipBehavior"] as api1.Clip?,
        child: values["child"] as api1.Widget?,
        semanticContainer: values["semanticContainer"] as bool,
      );
    case "outlined":
      return api.Card.outlined(
        key: values["key"] as api1.Key?,
        color: values["color"] as api1.Color?,
        shadowColor: values["shadowColor"] as api1.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api1.Color?,
        elevation: values["elevation"] as double?,
        margin: values["margin"] as api1.EdgeInsetsGeometry?,
        clipBehavior: values["clipBehavior"] as api1.Clip?,
        child: values["child"] as api1.Widget?,
        semanticContainer: values["semanticContainer"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ListTileHost extends FlaxWidgetHost {
  _ListTileHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createListTile(node.ctor, values);
}

api1.Widget _createListTile(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ListTile(
        key: values["key"] as api1.Key?,
        leading: values["leading"] as api1.Widget?,
        title: values["title"] as api1.Widget?,
        subtitle: values["subtitle"] as api1.Widget?,
        trailing: values["trailing"] as api1.Widget?,
        isThreeLine: values["isThreeLine"] as bool?,
        dense: values["dense"] as bool?,
        style: values["style"] as api.ListTileStyle?,
        selectedColor: values["selectedColor"] as api1.Color?,
        iconColor: values["iconColor"] as api1.Color?,
        textColor: values["textColor"] as api1.Color?,
        titleTextStyle: values["titleTextStyle"] as api1.TextStyle?,
        contentPadding: values["contentPadding"] as api1.EdgeInsetsGeometry?,
        enabled: values["enabled"] as bool,
        onTap: values["onTap"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        selected: values["selected"] as bool,
        focusNode: values["focusNode"] as api1.FocusNode?,
        tileColor: values["tileColor"] as api1.Color?,
        selectedTileColor: values["selectedTileColor"] as api1.Color?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _CheckboxHost extends FlaxWidgetHost {
  _CheckboxHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createCheckbox(node.ctor, values);
}

api1.Widget _createCheckbox(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Checkbox(
        key: values["key"] as api1.Key?,
        value: values["value"] as bool?,
        tristate: values["tristate"] as bool,
        onChanged: values["onChanged"] as void Function(bool? value)?,
        activeColor: values["activeColor"] as api1.Color?,
        fillColor:
            values["fillColor"] as api1.WidgetStateProperty<api1.Color?>?,
        checkColor: values["checkColor"] as api1.Color?,
        overlayColor:
            values["overlayColor"] as api1.WidgetStateProperty<api1.Color?>?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        isError: values["isError"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _SwitchHost extends FlaxWidgetHost {
  _SwitchHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createSwitch(node.ctor, values);
}

api1.Widget _createSwitch(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Switch(
        key: values["key"] as api1.Key?,
        value: values["value"] as bool,
        onChanged: values["onChanged"] as void Function(bool value)?,
        activeThumbColor: values["activeThumbColor"] as api1.Color?,
        activeTrackColor: values["activeTrackColor"] as api1.Color?,
        inactiveThumbColor: values["inactiveThumbColor"] as api1.Color?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        padding: values["padding"] as api1.EdgeInsetsGeometry?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _CircularProgressIndicatorHost extends FlaxWidgetHost {
  _CircularProgressIndicatorHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createCircularProgressIndicator(node.ctor, values);
}

api1.Widget _createCircularProgressIndicator(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.CircularProgressIndicator(
        key: values["key"] as api1.Key?,
        value: values["value"] as double?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        color: values["color"] as api1.Color?,
        strokeWidth: values["strokeWidth"] as double?,
        semanticsLabel: values["semanticsLabel"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _NavigationDestinationHost extends FlaxWidgetHost {
  _NavigationDestinationHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createNavigationDestination(node.ctor, values);
}

api1.Widget _createNavigationDestination(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.NavigationDestination(
        key: values["key"] as api1.Key?,
        icon: values["icon"] as api1.Widget,
        selectedIcon: values["selectedIcon"] as api1.Widget?,
        label: values["label"] as String,
        tooltip: values["tooltip"] as String?,
        enabled: values["enabled"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _NavigationBarHost extends FlaxWidgetHost {
  _NavigationBarHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createNavigationBar(node.ctor, values);
}

api1.Widget _createNavigationBar(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.NavigationBar(
        key: values["key"] as api1.Key?,
        selectedIndex: values["selectedIndex"] as int,
        destinations: values["destinations"] as List<api1.Widget>,
        onDestinationSelected:
            values["onDestinationSelected"] as void Function(int value)?,
        backgroundColor: values["backgroundColor"] as api1.Color?,
        elevation: values["elevation"] as double?,
        shadowColor: values["shadowColor"] as api1.Color?,
        indicatorColor: values["indicatorColor"] as api1.Color?,
        height: values["height"] as double?,
        labelBehavior:
            values["labelBehavior"] as api.NavigationDestinationLabelBehavior?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _MaterialPageRoute extends api.MaterialPageRoute<Object?> {
  final FlaxRouteLease _lease;
  _MaterialPageRoute(
    this._lease, {
    required api1.Widget Function(api1.BuildContext context) builder,
    required api1.RouteSettings? settings,
    required bool maintainState,
    required bool fullscreenDialog,
  }) : super(
         builder: builder,
         settings: settings,
         maintainState: maintainState,
         fullscreenDialog: fullscreenDialog,
       ) {
    _lease.onDiscard = dispose;
  }
  @override
  void dispose() {
    try {
      super.dispose();
    } finally {
      _lease.routeDisposed();
    }
  }
}

class _MaterialPage extends api.MaterialPage<Object?>
    implements FlaxPageConfiguration {
  @override
  final FlaxPageLease flaxPageLease;
  _MaterialPage(
    this.flaxPageLease, {
    required api1.Widget super.child,
    required bool super.maintainState,
    required bool super.fullscreenDialog,
    required api1.LocalKey? super.key,
    required bool super.canPop,
    void Function(bool didPop, Object? result) super.onPopInvoked,
    required String? super.name,
    required Object? super.arguments,
  });
  @override
  FlaxPageRoute createRoute(api1.BuildContext context) =>
      adapterMaterialPage.createMaterialPageRoute(this);
}

Object _deferred0(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<api1.Color?>(
    values["callback"] as api1.Color? Function(Set<api.WidgetState> states),
  );
}

Object _deferred1(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<double?>(
    values["callback"] as double? Function(Set<api.WidgetState> states),
  );
}

Object _deferred2(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<api1.OutlinedBorder?>(
    values["callback"]
        as api1.OutlinedBorder? Function(Set<api.WidgetState> states),
  );
}

Object _deferred3(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<api1.MouseCursor?>(
    values["callback"]
        as api1.MouseCursor? Function(Set<api.WidgetState> states),
  );
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

Object _callback1(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback1Matches(Object value) => value is void Function();
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback2(FlaxCallback callback) => (bool p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback2Matches(Object value) => value is void Function(bool value);
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(bool value))(positional[0] as bool);
  return null;
}

Object _callback3(FlaxCallback callback) => (bool p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback3Matches(Object value) => value is void Function(bool value);
Object? _callback3Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(bool value))(positional[0] as bool);
  return null;
}

Object _callback4(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (callback.call(positional, named) as Future<Object?>).then<void>(
    (value) => null,
  );
};
bool _callback4Matches(Object value) => value is Future<void> Function();
Object? _callback4Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function())();
}

Object _callback5(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Color?;
};
bool _callback5Matches(Object value) =>
    value is api1.Color? Function(Set<api.WidgetState> states);
Object? _callback5Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Color? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback6(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Color?;
};
bool _callback6Matches(Object value) =>
    value is api1.Color? Function(Set<api.WidgetState> states);
Object? _callback6Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Color? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback7(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Color?;
};
bool _callback7Matches(Object value) =>
    value is api1.Color? Function(Set<api.WidgetState> states);
Object? _callback7Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Color? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback8(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as double?;
};
bool _callback8Matches(Object value) =>
    value is double? Function(Set<api.WidgetState> states);
Object? _callback8Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as double? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback9(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.OutlinedBorder?;
};
bool _callback9Matches(Object value) =>
    value is api1.OutlinedBorder? Function(Set<api.WidgetState> states);
Object? _callback9Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.OutlinedBorder? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback10(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.MouseCursor?;
};
bool _callback10Matches(Object value) =>
    value is api1.MouseCursor? Function(Set<api.WidgetState> states);
Object? _callback10Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.MouseCursor? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback11(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Color?;
};
bool _callback11Matches(Object value) =>
    value is api1.Color? Function(Set<api.WidgetState> states);
Object? _callback11Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Color? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback12(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as double?;
};
bool _callback12Matches(Object value) =>
    value is double? Function(Set<api.WidgetState> states);
Object? _callback12Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as double? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback13(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Color?;
};
bool _callback13Matches(Object value) =>
    value is api1.Color? Function(Set<api.WidgetState> states);
Object? _callback13Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Color? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback14(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.MouseCursor?;
};
bool _callback14Matches(Object value) =>
    value is api1.MouseCursor? Function(Set<api.WidgetState> states);
Object? _callback14Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.MouseCursor? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback15(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Color?;
};
bool _callback15Matches(Object value) =>
    value is api1.Color? Function(Set<api.WidgetState> states);
Object? _callback15Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Color? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback16(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.OutlinedBorder?;
};
bool _callback16Matches(Object value) =>
    value is api1.OutlinedBorder? Function(Set<api.WidgetState> states);
Object? _callback16Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.OutlinedBorder? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback17(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Color?;
};
bool _callback17Matches(Object value) =>
    value is api1.Color? Function(Set<api.WidgetState> states);
Object? _callback17Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Color? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback18(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Color?;
};
bool _callback18Matches(Object value) =>
    value is api1.Color? Function(Set<api.WidgetState> states);
Object? _callback18Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Color? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback19(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Color?;
};
bool _callback19Matches(Object value) =>
    value is api1.Color? Function(Set<api.WidgetState> states);
Object? _callback19Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Color? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback20(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as double?;
};
bool _callback20Matches(Object value) =>
    value is double? Function(Set<api.WidgetState> states);
Object? _callback20Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as double? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback21(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.OutlinedBorder?;
};
bool _callback21Matches(Object value) =>
    value is api1.OutlinedBorder? Function(Set<api.WidgetState> states);
Object? _callback21Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.OutlinedBorder? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback22(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.MouseCursor?;
};
bool _callback22Matches(Object value) =>
    value is api1.MouseCursor? Function(Set<api.WidgetState> states);
Object? _callback22Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.MouseCursor? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback23(FlaxCallback callback) => (String p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback23Matches(Object value) => value is void Function(String value);
Object? _callback23Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(String value))(positional[0] as String);
  return null;
}

Object _callback24(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback24Matches(Object value) => value is void Function();
Object? _callback24Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback25(FlaxCallback callback) => (String p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback25Matches(Object value) => value is void Function(String value);
Object? _callback25Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(String value))(positional[0] as String);
  return null;
}

Object _callback26(FlaxCallback callback) => (api1.BuildContext p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Widget;
};
bool _callback26Matches(Object value) =>
    value is api1.Widget Function(api1.BuildContext context);
Object? _callback26Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Widget Function(api1.BuildContext context))(
    positional[0] as api1.BuildContext,
  );
}

Object _callback27(FlaxCallback callback) => (bool p0, Object? p1) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  positional.add(p1);
  callback.call(positional, named);
};
bool _callback27Matches(Object value) =>
    value is void Function(bool didPop, Object? result);
Object? _callback27Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(bool didPop, Object? result))(
    positional[0] as bool,
    positional[1],
  );
  return null;
}

Object _callback28(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback28Matches(Object value) => value is void Function();
Object? _callback28Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback29(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback29Matches(Object value) => value is void Function();
Object? _callback29Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback30(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback30Matches(Object value) => value is void Function();
Object? _callback30Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback31(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback31Matches(Object value) => value is void Function();
Object? _callback31Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback32(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback32Matches(Object value) => value is void Function();
Object? _callback32Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback33(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback33Matches(Object value) => value is void Function();
Object? _callback33Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback34(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback34Matches(Object value) => value is void Function();
Object? _callback34Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback35(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback35Matches(Object value) => value is void Function();
Object? _callback35Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback36(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback36Matches(Object value) => value is void Function();
Object? _callback36Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback37(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback37Matches(Object value) => value is void Function();
Object? _callback37Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback38(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback38Matches(Object value) => value is void Function();
Object? _callback38Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback39(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback39Matches(Object value) => value is void Function();
Object? _callback39Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback40(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback40Matches(Object value) => value is void Function();
Object? _callback40Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback41(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback41Matches(Object value) => value is void Function();
Object? _callback41Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback42(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback42Matches(Object value) => value is void Function();
Object? _callback42Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback43(FlaxCallback callback) => (bool? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback43Matches(Object value) => value is void Function(bool? value);
Object? _callback43Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(bool? value))(positional[0] as bool?);
  return null;
}

Object _callback44(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Color?;
};
bool _callback44Matches(Object value) =>
    value is api1.Color? Function(Set<api.WidgetState> states);
Object? _callback44Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Color? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback45(FlaxCallback callback) => (Set<api.WidgetState> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Color?;
};
bool _callback45Matches(Object value) =>
    value is api1.Color? Function(Set<api.WidgetState> states);
Object? _callback45Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Color? Function(Set<api.WidgetState> states))(
    positional[0] as Set<api.WidgetState>,
  );
}

Object _callback46(FlaxCallback callback) => (bool p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback46Matches(Object value) => value is void Function(bool value);
Object? _callback46Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(bool value))(positional[0] as bool);
  return null;
}

Object _callback47(FlaxCallback callback) => (int p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback47Matches(Object value) => value is void Function(int value);
Object? _callback47Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(int value))(positional[0] as int);
  return null;
}

Object _callback48(FlaxCallback callback) => (api1.BuildContext p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api1.Widget;
};
bool _callback48Matches(Object value) =>
    value is api1.Widget Function(api1.BuildContext context);
Object? _callback48Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api1.Widget Function(api1.BuildContext context))(
    positional[0] as api1.BuildContext,
  );
}

Object _collection0Create() => <api1.Widget>[];
bool _collection0Matches(Object value) => value is List<api1.Widget>;
Object _collection1Create() => <api1.Widget>[];
bool _collection1Matches(Object value) => value is Iterable<api1.Widget>;
Object _collection2Create() => <api1.NavigatorObserver>[];
bool _collection2Matches(Object value) => value is List<api1.NavigatorObserver>;
Object _collection3Create() => <api1.NavigatorObserver>[];
bool _collection3Matches(Object value) =>
    value is Iterable<api1.NavigatorObserver>;
Object _collection4Create() => <api.WidgetState>{};
bool _collection4Matches(Object value) => value is Set<api.WidgetState>;
Object _collection5Create() => <api.WidgetState>[];
bool _collection5Matches(Object value) => value is Iterable<api.WidgetState>;
Object _collection6Create() => <api3.TextInputFormatter>[];
bool _collection6Matches(Object value) =>
    value is List<api3.TextInputFormatter>;
Object _collection7Create() => <api3.TextInputFormatter>[];
bool _collection7Matches(Object value) =>
    value is Iterable<api3.TextInputFormatter>;
Future<Object?> _future0Adapt(Future<Object?> value) =>
    value.then<void>((_) {});
Future<Object?> _future1Adapt(Future<Object?> value) => value;
