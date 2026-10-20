// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:material_ui/material_ui.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart' as api1;
import 'package:flutter/painting.dart' as api2;
import 'package:flutter/animation.dart' as api3;
import 'package:flutter/rendering.dart' as api4;

import 'dart:ui' as api5;

import 'package:flutter/foundation.dart' as api6;
import 'package:flutter/gestures.dart' as api7;

import 'dart:core' as api8;

import 'package:flutter/services.dart' as api9;
import 'package:flutter/cupertino.dart' as api10;
import 'package:flutter/physics.dart' as api11;
import 'package:flutter/scheduler.dart' as api12;
import 'package:flutter/semantics.dart' as api13;
import 'package:cupertino_ui/cupertino_ui.dart' as api14;
import "package:flax_cupertino_ui/src/generated/cupertino_bindings.g.dart"
    as _flaxBindings0;

// ignore: unused_element
const _flaxOmitted = Object();
const materialBindings = FlaxBindingModule(
  'material',
  [
    FlaxEnumBinding("flax.material/material#type:ListTileStyle", {
      "list": api.ListTileStyle.list,
      "drawer": api.ListTileStyle.drawer,
    }, supertypes: []),
    FlaxEnumBinding("flax.material/material#type:MaterialType", {
      "canvas": api.MaterialType.canvas,
      "card": api.MaterialType.card,
      "circle": api.MaterialType.circle,
      "button": api.MaterialType.button,
      "transparency": api.MaterialType.transparency,
    }, supertypes: []),
    FlaxEnumBinding(
      "flax.material/material#type:NavigationDestinationLabelBehavior",
      {
        "alwaysShow": api.NavigationDestinationLabelBehavior.alwaysShow,
        "alwaysHide": api.NavigationDestinationLabelBehavior.alwaysHide,
        "onlyShowSelected":
            api.NavigationDestinationLabelBehavior.onlyShowSelected,
      },
      supertypes: [],
    ),
    FlaxEnumBinding("flax.material/material#type:ThemeMode", {
      "system": api.ThemeMode.system,
      "light": api.ThemeMode.light,
      "dark": api.ThemeMode.dark,
    }, supertypes: []),
    FlaxWidgetBinding(
      "flax.material/material#type:AlertDialog",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter("iconPadding", _flaxBinding2, required: false),
          FlaxParameter("iconColor", _flaxBinding3, required: false),
          FlaxParameter("title", _flaxBinding1, required: false),
          FlaxParameter("titlePadding", _flaxBinding2, required: false),
          FlaxParameter("titleTextStyle", _flaxBinding4, required: false),
          FlaxParameter("content", _flaxBinding1, required: false),
          FlaxParameter("contentPadding", _flaxBinding2, required: false),
          FlaxParameter("contentTextStyle", _flaxBinding4, required: false),
          FlaxParameter("actions", _flaxBinding6, required: false),
          FlaxParameter("actionsPadding", _flaxBinding2, required: false),
          FlaxParameter("actionsAlignment", _flaxBinding7, required: false),
          FlaxParameter(
            "actionsOverflowAlignment",
            _flaxBinding8,
            required: false,
          ),
          FlaxParameter(
            "actionsOverflowDirection",
            _flaxBinding9,
            required: false,
          ),
          FlaxParameter(
            "actionsOverflowButtonSpacing",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("buttonPadding", _flaxBinding2, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", flaxNullableDoubleType, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter(
            "semanticLabel",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter("insetPadding", _flaxBinding10, required: false),
          FlaxParameter("clipBehavior", _flaxBinding11, required: false),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter("alignment", _flaxBinding13, required: false),
          FlaxParameter("constraints", _flaxBinding14, required: false),
          FlaxParameter(
            "scrollable",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
        ],
        "adaptive": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter("iconPadding", _flaxBinding2, required: false),
          FlaxParameter("iconColor", _flaxBinding3, required: false),
          FlaxParameter("title", _flaxBinding1, required: false),
          FlaxParameter("titlePadding", _flaxBinding2, required: false),
          FlaxParameter("titleTextStyle", _flaxBinding4, required: false),
          FlaxParameter("content", _flaxBinding1, required: false),
          FlaxParameter("contentPadding", _flaxBinding2, required: false),
          FlaxParameter("contentTextStyle", _flaxBinding4, required: false),
          FlaxParameter("actions", _flaxBinding6, required: false),
          FlaxParameter("actionsPadding", _flaxBinding2, required: false),
          FlaxParameter("actionsAlignment", _flaxBinding7, required: false),
          FlaxParameter(
            "actionsOverflowAlignment",
            _flaxBinding8,
            required: false,
          ),
          FlaxParameter(
            "actionsOverflowDirection",
            _flaxBinding9,
            required: false,
          ),
          FlaxParameter(
            "actionsOverflowButtonSpacing",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("buttonPadding", _flaxBinding2, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", flaxNullableDoubleType, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter(
            "semanticLabel",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter(
            "insetPadding",
            flaxEdgeInsetsType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("clipBehavior", _flaxBinding11, required: false),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter("alignment", _flaxBinding13, required: false),
          FlaxParameter("constraints", _flaxBinding14, required: false),
          FlaxParameter(
            "scrollable",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("scrollController", _flaxBinding15, required: false),
          FlaxParameter(
            "actionScrollController",
            _flaxBinding15,
            required: false,
          ),
          FlaxParameter(
            "insetAnimationDuration",
            flaxDurationType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "insetAnimationCurve",
            flaxCurveType,
            required: false,
            omitWhenAbsent: true,
          ),
        ],
      },
      _AlertDialogHost.new,
      matches: _isAlertDialog,
      methods: {},
    ),
    _flaxBinding81,
    _flaxBinding150,
    FlaxWidgetBinding(
      "flax.material/material#type:Card",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", flaxNullableDoubleType, required: false),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter(
            "borderOnForeground",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("margin", _flaxBinding2, required: false),
          FlaxParameter("clipBehavior", _flaxBinding11, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter(
            "semanticContainer",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
        ],
        "filled": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", flaxNullableDoubleType, required: false),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter(
            "borderOnForeground",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("margin", _flaxBinding2, required: false),
          FlaxParameter("clipBehavior", _flaxBinding11, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter(
            "semanticContainer",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
        ],
        "outlined": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", flaxNullableDoubleType, required: false),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter(
            "borderOnForeground",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("margin", _flaxBinding2, required: false),
          FlaxParameter("clipBehavior", _flaxBinding11, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter(
            "semanticContainer",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
        ],
      },
      _CardHost.new,
      matches: _isCard,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Checkbox",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("value", flaxNullableBoolType),
          FlaxParameter(
            "tristate",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter.required(
            "onChanged",
            flaxNullableBoolChangedNullableType,
          ),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("activeColor", _flaxBinding3, required: false),
          FlaxParameter("fillColor", _flaxBinding91, required: false),
          FlaxParameter("checkColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("overlayColor", _flaxBinding91, required: false),
          FlaxParameter(
            "splashRadius",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("visualDensity", _flaxBinding128, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("shape", _flaxBinding118, required: false),
          FlaxParameter("side", _flaxBinding113, required: false),
          FlaxParameter(
            "isError",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "semanticLabel",
            flaxNullableStringType,
            required: false,
          ),
        ],
        "adaptive": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("value", flaxNullableBoolType),
          FlaxParameter(
            "tristate",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter.required(
            "onChanged",
            flaxNullableBoolChangedNullableType,
          ),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("activeColor", _flaxBinding3, required: false),
          FlaxParameter("fillColor", _flaxBinding91, required: false),
          FlaxParameter("checkColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("overlayColor", _flaxBinding91, required: false),
          FlaxParameter(
            "splashRadius",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("visualDensity", _flaxBinding128, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("shape", _flaxBinding118, required: false),
          FlaxParameter("side", _flaxBinding113, required: false),
          FlaxParameter(
            "isError",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "semanticLabel",
            flaxNullableStringType,
            required: false,
          ),
        ],
      },
      _CheckboxHost.new,
      matches: _isCheckbox,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:CircularProgressIndicator",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("value", flaxNullableDoubleType, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("valueColor", _flaxBinding152, required: false),
          FlaxParameter("strokeWidth", flaxNullableDoubleType, required: false),
          FlaxParameter("strokeAlign", flaxNullableDoubleType, required: false),
          FlaxParameter(
            "semanticsLabel",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter(
            "semanticsValue",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter("strokeCap", _flaxBinding153, required: false),
          FlaxParameter("constraints", _flaxBinding14, required: false),
          FlaxParameter("trackGap", flaxNullableDoubleType, required: false),
          FlaxParameter("year2023", flaxNullableBoolType, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("controller", _flaxBinding154, required: false),
        ],
        "adaptive": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("value", flaxNullableDoubleType, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("valueColor", _flaxBinding152, required: false),
          FlaxParameter("strokeWidth", flaxNullableDoubleType, required: false),
          FlaxParameter(
            "semanticsLabel",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter(
            "semanticsValue",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter("strokeCap", _flaxBinding153, required: false),
          FlaxParameter("strokeAlign", flaxNullableDoubleType, required: false),
          FlaxParameter("constraints", _flaxBinding14, required: false),
          FlaxParameter("trackGap", flaxNullableDoubleType, required: false),
          FlaxParameter("year2023", flaxNullableBoolType, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("controller", _flaxBinding154, required: false),
        ],
      },
      _CircularProgressIndicatorHost.new,
      matches: _isCircularProgressIndicator,
      methods: {},
    ),
    _flaxBinding219,
    FlaxWidgetBinding(
      "flax.material/material#type:Divider",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("height", flaxNullableDoubleType, required: false),
          FlaxParameter("thickness", flaxNullableDoubleType, required: false),
          FlaxParameter("indent", flaxNullableDoubleType, required: false),
          FlaxParameter("endIndent", flaxNullableDoubleType, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("radius", _flaxBinding220, required: false),
        ],
      },
      _DividerHost.new,
      matches: _isDivider,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Drawer",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", flaxNullableDoubleType, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter("width", flaxNullableDoubleType, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter(
            "semanticLabel",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter("clipBehavior", _flaxBinding11, required: false),
        ],
      },
      _DrawerHost.new,
      matches: _isDrawer,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:ElevatedButton",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("clipBehavior", _flaxBinding11, required: false),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter.required("child", _flaxBinding1),
        ],
        "icon": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding11,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter.required("label", flaxWidgetType),
        ],
      },
      _ElevatedButtonHost.new,
      matches: _isElevatedButton,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:FilledButton",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding11,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter.required("child", _flaxBinding1),
        ],
        "icon": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding11,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter.required("label", flaxWidgetType),
        ],
        "tonal": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding11,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter.required("child", _flaxBinding1),
        ],
        "tonalIcon": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding11,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter.required("label", flaxWidgetType),
        ],
      },
      _FilledButtonHost.new,
      matches: _isFilledButton,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:FloatingActionButton",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter("tooltip", flaxNullableStringType, required: false),
          FlaxParameter("foregroundColor", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter(
            "heroTag",
            flaxNullableAnyType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("elevation", flaxNullableDoubleType, required: false),
          FlaxParameter(
            "focusElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "hoverElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "highlightElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "disabledElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter(
            "mini",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter(
            "clipBehavior",
            flaxClipType,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "isExtended",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "enableFeedback",
            flaxNullableBoolType,
            required: false,
          ),
        ],
        "small": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter("tooltip", flaxNullableStringType, required: false),
          FlaxParameter("foregroundColor", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter(
            "heroTag",
            flaxNullableAnyType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("elevation", flaxNullableDoubleType, required: false),
          FlaxParameter(
            "focusElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "hoverElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "highlightElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "disabledElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter(
            "clipBehavior",
            flaxClipType,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "enableFeedback",
            flaxNullableBoolType,
            required: false,
          ),
        ],
        "large": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter("tooltip", flaxNullableStringType, required: false),
          FlaxParameter("foregroundColor", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter(
            "heroTag",
            flaxNullableAnyType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("elevation", flaxNullableDoubleType, required: false),
          FlaxParameter(
            "focusElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "hoverElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "highlightElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "disabledElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter(
            "clipBehavior",
            flaxClipType,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "enableFeedback",
            flaxNullableBoolType,
            required: false,
          ),
        ],
        "extended": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("tooltip", flaxNullableStringType, required: false),
          FlaxParameter("foregroundColor", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter(
            "heroTag",
            flaxNullableAnyType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("elevation", flaxNullableDoubleType, required: false),
          FlaxParameter(
            "focusElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "hoverElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter(
            "highlightElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "disabledElevation",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter(
            "isExtended",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "clipBehavior",
            flaxClipType,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "extendedIconLabelSpacing",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("extendedPadding", _flaxBinding2, required: false),
          FlaxParameter("extendedTextStyle", _flaxBinding4, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter.required("label", flaxWidgetType),
          FlaxParameter(
            "enableFeedback",
            flaxNullableBoolType,
            required: false,
          ),
        ],
      },
      _FloatingActionButtonHost.new,
      matches: _isFloatingActionButton,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:IconButton",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("iconSize", flaxNullableDoubleType, required: false),
          FlaxParameter("visualDensity", _flaxBinding128, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("alignment", _flaxBinding13, required: false),
          FlaxParameter(
            "splashRadius",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("highlightColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("disabledColor", _flaxBinding3, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("tooltip", flaxNullableStringType, required: false),
          FlaxParameter(
            "enableFeedback",
            flaxNullableBoolType,
            required: false,
          ),
          FlaxParameter("constraints", _flaxBinding14, required: false),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("isSelected", flaxNullableBoolType, required: false),
          FlaxParameter("selectedIcon", _flaxBinding1, required: false),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter.required("icon", flaxWidgetType),
        ],
        "filled": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("iconSize", flaxNullableDoubleType, required: false),
          FlaxParameter("visualDensity", _flaxBinding128, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("alignment", _flaxBinding13, required: false),
          FlaxParameter(
            "splashRadius",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("highlightColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("disabledColor", _flaxBinding3, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("tooltip", flaxNullableStringType, required: false),
          FlaxParameter(
            "enableFeedback",
            flaxNullableBoolType,
            required: false,
          ),
          FlaxParameter("constraints", _flaxBinding14, required: false),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("isSelected", flaxNullableBoolType, required: false),
          FlaxParameter("selectedIcon", _flaxBinding1, required: false),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter.required("icon", flaxWidgetType),
        ],
        "filledTonal": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("iconSize", flaxNullableDoubleType, required: false),
          FlaxParameter("visualDensity", _flaxBinding128, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("alignment", _flaxBinding13, required: false),
          FlaxParameter(
            "splashRadius",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("highlightColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("disabledColor", _flaxBinding3, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("tooltip", flaxNullableStringType, required: false),
          FlaxParameter(
            "enableFeedback",
            flaxNullableBoolType,
            required: false,
          ),
          FlaxParameter("constraints", _flaxBinding14, required: false),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("isSelected", flaxNullableBoolType, required: false),
          FlaxParameter("selectedIcon", _flaxBinding1, required: false),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter.required("icon", flaxWidgetType),
        ],
        "outlined": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("iconSize", flaxNullableDoubleType, required: false),
          FlaxParameter("visualDensity", _flaxBinding128, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("alignment", _flaxBinding13, required: false),
          FlaxParameter(
            "splashRadius",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("highlightColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("disabledColor", _flaxBinding3, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("tooltip", flaxNullableStringType, required: false),
          FlaxParameter(
            "enableFeedback",
            flaxNullableBoolType,
            required: false,
          ),
          FlaxParameter("constraints", _flaxBinding14, required: false),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("isSelected", flaxNullableBoolType, required: false),
          FlaxParameter("selectedIcon", _flaxBinding1, required: false),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter.required("icon", flaxWidgetType),
        ],
      },
      _IconButtonHost.new,
      matches: _isIconButton,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:InkWell",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter("onTap", flaxVoidNullableCallbackType, required: false),
          FlaxParameter(
            "onDoubleTap",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onLongPressUp",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter("onTapDown", _flaxBinding224, required: false),
          FlaxParameter("onTapUp", _flaxBinding227, required: false),
          FlaxParameter(
            "onTapCancel",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onSecondaryTap",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter("onSecondaryTapUp", _flaxBinding227, required: false),
          FlaxParameter("onSecondaryTapDown", _flaxBinding224, required: false),
          FlaxParameter(
            "onSecondaryTapCancel",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onHighlightChanged",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("highlightColor", _flaxBinding3, required: false),
          FlaxParameter("overlayColor", _flaxBinding91, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("radius", flaxNullableDoubleType, required: false),
          FlaxParameter("borderRadius", _flaxBinding228, required: false),
          FlaxParameter("customBorder", _flaxBinding12, required: false),
          FlaxParameter(
            "enableFeedback",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "excludeFromSemantics",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "canRequestFocus",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
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
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter("hoverDuration", _flaxBinding130, required: false),
        ],
      },
      _InkWellHost.new,
      matches: _isInkWell,
      methods: {},
    ),
    _flaxBinding289,
    FlaxWidgetBinding(
      "flax.material/material#type:LinearProgressIndicator",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("value", flaxNullableDoubleType, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("valueColor", _flaxBinding152, required: false),
          FlaxParameter("minHeight", flaxNullableDoubleType, required: false),
          FlaxParameter(
            "semanticsLabel",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter(
            "semanticsValue",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter("borderRadius", _flaxBinding220, required: false),
          FlaxParameter("stopIndicatorColor", _flaxBinding3, required: false),
          FlaxParameter(
            "stopIndicatorRadius",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("trackGap", flaxNullableDoubleType, required: false),
          FlaxParameter("year2023", flaxNullableBoolType, required: false),
          FlaxParameter("controller", _flaxBinding154, required: false),
        ],
      },
      _LinearProgressIndicatorHost.new,
      matches: _isLinearProgressIndicator,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:ListTile",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("leading", _flaxBinding1, required: false),
          FlaxParameter("title", _flaxBinding1, required: false),
          FlaxParameter("subtitle", _flaxBinding1, required: false),
          FlaxParameter("trailing", _flaxBinding1, required: false),
          FlaxParameter("isThreeLine", flaxNullableBoolType, required: false),
          FlaxParameter("dense", flaxNullableBoolType, required: false),
          FlaxParameter("visualDensity", _flaxBinding128, required: false),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter("style", _flaxBinding290, required: false),
          FlaxParameter("selectedColor", _flaxBinding3, required: false),
          FlaxParameter("iconColor", _flaxBinding3, required: false),
          FlaxParameter("textColor", _flaxBinding3, required: false),
          FlaxParameter("titleTextStyle", _flaxBinding4, required: false),
          FlaxParameter("subtitleTextStyle", _flaxBinding4, required: false),
          FlaxParameter(
            "leadingAndTrailingTextStyle",
            _flaxBinding4,
            required: false,
          ),
          FlaxParameter("contentPadding", _flaxBinding2, required: false),
          FlaxParameter(
            "enabled",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("onTap", flaxVoidNullableCallbackType, required: false),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter(
            "selected",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("tileColor", _flaxBinding3, required: false),
          FlaxParameter("selectedTileColor", _flaxBinding3, required: false),
          FlaxParameter(
            "enableFeedback",
            flaxNullableBoolType,
            required: false,
          ),
          FlaxParameter(
            "horizontalTitleGap",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "minVerticalPadding",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "minLeadingWidth",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "minTileHeight",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "internalAddSemanticForOnTap",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("statesController", _flaxBinding221, required: false),
        ],
      },
      _ListTileHost.new,
      matches: _isListTile,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Material",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter(
            "type",
            _flaxBinding291,
            required: false,
            defaultValue: api.MaterialType.canvas,
          ),
          FlaxParameter(
            "elevation",
            flaxDoubleType,
            required: false,
            defaultValue: 0.0,
          ),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("textStyle", _flaxBinding4, required: false),
          FlaxParameter("borderRadius", _flaxBinding220, required: false),
          FlaxParameter("shape", _flaxBinding12, required: false),
          FlaxParameter(
            "borderOnForeground",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "clipBehavior",
            flaxClipType,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter(
            "animationDuration",
            flaxDurationType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter(
            "animateColor",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
        ],
      },
      _MaterialHost.new,
      matches: _isMaterial,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:MaterialApp",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("navigatorKey", _flaxBinding292, required: false),
          FlaxParameter("home", _flaxBinding1, required: false),
          FlaxParameter(
            "routes",
            _flaxBinding295,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "initialRoute",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter("onGenerateRoute", _flaxBinding299, required: false),
          FlaxParameter(
            "onGenerateInitialRoutes",
            _flaxBinding304,
            required: false,
          ),
          FlaxParameter("onUnknownRoute", _flaxBinding299, required: false),
          FlaxParameter(
            "onNavigationNotification",
            _flaxBinding307,
            required: false,
          ),
          FlaxParameter(
            "navigatorObservers",
            _flaxBinding310,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("builder", _flaxBinding312, required: false),
          FlaxParameter(
            "title",
            flaxNullableStringType,
            required: false,
            defaultValue: '',
          ),
          FlaxParameter("onGenerateTitle", _flaxBinding314, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("theme", _flaxBinding315, required: false),
          FlaxParameter("darkTheme", _flaxBinding315, required: false),
          FlaxParameter("highContrastTheme", _flaxBinding315, required: false),
          FlaxParameter(
            "highContrastDarkTheme",
            _flaxBinding315,
            required: false,
          ),
          FlaxParameter(
            "themeMode",
            _flaxBinding316,
            required: false,
            defaultValue: api.ThemeMode.system,
          ),
          FlaxParameter(
            "themeAnimationDuration",
            flaxDurationType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "themeAnimationCurve",
            flaxCurveType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("locale", _flaxBinding317, required: false),
          FlaxParameter(
            "localizationsDelegates",
            _flaxBinding319,
            required: false,
          ),
          FlaxParameter(
            "localeListResolutionCallback",
            _flaxBinding324,
            required: false,
          ),
          FlaxParameter(
            "localeResolutionCallback",
            _flaxBinding326,
            required: false,
          ),
          FlaxParameter(
            "supportedLocales",
            _flaxBinding321,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "debugShowMaterialGrid",
            flaxBoolType,
            required: false,
            defaultValue: false,
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
          FlaxParameter("shortcuts", _flaxBinding329, required: false),
          FlaxParameter("actions", _flaxBinding331, required: false),
          FlaxParameter(
            "restorationScopeId",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter("scrollBehavior", _flaxBinding332, required: false),
          FlaxParameter(
            "useInheritedMediaQuery",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "themeAnimationStyle",
            _flaxBinding333,
            required: false,
          ),
        ],
        "router": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter(
            "routeInformationProvider",
            _flaxBinding334,
            required: false,
          ),
          FlaxParameter(
            "routeInformationParser",
            _flaxBinding335,
            required: false,
          ),
          FlaxParameter("routerDelegate", _flaxBinding336, required: false),
          FlaxParameter("routerConfig", _flaxBinding337, required: false),
          FlaxParameter(
            "backButtonDispatcher",
            _flaxBinding338,
            required: false,
          ),
          FlaxParameter("builder", _flaxBinding312, required: false),
          FlaxParameter("title", flaxNullableStringType, required: false),
          FlaxParameter("onGenerateTitle", _flaxBinding314, required: false),
          FlaxParameter(
            "onNavigationNotification",
            _flaxBinding307,
            required: false,
          ),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("theme", _flaxBinding315, required: false),
          FlaxParameter("darkTheme", _flaxBinding315, required: false),
          FlaxParameter("highContrastTheme", _flaxBinding315, required: false),
          FlaxParameter(
            "highContrastDarkTheme",
            _flaxBinding315,
            required: false,
          ),
          FlaxParameter(
            "themeMode",
            _flaxBinding316,
            required: false,
            defaultValue: api.ThemeMode.system,
          ),
          FlaxParameter(
            "themeAnimationDuration",
            flaxDurationType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "themeAnimationCurve",
            flaxCurveType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("locale", _flaxBinding317, required: false),
          FlaxParameter(
            "localizationsDelegates",
            _flaxBinding319,
            required: false,
          ),
          FlaxParameter(
            "localeListResolutionCallback",
            _flaxBinding324,
            required: false,
          ),
          FlaxParameter(
            "localeResolutionCallback",
            _flaxBinding326,
            required: false,
          ),
          FlaxParameter(
            "supportedLocales",
            _flaxBinding321,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "debugShowMaterialGrid",
            flaxBoolType,
            required: false,
            defaultValue: false,
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
          FlaxParameter("shortcuts", _flaxBinding329, required: false),
          FlaxParameter("actions", _flaxBinding331, required: false),
          FlaxParameter(
            "restorationScopeId",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter("scrollBehavior", _flaxBinding332, required: false),
          FlaxParameter(
            "useInheritedMediaQuery",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "themeAnimationStyle",
            _flaxBinding333,
            required: false,
          ),
        ],
      },
      _MaterialAppHost.new,
      matches: _isMaterialApp,
      methods: {},
    ),
    FlaxObjectBinding(
      "flax.material/material#type:MaterialPage",
      [
        _flaxBinding339,
        _flaxBinding340,
        _flaxBinding342,
        _flaxBinding343,
        FlaxGetter.plain(
          "onPopInvoked",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain("didPop", flaxBoolType),
                FlaxCallbackParameter.plain("result", flaxNullableAnyType),
              ],
              flaxVoidType,
              _callback1,
              id: "callback:<>(p:r:didPop:bool:,p:r:result:any?:)->void:",
              invoke: _callback1Invoke,
              matches: _callback1Matches,
            ),
          ),
          _MaterialPage_onPopInvoked,
        ),
        _flaxBinding344,
        _flaxBinding345,
        _flaxBinding346,
        _flaxBinding347,
        _flaxBinding348,
      ],
      {
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxStringType,
          _MaterialPage_toString,
        ),
        "canUpdate": FlaxInstanceMethod.plain(
          _flaxBinding350,
          flaxBoolType,
          _MaterialPage_canUpdate,
        ),
        "createRoute": FlaxInstanceMethod.plain(
          _flaxBinding351,
          FlaxTypeRef("object", id: "flax.core/flutter#type:Route"),
          _MaterialPage_createRoute,
        ),
      },
      constructors: {"": _flaxBinding354},
      create: _createMaterialPage,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:Page",
        "flax.core/flutter#type:RouteSettings",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isMaterialPage,
      methods: const {},
    ),
    FlaxObjectBinding(
      "flax.material/material#type:MaterialPageRoute",
      [
        _flaxBinding356,
        _flaxBinding358,
        _flaxBinding359,
        _flaxBinding363,
        _flaxBinding364,
        _flaxBinding365,
        _flaxBinding366,
        _flaxBinding367,
        _flaxBinding368,
        _flaxBinding369,
        _flaxBinding370,
        _flaxBinding371,
        _flaxBinding372,
        _flaxBinding373,
        _flaxBinding375,
        _flaxBinding377,
        _flaxBinding378,
        _flaxBinding380,
        _flaxBinding381,
        _flaxBinding382,
        _flaxBinding383,
        _flaxBinding384,
        FlaxGetter.plain(
          "completed",
          FlaxTypeRef(
            "future",
            item: flaxNullableAnyType,
            future: FlaxFutureBinding("any?:", _future0Adapt),
          ),
          _MaterialPageRoute_completed,
        ),
        _flaxBinding385,
        _flaxBinding386,
        _flaxBinding387,
        _flaxBinding388,
        _flaxBinding389,
        _flaxBinding390,
        _flaxBinding391,
        _flaxBinding392,
        _flaxBinding396,
        _flaxBinding397,
        _flaxBinding399,
        _flaxBinding400,
        _flaxBinding402,
        _flaxBinding403,
        FlaxGetter.plain(
          "currentResult",
          FlaxTypeRef("any", nullable: true),
          _MaterialPageRoute_currentResult,
        ),
        FlaxGetter.plain(
          "popped",
          FlaxTypeRef(
            "future",
            item: flaxNullableAnyType,
            future: FlaxFutureBinding("any?:", _future0Adapt),
          ),
          _MaterialPageRoute_popped,
        ),
        _flaxBinding404,
        _flaxBinding405,
        _flaxBinding406,
        _flaxBinding407,
        _flaxBinding408,
      ],
      {
        "setState": FlaxInstanceMethod.plain(
          _flaxBinding409,
          flaxVoidType,
          _MaterialPageRoute_setState,
        ),
        "buildPage": FlaxInstanceMethod.plain(
          _flaxBinding410,
          flaxWidgetType,
          _MaterialPageRoute_buildPage,
        ),
        "buildTransitions": FlaxInstanceMethod.plain(
          _flaxBinding411,
          flaxWidgetType,
          _MaterialPageRoute_buildTransitions,
        ),
        "install": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_install,
        ),
        "didPush": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxTickerFutureType,
          _MaterialPageRoute_didPush,
        ),
        "didAdd": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_didAdd,
        ),
        "willPop": FlaxInstanceMethod.plain(
          _flaxBinding57,
          _flaxBinding412,
          _MaterialPageRoute_willPop,
        ),
        "onPopInvokedWithResult": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required("didPop", flaxBoolType),
            FlaxParameter.required(
              "result",
              FlaxTypeRef("any", nullable: true),
            ),
          ],
          flaxVoidType,
          _MaterialPageRoute_onPopInvokedWithResult,
        ),
        "addScopedWillPopCallback": FlaxInstanceMethod.plain(
          _flaxBinding416,
          flaxVoidType,
          _MaterialPageRoute_addScopedWillPopCallback,
        ),
        "removeScopedWillPopCallback": FlaxInstanceMethod.plain(
          _flaxBinding416,
          flaxVoidType,
          _MaterialPageRoute_removeScopedWillPopCallback,
        ),
        "registerPopEntry": FlaxInstanceMethod.plain(
          _flaxBinding418,
          flaxVoidType,
          _MaterialPageRoute_registerPopEntry,
        ),
        "unregisterPopEntry": FlaxInstanceMethod.plain(
          _flaxBinding418,
          flaxVoidType,
          _MaterialPageRoute_unregisterPopEntry,
        ),
        "didChangePrevious": FlaxInstanceMethod.plain(
          _flaxBinding419,
          flaxVoidType,
          _MaterialPageRoute_didChangePrevious,
        ),
        "didChangeNext": FlaxInstanceMethod.plain(
          _flaxBinding420,
          flaxVoidType,
          _MaterialPageRoute_didChangeNext,
        ),
        "didPopNext": FlaxInstanceMethod.plain(
          _flaxBinding421,
          flaxVoidType,
          _MaterialPageRoute_didPopNext,
        ),
        "changedInternalState": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_changedInternalState,
        ),
        "changedExternalState": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_changedExternalState,
        ),
        "buildModalBarrier": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxWidgetType,
          _MaterialPageRoute_buildModalBarrier,
        ),
        "createOverlayEntries": FlaxInstanceMethod.plain(
          _flaxBinding57,
          _flaxBinding394,
          _MaterialPageRoute_createOverlayEntries,
        ),
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxStringType,
          _MaterialPageRoute_toString,
        ),
        "debugTransitionCompleted": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxBoolType,
          _MaterialPageRoute_debugTransitionCompleted,
        ),
        "createAnimationController": FlaxInstanceMethod.plain(
          _flaxBinding57,
          _flaxBinding422,
          _MaterialPageRoute_createAnimationController,
        ),
        "createAnimation": FlaxInstanceMethod.plain(
          _flaxBinding57,
          _flaxBinding360,
          _MaterialPageRoute_createAnimation,
        ),
        "createSimulation": FlaxInstanceMethod.plain(
          _flaxBinding424,
          _flaxBinding423,
          _MaterialPageRoute_createSimulation,
        ),
        "didReplace": FlaxInstanceMethod.plain(
          _flaxBinding425,
          flaxVoidType,
          _MaterialPageRoute_didReplace,
        ),
        "didPop": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "result",
              FlaxTypeRef("any", nullable: true),
            ),
          ],
          flaxBoolType,
          _MaterialPageRoute_didPop,
        ),
        "canTransitionTo": FlaxInstanceMethod.plain(
          _flaxBinding427,
          flaxBoolType,
          _MaterialPageRoute_canTransitionTo,
        ),
        "canTransitionFrom": FlaxInstanceMethod.plain(
          _flaxBinding428,
          flaxBoolType,
          _MaterialPageRoute_canTransitionFrom,
        ),
        "handleStartBackGesture": FlaxInstanceMethod.plain(
          _flaxBinding429,
          flaxVoidType,
          _MaterialPageRoute_handleStartBackGesture,
        ),
        "handleUpdateBackGestureProgress": FlaxInstanceMethod.plain(
          _flaxBinding430,
          flaxVoidType,
          _MaterialPageRoute_handleUpdateBackGestureProgress,
        ),
        "handleCancelBackGesture": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_handleCancelBackGesture,
        ),
        "handleCommitBackGesture": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_handleCommitBackGesture,
        ),
        "dispose": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_dispose,
        ),
        "onPopInvoked": FlaxInstanceMethod.plain(
          _flaxBinding431,
          flaxVoidType,
          _MaterialPageRoute_onPopInvoked,
        ),
        "didComplete": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "result",
              FlaxTypeRef("any", nullable: true),
            ),
          ],
          flaxVoidType,
          _MaterialPageRoute_didComplete,
        ),
        "addLocalHistoryEntry": FlaxInstanceMethod.plain(
          _flaxBinding433,
          flaxVoidType,
          _MaterialPageRoute_addLocalHistoryEntry,
        ),
        "removeLocalHistoryEntry": FlaxInstanceMethod.plain(
          _flaxBinding433,
          flaxVoidType,
          _MaterialPageRoute_removeLocalHistoryEntry,
        ),
        "buildContent": FlaxInstanceMethod.plain(
          _flaxBinding351,
          flaxWidgetType,
          _MaterialPageRoute_buildContent,
        ),
      },
      constructors: {"": _flaxBinding435},
      create: _createMaterialPageRoute,
      disposeMethod: "dispose",
      listenerPairs: {},
      supertypes: [
        "flax.core/sdk_widgets#type:PageRoute",
        "flax.core/sdk_widgets#type:ModalRoute",
        "flax.core/sdk_widgets#type:TransitionRoute",
        "flax.core/sdk_widgets#type:OverlayRoute",
        "flax.core/flutter#type:Route",
        "package:flutter/src/widgets/navigator.dart::_RoutePlaceholder",
        "flax.core/sdk_widgets#type:PredictiveBackRoute",
        "flax.core/sdk_widgets#type:LocalHistoryRoute",
        "package:material_ui/src/page.dart::MaterialRouteTransitionMixin",
      ],
      setters: [_flaxBinding436, _flaxBinding437, _flaxBinding438],
      matches: _isMaterialPageRoute,
      methods: const {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:NavigationBar",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("animationDuration", _flaxBinding130, required: false),
          FlaxParameter(
            "selectedIndex",
            flaxIntType,
            required: false,
            defaultValue: 0,
          ),
          FlaxParameter.required("destinations", _flaxBinding439),
          FlaxParameter(
            "onDestinationSelected",
            flaxIntChangedNullableType,
            required: false,
          ),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", flaxNullableDoubleType, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("indicatorColor", _flaxBinding3, required: false),
          FlaxParameter("indicatorShape", _flaxBinding12, required: false),
          FlaxParameter("height", flaxNullableDoubleType, required: false),
          FlaxParameter("labelBehavior", _flaxBinding440, required: false),
          FlaxParameter("overlayColor", _flaxBinding91, required: false),
          FlaxParameter("labelTextStyle", _flaxBinding87, required: false),
          FlaxParameter("labelPadding", _flaxBinding2, required: false),
          FlaxParameter(
            "maintainBottomViewPadding",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
        ],
      },
      _NavigationBarHost.new,
      matches: _isNavigationBar,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:NavigationDestination",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("icon", flaxWidgetType),
          FlaxParameter("selectedIcon", _flaxBinding1, required: false),
          FlaxParameter.required("label", flaxStringType),
          FlaxParameter("tooltip", flaxNullableStringType, required: false),
          FlaxParameter(
            "enabled",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
        ],
      },
      _NavigationDestinationHost.new,
      matches: _isNavigationDestination,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:OutlinedButton",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("clipBehavior", _flaxBinding11, required: false),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter.required("child", _flaxBinding1),
        ],
        "icon": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("clipBehavior", _flaxBinding11, required: false),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter.required("label", flaxWidgetType),
        ],
      },
      _OutlinedButtonHost.new,
      matches: _isOutlinedButton,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:RefreshIndicator",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter(
            "displacement",
            flaxDoubleType,
            required: false,
            defaultValue: 40.0,
          ),
          FlaxParameter(
            "edgeOffset",
            flaxDoubleType,
            required: false,
            defaultValue: 0.0,
          ),
          FlaxParameter.required("onRefresh", _flaxBinding443),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter(
            "notificationPredicate",
            _flaxBinding29,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "semanticsLabel",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter(
            "semanticsValue",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter(
            "strokeWidth",
            flaxDoubleType,
            required: false,
            defaultValue: 2.5,
          ),
          FlaxParameter(
            "elevation",
            flaxDoubleType,
            required: false,
            defaultValue: 2.0,
          ),
          FlaxParameter.required("child", flaxWidgetType),
        ],
        "adaptive": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter(
            "displacement",
            flaxDoubleType,
            required: false,
            defaultValue: 40.0,
          ),
          FlaxParameter(
            "edgeOffset",
            flaxDoubleType,
            required: false,
            defaultValue: 0.0,
          ),
          FlaxParameter.required("onRefresh", _flaxBinding443),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter(
            "notificationPredicate",
            _flaxBinding29,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "semanticsLabel",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter(
            "semanticsValue",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter(
            "strokeWidth",
            flaxDoubleType,
            required: false,
            defaultValue: 2.5,
          ),
          FlaxParameter(
            "elevation",
            flaxDoubleType,
            required: false,
            defaultValue: 2.0,
          ),
          FlaxParameter.required("child", flaxWidgetType),
        ],
        "noSpinner": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("onRefresh", _flaxBinding443),
          FlaxParameter(
            "notificationPredicate",
            _flaxBinding29,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "semanticsLabel",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter(
            "semanticsValue",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter(
            "elevation",
            flaxDoubleType,
            required: false,
            defaultValue: 2.0,
          ),
          FlaxParameter.required("child", flaxWidgetType),
        ],
      },
      _RefreshIndicatorHost.new,
      matches: _isRefreshIndicator,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Scaffold",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("appBar", _flaxBinding23, required: false),
          FlaxParameter("body", _flaxBinding1, required: false),
          FlaxParameter("floatingActionButton", _flaxBinding1, required: false),
          FlaxParameter(
            "persistentFooterButtons",
            _flaxBinding6,
            required: false,
          ),
          FlaxParameter(
            "persistentFooterAlignment",
            _flaxBinding444,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "persistentFooterDecoration",
            _flaxBinding445,
            required: false,
          ),
          FlaxParameter("drawer", _flaxBinding1, required: false),
          FlaxParameter("onDrawerChanged", _flaxBinding447, required: false),
          FlaxParameter("endDrawer", _flaxBinding1, required: false),
          FlaxParameter("onEndDrawerChanged", _flaxBinding447, required: false),
          FlaxParameter("bottomNavigationBar", _flaxBinding1, required: false),
          FlaxParameter("bottomSheet", _flaxBinding1, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter(
            "resizeToAvoidBottomInset",
            flaxNullableBoolType,
            required: false,
          ),
          FlaxParameter(
            "primary",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "drawerDragStartBehavior",
            _flaxBinding448,
            required: false,
            defaultValue: api7.DragStartBehavior.start,
          ),
          FlaxParameter(
            "extendBody",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "drawerBarrierDismissible",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "extendBodyBehindAppBar",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("drawerScrimColor", _flaxBinding3, required: false),
          FlaxParameter(
            "bottomSheetScrimBuilder",
            _flaxBinding450,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "drawerEdgeDragWidth",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter(
            "drawerEnableOpenDragGesture",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "endDrawerEnableOpenDragGesture",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "restorationId",
            flaxNullableStringType,
            required: false,
          ),
        ],
      },
      _ScaffoldHost.new,
      matches: _isScaffold,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:Switch",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("value", flaxBoolType),
          FlaxParameter.required("onChanged", flaxBoolChangedNullableType),
          FlaxParameter("activeColor", _flaxBinding3, required: false),
          FlaxParameter("activeThumbColor", _flaxBinding3, required: false),
          FlaxParameter("activeTrackColor", _flaxBinding3, required: false),
          FlaxParameter("inactiveThumbColor", _flaxBinding3, required: false),
          FlaxParameter("inactiveTrackColor", _flaxBinding3, required: false),
          FlaxParameter("activeThumbImage", _flaxBinding451, required: false),
          FlaxParameter(
            "onActiveThumbImageError",
            _flaxBinding454,
            required: false,
          ),
          FlaxParameter("inactiveThumbImage", _flaxBinding451, required: false),
          FlaxParameter(
            "onInactiveThumbImageError",
            _flaxBinding454,
            required: false,
          ),
          FlaxParameter("thumbColor", _flaxBinding91, required: false),
          FlaxParameter("trackColor", _flaxBinding91, required: false),
          FlaxParameter("trackOutlineColor", _flaxBinding91, required: false),
          FlaxParameter("trackOutlineWidth", _flaxBinding99, required: false),
          FlaxParameter("thumbIcon", _flaxBinding458, required: false),
          FlaxParameter(
            "dragStartBehavior",
            _flaxBinding448,
            required: false,
            defaultValue: api7.DragStartBehavior.start,
          ),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("overlayColor", _flaxBinding91, required: false),
          FlaxParameter(
            "splashRadius",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
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
          FlaxParameter("padding", _flaxBinding2, required: false),
        ],
        "adaptive": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("value", flaxBoolType),
          FlaxParameter.required("onChanged", flaxBoolChangedNullableType),
          FlaxParameter("activeColor", _flaxBinding3, required: false),
          FlaxParameter("activeThumbColor", _flaxBinding3, required: false),
          FlaxParameter("activeTrackColor", _flaxBinding3, required: false),
          FlaxParameter("inactiveThumbColor", _flaxBinding3, required: false),
          FlaxParameter("inactiveTrackColor", _flaxBinding3, required: false),
          FlaxParameter("activeThumbImage", _flaxBinding451, required: false),
          FlaxParameter(
            "onActiveThumbImageError",
            _flaxBinding454,
            required: false,
          ),
          FlaxParameter("inactiveThumbImage", _flaxBinding451, required: false),
          FlaxParameter(
            "onInactiveThumbImageError",
            _flaxBinding454,
            required: false,
          ),
          FlaxParameter("thumbColor", _flaxBinding91, required: false),
          FlaxParameter("trackColor", _flaxBinding91, required: false),
          FlaxParameter("trackOutlineColor", _flaxBinding91, required: false),
          FlaxParameter("trackOutlineWidth", _flaxBinding99, required: false),
          FlaxParameter("thumbIcon", _flaxBinding458, required: false),
          FlaxParameter(
            "dragStartBehavior",
            _flaxBinding448,
            required: false,
            defaultValue: api7.DragStartBehavior.start,
          ),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("overlayColor", _flaxBinding91, required: false),
          FlaxParameter(
            "splashRadius",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
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
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter(
            "applyCupertinoTheme",
            flaxNullableBoolType,
            required: false,
          ),
        ],
      },
      _SwitchHost.new,
      matches: _isSwitch,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:TextButton",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("clipBehavior", _flaxBinding11, required: false),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter(
            "isSemanticButton",
            flaxNullableBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter.required("child", flaxWidgetType),
        ],
        "icon": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("onPressed", flaxVoidNullableCallbackType),
          FlaxParameter(
            "onLongPress",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onHover",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onFocusChange",
            flaxBoolChangedNullableType,
            required: false,
          ),
          FlaxParameter("style", _flaxBinding146, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding11,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter.required("label", flaxWidgetType),
        ],
      },
      _TextButtonHost.new,
      matches: _isTextButton,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:TextField",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter(
            "groupId",
            flaxAnyType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("controller", _flaxBinding459, required: false),
          FlaxParameter("focusNode", _flaxBinding151, required: false),
          FlaxParameter("undoController", _flaxBinding460, required: false),
          FlaxParameter(
            "decoration",
            _flaxBinding461,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("keyboardType", _flaxBinding462, required: false),
          FlaxParameter("textInputAction", _flaxBinding463, required: false),
          FlaxParameter(
            "textCapitalization",
            _flaxBinding464,
            required: false,
            defaultValue: api9.TextCapitalization.none,
          ),
          FlaxParameter("style", _flaxBinding4, required: false),
          FlaxParameter("strutStyle", _flaxBinding465, required: false),
          FlaxParameter(
            "textAlign",
            _flaxBinding466,
            required: false,
            defaultValue: api5.TextAlign.start,
          ),
          FlaxParameter("textAlignVertical", _flaxBinding467, required: false),
          FlaxParameter("textDirection", _flaxBinding242, required: false),
          FlaxParameter(
            "readOnly",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("toolbarOptions", _flaxBinding468, required: false),
          FlaxParameter("showCursor", flaxNullableBoolType, required: false),
          FlaxParameter(
            "autofocus",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("statesController", _flaxBinding221, required: false),
          FlaxParameter(
            "obscuringCharacter",
            flaxStringType,
            required: false,
            defaultValue: '•',
          ),
          FlaxParameter(
            "obscureText",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("autocorrect", flaxNullableBoolType, required: false),
          FlaxParameter("smartDashesType", _flaxBinding469, required: false),
          FlaxParameter("smartQuotesType", _flaxBinding470, required: false),
          FlaxParameter(
            "enableSuggestions",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "maxLines",
            flaxNullableIntType,
            required: false,
            defaultValue: 1,
          ),
          FlaxParameter("minLines", flaxNullableIntType, required: false),
          FlaxParameter(
            "expands",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("maxLength", flaxNullableIntType, required: false),
          FlaxParameter(
            "maxLengthEnforcement",
            _flaxBinding471,
            required: false,
          ),
          FlaxParameter(
            "onChanged",
            flaxStringChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onEditingComplete",
            flaxVoidNullableCallbackType,
            required: false,
          ),
          FlaxParameter(
            "onSubmitted",
            flaxStringChangedNullableType,
            required: false,
          ),
          FlaxParameter(
            "onAppPrivateCommand",
            _flaxBinding474,
            required: false,
          ),
          FlaxParameter("inputFormatters", _flaxBinding477, required: false),
          FlaxParameter("enabled", flaxNullableBoolType, required: false),
          FlaxParameter(
            "ignorePointers",
            flaxNullableBoolType,
            required: false,
          ),
          FlaxParameter(
            "cursorWidth",
            flaxDoubleType,
            required: false,
            defaultValue: 2.0,
          ),
          FlaxParameter(
            "cursorHeight",
            flaxNullableDoubleType,
            required: false,
          ),
          FlaxParameter("cursorRadius", _flaxBinding478, required: false),
          FlaxParameter(
            "cursorOpacityAnimates",
            flaxNullableBoolType,
            required: false,
          ),
          FlaxParameter("cursorColor", _flaxBinding3, required: false),
          FlaxParameter("cursorErrorColor", _flaxBinding3, required: false),
          FlaxParameter(
            "selectionHeightStyle",
            _flaxBinding479,
            required: false,
          ),
          FlaxParameter(
            "selectionWidthStyle",
            _flaxBinding480,
            required: false,
          ),
          FlaxParameter("keyboardAppearance", _flaxBinding210, required: false),
          FlaxParameter(
            "scrollPadding",
            flaxEdgeInsetsType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "dragStartBehavior",
            _flaxBinding448,
            required: false,
            defaultValue: api7.DragStartBehavior.start,
          ),
          FlaxParameter(
            "enableInteractiveSelection",
            flaxNullableBoolType,
            required: false,
          ),
          FlaxParameter(
            "selectAllOnFocus",
            flaxNullableBoolType,
            required: false,
          ),
          FlaxParameter("selectionControls", _flaxBinding481, required: false),
          FlaxParameter("onTap", flaxVoidNullableCallbackType, required: false),
          FlaxParameter(
            "onTapAlwaysCalled",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("onTapOutside", _flaxBinding484, required: false),
          FlaxParameter("onTapUpOutside", _flaxBinding487, required: false),
          FlaxParameter("mouseCursor", _flaxBinding123, required: false),
          FlaxParameter("buildCounter", _flaxBinding489, required: false),
          FlaxParameter("scrollController", _flaxBinding15, required: false),
          FlaxParameter("scrollPhysics", _flaxBinding490, required: false),
          FlaxParameter(
            "autofillHints",
            _flaxBinding491,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "contentInsertionConfiguration",
            _flaxBinding492,
            required: false,
          ),
          FlaxParameter(
            "clipBehavior",
            flaxClipType,
            required: false,
            defaultValue: api5.Clip.hardEdge,
          ),
          FlaxParameter(
            "restorationId",
            flaxNullableStringType,
            required: false,
          ),
          FlaxParameter(
            "scribbleEnabled",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "stylusHandwritingEnabled",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "enableIMEPersonalizedLearning",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "enableInlinePrediction",
            flaxNullableBoolType,
            required: false,
          ),
          FlaxParameter(
            "contextMenuBuilder",
            _flaxBinding495,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "canRequestFocus",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "spellCheckConfiguration",
            _flaxBinding496,
            required: false,
          ),
          FlaxParameter(
            "magnifierConfiguration",
            _flaxBinding497,
            required: false,
          ),
          FlaxParameter("hintLocales", _flaxBinding322, required: false),
        ],
      },
      _TextFieldHost.new,
      matches: _isTextField,
      methods: {},
    ),
    _flaxBinding530,
    FlaxWidgetBinding(
      "flax.material/material#type:Theme",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter.required("data", _flaxBinding531),
          FlaxParameter.required("child", flaxWidgetType),
        ],
      },
      _ThemeHost.new,
      matches: _isTheme,
      methods: {},
    ),
    _flaxBinding576,
    FlaxWidgetBinding(
      "flax.material/material#type:VerticalDivider",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("width", flaxNullableDoubleType, required: false),
          FlaxParameter("thickness", flaxNullableDoubleType, required: false),
          FlaxParameter("indent", flaxNullableDoubleType, required: false),
          FlaxParameter("endIndent", flaxNullableDoubleType, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("radius", _flaxBinding220, required: false),
        ],
      },
      _VerticalDividerHost.new,
      matches: _isVerticalDivider,
      methods: {},
    ),
    _flaxBinding590,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.material/material#read:kTabScrollDuration",
      [],
      flaxDurationType,
      _read_kTabScrollDuration,
    ),
    FlaxFunctionBinding(
      "flax.material/material#read:kToolbarHeight",
      [],
      flaxDoubleType,
      _read_kToolbarHeight,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:showDialog",
      [
        FlaxParameter("anchorPoint", _flaxBinding591, required: false),
        FlaxParameter("animationStyle", _flaxBinding333, required: false),
        FlaxParameter("barrierColor", _flaxBinding3, required: false),
        FlaxParameter(
          "barrierDismissible",
          flaxBoolType,
          required: false,
          defaultValue: true,
        ),
        FlaxParameter("barrierLabel", flaxNullableStringType, required: false),
        FlaxParameter.required("builder", _flaxBinding294),
        FlaxParameter.required("context", _flaxBinding134),
        FlaxParameter(
          "fullscreenDialog",
          flaxBoolType,
          required: false,
          defaultValue: false,
        ),
        FlaxParameter("requestFocus", flaxNullableBoolType, required: false),
        FlaxParameter("routeSettings", _flaxBinding434, required: false),
        FlaxParameter(
          "traversalEdgeBehavior",
          _flaxBinding357,
          required: false,
        ),
        FlaxParameter(
          "useRootNavigator",
          flaxBoolType,
          required: false,
          defaultValue: true,
        ),
        FlaxParameter(
          "useSafeArea",
          flaxBoolType,
          required: false,
          defaultValue: true,
        ),
      ],
      _flaxBinding592,
      _function_showDialog,
      route: FlaxRouteCallBinding(["builder"]),
      genericFactory: _flaxGenericFunction0,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:AppBar.preferredHeightFor",
      [
        FlaxParameter.required("context", _flaxBinding134),
        FlaxParameter.required("preferredSize", flaxSizeType),
      ],
      flaxDoubleType,
      _AppBar_preferredHeightFor,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ButtonStyle.lerp",
      [
        FlaxParameter.required("a", _flaxBinding146),
        FlaxParameter.required("b", _flaxBinding146),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding146,
      _ButtonStyle_lerp,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ColorScheme.lerp",
      [
        FlaxParameter.required("a", _flaxBinding212),
        FlaxParameter.required("b", _flaxBinding212),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding212,
      _ColorScheme_lerp,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ColorScheme.fromImageProvider",
      [
        FlaxParameter("background", _flaxBinding3, required: false),
        FlaxParameter(
          "brightness",
          _flaxBinding155,
          required: false,
          defaultValue: api.Brightness.light,
        ),
        FlaxParameter(
          "contrastLevel",
          flaxDoubleType,
          required: false,
          defaultValue: 0.0,
        ),
        FlaxParameter("error", _flaxBinding3, required: false),
        FlaxParameter("errorContainer", _flaxBinding3, required: false),
        FlaxParameter("inversePrimary", _flaxBinding3, required: false),
        FlaxParameter("inverseSurface", _flaxBinding3, required: false),
        FlaxParameter("onBackground", _flaxBinding3, required: false),
        FlaxParameter("onError", _flaxBinding3, required: false),
        FlaxParameter("onErrorContainer", _flaxBinding3, required: false),
        FlaxParameter("onInverseSurface", _flaxBinding3, required: false),
        FlaxParameter("onPrimary", _flaxBinding3, required: false),
        FlaxParameter("onPrimaryContainer", _flaxBinding3, required: false),
        FlaxParameter("onPrimaryFixed", _flaxBinding3, required: false),
        FlaxParameter("onPrimaryFixedVariant", _flaxBinding3, required: false),
        FlaxParameter("onSecondary", _flaxBinding3, required: false),
        FlaxParameter("onSecondaryContainer", _flaxBinding3, required: false),
        FlaxParameter("onSecondaryFixed", _flaxBinding3, required: false),
        FlaxParameter(
          "onSecondaryFixedVariant",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter("onSurface", _flaxBinding3, required: false),
        FlaxParameter("onSurfaceVariant", _flaxBinding3, required: false),
        FlaxParameter("onTertiary", _flaxBinding3, required: false),
        FlaxParameter("onTertiaryContainer", _flaxBinding3, required: false),
        FlaxParameter("onTertiaryFixed", _flaxBinding3, required: false),
        FlaxParameter("onTertiaryFixedVariant", _flaxBinding3, required: false),
        FlaxParameter("outline", _flaxBinding3, required: false),
        FlaxParameter("outlineVariant", _flaxBinding3, required: false),
        FlaxParameter("primary", _flaxBinding3, required: false),
        FlaxParameter("primaryContainer", _flaxBinding3, required: false),
        FlaxParameter("primaryFixed", _flaxBinding3, required: false),
        FlaxParameter("primaryFixedDim", _flaxBinding3, required: false),
        FlaxParameter.required("provider", _flaxBinding593),
        FlaxParameter("scrim", _flaxBinding3, required: false),
        FlaxParameter("secondary", _flaxBinding3, required: false),
        FlaxParameter("secondaryContainer", _flaxBinding3, required: false),
        FlaxParameter("secondaryFixed", _flaxBinding3, required: false),
        FlaxParameter("secondaryFixedDim", _flaxBinding3, required: false),
        FlaxParameter("shadow", _flaxBinding3, required: false),
        FlaxParameter("surface", _flaxBinding3, required: false),
        FlaxParameter("surfaceBright", _flaxBinding3, required: false),
        FlaxParameter("surfaceContainer", _flaxBinding3, required: false),
        FlaxParameter("surfaceContainerHigh", _flaxBinding3, required: false),
        FlaxParameter(
          "surfaceContainerHighest",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter("surfaceContainerLow", _flaxBinding3, required: false),
        FlaxParameter("surfaceContainerLowest", _flaxBinding3, required: false),
        FlaxParameter("surfaceDim", _flaxBinding3, required: false),
        FlaxParameter("surfaceTint", _flaxBinding3, required: false),
        FlaxParameter("surfaceVariant", _flaxBinding3, required: false),
        FlaxParameter("tertiary", _flaxBinding3, required: false),
        FlaxParameter("tertiaryContainer", _flaxBinding3, required: false),
        FlaxParameter("tertiaryFixed", _flaxBinding3, required: false),
        FlaxParameter("tertiaryFixedDim", _flaxBinding3, required: false),
      ],
      _flaxBinding594,
      _ColorScheme_fromImageProvider,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ColorScheme.of",
      [FlaxParameter.required("context", _flaxBinding134)],
      _flaxBinding212,
      _ColorScheme_of,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:Divider.createBorderSide",
      [
        FlaxParameter.required("context", _flaxBinding374),
        FlaxParameter("color", _flaxBinding3, required: false),
        FlaxParameter("width", flaxNullableDoubleType, required: false),
      ],
      flaxBorderSideType,
      _Divider_createBorderSide,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ElevatedButton.styleFrom",
      [
        FlaxParameter("alignment", _flaxBinding13, required: false),
        FlaxParameter("animationDuration", _flaxBinding130, required: false),
        FlaxParameter("backgroundBuilder", _flaxBinding136, required: false),
        FlaxParameter("backgroundColor", _flaxBinding3, required: false),
        FlaxParameter(
          "disabledBackgroundColor",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter(
          "disabledForegroundColor",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter("disabledIconColor", _flaxBinding3, required: false),
        FlaxParameter("disabledMouseCursor", _flaxBinding123, required: false),
        FlaxParameter("elevation", flaxNullableDoubleType, required: false),
        FlaxParameter("enableFeedback", flaxNullableBoolType, required: false),
        FlaxParameter("enabledMouseCursor", _flaxBinding123, required: false),
        FlaxParameter("fixedSize", flaxNullableSizeType, required: false),
        FlaxParameter("foregroundBuilder", _flaxBinding136, required: false),
        FlaxParameter("foregroundColor", _flaxBinding3, required: false),
        FlaxParameter("iconColor", _flaxBinding3, required: false),
        FlaxParameter("iconSize", flaxNullableDoubleType, required: false),
        FlaxParameter("maximumSize", flaxNullableSizeType, required: false),
        FlaxParameter("minimumSize", flaxNullableSizeType, required: false),
        FlaxParameter("overlayColor", _flaxBinding3, required: false),
        FlaxParameter("padding", _flaxBinding2, required: false),
        FlaxParameter("shadowColor", _flaxBinding3, required: false),
        FlaxParameter("shape", _flaxBinding118, required: false),
        FlaxParameter("side", _flaxBinding113, required: false),
        FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
        FlaxParameter("textStyle", _flaxBinding4, required: false),
        FlaxParameter("visualDensity", _flaxBinding128, required: false),
      ],
      _flaxBinding144,
      _ElevatedButton_styleFrom,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:FilledButton.styleFrom",
      [
        FlaxParameter("alignment", _flaxBinding13, required: false),
        FlaxParameter("animationDuration", _flaxBinding130, required: false),
        FlaxParameter("backgroundBuilder", _flaxBinding136, required: false),
        FlaxParameter("backgroundColor", _flaxBinding3, required: false),
        FlaxParameter(
          "disabledBackgroundColor",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter(
          "disabledForegroundColor",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter("disabledIconColor", _flaxBinding3, required: false),
        FlaxParameter("disabledMouseCursor", _flaxBinding123, required: false),
        FlaxParameter("elevation", flaxNullableDoubleType, required: false),
        FlaxParameter("enableFeedback", flaxNullableBoolType, required: false),
        FlaxParameter("enabledMouseCursor", _flaxBinding123, required: false),
        FlaxParameter("fixedSize", flaxNullableSizeType, required: false),
        FlaxParameter("foregroundBuilder", _flaxBinding136, required: false),
        FlaxParameter("foregroundColor", _flaxBinding3, required: false),
        FlaxParameter("iconColor", _flaxBinding3, required: false),
        FlaxParameter("iconSize", flaxNullableDoubleType, required: false),
        FlaxParameter("maximumSize", flaxNullableSizeType, required: false),
        FlaxParameter("minimumSize", flaxNullableSizeType, required: false),
        FlaxParameter("overlayColor", _flaxBinding3, required: false),
        FlaxParameter("padding", _flaxBinding2, required: false),
        FlaxParameter("shadowColor", _flaxBinding3, required: false),
        FlaxParameter("shape", _flaxBinding118, required: false),
        FlaxParameter("side", _flaxBinding113, required: false),
        FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
        FlaxParameter("textStyle", _flaxBinding4, required: false),
        FlaxParameter("visualDensity", _flaxBinding128, required: false),
      ],
      _flaxBinding144,
      _FilledButton_styleFrom,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:IconButton.styleFrom",
      [
        FlaxParameter("alignment", _flaxBinding13, required: false),
        FlaxParameter("animationDuration", _flaxBinding130, required: false),
        FlaxParameter("backgroundColor", _flaxBinding3, required: false),
        FlaxParameter(
          "disabledBackgroundColor",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter(
          "disabledForegroundColor",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter("disabledMouseCursor", _flaxBinding123, required: false),
        FlaxParameter("elevation", flaxNullableDoubleType, required: false),
        FlaxParameter("enableFeedback", flaxNullableBoolType, required: false),
        FlaxParameter("enabledMouseCursor", _flaxBinding123, required: false),
        FlaxParameter("fixedSize", flaxNullableSizeType, required: false),
        FlaxParameter("focusColor", _flaxBinding3, required: false),
        FlaxParameter("foregroundColor", _flaxBinding3, required: false),
        FlaxParameter("highlightColor", _flaxBinding3, required: false),
        FlaxParameter("hoverColor", _flaxBinding3, required: false),
        FlaxParameter("iconSize", flaxNullableDoubleType, required: false),
        FlaxParameter("maximumSize", flaxNullableSizeType, required: false),
        FlaxParameter("minimumSize", flaxNullableSizeType, required: false),
        FlaxParameter("overlayColor", _flaxBinding3, required: false),
        FlaxParameter("padding", _flaxBinding2, required: false),
        FlaxParameter("shadowColor", _flaxBinding3, required: false),
        FlaxParameter("shape", _flaxBinding118, required: false),
        FlaxParameter("side", _flaxBinding113, required: false),
        FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
        FlaxParameter("visualDensity", _flaxBinding128, required: false),
      ],
      _flaxBinding144,
      _IconButton_styleFrom,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ListTile.divideTiles",
      [
        FlaxParameter("color", _flaxBinding3, required: false),
        FlaxParameter("context", _flaxBinding374, required: false),
        FlaxParameter.required("tiles", _flaxBinding5),
      ],
      _flaxBinding5,
      _ListTile_divideTiles,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:MaterialApp.createMaterialHeroController",
      [],
      _flaxBinding595,
      _MaterialApp_createMaterialHeroController,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:OutlinedButton.styleFrom",
      [
        FlaxParameter("alignment", _flaxBinding13, required: false),
        FlaxParameter("animationDuration", _flaxBinding130, required: false),
        FlaxParameter("backgroundBuilder", _flaxBinding136, required: false),
        FlaxParameter("backgroundColor", _flaxBinding3, required: false),
        FlaxParameter(
          "disabledBackgroundColor",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter(
          "disabledForegroundColor",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter("disabledIconColor", _flaxBinding3, required: false),
        FlaxParameter("disabledMouseCursor", _flaxBinding123, required: false),
        FlaxParameter("elevation", flaxNullableDoubleType, required: false),
        FlaxParameter("enableFeedback", flaxNullableBoolType, required: false),
        FlaxParameter("enabledMouseCursor", _flaxBinding123, required: false),
        FlaxParameter("fixedSize", flaxNullableSizeType, required: false),
        FlaxParameter("foregroundBuilder", _flaxBinding136, required: false),
        FlaxParameter("foregroundColor", _flaxBinding3, required: false),
        FlaxParameter("iconColor", _flaxBinding3, required: false),
        FlaxParameter("iconSize", flaxNullableDoubleType, required: false),
        FlaxParameter("maximumSize", flaxNullableSizeType, required: false),
        FlaxParameter("minimumSize", flaxNullableSizeType, required: false),
        FlaxParameter("overlayColor", _flaxBinding3, required: false),
        FlaxParameter("padding", _flaxBinding2, required: false),
        FlaxParameter("shadowColor", _flaxBinding3, required: false),
        FlaxParameter("shape", _flaxBinding118, required: false),
        FlaxParameter("side", _flaxBinding113, required: false),
        FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
        FlaxParameter("textStyle", _flaxBinding4, required: false),
        FlaxParameter("visualDensity", _flaxBinding128, required: false),
      ],
      _flaxBinding144,
      _OutlinedButton_styleFrom,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:Scaffold.hasDrawer",
      [
        FlaxParameter.required("context", _flaxBinding134),
        FlaxParameter(
          "registerForUpdates",
          flaxBoolType,
          required: false,
          defaultValue: true,
        ),
      ],
      flaxBoolType,
      _Scaffold_hasDrawer,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:TextButton.styleFrom",
      [
        FlaxParameter("alignment", _flaxBinding13, required: false),
        FlaxParameter("animationDuration", _flaxBinding130, required: false),
        FlaxParameter("backgroundBuilder", _flaxBinding136, required: false),
        FlaxParameter("backgroundColor", _flaxBinding3, required: false),
        FlaxParameter(
          "disabledBackgroundColor",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter(
          "disabledForegroundColor",
          _flaxBinding3,
          required: false,
        ),
        FlaxParameter("disabledIconColor", _flaxBinding3, required: false),
        FlaxParameter("disabledMouseCursor", _flaxBinding123, required: false),
        FlaxParameter("elevation", flaxNullableDoubleType, required: false),
        FlaxParameter("enableFeedback", flaxNullableBoolType, required: false),
        FlaxParameter("enabledMouseCursor", _flaxBinding123, required: false),
        FlaxParameter("fixedSize", flaxNullableSizeType, required: false),
        FlaxParameter("foregroundBuilder", _flaxBinding136, required: false),
        FlaxParameter("foregroundColor", _flaxBinding3, required: false),
        FlaxParameter("iconColor", _flaxBinding3, required: false),
        FlaxParameter("iconSize", flaxNullableDoubleType, required: false),
        FlaxParameter("maximumSize", flaxNullableSizeType, required: false),
        FlaxParameter("minimumSize", flaxNullableSizeType, required: false),
        FlaxParameter("overlayColor", _flaxBinding3, required: false),
        FlaxParameter("padding", _flaxBinding2, required: false),
        FlaxParameter("shadowColor", _flaxBinding3, required: false),
        FlaxParameter("shape", _flaxBinding118, required: false),
        FlaxParameter("side", _flaxBinding113, required: false),
        FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
        FlaxParameter("textStyle", _flaxBinding4, required: false),
        FlaxParameter("visualDensity", _flaxBinding128, required: false),
      ],
      _flaxBinding144,
      _TextButton_styleFrom,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:TextField.inferAndroidSpellCheckConfiguration",
      [FlaxParameter.required("configuration", _flaxBinding496)],
      _flaxBinding596,
      _TextField_inferAndroidSpellCheckConfiguration,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:TextTheme.lerp",
      [
        FlaxParameter.required("a", _flaxBinding520),
        FlaxParameter.required("b", _flaxBinding520),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding518,
      _TextTheme_lerp,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:TextTheme.of",
      [FlaxParameter.required("context", _flaxBinding134)],
      _flaxBinding518,
      _TextTheme_of,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:TextTheme.primaryOf",
      [FlaxParameter.required("context", _flaxBinding134)],
      _flaxBinding518,
      _TextTheme_primaryOf,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:Theme.of",
      [FlaxParameter.required("context", _flaxBinding134)],
      _flaxBinding531,
      _Theme_of,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:Theme.brightnessOf",
      [FlaxParameter.required("context", _flaxBinding134)],
      _flaxBinding155,
      _Theme_brightnessOf,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:Theme.maybeBrightnessOf",
      [FlaxParameter.required("context", _flaxBinding134)],
      _flaxBinding210,
      _Theme_maybeBrightnessOf,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ThemeData.localize",
      [
        FlaxParameter.required("baseTheme", _flaxBinding531),
        FlaxParameter.required("localTextGeometry", _flaxBinding518),
      ],
      _flaxBinding531,
      _ThemeData_localize,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ThemeData.estimateBrightnessForColor",
      [FlaxParameter.required("color", flaxColorType)],
      _flaxBinding155,
      _ThemeData_estimateBrightnessForColor,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ThemeData.lerp",
      [
        FlaxParameter.required("a", _flaxBinding531),
        FlaxParameter.required("b", _flaxBinding531),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding531,
      _ThemeData_lerp,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:VisualDensity.defaultDensityForPlatform",
      [FlaxParameter.required("platform", _flaxBinding536)],
      _flaxBinding539,
      _VisualDensity_defaultDensityForPlatform,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:VisualDensity.lerp",
      [
        FlaxParameter.required("a", _flaxBinding539),
        FlaxParameter.required("b", _flaxBinding539),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding539,
      _VisualDensity_lerp,
    ),
    FlaxFunctionBinding(
      "flax.material/material#read:VisualDensity.adaptivePlatformDensity",
      [],
      _flaxBinding539,
      _VisualDensity_static_get_adaptivePlatformDensity,
    ),
  ],
  constants: [
    FlaxConstantGroup(flaxDoubleType, {
      "flax.material/material#read:Checkbox.width": api.Checkbox.width,
      "flax.material/material#read:CircularProgressIndicator.strokeAlignInside":
          api.CircularProgressIndicator.strokeAlignInside,
      "flax.material/material#read:CircularProgressIndicator.strokeAlignCenter":
          api.CircularProgressIndicator.strokeAlignCenter,
      "flax.material/material#read:CircularProgressIndicator.strokeAlignOutside":
          api.CircularProgressIndicator.strokeAlignOutside,
      "flax.material/material#read:Material.defaultSplashRadius":
          api.Material.defaultSplashRadius,
      "flax.material/material#read:VisualDensity.minimumDensity":
          api.VisualDensity.minimumDensity,
      "flax.material/material#read:VisualDensity.maximumDensity":
          api.VisualDensity.maximumDensity,
    }),
    FlaxConstantGroup(flaxDurationType, {
      "flax.material/material#read:CircularProgressIndicator.defaultAnimationDuration":
          api.CircularProgressIndicator.defaultAnimationDuration,
      "flax.material/material#read:LinearProgressIndicator.defaultAnimationDuration":
          api.LinearProgressIndicator.defaultAnimationDuration,
    }),
    FlaxConstantGroup(flaxIntType, {
      "flax.material/material#read:TextField.noMaxLength":
          api.TextField.noMaxLength,
    }),
    FlaxConstantGroup(_flaxBinding597, {
      "flax.material/material#read:TextField.materialMisspelledTextStyle":
          api.TextField.materialMisspelledTextStyle,
    }),
    FlaxConstantGroup(_flaxBinding539, {
      "flax.material/material#read:VisualDensity.standard":
          api.VisualDensity.standard,
      "flax.material/material#read:VisualDensity.comfortable":
          api.VisualDensity.comfortable,
      "flax.material/material#read:VisualDensity.compact":
          api.VisualDensity.compact,
    }),
  ],
  moduleId: "flax.material/material",
  dependencyModules: [
    "flax.core/components",
    "flax.core/flutter",
    "flax.core/sdk_animation",
    "flax.core/sdk_dart_ui",
    "flax.core/sdk_foundation",
    "flax.core/sdk_gestures",
    "flax.core/sdk_painting",
    "flax.core/sdk_physics",
    "flax.core/sdk_scheduler",
    "flax.core/sdk_semantics",
    "flax.core/sdk_services",
    "flax.core/sdk_widgets",
    "flax.cupertino/cupertino",
  ],
  dependencies: [_flaxBindings0.cupertinoBindings],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "dart-type-tokens",
    "engine-type-handles",
    "generic-call-types",
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "lazy-js-iterables",
    "native-navigation-objects",
    "native-widget-proxies",
    "shared-static-readers",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.material/material#type:AlertDialog",
      api.AlertDialog,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:AppBar",
      api.AppBar,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:ButtonStyle",
      api.ButtonStyle,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:Card",
      api.Card,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:Checkbox",
      api.Checkbox,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:CircularProgressIndicator",
      api.CircularProgressIndicator,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:ColorScheme",
      api.ColorScheme,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:Divider",
      api.Divider,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:Drawer",
      api.Drawer,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:ElevatedButton",
      api.ElevatedButton,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:FilledButton",
      api.FilledButton,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:FloatingActionButton",
      api.FloatingActionButton,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:IconButton",
      api.IconButton,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:InkWell",
      api.InkWell,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:InputDecoration",
      api.InputDecoration,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:LinearProgressIndicator",
      api.LinearProgressIndicator,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:ListTile",
      api.ListTile,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:Material",
      api.Material,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:MaterialApp",
      api.MaterialApp,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:MaterialPage",
      api.MaterialPage<Object?>,
      "object",
      typeFactory: _flaxType_MaterialPage,
      factory: _flaxClass_MaterialPage,
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:MaterialPageRoute",
      api.MaterialPageRoute<Object?>,
      "object",
      typeFactory: _flaxType_MaterialPageRoute,
      factory: _flaxClass_MaterialPageRoute,
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:NavigationBar",
      api.NavigationBar,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:NavigationDestination",
      api.NavigationDestination,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:OutlinedButton",
      api.OutlinedButton,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:RefreshIndicator",
      api.RefreshIndicator,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:Scaffold",
      api.Scaffold,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:Switch",
      api.Switch,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:TextButton",
      api.TextButton,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:TextField",
      api.TextField,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:TextTheme",
      api.TextTheme,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:Theme",
      api.Theme,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:ThemeData",
      api.ThemeData,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:VerticalDivider",
      api.VerticalDivider,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:VisualDensity",
      api.VisualDensity,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:ListTileStyle",
      api.ListTileStyle,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:MaterialType",
      api.MaterialType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:NavigationDestinationLabelBehavior",
      api.NavigationDestinationLabelBehavior,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.material/material#type:ThemeMode",
      api.ThemeMode,
      "enum",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
Object? _function_showDialog(Map<String, Object?> values) {
  return api.showDialog<Object?>(
    anchorPoint: values["anchorPoint"] as api5.Offset?,
    animationStyle: values["animationStyle"] as api3.AnimationStyle?,
    barrierColor: values["barrierColor"] as api5.Color?,
    barrierDismissible: values["barrierDismissible"] as bool,
    barrierLabel: values["barrierLabel"] as String?,
    builder:
        values["builder"] as api1.Widget Function(api1.BuildContext context),
    context: values["context"] as api1.BuildContext,
    fullscreenDialog: values["fullscreenDialog"] as bool,
    requestFocus: values["requestFocus"] as bool?,
    routeSettings: values["routeSettings"] as api1.RouteSettings?,
    traversalEdgeBehavior:
        values["traversalEdgeBehavior"] as api1.TraversalEdgeBehavior?,
    useRootNavigator: values["useRootNavigator"] as bool,
    useSafeArea: values["useSafeArea"] as bool,
  );
}

Object? _read_kTabScrollDuration(Map<String, Object?> values) =>
    api.kTabScrollDuration;
Object? _read_kToolbarHeight(Map<String, Object?> values) => api.kToolbarHeight;
bool _isAlertDialog(Object value) => value is api.AlertDialog;

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
        key: values["key"] as api6.Key?,
        icon: values["icon"] as api1.Widget?,
        iconPadding: values["iconPadding"] as api2.EdgeInsetsGeometry?,
        iconColor: values["iconColor"] as api5.Color?,
        title: values["title"] as api1.Widget?,
        titlePadding: values["titlePadding"] as api2.EdgeInsetsGeometry?,
        titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
        content: values["content"] as api1.Widget?,
        contentPadding: values["contentPadding"] as api2.EdgeInsetsGeometry?,
        contentTextStyle: values["contentTextStyle"] as api2.TextStyle?,
        actions: values["actions"] as List<api1.Widget>?,
        actionsPadding: values["actionsPadding"] as api2.EdgeInsetsGeometry?,
        actionsAlignment: values["actionsAlignment"] as api4.MainAxisAlignment?,
        actionsOverflowAlignment:
            values["actionsOverflowAlignment"] as api1.OverflowBarAlignment?,
        actionsOverflowDirection:
            values["actionsOverflowDirection"] as api2.VerticalDirection?,
        actionsOverflowButtonSpacing:
            values["actionsOverflowButtonSpacing"] as double?,
        buttonPadding: values["buttonPadding"] as api2.EdgeInsetsGeometry?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        elevation: values["elevation"] as double?,
        shadowColor: values["shadowColor"] as api5.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
        semanticLabel: values["semanticLabel"] as String?,
        insetPadding: values["insetPadding"] as api2.EdgeInsets?,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        shape: values["shape"] as api2.ShapeBorder?,
        alignment: values["alignment"] as api2.AlignmentGeometry?,
        constraints: values["constraints"] as api4.BoxConstraints?,
        scrollable: values["scrollable"] as bool,
      );
    case "adaptive":
      if (!values.containsKey("insetPadding")) {
        if (!values.containsKey("insetAnimationDuration")) {
          if (!values.containsKey("insetAnimationCurve")) {
            return api.AlertDialog.adaptive(
              key: values["key"] as api6.Key?,
              icon: values["icon"] as api1.Widget?,
              iconPadding: values["iconPadding"] as api2.EdgeInsetsGeometry?,
              iconColor: values["iconColor"] as api5.Color?,
              title: values["title"] as api1.Widget?,
              titlePadding: values["titlePadding"] as api2.EdgeInsetsGeometry?,
              titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
              content: values["content"] as api1.Widget?,
              contentPadding:
                  values["contentPadding"] as api2.EdgeInsetsGeometry?,
              contentTextStyle: values["contentTextStyle"] as api2.TextStyle?,
              actions: values["actions"] as List<api1.Widget>?,
              actionsPadding:
                  values["actionsPadding"] as api2.EdgeInsetsGeometry?,
              actionsAlignment:
                  values["actionsAlignment"] as api4.MainAxisAlignment?,
              actionsOverflowAlignment:
                  values["actionsOverflowAlignment"]
                      as api1.OverflowBarAlignment?,
              actionsOverflowDirection:
                  values["actionsOverflowDirection"] as api2.VerticalDirection?,
              actionsOverflowButtonSpacing:
                  values["actionsOverflowButtonSpacing"] as double?,
              buttonPadding:
                  values["buttonPadding"] as api2.EdgeInsetsGeometry?,
              backgroundColor: values["backgroundColor"] as api5.Color?,
              elevation: values["elevation"] as double?,
              shadowColor: values["shadowColor"] as api5.Color?,
              surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
              semanticLabel: values["semanticLabel"] as String?,
              clipBehavior: values["clipBehavior"] as api5.Clip?,
              shape: values["shape"] as api2.ShapeBorder?,
              alignment: values["alignment"] as api2.AlignmentGeometry?,
              constraints: values["constraints"] as api4.BoxConstraints?,
              scrollable: values["scrollable"] as bool,
              scrollController:
                  values["scrollController"] as api1.ScrollController?,
              actionScrollController:
                  values["actionScrollController"] as api1.ScrollController?,
            );
          }
          return api.AlertDialog.adaptive(
            key: values["key"] as api6.Key?,
            icon: values["icon"] as api1.Widget?,
            iconPadding: values["iconPadding"] as api2.EdgeInsetsGeometry?,
            iconColor: values["iconColor"] as api5.Color?,
            title: values["title"] as api1.Widget?,
            titlePadding: values["titlePadding"] as api2.EdgeInsetsGeometry?,
            titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
            content: values["content"] as api1.Widget?,
            contentPadding:
                values["contentPadding"] as api2.EdgeInsetsGeometry?,
            contentTextStyle: values["contentTextStyle"] as api2.TextStyle?,
            actions: values["actions"] as List<api1.Widget>?,
            actionsPadding:
                values["actionsPadding"] as api2.EdgeInsetsGeometry?,
            actionsAlignment:
                values["actionsAlignment"] as api4.MainAxisAlignment?,
            actionsOverflowAlignment:
                values["actionsOverflowAlignment"]
                    as api1.OverflowBarAlignment?,
            actionsOverflowDirection:
                values["actionsOverflowDirection"] as api2.VerticalDirection?,
            actionsOverflowButtonSpacing:
                values["actionsOverflowButtonSpacing"] as double?,
            buttonPadding: values["buttonPadding"] as api2.EdgeInsetsGeometry?,
            backgroundColor: values["backgroundColor"] as api5.Color?,
            elevation: values["elevation"] as double?,
            shadowColor: values["shadowColor"] as api5.Color?,
            surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
            semanticLabel: values["semanticLabel"] as String?,
            clipBehavior: values["clipBehavior"] as api5.Clip?,
            shape: values["shape"] as api2.ShapeBorder?,
            alignment: values["alignment"] as api2.AlignmentGeometry?,
            constraints: values["constraints"] as api4.BoxConstraints?,
            scrollable: values["scrollable"] as bool,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            actionScrollController:
                values["actionScrollController"] as api1.ScrollController?,
            insetAnimationCurve: values["insetAnimationCurve"] as api3.Curve,
          );
        }
        if (!values.containsKey("insetAnimationCurve")) {
          return api.AlertDialog.adaptive(
            key: values["key"] as api6.Key?,
            icon: values["icon"] as api1.Widget?,
            iconPadding: values["iconPadding"] as api2.EdgeInsetsGeometry?,
            iconColor: values["iconColor"] as api5.Color?,
            title: values["title"] as api1.Widget?,
            titlePadding: values["titlePadding"] as api2.EdgeInsetsGeometry?,
            titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
            content: values["content"] as api1.Widget?,
            contentPadding:
                values["contentPadding"] as api2.EdgeInsetsGeometry?,
            contentTextStyle: values["contentTextStyle"] as api2.TextStyle?,
            actions: values["actions"] as List<api1.Widget>?,
            actionsPadding:
                values["actionsPadding"] as api2.EdgeInsetsGeometry?,
            actionsAlignment:
                values["actionsAlignment"] as api4.MainAxisAlignment?,
            actionsOverflowAlignment:
                values["actionsOverflowAlignment"]
                    as api1.OverflowBarAlignment?,
            actionsOverflowDirection:
                values["actionsOverflowDirection"] as api2.VerticalDirection?,
            actionsOverflowButtonSpacing:
                values["actionsOverflowButtonSpacing"] as double?,
            buttonPadding: values["buttonPadding"] as api2.EdgeInsetsGeometry?,
            backgroundColor: values["backgroundColor"] as api5.Color?,
            elevation: values["elevation"] as double?,
            shadowColor: values["shadowColor"] as api5.Color?,
            surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
            semanticLabel: values["semanticLabel"] as String?,
            clipBehavior: values["clipBehavior"] as api5.Clip?,
            shape: values["shape"] as api2.ShapeBorder?,
            alignment: values["alignment"] as api2.AlignmentGeometry?,
            constraints: values["constraints"] as api4.BoxConstraints?,
            scrollable: values["scrollable"] as bool,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            actionScrollController:
                values["actionScrollController"] as api1.ScrollController?,
            insetAnimationDuration:
                values["insetAnimationDuration"] as api8.Duration,
          );
        }
        return api.AlertDialog.adaptive(
          key: values["key"] as api6.Key?,
          icon: values["icon"] as api1.Widget?,
          iconPadding: values["iconPadding"] as api2.EdgeInsetsGeometry?,
          iconColor: values["iconColor"] as api5.Color?,
          title: values["title"] as api1.Widget?,
          titlePadding: values["titlePadding"] as api2.EdgeInsetsGeometry?,
          titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
          content: values["content"] as api1.Widget?,
          contentPadding: values["contentPadding"] as api2.EdgeInsetsGeometry?,
          contentTextStyle: values["contentTextStyle"] as api2.TextStyle?,
          actions: values["actions"] as List<api1.Widget>?,
          actionsPadding: values["actionsPadding"] as api2.EdgeInsetsGeometry?,
          actionsAlignment:
              values["actionsAlignment"] as api4.MainAxisAlignment?,
          actionsOverflowAlignment:
              values["actionsOverflowAlignment"] as api1.OverflowBarAlignment?,
          actionsOverflowDirection:
              values["actionsOverflowDirection"] as api2.VerticalDirection?,
          actionsOverflowButtonSpacing:
              values["actionsOverflowButtonSpacing"] as double?,
          buttonPadding: values["buttonPadding"] as api2.EdgeInsetsGeometry?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          elevation: values["elevation"] as double?,
          shadowColor: values["shadowColor"] as api5.Color?,
          surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
          semanticLabel: values["semanticLabel"] as String?,
          clipBehavior: values["clipBehavior"] as api5.Clip?,
          shape: values["shape"] as api2.ShapeBorder?,
          alignment: values["alignment"] as api2.AlignmentGeometry?,
          constraints: values["constraints"] as api4.BoxConstraints?,
          scrollable: values["scrollable"] as bool,
          scrollController:
              values["scrollController"] as api1.ScrollController?,
          actionScrollController:
              values["actionScrollController"] as api1.ScrollController?,
          insetAnimationDuration:
              values["insetAnimationDuration"] as api8.Duration,
          insetAnimationCurve: values["insetAnimationCurve"] as api3.Curve,
        );
      }
      if (!values.containsKey("insetAnimationDuration")) {
        if (!values.containsKey("insetAnimationCurve")) {
          return api.AlertDialog.adaptive(
            key: values["key"] as api6.Key?,
            icon: values["icon"] as api1.Widget?,
            iconPadding: values["iconPadding"] as api2.EdgeInsetsGeometry?,
            iconColor: values["iconColor"] as api5.Color?,
            title: values["title"] as api1.Widget?,
            titlePadding: values["titlePadding"] as api2.EdgeInsetsGeometry?,
            titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
            content: values["content"] as api1.Widget?,
            contentPadding:
                values["contentPadding"] as api2.EdgeInsetsGeometry?,
            contentTextStyle: values["contentTextStyle"] as api2.TextStyle?,
            actions: values["actions"] as List<api1.Widget>?,
            actionsPadding:
                values["actionsPadding"] as api2.EdgeInsetsGeometry?,
            actionsAlignment:
                values["actionsAlignment"] as api4.MainAxisAlignment?,
            actionsOverflowAlignment:
                values["actionsOverflowAlignment"]
                    as api1.OverflowBarAlignment?,
            actionsOverflowDirection:
                values["actionsOverflowDirection"] as api2.VerticalDirection?,
            actionsOverflowButtonSpacing:
                values["actionsOverflowButtonSpacing"] as double?,
            buttonPadding: values["buttonPadding"] as api2.EdgeInsetsGeometry?,
            backgroundColor: values["backgroundColor"] as api5.Color?,
            elevation: values["elevation"] as double?,
            shadowColor: values["shadowColor"] as api5.Color?,
            surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
            semanticLabel: values["semanticLabel"] as String?,
            insetPadding: values["insetPadding"] as api2.EdgeInsets,
            clipBehavior: values["clipBehavior"] as api5.Clip?,
            shape: values["shape"] as api2.ShapeBorder?,
            alignment: values["alignment"] as api2.AlignmentGeometry?,
            constraints: values["constraints"] as api4.BoxConstraints?,
            scrollable: values["scrollable"] as bool,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            actionScrollController:
                values["actionScrollController"] as api1.ScrollController?,
          );
        }
        return api.AlertDialog.adaptive(
          key: values["key"] as api6.Key?,
          icon: values["icon"] as api1.Widget?,
          iconPadding: values["iconPadding"] as api2.EdgeInsetsGeometry?,
          iconColor: values["iconColor"] as api5.Color?,
          title: values["title"] as api1.Widget?,
          titlePadding: values["titlePadding"] as api2.EdgeInsetsGeometry?,
          titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
          content: values["content"] as api1.Widget?,
          contentPadding: values["contentPadding"] as api2.EdgeInsetsGeometry?,
          contentTextStyle: values["contentTextStyle"] as api2.TextStyle?,
          actions: values["actions"] as List<api1.Widget>?,
          actionsPadding: values["actionsPadding"] as api2.EdgeInsetsGeometry?,
          actionsAlignment:
              values["actionsAlignment"] as api4.MainAxisAlignment?,
          actionsOverflowAlignment:
              values["actionsOverflowAlignment"] as api1.OverflowBarAlignment?,
          actionsOverflowDirection:
              values["actionsOverflowDirection"] as api2.VerticalDirection?,
          actionsOverflowButtonSpacing:
              values["actionsOverflowButtonSpacing"] as double?,
          buttonPadding: values["buttonPadding"] as api2.EdgeInsetsGeometry?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          elevation: values["elevation"] as double?,
          shadowColor: values["shadowColor"] as api5.Color?,
          surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
          semanticLabel: values["semanticLabel"] as String?,
          insetPadding: values["insetPadding"] as api2.EdgeInsets,
          clipBehavior: values["clipBehavior"] as api5.Clip?,
          shape: values["shape"] as api2.ShapeBorder?,
          alignment: values["alignment"] as api2.AlignmentGeometry?,
          constraints: values["constraints"] as api4.BoxConstraints?,
          scrollable: values["scrollable"] as bool,
          scrollController:
              values["scrollController"] as api1.ScrollController?,
          actionScrollController:
              values["actionScrollController"] as api1.ScrollController?,
          insetAnimationCurve: values["insetAnimationCurve"] as api3.Curve,
        );
      }
      if (!values.containsKey("insetAnimationCurve")) {
        return api.AlertDialog.adaptive(
          key: values["key"] as api6.Key?,
          icon: values["icon"] as api1.Widget?,
          iconPadding: values["iconPadding"] as api2.EdgeInsetsGeometry?,
          iconColor: values["iconColor"] as api5.Color?,
          title: values["title"] as api1.Widget?,
          titlePadding: values["titlePadding"] as api2.EdgeInsetsGeometry?,
          titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
          content: values["content"] as api1.Widget?,
          contentPadding: values["contentPadding"] as api2.EdgeInsetsGeometry?,
          contentTextStyle: values["contentTextStyle"] as api2.TextStyle?,
          actions: values["actions"] as List<api1.Widget>?,
          actionsPadding: values["actionsPadding"] as api2.EdgeInsetsGeometry?,
          actionsAlignment:
              values["actionsAlignment"] as api4.MainAxisAlignment?,
          actionsOverflowAlignment:
              values["actionsOverflowAlignment"] as api1.OverflowBarAlignment?,
          actionsOverflowDirection:
              values["actionsOverflowDirection"] as api2.VerticalDirection?,
          actionsOverflowButtonSpacing:
              values["actionsOverflowButtonSpacing"] as double?,
          buttonPadding: values["buttonPadding"] as api2.EdgeInsetsGeometry?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          elevation: values["elevation"] as double?,
          shadowColor: values["shadowColor"] as api5.Color?,
          surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
          semanticLabel: values["semanticLabel"] as String?,
          insetPadding: values["insetPadding"] as api2.EdgeInsets,
          clipBehavior: values["clipBehavior"] as api5.Clip?,
          shape: values["shape"] as api2.ShapeBorder?,
          alignment: values["alignment"] as api2.AlignmentGeometry?,
          constraints: values["constraints"] as api4.BoxConstraints?,
          scrollable: values["scrollable"] as bool,
          scrollController:
              values["scrollController"] as api1.ScrollController?,
          actionScrollController:
              values["actionScrollController"] as api1.ScrollController?,
          insetAnimationDuration:
              values["insetAnimationDuration"] as api8.Duration,
        );
      }
      return api.AlertDialog.adaptive(
        key: values["key"] as api6.Key?,
        icon: values["icon"] as api1.Widget?,
        iconPadding: values["iconPadding"] as api2.EdgeInsetsGeometry?,
        iconColor: values["iconColor"] as api5.Color?,
        title: values["title"] as api1.Widget?,
        titlePadding: values["titlePadding"] as api2.EdgeInsetsGeometry?,
        titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
        content: values["content"] as api1.Widget?,
        contentPadding: values["contentPadding"] as api2.EdgeInsetsGeometry?,
        contentTextStyle: values["contentTextStyle"] as api2.TextStyle?,
        actions: values["actions"] as List<api1.Widget>?,
        actionsPadding: values["actionsPadding"] as api2.EdgeInsetsGeometry?,
        actionsAlignment: values["actionsAlignment"] as api4.MainAxisAlignment?,
        actionsOverflowAlignment:
            values["actionsOverflowAlignment"] as api1.OverflowBarAlignment?,
        actionsOverflowDirection:
            values["actionsOverflowDirection"] as api2.VerticalDirection?,
        actionsOverflowButtonSpacing:
            values["actionsOverflowButtonSpacing"] as double?,
        buttonPadding: values["buttonPadding"] as api2.EdgeInsetsGeometry?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        elevation: values["elevation"] as double?,
        shadowColor: values["shadowColor"] as api5.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
        semanticLabel: values["semanticLabel"] as String?,
        insetPadding: values["insetPadding"] as api2.EdgeInsets,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        shape: values["shape"] as api2.ShapeBorder?,
        alignment: values["alignment"] as api2.AlignmentGeometry?,
        constraints: values["constraints"] as api4.BoxConstraints?,
        scrollable: values["scrollable"] as bool,
        scrollController: values["scrollController"] as api1.ScrollController?,
        actionScrollController:
            values["actionScrollController"] as api1.ScrollController?,
        insetAnimationDuration:
            values["insetAnimationDuration"] as api8.Duration,
        insetAnimationCurve: values["insetAnimationCurve"] as api3.Curve,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAppBar(Object value) => value is api.AppBar;
Object? _AppBar_preferredSize(Object value) =>
    (value as api.AppBar).preferredSize;
Object? _AppBar_leading(Object value) => (value as api.AppBar).leading;
Object? _AppBar_automaticallyImplyLeading(Object value) =>
    (value as api.AppBar).automaticallyImplyLeading;
Object? _AppBar_title(Object value) => (value as api.AppBar).title;
Object? _AppBar_actions(Object value) => (value as api.AppBar).actions;
Object? _AppBar_automaticallyImplyActions(Object value) =>
    (value as api.AppBar).automaticallyImplyActions;
Object? _AppBar_flexibleSpace(Object value) =>
    (value as api.AppBar).flexibleSpace;
Object? _AppBar_bottom(Object value) => (value as api.AppBar).bottom;
Object? _AppBar_elevation(Object value) => (value as api.AppBar).elevation;
Object? _AppBar_scrolledUnderElevation(Object value) =>
    (value as api.AppBar).scrolledUnderElevation;
Object? _AppBar_notificationPredicate(Object value) =>
    (value as api.AppBar).notificationPredicate;
Object? _AppBar_shadowColor(Object value) => (value as api.AppBar).shadowColor;
Object? _AppBar_surfaceTintColor(Object value) =>
    (value as api.AppBar).surfaceTintColor;
Object? _AppBar_shape(Object value) => (value as api.AppBar).shape;
Object? _AppBar_backgroundColor(Object value) =>
    (value as api.AppBar).backgroundColor;
Object? _AppBar_foregroundColor(Object value) =>
    (value as api.AppBar).foregroundColor;
Object? _AppBar_iconTheme(Object value) => (value as api.AppBar).iconTheme;
Object? _AppBar_actionsIconTheme(Object value) =>
    (value as api.AppBar).actionsIconTheme;
Object? _AppBar_primary(Object value) => (value as api.AppBar).primary;
Object? _AppBar_centerTitle(Object value) => (value as api.AppBar).centerTitle;
Object? _AppBar_excludeHeaderSemantics(Object value) =>
    (value as api.AppBar).excludeHeaderSemantics;
Object? _AppBar_titleSpacing(Object value) =>
    (value as api.AppBar).titleSpacing;
Object? _AppBar_toolbarOpacity(Object value) =>
    (value as api.AppBar).toolbarOpacity;
Object? _AppBar_bottomOpacity(Object value) =>
    (value as api.AppBar).bottomOpacity;
Object? _AppBar_toolbarHeight(Object value) =>
    (value as api.AppBar).toolbarHeight;
Object? _AppBar_leadingWidth(Object value) =>
    (value as api.AppBar).leadingWidth;
Object? _AppBar_toolbarTextStyle(Object value) =>
    (value as api.AppBar).toolbarTextStyle;
Object? _AppBar_titleTextStyle(Object value) =>
    (value as api.AppBar).titleTextStyle;
Object? _AppBar_systemOverlayStyle(Object value) =>
    (value as api.AppBar).systemOverlayStyle;
Object? _AppBar_forceMaterialTransparency(Object value) =>
    (value as api.AppBar).forceMaterialTransparency;
Object? _AppBar_useDefaultSemanticsOrder(Object value) =>
    (value as api.AppBar).useDefaultSemanticsOrder;
Object? _AppBar_clipBehavior(Object value) =>
    (value as api.AppBar).clipBehavior;
Object? _AppBar_actionsPadding(Object value) =>
    (value as api.AppBar).actionsPadding;
Object? _AppBar_animateColor(Object value) =>
    (value as api.AppBar).animateColor;
Object? _AppBar_key(Object value) => (value as api.AppBar).key;
Object? _AppBar_preferredHeightFor(Map<String, Object?> values) {
  return api.AppBar.preferredHeightFor(
    values["context"] as api1.BuildContext,
    values["preferredSize"] as api5.Size,
  );
}

Object? _AppBar_toStringShort(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AppBar).toStringShort();
}

Object? _AppBar_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AppBar).toString(
    minLevel: values["minLevel"] as api6.DiagnosticLevel,
  );
}

Object? _AppBar_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AppBar).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api6.DiagnosticsTreeStyle?,
  );
}

Object? _AppBar_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AppBar).debugFillProperties(
    values["properties"] as api6.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _AppBar_toStringShallow(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AppBar).toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api6.DiagnosticLevel,
  );
}

Object? _AppBar_toStringDeep(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AppBar).toStringDeep(
    minLevel: values["minLevel"] as api6.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _AppBar_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AppBar).debugDescribeChildren();
}

Object? _AppBar_createState(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AppBar).createState();
}

Object? _AppBar_createElement(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AppBar).createElement();
}

api1.Widget _createAppBar(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("notificationPredicate")) {
        return api.AppBar(
          key: values["key"] as api6.Key?,
          leading: values["leading"] as api1.Widget?,
          automaticallyImplyLeading:
              values["automaticallyImplyLeading"] as bool,
          title: values["title"] as api1.Widget?,
          actions: values["actions"] as List<api1.Widget>?,
          automaticallyImplyActions:
              values["automaticallyImplyActions"] as bool,
          flexibleSpace: values["flexibleSpace"] as api1.Widget?,
          bottom: values["bottom"] as api1.PreferredSizeWidget?,
          elevation: values["elevation"] as double?,
          scrolledUnderElevation: values["scrolledUnderElevation"] as double?,
          shadowColor: values["shadowColor"] as api5.Color?,
          surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
          shape: values["shape"] as api2.ShapeBorder?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          foregroundColor: values["foregroundColor"] as api5.Color?,
          iconTheme: values["iconTheme"] as api1.IconThemeData?,
          actionsIconTheme: values["actionsIconTheme"] as api1.IconThemeData?,
          primary: values["primary"] as bool,
          centerTitle: values["centerTitle"] as bool?,
          excludeHeaderSemantics: values["excludeHeaderSemantics"] as bool,
          titleSpacing: values["titleSpacing"] as double?,
          toolbarOpacity: values["toolbarOpacity"] as double,
          bottomOpacity: values["bottomOpacity"] as double,
          toolbarHeight: values["toolbarHeight"] as double?,
          leadingWidth: values["leadingWidth"] as double?,
          toolbarTextStyle: values["toolbarTextStyle"] as api2.TextStyle?,
          titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
          systemOverlayStyle:
              values["systemOverlayStyle"] as api9.SystemUiOverlayStyle?,
          forceMaterialTransparency:
              values["forceMaterialTransparency"] as bool,
          useDefaultSemanticsOrder: values["useDefaultSemanticsOrder"] as bool,
          clipBehavior: values["clipBehavior"] as api5.Clip?,
          actionsPadding: values["actionsPadding"] as api2.EdgeInsetsGeometry?,
          animateColor: values["animateColor"] as bool,
        );
      }
      return api.AppBar(
        key: values["key"] as api6.Key?,
        leading: values["leading"] as api1.Widget?,
        automaticallyImplyLeading: values["automaticallyImplyLeading"] as bool,
        title: values["title"] as api1.Widget?,
        actions: values["actions"] as List<api1.Widget>?,
        automaticallyImplyActions: values["automaticallyImplyActions"] as bool,
        flexibleSpace: values["flexibleSpace"] as api1.Widget?,
        bottom: values["bottom"] as api1.PreferredSizeWidget?,
        elevation: values["elevation"] as double?,
        scrolledUnderElevation: values["scrolledUnderElevation"] as double?,
        notificationPredicate:
            values["notificationPredicate"]
                as bool Function(api1.ScrollNotification notification),
        shadowColor: values["shadowColor"] as api5.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
        shape: values["shape"] as api2.ShapeBorder?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        foregroundColor: values["foregroundColor"] as api5.Color?,
        iconTheme: values["iconTheme"] as api1.IconThemeData?,
        actionsIconTheme: values["actionsIconTheme"] as api1.IconThemeData?,
        primary: values["primary"] as bool,
        centerTitle: values["centerTitle"] as bool?,
        excludeHeaderSemantics: values["excludeHeaderSemantics"] as bool,
        titleSpacing: values["titleSpacing"] as double?,
        toolbarOpacity: values["toolbarOpacity"] as double,
        bottomOpacity: values["bottomOpacity"] as double,
        toolbarHeight: values["toolbarHeight"] as double?,
        leadingWidth: values["leadingWidth"] as double?,
        toolbarTextStyle: values["toolbarTextStyle"] as api2.TextStyle?,
        titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
        systemOverlayStyle:
            values["systemOverlayStyle"] as api9.SystemUiOverlayStyle?,
        forceMaterialTransparency: values["forceMaterialTransparency"] as bool,
        useDefaultSemanticsOrder: values["useDefaultSemanticsOrder"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        actionsPadding: values["actionsPadding"] as api2.EdgeInsetsGeometry?,
        animateColor: values["animateColor"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isButtonStyle(Object value) => value is api.ButtonStyle;
Object? _ButtonStyle_textStyle(Object value) =>
    (value as api.ButtonStyle).textStyle;
Object? _ButtonStyle_backgroundColor(Object value) =>
    (value as api.ButtonStyle).backgroundColor;
Object? _ButtonStyle_foregroundColor(Object value) =>
    (value as api.ButtonStyle).foregroundColor;
Object? _ButtonStyle_overlayColor(Object value) =>
    (value as api.ButtonStyle).overlayColor;
Object? _ButtonStyle_shadowColor(Object value) =>
    (value as api.ButtonStyle).shadowColor;
Object? _ButtonStyle_surfaceTintColor(Object value) =>
    (value as api.ButtonStyle).surfaceTintColor;
Object? _ButtonStyle_elevation(Object value) =>
    (value as api.ButtonStyle).elevation;
Object? _ButtonStyle_padding(Object value) =>
    (value as api.ButtonStyle).padding;
Object? _ButtonStyle_minimumSize(Object value) =>
    (value as api.ButtonStyle).minimumSize;
Object? _ButtonStyle_fixedSize(Object value) =>
    (value as api.ButtonStyle).fixedSize;
Object? _ButtonStyle_maximumSize(Object value) =>
    (value as api.ButtonStyle).maximumSize;
Object? _ButtonStyle_iconColor(Object value) =>
    (value as api.ButtonStyle).iconColor;
Object? _ButtonStyle_iconSize(Object value) =>
    (value as api.ButtonStyle).iconSize;
Object? _ButtonStyle_side(Object value) => (value as api.ButtonStyle).side;
Object? _ButtonStyle_shape(Object value) => (value as api.ButtonStyle).shape;
Object? _ButtonStyle_mouseCursor(Object value) =>
    (value as api.ButtonStyle).mouseCursor;
Object? _ButtonStyle_visualDensity(Object value) =>
    (value as api.ButtonStyle).visualDensity;
Object? _ButtonStyle_animationDuration(Object value) =>
    (value as api.ButtonStyle).animationDuration;
Object? _ButtonStyle_enableFeedback(Object value) =>
    (value as api.ButtonStyle).enableFeedback;
Object? _ButtonStyle_alignment(Object value) =>
    (value as api.ButtonStyle).alignment;
Object? _ButtonStyle_backgroundBuilder(Object value) =>
    (value as api.ButtonStyle).backgroundBuilder;
Object? _ButtonStyle_foregroundBuilder(Object value) =>
    (value as api.ButtonStyle).foregroundBuilder;
Object? _ButtonStyle_lerp(Map<String, Object?> values) {
  return api.ButtonStyle.lerp(
    values["a"] as api.ButtonStyle?,
    values["b"] as api.ButtonStyle?,
    values["t"] as double,
  );
}

Object? _ButtonStyle_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ButtonStyle).toStringShort();
}

Object? _ButtonStyle_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ButtonStyle).toString(
    minLevel: values["minLevel"] as api6.DiagnosticLevel,
  );
}

Object? _ButtonStyle_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ButtonStyle).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api6.DiagnosticsTreeStyle?,
  );
}

Object? _ButtonStyle_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ButtonStyle).debugFillProperties(
    values["properties"] as api6.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _ButtonStyle_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ButtonStyle).copyWith(
    alignment: values["alignment"] as api2.AlignmentGeometry?,
    animationDuration: values["animationDuration"] as api8.Duration?,
    backgroundBuilder:
        values["backgroundBuilder"]
            as api1.Widget Function(
              api1.BuildContext context,
              Set<api1.WidgetState> states,
              api1.Widget? child,
            )?,
    backgroundColor:
        values["backgroundColor"] as api1.WidgetStateProperty<api5.Color?>?,
    elevation: values["elevation"] as api1.WidgetStateProperty<double?>?,
    enableFeedback: values["enableFeedback"] as bool?,
    fixedSize: values["fixedSize"] as api1.WidgetStateProperty<api5.Size?>?,
    foregroundBuilder:
        values["foregroundBuilder"]
            as api1.Widget Function(
              api1.BuildContext context,
              Set<api1.WidgetState> states,
              api1.Widget? child,
            )?,
    foregroundColor:
        values["foregroundColor"] as api1.WidgetStateProperty<api5.Color?>?,
    iconColor: values["iconColor"] as api1.WidgetStateProperty<api5.Color?>?,
    iconSize: values["iconSize"] as api1.WidgetStateProperty<double?>?,
    maximumSize: values["maximumSize"] as api1.WidgetStateProperty<api5.Size?>?,
    minimumSize: values["minimumSize"] as api1.WidgetStateProperty<api5.Size?>?,
    mouseCursor:
        values["mouseCursor"] as api1.WidgetStateProperty<api9.MouseCursor?>?,
    overlayColor:
        values["overlayColor"] as api1.WidgetStateProperty<api5.Color?>?,
    padding:
        values["padding"]
            as api1.WidgetStateProperty<api2.EdgeInsetsGeometry?>?,
    shadowColor:
        values["shadowColor"] as api1.WidgetStateProperty<api5.Color?>?,
    shape: values["shape"] as api1.WidgetStateProperty<api2.OutlinedBorder?>?,
    side: values["side"] as api1.WidgetStateProperty<api2.BorderSide?>?,
    surfaceTintColor:
        values["surfaceTintColor"] as api1.WidgetStateProperty<api5.Color?>?,
    textStyle:
        values["textStyle"] as api1.WidgetStateProperty<api2.TextStyle?>?,
    visualDensity: values["visualDensity"] as api.VisualDensity?,
  );
}

Object? _ButtonStyle_merge(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ButtonStyle).merge(
    values["style"] as api.ButtonStyle?,
  );
}

Object _createButtonStyle(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ButtonStyle(
        textStyle:
            values["textStyle"] as api1.WidgetStateProperty<api2.TextStyle?>?,
        backgroundColor:
            values["backgroundColor"] as api1.WidgetStateProperty<api5.Color?>?,
        foregroundColor:
            values["foregroundColor"] as api1.WidgetStateProperty<api5.Color?>?,
        overlayColor:
            values["overlayColor"] as api1.WidgetStateProperty<api5.Color?>?,
        shadowColor:
            values["shadowColor"] as api1.WidgetStateProperty<api5.Color?>?,
        surfaceTintColor:
            values["surfaceTintColor"]
                as api1.WidgetStateProperty<api5.Color?>?,
        elevation: values["elevation"] as api1.WidgetStateProperty<double?>?,
        padding:
            values["padding"]
                as api1.WidgetStateProperty<api2.EdgeInsetsGeometry?>?,
        minimumSize:
            values["minimumSize"] as api1.WidgetStateProperty<api5.Size?>?,
        fixedSize: values["fixedSize"] as api1.WidgetStateProperty<api5.Size?>?,
        maximumSize:
            values["maximumSize"] as api1.WidgetStateProperty<api5.Size?>?,
        iconColor:
            values["iconColor"] as api1.WidgetStateProperty<api5.Color?>?,
        iconSize: values["iconSize"] as api1.WidgetStateProperty<double?>?,
        side: values["side"] as api1.WidgetStateProperty<api2.BorderSide?>?,
        shape:
            values["shape"] as api1.WidgetStateProperty<api2.OutlinedBorder?>?,
        mouseCursor:
            values["mouseCursor"]
                as api1.WidgetStateProperty<api9.MouseCursor?>?,
        visualDensity: values["visualDensity"] as api.VisualDensity?,
        animationDuration: values["animationDuration"] as api8.Duration?,
        enableFeedback: values["enableFeedback"] as bool?,
        alignment: values["alignment"] as api2.AlignmentGeometry?,
        backgroundBuilder:
            values["backgroundBuilder"]
                as api1.Widget Function(
                  api1.BuildContext context,
                  Set<api1.WidgetState> states,
                  api1.Widget? child,
                )?,
        foregroundBuilder:
            values["foregroundBuilder"]
                as api1.Widget Function(
                  api1.BuildContext context,
                  Set<api1.WidgetState> states,
                  api1.Widget? child,
                )?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCard(Object value) => value is api.Card;

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
        key: values["key"] as api6.Key?,
        color: values["color"] as api5.Color?,
        shadowColor: values["shadowColor"] as api5.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
        elevation: values["elevation"] as double?,
        shape: values["shape"] as api2.ShapeBorder?,
        borderOnForeground: values["borderOnForeground"] as bool,
        margin: values["margin"] as api2.EdgeInsetsGeometry?,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        child: values["child"] as api1.Widget?,
        semanticContainer: values["semanticContainer"] as bool,
      );
    case "filled":
      return api.Card.filled(
        key: values["key"] as api6.Key?,
        color: values["color"] as api5.Color?,
        shadowColor: values["shadowColor"] as api5.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
        elevation: values["elevation"] as double?,
        shape: values["shape"] as api2.ShapeBorder?,
        borderOnForeground: values["borderOnForeground"] as bool,
        margin: values["margin"] as api2.EdgeInsetsGeometry?,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        child: values["child"] as api1.Widget?,
        semanticContainer: values["semanticContainer"] as bool,
      );
    case "outlined":
      return api.Card.outlined(
        key: values["key"] as api6.Key?,
        color: values["color"] as api5.Color?,
        shadowColor: values["shadowColor"] as api5.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
        elevation: values["elevation"] as double?,
        shape: values["shape"] as api2.ShapeBorder?,
        borderOnForeground: values["borderOnForeground"] as bool,
        margin: values["margin"] as api2.EdgeInsetsGeometry?,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        child: values["child"] as api1.Widget?,
        semanticContainer: values["semanticContainer"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCheckbox(Object value) => value is api.Checkbox;

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
        key: values["key"] as api6.Key?,
        value: values["value"] as bool?,
        tristate: values["tristate"] as bool,
        onChanged: values["onChanged"] as void Function(bool? value)?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        activeColor: values["activeColor"] as api5.Color?,
        fillColor:
            values["fillColor"] as api1.WidgetStateProperty<api5.Color?>?,
        checkColor: values["checkColor"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        overlayColor:
            values["overlayColor"] as api1.WidgetStateProperty<api5.Color?>?,
        splashRadius: values["splashRadius"] as double?,
        visualDensity: values["visualDensity"] as api.VisualDensity?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        shape: values["shape"] as api2.OutlinedBorder?,
        side: values["side"] as api2.BorderSide?,
        isError: values["isError"] as bool,
        semanticLabel: values["semanticLabel"] as String?,
      );
    case "adaptive":
      return api.Checkbox.adaptive(
        key: values["key"] as api6.Key?,
        value: values["value"] as bool?,
        tristate: values["tristate"] as bool,
        onChanged: values["onChanged"] as void Function(bool? value)?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        activeColor: values["activeColor"] as api5.Color?,
        fillColor:
            values["fillColor"] as api1.WidgetStateProperty<api5.Color?>?,
        checkColor: values["checkColor"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        overlayColor:
            values["overlayColor"] as api1.WidgetStateProperty<api5.Color?>?,
        splashRadius: values["splashRadius"] as double?,
        visualDensity: values["visualDensity"] as api.VisualDensity?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        shape: values["shape"] as api2.OutlinedBorder?,
        side: values["side"] as api2.BorderSide?,
        isError: values["isError"] as bool,
        semanticLabel: values["semanticLabel"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCircularProgressIndicator(Object value) =>
    value is api.CircularProgressIndicator;

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
        key: values["key"] as api6.Key?,
        value: values["value"] as double?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        color: values["color"] as api5.Color?,
        valueColor: values["valueColor"] as api3.Animation<api5.Color?>?,
        strokeWidth: values["strokeWidth"] as double?,
        strokeAlign: values["strokeAlign"] as double?,
        semanticsLabel: values["semanticsLabel"] as String?,
        semanticsValue: values["semanticsValue"] as String?,
        strokeCap: values["strokeCap"] as api5.StrokeCap?,
        constraints: values["constraints"] as api4.BoxConstraints?,
        trackGap: values["trackGap"] as double?,
        year2023: values["year2023"] as bool?,
        padding: values["padding"] as api2.EdgeInsetsGeometry?,
        controller: values["controller"] as api3.AnimationController?,
      );
    case "adaptive":
      return api.CircularProgressIndicator.adaptive(
        key: values["key"] as api6.Key?,
        value: values["value"] as double?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        valueColor: values["valueColor"] as api3.Animation<api5.Color?>?,
        strokeWidth: values["strokeWidth"] as double?,
        semanticsLabel: values["semanticsLabel"] as String?,
        semanticsValue: values["semanticsValue"] as String?,
        strokeCap: values["strokeCap"] as api5.StrokeCap?,
        strokeAlign: values["strokeAlign"] as double?,
        constraints: values["constraints"] as api4.BoxConstraints?,
        trackGap: values["trackGap"] as double?,
        year2023: values["year2023"] as bool?,
        padding: values["padding"] as api2.EdgeInsetsGeometry?,
        controller: values["controller"] as api3.AnimationController?,
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
Object? _ColorScheme_primaryContainer(Object value) =>
    (value as api.ColorScheme).primaryContainer;
Object? _ColorScheme_onPrimaryContainer(Object value) =>
    (value as api.ColorScheme).onPrimaryContainer;
Object? _ColorScheme_primaryFixed(Object value) =>
    (value as api.ColorScheme).primaryFixed;
Object? _ColorScheme_primaryFixedDim(Object value) =>
    (value as api.ColorScheme).primaryFixedDim;
Object? _ColorScheme_onPrimaryFixed(Object value) =>
    (value as api.ColorScheme).onPrimaryFixed;
Object? _ColorScheme_onPrimaryFixedVariant(Object value) =>
    (value as api.ColorScheme).onPrimaryFixedVariant;
Object? _ColorScheme_secondary(Object value) =>
    (value as api.ColorScheme).secondary;
Object? _ColorScheme_onSecondary(Object value) =>
    (value as api.ColorScheme).onSecondary;
Object? _ColorScheme_secondaryContainer(Object value) =>
    (value as api.ColorScheme).secondaryContainer;
Object? _ColorScheme_onSecondaryContainer(Object value) =>
    (value as api.ColorScheme).onSecondaryContainer;
Object? _ColorScheme_secondaryFixed(Object value) =>
    (value as api.ColorScheme).secondaryFixed;
Object? _ColorScheme_secondaryFixedDim(Object value) =>
    (value as api.ColorScheme).secondaryFixedDim;
Object? _ColorScheme_onSecondaryFixed(Object value) =>
    (value as api.ColorScheme).onSecondaryFixed;
Object? _ColorScheme_onSecondaryFixedVariant(Object value) =>
    (value as api.ColorScheme).onSecondaryFixedVariant;
Object? _ColorScheme_tertiary(Object value) =>
    (value as api.ColorScheme).tertiary;
Object? _ColorScheme_onTertiary(Object value) =>
    (value as api.ColorScheme).onTertiary;
Object? _ColorScheme_tertiaryContainer(Object value) =>
    (value as api.ColorScheme).tertiaryContainer;
Object? _ColorScheme_onTertiaryContainer(Object value) =>
    (value as api.ColorScheme).onTertiaryContainer;
Object? _ColorScheme_tertiaryFixed(Object value) =>
    (value as api.ColorScheme).tertiaryFixed;
Object? _ColorScheme_tertiaryFixedDim(Object value) =>
    (value as api.ColorScheme).tertiaryFixedDim;
Object? _ColorScheme_onTertiaryFixed(Object value) =>
    (value as api.ColorScheme).onTertiaryFixed;
Object? _ColorScheme_onTertiaryFixedVariant(Object value) =>
    (value as api.ColorScheme).onTertiaryFixedVariant;
Object? _ColorScheme_error(Object value) => (value as api.ColorScheme).error;
Object? _ColorScheme_onError(Object value) =>
    (value as api.ColorScheme).onError;
Object? _ColorScheme_errorContainer(Object value) =>
    (value as api.ColorScheme).errorContainer;
Object? _ColorScheme_onErrorContainer(Object value) =>
    (value as api.ColorScheme).onErrorContainer;
Object? _ColorScheme_surface(Object value) =>
    (value as api.ColorScheme).surface;
Object? _ColorScheme_onSurface(Object value) =>
    (value as api.ColorScheme).onSurface;
Object? _ColorScheme_surfaceVariant(Object value) =>
    (value as api.ColorScheme).surfaceVariant;
Object? _ColorScheme_surfaceDim(Object value) =>
    (value as api.ColorScheme).surfaceDim;
Object? _ColorScheme_surfaceBright(Object value) =>
    (value as api.ColorScheme).surfaceBright;
Object? _ColorScheme_surfaceContainerLowest(Object value) =>
    (value as api.ColorScheme).surfaceContainerLowest;
Object? _ColorScheme_surfaceContainerLow(Object value) =>
    (value as api.ColorScheme).surfaceContainerLow;
Object? _ColorScheme_surfaceContainer(Object value) =>
    (value as api.ColorScheme).surfaceContainer;
Object? _ColorScheme_surfaceContainerHigh(Object value) =>
    (value as api.ColorScheme).surfaceContainerHigh;
Object? _ColorScheme_surfaceContainerHighest(Object value) =>
    (value as api.ColorScheme).surfaceContainerHighest;
Object? _ColorScheme_onSurfaceVariant(Object value) =>
    (value as api.ColorScheme).onSurfaceVariant;
Object? _ColorScheme_outline(Object value) =>
    (value as api.ColorScheme).outline;
Object? _ColorScheme_outlineVariant(Object value) =>
    (value as api.ColorScheme).outlineVariant;
Object? _ColorScheme_shadow(Object value) => (value as api.ColorScheme).shadow;
Object? _ColorScheme_scrim(Object value) => (value as api.ColorScheme).scrim;
Object? _ColorScheme_inverseSurface(Object value) =>
    (value as api.ColorScheme).inverseSurface;
Object? _ColorScheme_onInverseSurface(Object value) =>
    (value as api.ColorScheme).onInverseSurface;
Object? _ColorScheme_inversePrimary(Object value) =>
    (value as api.ColorScheme).inversePrimary;
Object? _ColorScheme_surfaceTint(Object value) =>
    (value as api.ColorScheme).surfaceTint;
Object? _ColorScheme_background(Object value) =>
    (value as api.ColorScheme).background;
Object? _ColorScheme_onBackground(Object value) =>
    (value as api.ColorScheme).onBackground;
Object? _ColorScheme_lerp(Map<String, Object?> values) {
  return api.ColorScheme.lerp(
    values["a"] as api.ColorScheme,
    values["b"] as api.ColorScheme,
    values["t"] as double,
  );
}

Object? _ColorScheme_fromImageProvider(Map<String, Object?> values) {
  return api.ColorScheme.fromImageProvider(
    background: values["background"] as api5.Color?,
    brightness: values["brightness"] as api5.Brightness,
    contrastLevel: values["contrastLevel"] as double,
    error: values["error"] as api5.Color?,
    errorContainer: values["errorContainer"] as api5.Color?,
    inversePrimary: values["inversePrimary"] as api5.Color?,
    inverseSurface: values["inverseSurface"] as api5.Color?,
    onBackground: values["onBackground"] as api5.Color?,
    onError: values["onError"] as api5.Color?,
    onErrorContainer: values["onErrorContainer"] as api5.Color?,
    onInverseSurface: values["onInverseSurface"] as api5.Color?,
    onPrimary: values["onPrimary"] as api5.Color?,
    onPrimaryContainer: values["onPrimaryContainer"] as api5.Color?,
    onPrimaryFixed: values["onPrimaryFixed"] as api5.Color?,
    onPrimaryFixedVariant: values["onPrimaryFixedVariant"] as api5.Color?,
    onSecondary: values["onSecondary"] as api5.Color?,
    onSecondaryContainer: values["onSecondaryContainer"] as api5.Color?,
    onSecondaryFixed: values["onSecondaryFixed"] as api5.Color?,
    onSecondaryFixedVariant: values["onSecondaryFixedVariant"] as api5.Color?,
    onSurface: values["onSurface"] as api5.Color?,
    onSurfaceVariant: values["onSurfaceVariant"] as api5.Color?,
    onTertiary: values["onTertiary"] as api5.Color?,
    onTertiaryContainer: values["onTertiaryContainer"] as api5.Color?,
    onTertiaryFixed: values["onTertiaryFixed"] as api5.Color?,
    onTertiaryFixedVariant: values["onTertiaryFixedVariant"] as api5.Color?,
    outline: values["outline"] as api5.Color?,
    outlineVariant: values["outlineVariant"] as api5.Color?,
    primary: values["primary"] as api5.Color?,
    primaryContainer: values["primaryContainer"] as api5.Color?,
    primaryFixed: values["primaryFixed"] as api5.Color?,
    primaryFixedDim: values["primaryFixedDim"] as api5.Color?,
    provider: values["provider"] as api2.ImageProvider<Object>,
    scrim: values["scrim"] as api5.Color?,
    secondary: values["secondary"] as api5.Color?,
    secondaryContainer: values["secondaryContainer"] as api5.Color?,
    secondaryFixed: values["secondaryFixed"] as api5.Color?,
    secondaryFixedDim: values["secondaryFixedDim"] as api5.Color?,
    shadow: values["shadow"] as api5.Color?,
    surface: values["surface"] as api5.Color?,
    surfaceBright: values["surfaceBright"] as api5.Color?,
    surfaceContainer: values["surfaceContainer"] as api5.Color?,
    surfaceContainerHigh: values["surfaceContainerHigh"] as api5.Color?,
    surfaceContainerHighest: values["surfaceContainerHighest"] as api5.Color?,
    surfaceContainerLow: values["surfaceContainerLow"] as api5.Color?,
    surfaceContainerLowest: values["surfaceContainerLowest"] as api5.Color?,
    surfaceDim: values["surfaceDim"] as api5.Color?,
    surfaceTint: values["surfaceTint"] as api5.Color?,
    surfaceVariant: values["surfaceVariant"] as api5.Color?,
    tertiary: values["tertiary"] as api5.Color?,
    tertiaryContainer: values["tertiaryContainer"] as api5.Color?,
    tertiaryFixed: values["tertiaryFixed"] as api5.Color?,
    tertiaryFixedDim: values["tertiaryFixedDim"] as api5.Color?,
  );
}

Object? _ColorScheme_of(Map<String, Object?> values) {
  return api.ColorScheme.of(values["context"] as api1.BuildContext);
}

Object? _ColorScheme_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ColorScheme).toStringShort();
}

Object? _ColorScheme_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ColorScheme).toString(
    minLevel: values["minLevel"] as api6.DiagnosticLevel,
  );
}

Object? _ColorScheme_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ColorScheme).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api6.DiagnosticsTreeStyle?,
  );
}

Object? _ColorScheme_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ColorScheme).debugFillProperties(
    values["properties"] as api6.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _ColorScheme_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ColorScheme).copyWith(
    background: values["background"] as api5.Color?,
    brightness: values["brightness"] as api5.Brightness?,
    error: values["error"] as api5.Color?,
    errorContainer: values["errorContainer"] as api5.Color?,
    inversePrimary: values["inversePrimary"] as api5.Color?,
    inverseSurface: values["inverseSurface"] as api5.Color?,
    onBackground: values["onBackground"] as api5.Color?,
    onError: values["onError"] as api5.Color?,
    onErrorContainer: values["onErrorContainer"] as api5.Color?,
    onInverseSurface: values["onInverseSurface"] as api5.Color?,
    onPrimary: values["onPrimary"] as api5.Color?,
    onPrimaryContainer: values["onPrimaryContainer"] as api5.Color?,
    onPrimaryFixed: values["onPrimaryFixed"] as api5.Color?,
    onPrimaryFixedVariant: values["onPrimaryFixedVariant"] as api5.Color?,
    onSecondary: values["onSecondary"] as api5.Color?,
    onSecondaryContainer: values["onSecondaryContainer"] as api5.Color?,
    onSecondaryFixed: values["onSecondaryFixed"] as api5.Color?,
    onSecondaryFixedVariant: values["onSecondaryFixedVariant"] as api5.Color?,
    onSurface: values["onSurface"] as api5.Color?,
    onSurfaceVariant: values["onSurfaceVariant"] as api5.Color?,
    onTertiary: values["onTertiary"] as api5.Color?,
    onTertiaryContainer: values["onTertiaryContainer"] as api5.Color?,
    onTertiaryFixed: values["onTertiaryFixed"] as api5.Color?,
    onTertiaryFixedVariant: values["onTertiaryFixedVariant"] as api5.Color?,
    outline: values["outline"] as api5.Color?,
    outlineVariant: values["outlineVariant"] as api5.Color?,
    primary: values["primary"] as api5.Color?,
    primaryContainer: values["primaryContainer"] as api5.Color?,
    primaryFixed: values["primaryFixed"] as api5.Color?,
    primaryFixedDim: values["primaryFixedDim"] as api5.Color?,
    scrim: values["scrim"] as api5.Color?,
    secondary: values["secondary"] as api5.Color?,
    secondaryContainer: values["secondaryContainer"] as api5.Color?,
    secondaryFixed: values["secondaryFixed"] as api5.Color?,
    secondaryFixedDim: values["secondaryFixedDim"] as api5.Color?,
    shadow: values["shadow"] as api5.Color?,
    surface: values["surface"] as api5.Color?,
    surfaceBright: values["surfaceBright"] as api5.Color?,
    surfaceContainer: values["surfaceContainer"] as api5.Color?,
    surfaceContainerHigh: values["surfaceContainerHigh"] as api5.Color?,
    surfaceContainerHighest: values["surfaceContainerHighest"] as api5.Color?,
    surfaceContainerLow: values["surfaceContainerLow"] as api5.Color?,
    surfaceContainerLowest: values["surfaceContainerLowest"] as api5.Color?,
    surfaceDim: values["surfaceDim"] as api5.Color?,
    surfaceTint: values["surfaceTint"] as api5.Color?,
    surfaceVariant: values["surfaceVariant"] as api5.Color?,
    tertiary: values["tertiary"] as api5.Color?,
    tertiaryContainer: values["tertiaryContainer"] as api5.Color?,
    tertiaryFixed: values["tertiaryFixed"] as api5.Color?,
    tertiaryFixedDim: values["tertiaryFixedDim"] as api5.Color?,
  );
}

Object _createColorScheme(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ColorScheme(
        brightness: values["brightness"] as api5.Brightness,
        primary: values["primary"] as api5.Color,
        onPrimary: values["onPrimary"] as api5.Color,
        primaryContainer: values["primaryContainer"] as api5.Color?,
        onPrimaryContainer: values["onPrimaryContainer"] as api5.Color?,
        primaryFixed: values["primaryFixed"] as api5.Color?,
        primaryFixedDim: values["primaryFixedDim"] as api5.Color?,
        onPrimaryFixed: values["onPrimaryFixed"] as api5.Color?,
        onPrimaryFixedVariant: values["onPrimaryFixedVariant"] as api5.Color?,
        secondary: values["secondary"] as api5.Color,
        onSecondary: values["onSecondary"] as api5.Color,
        secondaryContainer: values["secondaryContainer"] as api5.Color?,
        onSecondaryContainer: values["onSecondaryContainer"] as api5.Color?,
        secondaryFixed: values["secondaryFixed"] as api5.Color?,
        secondaryFixedDim: values["secondaryFixedDim"] as api5.Color?,
        onSecondaryFixed: values["onSecondaryFixed"] as api5.Color?,
        onSecondaryFixedVariant:
            values["onSecondaryFixedVariant"] as api5.Color?,
        tertiary: values["tertiary"] as api5.Color?,
        onTertiary: values["onTertiary"] as api5.Color?,
        tertiaryContainer: values["tertiaryContainer"] as api5.Color?,
        onTertiaryContainer: values["onTertiaryContainer"] as api5.Color?,
        tertiaryFixed: values["tertiaryFixed"] as api5.Color?,
        tertiaryFixedDim: values["tertiaryFixedDim"] as api5.Color?,
        onTertiaryFixed: values["onTertiaryFixed"] as api5.Color?,
        onTertiaryFixedVariant: values["onTertiaryFixedVariant"] as api5.Color?,
        error: values["error"] as api5.Color,
        onError: values["onError"] as api5.Color,
        errorContainer: values["errorContainer"] as api5.Color?,
        onErrorContainer: values["onErrorContainer"] as api5.Color?,
        surface: values["surface"] as api5.Color,
        onSurface: values["onSurface"] as api5.Color,
        surfaceDim: values["surfaceDim"] as api5.Color?,
        surfaceBright: values["surfaceBright"] as api5.Color?,
        surfaceContainerLowest: values["surfaceContainerLowest"] as api5.Color?,
        surfaceContainerLow: values["surfaceContainerLow"] as api5.Color?,
        surfaceContainer: values["surfaceContainer"] as api5.Color?,
        surfaceContainerHigh: values["surfaceContainerHigh"] as api5.Color?,
        surfaceContainerHighest:
            values["surfaceContainerHighest"] as api5.Color?,
        onSurfaceVariant: values["onSurfaceVariant"] as api5.Color?,
        outline: values["outline"] as api5.Color?,
        outlineVariant: values["outlineVariant"] as api5.Color?,
        shadow: values["shadow"] as api5.Color?,
        scrim: values["scrim"] as api5.Color?,
        inverseSurface: values["inverseSurface"] as api5.Color?,
        onInverseSurface: values["onInverseSurface"] as api5.Color?,
        inversePrimary: values["inversePrimary"] as api5.Color?,
        surfaceTint: values["surfaceTint"] as api5.Color?,
        background: values["background"] as api5.Color?,
        onBackground: values["onBackground"] as api5.Color?,
        surfaceVariant: values["surfaceVariant"] as api5.Color?,
      );
    case "fromSeed":
      return api.ColorScheme.fromSeed(
        seedColor: values["seedColor"] as api5.Color,
        brightness: values["brightness"] as api5.Brightness,
        contrastLevel: values["contrastLevel"] as double,
        primary: values["primary"] as api5.Color?,
        onPrimary: values["onPrimary"] as api5.Color?,
        primaryContainer: values["primaryContainer"] as api5.Color?,
        onPrimaryContainer: values["onPrimaryContainer"] as api5.Color?,
        primaryFixed: values["primaryFixed"] as api5.Color?,
        primaryFixedDim: values["primaryFixedDim"] as api5.Color?,
        onPrimaryFixed: values["onPrimaryFixed"] as api5.Color?,
        onPrimaryFixedVariant: values["onPrimaryFixedVariant"] as api5.Color?,
        secondary: values["secondary"] as api5.Color?,
        onSecondary: values["onSecondary"] as api5.Color?,
        secondaryContainer: values["secondaryContainer"] as api5.Color?,
        onSecondaryContainer: values["onSecondaryContainer"] as api5.Color?,
        secondaryFixed: values["secondaryFixed"] as api5.Color?,
        secondaryFixedDim: values["secondaryFixedDim"] as api5.Color?,
        onSecondaryFixed: values["onSecondaryFixed"] as api5.Color?,
        onSecondaryFixedVariant:
            values["onSecondaryFixedVariant"] as api5.Color?,
        tertiary: values["tertiary"] as api5.Color?,
        onTertiary: values["onTertiary"] as api5.Color?,
        tertiaryContainer: values["tertiaryContainer"] as api5.Color?,
        onTertiaryContainer: values["onTertiaryContainer"] as api5.Color?,
        tertiaryFixed: values["tertiaryFixed"] as api5.Color?,
        tertiaryFixedDim: values["tertiaryFixedDim"] as api5.Color?,
        onTertiaryFixed: values["onTertiaryFixed"] as api5.Color?,
        onTertiaryFixedVariant: values["onTertiaryFixedVariant"] as api5.Color?,
        error: values["error"] as api5.Color?,
        onError: values["onError"] as api5.Color?,
        errorContainer: values["errorContainer"] as api5.Color?,
        onErrorContainer: values["onErrorContainer"] as api5.Color?,
        outline: values["outline"] as api5.Color?,
        outlineVariant: values["outlineVariant"] as api5.Color?,
        surface: values["surface"] as api5.Color?,
        onSurface: values["onSurface"] as api5.Color?,
        surfaceDim: values["surfaceDim"] as api5.Color?,
        surfaceBright: values["surfaceBright"] as api5.Color?,
        surfaceContainerLowest: values["surfaceContainerLowest"] as api5.Color?,
        surfaceContainerLow: values["surfaceContainerLow"] as api5.Color?,
        surfaceContainer: values["surfaceContainer"] as api5.Color?,
        surfaceContainerHigh: values["surfaceContainerHigh"] as api5.Color?,
        surfaceContainerHighest:
            values["surfaceContainerHighest"] as api5.Color?,
        onSurfaceVariant: values["onSurfaceVariant"] as api5.Color?,
        inverseSurface: values["inverseSurface"] as api5.Color?,
        onInverseSurface: values["onInverseSurface"] as api5.Color?,
        inversePrimary: values["inversePrimary"] as api5.Color?,
        shadow: values["shadow"] as api5.Color?,
        scrim: values["scrim"] as api5.Color?,
        surfaceTint: values["surfaceTint"] as api5.Color?,
        background: values["background"] as api5.Color?,
        onBackground: values["onBackground"] as api5.Color?,
        surfaceVariant: values["surfaceVariant"] as api5.Color?,
      );
    case "light":
      return Function.apply(api.ColorScheme.light, <Object?>[], <
        Symbol,
        Object?
      >{
        #brightness: values["brightness"] as api5.Brightness,
        if (values.containsKey("primary"))
          #primary: values["primary"] as api5.Color,
        if (values.containsKey("onPrimary"))
          #onPrimary: values["onPrimary"] as api5.Color,
        #primaryContainer: values["primaryContainer"] as api5.Color?,
        #onPrimaryContainer: values["onPrimaryContainer"] as api5.Color?,
        #primaryFixed: values["primaryFixed"] as api5.Color?,
        #primaryFixedDim: values["primaryFixedDim"] as api5.Color?,
        #onPrimaryFixed: values["onPrimaryFixed"] as api5.Color?,
        #onPrimaryFixedVariant: values["onPrimaryFixedVariant"] as api5.Color?,
        if (values.containsKey("secondary"))
          #secondary: values["secondary"] as api5.Color,
        if (values.containsKey("onSecondary"))
          #onSecondary: values["onSecondary"] as api5.Color,
        #secondaryContainer: values["secondaryContainer"] as api5.Color?,
        #onSecondaryContainer: values["onSecondaryContainer"] as api5.Color?,
        #secondaryFixed: values["secondaryFixed"] as api5.Color?,
        #secondaryFixedDim: values["secondaryFixedDim"] as api5.Color?,
        #onSecondaryFixed: values["onSecondaryFixed"] as api5.Color?,
        #onSecondaryFixedVariant:
            values["onSecondaryFixedVariant"] as api5.Color?,
        #tertiary: values["tertiary"] as api5.Color?,
        #onTertiary: values["onTertiary"] as api5.Color?,
        #tertiaryContainer: values["tertiaryContainer"] as api5.Color?,
        #onTertiaryContainer: values["onTertiaryContainer"] as api5.Color?,
        #tertiaryFixed: values["tertiaryFixed"] as api5.Color?,
        #tertiaryFixedDim: values["tertiaryFixedDim"] as api5.Color?,
        #onTertiaryFixed: values["onTertiaryFixed"] as api5.Color?,
        #onTertiaryFixedVariant:
            values["onTertiaryFixedVariant"] as api5.Color?,
        if (values.containsKey("error")) #error: values["error"] as api5.Color,
        if (values.containsKey("onError"))
          #onError: values["onError"] as api5.Color,
        #errorContainer: values["errorContainer"] as api5.Color?,
        #onErrorContainer: values["onErrorContainer"] as api5.Color?,
        if (values.containsKey("surface"))
          #surface: values["surface"] as api5.Color,
        if (values.containsKey("onSurface"))
          #onSurface: values["onSurface"] as api5.Color,
        #surfaceDim: values["surfaceDim"] as api5.Color?,
        #surfaceBright: values["surfaceBright"] as api5.Color?,
        #surfaceContainerLowest:
            values["surfaceContainerLowest"] as api5.Color?,
        #surfaceContainerLow: values["surfaceContainerLow"] as api5.Color?,
        #surfaceContainer: values["surfaceContainer"] as api5.Color?,
        #surfaceContainerHigh: values["surfaceContainerHigh"] as api5.Color?,
        #surfaceContainerHighest:
            values["surfaceContainerHighest"] as api5.Color?,
        #onSurfaceVariant: values["onSurfaceVariant"] as api5.Color?,
        #outline: values["outline"] as api5.Color?,
        #outlineVariant: values["outlineVariant"] as api5.Color?,
        #shadow: values["shadow"] as api5.Color?,
        #scrim: values["scrim"] as api5.Color?,
        #inverseSurface: values["inverseSurface"] as api5.Color?,
        #onInverseSurface: values["onInverseSurface"] as api5.Color?,
        #inversePrimary: values["inversePrimary"] as api5.Color?,
        #surfaceTint: values["surfaceTint"] as api5.Color?,
        if (values.containsKey("background"))
          #background: values["background"] as api5.Color?,
        if (values.containsKey("onBackground"))
          #onBackground: values["onBackground"] as api5.Color?,
        #surfaceVariant: values["surfaceVariant"] as api5.Color?,
      }) as api.ColorScheme;
    case "dark":
      return Function.apply(api.ColorScheme.dark, <Object?>[], <
        Symbol,
        Object?
      >{
        #brightness: values["brightness"] as api5.Brightness,
        if (values.containsKey("primary"))
          #primary: values["primary"] as api5.Color,
        if (values.containsKey("onPrimary"))
          #onPrimary: values["onPrimary"] as api5.Color,
        #primaryContainer: values["primaryContainer"] as api5.Color?,
        #onPrimaryContainer: values["onPrimaryContainer"] as api5.Color?,
        #primaryFixed: values["primaryFixed"] as api5.Color?,
        #primaryFixedDim: values["primaryFixedDim"] as api5.Color?,
        #onPrimaryFixed: values["onPrimaryFixed"] as api5.Color?,
        #onPrimaryFixedVariant: values["onPrimaryFixedVariant"] as api5.Color?,
        if (values.containsKey("secondary"))
          #secondary: values["secondary"] as api5.Color,
        if (values.containsKey("onSecondary"))
          #onSecondary: values["onSecondary"] as api5.Color,
        #secondaryContainer: values["secondaryContainer"] as api5.Color?,
        #onSecondaryContainer: values["onSecondaryContainer"] as api5.Color?,
        #secondaryFixed: values["secondaryFixed"] as api5.Color?,
        #secondaryFixedDim: values["secondaryFixedDim"] as api5.Color?,
        #onSecondaryFixed: values["onSecondaryFixed"] as api5.Color?,
        #onSecondaryFixedVariant:
            values["onSecondaryFixedVariant"] as api5.Color?,
        #tertiary: values["tertiary"] as api5.Color?,
        #onTertiary: values["onTertiary"] as api5.Color?,
        #tertiaryContainer: values["tertiaryContainer"] as api5.Color?,
        #onTertiaryContainer: values["onTertiaryContainer"] as api5.Color?,
        #tertiaryFixed: values["tertiaryFixed"] as api5.Color?,
        #tertiaryFixedDim: values["tertiaryFixedDim"] as api5.Color?,
        #onTertiaryFixed: values["onTertiaryFixed"] as api5.Color?,
        #onTertiaryFixedVariant:
            values["onTertiaryFixedVariant"] as api5.Color?,
        if (values.containsKey("error")) #error: values["error"] as api5.Color,
        if (values.containsKey("onError"))
          #onError: values["onError"] as api5.Color,
        #errorContainer: values["errorContainer"] as api5.Color?,
        #onErrorContainer: values["onErrorContainer"] as api5.Color?,
        if (values.containsKey("surface"))
          #surface: values["surface"] as api5.Color,
        if (values.containsKey("onSurface"))
          #onSurface: values["onSurface"] as api5.Color,
        #surfaceDim: values["surfaceDim"] as api5.Color?,
        #surfaceBright: values["surfaceBright"] as api5.Color?,
        #surfaceContainerLowest:
            values["surfaceContainerLowest"] as api5.Color?,
        #surfaceContainerLow: values["surfaceContainerLow"] as api5.Color?,
        #surfaceContainer: values["surfaceContainer"] as api5.Color?,
        #surfaceContainerHigh: values["surfaceContainerHigh"] as api5.Color?,
        #surfaceContainerHighest:
            values["surfaceContainerHighest"] as api5.Color?,
        #onSurfaceVariant: values["onSurfaceVariant"] as api5.Color?,
        #outline: values["outline"] as api5.Color?,
        #outlineVariant: values["outlineVariant"] as api5.Color?,
        #shadow: values["shadow"] as api5.Color?,
        #scrim: values["scrim"] as api5.Color?,
        #inverseSurface: values["inverseSurface"] as api5.Color?,
        #onInverseSurface: values["onInverseSurface"] as api5.Color?,
        #inversePrimary: values["inversePrimary"] as api5.Color?,
        #surfaceTint: values["surfaceTint"] as api5.Color?,
        if (values.containsKey("background"))
          #background: values["background"] as api5.Color?,
        if (values.containsKey("onBackground"))
          #onBackground: values["onBackground"] as api5.Color?,
        #surfaceVariant: values["surfaceVariant"] as api5.Color?,
      }) as api.ColorScheme;
    case "highContrastLight":
      return Function.apply(api.ColorScheme.highContrastLight, <Object?>[], <
        Symbol,
        Object?
      >{
        #brightness: values["brightness"] as api5.Brightness,
        if (values.containsKey("primary"))
          #primary: values["primary"] as api5.Color,
        if (values.containsKey("onPrimary"))
          #onPrimary: values["onPrimary"] as api5.Color,
        #primaryContainer: values["primaryContainer"] as api5.Color?,
        #onPrimaryContainer: values["onPrimaryContainer"] as api5.Color?,
        #primaryFixed: values["primaryFixed"] as api5.Color?,
        #primaryFixedDim: values["primaryFixedDim"] as api5.Color?,
        #onPrimaryFixed: values["onPrimaryFixed"] as api5.Color?,
        #onPrimaryFixedVariant: values["onPrimaryFixedVariant"] as api5.Color?,
        if (values.containsKey("secondary"))
          #secondary: values["secondary"] as api5.Color,
        if (values.containsKey("onSecondary"))
          #onSecondary: values["onSecondary"] as api5.Color,
        #secondaryContainer: values["secondaryContainer"] as api5.Color?,
        #onSecondaryContainer: values["onSecondaryContainer"] as api5.Color?,
        #secondaryFixed: values["secondaryFixed"] as api5.Color?,
        #secondaryFixedDim: values["secondaryFixedDim"] as api5.Color?,
        #onSecondaryFixed: values["onSecondaryFixed"] as api5.Color?,
        #onSecondaryFixedVariant:
            values["onSecondaryFixedVariant"] as api5.Color?,
        #tertiary: values["tertiary"] as api5.Color?,
        #onTertiary: values["onTertiary"] as api5.Color?,
        #tertiaryContainer: values["tertiaryContainer"] as api5.Color?,
        #onTertiaryContainer: values["onTertiaryContainer"] as api5.Color?,
        #tertiaryFixed: values["tertiaryFixed"] as api5.Color?,
        #tertiaryFixedDim: values["tertiaryFixedDim"] as api5.Color?,
        #onTertiaryFixed: values["onTertiaryFixed"] as api5.Color?,
        #onTertiaryFixedVariant:
            values["onTertiaryFixedVariant"] as api5.Color?,
        if (values.containsKey("error")) #error: values["error"] as api5.Color,
        if (values.containsKey("onError"))
          #onError: values["onError"] as api5.Color,
        #errorContainer: values["errorContainer"] as api5.Color?,
        #onErrorContainer: values["onErrorContainer"] as api5.Color?,
        if (values.containsKey("surface"))
          #surface: values["surface"] as api5.Color,
        if (values.containsKey("onSurface"))
          #onSurface: values["onSurface"] as api5.Color,
        #surfaceDim: values["surfaceDim"] as api5.Color?,
        #surfaceBright: values["surfaceBright"] as api5.Color?,
        #surfaceContainerLowest:
            values["surfaceContainerLowest"] as api5.Color?,
        #surfaceContainerLow: values["surfaceContainerLow"] as api5.Color?,
        #surfaceContainer: values["surfaceContainer"] as api5.Color?,
        #surfaceContainerHigh: values["surfaceContainerHigh"] as api5.Color?,
        #surfaceContainerHighest:
            values["surfaceContainerHighest"] as api5.Color?,
        #onSurfaceVariant: values["onSurfaceVariant"] as api5.Color?,
        #outline: values["outline"] as api5.Color?,
        #outlineVariant: values["outlineVariant"] as api5.Color?,
        #shadow: values["shadow"] as api5.Color?,
        #scrim: values["scrim"] as api5.Color?,
        #inverseSurface: values["inverseSurface"] as api5.Color?,
        #onInverseSurface: values["onInverseSurface"] as api5.Color?,
        #inversePrimary: values["inversePrimary"] as api5.Color?,
        #surfaceTint: values["surfaceTint"] as api5.Color?,
        if (values.containsKey("background"))
          #background: values["background"] as api5.Color?,
        if (values.containsKey("onBackground"))
          #onBackground: values["onBackground"] as api5.Color?,
        #surfaceVariant: values["surfaceVariant"] as api5.Color?,
      }) as api.ColorScheme;
    case "highContrastDark":
      return Function.apply(api.ColorScheme.highContrastDark, <Object?>[], <
        Symbol,
        Object?
      >{
        #brightness: values["brightness"] as api5.Brightness,
        if (values.containsKey("primary"))
          #primary: values["primary"] as api5.Color,
        if (values.containsKey("onPrimary"))
          #onPrimary: values["onPrimary"] as api5.Color,
        #primaryContainer: values["primaryContainer"] as api5.Color?,
        #onPrimaryContainer: values["onPrimaryContainer"] as api5.Color?,
        #primaryFixed: values["primaryFixed"] as api5.Color?,
        #primaryFixedDim: values["primaryFixedDim"] as api5.Color?,
        #onPrimaryFixed: values["onPrimaryFixed"] as api5.Color?,
        #onPrimaryFixedVariant: values["onPrimaryFixedVariant"] as api5.Color?,
        if (values.containsKey("secondary"))
          #secondary: values["secondary"] as api5.Color,
        if (values.containsKey("onSecondary"))
          #onSecondary: values["onSecondary"] as api5.Color,
        #secondaryContainer: values["secondaryContainer"] as api5.Color?,
        #onSecondaryContainer: values["onSecondaryContainer"] as api5.Color?,
        #secondaryFixed: values["secondaryFixed"] as api5.Color?,
        #secondaryFixedDim: values["secondaryFixedDim"] as api5.Color?,
        #onSecondaryFixed: values["onSecondaryFixed"] as api5.Color?,
        #onSecondaryFixedVariant:
            values["onSecondaryFixedVariant"] as api5.Color?,
        #tertiary: values["tertiary"] as api5.Color?,
        #onTertiary: values["onTertiary"] as api5.Color?,
        #tertiaryContainer: values["tertiaryContainer"] as api5.Color?,
        #onTertiaryContainer: values["onTertiaryContainer"] as api5.Color?,
        #tertiaryFixed: values["tertiaryFixed"] as api5.Color?,
        #tertiaryFixedDim: values["tertiaryFixedDim"] as api5.Color?,
        #onTertiaryFixed: values["onTertiaryFixed"] as api5.Color?,
        #onTertiaryFixedVariant:
            values["onTertiaryFixedVariant"] as api5.Color?,
        if (values.containsKey("error")) #error: values["error"] as api5.Color,
        if (values.containsKey("onError"))
          #onError: values["onError"] as api5.Color,
        #errorContainer: values["errorContainer"] as api5.Color?,
        #onErrorContainer: values["onErrorContainer"] as api5.Color?,
        if (values.containsKey("surface"))
          #surface: values["surface"] as api5.Color,
        if (values.containsKey("onSurface"))
          #onSurface: values["onSurface"] as api5.Color,
        #surfaceDim: values["surfaceDim"] as api5.Color?,
        #surfaceBright: values["surfaceBright"] as api5.Color?,
        #surfaceContainerLowest:
            values["surfaceContainerLowest"] as api5.Color?,
        #surfaceContainerLow: values["surfaceContainerLow"] as api5.Color?,
        #surfaceContainer: values["surfaceContainer"] as api5.Color?,
        #surfaceContainerHigh: values["surfaceContainerHigh"] as api5.Color?,
        #surfaceContainerHighest:
            values["surfaceContainerHighest"] as api5.Color?,
        #onSurfaceVariant: values["onSurfaceVariant"] as api5.Color?,
        #outline: values["outline"] as api5.Color?,
        #outlineVariant: values["outlineVariant"] as api5.Color?,
        #shadow: values["shadow"] as api5.Color?,
        #scrim: values["scrim"] as api5.Color?,
        #inverseSurface: values["inverseSurface"] as api5.Color?,
        #onInverseSurface: values["onInverseSurface"] as api5.Color?,
        #inversePrimary: values["inversePrimary"] as api5.Color?,
        #surfaceTint: values["surfaceTint"] as api5.Color?,
        if (values.containsKey("background"))
          #background: values["background"] as api5.Color?,
        if (values.containsKey("onBackground"))
          #onBackground: values["onBackground"] as api5.Color?,
        #surfaceVariant: values["surfaceVariant"] as api5.Color?,
      }) as api.ColorScheme;
    case "fromSwatch":
      return api.ColorScheme.fromSwatch(
        accentColor: values["accentColor"] as api5.Color?,
        cardColor: values["cardColor"] as api5.Color?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        errorColor: values["errorColor"] as api5.Color?,
        brightness: values["brightness"] as api5.Brightness,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isDivider(Object value) => value is api.Divider;
Object? _Divider_createBorderSide(Map<String, Object?> values) {
  return api.Divider.createBorderSide(
    values["context"] as api1.BuildContext?,
    color: values["color"] as api5.Color?,
    width: values["width"] as double?,
  );
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
        key: values["key"] as api6.Key?,
        height: values["height"] as double?,
        thickness: values["thickness"] as double?,
        indent: values["indent"] as double?,
        endIndent: values["endIndent"] as double?,
        color: values["color"] as api5.Color?,
        radius: values["radius"] as api2.BorderRadiusGeometry?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isDrawer(Object value) => value is api.Drawer;

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
        key: values["key"] as api6.Key?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        elevation: values["elevation"] as double?,
        shadowColor: values["shadowColor"] as api5.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
        shape: values["shape"] as api2.ShapeBorder?,
        width: values["width"] as double?,
        child: values["child"] as api1.Widget?,
        semanticLabel: values["semanticLabel"] as String?,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isElevatedButton(Object value) => value is api.ElevatedButton;
Object? _ElevatedButton_styleFrom(Map<String, Object?> values) {
  return api.ElevatedButton.styleFrom(
    alignment: values["alignment"] as api2.AlignmentGeometry?,
    animationDuration: values["animationDuration"] as api8.Duration?,
    backgroundBuilder:
        values["backgroundBuilder"]
            as api1.Widget Function(
              api1.BuildContext context,
              Set<api1.WidgetState> states,
              api1.Widget? child,
            )?,
    backgroundColor: values["backgroundColor"] as api5.Color?,
    disabledBackgroundColor: values["disabledBackgroundColor"] as api5.Color?,
    disabledForegroundColor: values["disabledForegroundColor"] as api5.Color?,
    disabledIconColor: values["disabledIconColor"] as api5.Color?,
    disabledMouseCursor: values["disabledMouseCursor"] as api9.MouseCursor?,
    elevation: values["elevation"] as double?,
    enableFeedback: values["enableFeedback"] as bool?,
    enabledMouseCursor: values["enabledMouseCursor"] as api9.MouseCursor?,
    fixedSize: values["fixedSize"] as api5.Size?,
    foregroundBuilder:
        values["foregroundBuilder"]
            as api1.Widget Function(
              api1.BuildContext context,
              Set<api1.WidgetState> states,
              api1.Widget? child,
            )?,
    foregroundColor: values["foregroundColor"] as api5.Color?,
    iconColor: values["iconColor"] as api5.Color?,
    iconSize: values["iconSize"] as double?,
    maximumSize: values["maximumSize"] as api5.Size?,
    minimumSize: values["minimumSize"] as api5.Size?,
    overlayColor: values["overlayColor"] as api5.Color?,
    padding: values["padding"] as api2.EdgeInsetsGeometry?,
    shadowColor: values["shadowColor"] as api5.Color?,
    shape: values["shape"] as api2.OutlinedBorder?,
    side: values["side"] as api2.BorderSide?,
    surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
    textStyle: values["textStyle"] as api2.TextStyle?,
    visualDensity: values["visualDensity"] as api.VisualDensity?,
  );
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
        key: values["key"] as api6.Key?,
        onPressed: values["onPressed"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        style: values["style"] as api.ButtonStyle?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        child: values["child"] as api1.Widget?,
      );
    case "icon":
      return api.ElevatedButton.icon(
        key: values["key"] as api6.Key?,
        onPressed: values["onPressed"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        style: values["style"] as api.ButtonStyle?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        icon: values["icon"] as api1.Widget?,
        label: values["label"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFilledButton(Object value) => value is api.FilledButton;
Object? _FilledButton_styleFrom(Map<String, Object?> values) {
  return api.FilledButton.styleFrom(
    alignment: values["alignment"] as api2.AlignmentGeometry?,
    animationDuration: values["animationDuration"] as api8.Duration?,
    backgroundBuilder:
        values["backgroundBuilder"]
            as api1.Widget Function(
              api1.BuildContext context,
              Set<api1.WidgetState> states,
              api1.Widget? child,
            )?,
    backgroundColor: values["backgroundColor"] as api5.Color?,
    disabledBackgroundColor: values["disabledBackgroundColor"] as api5.Color?,
    disabledForegroundColor: values["disabledForegroundColor"] as api5.Color?,
    disabledIconColor: values["disabledIconColor"] as api5.Color?,
    disabledMouseCursor: values["disabledMouseCursor"] as api9.MouseCursor?,
    elevation: values["elevation"] as double?,
    enableFeedback: values["enableFeedback"] as bool?,
    enabledMouseCursor: values["enabledMouseCursor"] as api9.MouseCursor?,
    fixedSize: values["fixedSize"] as api5.Size?,
    foregroundBuilder:
        values["foregroundBuilder"]
            as api1.Widget Function(
              api1.BuildContext context,
              Set<api1.WidgetState> states,
              api1.Widget? child,
            )?,
    foregroundColor: values["foregroundColor"] as api5.Color?,
    iconColor: values["iconColor"] as api5.Color?,
    iconSize: values["iconSize"] as double?,
    maximumSize: values["maximumSize"] as api5.Size?,
    minimumSize: values["minimumSize"] as api5.Size?,
    overlayColor: values["overlayColor"] as api5.Color?,
    padding: values["padding"] as api2.EdgeInsetsGeometry?,
    shadowColor: values["shadowColor"] as api5.Color?,
    shape: values["shape"] as api2.OutlinedBorder?,
    side: values["side"] as api2.BorderSide?,
    surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
    textStyle: values["textStyle"] as api2.TextStyle?,
    visualDensity: values["visualDensity"] as api.VisualDensity?,
  );
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
        key: values["key"] as api6.Key?,
        onPressed: values["onPressed"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        style: values["style"] as api.ButtonStyle?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        child: values["child"] as api1.Widget?,
      );
    case "icon":
      return api.FilledButton.icon(
        key: values["key"] as api6.Key?,
        onPressed: values["onPressed"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        style: values["style"] as api.ButtonStyle?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        icon: values["icon"] as api1.Widget?,
        label: values["label"] as api1.Widget,
      );
    case "tonal":
      return api.FilledButton.tonal(
        key: values["key"] as api6.Key?,
        onPressed: values["onPressed"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        style: values["style"] as api.ButtonStyle?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        child: values["child"] as api1.Widget?,
      );
    case "tonalIcon":
      return api.FilledButton.tonalIcon(
        key: values["key"] as api6.Key?,
        onPressed: values["onPressed"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        style: values["style"] as api.ButtonStyle?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        icon: values["icon"] as api1.Widget?,
        label: values["label"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFloatingActionButton(Object value) => value is api.FloatingActionButton;

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
      if (!values.containsKey("heroTag")) {
        return api.FloatingActionButton(
          key: values["key"] as api6.Key?,
          child: values["child"] as api1.Widget?,
          tooltip: values["tooltip"] as String?,
          foregroundColor: values["foregroundColor"] as api5.Color?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          focusColor: values["focusColor"] as api5.Color?,
          hoverColor: values["hoverColor"] as api5.Color?,
          splashColor: values["splashColor"] as api5.Color?,
          elevation: values["elevation"] as double?,
          focusElevation: values["focusElevation"] as double?,
          hoverElevation: values["hoverElevation"] as double?,
          highlightElevation: values["highlightElevation"] as double?,
          disabledElevation: values["disabledElevation"] as double?,
          onPressed: values["onPressed"] as void Function()?,
          mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
          mini: values["mini"] as bool,
          shape: values["shape"] as api2.ShapeBorder?,
          clipBehavior: values["clipBehavior"] as api5.Clip,
          focusNode: values["focusNode"] as api1.FocusNode?,
          autofocus: values["autofocus"] as bool,
          isExtended: values["isExtended"] as bool,
          enableFeedback: values["enableFeedback"] as bool?,
        );
      }
      return api.FloatingActionButton(
        key: values["key"] as api6.Key?,
        child: values["child"] as api1.Widget?,
        tooltip: values["tooltip"] as String?,
        foregroundColor: values["foregroundColor"] as api5.Color?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        splashColor: values["splashColor"] as api5.Color?,
        heroTag: values["heroTag"],
        elevation: values["elevation"] as double?,
        focusElevation: values["focusElevation"] as double?,
        hoverElevation: values["hoverElevation"] as double?,
        highlightElevation: values["highlightElevation"] as double?,
        disabledElevation: values["disabledElevation"] as double?,
        onPressed: values["onPressed"] as void Function()?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        mini: values["mini"] as bool,
        shape: values["shape"] as api2.ShapeBorder?,
        clipBehavior: values["clipBehavior"] as api5.Clip,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        isExtended: values["isExtended"] as bool,
        enableFeedback: values["enableFeedback"] as bool?,
      );
    case "small":
      if (!values.containsKey("heroTag")) {
        return api.FloatingActionButton.small(
          key: values["key"] as api6.Key?,
          child: values["child"] as api1.Widget?,
          tooltip: values["tooltip"] as String?,
          foregroundColor: values["foregroundColor"] as api5.Color?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          focusColor: values["focusColor"] as api5.Color?,
          hoverColor: values["hoverColor"] as api5.Color?,
          splashColor: values["splashColor"] as api5.Color?,
          elevation: values["elevation"] as double?,
          focusElevation: values["focusElevation"] as double?,
          hoverElevation: values["hoverElevation"] as double?,
          highlightElevation: values["highlightElevation"] as double?,
          disabledElevation: values["disabledElevation"] as double?,
          onPressed: values["onPressed"] as void Function()?,
          mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
          shape: values["shape"] as api2.ShapeBorder?,
          clipBehavior: values["clipBehavior"] as api5.Clip,
          focusNode: values["focusNode"] as api1.FocusNode?,
          autofocus: values["autofocus"] as bool,
          enableFeedback: values["enableFeedback"] as bool?,
        );
      }
      return api.FloatingActionButton.small(
        key: values["key"] as api6.Key?,
        child: values["child"] as api1.Widget?,
        tooltip: values["tooltip"] as String?,
        foregroundColor: values["foregroundColor"] as api5.Color?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        splashColor: values["splashColor"] as api5.Color?,
        heroTag: values["heroTag"],
        elevation: values["elevation"] as double?,
        focusElevation: values["focusElevation"] as double?,
        hoverElevation: values["hoverElevation"] as double?,
        highlightElevation: values["highlightElevation"] as double?,
        disabledElevation: values["disabledElevation"] as double?,
        onPressed: values["onPressed"] as void Function()?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        shape: values["shape"] as api2.ShapeBorder?,
        clipBehavior: values["clipBehavior"] as api5.Clip,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        enableFeedback: values["enableFeedback"] as bool?,
      );
    case "large":
      if (!values.containsKey("heroTag")) {
        return api.FloatingActionButton.large(
          key: values["key"] as api6.Key?,
          child: values["child"] as api1.Widget?,
          tooltip: values["tooltip"] as String?,
          foregroundColor: values["foregroundColor"] as api5.Color?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          focusColor: values["focusColor"] as api5.Color?,
          hoverColor: values["hoverColor"] as api5.Color?,
          splashColor: values["splashColor"] as api5.Color?,
          elevation: values["elevation"] as double?,
          focusElevation: values["focusElevation"] as double?,
          hoverElevation: values["hoverElevation"] as double?,
          highlightElevation: values["highlightElevation"] as double?,
          disabledElevation: values["disabledElevation"] as double?,
          onPressed: values["onPressed"] as void Function()?,
          mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
          shape: values["shape"] as api2.ShapeBorder?,
          clipBehavior: values["clipBehavior"] as api5.Clip,
          focusNode: values["focusNode"] as api1.FocusNode?,
          autofocus: values["autofocus"] as bool,
          enableFeedback: values["enableFeedback"] as bool?,
        );
      }
      return api.FloatingActionButton.large(
        key: values["key"] as api6.Key?,
        child: values["child"] as api1.Widget?,
        tooltip: values["tooltip"] as String?,
        foregroundColor: values["foregroundColor"] as api5.Color?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        splashColor: values["splashColor"] as api5.Color?,
        heroTag: values["heroTag"],
        elevation: values["elevation"] as double?,
        focusElevation: values["focusElevation"] as double?,
        hoverElevation: values["hoverElevation"] as double?,
        highlightElevation: values["highlightElevation"] as double?,
        disabledElevation: values["disabledElevation"] as double?,
        onPressed: values["onPressed"] as void Function()?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        shape: values["shape"] as api2.ShapeBorder?,
        clipBehavior: values["clipBehavior"] as api5.Clip,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        enableFeedback: values["enableFeedback"] as bool?,
      );
    case "extended":
      if (!values.containsKey("heroTag")) {
        return api.FloatingActionButton.extended(
          key: values["key"] as api6.Key?,
          tooltip: values["tooltip"] as String?,
          foregroundColor: values["foregroundColor"] as api5.Color?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          focusColor: values["focusColor"] as api5.Color?,
          hoverColor: values["hoverColor"] as api5.Color?,
          elevation: values["elevation"] as double?,
          focusElevation: values["focusElevation"] as double?,
          hoverElevation: values["hoverElevation"] as double?,
          splashColor: values["splashColor"] as api5.Color?,
          highlightElevation: values["highlightElevation"] as double?,
          disabledElevation: values["disabledElevation"] as double?,
          onPressed: values["onPressed"] as void Function()?,
          mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
          shape: values["shape"] as api2.ShapeBorder?,
          isExtended: values["isExtended"] as bool,
          clipBehavior: values["clipBehavior"] as api5.Clip,
          focusNode: values["focusNode"] as api1.FocusNode?,
          autofocus: values["autofocus"] as bool,
          extendedIconLabelSpacing:
              values["extendedIconLabelSpacing"] as double?,
          extendedPadding:
              values["extendedPadding"] as api2.EdgeInsetsGeometry?,
          extendedTextStyle: values["extendedTextStyle"] as api2.TextStyle?,
          icon: values["icon"] as api1.Widget?,
          label: values["label"] as api1.Widget,
          enableFeedback: values["enableFeedback"] as bool?,
        );
      }
      return api.FloatingActionButton.extended(
        key: values["key"] as api6.Key?,
        tooltip: values["tooltip"] as String?,
        foregroundColor: values["foregroundColor"] as api5.Color?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        heroTag: values["heroTag"],
        elevation: values["elevation"] as double?,
        focusElevation: values["focusElevation"] as double?,
        hoverElevation: values["hoverElevation"] as double?,
        splashColor: values["splashColor"] as api5.Color?,
        highlightElevation: values["highlightElevation"] as double?,
        disabledElevation: values["disabledElevation"] as double?,
        onPressed: values["onPressed"] as void Function()?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        shape: values["shape"] as api2.ShapeBorder?,
        isExtended: values["isExtended"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        extendedIconLabelSpacing: values["extendedIconLabelSpacing"] as double?,
        extendedPadding: values["extendedPadding"] as api2.EdgeInsetsGeometry?,
        extendedTextStyle: values["extendedTextStyle"] as api2.TextStyle?,
        icon: values["icon"] as api1.Widget?,
        label: values["label"] as api1.Widget,
        enableFeedback: values["enableFeedback"] as bool?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isIconButton(Object value) => value is api.IconButton;
Object? _IconButton_styleFrom(Map<String, Object?> values) {
  return api.IconButton.styleFrom(
    alignment: values["alignment"] as api2.AlignmentGeometry?,
    animationDuration: values["animationDuration"] as api8.Duration?,
    backgroundColor: values["backgroundColor"] as api5.Color?,
    disabledBackgroundColor: values["disabledBackgroundColor"] as api5.Color?,
    disabledForegroundColor: values["disabledForegroundColor"] as api5.Color?,
    disabledMouseCursor: values["disabledMouseCursor"] as api9.MouseCursor?,
    elevation: values["elevation"] as double?,
    enableFeedback: values["enableFeedback"] as bool?,
    enabledMouseCursor: values["enabledMouseCursor"] as api9.MouseCursor?,
    fixedSize: values["fixedSize"] as api5.Size?,
    focusColor: values["focusColor"] as api5.Color?,
    foregroundColor: values["foregroundColor"] as api5.Color?,
    highlightColor: values["highlightColor"] as api5.Color?,
    hoverColor: values["hoverColor"] as api5.Color?,
    iconSize: values["iconSize"] as double?,
    maximumSize: values["maximumSize"] as api5.Size?,
    minimumSize: values["minimumSize"] as api5.Size?,
    overlayColor: values["overlayColor"] as api5.Color?,
    padding: values["padding"] as api2.EdgeInsetsGeometry?,
    shadowColor: values["shadowColor"] as api5.Color?,
    shape: values["shape"] as api2.OutlinedBorder?,
    side: values["side"] as api2.BorderSide?,
    surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
    visualDensity: values["visualDensity"] as api.VisualDensity?,
  );
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
        key: values["key"] as api6.Key?,
        iconSize: values["iconSize"] as double?,
        visualDensity: values["visualDensity"] as api.VisualDensity?,
        padding: values["padding"] as api2.EdgeInsetsGeometry?,
        alignment: values["alignment"] as api2.AlignmentGeometry?,
        splashRadius: values["splashRadius"] as double?,
        color: values["color"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        highlightColor: values["highlightColor"] as api5.Color?,
        splashColor: values["splashColor"] as api5.Color?,
        disabledColor: values["disabledColor"] as api5.Color?,
        onPressed: values["onPressed"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onLongPress: values["onLongPress"] as void Function()?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        tooltip: values["tooltip"] as String?,
        enableFeedback: values["enableFeedback"] as bool?,
        constraints: values["constraints"] as api4.BoxConstraints?,
        style: values["style"] as api.ButtonStyle?,
        isSelected: values["isSelected"] as bool?,
        selectedIcon: values["selectedIcon"] as api1.Widget?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        icon: values["icon"] as api1.Widget,
      );
    case "filled":
      return api.IconButton.filled(
        key: values["key"] as api6.Key?,
        iconSize: values["iconSize"] as double?,
        visualDensity: values["visualDensity"] as api.VisualDensity?,
        padding: values["padding"] as api2.EdgeInsetsGeometry?,
        alignment: values["alignment"] as api2.AlignmentGeometry?,
        splashRadius: values["splashRadius"] as double?,
        color: values["color"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        highlightColor: values["highlightColor"] as api5.Color?,
        splashColor: values["splashColor"] as api5.Color?,
        disabledColor: values["disabledColor"] as api5.Color?,
        onPressed: values["onPressed"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onLongPress: values["onLongPress"] as void Function()?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        tooltip: values["tooltip"] as String?,
        enableFeedback: values["enableFeedback"] as bool?,
        constraints: values["constraints"] as api4.BoxConstraints?,
        style: values["style"] as api.ButtonStyle?,
        isSelected: values["isSelected"] as bool?,
        selectedIcon: values["selectedIcon"] as api1.Widget?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        icon: values["icon"] as api1.Widget,
      );
    case "filledTonal":
      return api.IconButton.filledTonal(
        key: values["key"] as api6.Key?,
        iconSize: values["iconSize"] as double?,
        visualDensity: values["visualDensity"] as api.VisualDensity?,
        padding: values["padding"] as api2.EdgeInsetsGeometry?,
        alignment: values["alignment"] as api2.AlignmentGeometry?,
        splashRadius: values["splashRadius"] as double?,
        color: values["color"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        highlightColor: values["highlightColor"] as api5.Color?,
        splashColor: values["splashColor"] as api5.Color?,
        disabledColor: values["disabledColor"] as api5.Color?,
        onPressed: values["onPressed"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onLongPress: values["onLongPress"] as void Function()?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        tooltip: values["tooltip"] as String?,
        enableFeedback: values["enableFeedback"] as bool?,
        constraints: values["constraints"] as api4.BoxConstraints?,
        style: values["style"] as api.ButtonStyle?,
        isSelected: values["isSelected"] as bool?,
        selectedIcon: values["selectedIcon"] as api1.Widget?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        icon: values["icon"] as api1.Widget,
      );
    case "outlined":
      return api.IconButton.outlined(
        key: values["key"] as api6.Key?,
        iconSize: values["iconSize"] as double?,
        visualDensity: values["visualDensity"] as api.VisualDensity?,
        padding: values["padding"] as api2.EdgeInsetsGeometry?,
        alignment: values["alignment"] as api2.AlignmentGeometry?,
        splashRadius: values["splashRadius"] as double?,
        color: values["color"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        highlightColor: values["highlightColor"] as api5.Color?,
        splashColor: values["splashColor"] as api5.Color?,
        disabledColor: values["disabledColor"] as api5.Color?,
        onPressed: values["onPressed"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onLongPress: values["onLongPress"] as void Function()?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        tooltip: values["tooltip"] as String?,
        enableFeedback: values["enableFeedback"] as bool?,
        constraints: values["constraints"] as api4.BoxConstraints?,
        style: values["style"] as api.ButtonStyle?,
        isSelected: values["isSelected"] as bool?,
        selectedIcon: values["selectedIcon"] as api1.Widget?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        icon: values["icon"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isInkWell(Object value) => value is api.InkWell;

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
        key: values["key"] as api6.Key?,
        child: values["child"] as api1.Widget?,
        onTap: values["onTap"] as void Function()?,
        onDoubleTap: values["onDoubleTap"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onLongPressUp: values["onLongPressUp"] as void Function()?,
        onTapDown:
            values["onTapDown"] as void Function(api7.TapDownDetails details)?,
        onTapUp: values["onTapUp"] as void Function(api7.TapUpDetails details)?,
        onTapCancel: values["onTapCancel"] as void Function()?,
        onSecondaryTap: values["onSecondaryTap"] as void Function()?,
        onSecondaryTapUp:
            values["onSecondaryTapUp"]
                as void Function(api7.TapUpDetails details)?,
        onSecondaryTapDown:
            values["onSecondaryTapDown"]
                as void Function(api7.TapDownDetails details)?,
        onSecondaryTapCancel:
            values["onSecondaryTapCancel"] as void Function()?,
        onHighlightChanged:
            values["onHighlightChanged"] as void Function(bool value)?,
        onHover: values["onHover"] as void Function(bool value)?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        highlightColor: values["highlightColor"] as api5.Color?,
        overlayColor:
            values["overlayColor"] as api1.WidgetStateProperty<api5.Color?>?,
        splashColor: values["splashColor"] as api5.Color?,
        radius: values["radius"] as double?,
        borderRadius: values["borderRadius"] as api2.BorderRadius?,
        customBorder: values["customBorder"] as api2.ShapeBorder?,
        enableFeedback: values["enableFeedback"] as bool,
        excludeFromSemantics: values["excludeFromSemantics"] as bool,
        focusNode: values["focusNode"] as api1.FocusNode?,
        canRequestFocus: values["canRequestFocus"] as bool,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        autofocus: values["autofocus"] as bool,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        hoverDuration: values["hoverDuration"] as api8.Duration?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isInputDecoration(Object value) => value is api.InputDecoration;
Object? _InputDecoration_icon(Object value) =>
    (value as api.InputDecoration).icon;
Object? _InputDecoration_iconColor(Object value) =>
    (value as api.InputDecoration).iconColor;
Object? _InputDecoration_label(Object value) =>
    (value as api.InputDecoration).label;
Object? _InputDecoration_labelText(Object value) =>
    (value as api.InputDecoration).labelText;
Object? _InputDecoration_labelStyle(Object value) =>
    (value as api.InputDecoration).labelStyle;
Object? _InputDecoration_floatingLabelStyle(Object value) =>
    (value as api.InputDecoration).floatingLabelStyle;
Object? _InputDecoration_helper(Object value) =>
    (value as api.InputDecoration).helper;
Object? _InputDecoration_helperText(Object value) =>
    (value as api.InputDecoration).helperText;
Object? _InputDecoration_helperStyle(Object value) =>
    (value as api.InputDecoration).helperStyle;
Object? _InputDecoration_helperMaxLines(Object value) =>
    (value as api.InputDecoration).helperMaxLines;
Object? _InputDecoration_hintText(Object value) =>
    (value as api.InputDecoration).hintText;
Object? _InputDecoration_hint(Object value) =>
    (value as api.InputDecoration).hint;
Object? _InputDecoration_hintStyle(Object value) =>
    (value as api.InputDecoration).hintStyle;
Object? _InputDecoration_hintTextDirection(Object value) =>
    (value as api.InputDecoration).hintTextDirection;
Object? _InputDecoration_hintMaxLines(Object value) =>
    (value as api.InputDecoration).hintMaxLines;
Object? _InputDecoration_hintFadeDuration(Object value) =>
    (value as api.InputDecoration).hintFadeDuration;
Object? _InputDecoration_maintainHintHeight(Object value) =>
    (value as api.InputDecoration).maintainHintHeight;
Object? _InputDecoration_maintainHintSize(Object value) =>
    (value as api.InputDecoration).maintainHintSize;
Object? _InputDecoration_maintainLabelSize(Object value) =>
    (value as api.InputDecoration).maintainLabelSize;
Object? _InputDecoration_error(Object value) =>
    (value as api.InputDecoration).error;
Object? _InputDecoration_errorText(Object value) =>
    (value as api.InputDecoration).errorText;
Object? _InputDecoration_errorStyle(Object value) =>
    (value as api.InputDecoration).errorStyle;
Object? _InputDecoration_errorMaxLines(Object value) =>
    (value as api.InputDecoration).errorMaxLines;
Object? _InputDecoration_isDense(Object value) =>
    (value as api.InputDecoration).isDense;
Object? _InputDecoration_contentPadding(Object value) =>
    (value as api.InputDecoration).contentPadding;
Object? _InputDecoration_isCollapsed(Object value) =>
    (value as api.InputDecoration).isCollapsed;
Object? _InputDecoration_prefixIcon(Object value) =>
    (value as api.InputDecoration).prefixIcon;
Object? _InputDecoration_prefixIconConstraints(Object value) =>
    (value as api.InputDecoration).prefixIconConstraints;
Object? _InputDecoration_prefix(Object value) =>
    (value as api.InputDecoration).prefix;
Object? _InputDecoration_prefixText(Object value) =>
    (value as api.InputDecoration).prefixText;
Object? _InputDecoration_prefixStyle(Object value) =>
    (value as api.InputDecoration).prefixStyle;
Object? _InputDecoration_prefixIconColor(Object value) =>
    (value as api.InputDecoration).prefixIconColor;
Object? _InputDecoration_suffixIcon(Object value) =>
    (value as api.InputDecoration).suffixIcon;
Object? _InputDecoration_suffix(Object value) =>
    (value as api.InputDecoration).suffix;
Object? _InputDecoration_suffixText(Object value) =>
    (value as api.InputDecoration).suffixText;
Object? _InputDecoration_suffixStyle(Object value) =>
    (value as api.InputDecoration).suffixStyle;
Object? _InputDecoration_suffixIconColor(Object value) =>
    (value as api.InputDecoration).suffixIconColor;
Object? _InputDecoration_suffixIconConstraints(Object value) =>
    (value as api.InputDecoration).suffixIconConstraints;
Object? _InputDecoration_counterText(Object value) =>
    (value as api.InputDecoration).counterText;
Object? _InputDecoration_counter(Object value) =>
    (value as api.InputDecoration).counter;
Object? _InputDecoration_counterStyle(Object value) =>
    (value as api.InputDecoration).counterStyle;
Object? _InputDecoration_filled(Object value) =>
    (value as api.InputDecoration).filled;
Object? _InputDecoration_fillColor(Object value) =>
    (value as api.InputDecoration).fillColor;
Object? _InputDecoration_focusColor(Object value) =>
    (value as api.InputDecoration).focusColor;
Object? _InputDecoration_hoverColor(Object value) =>
    (value as api.InputDecoration).hoverColor;
Object? _InputDecoration_enabled(Object value) =>
    (value as api.InputDecoration).enabled;
Object? _InputDecoration_semanticCounterText(Object value) =>
    (value as api.InputDecoration).semanticCounterText;
Object? _InputDecoration_alignLabelWithHint(Object value) =>
    (value as api.InputDecoration).alignLabelWithHint;
Object? _InputDecoration_constraints(Object value) =>
    (value as api.InputDecoration).constraints;
Object? _InputDecoration_visualDensity(Object value) =>
    (value as api.InputDecoration).visualDensity;
Object? _InputDecoration_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.InputDecoration).copyWith(
    alignLabelWithHint: values["alignLabelWithHint"] as bool?,
    constraints: values["constraints"] as api4.BoxConstraints?,
    contentPadding: values["contentPadding"] as api2.EdgeInsetsGeometry?,
    counter: values["counter"] as api1.Widget?,
    counterStyle: values["counterStyle"] as api2.TextStyle?,
    counterText: values["counterText"] as String?,
    enabled: values["enabled"] as bool?,
    error: values["error"] as api1.Widget?,
    errorMaxLines: values["errorMaxLines"] as int?,
    errorStyle: values["errorStyle"] as api2.TextStyle?,
    errorText: values["errorText"] as String?,
    fillColor: values["fillColor"] as api5.Color?,
    filled: values["filled"] as bool?,
    floatingLabelStyle: values["floatingLabelStyle"] as api2.TextStyle?,
    focusColor: values["focusColor"] as api5.Color?,
    helper: values["helper"] as api1.Widget?,
    helperMaxLines: values["helperMaxLines"] as int?,
    helperStyle: values["helperStyle"] as api2.TextStyle?,
    helperText: values["helperText"] as String?,
    hint: values["hint"] as api1.Widget?,
    hintFadeDuration: values["hintFadeDuration"] as api8.Duration?,
    hintMaxLines: values["hintMaxLines"] as int?,
    hintStyle: values["hintStyle"] as api2.TextStyle?,
    hintText: values["hintText"] as String?,
    hintTextDirection: values["hintTextDirection"] as api5.TextDirection?,
    hoverColor: values["hoverColor"] as api5.Color?,
    icon: values["icon"] as api1.Widget?,
    iconColor: values["iconColor"] as api5.Color?,
    isCollapsed: values["isCollapsed"] as bool?,
    isDense: values["isDense"] as bool?,
    label: values["label"] as api1.Widget?,
    labelStyle: values["labelStyle"] as api2.TextStyle?,
    labelText: values["labelText"] as String?,
    maintainHintHeight: values["maintainHintHeight"] as bool?,
    maintainHintSize: values["maintainHintSize"] as bool?,
    maintainLabelSize: values["maintainLabelSize"] as bool?,
    prefix: values["prefix"] as api1.Widget?,
    prefixIcon: values["prefixIcon"] as api1.Widget?,
    prefixIconColor: values["prefixIconColor"] as api5.Color?,
    prefixIconConstraints:
        values["prefixIconConstraints"] as api4.BoxConstraints?,
    prefixStyle: values["prefixStyle"] as api2.TextStyle?,
    prefixText: values["prefixText"] as String?,
    semanticCounterText: values["semanticCounterText"] as String?,
    semanticsService: values["semanticsService"] as api13.SemanticsService?,
    suffix: values["suffix"] as api1.Widget?,
    suffixIcon: values["suffixIcon"] as api1.Widget?,
    suffixIconColor: values["suffixIconColor"] as api5.Color?,
    suffixIconConstraints:
        values["suffixIconConstraints"] as api4.BoxConstraints?,
    suffixStyle: values["suffixStyle"] as api2.TextStyle?,
    suffixText: values["suffixText"] as String?,
    visualDensity: values["visualDensity"] as api.VisualDensity?,
  );
}

Object? _InputDecoration_applyDefaults(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.InputDecoration).applyDefaults(
    values["inputDecorationTheme"] as Object,
  );
}

Object? _InputDecoration_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.InputDecoration).toString();
}

Object _createInputDecoration(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.InputDecoration(
        icon: values["icon"] as api1.Widget?,
        iconColor: values["iconColor"] as api5.Color?,
        label: values["label"] as api1.Widget?,
        labelText: values["labelText"] as String?,
        labelStyle: values["labelStyle"] as api2.TextStyle?,
        floatingLabelStyle: values["floatingLabelStyle"] as api2.TextStyle?,
        helper: values["helper"] as api1.Widget?,
        helperText: values["helperText"] as String?,
        helperStyle: values["helperStyle"] as api2.TextStyle?,
        helperMaxLines: values["helperMaxLines"] as int?,
        hintText: values["hintText"] as String?,
        hint: values["hint"] as api1.Widget?,
        hintStyle: values["hintStyle"] as api2.TextStyle?,
        hintTextDirection: values["hintTextDirection"] as api5.TextDirection?,
        hintMaxLines: values["hintMaxLines"] as int?,
        hintFadeDuration: values["hintFadeDuration"] as api8.Duration?,
        maintainHintHeight: values["maintainHintHeight"] as bool,
        maintainHintSize: values["maintainHintSize"] as bool,
        maintainLabelSize: values["maintainLabelSize"] as bool,
        error: values["error"] as api1.Widget?,
        errorText: values["errorText"] as String?,
        errorStyle: values["errorStyle"] as api2.TextStyle?,
        errorMaxLines: values["errorMaxLines"] as int?,
        isCollapsed: values["isCollapsed"] as bool?,
        isDense: values["isDense"] as bool?,
        contentPadding: values["contentPadding"] as api2.EdgeInsetsGeometry?,
        prefixIcon: values["prefixIcon"] as api1.Widget?,
        prefixIconConstraints:
            values["prefixIconConstraints"] as api4.BoxConstraints?,
        prefix: values["prefix"] as api1.Widget?,
        prefixText: values["prefixText"] as String?,
        prefixStyle: values["prefixStyle"] as api2.TextStyle?,
        prefixIconColor: values["prefixIconColor"] as api5.Color?,
        suffixIcon: values["suffixIcon"] as api1.Widget?,
        suffix: values["suffix"] as api1.Widget?,
        suffixText: values["suffixText"] as String?,
        suffixStyle: values["suffixStyle"] as api2.TextStyle?,
        suffixIconColor: values["suffixIconColor"] as api5.Color?,
        suffixIconConstraints:
            values["suffixIconConstraints"] as api4.BoxConstraints?,
        counter: values["counter"] as api1.Widget?,
        counterText: values["counterText"] as String?,
        counterStyle: values["counterStyle"] as api2.TextStyle?,
        filled: values["filled"] as bool?,
        fillColor: values["fillColor"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        enabled: values["enabled"] as bool,
        semanticCounterText: values["semanticCounterText"] as String?,
        alignLabelWithHint: values["alignLabelWithHint"] as bool?,
        constraints: values["constraints"] as api4.BoxConstraints?,
        visualDensity: values["visualDensity"] as api.VisualDensity?,
      );
    case "collapsed":
      return api.InputDecoration.collapsed(
        hintText: values["hintText"] as String?,
        hintStyle: values["hintStyle"] as api2.TextStyle?,
        hint: values["hint"] as api1.Widget?,
        hintTextDirection: values["hintTextDirection"] as api5.TextDirection?,
        hintMaxLines: values["hintMaxLines"] as int?,
        hintFadeDuration: values["hintFadeDuration"] as api8.Duration?,
        maintainHintHeight: values["maintainHintHeight"] as bool,
        maintainHintSize: values["maintainHintSize"] as bool,
        maintainLabelSize: values["maintainLabelSize"] as bool,
        filled: values["filled"] as bool?,
        fillColor: values["fillColor"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        enabled: values["enabled"] as bool,
        constraints: values["constraints"] as api4.BoxConstraints?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isLinearProgressIndicator(Object value) =>
    value is api.LinearProgressIndicator;

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
        key: values["key"] as api6.Key?,
        value: values["value"] as double?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        color: values["color"] as api5.Color?,
        valueColor: values["valueColor"] as api3.Animation<api5.Color?>?,
        minHeight: values["minHeight"] as double?,
        semanticsLabel: values["semanticsLabel"] as String?,
        semanticsValue: values["semanticsValue"] as String?,
        borderRadius: values["borderRadius"] as api2.BorderRadiusGeometry?,
        stopIndicatorColor: values["stopIndicatorColor"] as api5.Color?,
        stopIndicatorRadius: values["stopIndicatorRadius"] as double?,
        trackGap: values["trackGap"] as double?,
        year2023: values["year2023"] as bool?,
        controller: values["controller"] as api3.AnimationController?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isListTile(Object value) => value is api.ListTile;
Object? _ListTile_divideTiles(Map<String, Object?> values) {
  return api.ListTile.divideTiles(
    color: values["color"] as api5.Color?,
    context: values["context"] as api1.BuildContext?,
    tiles: values["tiles"] as Iterable<api1.Widget>,
  );
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
        key: values["key"] as api6.Key?,
        leading: values["leading"] as api1.Widget?,
        title: values["title"] as api1.Widget?,
        subtitle: values["subtitle"] as api1.Widget?,
        trailing: values["trailing"] as api1.Widget?,
        isThreeLine: values["isThreeLine"] as bool?,
        dense: values["dense"] as bool?,
        visualDensity: values["visualDensity"] as api.VisualDensity?,
        shape: values["shape"] as api2.ShapeBorder?,
        style: values["style"] as api.ListTileStyle?,
        selectedColor: values["selectedColor"] as api5.Color?,
        iconColor: values["iconColor"] as api5.Color?,
        textColor: values["textColor"] as api5.Color?,
        titleTextStyle: values["titleTextStyle"] as api2.TextStyle?,
        subtitleTextStyle: values["subtitleTextStyle"] as api2.TextStyle?,
        leadingAndTrailingTextStyle:
            values["leadingAndTrailingTextStyle"] as api2.TextStyle?,
        contentPadding: values["contentPadding"] as api2.EdgeInsetsGeometry?,
        enabled: values["enabled"] as bool,
        onTap: values["onTap"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        selected: values["selected"] as bool,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        splashColor: values["splashColor"] as api5.Color?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        tileColor: values["tileColor"] as api5.Color?,
        selectedTileColor: values["selectedTileColor"] as api5.Color?,
        enableFeedback: values["enableFeedback"] as bool?,
        horizontalTitleGap: values["horizontalTitleGap"] as double?,
        minVerticalPadding: values["minVerticalPadding"] as double?,
        minLeadingWidth: values["minLeadingWidth"] as double?,
        minTileHeight: values["minTileHeight"] as double?,
        internalAddSemanticForOnTap:
            values["internalAddSemanticForOnTap"] as bool,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isMaterial(Object value) => value is api.Material;

class _MaterialHost extends FlaxWidgetHost {
  _MaterialHost(super.node);
  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createMaterial(node.ctor, values);
}

api1.Widget _createMaterial(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("animationDuration")) {
        return api.Material(
          key: values["key"] as api6.Key?,
          type: values["type"] as api.MaterialType,
          elevation: values["elevation"] as double,
          color: values["color"] as api5.Color?,
          shadowColor: values["shadowColor"] as api5.Color?,
          surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
          textStyle: values["textStyle"] as api2.TextStyle?,
          borderRadius: values["borderRadius"] as api2.BorderRadiusGeometry?,
          shape: values["shape"] as api2.ShapeBorder?,
          borderOnForeground: values["borderOnForeground"] as bool,
          clipBehavior: values["clipBehavior"] as api5.Clip,
          child: values["child"] as api1.Widget?,
          animateColor: values["animateColor"] as bool,
        );
      }
      return api.Material(
        key: values["key"] as api6.Key?,
        type: values["type"] as api.MaterialType,
        elevation: values["elevation"] as double,
        color: values["color"] as api5.Color?,
        shadowColor: values["shadowColor"] as api5.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
        textStyle: values["textStyle"] as api2.TextStyle?,
        borderRadius: values["borderRadius"] as api2.BorderRadiusGeometry?,
        shape: values["shape"] as api2.ShapeBorder?,
        borderOnForeground: values["borderOnForeground"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip,
        animationDuration: values["animationDuration"] as api8.Duration,
        child: values["child"] as api1.Widget?,
        animateColor: values["animateColor"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isMaterialApp(Object value) => value is api.MaterialApp;
Object? _MaterialApp_createMaterialHeroController(Map<String, Object?> values) {
  return api.MaterialApp.createMaterialHeroController();
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
      if (!values.containsKey("routes")) {
        if (!values.containsKey("navigatorObservers")) {
          if (!values.containsKey("themeAnimationDuration")) {
            if (!values.containsKey("themeAnimationCurve")) {
              if (!values.containsKey("supportedLocales")) {
                return api.MaterialApp(
                  key: values["key"] as api6.Key?,
                  navigatorKey:
                      values["navigatorKey"]
                          as api1.GlobalKey<api1.NavigatorState>?,
                  home: values["home"] as api1.Widget?,
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
                  color: values["color"] as api5.Color?,
                  theme: values["theme"] as api.ThemeData?,
                  darkTheme: values["darkTheme"] as api.ThemeData?,
                  highContrastTheme:
                      values["highContrastTheme"] as api.ThemeData?,
                  highContrastDarkTheme:
                      values["highContrastDarkTheme"] as api.ThemeData?,
                  themeMode: values["themeMode"] as api.ThemeMode?,
                  locale: values["locale"] as api5.Locale?,
                  localizationsDelegates:
                      values["localizationsDelegates"]
                          as Iterable<api1.LocalizationsDelegate<Object?>>?,
                  localeListResolutionCallback:
                      values["localeListResolutionCallback"]
                          as api5.Locale? Function(
                            List<api5.Locale>? locales,
                            Iterable<api5.Locale> supportedLocales,
                          )?,
                  localeResolutionCallback:
                      values["localeResolutionCallback"]
                          as api5.Locale? Function(
                            api5.Locale? locale,
                            Iterable<api5.Locale> supportedLocales,
                          )?,
                  debugShowMaterialGrid:
                      values["debugShowMaterialGrid"] as bool,
                  showPerformanceOverlay:
                      values["showPerformanceOverlay"] as bool,
                  checkerboardRasterCacheImages:
                      values["checkerboardRasterCacheImages"] as bool,
                  checkerboardOffscreenLayers:
                      values["checkerboardOffscreenLayers"] as bool,
                  showSemanticsDebugger:
                      values["showSemanticsDebugger"] as bool,
                  debugShowCheckedModeBanner:
                      values["debugShowCheckedModeBanner"] as bool,
                  shortcuts:
                      values["shortcuts"]
                          as Map<api1.ShortcutActivator, api1.Intent>?,
                  actions:
                      values["actions"]
                          as Map<api8.Type, api1.Action<api1.Intent>>?,
                  restorationScopeId: values["restorationScopeId"] as String?,
                  scrollBehavior:
                      values["scrollBehavior"] as api1.ScrollBehavior?,
                  useInheritedMediaQuery:
                      values["useInheritedMediaQuery"] as bool,
                  themeAnimationStyle:
                      values["themeAnimationStyle"] as api3.AnimationStyle?,
                );
              }
              return api.MaterialApp(
                key: values["key"] as api6.Key?,
                navigatorKey:
                    values["navigatorKey"]
                        as api1.GlobalKey<api1.NavigatorState>?,
                home: values["home"] as api1.Widget?,
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
                color: values["color"] as api5.Color?,
                theme: values["theme"] as api.ThemeData?,
                darkTheme: values["darkTheme"] as api.ThemeData?,
                highContrastTheme:
                    values["highContrastTheme"] as api.ThemeData?,
                highContrastDarkTheme:
                    values["highContrastDarkTheme"] as api.ThemeData?,
                themeMode: values["themeMode"] as api.ThemeMode?,
                locale: values["locale"] as api5.Locale?,
                localizationsDelegates:
                    values["localizationsDelegates"]
                        as Iterable<api1.LocalizationsDelegate<Object?>>?,
                localeListResolutionCallback:
                    values["localeListResolutionCallback"]
                        as api5.Locale? Function(
                          List<api5.Locale>? locales,
                          Iterable<api5.Locale> supportedLocales,
                        )?,
                localeResolutionCallback:
                    values["localeResolutionCallback"]
                        as api5.Locale? Function(
                          api5.Locale? locale,
                          Iterable<api5.Locale> supportedLocales,
                        )?,
                supportedLocales:
                    values["supportedLocales"] as Iterable<api5.Locale>,
                debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
                showPerformanceOverlay:
                    values["showPerformanceOverlay"] as bool,
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
                        as Map<api8.Type, api1.Action<api1.Intent>>?,
                restorationScopeId: values["restorationScopeId"] as String?,
                scrollBehavior:
                    values["scrollBehavior"] as api1.ScrollBehavior?,
                useInheritedMediaQuery:
                    values["useInheritedMediaQuery"] as bool,
                themeAnimationStyle:
                    values["themeAnimationStyle"] as api3.AnimationStyle?,
              );
            }
            if (!values.containsKey("supportedLocales")) {
              return api.MaterialApp(
                key: values["key"] as api6.Key?,
                navigatorKey:
                    values["navigatorKey"]
                        as api1.GlobalKey<api1.NavigatorState>?,
                home: values["home"] as api1.Widget?,
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
                color: values["color"] as api5.Color?,
                theme: values["theme"] as api.ThemeData?,
                darkTheme: values["darkTheme"] as api.ThemeData?,
                highContrastTheme:
                    values["highContrastTheme"] as api.ThemeData?,
                highContrastDarkTheme:
                    values["highContrastDarkTheme"] as api.ThemeData?,
                themeMode: values["themeMode"] as api.ThemeMode?,
                themeAnimationCurve:
                    values["themeAnimationCurve"] as api3.Curve,
                locale: values["locale"] as api5.Locale?,
                localizationsDelegates:
                    values["localizationsDelegates"]
                        as Iterable<api1.LocalizationsDelegate<Object?>>?,
                localeListResolutionCallback:
                    values["localeListResolutionCallback"]
                        as api5.Locale? Function(
                          List<api5.Locale>? locales,
                          Iterable<api5.Locale> supportedLocales,
                        )?,
                localeResolutionCallback:
                    values["localeResolutionCallback"]
                        as api5.Locale? Function(
                          api5.Locale? locale,
                          Iterable<api5.Locale> supportedLocales,
                        )?,
                debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
                showPerformanceOverlay:
                    values["showPerformanceOverlay"] as bool,
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
                        as Map<api8.Type, api1.Action<api1.Intent>>?,
                restorationScopeId: values["restorationScopeId"] as String?,
                scrollBehavior:
                    values["scrollBehavior"] as api1.ScrollBehavior?,
                useInheritedMediaQuery:
                    values["useInheritedMediaQuery"] as bool,
                themeAnimationStyle:
                    values["themeAnimationStyle"] as api3.AnimationStyle?,
              );
            }
            return api.MaterialApp(
              key: values["key"] as api6.Key?,
              navigatorKey:
                  values["navigatorKey"]
                      as api1.GlobalKey<api1.NavigatorState>?,
              home: values["home"] as api1.Widget?,
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
              color: values["color"] as api5.Color?,
              theme: values["theme"] as api.ThemeData?,
              darkTheme: values["darkTheme"] as api.ThemeData?,
              highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
              highContrastDarkTheme:
                  values["highContrastDarkTheme"] as api.ThemeData?,
              themeMode: values["themeMode"] as api.ThemeMode?,
              themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
              locale: values["locale"] as api5.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api5.Locale? Function(
                        List<api5.Locale>? locales,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api5.Locale? Function(
                        api5.Locale? locale,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              supportedLocales:
                  values["supportedLocales"] as Iterable<api5.Locale>,
              debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                      as Map<api8.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
              themeAnimationStyle:
                  values["themeAnimationStyle"] as api3.AnimationStyle?,
            );
          }
          if (!values.containsKey("themeAnimationCurve")) {
            if (!values.containsKey("supportedLocales")) {
              return api.MaterialApp(
                key: values["key"] as api6.Key?,
                navigatorKey:
                    values["navigatorKey"]
                        as api1.GlobalKey<api1.NavigatorState>?,
                home: values["home"] as api1.Widget?,
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
                color: values["color"] as api5.Color?,
                theme: values["theme"] as api.ThemeData?,
                darkTheme: values["darkTheme"] as api.ThemeData?,
                highContrastTheme:
                    values["highContrastTheme"] as api.ThemeData?,
                highContrastDarkTheme:
                    values["highContrastDarkTheme"] as api.ThemeData?,
                themeMode: values["themeMode"] as api.ThemeMode?,
                themeAnimationDuration:
                    values["themeAnimationDuration"] as api8.Duration,
                locale: values["locale"] as api5.Locale?,
                localizationsDelegates:
                    values["localizationsDelegates"]
                        as Iterable<api1.LocalizationsDelegate<Object?>>?,
                localeListResolutionCallback:
                    values["localeListResolutionCallback"]
                        as api5.Locale? Function(
                          List<api5.Locale>? locales,
                          Iterable<api5.Locale> supportedLocales,
                        )?,
                localeResolutionCallback:
                    values["localeResolutionCallback"]
                        as api5.Locale? Function(
                          api5.Locale? locale,
                          Iterable<api5.Locale> supportedLocales,
                        )?,
                debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
                showPerformanceOverlay:
                    values["showPerformanceOverlay"] as bool,
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
                        as Map<api8.Type, api1.Action<api1.Intent>>?,
                restorationScopeId: values["restorationScopeId"] as String?,
                scrollBehavior:
                    values["scrollBehavior"] as api1.ScrollBehavior?,
                useInheritedMediaQuery:
                    values["useInheritedMediaQuery"] as bool,
                themeAnimationStyle:
                    values["themeAnimationStyle"] as api3.AnimationStyle?,
              );
            }
            return api.MaterialApp(
              key: values["key"] as api6.Key?,
              navigatorKey:
                  values["navigatorKey"]
                      as api1.GlobalKey<api1.NavigatorState>?,
              home: values["home"] as api1.Widget?,
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
              color: values["color"] as api5.Color?,
              theme: values["theme"] as api.ThemeData?,
              darkTheme: values["darkTheme"] as api.ThemeData?,
              highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
              highContrastDarkTheme:
                  values["highContrastDarkTheme"] as api.ThemeData?,
              themeMode: values["themeMode"] as api.ThemeMode?,
              themeAnimationDuration:
                  values["themeAnimationDuration"] as api8.Duration,
              locale: values["locale"] as api5.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api5.Locale? Function(
                        List<api5.Locale>? locales,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api5.Locale? Function(
                        api5.Locale? locale,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              supportedLocales:
                  values["supportedLocales"] as Iterable<api5.Locale>,
              debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                      as Map<api8.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
              themeAnimationStyle:
                  values["themeAnimationStyle"] as api3.AnimationStyle?,
            );
          }
          if (!values.containsKey("supportedLocales")) {
            return api.MaterialApp(
              key: values["key"] as api6.Key?,
              navigatorKey:
                  values["navigatorKey"]
                      as api1.GlobalKey<api1.NavigatorState>?,
              home: values["home"] as api1.Widget?,
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
              color: values["color"] as api5.Color?,
              theme: values["theme"] as api.ThemeData?,
              darkTheme: values["darkTheme"] as api.ThemeData?,
              highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
              highContrastDarkTheme:
                  values["highContrastDarkTheme"] as api.ThemeData?,
              themeMode: values["themeMode"] as api.ThemeMode?,
              themeAnimationDuration:
                  values["themeAnimationDuration"] as api8.Duration,
              themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
              locale: values["locale"] as api5.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api5.Locale? Function(
                        List<api5.Locale>? locales,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api5.Locale? Function(
                        api5.Locale? locale,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                      as Map<api8.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
              themeAnimationStyle:
                  values["themeAnimationStyle"] as api3.AnimationStyle?,
            );
          }
          return api.MaterialApp(
            key: values["key"] as api6.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            themeAnimationDuration:
                values["themeAnimationDuration"] as api8.Duration,
            themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            supportedLocales:
                values["supportedLocales"] as Iterable<api5.Locale>,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        if (!values.containsKey("themeAnimationDuration")) {
          if (!values.containsKey("themeAnimationCurve")) {
            if (!values.containsKey("supportedLocales")) {
              return api.MaterialApp(
                key: values["key"] as api6.Key?,
                navigatorKey:
                    values["navigatorKey"]
                        as api1.GlobalKey<api1.NavigatorState>?,
                home: values["home"] as api1.Widget?,
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
                navigatorObservers:
                    values["navigatorObservers"]
                        as List<api1.NavigatorObserver>,
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
                color: values["color"] as api5.Color?,
                theme: values["theme"] as api.ThemeData?,
                darkTheme: values["darkTheme"] as api.ThemeData?,
                highContrastTheme:
                    values["highContrastTheme"] as api.ThemeData?,
                highContrastDarkTheme:
                    values["highContrastDarkTheme"] as api.ThemeData?,
                themeMode: values["themeMode"] as api.ThemeMode?,
                locale: values["locale"] as api5.Locale?,
                localizationsDelegates:
                    values["localizationsDelegates"]
                        as Iterable<api1.LocalizationsDelegate<Object?>>?,
                localeListResolutionCallback:
                    values["localeListResolutionCallback"]
                        as api5.Locale? Function(
                          List<api5.Locale>? locales,
                          Iterable<api5.Locale> supportedLocales,
                        )?,
                localeResolutionCallback:
                    values["localeResolutionCallback"]
                        as api5.Locale? Function(
                          api5.Locale? locale,
                          Iterable<api5.Locale> supportedLocales,
                        )?,
                debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
                showPerformanceOverlay:
                    values["showPerformanceOverlay"] as bool,
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
                        as Map<api8.Type, api1.Action<api1.Intent>>?,
                restorationScopeId: values["restorationScopeId"] as String?,
                scrollBehavior:
                    values["scrollBehavior"] as api1.ScrollBehavior?,
                useInheritedMediaQuery:
                    values["useInheritedMediaQuery"] as bool,
                themeAnimationStyle:
                    values["themeAnimationStyle"] as api3.AnimationStyle?,
              );
            }
            return api.MaterialApp(
              key: values["key"] as api6.Key?,
              navigatorKey:
                  values["navigatorKey"]
                      as api1.GlobalKey<api1.NavigatorState>?,
              home: values["home"] as api1.Widget?,
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
              color: values["color"] as api5.Color?,
              theme: values["theme"] as api.ThemeData?,
              darkTheme: values["darkTheme"] as api.ThemeData?,
              highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
              highContrastDarkTheme:
                  values["highContrastDarkTheme"] as api.ThemeData?,
              themeMode: values["themeMode"] as api.ThemeMode?,
              locale: values["locale"] as api5.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api5.Locale? Function(
                        List<api5.Locale>? locales,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api5.Locale? Function(
                        api5.Locale? locale,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              supportedLocales:
                  values["supportedLocales"] as Iterable<api5.Locale>,
              debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                      as Map<api8.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
              themeAnimationStyle:
                  values["themeAnimationStyle"] as api3.AnimationStyle?,
            );
          }
          if (!values.containsKey("supportedLocales")) {
            return api.MaterialApp(
              key: values["key"] as api6.Key?,
              navigatorKey:
                  values["navigatorKey"]
                      as api1.GlobalKey<api1.NavigatorState>?,
              home: values["home"] as api1.Widget?,
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
              color: values["color"] as api5.Color?,
              theme: values["theme"] as api.ThemeData?,
              darkTheme: values["darkTheme"] as api.ThemeData?,
              highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
              highContrastDarkTheme:
                  values["highContrastDarkTheme"] as api.ThemeData?,
              themeMode: values["themeMode"] as api.ThemeMode?,
              themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
              locale: values["locale"] as api5.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api5.Locale? Function(
                        List<api5.Locale>? locales,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api5.Locale? Function(
                        api5.Locale? locale,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                      as Map<api8.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
              themeAnimationStyle:
                  values["themeAnimationStyle"] as api3.AnimationStyle?,
            );
          }
          return api.MaterialApp(
            key: values["key"] as api6.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            supportedLocales:
                values["supportedLocales"] as Iterable<api5.Locale>,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        if (!values.containsKey("themeAnimationCurve")) {
          if (!values.containsKey("supportedLocales")) {
            return api.MaterialApp(
              key: values["key"] as api6.Key?,
              navigatorKey:
                  values["navigatorKey"]
                      as api1.GlobalKey<api1.NavigatorState>?,
              home: values["home"] as api1.Widget?,
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
              color: values["color"] as api5.Color?,
              theme: values["theme"] as api.ThemeData?,
              darkTheme: values["darkTheme"] as api.ThemeData?,
              highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
              highContrastDarkTheme:
                  values["highContrastDarkTheme"] as api.ThemeData?,
              themeMode: values["themeMode"] as api.ThemeMode?,
              themeAnimationDuration:
                  values["themeAnimationDuration"] as api8.Duration,
              locale: values["locale"] as api5.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api5.Locale? Function(
                        List<api5.Locale>? locales,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api5.Locale? Function(
                        api5.Locale? locale,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                      as Map<api8.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
              themeAnimationStyle:
                  values["themeAnimationStyle"] as api3.AnimationStyle?,
            );
          }
          return api.MaterialApp(
            key: values["key"] as api6.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            themeAnimationDuration:
                values["themeAnimationDuration"] as api8.Duration,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            supportedLocales:
                values["supportedLocales"] as Iterable<api5.Locale>,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        if (!values.containsKey("supportedLocales")) {
          return api.MaterialApp(
            key: values["key"] as api6.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            themeAnimationDuration:
                values["themeAnimationDuration"] as api8.Duration,
            themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        return api.MaterialApp(
          key: values["key"] as api6.Key?,
          navigatorKey:
              values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
          home: values["home"] as api1.Widget?,
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
          color: values["color"] as api5.Color?,
          theme: values["theme"] as api.ThemeData?,
          darkTheme: values["darkTheme"] as api.ThemeData?,
          highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
          highContrastDarkTheme:
              values["highContrastDarkTheme"] as api.ThemeData?,
          themeMode: values["themeMode"] as api.ThemeMode?,
          themeAnimationDuration:
              values["themeAnimationDuration"] as api8.Duration,
          themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
          locale: values["locale"] as api5.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api5.Locale? Function(
                    List<api5.Locale>? locales,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api5.Locale? Function(
                    api5.Locale? locale,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          supportedLocales: values["supportedLocales"] as Iterable<api5.Locale>,
          debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
              values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          themeAnimationStyle:
              values["themeAnimationStyle"] as api3.AnimationStyle?,
        );
      }
      if (!values.containsKey("navigatorObservers")) {
        if (!values.containsKey("themeAnimationDuration")) {
          if (!values.containsKey("themeAnimationCurve")) {
            if (!values.containsKey("supportedLocales")) {
              return api.MaterialApp(
                key: values["key"] as api6.Key?,
                navigatorKey:
                    values["navigatorKey"]
                        as api1.GlobalKey<api1.NavigatorState>?,
                home: values["home"] as api1.Widget?,
                routes:
                    values["routes"]
                        as Map<
                          String,
                          api1.Widget Function(api1.BuildContext context)
                        >,
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
                color: values["color"] as api5.Color?,
                theme: values["theme"] as api.ThemeData?,
                darkTheme: values["darkTheme"] as api.ThemeData?,
                highContrastTheme:
                    values["highContrastTheme"] as api.ThemeData?,
                highContrastDarkTheme:
                    values["highContrastDarkTheme"] as api.ThemeData?,
                themeMode: values["themeMode"] as api.ThemeMode?,
                locale: values["locale"] as api5.Locale?,
                localizationsDelegates:
                    values["localizationsDelegates"]
                        as Iterable<api1.LocalizationsDelegate<Object?>>?,
                localeListResolutionCallback:
                    values["localeListResolutionCallback"]
                        as api5.Locale? Function(
                          List<api5.Locale>? locales,
                          Iterable<api5.Locale> supportedLocales,
                        )?,
                localeResolutionCallback:
                    values["localeResolutionCallback"]
                        as api5.Locale? Function(
                          api5.Locale? locale,
                          Iterable<api5.Locale> supportedLocales,
                        )?,
                debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
                showPerformanceOverlay:
                    values["showPerformanceOverlay"] as bool,
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
                        as Map<api8.Type, api1.Action<api1.Intent>>?,
                restorationScopeId: values["restorationScopeId"] as String?,
                scrollBehavior:
                    values["scrollBehavior"] as api1.ScrollBehavior?,
                useInheritedMediaQuery:
                    values["useInheritedMediaQuery"] as bool,
                themeAnimationStyle:
                    values["themeAnimationStyle"] as api3.AnimationStyle?,
              );
            }
            return api.MaterialApp(
              key: values["key"] as api6.Key?,
              navigatorKey:
                  values["navigatorKey"]
                      as api1.GlobalKey<api1.NavigatorState>?,
              home: values["home"] as api1.Widget?,
              routes:
                  values["routes"]
                      as Map<
                        String,
                        api1.Widget Function(api1.BuildContext context)
                      >,
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
              color: values["color"] as api5.Color?,
              theme: values["theme"] as api.ThemeData?,
              darkTheme: values["darkTheme"] as api.ThemeData?,
              highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
              highContrastDarkTheme:
                  values["highContrastDarkTheme"] as api.ThemeData?,
              themeMode: values["themeMode"] as api.ThemeMode?,
              locale: values["locale"] as api5.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api5.Locale? Function(
                        List<api5.Locale>? locales,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api5.Locale? Function(
                        api5.Locale? locale,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              supportedLocales:
                  values["supportedLocales"] as Iterable<api5.Locale>,
              debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                      as Map<api8.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
              themeAnimationStyle:
                  values["themeAnimationStyle"] as api3.AnimationStyle?,
            );
          }
          if (!values.containsKey("supportedLocales")) {
            return api.MaterialApp(
              key: values["key"] as api6.Key?,
              navigatorKey:
                  values["navigatorKey"]
                      as api1.GlobalKey<api1.NavigatorState>?,
              home: values["home"] as api1.Widget?,
              routes:
                  values["routes"]
                      as Map<
                        String,
                        api1.Widget Function(api1.BuildContext context)
                      >,
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
              color: values["color"] as api5.Color?,
              theme: values["theme"] as api.ThemeData?,
              darkTheme: values["darkTheme"] as api.ThemeData?,
              highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
              highContrastDarkTheme:
                  values["highContrastDarkTheme"] as api.ThemeData?,
              themeMode: values["themeMode"] as api.ThemeMode?,
              themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
              locale: values["locale"] as api5.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api5.Locale? Function(
                        List<api5.Locale>? locales,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api5.Locale? Function(
                        api5.Locale? locale,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                      as Map<api8.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
              themeAnimationStyle:
                  values["themeAnimationStyle"] as api3.AnimationStyle?,
            );
          }
          return api.MaterialApp(
            key: values["key"] as api6.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
            routes:
                values["routes"]
                    as Map<
                      String,
                      api1.Widget Function(api1.BuildContext context)
                    >,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            supportedLocales:
                values["supportedLocales"] as Iterable<api5.Locale>,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        if (!values.containsKey("themeAnimationCurve")) {
          if (!values.containsKey("supportedLocales")) {
            return api.MaterialApp(
              key: values["key"] as api6.Key?,
              navigatorKey:
                  values["navigatorKey"]
                      as api1.GlobalKey<api1.NavigatorState>?,
              home: values["home"] as api1.Widget?,
              routes:
                  values["routes"]
                      as Map<
                        String,
                        api1.Widget Function(api1.BuildContext context)
                      >,
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
              color: values["color"] as api5.Color?,
              theme: values["theme"] as api.ThemeData?,
              darkTheme: values["darkTheme"] as api.ThemeData?,
              highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
              highContrastDarkTheme:
                  values["highContrastDarkTheme"] as api.ThemeData?,
              themeMode: values["themeMode"] as api.ThemeMode?,
              themeAnimationDuration:
                  values["themeAnimationDuration"] as api8.Duration,
              locale: values["locale"] as api5.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api5.Locale? Function(
                        List<api5.Locale>? locales,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api5.Locale? Function(
                        api5.Locale? locale,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                      as Map<api8.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
              themeAnimationStyle:
                  values["themeAnimationStyle"] as api3.AnimationStyle?,
            );
          }
          return api.MaterialApp(
            key: values["key"] as api6.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
            routes:
                values["routes"]
                    as Map<
                      String,
                      api1.Widget Function(api1.BuildContext context)
                    >,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            themeAnimationDuration:
                values["themeAnimationDuration"] as api8.Duration,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            supportedLocales:
                values["supportedLocales"] as Iterable<api5.Locale>,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        if (!values.containsKey("supportedLocales")) {
          return api.MaterialApp(
            key: values["key"] as api6.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
            routes:
                values["routes"]
                    as Map<
                      String,
                      api1.Widget Function(api1.BuildContext context)
                    >,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            themeAnimationDuration:
                values["themeAnimationDuration"] as api8.Duration,
            themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        return api.MaterialApp(
          key: values["key"] as api6.Key?,
          navigatorKey:
              values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
          home: values["home"] as api1.Widget?,
          routes:
              values["routes"]
                  as Map<
                    String,
                    api1.Widget Function(api1.BuildContext context)
                  >,
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
          color: values["color"] as api5.Color?,
          theme: values["theme"] as api.ThemeData?,
          darkTheme: values["darkTheme"] as api.ThemeData?,
          highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
          highContrastDarkTheme:
              values["highContrastDarkTheme"] as api.ThemeData?,
          themeMode: values["themeMode"] as api.ThemeMode?,
          themeAnimationDuration:
              values["themeAnimationDuration"] as api8.Duration,
          themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
          locale: values["locale"] as api5.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api5.Locale? Function(
                    List<api5.Locale>? locales,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api5.Locale? Function(
                    api5.Locale? locale,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          supportedLocales: values["supportedLocales"] as Iterable<api5.Locale>,
          debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
              values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          themeAnimationStyle:
              values["themeAnimationStyle"] as api3.AnimationStyle?,
        );
      }
      if (!values.containsKey("themeAnimationDuration")) {
        if (!values.containsKey("themeAnimationCurve")) {
          if (!values.containsKey("supportedLocales")) {
            return api.MaterialApp(
              key: values["key"] as api6.Key?,
              navigatorKey:
                  values["navigatorKey"]
                      as api1.GlobalKey<api1.NavigatorState>?,
              home: values["home"] as api1.Widget?,
              routes:
                  values["routes"]
                      as Map<
                        String,
                        api1.Widget Function(api1.BuildContext context)
                      >,
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
              color: values["color"] as api5.Color?,
              theme: values["theme"] as api.ThemeData?,
              darkTheme: values["darkTheme"] as api.ThemeData?,
              highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
              highContrastDarkTheme:
                  values["highContrastDarkTheme"] as api.ThemeData?,
              themeMode: values["themeMode"] as api.ThemeMode?,
              locale: values["locale"] as api5.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api5.Locale? Function(
                        List<api5.Locale>? locales,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api5.Locale? Function(
                        api5.Locale? locale,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                      as Map<api8.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
              themeAnimationStyle:
                  values["themeAnimationStyle"] as api3.AnimationStyle?,
            );
          }
          return api.MaterialApp(
            key: values["key"] as api6.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
            routes:
                values["routes"]
                    as Map<
                      String,
                      api1.Widget Function(api1.BuildContext context)
                    >,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            supportedLocales:
                values["supportedLocales"] as Iterable<api5.Locale>,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        if (!values.containsKey("supportedLocales")) {
          return api.MaterialApp(
            key: values["key"] as api6.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
            routes:
                values["routes"]
                    as Map<
                      String,
                      api1.Widget Function(api1.BuildContext context)
                    >,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        return api.MaterialApp(
          key: values["key"] as api6.Key?,
          navigatorKey:
              values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
          home: values["home"] as api1.Widget?,
          routes:
              values["routes"]
                  as Map<
                    String,
                    api1.Widget Function(api1.BuildContext context)
                  >,
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
          color: values["color"] as api5.Color?,
          theme: values["theme"] as api.ThemeData?,
          darkTheme: values["darkTheme"] as api.ThemeData?,
          highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
          highContrastDarkTheme:
              values["highContrastDarkTheme"] as api.ThemeData?,
          themeMode: values["themeMode"] as api.ThemeMode?,
          themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
          locale: values["locale"] as api5.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api5.Locale? Function(
                    List<api5.Locale>? locales,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api5.Locale? Function(
                    api5.Locale? locale,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          supportedLocales: values["supportedLocales"] as Iterable<api5.Locale>,
          debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
              values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          themeAnimationStyle:
              values["themeAnimationStyle"] as api3.AnimationStyle?,
        );
      }
      if (!values.containsKey("themeAnimationCurve")) {
        if (!values.containsKey("supportedLocales")) {
          return api.MaterialApp(
            key: values["key"] as api6.Key?,
            navigatorKey:
                values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
            home: values["home"] as api1.Widget?,
            routes:
                values["routes"]
                    as Map<
                      String,
                      api1.Widget Function(api1.BuildContext context)
                    >,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            themeAnimationDuration:
                values["themeAnimationDuration"] as api8.Duration,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        return api.MaterialApp(
          key: values["key"] as api6.Key?,
          navigatorKey:
              values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
          home: values["home"] as api1.Widget?,
          routes:
              values["routes"]
                  as Map<
                    String,
                    api1.Widget Function(api1.BuildContext context)
                  >,
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
          color: values["color"] as api5.Color?,
          theme: values["theme"] as api.ThemeData?,
          darkTheme: values["darkTheme"] as api.ThemeData?,
          highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
          highContrastDarkTheme:
              values["highContrastDarkTheme"] as api.ThemeData?,
          themeMode: values["themeMode"] as api.ThemeMode?,
          themeAnimationDuration:
              values["themeAnimationDuration"] as api8.Duration,
          locale: values["locale"] as api5.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api5.Locale? Function(
                    List<api5.Locale>? locales,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api5.Locale? Function(
                    api5.Locale? locale,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          supportedLocales: values["supportedLocales"] as Iterable<api5.Locale>,
          debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
              values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          themeAnimationStyle:
              values["themeAnimationStyle"] as api3.AnimationStyle?,
        );
      }
      if (!values.containsKey("supportedLocales")) {
        return api.MaterialApp(
          key: values["key"] as api6.Key?,
          navigatorKey:
              values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
          home: values["home"] as api1.Widget?,
          routes:
              values["routes"]
                  as Map<
                    String,
                    api1.Widget Function(api1.BuildContext context)
                  >,
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
          color: values["color"] as api5.Color?,
          theme: values["theme"] as api.ThemeData?,
          darkTheme: values["darkTheme"] as api.ThemeData?,
          highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
          highContrastDarkTheme:
              values["highContrastDarkTheme"] as api.ThemeData?,
          themeMode: values["themeMode"] as api.ThemeMode?,
          themeAnimationDuration:
              values["themeAnimationDuration"] as api8.Duration,
          themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
          locale: values["locale"] as api5.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api5.Locale? Function(
                    List<api5.Locale>? locales,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api5.Locale? Function(
                    api5.Locale? locale,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
              values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          themeAnimationStyle:
              values["themeAnimationStyle"] as api3.AnimationStyle?,
        );
      }
      return api.MaterialApp(
        key: values["key"] as api6.Key?,
        navigatorKey:
            values["navigatorKey"] as api1.GlobalKey<api1.NavigatorState>?,
        home: values["home"] as api1.Widget?,
        routes:
            values["routes"]
                as Map<String, api1.Widget Function(api1.BuildContext context)>,
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
        color: values["color"] as api5.Color?,
        theme: values["theme"] as api.ThemeData?,
        darkTheme: values["darkTheme"] as api.ThemeData?,
        highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
        highContrastDarkTheme:
            values["highContrastDarkTheme"] as api.ThemeData?,
        themeMode: values["themeMode"] as api.ThemeMode?,
        themeAnimationDuration:
            values["themeAnimationDuration"] as api8.Duration,
        themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
        locale: values["locale"] as api5.Locale?,
        localizationsDelegates:
            values["localizationsDelegates"]
                as Iterable<api1.LocalizationsDelegate<Object?>>?,
        localeListResolutionCallback:
            values["localeListResolutionCallback"]
                as api5.Locale? Function(
                  List<api5.Locale>? locales,
                  Iterable<api5.Locale> supportedLocales,
                )?,
        localeResolutionCallback:
            values["localeResolutionCallback"]
                as api5.Locale? Function(
                  api5.Locale? locale,
                  Iterable<api5.Locale> supportedLocales,
                )?,
        supportedLocales: values["supportedLocales"] as Iterable<api5.Locale>,
        debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
        actions: values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
        restorationScopeId: values["restorationScopeId"] as String?,
        scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
        useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
        themeAnimationStyle:
            values["themeAnimationStyle"] as api3.AnimationStyle?,
      );
    case "router":
      if (!values.containsKey("themeAnimationDuration")) {
        if (!values.containsKey("themeAnimationCurve")) {
          if (!values.containsKey("supportedLocales")) {
            return api.MaterialApp.router(
              key: values["key"] as api6.Key?,
              routeInformationProvider:
                  values["routeInformationProvider"]
                      as api1.RouteInformationProvider?,
              routeInformationParser:
                  values["routeInformationParser"]
                      as api1.RouteInformationParser<Object>?,
              routerDelegate:
                  values["routerDelegate"] as api1.RouterDelegate<Object>?,
              routerConfig:
                  values["routerConfig"] as api1.RouterConfig<Object>?,
              backButtonDispatcher:
                  values["backButtonDispatcher"] as api1.BackButtonDispatcher?,
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
                      as bool Function(
                        api1.NavigationNotification notification,
                      )?,
              color: values["color"] as api5.Color?,
              theme: values["theme"] as api.ThemeData?,
              darkTheme: values["darkTheme"] as api.ThemeData?,
              highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
              highContrastDarkTheme:
                  values["highContrastDarkTheme"] as api.ThemeData?,
              themeMode: values["themeMode"] as api.ThemeMode?,
              locale: values["locale"] as api5.Locale?,
              localizationsDelegates:
                  values["localizationsDelegates"]
                      as Iterable<api1.LocalizationsDelegate<Object?>>?,
              localeListResolutionCallback:
                  values["localeListResolutionCallback"]
                      as api5.Locale? Function(
                        List<api5.Locale>? locales,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              localeResolutionCallback:
                  values["localeResolutionCallback"]
                      as api5.Locale? Function(
                        api5.Locale? locale,
                        Iterable<api5.Locale> supportedLocales,
                      )?,
              debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                      as Map<api8.Type, api1.Action<api1.Intent>>?,
              restorationScopeId: values["restorationScopeId"] as String?,
              scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
              useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
              themeAnimationStyle:
                  values["themeAnimationStyle"] as api3.AnimationStyle?,
            );
          }
          return api.MaterialApp.router(
            key: values["key"] as api6.Key?,
            routeInformationProvider:
                values["routeInformationProvider"]
                    as api1.RouteInformationProvider?,
            routeInformationParser:
                values["routeInformationParser"]
                    as api1.RouteInformationParser<Object>?,
            routerDelegate:
                values["routerDelegate"] as api1.RouterDelegate<Object>?,
            routerConfig: values["routerConfig"] as api1.RouterConfig<Object>?,
            backButtonDispatcher:
                values["backButtonDispatcher"] as api1.BackButtonDispatcher?,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            supportedLocales:
                values["supportedLocales"] as Iterable<api5.Locale>,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        if (!values.containsKey("supportedLocales")) {
          return api.MaterialApp.router(
            key: values["key"] as api6.Key?,
            routeInformationProvider:
                values["routeInformationProvider"]
                    as api1.RouteInformationProvider?,
            routeInformationParser:
                values["routeInformationParser"]
                    as api1.RouteInformationParser<Object>?,
            routerDelegate:
                values["routerDelegate"] as api1.RouterDelegate<Object>?,
            routerConfig: values["routerConfig"] as api1.RouterConfig<Object>?,
            backButtonDispatcher:
                values["backButtonDispatcher"] as api1.BackButtonDispatcher?,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        return api.MaterialApp.router(
          key: values["key"] as api6.Key?,
          routeInformationProvider:
              values["routeInformationProvider"]
                  as api1.RouteInformationProvider?,
          routeInformationParser:
              values["routeInformationParser"]
                  as api1.RouteInformationParser<Object>?,
          routerDelegate:
              values["routerDelegate"] as api1.RouterDelegate<Object>?,
          routerConfig: values["routerConfig"] as api1.RouterConfig<Object>?,
          backButtonDispatcher:
              values["backButtonDispatcher"] as api1.BackButtonDispatcher?,
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
          color: values["color"] as api5.Color?,
          theme: values["theme"] as api.ThemeData?,
          darkTheme: values["darkTheme"] as api.ThemeData?,
          highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
          highContrastDarkTheme:
              values["highContrastDarkTheme"] as api.ThemeData?,
          themeMode: values["themeMode"] as api.ThemeMode?,
          themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
          locale: values["locale"] as api5.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api5.Locale? Function(
                    List<api5.Locale>? locales,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api5.Locale? Function(
                    api5.Locale? locale,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          supportedLocales: values["supportedLocales"] as Iterable<api5.Locale>,
          debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
              values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          themeAnimationStyle:
              values["themeAnimationStyle"] as api3.AnimationStyle?,
        );
      }
      if (!values.containsKey("themeAnimationCurve")) {
        if (!values.containsKey("supportedLocales")) {
          return api.MaterialApp.router(
            key: values["key"] as api6.Key?,
            routeInformationProvider:
                values["routeInformationProvider"]
                    as api1.RouteInformationProvider?,
            routeInformationParser:
                values["routeInformationParser"]
                    as api1.RouteInformationParser<Object>?,
            routerDelegate:
                values["routerDelegate"] as api1.RouterDelegate<Object>?,
            routerConfig: values["routerConfig"] as api1.RouterConfig<Object>?,
            backButtonDispatcher:
                values["backButtonDispatcher"] as api1.BackButtonDispatcher?,
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
            color: values["color"] as api5.Color?,
            theme: values["theme"] as api.ThemeData?,
            darkTheme: values["darkTheme"] as api.ThemeData?,
            highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
            highContrastDarkTheme:
                values["highContrastDarkTheme"] as api.ThemeData?,
            themeMode: values["themeMode"] as api.ThemeMode?,
            themeAnimationDuration:
                values["themeAnimationDuration"] as api8.Duration,
            locale: values["locale"] as api5.Locale?,
            localizationsDelegates:
                values["localizationsDelegates"]
                    as Iterable<api1.LocalizationsDelegate<Object?>>?,
            localeListResolutionCallback:
                values["localeListResolutionCallback"]
                    as api5.Locale? Function(
                      List<api5.Locale>? locales,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            localeResolutionCallback:
                values["localeResolutionCallback"]
                    as api5.Locale? Function(
                      api5.Locale? locale,
                      Iterable<api5.Locale> supportedLocales,
                    )?,
            debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
                values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
            restorationScopeId: values["restorationScopeId"] as String?,
            scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
            useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
            themeAnimationStyle:
                values["themeAnimationStyle"] as api3.AnimationStyle?,
          );
        }
        return api.MaterialApp.router(
          key: values["key"] as api6.Key?,
          routeInformationProvider:
              values["routeInformationProvider"]
                  as api1.RouteInformationProvider?,
          routeInformationParser:
              values["routeInformationParser"]
                  as api1.RouteInformationParser<Object>?,
          routerDelegate:
              values["routerDelegate"] as api1.RouterDelegate<Object>?,
          routerConfig: values["routerConfig"] as api1.RouterConfig<Object>?,
          backButtonDispatcher:
              values["backButtonDispatcher"] as api1.BackButtonDispatcher?,
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
          color: values["color"] as api5.Color?,
          theme: values["theme"] as api.ThemeData?,
          darkTheme: values["darkTheme"] as api.ThemeData?,
          highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
          highContrastDarkTheme:
              values["highContrastDarkTheme"] as api.ThemeData?,
          themeMode: values["themeMode"] as api.ThemeMode?,
          themeAnimationDuration:
              values["themeAnimationDuration"] as api8.Duration,
          locale: values["locale"] as api5.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api5.Locale? Function(
                    List<api5.Locale>? locales,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api5.Locale? Function(
                    api5.Locale? locale,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          supportedLocales: values["supportedLocales"] as Iterable<api5.Locale>,
          debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
              values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          themeAnimationStyle:
              values["themeAnimationStyle"] as api3.AnimationStyle?,
        );
      }
      if (!values.containsKey("supportedLocales")) {
        return api.MaterialApp.router(
          key: values["key"] as api6.Key?,
          routeInformationProvider:
              values["routeInformationProvider"]
                  as api1.RouteInformationProvider?,
          routeInformationParser:
              values["routeInformationParser"]
                  as api1.RouteInformationParser<Object>?,
          routerDelegate:
              values["routerDelegate"] as api1.RouterDelegate<Object>?,
          routerConfig: values["routerConfig"] as api1.RouterConfig<Object>?,
          backButtonDispatcher:
              values["backButtonDispatcher"] as api1.BackButtonDispatcher?,
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
          color: values["color"] as api5.Color?,
          theme: values["theme"] as api.ThemeData?,
          darkTheme: values["darkTheme"] as api.ThemeData?,
          highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
          highContrastDarkTheme:
              values["highContrastDarkTheme"] as api.ThemeData?,
          themeMode: values["themeMode"] as api.ThemeMode?,
          themeAnimationDuration:
              values["themeAnimationDuration"] as api8.Duration,
          themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
          locale: values["locale"] as api5.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api1.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api5.Locale? Function(
                    List<api5.Locale>? locales,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api5.Locale? Function(
                    api5.Locale? locale,
                    Iterable<api5.Locale> supportedLocales,
                  )?,
          debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
              values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
          restorationScopeId: values["restorationScopeId"] as String?,
          scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
          useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
          themeAnimationStyle:
              values["themeAnimationStyle"] as api3.AnimationStyle?,
        );
      }
      return api.MaterialApp.router(
        key: values["key"] as api6.Key?,
        routeInformationProvider:
            values["routeInformationProvider"]
                as api1.RouteInformationProvider?,
        routeInformationParser:
            values["routeInformationParser"]
                as api1.RouteInformationParser<Object>?,
        routerDelegate:
            values["routerDelegate"] as api1.RouterDelegate<Object>?,
        routerConfig: values["routerConfig"] as api1.RouterConfig<Object>?,
        backButtonDispatcher:
            values["backButtonDispatcher"] as api1.BackButtonDispatcher?,
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
        color: values["color"] as api5.Color?,
        theme: values["theme"] as api.ThemeData?,
        darkTheme: values["darkTheme"] as api.ThemeData?,
        highContrastTheme: values["highContrastTheme"] as api.ThemeData?,
        highContrastDarkTheme:
            values["highContrastDarkTheme"] as api.ThemeData?,
        themeMode: values["themeMode"] as api.ThemeMode?,
        themeAnimationDuration:
            values["themeAnimationDuration"] as api8.Duration,
        themeAnimationCurve: values["themeAnimationCurve"] as api3.Curve,
        locale: values["locale"] as api5.Locale?,
        localizationsDelegates:
            values["localizationsDelegates"]
                as Iterable<api1.LocalizationsDelegate<Object?>>?,
        localeListResolutionCallback:
            values["localeListResolutionCallback"]
                as api5.Locale? Function(
                  List<api5.Locale>? locales,
                  Iterable<api5.Locale> supportedLocales,
                )?,
        localeResolutionCallback:
            values["localeResolutionCallback"]
                as api5.Locale? Function(
                  api5.Locale? locale,
                  Iterable<api5.Locale> supportedLocales,
                )?,
        supportedLocales: values["supportedLocales"] as Iterable<api5.Locale>,
        debugShowMaterialGrid: values["debugShowMaterialGrid"] as bool,
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
        actions: values["actions"] as Map<api8.Type, api1.Action<api1.Intent>>?,
        restorationScopeId: values["restorationScopeId"] as String?,
        scrollBehavior: values["scrollBehavior"] as api1.ScrollBehavior?,
        useInheritedMediaQuery: values["useInheritedMediaQuery"] as bool,
        themeAnimationStyle:
            values["themeAnimationStyle"] as api3.AnimationStyle?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isMaterialPage(Object value) => value is api.MaterialPage<Object?>;
Object? _MaterialPage_name(Object value) =>
    (value as api.MaterialPage<Object?>).name;
Object? _MaterialPage_arguments(Object value) =>
    (value as api.MaterialPage<Object?>).arguments;
Object? _MaterialPage_key(Object value) =>
    (value as api.MaterialPage<Object?>).key;
Object? _MaterialPage_restorationId(Object value) =>
    (value as api.MaterialPage<Object?>).restorationId;
Object? _MaterialPage_onPopInvoked(Object value) =>
    (value as api.MaterialPage<Object?>).onPopInvoked;
Object? _MaterialPage_canPop(Object value) =>
    (value as api.MaterialPage<Object?>).canPop;
Object? _MaterialPage_child(Object value) =>
    (value as api.MaterialPage<Object?>).child;
Object? _MaterialPage_maintainState(Object value) =>
    (value as api.MaterialPage<Object?>).maintainState;
Object? _MaterialPage_fullscreenDialog(Object value) =>
    (value as api.MaterialPage<Object?>).fullscreenDialog;
Object? _MaterialPage_allowSnapshotting(Object value) =>
    (value as api.MaterialPage<Object?>).allowSnapshotting;
Object? _MaterialPage_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.MaterialPage<Object?>).toString();
}

Object? _MaterialPage_canUpdate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.MaterialPage<Object?>).canUpdate(
    values["other"] as api1.Page<Object?>,
  );
}

Object? _MaterialPage_createRoute(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPage<Object?>).createRoute(
    values["context"] as api1.BuildContext,
  );
}

Object _createMaterialPage(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("onPopInvoked")) {
        return api.MaterialPage<Object?>(
          child: values["child"] as api1.Widget,
          maintainState: values["maintainState"] as bool,
          fullscreenDialog: values["fullscreenDialog"] as bool,
          allowSnapshotting: values["allowSnapshotting"] as bool,
          key: values["key"] as api6.LocalKey?,
          canPop: values["canPop"] as bool,
          name: values["name"] as String?,
          arguments: values["arguments"],
          restorationId: values["restorationId"] as String?,
        );
      }
      return api.MaterialPage<Object?>(
        child: values["child"] as api1.Widget,
        maintainState: values["maintainState"] as bool,
        fullscreenDialog: values["fullscreenDialog"] as bool,
        allowSnapshotting: values["allowSnapshotting"] as bool,
        key: values["key"] as api6.LocalKey?,
        canPop: values["canPop"] as bool,
        onPopInvoked:
            values["onPopInvoked"]
                as void Function(bool didPop, Object? result),
        name: values["name"] as String?,
        arguments: values["arguments"],
        restorationId: values["restorationId"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isMaterialPageRoute(Object value) =>
    value is api.MaterialPageRoute<Object?>;
Object? _MaterialPageRoute_filter(Object value) =>
    (value as api.MaterialPageRoute<Object?>).filter;
Object? _MaterialPageRoute_traversalEdgeBehavior(Object value) =>
    (value as api.MaterialPageRoute<Object?>).traversalEdgeBehavior;
Object? _MaterialPageRoute_directionalTraversalEdgeBehavior(Object value) =>
    (value as api.MaterialPageRoute<Object?>).directionalTraversalEdgeBehavior;
Object? _MaterialPageRoute_delegatedTransition(Object value) =>
    (value as api.MaterialPageRoute<Object?>).delegatedTransition;
Object? _MaterialPageRoute_receivedTransition(Object value) =>
    (value as api.MaterialPageRoute<Object?>).receivedTransition;
Object? _MaterialPageRoute_barrierDismissible(Object value) =>
    (value as api.MaterialPageRoute<Object?>).barrierDismissible;
Object? _MaterialPageRoute_semanticsDismissible(Object value) =>
    (value as api.MaterialPageRoute<Object?>).semanticsDismissible;
Object? _MaterialPageRoute_barrierColor(Object value) =>
    (value as api.MaterialPageRoute<Object?>).barrierColor;
Object? _MaterialPageRoute_barrierLabel(Object value) =>
    (value as api.MaterialPageRoute<Object?>).barrierLabel;
Object? _MaterialPageRoute_barrierCurve(Object value) =>
    (value as api.MaterialPageRoute<Object?>).barrierCurve;
Object? _MaterialPageRoute_maintainState(Object value) =>
    (value as api.MaterialPageRoute<Object?>).maintainState;
Object? _MaterialPageRoute_popGestureInProgress(Object value) =>
    (value as api.MaterialPageRoute<Object?>).popGestureInProgress;
Object? _MaterialPageRoute_popGestureEnabled(Object value) =>
    (value as api.MaterialPageRoute<Object?>).popGestureEnabled;
Object? _MaterialPageRoute_offstage(Object value) =>
    (value as api.MaterialPageRoute<Object?>).offstage;
Object? _MaterialPageRoute_subtreeContext(Object value) =>
    (value as api.MaterialPageRoute<Object?>).subtreeContext;
Object? _MaterialPageRoute_animation(Object value) =>
    (value as api.MaterialPageRoute<Object?>).animation;
Object? _MaterialPageRoute_secondaryAnimation(Object value) =>
    (value as api.MaterialPageRoute<Object?>).secondaryAnimation;
Object? _MaterialPageRoute_popDisposition(Object value) =>
    (value as api.MaterialPageRoute<Object?>).popDisposition;
Object? _MaterialPageRoute_hasScopedWillPopCallback(Object value) =>
    (value as api.MaterialPageRoute<Object?>).hasScopedWillPopCallback;
Object? _MaterialPageRoute_canPop(Object value) =>
    (value as api.MaterialPageRoute<Object?>).canPop;
Object? _MaterialPageRoute_impliesAppBarDismissal(Object value) =>
    (value as api.MaterialPageRoute<Object?>).impliesAppBarDismissal;
Object? _MaterialPageRoute_fullscreenDialog(Object value) =>
    (value as api.MaterialPageRoute<Object?>).fullscreenDialog;
Object? _MaterialPageRoute_completed(Object value) =>
    (value as api.MaterialPageRoute<Object?>).completed;
Object? _MaterialPageRoute_transitionDuration(Object value) =>
    (value as api.MaterialPageRoute<Object?>).transitionDuration;
Object? _MaterialPageRoute_reverseTransitionDuration(Object value) =>
    (value as api.MaterialPageRoute<Object?>).reverseTransitionDuration;
Object? _MaterialPageRoute_opaque(Object value) =>
    (value as api.MaterialPageRoute<Object?>).opaque;
Object? _MaterialPageRoute_allowSnapshotting(Object value) =>
    (value as api.MaterialPageRoute<Object?>).allowSnapshotting;
Object? _MaterialPageRoute_finishedWhenPopped(Object value) =>
    (value as api.MaterialPageRoute<Object?>).finishedWhenPopped;
Object? _MaterialPageRoute_controller(Object value) =>
    (value as api.MaterialPageRoute<Object?>).controller;
Object? _MaterialPageRoute_willDisposeAnimationController(Object value) =>
    (value as api.MaterialPageRoute<Object?>).willDisposeAnimationController;
Object? _MaterialPageRoute_debugLabel(Object value) =>
    (value as api.MaterialPageRoute<Object?>).debugLabel;
Object? _MaterialPageRoute_overlayEntries(Object value) =>
    (value as api.MaterialPageRoute<Object?>).overlayEntries;
Object? _MaterialPageRoute_requestFocus(Object value) =>
    (value as api.MaterialPageRoute<Object?>).requestFocus;
Object? _MaterialPageRoute_navigator(Object value) =>
    (value as api.MaterialPageRoute<Object?>).navigator;
Object? _MaterialPageRoute_settings(Object value) =>
    (value as api.MaterialPageRoute<Object?>).settings;
Object? _MaterialPageRoute_restorationScopeId(Object value) =>
    (value as api.MaterialPageRoute<Object?>).restorationScopeId;
Object? _MaterialPageRoute_willHandlePopInternally(Object value) =>
    (value as api.MaterialPageRoute<Object?>).willHandlePopInternally;
Object? _MaterialPageRoute_currentResult(Object value) =>
    (value as api.MaterialPageRoute<Object?>).currentResult;
Object? _MaterialPageRoute_popped(Object value) =>
    (value as api.MaterialPageRoute<Object?>).popped;
Object? _MaterialPageRoute_isCurrent(Object value) =>
    (value as api.MaterialPageRoute<Object?>).isCurrent;
Object? _MaterialPageRoute_isFirst(Object value) =>
    (value as api.MaterialPageRoute<Object?>).isFirst;
Object? _MaterialPageRoute_hasActiveRouteBelow(Object value) =>
    (value as api.MaterialPageRoute<Object?>).hasActiveRouteBelow;
Object? _MaterialPageRoute_isActive(Object value) =>
    (value as api.MaterialPageRoute<Object?>).isActive;
Object? _MaterialPageRoute_builder(Object value) =>
    (value as api.MaterialPageRoute<Object?>).builder;
void _MaterialPageRoute_set_receivedTransition(Object receiver, Object? value) {
  (receiver as api.MaterialPageRoute<Object?>).receivedTransition =
      value
          as api1.Widget? Function(
            api1.BuildContext context,
            api3.Animation<double> animation,
            api3.Animation<double> secondaryAnimation,
            bool allowSnapshotting,
            api1.Widget? child,
          )?;
}

void _MaterialPageRoute_set_offstage(Object receiver, Object? value) {
  (receiver as api.MaterialPageRoute<Object?>).offstage = value as bool;
}

void _MaterialPageRoute_set_willDisposeAnimationController(
  Object receiver,
  Object? value,
) {
  (receiver as api.MaterialPageRoute<Object?>).willDisposeAnimationController =
      value as bool;
}

Object? _MaterialPageRoute_setState(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).setState(
    values["fn"] as void Function(),
  );
  return null;
}

Object? _MaterialPageRoute_buildPage(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).buildPage(
    values["context"] as api1.BuildContext,
    values["animation"] as api3.Animation<double>,
    values["secondaryAnimation"] as api3.Animation<double>,
  );
}

Object? _MaterialPageRoute_buildTransitions(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).buildTransitions(
    values["context"] as api1.BuildContext,
    values["animation"] as api3.Animation<double>,
    values["secondaryAnimation"] as api3.Animation<double>,
    values["child"] as api1.Widget,
  );
}

Object? _MaterialPageRoute_install(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).install();
  return null;
}

Object? _MaterialPageRoute_didPush(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).didPush();
}

Object? _MaterialPageRoute_didAdd(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).didAdd();
  return null;
}

Object? _MaterialPageRoute_willPop(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).willPop();
}

Object? _MaterialPageRoute_onPopInvokedWithResult(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).onPopInvokedWithResult(
    values["didPop"] as bool,
    values["result"],
  );
  return null;
}

Object? _MaterialPageRoute_addScopedWillPopCallback(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).addScopedWillPopCallback(
    values["callback"] as Future<bool> Function(),
  );
  return null;
}

Object? _MaterialPageRoute_removeScopedWillPopCallback(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).removeScopedWillPopCallback(
    values["callback"] as Future<bool> Function(),
  );
  return null;
}

Object? _MaterialPageRoute_registerPopEntry(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).registerPopEntry(
    values["popEntry"] as api1.PopEntry<Object?>,
  );
  return null;
}

Object? _MaterialPageRoute_unregisterPopEntry(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).unregisterPopEntry(
    values["popEntry"] as api1.PopEntry<Object?>,
  );
  return null;
}

Object? _MaterialPageRoute_didChangePrevious(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).didChangePrevious(
    values["previousRoute"] as api1.Route<Object?>?,
  );
  return null;
}

Object? _MaterialPageRoute_didChangeNext(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).didChangeNext(
    values["nextRoute"] as api1.Route<Object?>?,
  );
  return null;
}

Object? _MaterialPageRoute_didPopNext(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).didPopNext(
    values["nextRoute"] as api1.Route<Object?>,
  );
  return null;
}

Object? _MaterialPageRoute_changedInternalState(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).changedInternalState();
  return null;
}

Object? _MaterialPageRoute_changedExternalState(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).changedExternalState();
  return null;
}

Object? _MaterialPageRoute_buildModalBarrier(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).buildModalBarrier();
}

Object? _MaterialPageRoute_createOverlayEntries(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).createOverlayEntries();
}

Object? _MaterialPageRoute_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).toString();
}

Object? _MaterialPageRoute_debugTransitionCompleted(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>)
      .debugTransitionCompleted();
}

Object? _MaterialPageRoute_createAnimationController(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>)
      .createAnimationController();
}

Object? _MaterialPageRoute_createAnimation(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).createAnimation();
}

Object? _MaterialPageRoute_createSimulation(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).createSimulation(
    forward: values["forward"] as bool,
  );
}

Object? _MaterialPageRoute_didReplace(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).didReplace(
    values["oldRoute"] as api1.Route<Object?>?,
  );
  return null;
}

Object? _MaterialPageRoute_didPop(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).didPop(values["result"]);
}

Object? _MaterialPageRoute_canTransitionTo(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).canTransitionTo(
    values["nextRoute"] as api1.TransitionRoute<Object?>,
  );
}

Object? _MaterialPageRoute_canTransitionFrom(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).canTransitionFrom(
    values["previousRoute"] as api1.TransitionRoute<Object?>,
  );
}

Object? _MaterialPageRoute_handleStartBackGesture(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).handleStartBackGesture(
    progress: values["progress"] as double,
  );
  return null;
}

Object? _MaterialPageRoute_handleUpdateBackGestureProgress(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).handleUpdateBackGestureProgress(
    progress: values["progress"] as double,
  );
  return null;
}

Object? _MaterialPageRoute_handleCancelBackGesture(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).handleCancelBackGesture();
  return null;
}

Object? _MaterialPageRoute_handleCommitBackGesture(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).handleCommitBackGesture();
  return null;
}

Object? _MaterialPageRoute_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).dispose();
  return null;
}

Object? _MaterialPageRoute_onPopInvoked(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).onPopInvoked(
    values["didPop"] as bool,
  );
  return null;
}

Object? _MaterialPageRoute_didComplete(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).didComplete(values["result"]);
  return null;
}

Object? _MaterialPageRoute_addLocalHistoryEntry(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).addLocalHistoryEntry(
    values["entry"] as api1.LocalHistoryEntry,
  );
  return null;
}

Object? _MaterialPageRoute_removeLocalHistoryEntry(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.MaterialPageRoute<Object?>).removeLocalHistoryEntry(
    values["entry"] as api1.LocalHistoryEntry,
  );
  return null;
}

Object? _MaterialPageRoute_buildContent(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.MaterialPageRoute<Object?>).buildContent(
    values["context"] as api1.BuildContext,
  );
}

Object _createMaterialPageRoute(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.MaterialPageRoute<Object?>(
        builder:
            values["builder"]
                as api1.Widget Function(api1.BuildContext context),
        settings: values["settings"] as api1.RouteSettings?,
        requestFocus: values["requestFocus"] as bool?,
        maintainState: values["maintainState"] as bool,
        fullscreenDialog: values["fullscreenDialog"] as bool,
        allowSnapshotting: values["allowSnapshotting"] as bool,
        barrierDismissible: values["barrierDismissible"] as bool,
        traversalEdgeBehavior:
            values["traversalEdgeBehavior"] as api1.TraversalEdgeBehavior?,
        directionalTraversalEdgeBehavior:
            values["directionalTraversalEdgeBehavior"]
                as api1.TraversalEdgeBehavior?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isNavigationBar(Object value) => value is api.NavigationBar;

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
        key: values["key"] as api6.Key?,
        animationDuration: values["animationDuration"] as api8.Duration?,
        selectedIndex: values["selectedIndex"] as int,
        destinations: values["destinations"] as List<api1.Widget>,
        onDestinationSelected:
            values["onDestinationSelected"] as void Function(int value)?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        elevation: values["elevation"] as double?,
        shadowColor: values["shadowColor"] as api5.Color?,
        surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
        indicatorColor: values["indicatorColor"] as api5.Color?,
        indicatorShape: values["indicatorShape"] as api2.ShapeBorder?,
        height: values["height"] as double?,
        labelBehavior:
            values["labelBehavior"] as api.NavigationDestinationLabelBehavior?,
        overlayColor:
            values["overlayColor"] as api1.WidgetStateProperty<api5.Color?>?,
        labelTextStyle:
            values["labelTextStyle"]
                as api1.WidgetStateProperty<api2.TextStyle?>?,
        labelPadding: values["labelPadding"] as api2.EdgeInsetsGeometry?,
        maintainBottomViewPadding: values["maintainBottomViewPadding"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isNavigationDestination(Object value) =>
    value is api.NavigationDestination;

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
        key: values["key"] as api6.Key?,
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

bool _isOutlinedButton(Object value) => value is api.OutlinedButton;
Object? _OutlinedButton_styleFrom(Map<String, Object?> values) {
  return api.OutlinedButton.styleFrom(
    alignment: values["alignment"] as api2.AlignmentGeometry?,
    animationDuration: values["animationDuration"] as api8.Duration?,
    backgroundBuilder:
        values["backgroundBuilder"]
            as api1.Widget Function(
              api1.BuildContext context,
              Set<api1.WidgetState> states,
              api1.Widget? child,
            )?,
    backgroundColor: values["backgroundColor"] as api5.Color?,
    disabledBackgroundColor: values["disabledBackgroundColor"] as api5.Color?,
    disabledForegroundColor: values["disabledForegroundColor"] as api5.Color?,
    disabledIconColor: values["disabledIconColor"] as api5.Color?,
    disabledMouseCursor: values["disabledMouseCursor"] as api9.MouseCursor?,
    elevation: values["elevation"] as double?,
    enableFeedback: values["enableFeedback"] as bool?,
    enabledMouseCursor: values["enabledMouseCursor"] as api9.MouseCursor?,
    fixedSize: values["fixedSize"] as api5.Size?,
    foregroundBuilder:
        values["foregroundBuilder"]
            as api1.Widget Function(
              api1.BuildContext context,
              Set<api1.WidgetState> states,
              api1.Widget? child,
            )?,
    foregroundColor: values["foregroundColor"] as api5.Color?,
    iconColor: values["iconColor"] as api5.Color?,
    iconSize: values["iconSize"] as double?,
    maximumSize: values["maximumSize"] as api5.Size?,
    minimumSize: values["minimumSize"] as api5.Size?,
    overlayColor: values["overlayColor"] as api5.Color?,
    padding: values["padding"] as api2.EdgeInsetsGeometry?,
    shadowColor: values["shadowColor"] as api5.Color?,
    shape: values["shape"] as api2.OutlinedBorder?,
    side: values["side"] as api2.BorderSide?,
    surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
    textStyle: values["textStyle"] as api2.TextStyle?,
    visualDensity: values["visualDensity"] as api.VisualDensity?,
  );
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
        key: values["key"] as api6.Key?,
        onPressed: values["onPressed"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        style: values["style"] as api.ButtonStyle?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        child: values["child"] as api1.Widget?,
      );
    case "icon":
      return api.OutlinedButton.icon(
        key: values["key"] as api6.Key?,
        onPressed: values["onPressed"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        style: values["style"] as api.ButtonStyle?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        icon: values["icon"] as api1.Widget?,
        label: values["label"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isRefreshIndicator(Object value) => value is api.RefreshIndicator;

class _RefreshIndicatorHost extends FlaxWidgetHost {
  _RefreshIndicatorHost(super.node);
  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createRefreshIndicator(node.ctor, values);
}

api1.Widget _createRefreshIndicator(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("notificationPredicate")) {
        return api.RefreshIndicator(
          key: values["key"] as api6.Key?,
          displacement: values["displacement"] as double,
          edgeOffset: values["edgeOffset"] as double,
          onRefresh: values["onRefresh"] as Future<void> Function(),
          color: values["color"] as api5.Color?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          semanticsLabel: values["semanticsLabel"] as String?,
          semanticsValue: values["semanticsValue"] as String?,
          strokeWidth: values["strokeWidth"] as double,
          elevation: values["elevation"] as double,
          child: values["child"] as api1.Widget,
        );
      }
      return api.RefreshIndicator(
        key: values["key"] as api6.Key?,
        displacement: values["displacement"] as double,
        edgeOffset: values["edgeOffset"] as double,
        onRefresh: values["onRefresh"] as Future<void> Function(),
        color: values["color"] as api5.Color?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        notificationPredicate:
            values["notificationPredicate"]
                as bool Function(api1.ScrollNotification notification),
        semanticsLabel: values["semanticsLabel"] as String?,
        semanticsValue: values["semanticsValue"] as String?,
        strokeWidth: values["strokeWidth"] as double,
        elevation: values["elevation"] as double,
        child: values["child"] as api1.Widget,
      );
    case "adaptive":
      if (!values.containsKey("notificationPredicate")) {
        return api.RefreshIndicator.adaptive(
          key: values["key"] as api6.Key?,
          displacement: values["displacement"] as double,
          edgeOffset: values["edgeOffset"] as double,
          onRefresh: values["onRefresh"] as Future<void> Function(),
          color: values["color"] as api5.Color?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          semanticsLabel: values["semanticsLabel"] as String?,
          semanticsValue: values["semanticsValue"] as String?,
          strokeWidth: values["strokeWidth"] as double,
          elevation: values["elevation"] as double,
          child: values["child"] as api1.Widget,
        );
      }
      return api.RefreshIndicator.adaptive(
        key: values["key"] as api6.Key?,
        displacement: values["displacement"] as double,
        edgeOffset: values["edgeOffset"] as double,
        onRefresh: values["onRefresh"] as Future<void> Function(),
        color: values["color"] as api5.Color?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        notificationPredicate:
            values["notificationPredicate"]
                as bool Function(api1.ScrollNotification notification),
        semanticsLabel: values["semanticsLabel"] as String?,
        semanticsValue: values["semanticsValue"] as String?,
        strokeWidth: values["strokeWidth"] as double,
        elevation: values["elevation"] as double,
        child: values["child"] as api1.Widget,
      );
    case "noSpinner":
      if (!values.containsKey("notificationPredicate")) {
        return api.RefreshIndicator.noSpinner(
          key: values["key"] as api6.Key?,
          onRefresh: values["onRefresh"] as Future<void> Function(),
          semanticsLabel: values["semanticsLabel"] as String?,
          semanticsValue: values["semanticsValue"] as String?,
          elevation: values["elevation"] as double,
          child: values["child"] as api1.Widget,
        );
      }
      return api.RefreshIndicator.noSpinner(
        key: values["key"] as api6.Key?,
        onRefresh: values["onRefresh"] as Future<void> Function(),
        notificationPredicate:
            values["notificationPredicate"]
                as bool Function(api1.ScrollNotification notification),
        semanticsLabel: values["semanticsLabel"] as String?,
        semanticsValue: values["semanticsValue"] as String?,
        elevation: values["elevation"] as double,
        child: values["child"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isScaffold(Object value) => value is api.Scaffold;
Object? _Scaffold_hasDrawer(Map<String, Object?> values) {
  return api.Scaffold.hasDrawer(
    values["context"] as api1.BuildContext,
    registerForUpdates: values["registerForUpdates"] as bool,
  );
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
      if (!values.containsKey("persistentFooterAlignment")) {
        if (!values.containsKey("bottomSheetScrimBuilder")) {
          return api.Scaffold(
            key: values["key"] as api6.Key?,
            appBar: values["appBar"] as api1.PreferredSizeWidget?,
            body: values["body"] as api1.Widget?,
            floatingActionButton:
                values["floatingActionButton"] as api1.Widget?,
            persistentFooterButtons:
                values["persistentFooterButtons"] as List<api1.Widget>?,
            persistentFooterDecoration:
                values["persistentFooterDecoration"] as api2.BoxDecoration?,
            drawer: values["drawer"] as api1.Widget?,
            onDrawerChanged:
                values["onDrawerChanged"] as void Function(bool isOpened)?,
            endDrawer: values["endDrawer"] as api1.Widget?,
            onEndDrawerChanged:
                values["onEndDrawerChanged"] as void Function(bool isOpened)?,
            bottomNavigationBar: values["bottomNavigationBar"] as api1.Widget?,
            bottomSheet: values["bottomSheet"] as api1.Widget?,
            backgroundColor: values["backgroundColor"] as api5.Color?,
            resizeToAvoidBottomInset:
                values["resizeToAvoidBottomInset"] as bool?,
            primary: values["primary"] as bool,
            drawerDragStartBehavior:
                values["drawerDragStartBehavior"] as api7.DragStartBehavior,
            extendBody: values["extendBody"] as bool,
            drawerBarrierDismissible:
                values["drawerBarrierDismissible"] as bool,
            extendBodyBehindAppBar: values["extendBodyBehindAppBar"] as bool,
            drawerScrimColor: values["drawerScrimColor"] as api5.Color?,
            drawerEdgeDragWidth: values["drawerEdgeDragWidth"] as double?,
            drawerEnableOpenDragGesture:
                values["drawerEnableOpenDragGesture"] as bool,
            endDrawerEnableOpenDragGesture:
                values["endDrawerEnableOpenDragGesture"] as bool,
            restorationId: values["restorationId"] as String?,
          );
        }
        return api.Scaffold(
          key: values["key"] as api6.Key?,
          appBar: values["appBar"] as api1.PreferredSizeWidget?,
          body: values["body"] as api1.Widget?,
          floatingActionButton: values["floatingActionButton"] as api1.Widget?,
          persistentFooterButtons:
              values["persistentFooterButtons"] as List<api1.Widget>?,
          persistentFooterDecoration:
              values["persistentFooterDecoration"] as api2.BoxDecoration?,
          drawer: values["drawer"] as api1.Widget?,
          onDrawerChanged:
              values["onDrawerChanged"] as void Function(bool isOpened)?,
          endDrawer: values["endDrawer"] as api1.Widget?,
          onEndDrawerChanged:
              values["onEndDrawerChanged"] as void Function(bool isOpened)?,
          bottomNavigationBar: values["bottomNavigationBar"] as api1.Widget?,
          bottomSheet: values["bottomSheet"] as api1.Widget?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          resizeToAvoidBottomInset: values["resizeToAvoidBottomInset"] as bool?,
          primary: values["primary"] as bool,
          drawerDragStartBehavior:
              values["drawerDragStartBehavior"] as api7.DragStartBehavior,
          extendBody: values["extendBody"] as bool,
          drawerBarrierDismissible: values["drawerBarrierDismissible"] as bool,
          extendBodyBehindAppBar: values["extendBodyBehindAppBar"] as bool,
          drawerScrimColor: values["drawerScrimColor"] as api5.Color?,
          bottomSheetScrimBuilder:
              values["bottomSheetScrimBuilder"]
                  as api1.Widget? Function(
                    api1.BuildContext p0,
                    api3.Animation<double> p1,
                  ),
          drawerEdgeDragWidth: values["drawerEdgeDragWidth"] as double?,
          drawerEnableOpenDragGesture:
              values["drawerEnableOpenDragGesture"] as bool,
          endDrawerEnableOpenDragGesture:
              values["endDrawerEnableOpenDragGesture"] as bool,
          restorationId: values["restorationId"] as String?,
        );
      }
      if (!values.containsKey("bottomSheetScrimBuilder")) {
        return api.Scaffold(
          key: values["key"] as api6.Key?,
          appBar: values["appBar"] as api1.PreferredSizeWidget?,
          body: values["body"] as api1.Widget?,
          floatingActionButton: values["floatingActionButton"] as api1.Widget?,
          persistentFooterButtons:
              values["persistentFooterButtons"] as List<api1.Widget>?,
          persistentFooterAlignment:
              values["persistentFooterAlignment"] as api2.AlignmentDirectional,
          persistentFooterDecoration:
              values["persistentFooterDecoration"] as api2.BoxDecoration?,
          drawer: values["drawer"] as api1.Widget?,
          onDrawerChanged:
              values["onDrawerChanged"] as void Function(bool isOpened)?,
          endDrawer: values["endDrawer"] as api1.Widget?,
          onEndDrawerChanged:
              values["onEndDrawerChanged"] as void Function(bool isOpened)?,
          bottomNavigationBar: values["bottomNavigationBar"] as api1.Widget?,
          bottomSheet: values["bottomSheet"] as api1.Widget?,
          backgroundColor: values["backgroundColor"] as api5.Color?,
          resizeToAvoidBottomInset: values["resizeToAvoidBottomInset"] as bool?,
          primary: values["primary"] as bool,
          drawerDragStartBehavior:
              values["drawerDragStartBehavior"] as api7.DragStartBehavior,
          extendBody: values["extendBody"] as bool,
          drawerBarrierDismissible: values["drawerBarrierDismissible"] as bool,
          extendBodyBehindAppBar: values["extendBodyBehindAppBar"] as bool,
          drawerScrimColor: values["drawerScrimColor"] as api5.Color?,
          drawerEdgeDragWidth: values["drawerEdgeDragWidth"] as double?,
          drawerEnableOpenDragGesture:
              values["drawerEnableOpenDragGesture"] as bool,
          endDrawerEnableOpenDragGesture:
              values["endDrawerEnableOpenDragGesture"] as bool,
          restorationId: values["restorationId"] as String?,
        );
      }
      return api.Scaffold(
        key: values["key"] as api6.Key?,
        appBar: values["appBar"] as api1.PreferredSizeWidget?,
        body: values["body"] as api1.Widget?,
        floatingActionButton: values["floatingActionButton"] as api1.Widget?,
        persistentFooterButtons:
            values["persistentFooterButtons"] as List<api1.Widget>?,
        persistentFooterAlignment:
            values["persistentFooterAlignment"] as api2.AlignmentDirectional,
        persistentFooterDecoration:
            values["persistentFooterDecoration"] as api2.BoxDecoration?,
        drawer: values["drawer"] as api1.Widget?,
        onDrawerChanged:
            values["onDrawerChanged"] as void Function(bool isOpened)?,
        endDrawer: values["endDrawer"] as api1.Widget?,
        onEndDrawerChanged:
            values["onEndDrawerChanged"] as void Function(bool isOpened)?,
        bottomNavigationBar: values["bottomNavigationBar"] as api1.Widget?,
        bottomSheet: values["bottomSheet"] as api1.Widget?,
        backgroundColor: values["backgroundColor"] as api5.Color?,
        resizeToAvoidBottomInset: values["resizeToAvoidBottomInset"] as bool?,
        primary: values["primary"] as bool,
        drawerDragStartBehavior:
            values["drawerDragStartBehavior"] as api7.DragStartBehavior,
        extendBody: values["extendBody"] as bool,
        drawerBarrierDismissible: values["drawerBarrierDismissible"] as bool,
        extendBodyBehindAppBar: values["extendBodyBehindAppBar"] as bool,
        drawerScrimColor: values["drawerScrimColor"] as api5.Color?,
        bottomSheetScrimBuilder:
            values["bottomSheetScrimBuilder"]
                as api1.Widget? Function(
                  api1.BuildContext p0,
                  api3.Animation<double> p1,
                ),
        drawerEdgeDragWidth: values["drawerEdgeDragWidth"] as double?,
        drawerEnableOpenDragGesture:
            values["drawerEnableOpenDragGesture"] as bool,
        endDrawerEnableOpenDragGesture:
            values["endDrawerEnableOpenDragGesture"] as bool,
        restorationId: values["restorationId"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSwitch(Object value) => value is api.Switch;

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
        key: values["key"] as api6.Key?,
        value: values["value"] as bool,
        onChanged: values["onChanged"] as void Function(bool value)?,
        activeColor: values["activeColor"] as api5.Color?,
        activeThumbColor: values["activeThumbColor"] as api5.Color?,
        activeTrackColor: values["activeTrackColor"] as api5.Color?,
        inactiveThumbColor: values["inactiveThumbColor"] as api5.Color?,
        inactiveTrackColor: values["inactiveTrackColor"] as api5.Color?,
        activeThumbImage:
            values["activeThumbImage"] as api2.ImageProvider<Object>?,
        onActiveThumbImageError:
            values["onActiveThumbImageError"]
                as void Function(
                  Object exception,
                  api8.StackTrace? stackTrace,
                )?,
        inactiveThumbImage:
            values["inactiveThumbImage"] as api2.ImageProvider<Object>?,
        onInactiveThumbImageError:
            values["onInactiveThumbImageError"]
                as void Function(
                  Object exception,
                  api8.StackTrace? stackTrace,
                )?,
        thumbColor:
            values["thumbColor"] as api1.WidgetStateProperty<api5.Color?>?,
        trackColor:
            values["trackColor"] as api1.WidgetStateProperty<api5.Color?>?,
        trackOutlineColor:
            values["trackOutlineColor"]
                as api1.WidgetStateProperty<api5.Color?>?,
        trackOutlineWidth:
            values["trackOutlineWidth"] as api1.WidgetStateProperty<double?>?,
        thumbIcon: values["thumbIcon"] as api1.WidgetStateProperty<api1.Icon?>?,
        dragStartBehavior:
            values["dragStartBehavior"] as api7.DragStartBehavior,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        overlayColor:
            values["overlayColor"] as api1.WidgetStateProperty<api5.Color?>?,
        splashRadius: values["splashRadius"] as double?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        autofocus: values["autofocus"] as bool,
        padding: values["padding"] as api2.EdgeInsetsGeometry?,
      );
    case "adaptive":
      return api.Switch.adaptive(
        key: values["key"] as api6.Key?,
        value: values["value"] as bool,
        onChanged: values["onChanged"] as void Function(bool value)?,
        activeColor: values["activeColor"] as api5.Color?,
        activeThumbColor: values["activeThumbColor"] as api5.Color?,
        activeTrackColor: values["activeTrackColor"] as api5.Color?,
        inactiveThumbColor: values["inactiveThumbColor"] as api5.Color?,
        inactiveTrackColor: values["inactiveTrackColor"] as api5.Color?,
        activeThumbImage:
            values["activeThumbImage"] as api2.ImageProvider<Object>?,
        onActiveThumbImageError:
            values["onActiveThumbImageError"]
                as void Function(
                  Object exception,
                  api8.StackTrace? stackTrace,
                )?,
        inactiveThumbImage:
            values["inactiveThumbImage"] as api2.ImageProvider<Object>?,
        onInactiveThumbImageError:
            values["onInactiveThumbImageError"]
                as void Function(
                  Object exception,
                  api8.StackTrace? stackTrace,
                )?,
        thumbColor:
            values["thumbColor"] as api1.WidgetStateProperty<api5.Color?>?,
        trackColor:
            values["trackColor"] as api1.WidgetStateProperty<api5.Color?>?,
        trackOutlineColor:
            values["trackOutlineColor"]
                as api1.WidgetStateProperty<api5.Color?>?,
        trackOutlineWidth:
            values["trackOutlineWidth"] as api1.WidgetStateProperty<double?>?,
        thumbIcon: values["thumbIcon"] as api1.WidgetStateProperty<api1.Icon?>?,
        dragStartBehavior:
            values["dragStartBehavior"] as api7.DragStartBehavior,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        focusColor: values["focusColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        overlayColor:
            values["overlayColor"] as api1.WidgetStateProperty<api5.Color?>?,
        splashRadius: values["splashRadius"] as double?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        autofocus: values["autofocus"] as bool,
        padding: values["padding"] as api2.EdgeInsetsGeometry?,
        applyCupertinoTheme: values["applyCupertinoTheme"] as bool?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextButton(Object value) => value is api.TextButton;
Object? _TextButton_styleFrom(Map<String, Object?> values) {
  return api.TextButton.styleFrom(
    alignment: values["alignment"] as api2.AlignmentGeometry?,
    animationDuration: values["animationDuration"] as api8.Duration?,
    backgroundBuilder:
        values["backgroundBuilder"]
            as api1.Widget Function(
              api1.BuildContext context,
              Set<api1.WidgetState> states,
              api1.Widget? child,
            )?,
    backgroundColor: values["backgroundColor"] as api5.Color?,
    disabledBackgroundColor: values["disabledBackgroundColor"] as api5.Color?,
    disabledForegroundColor: values["disabledForegroundColor"] as api5.Color?,
    disabledIconColor: values["disabledIconColor"] as api5.Color?,
    disabledMouseCursor: values["disabledMouseCursor"] as api9.MouseCursor?,
    elevation: values["elevation"] as double?,
    enableFeedback: values["enableFeedback"] as bool?,
    enabledMouseCursor: values["enabledMouseCursor"] as api9.MouseCursor?,
    fixedSize: values["fixedSize"] as api5.Size?,
    foregroundBuilder:
        values["foregroundBuilder"]
            as api1.Widget Function(
              api1.BuildContext context,
              Set<api1.WidgetState> states,
              api1.Widget? child,
            )?,
    foregroundColor: values["foregroundColor"] as api5.Color?,
    iconColor: values["iconColor"] as api5.Color?,
    iconSize: values["iconSize"] as double?,
    maximumSize: values["maximumSize"] as api5.Size?,
    minimumSize: values["minimumSize"] as api5.Size?,
    overlayColor: values["overlayColor"] as api5.Color?,
    padding: values["padding"] as api2.EdgeInsetsGeometry?,
    shadowColor: values["shadowColor"] as api5.Color?,
    shape: values["shape"] as api2.OutlinedBorder?,
    side: values["side"] as api2.BorderSide?,
    surfaceTintColor: values["surfaceTintColor"] as api5.Color?,
    textStyle: values["textStyle"] as api2.TextStyle?,
    visualDensity: values["visualDensity"] as api.VisualDensity?,
  );
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
        key: values["key"] as api6.Key?,
        onPressed: values["onPressed"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        style: values["style"] as api.ButtonStyle?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        isSemanticButton: values["isSemanticButton"] as bool?,
        child: values["child"] as api1.Widget,
      );
    case "icon":
      return api.TextButton.icon(
        key: values["key"] as api6.Key?,
        onPressed: values["onPressed"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onHover: values["onHover"] as void Function(bool value)?,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        style: values["style"] as api.ButtonStyle?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        autofocus: values["autofocus"] as bool,
        clipBehavior: values["clipBehavior"] as api5.Clip?,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        icon: values["icon"] as api1.Widget?,
        label: values["label"] as api1.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextField(Object value) => value is api.TextField;
Object? _TextField_inferAndroidSpellCheckConfiguration(
  Map<String, Object?> values,
) {
  return api.TextField.inferAndroidSpellCheckConfiguration(
    values["configuration"] as api1.SpellCheckConfiguration?,
  );
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
      if (!values.containsKey("groupId")) {
        if (!values.containsKey("decoration")) {
          if (!values.containsKey("scrollPadding")) {
            if (!values.containsKey("autofillHints")) {
              if (!values.containsKey("contextMenuBuilder")) {
                return api.TextField(
                  key: values["key"] as api6.Key?,
                  controller:
                      values["controller"] as api1.TextEditingController?,
                  focusNode: values["focusNode"] as api1.FocusNode?,
                  undoController:
                      values["undoController"] as api1.UndoHistoryController?,
                  keyboardType: values["keyboardType"] as api9.TextInputType?,
                  textInputAction:
                      values["textInputAction"] as api9.TextInputAction?,
                  textCapitalization:
                      values["textCapitalization"] as api9.TextCapitalization,
                  style: values["style"] as api2.TextStyle?,
                  strutStyle: values["strutStyle"] as api2.StrutStyle?,
                  textAlign: values["textAlign"] as api5.TextAlign,
                  textAlignVertical:
                      values["textAlignVertical"] as api2.TextAlignVertical?,
                  textDirection: values["textDirection"] as api5.TextDirection?,
                  readOnly: values["readOnly"] as bool,
                  toolbarOptions:
                      values["toolbarOptions"] as api1.ToolbarOptions?,
                  showCursor: values["showCursor"] as bool?,
                  autofocus: values["autofocus"] as bool,
                  statesController:
                      values["statesController"]
                          as api1.WidgetStatesController?,
                  obscuringCharacter: values["obscuringCharacter"] as String,
                  obscureText: values["obscureText"] as bool,
                  autocorrect: values["autocorrect"] as bool?,
                  smartDashesType:
                      values["smartDashesType"] as api9.SmartDashesType?,
                  smartQuotesType:
                      values["smartQuotesType"] as api9.SmartQuotesType?,
                  enableSuggestions: values["enableSuggestions"] as bool,
                  maxLines: values["maxLines"] as int?,
                  minLines: values["minLines"] as int?,
                  expands: values["expands"] as bool,
                  maxLength: values["maxLength"] as int?,
                  maxLengthEnforcement:
                      values["maxLengthEnforcement"]
                          as api9.MaxLengthEnforcement?,
                  onChanged:
                      values["onChanged"] as void Function(String value)?,
                  onEditingComplete:
                      values["onEditingComplete"] as void Function()?,
                  onSubmitted:
                      values["onSubmitted"] as void Function(String value)?,
                  onAppPrivateCommand:
                      values["onAppPrivateCommand"]
                          as void Function(
                            String action,
                            Map<String, Object?> data,
                          )?,
                  inputFormatters:
                      values["inputFormatters"]
                          as List<api9.TextInputFormatter>?,
                  enabled: values["enabled"] as bool?,
                  ignorePointers: values["ignorePointers"] as bool?,
                  cursorWidth: values["cursorWidth"] as double,
                  cursorHeight: values["cursorHeight"] as double?,
                  cursorRadius: values["cursorRadius"] as api5.Radius?,
                  cursorOpacityAnimates:
                      values["cursorOpacityAnimates"] as bool?,
                  cursorColor: values["cursorColor"] as api5.Color?,
                  cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
                  selectionHeightStyle:
                      values["selectionHeightStyle"] as api5.BoxHeightStyle?,
                  selectionWidthStyle:
                      values["selectionWidthStyle"] as api5.BoxWidthStyle?,
                  keyboardAppearance:
                      values["keyboardAppearance"] as api5.Brightness?,
                  dragStartBehavior:
                      values["dragStartBehavior"] as api7.DragStartBehavior,
                  enableInteractiveSelection:
                      values["enableInteractiveSelection"] as bool?,
                  selectAllOnFocus: values["selectAllOnFocus"] as bool?,
                  selectionControls:
                      values["selectionControls"]
                          as api1.TextSelectionControls?,
                  onTap: values["onTap"] as void Function()?,
                  onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
                  onTapOutside:
                      values["onTapOutside"]
                          as void Function(api7.PointerDownEvent event)?,
                  onTapUpOutside:
                      values["onTapUpOutside"]
                          as void Function(api7.PointerUpEvent event)?,
                  mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
                  buildCounter:
                      values["buildCounter"]
                          as api1.Widget? Function(
                            api1.BuildContext context, {
                            required int currentLength,
                            required bool isFocused,
                            required int? maxLength,
                          })?,
                  scrollController:
                      values["scrollController"] as api1.ScrollController?,
                  scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
                  contentInsertionConfiguration:
                      values["contentInsertionConfiguration"]
                          as api1.ContentInsertionConfiguration?,
                  clipBehavior: values["clipBehavior"] as api5.Clip,
                  restorationId: values["restorationId"] as String?,
                  scribbleEnabled: values["scribbleEnabled"] as bool,
                  stylusHandwritingEnabled:
                      values["stylusHandwritingEnabled"] as bool,
                  enableIMEPersonalizedLearning:
                      values["enableIMEPersonalizedLearning"] as bool,
                  enableInlinePrediction:
                      values["enableInlinePrediction"] as bool?,
                  canRequestFocus: values["canRequestFocus"] as bool,
                  spellCheckConfiguration:
                      values["spellCheckConfiguration"]
                          as api1.SpellCheckConfiguration?,
                  magnifierConfiguration:
                      values["magnifierConfiguration"]
                          as api1.TextMagnifierConfiguration?,
                  hintLocales: values["hintLocales"] as List<api5.Locale>?,
                );
              }
              return api.TextField(
                key: values["key"] as api6.Key?,
                controller: values["controller"] as api1.TextEditingController?,
                focusNode: values["focusNode"] as api1.FocusNode?,
                undoController:
                    values["undoController"] as api1.UndoHistoryController?,
                keyboardType: values["keyboardType"] as api9.TextInputType?,
                textInputAction:
                    values["textInputAction"] as api9.TextInputAction?,
                textCapitalization:
                    values["textCapitalization"] as api9.TextCapitalization,
                style: values["style"] as api2.TextStyle?,
                strutStyle: values["strutStyle"] as api2.StrutStyle?,
                textAlign: values["textAlign"] as api5.TextAlign,
                textAlignVertical:
                    values["textAlignVertical"] as api2.TextAlignVertical?,
                textDirection: values["textDirection"] as api5.TextDirection?,
                readOnly: values["readOnly"] as bool,
                toolbarOptions:
                    values["toolbarOptions"] as api1.ToolbarOptions?,
                showCursor: values["showCursor"] as bool?,
                autofocus: values["autofocus"] as bool,
                statesController:
                    values["statesController"] as api1.WidgetStatesController?,
                obscuringCharacter: values["obscuringCharacter"] as String,
                obscureText: values["obscureText"] as bool,
                autocorrect: values["autocorrect"] as bool?,
                smartDashesType:
                    values["smartDashesType"] as api9.SmartDashesType?,
                smartQuotesType:
                    values["smartQuotesType"] as api9.SmartQuotesType?,
                enableSuggestions: values["enableSuggestions"] as bool,
                maxLines: values["maxLines"] as int?,
                minLines: values["minLines"] as int?,
                expands: values["expands"] as bool,
                maxLength: values["maxLength"] as int?,
                maxLengthEnforcement:
                    values["maxLengthEnforcement"]
                        as api9.MaxLengthEnforcement?,
                onChanged: values["onChanged"] as void Function(String value)?,
                onEditingComplete:
                    values["onEditingComplete"] as void Function()?,
                onSubmitted:
                    values["onSubmitted"] as void Function(String value)?,
                onAppPrivateCommand:
                    values["onAppPrivateCommand"]
                        as void Function(
                          String action,
                          Map<String, Object?> data,
                        )?,
                inputFormatters:
                    values["inputFormatters"] as List<api9.TextInputFormatter>?,
                enabled: values["enabled"] as bool?,
                ignorePointers: values["ignorePointers"] as bool?,
                cursorWidth: values["cursorWidth"] as double,
                cursorHeight: values["cursorHeight"] as double?,
                cursorRadius: values["cursorRadius"] as api5.Radius?,
                cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
                cursorColor: values["cursorColor"] as api5.Color?,
                cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
                selectionHeightStyle:
                    values["selectionHeightStyle"] as api5.BoxHeightStyle?,
                selectionWidthStyle:
                    values["selectionWidthStyle"] as api5.BoxWidthStyle?,
                keyboardAppearance:
                    values["keyboardAppearance"] as api5.Brightness?,
                dragStartBehavior:
                    values["dragStartBehavior"] as api7.DragStartBehavior,
                enableInteractiveSelection:
                    values["enableInteractiveSelection"] as bool?,
                selectAllOnFocus: values["selectAllOnFocus"] as bool?,
                selectionControls:
                    values["selectionControls"] as api1.TextSelectionControls?,
                onTap: values["onTap"] as void Function()?,
                onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
                onTapOutside:
                    values["onTapOutside"]
                        as void Function(api7.PointerDownEvent event)?,
                onTapUpOutside:
                    values["onTapUpOutside"]
                        as void Function(api7.PointerUpEvent event)?,
                mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
                buildCounter:
                    values["buildCounter"]
                        as api1.Widget? Function(
                          api1.BuildContext context, {
                          required int currentLength,
                          required bool isFocused,
                          required int? maxLength,
                        })?,
                scrollController:
                    values["scrollController"] as api1.ScrollController?,
                scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
                contentInsertionConfiguration:
                    values["contentInsertionConfiguration"]
                        as api1.ContentInsertionConfiguration?,
                clipBehavior: values["clipBehavior"] as api5.Clip,
                restorationId: values["restorationId"] as String?,
                scribbleEnabled: values["scribbleEnabled"] as bool,
                stylusHandwritingEnabled:
                    values["stylusHandwritingEnabled"] as bool,
                enableIMEPersonalizedLearning:
                    values["enableIMEPersonalizedLearning"] as bool,
                enableInlinePrediction:
                    values["enableInlinePrediction"] as bool?,
                contextMenuBuilder:
                    values["contextMenuBuilder"]
                        as api1.Widget Function(
                          api1.BuildContext context,
                          api1.EditableTextState editableTextState,
                        )?,
                canRequestFocus: values["canRequestFocus"] as bool,
                spellCheckConfiguration:
                    values["spellCheckConfiguration"]
                        as api1.SpellCheckConfiguration?,
                magnifierConfiguration:
                    values["magnifierConfiguration"]
                        as api1.TextMagnifierConfiguration?,
                hintLocales: values["hintLocales"] as List<api5.Locale>?,
              );
            }
            if (!values.containsKey("contextMenuBuilder")) {
              return api.TextField(
                key: values["key"] as api6.Key?,
                controller: values["controller"] as api1.TextEditingController?,
                focusNode: values["focusNode"] as api1.FocusNode?,
                undoController:
                    values["undoController"] as api1.UndoHistoryController?,
                keyboardType: values["keyboardType"] as api9.TextInputType?,
                textInputAction:
                    values["textInputAction"] as api9.TextInputAction?,
                textCapitalization:
                    values["textCapitalization"] as api9.TextCapitalization,
                style: values["style"] as api2.TextStyle?,
                strutStyle: values["strutStyle"] as api2.StrutStyle?,
                textAlign: values["textAlign"] as api5.TextAlign,
                textAlignVertical:
                    values["textAlignVertical"] as api2.TextAlignVertical?,
                textDirection: values["textDirection"] as api5.TextDirection?,
                readOnly: values["readOnly"] as bool,
                toolbarOptions:
                    values["toolbarOptions"] as api1.ToolbarOptions?,
                showCursor: values["showCursor"] as bool?,
                autofocus: values["autofocus"] as bool,
                statesController:
                    values["statesController"] as api1.WidgetStatesController?,
                obscuringCharacter: values["obscuringCharacter"] as String,
                obscureText: values["obscureText"] as bool,
                autocorrect: values["autocorrect"] as bool?,
                smartDashesType:
                    values["smartDashesType"] as api9.SmartDashesType?,
                smartQuotesType:
                    values["smartQuotesType"] as api9.SmartQuotesType?,
                enableSuggestions: values["enableSuggestions"] as bool,
                maxLines: values["maxLines"] as int?,
                minLines: values["minLines"] as int?,
                expands: values["expands"] as bool,
                maxLength: values["maxLength"] as int?,
                maxLengthEnforcement:
                    values["maxLengthEnforcement"]
                        as api9.MaxLengthEnforcement?,
                onChanged: values["onChanged"] as void Function(String value)?,
                onEditingComplete:
                    values["onEditingComplete"] as void Function()?,
                onSubmitted:
                    values["onSubmitted"] as void Function(String value)?,
                onAppPrivateCommand:
                    values["onAppPrivateCommand"]
                        as void Function(
                          String action,
                          Map<String, Object?> data,
                        )?,
                inputFormatters:
                    values["inputFormatters"] as List<api9.TextInputFormatter>?,
                enabled: values["enabled"] as bool?,
                ignorePointers: values["ignorePointers"] as bool?,
                cursorWidth: values["cursorWidth"] as double,
                cursorHeight: values["cursorHeight"] as double?,
                cursorRadius: values["cursorRadius"] as api5.Radius?,
                cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
                cursorColor: values["cursorColor"] as api5.Color?,
                cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
                selectionHeightStyle:
                    values["selectionHeightStyle"] as api5.BoxHeightStyle?,
                selectionWidthStyle:
                    values["selectionWidthStyle"] as api5.BoxWidthStyle?,
                keyboardAppearance:
                    values["keyboardAppearance"] as api5.Brightness?,
                dragStartBehavior:
                    values["dragStartBehavior"] as api7.DragStartBehavior,
                enableInteractiveSelection:
                    values["enableInteractiveSelection"] as bool?,
                selectAllOnFocus: values["selectAllOnFocus"] as bool?,
                selectionControls:
                    values["selectionControls"] as api1.TextSelectionControls?,
                onTap: values["onTap"] as void Function()?,
                onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
                onTapOutside:
                    values["onTapOutside"]
                        as void Function(api7.PointerDownEvent event)?,
                onTapUpOutside:
                    values["onTapUpOutside"]
                        as void Function(api7.PointerUpEvent event)?,
                mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
                buildCounter:
                    values["buildCounter"]
                        as api1.Widget? Function(
                          api1.BuildContext context, {
                          required int currentLength,
                          required bool isFocused,
                          required int? maxLength,
                        })?,
                scrollController:
                    values["scrollController"] as api1.ScrollController?,
                scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
                autofillHints: values["autofillHints"] as Iterable<String>?,
                contentInsertionConfiguration:
                    values["contentInsertionConfiguration"]
                        as api1.ContentInsertionConfiguration?,
                clipBehavior: values["clipBehavior"] as api5.Clip,
                restorationId: values["restorationId"] as String?,
                scribbleEnabled: values["scribbleEnabled"] as bool,
                stylusHandwritingEnabled:
                    values["stylusHandwritingEnabled"] as bool,
                enableIMEPersonalizedLearning:
                    values["enableIMEPersonalizedLearning"] as bool,
                enableInlinePrediction:
                    values["enableInlinePrediction"] as bool?,
                canRequestFocus: values["canRequestFocus"] as bool,
                spellCheckConfiguration:
                    values["spellCheckConfiguration"]
                        as api1.SpellCheckConfiguration?,
                magnifierConfiguration:
                    values["magnifierConfiguration"]
                        as api1.TextMagnifierConfiguration?,
                hintLocales: values["hintLocales"] as List<api5.Locale>?,
              );
            }
            return api.TextField(
              key: values["key"] as api6.Key?,
              controller: values["controller"] as api1.TextEditingController?,
              focusNode: values["focusNode"] as api1.FocusNode?,
              undoController:
                  values["undoController"] as api1.UndoHistoryController?,
              keyboardType: values["keyboardType"] as api9.TextInputType?,
              textInputAction:
                  values["textInputAction"] as api9.TextInputAction?,
              textCapitalization:
                  values["textCapitalization"] as api9.TextCapitalization,
              style: values["style"] as api2.TextStyle?,
              strutStyle: values["strutStyle"] as api2.StrutStyle?,
              textAlign: values["textAlign"] as api5.TextAlign,
              textAlignVertical:
                  values["textAlignVertical"] as api2.TextAlignVertical?,
              textDirection: values["textDirection"] as api5.TextDirection?,
              readOnly: values["readOnly"] as bool,
              toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
              showCursor: values["showCursor"] as bool?,
              autofocus: values["autofocus"] as bool,
              statesController:
                  values["statesController"] as api1.WidgetStatesController?,
              obscuringCharacter: values["obscuringCharacter"] as String,
              obscureText: values["obscureText"] as bool,
              autocorrect: values["autocorrect"] as bool?,
              smartDashesType:
                  values["smartDashesType"] as api9.SmartDashesType?,
              smartQuotesType:
                  values["smartQuotesType"] as api9.SmartQuotesType?,
              enableSuggestions: values["enableSuggestions"] as bool,
              maxLines: values["maxLines"] as int?,
              minLines: values["minLines"] as int?,
              expands: values["expands"] as bool,
              maxLength: values["maxLength"] as int?,
              maxLengthEnforcement:
                  values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
              onChanged: values["onChanged"] as void Function(String value)?,
              onEditingComplete:
                  values["onEditingComplete"] as void Function()?,
              onSubmitted:
                  values["onSubmitted"] as void Function(String value)?,
              onAppPrivateCommand:
                  values["onAppPrivateCommand"]
                      as void Function(
                        String action,
                        Map<String, Object?> data,
                      )?,
              inputFormatters:
                  values["inputFormatters"] as List<api9.TextInputFormatter>?,
              enabled: values["enabled"] as bool?,
              ignorePointers: values["ignorePointers"] as bool?,
              cursorWidth: values["cursorWidth"] as double,
              cursorHeight: values["cursorHeight"] as double?,
              cursorRadius: values["cursorRadius"] as api5.Radius?,
              cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
              cursorColor: values["cursorColor"] as api5.Color?,
              cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
              selectionHeightStyle:
                  values["selectionHeightStyle"] as api5.BoxHeightStyle?,
              selectionWidthStyle:
                  values["selectionWidthStyle"] as api5.BoxWidthStyle?,
              keyboardAppearance:
                  values["keyboardAppearance"] as api5.Brightness?,
              dragStartBehavior:
                  values["dragStartBehavior"] as api7.DragStartBehavior,
              enableInteractiveSelection:
                  values["enableInteractiveSelection"] as bool?,
              selectAllOnFocus: values["selectAllOnFocus"] as bool?,
              selectionControls:
                  values["selectionControls"] as api1.TextSelectionControls?,
              onTap: values["onTap"] as void Function()?,
              onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
              onTapOutside:
                  values["onTapOutside"]
                      as void Function(api7.PointerDownEvent event)?,
              onTapUpOutside:
                  values["onTapUpOutside"]
                      as void Function(api7.PointerUpEvent event)?,
              mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
              buildCounter:
                  values["buildCounter"]
                      as api1.Widget? Function(
                        api1.BuildContext context, {
                        required int currentLength,
                        required bool isFocused,
                        required int? maxLength,
                      })?,
              scrollController:
                  values["scrollController"] as api1.ScrollController?,
              scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
              autofillHints: values["autofillHints"] as Iterable<String>?,
              contentInsertionConfiguration:
                  values["contentInsertionConfiguration"]
                      as api1.ContentInsertionConfiguration?,
              clipBehavior: values["clipBehavior"] as api5.Clip,
              restorationId: values["restorationId"] as String?,
              scribbleEnabled: values["scribbleEnabled"] as bool,
              stylusHandwritingEnabled:
                  values["stylusHandwritingEnabled"] as bool,
              enableIMEPersonalizedLearning:
                  values["enableIMEPersonalizedLearning"] as bool,
              enableInlinePrediction: values["enableInlinePrediction"] as bool?,
              contextMenuBuilder:
                  values["contextMenuBuilder"]
                      as api1.Widget Function(
                        api1.BuildContext context,
                        api1.EditableTextState editableTextState,
                      )?,
              canRequestFocus: values["canRequestFocus"] as bool,
              spellCheckConfiguration:
                  values["spellCheckConfiguration"]
                      as api1.SpellCheckConfiguration?,
              magnifierConfiguration:
                  values["magnifierConfiguration"]
                      as api1.TextMagnifierConfiguration?,
              hintLocales: values["hintLocales"] as List<api5.Locale>?,
            );
          }
          if (!values.containsKey("autofillHints")) {
            if (!values.containsKey("contextMenuBuilder")) {
              return api.TextField(
                key: values["key"] as api6.Key?,
                controller: values["controller"] as api1.TextEditingController?,
                focusNode: values["focusNode"] as api1.FocusNode?,
                undoController:
                    values["undoController"] as api1.UndoHistoryController?,
                keyboardType: values["keyboardType"] as api9.TextInputType?,
                textInputAction:
                    values["textInputAction"] as api9.TextInputAction?,
                textCapitalization:
                    values["textCapitalization"] as api9.TextCapitalization,
                style: values["style"] as api2.TextStyle?,
                strutStyle: values["strutStyle"] as api2.StrutStyle?,
                textAlign: values["textAlign"] as api5.TextAlign,
                textAlignVertical:
                    values["textAlignVertical"] as api2.TextAlignVertical?,
                textDirection: values["textDirection"] as api5.TextDirection?,
                readOnly: values["readOnly"] as bool,
                toolbarOptions:
                    values["toolbarOptions"] as api1.ToolbarOptions?,
                showCursor: values["showCursor"] as bool?,
                autofocus: values["autofocus"] as bool,
                statesController:
                    values["statesController"] as api1.WidgetStatesController?,
                obscuringCharacter: values["obscuringCharacter"] as String,
                obscureText: values["obscureText"] as bool,
                autocorrect: values["autocorrect"] as bool?,
                smartDashesType:
                    values["smartDashesType"] as api9.SmartDashesType?,
                smartQuotesType:
                    values["smartQuotesType"] as api9.SmartQuotesType?,
                enableSuggestions: values["enableSuggestions"] as bool,
                maxLines: values["maxLines"] as int?,
                minLines: values["minLines"] as int?,
                expands: values["expands"] as bool,
                maxLength: values["maxLength"] as int?,
                maxLengthEnforcement:
                    values["maxLengthEnforcement"]
                        as api9.MaxLengthEnforcement?,
                onChanged: values["onChanged"] as void Function(String value)?,
                onEditingComplete:
                    values["onEditingComplete"] as void Function()?,
                onSubmitted:
                    values["onSubmitted"] as void Function(String value)?,
                onAppPrivateCommand:
                    values["onAppPrivateCommand"]
                        as void Function(
                          String action,
                          Map<String, Object?> data,
                        )?,
                inputFormatters:
                    values["inputFormatters"] as List<api9.TextInputFormatter>?,
                enabled: values["enabled"] as bool?,
                ignorePointers: values["ignorePointers"] as bool?,
                cursorWidth: values["cursorWidth"] as double,
                cursorHeight: values["cursorHeight"] as double?,
                cursorRadius: values["cursorRadius"] as api5.Radius?,
                cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
                cursorColor: values["cursorColor"] as api5.Color?,
                cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
                selectionHeightStyle:
                    values["selectionHeightStyle"] as api5.BoxHeightStyle?,
                selectionWidthStyle:
                    values["selectionWidthStyle"] as api5.BoxWidthStyle?,
                keyboardAppearance:
                    values["keyboardAppearance"] as api5.Brightness?,
                scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
                dragStartBehavior:
                    values["dragStartBehavior"] as api7.DragStartBehavior,
                enableInteractiveSelection:
                    values["enableInteractiveSelection"] as bool?,
                selectAllOnFocus: values["selectAllOnFocus"] as bool?,
                selectionControls:
                    values["selectionControls"] as api1.TextSelectionControls?,
                onTap: values["onTap"] as void Function()?,
                onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
                onTapOutside:
                    values["onTapOutside"]
                        as void Function(api7.PointerDownEvent event)?,
                onTapUpOutside:
                    values["onTapUpOutside"]
                        as void Function(api7.PointerUpEvent event)?,
                mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
                buildCounter:
                    values["buildCounter"]
                        as api1.Widget? Function(
                          api1.BuildContext context, {
                          required int currentLength,
                          required bool isFocused,
                          required int? maxLength,
                        })?,
                scrollController:
                    values["scrollController"] as api1.ScrollController?,
                scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
                contentInsertionConfiguration:
                    values["contentInsertionConfiguration"]
                        as api1.ContentInsertionConfiguration?,
                clipBehavior: values["clipBehavior"] as api5.Clip,
                restorationId: values["restorationId"] as String?,
                scribbleEnabled: values["scribbleEnabled"] as bool,
                stylusHandwritingEnabled:
                    values["stylusHandwritingEnabled"] as bool,
                enableIMEPersonalizedLearning:
                    values["enableIMEPersonalizedLearning"] as bool,
                enableInlinePrediction:
                    values["enableInlinePrediction"] as bool?,
                canRequestFocus: values["canRequestFocus"] as bool,
                spellCheckConfiguration:
                    values["spellCheckConfiguration"]
                        as api1.SpellCheckConfiguration?,
                magnifierConfiguration:
                    values["magnifierConfiguration"]
                        as api1.TextMagnifierConfiguration?,
                hintLocales: values["hintLocales"] as List<api5.Locale>?,
              );
            }
            return api.TextField(
              key: values["key"] as api6.Key?,
              controller: values["controller"] as api1.TextEditingController?,
              focusNode: values["focusNode"] as api1.FocusNode?,
              undoController:
                  values["undoController"] as api1.UndoHistoryController?,
              keyboardType: values["keyboardType"] as api9.TextInputType?,
              textInputAction:
                  values["textInputAction"] as api9.TextInputAction?,
              textCapitalization:
                  values["textCapitalization"] as api9.TextCapitalization,
              style: values["style"] as api2.TextStyle?,
              strutStyle: values["strutStyle"] as api2.StrutStyle?,
              textAlign: values["textAlign"] as api5.TextAlign,
              textAlignVertical:
                  values["textAlignVertical"] as api2.TextAlignVertical?,
              textDirection: values["textDirection"] as api5.TextDirection?,
              readOnly: values["readOnly"] as bool,
              toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
              showCursor: values["showCursor"] as bool?,
              autofocus: values["autofocus"] as bool,
              statesController:
                  values["statesController"] as api1.WidgetStatesController?,
              obscuringCharacter: values["obscuringCharacter"] as String,
              obscureText: values["obscureText"] as bool,
              autocorrect: values["autocorrect"] as bool?,
              smartDashesType:
                  values["smartDashesType"] as api9.SmartDashesType?,
              smartQuotesType:
                  values["smartQuotesType"] as api9.SmartQuotesType?,
              enableSuggestions: values["enableSuggestions"] as bool,
              maxLines: values["maxLines"] as int?,
              minLines: values["minLines"] as int?,
              expands: values["expands"] as bool,
              maxLength: values["maxLength"] as int?,
              maxLengthEnforcement:
                  values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
              onChanged: values["onChanged"] as void Function(String value)?,
              onEditingComplete:
                  values["onEditingComplete"] as void Function()?,
              onSubmitted:
                  values["onSubmitted"] as void Function(String value)?,
              onAppPrivateCommand:
                  values["onAppPrivateCommand"]
                      as void Function(
                        String action,
                        Map<String, Object?> data,
                      )?,
              inputFormatters:
                  values["inputFormatters"] as List<api9.TextInputFormatter>?,
              enabled: values["enabled"] as bool?,
              ignorePointers: values["ignorePointers"] as bool?,
              cursorWidth: values["cursorWidth"] as double,
              cursorHeight: values["cursorHeight"] as double?,
              cursorRadius: values["cursorRadius"] as api5.Radius?,
              cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
              cursorColor: values["cursorColor"] as api5.Color?,
              cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
              selectionHeightStyle:
                  values["selectionHeightStyle"] as api5.BoxHeightStyle?,
              selectionWidthStyle:
                  values["selectionWidthStyle"] as api5.BoxWidthStyle?,
              keyboardAppearance:
                  values["keyboardAppearance"] as api5.Brightness?,
              scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
              dragStartBehavior:
                  values["dragStartBehavior"] as api7.DragStartBehavior,
              enableInteractiveSelection:
                  values["enableInteractiveSelection"] as bool?,
              selectAllOnFocus: values["selectAllOnFocus"] as bool?,
              selectionControls:
                  values["selectionControls"] as api1.TextSelectionControls?,
              onTap: values["onTap"] as void Function()?,
              onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
              onTapOutside:
                  values["onTapOutside"]
                      as void Function(api7.PointerDownEvent event)?,
              onTapUpOutside:
                  values["onTapUpOutside"]
                      as void Function(api7.PointerUpEvent event)?,
              mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
              buildCounter:
                  values["buildCounter"]
                      as api1.Widget? Function(
                        api1.BuildContext context, {
                        required int currentLength,
                        required bool isFocused,
                        required int? maxLength,
                      })?,
              scrollController:
                  values["scrollController"] as api1.ScrollController?,
              scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
              contentInsertionConfiguration:
                  values["contentInsertionConfiguration"]
                      as api1.ContentInsertionConfiguration?,
              clipBehavior: values["clipBehavior"] as api5.Clip,
              restorationId: values["restorationId"] as String?,
              scribbleEnabled: values["scribbleEnabled"] as bool,
              stylusHandwritingEnabled:
                  values["stylusHandwritingEnabled"] as bool,
              enableIMEPersonalizedLearning:
                  values["enableIMEPersonalizedLearning"] as bool,
              enableInlinePrediction: values["enableInlinePrediction"] as bool?,
              contextMenuBuilder:
                  values["contextMenuBuilder"]
                      as api1.Widget Function(
                        api1.BuildContext context,
                        api1.EditableTextState editableTextState,
                      )?,
              canRequestFocus: values["canRequestFocus"] as bool,
              spellCheckConfiguration:
                  values["spellCheckConfiguration"]
                      as api1.SpellCheckConfiguration?,
              magnifierConfiguration:
                  values["magnifierConfiguration"]
                      as api1.TextMagnifierConfiguration?,
              hintLocales: values["hintLocales"] as List<api5.Locale>?,
            );
          }
          if (!values.containsKey("contextMenuBuilder")) {
            return api.TextField(
              key: values["key"] as api6.Key?,
              controller: values["controller"] as api1.TextEditingController?,
              focusNode: values["focusNode"] as api1.FocusNode?,
              undoController:
                  values["undoController"] as api1.UndoHistoryController?,
              keyboardType: values["keyboardType"] as api9.TextInputType?,
              textInputAction:
                  values["textInputAction"] as api9.TextInputAction?,
              textCapitalization:
                  values["textCapitalization"] as api9.TextCapitalization,
              style: values["style"] as api2.TextStyle?,
              strutStyle: values["strutStyle"] as api2.StrutStyle?,
              textAlign: values["textAlign"] as api5.TextAlign,
              textAlignVertical:
                  values["textAlignVertical"] as api2.TextAlignVertical?,
              textDirection: values["textDirection"] as api5.TextDirection?,
              readOnly: values["readOnly"] as bool,
              toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
              showCursor: values["showCursor"] as bool?,
              autofocus: values["autofocus"] as bool,
              statesController:
                  values["statesController"] as api1.WidgetStatesController?,
              obscuringCharacter: values["obscuringCharacter"] as String,
              obscureText: values["obscureText"] as bool,
              autocorrect: values["autocorrect"] as bool?,
              smartDashesType:
                  values["smartDashesType"] as api9.SmartDashesType?,
              smartQuotesType:
                  values["smartQuotesType"] as api9.SmartQuotesType?,
              enableSuggestions: values["enableSuggestions"] as bool,
              maxLines: values["maxLines"] as int?,
              minLines: values["minLines"] as int?,
              expands: values["expands"] as bool,
              maxLength: values["maxLength"] as int?,
              maxLengthEnforcement:
                  values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
              onChanged: values["onChanged"] as void Function(String value)?,
              onEditingComplete:
                  values["onEditingComplete"] as void Function()?,
              onSubmitted:
                  values["onSubmitted"] as void Function(String value)?,
              onAppPrivateCommand:
                  values["onAppPrivateCommand"]
                      as void Function(
                        String action,
                        Map<String, Object?> data,
                      )?,
              inputFormatters:
                  values["inputFormatters"] as List<api9.TextInputFormatter>?,
              enabled: values["enabled"] as bool?,
              ignorePointers: values["ignorePointers"] as bool?,
              cursorWidth: values["cursorWidth"] as double,
              cursorHeight: values["cursorHeight"] as double?,
              cursorRadius: values["cursorRadius"] as api5.Radius?,
              cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
              cursorColor: values["cursorColor"] as api5.Color?,
              cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
              selectionHeightStyle:
                  values["selectionHeightStyle"] as api5.BoxHeightStyle?,
              selectionWidthStyle:
                  values["selectionWidthStyle"] as api5.BoxWidthStyle?,
              keyboardAppearance:
                  values["keyboardAppearance"] as api5.Brightness?,
              scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
              dragStartBehavior:
                  values["dragStartBehavior"] as api7.DragStartBehavior,
              enableInteractiveSelection:
                  values["enableInteractiveSelection"] as bool?,
              selectAllOnFocus: values["selectAllOnFocus"] as bool?,
              selectionControls:
                  values["selectionControls"] as api1.TextSelectionControls?,
              onTap: values["onTap"] as void Function()?,
              onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
              onTapOutside:
                  values["onTapOutside"]
                      as void Function(api7.PointerDownEvent event)?,
              onTapUpOutside:
                  values["onTapUpOutside"]
                      as void Function(api7.PointerUpEvent event)?,
              mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
              buildCounter:
                  values["buildCounter"]
                      as api1.Widget? Function(
                        api1.BuildContext context, {
                        required int currentLength,
                        required bool isFocused,
                        required int? maxLength,
                      })?,
              scrollController:
                  values["scrollController"] as api1.ScrollController?,
              scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
              autofillHints: values["autofillHints"] as Iterable<String>?,
              contentInsertionConfiguration:
                  values["contentInsertionConfiguration"]
                      as api1.ContentInsertionConfiguration?,
              clipBehavior: values["clipBehavior"] as api5.Clip,
              restorationId: values["restorationId"] as String?,
              scribbleEnabled: values["scribbleEnabled"] as bool,
              stylusHandwritingEnabled:
                  values["stylusHandwritingEnabled"] as bool,
              enableIMEPersonalizedLearning:
                  values["enableIMEPersonalizedLearning"] as bool,
              enableInlinePrediction: values["enableInlinePrediction"] as bool?,
              canRequestFocus: values["canRequestFocus"] as bool,
              spellCheckConfiguration:
                  values["spellCheckConfiguration"]
                      as api1.SpellCheckConfiguration?,
              magnifierConfiguration:
                  values["magnifierConfiguration"]
                      as api1.TextMagnifierConfiguration?,
              hintLocales: values["hintLocales"] as List<api5.Locale>?,
            );
          }
          return api.TextField(
            key: values["key"] as api6.Key?,
            controller: values["controller"] as api1.TextEditingController?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            undoController:
                values["undoController"] as api1.UndoHistoryController?,
            keyboardType: values["keyboardType"] as api9.TextInputType?,
            textInputAction: values["textInputAction"] as api9.TextInputAction?,
            textCapitalization:
                values["textCapitalization"] as api9.TextCapitalization,
            style: values["style"] as api2.TextStyle?,
            strutStyle: values["strutStyle"] as api2.StrutStyle?,
            textAlign: values["textAlign"] as api5.TextAlign,
            textAlignVertical:
                values["textAlignVertical"] as api2.TextAlignVertical?,
            textDirection: values["textDirection"] as api5.TextDirection?,
            readOnly: values["readOnly"] as bool,
            toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
            showCursor: values["showCursor"] as bool?,
            autofocus: values["autofocus"] as bool,
            statesController:
                values["statesController"] as api1.WidgetStatesController?,
            obscuringCharacter: values["obscuringCharacter"] as String,
            obscureText: values["obscureText"] as bool,
            autocorrect: values["autocorrect"] as bool?,
            smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
            smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
            enableSuggestions: values["enableSuggestions"] as bool,
            maxLines: values["maxLines"] as int?,
            minLines: values["minLines"] as int?,
            expands: values["expands"] as bool,
            maxLength: values["maxLength"] as int?,
            maxLengthEnforcement:
                values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
            onChanged: values["onChanged"] as void Function(String value)?,
            onEditingComplete: values["onEditingComplete"] as void Function()?,
            onSubmitted: values["onSubmitted"] as void Function(String value)?,
            onAppPrivateCommand:
                values["onAppPrivateCommand"]
                    as void Function(String action, Map<String, Object?> data)?,
            inputFormatters:
                values["inputFormatters"] as List<api9.TextInputFormatter>?,
            enabled: values["enabled"] as bool?,
            ignorePointers: values["ignorePointers"] as bool?,
            cursorWidth: values["cursorWidth"] as double,
            cursorHeight: values["cursorHeight"] as double?,
            cursorRadius: values["cursorRadius"] as api5.Radius?,
            cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
            cursorColor: values["cursorColor"] as api5.Color?,
            cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
            selectionHeightStyle:
                values["selectionHeightStyle"] as api5.BoxHeightStyle?,
            selectionWidthStyle:
                values["selectionWidthStyle"] as api5.BoxWidthStyle?,
            keyboardAppearance:
                values["keyboardAppearance"] as api5.Brightness?,
            scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
            dragStartBehavior:
                values["dragStartBehavior"] as api7.DragStartBehavior,
            enableInteractiveSelection:
                values["enableInteractiveSelection"] as bool?,
            selectAllOnFocus: values["selectAllOnFocus"] as bool?,
            selectionControls:
                values["selectionControls"] as api1.TextSelectionControls?,
            onTap: values["onTap"] as void Function()?,
            onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
            onTapOutside:
                values["onTapOutside"]
                    as void Function(api7.PointerDownEvent event)?,
            onTapUpOutside:
                values["onTapUpOutside"]
                    as void Function(api7.PointerUpEvent event)?,
            mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
            buildCounter:
                values["buildCounter"]
                    as api1.Widget? Function(
                      api1.BuildContext context, {
                      required int currentLength,
                      required bool isFocused,
                      required int? maxLength,
                    })?,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
            autofillHints: values["autofillHints"] as Iterable<String>?,
            contentInsertionConfiguration:
                values["contentInsertionConfiguration"]
                    as api1.ContentInsertionConfiguration?,
            clipBehavior: values["clipBehavior"] as api5.Clip,
            restorationId: values["restorationId"] as String?,
            scribbleEnabled: values["scribbleEnabled"] as bool,
            stylusHandwritingEnabled:
                values["stylusHandwritingEnabled"] as bool,
            enableIMEPersonalizedLearning:
                values["enableIMEPersonalizedLearning"] as bool,
            enableInlinePrediction: values["enableInlinePrediction"] as bool?,
            contextMenuBuilder:
                values["contextMenuBuilder"]
                    as api1.Widget Function(
                      api1.BuildContext context,
                      api1.EditableTextState editableTextState,
                    )?,
            canRequestFocus: values["canRequestFocus"] as bool,
            spellCheckConfiguration:
                values["spellCheckConfiguration"]
                    as api1.SpellCheckConfiguration?,
            magnifierConfiguration:
                values["magnifierConfiguration"]
                    as api1.TextMagnifierConfiguration?,
            hintLocales: values["hintLocales"] as List<api5.Locale>?,
          );
        }
        if (!values.containsKey("scrollPadding")) {
          if (!values.containsKey("autofillHints")) {
            if (!values.containsKey("contextMenuBuilder")) {
              return api.TextField(
                key: values["key"] as api6.Key?,
                controller: values["controller"] as api1.TextEditingController?,
                focusNode: values["focusNode"] as api1.FocusNode?,
                undoController:
                    values["undoController"] as api1.UndoHistoryController?,
                decoration: values["decoration"] as api.InputDecoration?,
                keyboardType: values["keyboardType"] as api9.TextInputType?,
                textInputAction:
                    values["textInputAction"] as api9.TextInputAction?,
                textCapitalization:
                    values["textCapitalization"] as api9.TextCapitalization,
                style: values["style"] as api2.TextStyle?,
                strutStyle: values["strutStyle"] as api2.StrutStyle?,
                textAlign: values["textAlign"] as api5.TextAlign,
                textAlignVertical:
                    values["textAlignVertical"] as api2.TextAlignVertical?,
                textDirection: values["textDirection"] as api5.TextDirection?,
                readOnly: values["readOnly"] as bool,
                toolbarOptions:
                    values["toolbarOptions"] as api1.ToolbarOptions?,
                showCursor: values["showCursor"] as bool?,
                autofocus: values["autofocus"] as bool,
                statesController:
                    values["statesController"] as api1.WidgetStatesController?,
                obscuringCharacter: values["obscuringCharacter"] as String,
                obscureText: values["obscureText"] as bool,
                autocorrect: values["autocorrect"] as bool?,
                smartDashesType:
                    values["smartDashesType"] as api9.SmartDashesType?,
                smartQuotesType:
                    values["smartQuotesType"] as api9.SmartQuotesType?,
                enableSuggestions: values["enableSuggestions"] as bool,
                maxLines: values["maxLines"] as int?,
                minLines: values["minLines"] as int?,
                expands: values["expands"] as bool,
                maxLength: values["maxLength"] as int?,
                maxLengthEnforcement:
                    values["maxLengthEnforcement"]
                        as api9.MaxLengthEnforcement?,
                onChanged: values["onChanged"] as void Function(String value)?,
                onEditingComplete:
                    values["onEditingComplete"] as void Function()?,
                onSubmitted:
                    values["onSubmitted"] as void Function(String value)?,
                onAppPrivateCommand:
                    values["onAppPrivateCommand"]
                        as void Function(
                          String action,
                          Map<String, Object?> data,
                        )?,
                inputFormatters:
                    values["inputFormatters"] as List<api9.TextInputFormatter>?,
                enabled: values["enabled"] as bool?,
                ignorePointers: values["ignorePointers"] as bool?,
                cursorWidth: values["cursorWidth"] as double,
                cursorHeight: values["cursorHeight"] as double?,
                cursorRadius: values["cursorRadius"] as api5.Radius?,
                cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
                cursorColor: values["cursorColor"] as api5.Color?,
                cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
                selectionHeightStyle:
                    values["selectionHeightStyle"] as api5.BoxHeightStyle?,
                selectionWidthStyle:
                    values["selectionWidthStyle"] as api5.BoxWidthStyle?,
                keyboardAppearance:
                    values["keyboardAppearance"] as api5.Brightness?,
                dragStartBehavior:
                    values["dragStartBehavior"] as api7.DragStartBehavior,
                enableInteractiveSelection:
                    values["enableInteractiveSelection"] as bool?,
                selectAllOnFocus: values["selectAllOnFocus"] as bool?,
                selectionControls:
                    values["selectionControls"] as api1.TextSelectionControls?,
                onTap: values["onTap"] as void Function()?,
                onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
                onTapOutside:
                    values["onTapOutside"]
                        as void Function(api7.PointerDownEvent event)?,
                onTapUpOutside:
                    values["onTapUpOutside"]
                        as void Function(api7.PointerUpEvent event)?,
                mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
                buildCounter:
                    values["buildCounter"]
                        as api1.Widget? Function(
                          api1.BuildContext context, {
                          required int currentLength,
                          required bool isFocused,
                          required int? maxLength,
                        })?,
                scrollController:
                    values["scrollController"] as api1.ScrollController?,
                scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
                contentInsertionConfiguration:
                    values["contentInsertionConfiguration"]
                        as api1.ContentInsertionConfiguration?,
                clipBehavior: values["clipBehavior"] as api5.Clip,
                restorationId: values["restorationId"] as String?,
                scribbleEnabled: values["scribbleEnabled"] as bool,
                stylusHandwritingEnabled:
                    values["stylusHandwritingEnabled"] as bool,
                enableIMEPersonalizedLearning:
                    values["enableIMEPersonalizedLearning"] as bool,
                enableInlinePrediction:
                    values["enableInlinePrediction"] as bool?,
                canRequestFocus: values["canRequestFocus"] as bool,
                spellCheckConfiguration:
                    values["spellCheckConfiguration"]
                        as api1.SpellCheckConfiguration?,
                magnifierConfiguration:
                    values["magnifierConfiguration"]
                        as api1.TextMagnifierConfiguration?,
                hintLocales: values["hintLocales"] as List<api5.Locale>?,
              );
            }
            return api.TextField(
              key: values["key"] as api6.Key?,
              controller: values["controller"] as api1.TextEditingController?,
              focusNode: values["focusNode"] as api1.FocusNode?,
              undoController:
                  values["undoController"] as api1.UndoHistoryController?,
              decoration: values["decoration"] as api.InputDecoration?,
              keyboardType: values["keyboardType"] as api9.TextInputType?,
              textInputAction:
                  values["textInputAction"] as api9.TextInputAction?,
              textCapitalization:
                  values["textCapitalization"] as api9.TextCapitalization,
              style: values["style"] as api2.TextStyle?,
              strutStyle: values["strutStyle"] as api2.StrutStyle?,
              textAlign: values["textAlign"] as api5.TextAlign,
              textAlignVertical:
                  values["textAlignVertical"] as api2.TextAlignVertical?,
              textDirection: values["textDirection"] as api5.TextDirection?,
              readOnly: values["readOnly"] as bool,
              toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
              showCursor: values["showCursor"] as bool?,
              autofocus: values["autofocus"] as bool,
              statesController:
                  values["statesController"] as api1.WidgetStatesController?,
              obscuringCharacter: values["obscuringCharacter"] as String,
              obscureText: values["obscureText"] as bool,
              autocorrect: values["autocorrect"] as bool?,
              smartDashesType:
                  values["smartDashesType"] as api9.SmartDashesType?,
              smartQuotesType:
                  values["smartQuotesType"] as api9.SmartQuotesType?,
              enableSuggestions: values["enableSuggestions"] as bool,
              maxLines: values["maxLines"] as int?,
              minLines: values["minLines"] as int?,
              expands: values["expands"] as bool,
              maxLength: values["maxLength"] as int?,
              maxLengthEnforcement:
                  values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
              onChanged: values["onChanged"] as void Function(String value)?,
              onEditingComplete:
                  values["onEditingComplete"] as void Function()?,
              onSubmitted:
                  values["onSubmitted"] as void Function(String value)?,
              onAppPrivateCommand:
                  values["onAppPrivateCommand"]
                      as void Function(
                        String action,
                        Map<String, Object?> data,
                      )?,
              inputFormatters:
                  values["inputFormatters"] as List<api9.TextInputFormatter>?,
              enabled: values["enabled"] as bool?,
              ignorePointers: values["ignorePointers"] as bool?,
              cursorWidth: values["cursorWidth"] as double,
              cursorHeight: values["cursorHeight"] as double?,
              cursorRadius: values["cursorRadius"] as api5.Radius?,
              cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
              cursorColor: values["cursorColor"] as api5.Color?,
              cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
              selectionHeightStyle:
                  values["selectionHeightStyle"] as api5.BoxHeightStyle?,
              selectionWidthStyle:
                  values["selectionWidthStyle"] as api5.BoxWidthStyle?,
              keyboardAppearance:
                  values["keyboardAppearance"] as api5.Brightness?,
              dragStartBehavior:
                  values["dragStartBehavior"] as api7.DragStartBehavior,
              enableInteractiveSelection:
                  values["enableInteractiveSelection"] as bool?,
              selectAllOnFocus: values["selectAllOnFocus"] as bool?,
              selectionControls:
                  values["selectionControls"] as api1.TextSelectionControls?,
              onTap: values["onTap"] as void Function()?,
              onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
              onTapOutside:
                  values["onTapOutside"]
                      as void Function(api7.PointerDownEvent event)?,
              onTapUpOutside:
                  values["onTapUpOutside"]
                      as void Function(api7.PointerUpEvent event)?,
              mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
              buildCounter:
                  values["buildCounter"]
                      as api1.Widget? Function(
                        api1.BuildContext context, {
                        required int currentLength,
                        required bool isFocused,
                        required int? maxLength,
                      })?,
              scrollController:
                  values["scrollController"] as api1.ScrollController?,
              scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
              contentInsertionConfiguration:
                  values["contentInsertionConfiguration"]
                      as api1.ContentInsertionConfiguration?,
              clipBehavior: values["clipBehavior"] as api5.Clip,
              restorationId: values["restorationId"] as String?,
              scribbleEnabled: values["scribbleEnabled"] as bool,
              stylusHandwritingEnabled:
                  values["stylusHandwritingEnabled"] as bool,
              enableIMEPersonalizedLearning:
                  values["enableIMEPersonalizedLearning"] as bool,
              enableInlinePrediction: values["enableInlinePrediction"] as bool?,
              contextMenuBuilder:
                  values["contextMenuBuilder"]
                      as api1.Widget Function(
                        api1.BuildContext context,
                        api1.EditableTextState editableTextState,
                      )?,
              canRequestFocus: values["canRequestFocus"] as bool,
              spellCheckConfiguration:
                  values["spellCheckConfiguration"]
                      as api1.SpellCheckConfiguration?,
              magnifierConfiguration:
                  values["magnifierConfiguration"]
                      as api1.TextMagnifierConfiguration?,
              hintLocales: values["hintLocales"] as List<api5.Locale>?,
            );
          }
          if (!values.containsKey("contextMenuBuilder")) {
            return api.TextField(
              key: values["key"] as api6.Key?,
              controller: values["controller"] as api1.TextEditingController?,
              focusNode: values["focusNode"] as api1.FocusNode?,
              undoController:
                  values["undoController"] as api1.UndoHistoryController?,
              decoration: values["decoration"] as api.InputDecoration?,
              keyboardType: values["keyboardType"] as api9.TextInputType?,
              textInputAction:
                  values["textInputAction"] as api9.TextInputAction?,
              textCapitalization:
                  values["textCapitalization"] as api9.TextCapitalization,
              style: values["style"] as api2.TextStyle?,
              strutStyle: values["strutStyle"] as api2.StrutStyle?,
              textAlign: values["textAlign"] as api5.TextAlign,
              textAlignVertical:
                  values["textAlignVertical"] as api2.TextAlignVertical?,
              textDirection: values["textDirection"] as api5.TextDirection?,
              readOnly: values["readOnly"] as bool,
              toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
              showCursor: values["showCursor"] as bool?,
              autofocus: values["autofocus"] as bool,
              statesController:
                  values["statesController"] as api1.WidgetStatesController?,
              obscuringCharacter: values["obscuringCharacter"] as String,
              obscureText: values["obscureText"] as bool,
              autocorrect: values["autocorrect"] as bool?,
              smartDashesType:
                  values["smartDashesType"] as api9.SmartDashesType?,
              smartQuotesType:
                  values["smartQuotesType"] as api9.SmartQuotesType?,
              enableSuggestions: values["enableSuggestions"] as bool,
              maxLines: values["maxLines"] as int?,
              minLines: values["minLines"] as int?,
              expands: values["expands"] as bool,
              maxLength: values["maxLength"] as int?,
              maxLengthEnforcement:
                  values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
              onChanged: values["onChanged"] as void Function(String value)?,
              onEditingComplete:
                  values["onEditingComplete"] as void Function()?,
              onSubmitted:
                  values["onSubmitted"] as void Function(String value)?,
              onAppPrivateCommand:
                  values["onAppPrivateCommand"]
                      as void Function(
                        String action,
                        Map<String, Object?> data,
                      )?,
              inputFormatters:
                  values["inputFormatters"] as List<api9.TextInputFormatter>?,
              enabled: values["enabled"] as bool?,
              ignorePointers: values["ignorePointers"] as bool?,
              cursorWidth: values["cursorWidth"] as double,
              cursorHeight: values["cursorHeight"] as double?,
              cursorRadius: values["cursorRadius"] as api5.Radius?,
              cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
              cursorColor: values["cursorColor"] as api5.Color?,
              cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
              selectionHeightStyle:
                  values["selectionHeightStyle"] as api5.BoxHeightStyle?,
              selectionWidthStyle:
                  values["selectionWidthStyle"] as api5.BoxWidthStyle?,
              keyboardAppearance:
                  values["keyboardAppearance"] as api5.Brightness?,
              dragStartBehavior:
                  values["dragStartBehavior"] as api7.DragStartBehavior,
              enableInteractiveSelection:
                  values["enableInteractiveSelection"] as bool?,
              selectAllOnFocus: values["selectAllOnFocus"] as bool?,
              selectionControls:
                  values["selectionControls"] as api1.TextSelectionControls?,
              onTap: values["onTap"] as void Function()?,
              onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
              onTapOutside:
                  values["onTapOutside"]
                      as void Function(api7.PointerDownEvent event)?,
              onTapUpOutside:
                  values["onTapUpOutside"]
                      as void Function(api7.PointerUpEvent event)?,
              mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
              buildCounter:
                  values["buildCounter"]
                      as api1.Widget? Function(
                        api1.BuildContext context, {
                        required int currentLength,
                        required bool isFocused,
                        required int? maxLength,
                      })?,
              scrollController:
                  values["scrollController"] as api1.ScrollController?,
              scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
              autofillHints: values["autofillHints"] as Iterable<String>?,
              contentInsertionConfiguration:
                  values["contentInsertionConfiguration"]
                      as api1.ContentInsertionConfiguration?,
              clipBehavior: values["clipBehavior"] as api5.Clip,
              restorationId: values["restorationId"] as String?,
              scribbleEnabled: values["scribbleEnabled"] as bool,
              stylusHandwritingEnabled:
                  values["stylusHandwritingEnabled"] as bool,
              enableIMEPersonalizedLearning:
                  values["enableIMEPersonalizedLearning"] as bool,
              enableInlinePrediction: values["enableInlinePrediction"] as bool?,
              canRequestFocus: values["canRequestFocus"] as bool,
              spellCheckConfiguration:
                  values["spellCheckConfiguration"]
                      as api1.SpellCheckConfiguration?,
              magnifierConfiguration:
                  values["magnifierConfiguration"]
                      as api1.TextMagnifierConfiguration?,
              hintLocales: values["hintLocales"] as List<api5.Locale>?,
            );
          }
          return api.TextField(
            key: values["key"] as api6.Key?,
            controller: values["controller"] as api1.TextEditingController?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            undoController:
                values["undoController"] as api1.UndoHistoryController?,
            decoration: values["decoration"] as api.InputDecoration?,
            keyboardType: values["keyboardType"] as api9.TextInputType?,
            textInputAction: values["textInputAction"] as api9.TextInputAction?,
            textCapitalization:
                values["textCapitalization"] as api9.TextCapitalization,
            style: values["style"] as api2.TextStyle?,
            strutStyle: values["strutStyle"] as api2.StrutStyle?,
            textAlign: values["textAlign"] as api5.TextAlign,
            textAlignVertical:
                values["textAlignVertical"] as api2.TextAlignVertical?,
            textDirection: values["textDirection"] as api5.TextDirection?,
            readOnly: values["readOnly"] as bool,
            toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
            showCursor: values["showCursor"] as bool?,
            autofocus: values["autofocus"] as bool,
            statesController:
                values["statesController"] as api1.WidgetStatesController?,
            obscuringCharacter: values["obscuringCharacter"] as String,
            obscureText: values["obscureText"] as bool,
            autocorrect: values["autocorrect"] as bool?,
            smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
            smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
            enableSuggestions: values["enableSuggestions"] as bool,
            maxLines: values["maxLines"] as int?,
            minLines: values["minLines"] as int?,
            expands: values["expands"] as bool,
            maxLength: values["maxLength"] as int?,
            maxLengthEnforcement:
                values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
            onChanged: values["onChanged"] as void Function(String value)?,
            onEditingComplete: values["onEditingComplete"] as void Function()?,
            onSubmitted: values["onSubmitted"] as void Function(String value)?,
            onAppPrivateCommand:
                values["onAppPrivateCommand"]
                    as void Function(String action, Map<String, Object?> data)?,
            inputFormatters:
                values["inputFormatters"] as List<api9.TextInputFormatter>?,
            enabled: values["enabled"] as bool?,
            ignorePointers: values["ignorePointers"] as bool?,
            cursorWidth: values["cursorWidth"] as double,
            cursorHeight: values["cursorHeight"] as double?,
            cursorRadius: values["cursorRadius"] as api5.Radius?,
            cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
            cursorColor: values["cursorColor"] as api5.Color?,
            cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
            selectionHeightStyle:
                values["selectionHeightStyle"] as api5.BoxHeightStyle?,
            selectionWidthStyle:
                values["selectionWidthStyle"] as api5.BoxWidthStyle?,
            keyboardAppearance:
                values["keyboardAppearance"] as api5.Brightness?,
            dragStartBehavior:
                values["dragStartBehavior"] as api7.DragStartBehavior,
            enableInteractiveSelection:
                values["enableInteractiveSelection"] as bool?,
            selectAllOnFocus: values["selectAllOnFocus"] as bool?,
            selectionControls:
                values["selectionControls"] as api1.TextSelectionControls?,
            onTap: values["onTap"] as void Function()?,
            onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
            onTapOutside:
                values["onTapOutside"]
                    as void Function(api7.PointerDownEvent event)?,
            onTapUpOutside:
                values["onTapUpOutside"]
                    as void Function(api7.PointerUpEvent event)?,
            mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
            buildCounter:
                values["buildCounter"]
                    as api1.Widget? Function(
                      api1.BuildContext context, {
                      required int currentLength,
                      required bool isFocused,
                      required int? maxLength,
                    })?,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
            autofillHints: values["autofillHints"] as Iterable<String>?,
            contentInsertionConfiguration:
                values["contentInsertionConfiguration"]
                    as api1.ContentInsertionConfiguration?,
            clipBehavior: values["clipBehavior"] as api5.Clip,
            restorationId: values["restorationId"] as String?,
            scribbleEnabled: values["scribbleEnabled"] as bool,
            stylusHandwritingEnabled:
                values["stylusHandwritingEnabled"] as bool,
            enableIMEPersonalizedLearning:
                values["enableIMEPersonalizedLearning"] as bool,
            enableInlinePrediction: values["enableInlinePrediction"] as bool?,
            contextMenuBuilder:
                values["contextMenuBuilder"]
                    as api1.Widget Function(
                      api1.BuildContext context,
                      api1.EditableTextState editableTextState,
                    )?,
            canRequestFocus: values["canRequestFocus"] as bool,
            spellCheckConfiguration:
                values["spellCheckConfiguration"]
                    as api1.SpellCheckConfiguration?,
            magnifierConfiguration:
                values["magnifierConfiguration"]
                    as api1.TextMagnifierConfiguration?,
            hintLocales: values["hintLocales"] as List<api5.Locale>?,
          );
        }
        if (!values.containsKey("autofillHints")) {
          if (!values.containsKey("contextMenuBuilder")) {
            return api.TextField(
              key: values["key"] as api6.Key?,
              controller: values["controller"] as api1.TextEditingController?,
              focusNode: values["focusNode"] as api1.FocusNode?,
              undoController:
                  values["undoController"] as api1.UndoHistoryController?,
              decoration: values["decoration"] as api.InputDecoration?,
              keyboardType: values["keyboardType"] as api9.TextInputType?,
              textInputAction:
                  values["textInputAction"] as api9.TextInputAction?,
              textCapitalization:
                  values["textCapitalization"] as api9.TextCapitalization,
              style: values["style"] as api2.TextStyle?,
              strutStyle: values["strutStyle"] as api2.StrutStyle?,
              textAlign: values["textAlign"] as api5.TextAlign,
              textAlignVertical:
                  values["textAlignVertical"] as api2.TextAlignVertical?,
              textDirection: values["textDirection"] as api5.TextDirection?,
              readOnly: values["readOnly"] as bool,
              toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
              showCursor: values["showCursor"] as bool?,
              autofocus: values["autofocus"] as bool,
              statesController:
                  values["statesController"] as api1.WidgetStatesController?,
              obscuringCharacter: values["obscuringCharacter"] as String,
              obscureText: values["obscureText"] as bool,
              autocorrect: values["autocorrect"] as bool?,
              smartDashesType:
                  values["smartDashesType"] as api9.SmartDashesType?,
              smartQuotesType:
                  values["smartQuotesType"] as api9.SmartQuotesType?,
              enableSuggestions: values["enableSuggestions"] as bool,
              maxLines: values["maxLines"] as int?,
              minLines: values["minLines"] as int?,
              expands: values["expands"] as bool,
              maxLength: values["maxLength"] as int?,
              maxLengthEnforcement:
                  values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
              onChanged: values["onChanged"] as void Function(String value)?,
              onEditingComplete:
                  values["onEditingComplete"] as void Function()?,
              onSubmitted:
                  values["onSubmitted"] as void Function(String value)?,
              onAppPrivateCommand:
                  values["onAppPrivateCommand"]
                      as void Function(
                        String action,
                        Map<String, Object?> data,
                      )?,
              inputFormatters:
                  values["inputFormatters"] as List<api9.TextInputFormatter>?,
              enabled: values["enabled"] as bool?,
              ignorePointers: values["ignorePointers"] as bool?,
              cursorWidth: values["cursorWidth"] as double,
              cursorHeight: values["cursorHeight"] as double?,
              cursorRadius: values["cursorRadius"] as api5.Radius?,
              cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
              cursorColor: values["cursorColor"] as api5.Color?,
              cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
              selectionHeightStyle:
                  values["selectionHeightStyle"] as api5.BoxHeightStyle?,
              selectionWidthStyle:
                  values["selectionWidthStyle"] as api5.BoxWidthStyle?,
              keyboardAppearance:
                  values["keyboardAppearance"] as api5.Brightness?,
              scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
              dragStartBehavior:
                  values["dragStartBehavior"] as api7.DragStartBehavior,
              enableInteractiveSelection:
                  values["enableInteractiveSelection"] as bool?,
              selectAllOnFocus: values["selectAllOnFocus"] as bool?,
              selectionControls:
                  values["selectionControls"] as api1.TextSelectionControls?,
              onTap: values["onTap"] as void Function()?,
              onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
              onTapOutside:
                  values["onTapOutside"]
                      as void Function(api7.PointerDownEvent event)?,
              onTapUpOutside:
                  values["onTapUpOutside"]
                      as void Function(api7.PointerUpEvent event)?,
              mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
              buildCounter:
                  values["buildCounter"]
                      as api1.Widget? Function(
                        api1.BuildContext context, {
                        required int currentLength,
                        required bool isFocused,
                        required int? maxLength,
                      })?,
              scrollController:
                  values["scrollController"] as api1.ScrollController?,
              scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
              contentInsertionConfiguration:
                  values["contentInsertionConfiguration"]
                      as api1.ContentInsertionConfiguration?,
              clipBehavior: values["clipBehavior"] as api5.Clip,
              restorationId: values["restorationId"] as String?,
              scribbleEnabled: values["scribbleEnabled"] as bool,
              stylusHandwritingEnabled:
                  values["stylusHandwritingEnabled"] as bool,
              enableIMEPersonalizedLearning:
                  values["enableIMEPersonalizedLearning"] as bool,
              enableInlinePrediction: values["enableInlinePrediction"] as bool?,
              canRequestFocus: values["canRequestFocus"] as bool,
              spellCheckConfiguration:
                  values["spellCheckConfiguration"]
                      as api1.SpellCheckConfiguration?,
              magnifierConfiguration:
                  values["magnifierConfiguration"]
                      as api1.TextMagnifierConfiguration?,
              hintLocales: values["hintLocales"] as List<api5.Locale>?,
            );
          }
          return api.TextField(
            key: values["key"] as api6.Key?,
            controller: values["controller"] as api1.TextEditingController?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            undoController:
                values["undoController"] as api1.UndoHistoryController?,
            decoration: values["decoration"] as api.InputDecoration?,
            keyboardType: values["keyboardType"] as api9.TextInputType?,
            textInputAction: values["textInputAction"] as api9.TextInputAction?,
            textCapitalization:
                values["textCapitalization"] as api9.TextCapitalization,
            style: values["style"] as api2.TextStyle?,
            strutStyle: values["strutStyle"] as api2.StrutStyle?,
            textAlign: values["textAlign"] as api5.TextAlign,
            textAlignVertical:
                values["textAlignVertical"] as api2.TextAlignVertical?,
            textDirection: values["textDirection"] as api5.TextDirection?,
            readOnly: values["readOnly"] as bool,
            toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
            showCursor: values["showCursor"] as bool?,
            autofocus: values["autofocus"] as bool,
            statesController:
                values["statesController"] as api1.WidgetStatesController?,
            obscuringCharacter: values["obscuringCharacter"] as String,
            obscureText: values["obscureText"] as bool,
            autocorrect: values["autocorrect"] as bool?,
            smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
            smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
            enableSuggestions: values["enableSuggestions"] as bool,
            maxLines: values["maxLines"] as int?,
            minLines: values["minLines"] as int?,
            expands: values["expands"] as bool,
            maxLength: values["maxLength"] as int?,
            maxLengthEnforcement:
                values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
            onChanged: values["onChanged"] as void Function(String value)?,
            onEditingComplete: values["onEditingComplete"] as void Function()?,
            onSubmitted: values["onSubmitted"] as void Function(String value)?,
            onAppPrivateCommand:
                values["onAppPrivateCommand"]
                    as void Function(String action, Map<String, Object?> data)?,
            inputFormatters:
                values["inputFormatters"] as List<api9.TextInputFormatter>?,
            enabled: values["enabled"] as bool?,
            ignorePointers: values["ignorePointers"] as bool?,
            cursorWidth: values["cursorWidth"] as double,
            cursorHeight: values["cursorHeight"] as double?,
            cursorRadius: values["cursorRadius"] as api5.Radius?,
            cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
            cursorColor: values["cursorColor"] as api5.Color?,
            cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
            selectionHeightStyle:
                values["selectionHeightStyle"] as api5.BoxHeightStyle?,
            selectionWidthStyle:
                values["selectionWidthStyle"] as api5.BoxWidthStyle?,
            keyboardAppearance:
                values["keyboardAppearance"] as api5.Brightness?,
            scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
            dragStartBehavior:
                values["dragStartBehavior"] as api7.DragStartBehavior,
            enableInteractiveSelection:
                values["enableInteractiveSelection"] as bool?,
            selectAllOnFocus: values["selectAllOnFocus"] as bool?,
            selectionControls:
                values["selectionControls"] as api1.TextSelectionControls?,
            onTap: values["onTap"] as void Function()?,
            onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
            onTapOutside:
                values["onTapOutside"]
                    as void Function(api7.PointerDownEvent event)?,
            onTapUpOutside:
                values["onTapUpOutside"]
                    as void Function(api7.PointerUpEvent event)?,
            mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
            buildCounter:
                values["buildCounter"]
                    as api1.Widget? Function(
                      api1.BuildContext context, {
                      required int currentLength,
                      required bool isFocused,
                      required int? maxLength,
                    })?,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
            contentInsertionConfiguration:
                values["contentInsertionConfiguration"]
                    as api1.ContentInsertionConfiguration?,
            clipBehavior: values["clipBehavior"] as api5.Clip,
            restorationId: values["restorationId"] as String?,
            scribbleEnabled: values["scribbleEnabled"] as bool,
            stylusHandwritingEnabled:
                values["stylusHandwritingEnabled"] as bool,
            enableIMEPersonalizedLearning:
                values["enableIMEPersonalizedLearning"] as bool,
            enableInlinePrediction: values["enableInlinePrediction"] as bool?,
            contextMenuBuilder:
                values["contextMenuBuilder"]
                    as api1.Widget Function(
                      api1.BuildContext context,
                      api1.EditableTextState editableTextState,
                    )?,
            canRequestFocus: values["canRequestFocus"] as bool,
            spellCheckConfiguration:
                values["spellCheckConfiguration"]
                    as api1.SpellCheckConfiguration?,
            magnifierConfiguration:
                values["magnifierConfiguration"]
                    as api1.TextMagnifierConfiguration?,
            hintLocales: values["hintLocales"] as List<api5.Locale>?,
          );
        }
        if (!values.containsKey("contextMenuBuilder")) {
          return api.TextField(
            key: values["key"] as api6.Key?,
            controller: values["controller"] as api1.TextEditingController?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            undoController:
                values["undoController"] as api1.UndoHistoryController?,
            decoration: values["decoration"] as api.InputDecoration?,
            keyboardType: values["keyboardType"] as api9.TextInputType?,
            textInputAction: values["textInputAction"] as api9.TextInputAction?,
            textCapitalization:
                values["textCapitalization"] as api9.TextCapitalization,
            style: values["style"] as api2.TextStyle?,
            strutStyle: values["strutStyle"] as api2.StrutStyle?,
            textAlign: values["textAlign"] as api5.TextAlign,
            textAlignVertical:
                values["textAlignVertical"] as api2.TextAlignVertical?,
            textDirection: values["textDirection"] as api5.TextDirection?,
            readOnly: values["readOnly"] as bool,
            toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
            showCursor: values["showCursor"] as bool?,
            autofocus: values["autofocus"] as bool,
            statesController:
                values["statesController"] as api1.WidgetStatesController?,
            obscuringCharacter: values["obscuringCharacter"] as String,
            obscureText: values["obscureText"] as bool,
            autocorrect: values["autocorrect"] as bool?,
            smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
            smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
            enableSuggestions: values["enableSuggestions"] as bool,
            maxLines: values["maxLines"] as int?,
            minLines: values["minLines"] as int?,
            expands: values["expands"] as bool,
            maxLength: values["maxLength"] as int?,
            maxLengthEnforcement:
                values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
            onChanged: values["onChanged"] as void Function(String value)?,
            onEditingComplete: values["onEditingComplete"] as void Function()?,
            onSubmitted: values["onSubmitted"] as void Function(String value)?,
            onAppPrivateCommand:
                values["onAppPrivateCommand"]
                    as void Function(String action, Map<String, Object?> data)?,
            inputFormatters:
                values["inputFormatters"] as List<api9.TextInputFormatter>?,
            enabled: values["enabled"] as bool?,
            ignorePointers: values["ignorePointers"] as bool?,
            cursorWidth: values["cursorWidth"] as double,
            cursorHeight: values["cursorHeight"] as double?,
            cursorRadius: values["cursorRadius"] as api5.Radius?,
            cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
            cursorColor: values["cursorColor"] as api5.Color?,
            cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
            selectionHeightStyle:
                values["selectionHeightStyle"] as api5.BoxHeightStyle?,
            selectionWidthStyle:
                values["selectionWidthStyle"] as api5.BoxWidthStyle?,
            keyboardAppearance:
                values["keyboardAppearance"] as api5.Brightness?,
            scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
            dragStartBehavior:
                values["dragStartBehavior"] as api7.DragStartBehavior,
            enableInteractiveSelection:
                values["enableInteractiveSelection"] as bool?,
            selectAllOnFocus: values["selectAllOnFocus"] as bool?,
            selectionControls:
                values["selectionControls"] as api1.TextSelectionControls?,
            onTap: values["onTap"] as void Function()?,
            onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
            onTapOutside:
                values["onTapOutside"]
                    as void Function(api7.PointerDownEvent event)?,
            onTapUpOutside:
                values["onTapUpOutside"]
                    as void Function(api7.PointerUpEvent event)?,
            mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
            buildCounter:
                values["buildCounter"]
                    as api1.Widget? Function(
                      api1.BuildContext context, {
                      required int currentLength,
                      required bool isFocused,
                      required int? maxLength,
                    })?,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
            autofillHints: values["autofillHints"] as Iterable<String>?,
            contentInsertionConfiguration:
                values["contentInsertionConfiguration"]
                    as api1.ContentInsertionConfiguration?,
            clipBehavior: values["clipBehavior"] as api5.Clip,
            restorationId: values["restorationId"] as String?,
            scribbleEnabled: values["scribbleEnabled"] as bool,
            stylusHandwritingEnabled:
                values["stylusHandwritingEnabled"] as bool,
            enableIMEPersonalizedLearning:
                values["enableIMEPersonalizedLearning"] as bool,
            enableInlinePrediction: values["enableInlinePrediction"] as bool?,
            canRequestFocus: values["canRequestFocus"] as bool,
            spellCheckConfiguration:
                values["spellCheckConfiguration"]
                    as api1.SpellCheckConfiguration?,
            magnifierConfiguration:
                values["magnifierConfiguration"]
                    as api1.TextMagnifierConfiguration?,
            hintLocales: values["hintLocales"] as List<api5.Locale>?,
          );
        }
        return api.TextField(
          key: values["key"] as api6.Key?,
          controller: values["controller"] as api1.TextEditingController?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          undoController:
              values["undoController"] as api1.UndoHistoryController?,
          decoration: values["decoration"] as api.InputDecoration?,
          keyboardType: values["keyboardType"] as api9.TextInputType?,
          textInputAction: values["textInputAction"] as api9.TextInputAction?,
          textCapitalization:
              values["textCapitalization"] as api9.TextCapitalization,
          style: values["style"] as api2.TextStyle?,
          strutStyle: values["strutStyle"] as api2.StrutStyle?,
          textAlign: values["textAlign"] as api5.TextAlign,
          textAlignVertical:
              values["textAlignVertical"] as api2.TextAlignVertical?,
          textDirection: values["textDirection"] as api5.TextDirection?,
          readOnly: values["readOnly"] as bool,
          toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
          showCursor: values["showCursor"] as bool?,
          autofocus: values["autofocus"] as bool,
          statesController:
              values["statesController"] as api1.WidgetStatesController?,
          obscuringCharacter: values["obscuringCharacter"] as String,
          obscureText: values["obscureText"] as bool,
          autocorrect: values["autocorrect"] as bool?,
          smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
          smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
          enableSuggestions: values["enableSuggestions"] as bool,
          maxLines: values["maxLines"] as int?,
          minLines: values["minLines"] as int?,
          expands: values["expands"] as bool,
          maxLength: values["maxLength"] as int?,
          maxLengthEnforcement:
              values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
          onChanged: values["onChanged"] as void Function(String value)?,
          onEditingComplete: values["onEditingComplete"] as void Function()?,
          onSubmitted: values["onSubmitted"] as void Function(String value)?,
          onAppPrivateCommand:
              values["onAppPrivateCommand"]
                  as void Function(String action, Map<String, Object?> data)?,
          inputFormatters:
              values["inputFormatters"] as List<api9.TextInputFormatter>?,
          enabled: values["enabled"] as bool?,
          ignorePointers: values["ignorePointers"] as bool?,
          cursorWidth: values["cursorWidth"] as double,
          cursorHeight: values["cursorHeight"] as double?,
          cursorRadius: values["cursorRadius"] as api5.Radius?,
          cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
          cursorColor: values["cursorColor"] as api5.Color?,
          cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
          selectionHeightStyle:
              values["selectionHeightStyle"] as api5.BoxHeightStyle?,
          selectionWidthStyle:
              values["selectionWidthStyle"] as api5.BoxWidthStyle?,
          keyboardAppearance: values["keyboardAppearance"] as api5.Brightness?,
          scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
          dragStartBehavior:
              values["dragStartBehavior"] as api7.DragStartBehavior,
          enableInteractiveSelection:
              values["enableInteractiveSelection"] as bool?,
          selectAllOnFocus: values["selectAllOnFocus"] as bool?,
          selectionControls:
              values["selectionControls"] as api1.TextSelectionControls?,
          onTap: values["onTap"] as void Function()?,
          onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
          onTapOutside:
              values["onTapOutside"]
                  as void Function(api7.PointerDownEvent event)?,
          onTapUpOutside:
              values["onTapUpOutside"]
                  as void Function(api7.PointerUpEvent event)?,
          mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
          buildCounter:
              values["buildCounter"]
                  as api1.Widget? Function(
                    api1.BuildContext context, {
                    required int currentLength,
                    required bool isFocused,
                    required int? maxLength,
                  })?,
          scrollController:
              values["scrollController"] as api1.ScrollController?,
          scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
          autofillHints: values["autofillHints"] as Iterable<String>?,
          contentInsertionConfiguration:
              values["contentInsertionConfiguration"]
                  as api1.ContentInsertionConfiguration?,
          clipBehavior: values["clipBehavior"] as api5.Clip,
          restorationId: values["restorationId"] as String?,
          scribbleEnabled: values["scribbleEnabled"] as bool,
          stylusHandwritingEnabled: values["stylusHandwritingEnabled"] as bool,
          enableIMEPersonalizedLearning:
              values["enableIMEPersonalizedLearning"] as bool,
          enableInlinePrediction: values["enableInlinePrediction"] as bool?,
          contextMenuBuilder:
              values["contextMenuBuilder"]
                  as api1.Widget Function(
                    api1.BuildContext context,
                    api1.EditableTextState editableTextState,
                  )?,
          canRequestFocus: values["canRequestFocus"] as bool,
          spellCheckConfiguration:
              values["spellCheckConfiguration"]
                  as api1.SpellCheckConfiguration?,
          magnifierConfiguration:
              values["magnifierConfiguration"]
                  as api1.TextMagnifierConfiguration?,
          hintLocales: values["hintLocales"] as List<api5.Locale>?,
        );
      }
      if (!values.containsKey("decoration")) {
        if (!values.containsKey("scrollPadding")) {
          if (!values.containsKey("autofillHints")) {
            if (!values.containsKey("contextMenuBuilder")) {
              return api.TextField(
                key: values["key"] as api6.Key?,
                groupId: values["groupId"] as Object,
                controller: values["controller"] as api1.TextEditingController?,
                focusNode: values["focusNode"] as api1.FocusNode?,
                undoController:
                    values["undoController"] as api1.UndoHistoryController?,
                keyboardType: values["keyboardType"] as api9.TextInputType?,
                textInputAction:
                    values["textInputAction"] as api9.TextInputAction?,
                textCapitalization:
                    values["textCapitalization"] as api9.TextCapitalization,
                style: values["style"] as api2.TextStyle?,
                strutStyle: values["strutStyle"] as api2.StrutStyle?,
                textAlign: values["textAlign"] as api5.TextAlign,
                textAlignVertical:
                    values["textAlignVertical"] as api2.TextAlignVertical?,
                textDirection: values["textDirection"] as api5.TextDirection?,
                readOnly: values["readOnly"] as bool,
                toolbarOptions:
                    values["toolbarOptions"] as api1.ToolbarOptions?,
                showCursor: values["showCursor"] as bool?,
                autofocus: values["autofocus"] as bool,
                statesController:
                    values["statesController"] as api1.WidgetStatesController?,
                obscuringCharacter: values["obscuringCharacter"] as String,
                obscureText: values["obscureText"] as bool,
                autocorrect: values["autocorrect"] as bool?,
                smartDashesType:
                    values["smartDashesType"] as api9.SmartDashesType?,
                smartQuotesType:
                    values["smartQuotesType"] as api9.SmartQuotesType?,
                enableSuggestions: values["enableSuggestions"] as bool,
                maxLines: values["maxLines"] as int?,
                minLines: values["minLines"] as int?,
                expands: values["expands"] as bool,
                maxLength: values["maxLength"] as int?,
                maxLengthEnforcement:
                    values["maxLengthEnforcement"]
                        as api9.MaxLengthEnforcement?,
                onChanged: values["onChanged"] as void Function(String value)?,
                onEditingComplete:
                    values["onEditingComplete"] as void Function()?,
                onSubmitted:
                    values["onSubmitted"] as void Function(String value)?,
                onAppPrivateCommand:
                    values["onAppPrivateCommand"]
                        as void Function(
                          String action,
                          Map<String, Object?> data,
                        )?,
                inputFormatters:
                    values["inputFormatters"] as List<api9.TextInputFormatter>?,
                enabled: values["enabled"] as bool?,
                ignorePointers: values["ignorePointers"] as bool?,
                cursorWidth: values["cursorWidth"] as double,
                cursorHeight: values["cursorHeight"] as double?,
                cursorRadius: values["cursorRadius"] as api5.Radius?,
                cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
                cursorColor: values["cursorColor"] as api5.Color?,
                cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
                selectionHeightStyle:
                    values["selectionHeightStyle"] as api5.BoxHeightStyle?,
                selectionWidthStyle:
                    values["selectionWidthStyle"] as api5.BoxWidthStyle?,
                keyboardAppearance:
                    values["keyboardAppearance"] as api5.Brightness?,
                dragStartBehavior:
                    values["dragStartBehavior"] as api7.DragStartBehavior,
                enableInteractiveSelection:
                    values["enableInteractiveSelection"] as bool?,
                selectAllOnFocus: values["selectAllOnFocus"] as bool?,
                selectionControls:
                    values["selectionControls"] as api1.TextSelectionControls?,
                onTap: values["onTap"] as void Function()?,
                onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
                onTapOutside:
                    values["onTapOutside"]
                        as void Function(api7.PointerDownEvent event)?,
                onTapUpOutside:
                    values["onTapUpOutside"]
                        as void Function(api7.PointerUpEvent event)?,
                mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
                buildCounter:
                    values["buildCounter"]
                        as api1.Widget? Function(
                          api1.BuildContext context, {
                          required int currentLength,
                          required bool isFocused,
                          required int? maxLength,
                        })?,
                scrollController:
                    values["scrollController"] as api1.ScrollController?,
                scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
                contentInsertionConfiguration:
                    values["contentInsertionConfiguration"]
                        as api1.ContentInsertionConfiguration?,
                clipBehavior: values["clipBehavior"] as api5.Clip,
                restorationId: values["restorationId"] as String?,
                scribbleEnabled: values["scribbleEnabled"] as bool,
                stylusHandwritingEnabled:
                    values["stylusHandwritingEnabled"] as bool,
                enableIMEPersonalizedLearning:
                    values["enableIMEPersonalizedLearning"] as bool,
                enableInlinePrediction:
                    values["enableInlinePrediction"] as bool?,
                canRequestFocus: values["canRequestFocus"] as bool,
                spellCheckConfiguration:
                    values["spellCheckConfiguration"]
                        as api1.SpellCheckConfiguration?,
                magnifierConfiguration:
                    values["magnifierConfiguration"]
                        as api1.TextMagnifierConfiguration?,
                hintLocales: values["hintLocales"] as List<api5.Locale>?,
              );
            }
            return api.TextField(
              key: values["key"] as api6.Key?,
              groupId: values["groupId"] as Object,
              controller: values["controller"] as api1.TextEditingController?,
              focusNode: values["focusNode"] as api1.FocusNode?,
              undoController:
                  values["undoController"] as api1.UndoHistoryController?,
              keyboardType: values["keyboardType"] as api9.TextInputType?,
              textInputAction:
                  values["textInputAction"] as api9.TextInputAction?,
              textCapitalization:
                  values["textCapitalization"] as api9.TextCapitalization,
              style: values["style"] as api2.TextStyle?,
              strutStyle: values["strutStyle"] as api2.StrutStyle?,
              textAlign: values["textAlign"] as api5.TextAlign,
              textAlignVertical:
                  values["textAlignVertical"] as api2.TextAlignVertical?,
              textDirection: values["textDirection"] as api5.TextDirection?,
              readOnly: values["readOnly"] as bool,
              toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
              showCursor: values["showCursor"] as bool?,
              autofocus: values["autofocus"] as bool,
              statesController:
                  values["statesController"] as api1.WidgetStatesController?,
              obscuringCharacter: values["obscuringCharacter"] as String,
              obscureText: values["obscureText"] as bool,
              autocorrect: values["autocorrect"] as bool?,
              smartDashesType:
                  values["smartDashesType"] as api9.SmartDashesType?,
              smartQuotesType:
                  values["smartQuotesType"] as api9.SmartQuotesType?,
              enableSuggestions: values["enableSuggestions"] as bool,
              maxLines: values["maxLines"] as int?,
              minLines: values["minLines"] as int?,
              expands: values["expands"] as bool,
              maxLength: values["maxLength"] as int?,
              maxLengthEnforcement:
                  values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
              onChanged: values["onChanged"] as void Function(String value)?,
              onEditingComplete:
                  values["onEditingComplete"] as void Function()?,
              onSubmitted:
                  values["onSubmitted"] as void Function(String value)?,
              onAppPrivateCommand:
                  values["onAppPrivateCommand"]
                      as void Function(
                        String action,
                        Map<String, Object?> data,
                      )?,
              inputFormatters:
                  values["inputFormatters"] as List<api9.TextInputFormatter>?,
              enabled: values["enabled"] as bool?,
              ignorePointers: values["ignorePointers"] as bool?,
              cursorWidth: values["cursorWidth"] as double,
              cursorHeight: values["cursorHeight"] as double?,
              cursorRadius: values["cursorRadius"] as api5.Radius?,
              cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
              cursorColor: values["cursorColor"] as api5.Color?,
              cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
              selectionHeightStyle:
                  values["selectionHeightStyle"] as api5.BoxHeightStyle?,
              selectionWidthStyle:
                  values["selectionWidthStyle"] as api5.BoxWidthStyle?,
              keyboardAppearance:
                  values["keyboardAppearance"] as api5.Brightness?,
              dragStartBehavior:
                  values["dragStartBehavior"] as api7.DragStartBehavior,
              enableInteractiveSelection:
                  values["enableInteractiveSelection"] as bool?,
              selectAllOnFocus: values["selectAllOnFocus"] as bool?,
              selectionControls:
                  values["selectionControls"] as api1.TextSelectionControls?,
              onTap: values["onTap"] as void Function()?,
              onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
              onTapOutside:
                  values["onTapOutside"]
                      as void Function(api7.PointerDownEvent event)?,
              onTapUpOutside:
                  values["onTapUpOutside"]
                      as void Function(api7.PointerUpEvent event)?,
              mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
              buildCounter:
                  values["buildCounter"]
                      as api1.Widget? Function(
                        api1.BuildContext context, {
                        required int currentLength,
                        required bool isFocused,
                        required int? maxLength,
                      })?,
              scrollController:
                  values["scrollController"] as api1.ScrollController?,
              scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
              contentInsertionConfiguration:
                  values["contentInsertionConfiguration"]
                      as api1.ContentInsertionConfiguration?,
              clipBehavior: values["clipBehavior"] as api5.Clip,
              restorationId: values["restorationId"] as String?,
              scribbleEnabled: values["scribbleEnabled"] as bool,
              stylusHandwritingEnabled:
                  values["stylusHandwritingEnabled"] as bool,
              enableIMEPersonalizedLearning:
                  values["enableIMEPersonalizedLearning"] as bool,
              enableInlinePrediction: values["enableInlinePrediction"] as bool?,
              contextMenuBuilder:
                  values["contextMenuBuilder"]
                      as api1.Widget Function(
                        api1.BuildContext context,
                        api1.EditableTextState editableTextState,
                      )?,
              canRequestFocus: values["canRequestFocus"] as bool,
              spellCheckConfiguration:
                  values["spellCheckConfiguration"]
                      as api1.SpellCheckConfiguration?,
              magnifierConfiguration:
                  values["magnifierConfiguration"]
                      as api1.TextMagnifierConfiguration?,
              hintLocales: values["hintLocales"] as List<api5.Locale>?,
            );
          }
          if (!values.containsKey("contextMenuBuilder")) {
            return api.TextField(
              key: values["key"] as api6.Key?,
              groupId: values["groupId"] as Object,
              controller: values["controller"] as api1.TextEditingController?,
              focusNode: values["focusNode"] as api1.FocusNode?,
              undoController:
                  values["undoController"] as api1.UndoHistoryController?,
              keyboardType: values["keyboardType"] as api9.TextInputType?,
              textInputAction:
                  values["textInputAction"] as api9.TextInputAction?,
              textCapitalization:
                  values["textCapitalization"] as api9.TextCapitalization,
              style: values["style"] as api2.TextStyle?,
              strutStyle: values["strutStyle"] as api2.StrutStyle?,
              textAlign: values["textAlign"] as api5.TextAlign,
              textAlignVertical:
                  values["textAlignVertical"] as api2.TextAlignVertical?,
              textDirection: values["textDirection"] as api5.TextDirection?,
              readOnly: values["readOnly"] as bool,
              toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
              showCursor: values["showCursor"] as bool?,
              autofocus: values["autofocus"] as bool,
              statesController:
                  values["statesController"] as api1.WidgetStatesController?,
              obscuringCharacter: values["obscuringCharacter"] as String,
              obscureText: values["obscureText"] as bool,
              autocorrect: values["autocorrect"] as bool?,
              smartDashesType:
                  values["smartDashesType"] as api9.SmartDashesType?,
              smartQuotesType:
                  values["smartQuotesType"] as api9.SmartQuotesType?,
              enableSuggestions: values["enableSuggestions"] as bool,
              maxLines: values["maxLines"] as int?,
              minLines: values["minLines"] as int?,
              expands: values["expands"] as bool,
              maxLength: values["maxLength"] as int?,
              maxLengthEnforcement:
                  values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
              onChanged: values["onChanged"] as void Function(String value)?,
              onEditingComplete:
                  values["onEditingComplete"] as void Function()?,
              onSubmitted:
                  values["onSubmitted"] as void Function(String value)?,
              onAppPrivateCommand:
                  values["onAppPrivateCommand"]
                      as void Function(
                        String action,
                        Map<String, Object?> data,
                      )?,
              inputFormatters:
                  values["inputFormatters"] as List<api9.TextInputFormatter>?,
              enabled: values["enabled"] as bool?,
              ignorePointers: values["ignorePointers"] as bool?,
              cursorWidth: values["cursorWidth"] as double,
              cursorHeight: values["cursorHeight"] as double?,
              cursorRadius: values["cursorRadius"] as api5.Radius?,
              cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
              cursorColor: values["cursorColor"] as api5.Color?,
              cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
              selectionHeightStyle:
                  values["selectionHeightStyle"] as api5.BoxHeightStyle?,
              selectionWidthStyle:
                  values["selectionWidthStyle"] as api5.BoxWidthStyle?,
              keyboardAppearance:
                  values["keyboardAppearance"] as api5.Brightness?,
              dragStartBehavior:
                  values["dragStartBehavior"] as api7.DragStartBehavior,
              enableInteractiveSelection:
                  values["enableInteractiveSelection"] as bool?,
              selectAllOnFocus: values["selectAllOnFocus"] as bool?,
              selectionControls:
                  values["selectionControls"] as api1.TextSelectionControls?,
              onTap: values["onTap"] as void Function()?,
              onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
              onTapOutside:
                  values["onTapOutside"]
                      as void Function(api7.PointerDownEvent event)?,
              onTapUpOutside:
                  values["onTapUpOutside"]
                      as void Function(api7.PointerUpEvent event)?,
              mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
              buildCounter:
                  values["buildCounter"]
                      as api1.Widget? Function(
                        api1.BuildContext context, {
                        required int currentLength,
                        required bool isFocused,
                        required int? maxLength,
                      })?,
              scrollController:
                  values["scrollController"] as api1.ScrollController?,
              scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
              autofillHints: values["autofillHints"] as Iterable<String>?,
              contentInsertionConfiguration:
                  values["contentInsertionConfiguration"]
                      as api1.ContentInsertionConfiguration?,
              clipBehavior: values["clipBehavior"] as api5.Clip,
              restorationId: values["restorationId"] as String?,
              scribbleEnabled: values["scribbleEnabled"] as bool,
              stylusHandwritingEnabled:
                  values["stylusHandwritingEnabled"] as bool,
              enableIMEPersonalizedLearning:
                  values["enableIMEPersonalizedLearning"] as bool,
              enableInlinePrediction: values["enableInlinePrediction"] as bool?,
              canRequestFocus: values["canRequestFocus"] as bool,
              spellCheckConfiguration:
                  values["spellCheckConfiguration"]
                      as api1.SpellCheckConfiguration?,
              magnifierConfiguration:
                  values["magnifierConfiguration"]
                      as api1.TextMagnifierConfiguration?,
              hintLocales: values["hintLocales"] as List<api5.Locale>?,
            );
          }
          return api.TextField(
            key: values["key"] as api6.Key?,
            groupId: values["groupId"] as Object,
            controller: values["controller"] as api1.TextEditingController?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            undoController:
                values["undoController"] as api1.UndoHistoryController?,
            keyboardType: values["keyboardType"] as api9.TextInputType?,
            textInputAction: values["textInputAction"] as api9.TextInputAction?,
            textCapitalization:
                values["textCapitalization"] as api9.TextCapitalization,
            style: values["style"] as api2.TextStyle?,
            strutStyle: values["strutStyle"] as api2.StrutStyle?,
            textAlign: values["textAlign"] as api5.TextAlign,
            textAlignVertical:
                values["textAlignVertical"] as api2.TextAlignVertical?,
            textDirection: values["textDirection"] as api5.TextDirection?,
            readOnly: values["readOnly"] as bool,
            toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
            showCursor: values["showCursor"] as bool?,
            autofocus: values["autofocus"] as bool,
            statesController:
                values["statesController"] as api1.WidgetStatesController?,
            obscuringCharacter: values["obscuringCharacter"] as String,
            obscureText: values["obscureText"] as bool,
            autocorrect: values["autocorrect"] as bool?,
            smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
            smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
            enableSuggestions: values["enableSuggestions"] as bool,
            maxLines: values["maxLines"] as int?,
            minLines: values["minLines"] as int?,
            expands: values["expands"] as bool,
            maxLength: values["maxLength"] as int?,
            maxLengthEnforcement:
                values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
            onChanged: values["onChanged"] as void Function(String value)?,
            onEditingComplete: values["onEditingComplete"] as void Function()?,
            onSubmitted: values["onSubmitted"] as void Function(String value)?,
            onAppPrivateCommand:
                values["onAppPrivateCommand"]
                    as void Function(String action, Map<String, Object?> data)?,
            inputFormatters:
                values["inputFormatters"] as List<api9.TextInputFormatter>?,
            enabled: values["enabled"] as bool?,
            ignorePointers: values["ignorePointers"] as bool?,
            cursorWidth: values["cursorWidth"] as double,
            cursorHeight: values["cursorHeight"] as double?,
            cursorRadius: values["cursorRadius"] as api5.Radius?,
            cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
            cursorColor: values["cursorColor"] as api5.Color?,
            cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
            selectionHeightStyle:
                values["selectionHeightStyle"] as api5.BoxHeightStyle?,
            selectionWidthStyle:
                values["selectionWidthStyle"] as api5.BoxWidthStyle?,
            keyboardAppearance:
                values["keyboardAppearance"] as api5.Brightness?,
            dragStartBehavior:
                values["dragStartBehavior"] as api7.DragStartBehavior,
            enableInteractiveSelection:
                values["enableInteractiveSelection"] as bool?,
            selectAllOnFocus: values["selectAllOnFocus"] as bool?,
            selectionControls:
                values["selectionControls"] as api1.TextSelectionControls?,
            onTap: values["onTap"] as void Function()?,
            onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
            onTapOutside:
                values["onTapOutside"]
                    as void Function(api7.PointerDownEvent event)?,
            onTapUpOutside:
                values["onTapUpOutside"]
                    as void Function(api7.PointerUpEvent event)?,
            mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
            buildCounter:
                values["buildCounter"]
                    as api1.Widget? Function(
                      api1.BuildContext context, {
                      required int currentLength,
                      required bool isFocused,
                      required int? maxLength,
                    })?,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
            autofillHints: values["autofillHints"] as Iterable<String>?,
            contentInsertionConfiguration:
                values["contentInsertionConfiguration"]
                    as api1.ContentInsertionConfiguration?,
            clipBehavior: values["clipBehavior"] as api5.Clip,
            restorationId: values["restorationId"] as String?,
            scribbleEnabled: values["scribbleEnabled"] as bool,
            stylusHandwritingEnabled:
                values["stylusHandwritingEnabled"] as bool,
            enableIMEPersonalizedLearning:
                values["enableIMEPersonalizedLearning"] as bool,
            enableInlinePrediction: values["enableInlinePrediction"] as bool?,
            contextMenuBuilder:
                values["contextMenuBuilder"]
                    as api1.Widget Function(
                      api1.BuildContext context,
                      api1.EditableTextState editableTextState,
                    )?,
            canRequestFocus: values["canRequestFocus"] as bool,
            spellCheckConfiguration:
                values["spellCheckConfiguration"]
                    as api1.SpellCheckConfiguration?,
            magnifierConfiguration:
                values["magnifierConfiguration"]
                    as api1.TextMagnifierConfiguration?,
            hintLocales: values["hintLocales"] as List<api5.Locale>?,
          );
        }
        if (!values.containsKey("autofillHints")) {
          if (!values.containsKey("contextMenuBuilder")) {
            return api.TextField(
              key: values["key"] as api6.Key?,
              groupId: values["groupId"] as Object,
              controller: values["controller"] as api1.TextEditingController?,
              focusNode: values["focusNode"] as api1.FocusNode?,
              undoController:
                  values["undoController"] as api1.UndoHistoryController?,
              keyboardType: values["keyboardType"] as api9.TextInputType?,
              textInputAction:
                  values["textInputAction"] as api9.TextInputAction?,
              textCapitalization:
                  values["textCapitalization"] as api9.TextCapitalization,
              style: values["style"] as api2.TextStyle?,
              strutStyle: values["strutStyle"] as api2.StrutStyle?,
              textAlign: values["textAlign"] as api5.TextAlign,
              textAlignVertical:
                  values["textAlignVertical"] as api2.TextAlignVertical?,
              textDirection: values["textDirection"] as api5.TextDirection?,
              readOnly: values["readOnly"] as bool,
              toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
              showCursor: values["showCursor"] as bool?,
              autofocus: values["autofocus"] as bool,
              statesController:
                  values["statesController"] as api1.WidgetStatesController?,
              obscuringCharacter: values["obscuringCharacter"] as String,
              obscureText: values["obscureText"] as bool,
              autocorrect: values["autocorrect"] as bool?,
              smartDashesType:
                  values["smartDashesType"] as api9.SmartDashesType?,
              smartQuotesType:
                  values["smartQuotesType"] as api9.SmartQuotesType?,
              enableSuggestions: values["enableSuggestions"] as bool,
              maxLines: values["maxLines"] as int?,
              minLines: values["minLines"] as int?,
              expands: values["expands"] as bool,
              maxLength: values["maxLength"] as int?,
              maxLengthEnforcement:
                  values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
              onChanged: values["onChanged"] as void Function(String value)?,
              onEditingComplete:
                  values["onEditingComplete"] as void Function()?,
              onSubmitted:
                  values["onSubmitted"] as void Function(String value)?,
              onAppPrivateCommand:
                  values["onAppPrivateCommand"]
                      as void Function(
                        String action,
                        Map<String, Object?> data,
                      )?,
              inputFormatters:
                  values["inputFormatters"] as List<api9.TextInputFormatter>?,
              enabled: values["enabled"] as bool?,
              ignorePointers: values["ignorePointers"] as bool?,
              cursorWidth: values["cursorWidth"] as double,
              cursorHeight: values["cursorHeight"] as double?,
              cursorRadius: values["cursorRadius"] as api5.Radius?,
              cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
              cursorColor: values["cursorColor"] as api5.Color?,
              cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
              selectionHeightStyle:
                  values["selectionHeightStyle"] as api5.BoxHeightStyle?,
              selectionWidthStyle:
                  values["selectionWidthStyle"] as api5.BoxWidthStyle?,
              keyboardAppearance:
                  values["keyboardAppearance"] as api5.Brightness?,
              scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
              dragStartBehavior:
                  values["dragStartBehavior"] as api7.DragStartBehavior,
              enableInteractiveSelection:
                  values["enableInteractiveSelection"] as bool?,
              selectAllOnFocus: values["selectAllOnFocus"] as bool?,
              selectionControls:
                  values["selectionControls"] as api1.TextSelectionControls?,
              onTap: values["onTap"] as void Function()?,
              onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
              onTapOutside:
                  values["onTapOutside"]
                      as void Function(api7.PointerDownEvent event)?,
              onTapUpOutside:
                  values["onTapUpOutside"]
                      as void Function(api7.PointerUpEvent event)?,
              mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
              buildCounter:
                  values["buildCounter"]
                      as api1.Widget? Function(
                        api1.BuildContext context, {
                        required int currentLength,
                        required bool isFocused,
                        required int? maxLength,
                      })?,
              scrollController:
                  values["scrollController"] as api1.ScrollController?,
              scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
              contentInsertionConfiguration:
                  values["contentInsertionConfiguration"]
                      as api1.ContentInsertionConfiguration?,
              clipBehavior: values["clipBehavior"] as api5.Clip,
              restorationId: values["restorationId"] as String?,
              scribbleEnabled: values["scribbleEnabled"] as bool,
              stylusHandwritingEnabled:
                  values["stylusHandwritingEnabled"] as bool,
              enableIMEPersonalizedLearning:
                  values["enableIMEPersonalizedLearning"] as bool,
              enableInlinePrediction: values["enableInlinePrediction"] as bool?,
              canRequestFocus: values["canRequestFocus"] as bool,
              spellCheckConfiguration:
                  values["spellCheckConfiguration"]
                      as api1.SpellCheckConfiguration?,
              magnifierConfiguration:
                  values["magnifierConfiguration"]
                      as api1.TextMagnifierConfiguration?,
              hintLocales: values["hintLocales"] as List<api5.Locale>?,
            );
          }
          return api.TextField(
            key: values["key"] as api6.Key?,
            groupId: values["groupId"] as Object,
            controller: values["controller"] as api1.TextEditingController?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            undoController:
                values["undoController"] as api1.UndoHistoryController?,
            keyboardType: values["keyboardType"] as api9.TextInputType?,
            textInputAction: values["textInputAction"] as api9.TextInputAction?,
            textCapitalization:
                values["textCapitalization"] as api9.TextCapitalization,
            style: values["style"] as api2.TextStyle?,
            strutStyle: values["strutStyle"] as api2.StrutStyle?,
            textAlign: values["textAlign"] as api5.TextAlign,
            textAlignVertical:
                values["textAlignVertical"] as api2.TextAlignVertical?,
            textDirection: values["textDirection"] as api5.TextDirection?,
            readOnly: values["readOnly"] as bool,
            toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
            showCursor: values["showCursor"] as bool?,
            autofocus: values["autofocus"] as bool,
            statesController:
                values["statesController"] as api1.WidgetStatesController?,
            obscuringCharacter: values["obscuringCharacter"] as String,
            obscureText: values["obscureText"] as bool,
            autocorrect: values["autocorrect"] as bool?,
            smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
            smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
            enableSuggestions: values["enableSuggestions"] as bool,
            maxLines: values["maxLines"] as int?,
            minLines: values["minLines"] as int?,
            expands: values["expands"] as bool,
            maxLength: values["maxLength"] as int?,
            maxLengthEnforcement:
                values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
            onChanged: values["onChanged"] as void Function(String value)?,
            onEditingComplete: values["onEditingComplete"] as void Function()?,
            onSubmitted: values["onSubmitted"] as void Function(String value)?,
            onAppPrivateCommand:
                values["onAppPrivateCommand"]
                    as void Function(String action, Map<String, Object?> data)?,
            inputFormatters:
                values["inputFormatters"] as List<api9.TextInputFormatter>?,
            enabled: values["enabled"] as bool?,
            ignorePointers: values["ignorePointers"] as bool?,
            cursorWidth: values["cursorWidth"] as double,
            cursorHeight: values["cursorHeight"] as double?,
            cursorRadius: values["cursorRadius"] as api5.Radius?,
            cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
            cursorColor: values["cursorColor"] as api5.Color?,
            cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
            selectionHeightStyle:
                values["selectionHeightStyle"] as api5.BoxHeightStyle?,
            selectionWidthStyle:
                values["selectionWidthStyle"] as api5.BoxWidthStyle?,
            keyboardAppearance:
                values["keyboardAppearance"] as api5.Brightness?,
            scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
            dragStartBehavior:
                values["dragStartBehavior"] as api7.DragStartBehavior,
            enableInteractiveSelection:
                values["enableInteractiveSelection"] as bool?,
            selectAllOnFocus: values["selectAllOnFocus"] as bool?,
            selectionControls:
                values["selectionControls"] as api1.TextSelectionControls?,
            onTap: values["onTap"] as void Function()?,
            onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
            onTapOutside:
                values["onTapOutside"]
                    as void Function(api7.PointerDownEvent event)?,
            onTapUpOutside:
                values["onTapUpOutside"]
                    as void Function(api7.PointerUpEvent event)?,
            mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
            buildCounter:
                values["buildCounter"]
                    as api1.Widget? Function(
                      api1.BuildContext context, {
                      required int currentLength,
                      required bool isFocused,
                      required int? maxLength,
                    })?,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
            contentInsertionConfiguration:
                values["contentInsertionConfiguration"]
                    as api1.ContentInsertionConfiguration?,
            clipBehavior: values["clipBehavior"] as api5.Clip,
            restorationId: values["restorationId"] as String?,
            scribbleEnabled: values["scribbleEnabled"] as bool,
            stylusHandwritingEnabled:
                values["stylusHandwritingEnabled"] as bool,
            enableIMEPersonalizedLearning:
                values["enableIMEPersonalizedLearning"] as bool,
            enableInlinePrediction: values["enableInlinePrediction"] as bool?,
            contextMenuBuilder:
                values["contextMenuBuilder"]
                    as api1.Widget Function(
                      api1.BuildContext context,
                      api1.EditableTextState editableTextState,
                    )?,
            canRequestFocus: values["canRequestFocus"] as bool,
            spellCheckConfiguration:
                values["spellCheckConfiguration"]
                    as api1.SpellCheckConfiguration?,
            magnifierConfiguration:
                values["magnifierConfiguration"]
                    as api1.TextMagnifierConfiguration?,
            hintLocales: values["hintLocales"] as List<api5.Locale>?,
          );
        }
        if (!values.containsKey("contextMenuBuilder")) {
          return api.TextField(
            key: values["key"] as api6.Key?,
            groupId: values["groupId"] as Object,
            controller: values["controller"] as api1.TextEditingController?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            undoController:
                values["undoController"] as api1.UndoHistoryController?,
            keyboardType: values["keyboardType"] as api9.TextInputType?,
            textInputAction: values["textInputAction"] as api9.TextInputAction?,
            textCapitalization:
                values["textCapitalization"] as api9.TextCapitalization,
            style: values["style"] as api2.TextStyle?,
            strutStyle: values["strutStyle"] as api2.StrutStyle?,
            textAlign: values["textAlign"] as api5.TextAlign,
            textAlignVertical:
                values["textAlignVertical"] as api2.TextAlignVertical?,
            textDirection: values["textDirection"] as api5.TextDirection?,
            readOnly: values["readOnly"] as bool,
            toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
            showCursor: values["showCursor"] as bool?,
            autofocus: values["autofocus"] as bool,
            statesController:
                values["statesController"] as api1.WidgetStatesController?,
            obscuringCharacter: values["obscuringCharacter"] as String,
            obscureText: values["obscureText"] as bool,
            autocorrect: values["autocorrect"] as bool?,
            smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
            smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
            enableSuggestions: values["enableSuggestions"] as bool,
            maxLines: values["maxLines"] as int?,
            minLines: values["minLines"] as int?,
            expands: values["expands"] as bool,
            maxLength: values["maxLength"] as int?,
            maxLengthEnforcement:
                values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
            onChanged: values["onChanged"] as void Function(String value)?,
            onEditingComplete: values["onEditingComplete"] as void Function()?,
            onSubmitted: values["onSubmitted"] as void Function(String value)?,
            onAppPrivateCommand:
                values["onAppPrivateCommand"]
                    as void Function(String action, Map<String, Object?> data)?,
            inputFormatters:
                values["inputFormatters"] as List<api9.TextInputFormatter>?,
            enabled: values["enabled"] as bool?,
            ignorePointers: values["ignorePointers"] as bool?,
            cursorWidth: values["cursorWidth"] as double,
            cursorHeight: values["cursorHeight"] as double?,
            cursorRadius: values["cursorRadius"] as api5.Radius?,
            cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
            cursorColor: values["cursorColor"] as api5.Color?,
            cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
            selectionHeightStyle:
                values["selectionHeightStyle"] as api5.BoxHeightStyle?,
            selectionWidthStyle:
                values["selectionWidthStyle"] as api5.BoxWidthStyle?,
            keyboardAppearance:
                values["keyboardAppearance"] as api5.Brightness?,
            scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
            dragStartBehavior:
                values["dragStartBehavior"] as api7.DragStartBehavior,
            enableInteractiveSelection:
                values["enableInteractiveSelection"] as bool?,
            selectAllOnFocus: values["selectAllOnFocus"] as bool?,
            selectionControls:
                values["selectionControls"] as api1.TextSelectionControls?,
            onTap: values["onTap"] as void Function()?,
            onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
            onTapOutside:
                values["onTapOutside"]
                    as void Function(api7.PointerDownEvent event)?,
            onTapUpOutside:
                values["onTapUpOutside"]
                    as void Function(api7.PointerUpEvent event)?,
            mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
            buildCounter:
                values["buildCounter"]
                    as api1.Widget? Function(
                      api1.BuildContext context, {
                      required int currentLength,
                      required bool isFocused,
                      required int? maxLength,
                    })?,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
            autofillHints: values["autofillHints"] as Iterable<String>?,
            contentInsertionConfiguration:
                values["contentInsertionConfiguration"]
                    as api1.ContentInsertionConfiguration?,
            clipBehavior: values["clipBehavior"] as api5.Clip,
            restorationId: values["restorationId"] as String?,
            scribbleEnabled: values["scribbleEnabled"] as bool,
            stylusHandwritingEnabled:
                values["stylusHandwritingEnabled"] as bool,
            enableIMEPersonalizedLearning:
                values["enableIMEPersonalizedLearning"] as bool,
            enableInlinePrediction: values["enableInlinePrediction"] as bool?,
            canRequestFocus: values["canRequestFocus"] as bool,
            spellCheckConfiguration:
                values["spellCheckConfiguration"]
                    as api1.SpellCheckConfiguration?,
            magnifierConfiguration:
                values["magnifierConfiguration"]
                    as api1.TextMagnifierConfiguration?,
            hintLocales: values["hintLocales"] as List<api5.Locale>?,
          );
        }
        return api.TextField(
          key: values["key"] as api6.Key?,
          groupId: values["groupId"] as Object,
          controller: values["controller"] as api1.TextEditingController?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          undoController:
              values["undoController"] as api1.UndoHistoryController?,
          keyboardType: values["keyboardType"] as api9.TextInputType?,
          textInputAction: values["textInputAction"] as api9.TextInputAction?,
          textCapitalization:
              values["textCapitalization"] as api9.TextCapitalization,
          style: values["style"] as api2.TextStyle?,
          strutStyle: values["strutStyle"] as api2.StrutStyle?,
          textAlign: values["textAlign"] as api5.TextAlign,
          textAlignVertical:
              values["textAlignVertical"] as api2.TextAlignVertical?,
          textDirection: values["textDirection"] as api5.TextDirection?,
          readOnly: values["readOnly"] as bool,
          toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
          showCursor: values["showCursor"] as bool?,
          autofocus: values["autofocus"] as bool,
          statesController:
              values["statesController"] as api1.WidgetStatesController?,
          obscuringCharacter: values["obscuringCharacter"] as String,
          obscureText: values["obscureText"] as bool,
          autocorrect: values["autocorrect"] as bool?,
          smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
          smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
          enableSuggestions: values["enableSuggestions"] as bool,
          maxLines: values["maxLines"] as int?,
          minLines: values["minLines"] as int?,
          expands: values["expands"] as bool,
          maxLength: values["maxLength"] as int?,
          maxLengthEnforcement:
              values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
          onChanged: values["onChanged"] as void Function(String value)?,
          onEditingComplete: values["onEditingComplete"] as void Function()?,
          onSubmitted: values["onSubmitted"] as void Function(String value)?,
          onAppPrivateCommand:
              values["onAppPrivateCommand"]
                  as void Function(String action, Map<String, Object?> data)?,
          inputFormatters:
              values["inputFormatters"] as List<api9.TextInputFormatter>?,
          enabled: values["enabled"] as bool?,
          ignorePointers: values["ignorePointers"] as bool?,
          cursorWidth: values["cursorWidth"] as double,
          cursorHeight: values["cursorHeight"] as double?,
          cursorRadius: values["cursorRadius"] as api5.Radius?,
          cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
          cursorColor: values["cursorColor"] as api5.Color?,
          cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
          selectionHeightStyle:
              values["selectionHeightStyle"] as api5.BoxHeightStyle?,
          selectionWidthStyle:
              values["selectionWidthStyle"] as api5.BoxWidthStyle?,
          keyboardAppearance: values["keyboardAppearance"] as api5.Brightness?,
          scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
          dragStartBehavior:
              values["dragStartBehavior"] as api7.DragStartBehavior,
          enableInteractiveSelection:
              values["enableInteractiveSelection"] as bool?,
          selectAllOnFocus: values["selectAllOnFocus"] as bool?,
          selectionControls:
              values["selectionControls"] as api1.TextSelectionControls?,
          onTap: values["onTap"] as void Function()?,
          onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
          onTapOutside:
              values["onTapOutside"]
                  as void Function(api7.PointerDownEvent event)?,
          onTapUpOutside:
              values["onTapUpOutside"]
                  as void Function(api7.PointerUpEvent event)?,
          mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
          buildCounter:
              values["buildCounter"]
                  as api1.Widget? Function(
                    api1.BuildContext context, {
                    required int currentLength,
                    required bool isFocused,
                    required int? maxLength,
                  })?,
          scrollController:
              values["scrollController"] as api1.ScrollController?,
          scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
          autofillHints: values["autofillHints"] as Iterable<String>?,
          contentInsertionConfiguration:
              values["contentInsertionConfiguration"]
                  as api1.ContentInsertionConfiguration?,
          clipBehavior: values["clipBehavior"] as api5.Clip,
          restorationId: values["restorationId"] as String?,
          scribbleEnabled: values["scribbleEnabled"] as bool,
          stylusHandwritingEnabled: values["stylusHandwritingEnabled"] as bool,
          enableIMEPersonalizedLearning:
              values["enableIMEPersonalizedLearning"] as bool,
          enableInlinePrediction: values["enableInlinePrediction"] as bool?,
          contextMenuBuilder:
              values["contextMenuBuilder"]
                  as api1.Widget Function(
                    api1.BuildContext context,
                    api1.EditableTextState editableTextState,
                  )?,
          canRequestFocus: values["canRequestFocus"] as bool,
          spellCheckConfiguration:
              values["spellCheckConfiguration"]
                  as api1.SpellCheckConfiguration?,
          magnifierConfiguration:
              values["magnifierConfiguration"]
                  as api1.TextMagnifierConfiguration?,
          hintLocales: values["hintLocales"] as List<api5.Locale>?,
        );
      }
      if (!values.containsKey("scrollPadding")) {
        if (!values.containsKey("autofillHints")) {
          if (!values.containsKey("contextMenuBuilder")) {
            return api.TextField(
              key: values["key"] as api6.Key?,
              groupId: values["groupId"] as Object,
              controller: values["controller"] as api1.TextEditingController?,
              focusNode: values["focusNode"] as api1.FocusNode?,
              undoController:
                  values["undoController"] as api1.UndoHistoryController?,
              decoration: values["decoration"] as api.InputDecoration?,
              keyboardType: values["keyboardType"] as api9.TextInputType?,
              textInputAction:
                  values["textInputAction"] as api9.TextInputAction?,
              textCapitalization:
                  values["textCapitalization"] as api9.TextCapitalization,
              style: values["style"] as api2.TextStyle?,
              strutStyle: values["strutStyle"] as api2.StrutStyle?,
              textAlign: values["textAlign"] as api5.TextAlign,
              textAlignVertical:
                  values["textAlignVertical"] as api2.TextAlignVertical?,
              textDirection: values["textDirection"] as api5.TextDirection?,
              readOnly: values["readOnly"] as bool,
              toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
              showCursor: values["showCursor"] as bool?,
              autofocus: values["autofocus"] as bool,
              statesController:
                  values["statesController"] as api1.WidgetStatesController?,
              obscuringCharacter: values["obscuringCharacter"] as String,
              obscureText: values["obscureText"] as bool,
              autocorrect: values["autocorrect"] as bool?,
              smartDashesType:
                  values["smartDashesType"] as api9.SmartDashesType?,
              smartQuotesType:
                  values["smartQuotesType"] as api9.SmartQuotesType?,
              enableSuggestions: values["enableSuggestions"] as bool,
              maxLines: values["maxLines"] as int?,
              minLines: values["minLines"] as int?,
              expands: values["expands"] as bool,
              maxLength: values["maxLength"] as int?,
              maxLengthEnforcement:
                  values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
              onChanged: values["onChanged"] as void Function(String value)?,
              onEditingComplete:
                  values["onEditingComplete"] as void Function()?,
              onSubmitted:
                  values["onSubmitted"] as void Function(String value)?,
              onAppPrivateCommand:
                  values["onAppPrivateCommand"]
                      as void Function(
                        String action,
                        Map<String, Object?> data,
                      )?,
              inputFormatters:
                  values["inputFormatters"] as List<api9.TextInputFormatter>?,
              enabled: values["enabled"] as bool?,
              ignorePointers: values["ignorePointers"] as bool?,
              cursorWidth: values["cursorWidth"] as double,
              cursorHeight: values["cursorHeight"] as double?,
              cursorRadius: values["cursorRadius"] as api5.Radius?,
              cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
              cursorColor: values["cursorColor"] as api5.Color?,
              cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
              selectionHeightStyle:
                  values["selectionHeightStyle"] as api5.BoxHeightStyle?,
              selectionWidthStyle:
                  values["selectionWidthStyle"] as api5.BoxWidthStyle?,
              keyboardAppearance:
                  values["keyboardAppearance"] as api5.Brightness?,
              dragStartBehavior:
                  values["dragStartBehavior"] as api7.DragStartBehavior,
              enableInteractiveSelection:
                  values["enableInteractiveSelection"] as bool?,
              selectAllOnFocus: values["selectAllOnFocus"] as bool?,
              selectionControls:
                  values["selectionControls"] as api1.TextSelectionControls?,
              onTap: values["onTap"] as void Function()?,
              onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
              onTapOutside:
                  values["onTapOutside"]
                      as void Function(api7.PointerDownEvent event)?,
              onTapUpOutside:
                  values["onTapUpOutside"]
                      as void Function(api7.PointerUpEvent event)?,
              mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
              buildCounter:
                  values["buildCounter"]
                      as api1.Widget? Function(
                        api1.BuildContext context, {
                        required int currentLength,
                        required bool isFocused,
                        required int? maxLength,
                      })?,
              scrollController:
                  values["scrollController"] as api1.ScrollController?,
              scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
              contentInsertionConfiguration:
                  values["contentInsertionConfiguration"]
                      as api1.ContentInsertionConfiguration?,
              clipBehavior: values["clipBehavior"] as api5.Clip,
              restorationId: values["restorationId"] as String?,
              scribbleEnabled: values["scribbleEnabled"] as bool,
              stylusHandwritingEnabled:
                  values["stylusHandwritingEnabled"] as bool,
              enableIMEPersonalizedLearning:
                  values["enableIMEPersonalizedLearning"] as bool,
              enableInlinePrediction: values["enableInlinePrediction"] as bool?,
              canRequestFocus: values["canRequestFocus"] as bool,
              spellCheckConfiguration:
                  values["spellCheckConfiguration"]
                      as api1.SpellCheckConfiguration?,
              magnifierConfiguration:
                  values["magnifierConfiguration"]
                      as api1.TextMagnifierConfiguration?,
              hintLocales: values["hintLocales"] as List<api5.Locale>?,
            );
          }
          return api.TextField(
            key: values["key"] as api6.Key?,
            groupId: values["groupId"] as Object,
            controller: values["controller"] as api1.TextEditingController?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            undoController:
                values["undoController"] as api1.UndoHistoryController?,
            decoration: values["decoration"] as api.InputDecoration?,
            keyboardType: values["keyboardType"] as api9.TextInputType?,
            textInputAction: values["textInputAction"] as api9.TextInputAction?,
            textCapitalization:
                values["textCapitalization"] as api9.TextCapitalization,
            style: values["style"] as api2.TextStyle?,
            strutStyle: values["strutStyle"] as api2.StrutStyle?,
            textAlign: values["textAlign"] as api5.TextAlign,
            textAlignVertical:
                values["textAlignVertical"] as api2.TextAlignVertical?,
            textDirection: values["textDirection"] as api5.TextDirection?,
            readOnly: values["readOnly"] as bool,
            toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
            showCursor: values["showCursor"] as bool?,
            autofocus: values["autofocus"] as bool,
            statesController:
                values["statesController"] as api1.WidgetStatesController?,
            obscuringCharacter: values["obscuringCharacter"] as String,
            obscureText: values["obscureText"] as bool,
            autocorrect: values["autocorrect"] as bool?,
            smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
            smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
            enableSuggestions: values["enableSuggestions"] as bool,
            maxLines: values["maxLines"] as int?,
            minLines: values["minLines"] as int?,
            expands: values["expands"] as bool,
            maxLength: values["maxLength"] as int?,
            maxLengthEnforcement:
                values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
            onChanged: values["onChanged"] as void Function(String value)?,
            onEditingComplete: values["onEditingComplete"] as void Function()?,
            onSubmitted: values["onSubmitted"] as void Function(String value)?,
            onAppPrivateCommand:
                values["onAppPrivateCommand"]
                    as void Function(String action, Map<String, Object?> data)?,
            inputFormatters:
                values["inputFormatters"] as List<api9.TextInputFormatter>?,
            enabled: values["enabled"] as bool?,
            ignorePointers: values["ignorePointers"] as bool?,
            cursorWidth: values["cursorWidth"] as double,
            cursorHeight: values["cursorHeight"] as double?,
            cursorRadius: values["cursorRadius"] as api5.Radius?,
            cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
            cursorColor: values["cursorColor"] as api5.Color?,
            cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
            selectionHeightStyle:
                values["selectionHeightStyle"] as api5.BoxHeightStyle?,
            selectionWidthStyle:
                values["selectionWidthStyle"] as api5.BoxWidthStyle?,
            keyboardAppearance:
                values["keyboardAppearance"] as api5.Brightness?,
            dragStartBehavior:
                values["dragStartBehavior"] as api7.DragStartBehavior,
            enableInteractiveSelection:
                values["enableInteractiveSelection"] as bool?,
            selectAllOnFocus: values["selectAllOnFocus"] as bool?,
            selectionControls:
                values["selectionControls"] as api1.TextSelectionControls?,
            onTap: values["onTap"] as void Function()?,
            onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
            onTapOutside:
                values["onTapOutside"]
                    as void Function(api7.PointerDownEvent event)?,
            onTapUpOutside:
                values["onTapUpOutside"]
                    as void Function(api7.PointerUpEvent event)?,
            mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
            buildCounter:
                values["buildCounter"]
                    as api1.Widget? Function(
                      api1.BuildContext context, {
                      required int currentLength,
                      required bool isFocused,
                      required int? maxLength,
                    })?,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
            contentInsertionConfiguration:
                values["contentInsertionConfiguration"]
                    as api1.ContentInsertionConfiguration?,
            clipBehavior: values["clipBehavior"] as api5.Clip,
            restorationId: values["restorationId"] as String?,
            scribbleEnabled: values["scribbleEnabled"] as bool,
            stylusHandwritingEnabled:
                values["stylusHandwritingEnabled"] as bool,
            enableIMEPersonalizedLearning:
                values["enableIMEPersonalizedLearning"] as bool,
            enableInlinePrediction: values["enableInlinePrediction"] as bool?,
            contextMenuBuilder:
                values["contextMenuBuilder"]
                    as api1.Widget Function(
                      api1.BuildContext context,
                      api1.EditableTextState editableTextState,
                    )?,
            canRequestFocus: values["canRequestFocus"] as bool,
            spellCheckConfiguration:
                values["spellCheckConfiguration"]
                    as api1.SpellCheckConfiguration?,
            magnifierConfiguration:
                values["magnifierConfiguration"]
                    as api1.TextMagnifierConfiguration?,
            hintLocales: values["hintLocales"] as List<api5.Locale>?,
          );
        }
        if (!values.containsKey("contextMenuBuilder")) {
          return api.TextField(
            key: values["key"] as api6.Key?,
            groupId: values["groupId"] as Object,
            controller: values["controller"] as api1.TextEditingController?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            undoController:
                values["undoController"] as api1.UndoHistoryController?,
            decoration: values["decoration"] as api.InputDecoration?,
            keyboardType: values["keyboardType"] as api9.TextInputType?,
            textInputAction: values["textInputAction"] as api9.TextInputAction?,
            textCapitalization:
                values["textCapitalization"] as api9.TextCapitalization,
            style: values["style"] as api2.TextStyle?,
            strutStyle: values["strutStyle"] as api2.StrutStyle?,
            textAlign: values["textAlign"] as api5.TextAlign,
            textAlignVertical:
                values["textAlignVertical"] as api2.TextAlignVertical?,
            textDirection: values["textDirection"] as api5.TextDirection?,
            readOnly: values["readOnly"] as bool,
            toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
            showCursor: values["showCursor"] as bool?,
            autofocus: values["autofocus"] as bool,
            statesController:
                values["statesController"] as api1.WidgetStatesController?,
            obscuringCharacter: values["obscuringCharacter"] as String,
            obscureText: values["obscureText"] as bool,
            autocorrect: values["autocorrect"] as bool?,
            smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
            smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
            enableSuggestions: values["enableSuggestions"] as bool,
            maxLines: values["maxLines"] as int?,
            minLines: values["minLines"] as int?,
            expands: values["expands"] as bool,
            maxLength: values["maxLength"] as int?,
            maxLengthEnforcement:
                values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
            onChanged: values["onChanged"] as void Function(String value)?,
            onEditingComplete: values["onEditingComplete"] as void Function()?,
            onSubmitted: values["onSubmitted"] as void Function(String value)?,
            onAppPrivateCommand:
                values["onAppPrivateCommand"]
                    as void Function(String action, Map<String, Object?> data)?,
            inputFormatters:
                values["inputFormatters"] as List<api9.TextInputFormatter>?,
            enabled: values["enabled"] as bool?,
            ignorePointers: values["ignorePointers"] as bool?,
            cursorWidth: values["cursorWidth"] as double,
            cursorHeight: values["cursorHeight"] as double?,
            cursorRadius: values["cursorRadius"] as api5.Radius?,
            cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
            cursorColor: values["cursorColor"] as api5.Color?,
            cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
            selectionHeightStyle:
                values["selectionHeightStyle"] as api5.BoxHeightStyle?,
            selectionWidthStyle:
                values["selectionWidthStyle"] as api5.BoxWidthStyle?,
            keyboardAppearance:
                values["keyboardAppearance"] as api5.Brightness?,
            dragStartBehavior:
                values["dragStartBehavior"] as api7.DragStartBehavior,
            enableInteractiveSelection:
                values["enableInteractiveSelection"] as bool?,
            selectAllOnFocus: values["selectAllOnFocus"] as bool?,
            selectionControls:
                values["selectionControls"] as api1.TextSelectionControls?,
            onTap: values["onTap"] as void Function()?,
            onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
            onTapOutside:
                values["onTapOutside"]
                    as void Function(api7.PointerDownEvent event)?,
            onTapUpOutside:
                values["onTapUpOutside"]
                    as void Function(api7.PointerUpEvent event)?,
            mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
            buildCounter:
                values["buildCounter"]
                    as api1.Widget? Function(
                      api1.BuildContext context, {
                      required int currentLength,
                      required bool isFocused,
                      required int? maxLength,
                    })?,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
            autofillHints: values["autofillHints"] as Iterable<String>?,
            contentInsertionConfiguration:
                values["contentInsertionConfiguration"]
                    as api1.ContentInsertionConfiguration?,
            clipBehavior: values["clipBehavior"] as api5.Clip,
            restorationId: values["restorationId"] as String?,
            scribbleEnabled: values["scribbleEnabled"] as bool,
            stylusHandwritingEnabled:
                values["stylusHandwritingEnabled"] as bool,
            enableIMEPersonalizedLearning:
                values["enableIMEPersonalizedLearning"] as bool,
            enableInlinePrediction: values["enableInlinePrediction"] as bool?,
            canRequestFocus: values["canRequestFocus"] as bool,
            spellCheckConfiguration:
                values["spellCheckConfiguration"]
                    as api1.SpellCheckConfiguration?,
            magnifierConfiguration:
                values["magnifierConfiguration"]
                    as api1.TextMagnifierConfiguration?,
            hintLocales: values["hintLocales"] as List<api5.Locale>?,
          );
        }
        return api.TextField(
          key: values["key"] as api6.Key?,
          groupId: values["groupId"] as Object,
          controller: values["controller"] as api1.TextEditingController?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          undoController:
              values["undoController"] as api1.UndoHistoryController?,
          decoration: values["decoration"] as api.InputDecoration?,
          keyboardType: values["keyboardType"] as api9.TextInputType?,
          textInputAction: values["textInputAction"] as api9.TextInputAction?,
          textCapitalization:
              values["textCapitalization"] as api9.TextCapitalization,
          style: values["style"] as api2.TextStyle?,
          strutStyle: values["strutStyle"] as api2.StrutStyle?,
          textAlign: values["textAlign"] as api5.TextAlign,
          textAlignVertical:
              values["textAlignVertical"] as api2.TextAlignVertical?,
          textDirection: values["textDirection"] as api5.TextDirection?,
          readOnly: values["readOnly"] as bool,
          toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
          showCursor: values["showCursor"] as bool?,
          autofocus: values["autofocus"] as bool,
          statesController:
              values["statesController"] as api1.WidgetStatesController?,
          obscuringCharacter: values["obscuringCharacter"] as String,
          obscureText: values["obscureText"] as bool,
          autocorrect: values["autocorrect"] as bool?,
          smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
          smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
          enableSuggestions: values["enableSuggestions"] as bool,
          maxLines: values["maxLines"] as int?,
          minLines: values["minLines"] as int?,
          expands: values["expands"] as bool,
          maxLength: values["maxLength"] as int?,
          maxLengthEnforcement:
              values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
          onChanged: values["onChanged"] as void Function(String value)?,
          onEditingComplete: values["onEditingComplete"] as void Function()?,
          onSubmitted: values["onSubmitted"] as void Function(String value)?,
          onAppPrivateCommand:
              values["onAppPrivateCommand"]
                  as void Function(String action, Map<String, Object?> data)?,
          inputFormatters:
              values["inputFormatters"] as List<api9.TextInputFormatter>?,
          enabled: values["enabled"] as bool?,
          ignorePointers: values["ignorePointers"] as bool?,
          cursorWidth: values["cursorWidth"] as double,
          cursorHeight: values["cursorHeight"] as double?,
          cursorRadius: values["cursorRadius"] as api5.Radius?,
          cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
          cursorColor: values["cursorColor"] as api5.Color?,
          cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
          selectionHeightStyle:
              values["selectionHeightStyle"] as api5.BoxHeightStyle?,
          selectionWidthStyle:
              values["selectionWidthStyle"] as api5.BoxWidthStyle?,
          keyboardAppearance: values["keyboardAppearance"] as api5.Brightness?,
          dragStartBehavior:
              values["dragStartBehavior"] as api7.DragStartBehavior,
          enableInteractiveSelection:
              values["enableInteractiveSelection"] as bool?,
          selectAllOnFocus: values["selectAllOnFocus"] as bool?,
          selectionControls:
              values["selectionControls"] as api1.TextSelectionControls?,
          onTap: values["onTap"] as void Function()?,
          onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
          onTapOutside:
              values["onTapOutside"]
                  as void Function(api7.PointerDownEvent event)?,
          onTapUpOutside:
              values["onTapUpOutside"]
                  as void Function(api7.PointerUpEvent event)?,
          mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
          buildCounter:
              values["buildCounter"]
                  as api1.Widget? Function(
                    api1.BuildContext context, {
                    required int currentLength,
                    required bool isFocused,
                    required int? maxLength,
                  })?,
          scrollController:
              values["scrollController"] as api1.ScrollController?,
          scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
          autofillHints: values["autofillHints"] as Iterable<String>?,
          contentInsertionConfiguration:
              values["contentInsertionConfiguration"]
                  as api1.ContentInsertionConfiguration?,
          clipBehavior: values["clipBehavior"] as api5.Clip,
          restorationId: values["restorationId"] as String?,
          scribbleEnabled: values["scribbleEnabled"] as bool,
          stylusHandwritingEnabled: values["stylusHandwritingEnabled"] as bool,
          enableIMEPersonalizedLearning:
              values["enableIMEPersonalizedLearning"] as bool,
          enableInlinePrediction: values["enableInlinePrediction"] as bool?,
          contextMenuBuilder:
              values["contextMenuBuilder"]
                  as api1.Widget Function(
                    api1.BuildContext context,
                    api1.EditableTextState editableTextState,
                  )?,
          canRequestFocus: values["canRequestFocus"] as bool,
          spellCheckConfiguration:
              values["spellCheckConfiguration"]
                  as api1.SpellCheckConfiguration?,
          magnifierConfiguration:
              values["magnifierConfiguration"]
                  as api1.TextMagnifierConfiguration?,
          hintLocales: values["hintLocales"] as List<api5.Locale>?,
        );
      }
      if (!values.containsKey("autofillHints")) {
        if (!values.containsKey("contextMenuBuilder")) {
          return api.TextField(
            key: values["key"] as api6.Key?,
            groupId: values["groupId"] as Object,
            controller: values["controller"] as api1.TextEditingController?,
            focusNode: values["focusNode"] as api1.FocusNode?,
            undoController:
                values["undoController"] as api1.UndoHistoryController?,
            decoration: values["decoration"] as api.InputDecoration?,
            keyboardType: values["keyboardType"] as api9.TextInputType?,
            textInputAction: values["textInputAction"] as api9.TextInputAction?,
            textCapitalization:
                values["textCapitalization"] as api9.TextCapitalization,
            style: values["style"] as api2.TextStyle?,
            strutStyle: values["strutStyle"] as api2.StrutStyle?,
            textAlign: values["textAlign"] as api5.TextAlign,
            textAlignVertical:
                values["textAlignVertical"] as api2.TextAlignVertical?,
            textDirection: values["textDirection"] as api5.TextDirection?,
            readOnly: values["readOnly"] as bool,
            toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
            showCursor: values["showCursor"] as bool?,
            autofocus: values["autofocus"] as bool,
            statesController:
                values["statesController"] as api1.WidgetStatesController?,
            obscuringCharacter: values["obscuringCharacter"] as String,
            obscureText: values["obscureText"] as bool,
            autocorrect: values["autocorrect"] as bool?,
            smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
            smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
            enableSuggestions: values["enableSuggestions"] as bool,
            maxLines: values["maxLines"] as int?,
            minLines: values["minLines"] as int?,
            expands: values["expands"] as bool,
            maxLength: values["maxLength"] as int?,
            maxLengthEnforcement:
                values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
            onChanged: values["onChanged"] as void Function(String value)?,
            onEditingComplete: values["onEditingComplete"] as void Function()?,
            onSubmitted: values["onSubmitted"] as void Function(String value)?,
            onAppPrivateCommand:
                values["onAppPrivateCommand"]
                    as void Function(String action, Map<String, Object?> data)?,
            inputFormatters:
                values["inputFormatters"] as List<api9.TextInputFormatter>?,
            enabled: values["enabled"] as bool?,
            ignorePointers: values["ignorePointers"] as bool?,
            cursorWidth: values["cursorWidth"] as double,
            cursorHeight: values["cursorHeight"] as double?,
            cursorRadius: values["cursorRadius"] as api5.Radius?,
            cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
            cursorColor: values["cursorColor"] as api5.Color?,
            cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
            selectionHeightStyle:
                values["selectionHeightStyle"] as api5.BoxHeightStyle?,
            selectionWidthStyle:
                values["selectionWidthStyle"] as api5.BoxWidthStyle?,
            keyboardAppearance:
                values["keyboardAppearance"] as api5.Brightness?,
            scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
            dragStartBehavior:
                values["dragStartBehavior"] as api7.DragStartBehavior,
            enableInteractiveSelection:
                values["enableInteractiveSelection"] as bool?,
            selectAllOnFocus: values["selectAllOnFocus"] as bool?,
            selectionControls:
                values["selectionControls"] as api1.TextSelectionControls?,
            onTap: values["onTap"] as void Function()?,
            onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
            onTapOutside:
                values["onTapOutside"]
                    as void Function(api7.PointerDownEvent event)?,
            onTapUpOutside:
                values["onTapUpOutside"]
                    as void Function(api7.PointerUpEvent event)?,
            mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
            buildCounter:
                values["buildCounter"]
                    as api1.Widget? Function(
                      api1.BuildContext context, {
                      required int currentLength,
                      required bool isFocused,
                      required int? maxLength,
                    })?,
            scrollController:
                values["scrollController"] as api1.ScrollController?,
            scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
            contentInsertionConfiguration:
                values["contentInsertionConfiguration"]
                    as api1.ContentInsertionConfiguration?,
            clipBehavior: values["clipBehavior"] as api5.Clip,
            restorationId: values["restorationId"] as String?,
            scribbleEnabled: values["scribbleEnabled"] as bool,
            stylusHandwritingEnabled:
                values["stylusHandwritingEnabled"] as bool,
            enableIMEPersonalizedLearning:
                values["enableIMEPersonalizedLearning"] as bool,
            enableInlinePrediction: values["enableInlinePrediction"] as bool?,
            canRequestFocus: values["canRequestFocus"] as bool,
            spellCheckConfiguration:
                values["spellCheckConfiguration"]
                    as api1.SpellCheckConfiguration?,
            magnifierConfiguration:
                values["magnifierConfiguration"]
                    as api1.TextMagnifierConfiguration?,
            hintLocales: values["hintLocales"] as List<api5.Locale>?,
          );
        }
        return api.TextField(
          key: values["key"] as api6.Key?,
          groupId: values["groupId"] as Object,
          controller: values["controller"] as api1.TextEditingController?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          undoController:
              values["undoController"] as api1.UndoHistoryController?,
          decoration: values["decoration"] as api.InputDecoration?,
          keyboardType: values["keyboardType"] as api9.TextInputType?,
          textInputAction: values["textInputAction"] as api9.TextInputAction?,
          textCapitalization:
              values["textCapitalization"] as api9.TextCapitalization,
          style: values["style"] as api2.TextStyle?,
          strutStyle: values["strutStyle"] as api2.StrutStyle?,
          textAlign: values["textAlign"] as api5.TextAlign,
          textAlignVertical:
              values["textAlignVertical"] as api2.TextAlignVertical?,
          textDirection: values["textDirection"] as api5.TextDirection?,
          readOnly: values["readOnly"] as bool,
          toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
          showCursor: values["showCursor"] as bool?,
          autofocus: values["autofocus"] as bool,
          statesController:
              values["statesController"] as api1.WidgetStatesController?,
          obscuringCharacter: values["obscuringCharacter"] as String,
          obscureText: values["obscureText"] as bool,
          autocorrect: values["autocorrect"] as bool?,
          smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
          smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
          enableSuggestions: values["enableSuggestions"] as bool,
          maxLines: values["maxLines"] as int?,
          minLines: values["minLines"] as int?,
          expands: values["expands"] as bool,
          maxLength: values["maxLength"] as int?,
          maxLengthEnforcement:
              values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
          onChanged: values["onChanged"] as void Function(String value)?,
          onEditingComplete: values["onEditingComplete"] as void Function()?,
          onSubmitted: values["onSubmitted"] as void Function(String value)?,
          onAppPrivateCommand:
              values["onAppPrivateCommand"]
                  as void Function(String action, Map<String, Object?> data)?,
          inputFormatters:
              values["inputFormatters"] as List<api9.TextInputFormatter>?,
          enabled: values["enabled"] as bool?,
          ignorePointers: values["ignorePointers"] as bool?,
          cursorWidth: values["cursorWidth"] as double,
          cursorHeight: values["cursorHeight"] as double?,
          cursorRadius: values["cursorRadius"] as api5.Radius?,
          cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
          cursorColor: values["cursorColor"] as api5.Color?,
          cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
          selectionHeightStyle:
              values["selectionHeightStyle"] as api5.BoxHeightStyle?,
          selectionWidthStyle:
              values["selectionWidthStyle"] as api5.BoxWidthStyle?,
          keyboardAppearance: values["keyboardAppearance"] as api5.Brightness?,
          scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
          dragStartBehavior:
              values["dragStartBehavior"] as api7.DragStartBehavior,
          enableInteractiveSelection:
              values["enableInteractiveSelection"] as bool?,
          selectAllOnFocus: values["selectAllOnFocus"] as bool?,
          selectionControls:
              values["selectionControls"] as api1.TextSelectionControls?,
          onTap: values["onTap"] as void Function()?,
          onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
          onTapOutside:
              values["onTapOutside"]
                  as void Function(api7.PointerDownEvent event)?,
          onTapUpOutside:
              values["onTapUpOutside"]
                  as void Function(api7.PointerUpEvent event)?,
          mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
          buildCounter:
              values["buildCounter"]
                  as api1.Widget? Function(
                    api1.BuildContext context, {
                    required int currentLength,
                    required bool isFocused,
                    required int? maxLength,
                  })?,
          scrollController:
              values["scrollController"] as api1.ScrollController?,
          scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
          contentInsertionConfiguration:
              values["contentInsertionConfiguration"]
                  as api1.ContentInsertionConfiguration?,
          clipBehavior: values["clipBehavior"] as api5.Clip,
          restorationId: values["restorationId"] as String?,
          scribbleEnabled: values["scribbleEnabled"] as bool,
          stylusHandwritingEnabled: values["stylusHandwritingEnabled"] as bool,
          enableIMEPersonalizedLearning:
              values["enableIMEPersonalizedLearning"] as bool,
          enableInlinePrediction: values["enableInlinePrediction"] as bool?,
          contextMenuBuilder:
              values["contextMenuBuilder"]
                  as api1.Widget Function(
                    api1.BuildContext context,
                    api1.EditableTextState editableTextState,
                  )?,
          canRequestFocus: values["canRequestFocus"] as bool,
          spellCheckConfiguration:
              values["spellCheckConfiguration"]
                  as api1.SpellCheckConfiguration?,
          magnifierConfiguration:
              values["magnifierConfiguration"]
                  as api1.TextMagnifierConfiguration?,
          hintLocales: values["hintLocales"] as List<api5.Locale>?,
        );
      }
      if (!values.containsKey("contextMenuBuilder")) {
        return api.TextField(
          key: values["key"] as api6.Key?,
          groupId: values["groupId"] as Object,
          controller: values["controller"] as api1.TextEditingController?,
          focusNode: values["focusNode"] as api1.FocusNode?,
          undoController:
              values["undoController"] as api1.UndoHistoryController?,
          decoration: values["decoration"] as api.InputDecoration?,
          keyboardType: values["keyboardType"] as api9.TextInputType?,
          textInputAction: values["textInputAction"] as api9.TextInputAction?,
          textCapitalization:
              values["textCapitalization"] as api9.TextCapitalization,
          style: values["style"] as api2.TextStyle?,
          strutStyle: values["strutStyle"] as api2.StrutStyle?,
          textAlign: values["textAlign"] as api5.TextAlign,
          textAlignVertical:
              values["textAlignVertical"] as api2.TextAlignVertical?,
          textDirection: values["textDirection"] as api5.TextDirection?,
          readOnly: values["readOnly"] as bool,
          toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
          showCursor: values["showCursor"] as bool?,
          autofocus: values["autofocus"] as bool,
          statesController:
              values["statesController"] as api1.WidgetStatesController?,
          obscuringCharacter: values["obscuringCharacter"] as String,
          obscureText: values["obscureText"] as bool,
          autocorrect: values["autocorrect"] as bool?,
          smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
          smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
          enableSuggestions: values["enableSuggestions"] as bool,
          maxLines: values["maxLines"] as int?,
          minLines: values["minLines"] as int?,
          expands: values["expands"] as bool,
          maxLength: values["maxLength"] as int?,
          maxLengthEnforcement:
              values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
          onChanged: values["onChanged"] as void Function(String value)?,
          onEditingComplete: values["onEditingComplete"] as void Function()?,
          onSubmitted: values["onSubmitted"] as void Function(String value)?,
          onAppPrivateCommand:
              values["onAppPrivateCommand"]
                  as void Function(String action, Map<String, Object?> data)?,
          inputFormatters:
              values["inputFormatters"] as List<api9.TextInputFormatter>?,
          enabled: values["enabled"] as bool?,
          ignorePointers: values["ignorePointers"] as bool?,
          cursorWidth: values["cursorWidth"] as double,
          cursorHeight: values["cursorHeight"] as double?,
          cursorRadius: values["cursorRadius"] as api5.Radius?,
          cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
          cursorColor: values["cursorColor"] as api5.Color?,
          cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
          selectionHeightStyle:
              values["selectionHeightStyle"] as api5.BoxHeightStyle?,
          selectionWidthStyle:
              values["selectionWidthStyle"] as api5.BoxWidthStyle?,
          keyboardAppearance: values["keyboardAppearance"] as api5.Brightness?,
          scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
          dragStartBehavior:
              values["dragStartBehavior"] as api7.DragStartBehavior,
          enableInteractiveSelection:
              values["enableInteractiveSelection"] as bool?,
          selectAllOnFocus: values["selectAllOnFocus"] as bool?,
          selectionControls:
              values["selectionControls"] as api1.TextSelectionControls?,
          onTap: values["onTap"] as void Function()?,
          onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
          onTapOutside:
              values["onTapOutside"]
                  as void Function(api7.PointerDownEvent event)?,
          onTapUpOutside:
              values["onTapUpOutside"]
                  as void Function(api7.PointerUpEvent event)?,
          mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
          buildCounter:
              values["buildCounter"]
                  as api1.Widget? Function(
                    api1.BuildContext context, {
                    required int currentLength,
                    required bool isFocused,
                    required int? maxLength,
                  })?,
          scrollController:
              values["scrollController"] as api1.ScrollController?,
          scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
          autofillHints: values["autofillHints"] as Iterable<String>?,
          contentInsertionConfiguration:
              values["contentInsertionConfiguration"]
                  as api1.ContentInsertionConfiguration?,
          clipBehavior: values["clipBehavior"] as api5.Clip,
          restorationId: values["restorationId"] as String?,
          scribbleEnabled: values["scribbleEnabled"] as bool,
          stylusHandwritingEnabled: values["stylusHandwritingEnabled"] as bool,
          enableIMEPersonalizedLearning:
              values["enableIMEPersonalizedLearning"] as bool,
          enableInlinePrediction: values["enableInlinePrediction"] as bool?,
          canRequestFocus: values["canRequestFocus"] as bool,
          spellCheckConfiguration:
              values["spellCheckConfiguration"]
                  as api1.SpellCheckConfiguration?,
          magnifierConfiguration:
              values["magnifierConfiguration"]
                  as api1.TextMagnifierConfiguration?,
          hintLocales: values["hintLocales"] as List<api5.Locale>?,
        );
      }
      return api.TextField(
        key: values["key"] as api6.Key?,
        groupId: values["groupId"] as Object,
        controller: values["controller"] as api1.TextEditingController?,
        focusNode: values["focusNode"] as api1.FocusNode?,
        undoController: values["undoController"] as api1.UndoHistoryController?,
        decoration: values["decoration"] as api.InputDecoration?,
        keyboardType: values["keyboardType"] as api9.TextInputType?,
        textInputAction: values["textInputAction"] as api9.TextInputAction?,
        textCapitalization:
            values["textCapitalization"] as api9.TextCapitalization,
        style: values["style"] as api2.TextStyle?,
        strutStyle: values["strutStyle"] as api2.StrutStyle?,
        textAlign: values["textAlign"] as api5.TextAlign,
        textAlignVertical:
            values["textAlignVertical"] as api2.TextAlignVertical?,
        textDirection: values["textDirection"] as api5.TextDirection?,
        readOnly: values["readOnly"] as bool,
        toolbarOptions: values["toolbarOptions"] as api1.ToolbarOptions?,
        showCursor: values["showCursor"] as bool?,
        autofocus: values["autofocus"] as bool,
        statesController:
            values["statesController"] as api1.WidgetStatesController?,
        obscuringCharacter: values["obscuringCharacter"] as String,
        obscureText: values["obscureText"] as bool,
        autocorrect: values["autocorrect"] as bool?,
        smartDashesType: values["smartDashesType"] as api9.SmartDashesType?,
        smartQuotesType: values["smartQuotesType"] as api9.SmartQuotesType?,
        enableSuggestions: values["enableSuggestions"] as bool,
        maxLines: values["maxLines"] as int?,
        minLines: values["minLines"] as int?,
        expands: values["expands"] as bool,
        maxLength: values["maxLength"] as int?,
        maxLengthEnforcement:
            values["maxLengthEnforcement"] as api9.MaxLengthEnforcement?,
        onChanged: values["onChanged"] as void Function(String value)?,
        onEditingComplete: values["onEditingComplete"] as void Function()?,
        onSubmitted: values["onSubmitted"] as void Function(String value)?,
        onAppPrivateCommand:
            values["onAppPrivateCommand"]
                as void Function(String action, Map<String, Object?> data)?,
        inputFormatters:
            values["inputFormatters"] as List<api9.TextInputFormatter>?,
        enabled: values["enabled"] as bool?,
        ignorePointers: values["ignorePointers"] as bool?,
        cursorWidth: values["cursorWidth"] as double,
        cursorHeight: values["cursorHeight"] as double?,
        cursorRadius: values["cursorRadius"] as api5.Radius?,
        cursorOpacityAnimates: values["cursorOpacityAnimates"] as bool?,
        cursorColor: values["cursorColor"] as api5.Color?,
        cursorErrorColor: values["cursorErrorColor"] as api5.Color?,
        selectionHeightStyle:
            values["selectionHeightStyle"] as api5.BoxHeightStyle?,
        selectionWidthStyle:
            values["selectionWidthStyle"] as api5.BoxWidthStyle?,
        keyboardAppearance: values["keyboardAppearance"] as api5.Brightness?,
        scrollPadding: values["scrollPadding"] as api2.EdgeInsets,
        dragStartBehavior:
            values["dragStartBehavior"] as api7.DragStartBehavior,
        enableInteractiveSelection:
            values["enableInteractiveSelection"] as bool?,
        selectAllOnFocus: values["selectAllOnFocus"] as bool?,
        selectionControls:
            values["selectionControls"] as api1.TextSelectionControls?,
        onTap: values["onTap"] as void Function()?,
        onTapAlwaysCalled: values["onTapAlwaysCalled"] as bool,
        onTapOutside:
            values["onTapOutside"]
                as void Function(api7.PointerDownEvent event)?,
        onTapUpOutside:
            values["onTapUpOutside"]
                as void Function(api7.PointerUpEvent event)?,
        mouseCursor: values["mouseCursor"] as api9.MouseCursor?,
        buildCounter:
            values["buildCounter"]
                as api1.Widget? Function(
                  api1.BuildContext context, {
                  required int currentLength,
                  required bool isFocused,
                  required int? maxLength,
                })?,
        scrollController: values["scrollController"] as api1.ScrollController?,
        scrollPhysics: values["scrollPhysics"] as api1.ScrollPhysics?,
        autofillHints: values["autofillHints"] as Iterable<String>?,
        contentInsertionConfiguration:
            values["contentInsertionConfiguration"]
                as api1.ContentInsertionConfiguration?,
        clipBehavior: values["clipBehavior"] as api5.Clip,
        restorationId: values["restorationId"] as String?,
        scribbleEnabled: values["scribbleEnabled"] as bool,
        stylusHandwritingEnabled: values["stylusHandwritingEnabled"] as bool,
        enableIMEPersonalizedLearning:
            values["enableIMEPersonalizedLearning"] as bool,
        enableInlinePrediction: values["enableInlinePrediction"] as bool?,
        contextMenuBuilder:
            values["contextMenuBuilder"]
                as api1.Widget Function(
                  api1.BuildContext context,
                  api1.EditableTextState editableTextState,
                )?,
        canRequestFocus: values["canRequestFocus"] as bool,
        spellCheckConfiguration:
            values["spellCheckConfiguration"] as api1.SpellCheckConfiguration?,
        magnifierConfiguration:
            values["magnifierConfiguration"]
                as api1.TextMagnifierConfiguration?,
        hintLocales: values["hintLocales"] as List<api5.Locale>?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextTheme(Object value) => value is api.TextTheme;
Object? _TextTheme_displayLarge(Object value) =>
    (value as api.TextTheme).displayLarge;
Object? _TextTheme_displayMedium(Object value) =>
    (value as api.TextTheme).displayMedium;
Object? _TextTheme_displaySmall(Object value) =>
    (value as api.TextTheme).displaySmall;
Object? _TextTheme_headlineLarge(Object value) =>
    (value as api.TextTheme).headlineLarge;
Object? _TextTheme_headlineMedium(Object value) =>
    (value as api.TextTheme).headlineMedium;
Object? _TextTheme_headlineSmall(Object value) =>
    (value as api.TextTheme).headlineSmall;
Object? _TextTheme_titleLarge(Object value) =>
    (value as api.TextTheme).titleLarge;
Object? _TextTheme_titleMedium(Object value) =>
    (value as api.TextTheme).titleMedium;
Object? _TextTheme_titleSmall(Object value) =>
    (value as api.TextTheme).titleSmall;
Object? _TextTheme_bodyLarge(Object value) =>
    (value as api.TextTheme).bodyLarge;
Object? _TextTheme_bodyMedium(Object value) =>
    (value as api.TextTheme).bodyMedium;
Object? _TextTheme_bodySmall(Object value) =>
    (value as api.TextTheme).bodySmall;
Object? _TextTheme_labelLarge(Object value) =>
    (value as api.TextTheme).labelLarge;
Object? _TextTheme_labelMedium(Object value) =>
    (value as api.TextTheme).labelMedium;
Object? _TextTheme_labelSmall(Object value) =>
    (value as api.TextTheme).labelSmall;
Object? _TextTheme_lerp(Map<String, Object?> values) {
  return api.TextTheme.lerp(
    values["a"] as api.TextTheme?,
    values["b"] as api.TextTheme?,
    values["t"] as double,
  );
}

Object? _TextTheme_of(Map<String, Object?> values) {
  return api.TextTheme.of(values["context"] as api1.BuildContext);
}

Object? _TextTheme_primaryOf(Map<String, Object?> values) {
  return api.TextTheme.primaryOf(values["context"] as api1.BuildContext);
}

Object? _TextTheme_toStringShort(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextTheme).toStringShort();
}

Object? _TextTheme_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextTheme).toString(
    minLevel: values["minLevel"] as api6.DiagnosticLevel,
  );
}

Object? _TextTheme_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.TextTheme).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api6.DiagnosticsTreeStyle?,
  );
}

Object? _TextTheme_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.TextTheme).debugFillProperties(
    values["properties"] as api6.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _TextTheme_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextTheme).copyWith(
    bodyLarge: values["bodyLarge"] as api2.TextStyle?,
    bodyMedium: values["bodyMedium"] as api2.TextStyle?,
    bodySmall: values["bodySmall"] as api2.TextStyle?,
    displayLarge: values["displayLarge"] as api2.TextStyle?,
    displayMedium: values["displayMedium"] as api2.TextStyle?,
    displaySmall: values["displaySmall"] as api2.TextStyle?,
    headlineLarge: values["headlineLarge"] as api2.TextStyle?,
    headlineMedium: values["headlineMedium"] as api2.TextStyle?,
    headlineSmall: values["headlineSmall"] as api2.TextStyle?,
    labelLarge: values["labelLarge"] as api2.TextStyle?,
    labelMedium: values["labelMedium"] as api2.TextStyle?,
    labelSmall: values["labelSmall"] as api2.TextStyle?,
    titleLarge: values["titleLarge"] as api2.TextStyle?,
    titleMedium: values["titleMedium"] as api2.TextStyle?,
    titleSmall: values["titleSmall"] as api2.TextStyle?,
  );
}

Object? _TextTheme_merge(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextTheme).merge(values["other"] as api.TextTheme?);
}

Object? _TextTheme_apply(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextTheme).apply(
    bodyColor: values["bodyColor"] as api5.Color?,
    decoration: values["decoration"] as api5.TextDecoration?,
    decorationColor: values["decorationColor"] as api5.Color?,
    decorationStyle: values["decorationStyle"] as api5.TextDecorationStyle?,
    displayColor: values["displayColor"] as api5.Color?,
    fontFamily: values["fontFamily"] as String?,
    fontFamilyFallback: values["fontFamilyFallback"] as List<String>?,
    fontSizeDelta: values["fontSizeDelta"] as double,
    fontSizeFactor: values["fontSizeFactor"] as double,
    heightDelta: values["heightDelta"] as double,
    heightFactor: values["heightFactor"] as double,
    letterSpacingDelta: values["letterSpacingDelta"] as double,
    letterSpacingFactor: values["letterSpacingFactor"] as double,
    package: values["package"] as String?,
    wordSpacingDelta: values["wordSpacingDelta"] as double,
    wordSpacingFactor: values["wordSpacingFactor"] as double,
  );
}

Object _createTextTheme(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TextTheme(
        displayLarge: values["displayLarge"] as api2.TextStyle?,
        displayMedium: values["displayMedium"] as api2.TextStyle?,
        displaySmall: values["displaySmall"] as api2.TextStyle?,
        headlineLarge: values["headlineLarge"] as api2.TextStyle?,
        headlineMedium: values["headlineMedium"] as api2.TextStyle?,
        headlineSmall: values["headlineSmall"] as api2.TextStyle?,
        titleLarge: values["titleLarge"] as api2.TextStyle?,
        titleMedium: values["titleMedium"] as api2.TextStyle?,
        titleSmall: values["titleSmall"] as api2.TextStyle?,
        bodyLarge: values["bodyLarge"] as api2.TextStyle?,
        bodyMedium: values["bodyMedium"] as api2.TextStyle?,
        bodySmall: values["bodySmall"] as api2.TextStyle?,
        labelLarge: values["labelLarge"] as api2.TextStyle?,
        labelMedium: values["labelMedium"] as api2.TextStyle?,
        labelSmall: values["labelSmall"] as api2.TextStyle?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTheme(Object value) => value is api.Theme;
Object? _Theme_of(Map<String, Object?> values) {
  return api.Theme.of(values["context"] as api1.BuildContext);
}

Object? _Theme_brightnessOf(Map<String, Object?> values) {
  return api.Theme.brightnessOf(values["context"] as api1.BuildContext);
}

Object? _Theme_maybeBrightnessOf(Map<String, Object?> values) {
  return api.Theme.maybeBrightnessOf(values["context"] as api1.BuildContext);
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
        key: values["key"] as api6.Key?,
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
Object? _ThemeData_applyElevationOverlayColor(Object value) =>
    (value as api.ThemeData).applyElevationOverlayColor;
Object? _ThemeData_cupertinoOverrideTheme(Object value) =>
    (value as api.ThemeData).cupertinoOverrideTheme;
Object? _ThemeData_platform(Object value) => (value as api.ThemeData).platform;
Object? _ThemeData_useMaterial3(Object value) =>
    (value as api.ThemeData).useMaterial3;
Object? _ThemeData_visualDensity(Object value) =>
    (value as api.ThemeData).visualDensity;
Object? _ThemeData_canvasColor(Object value) =>
    (value as api.ThemeData).canvasColor;
Object? _ThemeData_cardColor(Object value) =>
    (value as api.ThemeData).cardColor;
Object? _ThemeData_colorScheme(Object value) =>
    (value as api.ThemeData).colorScheme;
Object? _ThemeData_disabledColor(Object value) =>
    (value as api.ThemeData).disabledColor;
Object? _ThemeData_dividerColor(Object value) =>
    (value as api.ThemeData).dividerColor;
Object? _ThemeData_focusColor(Object value) =>
    (value as api.ThemeData).focusColor;
Object? _ThemeData_highlightColor(Object value) =>
    (value as api.ThemeData).highlightColor;
Object? _ThemeData_hintColor(Object value) =>
    (value as api.ThemeData).hintColor;
Object? _ThemeData_hoverColor(Object value) =>
    (value as api.ThemeData).hoverColor;
Object? _ThemeData_primaryColor(Object value) =>
    (value as api.ThemeData).primaryColor;
Object? _ThemeData_primaryColorDark(Object value) =>
    (value as api.ThemeData).primaryColorDark;
Object? _ThemeData_primaryColorLight(Object value) =>
    (value as api.ThemeData).primaryColorLight;
Object? _ThemeData_scaffoldBackgroundColor(Object value) =>
    (value as api.ThemeData).scaffoldBackgroundColor;
Object? _ThemeData_secondaryHeaderColor(Object value) =>
    (value as api.ThemeData).secondaryHeaderColor;
Object? _ThemeData_shadowColor(Object value) =>
    (value as api.ThemeData).shadowColor;
Object? _ThemeData_splashColor(Object value) =>
    (value as api.ThemeData).splashColor;
Object? _ThemeData_unselectedWidgetColor(Object value) =>
    (value as api.ThemeData).unselectedWidgetColor;
Object? _ThemeData_iconTheme(Object value) =>
    (value as api.ThemeData).iconTheme;
Object? _ThemeData_primaryIconTheme(Object value) =>
    (value as api.ThemeData).primaryIconTheme;
Object? _ThemeData_primaryTextTheme(Object value) =>
    (value as api.ThemeData).primaryTextTheme;
Object? _ThemeData_textTheme(Object value) =>
    (value as api.ThemeData).textTheme;
Object? _ThemeData_dialogBackgroundColor(Object value) =>
    (value as api.ThemeData).dialogBackgroundColor;
Object? _ThemeData_indicatorColor(Object value) =>
    (value as api.ThemeData).indicatorColor;
Object? _ThemeData_localize(Map<String, Object?> values) {
  return api.ThemeData.localize(
    values["baseTheme"] as api.ThemeData,
    values["localTextGeometry"] as api.TextTheme,
  );
}

Object? _ThemeData_estimateBrightnessForColor(Map<String, Object?> values) {
  return api.ThemeData.estimateBrightnessForColor(
    values["color"] as api5.Color,
  );
}

Object? _ThemeData_lerp(Map<String, Object?> values) {
  return api.ThemeData.lerp(
    values["a"] as api.ThemeData,
    values["b"] as api.ThemeData,
    values["t"] as double,
  );
}

Object? _ThemeData_toStringShort(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ThemeData).toStringShort();
}

Object? _ThemeData_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ThemeData).toString(
    minLevel: values["minLevel"] as api6.DiagnosticLevel,
  );
}

Object? _ThemeData_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ThemeData).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api6.DiagnosticsTreeStyle?,
  );
}

Object? _ThemeData_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ThemeData).debugFillProperties(
    values["properties"] as api6.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _ThemeData_extension(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ThemeData).extension<Object?>();
}

Object? _ThemeData_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ThemeData).copyWith(
    appBarTheme: values["appBarTheme"],
    applyElevationOverlayColor: values["applyElevationOverlayColor"] as bool?,
    brightness: values["brightness"] as api5.Brightness?,
    canvasColor: values["canvasColor"] as api5.Color?,
    cardColor: values["cardColor"] as api5.Color?,
    colorScheme: values["colorScheme"] as api.ColorScheme?,
    cupertinoOverrideTheme:
        values["cupertinoOverrideTheme"] as api14.NoDefaultCupertinoThemeData?,
    dialogBackgroundColor: values["dialogBackgroundColor"] as api5.Color?,
    disabledColor: values["disabledColor"] as api5.Color?,
    dividerColor: values["dividerColor"] as api5.Color?,
    focusColor: values["focusColor"] as api5.Color?,
    highlightColor: values["highlightColor"] as api5.Color?,
    hintColor: values["hintColor"] as api5.Color?,
    hoverColor: values["hoverColor"] as api5.Color?,
    iconTheme: values["iconTheme"] as api1.IconThemeData?,
    indicatorColor: values["indicatorColor"] as api5.Color?,
    inputDecorationTheme: values["inputDecorationTheme"],
    platform: values["platform"] as api6.TargetPlatform?,
    primaryColor: values["primaryColor"] as api5.Color?,
    primaryColorDark: values["primaryColorDark"] as api5.Color?,
    primaryColorLight: values["primaryColorLight"] as api5.Color?,
    primaryIconTheme: values["primaryIconTheme"] as api1.IconThemeData?,
    primaryTextTheme: values["primaryTextTheme"] as api.TextTheme?,
    scaffoldBackgroundColor: values["scaffoldBackgroundColor"] as api5.Color?,
    secondaryHeaderColor: values["secondaryHeaderColor"] as api5.Color?,
    shadowColor: values["shadowColor"] as api5.Color?,
    splashColor: values["splashColor"] as api5.Color?,
    textTheme: values["textTheme"] as api.TextTheme?,
    unselectedWidgetColor: values["unselectedWidgetColor"] as api5.Color?,
    useMaterial3: values["useMaterial3"] as bool?,
    visualDensity: values["visualDensity"] as api.VisualDensity?,
  );
}

Object _createThemeData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ThemeData(
        applyElevationOverlayColor:
            values["applyElevationOverlayColor"] as bool?,
        cupertinoOverrideTheme:
            values["cupertinoOverrideTheme"]
                as api14.NoDefaultCupertinoThemeData?,
        inputDecorationTheme: values["inputDecorationTheme"],
        platform: values["platform"] as api6.TargetPlatform?,
        useMaterial3: values["useMaterial3"] as bool?,
        useSystemColors: values["useSystemColors"] as bool?,
        visualDensity: values["visualDensity"] as api.VisualDensity?,
        colorScheme: values["colorScheme"] as api.ColorScheme?,
        brightness: values["brightness"] as api5.Brightness?,
        colorSchemeSeed: values["colorSchemeSeed"] as api5.Color?,
        canvasColor: values["canvasColor"] as api5.Color?,
        cardColor: values["cardColor"] as api5.Color?,
        disabledColor: values["disabledColor"] as api5.Color?,
        dividerColor: values["dividerColor"] as api5.Color?,
        focusColor: values["focusColor"] as api5.Color?,
        highlightColor: values["highlightColor"] as api5.Color?,
        hintColor: values["hintColor"] as api5.Color?,
        hoverColor: values["hoverColor"] as api5.Color?,
        primaryColor: values["primaryColor"] as api5.Color?,
        primaryColorDark: values["primaryColorDark"] as api5.Color?,
        primaryColorLight: values["primaryColorLight"] as api5.Color?,
        scaffoldBackgroundColor:
            values["scaffoldBackgroundColor"] as api5.Color?,
        secondaryHeaderColor: values["secondaryHeaderColor"] as api5.Color?,
        shadowColor: values["shadowColor"] as api5.Color?,
        splashColor: values["splashColor"] as api5.Color?,
        unselectedWidgetColor: values["unselectedWidgetColor"] as api5.Color?,
        fontFamily: values["fontFamily"] as String?,
        fontFamilyFallback: values["fontFamilyFallback"] as List<String>?,
        package: values["package"] as String?,
        iconTheme: values["iconTheme"] as api1.IconThemeData?,
        primaryIconTheme: values["primaryIconTheme"] as api1.IconThemeData?,
        primaryTextTheme: values["primaryTextTheme"] as api.TextTheme?,
        textTheme: values["textTheme"] as api.TextTheme?,
        appBarTheme: values["appBarTheme"],
        dialogBackgroundColor: values["dialogBackgroundColor"] as api5.Color?,
        indicatorColor: values["indicatorColor"] as api5.Color?,
      );
    case "from":
      return api.ThemeData.from(
        colorScheme: values["colorScheme"] as api.ColorScheme,
        textTheme: values["textTheme"] as api.TextTheme?,
        useMaterial3: values["useMaterial3"] as bool?,
      );
    case "light":
      return api.ThemeData.light(useMaterial3: values["useMaterial3"] as bool?);
    case "dark":
      return api.ThemeData.dark(useMaterial3: values["useMaterial3"] as bool?);
    case "fallback":
      return api.ThemeData.fallback(
        useMaterial3: values["useMaterial3"] as bool?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVerticalDivider(Object value) => value is api.VerticalDivider;

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
        key: values["key"] as api6.Key?,
        width: values["width"] as double?,
        thickness: values["thickness"] as double?,
        indent: values["indent"] as double?,
        endIndent: values["endIndent"] as double?,
        color: values["color"] as api5.Color?,
        radius: values["radius"] as api2.BorderRadiusGeometry?,
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
Object? _VisualDensity_baseSizeAdjustment(Object value) =>
    (value as api.VisualDensity).baseSizeAdjustment;
Object? _VisualDensity_static_get_adaptivePlatformDensity(
  Map<String, Object?> values,
) => api.VisualDensity.adaptivePlatformDensity;
Object? _VisualDensity_defaultDensityForPlatform(Map<String, Object?> values) {
  return api.VisualDensity.defaultDensityForPlatform(
    values["platform"] as api6.TargetPlatform,
  );
}

Object? _VisualDensity_lerp(Map<String, Object?> values) {
  return api.VisualDensity.lerp(
    values["a"] as api.VisualDensity,
    values["b"] as api.VisualDensity,
    values["t"] as double,
  );
}

Object? _VisualDensity_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VisualDensity).toStringShort();
}

Object? _VisualDensity_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.VisualDensity).toString(
    minLevel: values["minLevel"] as api6.DiagnosticLevel,
  );
}

Object? _VisualDensity_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VisualDensity).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api6.DiagnosticsTreeStyle?,
  );
}

Object? _VisualDensity_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.VisualDensity).debugFillProperties(
    values["properties"] as api6.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _VisualDensity_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.VisualDensity).copyWith(
    horizontal: values["horizontal"] as double?,
    vertical: values["vertical"] as double?,
  );
}

Object? _VisualDensity_effectiveConstraints(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VisualDensity).effectiveConstraints(
    values["constraints"] as api4.BoxConstraints,
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

Object _deferred0(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<api2.TextStyle?>(
    values["callback"]
        as api2.TextStyle? Function(Set<api1.WidgetState> states),
  );
}

Object _deferred1(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<api5.Color?>(
    values["callback"] as api5.Color? Function(Set<api1.WidgetState> states),
  );
}

Object _deferred2(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<double?>(
    values["callback"] as double? Function(Set<api1.WidgetState> states),
  );
}

Object _deferred3(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<api2.EdgeInsetsGeometry?>(
    values["callback"]
        as api2.EdgeInsetsGeometry? Function(Set<api1.WidgetState> states),
  );
}

Object _deferred4(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<api5.Size?>(
    values["callback"] as api5.Size? Function(Set<api1.WidgetState> states),
  );
}

Object _deferred5(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<api2.BorderSide?>(
    values["callback"]
        as api2.BorderSide? Function(Set<api1.WidgetState> states),
  );
}

Object _deferred6(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<api2.OutlinedBorder?>(
    values["callback"]
        as api2.OutlinedBorder? Function(Set<api1.WidgetState> states),
  );
}

Object _deferred7(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<api9.MouseCursor?>(
    values["callback"]
        as api9.MouseCursor? Function(Set<api1.WidgetState> states),
  );
}

Object _deferred8(Map<String, Object?> values) {
  return api1.WidgetStateProperty.resolveWith<api1.Icon?>(
    values["callback"] as api1.Icon? Function(Set<api1.WidgetState> states),
  );
}

Function
_flaxGenericFunction0<_Method0 extends Object?>() => (FlaxDartTypes types) {
  Object? invoke(Map<String, Object?> values) {
    return api.showDialog<_Method0>(
      anchorPoint: values["anchorPoint"] as api5.Offset?,
      animationStyle: values["animationStyle"] as api3.AnimationStyle?,
      barrierColor: values["barrierColor"] as api5.Color?,
      barrierDismissible: values["barrierDismissible"] as bool,
      barrierLabel: values["barrierLabel"] as String?,
      builder:
          values["builder"] as api1.Widget Function(api1.BuildContext context),
      context: values["context"] as api1.BuildContext,
      fullscreenDialog: values["fullscreenDialog"] as bool,
      requestFocus: values["requestFocus"] as bool?,
      routeSettings: values["routeSettings"] as api1.RouteSettings?,
      traversalEdgeBehavior:
          values["traversalEdgeBehavior"] as api1.TraversalEdgeBehavior?,
      useRootNavigator: values["useRootNavigator"] as bool,
      useSafeArea: values["useSafeArea"] as bool,
    );
  }

  return FlaxFunctionBinding(
    "flax.material/material#function:showDialog",
    <FlaxParameter>[
      FlaxParameter("anchorPoint", _flaxBinding591, required: false),
      FlaxParameter("animationStyle", _flaxBinding333, required: false),
      FlaxParameter("barrierColor", _flaxBinding3, required: false),
      FlaxParameter(
        "barrierDismissible",
        flaxBoolType,
        required: false,
        defaultValue: true,
      ),
      FlaxParameter("barrierLabel", flaxNullableStringType, required: false),
      FlaxParameter.required(
        "builder",
        FlaxTypeRef(
          "callback",
          callback: FlaxCallbackBinding(
            [FlaxCallbackParameter.plain("context", _flaxBinding134)],
            flaxWidgetType,
            FlaxCallbackAdapters.wrap1<api1.BuildContext, api1.Widget>,
            id: types.key<api1.Widget Function(api1.BuildContext context)>() + ":callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
            invoke:
                FlaxCallbackAdapters.invoke1<api1.BuildContext, api1.Widget>,
            matches:
                FlaxCallbackAdapters.matches1<api1.BuildContext, api1.Widget>,
          ),
        ),
      ),
      FlaxParameter.required("context", _flaxBinding134),
      FlaxParameter(
        "fullscreenDialog",
        flaxBoolType,
        required: false,
        defaultValue: false,
      ),
      FlaxParameter("requestFocus", flaxNullableBoolType, required: false),
      FlaxParameter("routeSettings", _flaxBinding434, required: false),
      FlaxParameter("traversalEdgeBehavior", _flaxBinding357, required: false),
      FlaxParameter(
        "useRootNavigator",
        flaxBoolType,
        required: false,
        defaultValue: true,
      ),
      FlaxParameter(
        "useSafeArea",
        flaxBoolType,
        required: false,
        defaultValue: true,
      ),
    ],
    types.ref<Future<_Method0?>>(),
    invoke,
    route: FlaxRouteCallBinding(["builder"]),
  );
};
Type _flaxType_MaterialPage<_Owner0 extends Object?>() =>
    api.MaterialPage<_Owner0>;
Function _flaxClass_MaterialPage<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isMaterialPage(Object value) => value is api.MaterialPage<_Owner0>;
  // ignore: unused_element
  Object? _MaterialPage_name(Object value) =>
      (value as api.MaterialPage<_Owner0>).name;
  // ignore: unused_element
  Object? _MaterialPage_arguments(Object value) =>
      (value as api.MaterialPage<_Owner0>).arguments;
  // ignore: unused_element
  Object? _MaterialPage_key(Object value) =>
      (value as api.MaterialPage<_Owner0>).key;
  // ignore: unused_element
  Object? _MaterialPage_restorationId(Object value) =>
      (value as api.MaterialPage<_Owner0>).restorationId;
  // ignore: unused_element
  Object? _MaterialPage_onPopInvoked(Object value) =>
      (value as api.MaterialPage<_Owner0>).onPopInvoked;
  // ignore: unused_element
  Object? _MaterialPage_canPop(Object value) =>
      (value as api.MaterialPage<_Owner0>).canPop;
  // ignore: unused_element
  Object? _MaterialPage_child(Object value) =>
      (value as api.MaterialPage<_Owner0>).child;
  // ignore: unused_element
  Object? _MaterialPage_maintainState(Object value) =>
      (value as api.MaterialPage<_Owner0>).maintainState;
  // ignore: unused_element
  Object? _MaterialPage_fullscreenDialog(Object value) =>
      (value as api.MaterialPage<_Owner0>).fullscreenDialog;
  // ignore: unused_element
  Object? _MaterialPage_allowSnapshotting(Object value) =>
      (value as api.MaterialPage<_Owner0>).allowSnapshotting;
  Object? _MaterialPage_toString(Object receiver, Map<String, Object?> values) {
    return (receiver as api.MaterialPage<_Owner0>).toString();
  }

  Object? _MaterialPage_canUpdate(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPage<_Owner0>).canUpdate(
      values["other"] as api1.Page<Object?>,
    );
  }

  Object? _MaterialPage_createRoute(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPage<_Owner0>).createRoute(
      values["context"] as api1.BuildContext,
    );
  }

  // ignore: unused_element
  Object _createMaterialPage(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "":
        if (!values.containsKey("onPopInvoked")) {
          return api.MaterialPage<_Owner0>(
            child: values["child"] as api1.Widget,
            maintainState: values["maintainState"] as bool,
            fullscreenDialog: values["fullscreenDialog"] as bool,
            allowSnapshotting: values["allowSnapshotting"] as bool,
            key: values["key"] as api6.LocalKey?,
            canPop: values["canPop"] as bool,
            name: values["name"] as String?,
            arguments: values["arguments"],
            restorationId: values["restorationId"] as String?,
          );
        }
        return api.MaterialPage<_Owner0>(
          child: values["child"] as api1.Widget,
          maintainState: values["maintainState"] as bool,
          fullscreenDialog: values["fullscreenDialog"] as bool,
          allowSnapshotting: values["allowSnapshotting"] as bool,
          key: values["key"] as api6.LocalKey?,
          canPop: values["canPop"] as bool,
          onPopInvoked:
              values["onPopInvoked"]
                  as void Function(bool didPop, _Owner0? result),
          name: values["name"] as String?,
          arguments: values["arguments"],
          restorationId: values["restorationId"] as String?,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  return FlaxDartClass(
    api.MaterialPage<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain("name", flaxNullableStringType, _MaterialPage_name),
        FlaxGetter.plain(
          "arguments",
          flaxNullableAnyType,
          _MaterialPage_arguments,
        ),
        FlaxGetter.plain("key", _flaxBinding341, _MaterialPage_key),
        FlaxGetter.plain(
          "restorationId",
          flaxNullableStringType,
          _MaterialPage_restorationId,
        ),
        FlaxGetter.plain(
          "onPopInvoked",
          types.define<void Function(bool didPop, _Owner0? result)>(
            FlaxTypeRef(
              "callback",
              nullable: false,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter.plain("didPop", flaxBoolType),
                  FlaxCallbackParameter.plain(
                    "result",
                    types.ref<_Owner0?>(withinCallback: true),
                  ),
                ],
                flaxVoidType,
                FlaxCallbackAdapters.wrapVoid2<bool, _Owner0?>,
                id: types.key<void Function(bool didPop, _Owner0? result)>() + ":callback:<>(p:r:didPop:bool:,p:r:result:parameter?:)->void:",
                invoke: FlaxCallbackAdapters.invokeVoid2<bool, _Owner0?>,
                matches: FlaxCallbackAdapters.matchesVoid2<bool, _Owner0?>,
              ),
            ),
          ),
          _MaterialPage_onPopInvoked,
        ),
        FlaxGetter.plain("canPop", flaxBoolType, _MaterialPage_canPop),
        FlaxGetter.plain("child", flaxWidgetType, _MaterialPage_child),
        FlaxGetter.plain(
          "maintainState",
          flaxBoolType,
          _MaterialPage_maintainState,
        ),
        FlaxGetter.plain(
          "fullscreenDialog",
          flaxBoolType,
          _MaterialPage_fullscreenDialog,
        ),
        FlaxGetter.plain(
          "allowSnapshotting",
          flaxBoolType,
          _MaterialPage_allowSnapshotting,
        ),
      ],
      {
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxStringType,
          _MaterialPage_toString,
        ),
        "canUpdate": FlaxInstanceMethod.plain(
          _flaxBinding350,
          flaxBoolType,
          _MaterialPage_canUpdate,
        ),
        "createRoute": FlaxInstanceMethod.plain(
          _flaxBinding351,
          types.ref<api1.Route<_Owner0>>(),
          _MaterialPage_createRoute,
        ),
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter.required("child", flaxWidgetType),
          FlaxParameter(
            "maintainState",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "fullscreenDialog",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "allowSnapshotting",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("key", _flaxBinding341, required: false),
          FlaxParameter(
            "canPop",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "onPopInvoked",
            types.define<void Function(bool didPop, _Owner0? result)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter.plain("didPop", flaxBoolType),
                    FlaxCallbackParameter.plain(
                      "result",
                      types.ref<_Owner0?>(withinCallback: true),
                    ),
                  ],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid2<bool, _Owner0?>,
                  id: types.key<void Function(bool didPop, _Owner0? result)>() + ":callback:<>(p:r:didPop:bool:,p:r:result:parameter?:)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid2<bool, _Owner0?>,
                  matches: FlaxCallbackAdapters.matchesVoid2<bool, _Owner0?>,
                ),
              ),
            ),
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("name", flaxNullableStringType, required: false),
          FlaxParameter("arguments", flaxNullableAnyType, required: false),
          FlaxParameter(
            "restorationId",
            flaxNullableStringType,
            required: false,
          ),
        ],
      },
      create: _createMaterialPage,
      matches: _isMaterialPage,
      setters: [],
      supertypes: [
        "flax.material/material#type:MaterialPage",
        ...[
          "flax.core/flutter#type:Page",
          "flax.core/flutter#type:RouteSettings",
          "dart:core::Object",
        ],
      ],
      listenerPairs: {},
      disposeMethod: null,
    ),
  );
};
Type _flaxType_MaterialPageRoute<_Owner0 extends Object?>() =>
    api.MaterialPageRoute<_Owner0>;
Function _flaxClass_MaterialPageRoute<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isMaterialPageRoute(Object value) =>
      value is api.MaterialPageRoute<_Owner0>;
  // ignore: unused_element
  Object? _MaterialPageRoute_filter(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).filter;
  // ignore: unused_element
  Object? _MaterialPageRoute_traversalEdgeBehavior(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).traversalEdgeBehavior;
  // ignore: unused_element
  Object? _MaterialPageRoute_directionalTraversalEdgeBehavior(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>)
          .directionalTraversalEdgeBehavior;
  // ignore: unused_element
  Object? _MaterialPageRoute_delegatedTransition(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).delegatedTransition;
  // ignore: unused_element
  Object? _MaterialPageRoute_receivedTransition(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).receivedTransition;
  // ignore: unused_element
  Object? _MaterialPageRoute_barrierDismissible(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).barrierDismissible;
  // ignore: unused_element
  Object? _MaterialPageRoute_semanticsDismissible(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).semanticsDismissible;
  // ignore: unused_element
  Object? _MaterialPageRoute_barrierColor(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).barrierColor;
  // ignore: unused_element
  Object? _MaterialPageRoute_barrierLabel(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).barrierLabel;
  // ignore: unused_element
  Object? _MaterialPageRoute_barrierCurve(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).barrierCurve;
  // ignore: unused_element
  Object? _MaterialPageRoute_maintainState(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).maintainState;
  // ignore: unused_element
  Object? _MaterialPageRoute_popGestureInProgress(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).popGestureInProgress;
  // ignore: unused_element
  Object? _MaterialPageRoute_popGestureEnabled(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).popGestureEnabled;
  // ignore: unused_element
  Object? _MaterialPageRoute_offstage(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).offstage;
  // ignore: unused_element
  Object? _MaterialPageRoute_subtreeContext(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).subtreeContext;
  // ignore: unused_element
  Object? _MaterialPageRoute_animation(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).animation;
  // ignore: unused_element
  Object? _MaterialPageRoute_secondaryAnimation(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).secondaryAnimation;
  // ignore: unused_element
  Object? _MaterialPageRoute_popDisposition(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).popDisposition;
  // ignore: unused_element
  Object? _MaterialPageRoute_hasScopedWillPopCallback(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).hasScopedWillPopCallback;
  // ignore: unused_element
  Object? _MaterialPageRoute_canPop(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).canPop;
  // ignore: unused_element
  Object? _MaterialPageRoute_impliesAppBarDismissal(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).impliesAppBarDismissal;
  // ignore: unused_element
  Object? _MaterialPageRoute_fullscreenDialog(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).fullscreenDialog;
  // ignore: unused_element
  Object? _MaterialPageRoute_completed(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).completed;
  // ignore: unused_element
  Object? _MaterialPageRoute_transitionDuration(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).transitionDuration;
  // ignore: unused_element
  Object? _MaterialPageRoute_reverseTransitionDuration(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).reverseTransitionDuration;
  // ignore: unused_element
  Object? _MaterialPageRoute_opaque(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).opaque;
  // ignore: unused_element
  Object? _MaterialPageRoute_allowSnapshotting(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).allowSnapshotting;
  // ignore: unused_element
  Object? _MaterialPageRoute_finishedWhenPopped(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).finishedWhenPopped;
  // ignore: unused_element
  Object? _MaterialPageRoute_controller(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).controller;
  // ignore: unused_element
  Object? _MaterialPageRoute_willDisposeAnimationController(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).willDisposeAnimationController;
  // ignore: unused_element
  Object? _MaterialPageRoute_debugLabel(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).debugLabel;
  // ignore: unused_element
  Object? _MaterialPageRoute_overlayEntries(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).overlayEntries;
  // ignore: unused_element
  Object? _MaterialPageRoute_requestFocus(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).requestFocus;
  // ignore: unused_element
  Object? _MaterialPageRoute_navigator(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).navigator;
  // ignore: unused_element
  Object? _MaterialPageRoute_settings(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).settings;
  // ignore: unused_element
  Object? _MaterialPageRoute_restorationScopeId(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).restorationScopeId;
  // ignore: unused_element
  Object? _MaterialPageRoute_willHandlePopInternally(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).willHandlePopInternally;
  // ignore: unused_element
  Object? _MaterialPageRoute_currentResult(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).currentResult;
  // ignore: unused_element
  Object? _MaterialPageRoute_popped(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).popped;
  // ignore: unused_element
  Object? _MaterialPageRoute_isCurrent(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).isCurrent;
  // ignore: unused_element
  Object? _MaterialPageRoute_isFirst(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).isFirst;
  // ignore: unused_element
  Object? _MaterialPageRoute_hasActiveRouteBelow(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).hasActiveRouteBelow;
  // ignore: unused_element
  Object? _MaterialPageRoute_isActive(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).isActive;
  // ignore: unused_element
  Object? _MaterialPageRoute_builder(Object value) =>
      (value as api.MaterialPageRoute<_Owner0>).builder;
  void _MaterialPageRoute_set_receivedTransition(Object value, Object? input) {
    (value as api.MaterialPageRoute<_Owner0>).receivedTransition =
        input
            as api1.Widget? Function(
              api1.BuildContext context,
              api3.Animation<double> animation,
              api3.Animation<double> secondaryAnimation,
              bool allowSnapshotting,
              api1.Widget? child,
            )?;
  }

  void _MaterialPageRoute_set_offstage(Object value, Object? input) {
    (value as api.MaterialPageRoute<_Owner0>).offstage = input as bool;
  }

  void _MaterialPageRoute_set_willDisposeAnimationController(
    Object value,
    Object? input,
  ) {
    (value as api.MaterialPageRoute<_Owner0>).willDisposeAnimationController =
        input as bool;
  }

  Object? _MaterialPageRoute_setState(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).setState(
      values["fn"] as void Function(),
    );
    return null;
  }

  Object? _MaterialPageRoute_buildPage(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).buildPage(
      values["context"] as api1.BuildContext,
      values["animation"] as api3.Animation<double>,
      values["secondaryAnimation"] as api3.Animation<double>,
    );
  }

  Object? _MaterialPageRoute_buildTransitions(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).buildTransitions(
      values["context"] as api1.BuildContext,
      values["animation"] as api3.Animation<double>,
      values["secondaryAnimation"] as api3.Animation<double>,
      values["child"] as api1.Widget,
    );
  }

  Object? _MaterialPageRoute_install(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).install();
    return null;
  }

  Object? _MaterialPageRoute_didPush(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).didPush();
  }

  Object? _MaterialPageRoute_didAdd(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).didAdd();
    return null;
  }

  Object? _MaterialPageRoute_willPop(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).willPop();
  }

  Object? _MaterialPageRoute_onPopInvokedWithResult(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).onPopInvokedWithResult(
      values["didPop"] as bool,
      values["result"] as _Owner0?,
    );
    return null;
  }

  Object? _MaterialPageRoute_addScopedWillPopCallback(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).addScopedWillPopCallback(
      values["callback"] as Future<bool> Function(),
    );
    return null;
  }

  Object? _MaterialPageRoute_removeScopedWillPopCallback(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).removeScopedWillPopCallback(
      values["callback"] as Future<bool> Function(),
    );
    return null;
  }

  Object? _MaterialPageRoute_registerPopEntry(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).registerPopEntry(
      values["popEntry"] as api1.PopEntry<Object?>,
    );
    return null;
  }

  Object? _MaterialPageRoute_unregisterPopEntry(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).unregisterPopEntry(
      values["popEntry"] as api1.PopEntry<Object?>,
    );
    return null;
  }

  Object? _MaterialPageRoute_didChangePrevious(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).didChangePrevious(
      values["previousRoute"] as api1.Route<Object?>?,
    );
    return null;
  }

  Object? _MaterialPageRoute_didChangeNext(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).didChangeNext(
      values["nextRoute"] as api1.Route<Object?>?,
    );
    return null;
  }

  Object? _MaterialPageRoute_didPopNext(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).didPopNext(
      values["nextRoute"] as api1.Route<Object?>,
    );
    return null;
  }

  Object? _MaterialPageRoute_changedInternalState(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).changedInternalState();
    return null;
  }

  Object? _MaterialPageRoute_changedExternalState(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).changedExternalState();
    return null;
  }

  Object? _MaterialPageRoute_buildModalBarrier(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).buildModalBarrier();
  }

  Object? _MaterialPageRoute_createOverlayEntries(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).createOverlayEntries();
  }

  Object? _MaterialPageRoute_toString(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).toString();
  }

  Object? _MaterialPageRoute_debugTransitionCompleted(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>)
        .debugTransitionCompleted();
  }

  Object? _MaterialPageRoute_createAnimationController(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>)
        .createAnimationController();
  }

  Object? _MaterialPageRoute_createAnimation(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).createAnimation();
  }

  Object? _MaterialPageRoute_createSimulation(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).createSimulation(
      forward: values["forward"] as bool,
    );
  }

  Object? _MaterialPageRoute_didReplace(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).didReplace(
      values["oldRoute"] as api1.Route<Object?>?,
    );
    return null;
  }

  Object? _MaterialPageRoute_didPop(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).didPop(
      values["result"] as _Owner0?,
    );
  }

  Object? _MaterialPageRoute_canTransitionTo(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).canTransitionTo(
      values["nextRoute"] as api1.TransitionRoute<Object?>,
    );
  }

  Object? _MaterialPageRoute_canTransitionFrom(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).canTransitionFrom(
      values["previousRoute"] as api1.TransitionRoute<Object?>,
    );
  }

  Object? _MaterialPageRoute_handleStartBackGesture(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).handleStartBackGesture(
      progress: values["progress"] as double,
    );
    return null;
  }

  Object? _MaterialPageRoute_handleUpdateBackGestureProgress(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>)
        .handleUpdateBackGestureProgress(
          progress: values["progress"] as double,
        );
    return null;
  }

  Object? _MaterialPageRoute_handleCancelBackGesture(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).handleCancelBackGesture();
    return null;
  }

  Object? _MaterialPageRoute_handleCommitBackGesture(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).handleCommitBackGesture();
    return null;
  }

  Object? _MaterialPageRoute_dispose(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).dispose();
    return null;
  }

  Object? _MaterialPageRoute_onPopInvoked(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).onPopInvoked(
      values["didPop"] as bool,
    );
    return null;
  }

  Object? _MaterialPageRoute_didComplete(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).didComplete(
      values["result"] as _Owner0?,
    );
    return null;
  }

  Object? _MaterialPageRoute_addLocalHistoryEntry(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).addLocalHistoryEntry(
      values["entry"] as api1.LocalHistoryEntry,
    );
    return null;
  }

  Object? _MaterialPageRoute_removeLocalHistoryEntry(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.MaterialPageRoute<_Owner0>).removeLocalHistoryEntry(
      values["entry"] as api1.LocalHistoryEntry,
    );
    return null;
  }

  Object? _MaterialPageRoute_buildContent(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.MaterialPageRoute<_Owner0>).buildContent(
      values["context"] as api1.BuildContext,
    );
  }

  // ignore: unused_element
  Object _createMaterialPageRoute(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "":
        return api.MaterialPageRoute<_Owner0>(
          builder:
              values["builder"]
                  as api1.Widget Function(api1.BuildContext context),
          settings: values["settings"] as api1.RouteSettings?,
          requestFocus: values["requestFocus"] as bool?,
          maintainState: values["maintainState"] as bool,
          fullscreenDialog: values["fullscreenDialog"] as bool,
          allowSnapshotting: values["allowSnapshotting"] as bool,
          barrierDismissible: values["barrierDismissible"] as bool,
          traversalEdgeBehavior:
              values["traversalEdgeBehavior"] as api1.TraversalEdgeBehavior?,
          directionalTraversalEdgeBehavior:
              values["directionalTraversalEdgeBehavior"]
                  as api1.TraversalEdgeBehavior?,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  Object _callback0(FlaxCallback _flaxBridgeCallback) =>
      (
        api1.BuildContext p0,
        api3.Animation<double> p1,
        api3.Animation<double> p2,
        bool p3,
        api1.Widget? p4,
      ) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        positional.add(p1);
        positional.add(p2);
        positional.add(p3);
        positional.add(p4);
        return _flaxBridgeCallback.call(positional, named) as api1.Widget?;
      };
  bool _callback0Matches(Object value) =>
      value
          is api1.Widget? Function(
            api1.BuildContext context,
            api3.Animation<double> animation,
            api3.Animation<double> secondaryAnimation,
            bool allowSnapshotting,
            api1.Widget? child,
          );
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function
        as api1.Widget? Function(
          api1.BuildContext context,
          api3.Animation<double> animation,
          api3.Animation<double> secondaryAnimation,
          bool allowSnapshotting,
          api1.Widget? child,
        ))(
      positional[0] as api1.BuildContext,
      positional[1] as api3.Animation<double>,
      positional[2] as api3.Animation<double>,
      positional[3] as bool,
      positional[4] as api1.Widget?,
    );
  }

  Object _callback1(FlaxCallback _flaxBridgeCallback) =>
      (
        api1.BuildContext p0,
        api3.Animation<double> p1,
        api3.Animation<double> p2,
        bool p3,
        api1.Widget? p4,
      ) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        positional.add(p1);
        positional.add(p2);
        positional.add(p3);
        positional.add(p4);
        return _flaxBridgeCallback.call(positional, named) as api1.Widget?;
      };
  bool _callback1Matches(Object value) =>
      value
          is api1.Widget? Function(
            api1.BuildContext context,
            api3.Animation<double> animation,
            api3.Animation<double> secondaryAnimation,
            bool allowSnapshotting,
            api1.Widget? child,
          );
  Object? _callback1Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function
        as api1.Widget? Function(
          api1.BuildContext context,
          api3.Animation<double> animation,
          api3.Animation<double> secondaryAnimation,
          bool allowSnapshotting,
          api1.Widget? child,
        ))(
      positional[0] as api1.BuildContext,
      positional[1] as api3.Animation<double>,
      positional[2] as api3.Animation<double>,
      positional[3] as bool,
      positional[4] as api1.Widget?,
    );
  }

  Object _callback2(FlaxCallback _flaxBridgeCallback) =>
      (
        api1.BuildContext p0,
        api3.Animation<double> p1,
        api3.Animation<double> p2,
        bool p3,
        api1.Widget? p4,
      ) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        positional.add(p1);
        positional.add(p2);
        positional.add(p3);
        positional.add(p4);
        return _flaxBridgeCallback.call(positional, named) as api1.Widget?;
      };
  bool _callback2Matches(Object value) =>
      value
          is api1.Widget? Function(
            api1.BuildContext context,
            api3.Animation<double> animation,
            api3.Animation<double> secondaryAnimation,
            bool allowSnapshotting,
            api1.Widget? child,
          );
  Object? _callback2Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function
        as api1.Widget? Function(
          api1.BuildContext context,
          api3.Animation<double> animation,
          api3.Animation<double> secondaryAnimation,
          bool allowSnapshotting,
          api1.Widget? child,
        ))(
      positional[0] as api1.BuildContext,
      positional[1] as api3.Animation<double>,
      positional[2] as api3.Animation<double>,
      positional[3] as bool,
      positional[4] as api1.Widget?,
    );
  }

  Object _callback3(FlaxCallback _flaxBridgeCallback) => () {
    final positional = <Object?>[];
    final named = <String, Object?>{};
    return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
        .then<bool>((value) => value as bool);
  };
  bool _callback3Matches(Object value) => value is Future<bool> Function();
  Object? _callback3Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as Future<bool> Function())();
  }

  Object _callback4(FlaxCallback _flaxBridgeCallback) => () {
    final positional = <Object?>[];
    final named = <String, Object?>{};
    return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
        .then<bool>((value) => value as bool);
  };
  bool _callback4Matches(Object value) => value is Future<bool> Function();
  Object? _callback4Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as Future<bool> Function())();
  }

  return FlaxDartClass(
    api.MaterialPageRoute<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain("filter", _flaxBinding355, _MaterialPageRoute_filter),
        FlaxGetter.plain(
          "traversalEdgeBehavior",
          _flaxBinding357,
          _MaterialPageRoute_traversalEdgeBehavior,
        ),
        FlaxGetter.plain(
          "directionalTraversalEdgeBehavior",
          _flaxBinding357,
          _MaterialPageRoute_directionalTraversalEdgeBehavior,
        ),
        FlaxGetter.plain(
          "delegatedTransition",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain("context", _flaxBinding134),
                FlaxCallbackParameter.plain("animation", _flaxBinding360),
                FlaxCallbackParameter.plain(
                  "secondaryAnimation",
                  _flaxBinding360,
                ),
                FlaxCallbackParameter.plain("allowSnapshotting", flaxBoolType),
                FlaxCallbackParameter.plain("child", _flaxBinding1),
              ],
              _flaxBinding1,
              _callback0,
              id:
                  types
                      .key<
                        api1.Widget? Function(
                          api1.BuildContext context,
                          api3.Animation<double> animation,
                          api3.Animation<double> secondaryAnimation,
                          bool allowSnapshotting,
                          api1.Widget? child,
                        )?
                      >() +
                  ":callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:animation:object:flax.core/sdk_animation#type:Animation<Object?><double:>,p:r:secondaryAnimation:object:flax.core/sdk_animation#type:Animation<Object?><double:>,p:r:allowSnapshotting:bool:,p:r:child:widget?:)->widget?:",
              invoke: _callback0Invoke,
              matches: _callback0Matches,
            ),
          ),
          _MaterialPageRoute_delegatedTransition,
        ),
        FlaxGetter.plain(
          "receivedTransition",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain("context", _flaxBinding134),
                FlaxCallbackParameter.plain("animation", _flaxBinding360),
                FlaxCallbackParameter.plain(
                  "secondaryAnimation",
                  _flaxBinding360,
                ),
                FlaxCallbackParameter.plain("allowSnapshotting", flaxBoolType),
                FlaxCallbackParameter.plain("child", _flaxBinding1),
              ],
              _flaxBinding1,
              _callback1,
              id:
                  types
                      .key<
                        api1.Widget? Function(
                          api1.BuildContext context,
                          api3.Animation<double> animation,
                          api3.Animation<double> secondaryAnimation,
                          bool allowSnapshotting,
                          api1.Widget? child,
                        )?
                      >() +
                  ":callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:animation:object:flax.core/sdk_animation#type:Animation<Object?><double:>,p:r:secondaryAnimation:object:flax.core/sdk_animation#type:Animation<Object?><double:>,p:r:allowSnapshotting:bool:,p:r:child:widget?:)->widget?:",
              invoke: _callback1Invoke,
              matches: _callback1Matches,
            ),
          ),
          _MaterialPageRoute_receivedTransition,
        ),
        FlaxGetter.plain(
          "barrierDismissible",
          flaxBoolType,
          _MaterialPageRoute_barrierDismissible,
        ),
        FlaxGetter.plain(
          "semanticsDismissible",
          flaxBoolType,
          _MaterialPageRoute_semanticsDismissible,
        ),
        FlaxGetter.plain(
          "barrierColor",
          _flaxBinding3,
          _MaterialPageRoute_barrierColor,
        ),
        FlaxGetter.plain(
          "barrierLabel",
          flaxNullableStringType,
          _MaterialPageRoute_barrierLabel,
        ),
        FlaxGetter.plain(
          "barrierCurve",
          flaxCurveType,
          _MaterialPageRoute_barrierCurve,
        ),
        FlaxGetter.plain(
          "maintainState",
          flaxBoolType,
          _MaterialPageRoute_maintainState,
        ),
        FlaxGetter.plain(
          "popGestureInProgress",
          flaxBoolType,
          _MaterialPageRoute_popGestureInProgress,
        ),
        FlaxGetter.plain(
          "popGestureEnabled",
          flaxBoolType,
          _MaterialPageRoute_popGestureEnabled,
        ),
        FlaxGetter.plain("offstage", flaxBoolType, _MaterialPageRoute_offstage),
        FlaxGetter.plain(
          "subtreeContext",
          _flaxBinding374,
          _MaterialPageRoute_subtreeContext,
        ),
        FlaxGetter.plain(
          "animation",
          _flaxBinding376,
          _MaterialPageRoute_animation,
        ),
        FlaxGetter.plain(
          "secondaryAnimation",
          _flaxBinding376,
          _MaterialPageRoute_secondaryAnimation,
        ),
        FlaxGetter.plain(
          "popDisposition",
          _flaxBinding379,
          _MaterialPageRoute_popDisposition,
        ),
        FlaxGetter.plain(
          "hasScopedWillPopCallback",
          flaxBoolType,
          _MaterialPageRoute_hasScopedWillPopCallback,
        ),
        FlaxGetter.plain("canPop", flaxBoolType, _MaterialPageRoute_canPop),
        FlaxGetter.plain(
          "impliesAppBarDismissal",
          flaxBoolType,
          _MaterialPageRoute_impliesAppBarDismissal,
        ),
        FlaxGetter.plain(
          "fullscreenDialog",
          flaxBoolType,
          _MaterialPageRoute_fullscreenDialog,
        ),
        FlaxGetter.plain(
          "completed",
          types.ref<Future<_Owner0?>>(),
          _MaterialPageRoute_completed,
        ),
        FlaxGetter.plain(
          "transitionDuration",
          flaxDurationType,
          _MaterialPageRoute_transitionDuration,
        ),
        FlaxGetter.plain(
          "reverseTransitionDuration",
          flaxDurationType,
          _MaterialPageRoute_reverseTransitionDuration,
        ),
        FlaxGetter.plain("opaque", flaxBoolType, _MaterialPageRoute_opaque),
        FlaxGetter.plain(
          "allowSnapshotting",
          flaxBoolType,
          _MaterialPageRoute_allowSnapshotting,
        ),
        FlaxGetter.plain(
          "finishedWhenPopped",
          flaxBoolType,
          _MaterialPageRoute_finishedWhenPopped,
        ),
        FlaxGetter.plain(
          "controller",
          _flaxBinding154,
          _MaterialPageRoute_controller,
        ),
        FlaxGetter.plain(
          "willDisposeAnimationController",
          flaxBoolType,
          _MaterialPageRoute_willDisposeAnimationController,
        ),
        FlaxGetter.plain(
          "debugLabel",
          flaxStringType,
          _MaterialPageRoute_debugLabel,
        ),
        FlaxGetter.plain(
          "overlayEntries",
          _flaxBinding395,
          _MaterialPageRoute_overlayEntries,
        ),
        FlaxGetter.plain(
          "requestFocus",
          flaxBoolType,
          _MaterialPageRoute_requestFocus,
        ),
        FlaxGetter.plain(
          "navigator",
          _flaxBinding398,
          _MaterialPageRoute_navigator,
        ),
        FlaxGetter.plain(
          "settings",
          _flaxBinding296,
          _MaterialPageRoute_settings,
        ),
        FlaxGetter.plain(
          "restorationScopeId",
          _flaxBinding401,
          _MaterialPageRoute_restorationScopeId,
        ),
        FlaxGetter.plain(
          "willHandlePopInternally",
          flaxBoolType,
          _MaterialPageRoute_willHandlePopInternally,
        ),
        FlaxGetter.plain(
          "currentResult",
          types.ref<_Owner0?>(),
          _MaterialPageRoute_currentResult,
        ),
        FlaxGetter.plain(
          "popped",
          types.ref<Future<_Owner0?>>(),
          _MaterialPageRoute_popped,
        ),
        FlaxGetter.plain(
          "isCurrent",
          flaxBoolType,
          _MaterialPageRoute_isCurrent,
        ),
        FlaxGetter.plain("isFirst", flaxBoolType, _MaterialPageRoute_isFirst),
        FlaxGetter.plain(
          "hasActiveRouteBelow",
          flaxBoolType,
          _MaterialPageRoute_hasActiveRouteBelow,
        ),
        FlaxGetter.plain("isActive", flaxBoolType, _MaterialPageRoute_isActive),
        FlaxGetter.plain(
          "builder",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("context", _flaxBinding134)],
              flaxWidgetType,
              FlaxCallbackAdapters.wrap1<api1.BuildContext, api1.Widget>,
              id: types.key<api1.Widget Function(api1.BuildContext context)>() + ":callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
              invoke:
                  FlaxCallbackAdapters.invoke1<api1.BuildContext, api1.Widget>,
              matches:
                  FlaxCallbackAdapters.matches1<api1.BuildContext, api1.Widget>,
            ),
          ),
          _MaterialPageRoute_builder,
        ),
      ],
      {
        "setState": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "fn",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _MaterialPageRoute_setState,
        ),
        "buildPage": FlaxInstanceMethod.plain(
          _flaxBinding410,
          flaxWidgetType,
          _MaterialPageRoute_buildPage,
        ),
        "buildTransitions": FlaxInstanceMethod.plain(
          _flaxBinding411,
          flaxWidgetType,
          _MaterialPageRoute_buildTransitions,
        ),
        "install": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_install,
        ),
        "didPush": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxTickerFutureType,
          _MaterialPageRoute_didPush,
        ),
        "didAdd": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_didAdd,
        ),
        "willPop": FlaxInstanceMethod.plain(
          _flaxBinding57,
          _flaxBinding412,
          _MaterialPageRoute_willPop,
        ),
        "onPopInvokedWithResult": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required("didPop", flaxBoolType),
            FlaxParameter.required("result", types.ref<_Owner0?>()),
          ],
          flaxVoidType,
          _MaterialPageRoute_onPopInvokedWithResult,
        ),
        "addScopedWillPopCallback": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "callback",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding413,
                  _callback3,
                  id:
                      types.key<Future<bool> Function()>() +
                      ":callback:<>()->future:[bool:]",
                  invoke: _callback3Invoke,
                  matches: _callback3Matches,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _MaterialPageRoute_addScopedWillPopCallback,
        ),
        "removeScopedWillPopCallback": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "callback",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding413,
                  _callback4,
                  id:
                      types.key<Future<bool> Function()>() +
                      ":callback:<>()->future:[bool:]",
                  invoke: _callback4Invoke,
                  matches: _callback4Matches,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _MaterialPageRoute_removeScopedWillPopCallback,
        ),
        "registerPopEntry": FlaxInstanceMethod.plain(
          _flaxBinding418,
          flaxVoidType,
          _MaterialPageRoute_registerPopEntry,
        ),
        "unregisterPopEntry": FlaxInstanceMethod.plain(
          _flaxBinding418,
          flaxVoidType,
          _MaterialPageRoute_unregisterPopEntry,
        ),
        "didChangePrevious": FlaxInstanceMethod.plain(
          _flaxBinding419,
          flaxVoidType,
          _MaterialPageRoute_didChangePrevious,
        ),
        "didChangeNext": FlaxInstanceMethod.plain(
          _flaxBinding420,
          flaxVoidType,
          _MaterialPageRoute_didChangeNext,
        ),
        "didPopNext": FlaxInstanceMethod.plain(
          _flaxBinding421,
          flaxVoidType,
          _MaterialPageRoute_didPopNext,
        ),
        "changedInternalState": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_changedInternalState,
        ),
        "changedExternalState": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_changedExternalState,
        ),
        "buildModalBarrier": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxWidgetType,
          _MaterialPageRoute_buildModalBarrier,
        ),
        "createOverlayEntries": FlaxInstanceMethod.plain(
          _flaxBinding57,
          _flaxBinding394,
          _MaterialPageRoute_createOverlayEntries,
        ),
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxStringType,
          _MaterialPageRoute_toString,
        ),
        "debugTransitionCompleted": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxBoolType,
          _MaterialPageRoute_debugTransitionCompleted,
        ),
        "createAnimationController": FlaxInstanceMethod.plain(
          _flaxBinding57,
          _flaxBinding422,
          _MaterialPageRoute_createAnimationController,
        ),
        "createAnimation": FlaxInstanceMethod.plain(
          _flaxBinding57,
          _flaxBinding360,
          _MaterialPageRoute_createAnimation,
        ),
        "createSimulation": FlaxInstanceMethod.plain(
          _flaxBinding424,
          _flaxBinding423,
          _MaterialPageRoute_createSimulation,
        ),
        "didReplace": FlaxInstanceMethod.plain(
          _flaxBinding425,
          flaxVoidType,
          _MaterialPageRoute_didReplace,
        ),
        "didPop": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required("result", types.ref<_Owner0?>()),
          ],
          flaxBoolType,
          _MaterialPageRoute_didPop,
        ),
        "canTransitionTo": FlaxInstanceMethod.plain(
          _flaxBinding427,
          flaxBoolType,
          _MaterialPageRoute_canTransitionTo,
        ),
        "canTransitionFrom": FlaxInstanceMethod.plain(
          _flaxBinding428,
          flaxBoolType,
          _MaterialPageRoute_canTransitionFrom,
        ),
        "handleStartBackGesture": FlaxInstanceMethod.plain(
          _flaxBinding429,
          flaxVoidType,
          _MaterialPageRoute_handleStartBackGesture,
        ),
        "handleUpdateBackGestureProgress": FlaxInstanceMethod.plain(
          _flaxBinding430,
          flaxVoidType,
          _MaterialPageRoute_handleUpdateBackGestureProgress,
        ),
        "handleCancelBackGesture": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_handleCancelBackGesture,
        ),
        "handleCommitBackGesture": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_handleCommitBackGesture,
        ),
        "dispose": FlaxInstanceMethod.plain(
          _flaxBinding57,
          flaxVoidType,
          _MaterialPageRoute_dispose,
        ),
        "onPopInvoked": FlaxInstanceMethod.plain(
          _flaxBinding431,
          flaxVoidType,
          _MaterialPageRoute_onPopInvoked,
        ),
        "didComplete": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required("result", types.ref<_Owner0?>()),
          ],
          flaxVoidType,
          _MaterialPageRoute_didComplete,
        ),
        "addLocalHistoryEntry": FlaxInstanceMethod.plain(
          _flaxBinding433,
          flaxVoidType,
          _MaterialPageRoute_addLocalHistoryEntry,
        ),
        "removeLocalHistoryEntry": FlaxInstanceMethod.plain(
          _flaxBinding433,
          flaxVoidType,
          _MaterialPageRoute_removeLocalHistoryEntry,
        ),
        "buildContent": FlaxInstanceMethod.plain(
          _flaxBinding351,
          flaxWidgetType,
          _MaterialPageRoute_buildContent,
        ),
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter.required(
            "builder",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [FlaxCallbackParameter.plain("context", _flaxBinding134)],
                flaxWidgetType,
                FlaxCallbackAdapters.wrap1<api1.BuildContext, api1.Widget>,
                id:
                    types
                        .key<
                          api1.Widget Function(api1.BuildContext context)
                        >() +
                    ":callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
                invoke: FlaxCallbackAdapters
                    .invoke1<api1.BuildContext, api1.Widget>,
                matches: FlaxCallbackAdapters
                    .matches1<api1.BuildContext, api1.Widget>,
              ),
            ),
          ),
          FlaxParameter("settings", _flaxBinding434, required: false),
          FlaxParameter("requestFocus", flaxNullableBoolType, required: false),
          FlaxParameter(
            "maintainState",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "fullscreenDialog",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "allowSnapshotting",
            flaxBoolType,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "barrierDismissible",
            flaxBoolType,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "traversalEdgeBehavior",
            _flaxBinding357,
            required: false,
          ),
          FlaxParameter(
            "directionalTraversalEdgeBehavior",
            _flaxBinding357,
            required: false,
          ),
        ],
      },
      create: _createMaterialPageRoute,
      matches: _isMaterialPageRoute,
      setters: [
        FlaxSetter(
          "receivedTransition",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain("context", _flaxBinding134),
                FlaxCallbackParameter.plain("animation", _flaxBinding360),
                FlaxCallbackParameter.plain(
                  "secondaryAnimation",
                  _flaxBinding360,
                ),
                FlaxCallbackParameter.plain("allowSnapshotting", flaxBoolType),
                FlaxCallbackParameter.plain("child", _flaxBinding1),
              ],
              _flaxBinding1,
              _callback2,
              id:
                  types
                      .key<
                        api1.Widget? Function(
                          api1.BuildContext context,
                          api3.Animation<double> animation,
                          api3.Animation<double> secondaryAnimation,
                          bool allowSnapshotting,
                          api1.Widget? child,
                        )?
                      >() +
                  ":callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:animation:object:flax.core/sdk_animation#type:Animation<Object?><double:>,p:r:secondaryAnimation:object:flax.core/sdk_animation#type:Animation<Object?><double:>,p:r:allowSnapshotting:bool:,p:r:child:widget?:)->widget?:",
              invoke: _callback2Invoke,
              matches: _callback2Matches,
            ),
          ),
          _MaterialPageRoute_set_receivedTransition,
        ),
        FlaxSetter("offstage", flaxBoolType, _MaterialPageRoute_set_offstage),
        FlaxSetter(
          "willDisposeAnimationController",
          flaxBoolType,
          _MaterialPageRoute_set_willDisposeAnimationController,
        ),
      ],
      supertypes: [
        "flax.material/material#type:MaterialPageRoute",
        ...[
          "flax.core/sdk_widgets#type:PageRoute",
          "flax.core/sdk_widgets#type:ModalRoute",
          "flax.core/sdk_widgets#type:TransitionRoute",
          "flax.core/sdk_widgets#type:OverlayRoute",
          "flax.core/flutter#type:Route",
          "package:flutter/src/widgets/navigator.dart::_RoutePlaceholder",
          "flax.core/sdk_widgets#type:PredictiveBackRoute",
          "flax.core/sdk_widgets#type:LocalHistoryRoute",
          "package:material_ui/src/page.dart::MaterialRouteTransitionMixin",
        ],
      ],
      listenerPairs: {},
      disposeMethod: "dispose",
    ),
  );
};
Function _flaxGeneric_ThemeData_extension<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.ThemeData).extension<_Method0>();
      }

      return FlaxInstanceMethod.plain(
        _flaxBinding57,
        types.ref<_Method0?>(),
        invoke,
      );
    };
const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[1,1,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[3,3,[],[]]]", _flaxShape1),
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape2),
  FlaxDartShapeTemplate("[\"callback\",[2,2,[],[]]]", _flaxShape3),
  FlaxDartShapeTemplate("[\"callback\",[5,5,[],[]]]", _flaxShape4),
  FlaxDartShapeTemplate(
    "[\"callback\",[1,1,[\"currentLength\",\"isFocused\",\"maxLength\"],[true,true,true]]]",
    _flaxShape5,
  ),
];
Function _flaxShape0<_Shape0, _Shape1>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape1 Function(_Shape0 notification)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter.plain(
                "notification",
                types.ref<_Shape0>(withinCallback: true),
              ),
            ],
            types.ref<_Shape1>(withinCallback: true),
            FlaxCallbackAdapters.wrap1<_Shape0, _Shape1>,
            id:
                types.key<_Shape1 Function(_Shape0 notification)>() +
                ":callback:<>(p:r:notification:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke1<_Shape0, _Shape1>,
            matches: FlaxCallbackAdapters.matches1<_Shape0, _Shape1>,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape1<
  _Shape0,
  _Shape1,
  _Shape2,
  _Shape3
>() => (FlaxDartTypes types, bool withinCallback) {
  Object _callback0(FlaxCallback _flaxBridgeCallback) =>
      (_Shape0 p0, _Shape1 p1, _Shape2 p2) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        positional.add(p1);
        positional.add(p2);
        return _flaxBridgeCallback.call(positional, named) as _Shape3;
      };
  bool _callback0Matches(Object value) =>
      value is _Shape3 Function(_Shape0 context, _Shape1 states, _Shape2 child);
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function
        as _Shape3 Function(_Shape0 context, _Shape1 states, _Shape2 child))(
      positional[0] as _Shape0,
      positional[1] as _Shape1,
      positional[2] as _Shape2,
    );
  }

  return types
      .define<_Shape3 Function(_Shape0 context, _Shape1 states, _Shape2 child)>(
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
                "states",
                types.ref<_Shape1>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "child",
                types.ref<_Shape2>(withinCallback: true),
              ),
            ],
            types.ref<_Shape3>(withinCallback: true),
            _callback0,
            id:
                types
                    .key<
                      _Shape3 Function(
                        _Shape0 context,
                        _Shape1 states,
                        _Shape2 child,
                      )
                    >() +
                ":callback:<>(p:r:context:parameter:,p:r:states:parameter:,p:r:child:parameter:)->parameter:",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
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
Function _flaxShape3<_Shape0, _Shape1, _Shape2>() =>
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
Function _flaxShape4<_Shape0, _Shape1, _Shape2, _Shape3, _Shape4, _Shape5>() =>
    (FlaxDartTypes types, bool withinCallback) {
      Object _callback0(FlaxCallback _flaxBridgeCallback) =>
          (_Shape0 p0, _Shape1 p1, _Shape2 p2, _Shape3 p3, _Shape4 p4) {
            final positional = <Object?>[];
            final named = <String, Object?>{};
            positional.add(p0);
            positional.add(p1);
            positional.add(p2);
            positional.add(p3);
            positional.add(p4);
            return _flaxBridgeCallback.call(positional, named) as _Shape5;
          };
      bool _callback0Matches(Object value) =>
          value
              is _Shape5 Function(
                _Shape0 context,
                _Shape1 animation,
                _Shape2 secondaryAnimation,
                _Shape3 allowSnapshotting,
                _Shape4 child,
              );
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function
            as _Shape5 Function(
              _Shape0 context,
              _Shape1 animation,
              _Shape2 secondaryAnimation,
              _Shape3 allowSnapshotting,
              _Shape4 child,
            ))(
          positional[0] as _Shape0,
          positional[1] as _Shape1,
          positional[2] as _Shape2,
          positional[3] as _Shape3,
          positional[4] as _Shape4,
        );
      }

      return types.define<
        _Shape5 Function(
          _Shape0 context,
          _Shape1 animation,
          _Shape2 secondaryAnimation,
          _Shape3 allowSnapshotting,
          _Shape4 child,
        )
      >(
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
                "animation",
                types.ref<_Shape1>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "secondaryAnimation",
                types.ref<_Shape2>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "allowSnapshotting",
                types.ref<_Shape3>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "child",
                types.ref<_Shape4>(withinCallback: true),
              ),
            ],
            types.ref<_Shape5>(withinCallback: true),
            _callback0,
            id:
                types
                    .key<
                      _Shape5 Function(
                        _Shape0 context,
                        _Shape1 animation,
                        _Shape2 secondaryAnimation,
                        _Shape3 allowSnapshotting,
                        _Shape4 child,
                      )
                    >() +
                ":callback:<>(p:r:context:parameter:,p:r:animation:parameter:,p:r:secondaryAnimation:parameter:,p:r:allowSnapshotting:parameter:,p:r:child:parameter:)->parameter:",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape5<_Shape0, _Shape1, _Shape2, _Shape3, _Shape4>() =>
    (FlaxDartTypes types, bool withinCallback) {
      Object _callback0(FlaxCallback _flaxBridgeCallback) =>
          (
            _Shape0 p0, {
            required _Shape1 currentLength,
            required _Shape2 isFocused,
            required _Shape3 maxLength,
          }) {
            final positional = <Object?>[];
            final named = <String, Object?>{};
            positional.add(p0);
            named["currentLength"] = currentLength;
            named["isFocused"] = isFocused;
            named["maxLength"] = maxLength;
            return _flaxBridgeCallback.call(positional, named) as _Shape4;
          };
      bool _callback0Matches(Object value) =>
          value
              is _Shape4 Function(
                _Shape0 context, {
                required _Shape1 currentLength,
                required _Shape2 isFocused,
                required _Shape3 maxLength,
              });
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function
            as _Shape4 Function(
              _Shape0 context, {
              required _Shape1 currentLength,
              required _Shape2 isFocused,
              required _Shape3 maxLength,
            }))(
          positional[0] as _Shape0,
          currentLength: named["currentLength"] as _Shape1,
          isFocused: named["isFocused"] as _Shape2,
          maxLength: named["maxLength"] as _Shape3,
        );
      }

      return types.define<
        _Shape4 Function(
          _Shape0 context, {
          required _Shape1 currentLength,
          required _Shape2 isFocused,
          required _Shape3 maxLength,
        })
      >(
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
                "currentLength",
                types.ref<_Shape1>(withinCallback: true),
                positional: false,
              ),
              FlaxCallbackParameter.plain(
                "isFocused",
                types.ref<_Shape2>(withinCallback: true),
                positional: false,
              ),
              FlaxCallbackParameter.plain(
                "maxLength",
                types.ref<_Shape3>(withinCallback: true),
                positional: false,
              ),
            ],
            types.ref<_Shape4>(withinCallback: true),
            _callback0,
            id:
                types
                    .key<
                      _Shape4 Function(
                        _Shape0 context, {
                        required _Shape1 currentLength,
                        required _Shape2 isFocused,
                        required _Shape3 maxLength,
                      })
                    >() +
                ":callback:<>(p:r:context:parameter:,n:r:currentLength:parameter:,n:r:isFocused:parameter:,n:r:maxLength:parameter:)->parameter:",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Object _callback0(FlaxCallback _flaxBridgeCallback) =>
    (api1.BuildContext p0, Set<api1.WidgetState> p1, api1.Widget? p2) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      positional.add(p2);
      return _flaxBridgeCallback.call(positional, named) as api1.Widget;
    };
bool _callback0Matches(Object value) =>
    value
        is api1.Widget Function(
          api1.BuildContext context,
          Set<api1.WidgetState> states,
          api1.Widget? child,
        );
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.Widget Function(
        api1.BuildContext context,
        Set<api1.WidgetState> states,
        api1.Widget? child,
      ))(
    positional[0] as api1.BuildContext,
    positional[1] as Set<api1.WidgetState>,
    positional[2] as api1.Widget?,
  );
}

Object _callback1(FlaxCallback _flaxBridgeCallback) => (bool p0, Object? p1) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  positional.add(p1);
  _flaxBridgeCallback.call(positional, named);
};
bool _callback1Matches(Object value) =>
    value is void Function(bool didPop, Object? result);
Object? _callback1Invoke(
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

Object _callback2(FlaxCallback _flaxBridgeCallback) =>
    (
      api1.BuildContext p0,
      api3.Animation<double> p1,
      api3.Animation<double> p2,
      bool p3,
      api1.Widget? p4,
    ) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      positional.add(p2);
      positional.add(p3);
      positional.add(p4);
      return _flaxBridgeCallback.call(positional, named) as api1.Widget?;
    };
bool _callback2Matches(Object value) =>
    value
        is api1.Widget? Function(
          api1.BuildContext context,
          api3.Animation<double> animation,
          api3.Animation<double> secondaryAnimation,
          bool allowSnapshotting,
          api1.Widget? child,
        );
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.Widget? Function(
        api1.BuildContext context,
        api3.Animation<double> animation,
        api3.Animation<double> secondaryAnimation,
        bool allowSnapshotting,
        api1.Widget? child,
      ))(
    positional[0] as api1.BuildContext,
    positional[1] as api3.Animation<double>,
    positional[2] as api3.Animation<double>,
    positional[3] as bool,
    positional[4] as api1.Widget?,
  );
}

Object _callback3(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<bool>((value) => value as bool);
};
bool _callback3Matches(Object value) => value is Future<bool> Function();
Object? _callback3Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<bool> Function())();
}

Object _callback4(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<void>((value) => null);
};
bool _callback4Matches(Object value) => value is Future<void> Function();
Object? _callback4Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function())();
}

Object _callback5(FlaxCallback _flaxBridgeCallback) =>
    (
      api1.BuildContext p0, {
      required int currentLength,
      required bool isFocused,
      required int? maxLength,
    }) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      named["currentLength"] = currentLength;
      named["isFocused"] = isFocused;
      named["maxLength"] = maxLength;
      return _flaxBridgeCallback.call(positional, named) as api1.Widget?;
    };
bool _callback5Matches(Object value) =>
    value
        is api1.Widget? Function(
          api1.BuildContext context, {
          required int currentLength,
          required bool isFocused,
          required int? maxLength,
        });
Object? _callback5Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.Widget? Function(
        api1.BuildContext context, {
        required int currentLength,
        required bool isFocused,
        required int? maxLength,
      }))(
    positional[0] as api1.BuildContext,
    currentLength: named["currentLength"] as int,
    isFocused: named["isFocused"] as bool,
    maxLength: named["maxLength"] as int?,
  );
}

Object _collection0Create() => <api1.Widget>[];
bool _collection0Matches(Object value) => value is List<api1.Widget>;
List<api1.Widget> _collection0Snapshot(Iterable<Object?> items) =>
    List<api1.Widget>.unmodifiable(items.cast<api1.Widget>());
Object _collection1Create() => <api1.Widget>[];
Object _collection1Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.Widget>();
bool _collection1Matches(Object value) => value is Iterable<api1.Widget>;
Object _collection2Create() => <api6.DiagnosticsNode>[];
bool _collection2Matches(Object value) => value is List<api6.DiagnosticsNode>;
Object _collection3Create() => <api6.DiagnosticsNode>[];
Object _collection3Restore(Object value) =>
    (value as Iterable<Object?>).cast<api6.DiagnosticsNode>();
bool _collection3Matches(Object value) =>
    value is Iterable<api6.DiagnosticsNode>;
Object _collection4Create() => <api1.WidgetState>{};
bool _collection4Matches(Object value) => value is Set<api1.WidgetState>;
Object _collection5Create() => <api1.WidgetState>[];
Object _collection5Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.WidgetState>();
bool _collection5Matches(Object value) => value is Iterable<api1.WidgetState>;
Object _collection6Create() =>
    <String, api1.Widget Function(api1.BuildContext context)>{};
bool _collection6Matches(Object value) =>
    value is Map<String, api1.Widget Function(api1.BuildContext context)>;
Object _collection7Create() => <api1.Route<Object?>>[];
bool _collection7Matches(Object value) => value is List<api1.Route<Object?>>;
Object _collection8Create() => <api1.Route<Object?>>[];
Object _collection8Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.Route<Object?>>();
bool _collection8Matches(Object value) =>
    value is Iterable<api1.Route<Object?>>;
Object _collection9Create() => <api1.NavigatorObserver>[];
bool _collection9Matches(Object value) => value is List<api1.NavigatorObserver>;
Object _collection10Create() => <api1.NavigatorObserver>[];
Object _collection10Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.NavigatorObserver>();
bool _collection10Matches(Object value) =>
    value is Iterable<api1.NavigatorObserver>;
Object _collection11Create() => <api1.LocalizationsDelegate<Object?>>[];
Object _collection11Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.LocalizationsDelegate<Object?>>();
bool _collection11Matches(Object value) =>
    value is Iterable<api1.LocalizationsDelegate<Object?>>;
Object _collection12Create() => <api5.Locale>[];
bool _collection12Matches(Object value) => value is List<api5.Locale>;
Object _collection13Create() => <api5.Locale>[];
Object _collection13Restore(Object value) =>
    (value as Iterable<Object?>).cast<api5.Locale>();
bool _collection13Matches(Object value) => value is Iterable<api5.Locale>;
Object _collection14Create() => <api1.ShortcutActivator, api1.Intent>{};
bool _collection14Matches(Object value) =>
    value is Map<api1.ShortcutActivator, api1.Intent>;
Object _collection15Create() => <api8.Type, api1.Action<api1.Intent>>{};
bool _collection15Matches(Object value) =>
    value is Map<api8.Type, api1.Action<api1.Intent>>;
Object _collection16Create() => <api1.OverlayEntry>[];
bool _collection16Matches(Object value) => value is List<api1.OverlayEntry>;
Object _collection17Create() => <api1.OverlayEntry>[];
Object _collection17Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.OverlayEntry>();
bool _collection17Matches(Object value) => value is Iterable<api1.OverlayEntry>;
Object _collection18Create() => <String, Object?>{};
bool _collection18Matches(Object value) => value is Map<String, Object?>;
Object _collection19Create() => <api9.TextInputFormatter>[];
bool _collection19Matches(Object value) =>
    value is List<api9.TextInputFormatter>;
Object _collection20Create() => <api9.TextInputFormatter>[];
Object _collection20Restore(Object value) =>
    (value as Iterable<Object?>).cast<api9.TextInputFormatter>();
bool _collection20Matches(Object value) =>
    value is Iterable<api9.TextInputFormatter>;
Object _collection21Create() => <String>[];
Object _collection21Restore(Object value) =>
    (value as Iterable<Object?>).cast<String>();
bool _collection21Matches(Object value) => value is Iterable<String>;
Object _collection22Create() => <String>[];
bool _collection22Matches(Object value) => value is List<String>;
Future<Object?> _future0Adapt(Future<Object?> value) => value;
Future<Object?> _future1Adapt(Future<Object?> value) =>
    value.then<api1.RoutePopDisposition>(
      (value) => value as api1.RoutePopDisposition,
    );
Future<Object?> _future2Adapt(Future<Object?> value) =>
    value.then<bool>((value) => value as bool);
Future<Object?> _future3Adapt(Future<Object?> value) =>
    value.then<void>((_) {});
Future<Object?> _future4Adapt(Future<Object?> value) =>
    value.then<api.ColorScheme>((value) => value as api.ColorScheme);
const _flaxBinding0 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Key",
  nullable: true,
);
const _flaxBinding1 = FlaxTypeRef("widget", nullable: true);
const _flaxBinding2 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EdgeInsetsGeometry",
  nullable: true,
);
const _flaxBinding3 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Color",
  nullable: true,
);
const _flaxBinding4 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextStyle",
  nullable: true,
);
const _flaxBinding5 = FlaxTypeRef(
  "iterable",
  item: flaxWidgetType,
  collection: FlaxCollectionBinding(
    "iterable:[widget:]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding6 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxWidgetType,
  collection: FlaxCollectionBinding(
    "list:[widget:]",
    _collection0Create,
    _collection0Matches,
    snapshot: _collection0Snapshot,
  ),
  iterable: _flaxBinding5,
);
const _flaxBinding7 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:MainAxisAlignment",
  nullable: true,
);
const _flaxBinding8 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_widgets#type:OverflowBarAlignment",
  nullable: true,
);
const _flaxBinding9 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:VerticalDirection",
  nullable: true,
);
const _flaxBinding10 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EdgeInsets",
  nullable: true,
);
const _flaxBinding11 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:Clip",
  nullable: true,
);
const _flaxBinding12 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ShapeBorder",
  nullable: true,
);
const _flaxBinding13 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:AlignmentGeometry",
  nullable: true,
);
const _flaxBinding14 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BoxConstraints",
  nullable: true,
);
const _flaxBinding15 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ScrollController",
  nullable: true,
);
const _flaxBinding16 = FlaxGetter.plain(
  "preferredSize",
  flaxSizeType,
  _AppBar_preferredSize,
);
const _flaxBinding17 = FlaxGetter.plain(
  "leading",
  _flaxBinding1,
  _AppBar_leading,
);
const _flaxBinding18 = FlaxGetter.plain(
  "automaticallyImplyLeading",
  flaxBoolType,
  _AppBar_automaticallyImplyLeading,
);
const _flaxBinding19 = FlaxGetter.plain("title", _flaxBinding1, _AppBar_title);
const _flaxBinding20 = FlaxGetter.plain(
  "actions",
  _flaxBinding6,
  _AppBar_actions,
);
const _flaxBinding21 = FlaxGetter.plain(
  "automaticallyImplyActions",
  flaxBoolType,
  _AppBar_automaticallyImplyActions,
);
const _flaxBinding22 = FlaxGetter.plain(
  "flexibleSpace",
  _flaxBinding1,
  _AppBar_flexibleSpace,
);
const _flaxBinding23 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:PreferredSizeWidget",
  nullable: true,
);
const _flaxBinding24 = FlaxGetter.plain(
  "bottom",
  _flaxBinding23,
  _AppBar_bottom,
);
const _flaxBinding25 = FlaxGetter.plain(
  "elevation",
  flaxNullableDoubleType,
  _AppBar_elevation,
);
const _flaxBinding26 = FlaxGetter.plain(
  "scrolledUnderElevation",
  flaxNullableDoubleType,
  _AppBar_scrolledUnderElevation,
);
const _flaxBinding27 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ScrollNotification",
);
const _flaxBinding28 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("notification", _flaxBinding27)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<api1.ScrollNotification, bool>,
  id: "callback:<>(p:r:notification:object:flax.core/sdk_widgets#type:ScrollNotification)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api1.ScrollNotification, bool>,
  matches: FlaxCallbackAdapters.matches1<api1.ScrollNotification, bool>,
);
const _flaxBinding29 = FlaxTypeRef("callback", callback: _flaxBinding28);
const _flaxBinding30 = FlaxGetter.plain(
  "notificationPredicate",
  _flaxBinding29,
  _AppBar_notificationPredicate,
);
const _flaxBinding31 = FlaxGetter.plain(
  "shadowColor",
  _flaxBinding3,
  _AppBar_shadowColor,
);
const _flaxBinding32 = FlaxGetter.plain(
  "surfaceTintColor",
  _flaxBinding3,
  _AppBar_surfaceTintColor,
);
const _flaxBinding33 = FlaxGetter.plain("shape", _flaxBinding12, _AppBar_shape);
const _flaxBinding34 = FlaxGetter.plain(
  "backgroundColor",
  _flaxBinding3,
  _AppBar_backgroundColor,
);
const _flaxBinding35 = FlaxGetter.plain(
  "foregroundColor",
  _flaxBinding3,
  _AppBar_foregroundColor,
);
const _flaxBinding36 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:IconThemeData",
  nullable: true,
);
const _flaxBinding37 = FlaxGetter.plain(
  "iconTheme",
  _flaxBinding36,
  _AppBar_iconTheme,
);
const _flaxBinding38 = FlaxGetter.plain(
  "actionsIconTheme",
  _flaxBinding36,
  _AppBar_actionsIconTheme,
);
const _flaxBinding39 = FlaxGetter.plain(
  "primary",
  flaxBoolType,
  _AppBar_primary,
);
const _flaxBinding40 = FlaxGetter.plain(
  "centerTitle",
  flaxNullableBoolType,
  _AppBar_centerTitle,
);
const _flaxBinding41 = FlaxGetter.plain(
  "excludeHeaderSemantics",
  flaxBoolType,
  _AppBar_excludeHeaderSemantics,
);
const _flaxBinding42 = FlaxGetter.plain(
  "titleSpacing",
  flaxNullableDoubleType,
  _AppBar_titleSpacing,
);
const _flaxBinding43 = FlaxGetter.plain(
  "toolbarOpacity",
  flaxDoubleType,
  _AppBar_toolbarOpacity,
);
const _flaxBinding44 = FlaxGetter.plain(
  "bottomOpacity",
  flaxDoubleType,
  _AppBar_bottomOpacity,
);
const _flaxBinding45 = FlaxGetter.plain(
  "toolbarHeight",
  flaxNullableDoubleType,
  _AppBar_toolbarHeight,
);
const _flaxBinding46 = FlaxGetter.plain(
  "leadingWidth",
  flaxNullableDoubleType,
  _AppBar_leadingWidth,
);
const _flaxBinding47 = FlaxGetter.plain(
  "toolbarTextStyle",
  _flaxBinding4,
  _AppBar_toolbarTextStyle,
);
const _flaxBinding48 = FlaxGetter.plain(
  "titleTextStyle",
  _flaxBinding4,
  _AppBar_titleTextStyle,
);
const _flaxBinding49 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_services#type:SystemUiOverlayStyle",
  nullable: true,
);
const _flaxBinding50 = FlaxGetter.plain(
  "systemOverlayStyle",
  _flaxBinding49,
  _AppBar_systemOverlayStyle,
);
const _flaxBinding51 = FlaxGetter.plain(
  "forceMaterialTransparency",
  flaxBoolType,
  _AppBar_forceMaterialTransparency,
);
const _flaxBinding52 = FlaxGetter.plain(
  "useDefaultSemanticsOrder",
  flaxBoolType,
  _AppBar_useDefaultSemanticsOrder,
);
const _flaxBinding53 = FlaxGetter.plain(
  "clipBehavior",
  _flaxBinding11,
  _AppBar_clipBehavior,
);
const _flaxBinding54 = FlaxGetter.plain(
  "actionsPadding",
  _flaxBinding2,
  _AppBar_actionsPadding,
);
const _flaxBinding55 = FlaxGetter.plain(
  "animateColor",
  flaxBoolType,
  _AppBar_animateColor,
);
const _flaxBinding56 = FlaxGetter.plain("key", _flaxBinding0, _AppBar_key);
const _flaxBinding57 = <FlaxParameter>[];
const _flaxBinding58 = FlaxInstanceMethod.plain(
  _flaxBinding57,
  flaxStringType,
  _AppBar_toStringShort,
);
const _flaxBinding59 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding60 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding59,
    required: false,
    defaultValue: api6.DiagnosticLevel.info,
  ),
];
const _flaxBinding61 = FlaxInstanceMethod.plain(
  _flaxBinding60,
  flaxStringType,
  _AppBar_toString,
);
const _flaxBinding62 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
  nullable: true,
);
const _flaxBinding63 = <FlaxParameter>[
  FlaxParameter("name", flaxNullableStringType, required: false),
  FlaxParameter("style", _flaxBinding62, required: false),
];
const _flaxBinding64 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding65 = FlaxInstanceMethod.plain(
  _flaxBinding63,
  _flaxBinding64,
  _AppBar_toDiagnosticsNode,
);
const _flaxBinding66 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder",
);
const _flaxBinding67 = <FlaxParameter>[
  FlaxParameter.required("properties", _flaxBinding66),
];
const _flaxBinding68 = FlaxInstanceMethod.plain(
  _flaxBinding67,
  flaxVoidType,
  _AppBar_debugFillProperties,
);
const _flaxBinding69 = <FlaxParameter>[
  FlaxParameter("joiner", flaxStringType, required: false, defaultValue: ', '),
  FlaxParameter(
    "minLevel",
    _flaxBinding59,
    required: false,
    defaultValue: api6.DiagnosticLevel.debug,
  ),
];
const _flaxBinding70 = FlaxInstanceMethod.plain(
  _flaxBinding69,
  flaxStringType,
  _AppBar_toStringShallow,
);
const _flaxBinding71 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding59,
    required: false,
    defaultValue: api6.DiagnosticLevel.debug,
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
const _flaxBinding72 = FlaxInstanceMethod.plain(
  _flaxBinding71,
  flaxStringType,
  _AppBar_toStringDeep,
);
const _flaxBinding73 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding64,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection3Create,
    _collection3Matches,
    restore: _collection3Restore,
  ),
);
const _flaxBinding74 = FlaxTypeRef(
  "list",
  item: _flaxBinding64,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection2Create,
    _collection2Matches,
  ),
  iterable: _flaxBinding73,
);
const _flaxBinding75 = FlaxInstanceMethod.plain(
  _flaxBinding57,
  _flaxBinding74,
  _AppBar_debugDescribeChildren,
);
const _flaxBinding76 = FlaxTypeRef(
  "state",
  id: "flax.core/components#type:State",
  dartType: FlaxDartTypes.typeOf<api1.State<api.AppBar>>,
);
const _flaxBinding77 = FlaxInstanceMethod.plain(
  _flaxBinding57,
  _flaxBinding76,
  _AppBar_createState,
);
const _flaxBinding78 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:StatefulElement",
);
const _flaxBinding79 = FlaxInstanceMethod.plain(
  _flaxBinding57,
  _flaxBinding78,
  _AppBar_createElement,
);
const _flaxBinding80 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding0, required: false),
  FlaxParameter("leading", _flaxBinding1, required: false),
  FlaxParameter(
    "automaticallyImplyLeading",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("title", _flaxBinding1, required: false),
  FlaxParameter("actions", _flaxBinding6, required: false),
  FlaxParameter(
    "automaticallyImplyActions",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("flexibleSpace", _flaxBinding1, required: false),
  FlaxParameter("bottom", _flaxBinding23, required: false),
  FlaxParameter("elevation", flaxNullableDoubleType, required: false),
  FlaxParameter(
    "scrolledUnderElevation",
    flaxNullableDoubleType,
    required: false,
  ),
  FlaxParameter(
    "notificationPredicate",
    _flaxBinding29,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("shadowColor", _flaxBinding3, required: false),
  FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
  FlaxParameter("shape", _flaxBinding12, required: false),
  FlaxParameter("backgroundColor", _flaxBinding3, required: false),
  FlaxParameter("foregroundColor", _flaxBinding3, required: false),
  FlaxParameter("iconTheme", _flaxBinding36, required: false),
  FlaxParameter("actionsIconTheme", _flaxBinding36, required: false),
  FlaxParameter("primary", flaxBoolType, required: false, defaultValue: true),
  FlaxParameter("centerTitle", flaxNullableBoolType, required: false),
  FlaxParameter(
    "excludeHeaderSemantics",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("titleSpacing", flaxNullableDoubleType, required: false),
  FlaxParameter(
    "toolbarOpacity",
    flaxDoubleType,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter(
    "bottomOpacity",
    flaxDoubleType,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter("toolbarHeight", flaxNullableDoubleType, required: false),
  FlaxParameter("leadingWidth", flaxNullableDoubleType, required: false),
  FlaxParameter("toolbarTextStyle", _flaxBinding4, required: false),
  FlaxParameter("titleTextStyle", _flaxBinding4, required: false),
  FlaxParameter("systemOverlayStyle", _flaxBinding49, required: false),
  FlaxParameter(
    "forceMaterialTransparency",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "useDefaultSemanticsOrder",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("clipBehavior", _flaxBinding11, required: false),
  FlaxParameter("actionsPadding", _flaxBinding2, required: false),
  FlaxParameter(
    "animateColor",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding81 = FlaxObjectBinding(
  "flax.material/material#type:AppBar",
  [
    _flaxBinding16,
    _flaxBinding17,
    _flaxBinding18,
    _flaxBinding19,
    _flaxBinding20,
    _flaxBinding21,
    _flaxBinding22,
    _flaxBinding24,
    _flaxBinding25,
    _flaxBinding26,
    _flaxBinding30,
    _flaxBinding31,
    _flaxBinding32,
    _flaxBinding33,
    _flaxBinding34,
    _flaxBinding35,
    _flaxBinding37,
    _flaxBinding38,
    _flaxBinding39,
    _flaxBinding40,
    _flaxBinding41,
    _flaxBinding42,
    _flaxBinding43,
    _flaxBinding44,
    _flaxBinding45,
    _flaxBinding46,
    _flaxBinding47,
    _flaxBinding48,
    _flaxBinding50,
    _flaxBinding51,
    _flaxBinding52,
    _flaxBinding53,
    _flaxBinding54,
    _flaxBinding55,
    _flaxBinding56,
  ],
  {
    "toStringShort": _flaxBinding58,
    "toString": _flaxBinding61,
    "toDiagnosticsNode": _flaxBinding65,
    "debugFillProperties": _flaxBinding68,
    "toStringShallow": _flaxBinding70,
    "toStringDeep": _flaxBinding72,
    "debugDescribeChildren": _flaxBinding75,
    "createState": _flaxBinding77,
    "createElement": _flaxBinding79,
  },
  constructors: {"": _flaxBinding80},
  create: _createAppBar,
  matches: _isAppBar,
  setters: [],
  supertypes: [
    "flax.core/components#type:StatefulWidget",
    "flax.core/sdk_widgets#type:Widget",
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
    "flax.core/flutter#type:PreferredSizeWidget",
  ],
);
const _flaxBinding82 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:WidgetState",
);
const _flaxBinding83 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding82,
  collection: FlaxCollectionBinding(
    "iterable:[enum:flax.core/flutter#type:WidgetState]",
    _collection5Create,
    _collection5Matches,
    restore: _collection5Restore,
  ),
);
const _flaxBinding84 = FlaxTypeRef(
  "set",
  item: _flaxBinding82,
  collection: FlaxCollectionBinding(
    "set:[enum:flax.core/flutter#type:WidgetState]",
    _collection4Create,
    _collection4Matches,
  ),
  iterable: _flaxBinding83,
);
const _flaxBinding85 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("states", _flaxBinding84)],
  _flaxBinding4,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api2.TextStyle?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:TextStyle",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api2.TextStyle?>,
  matches:
      FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api2.TextStyle?>,
);
const _flaxBinding86 = FlaxTypeRef("callback", callback: _flaxBinding85);
const _flaxBinding87 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api2.TextStyle?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:TextStyle>",
      [FlaxParameter.required("callback", _flaxBinding86)],
      _deferred0,
    ),
  },
);
const _flaxBinding88 = FlaxGetter.plain(
  "textStyle",
  _flaxBinding87,
  _ButtonStyle_textStyle,
);
const _flaxBinding89 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("states", _flaxBinding84)],
  _flaxBinding3,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api5.Color?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api5.Color?>,
  matches: FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api5.Color?>,
);
const _flaxBinding90 = FlaxTypeRef("callback", callback: _flaxBinding89);
const _flaxBinding91 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api5.Color?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
      [FlaxParameter.required("callback", _flaxBinding90)],
      _deferred1,
    ),
  },
);
const _flaxBinding92 = FlaxGetter.plain(
  "backgroundColor",
  _flaxBinding91,
  _ButtonStyle_backgroundColor,
);
const _flaxBinding93 = FlaxGetter.plain(
  "foregroundColor",
  _flaxBinding91,
  _ButtonStyle_foregroundColor,
);
const _flaxBinding94 = FlaxGetter.plain(
  "overlayColor",
  _flaxBinding91,
  _ButtonStyle_overlayColor,
);
const _flaxBinding95 = FlaxGetter.plain(
  "shadowColor",
  _flaxBinding91,
  _ButtonStyle_shadowColor,
);
const _flaxBinding96 = FlaxGetter.plain(
  "surfaceTintColor",
  _flaxBinding91,
  _ButtonStyle_surfaceTintColor,
);
const _flaxBinding97 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("states", _flaxBinding84)],
  flaxNullableDoubleType,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, double?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->double?:",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, double?>,
  matches: FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, double?>,
);
const _flaxBinding98 = FlaxTypeRef("callback", callback: _flaxBinding97);
const _flaxBinding99 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<double?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><double?:>",
      [FlaxParameter.required("callback", _flaxBinding98)],
      _deferred2,
    ),
  },
);
const _flaxBinding100 = FlaxGetter.plain(
  "elevation",
  _flaxBinding99,
  _ButtonStyle_elevation,
);
const _flaxBinding101 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("states", _flaxBinding84)],
  _flaxBinding2,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api2.EdgeInsetsGeometry?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:EdgeInsetsGeometry",
  invoke: FlaxCallbackAdapters
      .invoke1<Set<api1.WidgetState>, api2.EdgeInsetsGeometry?>,
  matches: FlaxCallbackAdapters
      .matches1<Set<api1.WidgetState>, api2.EdgeInsetsGeometry?>,
);
const _flaxBinding102 = FlaxTypeRef("callback", callback: _flaxBinding101);
const _flaxBinding103 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType:
      FlaxDartTypes.typeOf<api1.WidgetStateProperty<api2.EdgeInsetsGeometry?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:EdgeInsetsGeometry>",
      [FlaxParameter.required("callback", _flaxBinding102)],
      _deferred3,
    ),
  },
);
const _flaxBinding104 = FlaxGetter.plain(
  "padding",
  _flaxBinding103,
  _ButtonStyle_padding,
);
const _flaxBinding105 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("states", _flaxBinding84)],
  flaxNullableSizeType,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api5.Size?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Size",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api5.Size?>,
  matches: FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api5.Size?>,
);
const _flaxBinding106 = FlaxTypeRef("callback", callback: _flaxBinding105);
const _flaxBinding107 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api5.Size?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Size>",
      [FlaxParameter.required("callback", _flaxBinding106)],
      _deferred4,
    ),
  },
);
const _flaxBinding108 = FlaxGetter.plain(
  "minimumSize",
  _flaxBinding107,
  _ButtonStyle_minimumSize,
);
const _flaxBinding109 = FlaxGetter.plain(
  "fixedSize",
  _flaxBinding107,
  _ButtonStyle_fixedSize,
);
const _flaxBinding110 = FlaxGetter.plain(
  "maximumSize",
  _flaxBinding107,
  _ButtonStyle_maximumSize,
);
const _flaxBinding111 = FlaxGetter.plain(
  "iconColor",
  _flaxBinding91,
  _ButtonStyle_iconColor,
);
const _flaxBinding112 = FlaxGetter.plain(
  "iconSize",
  _flaxBinding99,
  _ButtonStyle_iconSize,
);
const _flaxBinding113 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BorderSide",
  nullable: true,
);
const _flaxBinding114 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("states", _flaxBinding84)],
  _flaxBinding113,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api2.BorderSide?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:BorderSide",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api2.BorderSide?>,
  matches:
      FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api2.BorderSide?>,
);
const _flaxBinding115 = FlaxTypeRef("callback", callback: _flaxBinding114);
const _flaxBinding116 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api2.BorderSide?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:BorderSide>",
      [FlaxParameter.required("callback", _flaxBinding115)],
      _deferred5,
    ),
  },
);
const _flaxBinding117 = FlaxGetter.plain(
  "side",
  _flaxBinding116,
  _ButtonStyle_side,
);
const _flaxBinding118 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:OutlinedBorder",
  nullable: true,
);
const _flaxBinding119 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("states", _flaxBinding84)],
  _flaxBinding118,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api2.OutlinedBorder?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:OutlinedBorder",
  invoke:
      FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api2.OutlinedBorder?>,
  matches: FlaxCallbackAdapters
      .matches1<Set<api1.WidgetState>, api2.OutlinedBorder?>,
);
const _flaxBinding120 = FlaxTypeRef("callback", callback: _flaxBinding119);
const _flaxBinding121 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType:
      FlaxDartTypes.typeOf<api1.WidgetStateProperty<api2.OutlinedBorder?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:OutlinedBorder>",
      [FlaxParameter.required("callback", _flaxBinding120)],
      _deferred6,
    ),
  },
);
const _flaxBinding122 = FlaxGetter.plain(
  "shape",
  _flaxBinding121,
  _ButtonStyle_shape,
);
const _flaxBinding123 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:MouseCursor",
  nullable: true,
);
const _flaxBinding124 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("states", _flaxBinding84)],
  _flaxBinding123,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api9.MouseCursor?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:MouseCursor",
  invoke:
      FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api9.MouseCursor?>,
  matches:
      FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api9.MouseCursor?>,
);
const _flaxBinding125 = FlaxTypeRef("callback", callback: _flaxBinding124);
const _flaxBinding126 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api9.MouseCursor?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:MouseCursor>",
      [FlaxParameter.required("callback", _flaxBinding125)],
      _deferred7,
    ),
  },
);
const _flaxBinding127 = FlaxGetter.plain(
  "mouseCursor",
  _flaxBinding126,
  _ButtonStyle_mouseCursor,
);
const _flaxBinding128 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:VisualDensity",
  nullable: true,
);
const _flaxBinding129 = FlaxGetter.plain(
  "visualDensity",
  _flaxBinding128,
  _ButtonStyle_visualDensity,
);
const _flaxBinding130 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
  nullable: true,
);
const _flaxBinding131 = FlaxGetter.plain(
  "animationDuration",
  _flaxBinding130,
  _ButtonStyle_animationDuration,
);
const _flaxBinding132 = FlaxGetter.plain(
  "enableFeedback",
  flaxNullableBoolType,
  _ButtonStyle_enableFeedback,
);
const _flaxBinding133 = FlaxGetter.plain(
  "alignment",
  _flaxBinding13,
  _ButtonStyle_alignment,
);
const _flaxBinding134 = FlaxTypeRef(
  "context",
  id: "flax.core/flutter#type:BuildContext",
);
const _flaxBinding135 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("context", _flaxBinding134),
    FlaxCallbackParameter.plain("states", _flaxBinding84),
    FlaxCallbackParameter.plain("child", _flaxBinding1),
  ],
  flaxWidgetType,
  _callback0,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:states:set:[enum:flax.core/flutter#type:WidgetState],p:r:child:widget?:)->widget:",
  invoke: _callback0Invoke,
  matches: _callback0Matches,
);
const _flaxBinding136 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding135,
);
const _flaxBinding137 = FlaxGetter.plain(
  "backgroundBuilder",
  _flaxBinding136,
  _ButtonStyle_backgroundBuilder,
);
const _flaxBinding138 = FlaxGetter.plain(
  "foregroundBuilder",
  _flaxBinding136,
  _ButtonStyle_foregroundBuilder,
);
const _flaxBinding139 = FlaxInstanceMethod.plain(
  _flaxBinding57,
  flaxStringType,
  _ButtonStyle_toStringShort,
);
const _flaxBinding140 = FlaxInstanceMethod.plain(
  _flaxBinding60,
  flaxStringType,
  _ButtonStyle_toString,
);
const _flaxBinding141 = FlaxInstanceMethod.plain(
  _flaxBinding63,
  _flaxBinding64,
  _ButtonStyle_toDiagnosticsNode,
);
const _flaxBinding142 = FlaxInstanceMethod.plain(
  _flaxBinding67,
  flaxVoidType,
  _ButtonStyle_debugFillProperties,
);
const _flaxBinding143 = <FlaxParameter>[
  FlaxParameter("alignment", _flaxBinding13, required: false),
  FlaxParameter("animationDuration", _flaxBinding130, required: false),
  FlaxParameter("backgroundBuilder", _flaxBinding136, required: false),
  FlaxParameter("backgroundColor", _flaxBinding91, required: false),
  FlaxParameter("elevation", _flaxBinding99, required: false),
  FlaxParameter("enableFeedback", flaxNullableBoolType, required: false),
  FlaxParameter("fixedSize", _flaxBinding107, required: false),
  FlaxParameter("foregroundBuilder", _flaxBinding136, required: false),
  FlaxParameter("foregroundColor", _flaxBinding91, required: false),
  FlaxParameter("iconColor", _flaxBinding91, required: false),
  FlaxParameter("iconSize", _flaxBinding99, required: false),
  FlaxParameter("maximumSize", _flaxBinding107, required: false),
  FlaxParameter("minimumSize", _flaxBinding107, required: false),
  FlaxParameter("mouseCursor", _flaxBinding126, required: false),
  FlaxParameter("overlayColor", _flaxBinding91, required: false),
  FlaxParameter("padding", _flaxBinding103, required: false),
  FlaxParameter("shadowColor", _flaxBinding91, required: false),
  FlaxParameter("shape", _flaxBinding121, required: false),
  FlaxParameter("side", _flaxBinding116, required: false),
  FlaxParameter("surfaceTintColor", _flaxBinding91, required: false),
  FlaxParameter("textStyle", _flaxBinding87, required: false),
  FlaxParameter("visualDensity", _flaxBinding128, required: false),
];
const _flaxBinding144 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ButtonStyle",
);
const _flaxBinding145 = FlaxInstanceMethod.plain(
  _flaxBinding143,
  _flaxBinding144,
  _ButtonStyle_copyWith,
);
const _flaxBinding146 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ButtonStyle",
  nullable: true,
);
const _flaxBinding147 = <FlaxParameter>[
  FlaxParameter.required("style", _flaxBinding146),
];
const _flaxBinding148 = FlaxInstanceMethod.plain(
  _flaxBinding147,
  _flaxBinding144,
  _ButtonStyle_merge,
);
const _flaxBinding149 = <FlaxParameter>[
  FlaxParameter("textStyle", _flaxBinding87, required: false),
  FlaxParameter("backgroundColor", _flaxBinding91, required: false),
  FlaxParameter("foregroundColor", _flaxBinding91, required: false),
  FlaxParameter("overlayColor", _flaxBinding91, required: false),
  FlaxParameter("shadowColor", _flaxBinding91, required: false),
  FlaxParameter("surfaceTintColor", _flaxBinding91, required: false),
  FlaxParameter("elevation", _flaxBinding99, required: false),
  FlaxParameter("padding", _flaxBinding103, required: false),
  FlaxParameter("minimumSize", _flaxBinding107, required: false),
  FlaxParameter("fixedSize", _flaxBinding107, required: false),
  FlaxParameter("maximumSize", _flaxBinding107, required: false),
  FlaxParameter("iconColor", _flaxBinding91, required: false),
  FlaxParameter("iconSize", _flaxBinding99, required: false),
  FlaxParameter("side", _flaxBinding116, required: false),
  FlaxParameter("shape", _flaxBinding121, required: false),
  FlaxParameter("mouseCursor", _flaxBinding126, required: false),
  FlaxParameter("visualDensity", _flaxBinding128, required: false),
  FlaxParameter("animationDuration", _flaxBinding130, required: false),
  FlaxParameter("enableFeedback", flaxNullableBoolType, required: false),
  FlaxParameter("alignment", _flaxBinding13, required: false),
  FlaxParameter("backgroundBuilder", _flaxBinding136, required: false),
  FlaxParameter("foregroundBuilder", _flaxBinding136, required: false),
];
const _flaxBinding150 = FlaxObjectBinding(
  "flax.material/material#type:ButtonStyle",
  [
    _flaxBinding88,
    _flaxBinding92,
    _flaxBinding93,
    _flaxBinding94,
    _flaxBinding95,
    _flaxBinding96,
    _flaxBinding100,
    _flaxBinding104,
    _flaxBinding108,
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding111,
    _flaxBinding112,
    _flaxBinding117,
    _flaxBinding122,
    _flaxBinding127,
    _flaxBinding129,
    _flaxBinding131,
    _flaxBinding132,
    _flaxBinding133,
    _flaxBinding137,
    _flaxBinding138,
  ],
  {
    "toStringShort": _flaxBinding139,
    "toString": _flaxBinding140,
    "toDiagnosticsNode": _flaxBinding141,
    "debugFillProperties": _flaxBinding142,
    "copyWith": _flaxBinding145,
    "merge": _flaxBinding148,
  },
  constructors: {"": _flaxBinding149},
  create: _createButtonStyle,
  matches: _isButtonStyle,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding151 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:FocusNode",
  nullable: true,
);
const _flaxBinding152 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api3.Animation<api5.Color?>?>,
  nullable: true,
);
const _flaxBinding153 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:StrokeCap",
  nullable: true,
);
const _flaxBinding154 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:AnimationController",
  nullable: true,
);
const _flaxBinding155 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Brightness",
);
const _flaxBinding156 = FlaxGetter.plain(
  "brightness",
  _flaxBinding155,
  _ColorScheme_brightness,
);
const _flaxBinding157 = FlaxGetter.plain(
  "primary",
  flaxColorType,
  _ColorScheme_primary,
);
const _flaxBinding158 = FlaxGetter.plain(
  "onPrimary",
  flaxColorType,
  _ColorScheme_onPrimary,
);
const _flaxBinding159 = FlaxGetter.plain(
  "primaryContainer",
  flaxColorType,
  _ColorScheme_primaryContainer,
);
const _flaxBinding160 = FlaxGetter.plain(
  "onPrimaryContainer",
  flaxColorType,
  _ColorScheme_onPrimaryContainer,
);
const _flaxBinding161 = FlaxGetter.plain(
  "primaryFixed",
  flaxColorType,
  _ColorScheme_primaryFixed,
);
const _flaxBinding162 = FlaxGetter.plain(
  "primaryFixedDim",
  flaxColorType,
  _ColorScheme_primaryFixedDim,
);
const _flaxBinding163 = FlaxGetter.plain(
  "onPrimaryFixed",
  flaxColorType,
  _ColorScheme_onPrimaryFixed,
);
const _flaxBinding164 = FlaxGetter.plain(
  "onPrimaryFixedVariant",
  flaxColorType,
  _ColorScheme_onPrimaryFixedVariant,
);
const _flaxBinding165 = FlaxGetter.plain(
  "secondary",
  flaxColorType,
  _ColorScheme_secondary,
);
const _flaxBinding166 = FlaxGetter.plain(
  "onSecondary",
  flaxColorType,
  _ColorScheme_onSecondary,
);
const _flaxBinding167 = FlaxGetter.plain(
  "secondaryContainer",
  flaxColorType,
  _ColorScheme_secondaryContainer,
);
const _flaxBinding168 = FlaxGetter.plain(
  "onSecondaryContainer",
  flaxColorType,
  _ColorScheme_onSecondaryContainer,
);
const _flaxBinding169 = FlaxGetter.plain(
  "secondaryFixed",
  flaxColorType,
  _ColorScheme_secondaryFixed,
);
const _flaxBinding170 = FlaxGetter.plain(
  "secondaryFixedDim",
  flaxColorType,
  _ColorScheme_secondaryFixedDim,
);
const _flaxBinding171 = FlaxGetter.plain(
  "onSecondaryFixed",
  flaxColorType,
  _ColorScheme_onSecondaryFixed,
);
const _flaxBinding172 = FlaxGetter.plain(
  "onSecondaryFixedVariant",
  flaxColorType,
  _ColorScheme_onSecondaryFixedVariant,
);
const _flaxBinding173 = FlaxGetter.plain(
  "tertiary",
  flaxColorType,
  _ColorScheme_tertiary,
);
const _flaxBinding174 = FlaxGetter.plain(
  "onTertiary",
  flaxColorType,
  _ColorScheme_onTertiary,
);
const _flaxBinding175 = FlaxGetter.plain(
  "tertiaryContainer",
  flaxColorType,
  _ColorScheme_tertiaryContainer,
);
const _flaxBinding176 = FlaxGetter.plain(
  "onTertiaryContainer",
  flaxColorType,
  _ColorScheme_onTertiaryContainer,
);
const _flaxBinding177 = FlaxGetter.plain(
  "tertiaryFixed",
  flaxColorType,
  _ColorScheme_tertiaryFixed,
);
const _flaxBinding178 = FlaxGetter.plain(
  "tertiaryFixedDim",
  flaxColorType,
  _ColorScheme_tertiaryFixedDim,
);
const _flaxBinding179 = FlaxGetter.plain(
  "onTertiaryFixed",
  flaxColorType,
  _ColorScheme_onTertiaryFixed,
);
const _flaxBinding180 = FlaxGetter.plain(
  "onTertiaryFixedVariant",
  flaxColorType,
  _ColorScheme_onTertiaryFixedVariant,
);
const _flaxBinding181 = FlaxGetter.plain(
  "error",
  flaxColorType,
  _ColorScheme_error,
);
const _flaxBinding182 = FlaxGetter.plain(
  "onError",
  flaxColorType,
  _ColorScheme_onError,
);
const _flaxBinding183 = FlaxGetter.plain(
  "errorContainer",
  flaxColorType,
  _ColorScheme_errorContainer,
);
const _flaxBinding184 = FlaxGetter.plain(
  "onErrorContainer",
  flaxColorType,
  _ColorScheme_onErrorContainer,
);
const _flaxBinding185 = FlaxGetter.plain(
  "surface",
  flaxColorType,
  _ColorScheme_surface,
);
const _flaxBinding186 = FlaxGetter.plain(
  "onSurface",
  flaxColorType,
  _ColorScheme_onSurface,
);
const _flaxBinding187 = FlaxGetter.plain(
  "surfaceVariant",
  flaxColorType,
  _ColorScheme_surfaceVariant,
);
const _flaxBinding188 = FlaxGetter.plain(
  "surfaceDim",
  flaxColorType,
  _ColorScheme_surfaceDim,
);
const _flaxBinding189 = FlaxGetter.plain(
  "surfaceBright",
  flaxColorType,
  _ColorScheme_surfaceBright,
);
const _flaxBinding190 = FlaxGetter.plain(
  "surfaceContainerLowest",
  flaxColorType,
  _ColorScheme_surfaceContainerLowest,
);
const _flaxBinding191 = FlaxGetter.plain(
  "surfaceContainerLow",
  flaxColorType,
  _ColorScheme_surfaceContainerLow,
);
const _flaxBinding192 = FlaxGetter.plain(
  "surfaceContainer",
  flaxColorType,
  _ColorScheme_surfaceContainer,
);
const _flaxBinding193 = FlaxGetter.plain(
  "surfaceContainerHigh",
  flaxColorType,
  _ColorScheme_surfaceContainerHigh,
);
const _flaxBinding194 = FlaxGetter.plain(
  "surfaceContainerHighest",
  flaxColorType,
  _ColorScheme_surfaceContainerHighest,
);
const _flaxBinding195 = FlaxGetter.plain(
  "onSurfaceVariant",
  flaxColorType,
  _ColorScheme_onSurfaceVariant,
);
const _flaxBinding196 = FlaxGetter.plain(
  "outline",
  flaxColorType,
  _ColorScheme_outline,
);
const _flaxBinding197 = FlaxGetter.plain(
  "outlineVariant",
  flaxColorType,
  _ColorScheme_outlineVariant,
);
const _flaxBinding198 = FlaxGetter.plain(
  "shadow",
  flaxColorType,
  _ColorScheme_shadow,
);
const _flaxBinding199 = FlaxGetter.plain(
  "scrim",
  flaxColorType,
  _ColorScheme_scrim,
);
const _flaxBinding200 = FlaxGetter.plain(
  "inverseSurface",
  flaxColorType,
  _ColorScheme_inverseSurface,
);
const _flaxBinding201 = FlaxGetter.plain(
  "onInverseSurface",
  flaxColorType,
  _ColorScheme_onInverseSurface,
);
const _flaxBinding202 = FlaxGetter.plain(
  "inversePrimary",
  flaxColorType,
  _ColorScheme_inversePrimary,
);
const _flaxBinding203 = FlaxGetter.plain(
  "surfaceTint",
  flaxColorType,
  _ColorScheme_surfaceTint,
);
const _flaxBinding204 = FlaxGetter.plain(
  "background",
  flaxColorType,
  _ColorScheme_background,
);
const _flaxBinding205 = FlaxGetter.plain(
  "onBackground",
  flaxColorType,
  _ColorScheme_onBackground,
);
const _flaxBinding206 = FlaxInstanceMethod.plain(
  _flaxBinding57,
  flaxStringType,
  _ColorScheme_toStringShort,
);
const _flaxBinding207 = FlaxInstanceMethod.plain(
  _flaxBinding60,
  flaxStringType,
  _ColorScheme_toString,
);
const _flaxBinding208 = FlaxInstanceMethod.plain(
  _flaxBinding63,
  _flaxBinding64,
  _ColorScheme_toDiagnosticsNode,
);
const _flaxBinding209 = FlaxInstanceMethod.plain(
  _flaxBinding67,
  flaxVoidType,
  _ColorScheme_debugFillProperties,
);
const _flaxBinding210 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Brightness",
  nullable: true,
);
const _flaxBinding211 = <FlaxParameter>[
  FlaxParameter("background", _flaxBinding3, required: false),
  FlaxParameter("brightness", _flaxBinding210, required: false),
  FlaxParameter("error", _flaxBinding3, required: false),
  FlaxParameter("errorContainer", _flaxBinding3, required: false),
  FlaxParameter("inversePrimary", _flaxBinding3, required: false),
  FlaxParameter("inverseSurface", _flaxBinding3, required: false),
  FlaxParameter("onBackground", _flaxBinding3, required: false),
  FlaxParameter("onError", _flaxBinding3, required: false),
  FlaxParameter("onErrorContainer", _flaxBinding3, required: false),
  FlaxParameter("onInverseSurface", _flaxBinding3, required: false),
  FlaxParameter("onPrimary", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("onSecondary", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("onSurface", _flaxBinding3, required: false),
  FlaxParameter("onSurfaceVariant", _flaxBinding3, required: false),
  FlaxParameter("onTertiary", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("outline", _flaxBinding3, required: false),
  FlaxParameter("outlineVariant", _flaxBinding3, required: false),
  FlaxParameter("primary", _flaxBinding3, required: false),
  FlaxParameter("primaryContainer", _flaxBinding3, required: false),
  FlaxParameter("primaryFixed", _flaxBinding3, required: false),
  FlaxParameter("primaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("scrim", _flaxBinding3, required: false),
  FlaxParameter("secondary", _flaxBinding3, required: false),
  FlaxParameter("secondaryContainer", _flaxBinding3, required: false),
  FlaxParameter("secondaryFixed", _flaxBinding3, required: false),
  FlaxParameter("secondaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("shadow", _flaxBinding3, required: false),
  FlaxParameter("surface", _flaxBinding3, required: false),
  FlaxParameter("surfaceBright", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainer", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerHigh", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerHighest", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerLow", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerLowest", _flaxBinding3, required: false),
  FlaxParameter("surfaceDim", _flaxBinding3, required: false),
  FlaxParameter("surfaceTint", _flaxBinding3, required: false),
  FlaxParameter("surfaceVariant", _flaxBinding3, required: false),
  FlaxParameter("tertiary", _flaxBinding3, required: false),
  FlaxParameter("tertiaryContainer", _flaxBinding3, required: false),
  FlaxParameter("tertiaryFixed", _flaxBinding3, required: false),
  FlaxParameter("tertiaryFixedDim", _flaxBinding3, required: false),
];
const _flaxBinding212 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ColorScheme",
);
const _flaxBinding213 = FlaxInstanceMethod.plain(
  _flaxBinding211,
  _flaxBinding212,
  _ColorScheme_copyWith,
);
const _flaxBinding214 = <FlaxParameter>[
  FlaxParameter.required("brightness", _flaxBinding155),
  FlaxParameter.required("primary", flaxColorType),
  FlaxParameter.required("onPrimary", flaxColorType),
  FlaxParameter("primaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryContainer", _flaxBinding3, required: false),
  FlaxParameter("primaryFixed", _flaxBinding3, required: false),
  FlaxParameter("primaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter.required("secondary", flaxColorType),
  FlaxParameter.required("onSecondary", flaxColorType),
  FlaxParameter("secondaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryContainer", _flaxBinding3, required: false),
  FlaxParameter("secondaryFixed", _flaxBinding3, required: false),
  FlaxParameter("secondaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("tertiary", _flaxBinding3, required: false),
  FlaxParameter("onTertiary", _flaxBinding3, required: false),
  FlaxParameter("tertiaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryContainer", _flaxBinding3, required: false),
  FlaxParameter("tertiaryFixed", _flaxBinding3, required: false),
  FlaxParameter("tertiaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter.required("error", flaxColorType),
  FlaxParameter.required("onError", flaxColorType),
  FlaxParameter("errorContainer", _flaxBinding3, required: false),
  FlaxParameter("onErrorContainer", _flaxBinding3, required: false),
  FlaxParameter.required("surface", flaxColorType),
  FlaxParameter.required("onSurface", flaxColorType),
  FlaxParameter("surfaceDim", _flaxBinding3, required: false),
  FlaxParameter("surfaceBright", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerLowest", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerLow", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainer", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerHigh", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerHighest", _flaxBinding3, required: false),
  FlaxParameter("onSurfaceVariant", _flaxBinding3, required: false),
  FlaxParameter("outline", _flaxBinding3, required: false),
  FlaxParameter("outlineVariant", _flaxBinding3, required: false),
  FlaxParameter("shadow", _flaxBinding3, required: false),
  FlaxParameter("scrim", _flaxBinding3, required: false),
  FlaxParameter("inverseSurface", _flaxBinding3, required: false),
  FlaxParameter("onInverseSurface", _flaxBinding3, required: false),
  FlaxParameter("inversePrimary", _flaxBinding3, required: false),
  FlaxParameter("surfaceTint", _flaxBinding3, required: false),
  FlaxParameter("background", _flaxBinding3, required: false),
  FlaxParameter("onBackground", _flaxBinding3, required: false),
  FlaxParameter("surfaceVariant", _flaxBinding3, required: false),
];
const _flaxBinding215 = <FlaxParameter>[
  FlaxParameter.required("seedColor", flaxColorType),
  FlaxParameter(
    "brightness",
    _flaxBinding155,
    required: false,
    defaultValue: api.Brightness.light,
  ),
  FlaxParameter(
    "contrastLevel",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("primary", _flaxBinding3, required: false),
  FlaxParameter("onPrimary", _flaxBinding3, required: false),
  FlaxParameter("primaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryContainer", _flaxBinding3, required: false),
  FlaxParameter("primaryFixed", _flaxBinding3, required: false),
  FlaxParameter("primaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("secondary", _flaxBinding3, required: false),
  FlaxParameter("onSecondary", _flaxBinding3, required: false),
  FlaxParameter("secondaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryContainer", _flaxBinding3, required: false),
  FlaxParameter("secondaryFixed", _flaxBinding3, required: false),
  FlaxParameter("secondaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("tertiary", _flaxBinding3, required: false),
  FlaxParameter("onTertiary", _flaxBinding3, required: false),
  FlaxParameter("tertiaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryContainer", _flaxBinding3, required: false),
  FlaxParameter("tertiaryFixed", _flaxBinding3, required: false),
  FlaxParameter("tertiaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("error", _flaxBinding3, required: false),
  FlaxParameter("onError", _flaxBinding3, required: false),
  FlaxParameter("errorContainer", _flaxBinding3, required: false),
  FlaxParameter("onErrorContainer", _flaxBinding3, required: false),
  FlaxParameter("outline", _flaxBinding3, required: false),
  FlaxParameter("outlineVariant", _flaxBinding3, required: false),
  FlaxParameter("surface", _flaxBinding3, required: false),
  FlaxParameter("onSurface", _flaxBinding3, required: false),
  FlaxParameter("surfaceDim", _flaxBinding3, required: false),
  FlaxParameter("surfaceBright", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerLowest", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerLow", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainer", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerHigh", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerHighest", _flaxBinding3, required: false),
  FlaxParameter("onSurfaceVariant", _flaxBinding3, required: false),
  FlaxParameter("inverseSurface", _flaxBinding3, required: false),
  FlaxParameter("onInverseSurface", _flaxBinding3, required: false),
  FlaxParameter("inversePrimary", _flaxBinding3, required: false),
  FlaxParameter("shadow", _flaxBinding3, required: false),
  FlaxParameter("scrim", _flaxBinding3, required: false),
  FlaxParameter("surfaceTint", _flaxBinding3, required: false),
  FlaxParameter("background", _flaxBinding3, required: false),
  FlaxParameter("onBackground", _flaxBinding3, required: false),
  FlaxParameter("surfaceVariant", _flaxBinding3, required: false),
];
const _flaxBinding216 = <FlaxParameter>[
  FlaxParameter(
    "brightness",
    _flaxBinding155,
    required: false,
    defaultValue: api.Brightness.light,
  ),
  FlaxParameter(
    "primary",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onPrimary",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("primaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryContainer", _flaxBinding3, required: false),
  FlaxParameter("primaryFixed", _flaxBinding3, required: false),
  FlaxParameter("primaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter(
    "secondary",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onSecondary",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("secondaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryContainer", _flaxBinding3, required: false),
  FlaxParameter("secondaryFixed", _flaxBinding3, required: false),
  FlaxParameter("secondaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("tertiary", _flaxBinding3, required: false),
  FlaxParameter("onTertiary", _flaxBinding3, required: false),
  FlaxParameter("tertiaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryContainer", _flaxBinding3, required: false),
  FlaxParameter("tertiaryFixed", _flaxBinding3, required: false),
  FlaxParameter("tertiaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("error", flaxColorType, required: false, omitWhenAbsent: true),
  FlaxParameter(
    "onError",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("errorContainer", _flaxBinding3, required: false),
  FlaxParameter("onErrorContainer", _flaxBinding3, required: false),
  FlaxParameter(
    "surface",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onSurface",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("surfaceDim", _flaxBinding3, required: false),
  FlaxParameter("surfaceBright", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerLowest", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerLow", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainer", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerHigh", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerHighest", _flaxBinding3, required: false),
  FlaxParameter("onSurfaceVariant", _flaxBinding3, required: false),
  FlaxParameter("outline", _flaxBinding3, required: false),
  FlaxParameter("outlineVariant", _flaxBinding3, required: false),
  FlaxParameter("shadow", _flaxBinding3, required: false),
  FlaxParameter("scrim", _flaxBinding3, required: false),
  FlaxParameter("inverseSurface", _flaxBinding3, required: false),
  FlaxParameter("onInverseSurface", _flaxBinding3, required: false),
  FlaxParameter("inversePrimary", _flaxBinding3, required: false),
  FlaxParameter("surfaceTint", _flaxBinding3, required: false),
  FlaxParameter(
    "background",
    _flaxBinding3,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onBackground",
    _flaxBinding3,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("surfaceVariant", _flaxBinding3, required: false),
];
const _flaxBinding217 = <FlaxParameter>[
  FlaxParameter(
    "brightness",
    _flaxBinding155,
    required: false,
    defaultValue: api.Brightness.dark,
  ),
  FlaxParameter(
    "primary",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onPrimary",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("primaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryContainer", _flaxBinding3, required: false),
  FlaxParameter("primaryFixed", _flaxBinding3, required: false),
  FlaxParameter("primaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter(
    "secondary",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onSecondary",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("secondaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryContainer", _flaxBinding3, required: false),
  FlaxParameter("secondaryFixed", _flaxBinding3, required: false),
  FlaxParameter("secondaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onSecondaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("tertiary", _flaxBinding3, required: false),
  FlaxParameter("onTertiary", _flaxBinding3, required: false),
  FlaxParameter("tertiaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryContainer", _flaxBinding3, required: false),
  FlaxParameter("tertiaryFixed", _flaxBinding3, required: false),
  FlaxParameter("tertiaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onTertiaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("error", flaxColorType, required: false, omitWhenAbsent: true),
  FlaxParameter(
    "onError",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("errorContainer", _flaxBinding3, required: false),
  FlaxParameter("onErrorContainer", _flaxBinding3, required: false),
  FlaxParameter(
    "surface",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onSurface",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("surfaceDim", _flaxBinding3, required: false),
  FlaxParameter("surfaceBright", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerLowest", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerLow", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainer", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerHigh", _flaxBinding3, required: false),
  FlaxParameter("surfaceContainerHighest", _flaxBinding3, required: false),
  FlaxParameter("onSurfaceVariant", _flaxBinding3, required: false),
  FlaxParameter("outline", _flaxBinding3, required: false),
  FlaxParameter("outlineVariant", _flaxBinding3, required: false),
  FlaxParameter("shadow", _flaxBinding3, required: false),
  FlaxParameter("scrim", _flaxBinding3, required: false),
  FlaxParameter("inverseSurface", _flaxBinding3, required: false),
  FlaxParameter("onInverseSurface", _flaxBinding3, required: false),
  FlaxParameter("inversePrimary", _flaxBinding3, required: false),
  FlaxParameter("surfaceTint", _flaxBinding3, required: false),
  FlaxParameter(
    "background",
    _flaxBinding3,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onBackground",
    _flaxBinding3,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("surfaceVariant", _flaxBinding3, required: false),
];
const _flaxBinding218 = <FlaxParameter>[
  FlaxParameter("accentColor", _flaxBinding3, required: false),
  FlaxParameter("cardColor", _flaxBinding3, required: false),
  FlaxParameter("backgroundColor", _flaxBinding3, required: false),
  FlaxParameter("errorColor", _flaxBinding3, required: false),
  FlaxParameter(
    "brightness",
    _flaxBinding155,
    required: false,
    defaultValue: api.Brightness.light,
  ),
];
const _flaxBinding219 = FlaxObjectBinding(
  "flax.material/material#type:ColorScheme",
  [
    _flaxBinding156,
    _flaxBinding157,
    _flaxBinding158,
    _flaxBinding159,
    _flaxBinding160,
    _flaxBinding161,
    _flaxBinding162,
    _flaxBinding163,
    _flaxBinding164,
    _flaxBinding165,
    _flaxBinding166,
    _flaxBinding167,
    _flaxBinding168,
    _flaxBinding169,
    _flaxBinding170,
    _flaxBinding171,
    _flaxBinding172,
    _flaxBinding173,
    _flaxBinding174,
    _flaxBinding175,
    _flaxBinding176,
    _flaxBinding177,
    _flaxBinding178,
    _flaxBinding179,
    _flaxBinding180,
    _flaxBinding181,
    _flaxBinding182,
    _flaxBinding183,
    _flaxBinding184,
    _flaxBinding185,
    _flaxBinding186,
    _flaxBinding187,
    _flaxBinding188,
    _flaxBinding189,
    _flaxBinding190,
    _flaxBinding191,
    _flaxBinding192,
    _flaxBinding193,
    _flaxBinding194,
    _flaxBinding195,
    _flaxBinding196,
    _flaxBinding197,
    _flaxBinding198,
    _flaxBinding199,
    _flaxBinding200,
    _flaxBinding201,
    _flaxBinding202,
    _flaxBinding203,
    _flaxBinding204,
    _flaxBinding205,
  ],
  {
    "toStringShort": _flaxBinding206,
    "toString": _flaxBinding207,
    "toDiagnosticsNode": _flaxBinding208,
    "debugFillProperties": _flaxBinding209,
    "copyWith": _flaxBinding213,
  },
  constructors: {
    "": _flaxBinding214,
    "fromSeed": _flaxBinding215,
    "light": _flaxBinding216,
    "dark": _flaxBinding217,
    "highContrastLight": _flaxBinding216,
    "highContrastDark": _flaxBinding217,
    "fromSwatch": _flaxBinding218,
  },
  create: _createColorScheme,
  matches: _isColorScheme,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding220 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BorderRadiusGeometry",
  nullable: true,
);
const _flaxBinding221 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:WidgetStatesController",
  nullable: true,
);
const _flaxBinding222 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_gestures#type:TapDownDetails",
);
const _flaxBinding223 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("details", _flaxBinding222)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api7.TapDownDetails>,
  id: "callback:<>(p:r:details:object:flax.core/sdk_gestures#type:TapDownDetails)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api7.TapDownDetails>,
  matches: FlaxCallbackAdapters.matchesVoid1<api7.TapDownDetails>,
);
const _flaxBinding224 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding223,
);
const _flaxBinding225 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_gestures#type:TapUpDetails",
);
const _flaxBinding226 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("details", _flaxBinding225)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api7.TapUpDetails>,
  id: "callback:<>(p:r:details:object:flax.core/sdk_gestures#type:TapUpDetails)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api7.TapUpDetails>,
  matches: FlaxCallbackAdapters.matchesVoid1<api7.TapUpDetails>,
);
const _flaxBinding227 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding226,
);
const _flaxBinding228 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BorderRadius",
  nullable: true,
);
const _flaxBinding229 = FlaxGetter.plain(
  "icon",
  _flaxBinding1,
  _InputDecoration_icon,
);
const _flaxBinding230 = FlaxGetter.plain(
  "iconColor",
  _flaxBinding3,
  _InputDecoration_iconColor,
);
const _flaxBinding231 = FlaxGetter.plain(
  "label",
  _flaxBinding1,
  _InputDecoration_label,
);
const _flaxBinding232 = FlaxGetter.plain(
  "labelText",
  flaxNullableStringType,
  _InputDecoration_labelText,
);
const _flaxBinding233 = FlaxGetter.plain(
  "labelStyle",
  _flaxBinding4,
  _InputDecoration_labelStyle,
);
const _flaxBinding234 = FlaxGetter.plain(
  "floatingLabelStyle",
  _flaxBinding4,
  _InputDecoration_floatingLabelStyle,
);
const _flaxBinding235 = FlaxGetter.plain(
  "helper",
  _flaxBinding1,
  _InputDecoration_helper,
);
const _flaxBinding236 = FlaxGetter.plain(
  "helperText",
  flaxNullableStringType,
  _InputDecoration_helperText,
);
const _flaxBinding237 = FlaxGetter.plain(
  "helperStyle",
  _flaxBinding4,
  _InputDecoration_helperStyle,
);
const _flaxBinding238 = FlaxGetter.plain(
  "helperMaxLines",
  flaxNullableIntType,
  _InputDecoration_helperMaxLines,
);
const _flaxBinding239 = FlaxGetter.plain(
  "hintText",
  flaxNullableStringType,
  _InputDecoration_hintText,
);
const _flaxBinding240 = FlaxGetter.plain(
  "hint",
  _flaxBinding1,
  _InputDecoration_hint,
);
const _flaxBinding241 = FlaxGetter.plain(
  "hintStyle",
  _flaxBinding4,
  _InputDecoration_hintStyle,
);
const _flaxBinding242 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextDirection",
  nullable: true,
);
const _flaxBinding243 = FlaxGetter.plain(
  "hintTextDirection",
  _flaxBinding242,
  _InputDecoration_hintTextDirection,
);
const _flaxBinding244 = FlaxGetter.plain(
  "hintMaxLines",
  flaxNullableIntType,
  _InputDecoration_hintMaxLines,
);
const _flaxBinding245 = FlaxGetter.plain(
  "hintFadeDuration",
  _flaxBinding130,
  _InputDecoration_hintFadeDuration,
);
const _flaxBinding246 = FlaxGetter.plain(
  "maintainHintHeight",
  flaxBoolType,
  _InputDecoration_maintainHintHeight,
);
const _flaxBinding247 = FlaxGetter.plain(
  "maintainHintSize",
  flaxBoolType,
  _InputDecoration_maintainHintSize,
);
const _flaxBinding248 = FlaxGetter.plain(
  "maintainLabelSize",
  flaxBoolType,
  _InputDecoration_maintainLabelSize,
);
const _flaxBinding249 = FlaxGetter.plain(
  "error",
  _flaxBinding1,
  _InputDecoration_error,
);
const _flaxBinding250 = FlaxGetter.plain(
  "errorText",
  flaxNullableStringType,
  _InputDecoration_errorText,
);
const _flaxBinding251 = FlaxGetter.plain(
  "errorStyle",
  _flaxBinding4,
  _InputDecoration_errorStyle,
);
const _flaxBinding252 = FlaxGetter.plain(
  "errorMaxLines",
  flaxNullableIntType,
  _InputDecoration_errorMaxLines,
);
const _flaxBinding253 = FlaxGetter.plain(
  "isDense",
  flaxNullableBoolType,
  _InputDecoration_isDense,
);
const _flaxBinding254 = FlaxGetter.plain(
  "contentPadding",
  _flaxBinding2,
  _InputDecoration_contentPadding,
);
const _flaxBinding255 = FlaxGetter.plain(
  "isCollapsed",
  flaxNullableBoolType,
  _InputDecoration_isCollapsed,
);
const _flaxBinding256 = FlaxGetter.plain(
  "prefixIcon",
  _flaxBinding1,
  _InputDecoration_prefixIcon,
);
const _flaxBinding257 = FlaxGetter.plain(
  "prefixIconConstraints",
  _flaxBinding14,
  _InputDecoration_prefixIconConstraints,
);
const _flaxBinding258 = FlaxGetter.plain(
  "prefix",
  _flaxBinding1,
  _InputDecoration_prefix,
);
const _flaxBinding259 = FlaxGetter.plain(
  "prefixText",
  flaxNullableStringType,
  _InputDecoration_prefixText,
);
const _flaxBinding260 = FlaxGetter.plain(
  "prefixStyle",
  _flaxBinding4,
  _InputDecoration_prefixStyle,
);
const _flaxBinding261 = FlaxGetter.plain(
  "prefixIconColor",
  _flaxBinding3,
  _InputDecoration_prefixIconColor,
);
const _flaxBinding262 = FlaxGetter.plain(
  "suffixIcon",
  _flaxBinding1,
  _InputDecoration_suffixIcon,
);
const _flaxBinding263 = FlaxGetter.plain(
  "suffix",
  _flaxBinding1,
  _InputDecoration_suffix,
);
const _flaxBinding264 = FlaxGetter.plain(
  "suffixText",
  flaxNullableStringType,
  _InputDecoration_suffixText,
);
const _flaxBinding265 = FlaxGetter.plain(
  "suffixStyle",
  _flaxBinding4,
  _InputDecoration_suffixStyle,
);
const _flaxBinding266 = FlaxGetter.plain(
  "suffixIconColor",
  _flaxBinding3,
  _InputDecoration_suffixIconColor,
);
const _flaxBinding267 = FlaxGetter.plain(
  "suffixIconConstraints",
  _flaxBinding14,
  _InputDecoration_suffixIconConstraints,
);
const _flaxBinding268 = FlaxGetter.plain(
  "counterText",
  flaxNullableStringType,
  _InputDecoration_counterText,
);
const _flaxBinding269 = FlaxGetter.plain(
  "counter",
  _flaxBinding1,
  _InputDecoration_counter,
);
const _flaxBinding270 = FlaxGetter.plain(
  "counterStyle",
  _flaxBinding4,
  _InputDecoration_counterStyle,
);
const _flaxBinding271 = FlaxGetter.plain(
  "filled",
  flaxNullableBoolType,
  _InputDecoration_filled,
);
const _flaxBinding272 = FlaxGetter.plain(
  "fillColor",
  _flaxBinding3,
  _InputDecoration_fillColor,
);
const _flaxBinding273 = FlaxGetter.plain(
  "focusColor",
  _flaxBinding3,
  _InputDecoration_focusColor,
);
const _flaxBinding274 = FlaxGetter.plain(
  "hoverColor",
  _flaxBinding3,
  _InputDecoration_hoverColor,
);
const _flaxBinding275 = FlaxGetter.plain(
  "enabled",
  flaxBoolType,
  _InputDecoration_enabled,
);
const _flaxBinding276 = FlaxGetter.plain(
  "semanticCounterText",
  flaxNullableStringType,
  _InputDecoration_semanticCounterText,
);
const _flaxBinding277 = FlaxGetter.plain(
  "alignLabelWithHint",
  flaxNullableBoolType,
  _InputDecoration_alignLabelWithHint,
);
const _flaxBinding278 = FlaxGetter.plain(
  "constraints",
  _flaxBinding14,
  _InputDecoration_constraints,
);
const _flaxBinding279 = FlaxGetter.plain(
  "visualDensity",
  _flaxBinding128,
  _InputDecoration_visualDensity,
);
const _flaxBinding280 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsService",
  nullable: true,
);
const _flaxBinding281 = <FlaxParameter>[
  FlaxParameter("alignLabelWithHint", flaxNullableBoolType, required: false),
  FlaxParameter("constraints", _flaxBinding14, required: false),
  FlaxParameter("contentPadding", _flaxBinding2, required: false),
  FlaxParameter("counter", _flaxBinding1, required: false),
  FlaxParameter("counterStyle", _flaxBinding4, required: false),
  FlaxParameter("counterText", flaxNullableStringType, required: false),
  FlaxParameter("enabled", flaxNullableBoolType, required: false),
  FlaxParameter("error", _flaxBinding1, required: false),
  FlaxParameter("errorMaxLines", flaxNullableIntType, required: false),
  FlaxParameter("errorStyle", _flaxBinding4, required: false),
  FlaxParameter("errorText", flaxNullableStringType, required: false),
  FlaxParameter("fillColor", _flaxBinding3, required: false),
  FlaxParameter("filled", flaxNullableBoolType, required: false),
  FlaxParameter("floatingLabelStyle", _flaxBinding4, required: false),
  FlaxParameter("focusColor", _flaxBinding3, required: false),
  FlaxParameter("helper", _flaxBinding1, required: false),
  FlaxParameter("helperMaxLines", flaxNullableIntType, required: false),
  FlaxParameter("helperStyle", _flaxBinding4, required: false),
  FlaxParameter("helperText", flaxNullableStringType, required: false),
  FlaxParameter("hint", _flaxBinding1, required: false),
  FlaxParameter("hintFadeDuration", _flaxBinding130, required: false),
  FlaxParameter("hintMaxLines", flaxNullableIntType, required: false),
  FlaxParameter("hintStyle", _flaxBinding4, required: false),
  FlaxParameter("hintText", flaxNullableStringType, required: false),
  FlaxParameter("hintTextDirection", _flaxBinding242, required: false),
  FlaxParameter("hoverColor", _flaxBinding3, required: false),
  FlaxParameter("icon", _flaxBinding1, required: false),
  FlaxParameter("iconColor", _flaxBinding3, required: false),
  FlaxParameter("isCollapsed", flaxNullableBoolType, required: false),
  FlaxParameter("isDense", flaxNullableBoolType, required: false),
  FlaxParameter("label", _flaxBinding1, required: false),
  FlaxParameter("labelStyle", _flaxBinding4, required: false),
  FlaxParameter("labelText", flaxNullableStringType, required: false),
  FlaxParameter("maintainHintHeight", flaxNullableBoolType, required: false),
  FlaxParameter("maintainHintSize", flaxNullableBoolType, required: false),
  FlaxParameter("maintainLabelSize", flaxNullableBoolType, required: false),
  FlaxParameter("prefix", _flaxBinding1, required: false),
  FlaxParameter("prefixIcon", _flaxBinding1, required: false),
  FlaxParameter("prefixIconColor", _flaxBinding3, required: false),
  FlaxParameter("prefixIconConstraints", _flaxBinding14, required: false),
  FlaxParameter("prefixStyle", _flaxBinding4, required: false),
  FlaxParameter("prefixText", flaxNullableStringType, required: false),
  FlaxParameter("semanticCounterText", flaxNullableStringType, required: false),
  FlaxParameter("semanticsService", _flaxBinding280, required: false),
  FlaxParameter("suffix", _flaxBinding1, required: false),
  FlaxParameter("suffixIcon", _flaxBinding1, required: false),
  FlaxParameter("suffixIconColor", _flaxBinding3, required: false),
  FlaxParameter("suffixIconConstraints", _flaxBinding14, required: false),
  FlaxParameter("suffixStyle", _flaxBinding4, required: false),
  FlaxParameter("suffixText", flaxNullableStringType, required: false),
  FlaxParameter("visualDensity", _flaxBinding128, required: false),
];
const _flaxBinding282 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:InputDecoration",
);
const _flaxBinding283 = FlaxInstanceMethod.plain(
  _flaxBinding281,
  _flaxBinding282,
  _InputDecoration_copyWith,
);
const _flaxBinding284 = <FlaxParameter>[
  FlaxParameter.required("inputDecorationTheme", flaxAnyType),
];
const _flaxBinding285 = FlaxInstanceMethod.plain(
  _flaxBinding284,
  _flaxBinding282,
  _InputDecoration_applyDefaults,
);
const _flaxBinding286 = FlaxInstanceMethod.plain(
  _flaxBinding57,
  flaxStringType,
  _InputDecoration_toString,
);
const _flaxBinding287 = <FlaxParameter>[
  FlaxParameter("icon", _flaxBinding1, required: false),
  FlaxParameter("iconColor", _flaxBinding3, required: false),
  FlaxParameter("label", _flaxBinding1, required: false),
  FlaxParameter("labelText", flaxNullableStringType, required: false),
  FlaxParameter("labelStyle", _flaxBinding4, required: false),
  FlaxParameter("floatingLabelStyle", _flaxBinding4, required: false),
  FlaxParameter("helper", _flaxBinding1, required: false),
  FlaxParameter("helperText", flaxNullableStringType, required: false),
  FlaxParameter("helperStyle", _flaxBinding4, required: false),
  FlaxParameter("helperMaxLines", flaxNullableIntType, required: false),
  FlaxParameter("hintText", flaxNullableStringType, required: false),
  FlaxParameter("hint", _flaxBinding1, required: false),
  FlaxParameter("hintStyle", _flaxBinding4, required: false),
  FlaxParameter("hintTextDirection", _flaxBinding242, required: false),
  FlaxParameter("hintMaxLines", flaxNullableIntType, required: false),
  FlaxParameter("hintFadeDuration", _flaxBinding130, required: false),
  FlaxParameter(
    "maintainHintHeight",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "maintainHintSize",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "maintainLabelSize",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("error", _flaxBinding1, required: false),
  FlaxParameter("errorText", flaxNullableStringType, required: false),
  FlaxParameter("errorStyle", _flaxBinding4, required: false),
  FlaxParameter("errorMaxLines", flaxNullableIntType, required: false),
  FlaxParameter("isCollapsed", flaxNullableBoolType, required: false),
  FlaxParameter("isDense", flaxNullableBoolType, required: false),
  FlaxParameter("contentPadding", _flaxBinding2, required: false),
  FlaxParameter("prefixIcon", _flaxBinding1, required: false),
  FlaxParameter("prefixIconConstraints", _flaxBinding14, required: false),
  FlaxParameter("prefix", _flaxBinding1, required: false),
  FlaxParameter("prefixText", flaxNullableStringType, required: false),
  FlaxParameter("prefixStyle", _flaxBinding4, required: false),
  FlaxParameter("prefixIconColor", _flaxBinding3, required: false),
  FlaxParameter("suffixIcon", _flaxBinding1, required: false),
  FlaxParameter("suffix", _flaxBinding1, required: false),
  FlaxParameter("suffixText", flaxNullableStringType, required: false),
  FlaxParameter("suffixStyle", _flaxBinding4, required: false),
  FlaxParameter("suffixIconColor", _flaxBinding3, required: false),
  FlaxParameter("suffixIconConstraints", _flaxBinding14, required: false),
  FlaxParameter("counter", _flaxBinding1, required: false),
  FlaxParameter("counterText", flaxNullableStringType, required: false),
  FlaxParameter("counterStyle", _flaxBinding4, required: false),
  FlaxParameter("filled", flaxNullableBoolType, required: false),
  FlaxParameter("fillColor", _flaxBinding3, required: false),
  FlaxParameter("focusColor", _flaxBinding3, required: false),
  FlaxParameter("hoverColor", _flaxBinding3, required: false),
  FlaxParameter("enabled", flaxBoolType, required: false, defaultValue: true),
  FlaxParameter("semanticCounterText", flaxNullableStringType, required: false),
  FlaxParameter("alignLabelWithHint", flaxNullableBoolType, required: false),
  FlaxParameter("constraints", _flaxBinding14, required: false),
  FlaxParameter("visualDensity", _flaxBinding128, required: false),
];
const _flaxBinding288 = <FlaxParameter>[
  FlaxParameter.required("hintText", flaxNullableStringType),
  FlaxParameter("hintStyle", _flaxBinding4, required: false),
  FlaxParameter("hint", _flaxBinding1, required: false),
  FlaxParameter("hintTextDirection", _flaxBinding242, required: false),
  FlaxParameter("hintMaxLines", flaxNullableIntType, required: false),
  FlaxParameter("hintFadeDuration", _flaxBinding130, required: false),
  FlaxParameter(
    "maintainHintHeight",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "maintainHintSize",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "maintainLabelSize",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "filled",
    flaxNullableBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("fillColor", _flaxBinding3, required: false),
  FlaxParameter("focusColor", _flaxBinding3, required: false),
  FlaxParameter("hoverColor", _flaxBinding3, required: false),
  FlaxParameter("enabled", flaxBoolType, required: false, defaultValue: true),
  FlaxParameter("constraints", _flaxBinding14, required: false),
];
const _flaxBinding289 = FlaxObjectBinding(
  "flax.material/material#type:InputDecoration",
  [
    _flaxBinding229,
    _flaxBinding230,
    _flaxBinding231,
    _flaxBinding232,
    _flaxBinding233,
    _flaxBinding234,
    _flaxBinding235,
    _flaxBinding236,
    _flaxBinding237,
    _flaxBinding238,
    _flaxBinding239,
    _flaxBinding240,
    _flaxBinding241,
    _flaxBinding243,
    _flaxBinding244,
    _flaxBinding245,
    _flaxBinding246,
    _flaxBinding247,
    _flaxBinding248,
    _flaxBinding249,
    _flaxBinding250,
    _flaxBinding251,
    _flaxBinding252,
    _flaxBinding253,
    _flaxBinding254,
    _flaxBinding255,
    _flaxBinding256,
    _flaxBinding257,
    _flaxBinding258,
    _flaxBinding259,
    _flaxBinding260,
    _flaxBinding261,
    _flaxBinding262,
    _flaxBinding263,
    _flaxBinding264,
    _flaxBinding265,
    _flaxBinding266,
    _flaxBinding267,
    _flaxBinding268,
    _flaxBinding269,
    _flaxBinding270,
    _flaxBinding271,
    _flaxBinding272,
    _flaxBinding273,
    _flaxBinding274,
    _flaxBinding275,
    _flaxBinding276,
    _flaxBinding277,
    _flaxBinding278,
    _flaxBinding279,
  ],
  {
    "copyWith": _flaxBinding283,
    "applyDefaults": _flaxBinding285,
    "toString": _flaxBinding286,
  },
  constructors: {"": _flaxBinding287, "collapsed": _flaxBinding288},
  create: _createInputDecoration,
  matches: _isInputDecoration,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding290 = FlaxTypeRef(
  "enum",
  id: "flax.material/material#type:ListTileStyle",
  nullable: true,
);
const _flaxBinding291 = FlaxTypeRef(
  "enum",
  id: "flax.material/material#type:MaterialType",
);
const _flaxBinding292 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:GlobalKey",
  dartType: FlaxDartTypes.typeOf<api1.GlobalKey<api1.NavigatorState>?>,
  nullable: true,
);
const _flaxBinding293 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("context", _flaxBinding134)],
  flaxWidgetType,
  FlaxCallbackAdapters.wrap1<api1.BuildContext, api1.Widget>,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
  invoke: FlaxCallbackAdapters.invoke1<api1.BuildContext, api1.Widget>,
  matches: FlaxCallbackAdapters.matches1<api1.BuildContext, api1.Widget>,
);
const _flaxBinding294 = FlaxTypeRef("callback", callback: _flaxBinding293);
const _flaxBinding295 = FlaxTypeRef(
  "map",
  item: _flaxBinding294,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:][String:]",
    _collection6Create,
    _collection6Matches,
  ),
);
const _flaxBinding296 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:RouteSettings",
);
const _flaxBinding297 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Route",
  dartType: FlaxDartTypes.typeOf<api1.Route<Object?>?>,
  nullable: true,
);
const _flaxBinding298 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("settings", _flaxBinding296)],
  _flaxBinding297,
  FlaxCallbackAdapters.wrap1<api1.RouteSettings, api1.Route<Object?>?>,
  id: "callback:<>(p:r:settings:object:flax.core/flutter#type:RouteSettings)->object?:flax.core/flutter#type:Route<Object?><any?:>",
  invoke:
      FlaxCallbackAdapters.invoke1<api1.RouteSettings, api1.Route<Object?>?>,
  matches:
      FlaxCallbackAdapters.matches1<api1.RouteSettings, api1.Route<Object?>?>,
);
const _flaxBinding299 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding298,
);
const _flaxBinding300 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Route",
  dartType: FlaxDartTypes.typeOf<api1.Route<Object?>>,
);
const _flaxBinding301 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding300,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:Route<Object?><any?:>]",
    _collection8Create,
    _collection8Matches,
    restore: _collection8Restore,
  ),
);
const _flaxBinding302 = FlaxTypeRef(
  "list",
  item: _flaxBinding300,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Route<Object?><any?:>]",
    _collection7Create,
    _collection7Matches,
  ),
  iterable: _flaxBinding301,
);
const _flaxBinding303 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("initialRoute", flaxStringType)],
  _flaxBinding302,
  FlaxCallbackAdapters.wrap1<String, List<api1.Route<Object?>>>,
  id: "callback:<>(p:r:initialRoute:String:)->list:[object:flax.core/flutter#type:Route<Object?><any?:>]",
  invoke: FlaxCallbackAdapters.invoke1<String, List<api1.Route<Object?>>>,
  matches: FlaxCallbackAdapters.matches1<String, List<api1.Route<Object?>>>,
);
const _flaxBinding304 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding303,
);
const _flaxBinding305 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:NavigationNotification",
);
const _flaxBinding306 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("notification", _flaxBinding305)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<api1.NavigationNotification, bool>,
  id: "callback:<>(p:r:notification:object:flax.core/sdk_widgets#type:NavigationNotification)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api1.NavigationNotification, bool>,
  matches: FlaxCallbackAdapters.matches1<api1.NavigationNotification, bool>,
);
const _flaxBinding307 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding306,
);
const _flaxBinding308 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:NavigatorObserver",
);
const _flaxBinding309 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding308,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:NavigatorObserver]",
    _collection10Create,
    _collection10Matches,
    restore: _collection10Restore,
  ),
);
const _flaxBinding310 = FlaxTypeRef(
  "list",
  item: _flaxBinding308,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:NavigatorObserver]",
    _collection9Create,
    _collection9Matches,
  ),
  iterable: _flaxBinding309,
);
const _flaxBinding311 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("context", _flaxBinding134),
    FlaxCallbackParameter.plain("child", _flaxBinding1),
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
const _flaxBinding312 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding311,
);
const _flaxBinding313 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("context", _flaxBinding134)],
  flaxStringType,
  FlaxCallbackAdapters.wrap1<api1.BuildContext, String>,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->String:",
  invoke: FlaxCallbackAdapters.invoke1<api1.BuildContext, String>,
  matches: FlaxCallbackAdapters.matches1<api1.BuildContext, String>,
);
const _flaxBinding314 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding313,
);
const _flaxBinding315 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ThemeData",
  nullable: true,
);
const _flaxBinding316 = FlaxTypeRef(
  "enum",
  id: "flax.material/material#type:ThemeMode",
  nullable: true,
);
const _flaxBinding317 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
  nullable: true,
);
const _flaxBinding318 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:LocalizationsDelegate",
  dartType: FlaxDartTypes.typeOf<api1.LocalizationsDelegate<Object?>>,
);
const _flaxBinding319 = FlaxTypeRef(
  "iterable",
  nullable: true,
  item: _flaxBinding318,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_widgets#type:LocalizationsDelegate<Object?><any?:>]",
    _collection11Create,
    _collection11Matches,
    restore: _collection11Restore,
  ),
);
const _flaxBinding320 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding321 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding320,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection13Create,
    _collection13Matches,
    restore: _collection13Restore,
  ),
);
const _flaxBinding322 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding320,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection12Create,
    _collection12Matches,
  ),
  iterable: _flaxBinding321,
);
const _flaxBinding323 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("locales", _flaxBinding322),
    FlaxCallbackParameter.plain("supportedLocales", _flaxBinding321),
  ],
  _flaxBinding317,
  FlaxCallbackAdapters
      .wrap2<List<api5.Locale>?, Iterable<api5.Locale>, api5.Locale?>,
  id: "callback:<>(p:r:locales:list?:[object:flax.core/sdk_dart_ui#type:Locale],p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
  invoke: FlaxCallbackAdapters
      .invoke2<List<api5.Locale>?, Iterable<api5.Locale>, api5.Locale?>,
  matches: FlaxCallbackAdapters
      .matches2<List<api5.Locale>?, Iterable<api5.Locale>, api5.Locale?>,
);
const _flaxBinding324 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding323,
);
const _flaxBinding325 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("locale", _flaxBinding317),
    FlaxCallbackParameter.plain("supportedLocales", _flaxBinding321),
  ],
  _flaxBinding317,
  FlaxCallbackAdapters.wrap2<api5.Locale?, Iterable<api5.Locale>, api5.Locale?>,
  id: "callback:<>(p:r:locale:object?:flax.core/sdk_dart_ui#type:Locale,p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
  invoke: FlaxCallbackAdapters
      .invoke2<api5.Locale?, Iterable<api5.Locale>, api5.Locale?>,
  matches: FlaxCallbackAdapters
      .matches2<api5.Locale?, Iterable<api5.Locale>, api5.Locale?>,
);
const _flaxBinding326 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding325,
);
const _flaxBinding327 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:Intent",
);
const _flaxBinding328 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ShortcutActivator",
);
const _flaxBinding329 = FlaxTypeRef(
  "map",
  nullable: true,
  item: _flaxBinding327,
  key: _flaxBinding328,
  collection: FlaxCollectionBinding(
    "map:[object:flax.core/sdk_widgets#type:Intent][object:flax.core/sdk_widgets#type:ShortcutActivator]",
    _collection14Create,
    _collection14Matches,
  ),
);
const _flaxBinding330 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:Action",
  dartType: FlaxDartTypes.typeOf<api1.Action<api1.Intent>>,
);
const _flaxBinding331 = FlaxTypeRef(
  "map",
  nullable: true,
  item: _flaxBinding330,
  key: flaxTypeType,
  collection: FlaxCollectionBinding(
    "map:[object:flax.core/sdk_widgets#type:Action<Intent><object:flax.core/sdk_widgets#type:Intent>][object:flax.core/flutter#type:Type]",
    _collection15Create,
    _collection15Matches,
  ),
);
const _flaxBinding332 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ScrollBehavior",
  nullable: true,
);
const _flaxBinding333 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:AnimationStyle",
  nullable: true,
);
const _flaxBinding334 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouteInformationProvider",
  nullable: true,
);
const _flaxBinding335 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouteInformationParser",
  dartType: FlaxDartTypes.typeOf<api1.RouteInformationParser<Object>?>,
  nullable: true,
);
const _flaxBinding336 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouterDelegate",
  dartType: FlaxDartTypes.typeOf<api1.RouterDelegate<Object>?>,
  nullable: true,
);
const _flaxBinding337 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouterConfig",
  dartType: FlaxDartTypes.typeOf<api1.RouterConfig<Object>?>,
  nullable: true,
);
const _flaxBinding338 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:BackButtonDispatcher",
  nullable: true,
);
const _flaxBinding339 = FlaxGetter.plain(
  "name",
  flaxNullableStringType,
  _MaterialPage_name,
);
const _flaxBinding340 = FlaxGetter.plain(
  "arguments",
  flaxNullableAnyType,
  _MaterialPage_arguments,
);
const _flaxBinding341 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:LocalKey",
  nullable: true,
);
const _flaxBinding342 = FlaxGetter.plain(
  "key",
  _flaxBinding341,
  _MaterialPage_key,
);
const _flaxBinding343 = FlaxGetter.plain(
  "restorationId",
  flaxNullableStringType,
  _MaterialPage_restorationId,
);
const _flaxBinding344 = FlaxGetter.plain(
  "canPop",
  flaxBoolType,
  _MaterialPage_canPop,
);
const _flaxBinding345 = FlaxGetter.plain(
  "child",
  flaxWidgetType,
  _MaterialPage_child,
);
const _flaxBinding346 = FlaxGetter.plain(
  "maintainState",
  flaxBoolType,
  _MaterialPage_maintainState,
);
const _flaxBinding347 = FlaxGetter.plain(
  "fullscreenDialog",
  flaxBoolType,
  _MaterialPage_fullscreenDialog,
);
const _flaxBinding348 = FlaxGetter.plain(
  "allowSnapshotting",
  flaxBoolType,
  _MaterialPage_allowSnapshotting,
);
const _flaxBinding349 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Page",
  dartType: FlaxDartTypes.typeOf<api1.Page<Object?>>,
);
const _flaxBinding350 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding349),
];
const _flaxBinding351 = <FlaxParameter>[
  FlaxParameter.required("context", _flaxBinding134),
];
const _flaxBinding352 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("didPop", flaxBoolType),
    FlaxCallbackParameter.plain("result", flaxNullableAnyType),
  ],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid2<bool, Object?>,
  id: "callback:<>(p:r:didPop:bool:,p:r:result:any?:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid2<bool, Object?>,
  matches: FlaxCallbackAdapters.matchesVoid2<bool, Object?>,
);
const _flaxBinding353 = FlaxTypeRef("callback", callback: _flaxBinding352);
const _flaxBinding354 = <FlaxParameter>[
  FlaxParameter.required("child", flaxWidgetType),
  FlaxParameter(
    "maintainState",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "fullscreenDialog",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "allowSnapshotting",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("key", _flaxBinding341, required: false),
  FlaxParameter("canPop", flaxBoolType, required: false, defaultValue: true),
  FlaxParameter(
    "onPopInvoked",
    _flaxBinding353,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("name", flaxNullableStringType, required: false),
  FlaxParameter("arguments", flaxNullableAnyType, required: false),
  FlaxParameter("restorationId", flaxNullableStringType, required: false),
];
const _flaxBinding355 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ImageFilter",
  nullable: true,
);
const _flaxBinding356 = FlaxGetter.plain(
  "filter",
  _flaxBinding355,
  _MaterialPageRoute_filter,
);
const _flaxBinding357 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_widgets#type:TraversalEdgeBehavior",
  nullable: true,
);
const _flaxBinding358 = FlaxGetter.plain(
  "traversalEdgeBehavior",
  _flaxBinding357,
  _MaterialPageRoute_traversalEdgeBehavior,
);
const _flaxBinding359 = FlaxGetter.plain(
  "directionalTraversalEdgeBehavior",
  _flaxBinding357,
  _MaterialPageRoute_directionalTraversalEdgeBehavior,
);
const _flaxBinding360 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api3.Animation<double>>,
);
const _flaxBinding361 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("context", _flaxBinding134),
    FlaxCallbackParameter.plain("animation", _flaxBinding360),
    FlaxCallbackParameter.plain("secondaryAnimation", _flaxBinding360),
    FlaxCallbackParameter.plain("allowSnapshotting", flaxBoolType),
    FlaxCallbackParameter.plain("child", _flaxBinding1),
  ],
  _flaxBinding1,
  _callback2,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:animation:object:flax.core/sdk_animation#type:Animation<Object?><double:>,p:r:secondaryAnimation:object:flax.core/sdk_animation#type:Animation<Object?><double:>,p:r:allowSnapshotting:bool:,p:r:child:widget?:)->widget?:",
  invoke: _callback2Invoke,
  matches: _callback2Matches,
);
const _flaxBinding362 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding361,
);
const _flaxBinding363 = FlaxGetter.plain(
  "delegatedTransition",
  _flaxBinding362,
  _MaterialPageRoute_delegatedTransition,
);
const _flaxBinding364 = FlaxGetter.plain(
  "receivedTransition",
  _flaxBinding362,
  _MaterialPageRoute_receivedTransition,
);
const _flaxBinding365 = FlaxGetter.plain(
  "barrierDismissible",
  flaxBoolType,
  _MaterialPageRoute_barrierDismissible,
);
const _flaxBinding366 = FlaxGetter.plain(
  "semanticsDismissible",
  flaxBoolType,
  _MaterialPageRoute_semanticsDismissible,
);
const _flaxBinding367 = FlaxGetter.plain(
  "barrierColor",
  _flaxBinding3,
  _MaterialPageRoute_barrierColor,
);
const _flaxBinding368 = FlaxGetter.plain(
  "barrierLabel",
  flaxNullableStringType,
  _MaterialPageRoute_barrierLabel,
);
const _flaxBinding369 = FlaxGetter.plain(
  "barrierCurve",
  flaxCurveType,
  _MaterialPageRoute_barrierCurve,
);
const _flaxBinding370 = FlaxGetter.plain(
  "maintainState",
  flaxBoolType,
  _MaterialPageRoute_maintainState,
);
const _flaxBinding371 = FlaxGetter.plain(
  "popGestureInProgress",
  flaxBoolType,
  _MaterialPageRoute_popGestureInProgress,
);
const _flaxBinding372 = FlaxGetter.plain(
  "popGestureEnabled",
  flaxBoolType,
  _MaterialPageRoute_popGestureEnabled,
);
const _flaxBinding373 = FlaxGetter.plain(
  "offstage",
  flaxBoolType,
  _MaterialPageRoute_offstage,
);
const _flaxBinding374 = FlaxTypeRef(
  "context",
  id: "flax.core/flutter#type:BuildContext",
  nullable: true,
);
const _flaxBinding375 = FlaxGetter.plain(
  "subtreeContext",
  _flaxBinding374,
  _MaterialPageRoute_subtreeContext,
);
const _flaxBinding376 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api3.Animation<double>?>,
  nullable: true,
);
const _flaxBinding377 = FlaxGetter.plain(
  "animation",
  _flaxBinding376,
  _MaterialPageRoute_animation,
);
const _flaxBinding378 = FlaxGetter.plain(
  "secondaryAnimation",
  _flaxBinding376,
  _MaterialPageRoute_secondaryAnimation,
);
const _flaxBinding379 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_widgets#type:RoutePopDisposition",
);
const _flaxBinding380 = FlaxGetter.plain(
  "popDisposition",
  _flaxBinding379,
  _MaterialPageRoute_popDisposition,
);
const _flaxBinding381 = FlaxGetter.plain(
  "hasScopedWillPopCallback",
  flaxBoolType,
  _MaterialPageRoute_hasScopedWillPopCallback,
);
const _flaxBinding382 = FlaxGetter.plain(
  "canPop",
  flaxBoolType,
  _MaterialPageRoute_canPop,
);
const _flaxBinding383 = FlaxGetter.plain(
  "impliesAppBarDismissal",
  flaxBoolType,
  _MaterialPageRoute_impliesAppBarDismissal,
);
const _flaxBinding384 = FlaxGetter.plain(
  "fullscreenDialog",
  flaxBoolType,
  _MaterialPageRoute_fullscreenDialog,
);
const _flaxBinding385 = FlaxGetter.plain(
  "transitionDuration",
  flaxDurationType,
  _MaterialPageRoute_transitionDuration,
);
const _flaxBinding386 = FlaxGetter.plain(
  "reverseTransitionDuration",
  flaxDurationType,
  _MaterialPageRoute_reverseTransitionDuration,
);
const _flaxBinding387 = FlaxGetter.plain(
  "opaque",
  flaxBoolType,
  _MaterialPageRoute_opaque,
);
const _flaxBinding388 = FlaxGetter.plain(
  "allowSnapshotting",
  flaxBoolType,
  _MaterialPageRoute_allowSnapshotting,
);
const _flaxBinding389 = FlaxGetter.plain(
  "finishedWhenPopped",
  flaxBoolType,
  _MaterialPageRoute_finishedWhenPopped,
);
const _flaxBinding390 = FlaxGetter.plain(
  "controller",
  _flaxBinding154,
  _MaterialPageRoute_controller,
);
const _flaxBinding391 = FlaxGetter.plain(
  "willDisposeAnimationController",
  flaxBoolType,
  _MaterialPageRoute_willDisposeAnimationController,
);
const _flaxBinding392 = FlaxGetter.plain(
  "debugLabel",
  flaxStringType,
  _MaterialPageRoute_debugLabel,
);
const _flaxBinding393 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:OverlayEntry",
);
const _flaxBinding394 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding393,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_widgets#type:OverlayEntry]",
    _collection17Create,
    _collection17Matches,
    restore: _collection17Restore,
  ),
);
const _flaxBinding395 = FlaxTypeRef(
  "list",
  item: _flaxBinding393,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_widgets#type:OverlayEntry]",
    _collection16Create,
    _collection16Matches,
  ),
  iterable: _flaxBinding394,
);
const _flaxBinding396 = FlaxGetter.plain(
  "overlayEntries",
  _flaxBinding395,
  _MaterialPageRoute_overlayEntries,
);
const _flaxBinding397 = FlaxGetter.plain(
  "requestFocus",
  flaxBoolType,
  _MaterialPageRoute_requestFocus,
);
const _flaxBinding398 = FlaxTypeRef(
  "state",
  id: "flax.core/flutter#type:NavigatorState",
  nullable: true,
);
const _flaxBinding399 = FlaxGetter.plain(
  "navigator",
  _flaxBinding398,
  _MaterialPageRoute_navigator,
);
const _flaxBinding400 = FlaxGetter.plain(
  "settings",
  _flaxBinding296,
  _MaterialPageRoute_settings,
);
const _flaxBinding401 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ValueListenable",
  dartType: FlaxDartTypes.typeOf<api6.ValueListenable<String?>>,
);
const _flaxBinding402 = FlaxGetter.plain(
  "restorationScopeId",
  _flaxBinding401,
  _MaterialPageRoute_restorationScopeId,
);
const _flaxBinding403 = FlaxGetter.plain(
  "willHandlePopInternally",
  flaxBoolType,
  _MaterialPageRoute_willHandlePopInternally,
);
const _flaxBinding404 = FlaxGetter.plain(
  "isCurrent",
  flaxBoolType,
  _MaterialPageRoute_isCurrent,
);
const _flaxBinding405 = FlaxGetter.plain(
  "isFirst",
  flaxBoolType,
  _MaterialPageRoute_isFirst,
);
const _flaxBinding406 = FlaxGetter.plain(
  "hasActiveRouteBelow",
  flaxBoolType,
  _MaterialPageRoute_hasActiveRouteBelow,
);
const _flaxBinding407 = FlaxGetter.plain(
  "isActive",
  flaxBoolType,
  _MaterialPageRoute_isActive,
);
const _flaxBinding408 = FlaxGetter.plain(
  "builder",
  _flaxBinding294,
  _MaterialPageRoute_builder,
);
const _flaxBinding409 = <FlaxParameter>[
  FlaxParameter.required("fn", flaxVoidCallbackType),
];
const _flaxBinding410 = <FlaxParameter>[
  FlaxParameter.required("context", _flaxBinding134),
  FlaxParameter.required("animation", _flaxBinding360),
  FlaxParameter.required("secondaryAnimation", _flaxBinding360),
];
const _flaxBinding411 = <FlaxParameter>[
  FlaxParameter.required("context", _flaxBinding134),
  FlaxParameter.required("animation", _flaxBinding360),
  FlaxParameter.required("secondaryAnimation", _flaxBinding360),
  FlaxParameter.required("child", flaxWidgetType),
];
const _flaxBinding412 = FlaxTypeRef(
  "future",
  item: _flaxBinding379,
  future: FlaxFutureBinding(
    "enum:flax.core/sdk_widgets#type:RoutePopDisposition",
    _future1Adapt,
  ),
);
const _flaxBinding413 = FlaxTypeRef(
  "future",
  item: flaxBoolType,
  future: FlaxFutureBinding("bool:", _future2Adapt),
);
const _flaxBinding414 = FlaxCallbackBinding(
  [],
  _flaxBinding413,
  _callback3,
  id: "callback:<>()->future:[bool:]",
  invoke: _callback3Invoke,
  matches: _callback3Matches,
);
const _flaxBinding415 = FlaxTypeRef("callback", callback: _flaxBinding414);
const _flaxBinding416 = <FlaxParameter>[
  FlaxParameter.required("callback", _flaxBinding415),
];
const _flaxBinding417 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:PopEntry",
  dartType: FlaxDartTypes.typeOf<api1.PopEntry<Object?>>,
);
const _flaxBinding418 = <FlaxParameter>[
  FlaxParameter.required("popEntry", _flaxBinding417),
];
const _flaxBinding419 = <FlaxParameter>[
  FlaxParameter.required("previousRoute", _flaxBinding297),
];
const _flaxBinding420 = <FlaxParameter>[
  FlaxParameter.required("nextRoute", _flaxBinding297),
];
const _flaxBinding421 = <FlaxParameter>[
  FlaxParameter.required("nextRoute", _flaxBinding300),
];
const _flaxBinding422 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:AnimationController",
);
const _flaxBinding423 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_physics#type:Simulation",
  nullable: true,
);
const _flaxBinding424 = <FlaxParameter>[
  FlaxParameter.required("forward", flaxBoolType),
];
const _flaxBinding425 = <FlaxParameter>[
  FlaxParameter.required("oldRoute", _flaxBinding297),
];
const _flaxBinding426 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:TransitionRoute",
  dartType: FlaxDartTypes.typeOf<api1.TransitionRoute<Object?>>,
);
const _flaxBinding427 = <FlaxParameter>[
  FlaxParameter.required("nextRoute", _flaxBinding426),
];
const _flaxBinding428 = <FlaxParameter>[
  FlaxParameter.required("previousRoute", _flaxBinding426),
];
const _flaxBinding429 = <FlaxParameter>[
  FlaxParameter("progress", flaxDoubleType, required: false, defaultValue: 0.0),
];
const _flaxBinding430 = <FlaxParameter>[
  FlaxParameter.required("progress", flaxDoubleType),
];
const _flaxBinding431 = <FlaxParameter>[
  FlaxParameter.required("didPop", flaxBoolType),
];
const _flaxBinding432 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:LocalHistoryEntry",
);
const _flaxBinding433 = <FlaxParameter>[
  FlaxParameter.required("entry", _flaxBinding432),
];
const _flaxBinding434 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:RouteSettings",
  nullable: true,
);
const _flaxBinding435 = <FlaxParameter>[
  FlaxParameter.required("builder", _flaxBinding294),
  FlaxParameter("settings", _flaxBinding434, required: false),
  FlaxParameter("requestFocus", flaxNullableBoolType, required: false),
  FlaxParameter(
    "maintainState",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "fullscreenDialog",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "allowSnapshotting",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "barrierDismissible",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("traversalEdgeBehavior", _flaxBinding357, required: false),
  FlaxParameter(
    "directionalTraversalEdgeBehavior",
    _flaxBinding357,
    required: false,
  ),
];
const _flaxBinding436 = FlaxSetter(
  "receivedTransition",
  _flaxBinding362,
  _MaterialPageRoute_set_receivedTransition,
);
const _flaxBinding437 = FlaxSetter(
  "offstage",
  flaxBoolType,
  _MaterialPageRoute_set_offstage,
);
const _flaxBinding438 = FlaxSetter(
  "willDisposeAnimationController",
  flaxBoolType,
  _MaterialPageRoute_set_willDisposeAnimationController,
);
const _flaxBinding439 = FlaxTypeRef(
  "list",
  item: flaxWidgetType,
  collection: FlaxCollectionBinding(
    "list:[widget:]",
    _collection0Create,
    _collection0Matches,
    snapshot: _collection0Snapshot,
  ),
  iterable: _flaxBinding5,
);
const _flaxBinding440 = FlaxTypeRef(
  "enum",
  id: "flax.material/material#type:NavigationDestinationLabelBehavior",
  nullable: true,
);
const _flaxBinding441 = FlaxTypeRef(
  "future",
  item: flaxVoidType,
  future: FlaxFutureBinding("void:", _future3Adapt),
);
const _flaxBinding442 = FlaxCallbackBinding(
  [],
  _flaxBinding441,
  _callback4,
  id: "callback:<>()->future:[void:]",
  invoke: _callback4Invoke,
  matches: _callback4Matches,
);
const _flaxBinding443 = FlaxTypeRef("callback", callback: _flaxBinding442);
const _flaxBinding444 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:AlignmentDirectional",
);
const _flaxBinding445 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BoxDecoration",
  nullable: true,
);
const _flaxBinding446 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("isOpened", flaxBoolType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<bool>,
  id: "callback:<>(p:r:isOpened:bool:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<bool>,
  matches: FlaxCallbackAdapters.matchesVoid1<bool>,
);
const _flaxBinding447 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding446,
);
const _flaxBinding448 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:DragStartBehavior",
);
const _flaxBinding449 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("p0", _flaxBinding134),
    FlaxCallbackParameter.plain("p1", _flaxBinding360),
  ],
  _flaxBinding1,
  FlaxCallbackAdapters
      .wrap2<api1.BuildContext, api3.Animation<double>, api1.Widget?>,
  id: "callback:<>(p:r:p0:context:flax.core/flutter#type:BuildContext,p:r:p1:object:flax.core/sdk_animation#type:Animation<Object?><double:>)->widget?:",
  invoke: FlaxCallbackAdapters
      .invoke2<api1.BuildContext, api3.Animation<double>, api1.Widget?>,
  matches: FlaxCallbackAdapters
      .matches2<api1.BuildContext, api3.Animation<double>, api1.Widget?>,
  independentWidgetResult: true,
);
const _flaxBinding450 = FlaxTypeRef("callback", callback: _flaxBinding449);
const _flaxBinding451 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_painting#type:ImageProvider",
  dartType: FlaxDartTypes.typeOf<api2.ImageProvider<Object>?>,
  nullable: true,
);
const _flaxBinding452 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StackTrace",
  nullable: true,
);
const _flaxBinding453 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("exception", flaxAnyType),
    FlaxCallbackParameter.plain("stackTrace", _flaxBinding452),
  ],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid2<Object, api8.StackTrace?>,
  id: "callback:<>(p:r:exception:any:,p:r:stackTrace:object?:flax.core/flutter#type:StackTrace)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid2<Object, api8.StackTrace?>,
  matches: FlaxCallbackAdapters.matchesVoid2<Object, api8.StackTrace?>,
);
const _flaxBinding454 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding453,
);
const _flaxBinding455 = FlaxTypeRef(
  "widget",
  id: "flax.core/sdk_widgets#type:Icon",
  nullable: true,
);
const _flaxBinding456 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("states", _flaxBinding84)],
  _flaxBinding455,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api1.Icon?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->widget?:flax.core/sdk_widgets#type:Icon",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api1.Icon?>,
  matches: FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api1.Icon?>,
);
const _flaxBinding457 = FlaxTypeRef("callback", callback: _flaxBinding456);
const _flaxBinding458 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api1.Icon?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><widget?:flax.core/sdk_widgets#type:Icon>",
      [FlaxParameter.required("callback", _flaxBinding457)],
      _deferred8,
    ),
  },
);
const _flaxBinding459 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextEditingController",
  nullable: true,
);
const _flaxBinding460 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:UndoHistoryController",
  nullable: true,
);
const _flaxBinding461 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:InputDecoration",
  nullable: true,
);
const _flaxBinding462 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_services#type:TextInputType",
  nullable: true,
);
const _flaxBinding463 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_services#type:TextInputAction",
  nullable: true,
);
const _flaxBinding464 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_services#type:TextCapitalization",
);
const _flaxBinding465 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_painting#type:StrutStyle",
  nullable: true,
);
const _flaxBinding466 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextAlign",
);
const _flaxBinding467 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_painting#type:TextAlignVertical",
  nullable: true,
);
const _flaxBinding468 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ToolbarOptions",
  nullable: true,
);
const _flaxBinding469 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_services#type:SmartDashesType",
  nullable: true,
);
const _flaxBinding470 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_services#type:SmartQuotesType",
  nullable: true,
);
const _flaxBinding471 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:MaxLengthEnforcement",
  nullable: true,
);
const _flaxBinding472 = FlaxTypeRef(
  "map",
  item: flaxNullableAnyType,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[any?:][String:]",
    _collection18Create,
    _collection18Matches,
  ),
);
const _flaxBinding473 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("action", flaxStringType),
    FlaxCallbackParameter.plain("data", _flaxBinding472),
  ],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid2<String, Map<String, Object?>>,
  id: "callback:<>(p:r:action:String:,p:r:data:map:[any?:][String:])->void:",
  invoke: FlaxCallbackAdapters.invokeVoid2<String, Map<String, Object?>>,
  matches: FlaxCallbackAdapters.matchesVoid2<String, Map<String, Object?>>,
);
const _flaxBinding474 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding473,
);
const _flaxBinding475 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextInputFormatter",
);
const _flaxBinding476 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding475,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:TextInputFormatter]",
    _collection20Create,
    _collection20Matches,
    restore: _collection20Restore,
  ),
);
const _flaxBinding477 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding475,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:TextInputFormatter]",
    _collection19Create,
    _collection19Matches,
  ),
  iterable: _flaxBinding476,
);
const _flaxBinding478 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Radius",
  nullable: true,
);
const _flaxBinding479 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BoxHeightStyle",
  nullable: true,
);
const _flaxBinding480 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BoxWidthStyle",
  nullable: true,
);
const _flaxBinding481 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:TextSelectionControls",
  nullable: true,
);
const _flaxBinding482 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_gestures#type:PointerDownEvent",
);
const _flaxBinding483 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("event", _flaxBinding482)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api7.PointerDownEvent>,
  id: "callback:<>(p:r:event:object:flax.core/sdk_gestures#type:PointerDownEvent)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api7.PointerDownEvent>,
  matches: FlaxCallbackAdapters.matchesVoid1<api7.PointerDownEvent>,
);
const _flaxBinding484 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding483,
);
const _flaxBinding485 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_gestures#type:PointerUpEvent",
);
const _flaxBinding486 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("event", _flaxBinding485)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api7.PointerUpEvent>,
  id: "callback:<>(p:r:event:object:flax.core/sdk_gestures#type:PointerUpEvent)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api7.PointerUpEvent>,
  matches: FlaxCallbackAdapters.matchesVoid1<api7.PointerUpEvent>,
);
const _flaxBinding487 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding486,
);
const _flaxBinding488 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("context", _flaxBinding134),
    FlaxCallbackParameter.plain(
      "currentLength",
      flaxIntType,
      positional: false,
    ),
    FlaxCallbackParameter.plain("isFocused", flaxBoolType, positional: false),
    FlaxCallbackParameter.plain(
      "maxLength",
      flaxNullableIntType,
      positional: false,
    ),
  ],
  _flaxBinding1,
  _callback5,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,n:r:currentLength:int:,n:r:isFocused:bool:,n:r:maxLength:int?:)->widget?:",
  invoke: _callback5Invoke,
  matches: _callback5Matches,
  independentWidgetResult: true,
);
const _flaxBinding489 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding488,
);
const _flaxBinding490 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ScrollPhysics",
  nullable: true,
);
const _flaxBinding491 = FlaxTypeRef(
  "iterable",
  nullable: true,
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection21Create,
    _collection21Matches,
    restore: _collection21Restore,
  ),
);
const _flaxBinding492 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ContentInsertionConfiguration",
  nullable: true,
);
const _flaxBinding493 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:EditableTextState",
);
const _flaxBinding494 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("context", _flaxBinding134),
    FlaxCallbackParameter.plain("editableTextState", _flaxBinding493),
  ],
  flaxWidgetType,
  FlaxCallbackAdapters
      .wrap2<api1.BuildContext, api1.EditableTextState, api1.Widget>,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:editableTextState:object:flax.core/sdk_widgets#type:EditableTextState)->widget:",
  invoke: FlaxCallbackAdapters
      .invoke2<api1.BuildContext, api1.EditableTextState, api1.Widget>,
  matches: FlaxCallbackAdapters
      .matches2<api1.BuildContext, api1.EditableTextState, api1.Widget>,
  independentWidgetResult: true,
);
const _flaxBinding495 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding494,
);
const _flaxBinding496 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:SpellCheckConfiguration",
  nullable: true,
);
const _flaxBinding497 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:TextMagnifierConfiguration",
  nullable: true,
);
const _flaxBinding498 = FlaxGetter.plain(
  "displayLarge",
  _flaxBinding4,
  _TextTheme_displayLarge,
);
const _flaxBinding499 = FlaxGetter.plain(
  "displayMedium",
  _flaxBinding4,
  _TextTheme_displayMedium,
);
const _flaxBinding500 = FlaxGetter.plain(
  "displaySmall",
  _flaxBinding4,
  _TextTheme_displaySmall,
);
const _flaxBinding501 = FlaxGetter.plain(
  "headlineLarge",
  _flaxBinding4,
  _TextTheme_headlineLarge,
);
const _flaxBinding502 = FlaxGetter.plain(
  "headlineMedium",
  _flaxBinding4,
  _TextTheme_headlineMedium,
);
const _flaxBinding503 = FlaxGetter.plain(
  "headlineSmall",
  _flaxBinding4,
  _TextTheme_headlineSmall,
);
const _flaxBinding504 = FlaxGetter.plain(
  "titleLarge",
  _flaxBinding4,
  _TextTheme_titleLarge,
);
const _flaxBinding505 = FlaxGetter.plain(
  "titleMedium",
  _flaxBinding4,
  _TextTheme_titleMedium,
);
const _flaxBinding506 = FlaxGetter.plain(
  "titleSmall",
  _flaxBinding4,
  _TextTheme_titleSmall,
);
const _flaxBinding507 = FlaxGetter.plain(
  "bodyLarge",
  _flaxBinding4,
  _TextTheme_bodyLarge,
);
const _flaxBinding508 = FlaxGetter.plain(
  "bodyMedium",
  _flaxBinding4,
  _TextTheme_bodyMedium,
);
const _flaxBinding509 = FlaxGetter.plain(
  "bodySmall",
  _flaxBinding4,
  _TextTheme_bodySmall,
);
const _flaxBinding510 = FlaxGetter.plain(
  "labelLarge",
  _flaxBinding4,
  _TextTheme_labelLarge,
);
const _flaxBinding511 = FlaxGetter.plain(
  "labelMedium",
  _flaxBinding4,
  _TextTheme_labelMedium,
);
const _flaxBinding512 = FlaxGetter.plain(
  "labelSmall",
  _flaxBinding4,
  _TextTheme_labelSmall,
);
const _flaxBinding513 = FlaxInstanceMethod.plain(
  _flaxBinding57,
  flaxStringType,
  _TextTheme_toStringShort,
);
const _flaxBinding514 = FlaxInstanceMethod.plain(
  _flaxBinding60,
  flaxStringType,
  _TextTheme_toString,
);
const _flaxBinding515 = FlaxInstanceMethod.plain(
  _flaxBinding63,
  _flaxBinding64,
  _TextTheme_toDiagnosticsNode,
);
const _flaxBinding516 = FlaxInstanceMethod.plain(
  _flaxBinding67,
  flaxVoidType,
  _TextTheme_debugFillProperties,
);
const _flaxBinding517 = <FlaxParameter>[
  FlaxParameter("bodyLarge", _flaxBinding4, required: false),
  FlaxParameter("bodyMedium", _flaxBinding4, required: false),
  FlaxParameter("bodySmall", _flaxBinding4, required: false),
  FlaxParameter("displayLarge", _flaxBinding4, required: false),
  FlaxParameter("displayMedium", _flaxBinding4, required: false),
  FlaxParameter("displaySmall", _flaxBinding4, required: false),
  FlaxParameter("headlineLarge", _flaxBinding4, required: false),
  FlaxParameter("headlineMedium", _flaxBinding4, required: false),
  FlaxParameter("headlineSmall", _flaxBinding4, required: false),
  FlaxParameter("labelLarge", _flaxBinding4, required: false),
  FlaxParameter("labelMedium", _flaxBinding4, required: false),
  FlaxParameter("labelSmall", _flaxBinding4, required: false),
  FlaxParameter("titleLarge", _flaxBinding4, required: false),
  FlaxParameter("titleMedium", _flaxBinding4, required: false),
  FlaxParameter("titleSmall", _flaxBinding4, required: false),
];
const _flaxBinding518 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:TextTheme",
);
const _flaxBinding519 = FlaxInstanceMethod.plain(
  _flaxBinding517,
  _flaxBinding518,
  _TextTheme_copyWith,
);
const _flaxBinding520 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:TextTheme",
  nullable: true,
);
const _flaxBinding521 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding520),
];
const _flaxBinding522 = FlaxInstanceMethod.plain(
  _flaxBinding521,
  _flaxBinding518,
  _TextTheme_merge,
);
const _flaxBinding523 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextDecoration",
  nullable: true,
);
const _flaxBinding524 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TextDecorationStyle",
  nullable: true,
);
const _flaxBinding525 = FlaxTypeRef(
  "iterable",
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection21Create,
    _collection21Matches,
    restore: _collection21Restore,
  ),
);
const _flaxBinding526 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection22Create,
    _collection22Matches,
  ),
  iterable: _flaxBinding525,
);
const _flaxBinding527 = <FlaxParameter>[
  FlaxParameter("bodyColor", _flaxBinding3, required: false),
  FlaxParameter("decoration", _flaxBinding523, required: false),
  FlaxParameter("decorationColor", _flaxBinding3, required: false),
  FlaxParameter("decorationStyle", _flaxBinding524, required: false),
  FlaxParameter("displayColor", _flaxBinding3, required: false),
  FlaxParameter("fontFamily", flaxNullableStringType, required: false),
  FlaxParameter("fontFamilyFallback", _flaxBinding526, required: false),
  FlaxParameter(
    "fontSizeDelta",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "fontSizeFactor",
    flaxDoubleType,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter(
    "heightDelta",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "heightFactor",
    flaxDoubleType,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter(
    "letterSpacingDelta",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "letterSpacingFactor",
    flaxDoubleType,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter("package", flaxNullableStringType, required: false),
  FlaxParameter(
    "wordSpacingDelta",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "wordSpacingFactor",
    flaxDoubleType,
    required: false,
    defaultValue: 1.0,
  ),
];
const _flaxBinding528 = FlaxInstanceMethod.plain(
  _flaxBinding527,
  _flaxBinding518,
  _TextTheme_apply,
);
const _flaxBinding529 = <FlaxParameter>[
  FlaxParameter("displayLarge", _flaxBinding4, required: false),
  FlaxParameter("displayMedium", _flaxBinding4, required: false),
  FlaxParameter("displaySmall", _flaxBinding4, required: false),
  FlaxParameter("headlineLarge", _flaxBinding4, required: false),
  FlaxParameter("headlineMedium", _flaxBinding4, required: false),
  FlaxParameter("headlineSmall", _flaxBinding4, required: false),
  FlaxParameter("titleLarge", _flaxBinding4, required: false),
  FlaxParameter("titleMedium", _flaxBinding4, required: false),
  FlaxParameter("titleSmall", _flaxBinding4, required: false),
  FlaxParameter("bodyLarge", _flaxBinding4, required: false),
  FlaxParameter("bodyMedium", _flaxBinding4, required: false),
  FlaxParameter("bodySmall", _flaxBinding4, required: false),
  FlaxParameter("labelLarge", _flaxBinding4, required: false),
  FlaxParameter("labelMedium", _flaxBinding4, required: false),
  FlaxParameter("labelSmall", _flaxBinding4, required: false),
];
const _flaxBinding530 = FlaxObjectBinding(
  "flax.material/material#type:TextTheme",
  [
    _flaxBinding498,
    _flaxBinding499,
    _flaxBinding500,
    _flaxBinding501,
    _flaxBinding502,
    _flaxBinding503,
    _flaxBinding504,
    _flaxBinding505,
    _flaxBinding506,
    _flaxBinding507,
    _flaxBinding508,
    _flaxBinding509,
    _flaxBinding510,
    _flaxBinding511,
    _flaxBinding512,
  ],
  {
    "toStringShort": _flaxBinding513,
    "toString": _flaxBinding514,
    "toDiagnosticsNode": _flaxBinding515,
    "debugFillProperties": _flaxBinding516,
    "copyWith": _flaxBinding519,
    "merge": _flaxBinding522,
    "apply": _flaxBinding528,
  },
  constructors: {"": _flaxBinding529},
  create: _createTextTheme,
  matches: _isTextTheme,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding531 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ThemeData",
);
const _flaxBinding532 = FlaxGetter.plain(
  "brightness",
  _flaxBinding155,
  _ThemeData_brightness,
);
const _flaxBinding533 = FlaxGetter.plain(
  "applyElevationOverlayColor",
  flaxBoolType,
  _ThemeData_applyElevationOverlayColor,
);
const _flaxBinding534 = FlaxTypeRef(
  "object",
  id: "flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData",
  nullable: true,
);
const _flaxBinding535 = FlaxGetter.plain(
  "cupertinoOverrideTheme",
  _flaxBinding534,
  _ThemeData_cupertinoOverrideTheme,
);
const _flaxBinding536 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TargetPlatform",
);
const _flaxBinding537 = FlaxGetter.plain(
  "platform",
  _flaxBinding536,
  _ThemeData_platform,
);
const _flaxBinding538 = FlaxGetter.plain(
  "useMaterial3",
  flaxBoolType,
  _ThemeData_useMaterial3,
);
const _flaxBinding539 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:VisualDensity",
);
const _flaxBinding540 = FlaxGetter.plain(
  "visualDensity",
  _flaxBinding539,
  _ThemeData_visualDensity,
);
const _flaxBinding541 = FlaxGetter.plain(
  "canvasColor",
  flaxColorType,
  _ThemeData_canvasColor,
);
const _flaxBinding542 = FlaxGetter.plain(
  "cardColor",
  flaxColorType,
  _ThemeData_cardColor,
);
const _flaxBinding543 = FlaxGetter.plain(
  "colorScheme",
  _flaxBinding212,
  _ThemeData_colorScheme,
);
const _flaxBinding544 = FlaxGetter.plain(
  "disabledColor",
  flaxColorType,
  _ThemeData_disabledColor,
);
const _flaxBinding545 = FlaxGetter.plain(
  "dividerColor",
  flaxColorType,
  _ThemeData_dividerColor,
);
const _flaxBinding546 = FlaxGetter.plain(
  "focusColor",
  flaxColorType,
  _ThemeData_focusColor,
);
const _flaxBinding547 = FlaxGetter.plain(
  "highlightColor",
  flaxColorType,
  _ThemeData_highlightColor,
);
const _flaxBinding548 = FlaxGetter.plain(
  "hintColor",
  flaxColorType,
  _ThemeData_hintColor,
);
const _flaxBinding549 = FlaxGetter.plain(
  "hoverColor",
  flaxColorType,
  _ThemeData_hoverColor,
);
const _flaxBinding550 = FlaxGetter.plain(
  "primaryColor",
  flaxColorType,
  _ThemeData_primaryColor,
);
const _flaxBinding551 = FlaxGetter.plain(
  "primaryColorDark",
  flaxColorType,
  _ThemeData_primaryColorDark,
);
const _flaxBinding552 = FlaxGetter.plain(
  "primaryColorLight",
  flaxColorType,
  _ThemeData_primaryColorLight,
);
const _flaxBinding553 = FlaxGetter.plain(
  "scaffoldBackgroundColor",
  flaxColorType,
  _ThemeData_scaffoldBackgroundColor,
);
const _flaxBinding554 = FlaxGetter.plain(
  "secondaryHeaderColor",
  flaxColorType,
  _ThemeData_secondaryHeaderColor,
);
const _flaxBinding555 = FlaxGetter.plain(
  "shadowColor",
  flaxColorType,
  _ThemeData_shadowColor,
);
const _flaxBinding556 = FlaxGetter.plain(
  "splashColor",
  flaxColorType,
  _ThemeData_splashColor,
);
const _flaxBinding557 = FlaxGetter.plain(
  "unselectedWidgetColor",
  flaxColorType,
  _ThemeData_unselectedWidgetColor,
);
const _flaxBinding558 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:IconThemeData",
);
const _flaxBinding559 = FlaxGetter.plain(
  "iconTheme",
  _flaxBinding558,
  _ThemeData_iconTheme,
);
const _flaxBinding560 = FlaxGetter.plain(
  "primaryIconTheme",
  _flaxBinding558,
  _ThemeData_primaryIconTheme,
);
const _flaxBinding561 = FlaxGetter.plain(
  "primaryTextTheme",
  _flaxBinding518,
  _ThemeData_primaryTextTheme,
);
const _flaxBinding562 = FlaxGetter.plain(
  "textTheme",
  _flaxBinding518,
  _ThemeData_textTheme,
);
const _flaxBinding563 = FlaxGetter.plain(
  "dialogBackgroundColor",
  flaxColorType,
  _ThemeData_dialogBackgroundColor,
);
const _flaxBinding564 = FlaxGetter.plain(
  "indicatorColor",
  flaxColorType,
  _ThemeData_indicatorColor,
);
const _flaxBinding565 = FlaxInstanceMethod.plain(
  _flaxBinding57,
  flaxStringType,
  _ThemeData_toStringShort,
);
const _flaxBinding566 = FlaxInstanceMethod.plain(
  _flaxBinding60,
  flaxStringType,
  _ThemeData_toString,
);
const _flaxBinding567 = FlaxInstanceMethod.plain(
  _flaxBinding63,
  _flaxBinding64,
  _ThemeData_toDiagnosticsNode,
);
const _flaxBinding568 = FlaxInstanceMethod.plain(
  _flaxBinding67,
  flaxVoidType,
  _ThemeData_debugFillProperties,
);
const _flaxBinding569 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ColorScheme",
  nullable: true,
);
const _flaxBinding570 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TargetPlatform",
  nullable: true,
);
const _flaxBinding571 = <FlaxParameter>[
  FlaxParameter("appBarTheme", flaxNullableAnyType, required: false),
  FlaxParameter(
    "applyElevationOverlayColor",
    flaxNullableBoolType,
    required: false,
  ),
  FlaxParameter("brightness", _flaxBinding210, required: false),
  FlaxParameter("canvasColor", _flaxBinding3, required: false),
  FlaxParameter("cardColor", _flaxBinding3, required: false),
  FlaxParameter("colorScheme", _flaxBinding569, required: false),
  FlaxParameter("cupertinoOverrideTheme", _flaxBinding534, required: false),
  FlaxParameter("dialogBackgroundColor", _flaxBinding3, required: false),
  FlaxParameter("disabledColor", _flaxBinding3, required: false),
  FlaxParameter("dividerColor", _flaxBinding3, required: false),
  FlaxParameter("focusColor", _flaxBinding3, required: false),
  FlaxParameter("highlightColor", _flaxBinding3, required: false),
  FlaxParameter("hintColor", _flaxBinding3, required: false),
  FlaxParameter("hoverColor", _flaxBinding3, required: false),
  FlaxParameter("iconTheme", _flaxBinding36, required: false),
  FlaxParameter("indicatorColor", _flaxBinding3, required: false),
  FlaxParameter("inputDecorationTheme", flaxNullableAnyType, required: false),
  FlaxParameter("platform", _flaxBinding570, required: false),
  FlaxParameter("primaryColor", _flaxBinding3, required: false),
  FlaxParameter("primaryColorDark", _flaxBinding3, required: false),
  FlaxParameter("primaryColorLight", _flaxBinding3, required: false),
  FlaxParameter("primaryIconTheme", _flaxBinding36, required: false),
  FlaxParameter("primaryTextTheme", _flaxBinding520, required: false),
  FlaxParameter("scaffoldBackgroundColor", _flaxBinding3, required: false),
  FlaxParameter("secondaryHeaderColor", _flaxBinding3, required: false),
  FlaxParameter("shadowColor", _flaxBinding3, required: false),
  FlaxParameter("splashColor", _flaxBinding3, required: false),
  FlaxParameter("textTheme", _flaxBinding520, required: false),
  FlaxParameter("unselectedWidgetColor", _flaxBinding3, required: false),
  FlaxParameter("useMaterial3", flaxNullableBoolType, required: false),
  FlaxParameter("visualDensity", _flaxBinding128, required: false),
];
const _flaxBinding572 = FlaxInstanceMethod.plain(
  _flaxBinding571,
  _flaxBinding531,
  _ThemeData_copyWith,
);
const _flaxBinding573 = <FlaxParameter>[
  FlaxParameter(
    "applyElevationOverlayColor",
    flaxNullableBoolType,
    required: false,
  ),
  FlaxParameter("cupertinoOverrideTheme", _flaxBinding534, required: false),
  FlaxParameter("inputDecorationTheme", flaxNullableAnyType, required: false),
  FlaxParameter("platform", _flaxBinding570, required: false),
  FlaxParameter("useMaterial3", flaxNullableBoolType, required: false),
  FlaxParameter("useSystemColors", flaxNullableBoolType, required: false),
  FlaxParameter("visualDensity", _flaxBinding128, required: false),
  FlaxParameter("colorScheme", _flaxBinding569, required: false),
  FlaxParameter("brightness", _flaxBinding210, required: false),
  FlaxParameter("colorSchemeSeed", _flaxBinding3, required: false),
  FlaxParameter("canvasColor", _flaxBinding3, required: false),
  FlaxParameter("cardColor", _flaxBinding3, required: false),
  FlaxParameter("disabledColor", _flaxBinding3, required: false),
  FlaxParameter("dividerColor", _flaxBinding3, required: false),
  FlaxParameter("focusColor", _flaxBinding3, required: false),
  FlaxParameter("highlightColor", _flaxBinding3, required: false),
  FlaxParameter("hintColor", _flaxBinding3, required: false),
  FlaxParameter("hoverColor", _flaxBinding3, required: false),
  FlaxParameter("primaryColor", _flaxBinding3, required: false),
  FlaxParameter("primaryColorDark", _flaxBinding3, required: false),
  FlaxParameter("primaryColorLight", _flaxBinding3, required: false),
  FlaxParameter("scaffoldBackgroundColor", _flaxBinding3, required: false),
  FlaxParameter("secondaryHeaderColor", _flaxBinding3, required: false),
  FlaxParameter("shadowColor", _flaxBinding3, required: false),
  FlaxParameter("splashColor", _flaxBinding3, required: false),
  FlaxParameter("unselectedWidgetColor", _flaxBinding3, required: false),
  FlaxParameter("fontFamily", flaxNullableStringType, required: false),
  FlaxParameter("fontFamilyFallback", _flaxBinding526, required: false),
  FlaxParameter("package", flaxNullableStringType, required: false),
  FlaxParameter("iconTheme", _flaxBinding36, required: false),
  FlaxParameter("primaryIconTheme", _flaxBinding36, required: false),
  FlaxParameter("primaryTextTheme", _flaxBinding520, required: false),
  FlaxParameter("textTheme", _flaxBinding520, required: false),
  FlaxParameter("appBarTheme", flaxNullableAnyType, required: false),
  FlaxParameter("dialogBackgroundColor", _flaxBinding3, required: false),
  FlaxParameter("indicatorColor", _flaxBinding3, required: false),
];
const _flaxBinding574 = <FlaxParameter>[
  FlaxParameter.required("colorScheme", _flaxBinding212),
  FlaxParameter("textTheme", _flaxBinding520, required: false),
  FlaxParameter("useMaterial3", flaxNullableBoolType, required: false),
];
const _flaxBinding575 = <FlaxParameter>[
  FlaxParameter("useMaterial3", flaxNullableBoolType, required: false),
];
const _flaxBinding576 = FlaxObjectBinding(
  "flax.material/material#type:ThemeData",
  [
    _flaxBinding532,
    _flaxBinding533,
    _flaxBinding535,
    _flaxBinding537,
    _flaxBinding538,
    _flaxBinding540,
    _flaxBinding541,
    _flaxBinding542,
    _flaxBinding543,
    _flaxBinding544,
    _flaxBinding545,
    _flaxBinding546,
    _flaxBinding547,
    _flaxBinding548,
    _flaxBinding549,
    _flaxBinding550,
    _flaxBinding551,
    _flaxBinding552,
    _flaxBinding553,
    _flaxBinding554,
    _flaxBinding555,
    _flaxBinding556,
    _flaxBinding557,
    _flaxBinding559,
    _flaxBinding560,
    _flaxBinding561,
    _flaxBinding562,
    _flaxBinding563,
    _flaxBinding564,
  ],
  {
    "toStringShort": _flaxBinding565,
    "toString": _flaxBinding566,
    "toDiagnosticsNode": _flaxBinding567,
    "debugFillProperties": _flaxBinding568,
    "extension": FlaxInstanceMethod(
      _flaxBinding57,
      FlaxTypeRef("any", nullable: true),
      _ThemeData_extension,
      genericFactory: _flaxGeneric_ThemeData_extension,
      ownerTypes: [],
    ),
    "copyWith": _flaxBinding572,
  },
  constructors: {
    "": _flaxBinding573,
    "from": _flaxBinding574,
    "light": _flaxBinding575,
    "dark": _flaxBinding575,
    "fallback": _flaxBinding575,
  },
  create: _createThemeData,
  matches: _isThemeData,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding577 = FlaxGetter.plain(
  "horizontal",
  flaxDoubleType,
  _VisualDensity_horizontal,
);
const _flaxBinding578 = FlaxGetter.plain(
  "vertical",
  flaxDoubleType,
  _VisualDensity_vertical,
);
const _flaxBinding579 = FlaxGetter.plain(
  "baseSizeAdjustment",
  flaxOffsetType,
  _VisualDensity_baseSizeAdjustment,
);
const _flaxBinding580 = FlaxInstanceMethod.plain(
  _flaxBinding57,
  flaxStringType,
  _VisualDensity_toStringShort,
);
const _flaxBinding581 = FlaxInstanceMethod.plain(
  _flaxBinding60,
  flaxStringType,
  _VisualDensity_toString,
);
const _flaxBinding582 = FlaxInstanceMethod.plain(
  _flaxBinding63,
  _flaxBinding64,
  _VisualDensity_toDiagnosticsNode,
);
const _flaxBinding583 = FlaxInstanceMethod.plain(
  _flaxBinding67,
  flaxVoidType,
  _VisualDensity_debugFillProperties,
);
const _flaxBinding584 = <FlaxParameter>[
  FlaxParameter("horizontal", flaxNullableDoubleType, required: false),
  FlaxParameter("vertical", flaxNullableDoubleType, required: false),
];
const _flaxBinding585 = FlaxInstanceMethod.plain(
  _flaxBinding584,
  _flaxBinding539,
  _VisualDensity_copyWith,
);
const _flaxBinding586 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BoxConstraints",
);
const _flaxBinding587 = <FlaxParameter>[
  FlaxParameter.required("constraints", _flaxBinding586),
];
const _flaxBinding588 = FlaxInstanceMethod.plain(
  _flaxBinding587,
  _flaxBinding586,
  _VisualDensity_effectiveConstraints,
);
const _flaxBinding589 = <FlaxParameter>[
  FlaxParameter(
    "horizontal",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("vertical", flaxDoubleType, required: false, defaultValue: 0.0),
];
const _flaxBinding590 = FlaxObjectBinding(
  "flax.material/material#type:VisualDensity",
  [_flaxBinding577, _flaxBinding578, _flaxBinding579],
  {
    "toStringShort": _flaxBinding580,
    "toString": _flaxBinding581,
    "toDiagnosticsNode": _flaxBinding582,
    "debugFillProperties": _flaxBinding583,
    "copyWith": _flaxBinding585,
    "effectiveConstraints": _flaxBinding588,
  },
  constructors: {"": _flaxBinding589},
  create: _createVisualDensity,
  matches: _isVisualDensity,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding591 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Offset",
  nullable: true,
);
const _flaxBinding592 = FlaxTypeRef(
  "future",
  item: flaxNullableAnyType,
  future: FlaxFutureBinding("any?:", _future0Adapt),
);
const _flaxBinding593 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_painting#type:ImageProvider",
  dartType: FlaxDartTypes.typeOf<api2.ImageProvider<Object>>,
);
const _flaxBinding594 = FlaxTypeRef(
  "future",
  item: _flaxBinding212,
  future: FlaxFutureBinding(
    "object:flax.material/material#type:ColorScheme",
    _future4Adapt,
  ),
);
const _flaxBinding595 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:HeroController",
);
const _flaxBinding596 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:SpellCheckConfiguration",
);
const _flaxBinding597 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextStyle",
);
