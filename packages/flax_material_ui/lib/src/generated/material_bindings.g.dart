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
import 'package:flutter/physics.dart' as api10;
import 'package:flutter/scheduler.dart' as api11;
import 'package:flutter/semantics.dart' as api12;

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
          FlaxParameter("actions", _flaxBinding7, required: false),
          FlaxParameter("actionsPadding", _flaxBinding2, required: false),
          FlaxParameter("actionsAlignment", _flaxBinding8, required: false),
          FlaxParameter(
            "actionsOverflowAlignment",
            _flaxBinding9,
            required: false,
          ),
          FlaxParameter(
            "actionsOverflowDirection",
            _flaxBinding10,
            required: false,
          ),
          FlaxParameter(
            "actionsOverflowButtonSpacing",
            _flaxBinding11,
            required: false,
          ),
          FlaxParameter("buttonPadding", _flaxBinding2, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", _flaxBinding11, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("semanticLabel", _flaxBinding12, required: false),
          FlaxParameter("insetPadding", _flaxBinding13, required: false),
          FlaxParameter("clipBehavior", _flaxBinding14, required: false),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter("alignment", _flaxBinding16, required: false),
          FlaxParameter("constraints", _flaxBinding17, required: false),
          FlaxParameter(
            "scrollable",
            _flaxBinding18,
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
          FlaxParameter("actions", _flaxBinding7, required: false),
          FlaxParameter("actionsPadding", _flaxBinding2, required: false),
          FlaxParameter("actionsAlignment", _flaxBinding8, required: false),
          FlaxParameter(
            "actionsOverflowAlignment",
            _flaxBinding9,
            required: false,
          ),
          FlaxParameter(
            "actionsOverflowDirection",
            _flaxBinding10,
            required: false,
          ),
          FlaxParameter(
            "actionsOverflowButtonSpacing",
            _flaxBinding11,
            required: false,
          ),
          FlaxParameter("buttonPadding", _flaxBinding2, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", _flaxBinding11, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("semanticLabel", _flaxBinding12, required: false),
          FlaxParameter(
            "insetPadding",
            _flaxBinding19,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("clipBehavior", _flaxBinding14, required: false),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter("alignment", _flaxBinding16, required: false),
          FlaxParameter("constraints", _flaxBinding17, required: false),
          FlaxParameter(
            "scrollable",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("scrollController", _flaxBinding20, required: false),
          FlaxParameter(
            "actionScrollController",
            _flaxBinding20,
            required: false,
          ),
          FlaxParameter(
            "insetAnimationDuration",
            _flaxBinding21,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "insetAnimationCurve",
            _flaxBinding22,
            required: false,
            omitWhenAbsent: true,
          ),
        ],
      },
      _AlertDialogHost.new,
      matches: _isAlertDialog,
      methods: {},
    ),
    _flaxBinding94,
    _flaxBinding164,
    FlaxWidgetBinding(
      "flax.material/material#type:Card",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", _flaxBinding11, required: false),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter(
            "borderOnForeground",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("margin", _flaxBinding2, required: false),
          FlaxParameter("clipBehavior", _flaxBinding14, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter(
            "semanticContainer",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
        ],
        "filled": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", _flaxBinding11, required: false),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter(
            "borderOnForeground",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("margin", _flaxBinding2, required: false),
          FlaxParameter("clipBehavior", _flaxBinding14, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter(
            "semanticContainer",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
        ],
        "outlined": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", _flaxBinding11, required: false),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter(
            "borderOnForeground",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("margin", _flaxBinding2, required: false),
          FlaxParameter("clipBehavior", _flaxBinding14, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter(
            "semanticContainer",
            _flaxBinding18,
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
          FlaxParameter("value", _flaxBinding48, required: true),
          FlaxParameter(
            "tristate",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("onChanged", _flaxBinding166, required: true),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("activeColor", _flaxBinding3, required: false),
          FlaxParameter("fillColor", _flaxBinding104, required: false),
          FlaxParameter("checkColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("overlayColor", _flaxBinding104, required: false),
          FlaxParameter("splashRadius", _flaxBinding11, required: false),
          FlaxParameter("visualDensity", _flaxBinding142, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("shape", _flaxBinding132, required: false),
          FlaxParameter("side", _flaxBinding127, required: false),
          FlaxParameter(
            "isError",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("semanticLabel", _flaxBinding12, required: false),
        ],
        "adaptive": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("value", _flaxBinding48, required: true),
          FlaxParameter(
            "tristate",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("onChanged", _flaxBinding166, required: true),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("activeColor", _flaxBinding3, required: false),
          FlaxParameter("fillColor", _flaxBinding104, required: false),
          FlaxParameter("checkColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("overlayColor", _flaxBinding104, required: false),
          FlaxParameter("splashRadius", _flaxBinding11, required: false),
          FlaxParameter("visualDensity", _flaxBinding142, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("shape", _flaxBinding132, required: false),
          FlaxParameter("side", _flaxBinding127, required: false),
          FlaxParameter(
            "isError",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("semanticLabel", _flaxBinding12, required: false),
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
          FlaxParameter("value", _flaxBinding11, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("valueColor", _flaxBinding168, required: false),
          FlaxParameter("strokeWidth", _flaxBinding11, required: false),
          FlaxParameter("strokeAlign", _flaxBinding11, required: false),
          FlaxParameter("semanticsLabel", _flaxBinding12, required: false),
          FlaxParameter("semanticsValue", _flaxBinding12, required: false),
          FlaxParameter("strokeCap", _flaxBinding169, required: false),
          FlaxParameter("constraints", _flaxBinding17, required: false),
          FlaxParameter("trackGap", _flaxBinding11, required: false),
          FlaxParameter("year2023", _flaxBinding48, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("controller", _flaxBinding170, required: false),
        ],
        "adaptive": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("value", _flaxBinding11, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("valueColor", _flaxBinding168, required: false),
          FlaxParameter("strokeWidth", _flaxBinding11, required: false),
          FlaxParameter("semanticsLabel", _flaxBinding12, required: false),
          FlaxParameter("semanticsValue", _flaxBinding12, required: false),
          FlaxParameter("strokeCap", _flaxBinding169, required: false),
          FlaxParameter("strokeAlign", _flaxBinding11, required: false),
          FlaxParameter("constraints", _flaxBinding17, required: false),
          FlaxParameter("trackGap", _flaxBinding11, required: false),
          FlaxParameter("year2023", _flaxBinding48, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("controller", _flaxBinding170, required: false),
        ],
      },
      _CircularProgressIndicatorHost.new,
      matches: _isCircularProgressIndicator,
      methods: {},
    ),
    _flaxBinding236,
    FlaxWidgetBinding(
      "flax.material/material#type:Divider",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("height", _flaxBinding11, required: false),
          FlaxParameter("thickness", _flaxBinding11, required: false),
          FlaxParameter("indent", _flaxBinding11, required: false),
          FlaxParameter("endIndent", _flaxBinding11, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("radius", _flaxBinding237, required: false),
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
          FlaxParameter("elevation", _flaxBinding11, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter("width", _flaxBinding11, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter("semanticLabel", _flaxBinding12, required: false),
          FlaxParameter("clipBehavior", _flaxBinding14, required: false),
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
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("clipBehavior", _flaxBinding14, required: false),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("child", _flaxBinding1, required: true),
        ],
        "icon": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding14,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter("label", _flaxBinding5, required: true),
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
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding14,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("child", _flaxBinding1, required: true),
        ],
        "icon": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding14,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter("label", _flaxBinding5, required: true),
        ],
        "tonal": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding14,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("child", _flaxBinding1, required: true),
        ],
        "tonalIcon": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding14,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter("label", _flaxBinding5, required: true),
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
          FlaxParameter("tooltip", _flaxBinding12, required: false),
          FlaxParameter("foregroundColor", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter(
            "heroTag",
            _flaxBinding243,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("elevation", _flaxBinding11, required: false),
          FlaxParameter("focusElevation", _flaxBinding11, required: false),
          FlaxParameter("hoverElevation", _flaxBinding11, required: false),
          FlaxParameter("highlightElevation", _flaxBinding11, required: false),
          FlaxParameter("disabledElevation", _flaxBinding11, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter(
            "mini",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding244,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "isExtended",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("enableFeedback", _flaxBinding48, required: false),
        ],
        "small": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter("tooltip", _flaxBinding12, required: false),
          FlaxParameter("foregroundColor", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter(
            "heroTag",
            _flaxBinding243,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("elevation", _flaxBinding11, required: false),
          FlaxParameter("focusElevation", _flaxBinding11, required: false),
          FlaxParameter("hoverElevation", _flaxBinding11, required: false),
          FlaxParameter("highlightElevation", _flaxBinding11, required: false),
          FlaxParameter("disabledElevation", _flaxBinding11, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding244,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("enableFeedback", _flaxBinding48, required: false),
        ],
        "large": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter("tooltip", _flaxBinding12, required: false),
          FlaxParameter("foregroundColor", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter(
            "heroTag",
            _flaxBinding243,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("elevation", _flaxBinding11, required: false),
          FlaxParameter("focusElevation", _flaxBinding11, required: false),
          FlaxParameter("hoverElevation", _flaxBinding11, required: false),
          FlaxParameter("highlightElevation", _flaxBinding11, required: false),
          FlaxParameter("disabledElevation", _flaxBinding11, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding244,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("enableFeedback", _flaxBinding48, required: false),
        ],
        "extended": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("tooltip", _flaxBinding12, required: false),
          FlaxParameter("foregroundColor", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter(
            "heroTag",
            _flaxBinding243,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("elevation", _flaxBinding11, required: false),
          FlaxParameter("focusElevation", _flaxBinding11, required: false),
          FlaxParameter("hoverElevation", _flaxBinding11, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("highlightElevation", _flaxBinding11, required: false),
          FlaxParameter("disabledElevation", _flaxBinding11, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter(
            "isExtended",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding244,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "extendedIconLabelSpacing",
            _flaxBinding11,
            required: false,
          ),
          FlaxParameter("extendedPadding", _flaxBinding2, required: false),
          FlaxParameter("extendedTextStyle", _flaxBinding4, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter("label", _flaxBinding5, required: true),
          FlaxParameter("enableFeedback", _flaxBinding48, required: false),
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
          FlaxParameter("iconSize", _flaxBinding11, required: false),
          FlaxParameter("visualDensity", _flaxBinding142, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("alignment", _flaxBinding16, required: false),
          FlaxParameter("splashRadius", _flaxBinding11, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("highlightColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("disabledColor", _flaxBinding3, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("tooltip", _flaxBinding12, required: false),
          FlaxParameter("enableFeedback", _flaxBinding48, required: false),
          FlaxParameter("constraints", _flaxBinding17, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("isSelected", _flaxBinding48, required: false),
          FlaxParameter("selectedIcon", _flaxBinding1, required: false),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("icon", _flaxBinding5, required: true),
        ],
        "filled": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("iconSize", _flaxBinding11, required: false),
          FlaxParameter("visualDensity", _flaxBinding142, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("alignment", _flaxBinding16, required: false),
          FlaxParameter("splashRadius", _flaxBinding11, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("highlightColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("disabledColor", _flaxBinding3, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("tooltip", _flaxBinding12, required: false),
          FlaxParameter("enableFeedback", _flaxBinding48, required: false),
          FlaxParameter("constraints", _flaxBinding17, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("isSelected", _flaxBinding48, required: false),
          FlaxParameter("selectedIcon", _flaxBinding1, required: false),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("icon", _flaxBinding5, required: true),
        ],
        "filledTonal": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("iconSize", _flaxBinding11, required: false),
          FlaxParameter("visualDensity", _flaxBinding142, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("alignment", _flaxBinding16, required: false),
          FlaxParameter("splashRadius", _flaxBinding11, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("highlightColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("disabledColor", _flaxBinding3, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("tooltip", _flaxBinding12, required: false),
          FlaxParameter("enableFeedback", _flaxBinding48, required: false),
          FlaxParameter("constraints", _flaxBinding17, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("isSelected", _flaxBinding48, required: false),
          FlaxParameter("selectedIcon", _flaxBinding1, required: false),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("icon", _flaxBinding5, required: true),
        ],
        "outlined": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("iconSize", _flaxBinding11, required: false),
          FlaxParameter("visualDensity", _flaxBinding142, required: false),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("alignment", _flaxBinding16, required: false),
          FlaxParameter("splashRadius", _flaxBinding11, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("highlightColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("disabledColor", _flaxBinding3, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("tooltip", _flaxBinding12, required: false),
          FlaxParameter("enableFeedback", _flaxBinding48, required: false),
          FlaxParameter("constraints", _flaxBinding17, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("isSelected", _flaxBinding48, required: false),
          FlaxParameter("selectedIcon", _flaxBinding1, required: false),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("icon", _flaxBinding5, required: true),
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
          FlaxParameter("onTap", _flaxBinding239, required: false),
          FlaxParameter("onDoubleTap", _flaxBinding239, required: false),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onLongPressUp", _flaxBinding239, required: false),
          FlaxParameter("onTapDown", _flaxBinding247, required: false),
          FlaxParameter("onTapUp", _flaxBinding250, required: false),
          FlaxParameter("onTapCancel", _flaxBinding239, required: false),
          FlaxParameter("onSecondaryTap", _flaxBinding239, required: false),
          FlaxParameter("onSecondaryTapUp", _flaxBinding250, required: false),
          FlaxParameter("onSecondaryTapDown", _flaxBinding247, required: false),
          FlaxParameter(
            "onSecondaryTapCancel",
            _flaxBinding239,
            required: false,
          ),
          FlaxParameter("onHighlightChanged", _flaxBinding241, required: false),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("highlightColor", _flaxBinding3, required: false),
          FlaxParameter("overlayColor", _flaxBinding104, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("radius", _flaxBinding11, required: false),
          FlaxParameter("borderRadius", _flaxBinding251, required: false),
          FlaxParameter("customBorder", _flaxBinding15, required: false),
          FlaxParameter(
            "enableFeedback",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "excludeFromSemantics",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "canRequestFocus",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("hoverDuration", _flaxBinding144, required: false),
        ],
      },
      _InkWellHost.new,
      matches: _isInkWell,
      methods: {},
    ),
    _flaxBinding314,
    FlaxWidgetBinding(
      "flax.material/material#type:LinearProgressIndicator",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("value", _flaxBinding11, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("valueColor", _flaxBinding168, required: false),
          FlaxParameter("minHeight", _flaxBinding11, required: false),
          FlaxParameter("semanticsLabel", _flaxBinding12, required: false),
          FlaxParameter("semanticsValue", _flaxBinding12, required: false),
          FlaxParameter("borderRadius", _flaxBinding237, required: false),
          FlaxParameter("stopIndicatorColor", _flaxBinding3, required: false),
          FlaxParameter("stopIndicatorRadius", _flaxBinding11, required: false),
          FlaxParameter("trackGap", _flaxBinding11, required: false),
          FlaxParameter("year2023", _flaxBinding48, required: false),
          FlaxParameter("controller", _flaxBinding170, required: false),
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
          FlaxParameter("isThreeLine", _flaxBinding48, required: false),
          FlaxParameter("dense", _flaxBinding48, required: false),
          FlaxParameter("visualDensity", _flaxBinding142, required: false),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter("style", _flaxBinding315, required: false),
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
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("onTap", _flaxBinding239, required: false),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter(
            "selected",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("splashColor", _flaxBinding3, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("tileColor", _flaxBinding3, required: false),
          FlaxParameter("selectedTileColor", _flaxBinding3, required: false),
          FlaxParameter("enableFeedback", _flaxBinding48, required: false),
          FlaxParameter("horizontalTitleGap", _flaxBinding11, required: false),
          FlaxParameter("minVerticalPadding", _flaxBinding11, required: false),
          FlaxParameter("minLeadingWidth", _flaxBinding11, required: false),
          FlaxParameter("minTileHeight", _flaxBinding11, required: false),
          FlaxParameter(
            "internalAddSemanticForOnTap",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("statesController", _flaxBinding242, required: false),
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
            _flaxBinding316,
            required: false,
            defaultValue: api.MaterialType.canvas,
          ),
          FlaxParameter(
            "elevation",
            _flaxBinding52,
            required: false,
            defaultValue: 0.0,
          ),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("textStyle", _flaxBinding4, required: false),
          FlaxParameter("borderRadius", _flaxBinding237, required: false),
          FlaxParameter("shape", _flaxBinding15, required: false),
          FlaxParameter(
            "borderOnForeground",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding244,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter(
            "animationDuration",
            _flaxBinding21,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("child", _flaxBinding1, required: false),
          FlaxParameter(
            "animateColor",
            _flaxBinding18,
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
          FlaxParameter("navigatorKey", _flaxBinding317, required: false),
          FlaxParameter("home", _flaxBinding1, required: false),
          FlaxParameter(
            "routes",
            _flaxBinding320,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("initialRoute", _flaxBinding12, required: false),
          FlaxParameter("onGenerateRoute", _flaxBinding324, required: false),
          FlaxParameter(
            "onGenerateInitialRoutes",
            _flaxBinding329,
            required: false,
          ),
          FlaxParameter("onUnknownRoute", _flaxBinding324, required: false),
          FlaxParameter(
            "onNavigationNotification",
            _flaxBinding332,
            required: false,
          ),
          FlaxParameter(
            "navigatorObservers",
            _flaxBinding335,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("builder", _flaxBinding337, required: false),
          FlaxParameter(
            "title",
            _flaxBinding12,
            required: false,
            defaultValue: '',
          ),
          FlaxParameter("onGenerateTitle", _flaxBinding339, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("theme", _flaxBinding340, required: false),
          FlaxParameter("darkTheme", _flaxBinding340, required: false),
          FlaxParameter("highContrastTheme", _flaxBinding340, required: false),
          FlaxParameter(
            "highContrastDarkTheme",
            _flaxBinding340,
            required: false,
          ),
          FlaxParameter(
            "themeMode",
            _flaxBinding341,
            required: false,
            defaultValue: api.ThemeMode.system,
          ),
          FlaxParameter(
            "themeAnimationDuration",
            _flaxBinding21,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "themeAnimationCurve",
            _flaxBinding22,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("locale", _flaxBinding342, required: false),
          FlaxParameter(
            "localizationsDelegates",
            _flaxBinding344,
            required: false,
          ),
          FlaxParameter(
            "localeListResolutionCallback",
            _flaxBinding349,
            required: false,
          ),
          FlaxParameter(
            "localeResolutionCallback",
            _flaxBinding351,
            required: false,
          ),
          FlaxParameter(
            "supportedLocales",
            _flaxBinding346,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "debugShowMaterialGrid",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "showPerformanceOverlay",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "checkerboardRasterCacheImages",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "checkerboardOffscreenLayers",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "showSemanticsDebugger",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "debugShowCheckedModeBanner",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("shortcuts", _flaxBinding354, required: false),
          FlaxParameter("actions", _flaxBinding357, required: false),
          FlaxParameter("restorationScopeId", _flaxBinding12, required: false),
          FlaxParameter("scrollBehavior", _flaxBinding358, required: false),
          FlaxParameter(
            "useInheritedMediaQuery",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "themeAnimationStyle",
            _flaxBinding359,
            required: false,
          ),
        ],
        "router": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter(
            "routeInformationProvider",
            _flaxBinding360,
            required: false,
          ),
          FlaxParameter(
            "routeInformationParser",
            _flaxBinding361,
            required: false,
          ),
          FlaxParameter("routerDelegate", _flaxBinding362, required: false),
          FlaxParameter("routerConfig", _flaxBinding363, required: false),
          FlaxParameter(
            "backButtonDispatcher",
            _flaxBinding364,
            required: false,
          ),
          FlaxParameter("builder", _flaxBinding337, required: false),
          FlaxParameter("title", _flaxBinding12, required: false),
          FlaxParameter("onGenerateTitle", _flaxBinding339, required: false),
          FlaxParameter(
            "onNavigationNotification",
            _flaxBinding332,
            required: false,
          ),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("theme", _flaxBinding340, required: false),
          FlaxParameter("darkTheme", _flaxBinding340, required: false),
          FlaxParameter("highContrastTheme", _flaxBinding340, required: false),
          FlaxParameter(
            "highContrastDarkTheme",
            _flaxBinding340,
            required: false,
          ),
          FlaxParameter(
            "themeMode",
            _flaxBinding341,
            required: false,
            defaultValue: api.ThemeMode.system,
          ),
          FlaxParameter(
            "themeAnimationDuration",
            _flaxBinding21,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "themeAnimationCurve",
            _flaxBinding22,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("locale", _flaxBinding342, required: false),
          FlaxParameter(
            "localizationsDelegates",
            _flaxBinding344,
            required: false,
          ),
          FlaxParameter(
            "localeListResolutionCallback",
            _flaxBinding349,
            required: false,
          ),
          FlaxParameter(
            "localeResolutionCallback",
            _flaxBinding351,
            required: false,
          ),
          FlaxParameter(
            "supportedLocales",
            _flaxBinding346,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "debugShowMaterialGrid",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "showPerformanceOverlay",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "checkerboardRasterCacheImages",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "checkerboardOffscreenLayers",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "showSemanticsDebugger",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "debugShowCheckedModeBanner",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("shortcuts", _flaxBinding354, required: false),
          FlaxParameter("actions", _flaxBinding357, required: false),
          FlaxParameter("restorationScopeId", _flaxBinding12, required: false),
          FlaxParameter("scrollBehavior", _flaxBinding358, required: false),
          FlaxParameter(
            "useInheritedMediaQuery",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "themeAnimationStyle",
            _flaxBinding359,
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
        _flaxBinding365,
        _flaxBinding366,
        _flaxBinding368,
        _flaxBinding369,
        FlaxGetter(
          "onPopInvoked",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "didPop",
                  _flaxBinding18,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "result",
                  _flaxBinding243,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding78,
              _callback1,
              id: "callback:<>(p:r:didPop:bool:,p:r:result:any?:)->void:",
              invoke: _callback1Invoke,
              matches: _callback1Matches,
            ),
          ),
          _MaterialPage_onPopInvoked,
        ),
        _flaxBinding370,
        _flaxBinding371,
        _flaxBinding372,
        _flaxBinding373,
        _flaxBinding374,
      ],
      {
        "toString": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding67,
          _MaterialPage_toString,
        ),
        "canUpdate": FlaxInstanceMethod(
          _flaxBinding376,
          _flaxBinding18,
          _MaterialPage_canUpdate,
        ),
        "createRoute": FlaxInstanceMethod(
          _flaxBinding377,
          FlaxTypeRef("object", id: "flax.core/flutter#type:Route"),
          _MaterialPage_createRoute,
        ),
      },
      constructors: {"": _flaxBinding380},
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
        _flaxBinding382,
        _flaxBinding384,
        _flaxBinding385,
        _flaxBinding389,
        _flaxBinding390,
        _flaxBinding391,
        _flaxBinding392,
        _flaxBinding393,
        _flaxBinding394,
        _flaxBinding395,
        _flaxBinding396,
        _flaxBinding397,
        _flaxBinding398,
        _flaxBinding399,
        _flaxBinding401,
        _flaxBinding403,
        _flaxBinding404,
        _flaxBinding406,
        _flaxBinding407,
        _flaxBinding408,
        _flaxBinding409,
        _flaxBinding410,
        FlaxGetter(
          "completed",
          FlaxTypeRef(
            "future",
            item: _flaxBinding243,
            future: FlaxFutureBinding("any?:", _future0Adapt),
          ),
          _MaterialPageRoute_completed,
        ),
        _flaxBinding411,
        _flaxBinding412,
        _flaxBinding413,
        _flaxBinding414,
        _flaxBinding415,
        _flaxBinding416,
        _flaxBinding417,
        _flaxBinding418,
        _flaxBinding422,
        _flaxBinding423,
        _flaxBinding425,
        _flaxBinding426,
        _flaxBinding428,
        _flaxBinding429,
        FlaxGetter(
          "currentResult",
          FlaxTypeRef("any", nullable: true),
          _MaterialPageRoute_currentResult,
        ),
        FlaxGetter(
          "popped",
          FlaxTypeRef(
            "future",
            item: _flaxBinding243,
            future: FlaxFutureBinding("any?:", _future0Adapt),
          ),
          _MaterialPageRoute_popped,
        ),
        _flaxBinding430,
        _flaxBinding431,
        _flaxBinding432,
        _flaxBinding433,
        _flaxBinding434,
      ],
      {
        "setState": FlaxInstanceMethod(
          _flaxBinding436,
          _flaxBinding78,
          _MaterialPageRoute_setState,
        ),
        "buildPage": FlaxInstanceMethod(
          _flaxBinding437,
          _flaxBinding5,
          _MaterialPageRoute_buildPage,
        ),
        "buildTransitions": FlaxInstanceMethod(
          _flaxBinding438,
          _flaxBinding5,
          _MaterialPageRoute_buildTransitions,
        ),
        "install": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_install,
        ),
        "didPush": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding439,
          _MaterialPageRoute_didPush,
        ),
        "didAdd": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_didAdd,
        ),
        "willPop": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding440,
          _MaterialPageRoute_willPop,
        ),
        "onPopInvokedWithResult": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter("didPop", _flaxBinding18, required: true),
            FlaxParameter(
              "result",
              FlaxTypeRef("any", nullable: true),
              required: true,
            ),
          ],
          _flaxBinding78,
          _MaterialPageRoute_onPopInvokedWithResult,
        ),
        "addScopedWillPopCallback": FlaxInstanceMethod(
          _flaxBinding444,
          _flaxBinding78,
          _MaterialPageRoute_addScopedWillPopCallback,
        ),
        "removeScopedWillPopCallback": FlaxInstanceMethod(
          _flaxBinding444,
          _flaxBinding78,
          _MaterialPageRoute_removeScopedWillPopCallback,
        ),
        "registerPopEntry": FlaxInstanceMethod(
          _flaxBinding446,
          _flaxBinding78,
          _MaterialPageRoute_registerPopEntry,
        ),
        "unregisterPopEntry": FlaxInstanceMethod(
          _flaxBinding446,
          _flaxBinding78,
          _MaterialPageRoute_unregisterPopEntry,
        ),
        "didChangePrevious": FlaxInstanceMethod(
          _flaxBinding447,
          _flaxBinding78,
          _MaterialPageRoute_didChangePrevious,
        ),
        "didChangeNext": FlaxInstanceMethod(
          _flaxBinding448,
          _flaxBinding78,
          _MaterialPageRoute_didChangeNext,
        ),
        "didPopNext": FlaxInstanceMethod(
          _flaxBinding449,
          _flaxBinding78,
          _MaterialPageRoute_didPopNext,
        ),
        "changedInternalState": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_changedInternalState,
        ),
        "changedExternalState": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_changedExternalState,
        ),
        "buildModalBarrier": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding5,
          _MaterialPageRoute_buildModalBarrier,
        ),
        "createOverlayEntries": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding420,
          _MaterialPageRoute_createOverlayEntries,
        ),
        "toString": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding67,
          _MaterialPageRoute_toString,
        ),
        "debugTransitionCompleted": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding18,
          _MaterialPageRoute_debugTransitionCompleted,
        ),
        "createAnimationController": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding450,
          _MaterialPageRoute_createAnimationController,
        ),
        "createAnimation": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding386,
          _MaterialPageRoute_createAnimation,
        ),
        "createSimulation": FlaxInstanceMethod(
          _flaxBinding452,
          _flaxBinding451,
          _MaterialPageRoute_createSimulation,
        ),
        "didReplace": FlaxInstanceMethod(
          _flaxBinding453,
          _flaxBinding78,
          _MaterialPageRoute_didReplace,
        ),
        "didPop": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "result",
              FlaxTypeRef("any", nullable: true),
              required: true,
            ),
          ],
          _flaxBinding18,
          _MaterialPageRoute_didPop,
        ),
        "canTransitionTo": FlaxInstanceMethod(
          _flaxBinding455,
          _flaxBinding18,
          _MaterialPageRoute_canTransitionTo,
        ),
        "canTransitionFrom": FlaxInstanceMethod(
          _flaxBinding456,
          _flaxBinding18,
          _MaterialPageRoute_canTransitionFrom,
        ),
        "handleStartBackGesture": FlaxInstanceMethod(
          _flaxBinding457,
          _flaxBinding78,
          _MaterialPageRoute_handleStartBackGesture,
        ),
        "handleUpdateBackGestureProgress": FlaxInstanceMethod(
          _flaxBinding458,
          _flaxBinding78,
          _MaterialPageRoute_handleUpdateBackGestureProgress,
        ),
        "handleCancelBackGesture": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_handleCancelBackGesture,
        ),
        "handleCommitBackGesture": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_handleCommitBackGesture,
        ),
        "dispose": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_dispose,
        ),
        "onPopInvoked": FlaxInstanceMethod(
          _flaxBinding459,
          _flaxBinding78,
          _MaterialPageRoute_onPopInvoked,
        ),
        "didComplete": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "result",
              FlaxTypeRef("any", nullable: true),
              required: true,
            ),
          ],
          _flaxBinding78,
          _MaterialPageRoute_didComplete,
        ),
        "addLocalHistoryEntry": FlaxInstanceMethod(
          _flaxBinding461,
          _flaxBinding78,
          _MaterialPageRoute_addLocalHistoryEntry,
        ),
        "removeLocalHistoryEntry": FlaxInstanceMethod(
          _flaxBinding461,
          _flaxBinding78,
          _MaterialPageRoute_removeLocalHistoryEntry,
        ),
        "buildContent": FlaxInstanceMethod(
          _flaxBinding377,
          _flaxBinding5,
          _MaterialPageRoute_buildContent,
        ),
      },
      constructors: {"": _flaxBinding463},
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
      setters: [_flaxBinding464, _flaxBinding465, _flaxBinding466],
      matches: _isMaterialPageRoute,
      methods: const {},
    ),
    FlaxWidgetBinding(
      "flax.material/material#type:NavigationBar",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("animationDuration", _flaxBinding144, required: false),
          FlaxParameter(
            "selectedIndex",
            _flaxBinding83,
            required: false,
            defaultValue: 0,
          ),
          FlaxParameter("destinations", _flaxBinding467, required: true),
          FlaxParameter(
            "onDestinationSelected",
            _flaxBinding469,
            required: false,
          ),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter("elevation", _flaxBinding11, required: false),
          FlaxParameter("shadowColor", _flaxBinding3, required: false),
          FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
          FlaxParameter("indicatorColor", _flaxBinding3, required: false),
          FlaxParameter("indicatorShape", _flaxBinding15, required: false),
          FlaxParameter("height", _flaxBinding11, required: false),
          FlaxParameter("labelBehavior", _flaxBinding470, required: false),
          FlaxParameter("overlayColor", _flaxBinding104, required: false),
          FlaxParameter("labelTextStyle", _flaxBinding100, required: false),
          FlaxParameter("labelPadding", _flaxBinding2, required: false),
          FlaxParameter(
            "maintainBottomViewPadding",
            _flaxBinding18,
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
          FlaxParameter("icon", _flaxBinding5, required: true),
          FlaxParameter("selectedIcon", _flaxBinding1, required: false),
          FlaxParameter("label", _flaxBinding67, required: true),
          FlaxParameter("tooltip", _flaxBinding12, required: false),
          FlaxParameter(
            "enabled",
            _flaxBinding18,
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
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("clipBehavior", _flaxBinding14, required: false),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("child", _flaxBinding1, required: true),
        ],
        "icon": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("clipBehavior", _flaxBinding14, required: false),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter("label", _flaxBinding5, required: true),
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
            _flaxBinding52,
            required: false,
            defaultValue: 40.0,
          ),
          FlaxParameter(
            "edgeOffset",
            _flaxBinding52,
            required: false,
            defaultValue: 0.0,
          ),
          FlaxParameter("onRefresh", _flaxBinding473, required: true),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter(
            "notificationPredicate",
            _flaxBinding37,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("semanticsLabel", _flaxBinding12, required: false),
          FlaxParameter("semanticsValue", _flaxBinding12, required: false),
          FlaxParameter(
            "strokeWidth",
            _flaxBinding52,
            required: false,
            defaultValue: 2.5,
          ),
          FlaxParameter(
            "elevation",
            _flaxBinding52,
            required: false,
            defaultValue: 2.0,
          ),
          FlaxParameter("child", _flaxBinding5, required: true),
        ],
        "adaptive": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter(
            "displacement",
            _flaxBinding52,
            required: false,
            defaultValue: 40.0,
          ),
          FlaxParameter(
            "edgeOffset",
            _flaxBinding52,
            required: false,
            defaultValue: 0.0,
          ),
          FlaxParameter("onRefresh", _flaxBinding473, required: true),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter(
            "notificationPredicate",
            _flaxBinding37,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("semanticsLabel", _flaxBinding12, required: false),
          FlaxParameter("semanticsValue", _flaxBinding12, required: false),
          FlaxParameter(
            "strokeWidth",
            _flaxBinding52,
            required: false,
            defaultValue: 2.5,
          ),
          FlaxParameter(
            "elevation",
            _flaxBinding52,
            required: false,
            defaultValue: 2.0,
          ),
          FlaxParameter("child", _flaxBinding5, required: true),
        ],
        "noSpinner": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("onRefresh", _flaxBinding473, required: true),
          FlaxParameter(
            "notificationPredicate",
            _flaxBinding37,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("semanticsLabel", _flaxBinding12, required: false),
          FlaxParameter("semanticsValue", _flaxBinding12, required: false),
          FlaxParameter(
            "elevation",
            _flaxBinding52,
            required: false,
            defaultValue: 2.0,
          ),
          FlaxParameter("child", _flaxBinding5, required: true),
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
          FlaxParameter("appBar", _flaxBinding31, required: false),
          FlaxParameter("body", _flaxBinding1, required: false),
          FlaxParameter("floatingActionButton", _flaxBinding1, required: false),
          FlaxParameter(
            "persistentFooterButtons",
            _flaxBinding7,
            required: false,
          ),
          FlaxParameter(
            "persistentFooterAlignment",
            _flaxBinding474,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "persistentFooterDecoration",
            _flaxBinding475,
            required: false,
          ),
          FlaxParameter("drawer", _flaxBinding1, required: false),
          FlaxParameter("onDrawerChanged", _flaxBinding477, required: false),
          FlaxParameter("endDrawer", _flaxBinding1, required: false),
          FlaxParameter("onEndDrawerChanged", _flaxBinding477, required: false),
          FlaxParameter("bottomNavigationBar", _flaxBinding1, required: false),
          FlaxParameter("bottomSheet", _flaxBinding1, required: false),
          FlaxParameter("backgroundColor", _flaxBinding3, required: false),
          FlaxParameter(
            "resizeToAvoidBottomInset",
            _flaxBinding48,
            required: false,
          ),
          FlaxParameter(
            "primary",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "drawerDragStartBehavior",
            _flaxBinding478,
            required: false,
            defaultValue: api7.DragStartBehavior.start,
          ),
          FlaxParameter(
            "extendBody",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "drawerBarrierDismissible",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "extendBodyBehindAppBar",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("drawerScrimColor", _flaxBinding3, required: false),
          FlaxParameter(
            "bottomSheetScrimBuilder",
            _flaxBinding480,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("drawerEdgeDragWidth", _flaxBinding11, required: false),
          FlaxParameter(
            "drawerEnableOpenDragGesture",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "endDrawerEnableOpenDragGesture",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("restorationId", _flaxBinding12, required: false),
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
          FlaxParameter("value", _flaxBinding18, required: true),
          FlaxParameter("onChanged", _flaxBinding241, required: true),
          FlaxParameter("activeColor", _flaxBinding3, required: false),
          FlaxParameter("activeThumbColor", _flaxBinding3, required: false),
          FlaxParameter("activeTrackColor", _flaxBinding3, required: false),
          FlaxParameter("inactiveThumbColor", _flaxBinding3, required: false),
          FlaxParameter("inactiveTrackColor", _flaxBinding3, required: false),
          FlaxParameter("activeThumbImage", _flaxBinding481, required: false),
          FlaxParameter(
            "onActiveThumbImageError",
            _flaxBinding484,
            required: false,
          ),
          FlaxParameter("inactiveThumbImage", _flaxBinding481, required: false),
          FlaxParameter(
            "onInactiveThumbImageError",
            _flaxBinding484,
            required: false,
          ),
          FlaxParameter("thumbColor", _flaxBinding104, required: false),
          FlaxParameter("trackColor", _flaxBinding104, required: false),
          FlaxParameter("trackOutlineColor", _flaxBinding104, required: false),
          FlaxParameter("trackOutlineWidth", _flaxBinding112, required: false),
          FlaxParameter("thumbIcon", _flaxBinding488, required: false),
          FlaxParameter(
            "dragStartBehavior",
            _flaxBinding478,
            required: false,
            defaultValue: api7.DragStartBehavior.start,
          ),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("overlayColor", _flaxBinding104, required: false),
          FlaxParameter("splashRadius", _flaxBinding11, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("padding", _flaxBinding2, required: false),
        ],
        "adaptive": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("value", _flaxBinding18, required: true),
          FlaxParameter("onChanged", _flaxBinding241, required: true),
          FlaxParameter("activeColor", _flaxBinding3, required: false),
          FlaxParameter("activeThumbColor", _flaxBinding3, required: false),
          FlaxParameter("activeTrackColor", _flaxBinding3, required: false),
          FlaxParameter("inactiveThumbColor", _flaxBinding3, required: false),
          FlaxParameter("inactiveTrackColor", _flaxBinding3, required: false),
          FlaxParameter("activeThumbImage", _flaxBinding481, required: false),
          FlaxParameter(
            "onActiveThumbImageError",
            _flaxBinding484,
            required: false,
          ),
          FlaxParameter("inactiveThumbImage", _flaxBinding481, required: false),
          FlaxParameter(
            "onInactiveThumbImageError",
            _flaxBinding484,
            required: false,
          ),
          FlaxParameter("thumbColor", _flaxBinding104, required: false),
          FlaxParameter("trackColor", _flaxBinding104, required: false),
          FlaxParameter("trackOutlineColor", _flaxBinding104, required: false),
          FlaxParameter("trackOutlineWidth", _flaxBinding112, required: false),
          FlaxParameter("thumbIcon", _flaxBinding488, required: false),
          FlaxParameter(
            "dragStartBehavior",
            _flaxBinding478,
            required: false,
            defaultValue: api7.DragStartBehavior.start,
          ),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("focusColor", _flaxBinding3, required: false),
          FlaxParameter("hoverColor", _flaxBinding3, required: false),
          FlaxParameter("overlayColor", _flaxBinding104, required: false),
          FlaxParameter("splashRadius", _flaxBinding11, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("padding", _flaxBinding2, required: false),
          FlaxParameter("applyCupertinoTheme", _flaxBinding48, required: false),
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
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("clipBehavior", _flaxBinding14, required: false),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter(
            "isSemanticButton",
            _flaxBinding48,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("child", _flaxBinding5, required: true),
        ],
        "icon": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("onPressed", _flaxBinding239, required: true),
          FlaxParameter("onLongPress", _flaxBinding239, required: false),
          FlaxParameter("onHover", _flaxBinding241, required: false),
          FlaxParameter("onFocusChange", _flaxBinding241, required: false),
          FlaxParameter("style", _flaxBinding160, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding14,
            required: false,
            defaultValue: api5.Clip.none,
          ),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter("icon", _flaxBinding1, required: false),
          FlaxParameter("label", _flaxBinding5, required: true),
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
            _flaxBinding308,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("controller", _flaxBinding489, required: false),
          FlaxParameter("focusNode", _flaxBinding167, required: false),
          FlaxParameter("undoController", _flaxBinding490, required: false),
          FlaxParameter(
            "decoration",
            _flaxBinding491,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter("keyboardType", _flaxBinding492, required: false),
          FlaxParameter("textInputAction", _flaxBinding493, required: false),
          FlaxParameter(
            "textCapitalization",
            _flaxBinding494,
            required: false,
            defaultValue: api9.TextCapitalization.none,
          ),
          FlaxParameter("style", _flaxBinding4, required: false),
          FlaxParameter("strutStyle", _flaxBinding495, required: false),
          FlaxParameter(
            "textAlign",
            _flaxBinding496,
            required: false,
            defaultValue: api5.TextAlign.start,
          ),
          FlaxParameter("textAlignVertical", _flaxBinding497, required: false),
          FlaxParameter("textDirection", _flaxBinding266, required: false),
          FlaxParameter(
            "readOnly",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("toolbarOptions", _flaxBinding498, required: false),
          FlaxParameter("showCursor", _flaxBinding48, required: false),
          FlaxParameter(
            "autofocus",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("statesController", _flaxBinding242, required: false),
          FlaxParameter(
            "obscuringCharacter",
            _flaxBinding67,
            required: false,
            defaultValue: '•',
          ),
          FlaxParameter(
            "obscureText",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("autocorrect", _flaxBinding48, required: false),
          FlaxParameter("smartDashesType", _flaxBinding499, required: false),
          FlaxParameter("smartQuotesType", _flaxBinding500, required: false),
          FlaxParameter(
            "enableSuggestions",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "maxLines",
            _flaxBinding261,
            required: false,
            defaultValue: 1,
          ),
          FlaxParameter("minLines", _flaxBinding261, required: false),
          FlaxParameter(
            "expands",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("maxLength", _flaxBinding261, required: false),
          FlaxParameter(
            "maxLengthEnforcement",
            _flaxBinding501,
            required: false,
          ),
          FlaxParameter("onChanged", _flaxBinding503, required: false),
          FlaxParameter("onEditingComplete", _flaxBinding239, required: false),
          FlaxParameter("onSubmitted", _flaxBinding503, required: false),
          FlaxParameter(
            "onAppPrivateCommand",
            _flaxBinding506,
            required: false,
          ),
          FlaxParameter("inputFormatters", _flaxBinding509, required: false),
          FlaxParameter("enabled", _flaxBinding48, required: false),
          FlaxParameter("ignorePointers", _flaxBinding48, required: false),
          FlaxParameter(
            "cursorWidth",
            _flaxBinding52,
            required: false,
            defaultValue: 2.0,
          ),
          FlaxParameter("cursorHeight", _flaxBinding11, required: false),
          FlaxParameter("cursorRadius", _flaxBinding510, required: false),
          FlaxParameter(
            "cursorOpacityAnimates",
            _flaxBinding48,
            required: false,
          ),
          FlaxParameter("cursorColor", _flaxBinding3, required: false),
          FlaxParameter("cursorErrorColor", _flaxBinding3, required: false),
          FlaxParameter(
            "selectionHeightStyle",
            _flaxBinding511,
            required: false,
          ),
          FlaxParameter(
            "selectionWidthStyle",
            _flaxBinding512,
            required: false,
          ),
          FlaxParameter("keyboardAppearance", _flaxBinding227, required: false),
          FlaxParameter(
            "scrollPadding",
            _flaxBinding19,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "dragStartBehavior",
            _flaxBinding478,
            required: false,
            defaultValue: api7.DragStartBehavior.start,
          ),
          FlaxParameter(
            "enableInteractiveSelection",
            _flaxBinding48,
            required: false,
          ),
          FlaxParameter("selectAllOnFocus", _flaxBinding48, required: false),
          FlaxParameter("selectionControls", _flaxBinding513, required: false),
          FlaxParameter("onTap", _flaxBinding239, required: false),
          FlaxParameter(
            "onTapAlwaysCalled",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter("onTapOutside", _flaxBinding516, required: false),
          FlaxParameter("onTapUpOutside", _flaxBinding519, required: false),
          FlaxParameter("mouseCursor", _flaxBinding137, required: false),
          FlaxParameter("buildCounter", _flaxBinding521, required: false),
          FlaxParameter("scrollController", _flaxBinding20, required: false),
          FlaxParameter("scrollPhysics", _flaxBinding522, required: false),
          FlaxParameter(
            "autofillHints",
            _flaxBinding523,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "contentInsertionConfiguration",
            _flaxBinding524,
            required: false,
          ),
          FlaxParameter(
            "clipBehavior",
            _flaxBinding244,
            required: false,
            defaultValue: api5.Clip.hardEdge,
          ),
          FlaxParameter("restorationId", _flaxBinding12, required: false),
          FlaxParameter(
            "scribbleEnabled",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "stylusHandwritingEnabled",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "enableIMEPersonalizedLearning",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "enableInlinePrediction",
            _flaxBinding48,
            required: false,
          ),
          FlaxParameter(
            "contextMenuBuilder",
            _flaxBinding527,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "canRequestFocus",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "spellCheckConfiguration",
            _flaxBinding528,
            required: false,
          ),
          FlaxParameter(
            "magnifierConfiguration",
            _flaxBinding529,
            required: false,
          ),
          FlaxParameter("hintLocales", _flaxBinding347, required: false),
        ],
      },
      _TextFieldHost.new,
      matches: _isTextField,
      methods: {},
    ),
    _flaxBinding562,
    FlaxWidgetBinding(
      "flax.material/material#type:Theme",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("data", _flaxBinding563, required: true),
          FlaxParameter("child", _flaxBinding5, required: true),
        ],
      },
      _ThemeHost.new,
      matches: _isTheme,
      methods: {},
    ),
    _flaxBinding606,
    FlaxWidgetBinding(
      "flax.material/material#type:VerticalDivider",
      {
        "": [
          FlaxParameter("key", _flaxBinding0, required: false),
          FlaxParameter("width", _flaxBinding11, required: false),
          FlaxParameter("thickness", _flaxBinding11, required: false),
          FlaxParameter("indent", _flaxBinding11, required: false),
          FlaxParameter("endIndent", _flaxBinding11, required: false),
          FlaxParameter("color", _flaxBinding3, required: false),
          FlaxParameter("radius", _flaxBinding237, required: false),
        ],
      },
      _VerticalDividerHost.new,
      matches: _isVerticalDivider,
      methods: {},
    ),
    _flaxBinding621,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.material/material#read:kTabScrollDuration",
      [],
      _flaxBinding21,
      _read_kTabScrollDuration,
    ),
    FlaxFunctionBinding(
      "flax.material/material#read:kToolbarHeight",
      [],
      _flaxBinding52,
      _read_kToolbarHeight,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:showDialog",
      [
        FlaxParameter("anchorPoint", _flaxBinding622, required: false),
        FlaxParameter("animationStyle", _flaxBinding359, required: false),
        FlaxParameter("barrierColor", _flaxBinding3, required: false),
        FlaxParameter(
          "barrierDismissible",
          _flaxBinding18,
          required: false,
          defaultValue: true,
        ),
        FlaxParameter("barrierLabel", _flaxBinding12, required: false),
        FlaxParameter("builder", _flaxBinding319, required: true),
        FlaxParameter("context", _flaxBinding148, required: true),
        FlaxParameter(
          "fullscreenDialog",
          _flaxBinding18,
          required: false,
          defaultValue: false,
        ),
        FlaxParameter("requestFocus", _flaxBinding48, required: false),
        FlaxParameter("routeSettings", _flaxBinding462, required: false),
        FlaxParameter(
          "traversalEdgeBehavior",
          _flaxBinding383,
          required: false,
        ),
        FlaxParameter(
          "useRootNavigator",
          _flaxBinding18,
          required: false,
          defaultValue: true,
        ),
        FlaxParameter(
          "useSafeArea",
          _flaxBinding18,
          required: false,
          defaultValue: true,
        ),
      ],
      _flaxBinding623,
      _function_showDialog,
      route: FlaxRouteCallBinding(["builder"]),
      genericFactory: _flaxGenericFunction0,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:AppBar.preferredHeightFor",
      [
        FlaxParameter("context", _flaxBinding148, required: true),
        FlaxParameter("preferredSize", _flaxBinding23, required: true),
      ],
      _flaxBinding52,
      _AppBar_preferredHeightFor,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ButtonStyle.lerp",
      [
        FlaxParameter("a", _flaxBinding160, required: true),
        FlaxParameter("b", _flaxBinding160, required: true),
        FlaxParameter("t", _flaxBinding52, required: true),
      ],
      _flaxBinding160,
      _ButtonStyle_lerp,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ColorScheme.lerp",
      [
        FlaxParameter("a", _flaxBinding229, required: true),
        FlaxParameter("b", _flaxBinding229, required: true),
        FlaxParameter("t", _flaxBinding52, required: true),
      ],
      _flaxBinding229,
      _ColorScheme_lerp,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ColorScheme.fromImageProvider",
      [
        FlaxParameter("background", _flaxBinding3, required: false),
        FlaxParameter(
          "brightness",
          _flaxBinding171,
          required: false,
          defaultValue: api.Brightness.light,
        ),
        FlaxParameter(
          "contrastLevel",
          _flaxBinding52,
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
        FlaxParameter("provider", _flaxBinding624, required: true),
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
      _flaxBinding625,
      _ColorScheme_fromImageProvider,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ColorScheme.of",
      [FlaxParameter("context", _flaxBinding148, required: true)],
      _flaxBinding229,
      _ColorScheme_of,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:Divider.createBorderSide",
      [
        FlaxParameter("context", _flaxBinding400, required: true),
        FlaxParameter("color", _flaxBinding3, required: false),
        FlaxParameter("width", _flaxBinding11, required: false),
      ],
      _flaxBinding626,
      _Divider_createBorderSide,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ElevatedButton.styleFrom",
      [
        FlaxParameter("alignment", _flaxBinding16, required: false),
        FlaxParameter("animationDuration", _flaxBinding144, required: false),
        FlaxParameter("backgroundBuilder", _flaxBinding150, required: false),
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
        FlaxParameter("disabledMouseCursor", _flaxBinding137, required: false),
        FlaxParameter("elevation", _flaxBinding11, required: false),
        FlaxParameter("enableFeedback", _flaxBinding48, required: false),
        FlaxParameter("enabledMouseCursor", _flaxBinding137, required: false),
        FlaxParameter("fixedSize", _flaxBinding118, required: false),
        FlaxParameter("foregroundBuilder", _flaxBinding150, required: false),
        FlaxParameter("foregroundColor", _flaxBinding3, required: false),
        FlaxParameter("iconColor", _flaxBinding3, required: false),
        FlaxParameter("iconSize", _flaxBinding11, required: false),
        FlaxParameter("maximumSize", _flaxBinding118, required: false),
        FlaxParameter("minimumSize", _flaxBinding118, required: false),
        FlaxParameter("overlayColor", _flaxBinding3, required: false),
        FlaxParameter("padding", _flaxBinding2, required: false),
        FlaxParameter("shadowColor", _flaxBinding3, required: false),
        FlaxParameter("shape", _flaxBinding132, required: false),
        FlaxParameter("side", _flaxBinding127, required: false),
        FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
        FlaxParameter("textStyle", _flaxBinding4, required: false),
        FlaxParameter("visualDensity", _flaxBinding142, required: false),
      ],
      _flaxBinding158,
      _ElevatedButton_styleFrom,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:FilledButton.styleFrom",
      [
        FlaxParameter("alignment", _flaxBinding16, required: false),
        FlaxParameter("animationDuration", _flaxBinding144, required: false),
        FlaxParameter("backgroundBuilder", _flaxBinding150, required: false),
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
        FlaxParameter("disabledMouseCursor", _flaxBinding137, required: false),
        FlaxParameter("elevation", _flaxBinding11, required: false),
        FlaxParameter("enableFeedback", _flaxBinding48, required: false),
        FlaxParameter("enabledMouseCursor", _flaxBinding137, required: false),
        FlaxParameter("fixedSize", _flaxBinding118, required: false),
        FlaxParameter("foregroundBuilder", _flaxBinding150, required: false),
        FlaxParameter("foregroundColor", _flaxBinding3, required: false),
        FlaxParameter("iconColor", _flaxBinding3, required: false),
        FlaxParameter("iconSize", _flaxBinding11, required: false),
        FlaxParameter("maximumSize", _flaxBinding118, required: false),
        FlaxParameter("minimumSize", _flaxBinding118, required: false),
        FlaxParameter("overlayColor", _flaxBinding3, required: false),
        FlaxParameter("padding", _flaxBinding2, required: false),
        FlaxParameter("shadowColor", _flaxBinding3, required: false),
        FlaxParameter("shape", _flaxBinding132, required: false),
        FlaxParameter("side", _flaxBinding127, required: false),
        FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
        FlaxParameter("textStyle", _flaxBinding4, required: false),
        FlaxParameter("visualDensity", _flaxBinding142, required: false),
      ],
      _flaxBinding158,
      _FilledButton_styleFrom,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:IconButton.styleFrom",
      [
        FlaxParameter("alignment", _flaxBinding16, required: false),
        FlaxParameter("animationDuration", _flaxBinding144, required: false),
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
        FlaxParameter("disabledMouseCursor", _flaxBinding137, required: false),
        FlaxParameter("elevation", _flaxBinding11, required: false),
        FlaxParameter("enableFeedback", _flaxBinding48, required: false),
        FlaxParameter("enabledMouseCursor", _flaxBinding137, required: false),
        FlaxParameter("fixedSize", _flaxBinding118, required: false),
        FlaxParameter("focusColor", _flaxBinding3, required: false),
        FlaxParameter("foregroundColor", _flaxBinding3, required: false),
        FlaxParameter("highlightColor", _flaxBinding3, required: false),
        FlaxParameter("hoverColor", _flaxBinding3, required: false),
        FlaxParameter("iconSize", _flaxBinding11, required: false),
        FlaxParameter("maximumSize", _flaxBinding118, required: false),
        FlaxParameter("minimumSize", _flaxBinding118, required: false),
        FlaxParameter("overlayColor", _flaxBinding3, required: false),
        FlaxParameter("padding", _flaxBinding2, required: false),
        FlaxParameter("shadowColor", _flaxBinding3, required: false),
        FlaxParameter("shape", _flaxBinding132, required: false),
        FlaxParameter("side", _flaxBinding127, required: false),
        FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
        FlaxParameter("visualDensity", _flaxBinding142, required: false),
      ],
      _flaxBinding158,
      _IconButton_styleFrom,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ListTile.divideTiles",
      [
        FlaxParameter("color", _flaxBinding3, required: false),
        FlaxParameter("context", _flaxBinding400, required: false),
        FlaxParameter("tiles", _flaxBinding6, required: true),
      ],
      _flaxBinding6,
      _ListTile_divideTiles,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:MaterialApp.createMaterialHeroController",
      [],
      _flaxBinding627,
      _MaterialApp_createMaterialHeroController,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:OutlinedButton.styleFrom",
      [
        FlaxParameter("alignment", _flaxBinding16, required: false),
        FlaxParameter("animationDuration", _flaxBinding144, required: false),
        FlaxParameter("backgroundBuilder", _flaxBinding150, required: false),
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
        FlaxParameter("disabledMouseCursor", _flaxBinding137, required: false),
        FlaxParameter("elevation", _flaxBinding11, required: false),
        FlaxParameter("enableFeedback", _flaxBinding48, required: false),
        FlaxParameter("enabledMouseCursor", _flaxBinding137, required: false),
        FlaxParameter("fixedSize", _flaxBinding118, required: false),
        FlaxParameter("foregroundBuilder", _flaxBinding150, required: false),
        FlaxParameter("foregroundColor", _flaxBinding3, required: false),
        FlaxParameter("iconColor", _flaxBinding3, required: false),
        FlaxParameter("iconSize", _flaxBinding11, required: false),
        FlaxParameter("maximumSize", _flaxBinding118, required: false),
        FlaxParameter("minimumSize", _flaxBinding118, required: false),
        FlaxParameter("overlayColor", _flaxBinding3, required: false),
        FlaxParameter("padding", _flaxBinding2, required: false),
        FlaxParameter("shadowColor", _flaxBinding3, required: false),
        FlaxParameter("shape", _flaxBinding132, required: false),
        FlaxParameter("side", _flaxBinding127, required: false),
        FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
        FlaxParameter("textStyle", _flaxBinding4, required: false),
        FlaxParameter("visualDensity", _flaxBinding142, required: false),
      ],
      _flaxBinding158,
      _OutlinedButton_styleFrom,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:Scaffold.hasDrawer",
      [
        FlaxParameter("context", _flaxBinding148, required: true),
        FlaxParameter(
          "registerForUpdates",
          _flaxBinding18,
          required: false,
          defaultValue: true,
        ),
      ],
      _flaxBinding18,
      _Scaffold_hasDrawer,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:TextButton.styleFrom",
      [
        FlaxParameter("alignment", _flaxBinding16, required: false),
        FlaxParameter("animationDuration", _flaxBinding144, required: false),
        FlaxParameter("backgroundBuilder", _flaxBinding150, required: false),
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
        FlaxParameter("disabledMouseCursor", _flaxBinding137, required: false),
        FlaxParameter("elevation", _flaxBinding11, required: false),
        FlaxParameter("enableFeedback", _flaxBinding48, required: false),
        FlaxParameter("enabledMouseCursor", _flaxBinding137, required: false),
        FlaxParameter("fixedSize", _flaxBinding118, required: false),
        FlaxParameter("foregroundBuilder", _flaxBinding150, required: false),
        FlaxParameter("foregroundColor", _flaxBinding3, required: false),
        FlaxParameter("iconColor", _flaxBinding3, required: false),
        FlaxParameter("iconSize", _flaxBinding11, required: false),
        FlaxParameter("maximumSize", _flaxBinding118, required: false),
        FlaxParameter("minimumSize", _flaxBinding118, required: false),
        FlaxParameter("overlayColor", _flaxBinding3, required: false),
        FlaxParameter("padding", _flaxBinding2, required: false),
        FlaxParameter("shadowColor", _flaxBinding3, required: false),
        FlaxParameter("shape", _flaxBinding132, required: false),
        FlaxParameter("side", _flaxBinding127, required: false),
        FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
        FlaxParameter("textStyle", _flaxBinding4, required: false),
        FlaxParameter("visualDensity", _flaxBinding142, required: false),
      ],
      _flaxBinding158,
      _TextButton_styleFrom,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:TextField.inferAndroidSpellCheckConfiguration",
      [FlaxParameter("configuration", _flaxBinding528, required: true)],
      _flaxBinding628,
      _TextField_inferAndroidSpellCheckConfiguration,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:TextTheme.lerp",
      [
        FlaxParameter("a", _flaxBinding552, required: true),
        FlaxParameter("b", _flaxBinding552, required: true),
        FlaxParameter("t", _flaxBinding52, required: true),
      ],
      _flaxBinding550,
      _TextTheme_lerp,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:TextTheme.of",
      [FlaxParameter("context", _flaxBinding148, required: true)],
      _flaxBinding550,
      _TextTheme_of,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:TextTheme.primaryOf",
      [FlaxParameter("context", _flaxBinding148, required: true)],
      _flaxBinding550,
      _TextTheme_primaryOf,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:Theme.of",
      [FlaxParameter("context", _flaxBinding148, required: true)],
      _flaxBinding563,
      _Theme_of,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:Theme.brightnessOf",
      [FlaxParameter("context", _flaxBinding148, required: true)],
      _flaxBinding171,
      _Theme_brightnessOf,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:Theme.maybeBrightnessOf",
      [FlaxParameter("context", _flaxBinding148, required: true)],
      _flaxBinding227,
      _Theme_maybeBrightnessOf,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ThemeData.localize",
      [
        FlaxParameter("baseTheme", _flaxBinding563, required: true),
        FlaxParameter("localTextGeometry", _flaxBinding550, required: true),
      ],
      _flaxBinding563,
      _ThemeData_localize,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ThemeData.estimateBrightnessForColor",
      [FlaxParameter("color", _flaxBinding173, required: true)],
      _flaxBinding171,
      _ThemeData_estimateBrightnessForColor,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:ThemeData.lerp",
      [
        FlaxParameter("a", _flaxBinding563, required: true),
        FlaxParameter("b", _flaxBinding563, required: true),
        FlaxParameter("t", _flaxBinding52, required: true),
      ],
      _flaxBinding563,
      _ThemeData_lerp,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:VisualDensity.defaultDensityForPlatform",
      [FlaxParameter("platform", _flaxBinding566, required: true)],
      _flaxBinding569,
      _VisualDensity_defaultDensityForPlatform,
    ),
    FlaxFunctionBinding(
      "flax.material/material#function:VisualDensity.lerp",
      [
        FlaxParameter("a", _flaxBinding569, required: true),
        FlaxParameter("b", _flaxBinding569, required: true),
        FlaxParameter("t", _flaxBinding52, required: true),
      ],
      _flaxBinding569,
      _VisualDensity_lerp,
    ),
    FlaxFunctionBinding(
      "flax.material/material#read:VisualDensity.adaptivePlatformDensity",
      [],
      _flaxBinding569,
      _VisualDensity_static_get_adaptivePlatformDensity,
    ),
  ],
  constants: [
    FlaxConstantGroup(_flaxBinding52, {
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
    FlaxConstantGroup(_flaxBinding21, {
      "flax.material/material#read:CircularProgressIndicator.defaultAnimationDuration":
          api.CircularProgressIndicator.defaultAnimationDuration,
      "flax.material/material#read:LinearProgressIndicator.defaultAnimationDuration":
          api.LinearProgressIndicator.defaultAnimationDuration,
    }),
    FlaxConstantGroup(_flaxBinding83, {
      "flax.material/material#read:TextField.noMaxLength":
          api.TextField.noMaxLength,
    }),
    FlaxConstantGroup(_flaxBinding629, {
      "flax.material/material#read:TextField.materialMisspelledTextStyle":
          api.TextField.materialMisspelledTextStyle,
    }),
    FlaxConstantGroup(_flaxBinding569, {
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
  ],
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
    semanticsService: values["semanticsService"] as api12.SemanticsService?,
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
      FlaxParameter("anchorPoint", _flaxBinding622, required: false),
      FlaxParameter("animationStyle", _flaxBinding359, required: false),
      FlaxParameter("barrierColor", _flaxBinding3, required: false),
      FlaxParameter(
        "barrierDismissible",
        _flaxBinding18,
        required: false,
        defaultValue: true,
      ),
      FlaxParameter("barrierLabel", _flaxBinding12, required: false),
      FlaxParameter(
        "builder",
        FlaxTypeRef(
          "callback",
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "context",
                _flaxBinding148,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding5,
            FlaxCallbackAdapters.wrap1<api1.BuildContext, api1.Widget>,
            id: types.key<api1.Widget Function(api1.BuildContext context)>() + ":callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
            invoke:
                FlaxCallbackAdapters.invoke1<api1.BuildContext, api1.Widget>,
            matches:
                FlaxCallbackAdapters.matches1<api1.BuildContext, api1.Widget>,
          ),
        ),
        required: true,
      ),
      FlaxParameter("context", _flaxBinding148, required: true),
      FlaxParameter(
        "fullscreenDialog",
        _flaxBinding18,
        required: false,
        defaultValue: false,
      ),
      FlaxParameter("requestFocus", _flaxBinding48, required: false),
      FlaxParameter("routeSettings", _flaxBinding462, required: false),
      FlaxParameter("traversalEdgeBehavior", _flaxBinding383, required: false),
      FlaxParameter(
        "useRootNavigator",
        _flaxBinding18,
        required: false,
        defaultValue: true,
      ),
      FlaxParameter(
        "useSafeArea",
        _flaxBinding18,
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
        FlaxGetter("name", _flaxBinding12, _MaterialPage_name),
        FlaxGetter("arguments", _flaxBinding243, _MaterialPage_arguments),
        FlaxGetter("key", _flaxBinding367, _MaterialPage_key),
        FlaxGetter(
          "restorationId",
          _flaxBinding12,
          _MaterialPage_restorationId,
        ),
        FlaxGetter(
          "onPopInvoked",
          types.define<void Function(bool didPop, _Owner0? result)>(
            FlaxTypeRef(
              "callback",
              nullable: false,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "didPop",
                    _flaxBinding18,
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "result",
                    types.ref<_Owner0?>(withinCallback: true),
                    required: true,
                    positional: true,
                  ),
                ],
                _flaxBinding78,
                FlaxCallbackAdapters.wrapVoid2<bool, _Owner0?>,
                id: types.key<void Function(bool didPop, _Owner0? result)>() + ":callback:<>(p:r:didPop:bool:,p:r:result:parameter?:)->void:",
                invoke: FlaxCallbackAdapters.invokeVoid2<bool, _Owner0?>,
                matches: FlaxCallbackAdapters.matchesVoid2<bool, _Owner0?>,
              ),
            ),
          ),
          _MaterialPage_onPopInvoked,
        ),
        FlaxGetter("canPop", _flaxBinding18, _MaterialPage_canPop),
        FlaxGetter("child", _flaxBinding5, _MaterialPage_child),
        FlaxGetter(
          "maintainState",
          _flaxBinding18,
          _MaterialPage_maintainState,
        ),
        FlaxGetter(
          "fullscreenDialog",
          _flaxBinding18,
          _MaterialPage_fullscreenDialog,
        ),
        FlaxGetter(
          "allowSnapshotting",
          _flaxBinding18,
          _MaterialPage_allowSnapshotting,
        ),
      ],
      {
        "toString": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding67,
          _MaterialPage_toString,
        ),
        "canUpdate": FlaxInstanceMethod(
          _flaxBinding376,
          _flaxBinding18,
          _MaterialPage_canUpdate,
        ),
        "createRoute": FlaxInstanceMethod(
          _flaxBinding377,
          types.ref<api1.Route<_Owner0>>(),
          _MaterialPage_createRoute,
        ),
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter("child", _flaxBinding5, required: true),
          FlaxParameter(
            "maintainState",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "fullscreenDialog",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "allowSnapshotting",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter("key", _flaxBinding367, required: false),
          FlaxParameter(
            "canPop",
            _flaxBinding18,
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
                    FlaxCallbackParameter(
                      "didPop",
                      _flaxBinding18,
                      required: true,
                      positional: true,
                    ),
                    FlaxCallbackParameter(
                      "result",
                      types.ref<_Owner0?>(withinCallback: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding78,
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
          FlaxParameter("name", _flaxBinding12, required: false),
          FlaxParameter("arguments", _flaxBinding243, required: false),
          FlaxParameter("restorationId", _flaxBinding12, required: false),
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
        FlaxGetter("filter", _flaxBinding381, _MaterialPageRoute_filter),
        FlaxGetter(
          "traversalEdgeBehavior",
          _flaxBinding383,
          _MaterialPageRoute_traversalEdgeBehavior,
        ),
        FlaxGetter(
          "directionalTraversalEdgeBehavior",
          _flaxBinding383,
          _MaterialPageRoute_directionalTraversalEdgeBehavior,
        ),
        FlaxGetter(
          "delegatedTransition",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "context",
                  _flaxBinding148,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "animation",
                  _flaxBinding386,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "secondaryAnimation",
                  _flaxBinding386,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "allowSnapshotting",
                  _flaxBinding18,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "child",
                  _flaxBinding1,
                  required: true,
                  positional: true,
                ),
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
        FlaxGetter(
          "receivedTransition",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "context",
                  _flaxBinding148,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "animation",
                  _flaxBinding386,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "secondaryAnimation",
                  _flaxBinding386,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "allowSnapshotting",
                  _flaxBinding18,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "child",
                  _flaxBinding1,
                  required: true,
                  positional: true,
                ),
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
        FlaxGetter(
          "barrierDismissible",
          _flaxBinding18,
          _MaterialPageRoute_barrierDismissible,
        ),
        FlaxGetter(
          "semanticsDismissible",
          _flaxBinding18,
          _MaterialPageRoute_semanticsDismissible,
        ),
        FlaxGetter(
          "barrierColor",
          _flaxBinding3,
          _MaterialPageRoute_barrierColor,
        ),
        FlaxGetter(
          "barrierLabel",
          _flaxBinding12,
          _MaterialPageRoute_barrierLabel,
        ),
        FlaxGetter(
          "barrierCurve",
          _flaxBinding22,
          _MaterialPageRoute_barrierCurve,
        ),
        FlaxGetter(
          "maintainState",
          _flaxBinding18,
          _MaterialPageRoute_maintainState,
        ),
        FlaxGetter(
          "popGestureInProgress",
          _flaxBinding18,
          _MaterialPageRoute_popGestureInProgress,
        ),
        FlaxGetter(
          "popGestureEnabled",
          _flaxBinding18,
          _MaterialPageRoute_popGestureEnabled,
        ),
        FlaxGetter("offstage", _flaxBinding18, _MaterialPageRoute_offstage),
        FlaxGetter(
          "subtreeContext",
          _flaxBinding400,
          _MaterialPageRoute_subtreeContext,
        ),
        FlaxGetter("animation", _flaxBinding402, _MaterialPageRoute_animation),
        FlaxGetter(
          "secondaryAnimation",
          _flaxBinding402,
          _MaterialPageRoute_secondaryAnimation,
        ),
        FlaxGetter(
          "popDisposition",
          _flaxBinding405,
          _MaterialPageRoute_popDisposition,
        ),
        FlaxGetter(
          "hasScopedWillPopCallback",
          _flaxBinding18,
          _MaterialPageRoute_hasScopedWillPopCallback,
        ),
        FlaxGetter("canPop", _flaxBinding18, _MaterialPageRoute_canPop),
        FlaxGetter(
          "impliesAppBarDismissal",
          _flaxBinding18,
          _MaterialPageRoute_impliesAppBarDismissal,
        ),
        FlaxGetter(
          "fullscreenDialog",
          _flaxBinding18,
          _MaterialPageRoute_fullscreenDialog,
        ),
        FlaxGetter(
          "completed",
          types.ref<Future<_Owner0?>>(),
          _MaterialPageRoute_completed,
        ),
        FlaxGetter(
          "transitionDuration",
          _flaxBinding21,
          _MaterialPageRoute_transitionDuration,
        ),
        FlaxGetter(
          "reverseTransitionDuration",
          _flaxBinding21,
          _MaterialPageRoute_reverseTransitionDuration,
        ),
        FlaxGetter("opaque", _flaxBinding18, _MaterialPageRoute_opaque),
        FlaxGetter(
          "allowSnapshotting",
          _flaxBinding18,
          _MaterialPageRoute_allowSnapshotting,
        ),
        FlaxGetter(
          "finishedWhenPopped",
          _flaxBinding18,
          _MaterialPageRoute_finishedWhenPopped,
        ),
        FlaxGetter(
          "controller",
          _flaxBinding170,
          _MaterialPageRoute_controller,
        ),
        FlaxGetter(
          "willDisposeAnimationController",
          _flaxBinding18,
          _MaterialPageRoute_willDisposeAnimationController,
        ),
        FlaxGetter("debugLabel", _flaxBinding67, _MaterialPageRoute_debugLabel),
        FlaxGetter(
          "overlayEntries",
          _flaxBinding421,
          _MaterialPageRoute_overlayEntries,
        ),
        FlaxGetter(
          "requestFocus",
          _flaxBinding18,
          _MaterialPageRoute_requestFocus,
        ),
        FlaxGetter("navigator", _flaxBinding424, _MaterialPageRoute_navigator),
        FlaxGetter("settings", _flaxBinding321, _MaterialPageRoute_settings),
        FlaxGetter(
          "restorationScopeId",
          _flaxBinding427,
          _MaterialPageRoute_restorationScopeId,
        ),
        FlaxGetter(
          "willHandlePopInternally",
          _flaxBinding18,
          _MaterialPageRoute_willHandlePopInternally,
        ),
        FlaxGetter(
          "currentResult",
          types.ref<_Owner0?>(),
          _MaterialPageRoute_currentResult,
        ),
        FlaxGetter(
          "popped",
          types.ref<Future<_Owner0?>>(),
          _MaterialPageRoute_popped,
        ),
        FlaxGetter("isCurrent", _flaxBinding18, _MaterialPageRoute_isCurrent),
        FlaxGetter("isFirst", _flaxBinding18, _MaterialPageRoute_isFirst),
        FlaxGetter(
          "hasActiveRouteBelow",
          _flaxBinding18,
          _MaterialPageRoute_hasActiveRouteBelow,
        ),
        FlaxGetter("isActive", _flaxBinding18, _MaterialPageRoute_isActive),
        FlaxGetter(
          "builder",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "context",
                  _flaxBinding148,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding5,
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
        "setState": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "fn",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding78,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding78,
          _MaterialPageRoute_setState,
        ),
        "buildPage": FlaxInstanceMethod(
          _flaxBinding437,
          _flaxBinding5,
          _MaterialPageRoute_buildPage,
        ),
        "buildTransitions": FlaxInstanceMethod(
          _flaxBinding438,
          _flaxBinding5,
          _MaterialPageRoute_buildTransitions,
        ),
        "install": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_install,
        ),
        "didPush": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding439,
          _MaterialPageRoute_didPush,
        ),
        "didAdd": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_didAdd,
        ),
        "willPop": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding440,
          _MaterialPageRoute_willPop,
        ),
        "onPopInvokedWithResult": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter("didPop", _flaxBinding18, required: true),
            FlaxParameter("result", types.ref<_Owner0?>(), required: true),
          ],
          _flaxBinding78,
          _MaterialPageRoute_onPopInvokedWithResult,
        ),
        "addScopedWillPopCallback": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "callback",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding441,
                  _callback3,
                  id:
                      types.key<Future<bool> Function()>() +
                      ":callback:<>()->future:[bool:]",
                  invoke: _callback3Invoke,
                  matches: _callback3Matches,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding78,
          _MaterialPageRoute_addScopedWillPopCallback,
        ),
        "removeScopedWillPopCallback": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "callback",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding441,
                  _callback4,
                  id:
                      types.key<Future<bool> Function()>() +
                      ":callback:<>()->future:[bool:]",
                  invoke: _callback4Invoke,
                  matches: _callback4Matches,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding78,
          _MaterialPageRoute_removeScopedWillPopCallback,
        ),
        "registerPopEntry": FlaxInstanceMethod(
          _flaxBinding446,
          _flaxBinding78,
          _MaterialPageRoute_registerPopEntry,
        ),
        "unregisterPopEntry": FlaxInstanceMethod(
          _flaxBinding446,
          _flaxBinding78,
          _MaterialPageRoute_unregisterPopEntry,
        ),
        "didChangePrevious": FlaxInstanceMethod(
          _flaxBinding447,
          _flaxBinding78,
          _MaterialPageRoute_didChangePrevious,
        ),
        "didChangeNext": FlaxInstanceMethod(
          _flaxBinding448,
          _flaxBinding78,
          _MaterialPageRoute_didChangeNext,
        ),
        "didPopNext": FlaxInstanceMethod(
          _flaxBinding449,
          _flaxBinding78,
          _MaterialPageRoute_didPopNext,
        ),
        "changedInternalState": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_changedInternalState,
        ),
        "changedExternalState": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_changedExternalState,
        ),
        "buildModalBarrier": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding5,
          _MaterialPageRoute_buildModalBarrier,
        ),
        "createOverlayEntries": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding420,
          _MaterialPageRoute_createOverlayEntries,
        ),
        "toString": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding67,
          _MaterialPageRoute_toString,
        ),
        "debugTransitionCompleted": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding18,
          _MaterialPageRoute_debugTransitionCompleted,
        ),
        "createAnimationController": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding450,
          _MaterialPageRoute_createAnimationController,
        ),
        "createAnimation": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding386,
          _MaterialPageRoute_createAnimation,
        ),
        "createSimulation": FlaxInstanceMethod(
          _flaxBinding452,
          _flaxBinding451,
          _MaterialPageRoute_createSimulation,
        ),
        "didReplace": FlaxInstanceMethod(
          _flaxBinding453,
          _flaxBinding78,
          _MaterialPageRoute_didReplace,
        ),
        "didPop": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter("result", types.ref<_Owner0?>(), required: true),
          ],
          _flaxBinding18,
          _MaterialPageRoute_didPop,
        ),
        "canTransitionTo": FlaxInstanceMethod(
          _flaxBinding455,
          _flaxBinding18,
          _MaterialPageRoute_canTransitionTo,
        ),
        "canTransitionFrom": FlaxInstanceMethod(
          _flaxBinding456,
          _flaxBinding18,
          _MaterialPageRoute_canTransitionFrom,
        ),
        "handleStartBackGesture": FlaxInstanceMethod(
          _flaxBinding457,
          _flaxBinding78,
          _MaterialPageRoute_handleStartBackGesture,
        ),
        "handleUpdateBackGestureProgress": FlaxInstanceMethod(
          _flaxBinding458,
          _flaxBinding78,
          _MaterialPageRoute_handleUpdateBackGestureProgress,
        ),
        "handleCancelBackGesture": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_handleCancelBackGesture,
        ),
        "handleCommitBackGesture": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_handleCommitBackGesture,
        ),
        "dispose": FlaxInstanceMethod(
          _flaxBinding68,
          _flaxBinding78,
          _MaterialPageRoute_dispose,
        ),
        "onPopInvoked": FlaxInstanceMethod(
          _flaxBinding459,
          _flaxBinding78,
          _MaterialPageRoute_onPopInvoked,
        ),
        "didComplete": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter("result", types.ref<_Owner0?>(), required: true),
          ],
          _flaxBinding78,
          _MaterialPageRoute_didComplete,
        ),
        "addLocalHistoryEntry": FlaxInstanceMethod(
          _flaxBinding461,
          _flaxBinding78,
          _MaterialPageRoute_addLocalHistoryEntry,
        ),
        "removeLocalHistoryEntry": FlaxInstanceMethod(
          _flaxBinding461,
          _flaxBinding78,
          _MaterialPageRoute_removeLocalHistoryEntry,
        ),
        "buildContent": FlaxInstanceMethod(
          _flaxBinding377,
          _flaxBinding5,
          _MaterialPageRoute_buildContent,
        ),
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter(
            "builder",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "context",
                    _flaxBinding148,
                    required: true,
                    positional: true,
                  ),
                ],
                _flaxBinding5,
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
            required: true,
          ),
          FlaxParameter("settings", _flaxBinding462, required: false),
          FlaxParameter("requestFocus", _flaxBinding48, required: false),
          FlaxParameter(
            "maintainState",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "fullscreenDialog",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "allowSnapshotting",
            _flaxBinding18,
            required: false,
            defaultValue: true,
          ),
          FlaxParameter(
            "barrierDismissible",
            _flaxBinding18,
            required: false,
            defaultValue: false,
          ),
          FlaxParameter(
            "traversalEdgeBehavior",
            _flaxBinding383,
            required: false,
          ),
          FlaxParameter(
            "directionalTraversalEdgeBehavior",
            _flaxBinding383,
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
                FlaxCallbackParameter(
                  "context",
                  _flaxBinding148,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "animation",
                  _flaxBinding386,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "secondaryAnimation",
                  _flaxBinding386,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "allowSnapshotting",
                  _flaxBinding18,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "child",
                  _flaxBinding1,
                  required: true,
                  positional: true,
                ),
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
        FlaxSetter("offstage", _flaxBinding18, _MaterialPageRoute_set_offstage),
        FlaxSetter(
          "willDisposeAnimationController",
          _flaxBinding18,
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

      return FlaxInstanceMethod(_flaxBinding68, types.ref<_Method0?>(), invoke);
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
              FlaxCallbackParameter(
                "notification",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
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
              FlaxCallbackParameter(
                "context",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "states",
                types.ref<_Shape1>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "child",
                types.ref<_Shape2>(withinCallback: true),
                required: true,
                positional: true,
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
              FlaxCallbackParameter(
                "context",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "animation",
                types.ref<_Shape1>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "secondaryAnimation",
                types.ref<_Shape2>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "allowSnapshotting",
                types.ref<_Shape3>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "child",
                types.ref<_Shape4>(withinCallback: true),
                required: true,
                positional: true,
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
              FlaxCallbackParameter(
                "context",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "currentLength",
                types.ref<_Shape1>(withinCallback: true),
                required: true,
                positional: false,
              ),
              FlaxCallbackParameter(
                "isFocused",
                types.ref<_Shape2>(withinCallback: true),
                required: true,
                positional: false,
              ),
              FlaxCallbackParameter(
                "maxLength",
                types.ref<_Shape3>(withinCallback: true),
                required: true,
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
const _flaxBinding5 = FlaxTypeRef("widget");
const _flaxBinding6 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding5,
  collection: FlaxCollectionBinding(
    "iterable:[widget:]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding7 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding5,
  collection: FlaxCollectionBinding(
    "list:[widget:]",
    _collection0Create,
    _collection0Matches,
    snapshot: _collection0Snapshot,
  ),
  iterable: _flaxBinding6,
);
const _flaxBinding8 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:MainAxisAlignment",
  nullable: true,
);
const _flaxBinding9 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_widgets#type:OverflowBarAlignment",
  nullable: true,
);
const _flaxBinding10 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:VerticalDirection",
  nullable: true,
);
const _flaxBinding11 = FlaxTypeRef("double", nullable: true);
const _flaxBinding12 = FlaxTypeRef("String", nullable: true);
const _flaxBinding13 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EdgeInsets",
  nullable: true,
);
const _flaxBinding14 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:Clip",
  nullable: true,
);
const _flaxBinding15 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ShapeBorder",
  nullable: true,
);
const _flaxBinding16 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:AlignmentGeometry",
  nullable: true,
);
const _flaxBinding17 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BoxConstraints",
  nullable: true,
);
const _flaxBinding18 = FlaxTypeRef("bool");
const _flaxBinding19 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EdgeInsets",
);
const _flaxBinding20 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ScrollController",
  nullable: true,
);
const _flaxBinding21 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
);
const _flaxBinding22 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Curve",
);
const _flaxBinding23 = FlaxTypeRef("object", id: "flax.core/flutter#type:Size");
const _flaxBinding24 = FlaxGetter(
  "preferredSize",
  _flaxBinding23,
  _AppBar_preferredSize,
);
const _flaxBinding25 = FlaxGetter("leading", _flaxBinding1, _AppBar_leading);
const _flaxBinding26 = FlaxGetter(
  "automaticallyImplyLeading",
  _flaxBinding18,
  _AppBar_automaticallyImplyLeading,
);
const _flaxBinding27 = FlaxGetter("title", _flaxBinding1, _AppBar_title);
const _flaxBinding28 = FlaxGetter("actions", _flaxBinding7, _AppBar_actions);
const _flaxBinding29 = FlaxGetter(
  "automaticallyImplyActions",
  _flaxBinding18,
  _AppBar_automaticallyImplyActions,
);
const _flaxBinding30 = FlaxGetter(
  "flexibleSpace",
  _flaxBinding1,
  _AppBar_flexibleSpace,
);
const _flaxBinding31 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:PreferredSizeWidget",
  nullable: true,
);
const _flaxBinding32 = FlaxGetter("bottom", _flaxBinding31, _AppBar_bottom);
const _flaxBinding33 = FlaxGetter(
  "elevation",
  _flaxBinding11,
  _AppBar_elevation,
);
const _flaxBinding34 = FlaxGetter(
  "scrolledUnderElevation",
  _flaxBinding11,
  _AppBar_scrolledUnderElevation,
);
const _flaxBinding35 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ScrollNotification",
);
const _flaxBinding36 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "notification",
      _flaxBinding35,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding18,
  FlaxCallbackAdapters.wrap1<api1.ScrollNotification, bool>,
  id: "callback:<>(p:r:notification:object:flax.core/sdk_widgets#type:ScrollNotification)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api1.ScrollNotification, bool>,
  matches: FlaxCallbackAdapters.matches1<api1.ScrollNotification, bool>,
);
const _flaxBinding37 = FlaxTypeRef("callback", callback: _flaxBinding36);
const _flaxBinding38 = FlaxGetter(
  "notificationPredicate",
  _flaxBinding37,
  _AppBar_notificationPredicate,
);
const _flaxBinding39 = FlaxGetter(
  "shadowColor",
  _flaxBinding3,
  _AppBar_shadowColor,
);
const _flaxBinding40 = FlaxGetter(
  "surfaceTintColor",
  _flaxBinding3,
  _AppBar_surfaceTintColor,
);
const _flaxBinding41 = FlaxGetter("shape", _flaxBinding15, _AppBar_shape);
const _flaxBinding42 = FlaxGetter(
  "backgroundColor",
  _flaxBinding3,
  _AppBar_backgroundColor,
);
const _flaxBinding43 = FlaxGetter(
  "foregroundColor",
  _flaxBinding3,
  _AppBar_foregroundColor,
);
const _flaxBinding44 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:IconThemeData",
  nullable: true,
);
const _flaxBinding45 = FlaxGetter(
  "iconTheme",
  _flaxBinding44,
  _AppBar_iconTheme,
);
const _flaxBinding46 = FlaxGetter(
  "actionsIconTheme",
  _flaxBinding44,
  _AppBar_actionsIconTheme,
);
const _flaxBinding47 = FlaxGetter("primary", _flaxBinding18, _AppBar_primary);
const _flaxBinding48 = FlaxTypeRef("bool", nullable: true);
const _flaxBinding49 = FlaxGetter(
  "centerTitle",
  _flaxBinding48,
  _AppBar_centerTitle,
);
const _flaxBinding50 = FlaxGetter(
  "excludeHeaderSemantics",
  _flaxBinding18,
  _AppBar_excludeHeaderSemantics,
);
const _flaxBinding51 = FlaxGetter(
  "titleSpacing",
  _flaxBinding11,
  _AppBar_titleSpacing,
);
const _flaxBinding52 = FlaxTypeRef("double");
const _flaxBinding53 = FlaxGetter(
  "toolbarOpacity",
  _flaxBinding52,
  _AppBar_toolbarOpacity,
);
const _flaxBinding54 = FlaxGetter(
  "bottomOpacity",
  _flaxBinding52,
  _AppBar_bottomOpacity,
);
const _flaxBinding55 = FlaxGetter(
  "toolbarHeight",
  _flaxBinding11,
  _AppBar_toolbarHeight,
);
const _flaxBinding56 = FlaxGetter(
  "leadingWidth",
  _flaxBinding11,
  _AppBar_leadingWidth,
);
const _flaxBinding57 = FlaxGetter(
  "toolbarTextStyle",
  _flaxBinding4,
  _AppBar_toolbarTextStyle,
);
const _flaxBinding58 = FlaxGetter(
  "titleTextStyle",
  _flaxBinding4,
  _AppBar_titleTextStyle,
);
const _flaxBinding59 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_services#type:SystemUiOverlayStyle",
  nullable: true,
);
const _flaxBinding60 = FlaxGetter(
  "systemOverlayStyle",
  _flaxBinding59,
  _AppBar_systemOverlayStyle,
);
const _flaxBinding61 = FlaxGetter(
  "forceMaterialTransparency",
  _flaxBinding18,
  _AppBar_forceMaterialTransparency,
);
const _flaxBinding62 = FlaxGetter(
  "useDefaultSemanticsOrder",
  _flaxBinding18,
  _AppBar_useDefaultSemanticsOrder,
);
const _flaxBinding63 = FlaxGetter(
  "clipBehavior",
  _flaxBinding14,
  _AppBar_clipBehavior,
);
const _flaxBinding64 = FlaxGetter(
  "actionsPadding",
  _flaxBinding2,
  _AppBar_actionsPadding,
);
const _flaxBinding65 = FlaxGetter(
  "animateColor",
  _flaxBinding18,
  _AppBar_animateColor,
);
const _flaxBinding66 = FlaxGetter("key", _flaxBinding0, _AppBar_key);
const _flaxBinding67 = FlaxTypeRef("String");
const _flaxBinding68 = <FlaxParameter>[];
const _flaxBinding69 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding67,
  _AppBar_toStringShort,
);
const _flaxBinding70 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding71 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding70,
    required: false,
    defaultValue: api6.DiagnosticLevel.info,
  ),
];
const _flaxBinding72 = FlaxInstanceMethod(
  _flaxBinding71,
  _flaxBinding67,
  _AppBar_toString,
);
const _flaxBinding73 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
  nullable: true,
);
const _flaxBinding74 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding12, required: false),
  FlaxParameter("style", _flaxBinding73, required: false),
];
const _flaxBinding75 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding76 = FlaxInstanceMethod(
  _flaxBinding74,
  _flaxBinding75,
  _AppBar_toDiagnosticsNode,
);
const _flaxBinding77 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder",
);
const _flaxBinding78 = FlaxTypeRef("void");
const _flaxBinding79 = <FlaxParameter>[
  FlaxParameter("properties", _flaxBinding77, required: true),
];
const _flaxBinding80 = FlaxInstanceMethod(
  _flaxBinding79,
  _flaxBinding78,
  _AppBar_debugFillProperties,
);
const _flaxBinding81 = <FlaxParameter>[
  FlaxParameter("joiner", _flaxBinding67, required: false, defaultValue: ', '),
  FlaxParameter(
    "minLevel",
    _flaxBinding70,
    required: false,
    defaultValue: api6.DiagnosticLevel.debug,
  ),
];
const _flaxBinding82 = FlaxInstanceMethod(
  _flaxBinding81,
  _flaxBinding67,
  _AppBar_toStringShallow,
);
const _flaxBinding83 = FlaxTypeRef("int");
const _flaxBinding84 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding70,
    required: false,
    defaultValue: api6.DiagnosticLevel.debug,
  ),
  FlaxParameter(
    "prefixLineOne",
    _flaxBinding67,
    required: false,
    defaultValue: '',
  ),
  FlaxParameter("prefixOtherLines", _flaxBinding12, required: false),
  FlaxParameter("wrapWidth", _flaxBinding83, required: false, defaultValue: 65),
];
const _flaxBinding85 = FlaxInstanceMethod(
  _flaxBinding84,
  _flaxBinding67,
  _AppBar_toStringDeep,
);
const _flaxBinding86 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding75,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection3Create,
    _collection3Matches,
    restore: _collection3Restore,
  ),
);
const _flaxBinding87 = FlaxTypeRef(
  "list",
  item: _flaxBinding75,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection2Create,
    _collection2Matches,
  ),
  iterable: _flaxBinding86,
);
const _flaxBinding88 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding87,
  _AppBar_debugDescribeChildren,
);
const _flaxBinding89 = FlaxTypeRef(
  "state",
  id: "flax.core/components#type:State",
  dartType: FlaxDartTypes.typeOf<api1.State<api.AppBar>>,
);
const _flaxBinding90 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding89,
  _AppBar_createState,
);
const _flaxBinding91 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:StatefulElement",
);
const _flaxBinding92 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding91,
  _AppBar_createElement,
);
const _flaxBinding93 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding0, required: false),
  FlaxParameter("leading", _flaxBinding1, required: false),
  FlaxParameter(
    "automaticallyImplyLeading",
    _flaxBinding18,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("title", _flaxBinding1, required: false),
  FlaxParameter("actions", _flaxBinding7, required: false),
  FlaxParameter(
    "automaticallyImplyActions",
    _flaxBinding18,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("flexibleSpace", _flaxBinding1, required: false),
  FlaxParameter("bottom", _flaxBinding31, required: false),
  FlaxParameter("elevation", _flaxBinding11, required: false),
  FlaxParameter("scrolledUnderElevation", _flaxBinding11, required: false),
  FlaxParameter(
    "notificationPredicate",
    _flaxBinding37,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("shadowColor", _flaxBinding3, required: false),
  FlaxParameter("surfaceTintColor", _flaxBinding3, required: false),
  FlaxParameter("shape", _flaxBinding15, required: false),
  FlaxParameter("backgroundColor", _flaxBinding3, required: false),
  FlaxParameter("foregroundColor", _flaxBinding3, required: false),
  FlaxParameter("iconTheme", _flaxBinding44, required: false),
  FlaxParameter("actionsIconTheme", _flaxBinding44, required: false),
  FlaxParameter("primary", _flaxBinding18, required: false, defaultValue: true),
  FlaxParameter("centerTitle", _flaxBinding48, required: false),
  FlaxParameter(
    "excludeHeaderSemantics",
    _flaxBinding18,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("titleSpacing", _flaxBinding11, required: false),
  FlaxParameter(
    "toolbarOpacity",
    _flaxBinding52,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter(
    "bottomOpacity",
    _flaxBinding52,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter("toolbarHeight", _flaxBinding11, required: false),
  FlaxParameter("leadingWidth", _flaxBinding11, required: false),
  FlaxParameter("toolbarTextStyle", _flaxBinding4, required: false),
  FlaxParameter("titleTextStyle", _flaxBinding4, required: false),
  FlaxParameter("systemOverlayStyle", _flaxBinding59, required: false),
  FlaxParameter(
    "forceMaterialTransparency",
    _flaxBinding18,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "useDefaultSemanticsOrder",
    _flaxBinding18,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("clipBehavior", _flaxBinding14, required: false),
  FlaxParameter("actionsPadding", _flaxBinding2, required: false),
  FlaxParameter(
    "animateColor",
    _flaxBinding18,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding94 = FlaxObjectBinding(
  "flax.material/material#type:AppBar",
  [
    _flaxBinding24,
    _flaxBinding25,
    _flaxBinding26,
    _flaxBinding27,
    _flaxBinding28,
    _flaxBinding29,
    _flaxBinding30,
    _flaxBinding32,
    _flaxBinding33,
    _flaxBinding34,
    _flaxBinding38,
    _flaxBinding39,
    _flaxBinding40,
    _flaxBinding41,
    _flaxBinding42,
    _flaxBinding43,
    _flaxBinding45,
    _flaxBinding46,
    _flaxBinding47,
    _flaxBinding49,
    _flaxBinding50,
    _flaxBinding51,
    _flaxBinding53,
    _flaxBinding54,
    _flaxBinding55,
    _flaxBinding56,
    _flaxBinding57,
    _flaxBinding58,
    _flaxBinding60,
    _flaxBinding61,
    _flaxBinding62,
    _flaxBinding63,
    _flaxBinding64,
    _flaxBinding65,
    _flaxBinding66,
  ],
  {
    "toStringShort": _flaxBinding69,
    "toString": _flaxBinding72,
    "toDiagnosticsNode": _flaxBinding76,
    "debugFillProperties": _flaxBinding80,
    "toStringShallow": _flaxBinding82,
    "toStringDeep": _flaxBinding85,
    "debugDescribeChildren": _flaxBinding88,
    "createState": _flaxBinding90,
    "createElement": _flaxBinding92,
  },
  constructors: {"": _flaxBinding93},
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
const _flaxBinding95 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:WidgetState",
);
const _flaxBinding96 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding95,
  collection: FlaxCollectionBinding(
    "iterable:[enum:flax.core/flutter#type:WidgetState]",
    _collection5Create,
    _collection5Matches,
    restore: _collection5Restore,
  ),
);
const _flaxBinding97 = FlaxTypeRef(
  "set",
  item: _flaxBinding95,
  collection: FlaxCollectionBinding(
    "set:[enum:flax.core/flutter#type:WidgetState]",
    _collection4Create,
    _collection4Matches,
  ),
  iterable: _flaxBinding96,
);
const _flaxBinding98 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "states",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding4,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api2.TextStyle?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:TextStyle",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api2.TextStyle?>,
  matches:
      FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api2.TextStyle?>,
);
const _flaxBinding99 = FlaxTypeRef("callback", callback: _flaxBinding98);
const _flaxBinding100 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api2.TextStyle?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:TextStyle>",
      [FlaxParameter("callback", _flaxBinding99, required: true)],
      _deferred0,
    ),
  },
);
const _flaxBinding101 = FlaxGetter(
  "textStyle",
  _flaxBinding100,
  _ButtonStyle_textStyle,
);
const _flaxBinding102 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "states",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding3,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api5.Color?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Color",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api5.Color?>,
  matches: FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api5.Color?>,
);
const _flaxBinding103 = FlaxTypeRef("callback", callback: _flaxBinding102);
const _flaxBinding104 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api5.Color?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Color>",
      [FlaxParameter("callback", _flaxBinding103, required: true)],
      _deferred1,
    ),
  },
);
const _flaxBinding105 = FlaxGetter(
  "backgroundColor",
  _flaxBinding104,
  _ButtonStyle_backgroundColor,
);
const _flaxBinding106 = FlaxGetter(
  "foregroundColor",
  _flaxBinding104,
  _ButtonStyle_foregroundColor,
);
const _flaxBinding107 = FlaxGetter(
  "overlayColor",
  _flaxBinding104,
  _ButtonStyle_overlayColor,
);
const _flaxBinding108 = FlaxGetter(
  "shadowColor",
  _flaxBinding104,
  _ButtonStyle_shadowColor,
);
const _flaxBinding109 = FlaxGetter(
  "surfaceTintColor",
  _flaxBinding104,
  _ButtonStyle_surfaceTintColor,
);
const _flaxBinding110 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "states",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding11,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, double?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->double?:",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, double?>,
  matches: FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, double?>,
);
const _flaxBinding111 = FlaxTypeRef("callback", callback: _flaxBinding110);
const _flaxBinding112 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<double?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><double?:>",
      [FlaxParameter("callback", _flaxBinding111, required: true)],
      _deferred2,
    ),
  },
);
const _flaxBinding113 = FlaxGetter(
  "elevation",
  _flaxBinding112,
  _ButtonStyle_elevation,
);
const _flaxBinding114 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "states",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding2,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api2.EdgeInsetsGeometry?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:EdgeInsetsGeometry",
  invoke: FlaxCallbackAdapters
      .invoke1<Set<api1.WidgetState>, api2.EdgeInsetsGeometry?>,
  matches: FlaxCallbackAdapters
      .matches1<Set<api1.WidgetState>, api2.EdgeInsetsGeometry?>,
);
const _flaxBinding115 = FlaxTypeRef("callback", callback: _flaxBinding114);
const _flaxBinding116 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType:
      FlaxDartTypes.typeOf<api1.WidgetStateProperty<api2.EdgeInsetsGeometry?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:EdgeInsetsGeometry>",
      [FlaxParameter("callback", _flaxBinding115, required: true)],
      _deferred3,
    ),
  },
);
const _flaxBinding117 = FlaxGetter(
  "padding",
  _flaxBinding116,
  _ButtonStyle_padding,
);
const _flaxBinding118 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Size",
  nullable: true,
);
const _flaxBinding119 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "states",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding118,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api5.Size?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:Size",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api5.Size?>,
  matches: FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api5.Size?>,
);
const _flaxBinding120 = FlaxTypeRef("callback", callback: _flaxBinding119);
const _flaxBinding121 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api5.Size?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:Size>",
      [FlaxParameter("callback", _flaxBinding120, required: true)],
      _deferred4,
    ),
  },
);
const _flaxBinding122 = FlaxGetter(
  "minimumSize",
  _flaxBinding121,
  _ButtonStyle_minimumSize,
);
const _flaxBinding123 = FlaxGetter(
  "fixedSize",
  _flaxBinding121,
  _ButtonStyle_fixedSize,
);
const _flaxBinding124 = FlaxGetter(
  "maximumSize",
  _flaxBinding121,
  _ButtonStyle_maximumSize,
);
const _flaxBinding125 = FlaxGetter(
  "iconColor",
  _flaxBinding104,
  _ButtonStyle_iconColor,
);
const _flaxBinding126 = FlaxGetter(
  "iconSize",
  _flaxBinding112,
  _ButtonStyle_iconSize,
);
const _flaxBinding127 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BorderSide",
  nullable: true,
);
const _flaxBinding128 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "states",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding127,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api2.BorderSide?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:BorderSide",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api2.BorderSide?>,
  matches:
      FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api2.BorderSide?>,
);
const _flaxBinding129 = FlaxTypeRef("callback", callback: _flaxBinding128);
const _flaxBinding130 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api2.BorderSide?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:BorderSide>",
      [FlaxParameter("callback", _flaxBinding129, required: true)],
      _deferred5,
    ),
  },
);
const _flaxBinding131 = FlaxGetter("side", _flaxBinding130, _ButtonStyle_side);
const _flaxBinding132 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:OutlinedBorder",
  nullable: true,
);
const _flaxBinding133 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "states",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding132,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api2.OutlinedBorder?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:OutlinedBorder",
  invoke:
      FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api2.OutlinedBorder?>,
  matches: FlaxCallbackAdapters
      .matches1<Set<api1.WidgetState>, api2.OutlinedBorder?>,
);
const _flaxBinding134 = FlaxTypeRef("callback", callback: _flaxBinding133);
const _flaxBinding135 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType:
      FlaxDartTypes.typeOf<api1.WidgetStateProperty<api2.OutlinedBorder?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:OutlinedBorder>",
      [FlaxParameter("callback", _flaxBinding134, required: true)],
      _deferred6,
    ),
  },
);
const _flaxBinding136 = FlaxGetter(
  "shape",
  _flaxBinding135,
  _ButtonStyle_shape,
);
const _flaxBinding137 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:MouseCursor",
  nullable: true,
);
const _flaxBinding138 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "states",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding137,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api9.MouseCursor?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->object?:flax.core/flutter#type:MouseCursor",
  invoke:
      FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api9.MouseCursor?>,
  matches:
      FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api9.MouseCursor?>,
);
const _flaxBinding139 = FlaxTypeRef("callback", callback: _flaxBinding138);
const _flaxBinding140 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api9.MouseCursor?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><object?:flax.core/flutter#type:MouseCursor>",
      [FlaxParameter("callback", _flaxBinding139, required: true)],
      _deferred7,
    ),
  },
);
const _flaxBinding141 = FlaxGetter(
  "mouseCursor",
  _flaxBinding140,
  _ButtonStyle_mouseCursor,
);
const _flaxBinding142 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:VisualDensity",
  nullable: true,
);
const _flaxBinding143 = FlaxGetter(
  "visualDensity",
  _flaxBinding142,
  _ButtonStyle_visualDensity,
);
const _flaxBinding144 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
  nullable: true,
);
const _flaxBinding145 = FlaxGetter(
  "animationDuration",
  _flaxBinding144,
  _ButtonStyle_animationDuration,
);
const _flaxBinding146 = FlaxGetter(
  "enableFeedback",
  _flaxBinding48,
  _ButtonStyle_enableFeedback,
);
const _flaxBinding147 = FlaxGetter(
  "alignment",
  _flaxBinding16,
  _ButtonStyle_alignment,
);
const _flaxBinding148 = FlaxTypeRef(
  "context",
  id: "flax.core/flutter#type:BuildContext",
);
const _flaxBinding149 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding148,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "states",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "child",
      _flaxBinding1,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding5,
  _callback0,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:states:set:[enum:flax.core/flutter#type:WidgetState],p:r:child:widget?:)->widget:",
  invoke: _callback0Invoke,
  matches: _callback0Matches,
);
const _flaxBinding150 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding149,
);
const _flaxBinding151 = FlaxGetter(
  "backgroundBuilder",
  _flaxBinding150,
  _ButtonStyle_backgroundBuilder,
);
const _flaxBinding152 = FlaxGetter(
  "foregroundBuilder",
  _flaxBinding150,
  _ButtonStyle_foregroundBuilder,
);
const _flaxBinding153 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding67,
  _ButtonStyle_toStringShort,
);
const _flaxBinding154 = FlaxInstanceMethod(
  _flaxBinding71,
  _flaxBinding67,
  _ButtonStyle_toString,
);
const _flaxBinding155 = FlaxInstanceMethod(
  _flaxBinding74,
  _flaxBinding75,
  _ButtonStyle_toDiagnosticsNode,
);
const _flaxBinding156 = FlaxInstanceMethod(
  _flaxBinding79,
  _flaxBinding78,
  _ButtonStyle_debugFillProperties,
);
const _flaxBinding157 = <FlaxParameter>[
  FlaxParameter("alignment", _flaxBinding16, required: false),
  FlaxParameter("animationDuration", _flaxBinding144, required: false),
  FlaxParameter("backgroundBuilder", _flaxBinding150, required: false),
  FlaxParameter("backgroundColor", _flaxBinding104, required: false),
  FlaxParameter("elevation", _flaxBinding112, required: false),
  FlaxParameter("enableFeedback", _flaxBinding48, required: false),
  FlaxParameter("fixedSize", _flaxBinding121, required: false),
  FlaxParameter("foregroundBuilder", _flaxBinding150, required: false),
  FlaxParameter("foregroundColor", _flaxBinding104, required: false),
  FlaxParameter("iconColor", _flaxBinding104, required: false),
  FlaxParameter("iconSize", _flaxBinding112, required: false),
  FlaxParameter("maximumSize", _flaxBinding121, required: false),
  FlaxParameter("minimumSize", _flaxBinding121, required: false),
  FlaxParameter("mouseCursor", _flaxBinding140, required: false),
  FlaxParameter("overlayColor", _flaxBinding104, required: false),
  FlaxParameter("padding", _flaxBinding116, required: false),
  FlaxParameter("shadowColor", _flaxBinding104, required: false),
  FlaxParameter("shape", _flaxBinding135, required: false),
  FlaxParameter("side", _flaxBinding130, required: false),
  FlaxParameter("surfaceTintColor", _flaxBinding104, required: false),
  FlaxParameter("textStyle", _flaxBinding100, required: false),
  FlaxParameter("visualDensity", _flaxBinding142, required: false),
];
const _flaxBinding158 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ButtonStyle",
);
const _flaxBinding159 = FlaxInstanceMethod(
  _flaxBinding157,
  _flaxBinding158,
  _ButtonStyle_copyWith,
);
const _flaxBinding160 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ButtonStyle",
  nullable: true,
);
const _flaxBinding161 = <FlaxParameter>[
  FlaxParameter("style", _flaxBinding160, required: true),
];
const _flaxBinding162 = FlaxInstanceMethod(
  _flaxBinding161,
  _flaxBinding158,
  _ButtonStyle_merge,
);
const _flaxBinding163 = <FlaxParameter>[
  FlaxParameter("textStyle", _flaxBinding100, required: false),
  FlaxParameter("backgroundColor", _flaxBinding104, required: false),
  FlaxParameter("foregroundColor", _flaxBinding104, required: false),
  FlaxParameter("overlayColor", _flaxBinding104, required: false),
  FlaxParameter("shadowColor", _flaxBinding104, required: false),
  FlaxParameter("surfaceTintColor", _flaxBinding104, required: false),
  FlaxParameter("elevation", _flaxBinding112, required: false),
  FlaxParameter("padding", _flaxBinding116, required: false),
  FlaxParameter("minimumSize", _flaxBinding121, required: false),
  FlaxParameter("fixedSize", _flaxBinding121, required: false),
  FlaxParameter("maximumSize", _flaxBinding121, required: false),
  FlaxParameter("iconColor", _flaxBinding104, required: false),
  FlaxParameter("iconSize", _flaxBinding112, required: false),
  FlaxParameter("side", _flaxBinding130, required: false),
  FlaxParameter("shape", _flaxBinding135, required: false),
  FlaxParameter("mouseCursor", _flaxBinding140, required: false),
  FlaxParameter("visualDensity", _flaxBinding142, required: false),
  FlaxParameter("animationDuration", _flaxBinding144, required: false),
  FlaxParameter("enableFeedback", _flaxBinding48, required: false),
  FlaxParameter("alignment", _flaxBinding16, required: false),
  FlaxParameter("backgroundBuilder", _flaxBinding150, required: false),
  FlaxParameter("foregroundBuilder", _flaxBinding150, required: false),
];
const _flaxBinding164 = FlaxObjectBinding(
  "flax.material/material#type:ButtonStyle",
  [
    _flaxBinding101,
    _flaxBinding105,
    _flaxBinding106,
    _flaxBinding107,
    _flaxBinding108,
    _flaxBinding109,
    _flaxBinding113,
    _flaxBinding117,
    _flaxBinding122,
    _flaxBinding123,
    _flaxBinding124,
    _flaxBinding125,
    _flaxBinding126,
    _flaxBinding131,
    _flaxBinding136,
    _flaxBinding141,
    _flaxBinding143,
    _flaxBinding145,
    _flaxBinding146,
    _flaxBinding147,
    _flaxBinding151,
    _flaxBinding152,
  ],
  {
    "toStringShort": _flaxBinding153,
    "toString": _flaxBinding154,
    "toDiagnosticsNode": _flaxBinding155,
    "debugFillProperties": _flaxBinding156,
    "copyWith": _flaxBinding159,
    "merge": _flaxBinding162,
  },
  constructors: {"": _flaxBinding163},
  create: _createButtonStyle,
  matches: _isButtonStyle,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding165 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding48,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid1<bool?>,
  id: "callback:<>(p:r:value:bool?:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<bool?>,
  matches: FlaxCallbackAdapters.matchesVoid1<bool?>,
);
const _flaxBinding166 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding165,
);
const _flaxBinding167 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:FocusNode",
  nullable: true,
);
const _flaxBinding168 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api3.Animation<api5.Color?>?>,
  nullable: true,
);
const _flaxBinding169 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:StrokeCap",
  nullable: true,
);
const _flaxBinding170 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:AnimationController",
  nullable: true,
);
const _flaxBinding171 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Brightness",
);
const _flaxBinding172 = FlaxGetter(
  "brightness",
  _flaxBinding171,
  _ColorScheme_brightness,
);
const _flaxBinding173 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Color",
);
const _flaxBinding174 = FlaxGetter(
  "primary",
  _flaxBinding173,
  _ColorScheme_primary,
);
const _flaxBinding175 = FlaxGetter(
  "onPrimary",
  _flaxBinding173,
  _ColorScheme_onPrimary,
);
const _flaxBinding176 = FlaxGetter(
  "primaryContainer",
  _flaxBinding173,
  _ColorScheme_primaryContainer,
);
const _flaxBinding177 = FlaxGetter(
  "onPrimaryContainer",
  _flaxBinding173,
  _ColorScheme_onPrimaryContainer,
);
const _flaxBinding178 = FlaxGetter(
  "primaryFixed",
  _flaxBinding173,
  _ColorScheme_primaryFixed,
);
const _flaxBinding179 = FlaxGetter(
  "primaryFixedDim",
  _flaxBinding173,
  _ColorScheme_primaryFixedDim,
);
const _flaxBinding180 = FlaxGetter(
  "onPrimaryFixed",
  _flaxBinding173,
  _ColorScheme_onPrimaryFixed,
);
const _flaxBinding181 = FlaxGetter(
  "onPrimaryFixedVariant",
  _flaxBinding173,
  _ColorScheme_onPrimaryFixedVariant,
);
const _flaxBinding182 = FlaxGetter(
  "secondary",
  _flaxBinding173,
  _ColorScheme_secondary,
);
const _flaxBinding183 = FlaxGetter(
  "onSecondary",
  _flaxBinding173,
  _ColorScheme_onSecondary,
);
const _flaxBinding184 = FlaxGetter(
  "secondaryContainer",
  _flaxBinding173,
  _ColorScheme_secondaryContainer,
);
const _flaxBinding185 = FlaxGetter(
  "onSecondaryContainer",
  _flaxBinding173,
  _ColorScheme_onSecondaryContainer,
);
const _flaxBinding186 = FlaxGetter(
  "secondaryFixed",
  _flaxBinding173,
  _ColorScheme_secondaryFixed,
);
const _flaxBinding187 = FlaxGetter(
  "secondaryFixedDim",
  _flaxBinding173,
  _ColorScheme_secondaryFixedDim,
);
const _flaxBinding188 = FlaxGetter(
  "onSecondaryFixed",
  _flaxBinding173,
  _ColorScheme_onSecondaryFixed,
);
const _flaxBinding189 = FlaxGetter(
  "onSecondaryFixedVariant",
  _flaxBinding173,
  _ColorScheme_onSecondaryFixedVariant,
);
const _flaxBinding190 = FlaxGetter(
  "tertiary",
  _flaxBinding173,
  _ColorScheme_tertiary,
);
const _flaxBinding191 = FlaxGetter(
  "onTertiary",
  _flaxBinding173,
  _ColorScheme_onTertiary,
);
const _flaxBinding192 = FlaxGetter(
  "tertiaryContainer",
  _flaxBinding173,
  _ColorScheme_tertiaryContainer,
);
const _flaxBinding193 = FlaxGetter(
  "onTertiaryContainer",
  _flaxBinding173,
  _ColorScheme_onTertiaryContainer,
);
const _flaxBinding194 = FlaxGetter(
  "tertiaryFixed",
  _flaxBinding173,
  _ColorScheme_tertiaryFixed,
);
const _flaxBinding195 = FlaxGetter(
  "tertiaryFixedDim",
  _flaxBinding173,
  _ColorScheme_tertiaryFixedDim,
);
const _flaxBinding196 = FlaxGetter(
  "onTertiaryFixed",
  _flaxBinding173,
  _ColorScheme_onTertiaryFixed,
);
const _flaxBinding197 = FlaxGetter(
  "onTertiaryFixedVariant",
  _flaxBinding173,
  _ColorScheme_onTertiaryFixedVariant,
);
const _flaxBinding198 = FlaxGetter(
  "error",
  _flaxBinding173,
  _ColorScheme_error,
);
const _flaxBinding199 = FlaxGetter(
  "onError",
  _flaxBinding173,
  _ColorScheme_onError,
);
const _flaxBinding200 = FlaxGetter(
  "errorContainer",
  _flaxBinding173,
  _ColorScheme_errorContainer,
);
const _flaxBinding201 = FlaxGetter(
  "onErrorContainer",
  _flaxBinding173,
  _ColorScheme_onErrorContainer,
);
const _flaxBinding202 = FlaxGetter(
  "surface",
  _flaxBinding173,
  _ColorScheme_surface,
);
const _flaxBinding203 = FlaxGetter(
  "onSurface",
  _flaxBinding173,
  _ColorScheme_onSurface,
);
const _flaxBinding204 = FlaxGetter(
  "surfaceVariant",
  _flaxBinding173,
  _ColorScheme_surfaceVariant,
);
const _flaxBinding205 = FlaxGetter(
  "surfaceDim",
  _flaxBinding173,
  _ColorScheme_surfaceDim,
);
const _flaxBinding206 = FlaxGetter(
  "surfaceBright",
  _flaxBinding173,
  _ColorScheme_surfaceBright,
);
const _flaxBinding207 = FlaxGetter(
  "surfaceContainerLowest",
  _flaxBinding173,
  _ColorScheme_surfaceContainerLowest,
);
const _flaxBinding208 = FlaxGetter(
  "surfaceContainerLow",
  _flaxBinding173,
  _ColorScheme_surfaceContainerLow,
);
const _flaxBinding209 = FlaxGetter(
  "surfaceContainer",
  _flaxBinding173,
  _ColorScheme_surfaceContainer,
);
const _flaxBinding210 = FlaxGetter(
  "surfaceContainerHigh",
  _flaxBinding173,
  _ColorScheme_surfaceContainerHigh,
);
const _flaxBinding211 = FlaxGetter(
  "surfaceContainerHighest",
  _flaxBinding173,
  _ColorScheme_surfaceContainerHighest,
);
const _flaxBinding212 = FlaxGetter(
  "onSurfaceVariant",
  _flaxBinding173,
  _ColorScheme_onSurfaceVariant,
);
const _flaxBinding213 = FlaxGetter(
  "outline",
  _flaxBinding173,
  _ColorScheme_outline,
);
const _flaxBinding214 = FlaxGetter(
  "outlineVariant",
  _flaxBinding173,
  _ColorScheme_outlineVariant,
);
const _flaxBinding215 = FlaxGetter(
  "shadow",
  _flaxBinding173,
  _ColorScheme_shadow,
);
const _flaxBinding216 = FlaxGetter(
  "scrim",
  _flaxBinding173,
  _ColorScheme_scrim,
);
const _flaxBinding217 = FlaxGetter(
  "inverseSurface",
  _flaxBinding173,
  _ColorScheme_inverseSurface,
);
const _flaxBinding218 = FlaxGetter(
  "onInverseSurface",
  _flaxBinding173,
  _ColorScheme_onInverseSurface,
);
const _flaxBinding219 = FlaxGetter(
  "inversePrimary",
  _flaxBinding173,
  _ColorScheme_inversePrimary,
);
const _flaxBinding220 = FlaxGetter(
  "surfaceTint",
  _flaxBinding173,
  _ColorScheme_surfaceTint,
);
const _flaxBinding221 = FlaxGetter(
  "background",
  _flaxBinding173,
  _ColorScheme_background,
);
const _flaxBinding222 = FlaxGetter(
  "onBackground",
  _flaxBinding173,
  _ColorScheme_onBackground,
);
const _flaxBinding223 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding67,
  _ColorScheme_toStringShort,
);
const _flaxBinding224 = FlaxInstanceMethod(
  _flaxBinding71,
  _flaxBinding67,
  _ColorScheme_toString,
);
const _flaxBinding225 = FlaxInstanceMethod(
  _flaxBinding74,
  _flaxBinding75,
  _ColorScheme_toDiagnosticsNode,
);
const _flaxBinding226 = FlaxInstanceMethod(
  _flaxBinding79,
  _flaxBinding78,
  _ColorScheme_debugFillProperties,
);
const _flaxBinding227 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Brightness",
  nullable: true,
);
const _flaxBinding228 = <FlaxParameter>[
  FlaxParameter("background", _flaxBinding3, required: false),
  FlaxParameter("brightness", _flaxBinding227, required: false),
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
const _flaxBinding229 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ColorScheme",
);
const _flaxBinding230 = FlaxInstanceMethod(
  _flaxBinding228,
  _flaxBinding229,
  _ColorScheme_copyWith,
);
const _flaxBinding231 = <FlaxParameter>[
  FlaxParameter("brightness", _flaxBinding171, required: true),
  FlaxParameter("primary", _flaxBinding173, required: true),
  FlaxParameter("onPrimary", _flaxBinding173, required: true),
  FlaxParameter("primaryContainer", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryContainer", _flaxBinding3, required: false),
  FlaxParameter("primaryFixed", _flaxBinding3, required: false),
  FlaxParameter("primaryFixedDim", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixed", _flaxBinding3, required: false),
  FlaxParameter("onPrimaryFixedVariant", _flaxBinding3, required: false),
  FlaxParameter("secondary", _flaxBinding173, required: true),
  FlaxParameter("onSecondary", _flaxBinding173, required: true),
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
  FlaxParameter("error", _flaxBinding173, required: true),
  FlaxParameter("onError", _flaxBinding173, required: true),
  FlaxParameter("errorContainer", _flaxBinding3, required: false),
  FlaxParameter("onErrorContainer", _flaxBinding3, required: false),
  FlaxParameter("surface", _flaxBinding173, required: true),
  FlaxParameter("onSurface", _flaxBinding173, required: true),
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
const _flaxBinding232 = <FlaxParameter>[
  FlaxParameter("seedColor", _flaxBinding173, required: true),
  FlaxParameter(
    "brightness",
    _flaxBinding171,
    required: false,
    defaultValue: api.Brightness.light,
  ),
  FlaxParameter(
    "contrastLevel",
    _flaxBinding52,
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
const _flaxBinding233 = <FlaxParameter>[
  FlaxParameter(
    "brightness",
    _flaxBinding171,
    required: false,
    defaultValue: api.Brightness.light,
  ),
  FlaxParameter(
    "primary",
    _flaxBinding173,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onPrimary",
    _flaxBinding173,
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
    _flaxBinding173,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onSecondary",
    _flaxBinding173,
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
  FlaxParameter(
    "error",
    _flaxBinding173,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onError",
    _flaxBinding173,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("errorContainer", _flaxBinding3, required: false),
  FlaxParameter("onErrorContainer", _flaxBinding3, required: false),
  FlaxParameter(
    "surface",
    _flaxBinding173,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onSurface",
    _flaxBinding173,
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
const _flaxBinding234 = <FlaxParameter>[
  FlaxParameter(
    "brightness",
    _flaxBinding171,
    required: false,
    defaultValue: api.Brightness.dark,
  ),
  FlaxParameter(
    "primary",
    _flaxBinding173,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onPrimary",
    _flaxBinding173,
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
    _flaxBinding173,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onSecondary",
    _flaxBinding173,
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
  FlaxParameter(
    "error",
    _flaxBinding173,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onError",
    _flaxBinding173,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("errorContainer", _flaxBinding3, required: false),
  FlaxParameter("onErrorContainer", _flaxBinding3, required: false),
  FlaxParameter(
    "surface",
    _flaxBinding173,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "onSurface",
    _flaxBinding173,
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
const _flaxBinding235 = <FlaxParameter>[
  FlaxParameter("accentColor", _flaxBinding3, required: false),
  FlaxParameter("cardColor", _flaxBinding3, required: false),
  FlaxParameter("backgroundColor", _flaxBinding3, required: false),
  FlaxParameter("errorColor", _flaxBinding3, required: false),
  FlaxParameter(
    "brightness",
    _flaxBinding171,
    required: false,
    defaultValue: api.Brightness.light,
  ),
];
const _flaxBinding236 = FlaxObjectBinding(
  "flax.material/material#type:ColorScheme",
  [
    _flaxBinding172,
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
    _flaxBinding206,
    _flaxBinding207,
    _flaxBinding208,
    _flaxBinding209,
    _flaxBinding210,
    _flaxBinding211,
    _flaxBinding212,
    _flaxBinding213,
    _flaxBinding214,
    _flaxBinding215,
    _flaxBinding216,
    _flaxBinding217,
    _flaxBinding218,
    _flaxBinding219,
    _flaxBinding220,
    _flaxBinding221,
    _flaxBinding222,
  ],
  {
    "toStringShort": _flaxBinding223,
    "toString": _flaxBinding224,
    "toDiagnosticsNode": _flaxBinding225,
    "debugFillProperties": _flaxBinding226,
    "copyWith": _flaxBinding230,
  },
  constructors: {
    "": _flaxBinding231,
    "fromSeed": _flaxBinding232,
    "light": _flaxBinding233,
    "dark": _flaxBinding234,
    "highContrastLight": _flaxBinding233,
    "highContrastDark": _flaxBinding234,
    "fromSwatch": _flaxBinding235,
  },
  create: _createColorScheme,
  matches: _isColorScheme,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding237 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BorderRadiusGeometry",
  nullable: true,
);
const _flaxBinding238 = FlaxCallbackBinding(
  [],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid0,
  id: "callback:<>()->void:",
  invoke: FlaxCallbackAdapters.invokeVoid0,
  matches: FlaxCallbackAdapters.matchesVoid0,
);
const _flaxBinding239 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding238,
);
const _flaxBinding240 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding18,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid1<bool>,
  id: "callback:<>(p:r:value:bool:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<bool>,
  matches: FlaxCallbackAdapters.matchesVoid1<bool>,
);
const _flaxBinding241 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding240,
);
const _flaxBinding242 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:WidgetStatesController",
  nullable: true,
);
const _flaxBinding243 = FlaxTypeRef("any", nullable: true);
const _flaxBinding244 = FlaxTypeRef("enum", id: "flax.core/flutter#type:Clip");
const _flaxBinding245 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_gestures#type:TapDownDetails",
);
const _flaxBinding246 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "details",
      _flaxBinding245,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid1<api7.TapDownDetails>,
  id: "callback:<>(p:r:details:object:flax.core/sdk_gestures#type:TapDownDetails)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api7.TapDownDetails>,
  matches: FlaxCallbackAdapters.matchesVoid1<api7.TapDownDetails>,
);
const _flaxBinding247 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding246,
);
const _flaxBinding248 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_gestures#type:TapUpDetails",
);
const _flaxBinding249 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "details",
      _flaxBinding248,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid1<api7.TapUpDetails>,
  id: "callback:<>(p:r:details:object:flax.core/sdk_gestures#type:TapUpDetails)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api7.TapUpDetails>,
  matches: FlaxCallbackAdapters.matchesVoid1<api7.TapUpDetails>,
);
const _flaxBinding250 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding249,
);
const _flaxBinding251 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BorderRadius",
  nullable: true,
);
const _flaxBinding252 = FlaxGetter(
  "icon",
  _flaxBinding1,
  _InputDecoration_icon,
);
const _flaxBinding253 = FlaxGetter(
  "iconColor",
  _flaxBinding3,
  _InputDecoration_iconColor,
);
const _flaxBinding254 = FlaxGetter(
  "label",
  _flaxBinding1,
  _InputDecoration_label,
);
const _flaxBinding255 = FlaxGetter(
  "labelText",
  _flaxBinding12,
  _InputDecoration_labelText,
);
const _flaxBinding256 = FlaxGetter(
  "labelStyle",
  _flaxBinding4,
  _InputDecoration_labelStyle,
);
const _flaxBinding257 = FlaxGetter(
  "floatingLabelStyle",
  _flaxBinding4,
  _InputDecoration_floatingLabelStyle,
);
const _flaxBinding258 = FlaxGetter(
  "helper",
  _flaxBinding1,
  _InputDecoration_helper,
);
const _flaxBinding259 = FlaxGetter(
  "helperText",
  _flaxBinding12,
  _InputDecoration_helperText,
);
const _flaxBinding260 = FlaxGetter(
  "helperStyle",
  _flaxBinding4,
  _InputDecoration_helperStyle,
);
const _flaxBinding261 = FlaxTypeRef("int", nullable: true);
const _flaxBinding262 = FlaxGetter(
  "helperMaxLines",
  _flaxBinding261,
  _InputDecoration_helperMaxLines,
);
const _flaxBinding263 = FlaxGetter(
  "hintText",
  _flaxBinding12,
  _InputDecoration_hintText,
);
const _flaxBinding264 = FlaxGetter(
  "hint",
  _flaxBinding1,
  _InputDecoration_hint,
);
const _flaxBinding265 = FlaxGetter(
  "hintStyle",
  _flaxBinding4,
  _InputDecoration_hintStyle,
);
const _flaxBinding266 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextDirection",
  nullable: true,
);
const _flaxBinding267 = FlaxGetter(
  "hintTextDirection",
  _flaxBinding266,
  _InputDecoration_hintTextDirection,
);
const _flaxBinding268 = FlaxGetter(
  "hintMaxLines",
  _flaxBinding261,
  _InputDecoration_hintMaxLines,
);
const _flaxBinding269 = FlaxGetter(
  "hintFadeDuration",
  _flaxBinding144,
  _InputDecoration_hintFadeDuration,
);
const _flaxBinding270 = FlaxGetter(
  "maintainHintHeight",
  _flaxBinding18,
  _InputDecoration_maintainHintHeight,
);
const _flaxBinding271 = FlaxGetter(
  "maintainHintSize",
  _flaxBinding18,
  _InputDecoration_maintainHintSize,
);
const _flaxBinding272 = FlaxGetter(
  "maintainLabelSize",
  _flaxBinding18,
  _InputDecoration_maintainLabelSize,
);
const _flaxBinding273 = FlaxGetter(
  "error",
  _flaxBinding1,
  _InputDecoration_error,
);
const _flaxBinding274 = FlaxGetter(
  "errorText",
  _flaxBinding12,
  _InputDecoration_errorText,
);
const _flaxBinding275 = FlaxGetter(
  "errorStyle",
  _flaxBinding4,
  _InputDecoration_errorStyle,
);
const _flaxBinding276 = FlaxGetter(
  "errorMaxLines",
  _flaxBinding261,
  _InputDecoration_errorMaxLines,
);
const _flaxBinding277 = FlaxGetter(
  "isDense",
  _flaxBinding48,
  _InputDecoration_isDense,
);
const _flaxBinding278 = FlaxGetter(
  "contentPadding",
  _flaxBinding2,
  _InputDecoration_contentPadding,
);
const _flaxBinding279 = FlaxGetter(
  "isCollapsed",
  _flaxBinding48,
  _InputDecoration_isCollapsed,
);
const _flaxBinding280 = FlaxGetter(
  "prefixIcon",
  _flaxBinding1,
  _InputDecoration_prefixIcon,
);
const _flaxBinding281 = FlaxGetter(
  "prefixIconConstraints",
  _flaxBinding17,
  _InputDecoration_prefixIconConstraints,
);
const _flaxBinding282 = FlaxGetter(
  "prefix",
  _flaxBinding1,
  _InputDecoration_prefix,
);
const _flaxBinding283 = FlaxGetter(
  "prefixText",
  _flaxBinding12,
  _InputDecoration_prefixText,
);
const _flaxBinding284 = FlaxGetter(
  "prefixStyle",
  _flaxBinding4,
  _InputDecoration_prefixStyle,
);
const _flaxBinding285 = FlaxGetter(
  "prefixIconColor",
  _flaxBinding3,
  _InputDecoration_prefixIconColor,
);
const _flaxBinding286 = FlaxGetter(
  "suffixIcon",
  _flaxBinding1,
  _InputDecoration_suffixIcon,
);
const _flaxBinding287 = FlaxGetter(
  "suffix",
  _flaxBinding1,
  _InputDecoration_suffix,
);
const _flaxBinding288 = FlaxGetter(
  "suffixText",
  _flaxBinding12,
  _InputDecoration_suffixText,
);
const _flaxBinding289 = FlaxGetter(
  "suffixStyle",
  _flaxBinding4,
  _InputDecoration_suffixStyle,
);
const _flaxBinding290 = FlaxGetter(
  "suffixIconColor",
  _flaxBinding3,
  _InputDecoration_suffixIconColor,
);
const _flaxBinding291 = FlaxGetter(
  "suffixIconConstraints",
  _flaxBinding17,
  _InputDecoration_suffixIconConstraints,
);
const _flaxBinding292 = FlaxGetter(
  "counterText",
  _flaxBinding12,
  _InputDecoration_counterText,
);
const _flaxBinding293 = FlaxGetter(
  "counter",
  _flaxBinding1,
  _InputDecoration_counter,
);
const _flaxBinding294 = FlaxGetter(
  "counterStyle",
  _flaxBinding4,
  _InputDecoration_counterStyle,
);
const _flaxBinding295 = FlaxGetter(
  "filled",
  _flaxBinding48,
  _InputDecoration_filled,
);
const _flaxBinding296 = FlaxGetter(
  "fillColor",
  _flaxBinding3,
  _InputDecoration_fillColor,
);
const _flaxBinding297 = FlaxGetter(
  "focusColor",
  _flaxBinding3,
  _InputDecoration_focusColor,
);
const _flaxBinding298 = FlaxGetter(
  "hoverColor",
  _flaxBinding3,
  _InputDecoration_hoverColor,
);
const _flaxBinding299 = FlaxGetter(
  "enabled",
  _flaxBinding18,
  _InputDecoration_enabled,
);
const _flaxBinding300 = FlaxGetter(
  "semanticCounterText",
  _flaxBinding12,
  _InputDecoration_semanticCounterText,
);
const _flaxBinding301 = FlaxGetter(
  "alignLabelWithHint",
  _flaxBinding48,
  _InputDecoration_alignLabelWithHint,
);
const _flaxBinding302 = FlaxGetter(
  "constraints",
  _flaxBinding17,
  _InputDecoration_constraints,
);
const _flaxBinding303 = FlaxGetter(
  "visualDensity",
  _flaxBinding142,
  _InputDecoration_visualDensity,
);
const _flaxBinding304 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsService",
  nullable: true,
);
const _flaxBinding305 = <FlaxParameter>[
  FlaxParameter("alignLabelWithHint", _flaxBinding48, required: false),
  FlaxParameter("constraints", _flaxBinding17, required: false),
  FlaxParameter("contentPadding", _flaxBinding2, required: false),
  FlaxParameter("counter", _flaxBinding1, required: false),
  FlaxParameter("counterStyle", _flaxBinding4, required: false),
  FlaxParameter("counterText", _flaxBinding12, required: false),
  FlaxParameter("enabled", _flaxBinding48, required: false),
  FlaxParameter("error", _flaxBinding1, required: false),
  FlaxParameter("errorMaxLines", _flaxBinding261, required: false),
  FlaxParameter("errorStyle", _flaxBinding4, required: false),
  FlaxParameter("errorText", _flaxBinding12, required: false),
  FlaxParameter("fillColor", _flaxBinding3, required: false),
  FlaxParameter("filled", _flaxBinding48, required: false),
  FlaxParameter("floatingLabelStyle", _flaxBinding4, required: false),
  FlaxParameter("focusColor", _flaxBinding3, required: false),
  FlaxParameter("helper", _flaxBinding1, required: false),
  FlaxParameter("helperMaxLines", _flaxBinding261, required: false),
  FlaxParameter("helperStyle", _flaxBinding4, required: false),
  FlaxParameter("helperText", _flaxBinding12, required: false),
  FlaxParameter("hint", _flaxBinding1, required: false),
  FlaxParameter("hintFadeDuration", _flaxBinding144, required: false),
  FlaxParameter("hintMaxLines", _flaxBinding261, required: false),
  FlaxParameter("hintStyle", _flaxBinding4, required: false),
  FlaxParameter("hintText", _flaxBinding12, required: false),
  FlaxParameter("hintTextDirection", _flaxBinding266, required: false),
  FlaxParameter("hoverColor", _flaxBinding3, required: false),
  FlaxParameter("icon", _flaxBinding1, required: false),
  FlaxParameter("iconColor", _flaxBinding3, required: false),
  FlaxParameter("isCollapsed", _flaxBinding48, required: false),
  FlaxParameter("isDense", _flaxBinding48, required: false),
  FlaxParameter("label", _flaxBinding1, required: false),
  FlaxParameter("labelStyle", _flaxBinding4, required: false),
  FlaxParameter("labelText", _flaxBinding12, required: false),
  FlaxParameter("maintainHintHeight", _flaxBinding48, required: false),
  FlaxParameter("maintainHintSize", _flaxBinding48, required: false),
  FlaxParameter("maintainLabelSize", _flaxBinding48, required: false),
  FlaxParameter("prefix", _flaxBinding1, required: false),
  FlaxParameter("prefixIcon", _flaxBinding1, required: false),
  FlaxParameter("prefixIconColor", _flaxBinding3, required: false),
  FlaxParameter("prefixIconConstraints", _flaxBinding17, required: false),
  FlaxParameter("prefixStyle", _flaxBinding4, required: false),
  FlaxParameter("prefixText", _flaxBinding12, required: false),
  FlaxParameter("semanticCounterText", _flaxBinding12, required: false),
  FlaxParameter("semanticsService", _flaxBinding304, required: false),
  FlaxParameter("suffix", _flaxBinding1, required: false),
  FlaxParameter("suffixIcon", _flaxBinding1, required: false),
  FlaxParameter("suffixIconColor", _flaxBinding3, required: false),
  FlaxParameter("suffixIconConstraints", _flaxBinding17, required: false),
  FlaxParameter("suffixStyle", _flaxBinding4, required: false),
  FlaxParameter("suffixText", _flaxBinding12, required: false),
  FlaxParameter("visualDensity", _flaxBinding142, required: false),
];
const _flaxBinding306 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:InputDecoration",
);
const _flaxBinding307 = FlaxInstanceMethod(
  _flaxBinding305,
  _flaxBinding306,
  _InputDecoration_copyWith,
);
const _flaxBinding308 = FlaxTypeRef("any");
const _flaxBinding309 = <FlaxParameter>[
  FlaxParameter("inputDecorationTheme", _flaxBinding308, required: true),
];
const _flaxBinding310 = FlaxInstanceMethod(
  _flaxBinding309,
  _flaxBinding306,
  _InputDecoration_applyDefaults,
);
const _flaxBinding311 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding67,
  _InputDecoration_toString,
);
const _flaxBinding312 = <FlaxParameter>[
  FlaxParameter("icon", _flaxBinding1, required: false),
  FlaxParameter("iconColor", _flaxBinding3, required: false),
  FlaxParameter("label", _flaxBinding1, required: false),
  FlaxParameter("labelText", _flaxBinding12, required: false),
  FlaxParameter("labelStyle", _flaxBinding4, required: false),
  FlaxParameter("floatingLabelStyle", _flaxBinding4, required: false),
  FlaxParameter("helper", _flaxBinding1, required: false),
  FlaxParameter("helperText", _flaxBinding12, required: false),
  FlaxParameter("helperStyle", _flaxBinding4, required: false),
  FlaxParameter("helperMaxLines", _flaxBinding261, required: false),
  FlaxParameter("hintText", _flaxBinding12, required: false),
  FlaxParameter("hint", _flaxBinding1, required: false),
  FlaxParameter("hintStyle", _flaxBinding4, required: false),
  FlaxParameter("hintTextDirection", _flaxBinding266, required: false),
  FlaxParameter("hintMaxLines", _flaxBinding261, required: false),
  FlaxParameter("hintFadeDuration", _flaxBinding144, required: false),
  FlaxParameter(
    "maintainHintHeight",
    _flaxBinding18,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "maintainHintSize",
    _flaxBinding18,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "maintainLabelSize",
    _flaxBinding18,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("error", _flaxBinding1, required: false),
  FlaxParameter("errorText", _flaxBinding12, required: false),
  FlaxParameter("errorStyle", _flaxBinding4, required: false),
  FlaxParameter("errorMaxLines", _flaxBinding261, required: false),
  FlaxParameter("isCollapsed", _flaxBinding48, required: false),
  FlaxParameter("isDense", _flaxBinding48, required: false),
  FlaxParameter("contentPadding", _flaxBinding2, required: false),
  FlaxParameter("prefixIcon", _flaxBinding1, required: false),
  FlaxParameter("prefixIconConstraints", _flaxBinding17, required: false),
  FlaxParameter("prefix", _flaxBinding1, required: false),
  FlaxParameter("prefixText", _flaxBinding12, required: false),
  FlaxParameter("prefixStyle", _flaxBinding4, required: false),
  FlaxParameter("prefixIconColor", _flaxBinding3, required: false),
  FlaxParameter("suffixIcon", _flaxBinding1, required: false),
  FlaxParameter("suffix", _flaxBinding1, required: false),
  FlaxParameter("suffixText", _flaxBinding12, required: false),
  FlaxParameter("suffixStyle", _flaxBinding4, required: false),
  FlaxParameter("suffixIconColor", _flaxBinding3, required: false),
  FlaxParameter("suffixIconConstraints", _flaxBinding17, required: false),
  FlaxParameter("counter", _flaxBinding1, required: false),
  FlaxParameter("counterText", _flaxBinding12, required: false),
  FlaxParameter("counterStyle", _flaxBinding4, required: false),
  FlaxParameter("filled", _flaxBinding48, required: false),
  FlaxParameter("fillColor", _flaxBinding3, required: false),
  FlaxParameter("focusColor", _flaxBinding3, required: false),
  FlaxParameter("hoverColor", _flaxBinding3, required: false),
  FlaxParameter("enabled", _flaxBinding18, required: false, defaultValue: true),
  FlaxParameter("semanticCounterText", _flaxBinding12, required: false),
  FlaxParameter("alignLabelWithHint", _flaxBinding48, required: false),
  FlaxParameter("constraints", _flaxBinding17, required: false),
  FlaxParameter("visualDensity", _flaxBinding142, required: false),
];
const _flaxBinding313 = <FlaxParameter>[
  FlaxParameter("hintText", _flaxBinding12, required: true),
  FlaxParameter("hintStyle", _flaxBinding4, required: false),
  FlaxParameter("hint", _flaxBinding1, required: false),
  FlaxParameter("hintTextDirection", _flaxBinding266, required: false),
  FlaxParameter("hintMaxLines", _flaxBinding261, required: false),
  FlaxParameter("hintFadeDuration", _flaxBinding144, required: false),
  FlaxParameter(
    "maintainHintHeight",
    _flaxBinding18,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "maintainHintSize",
    _flaxBinding18,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "maintainLabelSize",
    _flaxBinding18,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("filled", _flaxBinding48, required: false, defaultValue: false),
  FlaxParameter("fillColor", _flaxBinding3, required: false),
  FlaxParameter("focusColor", _flaxBinding3, required: false),
  FlaxParameter("hoverColor", _flaxBinding3, required: false),
  FlaxParameter("enabled", _flaxBinding18, required: false, defaultValue: true),
  FlaxParameter("constraints", _flaxBinding17, required: false),
];
const _flaxBinding314 = FlaxObjectBinding(
  "flax.material/material#type:InputDecoration",
  [
    _flaxBinding252,
    _flaxBinding253,
    _flaxBinding254,
    _flaxBinding255,
    _flaxBinding256,
    _flaxBinding257,
    _flaxBinding258,
    _flaxBinding259,
    _flaxBinding260,
    _flaxBinding262,
    _flaxBinding263,
    _flaxBinding264,
    _flaxBinding265,
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
    _flaxBinding280,
    _flaxBinding281,
    _flaxBinding282,
    _flaxBinding283,
    _flaxBinding284,
    _flaxBinding285,
    _flaxBinding286,
    _flaxBinding287,
    _flaxBinding288,
    _flaxBinding289,
    _flaxBinding290,
    _flaxBinding291,
    _flaxBinding292,
    _flaxBinding293,
    _flaxBinding294,
    _flaxBinding295,
    _flaxBinding296,
    _flaxBinding297,
    _flaxBinding298,
    _flaxBinding299,
    _flaxBinding300,
    _flaxBinding301,
    _flaxBinding302,
    _flaxBinding303,
  ],
  {
    "copyWith": _flaxBinding307,
    "applyDefaults": _flaxBinding310,
    "toString": _flaxBinding311,
  },
  constructors: {"": _flaxBinding312, "collapsed": _flaxBinding313},
  create: _createInputDecoration,
  matches: _isInputDecoration,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding315 = FlaxTypeRef(
  "enum",
  id: "flax.material/material#type:ListTileStyle",
  nullable: true,
);
const _flaxBinding316 = FlaxTypeRef(
  "enum",
  id: "flax.material/material#type:MaterialType",
);
const _flaxBinding317 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:GlobalKey",
  dartType: FlaxDartTypes.typeOf<api1.GlobalKey<api1.NavigatorState>?>,
  nullable: true,
);
const _flaxBinding318 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding148,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding5,
  FlaxCallbackAdapters.wrap1<api1.BuildContext, api1.Widget>,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
  invoke: FlaxCallbackAdapters.invoke1<api1.BuildContext, api1.Widget>,
  matches: FlaxCallbackAdapters.matches1<api1.BuildContext, api1.Widget>,
);
const _flaxBinding319 = FlaxTypeRef("callback", callback: _flaxBinding318);
const _flaxBinding320 = FlaxTypeRef(
  "map",
  item: _flaxBinding319,
  key: _flaxBinding67,
  collection: FlaxCollectionBinding(
    "map:[callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:][String:]",
    _collection6Create,
    _collection6Matches,
  ),
);
const _flaxBinding321 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:RouteSettings",
);
const _flaxBinding322 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Route",
  dartType: FlaxDartTypes.typeOf<api1.Route<Object?>?>,
  nullable: true,
);
const _flaxBinding323 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "settings",
      _flaxBinding321,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding322,
  FlaxCallbackAdapters.wrap1<api1.RouteSettings, api1.Route<Object?>?>,
  id: "callback:<>(p:r:settings:object:flax.core/flutter#type:RouteSettings)->object?:flax.core/flutter#type:Route<Object?><any?:>",
  invoke:
      FlaxCallbackAdapters.invoke1<api1.RouteSettings, api1.Route<Object?>?>,
  matches:
      FlaxCallbackAdapters.matches1<api1.RouteSettings, api1.Route<Object?>?>,
);
const _flaxBinding324 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding323,
);
const _flaxBinding325 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Route",
  dartType: FlaxDartTypes.typeOf<api1.Route<Object?>>,
);
const _flaxBinding326 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding325,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:Route<Object?><any?:>]",
    _collection8Create,
    _collection8Matches,
    restore: _collection8Restore,
  ),
);
const _flaxBinding327 = FlaxTypeRef(
  "list",
  item: _flaxBinding325,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Route<Object?><any?:>]",
    _collection7Create,
    _collection7Matches,
  ),
  iterable: _flaxBinding326,
);
const _flaxBinding328 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "initialRoute",
      _flaxBinding67,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding327,
  FlaxCallbackAdapters.wrap1<String, List<api1.Route<Object?>>>,
  id: "callback:<>(p:r:initialRoute:String:)->list:[object:flax.core/flutter#type:Route<Object?><any?:>]",
  invoke: FlaxCallbackAdapters.invoke1<String, List<api1.Route<Object?>>>,
  matches: FlaxCallbackAdapters.matches1<String, List<api1.Route<Object?>>>,
);
const _flaxBinding329 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding328,
);
const _flaxBinding330 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:NavigationNotification",
);
const _flaxBinding331 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "notification",
      _flaxBinding330,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding18,
  FlaxCallbackAdapters.wrap1<api1.NavigationNotification, bool>,
  id: "callback:<>(p:r:notification:object:flax.core/sdk_widgets#type:NavigationNotification)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api1.NavigationNotification, bool>,
  matches: FlaxCallbackAdapters.matches1<api1.NavigationNotification, bool>,
);
const _flaxBinding332 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding331,
);
const _flaxBinding333 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:NavigatorObserver",
);
const _flaxBinding334 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding333,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:NavigatorObserver]",
    _collection10Create,
    _collection10Matches,
    restore: _collection10Restore,
  ),
);
const _flaxBinding335 = FlaxTypeRef(
  "list",
  item: _flaxBinding333,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:NavigatorObserver]",
    _collection9Create,
    _collection9Matches,
  ),
  iterable: _flaxBinding334,
);
const _flaxBinding336 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding148,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "child",
      _flaxBinding1,
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
const _flaxBinding337 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding336,
);
const _flaxBinding338 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding148,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding67,
  FlaxCallbackAdapters.wrap1<api1.BuildContext, String>,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->String:",
  invoke: FlaxCallbackAdapters.invoke1<api1.BuildContext, String>,
  matches: FlaxCallbackAdapters.matches1<api1.BuildContext, String>,
);
const _flaxBinding339 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding338,
);
const _flaxBinding340 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ThemeData",
  nullable: true,
);
const _flaxBinding341 = FlaxTypeRef(
  "enum",
  id: "flax.material/material#type:ThemeMode",
  nullable: true,
);
const _flaxBinding342 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
  nullable: true,
);
const _flaxBinding343 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:LocalizationsDelegate",
  dartType: FlaxDartTypes.typeOf<api1.LocalizationsDelegate<Object?>>,
);
const _flaxBinding344 = FlaxTypeRef(
  "iterable",
  nullable: true,
  item: _flaxBinding343,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_widgets#type:LocalizationsDelegate<Object?><any?:>]",
    _collection11Create,
    _collection11Matches,
    restore: _collection11Restore,
  ),
);
const _flaxBinding345 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding346 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding345,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection13Create,
    _collection13Matches,
    restore: _collection13Restore,
  ),
);
const _flaxBinding347 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding345,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection12Create,
    _collection12Matches,
  ),
  iterable: _flaxBinding346,
);
const _flaxBinding348 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "locales",
      _flaxBinding347,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "supportedLocales",
      _flaxBinding346,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding342,
  FlaxCallbackAdapters
      .wrap2<List<api5.Locale>?, Iterable<api5.Locale>, api5.Locale?>,
  id: "callback:<>(p:r:locales:list?:[object:flax.core/sdk_dart_ui#type:Locale],p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
  invoke: FlaxCallbackAdapters
      .invoke2<List<api5.Locale>?, Iterable<api5.Locale>, api5.Locale?>,
  matches: FlaxCallbackAdapters
      .matches2<List<api5.Locale>?, Iterable<api5.Locale>, api5.Locale?>,
);
const _flaxBinding349 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding348,
);
const _flaxBinding350 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "locale",
      _flaxBinding342,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "supportedLocales",
      _flaxBinding346,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding342,
  FlaxCallbackAdapters.wrap2<api5.Locale?, Iterable<api5.Locale>, api5.Locale?>,
  id: "callback:<>(p:r:locale:object?:flax.core/sdk_dart_ui#type:Locale,p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
  invoke: FlaxCallbackAdapters
      .invoke2<api5.Locale?, Iterable<api5.Locale>, api5.Locale?>,
  matches: FlaxCallbackAdapters
      .matches2<api5.Locale?, Iterable<api5.Locale>, api5.Locale?>,
);
const _flaxBinding351 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding350,
);
const _flaxBinding352 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:Intent",
);
const _flaxBinding353 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ShortcutActivator",
);
const _flaxBinding354 = FlaxTypeRef(
  "map",
  nullable: true,
  item: _flaxBinding352,
  key: _flaxBinding353,
  collection: FlaxCollectionBinding(
    "map:[object:flax.core/sdk_widgets#type:Intent][object:flax.core/sdk_widgets#type:ShortcutActivator]",
    _collection14Create,
    _collection14Matches,
  ),
);
const _flaxBinding355 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:Action",
  dartType: FlaxDartTypes.typeOf<api1.Action<api1.Intent>>,
);
const _flaxBinding356 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Type",
);
const _flaxBinding357 = FlaxTypeRef(
  "map",
  nullable: true,
  item: _flaxBinding355,
  key: _flaxBinding356,
  collection: FlaxCollectionBinding(
    "map:[object:flax.core/sdk_widgets#type:Action<Intent><object:flax.core/sdk_widgets#type:Intent>][object:flax.core/flutter#type:Type]",
    _collection15Create,
    _collection15Matches,
  ),
);
const _flaxBinding358 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ScrollBehavior",
  nullable: true,
);
const _flaxBinding359 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:AnimationStyle",
  nullable: true,
);
const _flaxBinding360 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouteInformationProvider",
  nullable: true,
);
const _flaxBinding361 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouteInformationParser",
  dartType: FlaxDartTypes.typeOf<api1.RouteInformationParser<Object>?>,
  nullable: true,
);
const _flaxBinding362 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouterDelegate",
  dartType: FlaxDartTypes.typeOf<api1.RouterDelegate<Object>?>,
  nullable: true,
);
const _flaxBinding363 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:RouterConfig",
  dartType: FlaxDartTypes.typeOf<api1.RouterConfig<Object>?>,
  nullable: true,
);
const _flaxBinding364 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:BackButtonDispatcher",
  nullable: true,
);
const _flaxBinding365 = FlaxGetter("name", _flaxBinding12, _MaterialPage_name);
const _flaxBinding366 = FlaxGetter(
  "arguments",
  _flaxBinding243,
  _MaterialPage_arguments,
);
const _flaxBinding367 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:LocalKey",
  nullable: true,
);
const _flaxBinding368 = FlaxGetter("key", _flaxBinding367, _MaterialPage_key);
const _flaxBinding369 = FlaxGetter(
  "restorationId",
  _flaxBinding12,
  _MaterialPage_restorationId,
);
const _flaxBinding370 = FlaxGetter(
  "canPop",
  _flaxBinding18,
  _MaterialPage_canPop,
);
const _flaxBinding371 = FlaxGetter("child", _flaxBinding5, _MaterialPage_child);
const _flaxBinding372 = FlaxGetter(
  "maintainState",
  _flaxBinding18,
  _MaterialPage_maintainState,
);
const _flaxBinding373 = FlaxGetter(
  "fullscreenDialog",
  _flaxBinding18,
  _MaterialPage_fullscreenDialog,
);
const _flaxBinding374 = FlaxGetter(
  "allowSnapshotting",
  _flaxBinding18,
  _MaterialPage_allowSnapshotting,
);
const _flaxBinding375 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Page",
  dartType: FlaxDartTypes.typeOf<api1.Page<Object?>>,
);
const _flaxBinding376 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding375, required: true),
];
const _flaxBinding377 = <FlaxParameter>[
  FlaxParameter("context", _flaxBinding148, required: true),
];
const _flaxBinding378 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "didPop",
      _flaxBinding18,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "result",
      _flaxBinding243,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid2<bool, Object?>,
  id: "callback:<>(p:r:didPop:bool:,p:r:result:any?:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid2<bool, Object?>,
  matches: FlaxCallbackAdapters.matchesVoid2<bool, Object?>,
);
const _flaxBinding379 = FlaxTypeRef("callback", callback: _flaxBinding378);
const _flaxBinding380 = <FlaxParameter>[
  FlaxParameter("child", _flaxBinding5, required: true),
  FlaxParameter(
    "maintainState",
    _flaxBinding18,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "fullscreenDialog",
    _flaxBinding18,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "allowSnapshotting",
    _flaxBinding18,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("key", _flaxBinding367, required: false),
  FlaxParameter("canPop", _flaxBinding18, required: false, defaultValue: true),
  FlaxParameter(
    "onPopInvoked",
    _flaxBinding379,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("name", _flaxBinding12, required: false),
  FlaxParameter("arguments", _flaxBinding243, required: false),
  FlaxParameter("restorationId", _flaxBinding12, required: false),
];
const _flaxBinding381 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ImageFilter",
  nullable: true,
);
const _flaxBinding382 = FlaxGetter(
  "filter",
  _flaxBinding381,
  _MaterialPageRoute_filter,
);
const _flaxBinding383 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_widgets#type:TraversalEdgeBehavior",
  nullable: true,
);
const _flaxBinding384 = FlaxGetter(
  "traversalEdgeBehavior",
  _flaxBinding383,
  _MaterialPageRoute_traversalEdgeBehavior,
);
const _flaxBinding385 = FlaxGetter(
  "directionalTraversalEdgeBehavior",
  _flaxBinding383,
  _MaterialPageRoute_directionalTraversalEdgeBehavior,
);
const _flaxBinding386 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api3.Animation<double>>,
);
const _flaxBinding387 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding148,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "animation",
      _flaxBinding386,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "secondaryAnimation",
      _flaxBinding386,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "allowSnapshotting",
      _flaxBinding18,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "child",
      _flaxBinding1,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding1,
  _callback2,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:animation:object:flax.core/sdk_animation#type:Animation<Object?><double:>,p:r:secondaryAnimation:object:flax.core/sdk_animation#type:Animation<Object?><double:>,p:r:allowSnapshotting:bool:,p:r:child:widget?:)->widget?:",
  invoke: _callback2Invoke,
  matches: _callback2Matches,
);
const _flaxBinding388 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding387,
);
const _flaxBinding389 = FlaxGetter(
  "delegatedTransition",
  _flaxBinding388,
  _MaterialPageRoute_delegatedTransition,
);
const _flaxBinding390 = FlaxGetter(
  "receivedTransition",
  _flaxBinding388,
  _MaterialPageRoute_receivedTransition,
);
const _flaxBinding391 = FlaxGetter(
  "barrierDismissible",
  _flaxBinding18,
  _MaterialPageRoute_barrierDismissible,
);
const _flaxBinding392 = FlaxGetter(
  "semanticsDismissible",
  _flaxBinding18,
  _MaterialPageRoute_semanticsDismissible,
);
const _flaxBinding393 = FlaxGetter(
  "barrierColor",
  _flaxBinding3,
  _MaterialPageRoute_barrierColor,
);
const _flaxBinding394 = FlaxGetter(
  "barrierLabel",
  _flaxBinding12,
  _MaterialPageRoute_barrierLabel,
);
const _flaxBinding395 = FlaxGetter(
  "barrierCurve",
  _flaxBinding22,
  _MaterialPageRoute_barrierCurve,
);
const _flaxBinding396 = FlaxGetter(
  "maintainState",
  _flaxBinding18,
  _MaterialPageRoute_maintainState,
);
const _flaxBinding397 = FlaxGetter(
  "popGestureInProgress",
  _flaxBinding18,
  _MaterialPageRoute_popGestureInProgress,
);
const _flaxBinding398 = FlaxGetter(
  "popGestureEnabled",
  _flaxBinding18,
  _MaterialPageRoute_popGestureEnabled,
);
const _flaxBinding399 = FlaxGetter(
  "offstage",
  _flaxBinding18,
  _MaterialPageRoute_offstage,
);
const _flaxBinding400 = FlaxTypeRef(
  "context",
  id: "flax.core/flutter#type:BuildContext",
  nullable: true,
);
const _flaxBinding401 = FlaxGetter(
  "subtreeContext",
  _flaxBinding400,
  _MaterialPageRoute_subtreeContext,
);
const _flaxBinding402 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api3.Animation<double>?>,
  nullable: true,
);
const _flaxBinding403 = FlaxGetter(
  "animation",
  _flaxBinding402,
  _MaterialPageRoute_animation,
);
const _flaxBinding404 = FlaxGetter(
  "secondaryAnimation",
  _flaxBinding402,
  _MaterialPageRoute_secondaryAnimation,
);
const _flaxBinding405 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_widgets#type:RoutePopDisposition",
);
const _flaxBinding406 = FlaxGetter(
  "popDisposition",
  _flaxBinding405,
  _MaterialPageRoute_popDisposition,
);
const _flaxBinding407 = FlaxGetter(
  "hasScopedWillPopCallback",
  _flaxBinding18,
  _MaterialPageRoute_hasScopedWillPopCallback,
);
const _flaxBinding408 = FlaxGetter(
  "canPop",
  _flaxBinding18,
  _MaterialPageRoute_canPop,
);
const _flaxBinding409 = FlaxGetter(
  "impliesAppBarDismissal",
  _flaxBinding18,
  _MaterialPageRoute_impliesAppBarDismissal,
);
const _flaxBinding410 = FlaxGetter(
  "fullscreenDialog",
  _flaxBinding18,
  _MaterialPageRoute_fullscreenDialog,
);
const _flaxBinding411 = FlaxGetter(
  "transitionDuration",
  _flaxBinding21,
  _MaterialPageRoute_transitionDuration,
);
const _flaxBinding412 = FlaxGetter(
  "reverseTransitionDuration",
  _flaxBinding21,
  _MaterialPageRoute_reverseTransitionDuration,
);
const _flaxBinding413 = FlaxGetter(
  "opaque",
  _flaxBinding18,
  _MaterialPageRoute_opaque,
);
const _flaxBinding414 = FlaxGetter(
  "allowSnapshotting",
  _flaxBinding18,
  _MaterialPageRoute_allowSnapshotting,
);
const _flaxBinding415 = FlaxGetter(
  "finishedWhenPopped",
  _flaxBinding18,
  _MaterialPageRoute_finishedWhenPopped,
);
const _flaxBinding416 = FlaxGetter(
  "controller",
  _flaxBinding170,
  _MaterialPageRoute_controller,
);
const _flaxBinding417 = FlaxGetter(
  "willDisposeAnimationController",
  _flaxBinding18,
  _MaterialPageRoute_willDisposeAnimationController,
);
const _flaxBinding418 = FlaxGetter(
  "debugLabel",
  _flaxBinding67,
  _MaterialPageRoute_debugLabel,
);
const _flaxBinding419 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:OverlayEntry",
);
const _flaxBinding420 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding419,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_widgets#type:OverlayEntry]",
    _collection17Create,
    _collection17Matches,
    restore: _collection17Restore,
  ),
);
const _flaxBinding421 = FlaxTypeRef(
  "list",
  item: _flaxBinding419,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_widgets#type:OverlayEntry]",
    _collection16Create,
    _collection16Matches,
  ),
  iterable: _flaxBinding420,
);
const _flaxBinding422 = FlaxGetter(
  "overlayEntries",
  _flaxBinding421,
  _MaterialPageRoute_overlayEntries,
);
const _flaxBinding423 = FlaxGetter(
  "requestFocus",
  _flaxBinding18,
  _MaterialPageRoute_requestFocus,
);
const _flaxBinding424 = FlaxTypeRef(
  "state",
  id: "flax.core/flutter#type:NavigatorState",
  nullable: true,
);
const _flaxBinding425 = FlaxGetter(
  "navigator",
  _flaxBinding424,
  _MaterialPageRoute_navigator,
);
const _flaxBinding426 = FlaxGetter(
  "settings",
  _flaxBinding321,
  _MaterialPageRoute_settings,
);
const _flaxBinding427 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ValueListenable",
  dartType: FlaxDartTypes.typeOf<api6.ValueListenable<String?>>,
);
const _flaxBinding428 = FlaxGetter(
  "restorationScopeId",
  _flaxBinding427,
  _MaterialPageRoute_restorationScopeId,
);
const _flaxBinding429 = FlaxGetter(
  "willHandlePopInternally",
  _flaxBinding18,
  _MaterialPageRoute_willHandlePopInternally,
);
const _flaxBinding430 = FlaxGetter(
  "isCurrent",
  _flaxBinding18,
  _MaterialPageRoute_isCurrent,
);
const _flaxBinding431 = FlaxGetter(
  "isFirst",
  _flaxBinding18,
  _MaterialPageRoute_isFirst,
);
const _flaxBinding432 = FlaxGetter(
  "hasActiveRouteBelow",
  _flaxBinding18,
  _MaterialPageRoute_hasActiveRouteBelow,
);
const _flaxBinding433 = FlaxGetter(
  "isActive",
  _flaxBinding18,
  _MaterialPageRoute_isActive,
);
const _flaxBinding434 = FlaxGetter(
  "builder",
  _flaxBinding319,
  _MaterialPageRoute_builder,
);
const _flaxBinding435 = FlaxTypeRef("callback", callback: _flaxBinding238);
const _flaxBinding436 = <FlaxParameter>[
  FlaxParameter("fn", _flaxBinding435, required: true),
];
const _flaxBinding437 = <FlaxParameter>[
  FlaxParameter("context", _flaxBinding148, required: true),
  FlaxParameter("animation", _flaxBinding386, required: true),
  FlaxParameter("secondaryAnimation", _flaxBinding386, required: true),
];
const _flaxBinding438 = <FlaxParameter>[
  FlaxParameter("context", _flaxBinding148, required: true),
  FlaxParameter("animation", _flaxBinding386, required: true),
  FlaxParameter("secondaryAnimation", _flaxBinding386, required: true),
  FlaxParameter("child", _flaxBinding5, required: true),
];
const _flaxBinding439 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding440 = FlaxTypeRef(
  "future",
  item: _flaxBinding405,
  future: FlaxFutureBinding(
    "enum:flax.core/sdk_widgets#type:RoutePopDisposition",
    _future1Adapt,
  ),
);
const _flaxBinding441 = FlaxTypeRef(
  "future",
  item: _flaxBinding18,
  future: FlaxFutureBinding("bool:", _future2Adapt),
);
const _flaxBinding442 = FlaxCallbackBinding(
  [],
  _flaxBinding441,
  _callback3,
  id: "callback:<>()->future:[bool:]",
  invoke: _callback3Invoke,
  matches: _callback3Matches,
);
const _flaxBinding443 = FlaxTypeRef("callback", callback: _flaxBinding442);
const _flaxBinding444 = <FlaxParameter>[
  FlaxParameter("callback", _flaxBinding443, required: true),
];
const _flaxBinding445 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:PopEntry",
  dartType: FlaxDartTypes.typeOf<api1.PopEntry<Object?>>,
);
const _flaxBinding446 = <FlaxParameter>[
  FlaxParameter("popEntry", _flaxBinding445, required: true),
];
const _flaxBinding447 = <FlaxParameter>[
  FlaxParameter("previousRoute", _flaxBinding322, required: true),
];
const _flaxBinding448 = <FlaxParameter>[
  FlaxParameter("nextRoute", _flaxBinding322, required: true),
];
const _flaxBinding449 = <FlaxParameter>[
  FlaxParameter("nextRoute", _flaxBinding325, required: true),
];
const _flaxBinding450 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:AnimationController",
);
const _flaxBinding451 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_physics#type:Simulation",
  nullable: true,
);
const _flaxBinding452 = <FlaxParameter>[
  FlaxParameter("forward", _flaxBinding18, required: true),
];
const _flaxBinding453 = <FlaxParameter>[
  FlaxParameter("oldRoute", _flaxBinding322, required: true),
];
const _flaxBinding454 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:TransitionRoute",
  dartType: FlaxDartTypes.typeOf<api1.TransitionRoute<Object?>>,
);
const _flaxBinding455 = <FlaxParameter>[
  FlaxParameter("nextRoute", _flaxBinding454, required: true),
];
const _flaxBinding456 = <FlaxParameter>[
  FlaxParameter("previousRoute", _flaxBinding454, required: true),
];
const _flaxBinding457 = <FlaxParameter>[
  FlaxParameter("progress", _flaxBinding52, required: false, defaultValue: 0.0),
];
const _flaxBinding458 = <FlaxParameter>[
  FlaxParameter("progress", _flaxBinding52, required: true),
];
const _flaxBinding459 = <FlaxParameter>[
  FlaxParameter("didPop", _flaxBinding18, required: true),
];
const _flaxBinding460 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:LocalHistoryEntry",
);
const _flaxBinding461 = <FlaxParameter>[
  FlaxParameter("entry", _flaxBinding460, required: true),
];
const _flaxBinding462 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:RouteSettings",
  nullable: true,
);
const _flaxBinding463 = <FlaxParameter>[
  FlaxParameter("builder", _flaxBinding319, required: true),
  FlaxParameter("settings", _flaxBinding462, required: false),
  FlaxParameter("requestFocus", _flaxBinding48, required: false),
  FlaxParameter(
    "maintainState",
    _flaxBinding18,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "fullscreenDialog",
    _flaxBinding18,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "allowSnapshotting",
    _flaxBinding18,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "barrierDismissible",
    _flaxBinding18,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("traversalEdgeBehavior", _flaxBinding383, required: false),
  FlaxParameter(
    "directionalTraversalEdgeBehavior",
    _flaxBinding383,
    required: false,
  ),
];
const _flaxBinding464 = FlaxSetter(
  "receivedTransition",
  _flaxBinding388,
  _MaterialPageRoute_set_receivedTransition,
);
const _flaxBinding465 = FlaxSetter(
  "offstage",
  _flaxBinding18,
  _MaterialPageRoute_set_offstage,
);
const _flaxBinding466 = FlaxSetter(
  "willDisposeAnimationController",
  _flaxBinding18,
  _MaterialPageRoute_set_willDisposeAnimationController,
);
const _flaxBinding467 = FlaxTypeRef(
  "list",
  item: _flaxBinding5,
  collection: FlaxCollectionBinding(
    "list:[widget:]",
    _collection0Create,
    _collection0Matches,
    snapshot: _collection0Snapshot,
  ),
  iterable: _flaxBinding6,
);
const _flaxBinding468 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding83,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid1<int>,
  id: "callback:<>(p:r:value:int:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<int>,
  matches: FlaxCallbackAdapters.matchesVoid1<int>,
);
const _flaxBinding469 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding468,
);
const _flaxBinding470 = FlaxTypeRef(
  "enum",
  id: "flax.material/material#type:NavigationDestinationLabelBehavior",
  nullable: true,
);
const _flaxBinding471 = FlaxTypeRef(
  "future",
  item: _flaxBinding78,
  future: FlaxFutureBinding("void:", _future3Adapt),
);
const _flaxBinding472 = FlaxCallbackBinding(
  [],
  _flaxBinding471,
  _callback4,
  id: "callback:<>()->future:[void:]",
  invoke: _callback4Invoke,
  matches: _callback4Matches,
);
const _flaxBinding473 = FlaxTypeRef("callback", callback: _flaxBinding472);
const _flaxBinding474 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:AlignmentDirectional",
);
const _flaxBinding475 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BoxDecoration",
  nullable: true,
);
const _flaxBinding476 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "isOpened",
      _flaxBinding18,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid1<bool>,
  id: "callback:<>(p:r:isOpened:bool:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<bool>,
  matches: FlaxCallbackAdapters.matchesVoid1<bool>,
);
const _flaxBinding477 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding476,
);
const _flaxBinding478 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:DragStartBehavior",
);
const _flaxBinding479 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "p0",
      _flaxBinding148,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "p1",
      _flaxBinding386,
      required: true,
      positional: true,
    ),
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
const _flaxBinding480 = FlaxTypeRef("callback", callback: _flaxBinding479);
const _flaxBinding481 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_painting#type:ImageProvider",
  dartType: FlaxDartTypes.typeOf<api2.ImageProvider<Object>?>,
  nullable: true,
);
const _flaxBinding482 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StackTrace",
  nullable: true,
);
const _flaxBinding483 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "exception",
      _flaxBinding308,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "stackTrace",
      _flaxBinding482,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid2<Object, api8.StackTrace?>,
  id: "callback:<>(p:r:exception:any:,p:r:stackTrace:object?:flax.core/flutter#type:StackTrace)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid2<Object, api8.StackTrace?>,
  matches: FlaxCallbackAdapters.matchesVoid2<Object, api8.StackTrace?>,
);
const _flaxBinding484 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding483,
);
const _flaxBinding485 = FlaxTypeRef(
  "widget",
  id: "flax.core/sdk_widgets#type:Icon",
  nullable: true,
);
const _flaxBinding486 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "states",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding485,
  FlaxCallbackAdapters.wrap1<Set<api1.WidgetState>, api1.Icon?>,
  id: "callback:<>(p:r:states:set:[enum:flax.core/flutter#type:WidgetState])->widget?:flax.core/sdk_widgets#type:Icon",
  invoke: FlaxCallbackAdapters.invoke1<Set<api1.WidgetState>, api1.Icon?>,
  matches: FlaxCallbackAdapters.matches1<Set<api1.WidgetState>, api1.Icon?>,
);
const _flaxBinding487 = FlaxTypeRef("callback", callback: _flaxBinding486);
const _flaxBinding488 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:WidgetStateProperty",
  dartType: FlaxDartTypes.typeOf<api1.WidgetStateProperty<api1.Icon?>?>,
  nullable: true,
  deferredFactories: {
    "resolveWith": FlaxDeferredFactoryBinding(
      "object:flax.core/flutter#type:WidgetStateProperty<Object?><widget?:flax.core/sdk_widgets#type:Icon>",
      [FlaxParameter("callback", _flaxBinding487, required: true)],
      _deferred8,
    ),
  },
);
const _flaxBinding489 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextEditingController",
  nullable: true,
);
const _flaxBinding490 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:UndoHistoryController",
  nullable: true,
);
const _flaxBinding491 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:InputDecoration",
  nullable: true,
);
const _flaxBinding492 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_services#type:TextInputType",
  nullable: true,
);
const _flaxBinding493 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_services#type:TextInputAction",
  nullable: true,
);
const _flaxBinding494 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_services#type:TextCapitalization",
);
const _flaxBinding495 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_painting#type:StrutStyle",
  nullable: true,
);
const _flaxBinding496 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextAlign",
);
const _flaxBinding497 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_painting#type:TextAlignVertical",
  nullable: true,
);
const _flaxBinding498 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ToolbarOptions",
  nullable: true,
);
const _flaxBinding499 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_services#type:SmartDashesType",
  nullable: true,
);
const _flaxBinding500 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_services#type:SmartQuotesType",
  nullable: true,
);
const _flaxBinding501 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:MaxLengthEnforcement",
  nullable: true,
);
const _flaxBinding502 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding67,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid1<String>,
  id: "callback:<>(p:r:value:String:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<String>,
  matches: FlaxCallbackAdapters.matchesVoid1<String>,
);
const _flaxBinding503 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding502,
);
const _flaxBinding504 = FlaxTypeRef(
  "map",
  item: _flaxBinding243,
  key: _flaxBinding67,
  collection: FlaxCollectionBinding(
    "map:[any?:][String:]",
    _collection18Create,
    _collection18Matches,
  ),
);
const _flaxBinding505 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "action",
      _flaxBinding67,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "data",
      _flaxBinding504,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid2<String, Map<String, Object?>>,
  id: "callback:<>(p:r:action:String:,p:r:data:map:[any?:][String:])->void:",
  invoke: FlaxCallbackAdapters.invokeVoid2<String, Map<String, Object?>>,
  matches: FlaxCallbackAdapters.matchesVoid2<String, Map<String, Object?>>,
);
const _flaxBinding506 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding505,
);
const _flaxBinding507 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextInputFormatter",
);
const _flaxBinding508 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding507,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:TextInputFormatter]",
    _collection20Create,
    _collection20Matches,
    restore: _collection20Restore,
  ),
);
const _flaxBinding509 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding507,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:TextInputFormatter]",
    _collection19Create,
    _collection19Matches,
  ),
  iterable: _flaxBinding508,
);
const _flaxBinding510 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Radius",
  nullable: true,
);
const _flaxBinding511 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BoxHeightStyle",
  nullable: true,
);
const _flaxBinding512 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BoxWidthStyle",
  nullable: true,
);
const _flaxBinding513 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:TextSelectionControls",
  nullable: true,
);
const _flaxBinding514 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_gestures#type:PointerDownEvent",
);
const _flaxBinding515 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "event",
      _flaxBinding514,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid1<api7.PointerDownEvent>,
  id: "callback:<>(p:r:event:object:flax.core/sdk_gestures#type:PointerDownEvent)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api7.PointerDownEvent>,
  matches: FlaxCallbackAdapters.matchesVoid1<api7.PointerDownEvent>,
);
const _flaxBinding516 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding515,
);
const _flaxBinding517 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_gestures#type:PointerUpEvent",
);
const _flaxBinding518 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "event",
      _flaxBinding517,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding78,
  FlaxCallbackAdapters.wrapVoid1<api7.PointerUpEvent>,
  id: "callback:<>(p:r:event:object:flax.core/sdk_gestures#type:PointerUpEvent)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api7.PointerUpEvent>,
  matches: FlaxCallbackAdapters.matchesVoid1<api7.PointerUpEvent>,
);
const _flaxBinding519 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding518,
);
const _flaxBinding520 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding148,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "currentLength",
      _flaxBinding83,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isFocused",
      _flaxBinding18,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "maxLength",
      _flaxBinding261,
      required: true,
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
const _flaxBinding521 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding520,
);
const _flaxBinding522 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ScrollPhysics",
  nullable: true,
);
const _flaxBinding523 = FlaxTypeRef(
  "iterable",
  nullable: true,
  item: _flaxBinding67,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection21Create,
    _collection21Matches,
    restore: _collection21Restore,
  ),
);
const _flaxBinding524 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:ContentInsertionConfiguration",
  nullable: true,
);
const _flaxBinding525 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:EditableTextState",
);
const _flaxBinding526 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding148,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "editableTextState",
      _flaxBinding525,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding5,
  FlaxCallbackAdapters
      .wrap2<api1.BuildContext, api1.EditableTextState, api1.Widget>,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:editableTextState:object:flax.core/sdk_widgets#type:EditableTextState)->widget:",
  invoke: FlaxCallbackAdapters
      .invoke2<api1.BuildContext, api1.EditableTextState, api1.Widget>,
  matches: FlaxCallbackAdapters
      .matches2<api1.BuildContext, api1.EditableTextState, api1.Widget>,
  independentWidgetResult: true,
);
const _flaxBinding527 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding526,
);
const _flaxBinding528 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:SpellCheckConfiguration",
  nullable: true,
);
const _flaxBinding529 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:TextMagnifierConfiguration",
  nullable: true,
);
const _flaxBinding530 = FlaxGetter(
  "displayLarge",
  _flaxBinding4,
  _TextTheme_displayLarge,
);
const _flaxBinding531 = FlaxGetter(
  "displayMedium",
  _flaxBinding4,
  _TextTheme_displayMedium,
);
const _flaxBinding532 = FlaxGetter(
  "displaySmall",
  _flaxBinding4,
  _TextTheme_displaySmall,
);
const _flaxBinding533 = FlaxGetter(
  "headlineLarge",
  _flaxBinding4,
  _TextTheme_headlineLarge,
);
const _flaxBinding534 = FlaxGetter(
  "headlineMedium",
  _flaxBinding4,
  _TextTheme_headlineMedium,
);
const _flaxBinding535 = FlaxGetter(
  "headlineSmall",
  _flaxBinding4,
  _TextTheme_headlineSmall,
);
const _flaxBinding536 = FlaxGetter(
  "titleLarge",
  _flaxBinding4,
  _TextTheme_titleLarge,
);
const _flaxBinding537 = FlaxGetter(
  "titleMedium",
  _flaxBinding4,
  _TextTheme_titleMedium,
);
const _flaxBinding538 = FlaxGetter(
  "titleSmall",
  _flaxBinding4,
  _TextTheme_titleSmall,
);
const _flaxBinding539 = FlaxGetter(
  "bodyLarge",
  _flaxBinding4,
  _TextTheme_bodyLarge,
);
const _flaxBinding540 = FlaxGetter(
  "bodyMedium",
  _flaxBinding4,
  _TextTheme_bodyMedium,
);
const _flaxBinding541 = FlaxGetter(
  "bodySmall",
  _flaxBinding4,
  _TextTheme_bodySmall,
);
const _flaxBinding542 = FlaxGetter(
  "labelLarge",
  _flaxBinding4,
  _TextTheme_labelLarge,
);
const _flaxBinding543 = FlaxGetter(
  "labelMedium",
  _flaxBinding4,
  _TextTheme_labelMedium,
);
const _flaxBinding544 = FlaxGetter(
  "labelSmall",
  _flaxBinding4,
  _TextTheme_labelSmall,
);
const _flaxBinding545 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding67,
  _TextTheme_toStringShort,
);
const _flaxBinding546 = FlaxInstanceMethod(
  _flaxBinding71,
  _flaxBinding67,
  _TextTheme_toString,
);
const _flaxBinding547 = FlaxInstanceMethod(
  _flaxBinding74,
  _flaxBinding75,
  _TextTheme_toDiagnosticsNode,
);
const _flaxBinding548 = FlaxInstanceMethod(
  _flaxBinding79,
  _flaxBinding78,
  _TextTheme_debugFillProperties,
);
const _flaxBinding549 = <FlaxParameter>[
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
const _flaxBinding550 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:TextTheme",
);
const _flaxBinding551 = FlaxInstanceMethod(
  _flaxBinding549,
  _flaxBinding550,
  _TextTheme_copyWith,
);
const _flaxBinding552 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:TextTheme",
  nullable: true,
);
const _flaxBinding553 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding552, required: true),
];
const _flaxBinding554 = FlaxInstanceMethod(
  _flaxBinding553,
  _flaxBinding550,
  _TextTheme_merge,
);
const _flaxBinding555 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextDecoration",
  nullable: true,
);
const _flaxBinding556 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TextDecorationStyle",
  nullable: true,
);
const _flaxBinding557 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding67,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection21Create,
    _collection21Matches,
    restore: _collection21Restore,
  ),
);
const _flaxBinding558 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding67,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection22Create,
    _collection22Matches,
  ),
  iterable: _flaxBinding557,
);
const _flaxBinding559 = <FlaxParameter>[
  FlaxParameter("bodyColor", _flaxBinding3, required: false),
  FlaxParameter("decoration", _flaxBinding555, required: false),
  FlaxParameter("decorationColor", _flaxBinding3, required: false),
  FlaxParameter("decorationStyle", _flaxBinding556, required: false),
  FlaxParameter("displayColor", _flaxBinding3, required: false),
  FlaxParameter("fontFamily", _flaxBinding12, required: false),
  FlaxParameter("fontFamilyFallback", _flaxBinding558, required: false),
  FlaxParameter(
    "fontSizeDelta",
    _flaxBinding52,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "fontSizeFactor",
    _flaxBinding52,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter(
    "heightDelta",
    _flaxBinding52,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "heightFactor",
    _flaxBinding52,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter(
    "letterSpacingDelta",
    _flaxBinding52,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "letterSpacingFactor",
    _flaxBinding52,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter("package", _flaxBinding12, required: false),
  FlaxParameter(
    "wordSpacingDelta",
    _flaxBinding52,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "wordSpacingFactor",
    _flaxBinding52,
    required: false,
    defaultValue: 1.0,
  ),
];
const _flaxBinding560 = FlaxInstanceMethod(
  _flaxBinding559,
  _flaxBinding550,
  _TextTheme_apply,
);
const _flaxBinding561 = <FlaxParameter>[
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
const _flaxBinding562 = FlaxObjectBinding(
  "flax.material/material#type:TextTheme",
  [
    _flaxBinding530,
    _flaxBinding531,
    _flaxBinding532,
    _flaxBinding533,
    _flaxBinding534,
    _flaxBinding535,
    _flaxBinding536,
    _flaxBinding537,
    _flaxBinding538,
    _flaxBinding539,
    _flaxBinding540,
    _flaxBinding541,
    _flaxBinding542,
    _flaxBinding543,
    _flaxBinding544,
  ],
  {
    "toStringShort": _flaxBinding545,
    "toString": _flaxBinding546,
    "toDiagnosticsNode": _flaxBinding547,
    "debugFillProperties": _flaxBinding548,
    "copyWith": _flaxBinding551,
    "merge": _flaxBinding554,
    "apply": _flaxBinding560,
  },
  constructors: {"": _flaxBinding561},
  create: _createTextTheme,
  matches: _isTextTheme,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding563 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ThemeData",
);
const _flaxBinding564 = FlaxGetter(
  "brightness",
  _flaxBinding171,
  _ThemeData_brightness,
);
const _flaxBinding565 = FlaxGetter(
  "applyElevationOverlayColor",
  _flaxBinding18,
  _ThemeData_applyElevationOverlayColor,
);
const _flaxBinding566 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TargetPlatform",
);
const _flaxBinding567 = FlaxGetter(
  "platform",
  _flaxBinding566,
  _ThemeData_platform,
);
const _flaxBinding568 = FlaxGetter(
  "useMaterial3",
  _flaxBinding18,
  _ThemeData_useMaterial3,
);
const _flaxBinding569 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:VisualDensity",
);
const _flaxBinding570 = FlaxGetter(
  "visualDensity",
  _flaxBinding569,
  _ThemeData_visualDensity,
);
const _flaxBinding571 = FlaxGetter(
  "canvasColor",
  _flaxBinding173,
  _ThemeData_canvasColor,
);
const _flaxBinding572 = FlaxGetter(
  "cardColor",
  _flaxBinding173,
  _ThemeData_cardColor,
);
const _flaxBinding573 = FlaxGetter(
  "colorScheme",
  _flaxBinding229,
  _ThemeData_colorScheme,
);
const _flaxBinding574 = FlaxGetter(
  "disabledColor",
  _flaxBinding173,
  _ThemeData_disabledColor,
);
const _flaxBinding575 = FlaxGetter(
  "dividerColor",
  _flaxBinding173,
  _ThemeData_dividerColor,
);
const _flaxBinding576 = FlaxGetter(
  "focusColor",
  _flaxBinding173,
  _ThemeData_focusColor,
);
const _flaxBinding577 = FlaxGetter(
  "highlightColor",
  _flaxBinding173,
  _ThemeData_highlightColor,
);
const _flaxBinding578 = FlaxGetter(
  "hintColor",
  _flaxBinding173,
  _ThemeData_hintColor,
);
const _flaxBinding579 = FlaxGetter(
  "hoverColor",
  _flaxBinding173,
  _ThemeData_hoverColor,
);
const _flaxBinding580 = FlaxGetter(
  "primaryColor",
  _flaxBinding173,
  _ThemeData_primaryColor,
);
const _flaxBinding581 = FlaxGetter(
  "primaryColorDark",
  _flaxBinding173,
  _ThemeData_primaryColorDark,
);
const _flaxBinding582 = FlaxGetter(
  "primaryColorLight",
  _flaxBinding173,
  _ThemeData_primaryColorLight,
);
const _flaxBinding583 = FlaxGetter(
  "scaffoldBackgroundColor",
  _flaxBinding173,
  _ThemeData_scaffoldBackgroundColor,
);
const _flaxBinding584 = FlaxGetter(
  "secondaryHeaderColor",
  _flaxBinding173,
  _ThemeData_secondaryHeaderColor,
);
const _flaxBinding585 = FlaxGetter(
  "shadowColor",
  _flaxBinding173,
  _ThemeData_shadowColor,
);
const _flaxBinding586 = FlaxGetter(
  "splashColor",
  _flaxBinding173,
  _ThemeData_splashColor,
);
const _flaxBinding587 = FlaxGetter(
  "unselectedWidgetColor",
  _flaxBinding173,
  _ThemeData_unselectedWidgetColor,
);
const _flaxBinding588 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:IconThemeData",
);
const _flaxBinding589 = FlaxGetter(
  "iconTheme",
  _flaxBinding588,
  _ThemeData_iconTheme,
);
const _flaxBinding590 = FlaxGetter(
  "primaryIconTheme",
  _flaxBinding588,
  _ThemeData_primaryIconTheme,
);
const _flaxBinding591 = FlaxGetter(
  "primaryTextTheme",
  _flaxBinding550,
  _ThemeData_primaryTextTheme,
);
const _flaxBinding592 = FlaxGetter(
  "textTheme",
  _flaxBinding550,
  _ThemeData_textTheme,
);
const _flaxBinding593 = FlaxGetter(
  "dialogBackgroundColor",
  _flaxBinding173,
  _ThemeData_dialogBackgroundColor,
);
const _flaxBinding594 = FlaxGetter(
  "indicatorColor",
  _flaxBinding173,
  _ThemeData_indicatorColor,
);
const _flaxBinding595 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding67,
  _ThemeData_toStringShort,
);
const _flaxBinding596 = FlaxInstanceMethod(
  _flaxBinding71,
  _flaxBinding67,
  _ThemeData_toString,
);
const _flaxBinding597 = FlaxInstanceMethod(
  _flaxBinding74,
  _flaxBinding75,
  _ThemeData_toDiagnosticsNode,
);
const _flaxBinding598 = FlaxInstanceMethod(
  _flaxBinding79,
  _flaxBinding78,
  _ThemeData_debugFillProperties,
);
const _flaxBinding599 = FlaxTypeRef(
  "object",
  id: "flax.material/material#type:ColorScheme",
  nullable: true,
);
const _flaxBinding600 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TargetPlatform",
  nullable: true,
);
const _flaxBinding601 = <FlaxParameter>[
  FlaxParameter("appBarTheme", _flaxBinding243, required: false),
  FlaxParameter("applyElevationOverlayColor", _flaxBinding48, required: false),
  FlaxParameter("brightness", _flaxBinding227, required: false),
  FlaxParameter("canvasColor", _flaxBinding3, required: false),
  FlaxParameter("cardColor", _flaxBinding3, required: false),
  FlaxParameter("colorScheme", _flaxBinding599, required: false),
  FlaxParameter("dialogBackgroundColor", _flaxBinding3, required: false),
  FlaxParameter("disabledColor", _flaxBinding3, required: false),
  FlaxParameter("dividerColor", _flaxBinding3, required: false),
  FlaxParameter("focusColor", _flaxBinding3, required: false),
  FlaxParameter("highlightColor", _flaxBinding3, required: false),
  FlaxParameter("hintColor", _flaxBinding3, required: false),
  FlaxParameter("hoverColor", _flaxBinding3, required: false),
  FlaxParameter("iconTheme", _flaxBinding44, required: false),
  FlaxParameter("indicatorColor", _flaxBinding3, required: false),
  FlaxParameter("inputDecorationTheme", _flaxBinding243, required: false),
  FlaxParameter("platform", _flaxBinding600, required: false),
  FlaxParameter("primaryColor", _flaxBinding3, required: false),
  FlaxParameter("primaryColorDark", _flaxBinding3, required: false),
  FlaxParameter("primaryColorLight", _flaxBinding3, required: false),
  FlaxParameter("primaryIconTheme", _flaxBinding44, required: false),
  FlaxParameter("primaryTextTheme", _flaxBinding552, required: false),
  FlaxParameter("scaffoldBackgroundColor", _flaxBinding3, required: false),
  FlaxParameter("secondaryHeaderColor", _flaxBinding3, required: false),
  FlaxParameter("shadowColor", _flaxBinding3, required: false),
  FlaxParameter("splashColor", _flaxBinding3, required: false),
  FlaxParameter("textTheme", _flaxBinding552, required: false),
  FlaxParameter("unselectedWidgetColor", _flaxBinding3, required: false),
  FlaxParameter("useMaterial3", _flaxBinding48, required: false),
  FlaxParameter("visualDensity", _flaxBinding142, required: false),
];
const _flaxBinding602 = FlaxInstanceMethod(
  _flaxBinding601,
  _flaxBinding563,
  _ThemeData_copyWith,
);
const _flaxBinding603 = <FlaxParameter>[
  FlaxParameter("applyElevationOverlayColor", _flaxBinding48, required: false),
  FlaxParameter("inputDecorationTheme", _flaxBinding243, required: false),
  FlaxParameter("platform", _flaxBinding600, required: false),
  FlaxParameter("useMaterial3", _flaxBinding48, required: false),
  FlaxParameter("useSystemColors", _flaxBinding48, required: false),
  FlaxParameter("visualDensity", _flaxBinding142, required: false),
  FlaxParameter("colorScheme", _flaxBinding599, required: false),
  FlaxParameter("brightness", _flaxBinding227, required: false),
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
  FlaxParameter("fontFamily", _flaxBinding12, required: false),
  FlaxParameter("fontFamilyFallback", _flaxBinding558, required: false),
  FlaxParameter("package", _flaxBinding12, required: false),
  FlaxParameter("iconTheme", _flaxBinding44, required: false),
  FlaxParameter("primaryIconTheme", _flaxBinding44, required: false),
  FlaxParameter("primaryTextTheme", _flaxBinding552, required: false),
  FlaxParameter("textTheme", _flaxBinding552, required: false),
  FlaxParameter("appBarTheme", _flaxBinding243, required: false),
  FlaxParameter("dialogBackgroundColor", _flaxBinding3, required: false),
  FlaxParameter("indicatorColor", _flaxBinding3, required: false),
];
const _flaxBinding604 = <FlaxParameter>[
  FlaxParameter("colorScheme", _flaxBinding229, required: true),
  FlaxParameter("textTheme", _flaxBinding552, required: false),
  FlaxParameter("useMaterial3", _flaxBinding48, required: false),
];
const _flaxBinding605 = <FlaxParameter>[
  FlaxParameter("useMaterial3", _flaxBinding48, required: false),
];
const _flaxBinding606 = FlaxObjectBinding(
  "flax.material/material#type:ThemeData",
  [
    _flaxBinding564,
    _flaxBinding565,
    _flaxBinding567,
    _flaxBinding568,
    _flaxBinding570,
    _flaxBinding571,
    _flaxBinding572,
    _flaxBinding573,
    _flaxBinding574,
    _flaxBinding575,
    _flaxBinding576,
    _flaxBinding577,
    _flaxBinding578,
    _flaxBinding579,
    _flaxBinding580,
    _flaxBinding581,
    _flaxBinding582,
    _flaxBinding583,
    _flaxBinding584,
    _flaxBinding585,
    _flaxBinding586,
    _flaxBinding587,
    _flaxBinding589,
    _flaxBinding590,
    _flaxBinding591,
    _flaxBinding592,
    _flaxBinding593,
    _flaxBinding594,
  ],
  {
    "toStringShort": _flaxBinding595,
    "toString": _flaxBinding596,
    "toDiagnosticsNode": _flaxBinding597,
    "debugFillProperties": _flaxBinding598,
    "extension": FlaxInstanceMethod(
      _flaxBinding68,
      FlaxTypeRef("any", nullable: true),
      _ThemeData_extension,
      genericFactory: _flaxGeneric_ThemeData_extension,
      ownerTypes: [],
    ),
    "copyWith": _flaxBinding602,
  },
  constructors: {
    "": _flaxBinding603,
    "from": _flaxBinding604,
    "light": _flaxBinding605,
    "dark": _flaxBinding605,
    "fallback": _flaxBinding605,
  },
  create: _createThemeData,
  matches: _isThemeData,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding607 = FlaxGetter(
  "horizontal",
  _flaxBinding52,
  _VisualDensity_horizontal,
);
const _flaxBinding608 = FlaxGetter(
  "vertical",
  _flaxBinding52,
  _VisualDensity_vertical,
);
const _flaxBinding609 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Offset",
);
const _flaxBinding610 = FlaxGetter(
  "baseSizeAdjustment",
  _flaxBinding609,
  _VisualDensity_baseSizeAdjustment,
);
const _flaxBinding611 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding67,
  _VisualDensity_toStringShort,
);
const _flaxBinding612 = FlaxInstanceMethod(
  _flaxBinding71,
  _flaxBinding67,
  _VisualDensity_toString,
);
const _flaxBinding613 = FlaxInstanceMethod(
  _flaxBinding74,
  _flaxBinding75,
  _VisualDensity_toDiagnosticsNode,
);
const _flaxBinding614 = FlaxInstanceMethod(
  _flaxBinding79,
  _flaxBinding78,
  _VisualDensity_debugFillProperties,
);
const _flaxBinding615 = <FlaxParameter>[
  FlaxParameter("horizontal", _flaxBinding11, required: false),
  FlaxParameter("vertical", _flaxBinding11, required: false),
];
const _flaxBinding616 = FlaxInstanceMethod(
  _flaxBinding615,
  _flaxBinding569,
  _VisualDensity_copyWith,
);
const _flaxBinding617 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BoxConstraints",
);
const _flaxBinding618 = <FlaxParameter>[
  FlaxParameter("constraints", _flaxBinding617, required: true),
];
const _flaxBinding619 = FlaxInstanceMethod(
  _flaxBinding618,
  _flaxBinding617,
  _VisualDensity_effectiveConstraints,
);
const _flaxBinding620 = <FlaxParameter>[
  FlaxParameter(
    "horizontal",
    _flaxBinding52,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("vertical", _flaxBinding52, required: false, defaultValue: 0.0),
];
const _flaxBinding621 = FlaxObjectBinding(
  "flax.material/material#type:VisualDensity",
  [_flaxBinding607, _flaxBinding608, _flaxBinding610],
  {
    "toStringShort": _flaxBinding611,
    "toString": _flaxBinding612,
    "toDiagnosticsNode": _flaxBinding613,
    "debugFillProperties": _flaxBinding614,
    "copyWith": _flaxBinding616,
    "effectiveConstraints": _flaxBinding619,
  },
  constructors: {"": _flaxBinding620},
  create: _createVisualDensity,
  matches: _isVisualDensity,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding622 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Offset",
  nullable: true,
);
const _flaxBinding623 = FlaxTypeRef(
  "future",
  item: _flaxBinding243,
  future: FlaxFutureBinding("any?:", _future0Adapt),
);
const _flaxBinding624 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_painting#type:ImageProvider",
  dartType: FlaxDartTypes.typeOf<api2.ImageProvider<Object>>,
);
const _flaxBinding625 = FlaxTypeRef(
  "future",
  item: _flaxBinding229,
  future: FlaxFutureBinding(
    "object:flax.material/material#type:ColorScheme",
    _future4Adapt,
  ),
);
const _flaxBinding626 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BorderSide",
);
const _flaxBinding627 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:HeroController",
);
const _flaxBinding628 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:SpellCheckConfiguration",
);
const _flaxBinding629 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextStyle",
);
