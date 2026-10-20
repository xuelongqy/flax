// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:flutter/semantics.dart' as api;
import 'package:flax/bindings.dart';

import 'dart:ui' as api1;

import 'package:flutter/foundation.dart' as api2;
import 'package:flutter/cupertino.dart' as api3;

import 'dart:core' as api4;

import 'package:vector_math/vector_math_64.dart' as api5;
import 'package:flutter/services.dart' as api6;

// ignore: unused_element
const _flaxOmitted = Object();
const sdk_semanticsBindings = FlaxBindingModule(
  'sdk_semantics',
  [
    FlaxEnumBinding(
      "flax.core/sdk_semantics#type:AccessibilityFocusBlockType",
      {
        "none": api.AccessibilityFocusBlockType.none,
        "blockSubtree": api.AccessibilityFocusBlockType.blockSubtree,
        "blockNode": api.AccessibilityFocusBlockType.blockNode,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_semantics#type:Assertiveness",
      {
        "polite": api.Assertiveness.polite,
        "assertive": api.Assertiveness.assertive,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_semantics#type:DebugSemanticsDumpOrder",
      {
        "inverseHitTest": api.DebugSemanticsDumpOrder.inverseHitTest,
        "traversalOrder": api.DebugSemanticsDumpOrder.traversalOrder,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    _flaxBinding219,
    _flaxBinding228,
    _flaxBinding301,
    _flaxBinding307,
    _flaxBinding314,
    _flaxBinding324,
    _flaxBinding325,
    _flaxBinding326,
    _flaxBinding355,
    _flaxBinding427,
    _flaxBinding885,
    _flaxBinding943,
    _flaxBinding207,
    _flaxBinding945,
    _flaxBinding967,
    _flaxBinding977,
    _flaxBinding1106,
    _flaxBinding1133,
    _flaxBinding1259,
    _flaxBinding1260,
    _flaxBinding349,
    _flaxBinding1265,
    _flaxBinding1266,
    _flaxBinding1269,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#read:debugSemanticsDisableAnimations",
      [],
      flaxNullableBoolType,
      _read_debugSemanticsDisableAnimations,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:debugResetSemanticsIdCounter",
      [],
      flaxVoidType,
      _function_debugResetSemanticsIdCounter,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:CustomSemanticsAction.getIdentifier",
      [FlaxParameter.required("action", _flaxBinding81)],
      flaxIntType,
      _CustomSemanticsAction_getIdentifier,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:CustomSemanticsAction.getAction",
      [FlaxParameter.required("id", flaxIntType)],
      _flaxBinding1270,
      _CustomSemanticsAction_getAction,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#read:SemanticsBinding.instance",
      [],
      _flaxBinding1271,
      _SemanticsBinding_static_get_instance,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:SemanticsService.announce",
      [
        FlaxParameter.required("message", flaxStringType),
        FlaxParameter.required("textDirection", _flaxBinding2),
        FlaxParameter(
          "assertiveness",
          _flaxBinding4,
          required: false,
          defaultValue: api.Assertiveness.polite,
        ),
      ],
      _flaxBinding370,
      _SemanticsService_announce,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:SemanticsService.sendAnnouncement",
      [
        FlaxParameter.required("view", _flaxBinding1272),
        FlaxParameter.required("message", flaxStringType),
        FlaxParameter.required("textDirection", _flaxBinding2),
        FlaxParameter(
          "assertiveness",
          _flaxBinding4,
          required: false,
          defaultValue: api.Assertiveness.polite,
        ),
      ],
      _flaxBinding370,
      _SemanticsService_sendAnnouncement,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:SemanticsService.tooltip",
      [FlaxParameter.required("message", flaxStringType)],
      _flaxBinding370,
      _SemanticsService_tooltip,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:debugSemanticsDisableAnimations%3D",
      [FlaxParameter.required("value", flaxNullableBoolType)],
      flaxVoidType,
      _write_debugSemanticsDisableAnimations,
    ),
  ],
  constants: [],
  moduleId: "flax.core/sdk_semantics",
  dependencyModules: [
    "flax.core/flutter",
    "flax.core/sdk_dart_ui",
    "flax.core/sdk_foundation",
    "flax.core/sdk_rendering",
  ],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "lazy-js-iterables",
    "native-core-inputs",
    "native-navigation-objects",
    "native-widget-proxies",
    "proxy-super-constructors",
    "shared-static-readers",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:AccessibilityFocusBlockType",
      api.AccessibilityFocusBlockType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:AnnounceSemanticsEvent",
      api.AnnounceSemanticsEvent,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:Assertiveness",
      api.Assertiveness,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:AttributedString",
      api.AttributedString,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:AttributedStringProperty",
      api.AttributedStringProperty,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult",
      api.ChildSemanticsConfigurationsResult,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder",
      api.ChildSemanticsConfigurationsResultBuilder,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:CustomSemanticsAction",
      api.CustomSemanticsAction,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:DebugSemanticsDumpOrder",
      api.DebugSemanticsDumpOrder,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:FocusSemanticEvent",
      api.FocusSemanticEvent,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:LongPressSemanticsEvent",
      api.LongPressSemanticsEvent,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:OrdinalSortKey",
      api.OrdinalSortKey,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsBinding",
      api.SemanticsBinding,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsConfiguration",
      api.SemanticsConfiguration,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsData",
      api.SemanticsData,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsEvent",
      api.SemanticsEvent,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsHandle",
      api.SemanticsHandle,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsHintOverrides",
      api.SemanticsHintOverrides,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsLabelBuilder",
      api.SemanticsLabelBuilder,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsNode",
      api.SemanticsNode,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsOwner",
      api.SemanticsOwner,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsProperties",
      api.SemanticsProperties,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsService",
      api.SemanticsService,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsSortKey",
      api.SemanticsSortKey,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:SemanticsTag",
      api.SemanticsTag,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:TapSemanticEvent",
      api.TapSemanticEvent,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_semantics#type:TooltipSemanticsEvent",
      api.TooltipSemanticsEvent,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
Object? _function_debugResetSemanticsIdCounter(Map<String, Object?> values) {
  api.debugResetSemanticsIdCounter();
  return null;
}

Object? _read_debugSemanticsDisableAnimations(Map<String, Object?> values) =>
    api.debugSemanticsDisableAnimations;
Object? _write_debugSemanticsDisableAnimations(Map<String, Object?> values) {
  api.debugSemanticsDisableAnimations = values["value"] as bool?;
  return null;
}

bool _isAnnounceSemanticsEvent(Object value) =>
    value is api.AnnounceSemanticsEvent;
Object? _AnnounceSemanticsEvent_viewId(Object value) =>
    (value as api.AnnounceSemanticsEvent).viewId;
Object? _AnnounceSemanticsEvent_message(Object value) =>
    (value as api.AnnounceSemanticsEvent).message;
Object? _AnnounceSemanticsEvent_textDirection(Object value) =>
    (value as api.AnnounceSemanticsEvent).textDirection;
Object? _AnnounceSemanticsEvent_assertiveness(Object value) =>
    (value as api.AnnounceSemanticsEvent).assertiveness;
Object? _FlaxProxyDispatch0_super_call_toMap(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch0)._flaxSuper_toMap(
    nodeId: values["nodeId"] as int?,
  );
}

Object? _FlaxProxyDispatch1_super_call_getDataMap(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch1)._flaxSuper_getDataMap();
}

Object? _FlaxProxyDispatch2_super_call_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch2)._flaxSuper_toString();
}

Object? _AnnounceSemanticsEvent_super_get_viewId(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnnounceSemanticsEventProxy)._flaxSuperGet_viewId;
Object? _AnnounceSemanticsEvent_super_get_message(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnnounceSemanticsEventProxy)._flaxSuperGet_message;
Object? _AnnounceSemanticsEvent_super_get_textDirection(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnnounceSemanticsEventProxy)._flaxSuperGet_textDirection;
Object? _AnnounceSemanticsEvent_super_get_assertiveness(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnnounceSemanticsEventProxy)._flaxSuperGet_assertiveness;
Object? _FlaxProxyDispatch0_super_get_type(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch0)._flaxSuperGet_type;
Object _createAnnounceSemanticsEvent(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AnnounceSemanticsEvent(
        values["message"] as String,
        values["textDirection"] as api1.TextDirection,
        values["viewId"] as int,
        assertiveness: values["assertiveness"] as api.Assertiveness,
      );
    case '@implementation':
      return _AnnounceSemanticsEventProxy(
        values['@peer'] as FlaxProxyPeer,
        values["message"] as String,
        values["textDirection"] as api1.TextDirection,
        values["viewId"] as int,
        assertiveness: values["assertiveness"] as api.Assertiveness,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAttributedString(Object value) => value is api.AttributedString;
Object? _AttributedString_string(Object value) =>
    (value as api.AttributedString).string;
Object? _AttributedString_attributes(Object value) =>
    (value as api.AttributedString).attributes;
Object? _AttributedString_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedString).toString();
}

Object? _AttributedString_operatorAdd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedString) +
      (values["other"] as api.AttributedString);
}

Object? _AttributedString_super_operatorAdd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AttributedStringProxy)._flaxSuper_operatorAdd(
    values["other"] as api.AttributedString,
  );
}

Object? _AttributedString_super_get_string(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringProxy)._flaxSuperGet_string;
Object? _AttributedString_super_get_attributes(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringProxy)._flaxSuperGet_attributes;
Object _createAttributedString(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("attributes")) {
        return api.AttributedString(values["string"] as String);
      }
      return api.AttributedString(
        values["string"] as String,
        attributes: values["attributes"] as List<api1.StringAttribute>,
      );
    case '@implementation':
      if (!values.containsKey("attributes")) {
        return _AttributedStringProxy(
          values['@peer'] as FlaxProxyPeer,
          values["string"] as String,
        );
      }
      return _AttributedStringProxy(
        values['@peer'] as FlaxProxyPeer,
        values["string"] as String,
        attributes: values["attributes"] as List<api1.StringAttribute>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAttributedStringProperty(Object value) =>
    value is api.AttributedStringProperty;
Object? _AttributedStringProperty_expandableValue(Object value) =>
    (value as api.AttributedStringProperty).expandableValue;
Object? _AttributedStringProperty_allowWrap(Object value) =>
    (value as api.AttributedStringProperty).allowWrap;
Object? _AttributedStringProperty_allowNameWrap(Object value) =>
    (value as api.AttributedStringProperty).allowNameWrap;
Object? _AttributedStringProperty_ifNull(Object value) =>
    (value as api.AttributedStringProperty).ifNull;
Object? _AttributedStringProperty_ifEmpty(Object value) =>
    (value as api.AttributedStringProperty).ifEmpty;
Object? _AttributedStringProperty_tooltip(Object value) =>
    (value as api.AttributedStringProperty).tooltip;
Object? _AttributedStringProperty_missingIfNull(Object value) =>
    (value as api.AttributedStringProperty).missingIfNull;
Object? _AttributedStringProperty_propertyType(Object value) =>
    (value as api.AttributedStringProperty).propertyType;
Object? _AttributedStringProperty_value(Object value) =>
    (value as api.AttributedStringProperty).value;
Object? _AttributedStringProperty_exception(Object value) =>
    (value as api.AttributedStringProperty).exception;
Object? _AttributedStringProperty_defaultValue(Object value) =>
    (value as api.AttributedStringProperty).defaultValue;
Object? _AttributedStringProperty_isInteresting(Object value) =>
    (value as api.AttributedStringProperty).isInteresting;
Object? _AttributedStringProperty_level(Object value) =>
    (value as api.AttributedStringProperty).level;
Object? _AttributedStringProperty_name(Object value) =>
    (value as api.AttributedStringProperty).name;
Object? _AttributedStringProperty_showSeparator(Object value) =>
    (value as api.AttributedStringProperty).showSeparator;
Object? _AttributedStringProperty_showName(Object value) =>
    (value as api.AttributedStringProperty).showName;
Object? _AttributedStringProperty_linePrefix(Object value) =>
    (value as api.AttributedStringProperty).linePrefix;
Object? _AttributedStringProperty_emptyBodyDescription(Object value) =>
    (value as api.AttributedStringProperty).emptyBodyDescription;
Object? _AttributedStringProperty_style(Object value) =>
    (value as api.AttributedStringProperty).style;
Object? _AttributedStringProperty_allowTruncate(Object value) =>
    (value as api.AttributedStringProperty).allowTruncate;
Object? _AttributedStringProperty_textTreeConfiguration(Object value) =>
    (value as api.AttributedStringProperty).textTreeConfiguration;
Object? _AttributedStringProperty_showWhenEmpty(Object value) =>
    (value as api.AttributedStringProperty).showWhenEmpty;
Object? _AttributedStringProperty_toJsonMap(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedStringProperty).toJsonMap(
    values["delegate"] as api2.DiagnosticsSerializationDelegate,
  );
}

Object? _AttributedStringProperty_valueToString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedStringProperty).valueToString(
    parentConfiguration:
        values["parentConfiguration"] as api2.TextTreeConfiguration?,
  );
}

Object? _AttributedStringProperty_toDescription(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedStringProperty).toDescription(
    parentConfiguration:
        values["parentConfiguration"] as api2.TextTreeConfiguration?,
  );
}

Object? _AttributedStringProperty_getProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedStringProperty).getProperties();
}

Object? _AttributedStringProperty_getChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedStringProperty).getChildren();
}

Object? _AttributedStringProperty_isFiltered(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedStringProperty).isFiltered(
    values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _AttributedStringProperty_toTimelineArguments(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedStringProperty).toTimelineArguments();
}

Object? _AttributedStringProperty_toJsonMapIterative(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedStringProperty).toJsonMapIterative(
    values["delegate"] as api2.DiagnosticsSerializationDelegate,
  );
}

Object? _AttributedStringProperty_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedStringProperty).toStringDeep(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    parentConfiguration:
        values["parentConfiguration"] as api2.TextTreeConfiguration?,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _AttributedStringProperty_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AttributedStringProperty).toString(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    parentConfiguration:
        values["parentConfiguration"] as api2.TextTreeConfiguration?,
  );
}

Object? _AttributedStringProperty_super_toJsonMap(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AttributedStringPropertyProxy)._flaxSuper_toJsonMap(
    values["delegate"] as api2.DiagnosticsSerializationDelegate,
  );
}

Object? _AttributedStringProperty_super_valueToString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AttributedStringPropertyProxy)._flaxSuper_valueToString(
    parentConfiguration:
        values["parentConfiguration"] as api2.TextTreeConfiguration?,
  );
}

Object? _AttributedStringProperty_super_toDescription(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AttributedStringPropertyProxy)._flaxSuper_toDescription(
    parentConfiguration:
        values["parentConfiguration"] as api2.TextTreeConfiguration?,
  );
}

Object? _AttributedStringProperty_super_getProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AttributedStringPropertyProxy)
      ._flaxSuper_getProperties();
}

Object? _AttributedStringProperty_super_getChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AttributedStringPropertyProxy)._flaxSuper_getChildren();
}

Object? _AttributedStringProperty_super_isFiltered(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AttributedStringPropertyProxy)._flaxSuper_isFiltered(
    values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _AttributedStringProperty_super_toTimelineArguments(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AttributedStringPropertyProxy)
      ._flaxSuper_toTimelineArguments();
}

Object? _AttributedStringProperty_super_toJsonMapIterative(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AttributedStringPropertyProxy)
      ._flaxSuper_toJsonMapIterative(
        values["delegate"] as api2.DiagnosticsSerializationDelegate,
      );
}

Object? _AttributedStringProperty_super_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AttributedStringPropertyProxy)._flaxSuper_toStringDeep(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    parentConfiguration:
        values["parentConfiguration"] as api2.TextTreeConfiguration?,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _AttributedStringProperty_super_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AttributedStringPropertyProxy)._flaxSuper_toString(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    parentConfiguration:
        values["parentConfiguration"] as api2.TextTreeConfiguration?,
  );
}

Object? _AttributedStringProperty_super_get_showWhenEmpty(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_showWhenEmpty;
Object? _AttributedStringProperty_super_get_isInteresting(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_isInteresting;
Object? _AttributedStringProperty_super_get_expandableValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_expandableValue;
Object? _AttributedStringProperty_super_get_allowWrap(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_allowWrap;
Object? _AttributedStringProperty_super_get_allowNameWrap(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_allowNameWrap;
Object? _AttributedStringProperty_super_get_ifNull(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_ifNull;
Object? _AttributedStringProperty_super_get_ifEmpty(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_ifEmpty;
Object? _AttributedStringProperty_super_get_tooltip(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_tooltip;
Object? _AttributedStringProperty_super_get_missingIfNull(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_missingIfNull;
Object? _AttributedStringProperty_super_get_propertyType(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_propertyType;
Object? _AttributedStringProperty_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_value;
Object? _AttributedStringProperty_super_get_exception(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_exception;
Object? _AttributedStringProperty_super_get_defaultValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_defaultValue;
Object? _AttributedStringProperty_super_get_level(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_level;
Object? _FlaxProxyDispatch5_super_get_name(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch5)._flaxSuperGet_name;
Object? _AttributedStringProperty_super_get_showSeparator(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_showSeparator;
Object? _AttributedStringProperty_super_get_showName(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_showName;
Object? _AttributedStringProperty_super_get_linePrefix(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_linePrefix;
Object? _AttributedStringProperty_super_get_emptyBodyDescription(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)
    ._flaxSuperGet_emptyBodyDescription;
Object? _AttributedStringProperty_super_get_style(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_style;
Object? _AttributedStringProperty_super_get_allowTruncate(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)._flaxSuperGet_allowTruncate;
Object? _AttributedStringProperty_super_get_textTreeConfiguration(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AttributedStringPropertyProxy)
    ._flaxSuperGet_textTreeConfiguration;
Object _createAttributedStringProperty(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      if (!values.containsKey("defaultValue")) {
        return api.AttributedStringProperty(
          values["name"] as String,
          values["value"] as api.AttributedString?,
          showName: values["showName"] as bool,
          showWhenEmpty: values["showWhenEmpty"] as bool,
          level: values["level"] as api2.DiagnosticLevel,
          description: values["description"] as String?,
        );
      }
      return api.AttributedStringProperty(
        values["name"] as String,
        values["value"] as api.AttributedString?,
        showName: values["showName"] as bool,
        showWhenEmpty: values["showWhenEmpty"] as bool,
        defaultValue: values["defaultValue"],
        level: values["level"] as api2.DiagnosticLevel,
        description: values["description"] as String?,
      );
    case '@implementation':
      if (!values.containsKey("defaultValue")) {
        return _AttributedStringPropertyProxy(
          values['@peer'] as FlaxProxyPeer,
          values["name"] as String,
          values["value"] as api.AttributedString?,
          showName: values["showName"] as bool,
          showWhenEmpty: values["showWhenEmpty"] as bool,
          level: values["level"] as api2.DiagnosticLevel,
          description: values["description"] as String?,
        );
      }
      return _AttributedStringPropertyProxy(
        values['@peer'] as FlaxProxyPeer,
        values["name"] as String,
        values["value"] as api.AttributedString?,
        showName: values["showName"] as bool,
        showWhenEmpty: values["showWhenEmpty"] as bool,
        defaultValue: values["defaultValue"],
        level: values["level"] as api2.DiagnosticLevel,
        description: values["description"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isChildSemanticsConfigurationsResult(Object value) =>
    value is api.ChildSemanticsConfigurationsResult;
Object? _ChildSemanticsConfigurationsResult_mergeUp(Object value) =>
    (value as api.ChildSemanticsConfigurationsResult).mergeUp;
Object? _ChildSemanticsConfigurationsResult_siblingMergeGroups(Object value) =>
    (value as api.ChildSemanticsConfigurationsResult).siblingMergeGroups;
Object _createChildSemanticsConfigurationsResult(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case '@implementation':
      return _ChildSemanticsConfigurationsResultProxy(
        values['@peer'] as FlaxProxyPeer,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isChildSemanticsConfigurationsResultBuilder(Object value) =>
    value is api.ChildSemanticsConfigurationsResultBuilder;
Object? _ChildSemanticsConfigurationsResultBuilder_markAsMergeUp(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ChildSemanticsConfigurationsResultBuilder).markAsMergeUp(
    values["config"] as api.SemanticsConfiguration,
  );
  return null;
}

Object? _ChildSemanticsConfigurationsResultBuilder_markAsSiblingMergeGroup(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ChildSemanticsConfigurationsResultBuilder)
      .markAsSiblingMergeGroup(
        values["configs"] as List<api.SemanticsConfiguration>,
      );
  return null;
}

Object? _ChildSemanticsConfigurationsResultBuilder_build(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ChildSemanticsConfigurationsResultBuilder).build();
}

Object? _ChildSemanticsConfigurationsResultBuilder_super_markAsMergeUp(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ChildSemanticsConfigurationsResultBuilderProxy)
      ._flaxSuper_markAsMergeUp(values["config"] as api.SemanticsConfiguration);
  return null;
}

Object?
_ChildSemanticsConfigurationsResultBuilder_super_markAsSiblingMergeGroup(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ChildSemanticsConfigurationsResultBuilderProxy)
      ._flaxSuper_markAsSiblingMergeGroup(
        values["configs"] as List<api.SemanticsConfiguration>,
      );
  return null;
}

Object? _ChildSemanticsConfigurationsResultBuilder_super_build(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ChildSemanticsConfigurationsResultBuilderProxy)
      ._flaxSuper_build();
}

Object _createChildSemanticsConfigurationsResultBuilder(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.ChildSemanticsConfigurationsResultBuilder();
    case '@implementation':
      return _ChildSemanticsConfigurationsResultBuilderProxy(
        values['@peer'] as FlaxProxyPeer,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCustomSemanticsAction(Object value) =>
    value is api.CustomSemanticsAction;
Object? _CustomSemanticsAction_label(Object value) =>
    (value as api.CustomSemanticsAction).label;
Object? _CustomSemanticsAction_hint(Object value) =>
    (value as api.CustomSemanticsAction).hint;
Object? _CustomSemanticsAction_action(Object value) =>
    (value as api.CustomSemanticsAction).action;
Object? _CustomSemanticsAction_getIdentifier(Map<String, Object?> values) {
  return api.CustomSemanticsAction.getIdentifier(
    values["action"] as api.CustomSemanticsAction,
  );
}

Object? _CustomSemanticsAction_getAction(Map<String, Object?> values) {
  return api.CustomSemanticsAction.getAction(values["id"] as int);
}

Object? _CustomSemanticsAction_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CustomSemanticsAction).toString();
}

Object? _CustomSemanticsAction_super_get_label(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CustomSemanticsActionProxy)._flaxSuperGet_label;
Object? _CustomSemanticsAction_super_get_hint(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CustomSemanticsActionProxy)._flaxSuperGet_hint;
Object? _CustomSemanticsAction_super_get_action(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CustomSemanticsActionProxy)._flaxSuperGet_action;
Object _createCustomSemanticsAction(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.CustomSemanticsAction(label: values["label"] as String);
    case "overridingAction":
      return api.CustomSemanticsAction.overridingAction(
        hint: values["hint"] as String,
        action: values["action"] as api1.SemanticsAction,
      );
    case '@implementation':
      return _CustomSemanticsActionProxy(
        values['@peer'] as FlaxProxyPeer,
        label: values["label"] as String,
      );
    case "@implementation:overridingAction":
      return _CustomSemanticsActionProxy.overridingAction(
        values['@peer'] as FlaxProxyPeer,
        hint: values["hint"] as String,
        action: values["action"] as api1.SemanticsAction,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFocusSemanticEvent(Object value) => value is api.FocusSemanticEvent;
Object _createFocusSemanticEvent(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FocusSemanticEvent();
    case '@implementation':
      return _FocusSemanticEventProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isLongPressSemanticsEvent(Object value) =>
    value is api.LongPressSemanticsEvent;
Object _createLongPressSemanticsEvent(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.LongPressSemanticsEvent();
    case '@implementation':
      return _LongPressSemanticsEventProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isOrdinalSortKey(Object value) => value is api.OrdinalSortKey;
Object? _OrdinalSortKey_order(Object value) =>
    (value as api.OrdinalSortKey).order;
Object? _OrdinalSortKey_doCompare(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.OrdinalSortKey).doCompare(
    values["other"] as api.OrdinalSortKey,
  );
}

Object? _OrdinalSortKey_super_compareTo(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _OrdinalSortKeyProxy)._flaxSuper_compareTo(
    values["other"] as api.SemanticsSortKey,
  );
}

Object? _OrdinalSortKey_super_doCompare(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _OrdinalSortKeyProxy)._flaxSuper_doCompare(
    values["other"] as api.OrdinalSortKey,
  );
}

Object? _FlaxProxyDispatch8_super_call_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _FlaxProxyDispatch8)._flaxSuper_debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _FlaxProxyDispatch9_super_call_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch9)._flaxSuper_toStringShort();
}

Object? _FlaxProxyDispatch8_super_call_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch8)._flaxSuper_toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _FlaxProxyDispatch9_super_call_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch9)._flaxSuper_toString(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _OrdinalSortKey_super_get_order(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _OrdinalSortKeyProxy)._flaxSuperGet_order;
Object _createOrdinalSortKey(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.OrdinalSortKey(
        values["order"] as double,
        name: values["name"] as String?,
      );
    case '@implementation':
      return _OrdinalSortKeyProxy(
        values['@peer'] as FlaxProxyPeer,
        values["order"] as double,
        name: values["name"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsBinding(Object value) => value is api.SemanticsBinding;
Object? _SemanticsBinding_window(Object value) =>
    (value as api.SemanticsBinding).window;
Object? _SemanticsBinding_platformDispatcher(Object value) =>
    (value as api.SemanticsBinding).platformDispatcher;
Object? _SemanticsBinding_locked(Object value) =>
    (value as api.SemanticsBinding).locked;
Object? _SemanticsBinding_semanticsEnabled(Object value) =>
    (value as api.SemanticsBinding).semanticsEnabled;
Object? _SemanticsBinding_debugOutstandingSemanticsHandles(Object value) =>
    (value as api.SemanticsBinding).debugOutstandingSemanticsHandles;
Object? _SemanticsBinding_accessibilityFeatures(Object value) =>
    (value as api.SemanticsBinding).accessibilityFeatures;
Object? _SemanticsBinding_disableAnimations(Object value) =>
    (value as api.SemanticsBinding).disableAnimations;
Object? _SemanticsBinding_static_get_instance(Map<String, Object?> values) =>
    api.SemanticsBinding.instance;
Object? _SemanticsBinding_initInstances(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).initInstances();
  return null;
}

Object? _SemanticsBinding_debugCheckZone(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsBinding).debugCheckZone(
    values["entryPoint"] as String,
  );
}

Object? _SemanticsBinding_initServiceExtensions(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).initServiceExtensions();
  return null;
}

Object? _SemanticsBinding_lockEvents(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsBinding).lockEvents(
    values["callback"] as Future<void> Function(),
  );
}

Object? _SemanticsBinding_unlocked(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).unlocked();
  return null;
}

Object? _SemanticsBinding_reassembleApplication(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsBinding).reassembleApplication();
}

Object? _SemanticsBinding_performReassemble(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsBinding).performReassemble();
}

Object? _SemanticsBinding_registerSignalServiceExtension(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).registerSignalServiceExtension(
    callback: values["callback"] as Future<void> Function(),
    name: values["name"] as String,
  );
  return null;
}

Object? _SemanticsBinding_registerBoolServiceExtension(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).registerBoolServiceExtension(
    getter: values["getter"] as Future<bool> Function(),
    name: values["name"] as String,
    setter: values["setter"] as Future<void> Function(bool value),
  );
  return null;
}

Object? _SemanticsBinding_registerNumericServiceExtension(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).registerNumericServiceExtension(
    getter: values["getter"] as Future<double> Function(),
    name: values["name"] as String,
    setter: values["setter"] as Future<void> Function(double value),
  );
  return null;
}

Object? _SemanticsBinding_postEvent(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).postEvent(
    values["eventKind"] as String,
    values["eventData"] as Map<String, Object?>,
  );
  return null;
}

Object? _SemanticsBinding_registerStringServiceExtension(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).registerStringServiceExtension(
    getter: values["getter"] as Future<String> Function(),
    name: values["name"] as String,
    setter: values["setter"] as Future<void> Function(String value),
  );
  return null;
}

Object? _SemanticsBinding_registerServiceExtension(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).registerServiceExtension(
    callback:
        values["callback"]
            as Future<Map<String, Object?>> Function(
              Map<String, String> parameters,
            ),
    name: values["name"] as String,
  );
  return null;
}

Object? _SemanticsBinding_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsBinding).toString();
}

Object? _SemanticsBinding_addSemanticsEnabledListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).addSemanticsEnabledListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _SemanticsBinding_removeSemanticsEnabledListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).removeSemanticsEnabledListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _SemanticsBinding_addSemanticsActionListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).addSemanticsActionListener(
    values["listener"] as void Function(api1.SemanticsActionEvent value),
  );
  return null;
}

Object? _SemanticsBinding_removeSemanticsActionListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).removeSemanticsActionListener(
    values["listener"] as void Function(api1.SemanticsActionEvent value),
  );
  return null;
}

Object? _SemanticsBinding_getRectOfSemanticsNodeInViewCoordinates(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsBinding)
      .getRectOfSemanticsNodeInViewCoordinates(
        values["viewId"] as int,
        values["nodeId"] as int,
      );
}

Object? _SemanticsBinding_ensureSemantics(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsBinding).ensureSemantics();
}

Object? _SemanticsBinding_performSemanticsAction(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).performSemanticsAction(
    values["action"] as api1.SemanticsActionEvent,
  );
  return null;
}

Object? _SemanticsBinding_handleAccessibilityFeaturesChanged(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsBinding).handleAccessibilityFeaturesChanged();
  return null;
}

Object? _SemanticsBinding_createSemanticsUpdateBuilder(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsBinding).createSemanticsUpdateBuilder();
}

Object _createSemanticsBinding(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isSemanticsConfiguration(Object value) =>
    value is api.SemanticsConfiguration;
Object? _SemanticsConfiguration_isSemanticBoundary(Object value) =>
    (value as api.SemanticsConfiguration).isSemanticBoundary;
Object? _SemanticsConfiguration_localeForSubtree(Object value) =>
    (value as api.SemanticsConfiguration).localeForSubtree;
Object? _SemanticsConfiguration_locale(Object value) =>
    (value as api.SemanticsConfiguration).locale;
Object? _SemanticsConfiguration_isBlockingUserActions(Object value) =>
    (value as api.SemanticsConfiguration).isBlockingUserActions;
Object? _SemanticsConfiguration_explicitChildNodes(Object value) =>
    (value as api.SemanticsConfiguration).explicitChildNodes;
Object? _SemanticsConfiguration_isBlockingSemanticsOfPreviouslyPaintedNodes(
  Object value,
) => (value as api.SemanticsConfiguration)
    .isBlockingSemanticsOfPreviouslyPaintedNodes;
Object? _SemanticsConfiguration_hasBeenAnnotated(Object value) =>
    (value as api.SemanticsConfiguration).hasBeenAnnotated;
Object? _SemanticsConfiguration_onTap(Object value) =>
    (value as api.SemanticsConfiguration).onTap;
Object? _SemanticsConfiguration_onLongPress(Object value) =>
    (value as api.SemanticsConfiguration).onLongPress;
Object? _SemanticsConfiguration_onScrollLeft(Object value) =>
    (value as api.SemanticsConfiguration).onScrollLeft;
Object? _SemanticsConfiguration_onDismiss(Object value) =>
    (value as api.SemanticsConfiguration).onDismiss;
Object? _SemanticsConfiguration_onScrollRight(Object value) =>
    (value as api.SemanticsConfiguration).onScrollRight;
Object? _SemanticsConfiguration_onScrollUp(Object value) =>
    (value as api.SemanticsConfiguration).onScrollUp;
Object? _SemanticsConfiguration_onScrollDown(Object value) =>
    (value as api.SemanticsConfiguration).onScrollDown;
Object? _SemanticsConfiguration_onScrollToOffset(Object value) =>
    (value as api.SemanticsConfiguration).onScrollToOffset;
Object? _SemanticsConfiguration_onIncrease(Object value) =>
    (value as api.SemanticsConfiguration).onIncrease;
Object? _SemanticsConfiguration_onDecrease(Object value) =>
    (value as api.SemanticsConfiguration).onDecrease;
Object? _SemanticsConfiguration_onCopy(Object value) =>
    (value as api.SemanticsConfiguration).onCopy;
Object? _SemanticsConfiguration_onCut(Object value) =>
    (value as api.SemanticsConfiguration).onCut;
Object? _SemanticsConfiguration_onPaste(Object value) =>
    (value as api.SemanticsConfiguration).onPaste;
Object? _SemanticsConfiguration_onShowOnScreen(Object value) =>
    (value as api.SemanticsConfiguration).onShowOnScreen;
Object? _SemanticsConfiguration_onMoveCursorForwardByCharacter(Object value) =>
    (value as api.SemanticsConfiguration).onMoveCursorForwardByCharacter;
Object? _SemanticsConfiguration_onMoveCursorBackwardByCharacter(Object value) =>
    (value as api.SemanticsConfiguration).onMoveCursorBackwardByCharacter;
Object? _SemanticsConfiguration_onMoveCursorForwardByWord(Object value) =>
    (value as api.SemanticsConfiguration).onMoveCursorForwardByWord;
Object? _SemanticsConfiguration_onMoveCursorBackwardByWord(Object value) =>
    (value as api.SemanticsConfiguration).onMoveCursorBackwardByWord;
Object? _SemanticsConfiguration_onSetSelection(Object value) =>
    (value as api.SemanticsConfiguration).onSetSelection;
Object? _SemanticsConfiguration_onSetText(Object value) =>
    (value as api.SemanticsConfiguration).onSetText;
Object? _SemanticsConfiguration_onDidGainAccessibilityFocus(Object value) =>
    (value as api.SemanticsConfiguration).onDidGainAccessibilityFocus;
Object? _SemanticsConfiguration_onDidLoseAccessibilityFocus(Object value) =>
    (value as api.SemanticsConfiguration).onDidLoseAccessibilityFocus;
Object? _SemanticsConfiguration_onFocus(Object value) =>
    (value as api.SemanticsConfiguration).onFocus;
Object? _SemanticsConfiguration_onExpand(Object value) =>
    (value as api.SemanticsConfiguration).onExpand;
Object? _SemanticsConfiguration_onCollapse(Object value) =>
    (value as api.SemanticsConfiguration).onCollapse;
Object? _SemanticsConfiguration_childConfigurationsDelegate(Object value) =>
    (value as api.SemanticsConfiguration).childConfigurationsDelegate;
Object? _SemanticsConfiguration_sortKey(Object value) =>
    (value as api.SemanticsConfiguration).sortKey;
Object? _SemanticsConfiguration_indexInParent(Object value) =>
    (value as api.SemanticsConfiguration).indexInParent;
Object? _SemanticsConfiguration_scrollChildCount(Object value) =>
    (value as api.SemanticsConfiguration).scrollChildCount;
Object? _SemanticsConfiguration_scrollIndex(Object value) =>
    (value as api.SemanticsConfiguration).scrollIndex;
Object? _SemanticsConfiguration_platformViewId(Object value) =>
    (value as api.SemanticsConfiguration).platformViewId;
Object? _SemanticsConfiguration_maxValueLength(Object value) =>
    (value as api.SemanticsConfiguration).maxValueLength;
Object? _SemanticsConfiguration_currentValueLength(Object value) =>
    (value as api.SemanticsConfiguration).currentValueLength;
Object? _SemanticsConfiguration_isMergingSemanticsOfDescendants(Object value) =>
    (value as api.SemanticsConfiguration).isMergingSemanticsOfDescendants;
Object? _SemanticsConfiguration_customSemanticsActions(Object value) =>
    (value as api.SemanticsConfiguration).customSemanticsActions;
Object? _SemanticsConfiguration_identifier(Object value) =>
    (value as api.SemanticsConfiguration).identifier;
Object? _SemanticsConfiguration_traversalParentIdentifier(Object value) =>
    (value as api.SemanticsConfiguration).traversalParentIdentifier;
Object? _SemanticsConfiguration_traversalChildIdentifier(Object value) =>
    (value as api.SemanticsConfiguration).traversalChildIdentifier;
Object? _SemanticsConfiguration_role(Object value) =>
    (value as api.SemanticsConfiguration).role;
Object? _SemanticsConfiguration_label(Object value) =>
    (value as api.SemanticsConfiguration).label;
Object? _SemanticsConfiguration_attributedLabel(Object value) =>
    (value as api.SemanticsConfiguration).attributedLabel;
Object? _SemanticsConfiguration_value(Object value) =>
    (value as api.SemanticsConfiguration).value;
Object? _SemanticsConfiguration_attributedValue(Object value) =>
    (value as api.SemanticsConfiguration).attributedValue;
Object? _SemanticsConfiguration_increasedValue(Object value) =>
    (value as api.SemanticsConfiguration).increasedValue;
Object? _SemanticsConfiguration_attributedIncreasedValue(Object value) =>
    (value as api.SemanticsConfiguration).attributedIncreasedValue;
Object? _SemanticsConfiguration_decreasedValue(Object value) =>
    (value as api.SemanticsConfiguration).decreasedValue;
Object? _SemanticsConfiguration_attributedDecreasedValue(Object value) =>
    (value as api.SemanticsConfiguration).attributedDecreasedValue;
Object? _SemanticsConfiguration_hint(Object value) =>
    (value as api.SemanticsConfiguration).hint;
Object? _SemanticsConfiguration_attributedHint(Object value) =>
    (value as api.SemanticsConfiguration).attributedHint;
Object? _SemanticsConfiguration_tooltip(Object value) =>
    (value as api.SemanticsConfiguration).tooltip;
Object? _SemanticsConfiguration_hintOverrides(Object value) =>
    (value as api.SemanticsConfiguration).hintOverrides;
Object? _SemanticsConfiguration_scopesRoute(Object value) =>
    (value as api.SemanticsConfiguration).scopesRoute;
Object? _SemanticsConfiguration_namesRoute(Object value) =>
    (value as api.SemanticsConfiguration).namesRoute;
Object? _SemanticsConfiguration_isImage(Object value) =>
    (value as api.SemanticsConfiguration).isImage;
Object? _SemanticsConfiguration_liveRegion(Object value) =>
    (value as api.SemanticsConfiguration).liveRegion;
Object? _SemanticsConfiguration_textDirection(Object value) =>
    (value as api.SemanticsConfiguration).textDirection;
Object? _SemanticsConfiguration_isSelected(Object value) =>
    (value as api.SemanticsConfiguration).isSelected;
Object? _SemanticsConfiguration_isExpanded(Object value) =>
    (value as api.SemanticsConfiguration).isExpanded;
Object? _SemanticsConfiguration_isEnabled(Object value) =>
    (value as api.SemanticsConfiguration).isEnabled;
Object? _SemanticsConfiguration_isChecked(Object value) =>
    (value as api.SemanticsConfiguration).isChecked;
Object? _SemanticsConfiguration_isCheckStateMixed(Object value) =>
    (value as api.SemanticsConfiguration).isCheckStateMixed;
Object? _SemanticsConfiguration_isToggled(Object value) =>
    (value as api.SemanticsConfiguration).isToggled;
Object? _SemanticsConfiguration_isInMutuallyExclusiveGroup(Object value) =>
    (value as api.SemanticsConfiguration).isInMutuallyExclusiveGroup;
Object? _SemanticsConfiguration_isFocusable(Object value) =>
    (value as api.SemanticsConfiguration).isFocusable;
Object? _SemanticsConfiguration_isFocused(Object value) =>
    (value as api.SemanticsConfiguration).isFocused;
Object? _SemanticsConfiguration_accessibilityFocusBlockType(Object value) =>
    (value as api.SemanticsConfiguration).accessibilityFocusBlockType;
Object? _SemanticsConfiguration_isButton(Object value) =>
    (value as api.SemanticsConfiguration).isButton;
Object? _SemanticsConfiguration_isLink(Object value) =>
    (value as api.SemanticsConfiguration).isLink;
Object? _SemanticsConfiguration_linkUrl(Object value) =>
    (value as api.SemanticsConfiguration).linkUrl;
Object? _SemanticsConfiguration_isHeader(Object value) =>
    (value as api.SemanticsConfiguration).isHeader;
Object? _SemanticsConfiguration_headingLevel(Object value) =>
    (value as api.SemanticsConfiguration).headingLevel;
Object? _SemanticsConfiguration_isSlider(Object value) =>
    (value as api.SemanticsConfiguration).isSlider;
Object? _SemanticsConfiguration_isKeyboardKey(Object value) =>
    (value as api.SemanticsConfiguration).isKeyboardKey;
Object? _SemanticsConfiguration_isHidden(Object value) =>
    (value as api.SemanticsConfiguration).isHidden;
Object? _SemanticsConfiguration_isTextField(Object value) =>
    (value as api.SemanticsConfiguration).isTextField;
Object? _SemanticsConfiguration_isReadOnly(Object value) =>
    (value as api.SemanticsConfiguration).isReadOnly;
Object? _SemanticsConfiguration_isObscured(Object value) =>
    (value as api.SemanticsConfiguration).isObscured;
Object? _SemanticsConfiguration_isMultiline(Object value) =>
    (value as api.SemanticsConfiguration).isMultiline;
Object? _SemanticsConfiguration_isRequired(Object value) =>
    (value as api.SemanticsConfiguration).isRequired;
Object? _SemanticsConfiguration_hasImplicitScrolling(Object value) =>
    (value as api.SemanticsConfiguration).hasImplicitScrolling;
Object? _SemanticsConfiguration_textSelection(Object value) =>
    (value as api.SemanticsConfiguration).textSelection;
Object? _SemanticsConfiguration_scrollPosition(Object value) =>
    (value as api.SemanticsConfiguration).scrollPosition;
Object? _SemanticsConfiguration_scrollExtentMax(Object value) =>
    (value as api.SemanticsConfiguration).scrollExtentMax;
Object? _SemanticsConfiguration_scrollExtentMin(Object value) =>
    (value as api.SemanticsConfiguration).scrollExtentMin;
Object? _SemanticsConfiguration_controlsNodes(Object value) =>
    (value as api.SemanticsConfiguration).controlsNodes;
Object? _SemanticsConfiguration_validationResult(Object value) =>
    (value as api.SemanticsConfiguration).validationResult;
Object? _SemanticsConfiguration_hitTestBehavior(Object value) =>
    (value as api.SemanticsConfiguration).hitTestBehavior;
Object? _SemanticsConfiguration_inputType(Object value) =>
    (value as api.SemanticsConfiguration).inputType;
Object? _SemanticsConfiguration_maxValue(Object value) =>
    (value as api.SemanticsConfiguration).maxValue;
Object? _SemanticsConfiguration_minValue(Object value) =>
    (value as api.SemanticsConfiguration).minValue;
Object? _SemanticsConfiguration_tagsForChildren(Object value) =>
    (value as api.SemanticsConfiguration).tagsForChildren;
void _SemanticsConfiguration_set_isSemanticBoundary(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).isSemanticBoundary = value as bool;
}

void _SemanticsConfiguration_set_localeForSubtree(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).localeForSubtree =
      value as api1.Locale?;
}

void _SemanticsConfiguration_set_locale(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).locale = value as api1.Locale?;
}

void _SemanticsConfiguration_set_isBlockingUserActions(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).isBlockingUserActions =
      value as bool;
}

void _SemanticsConfiguration_set_explicitChildNodes(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).explicitChildNodes = value as bool;
}

void _SemanticsConfiguration_set_isBlockingSemanticsOfPreviouslyPaintedNodes(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration)
          .isBlockingSemanticsOfPreviouslyPaintedNodes =
      value as bool;
}

void _SemanticsConfiguration_set_onTap(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onTap = value as void Function()?;
}

void _SemanticsConfiguration_set_onLongPress(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onLongPress =
      value as void Function()?;
}

void _SemanticsConfiguration_set_onScrollLeft(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onScrollLeft =
      value as void Function()?;
}

void _SemanticsConfiguration_set_onDismiss(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onDismiss =
      value as void Function()?;
}

void _SemanticsConfiguration_set_onScrollRight(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onScrollRight =
      value as void Function()?;
}

void _SemanticsConfiguration_set_onScrollUp(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onScrollUp =
      value as void Function()?;
}

void _SemanticsConfiguration_set_onScrollDown(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onScrollDown =
      value as void Function()?;
}

void _SemanticsConfiguration_set_onScrollToOffset(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).onScrollToOffset =
      value as void Function(api1.Offset targetOffset)?;
}

void _SemanticsConfiguration_set_onIncrease(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onIncrease =
      value as void Function()?;
}

void _SemanticsConfiguration_set_onDecrease(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onDecrease =
      value as void Function()?;
}

void _SemanticsConfiguration_set_onCopy(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onCopy = value as void Function()?;
}

void _SemanticsConfiguration_set_onCut(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onCut = value as void Function()?;
}

void _SemanticsConfiguration_set_onPaste(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onPaste = value as void Function()?;
}

void _SemanticsConfiguration_set_onShowOnScreen(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).onShowOnScreen =
      value as void Function()?;
}

void _SemanticsConfiguration_set_onMoveCursorForwardByCharacter(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).onMoveCursorForwardByCharacter =
      value as void Function(bool extendSelection)?;
}

void _SemanticsConfiguration_set_onMoveCursorBackwardByCharacter(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).onMoveCursorBackwardByCharacter =
      value as void Function(bool extendSelection)?;
}

void _SemanticsConfiguration_set_onMoveCursorForwardByWord(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).onMoveCursorForwardByWord =
      value as void Function(bool extendSelection)?;
}

void _SemanticsConfiguration_set_onMoveCursorBackwardByWord(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).onMoveCursorBackwardByWord =
      value as void Function(bool extendSelection)?;
}

void _SemanticsConfiguration_set_onSetSelection(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).onSetSelection =
      value as void Function(api6.TextSelection selection)?;
}

void _SemanticsConfiguration_set_onSetText(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onSetText =
      value as void Function(String text)?;
}

void _SemanticsConfiguration_set_onDidGainAccessibilityFocus(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).onDidGainAccessibilityFocus =
      value as void Function()?;
}

void _SemanticsConfiguration_set_onDidLoseAccessibilityFocus(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).onDidLoseAccessibilityFocus =
      value as void Function()?;
}

void _SemanticsConfiguration_set_onFocus(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onFocus = value as void Function()?;
}

void _SemanticsConfiguration_set_onExpand(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onExpand = value as void Function()?;
}

void _SemanticsConfiguration_set_onCollapse(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).onCollapse =
      value as void Function()?;
}

void _SemanticsConfiguration_set_childConfigurationsDelegate(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).childConfigurationsDelegate =
      value
          as api.ChildSemanticsConfigurationsResult Function(
            List<api.SemanticsConfiguration> p0,
          )?;
}

void _SemanticsConfiguration_set_sortKey(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).sortKey =
      value as api.SemanticsSortKey?;
}

void _SemanticsConfiguration_set_indexInParent(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).indexInParent = value as int?;
}

void _SemanticsConfiguration_set_scrollChildCount(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).scrollChildCount = value as int?;
}

void _SemanticsConfiguration_set_scrollIndex(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).scrollIndex = value as int?;
}

void _SemanticsConfiguration_set_platformViewId(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).platformViewId = value as int?;
}

void _SemanticsConfiguration_set_maxValueLength(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).maxValueLength = value as int?;
}

void _SemanticsConfiguration_set_currentValueLength(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).currentValueLength = value as int?;
}

void _SemanticsConfiguration_set_isMergingSemanticsOfDescendants(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).isMergingSemanticsOfDescendants =
      value as bool;
}

void _SemanticsConfiguration_set_customSemanticsActions(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).customSemanticsActions =
      value as Map<api.CustomSemanticsAction, void Function()>;
}

void _SemanticsConfiguration_set_identifier(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).identifier = value as String;
}

void _SemanticsConfiguration_set_traversalParentIdentifier(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).traversalParentIdentifier = value;
}

void _SemanticsConfiguration_set_traversalChildIdentifier(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).traversalChildIdentifier = value;
}

void _SemanticsConfiguration_set_role(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).role = value as api1.SemanticsRole;
}

void _SemanticsConfiguration_set_label(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).label = value as String;
}

void _SemanticsConfiguration_set_attributedLabel(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).attributedLabel =
      value as api.AttributedString;
}

void _SemanticsConfiguration_set_value(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).value = value as String;
}

void _SemanticsConfiguration_set_attributedValue(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).attributedValue =
      value as api.AttributedString;
}

void _SemanticsConfiguration_set_increasedValue(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).increasedValue = value as String;
}

void _SemanticsConfiguration_set_attributedIncreasedValue(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).attributedIncreasedValue =
      value as api.AttributedString;
}

void _SemanticsConfiguration_set_decreasedValue(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).decreasedValue = value as String;
}

void _SemanticsConfiguration_set_attributedDecreasedValue(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).attributedDecreasedValue =
      value as api.AttributedString;
}

void _SemanticsConfiguration_set_hint(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).hint = value as String;
}

void _SemanticsConfiguration_set_attributedHint(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).attributedHint =
      value as api.AttributedString;
}

void _SemanticsConfiguration_set_tooltip(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).tooltip = value as String;
}

void _SemanticsConfiguration_set_hintOverrides(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).hintOverrides =
      value as api.SemanticsHintOverrides?;
}

void _SemanticsConfiguration_set_scopesRoute(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).scopesRoute = value as bool;
}

void _SemanticsConfiguration_set_namesRoute(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).namesRoute = value as bool;
}

void _SemanticsConfiguration_set_isImage(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isImage = value as bool;
}

void _SemanticsConfiguration_set_liveRegion(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).liveRegion = value as bool;
}

void _SemanticsConfiguration_set_textDirection(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).textDirection =
      value as api1.TextDirection?;
}

void _SemanticsConfiguration_set_isSelected(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isSelected = value as bool;
}

void _SemanticsConfiguration_set_isExpanded(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isExpanded = value as bool?;
}

void _SemanticsConfiguration_set_isEnabled(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isEnabled = value as bool?;
}

void _SemanticsConfiguration_set_isChecked(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isChecked = value as bool?;
}

void _SemanticsConfiguration_set_isCheckStateMixed(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).isCheckStateMixed = value as bool?;
}

void _SemanticsConfiguration_set_isToggled(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isToggled = value as bool?;
}

void _SemanticsConfiguration_set_isInMutuallyExclusiveGroup(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).isInMutuallyExclusiveGroup =
      value as bool;
}

void _SemanticsConfiguration_set_isFocusable(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isFocusable = value as bool;
}

void _SemanticsConfiguration_set_isFocused(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isFocused = value as bool?;
}

void _SemanticsConfiguration_set_accessibilityFocusBlockType(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).accessibilityFocusBlockType =
      value as api.AccessibilityFocusBlockType;
}

void _SemanticsConfiguration_set_isButton(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isButton = value as bool;
}

void _SemanticsConfiguration_set_isLink(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isLink = value as bool;
}

void _SemanticsConfiguration_set_linkUrl(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).linkUrl = value as api4.Uri?;
}

void _SemanticsConfiguration_set_isHeader(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isHeader = value as bool;
}

void _SemanticsConfiguration_set_headingLevel(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).headingLevel = value as int;
}

void _SemanticsConfiguration_set_isSlider(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isSlider = value as bool;
}

void _SemanticsConfiguration_set_isKeyboardKey(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isKeyboardKey = value as bool;
}

void _SemanticsConfiguration_set_isHidden(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isHidden = value as bool;
}

void _SemanticsConfiguration_set_isTextField(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isTextField = value as bool;
}

void _SemanticsConfiguration_set_isReadOnly(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isReadOnly = value as bool;
}

void _SemanticsConfiguration_set_isObscured(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isObscured = value as bool;
}

void _SemanticsConfiguration_set_isMultiline(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isMultiline = value as bool;
}

void _SemanticsConfiguration_set_isRequired(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).isRequired = value as bool?;
}

void _SemanticsConfiguration_set_hasImplicitScrolling(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).hasImplicitScrolling = value as bool;
}

void _SemanticsConfiguration_set_textSelection(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).textSelection =
      value as api6.TextSelection?;
}

void _SemanticsConfiguration_set_scrollPosition(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).scrollPosition = value as double?;
}

void _SemanticsConfiguration_set_scrollExtentMax(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).scrollExtentMax = value as double?;
}

void _SemanticsConfiguration_set_scrollExtentMin(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).scrollExtentMin = value as double?;
}

void _SemanticsConfiguration_set_controlsNodes(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).controlsNodes =
      value as Set<String>?;
}

void _SemanticsConfiguration_set_validationResult(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).validationResult =
      value as api1.SemanticsValidationResult;
}

void _SemanticsConfiguration_set_hitTestBehavior(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsConfiguration).hitTestBehavior =
      value as api1.SemanticsHitTestBehavior;
}

void _SemanticsConfiguration_set_inputType(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).inputType =
      value as api1.SemanticsInputType;
}

void _SemanticsConfiguration_set_maxValue(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).maxValue = value as String?;
}

void _SemanticsConfiguration_set_minValue(Object receiver, Object? value) {
  (receiver as api.SemanticsConfiguration).minValue = value as String?;
}

Object? _SemanticsConfiguration_getActionHandler(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsConfiguration).getActionHandler(
    values["action"] as api1.SemanticsAction,
  );
}

Object? _SemanticsConfiguration_tagsChildrenWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsConfiguration).tagsChildrenWith(
    values["tag"] as api.SemanticsTag,
  );
}

Object? _SemanticsConfiguration_addTagForChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsConfiguration).addTagForChildren(
    values["tag"] as api.SemanticsTag,
  );
  return null;
}

Object? _SemanticsConfiguration_isCompatibleWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsConfiguration).isCompatibleWith(
    values["other"] as api.SemanticsConfiguration?,
  );
}

Object? _SemanticsConfiguration_absorb(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsConfiguration).absorb(
    values["child"] as api.SemanticsConfiguration,
  );
  return null;
}

Object? _SemanticsConfiguration_copy(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsConfiguration).copy();
}

Object? _SemanticsConfiguration_super_getActionHandler(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsConfigurationProxy)._flaxSuper_getActionHandler(
    values["action"] as api1.SemanticsAction,
  );
}

Object? _SemanticsConfiguration_super_tagsChildrenWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsConfigurationProxy)._flaxSuper_tagsChildrenWith(
    values["tag"] as api.SemanticsTag,
  );
}

Object? _SemanticsConfiguration_super_addTagForChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuper_addTagForChildren(
    values["tag"] as api.SemanticsTag,
  );
  return null;
}

Object? _SemanticsConfiguration_super_isCompatibleWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsConfigurationProxy)._flaxSuper_isCompatibleWith(
    values["other"] as api.SemanticsConfiguration?,
  );
}

Object? _SemanticsConfiguration_super_absorb(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuper_absorb(
    values["child"] as api.SemanticsConfiguration,
  );
  return null;
}

Object? _SemanticsConfiguration_super_copy(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsConfigurationProxy)._flaxSuper_copy();
}

Object? _SemanticsConfiguration_super_get_isSemanticBoundary(
  Object receiver,
  Map<String, Object?> values,
) =>
    (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isSemanticBoundary;
Object? _SemanticsConfiguration_super_get_localeForSubtree(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_localeForSubtree;
Object? _SemanticsConfiguration_super_get_locale(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_locale;
Object? _SemanticsConfiguration_super_get_isBlockingUserActions(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)
    ._flaxSuperGet_isBlockingUserActions;
Object? _SemanticsConfiguration_super_get_explicitChildNodes(
  Object receiver,
  Map<String, Object?> values,
) =>
    (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_explicitChildNodes;
Object?
_SemanticsConfiguration_super_get_isBlockingSemanticsOfPreviouslyPaintedNodes(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)
    ._flaxSuperGet_isBlockingSemanticsOfPreviouslyPaintedNodes;
Object? _SemanticsConfiguration_super_get_hasBeenAnnotated(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_hasBeenAnnotated;
Object? _FlaxProxyDispatch11_super_get_onTap(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onTap;
Object? _FlaxProxyDispatch11_super_get_onLongPress(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onLongPress;
Object? _FlaxProxyDispatch11_super_get_onScrollLeft(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onScrollLeft;
Object? _FlaxProxyDispatch11_super_get_onDismiss(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onDismiss;
Object? _FlaxProxyDispatch11_super_get_onScrollRight(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onScrollRight;
Object? _FlaxProxyDispatch11_super_get_onScrollUp(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onScrollUp;
Object? _FlaxProxyDispatch11_super_get_onScrollDown(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onScrollDown;
Object? _SemanticsConfiguration_super_get_onScrollToOffset(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_onScrollToOffset;
Object? _FlaxProxyDispatch11_super_get_onIncrease(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onIncrease;
Object? _FlaxProxyDispatch11_super_get_onDecrease(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onDecrease;
Object? _FlaxProxyDispatch11_super_get_onCopy(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onCopy;
Object? _FlaxProxyDispatch11_super_get_onCut(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onCut;
Object? _FlaxProxyDispatch11_super_get_onPaste(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onPaste;
Object? _SemanticsConfiguration_super_get_onShowOnScreen(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_onShowOnScreen;
Object? _FlaxProxyDispatch11_super_get_onMoveCursorForwardByCharacter(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)
    ._flaxSuperGet_onMoveCursorForwardByCharacter;
Object? _FlaxProxyDispatch11_super_get_onMoveCursorBackwardByCharacter(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)
    ._flaxSuperGet_onMoveCursorBackwardByCharacter;
Object? _FlaxProxyDispatch11_super_get_onMoveCursorForwardByWord(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onMoveCursorForwardByWord;
Object? _FlaxProxyDispatch11_super_get_onMoveCursorBackwardByWord(
  Object receiver,
  Map<String, Object?> values,
) =>
    (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onMoveCursorBackwardByWord;
Object? _FlaxProxyDispatch11_super_get_onSetSelection(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onSetSelection;
Object? _FlaxProxyDispatch11_super_get_onSetText(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onSetText;
Object? _FlaxProxyDispatch11_super_get_onDidGainAccessibilityFocus(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)
    ._flaxSuperGet_onDidGainAccessibilityFocus;
Object? _FlaxProxyDispatch11_super_get_onDidLoseAccessibilityFocus(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)
    ._flaxSuperGet_onDidLoseAccessibilityFocus;
Object? _FlaxProxyDispatch11_super_get_onFocus(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onFocus;
Object? _FlaxProxyDispatch11_super_get_onExpand(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onExpand;
Object? _FlaxProxyDispatch11_super_get_onCollapse(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_onCollapse;
Object? _SemanticsConfiguration_super_get_childConfigurationsDelegate(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)
    ._flaxSuperGet_childConfigurationsDelegate;
Object? _SemanticsConfiguration_super_get_sortKey(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_sortKey;
Object? _SemanticsConfiguration_super_get_indexInParent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_indexInParent;
Object? _FlaxProxyDispatch14_super_get_scrollChildCount(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_scrollChildCount;
Object? _FlaxProxyDispatch14_super_get_scrollIndex(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_scrollIndex;
Object? _FlaxProxyDispatch14_super_get_platformViewId(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_platformViewId;
Object? _FlaxProxyDispatch15_super_get_maxValueLength(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch15)._flaxSuperGet_maxValueLength;
Object? _FlaxProxyDispatch15_super_get_currentValueLength(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch15)._flaxSuperGet_currentValueLength;
Object? _SemanticsConfiguration_super_get_isMergingSemanticsOfDescendants(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)
    ._flaxSuperGet_isMergingSemanticsOfDescendants;
Object? _SemanticsConfiguration_super_get_customSemanticsActions(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)
    ._flaxSuperGet_customSemanticsActions;
Object? _FlaxProxyDispatch14_super_get_identifier(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_identifier;
Object? _FlaxProxyDispatch15_super_get_traversalParentIdentifier(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch15)._flaxSuperGet_traversalParentIdentifier;
Object? _FlaxProxyDispatch15_super_get_traversalChildIdentifier(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch15)._flaxSuperGet_traversalChildIdentifier;
Object? _FlaxProxyDispatch14_super_get_role(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_role;
Object? _FlaxProxyDispatch14_super_get_label(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_label;
Object? _FlaxProxyDispatch14_super_get_attributedLabel(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_attributedLabel;
Object? _FlaxProxyDispatch14_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_value;
Object? _FlaxProxyDispatch14_super_get_attributedValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_attributedValue;
Object? _FlaxProxyDispatch14_super_get_increasedValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_increasedValue;
Object? _FlaxProxyDispatch14_super_get_attributedIncreasedValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_attributedIncreasedValue;
Object? _FlaxProxyDispatch14_super_get_decreasedValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_decreasedValue;
Object? _FlaxProxyDispatch14_super_get_attributedDecreasedValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_attributedDecreasedValue;
Object? _FlaxProxyDispatch14_super_get_hint(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_hint;
Object? _FlaxProxyDispatch14_super_get_attributedHint(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_attributedHint;
Object? _FlaxProxyDispatch14_super_get_tooltip(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_tooltip;
Object? _SemanticsConfiguration_super_get_hintOverrides(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_hintOverrides;
Object? _SemanticsConfiguration_super_get_scopesRoute(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_scopesRoute;
Object? _SemanticsConfiguration_super_get_namesRoute(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_namesRoute;
Object? _SemanticsConfiguration_super_get_isImage(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isImage;
Object? _SemanticsConfiguration_super_get_liveRegion(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_liveRegion;
Object? _FlaxProxyDispatch15_super_get_textDirection(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch15)._flaxSuperGet_textDirection;
Object? _SemanticsConfiguration_super_get_isSelected(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isSelected;
Object? _SemanticsConfiguration_super_get_isExpanded(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isExpanded;
Object? _SemanticsConfiguration_super_get_isEnabled(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isEnabled;
Object? _SemanticsConfiguration_super_get_isChecked(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isChecked;
Object? _SemanticsConfiguration_super_get_isCheckStateMixed(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isCheckStateMixed;
Object? _SemanticsConfiguration_super_get_isToggled(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isToggled;
Object? _SemanticsConfiguration_super_get_isInMutuallyExclusiveGroup(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)
    ._flaxSuperGet_isInMutuallyExclusiveGroup;
Object? _SemanticsConfiguration_super_get_isFocusable(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isFocusable;
Object? _SemanticsConfiguration_super_get_isFocused(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isFocused;
Object? _SemanticsConfiguration_super_get_accessibilityFocusBlockType(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)
    ._flaxSuperGet_accessibilityFocusBlockType;
Object? _SemanticsConfiguration_super_get_isButton(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isButton;
Object? _SemanticsConfiguration_super_get_isLink(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isLink;
Object? _FlaxProxyDispatch15_super_get_linkUrl(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch15)._flaxSuperGet_linkUrl;
Object? _SemanticsConfiguration_super_get_isHeader(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isHeader;
Object? _FlaxProxyDispatch14_super_get_headingLevel(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_headingLevel;
Object? _SemanticsConfiguration_super_get_isSlider(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isSlider;
Object? _SemanticsConfiguration_super_get_isKeyboardKey(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isKeyboardKey;
Object? _SemanticsConfiguration_super_get_isHidden(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isHidden;
Object? _SemanticsConfiguration_super_get_isTextField(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isTextField;
Object? _SemanticsConfiguration_super_get_isReadOnly(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isReadOnly;
Object? _SemanticsConfiguration_super_get_isObscured(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isObscured;
Object? _SemanticsConfiguration_super_get_isMultiline(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_isMultiline;
Object? _FlaxProxyDispatch11_super_get_isRequired(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_isRequired;
Object? _SemanticsConfiguration_super_get_hasImplicitScrolling(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)
    ._flaxSuperGet_hasImplicitScrolling;
Object? _FlaxProxyDispatch14_super_get_textSelection(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_textSelection;
Object? _FlaxProxyDispatch14_super_get_scrollPosition(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_scrollPosition;
Object? _FlaxProxyDispatch14_super_get_scrollExtentMax(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_scrollExtentMax;
Object? _FlaxProxyDispatch14_super_get_scrollExtentMin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_scrollExtentMin;
Object? _FlaxProxyDispatch15_super_get_controlsNodes(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch15)._flaxSuperGet_controlsNodes;
Object? _FlaxProxyDispatch15_super_get_validationResult(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch15)._flaxSuperGet_validationResult;
Object? _FlaxProxyDispatch14_super_get_hitTestBehavior(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_hitTestBehavior;
Object? _FlaxProxyDispatch14_super_get_inputType(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch14)._flaxSuperGet_inputType;
Object? _FlaxProxyDispatch15_super_get_maxValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch15)._flaxSuperGet_maxValue;
Object? _FlaxProxyDispatch15_super_get_minValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch15)._flaxSuperGet_minValue;
Object? _SemanticsConfiguration_super_get_tagsForChildren(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsConfigurationProxy)._flaxSuperGet_tagsForChildren;
Object? _SemanticsConfiguration_super_set_isSemanticBoundary(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isSemanticBoundary(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_localeForSubtree(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_localeForSubtree(
    values["value"] as api1.Locale?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_locale(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_locale(
    values["value"] as api1.Locale?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isBlockingUserActions(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_isBlockingUserActions(values["value"] as bool);
  return null;
}

Object? _SemanticsConfiguration_super_set_explicitChildNodes(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_explicitChildNodes(
    values["value"] as bool,
  );
  return null;
}

Object?
_SemanticsConfiguration_super_set_isBlockingSemanticsOfPreviouslyPaintedNodes(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_isBlockingSemanticsOfPreviouslyPaintedNodes(
        values["value"] as bool,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_onTap(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onTap(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onLongPress(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onLongPress(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onScrollLeft(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onScrollLeft(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onDismiss(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onDismiss(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onScrollRight(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onScrollRight(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onScrollUp(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onScrollUp(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onScrollDown(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onScrollDown(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onScrollToOffset(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onScrollToOffset(
    values["value"] as void Function(api1.Offset targetOffset)?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onIncrease(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onIncrease(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onDecrease(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onDecrease(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onCopy(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onCopy(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onCut(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onCut(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onPaste(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onPaste(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onShowOnScreen(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onShowOnScreen(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onMoveCursorForwardByCharacter(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_onMoveCursorForwardByCharacter(
        values["value"] as void Function(bool extendSelection)?,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_onMoveCursorBackwardByCharacter(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_onMoveCursorBackwardByCharacter(
        values["value"] as void Function(bool extendSelection)?,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_onMoveCursorForwardByWord(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_onMoveCursorForwardByWord(
        values["value"] as void Function(bool extendSelection)?,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_onMoveCursorBackwardByWord(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_onMoveCursorBackwardByWord(
        values["value"] as void Function(bool extendSelection)?,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_onSetSelection(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onSetSelection(
    values["value"] as void Function(api6.TextSelection selection)?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onSetText(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onSetText(
    values["value"] as void Function(String text)?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onDidGainAccessibilityFocus(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_onDidGainAccessibilityFocus(
        values["value"] as void Function()?,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_onDidLoseAccessibilityFocus(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_onDidLoseAccessibilityFocus(
        values["value"] as void Function()?,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_onFocus(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onFocus(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onExpand(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onExpand(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_onCollapse(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_onCollapse(
    values["value"] as void Function()?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_childConfigurationsDelegate(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_childConfigurationsDelegate(
        values["value"]
            as api.ChildSemanticsConfigurationsResult Function(
              List<api.SemanticsConfiguration> p0,
            )?,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_sortKey(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_sortKey(
    values["value"] as api.SemanticsSortKey?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_indexInParent(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_indexInParent(
    values["value"] as int?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_scrollChildCount(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_scrollChildCount(
    values["value"] as int?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_scrollIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_scrollIndex(
    values["value"] as int?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_platformViewId(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_platformViewId(
    values["value"] as int?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_maxValueLength(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_maxValueLength(
    values["value"] as int?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_currentValueLength(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_currentValueLength(
    values["value"] as int?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isMergingSemanticsOfDescendants(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_isMergingSemanticsOfDescendants(values["value"] as bool);
  return null;
}

Object? _SemanticsConfiguration_super_set_customSemanticsActions(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_customSemanticsActions(
        values["value"] as Map<api.CustomSemanticsAction, void Function()>,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_identifier(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_identifier(
    values["value"] as String,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_traversalParentIdentifier(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_traversalParentIdentifier(values["value"]);
  return null;
}

Object? _SemanticsConfiguration_super_set_traversalChildIdentifier(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_traversalChildIdentifier(values["value"]);
  return null;
}

Object? _SemanticsConfiguration_super_set_role(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_role(
    values["value"] as api1.SemanticsRole,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_label(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_label(
    values["value"] as String,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_attributedLabel(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_attributedLabel(
    values["value"] as api.AttributedString,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_value(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_value(
    values["value"] as String,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_attributedValue(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_attributedValue(
    values["value"] as api.AttributedString,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_increasedValue(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_increasedValue(
    values["value"] as String,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_attributedIncreasedValue(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_attributedIncreasedValue(
        values["value"] as api.AttributedString,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_decreasedValue(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_decreasedValue(
    values["value"] as String,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_attributedDecreasedValue(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_attributedDecreasedValue(
        values["value"] as api.AttributedString,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_hint(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_hint(
    values["value"] as String,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_attributedHint(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_attributedHint(
    values["value"] as api.AttributedString,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_tooltip(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_tooltip(
    values["value"] as String,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_hintOverrides(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_hintOverrides(
    values["value"] as api.SemanticsHintOverrides?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_scopesRoute(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_scopesRoute(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_namesRoute(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_namesRoute(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isImage(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isImage(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_liveRegion(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_liveRegion(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_textDirection(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_textDirection(
    values["value"] as api1.TextDirection?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isSelected(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isSelected(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isExpanded(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isExpanded(
    values["value"] as bool?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isEnabled(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isEnabled(
    values["value"] as bool?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isChecked(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isChecked(
    values["value"] as bool?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isCheckStateMixed(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isCheckStateMixed(
    values["value"] as bool?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isToggled(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isToggled(
    values["value"] as bool?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isInMutuallyExclusiveGroup(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_isInMutuallyExclusiveGroup(values["value"] as bool);
  return null;
}

Object? _SemanticsConfiguration_super_set_isFocusable(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isFocusable(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isFocused(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isFocused(
    values["value"] as bool?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_accessibilityFocusBlockType(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)
      ._flaxSuperSet_accessibilityFocusBlockType(
        values["value"] as api.AccessibilityFocusBlockType,
      );
  return null;
}

Object? _SemanticsConfiguration_super_set_isButton(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isButton(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isLink(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isLink(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_linkUrl(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_linkUrl(
    values["value"] as api4.Uri?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isHeader(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isHeader(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_headingLevel(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_headingLevel(
    values["value"] as int,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isSlider(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isSlider(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isKeyboardKey(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isKeyboardKey(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isHidden(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isHidden(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isTextField(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isTextField(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isReadOnly(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isReadOnly(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isObscured(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isObscured(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isMultiline(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isMultiline(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_isRequired(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_isRequired(
    values["value"] as bool?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_hasImplicitScrolling(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_hasImplicitScrolling(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_textSelection(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_textSelection(
    values["value"] as api6.TextSelection?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_scrollPosition(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_scrollPosition(
    values["value"] as double?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_scrollExtentMax(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_scrollExtentMax(
    values["value"] as double?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_scrollExtentMin(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_scrollExtentMin(
    values["value"] as double?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_controlsNodes(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_controlsNodes(
    values["value"] as Set<String>?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_validationResult(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_validationResult(
    values["value"] as api1.SemanticsValidationResult,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_hitTestBehavior(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_hitTestBehavior(
    values["value"] as api1.SemanticsHitTestBehavior,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_inputType(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_inputType(
    values["value"] as api1.SemanticsInputType,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_maxValue(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_maxValue(
    values["value"] as String?,
  );
  return null;
}

Object? _SemanticsConfiguration_super_set_minValue(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsConfigurationProxy)._flaxSuperSet_minValue(
    values["value"] as String?,
  );
  return null;
}

Object _createSemanticsConfiguration(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SemanticsConfiguration();
    case '@implementation':
      return _SemanticsConfigurationProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsData(Object value) => value is api.SemanticsData;
Object? _SemanticsData_flags(Object value) =>
    (value as api.SemanticsData).flags;
Object? _SemanticsData_flagsCollection(Object value) =>
    (value as api.SemanticsData).flagsCollection;
Object? _SemanticsData_actions(Object value) =>
    (value as api.SemanticsData).actions;
Object? _SemanticsData_identifier(Object value) =>
    (value as api.SemanticsData).identifier;
Object? _SemanticsData_traversalParentIdentifier(Object value) =>
    (value as api.SemanticsData).traversalParentIdentifier;
Object? _SemanticsData_traversalChildIdentifier(Object value) =>
    (value as api.SemanticsData).traversalChildIdentifier;
Object? _SemanticsData_label(Object value) =>
    (value as api.SemanticsData).label;
Object? _SemanticsData_attributedLabel(Object value) =>
    (value as api.SemanticsData).attributedLabel;
Object? _SemanticsData_value(Object value) =>
    (value as api.SemanticsData).value;
Object? _SemanticsData_attributedValue(Object value) =>
    (value as api.SemanticsData).attributedValue;
Object? _SemanticsData_increasedValue(Object value) =>
    (value as api.SemanticsData).increasedValue;
Object? _SemanticsData_attributedIncreasedValue(Object value) =>
    (value as api.SemanticsData).attributedIncreasedValue;
Object? _SemanticsData_decreasedValue(Object value) =>
    (value as api.SemanticsData).decreasedValue;
Object? _SemanticsData_attributedDecreasedValue(Object value) =>
    (value as api.SemanticsData).attributedDecreasedValue;
Object? _SemanticsData_hint(Object value) => (value as api.SemanticsData).hint;
Object? _SemanticsData_attributedHint(Object value) =>
    (value as api.SemanticsData).attributedHint;
Object? _SemanticsData_tooltip(Object value) =>
    (value as api.SemanticsData).tooltip;
Object? _SemanticsData_headingLevel(Object value) =>
    (value as api.SemanticsData).headingLevel;
Object? _SemanticsData_textDirection(Object value) =>
    (value as api.SemanticsData).textDirection;
Object? _SemanticsData_textSelection(Object value) =>
    (value as api.SemanticsData).textSelection;
Object? _SemanticsData_scrollChildCount(Object value) =>
    (value as api.SemanticsData).scrollChildCount;
Object? _SemanticsData_scrollIndex(Object value) =>
    (value as api.SemanticsData).scrollIndex;
Object? _SemanticsData_scrollPosition(Object value) =>
    (value as api.SemanticsData).scrollPosition;
Object? _SemanticsData_scrollExtentMax(Object value) =>
    (value as api.SemanticsData).scrollExtentMax;
Object? _SemanticsData_scrollExtentMin(Object value) =>
    (value as api.SemanticsData).scrollExtentMin;
Object? _SemanticsData_platformViewId(Object value) =>
    (value as api.SemanticsData).platformViewId;
Object? _SemanticsData_maxValueLength(Object value) =>
    (value as api.SemanticsData).maxValueLength;
Object? _SemanticsData_currentValueLength(Object value) =>
    (value as api.SemanticsData).currentValueLength;
Object? _SemanticsData_linkUrl(Object value) =>
    (value as api.SemanticsData).linkUrl;
Object? _SemanticsData_rect(Object value) => (value as api.SemanticsData).rect;
Object? _SemanticsData_tags(Object value) => (value as api.SemanticsData).tags;
Object? _SemanticsData_transform(Object value) =>
    (value as api.SemanticsData).transform;
Object? _SemanticsData_customSemanticsActionIds(Object value) =>
    (value as api.SemanticsData).customSemanticsActionIds;
Object? _SemanticsData_role(Object value) => (value as api.SemanticsData).role;
Object? _SemanticsData_controlsNodes(Object value) =>
    (value as api.SemanticsData).controlsNodes;
Object? _SemanticsData_validationResult(Object value) =>
    (value as api.SemanticsData).validationResult;
Object? _SemanticsData_hitTestBehavior(Object value) =>
    (value as api.SemanticsData).hitTestBehavior;
Object? _SemanticsData_inputType(Object value) =>
    (value as api.SemanticsData).inputType;
Object? _SemanticsData_locale(Object value) =>
    (value as api.SemanticsData).locale;
Object? _SemanticsData_maxValue(Object value) =>
    (value as api.SemanticsData).maxValue;
Object? _SemanticsData_minValue(Object value) =>
    (value as api.SemanticsData).minValue;
Object? _SemanticsData_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsData).toStringShort();
}

Object? _SemanticsData_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsData).toString(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _SemanticsData_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsData).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _SemanticsData_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsData).debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _SemanticsData_hasFlag(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsData).hasFlag(
    values["flag"] as api1.SemanticsFlag,
  );
}

Object? _SemanticsData_hasAction(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsData).hasAction(
    values["action"] as api1.SemanticsAction,
  );
}

Object? _SemanticsData_super_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsDataProxy)._flaxSuper_toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _SemanticsData_super_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsDataProxy)._flaxSuper_debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _SemanticsData_super_hasFlag(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsDataProxy)._flaxSuper_hasFlag(
    values["flag"] as api1.SemanticsFlag,
  );
}

Object? _SemanticsData_super_hasAction(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsDataProxy)._flaxSuper_hasAction(
    values["action"] as api1.SemanticsAction,
  );
}

Object? _SemanticsData_super_get_flags(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsDataProxy)._flaxSuperGet_flags;
Object? _SemanticsData_super_get_flagsCollection(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsDataProxy)._flaxSuperGet_flagsCollection;
Object? _SemanticsData_super_get_actions(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsDataProxy)._flaxSuperGet_actions;
Object? _SemanticsData_super_get_rect(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsDataProxy)._flaxSuperGet_rect;
Object? _SemanticsData_super_get_tags(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsDataProxy)._flaxSuperGet_tags;
Object? _SemanticsData_super_get_transform(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsDataProxy)._flaxSuperGet_transform;
Object? _SemanticsData_super_get_customSemanticsActionIds(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsDataProxy)._flaxSuperGet_customSemanticsActionIds;
Object? _SemanticsData_super_get_locale(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsDataProxy)._flaxSuperGet_locale;
Object _createSemanticsData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SemanticsData(
        flagsCollection: values["flagsCollection"] as api1.SemanticsFlags,
        actions: values["actions"] as int,
        identifier: values["identifier"] as String,
        traversalParentIdentifier: values["traversalParentIdentifier"],
        traversalChildIdentifier: values["traversalChildIdentifier"],
        attributedLabel: values["attributedLabel"] as api.AttributedString,
        attributedValue: values["attributedValue"] as api.AttributedString,
        attributedIncreasedValue:
            values["attributedIncreasedValue"] as api.AttributedString,
        attributedDecreasedValue:
            values["attributedDecreasedValue"] as api.AttributedString,
        attributedHint: values["attributedHint"] as api.AttributedString,
        tooltip: values["tooltip"] as String,
        textDirection: values["textDirection"] as api1.TextDirection?,
        rect: values["rect"] as api1.Rect,
        textSelection: values["textSelection"] as api6.TextSelection?,
        scrollIndex: values["scrollIndex"] as int?,
        scrollChildCount: values["scrollChildCount"] as int?,
        scrollPosition: values["scrollPosition"] as double?,
        scrollExtentMax: values["scrollExtentMax"] as double?,
        scrollExtentMin: values["scrollExtentMin"] as double?,
        platformViewId: values["platformViewId"] as int?,
        maxValueLength: values["maxValueLength"] as int?,
        currentValueLength: values["currentValueLength"] as int?,
        headingLevel: values["headingLevel"] as int,
        linkUrl: values["linkUrl"] as api4.Uri?,
        role: values["role"] as api1.SemanticsRole,
        controlsNodes: values["controlsNodes"] as Set<String>?,
        validationResult:
            values["validationResult"] as api1.SemanticsValidationResult,
        hitTestBehavior:
            values["hitTestBehavior"] as api1.SemanticsHitTestBehavior,
        inputType: values["inputType"] as api1.SemanticsInputType,
        locale: values["locale"] as api1.Locale?,
        minValue: values["minValue"] as String?,
        maxValue: values["maxValue"] as String?,
        tags: values["tags"] as Set<api.SemanticsTag>?,
        transform: values["transform"] as api5.Matrix4?,
        customSemanticsActionIds:
            values["customSemanticsActionIds"] as List<int>?,
      );
    case '@implementation':
      return _SemanticsDataProxy(
        values['@peer'] as FlaxProxyPeer,
        flagsCollection: values["flagsCollection"] as api1.SemanticsFlags,
        actions: values["actions"] as int,
        identifier: values["identifier"] as String,
        traversalParentIdentifier: values["traversalParentIdentifier"],
        traversalChildIdentifier: values["traversalChildIdentifier"],
        attributedLabel: values["attributedLabel"] as api.AttributedString,
        attributedValue: values["attributedValue"] as api.AttributedString,
        attributedIncreasedValue:
            values["attributedIncreasedValue"] as api.AttributedString,
        attributedDecreasedValue:
            values["attributedDecreasedValue"] as api.AttributedString,
        attributedHint: values["attributedHint"] as api.AttributedString,
        tooltip: values["tooltip"] as String,
        textDirection: values["textDirection"] as api1.TextDirection?,
        rect: values["rect"] as api1.Rect,
        textSelection: values["textSelection"] as api6.TextSelection?,
        scrollIndex: values["scrollIndex"] as int?,
        scrollChildCount: values["scrollChildCount"] as int?,
        scrollPosition: values["scrollPosition"] as double?,
        scrollExtentMax: values["scrollExtentMax"] as double?,
        scrollExtentMin: values["scrollExtentMin"] as double?,
        platformViewId: values["platformViewId"] as int?,
        maxValueLength: values["maxValueLength"] as int?,
        currentValueLength: values["currentValueLength"] as int?,
        headingLevel: values["headingLevel"] as int,
        linkUrl: values["linkUrl"] as api4.Uri?,
        role: values["role"] as api1.SemanticsRole,
        controlsNodes: values["controlsNodes"] as Set<String>?,
        validationResult:
            values["validationResult"] as api1.SemanticsValidationResult,
        hitTestBehavior:
            values["hitTestBehavior"] as api1.SemanticsHitTestBehavior,
        inputType: values["inputType"] as api1.SemanticsInputType,
        locale: values["locale"] as api1.Locale?,
        minValue: values["minValue"] as String?,
        maxValue: values["maxValue"] as String?,
        tags: values["tags"] as Set<api.SemanticsTag>?,
        transform: values["transform"] as api5.Matrix4?,
        customSemanticsActionIds:
            values["customSemanticsActionIds"] as List<int>?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsEvent(Object value) => value is api.SemanticsEvent;
Object? _SemanticsEvent_type(Object value) =>
    (value as api.SemanticsEvent).type;
Object? _SemanticsEvent_toMap(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsEvent).toMap(
    nodeId: values["nodeId"] as int?,
  );
}

Object? _SemanticsEvent_getDataMap(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsEvent).getDataMap();
}

Object? _SemanticsEvent_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsEvent).toString();
}

Object _createSemanticsEvent(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _SemanticsEventProxy(
        values['@peer'] as FlaxProxyPeer,
        values["type"] as String,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsHandle(Object value) => value is api.SemanticsHandle;
Object? _SemanticsHandle_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.SemanticsHandle).dispose();
  return null;
}

Object _createSemanticsHandle(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isSemanticsHintOverrides(Object value) =>
    value is api.SemanticsHintOverrides;
Object? _SemanticsHintOverrides_onTapHint(Object value) =>
    (value as api.SemanticsHintOverrides).onTapHint;
Object? _SemanticsHintOverrides_onLongPressHint(Object value) =>
    (value as api.SemanticsHintOverrides).onLongPressHint;
Object? _SemanticsHintOverrides_isNotEmpty(Object value) =>
    (value as api.SemanticsHintOverrides).isNotEmpty;
Object? _SemanticsHintOverrides_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsHintOverrides).toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _SemanticsHintOverrides_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsHintOverrides).toStringDeep(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _SemanticsHintOverrides_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsHintOverrides).toStringShort();
}

Object? _SemanticsHintOverrides_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsHintOverrides).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _SemanticsHintOverrides_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsHintOverrides).debugDescribeChildren();
}

Object? _SemanticsHintOverrides_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsHintOverrides).debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _SemanticsHintOverrides_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsHintOverrides).toString(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _SemanticsHintOverrides_super_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsHintOverridesProxy)._flaxSuper_toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _SemanticsHintOverrides_super_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsHintOverridesProxy)._flaxSuper_toStringDeep(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _SemanticsHintOverrides_super_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsHintOverridesProxy)
      ._flaxSuper_debugDescribeChildren();
}

Object? _SemanticsHintOverrides_super_get_onTapHint(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsHintOverridesProxy)._flaxSuperGet_onTapHint;
Object? _SemanticsHintOverrides_super_get_onLongPressHint(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsHintOverridesProxy)._flaxSuperGet_onLongPressHint;
Object? _SemanticsHintOverrides_super_get_isNotEmpty(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsHintOverridesProxy)._flaxSuperGet_isNotEmpty;
Object _createSemanticsHintOverrides(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SemanticsHintOverrides(
        onTapHint: values["onTapHint"] as String?,
        onLongPressHint: values["onLongPressHint"] as String?,
      );
    case '@implementation':
      return _SemanticsHintOverridesProxy(
        values['@peer'] as FlaxProxyPeer,
        onTapHint: values["onTapHint"] as String?,
        onLongPressHint: values["onLongPressHint"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsLabelBuilder(Object value) =>
    value is api.SemanticsLabelBuilder;
Object? _SemanticsLabelBuilder_separator(Object value) =>
    (value as api.SemanticsLabelBuilder).separator;
Object? _SemanticsLabelBuilder_textDirection(Object value) =>
    (value as api.SemanticsLabelBuilder).textDirection;
Object? _SemanticsLabelBuilder_isEmpty(Object value) =>
    (value as api.SemanticsLabelBuilder).isEmpty;
Object? _SemanticsLabelBuilder_length(Object value) =>
    (value as api.SemanticsLabelBuilder).length;
Object? _SemanticsLabelBuilder_addPart(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsLabelBuilder).addPart(
    values["label"] as String,
    textDirection: values["textDirection"] as api1.TextDirection?,
  );
  return null;
}

Object? _SemanticsLabelBuilder_build(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsLabelBuilder).build();
}

Object? _SemanticsLabelBuilder_clear(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsLabelBuilder).clear();
  return null;
}

Object _createSemanticsLabelBuilder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SemanticsLabelBuilder(
        separator: values["separator"] as String,
        textDirection: values["textDirection"] as api1.TextDirection?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsNode(Object value) => value is api.SemanticsNode;
Object? _SemanticsNode_key(Object value) => (value as api.SemanticsNode).key;
Object? _SemanticsNode_id(Object value) => (value as api.SemanticsNode).id;
Object? _SemanticsNode_transform(Object value) =>
    (value as api.SemanticsNode).transform;
Object? _SemanticsNode_rect(Object value) => (value as api.SemanticsNode).rect;
Object? _SemanticsNode_parentSemanticsClipRect(Object value) =>
    (value as api.SemanticsNode).parentSemanticsClipRect;
Object? _SemanticsNode_parentPaintClipRect(Object value) =>
    (value as api.SemanticsNode).parentPaintClipRect;
Object? _SemanticsNode_indexInParent(Object value) =>
    (value as api.SemanticsNode).indexInParent;
Object? _SemanticsNode_isInvisible(Object value) =>
    (value as api.SemanticsNode).isInvisible;
Object? _SemanticsNode_isMergedIntoParent(Object value) =>
    (value as api.SemanticsNode).isMergedIntoParent;
Object? _SemanticsNode_areUserActionsBlocked(Object value) =>
    (value as api.SemanticsNode).areUserActionsBlocked;
Object? _SemanticsNode_isPartOfNodeMerging(Object value) =>
    (value as api.SemanticsNode).isPartOfNodeMerging;
Object? _SemanticsNode_mergeAllDescendantsIntoThisNode(Object value) =>
    (value as api.SemanticsNode).mergeAllDescendantsIntoThisNode;
Object? _SemanticsNode_hasChildren(Object value) =>
    (value as api.SemanticsNode).hasChildren;
Object? _SemanticsNode_childrenCount(Object value) =>
    (value as api.SemanticsNode).childrenCount;
Object? _SemanticsNode_childrenCountInTraversalOrder(Object value) =>
    (value as api.SemanticsNode).childrenCountInTraversalOrder;
Object? _SemanticsNode_owner(Object value) =>
    (value as api.SemanticsNode).owner;
Object? _SemanticsNode_attached(Object value) =>
    (value as api.SemanticsNode).attached;
Object? _SemanticsNode_parent(Object value) =>
    (value as api.SemanticsNode).parent;
Object? _SemanticsNode_traversalParent(Object value) =>
    (value as api.SemanticsNode).traversalParent;
Object? _SemanticsNode_depth(Object value) =>
    (value as api.SemanticsNode).depth;
Object? _SemanticsNode_tags(Object value) => (value as api.SemanticsNode).tags;
Object? _SemanticsNode_flagsCollection(Object value) =>
    (value as api.SemanticsNode).flagsCollection;
Object? _SemanticsNode_identifier(Object value) =>
    (value as api.SemanticsNode).identifier;
Object? _SemanticsNode_traversalParentIdentifier(Object value) =>
    (value as api.SemanticsNode).traversalParentIdentifier;
Object? _SemanticsNode_traversalChildIdentifier(Object value) =>
    (value as api.SemanticsNode).traversalChildIdentifier;
Object? _SemanticsNode_label(Object value) =>
    (value as api.SemanticsNode).label;
Object? _SemanticsNode_attributedLabel(Object value) =>
    (value as api.SemanticsNode).attributedLabel;
Object? _SemanticsNode_value(Object value) =>
    (value as api.SemanticsNode).value;
Object? _SemanticsNode_attributedValue(Object value) =>
    (value as api.SemanticsNode).attributedValue;
Object? _SemanticsNode_increasedValue(Object value) =>
    (value as api.SemanticsNode).increasedValue;
Object? _SemanticsNode_attributedIncreasedValue(Object value) =>
    (value as api.SemanticsNode).attributedIncreasedValue;
Object? _SemanticsNode_decreasedValue(Object value) =>
    (value as api.SemanticsNode).decreasedValue;
Object? _SemanticsNode_attributedDecreasedValue(Object value) =>
    (value as api.SemanticsNode).attributedDecreasedValue;
Object? _SemanticsNode_hint(Object value) => (value as api.SemanticsNode).hint;
Object? _SemanticsNode_attributedHint(Object value) =>
    (value as api.SemanticsNode).attributedHint;
Object? _SemanticsNode_tooltip(Object value) =>
    (value as api.SemanticsNode).tooltip;
Object? _SemanticsNode_hintOverrides(Object value) =>
    (value as api.SemanticsNode).hintOverrides;
Object? _SemanticsNode_textDirection(Object value) =>
    (value as api.SemanticsNode).textDirection;
Object? _SemanticsNode_sortKey(Object value) =>
    (value as api.SemanticsNode).sortKey;
Object? _SemanticsNode_textSelection(Object value) =>
    (value as api.SemanticsNode).textSelection;
Object? _SemanticsNode_isMultiline(Object value) =>
    (value as api.SemanticsNode).isMultiline;
Object? _SemanticsNode_scrollChildCount(Object value) =>
    (value as api.SemanticsNode).scrollChildCount;
Object? _SemanticsNode_scrollIndex(Object value) =>
    (value as api.SemanticsNode).scrollIndex;
Object? _SemanticsNode_scrollPosition(Object value) =>
    (value as api.SemanticsNode).scrollPosition;
Object? _SemanticsNode_scrollExtentMax(Object value) =>
    (value as api.SemanticsNode).scrollExtentMax;
Object? _SemanticsNode_scrollExtentMin(Object value) =>
    (value as api.SemanticsNode).scrollExtentMin;
Object? _SemanticsNode_platformViewId(Object value) =>
    (value as api.SemanticsNode).platformViewId;
Object? _SemanticsNode_maxValueLength(Object value) =>
    (value as api.SemanticsNode).maxValueLength;
Object? _SemanticsNode_currentValueLength(Object value) =>
    (value as api.SemanticsNode).currentValueLength;
Object? _SemanticsNode_headingLevel(Object value) =>
    (value as api.SemanticsNode).headingLevel;
Object? _SemanticsNode_linkUrl(Object value) =>
    (value as api.SemanticsNode).linkUrl;
Object? _SemanticsNode_role(Object value) => (value as api.SemanticsNode).role;
Object? _SemanticsNode_controlsNodes(Object value) =>
    (value as api.SemanticsNode).controlsNodes;
Object? _SemanticsNode_minValue(Object value) =>
    (value as api.SemanticsNode).minValue;
Object? _SemanticsNode_maxValue(Object value) =>
    (value as api.SemanticsNode).maxValue;
Object? _SemanticsNode_validationResult(Object value) =>
    (value as api.SemanticsNode).validationResult;
Object? _SemanticsNode_hitTestBehavior(Object value) =>
    (value as api.SemanticsNode).hitTestBehavior;
Object? _SemanticsNode_inputType(Object value) =>
    (value as api.SemanticsNode).inputType;
void _SemanticsNode_set_transform(Object receiver, Object? value) {
  (receiver as api.SemanticsNode).transform = value as api5.Matrix4?;
}

void _SemanticsNode_set_rect(Object receiver, Object? value) {
  (receiver as api.SemanticsNode).rect = value as api1.Rect;
}

void _SemanticsNode_set_parentSemanticsClipRect(
  Object receiver,
  Object? value,
) {
  (receiver as api.SemanticsNode).parentSemanticsClipRect = value as api1.Rect?;
}

void _SemanticsNode_set_parentPaintClipRect(Object receiver, Object? value) {
  (receiver as api.SemanticsNode).parentPaintClipRect = value as api1.Rect?;
}

void _SemanticsNode_set_indexInParent(Object receiver, Object? value) {
  (receiver as api.SemanticsNode).indexInParent = value as int?;
}

void _SemanticsNode_set_isMergedIntoParent(Object receiver, Object? value) {
  (receiver as api.SemanticsNode).isMergedIntoParent = value as bool;
}

void _SemanticsNode_set_areUserActionsBlocked(Object receiver, Object? value) {
  (receiver as api.SemanticsNode).areUserActionsBlocked = value as bool;
}

void _SemanticsNode_set_traversalParent(Object receiver, Object? value) {
  (receiver as api.SemanticsNode).traversalParent = value as api.SemanticsNode?;
}

void _SemanticsNode_set_tags(Object receiver, Object? value) {
  (receiver as api.SemanticsNode).tags = value as Set<api.SemanticsTag>?;
}

Object? _SemanticsNode_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsNode).toString(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _SemanticsNode_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsNode).toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _SemanticsNode_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsNode).toStringDeep(
    childOrder: values["childOrder"] as api.DebugSemanticsDumpOrder,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _SemanticsNode_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsNode).toStringShort();
}

Object? _SemanticsNode_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsNode).toDiagnosticsNode(
    childOrder: values["childOrder"] as api.DebugSemanticsDumpOrder,
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _SemanticsNode_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsNode).debugDescribeChildren(
    childOrder: values["childOrder"] as api.DebugSemanticsDumpOrder,
  );
}

Object? _SemanticsNode_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsNode).debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _SemanticsNode_visitChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsNode).visitChildren(
    values["visitor"] as bool Function(api.SemanticsNode node),
  );
  return null;
}

Object? _SemanticsNode_isTagged(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsNode).isTagged(
    values["tag"] as api.SemanticsTag,
  );
}

Object? _SemanticsNode_hasFlag(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsNode).hasFlag(
    values["flag"] as api1.SemanticsFlag,
  );
}

Object? _SemanticsNode_updateWith(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsNode).updateWith(
    childrenInInversePaintOrder:
        values["childrenInInversePaintOrder"] as List<api.SemanticsNode>?,
    config: values["config"] as api.SemanticsConfiguration?,
  );
  return null;
}

Object? _SemanticsNode_getSemanticsData(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsNode).getSemanticsData();
}

Object? _SemanticsNode_sendEvent(Object receiver, Map<String, Object?> values) {
  (receiver as api.SemanticsNode).sendEvent(
    values["event"] as api.SemanticsEvent,
  );
  return null;
}

Object? _SemanticsNode_debugListChildrenInOrder(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsNode).debugListChildrenInOrder(
    values["childOrder"] as api.DebugSemanticsDumpOrder,
  );
}

Object? _SemanticsNode_super_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsNodeProxy)._flaxSuper_toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _SemanticsNode_super_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsNodeProxy)._flaxSuper_toStringDeep(
    childOrder: values["childOrder"] as api.DebugSemanticsDumpOrder,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _SemanticsNode_super_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsNodeProxy)._flaxSuper_toDiagnosticsNode(
    childOrder: values["childOrder"] as api.DebugSemanticsDumpOrder,
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _SemanticsNode_super_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsNodeProxy)._flaxSuper_debugDescribeChildren(
    childOrder: values["childOrder"] as api.DebugSemanticsDumpOrder,
  );
}

Object? _SemanticsNode_super_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuper_debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _SemanticsNode_super_visitChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuper_visitChildren(
    values["visitor"] as bool Function(api.SemanticsNode node),
  );
  return null;
}

Object? _SemanticsNode_super_isTagged(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsNodeProxy)._flaxSuper_isTagged(
    values["tag"] as api.SemanticsTag,
  );
}

Object? _SemanticsNode_super_hasFlag(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsNodeProxy)._flaxSuper_hasFlag(
    values["flag"] as api1.SemanticsFlag,
  );
}

Object? _SemanticsNode_super_updateWith(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuper_updateWith(
    childrenInInversePaintOrder:
        values["childrenInInversePaintOrder"] as List<api.SemanticsNode>?,
    config: values["config"] as api.SemanticsConfiguration?,
  );
  return null;
}

Object? _SemanticsNode_super_getSemanticsData(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsNodeProxy)._flaxSuper_getSemanticsData();
}

Object? _SemanticsNode_super_sendEvent(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuper_sendEvent(
    values["event"] as api.SemanticsEvent,
  );
  return null;
}

Object? _SemanticsNode_super_debugListChildrenInOrder(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsNodeProxy)._flaxSuper_debugListChildrenInOrder(
    values["childOrder"] as api.DebugSemanticsDumpOrder,
  );
}

Object? _SemanticsNode_super_get_key(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_key;
Object? _SemanticsNode_super_get_id(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_id;
Object? _SemanticsNode_super_get_transform(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_transform;
Object? _SemanticsNode_super_get_rect(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_rect;
Object? _SemanticsNode_super_get_parentSemanticsClipRect(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_parentSemanticsClipRect;
Object? _SemanticsNode_super_get_parentPaintClipRect(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_parentPaintClipRect;
Object? _SemanticsNode_super_get_indexInParent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_indexInParent;
Object? _SemanticsNode_super_get_isInvisible(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_isInvisible;
Object? _SemanticsNode_super_get_isMergedIntoParent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_isMergedIntoParent;
Object? _SemanticsNode_super_get_areUserActionsBlocked(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_areUserActionsBlocked;
Object? _SemanticsNode_super_get_isPartOfNodeMerging(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_isPartOfNodeMerging;
Object? _SemanticsNode_super_get_mergeAllDescendantsIntoThisNode(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)
    ._flaxSuperGet_mergeAllDescendantsIntoThisNode;
Object? _SemanticsNode_super_get_hasChildren(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_hasChildren;
Object? _SemanticsNode_super_get_childrenCount(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_childrenCount;
Object? _SemanticsNode_super_get_childrenCountInTraversalOrder(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)
    ._flaxSuperGet_childrenCountInTraversalOrder;
Object? _SemanticsNode_super_get_owner(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_owner;
Object? _SemanticsNode_super_get_attached(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_attached;
Object? _SemanticsNode_super_get_parent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_parent;
Object? _SemanticsNode_super_get_traversalParent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_traversalParent;
Object? _SemanticsNode_super_get_depth(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_depth;
Object? _SemanticsNode_super_get_tags(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_tags;
Object? _SemanticsNode_super_get_flagsCollection(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_flagsCollection;
Object? _SemanticsNode_super_get_hintOverrides(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_hintOverrides;
Object? _SemanticsNode_super_get_sortKey(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_sortKey;
Object? _SemanticsNode_super_get_isMultiline(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsNodeProxy)._flaxSuperGet_isMultiline;
Object? _SemanticsNode_super_set_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuperSet_transform(
    values["value"] as api5.Matrix4?,
  );
  return null;
}

Object? _SemanticsNode_super_set_rect(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuperSet_rect(
    values["value"] as api1.Rect,
  );
  return null;
}

Object? _SemanticsNode_super_set_parentSemanticsClipRect(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuperSet_parentSemanticsClipRect(
    values["value"] as api1.Rect?,
  );
  return null;
}

Object? _SemanticsNode_super_set_parentPaintClipRect(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuperSet_parentPaintClipRect(
    values["value"] as api1.Rect?,
  );
  return null;
}

Object? _SemanticsNode_super_set_indexInParent(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuperSet_indexInParent(
    values["value"] as int?,
  );
  return null;
}

Object? _SemanticsNode_super_set_isMergedIntoParent(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuperSet_isMergedIntoParent(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsNode_super_set_areUserActionsBlocked(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuperSet_areUserActionsBlocked(
    values["value"] as bool,
  );
  return null;
}

Object? _SemanticsNode_super_set_traversalParent(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuperSet_traversalParent(
    values["value"] as api.SemanticsNode?,
  );
  return null;
}

Object? _SemanticsNode_super_set_tags(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsNodeProxy)._flaxSuperSet_tags(
    values["value"] as Set<api.SemanticsTag>?,
  );
  return null;
}

Object _createSemanticsNode(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SemanticsNode(
        key: values["key"] as api2.Key?,
        showOnScreen: values["showOnScreen"] as void Function()?,
      );
    case "root":
      return api.SemanticsNode.root(
        key: values["key"] as api2.Key?,
        showOnScreen: values["showOnScreen"] as void Function()?,
        owner: values["owner"] as api.SemanticsOwner,
      );
    case '@implementation':
      return _SemanticsNodeProxy(
        values['@peer'] as FlaxProxyPeer,
        key: values["key"] as api2.Key?,
        showOnScreen: values["showOnScreen"] as void Function()?,
      );
    case "@implementation:root":
      return _SemanticsNodeProxy.root(
        values['@peer'] as FlaxProxyPeer,
        key: values["key"] as api2.Key?,
        showOnScreen: values["showOnScreen"] as void Function()?,
        owner: values["owner"] as api.SemanticsOwner,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsOwner(Object value) => value is api.SemanticsOwner;
Object? _SemanticsOwner_hasListeners(Object value) =>
    (value as api.SemanticsOwner).hasListeners;
Object? _SemanticsOwner_onSemanticsUpdate(Object value) =>
    (value as api.SemanticsOwner).onSemanticsUpdate;
Object? _SemanticsOwner_rootSemanticsNode(Object value) =>
    (value as api.SemanticsOwner).rootSemanticsNode;
Object? _SemanticsOwner_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsOwner).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _SemanticsOwner_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsOwner).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _SemanticsOwner_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.SemanticsOwner).dispose();
  return null;
}

Object? _SemanticsOwner_getSemanticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsOwner).getSemanticsNode(values["id"] as int);
}

Object? _SemanticsOwner_sendSemanticsUpdate(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsOwner).sendSemanticsUpdate();
  return null;
}

Object? _SemanticsOwner_performAction(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsOwner).performAction(
    values["id"] as int,
    values["action"] as api1.SemanticsAction,
    values["args"],
  );
  return null;
}

Object? _SemanticsOwner_performActionAt(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsOwner).performActionAt(
    values["position"] as api1.Offset,
    values["action"] as api1.SemanticsAction,
    values["args"],
  );
  return null;
}

Object? _SemanticsOwner_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsOwner).toString();
}

Object? _SemanticsOwner_super_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsOwnerProxy)._flaxSuper_addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _SemanticsOwner_super_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsOwnerProxy)._flaxSuper_removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _SemanticsOwner_super_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsOwnerProxy)._flaxSuper_dispose();
  return null;
}

Object? _SemanticsOwner_super_getSemanticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsOwnerProxy)._flaxSuper_getSemanticsNode(
    values["id"] as int,
  );
}

Object? _SemanticsOwner_super_sendSemanticsUpdate(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsOwnerProxy)._flaxSuper_sendSemanticsUpdate();
  return null;
}

Object? _SemanticsOwner_super_performAction(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsOwnerProxy)._flaxSuper_performAction(
    values["id"] as int,
    values["action"] as api1.SemanticsAction,
    values["args"],
  );
  return null;
}

Object? _SemanticsOwner_super_performActionAt(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsOwnerProxy)._flaxSuper_performActionAt(
    values["position"] as api1.Offset,
    values["action"] as api1.SemanticsAction,
    values["args"],
  );
  return null;
}

Object? _SemanticsOwner_super_get_onSemanticsUpdate(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsOwnerProxy)._flaxSuperGet_onSemanticsUpdate;
Object? _SemanticsOwner_super_get_rootSemanticsNode(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsOwnerProxy)._flaxSuperGet_rootSemanticsNode;
Object? _SemanticsOwner_super_get_hasListeners(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsOwnerProxy)._flaxSuperGet_hasListeners;
Object _createSemanticsOwner(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SemanticsOwner(
        onSemanticsUpdate:
            values["onSemanticsUpdate"]
                as void Function(api1.SemanticsUpdate update),
      );
    case '@implementation':
      return _SemanticsOwnerProxy(
        values['@peer'] as FlaxProxyPeer,
        onSemanticsUpdate:
            values["onSemanticsUpdate"]
                as void Function(api1.SemanticsUpdate update),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsProperties(Object value) => value is api.SemanticsProperties;
Object? _SemanticsProperties_enabled(Object value) =>
    (value as api.SemanticsProperties).enabled;
Object? _SemanticsProperties_checked(Object value) =>
    (value as api.SemanticsProperties).checked;
Object? _SemanticsProperties_mixed(Object value) =>
    (value as api.SemanticsProperties).mixed;
Object? _SemanticsProperties_expanded(Object value) =>
    (value as api.SemanticsProperties).expanded;
Object? _SemanticsProperties_toggled(Object value) =>
    (value as api.SemanticsProperties).toggled;
Object? _SemanticsProperties_selected(Object value) =>
    (value as api.SemanticsProperties).selected;
Object? _SemanticsProperties_button(Object value) =>
    (value as api.SemanticsProperties).button;
Object? _SemanticsProperties_link(Object value) =>
    (value as api.SemanticsProperties).link;
Object? _SemanticsProperties_header(Object value) =>
    (value as api.SemanticsProperties).header;
Object? _SemanticsProperties_textField(Object value) =>
    (value as api.SemanticsProperties).textField;
Object? _SemanticsProperties_slider(Object value) =>
    (value as api.SemanticsProperties).slider;
Object? _SemanticsProperties_keyboardKey(Object value) =>
    (value as api.SemanticsProperties).keyboardKey;
Object? _SemanticsProperties_readOnly(Object value) =>
    (value as api.SemanticsProperties).readOnly;
Object? _SemanticsProperties_focusable(Object value) =>
    (value as api.SemanticsProperties).focusable;
Object? _SemanticsProperties_focused(Object value) =>
    (value as api.SemanticsProperties).focused;
Object? _SemanticsProperties_accessibilityFocusBlockType(Object value) =>
    (value as api.SemanticsProperties).accessibilityFocusBlockType;
Object? _SemanticsProperties_inMutuallyExclusiveGroup(Object value) =>
    (value as api.SemanticsProperties).inMutuallyExclusiveGroup;
Object? _SemanticsProperties_hidden(Object value) =>
    (value as api.SemanticsProperties).hidden;
Object? _SemanticsProperties_obscured(Object value) =>
    (value as api.SemanticsProperties).obscured;
Object? _SemanticsProperties_multiline(Object value) =>
    (value as api.SemanticsProperties).multiline;
Object? _SemanticsProperties_scopesRoute(Object value) =>
    (value as api.SemanticsProperties).scopesRoute;
Object? _SemanticsProperties_namesRoute(Object value) =>
    (value as api.SemanticsProperties).namesRoute;
Object? _SemanticsProperties_image(Object value) =>
    (value as api.SemanticsProperties).image;
Object? _SemanticsProperties_liveRegion(Object value) =>
    (value as api.SemanticsProperties).liveRegion;
Object? _SemanticsProperties_isRequired(Object value) =>
    (value as api.SemanticsProperties).isRequired;
Object? _SemanticsProperties_maxValueLength(Object value) =>
    (value as api.SemanticsProperties).maxValueLength;
Object? _SemanticsProperties_currentValueLength(Object value) =>
    (value as api.SemanticsProperties).currentValueLength;
Object? _SemanticsProperties_identifier(Object value) =>
    (value as api.SemanticsProperties).identifier;
Object? _SemanticsProperties_traversalParentIdentifier(Object value) =>
    (value as api.SemanticsProperties).traversalParentIdentifier;
Object? _SemanticsProperties_traversalChildIdentifier(Object value) =>
    (value as api.SemanticsProperties).traversalChildIdentifier;
Object? _SemanticsProperties_label(Object value) =>
    (value as api.SemanticsProperties).label;
Object? _SemanticsProperties_attributedLabel(Object value) =>
    (value as api.SemanticsProperties).attributedLabel;
Object? _SemanticsProperties_value(Object value) =>
    (value as api.SemanticsProperties).value;
Object? _SemanticsProperties_attributedValue(Object value) =>
    (value as api.SemanticsProperties).attributedValue;
Object? _SemanticsProperties_increasedValue(Object value) =>
    (value as api.SemanticsProperties).increasedValue;
Object? _SemanticsProperties_attributedIncreasedValue(Object value) =>
    (value as api.SemanticsProperties).attributedIncreasedValue;
Object? _SemanticsProperties_decreasedValue(Object value) =>
    (value as api.SemanticsProperties).decreasedValue;
Object? _SemanticsProperties_attributedDecreasedValue(Object value) =>
    (value as api.SemanticsProperties).attributedDecreasedValue;
Object? _SemanticsProperties_hint(Object value) =>
    (value as api.SemanticsProperties).hint;
Object? _SemanticsProperties_attributedHint(Object value) =>
    (value as api.SemanticsProperties).attributedHint;
Object? _SemanticsProperties_tooltip(Object value) =>
    (value as api.SemanticsProperties).tooltip;
Object? _SemanticsProperties_headingLevel(Object value) =>
    (value as api.SemanticsProperties).headingLevel;
Object? _SemanticsProperties_hintOverrides(Object value) =>
    (value as api.SemanticsProperties).hintOverrides;
Object? _SemanticsProperties_textDirection(Object value) =>
    (value as api.SemanticsProperties).textDirection;
Object? _SemanticsProperties_sortKey(Object value) =>
    (value as api.SemanticsProperties).sortKey;
Object? _SemanticsProperties_tagForChildren(Object value) =>
    (value as api.SemanticsProperties).tagForChildren;
Object? _SemanticsProperties_linkUrl(Object value) =>
    (value as api.SemanticsProperties).linkUrl;
Object? _SemanticsProperties_onTap(Object value) =>
    (value as api.SemanticsProperties).onTap;
Object? _SemanticsProperties_onLongPress(Object value) =>
    (value as api.SemanticsProperties).onLongPress;
Object? _SemanticsProperties_onScrollLeft(Object value) =>
    (value as api.SemanticsProperties).onScrollLeft;
Object? _SemanticsProperties_onScrollRight(Object value) =>
    (value as api.SemanticsProperties).onScrollRight;
Object? _SemanticsProperties_onScrollUp(Object value) =>
    (value as api.SemanticsProperties).onScrollUp;
Object? _SemanticsProperties_onScrollDown(Object value) =>
    (value as api.SemanticsProperties).onScrollDown;
Object? _SemanticsProperties_onIncrease(Object value) =>
    (value as api.SemanticsProperties).onIncrease;
Object? _SemanticsProperties_onDecrease(Object value) =>
    (value as api.SemanticsProperties).onDecrease;
Object? _SemanticsProperties_onCopy(Object value) =>
    (value as api.SemanticsProperties).onCopy;
Object? _SemanticsProperties_onCut(Object value) =>
    (value as api.SemanticsProperties).onCut;
Object? _SemanticsProperties_onPaste(Object value) =>
    (value as api.SemanticsProperties).onPaste;
Object? _SemanticsProperties_onMoveCursorForwardByCharacter(Object value) =>
    (value as api.SemanticsProperties).onMoveCursorForwardByCharacter;
Object? _SemanticsProperties_onMoveCursorBackwardByCharacter(Object value) =>
    (value as api.SemanticsProperties).onMoveCursorBackwardByCharacter;
Object? _SemanticsProperties_onMoveCursorForwardByWord(Object value) =>
    (value as api.SemanticsProperties).onMoveCursorForwardByWord;
Object? _SemanticsProperties_onMoveCursorBackwardByWord(Object value) =>
    (value as api.SemanticsProperties).onMoveCursorBackwardByWord;
Object? _SemanticsProperties_onSetSelection(Object value) =>
    (value as api.SemanticsProperties).onSetSelection;
Object? _SemanticsProperties_onSetText(Object value) =>
    (value as api.SemanticsProperties).onSetText;
Object? _SemanticsProperties_onDidGainAccessibilityFocus(Object value) =>
    (value as api.SemanticsProperties).onDidGainAccessibilityFocus;
Object? _SemanticsProperties_onDidLoseAccessibilityFocus(Object value) =>
    (value as api.SemanticsProperties).onDidLoseAccessibilityFocus;
Object? _SemanticsProperties_onFocus(Object value) =>
    (value as api.SemanticsProperties).onFocus;
Object? _SemanticsProperties_onDismiss(Object value) =>
    (value as api.SemanticsProperties).onDismiss;
Object? _SemanticsProperties_onExpand(Object value) =>
    (value as api.SemanticsProperties).onExpand;
Object? _SemanticsProperties_onCollapse(Object value) =>
    (value as api.SemanticsProperties).onCollapse;
Object? _SemanticsProperties_customSemanticsActions(Object value) =>
    (value as api.SemanticsProperties).customSemanticsActions;
Object? _SemanticsProperties_role(Object value) =>
    (value as api.SemanticsProperties).role;
Object? _SemanticsProperties_controlsNodes(Object value) =>
    (value as api.SemanticsProperties).controlsNodes;
Object? _SemanticsProperties_validationResult(Object value) =>
    (value as api.SemanticsProperties).validationResult;
Object? _SemanticsProperties_hitTestBehavior(Object value) =>
    (value as api.SemanticsProperties).hitTestBehavior;
Object? _SemanticsProperties_inputType(Object value) =>
    (value as api.SemanticsProperties).inputType;
Object? _SemanticsProperties_maxValue(Object value) =>
    (value as api.SemanticsProperties).maxValue;
Object? _SemanticsProperties_minValue(Object value) =>
    (value as api.SemanticsProperties).minValue;
Object? _SemanticsProperties_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsProperties).toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _SemanticsProperties_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsProperties).toStringDeep(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _SemanticsProperties_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsProperties).toStringShort();
}

Object? _SemanticsProperties_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsProperties).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _SemanticsProperties_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsProperties).debugDescribeChildren();
}

Object? _SemanticsProperties_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsProperties).debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _SemanticsProperties_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsProperties).toString(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _SemanticsProperties_super_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsPropertiesProxy)._flaxSuper_toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _SemanticsProperties_super_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsPropertiesProxy)._flaxSuper_toStringDeep(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _SemanticsProperties_super_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsPropertiesProxy)._flaxSuper_toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _SemanticsProperties_super_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsPropertiesProxy)
      ._flaxSuper_debugDescribeChildren();
}

Object? _SemanticsProperties_super_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SemanticsPropertiesProxy)._flaxSuper_debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _SemanticsProperties_super_get_enabled(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_enabled;
Object? _SemanticsProperties_super_get_checked(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_checked;
Object? _SemanticsProperties_super_get_mixed(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_mixed;
Object? _SemanticsProperties_super_get_expanded(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_expanded;
Object? _SemanticsProperties_super_get_toggled(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_toggled;
Object? _SemanticsProperties_super_get_selected(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_selected;
Object? _SemanticsProperties_super_get_button(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_button;
Object? _SemanticsProperties_super_get_link(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_link;
Object? _SemanticsProperties_super_get_header(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_header;
Object? _SemanticsProperties_super_get_textField(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_textField;
Object? _SemanticsProperties_super_get_slider(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_slider;
Object? _SemanticsProperties_super_get_keyboardKey(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_keyboardKey;
Object? _SemanticsProperties_super_get_readOnly(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_readOnly;
Object? _SemanticsProperties_super_get_focusable(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_focusable;
Object? _SemanticsProperties_super_get_focused(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_focused;
Object? _SemanticsProperties_super_get_accessibilityFocusBlockType(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)
    ._flaxSuperGet_accessibilityFocusBlockType;
Object? _SemanticsProperties_super_get_inMutuallyExclusiveGroup(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)
    ._flaxSuperGet_inMutuallyExclusiveGroup;
Object? _SemanticsProperties_super_get_hidden(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_hidden;
Object? _SemanticsProperties_super_get_obscured(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_obscured;
Object? _SemanticsProperties_super_get_multiline(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_multiline;
Object? _SemanticsProperties_super_get_scopesRoute(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_scopesRoute;
Object? _SemanticsProperties_super_get_namesRoute(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_namesRoute;
Object? _SemanticsProperties_super_get_image(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_image;
Object? _SemanticsProperties_super_get_liveRegion(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_liveRegion;
Object? _SemanticsProperties_super_get_identifier(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_identifier;
Object? _SemanticsProperties_super_get_label(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_label;
Object? _SemanticsProperties_super_get_attributedLabel(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_attributedLabel;
Object? _SemanticsProperties_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_value;
Object? _SemanticsProperties_super_get_attributedValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_attributedValue;
Object? _SemanticsProperties_super_get_increasedValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_increasedValue;
Object? _SemanticsProperties_super_get_attributedIncreasedValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)
    ._flaxSuperGet_attributedIncreasedValue;
Object? _SemanticsProperties_super_get_decreasedValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_decreasedValue;
Object? _SemanticsProperties_super_get_attributedDecreasedValue(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)
    ._flaxSuperGet_attributedDecreasedValue;
Object? _SemanticsProperties_super_get_hint(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_hint;
Object? _SemanticsProperties_super_get_attributedHint(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_attributedHint;
Object? _SemanticsProperties_super_get_tooltip(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_tooltip;
Object? _SemanticsProperties_super_get_headingLevel(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_headingLevel;
Object? _SemanticsProperties_super_get_hintOverrides(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_hintOverrides;
Object? _SemanticsProperties_super_get_sortKey(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_sortKey;
Object? _SemanticsProperties_super_get_tagForChildren(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_tagForChildren;
Object? _SemanticsProperties_super_get_customSemanticsActions(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)
    ._flaxSuperGet_customSemanticsActions;
Object? _SemanticsProperties_super_get_role(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_role;
Object? _SemanticsProperties_super_get_hitTestBehavior(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_hitTestBehavior;
Object? _SemanticsProperties_super_get_inputType(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsPropertiesProxy)._flaxSuperGet_inputType;
Object _createSemanticsProperties(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SemanticsProperties(
        enabled: values["enabled"] as bool?,
        checked: values["checked"] as bool?,
        mixed: values["mixed"] as bool?,
        expanded: values["expanded"] as bool?,
        selected: values["selected"] as bool?,
        toggled: values["toggled"] as bool?,
        button: values["button"] as bool?,
        link: values["link"] as bool?,
        linkUrl: values["linkUrl"] as api4.Uri?,
        header: values["header"] as bool?,
        headingLevel: values["headingLevel"] as int?,
        textField: values["textField"] as bool?,
        slider: values["slider"] as bool?,
        keyboardKey: values["keyboardKey"] as bool?,
        readOnly: values["readOnly"] as bool?,
        focusable: values["focusable"] as bool?,
        focused: values["focused"] as bool?,
        accessibilityFocusBlockType:
            values["accessibilityFocusBlockType"]
                as api.AccessibilityFocusBlockType?,
        inMutuallyExclusiveGroup: values["inMutuallyExclusiveGroup"] as bool?,
        hidden: values["hidden"] as bool?,
        obscured: values["obscured"] as bool?,
        multiline: values["multiline"] as bool?,
        scopesRoute: values["scopesRoute"] as bool?,
        namesRoute: values["namesRoute"] as bool?,
        image: values["image"] as bool?,
        liveRegion: values["liveRegion"] as bool?,
        isRequired: values["isRequired"] as bool?,
        maxValueLength: values["maxValueLength"] as int?,
        currentValueLength: values["currentValueLength"] as int?,
        identifier: values["identifier"] as String?,
        traversalParentIdentifier: values["traversalParentIdentifier"],
        traversalChildIdentifier: values["traversalChildIdentifier"],
        label: values["label"] as String?,
        attributedLabel: values["attributedLabel"] as api.AttributedString?,
        value: values["value"] as String?,
        attributedValue: values["attributedValue"] as api.AttributedString?,
        increasedValue: values["increasedValue"] as String?,
        attributedIncreasedValue:
            values["attributedIncreasedValue"] as api.AttributedString?,
        decreasedValue: values["decreasedValue"] as String?,
        attributedDecreasedValue:
            values["attributedDecreasedValue"] as api.AttributedString?,
        hint: values["hint"] as String?,
        tooltip: values["tooltip"] as String?,
        attributedHint: values["attributedHint"] as api.AttributedString?,
        hintOverrides: values["hintOverrides"] as api.SemanticsHintOverrides?,
        textDirection: values["textDirection"] as api1.TextDirection?,
        sortKey: values["sortKey"] as api.SemanticsSortKey?,
        tagForChildren: values["tagForChildren"] as api.SemanticsTag?,
        role: values["role"] as api1.SemanticsRole?,
        controlsNodes: values["controlsNodes"] as Set<String>?,
        inputType: values["inputType"] as api1.SemanticsInputType?,
        validationResult:
            values["validationResult"] as api1.SemanticsValidationResult,
        hitTestBehavior:
            values["hitTestBehavior"] as api1.SemanticsHitTestBehavior?,
        onTap: values["onTap"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onScrollLeft: values["onScrollLeft"] as void Function()?,
        onScrollRight: values["onScrollRight"] as void Function()?,
        onScrollUp: values["onScrollUp"] as void Function()?,
        onScrollDown: values["onScrollDown"] as void Function()?,
        onIncrease: values["onIncrease"] as void Function()?,
        onDecrease: values["onDecrease"] as void Function()?,
        onCopy: values["onCopy"] as void Function()?,
        onCut: values["onCut"] as void Function()?,
        onPaste: values["onPaste"] as void Function()?,
        onMoveCursorForwardByCharacter:
            values["onMoveCursorForwardByCharacter"]
                as void Function(bool extendSelection)?,
        onMoveCursorBackwardByCharacter:
            values["onMoveCursorBackwardByCharacter"]
                as void Function(bool extendSelection)?,
        onMoveCursorForwardByWord:
            values["onMoveCursorForwardByWord"]
                as void Function(bool extendSelection)?,
        onMoveCursorBackwardByWord:
            values["onMoveCursorBackwardByWord"]
                as void Function(bool extendSelection)?,
        onSetSelection:
            values["onSetSelection"]
                as void Function(api6.TextSelection selection)?,
        onSetText: values["onSetText"] as void Function(String text)?,
        onDidGainAccessibilityFocus:
            values["onDidGainAccessibilityFocus"] as void Function()?,
        onDidLoseAccessibilityFocus:
            values["onDidLoseAccessibilityFocus"] as void Function()?,
        onFocus: values["onFocus"] as void Function()?,
        onDismiss: values["onDismiss"] as void Function()?,
        onExpand: values["onExpand"] as void Function()?,
        onCollapse: values["onCollapse"] as void Function()?,
        customSemanticsActions:
            values["customSemanticsActions"]
                as Map<api.CustomSemanticsAction, void Function()>?,
        minValue: values["minValue"] as String?,
        maxValue: values["maxValue"] as String?,
      );
    case '@implementation':
      return _SemanticsPropertiesProxy(
        values['@peer'] as FlaxProxyPeer,
        enabled: values["enabled"] as bool?,
        checked: values["checked"] as bool?,
        mixed: values["mixed"] as bool?,
        expanded: values["expanded"] as bool?,
        selected: values["selected"] as bool?,
        toggled: values["toggled"] as bool?,
        button: values["button"] as bool?,
        link: values["link"] as bool?,
        linkUrl: values["linkUrl"] as api4.Uri?,
        header: values["header"] as bool?,
        headingLevel: values["headingLevel"] as int?,
        textField: values["textField"] as bool?,
        slider: values["slider"] as bool?,
        keyboardKey: values["keyboardKey"] as bool?,
        readOnly: values["readOnly"] as bool?,
        focusable: values["focusable"] as bool?,
        focused: values["focused"] as bool?,
        accessibilityFocusBlockType:
            values["accessibilityFocusBlockType"]
                as api.AccessibilityFocusBlockType?,
        inMutuallyExclusiveGroup: values["inMutuallyExclusiveGroup"] as bool?,
        hidden: values["hidden"] as bool?,
        obscured: values["obscured"] as bool?,
        multiline: values["multiline"] as bool?,
        scopesRoute: values["scopesRoute"] as bool?,
        namesRoute: values["namesRoute"] as bool?,
        image: values["image"] as bool?,
        liveRegion: values["liveRegion"] as bool?,
        isRequired: values["isRequired"] as bool?,
        maxValueLength: values["maxValueLength"] as int?,
        currentValueLength: values["currentValueLength"] as int?,
        identifier: values["identifier"] as String?,
        traversalParentIdentifier: values["traversalParentIdentifier"],
        traversalChildIdentifier: values["traversalChildIdentifier"],
        label: values["label"] as String?,
        attributedLabel: values["attributedLabel"] as api.AttributedString?,
        value: values["value"] as String?,
        attributedValue: values["attributedValue"] as api.AttributedString?,
        increasedValue: values["increasedValue"] as String?,
        attributedIncreasedValue:
            values["attributedIncreasedValue"] as api.AttributedString?,
        decreasedValue: values["decreasedValue"] as String?,
        attributedDecreasedValue:
            values["attributedDecreasedValue"] as api.AttributedString?,
        hint: values["hint"] as String?,
        tooltip: values["tooltip"] as String?,
        attributedHint: values["attributedHint"] as api.AttributedString?,
        hintOverrides: values["hintOverrides"] as api.SemanticsHintOverrides?,
        textDirection: values["textDirection"] as api1.TextDirection?,
        sortKey: values["sortKey"] as api.SemanticsSortKey?,
        tagForChildren: values["tagForChildren"] as api.SemanticsTag?,
        role: values["role"] as api1.SemanticsRole?,
        controlsNodes: values["controlsNodes"] as Set<String>?,
        inputType: values["inputType"] as api1.SemanticsInputType?,
        validationResult:
            values["validationResult"] as api1.SemanticsValidationResult,
        hitTestBehavior:
            values["hitTestBehavior"] as api1.SemanticsHitTestBehavior?,
        onTap: values["onTap"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        onScrollLeft: values["onScrollLeft"] as void Function()?,
        onScrollRight: values["onScrollRight"] as void Function()?,
        onScrollUp: values["onScrollUp"] as void Function()?,
        onScrollDown: values["onScrollDown"] as void Function()?,
        onIncrease: values["onIncrease"] as void Function()?,
        onDecrease: values["onDecrease"] as void Function()?,
        onCopy: values["onCopy"] as void Function()?,
        onCut: values["onCut"] as void Function()?,
        onPaste: values["onPaste"] as void Function()?,
        onMoveCursorForwardByCharacter:
            values["onMoveCursorForwardByCharacter"]
                as void Function(bool extendSelection)?,
        onMoveCursorBackwardByCharacter:
            values["onMoveCursorBackwardByCharacter"]
                as void Function(bool extendSelection)?,
        onMoveCursorForwardByWord:
            values["onMoveCursorForwardByWord"]
                as void Function(bool extendSelection)?,
        onMoveCursorBackwardByWord:
            values["onMoveCursorBackwardByWord"]
                as void Function(bool extendSelection)?,
        onSetSelection:
            values["onSetSelection"]
                as void Function(api6.TextSelection selection)?,
        onSetText: values["onSetText"] as void Function(String text)?,
        onDidGainAccessibilityFocus:
            values["onDidGainAccessibilityFocus"] as void Function()?,
        onDidLoseAccessibilityFocus:
            values["onDidLoseAccessibilityFocus"] as void Function()?,
        onFocus: values["onFocus"] as void Function()?,
        onDismiss: values["onDismiss"] as void Function()?,
        onExpand: values["onExpand"] as void Function()?,
        onCollapse: values["onCollapse"] as void Function()?,
        customSemanticsActions:
            values["customSemanticsActions"]
                as Map<api.CustomSemanticsAction, void Function()>?,
        minValue: values["minValue"] as String?,
        maxValue: values["maxValue"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsService(Object value) => value is api.SemanticsService;
Object? _SemanticsService_announce(Map<String, Object?> values) {
  return api.SemanticsService.announce(
    values["message"] as String,
    values["textDirection"] as api1.TextDirection,
    assertiveness: values["assertiveness"] as api.Assertiveness,
  );
}

Object? _SemanticsService_sendAnnouncement(Map<String, Object?> values) {
  return api.SemanticsService.sendAnnouncement(
    values["view"] as api1.FlutterView,
    values["message"] as String,
    values["textDirection"] as api1.TextDirection,
    assertiveness: values["assertiveness"] as api.Assertiveness,
  );
}

Object? _SemanticsService_tooltip(Map<String, Object?> values) {
  return api.SemanticsService.tooltip(values["message"] as String);
}

Object _createSemanticsService(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isSemanticsSortKey(Object value) => value is api.SemanticsSortKey;
Object? _SemanticsSortKey_name(Object value) =>
    (value as api.SemanticsSortKey).name;
Object? _SemanticsSortKey_compareTo(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsSortKey).compareTo(
    values["other"] as api.SemanticsSortKey,
  );
}

Object? _SemanticsSortKey_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsSortKey).toStringShort();
}

Object? _SemanticsSortKey_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsSortKey).toString(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _SemanticsSortKey_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsSortKey).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _SemanticsSortKey_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsSortKey).debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _SemanticsSortKey_doCompare(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsSortKey).doCompare(
    values["other"] as api.SemanticsSortKey,
  );
}

Object? _SemanticsSortKey_super_compareTo(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsSortKeyProxy)._flaxSuper_compareTo(
    values["other"] as api.SemanticsSortKey,
  );
}

Object _createSemanticsSortKey(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _SemanticsSortKeyProxy(
        values['@peer'] as FlaxProxyPeer,
        name: values["name"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsTag(Object value) => value is api.SemanticsTag;
Object? _SemanticsTag_name(Object value) => (value as api.SemanticsTag).name;
Object? _SemanticsTag_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsTag).toString();
}

Object? _SemanticsTag_super_get_name(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsTagProxy)._flaxSuperGet_name;
Object _createSemanticsTag(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SemanticsTag(values["name"] as String);
    case '@implementation':
      return _SemanticsTagProxy(
        values['@peer'] as FlaxProxyPeer,
        values["name"] as String,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTapSemanticEvent(Object value) => value is api.TapSemanticEvent;
Object _createTapSemanticEvent(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TapSemanticEvent();
    case '@implementation':
      return _TapSemanticEventProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTooltipSemanticsEvent(Object value) =>
    value is api.TooltipSemanticsEvent;
Object? _TooltipSemanticsEvent_message(Object value) =>
    (value as api.TooltipSemanticsEvent).message;
Object? _TooltipSemanticsEvent_super_get_message(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TooltipSemanticsEventProxy)._flaxSuperGet_message;
Object _createTooltipSemanticsEvent(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TooltipSemanticsEvent(values["message"] as String);
    case '@implementation':
      return _TooltipSemanticsEventProxy(
        values['@peer'] as FlaxProxyPeer,
        values["message"] as String,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

abstract interface class _FlaxProxyDispatch14 {
  FlaxProxyPeer get _flaxPeer;
  int? get _flaxSuperGet_scrollChildCount;
  int? get _flaxSuperGet_scrollIndex;
  int? get _flaxSuperGet_platformViewId;
  String get _flaxSuperGet_identifier;
  api1.SemanticsRole get _flaxSuperGet_role;
  String get _flaxSuperGet_label;
  api.AttributedString get _flaxSuperGet_attributedLabel;
  String get _flaxSuperGet_value;
  api.AttributedString get _flaxSuperGet_attributedValue;
  String get _flaxSuperGet_increasedValue;
  api.AttributedString get _flaxSuperGet_attributedIncreasedValue;
  String get _flaxSuperGet_decreasedValue;
  api.AttributedString get _flaxSuperGet_attributedDecreasedValue;
  String get _flaxSuperGet_hint;
  api.AttributedString get _flaxSuperGet_attributedHint;
  String get _flaxSuperGet_tooltip;
  int get _flaxSuperGet_headingLevel;
  api6.TextSelection? get _flaxSuperGet_textSelection;
  double? get _flaxSuperGet_scrollPosition;
  double? get _flaxSuperGet_scrollExtentMax;
  double? get _flaxSuperGet_scrollExtentMin;
  api1.SemanticsHitTestBehavior get _flaxSuperGet_hitTestBehavior;
  api1.SemanticsInputType get _flaxSuperGet_inputType;
}

int? _FlaxProxyDispatch14_get_scrollChildCount(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_scrollChildCount;
  final _flaxConvertedResult = _flaxResult.$2 as int?;
  return _flaxConvertedResult;
}

int? _FlaxProxyDispatch14_get_scrollIndex(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_scrollIndex;
  final _flaxConvertedResult = _flaxResult.$2 as int?;
  return _flaxConvertedResult;
}

int? _FlaxProxyDispatch14_get_platformViewId(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_platformViewId;
  final _flaxConvertedResult = _flaxResult.$2 as int?;
  return _flaxConvertedResult;
}

String _FlaxProxyDispatch14_get_identifier(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_identifier;
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

api1.SemanticsRole _FlaxProxyDispatch14_get_role(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_role;
  final _flaxConvertedResult = _flaxResult.$2 as api1.SemanticsRole;
  return _flaxConvertedResult;
}

String _FlaxProxyDispatch14_get_label(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_label;
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

api.AttributedString _FlaxProxyDispatch14_get_attributedLabel(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_attributedLabel;
  final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString;
  return _flaxConvertedResult;
}

String _FlaxProxyDispatch14_get_value(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_value;
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

api.AttributedString _FlaxProxyDispatch14_get_attributedValue(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_attributedValue;
  final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString;
  return _flaxConvertedResult;
}

String _FlaxProxyDispatch14_get_increasedValue(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_increasedValue;
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

api.AttributedString _FlaxProxyDispatch14_get_attributedIncreasedValue(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1)
    return _flaxReceiver._flaxSuperGet_attributedIncreasedValue;
  final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString;
  return _flaxConvertedResult;
}

String _FlaxProxyDispatch14_get_decreasedValue(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_decreasedValue;
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

api.AttributedString _FlaxProxyDispatch14_get_attributedDecreasedValue(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1)
    return _flaxReceiver._flaxSuperGet_attributedDecreasedValue;
  final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString;
  return _flaxConvertedResult;
}

String _FlaxProxyDispatch14_get_hint(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_hint;
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

api.AttributedString _FlaxProxyDispatch14_get_attributedHint(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_attributedHint;
  final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString;
  return _flaxConvertedResult;
}

String _FlaxProxyDispatch14_get_tooltip(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_tooltip;
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

int _FlaxProxyDispatch14_get_headingLevel(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_headingLevel;
  final _flaxConvertedResult = _flaxResult.$2 as int;
  return _flaxConvertedResult;
}

api6.TextSelection? _FlaxProxyDispatch14_get_textSelection(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_textSelection;
  final _flaxConvertedResult = _flaxResult.$2 as api6.TextSelection?;
  return _flaxConvertedResult;
}

double? _FlaxProxyDispatch14_get_scrollPosition(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_scrollPosition;
  final _flaxConvertedResult = _flaxResult.$2 as double?;
  return _flaxConvertedResult;
}

double? _FlaxProxyDispatch14_get_scrollExtentMax(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_scrollExtentMax;
  final _flaxConvertedResult = _flaxResult.$2 as double?;
  return _flaxConvertedResult;
}

double? _FlaxProxyDispatch14_get_scrollExtentMin(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_scrollExtentMin;
  final _flaxConvertedResult = _flaxResult.$2 as double?;
  return _flaxConvertedResult;
}

api1.SemanticsHitTestBehavior _FlaxProxyDispatch14_get_hitTestBehavior(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_hitTestBehavior;
  final _flaxConvertedResult = _flaxResult.$2 as api1.SemanticsHitTestBehavior;
  return _flaxConvertedResult;
}

api1.SemanticsInputType _FlaxProxyDispatch14_get_inputType(
  _FlaxProxyDispatch14 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_inputType;
  final _flaxConvertedResult = _flaxResult.$2 as api1.SemanticsInputType;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch15 {
  FlaxProxyPeer get _flaxPeer;
  int? get _flaxSuperGet_maxValueLength;
  int? get _flaxSuperGet_currentValueLength;
  Object? get _flaxSuperGet_traversalParentIdentifier;
  Object? get _flaxSuperGet_traversalChildIdentifier;
  api1.TextDirection? get _flaxSuperGet_textDirection;
  api4.Uri? get _flaxSuperGet_linkUrl;
  Set<String>? get _flaxSuperGet_controlsNodes;
  api1.SemanticsValidationResult get _flaxSuperGet_validationResult;
  String? get _flaxSuperGet_maxValue;
  String? get _flaxSuperGet_minValue;
}

int? _FlaxProxyDispatch15_get_maxValueLength(
  _FlaxProxyDispatch15 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_maxValueLength;
  final _flaxConvertedResult = _flaxResult.$2 as int?;
  return _flaxConvertedResult;
}

int? _FlaxProxyDispatch15_get_currentValueLength(
  _FlaxProxyDispatch15 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_currentValueLength;
  final _flaxConvertedResult = _flaxResult.$2 as int?;
  return _flaxConvertedResult;
}

Object? _FlaxProxyDispatch15_get_traversalParentIdentifier(
  _FlaxProxyDispatch15 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1)
    return _flaxReceiver._flaxSuperGet_traversalParentIdentifier;
  final _flaxConvertedResult = _flaxResult.$2;
  return _flaxConvertedResult;
}

Object? _FlaxProxyDispatch15_get_traversalChildIdentifier(
  _FlaxProxyDispatch15 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1)
    return _flaxReceiver._flaxSuperGet_traversalChildIdentifier;
  final _flaxConvertedResult = _flaxResult.$2;
  return _flaxConvertedResult;
}

api1.TextDirection? _FlaxProxyDispatch15_get_textDirection(
  _FlaxProxyDispatch15 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_textDirection;
  final _flaxConvertedResult = _flaxResult.$2 as api1.TextDirection?;
  return _flaxConvertedResult;
}

api4.Uri? _FlaxProxyDispatch15_get_linkUrl(
  _FlaxProxyDispatch15 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_linkUrl;
  final _flaxConvertedResult = _flaxResult.$2 as api4.Uri?;
  return _flaxConvertedResult;
}

Set<String>? _FlaxProxyDispatch15_get_controlsNodes(
  _FlaxProxyDispatch15 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_controlsNodes;
  final _flaxConvertedResult = _flaxResult.$2 as Set<String>?;
  return _flaxConvertedResult;
}

api1.SemanticsValidationResult _FlaxProxyDispatch15_get_validationResult(
  _FlaxProxyDispatch15 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_validationResult;
  final _flaxConvertedResult = _flaxResult.$2 as api1.SemanticsValidationResult;
  return _flaxConvertedResult;
}

String? _FlaxProxyDispatch15_get_maxValue(
  _FlaxProxyDispatch15 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_maxValue;
  final _flaxConvertedResult = _flaxResult.$2 as String?;
  return _flaxConvertedResult;
}

String? _FlaxProxyDispatch15_get_minValue(
  _FlaxProxyDispatch15 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_minValue;
  final _flaxConvertedResult = _flaxResult.$2 as String?;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch11 {
  FlaxProxyPeer get _flaxPeer;
  void Function()? get _flaxSuperGet_onTap;
  void Function()? get _flaxSuperGet_onLongPress;
  void Function()? get _flaxSuperGet_onScrollLeft;
  void Function()? get _flaxSuperGet_onDismiss;
  void Function()? get _flaxSuperGet_onScrollRight;
  void Function()? get _flaxSuperGet_onScrollUp;
  void Function()? get _flaxSuperGet_onScrollDown;
  void Function()? get _flaxSuperGet_onIncrease;
  void Function()? get _flaxSuperGet_onDecrease;
  void Function()? get _flaxSuperGet_onCopy;
  void Function()? get _flaxSuperGet_onCut;
  void Function()? get _flaxSuperGet_onPaste;
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorForwardByCharacter;
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorBackwardByCharacter;
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorForwardByWord;
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorBackwardByWord;
  void Function(api6.TextSelection selection)? get _flaxSuperGet_onSetSelection;
  void Function(String text)? get _flaxSuperGet_onSetText;
  void Function()? get _flaxSuperGet_onDidGainAccessibilityFocus;
  void Function()? get _flaxSuperGet_onDidLoseAccessibilityFocus;
  void Function()? get _flaxSuperGet_onFocus;
  void Function()? get _flaxSuperGet_onExpand;
  void Function()? get _flaxSuperGet_onCollapse;
  bool? get _flaxSuperGet_isRequired;
}

void Function()? _FlaxProxyDispatch11_get_onTap(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onTap;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onLongPress(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onLongPress;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onScrollLeft(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onScrollLeft;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onDismiss(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onDismiss;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onScrollRight(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onScrollRight;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onScrollUp(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onScrollUp;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onScrollDown(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onScrollDown;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onIncrease(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onIncrease;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onDecrease(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onDecrease;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onCopy(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onCopy;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onCut(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onCut;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onPaste(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onPaste;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function(bool extendSelection)?
_FlaxProxyDispatch11_get_onMoveCursorForwardByCharacter(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1)
    return _flaxReceiver._flaxSuperGet_onMoveCursorForwardByCharacter;
  final _flaxConvertedResult =
      _flaxResult.$2 as void Function(bool extendSelection)?;
  return _flaxConvertedResult;
}

void Function(bool extendSelection)?
_FlaxProxyDispatch11_get_onMoveCursorBackwardByCharacter(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1)
    return _flaxReceiver._flaxSuperGet_onMoveCursorBackwardByCharacter;
  final _flaxConvertedResult =
      _flaxResult.$2 as void Function(bool extendSelection)?;
  return _flaxConvertedResult;
}

void Function(bool extendSelection)?
_FlaxProxyDispatch11_get_onMoveCursorForwardByWord(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1)
    return _flaxReceiver._flaxSuperGet_onMoveCursorForwardByWord;
  final _flaxConvertedResult =
      _flaxResult.$2 as void Function(bool extendSelection)?;
  return _flaxConvertedResult;
}

void Function(bool extendSelection)?
_FlaxProxyDispatch11_get_onMoveCursorBackwardByWord(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1)
    return _flaxReceiver._flaxSuperGet_onMoveCursorBackwardByWord;
  final _flaxConvertedResult =
      _flaxResult.$2 as void Function(bool extendSelection)?;
  return _flaxConvertedResult;
}

void Function(api6.TextSelection selection)?
_FlaxProxyDispatch11_get_onSetSelection(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onSetSelection;
  final _flaxConvertedResult =
      _flaxResult.$2 as void Function(api6.TextSelection selection)?;
  return _flaxConvertedResult;
}

void Function(String text)? _FlaxProxyDispatch11_get_onSetText(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onSetText;
  final _flaxConvertedResult = _flaxResult.$2 as void Function(String text)?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onDidGainAccessibilityFocus(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1)
    return _flaxReceiver._flaxSuperGet_onDidGainAccessibilityFocus;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onDidLoseAccessibilityFocus(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1)
    return _flaxReceiver._flaxSuperGet_onDidLoseAccessibilityFocus;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onFocus(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onFocus;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onExpand(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onExpand;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

void Function()? _FlaxProxyDispatch11_get_onCollapse(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onCollapse;
  final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
  return _flaxConvertedResult;
}

bool? _FlaxProxyDispatch11_get_isRequired(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_isRequired;
  final _flaxConvertedResult = _flaxResult.$2 as bool?;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch0 {
  FlaxProxyPeer get _flaxPeer;
  Map<String, Object?> _flaxSuper_toMap({Object? nodeId = _flaxOmitted});
  String get _flaxSuperGet_type;
}

Map<String, Object?> _FlaxProxyDispatch0_call_toMap(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember, {
  Object? nodeId = _flaxOmitted,
}) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{if (!identical(nodeId, _flaxOmitted)) "nodeId": nodeId},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toMap(nodeId: nodeId);
  }
  final _flaxConvertedResult = _flaxResult.$2 as Map<String, Object?>;
  return _flaxConvertedResult;
}

String _FlaxProxyDispatch0_get_type(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_type;
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch9 {
  FlaxProxyPeer get _flaxPeer;
  String _flaxSuper_toStringShort();
  String _flaxSuper_toString({Object? minLevel = _flaxOmitted});
}

String _FlaxProxyDispatch9_call_toStringShort(
  _FlaxProxyDispatch9 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toStringShort();
  }
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

String _FlaxProxyDispatch9_call_toString(
  _FlaxProxyDispatch9 _flaxReceiver,
  int _flaxMember, {
  Object? minLevel = _flaxOmitted,
}) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{
      if (!identical(minLevel, _flaxOmitted)) "minLevel": minLevel,
    },
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toString(minLevel: minLevel);
  }
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch2 {
  FlaxProxyPeer get _flaxPeer;
  String _flaxSuper_toString();
}

String _FlaxProxyDispatch2_call_toString(
  _FlaxProxyDispatch2 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toString();
  }
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch8 {
  FlaxProxyPeer get _flaxPeer;
  String? get _flaxActiveSuperMember;
  set _flaxActiveSuperMember(String? value);
  bool get _flaxCalledSuper;
  set _flaxCalledSuper(bool value);
  void _flaxSuper_debugFillProperties(
    api2.DiagnosticPropertiesBuilder properties,
  );
  api2.DiagnosticsNode _flaxSuper_toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  });
}

// ignore: must_call_super
void _FlaxProxyDispatch8_call_debugFillProperties(
  _FlaxProxyDispatch8 _flaxReceiver,
  int _flaxMember,
  api2.DiagnosticPropertiesBuilder properties,
) {
  if (!_flaxReceiver._flaxPeer.active) return;
  final _flaxPreviousSuperMember = _flaxReceiver._flaxActiveSuperMember;
  final _flaxPreviousCalledSuper = _flaxReceiver._flaxCalledSuper;
  _flaxReceiver._flaxActiveSuperMember = "debugFillProperties";
  _flaxReceiver._flaxCalledSuper = false;
  try {
    final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
      properties,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxReceiver._flaxSuper_debugFillProperties(properties);
      return;
    }
    if (!(_flaxReceiver._flaxCalledSuper))
      throw StateError(
        "debugFillProperties must call super.debugFillProperties()",
      );
    return;
  } finally {
    _flaxReceiver._flaxActiveSuperMember = _flaxPreviousSuperMember;
    _flaxReceiver._flaxCalledSuper = _flaxPreviousCalledSuper;
  }
}

api2.DiagnosticsNode _FlaxProxyDispatch8_call_toDiagnosticsNode(
  _FlaxProxyDispatch8 _flaxReceiver,
  int _flaxMember, {
  Object? name = _flaxOmitted,
  Object? style = _flaxOmitted,
}) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{
      if (!identical(name, _flaxOmitted)) "name": name,
      if (!identical(style, _flaxOmitted)) "style": style,
    },
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toDiagnosticsNode(name: name, style: style);
  }
  final _flaxConvertedResult = _flaxResult.$2 as api2.DiagnosticsNode;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch1 {
  FlaxProxyPeer get _flaxPeer;
  Map<String, Object?> _flaxSuper_getDataMap();
}

Map<String, Object?> _FlaxProxyDispatch1_call_getDataMap(
  _FlaxProxyDispatch1 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_getDataMap();
  }
  final _flaxConvertedResult = _flaxResult.$2 as Map<String, Object?>;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch5 {
  FlaxProxyPeer get _flaxPeer;
  String? get _flaxSuperGet_name;
}

String? _FlaxProxyDispatch5_get_name(
  _FlaxProxyDispatch5 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_name;
  final _flaxConvertedResult = _flaxResult.$2 as String?;
  return _flaxConvertedResult;
}

final class _AnnounceSemanticsEventProxy extends api.AnnounceSemanticsEvent
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch2, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _AnnounceSemanticsEventProxy(
    this._flaxPeer,
    String super.message,
    api1.TextDirection super.textDirection,
    int super.viewId, {
    api.Assertiveness super.assertiveness,
  });
  @override
  Map<String, Object?> toMap({Object? nodeId = _flaxOmitted}) {
    return _FlaxProxyDispatch0_call_toMap(this, 0, nodeId: nodeId);
  }

  Map<String, Object?> _flaxSuper_toMap({Object? nodeId = _flaxOmitted}) {
    if (identical(nodeId, _flaxOmitted)) {
      return super.toMap();
    }
    return super.toMap(nodeId: nodeId as int?);
  }

  @override
  Map<String, Object?> getDataMap() {
    return _FlaxProxyDispatch1_call_getDataMap(this, 1);
  }

  Map<String, Object?> _flaxSuper_getDataMap() {
    return super.getDataMap();
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  int get viewId {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.viewId;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_viewId {
    return super.viewId;
  }

  @override
  String get message {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.message;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_message {
    return super.message;
  }

  @override
  api1.TextDirection get textDirection {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.textDirection;
    final _flaxConvertedResult = _flaxResult.$2 as api1.TextDirection;
    return _flaxConvertedResult;
  }

  api1.TextDirection get _flaxSuperGet_textDirection {
    return super.textDirection;
  }

  @override
  api.Assertiveness get assertiveness {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.assertiveness;
    final _flaxConvertedResult = _flaxResult.$2 as api.Assertiveness;
    return _flaxConvertedResult;
  }

  api.Assertiveness get _flaxSuperGet_assertiveness {
    return super.assertiveness;
  }

  @override
  String get type => _FlaxProxyDispatch0_get_type(this, 7);
  String get _flaxSuperGet_type {
    return super.type;
  }
}

final class _AttributedStringProxy extends api.AttributedString
    implements _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _AttributedStringProxy(
    this._flaxPeer,
    String super.string, {
    List<api1.StringAttribute> super.attributes,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.AttributedString operator +(api.AttributedString other) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_operatorAdd(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString;
    return _flaxConvertedResult;
  }

  api.AttributedString _flaxSuper_operatorAdd(api.AttributedString other) {
    return super + (other);
  }

  @override
  String get string {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.string;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_string {
    return super.string;
  }

  @override
  List<api1.StringAttribute> get attributes {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.attributes;
    final _flaxConvertedResult = _flaxResult.$2 as List<api1.StringAttribute>;
    return _flaxConvertedResult;
  }

  List<api1.StringAttribute> get _flaxSuperGet_attributes {
    return super.attributes;
  }
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _AttributedStringPropertyProxy extends api.AttributedStringProperty
    implements _FlaxProxyDispatch5 {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _AttributedStringPropertyProxy(
    this._flaxPeer,
    String super.name,
    api.AttributedString? super.value, {
    bool super.showName,
    bool super.showWhenEmpty,
    Object? super.defaultValue,
    api2.DiagnosticLevel super.level,
    String? super.description,
  });
  @override
  // ignore: must_call_super
  Map<String, Object?> toJsonMap(
    api2.DiagnosticsSerializationDelegate delegate,
  ) {
    final _flaxPreviousSuperMember = _flaxActiveSuperMember;
    final _flaxPreviousCalledSuper = _flaxCalledSuper;
    _flaxActiveSuperMember = "toJsonMap";
    _flaxCalledSuper = false;
    try {
      final _flaxResult = _flaxPeer.call(0, <Object?>[
        delegate,
      ], <String, Object?>{});
      if (!_flaxResult.$1) {
        return _flaxSuper_toJsonMap(delegate);
      }
      final _flaxConvertedResult = _flaxResult.$2 as Map<String, Object?>;
      if (!(_flaxCalledSuper))
        throw StateError("toJsonMap must call super.toJsonMap()");
      return _flaxConvertedResult;
    } finally {
      _flaxActiveSuperMember = _flaxPreviousSuperMember;
      _flaxCalledSuper = _flaxPreviousCalledSuper;
    }
  }

  Map<String, Object?> _flaxSuper_toJsonMap(
    api2.DiagnosticsSerializationDelegate delegate,
  ) {
    if (_flaxActiveSuperMember == "toJsonMap") _flaxCalledSuper = true;
    return super.toJsonMap(delegate);
  }

  @override
  String valueToString({Object? parentConfiguration = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{
      if (!identical(parentConfiguration, _flaxOmitted))
        "parentConfiguration": parentConfiguration,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_valueToString(parentConfiguration: parentConfiguration);
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_valueToString({
    Object? parentConfiguration = _flaxOmitted,
  }) {
    if (identical(parentConfiguration, _flaxOmitted)) {
      return super.valueToString();
    }
    return super.valueToString(
      parentConfiguration: parentConfiguration as api2.TextTreeConfiguration?,
    );
  }

  @override
  String toDescription({Object? parentConfiguration = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{
      if (!identical(parentConfiguration, _flaxOmitted))
        "parentConfiguration": parentConfiguration,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toDescription(parentConfiguration: parentConfiguration);
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_toDescription({
    Object? parentConfiguration = _flaxOmitted,
  }) {
    if (identical(parentConfiguration, _flaxOmitted)) {
      return super.toDescription();
    }
    return super.toDescription(
      parentConfiguration: parentConfiguration as api2.TextTreeConfiguration?,
    );
  }

  @override
  List<api2.DiagnosticsNode> getProperties() {
    final _flaxResult = _flaxPeer.call(3, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_getProperties();
    }
    final _flaxConvertedResult = _flaxResult.$2 as List<api2.DiagnosticsNode>;
    return _flaxConvertedResult;
  }

  List<api2.DiagnosticsNode> _flaxSuper_getProperties() {
    return super.getProperties();
  }

  @override
  List<api2.DiagnosticsNode> getChildren() {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_getChildren();
    }
    final _flaxConvertedResult = _flaxResult.$2 as List<api2.DiagnosticsNode>;
    return _flaxConvertedResult;
  }

  List<api2.DiagnosticsNode> _flaxSuper_getChildren() {
    return super.getChildren();
  }

  @override
  bool isFiltered(api2.DiagnosticLevel minLevel) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      minLevel,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_isFiltered(minLevel);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_isFiltered(api2.DiagnosticLevel minLevel) {
    return super.isFiltered(minLevel);
  }

  @override
  Map<String, String>? toTimelineArguments() {
    final _flaxResult = _flaxPeer.call(6, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_toTimelineArguments();
    }
    final _flaxConvertedResult = _flaxResult.$2 as Map<String, String>?;
    return _flaxConvertedResult;
  }

  Map<String, String>? _flaxSuper_toTimelineArguments() {
    return super.toTimelineArguments();
  }

  @override
  Map<String, Object?> toJsonMapIterative(
    api2.DiagnosticsSerializationDelegate delegate,
  ) {
    final _flaxResult = _flaxPeer.call(7, <Object?>[
      delegate,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_toJsonMapIterative(delegate);
    }
    final _flaxConvertedResult = _flaxResult.$2 as Map<String, Object?>;
    return _flaxConvertedResult;
  }

  Map<String, Object?> _flaxSuper_toJsonMapIterative(
    api2.DiagnosticsSerializationDelegate delegate,
  ) {
    return super.toJsonMapIterative(delegate);
  }

  @override
  String toStringDeep({
    Object? prefixLineOne = _flaxOmitted,
    Object? prefixOtherLines = _flaxOmitted,
    Object? parentConfiguration = _flaxOmitted,
    Object? minLevel = _flaxOmitted,
    Object? wrapWidth = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(8, <Object?>[], <String, Object?>{
      if (!identical(prefixLineOne, _flaxOmitted))
        "prefixLineOne": prefixLineOne,
      if (!identical(prefixOtherLines, _flaxOmitted))
        "prefixOtherLines": prefixOtherLines,
      if (!identical(parentConfiguration, _flaxOmitted))
        "parentConfiguration": parentConfiguration,
      if (!identical(minLevel, _flaxOmitted)) "minLevel": minLevel,
      if (!identical(wrapWidth, _flaxOmitted)) "wrapWidth": wrapWidth,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toStringDeep(
        prefixLineOne: prefixLineOne,
        prefixOtherLines: prefixOtherLines,
        parentConfiguration: parentConfiguration,
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
    Object? parentConfiguration = _flaxOmitted,
    Object? minLevel = _flaxOmitted,
    Object? wrapWidth = _flaxOmitted,
  }) {
    if (identical(prefixLineOne, _flaxOmitted)) {
      if (identical(prefixOtherLines, _flaxOmitted)) {
        if (identical(parentConfiguration, _flaxOmitted)) {
          if (identical(minLevel, _flaxOmitted)) {
            if (identical(wrapWidth, _flaxOmitted)) {
              return super.toStringDeep();
            }
            return super.toStringDeep(wrapWidth: wrapWidth as int);
          }
          if (identical(wrapWidth, _flaxOmitted)) {
            return super.toStringDeep(
              minLevel: minLevel as api2.DiagnosticLevel,
            );
          }
          return super.toStringDeep(
            minLevel: minLevel as api2.DiagnosticLevel,
            wrapWidth: wrapWidth as int,
          );
        }
        if (identical(minLevel, _flaxOmitted)) {
          if (identical(wrapWidth, _flaxOmitted)) {
            return super.toStringDeep(
              parentConfiguration:
                  parentConfiguration as api2.TextTreeConfiguration?,
            );
          }
          return super.toStringDeep(
            parentConfiguration:
                parentConfiguration as api2.TextTreeConfiguration?,
            wrapWidth: wrapWidth as int,
          );
        }
        if (identical(wrapWidth, _flaxOmitted)) {
          return super.toStringDeep(
            parentConfiguration:
                parentConfiguration as api2.TextTreeConfiguration?,
            minLevel: minLevel as api2.DiagnosticLevel,
          );
        }
        return super.toStringDeep(
          parentConfiguration:
              parentConfiguration as api2.TextTreeConfiguration?,
          minLevel: minLevel as api2.DiagnosticLevel,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(parentConfiguration, _flaxOmitted)) {
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
            minLevel: minLevel as api2.DiagnosticLevel,
          );
        }
        return super.toStringDeep(
          prefixOtherLines: prefixOtherLines as String?,
          minLevel: minLevel as api2.DiagnosticLevel,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(minLevel, _flaxOmitted)) {
        if (identical(wrapWidth, _flaxOmitted)) {
          return super.toStringDeep(
            prefixOtherLines: prefixOtherLines as String?,
            parentConfiguration:
                parentConfiguration as api2.TextTreeConfiguration?,
          );
        }
        return super.toStringDeep(
          prefixOtherLines: prefixOtherLines as String?,
          parentConfiguration:
              parentConfiguration as api2.TextTreeConfiguration?,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(wrapWidth, _flaxOmitted)) {
        return super.toStringDeep(
          prefixOtherLines: prefixOtherLines as String?,
          parentConfiguration:
              parentConfiguration as api2.TextTreeConfiguration?,
          minLevel: minLevel as api2.DiagnosticLevel,
        );
      }
      return super.toStringDeep(
        prefixOtherLines: prefixOtherLines as String?,
        parentConfiguration: parentConfiguration as api2.TextTreeConfiguration?,
        minLevel: minLevel as api2.DiagnosticLevel,
        wrapWidth: wrapWidth as int,
      );
    }
    if (identical(prefixOtherLines, _flaxOmitted)) {
      if (identical(parentConfiguration, _flaxOmitted)) {
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
            minLevel: minLevel as api2.DiagnosticLevel,
          );
        }
        return super.toStringDeep(
          prefixLineOne: prefixLineOne as String,
          minLevel: minLevel as api2.DiagnosticLevel,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(minLevel, _flaxOmitted)) {
        if (identical(wrapWidth, _flaxOmitted)) {
          return super.toStringDeep(
            prefixLineOne: prefixLineOne as String,
            parentConfiguration:
                parentConfiguration as api2.TextTreeConfiguration?,
          );
        }
        return super.toStringDeep(
          prefixLineOne: prefixLineOne as String,
          parentConfiguration:
              parentConfiguration as api2.TextTreeConfiguration?,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(wrapWidth, _flaxOmitted)) {
        return super.toStringDeep(
          prefixLineOne: prefixLineOne as String,
          parentConfiguration:
              parentConfiguration as api2.TextTreeConfiguration?,
          minLevel: minLevel as api2.DiagnosticLevel,
        );
      }
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        parentConfiguration: parentConfiguration as api2.TextTreeConfiguration?,
        minLevel: minLevel as api2.DiagnosticLevel,
        wrapWidth: wrapWidth as int,
      );
    }
    if (identical(parentConfiguration, _flaxOmitted)) {
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
          minLevel: minLevel as api2.DiagnosticLevel,
        );
      }
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        prefixOtherLines: prefixOtherLines as String?,
        minLevel: minLevel as api2.DiagnosticLevel,
        wrapWidth: wrapWidth as int,
      );
    }
    if (identical(minLevel, _flaxOmitted)) {
      if (identical(wrapWidth, _flaxOmitted)) {
        return super.toStringDeep(
          prefixLineOne: prefixLineOne as String,
          prefixOtherLines: prefixOtherLines as String?,
          parentConfiguration:
              parentConfiguration as api2.TextTreeConfiguration?,
        );
      }
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        prefixOtherLines: prefixOtherLines as String?,
        parentConfiguration: parentConfiguration as api2.TextTreeConfiguration?,
        wrapWidth: wrapWidth as int,
      );
    }
    if (identical(wrapWidth, _flaxOmitted)) {
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        prefixOtherLines: prefixOtherLines as String?,
        parentConfiguration: parentConfiguration as api2.TextTreeConfiguration?,
        minLevel: minLevel as api2.DiagnosticLevel,
      );
    }
    return super.toStringDeep(
      prefixLineOne: prefixLineOne as String,
      prefixOtherLines: prefixOtherLines as String?,
      parentConfiguration: parentConfiguration as api2.TextTreeConfiguration?,
      minLevel: minLevel as api2.DiagnosticLevel,
      wrapWidth: wrapWidth as int,
    );
  }

  @override
  String toString({
    Object? parentConfiguration = _flaxOmitted,
    Object? minLevel = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(9, <Object?>[], <String, Object?>{
      if (!identical(parentConfiguration, _flaxOmitted))
        "parentConfiguration": parentConfiguration,
      if (!identical(minLevel, _flaxOmitted)) "minLevel": minLevel,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toString(
        parentConfiguration: parentConfiguration,
        minLevel: minLevel,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_toString({
    Object? parentConfiguration = _flaxOmitted,
    Object? minLevel = _flaxOmitted,
  }) {
    if (identical(parentConfiguration, _flaxOmitted)) {
      if (identical(minLevel, _flaxOmitted)) {
        return super.toString();
      }
      return super.toString(minLevel: minLevel as api2.DiagnosticLevel);
    }
    if (identical(minLevel, _flaxOmitted)) {
      return super.toString(
        parentConfiguration: parentConfiguration as api2.TextTreeConfiguration?,
      );
    }
    return super.toString(
      parentConfiguration: parentConfiguration as api2.TextTreeConfiguration?,
      minLevel: minLevel as api2.DiagnosticLevel,
    );
  }

  @override
  bool get showWhenEmpty {
    final _flaxResult = _flaxPeer.call(10, const [], const {});
    if (!_flaxResult.$1) return super.showWhenEmpty;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_showWhenEmpty {
    return super.showWhenEmpty;
  }

  @override
  bool get isInteresting {
    final _flaxResult = _flaxPeer.call(11, const [], const {});
    if (!_flaxResult.$1) return super.isInteresting;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isInteresting {
    return super.isInteresting;
  }

  @override
  bool get expandableValue {
    final _flaxResult = _flaxPeer.call(12, const [], const {});
    if (!_flaxResult.$1) return super.expandableValue;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_expandableValue {
    return super.expandableValue;
  }

  @override
  bool get allowWrap {
    final _flaxResult = _flaxPeer.call(13, const [], const {});
    if (!_flaxResult.$1) return super.allowWrap;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_allowWrap {
    return super.allowWrap;
  }

  @override
  bool get allowNameWrap {
    final _flaxResult = _flaxPeer.call(14, const [], const {});
    if (!_flaxResult.$1) return super.allowNameWrap;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_allowNameWrap {
    return super.allowNameWrap;
  }

  @override
  String? get ifNull {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.ifNull;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_ifNull {
    return super.ifNull;
  }

  @override
  String? get ifEmpty {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.ifEmpty;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_ifEmpty {
    return super.ifEmpty;
  }

  @override
  String? get tooltip {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.tooltip;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_tooltip {
    return super.tooltip;
  }

  @override
  bool get missingIfNull {
    final _flaxResult = _flaxPeer.call(18, const [], const {});
    if (!_flaxResult.$1) return super.missingIfNull;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_missingIfNull {
    return super.missingIfNull;
  }

  @override
  api4.Type get propertyType {
    final _flaxResult = _flaxPeer.call(19, const [], const {});
    if (!_flaxResult.$1) return super.propertyType;
    final _flaxConvertedResult = _flaxResult.$2 as api4.Type;
    return _flaxConvertedResult;
  }

  api4.Type get _flaxSuperGet_propertyType {
    return super.propertyType;
  }

  @override
  api.AttributedString? get value {
    final _flaxResult = _flaxPeer.call(20, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString?;
    return _flaxConvertedResult;
  }

  api.AttributedString? get _flaxSuperGet_value {
    return super.value;
  }

  @override
  Object? get exception {
    final _flaxResult = _flaxPeer.call(21, const [], const {});
    if (!_flaxResult.$1) return super.exception;
    final _flaxConvertedResult = _flaxResult.$2;
    return _flaxConvertedResult;
  }

  Object? get _flaxSuperGet_exception {
    return super.exception;
  }

  @override
  Object? get defaultValue {
    final _flaxResult = _flaxPeer.call(22, const [], const {});
    if (!_flaxResult.$1) return super.defaultValue;
    final _flaxConvertedResult = _flaxResult.$2;
    return _flaxConvertedResult;
  }

  Object? get _flaxSuperGet_defaultValue {
    return super.defaultValue;
  }

  @override
  api2.DiagnosticLevel get level {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.level;
    final _flaxConvertedResult = _flaxResult.$2 as api2.DiagnosticLevel;
    return _flaxConvertedResult;
  }

  api2.DiagnosticLevel get _flaxSuperGet_level {
    return super.level;
  }

  @override
  String? get name => _FlaxProxyDispatch5_get_name(this, 24);
  String? get _flaxSuperGet_name {
    return super.name;
  }

  @override
  bool get showSeparator {
    final _flaxResult = _flaxPeer.call(25, const [], const {});
    if (!_flaxResult.$1) return super.showSeparator;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_showSeparator {
    return super.showSeparator;
  }

  @override
  bool get showName {
    final _flaxResult = _flaxPeer.call(26, const [], const {});
    if (!_flaxResult.$1) return super.showName;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_showName {
    return super.showName;
  }

  @override
  String? get linePrefix {
    final _flaxResult = _flaxPeer.call(27, const [], const {});
    if (!_flaxResult.$1) return super.linePrefix;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_linePrefix {
    return super.linePrefix;
  }

  @override
  String? get emptyBodyDescription {
    final _flaxResult = _flaxPeer.call(28, const [], const {});
    if (!_flaxResult.$1) return super.emptyBodyDescription;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_emptyBodyDescription {
    return super.emptyBodyDescription;
  }

  @override
  api2.DiagnosticsTreeStyle? get style {
    final _flaxResult = _flaxPeer.call(29, const [], const {});
    if (!_flaxResult.$1) return super.style;
    final _flaxConvertedResult = _flaxResult.$2 as api2.DiagnosticsTreeStyle?;
    return _flaxConvertedResult;
  }

  api2.DiagnosticsTreeStyle? get _flaxSuperGet_style {
    return super.style;
  }

  @override
  bool get allowTruncate {
    final _flaxResult = _flaxPeer.call(30, const [], const {});
    if (!_flaxResult.$1) return super.allowTruncate;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_allowTruncate {
    return super.allowTruncate;
  }

  @override
  api2.TextTreeConfiguration? get textTreeConfiguration {
    final _flaxResult = _flaxPeer.call(31, const [], const {});
    if (!_flaxResult.$1) return super.textTreeConfiguration;
    final _flaxConvertedResult = _flaxResult.$2 as api2.TextTreeConfiguration?;
    return _flaxConvertedResult;
  }

  api2.TextTreeConfiguration? get _flaxSuperGet_textTreeConfiguration {
    return super.textTreeConfiguration;
  }
}

final class _ChildSemanticsConfigurationsResultProxy
    implements api.ChildSemanticsConfigurationsResult {
  final FlaxProxyPeer _flaxPeer;
  _ChildSemanticsConfigurationsResultProxy(this._flaxPeer);
  @override
  List<api.SemanticsConfiguration> get mergeUp {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    final _flaxConvertedResult =
        _flaxResult.$2 as List<api.SemanticsConfiguration>;
    return _flaxConvertedResult;
  }

  @override
  List<List<api.SemanticsConfiguration>> get siblingMergeGroups {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    final _flaxConvertedResult =
        _flaxResult.$2 as List<List<api.SemanticsConfiguration>>;
    return _flaxConvertedResult;
  }
}

final class _ChildSemanticsConfigurationsResultBuilderProxy
    extends api.ChildSemanticsConfigurationsResultBuilder {
  final FlaxProxyPeer _flaxPeer;
  _ChildSemanticsConfigurationsResultBuilderProxy(this._flaxPeer);
  @override
  void markAsMergeUp(api.SemanticsConfiguration config) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      config,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_markAsMergeUp(config);
      return;
    }
    return;
  }

  void _flaxSuper_markAsMergeUp(api.SemanticsConfiguration config) {
    super.markAsMergeUp(config);
    return;
  }

  @override
  void markAsSiblingMergeGroup(List<api.SemanticsConfiguration> configs) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      configs,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_markAsSiblingMergeGroup(configs);
      return;
    }
    return;
  }

  void _flaxSuper_markAsSiblingMergeGroup(
    List<api.SemanticsConfiguration> configs,
  ) {
    super.markAsSiblingMergeGroup(configs);
    return;
  }

  @override
  api.ChildSemanticsConfigurationsResult build() {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_build();
    }
    final _flaxConvertedResult =
        _flaxResult.$2 as api.ChildSemanticsConfigurationsResult;
    return _flaxConvertedResult;
  }

  api.ChildSemanticsConfigurationsResult _flaxSuper_build() {
    return super.build();
  }
}

final class _CustomSemanticsActionProxy extends api.CustomSemanticsAction
    implements _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _CustomSemanticsActionProxy(this._flaxPeer, {required String super.label});
  _CustomSemanticsActionProxy.overridingAction(
    this._flaxPeer, {
    required String super.hint,
    required api1.SemanticsAction super.action,
  }) : super.overridingAction();
  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String? get label {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.label;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_label {
    return super.label;
  }

  @override
  String? get hint {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.hint;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_hint {
    return super.hint;
  }

  @override
  api1.SemanticsAction? get action {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.action;
    final _flaxConvertedResult = _flaxResult.$2 as api1.SemanticsAction?;
    return _flaxConvertedResult;
  }

  api1.SemanticsAction? get _flaxSuperGet_action {
    return super.action;
  }
}

final class _FocusSemanticEventProxy extends api.FocusSemanticEvent
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch2, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _FocusSemanticEventProxy(this._flaxPeer);
  @override
  Map<String, Object?> toMap({Object? nodeId = _flaxOmitted}) {
    return _FlaxProxyDispatch0_call_toMap(this, 0, nodeId: nodeId);
  }

  Map<String, Object?> _flaxSuper_toMap({Object? nodeId = _flaxOmitted}) {
    if (identical(nodeId, _flaxOmitted)) {
      return super.toMap();
    }
    return super.toMap(nodeId: nodeId as int?);
  }

  @override
  Map<String, Object?> getDataMap() {
    return _FlaxProxyDispatch1_call_getDataMap(this, 1);
  }

  Map<String, Object?> _flaxSuper_getDataMap() {
    return super.getDataMap();
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get type => _FlaxProxyDispatch0_get_type(this, 3);
  String get _flaxSuperGet_type {
    return super.type;
  }
}

final class _LongPressSemanticsEventProxy extends api.LongPressSemanticsEvent
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch2, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _LongPressSemanticsEventProxy(this._flaxPeer);
  @override
  Map<String, Object?> toMap({Object? nodeId = _flaxOmitted}) {
    return _FlaxProxyDispatch0_call_toMap(this, 0, nodeId: nodeId);
  }

  Map<String, Object?> _flaxSuper_toMap({Object? nodeId = _flaxOmitted}) {
    if (identical(nodeId, _flaxOmitted)) {
      return super.toMap();
    }
    return super.toMap(nodeId: nodeId as int?);
  }

  @override
  Map<String, Object?> getDataMap() {
    return _FlaxProxyDispatch1_call_getDataMap(this, 1);
  }

  Map<String, Object?> _flaxSuper_getDataMap() {
    return super.getDataMap();
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get type => _FlaxProxyDispatch0_get_type(this, 3);
  String get _flaxSuperGet_type {
    return super.type;
  }
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _OrdinalSortKeyProxy extends api.OrdinalSortKey
    implements _FlaxProxyDispatch9, _FlaxProxyDispatch8, _FlaxProxyDispatch5 {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _OrdinalSortKeyProxy(
    this._flaxPeer,
    double super.order, {
    String? super.name,
  });
  @override
  int compareTo(api.SemanticsSortKey other) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_compareTo(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int _flaxSuper_compareTo(api.SemanticsSortKey other) {
    return super.compareTo(other);
  }

  @override
  int doCompare(api.OrdinalSortKey other) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_doCompare(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int _flaxSuper_doCompare(api.OrdinalSortKey other) {
    return super.doCompare(other);
  }

  @override
  // ignore: must_call_super
  void debugFillProperties(api2.DiagnosticPropertiesBuilder properties) {
    return _FlaxProxyDispatch8_call_debugFillProperties(this, 2, properties);
  }

  void _flaxSuper_debugFillProperties(
    api2.DiagnosticPropertiesBuilder properties,
  ) {
    if (_flaxActiveSuperMember == "debugFillProperties")
      _flaxCalledSuper = true;
    super.debugFillProperties(properties);
    return;
  }

  @override
  String toStringShort() {
    return _FlaxProxyDispatch9_call_toStringShort(this, 3);
  }

  String _flaxSuper_toStringShort() {
    return super.toStringShort();
  }

  @override
  api2.DiagnosticsNode toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    return _FlaxProxyDispatch8_call_toDiagnosticsNode(
      this,
      4,
      name: name,
      style: style,
    );
  }

  api2.DiagnosticsNode _flaxSuper_toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    if (identical(name, _flaxOmitted)) {
      if (identical(style, _flaxOmitted)) {
        return super.toDiagnosticsNode();
      }
      return super.toDiagnosticsNode(
        style: style as api2.DiagnosticsTreeStyle?,
      );
    }
    if (identical(style, _flaxOmitted)) {
      return super.toDiagnosticsNode(name: name as String?);
    }
    return super.toDiagnosticsNode(
      name: name as String?,
      style: style as api2.DiagnosticsTreeStyle?,
    );
  }

  @override
  String toString({Object? minLevel = _flaxOmitted}) {
    return _FlaxProxyDispatch9_call_toString(this, 5, minLevel: minLevel);
  }

  String _flaxSuper_toString({Object? minLevel = _flaxOmitted}) {
    if (identical(minLevel, _flaxOmitted)) {
      return super.toString();
    }
    return super.toString(minLevel: minLevel as api2.DiagnosticLevel);
  }

  @override
  double get order {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.order;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_order {
    return super.order;
  }

  @override
  String? get name => _FlaxProxyDispatch5_get_name(this, 7);
  String? get _flaxSuperGet_name {
    return super.name;
  }
}

final class _SemanticsConfigurationProxy extends api.SemanticsConfiguration
    implements
        _FlaxProxyDispatch14,
        _FlaxProxyDispatch15,
        _FlaxProxyDispatch11 {
  final FlaxProxyPeer _flaxPeer;
  _SemanticsConfigurationProxy(this._flaxPeer);
  @override
  void Function(Object? args)? getActionHandler(api1.SemanticsAction action) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      action,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_getActionHandler(action);
    }
    final _flaxConvertedResult = _flaxResult.$2 as void Function(Object? args)?;
    return _flaxConvertedResult;
  }

  void Function(Object? args)? _flaxSuper_getActionHandler(
    api1.SemanticsAction action,
  ) {
    return super.getActionHandler(action);
  }

  @override
  bool tagsChildrenWith(api.SemanticsTag tag) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[tag], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_tagsChildrenWith(tag);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_tagsChildrenWith(api.SemanticsTag tag) {
    return super.tagsChildrenWith(tag);
  }

  @override
  void addTagForChildren(api.SemanticsTag tag) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[tag], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_addTagForChildren(tag);
      return;
    }
    return;
  }

  void _flaxSuper_addTagForChildren(api.SemanticsTag tag) {
    super.addTagForChildren(tag);
    return;
  }

  @override
  bool isCompatibleWith(api.SemanticsConfiguration? other) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_isCompatibleWith(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_isCompatibleWith(api.SemanticsConfiguration? other) {
    return super.isCompatibleWith(other);
  }

  @override
  void absorb(api.SemanticsConfiguration child) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      child,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_absorb(child);
      return;
    }
    return;
  }

  void _flaxSuper_absorb(api.SemanticsConfiguration child) {
    super.absorb(child);
    return;
  }

  @override
  api.SemanticsConfiguration copy() {
    final _flaxResult = _flaxPeer.call(5, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_copy();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsConfiguration;
    return _flaxConvertedResult;
  }

  api.SemanticsConfiguration _flaxSuper_copy() {
    return super.copy();
  }

  @override
  bool get isSemanticBoundary {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.isSemanticBoundary;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isSemanticBoundary {
    return super.isSemanticBoundary;
  }

  @override
  api1.Locale? get localeForSubtree {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.localeForSubtree;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Locale?;
    return _flaxConvertedResult;
  }

  api1.Locale? get _flaxSuperGet_localeForSubtree {
    return super.localeForSubtree;
  }

  @override
  api1.Locale? get locale {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.locale;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Locale?;
    return _flaxConvertedResult;
  }

  api1.Locale? get _flaxSuperGet_locale {
    return super.locale;
  }

  @override
  bool get isBlockingUserActions {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.isBlockingUserActions;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isBlockingUserActions {
    return super.isBlockingUserActions;
  }

  @override
  bool get explicitChildNodes {
    final _flaxResult = _flaxPeer.call(10, const [], const {});
    if (!_flaxResult.$1) return super.explicitChildNodes;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_explicitChildNodes {
    return super.explicitChildNodes;
  }

  @override
  bool get isBlockingSemanticsOfPreviouslyPaintedNodes {
    final _flaxResult = _flaxPeer.call(11, const [], const {});
    if (!_flaxResult.$1)
      return super.isBlockingSemanticsOfPreviouslyPaintedNodes;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isBlockingSemanticsOfPreviouslyPaintedNodes {
    return super.isBlockingSemanticsOfPreviouslyPaintedNodes;
  }

  @override
  bool get hasBeenAnnotated {
    final _flaxResult = _flaxPeer.call(12, const [], const {});
    if (!_flaxResult.$1) return super.hasBeenAnnotated;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_hasBeenAnnotated {
    return super.hasBeenAnnotated;
  }

  @override
  void Function()? get onTap => _FlaxProxyDispatch11_get_onTap(this, 13);
  void Function()? get _flaxSuperGet_onTap {
    return super.onTap;
  }

  @override
  void Function()? get onLongPress =>
      _FlaxProxyDispatch11_get_onLongPress(this, 14);
  void Function()? get _flaxSuperGet_onLongPress {
    return super.onLongPress;
  }

  @override
  void Function()? get onScrollLeft =>
      _FlaxProxyDispatch11_get_onScrollLeft(this, 15);
  void Function()? get _flaxSuperGet_onScrollLeft {
    return super.onScrollLeft;
  }

  @override
  void Function()? get onDismiss =>
      _FlaxProxyDispatch11_get_onDismiss(this, 16);
  void Function()? get _flaxSuperGet_onDismiss {
    return super.onDismiss;
  }

  @override
  void Function()? get onScrollRight =>
      _FlaxProxyDispatch11_get_onScrollRight(this, 17);
  void Function()? get _flaxSuperGet_onScrollRight {
    return super.onScrollRight;
  }

  @override
  void Function()? get onScrollUp =>
      _FlaxProxyDispatch11_get_onScrollUp(this, 18);
  void Function()? get _flaxSuperGet_onScrollUp {
    return super.onScrollUp;
  }

  @override
  void Function()? get onScrollDown =>
      _FlaxProxyDispatch11_get_onScrollDown(this, 19);
  void Function()? get _flaxSuperGet_onScrollDown {
    return super.onScrollDown;
  }

  @override
  void Function(api1.Offset targetOffset)? get onScrollToOffset {
    final _flaxResult = _flaxPeer.call(20, const [], const {});
    if (!_flaxResult.$1) return super.onScrollToOffset;
    final _flaxConvertedResult =
        _flaxResult.$2 as void Function(api1.Offset targetOffset)?;
    return _flaxConvertedResult;
  }

  void Function(api1.Offset targetOffset)? get _flaxSuperGet_onScrollToOffset {
    return super.onScrollToOffset;
  }

  @override
  void Function()? get onIncrease =>
      _FlaxProxyDispatch11_get_onIncrease(this, 21);
  void Function()? get _flaxSuperGet_onIncrease {
    return super.onIncrease;
  }

  @override
  void Function()? get onDecrease =>
      _FlaxProxyDispatch11_get_onDecrease(this, 22);
  void Function()? get _flaxSuperGet_onDecrease {
    return super.onDecrease;
  }

  @override
  void Function()? get onCopy => _FlaxProxyDispatch11_get_onCopy(this, 23);
  void Function()? get _flaxSuperGet_onCopy {
    return super.onCopy;
  }

  @override
  void Function()? get onCut => _FlaxProxyDispatch11_get_onCut(this, 24);
  void Function()? get _flaxSuperGet_onCut {
    return super.onCut;
  }

  @override
  void Function()? get onPaste => _FlaxProxyDispatch11_get_onPaste(this, 25);
  void Function()? get _flaxSuperGet_onPaste {
    return super.onPaste;
  }

  @override
  void Function()? get onShowOnScreen {
    final _flaxResult = _flaxPeer.call(26, const [], const {});
    if (!_flaxResult.$1) return super.onShowOnScreen;
    final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
    return _flaxConvertedResult;
  }

  void Function()? get _flaxSuperGet_onShowOnScreen {
    return super.onShowOnScreen;
  }

  @override
  void Function(bool extendSelection)? get onMoveCursorForwardByCharacter =>
      _FlaxProxyDispatch11_get_onMoveCursorForwardByCharacter(this, 27);
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorForwardByCharacter {
    return super.onMoveCursorForwardByCharacter;
  }

  @override
  void Function(bool extendSelection)? get onMoveCursorBackwardByCharacter =>
      _FlaxProxyDispatch11_get_onMoveCursorBackwardByCharacter(this, 28);
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorBackwardByCharacter {
    return super.onMoveCursorBackwardByCharacter;
  }

  @override
  void Function(bool extendSelection)? get onMoveCursorForwardByWord =>
      _FlaxProxyDispatch11_get_onMoveCursorForwardByWord(this, 29);
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorForwardByWord {
    return super.onMoveCursorForwardByWord;
  }

  @override
  void Function(bool extendSelection)? get onMoveCursorBackwardByWord =>
      _FlaxProxyDispatch11_get_onMoveCursorBackwardByWord(this, 30);
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorBackwardByWord {
    return super.onMoveCursorBackwardByWord;
  }

  @override
  void Function(api6.TextSelection selection)? get onSetSelection =>
      _FlaxProxyDispatch11_get_onSetSelection(this, 31);
  void Function(api6.TextSelection selection)?
  get _flaxSuperGet_onSetSelection {
    return super.onSetSelection;
  }

  @override
  void Function(String text)? get onSetText =>
      _FlaxProxyDispatch11_get_onSetText(this, 32);
  void Function(String text)? get _flaxSuperGet_onSetText {
    return super.onSetText;
  }

  @override
  void Function()? get onDidGainAccessibilityFocus =>
      _FlaxProxyDispatch11_get_onDidGainAccessibilityFocus(this, 33);
  void Function()? get _flaxSuperGet_onDidGainAccessibilityFocus {
    return super.onDidGainAccessibilityFocus;
  }

  @override
  void Function()? get onDidLoseAccessibilityFocus =>
      _FlaxProxyDispatch11_get_onDidLoseAccessibilityFocus(this, 34);
  void Function()? get _flaxSuperGet_onDidLoseAccessibilityFocus {
    return super.onDidLoseAccessibilityFocus;
  }

  @override
  void Function()? get onFocus => _FlaxProxyDispatch11_get_onFocus(this, 35);
  void Function()? get _flaxSuperGet_onFocus {
    return super.onFocus;
  }

  @override
  void Function()? get onExpand => _FlaxProxyDispatch11_get_onExpand(this, 36);
  void Function()? get _flaxSuperGet_onExpand {
    return super.onExpand;
  }

  @override
  void Function()? get onCollapse =>
      _FlaxProxyDispatch11_get_onCollapse(this, 37);
  void Function()? get _flaxSuperGet_onCollapse {
    return super.onCollapse;
  }

  @override
  api.ChildSemanticsConfigurationsResult Function(
    List<api.SemanticsConfiguration> p0,
  )?
  get childConfigurationsDelegate {
    final _flaxResult = _flaxPeer.call(38, const [], const {});
    if (!_flaxResult.$1) return super.childConfigurationsDelegate;
    final _flaxConvertedResult =
        _flaxResult.$2
            as api.ChildSemanticsConfigurationsResult Function(
              List<api.SemanticsConfiguration> p0,
            )?;
    return _flaxConvertedResult;
  }

  api.ChildSemanticsConfigurationsResult Function(
    List<api.SemanticsConfiguration> p0,
  )?
  get _flaxSuperGet_childConfigurationsDelegate {
    return super.childConfigurationsDelegate;
  }

  @override
  api.SemanticsSortKey? get sortKey {
    final _flaxResult = _flaxPeer.call(39, const [], const {});
    if (!_flaxResult.$1) return super.sortKey;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsSortKey?;
    return _flaxConvertedResult;
  }

  api.SemanticsSortKey? get _flaxSuperGet_sortKey {
    return super.sortKey;
  }

  @override
  int? get indexInParent {
    final _flaxResult = _flaxPeer.call(40, const [], const {});
    if (!_flaxResult.$1) return super.indexInParent;
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  int? get _flaxSuperGet_indexInParent {
    return super.indexInParent;
  }

  @override
  int? get scrollChildCount =>
      _FlaxProxyDispatch14_get_scrollChildCount(this, 41);
  int? get _flaxSuperGet_scrollChildCount {
    return super.scrollChildCount;
  }

  @override
  int? get scrollIndex => _FlaxProxyDispatch14_get_scrollIndex(this, 42);
  int? get _flaxSuperGet_scrollIndex {
    return super.scrollIndex;
  }

  @override
  int? get platformViewId => _FlaxProxyDispatch14_get_platformViewId(this, 43);
  int? get _flaxSuperGet_platformViewId {
    return super.platformViewId;
  }

  @override
  int? get maxValueLength => _FlaxProxyDispatch15_get_maxValueLength(this, 44);
  int? get _flaxSuperGet_maxValueLength {
    return super.maxValueLength;
  }

  @override
  int? get currentValueLength =>
      _FlaxProxyDispatch15_get_currentValueLength(this, 45);
  int? get _flaxSuperGet_currentValueLength {
    return super.currentValueLength;
  }

  @override
  bool get isMergingSemanticsOfDescendants {
    final _flaxResult = _flaxPeer.call(46, const [], const {});
    if (!_flaxResult.$1) return super.isMergingSemanticsOfDescendants;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isMergingSemanticsOfDescendants {
    return super.isMergingSemanticsOfDescendants;
  }

  @override
  Map<api.CustomSemanticsAction, void Function()> get customSemanticsActions {
    final _flaxResult = _flaxPeer.call(47, const [], const {});
    if (!_flaxResult.$1) return super.customSemanticsActions;
    final _flaxConvertedResult =
        _flaxResult.$2 as Map<api.CustomSemanticsAction, void Function()>;
    return _flaxConvertedResult;
  }

  Map<api.CustomSemanticsAction, void Function()>
  get _flaxSuperGet_customSemanticsActions {
    return super.customSemanticsActions;
  }

  @override
  String get identifier => _FlaxProxyDispatch14_get_identifier(this, 48);
  String get _flaxSuperGet_identifier {
    return super.identifier;
  }

  @override
  Object? get traversalParentIdentifier =>
      _FlaxProxyDispatch15_get_traversalParentIdentifier(this, 49);
  Object? get _flaxSuperGet_traversalParentIdentifier {
    return super.traversalParentIdentifier;
  }

  @override
  Object? get traversalChildIdentifier =>
      _FlaxProxyDispatch15_get_traversalChildIdentifier(this, 50);
  Object? get _flaxSuperGet_traversalChildIdentifier {
    return super.traversalChildIdentifier;
  }

  @override
  api1.SemanticsRole get role => _FlaxProxyDispatch14_get_role(this, 51);
  api1.SemanticsRole get _flaxSuperGet_role {
    return super.role;
  }

  @override
  String get label => _FlaxProxyDispatch14_get_label(this, 52);
  String get _flaxSuperGet_label {
    return super.label;
  }

  @override
  api.AttributedString get attributedLabel =>
      _FlaxProxyDispatch14_get_attributedLabel(this, 53);
  api.AttributedString get _flaxSuperGet_attributedLabel {
    return super.attributedLabel;
  }

  @override
  String get value => _FlaxProxyDispatch14_get_value(this, 54);
  String get _flaxSuperGet_value {
    return super.value;
  }

  @override
  api.AttributedString get attributedValue =>
      _FlaxProxyDispatch14_get_attributedValue(this, 55);
  api.AttributedString get _flaxSuperGet_attributedValue {
    return super.attributedValue;
  }

  @override
  String get increasedValue =>
      _FlaxProxyDispatch14_get_increasedValue(this, 56);
  String get _flaxSuperGet_increasedValue {
    return super.increasedValue;
  }

  @override
  api.AttributedString get attributedIncreasedValue =>
      _FlaxProxyDispatch14_get_attributedIncreasedValue(this, 57);
  api.AttributedString get _flaxSuperGet_attributedIncreasedValue {
    return super.attributedIncreasedValue;
  }

  @override
  String get decreasedValue =>
      _FlaxProxyDispatch14_get_decreasedValue(this, 58);
  String get _flaxSuperGet_decreasedValue {
    return super.decreasedValue;
  }

  @override
  api.AttributedString get attributedDecreasedValue =>
      _FlaxProxyDispatch14_get_attributedDecreasedValue(this, 59);
  api.AttributedString get _flaxSuperGet_attributedDecreasedValue {
    return super.attributedDecreasedValue;
  }

  @override
  String get hint => _FlaxProxyDispatch14_get_hint(this, 60);
  String get _flaxSuperGet_hint {
    return super.hint;
  }

  @override
  api.AttributedString get attributedHint =>
      _FlaxProxyDispatch14_get_attributedHint(this, 61);
  api.AttributedString get _flaxSuperGet_attributedHint {
    return super.attributedHint;
  }

  @override
  String get tooltip => _FlaxProxyDispatch14_get_tooltip(this, 62);
  String get _flaxSuperGet_tooltip {
    return super.tooltip;
  }

  @override
  api.SemanticsHintOverrides? get hintOverrides {
    final _flaxResult = _flaxPeer.call(63, const [], const {});
    if (!_flaxResult.$1) return super.hintOverrides;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsHintOverrides?;
    return _flaxConvertedResult;
  }

  api.SemanticsHintOverrides? get _flaxSuperGet_hintOverrides {
    return super.hintOverrides;
  }

  @override
  bool get scopesRoute {
    final _flaxResult = _flaxPeer.call(64, const [], const {});
    if (!_flaxResult.$1) return super.scopesRoute;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_scopesRoute {
    return super.scopesRoute;
  }

  @override
  bool get namesRoute {
    final _flaxResult = _flaxPeer.call(65, const [], const {});
    if (!_flaxResult.$1) return super.namesRoute;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_namesRoute {
    return super.namesRoute;
  }

  @override
  bool get isImage {
    final _flaxResult = _flaxPeer.call(66, const [], const {});
    if (!_flaxResult.$1) return super.isImage;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isImage {
    return super.isImage;
  }

  @override
  bool get liveRegion {
    final _flaxResult = _flaxPeer.call(67, const [], const {});
    if (!_flaxResult.$1) return super.liveRegion;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_liveRegion {
    return super.liveRegion;
  }

  @override
  api1.TextDirection? get textDirection =>
      _FlaxProxyDispatch15_get_textDirection(this, 68);
  api1.TextDirection? get _flaxSuperGet_textDirection {
    return super.textDirection;
  }

  @override
  bool get isSelected {
    final _flaxResult = _flaxPeer.call(69, const [], const {});
    if (!_flaxResult.$1) return super.isSelected;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isSelected {
    return super.isSelected;
  }

  @override
  bool? get isExpanded {
    final _flaxResult = _flaxPeer.call(70, const [], const {});
    if (!_flaxResult.$1) return super.isExpanded;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_isExpanded {
    return super.isExpanded;
  }

  @override
  bool? get isEnabled {
    final _flaxResult = _flaxPeer.call(71, const [], const {});
    if (!_flaxResult.$1) return super.isEnabled;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_isEnabled {
    return super.isEnabled;
  }

  @override
  bool? get isChecked {
    final _flaxResult = _flaxPeer.call(72, const [], const {});
    if (!_flaxResult.$1) return super.isChecked;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_isChecked {
    return super.isChecked;
  }

  @override
  bool? get isCheckStateMixed {
    final _flaxResult = _flaxPeer.call(73, const [], const {});
    if (!_flaxResult.$1) return super.isCheckStateMixed;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_isCheckStateMixed {
    return super.isCheckStateMixed;
  }

  @override
  bool? get isToggled {
    final _flaxResult = _flaxPeer.call(74, const [], const {});
    if (!_flaxResult.$1) return super.isToggled;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_isToggled {
    return super.isToggled;
  }

  @override
  bool get isInMutuallyExclusiveGroup {
    final _flaxResult = _flaxPeer.call(75, const [], const {});
    if (!_flaxResult.$1) return super.isInMutuallyExclusiveGroup;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isInMutuallyExclusiveGroup {
    return super.isInMutuallyExclusiveGroup;
  }

  @override
  bool get isFocusable {
    final _flaxResult = _flaxPeer.call(76, const [], const {});
    if (!_flaxResult.$1) return super.isFocusable;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isFocusable {
    return super.isFocusable;
  }

  @override
  bool? get isFocused {
    final _flaxResult = _flaxPeer.call(77, const [], const {});
    if (!_flaxResult.$1) return super.isFocused;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_isFocused {
    return super.isFocused;
  }

  @override
  api.AccessibilityFocusBlockType get accessibilityFocusBlockType {
    final _flaxResult = _flaxPeer.call(78, const [], const {});
    if (!_flaxResult.$1) return super.accessibilityFocusBlockType;
    final _flaxConvertedResult =
        _flaxResult.$2 as api.AccessibilityFocusBlockType;
    return _flaxConvertedResult;
  }

  api.AccessibilityFocusBlockType
  get _flaxSuperGet_accessibilityFocusBlockType {
    return super.accessibilityFocusBlockType;
  }

  @override
  bool get isButton {
    final _flaxResult = _flaxPeer.call(79, const [], const {});
    if (!_flaxResult.$1) return super.isButton;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isButton {
    return super.isButton;
  }

  @override
  bool get isLink {
    final _flaxResult = _flaxPeer.call(80, const [], const {});
    if (!_flaxResult.$1) return super.isLink;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isLink {
    return super.isLink;
  }

  @override
  api4.Uri? get linkUrl => _FlaxProxyDispatch15_get_linkUrl(this, 81);
  api4.Uri? get _flaxSuperGet_linkUrl {
    return super.linkUrl;
  }

  @override
  bool get isHeader {
    final _flaxResult = _flaxPeer.call(82, const [], const {});
    if (!_flaxResult.$1) return super.isHeader;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isHeader {
    return super.isHeader;
  }

  @override
  int get headingLevel => _FlaxProxyDispatch14_get_headingLevel(this, 83);
  int get _flaxSuperGet_headingLevel {
    return super.headingLevel;
  }

  @override
  bool get isSlider {
    final _flaxResult = _flaxPeer.call(84, const [], const {});
    if (!_flaxResult.$1) return super.isSlider;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isSlider {
    return super.isSlider;
  }

  @override
  bool get isKeyboardKey {
    final _flaxResult = _flaxPeer.call(85, const [], const {});
    if (!_flaxResult.$1) return super.isKeyboardKey;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isKeyboardKey {
    return super.isKeyboardKey;
  }

  @override
  bool get isHidden {
    final _flaxResult = _flaxPeer.call(86, const [], const {});
    if (!_flaxResult.$1) return super.isHidden;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isHidden {
    return super.isHidden;
  }

  @override
  bool get isTextField {
    final _flaxResult = _flaxPeer.call(87, const [], const {});
    if (!_flaxResult.$1) return super.isTextField;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isTextField {
    return super.isTextField;
  }

  @override
  bool get isReadOnly {
    final _flaxResult = _flaxPeer.call(88, const [], const {});
    if (!_flaxResult.$1) return super.isReadOnly;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isReadOnly {
    return super.isReadOnly;
  }

  @override
  bool get isObscured {
    final _flaxResult = _flaxPeer.call(89, const [], const {});
    if (!_flaxResult.$1) return super.isObscured;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isObscured {
    return super.isObscured;
  }

  @override
  bool get isMultiline {
    final _flaxResult = _flaxPeer.call(90, const [], const {});
    if (!_flaxResult.$1) return super.isMultiline;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isMultiline {
    return super.isMultiline;
  }

  @override
  bool? get isRequired => _FlaxProxyDispatch11_get_isRequired(this, 91);
  bool? get _flaxSuperGet_isRequired {
    return super.isRequired;
  }

  @override
  bool get hasImplicitScrolling {
    final _flaxResult = _flaxPeer.call(92, const [], const {});
    if (!_flaxResult.$1) return super.hasImplicitScrolling;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_hasImplicitScrolling {
    return super.hasImplicitScrolling;
  }

  @override
  api6.TextSelection? get textSelection =>
      _FlaxProxyDispatch14_get_textSelection(this, 93);
  api6.TextSelection? get _flaxSuperGet_textSelection {
    return super.textSelection;
  }

  @override
  double? get scrollPosition =>
      _FlaxProxyDispatch14_get_scrollPosition(this, 94);
  double? get _flaxSuperGet_scrollPosition {
    return super.scrollPosition;
  }

  @override
  double? get scrollExtentMax =>
      _FlaxProxyDispatch14_get_scrollExtentMax(this, 95);
  double? get _flaxSuperGet_scrollExtentMax {
    return super.scrollExtentMax;
  }

  @override
  double? get scrollExtentMin =>
      _FlaxProxyDispatch14_get_scrollExtentMin(this, 96);
  double? get _flaxSuperGet_scrollExtentMin {
    return super.scrollExtentMin;
  }

  @override
  Set<String>? get controlsNodes =>
      _FlaxProxyDispatch15_get_controlsNodes(this, 97);
  Set<String>? get _flaxSuperGet_controlsNodes {
    return super.controlsNodes;
  }

  @override
  api1.SemanticsValidationResult get validationResult =>
      _FlaxProxyDispatch15_get_validationResult(this, 98);
  api1.SemanticsValidationResult get _flaxSuperGet_validationResult {
    return super.validationResult;
  }

  @override
  api1.SemanticsHitTestBehavior get hitTestBehavior =>
      _FlaxProxyDispatch14_get_hitTestBehavior(this, 99);
  api1.SemanticsHitTestBehavior get _flaxSuperGet_hitTestBehavior {
    return super.hitTestBehavior;
  }

  @override
  api1.SemanticsInputType get inputType =>
      _FlaxProxyDispatch14_get_inputType(this, 100);
  api1.SemanticsInputType get _flaxSuperGet_inputType {
    return super.inputType;
  }

  @override
  String? get maxValue => _FlaxProxyDispatch15_get_maxValue(this, 101);
  String? get _flaxSuperGet_maxValue {
    return super.maxValue;
  }

  @override
  String? get minValue => _FlaxProxyDispatch15_get_minValue(this, 102);
  String? get _flaxSuperGet_minValue {
    return super.minValue;
  }

  @override
  Iterable<api.SemanticsTag>? get tagsForChildren {
    final _flaxResult = _flaxPeer.call(103, const [], const {});
    if (!_flaxResult.$1) return super.tagsForChildren;
    final _flaxConvertedResult = _flaxResult.$2 as Iterable<api.SemanticsTag>?;
    return _flaxConvertedResult;
  }

  Iterable<api.SemanticsTag>? get _flaxSuperGet_tagsForChildren {
    return super.tagsForChildren;
  }

  @override
  set isSemanticBoundary(bool value) {
    final result = _flaxPeer.call(104, [value], const {});
    if (!result.$1) {
      super.isSemanticBoundary = value;
      return;
    }
  }

  void _flaxSuperSet_isSemanticBoundary(bool value) {
    super.isSemanticBoundary = value;
  }

  @override
  set localeForSubtree(api1.Locale? value) {
    final result = _flaxPeer.call(105, [value], const {});
    if (!result.$1) {
      super.localeForSubtree = value;
      return;
    }
  }

  void _flaxSuperSet_localeForSubtree(api1.Locale? value) {
    super.localeForSubtree = value;
  }

  @override
  set locale(api1.Locale? value) {
    final result = _flaxPeer.call(106, [value], const {});
    if (!result.$1) {
      super.locale = value;
      return;
    }
  }

  void _flaxSuperSet_locale(api1.Locale? value) {
    super.locale = value;
  }

  @override
  set isBlockingUserActions(bool value) {
    final result = _flaxPeer.call(107, [value], const {});
    if (!result.$1) {
      super.isBlockingUserActions = value;
      return;
    }
  }

  void _flaxSuperSet_isBlockingUserActions(bool value) {
    super.isBlockingUserActions = value;
  }

  @override
  set explicitChildNodes(bool value) {
    final result = _flaxPeer.call(108, [value], const {});
    if (!result.$1) {
      super.explicitChildNodes = value;
      return;
    }
  }

  void _flaxSuperSet_explicitChildNodes(bool value) {
    super.explicitChildNodes = value;
  }

  @override
  set isBlockingSemanticsOfPreviouslyPaintedNodes(bool value) {
    final result = _flaxPeer.call(109, [value], const {});
    if (!result.$1) {
      super.isBlockingSemanticsOfPreviouslyPaintedNodes = value;
      return;
    }
  }

  void _flaxSuperSet_isBlockingSemanticsOfPreviouslyPaintedNodes(bool value) {
    super.isBlockingSemanticsOfPreviouslyPaintedNodes = value;
  }

  @override
  set onTap(void Function()? value) {
    final result = _flaxPeer.call(110, [value], const {});
    if (!result.$1) {
      super.onTap = value;
      return;
    }
  }

  void _flaxSuperSet_onTap(void Function()? value) {
    super.onTap = value;
  }

  @override
  set onLongPress(void Function()? value) {
    final result = _flaxPeer.call(111, [value], const {});
    if (!result.$1) {
      super.onLongPress = value;
      return;
    }
  }

  void _flaxSuperSet_onLongPress(void Function()? value) {
    super.onLongPress = value;
  }

  @override
  set onScrollLeft(void Function()? value) {
    final result = _flaxPeer.call(112, [value], const {});
    if (!result.$1) {
      super.onScrollLeft = value;
      return;
    }
  }

  void _flaxSuperSet_onScrollLeft(void Function()? value) {
    super.onScrollLeft = value;
  }

  @override
  set onDismiss(void Function()? value) {
    final result = _flaxPeer.call(113, [value], const {});
    if (!result.$1) {
      super.onDismiss = value;
      return;
    }
  }

  void _flaxSuperSet_onDismiss(void Function()? value) {
    super.onDismiss = value;
  }

  @override
  set onScrollRight(void Function()? value) {
    final result = _flaxPeer.call(114, [value], const {});
    if (!result.$1) {
      super.onScrollRight = value;
      return;
    }
  }

  void _flaxSuperSet_onScrollRight(void Function()? value) {
    super.onScrollRight = value;
  }

  @override
  set onScrollUp(void Function()? value) {
    final result = _flaxPeer.call(115, [value], const {});
    if (!result.$1) {
      super.onScrollUp = value;
      return;
    }
  }

  void _flaxSuperSet_onScrollUp(void Function()? value) {
    super.onScrollUp = value;
  }

  @override
  set onScrollDown(void Function()? value) {
    final result = _flaxPeer.call(116, [value], const {});
    if (!result.$1) {
      super.onScrollDown = value;
      return;
    }
  }

  void _flaxSuperSet_onScrollDown(void Function()? value) {
    super.onScrollDown = value;
  }

  @override
  set onScrollToOffset(void Function(api1.Offset targetOffset)? value) {
    final result = _flaxPeer.call(117, [value], const {});
    if (!result.$1) {
      super.onScrollToOffset = value;
      return;
    }
  }

  void _flaxSuperSet_onScrollToOffset(
    void Function(api1.Offset targetOffset)? value,
  ) {
    super.onScrollToOffset = value;
  }

  @override
  set onIncrease(void Function()? value) {
    final result = _flaxPeer.call(118, [value], const {});
    if (!result.$1) {
      super.onIncrease = value;
      return;
    }
  }

  void _flaxSuperSet_onIncrease(void Function()? value) {
    super.onIncrease = value;
  }

  @override
  set onDecrease(void Function()? value) {
    final result = _flaxPeer.call(119, [value], const {});
    if (!result.$1) {
      super.onDecrease = value;
      return;
    }
  }

  void _flaxSuperSet_onDecrease(void Function()? value) {
    super.onDecrease = value;
  }

  @override
  set onCopy(void Function()? value) {
    final result = _flaxPeer.call(120, [value], const {});
    if (!result.$1) {
      super.onCopy = value;
      return;
    }
  }

  void _flaxSuperSet_onCopy(void Function()? value) {
    super.onCopy = value;
  }

  @override
  set onCut(void Function()? value) {
    final result = _flaxPeer.call(121, [value], const {});
    if (!result.$1) {
      super.onCut = value;
      return;
    }
  }

  void _flaxSuperSet_onCut(void Function()? value) {
    super.onCut = value;
  }

  @override
  set onPaste(void Function()? value) {
    final result = _flaxPeer.call(122, [value], const {});
    if (!result.$1) {
      super.onPaste = value;
      return;
    }
  }

  void _flaxSuperSet_onPaste(void Function()? value) {
    super.onPaste = value;
  }

  @override
  set onShowOnScreen(void Function()? value) {
    final result = _flaxPeer.call(123, [value], const {});
    if (!result.$1) {
      super.onShowOnScreen = value;
      return;
    }
  }

  void _flaxSuperSet_onShowOnScreen(void Function()? value) {
    super.onShowOnScreen = value;
  }

  @override
  set onMoveCursorForwardByCharacter(
    void Function(bool extendSelection)? value,
  ) {
    final result = _flaxPeer.call(124, [value], const {});
    if (!result.$1) {
      super.onMoveCursorForwardByCharacter = value;
      return;
    }
  }

  void _flaxSuperSet_onMoveCursorForwardByCharacter(
    void Function(bool extendSelection)? value,
  ) {
    super.onMoveCursorForwardByCharacter = value;
  }

  @override
  set onMoveCursorBackwardByCharacter(
    void Function(bool extendSelection)? value,
  ) {
    final result = _flaxPeer.call(125, [value], const {});
    if (!result.$1) {
      super.onMoveCursorBackwardByCharacter = value;
      return;
    }
  }

  void _flaxSuperSet_onMoveCursorBackwardByCharacter(
    void Function(bool extendSelection)? value,
  ) {
    super.onMoveCursorBackwardByCharacter = value;
  }

  @override
  set onMoveCursorForwardByWord(void Function(bool extendSelection)? value) {
    final result = _flaxPeer.call(126, [value], const {});
    if (!result.$1) {
      super.onMoveCursorForwardByWord = value;
      return;
    }
  }

  void _flaxSuperSet_onMoveCursorForwardByWord(
    void Function(bool extendSelection)? value,
  ) {
    super.onMoveCursorForwardByWord = value;
  }

  @override
  set onMoveCursorBackwardByWord(void Function(bool extendSelection)? value) {
    final result = _flaxPeer.call(127, [value], const {});
    if (!result.$1) {
      super.onMoveCursorBackwardByWord = value;
      return;
    }
  }

  void _flaxSuperSet_onMoveCursorBackwardByWord(
    void Function(bool extendSelection)? value,
  ) {
    super.onMoveCursorBackwardByWord = value;
  }

  @override
  set onSetSelection(void Function(api6.TextSelection selection)? value) {
    final result = _flaxPeer.call(128, [value], const {});
    if (!result.$1) {
      super.onSetSelection = value;
      return;
    }
  }

  void _flaxSuperSet_onSetSelection(
    void Function(api6.TextSelection selection)? value,
  ) {
    super.onSetSelection = value;
  }

  @override
  set onSetText(void Function(String text)? value) {
    final result = _flaxPeer.call(129, [value], const {});
    if (!result.$1) {
      super.onSetText = value;
      return;
    }
  }

  void _flaxSuperSet_onSetText(void Function(String text)? value) {
    super.onSetText = value;
  }

  @override
  set onDidGainAccessibilityFocus(void Function()? value) {
    final result = _flaxPeer.call(130, [value], const {});
    if (!result.$1) {
      super.onDidGainAccessibilityFocus = value;
      return;
    }
  }

  void _flaxSuperSet_onDidGainAccessibilityFocus(void Function()? value) {
    super.onDidGainAccessibilityFocus = value;
  }

  @override
  set onDidLoseAccessibilityFocus(void Function()? value) {
    final result = _flaxPeer.call(131, [value], const {});
    if (!result.$1) {
      super.onDidLoseAccessibilityFocus = value;
      return;
    }
  }

  void _flaxSuperSet_onDidLoseAccessibilityFocus(void Function()? value) {
    super.onDidLoseAccessibilityFocus = value;
  }

  @override
  set onFocus(void Function()? value) {
    final result = _flaxPeer.call(132, [value], const {});
    if (!result.$1) {
      super.onFocus = value;
      return;
    }
  }

  void _flaxSuperSet_onFocus(void Function()? value) {
    super.onFocus = value;
  }

  @override
  set onExpand(void Function()? value) {
    final result = _flaxPeer.call(133, [value], const {});
    if (!result.$1) {
      super.onExpand = value;
      return;
    }
  }

  void _flaxSuperSet_onExpand(void Function()? value) {
    super.onExpand = value;
  }

  @override
  set onCollapse(void Function()? value) {
    final result = _flaxPeer.call(134, [value], const {});
    if (!result.$1) {
      super.onCollapse = value;
      return;
    }
  }

  void _flaxSuperSet_onCollapse(void Function()? value) {
    super.onCollapse = value;
  }

  @override
  set childConfigurationsDelegate(
    api.ChildSemanticsConfigurationsResult Function(
      List<api.SemanticsConfiguration> p0,
    )?
    value,
  ) {
    final result = _flaxPeer.call(135, [value], const {});
    if (!result.$1) {
      super.childConfigurationsDelegate = value;
      return;
    }
  }

  void _flaxSuperSet_childConfigurationsDelegate(
    api.ChildSemanticsConfigurationsResult Function(
      List<api.SemanticsConfiguration> p0,
    )?
    value,
  ) {
    super.childConfigurationsDelegate = value;
  }

  @override
  set sortKey(api.SemanticsSortKey? value) {
    final result = _flaxPeer.call(136, [value], const {});
    if (!result.$1) {
      super.sortKey = value;
      return;
    }
  }

  void _flaxSuperSet_sortKey(api.SemanticsSortKey? value) {
    super.sortKey = value;
  }

  @override
  set indexInParent(int? value) {
    final result = _flaxPeer.call(137, [value], const {});
    if (!result.$1) {
      super.indexInParent = value;
      return;
    }
  }

  void _flaxSuperSet_indexInParent(int? value) {
    super.indexInParent = value;
  }

  @override
  set scrollChildCount(int? value) {
    final result = _flaxPeer.call(138, [value], const {});
    if (!result.$1) {
      super.scrollChildCount = value;
      return;
    }
  }

  void _flaxSuperSet_scrollChildCount(int? value) {
    super.scrollChildCount = value;
  }

  @override
  set scrollIndex(int? value) {
    final result = _flaxPeer.call(139, [value], const {});
    if (!result.$1) {
      super.scrollIndex = value;
      return;
    }
  }

  void _flaxSuperSet_scrollIndex(int? value) {
    super.scrollIndex = value;
  }

  @override
  set platformViewId(int? value) {
    final result = _flaxPeer.call(140, [value], const {});
    if (!result.$1) {
      super.platformViewId = value;
      return;
    }
  }

  void _flaxSuperSet_platformViewId(int? value) {
    super.platformViewId = value;
  }

  @override
  set maxValueLength(int? value) {
    final result = _flaxPeer.call(141, [value], const {});
    if (!result.$1) {
      super.maxValueLength = value;
      return;
    }
  }

  void _flaxSuperSet_maxValueLength(int? value) {
    super.maxValueLength = value;
  }

  @override
  set currentValueLength(int? value) {
    final result = _flaxPeer.call(142, [value], const {});
    if (!result.$1) {
      super.currentValueLength = value;
      return;
    }
  }

  void _flaxSuperSet_currentValueLength(int? value) {
    super.currentValueLength = value;
  }

  @override
  set isMergingSemanticsOfDescendants(bool value) {
    final result = _flaxPeer.call(143, [value], const {});
    if (!result.$1) {
      super.isMergingSemanticsOfDescendants = value;
      return;
    }
  }

  void _flaxSuperSet_isMergingSemanticsOfDescendants(bool value) {
    super.isMergingSemanticsOfDescendants = value;
  }

  @override
  set customSemanticsActions(
    Map<api.CustomSemanticsAction, void Function()> value,
  ) {
    final result = _flaxPeer.call(144, [value], const {});
    if (!result.$1) {
      super.customSemanticsActions = value;
      return;
    }
  }

  void _flaxSuperSet_customSemanticsActions(
    Map<api.CustomSemanticsAction, void Function()> value,
  ) {
    super.customSemanticsActions = value;
  }

  @override
  set identifier(String value) {
    final result = _flaxPeer.call(145, [value], const {});
    if (!result.$1) {
      super.identifier = value;
      return;
    }
  }

  void _flaxSuperSet_identifier(String value) {
    super.identifier = value;
  }

  @override
  set traversalParentIdentifier(Object? value) {
    final result = _flaxPeer.call(146, [value], const {});
    if (!result.$1) {
      super.traversalParentIdentifier = value;
      return;
    }
  }

  void _flaxSuperSet_traversalParentIdentifier(Object? value) {
    super.traversalParentIdentifier = value;
  }

  @override
  set traversalChildIdentifier(Object? value) {
    final result = _flaxPeer.call(147, [value], const {});
    if (!result.$1) {
      super.traversalChildIdentifier = value;
      return;
    }
  }

  void _flaxSuperSet_traversalChildIdentifier(Object? value) {
    super.traversalChildIdentifier = value;
  }

  @override
  set role(api1.SemanticsRole value) {
    final result = _flaxPeer.call(148, [value], const {});
    if (!result.$1) {
      super.role = value;
      return;
    }
  }

  void _flaxSuperSet_role(api1.SemanticsRole value) {
    super.role = value;
  }

  @override
  set label(String value) {
    final result = _flaxPeer.call(149, [value], const {});
    if (!result.$1) {
      super.label = value;
      return;
    }
  }

  void _flaxSuperSet_label(String value) {
    super.label = value;
  }

  @override
  set attributedLabel(api.AttributedString value) {
    final result = _flaxPeer.call(150, [value], const {});
    if (!result.$1) {
      super.attributedLabel = value;
      return;
    }
  }

  void _flaxSuperSet_attributedLabel(api.AttributedString value) {
    super.attributedLabel = value;
  }

  @override
  set value(String value) {
    final result = _flaxPeer.call(151, [value], const {});
    if (!result.$1) {
      super.value = value;
      return;
    }
  }

  void _flaxSuperSet_value(String value) {
    super.value = value;
  }

  @override
  set attributedValue(api.AttributedString value) {
    final result = _flaxPeer.call(152, [value], const {});
    if (!result.$1) {
      super.attributedValue = value;
      return;
    }
  }

  void _flaxSuperSet_attributedValue(api.AttributedString value) {
    super.attributedValue = value;
  }

  @override
  set increasedValue(String value) {
    final result = _flaxPeer.call(153, [value], const {});
    if (!result.$1) {
      super.increasedValue = value;
      return;
    }
  }

  void _flaxSuperSet_increasedValue(String value) {
    super.increasedValue = value;
  }

  @override
  set attributedIncreasedValue(api.AttributedString value) {
    final result = _flaxPeer.call(154, [value], const {});
    if (!result.$1) {
      super.attributedIncreasedValue = value;
      return;
    }
  }

  void _flaxSuperSet_attributedIncreasedValue(api.AttributedString value) {
    super.attributedIncreasedValue = value;
  }

  @override
  set decreasedValue(String value) {
    final result = _flaxPeer.call(155, [value], const {});
    if (!result.$1) {
      super.decreasedValue = value;
      return;
    }
  }

  void _flaxSuperSet_decreasedValue(String value) {
    super.decreasedValue = value;
  }

  @override
  set attributedDecreasedValue(api.AttributedString value) {
    final result = _flaxPeer.call(156, [value], const {});
    if (!result.$1) {
      super.attributedDecreasedValue = value;
      return;
    }
  }

  void _flaxSuperSet_attributedDecreasedValue(api.AttributedString value) {
    super.attributedDecreasedValue = value;
  }

  @override
  set hint(String value) {
    final result = _flaxPeer.call(157, [value], const {});
    if (!result.$1) {
      super.hint = value;
      return;
    }
  }

  void _flaxSuperSet_hint(String value) {
    super.hint = value;
  }

  @override
  set attributedHint(api.AttributedString value) {
    final result = _flaxPeer.call(158, [value], const {});
    if (!result.$1) {
      super.attributedHint = value;
      return;
    }
  }

  void _flaxSuperSet_attributedHint(api.AttributedString value) {
    super.attributedHint = value;
  }

  @override
  set tooltip(String value) {
    final result = _flaxPeer.call(159, [value], const {});
    if (!result.$1) {
      super.tooltip = value;
      return;
    }
  }

  void _flaxSuperSet_tooltip(String value) {
    super.tooltip = value;
  }

  @override
  set hintOverrides(api.SemanticsHintOverrides? value) {
    final result = _flaxPeer.call(160, [value], const {});
    if (!result.$1) {
      super.hintOverrides = value;
      return;
    }
  }

  void _flaxSuperSet_hintOverrides(api.SemanticsHintOverrides? value) {
    super.hintOverrides = value;
  }

  @override
  set scopesRoute(bool value) {
    final result = _flaxPeer.call(161, [value], const {});
    if (!result.$1) {
      super.scopesRoute = value;
      return;
    }
  }

  void _flaxSuperSet_scopesRoute(bool value) {
    super.scopesRoute = value;
  }

  @override
  set namesRoute(bool value) {
    final result = _flaxPeer.call(162, [value], const {});
    if (!result.$1) {
      super.namesRoute = value;
      return;
    }
  }

  void _flaxSuperSet_namesRoute(bool value) {
    super.namesRoute = value;
  }

  @override
  set isImage(bool value) {
    final result = _flaxPeer.call(163, [value], const {});
    if (!result.$1) {
      super.isImage = value;
      return;
    }
  }

  void _flaxSuperSet_isImage(bool value) {
    super.isImage = value;
  }

  @override
  set liveRegion(bool value) {
    final result = _flaxPeer.call(164, [value], const {});
    if (!result.$1) {
      super.liveRegion = value;
      return;
    }
  }

  void _flaxSuperSet_liveRegion(bool value) {
    super.liveRegion = value;
  }

  @override
  set textDirection(api1.TextDirection? value) {
    final result = _flaxPeer.call(165, [value], const {});
    if (!result.$1) {
      super.textDirection = value;
      return;
    }
  }

  void _flaxSuperSet_textDirection(api1.TextDirection? value) {
    super.textDirection = value;
  }

  @override
  set isSelected(bool value) {
    final result = _flaxPeer.call(166, [value], const {});
    if (!result.$1) {
      super.isSelected = value;
      return;
    }
  }

  void _flaxSuperSet_isSelected(bool value) {
    super.isSelected = value;
  }

  @override
  set isExpanded(bool? value) {
    final result = _flaxPeer.call(167, [value], const {});
    if (!result.$1) {
      super.isExpanded = value;
      return;
    }
  }

  void _flaxSuperSet_isExpanded(bool? value) {
    super.isExpanded = value;
  }

  @override
  set isEnabled(bool? value) {
    final result = _flaxPeer.call(168, [value], const {});
    if (!result.$1) {
      super.isEnabled = value;
      return;
    }
  }

  void _flaxSuperSet_isEnabled(bool? value) {
    super.isEnabled = value;
  }

  @override
  set isChecked(bool? value) {
    final result = _flaxPeer.call(169, [value], const {});
    if (!result.$1) {
      super.isChecked = value;
      return;
    }
  }

  void _flaxSuperSet_isChecked(bool? value) {
    super.isChecked = value;
  }

  @override
  set isCheckStateMixed(bool? value) {
    final result = _flaxPeer.call(170, [value], const {});
    if (!result.$1) {
      super.isCheckStateMixed = value;
      return;
    }
  }

  void _flaxSuperSet_isCheckStateMixed(bool? value) {
    super.isCheckStateMixed = value;
  }

  @override
  set isToggled(bool? value) {
    final result = _flaxPeer.call(171, [value], const {});
    if (!result.$1) {
      super.isToggled = value;
      return;
    }
  }

  void _flaxSuperSet_isToggled(bool? value) {
    super.isToggled = value;
  }

  @override
  set isInMutuallyExclusiveGroup(bool value) {
    final result = _flaxPeer.call(172, [value], const {});
    if (!result.$1) {
      super.isInMutuallyExclusiveGroup = value;
      return;
    }
  }

  void _flaxSuperSet_isInMutuallyExclusiveGroup(bool value) {
    super.isInMutuallyExclusiveGroup = value;
  }

  @override
  set isFocusable(bool value) {
    final result = _flaxPeer.call(173, [value], const {});
    if (!result.$1) {
      super.isFocusable = value;
      return;
    }
  }

  void _flaxSuperSet_isFocusable(bool value) {
    super.isFocusable = value;
  }

  @override
  set isFocused(bool? value) {
    final result = _flaxPeer.call(174, [value], const {});
    if (!result.$1) {
      super.isFocused = value;
      return;
    }
  }

  void _flaxSuperSet_isFocused(bool? value) {
    super.isFocused = value;
  }

  @override
  set accessibilityFocusBlockType(api.AccessibilityFocusBlockType value) {
    final result = _flaxPeer.call(175, [value], const {});
    if (!result.$1) {
      super.accessibilityFocusBlockType = value;
      return;
    }
  }

  void _flaxSuperSet_accessibilityFocusBlockType(
    api.AccessibilityFocusBlockType value,
  ) {
    super.accessibilityFocusBlockType = value;
  }

  @override
  set isButton(bool value) {
    final result = _flaxPeer.call(176, [value], const {});
    if (!result.$1) {
      super.isButton = value;
      return;
    }
  }

  void _flaxSuperSet_isButton(bool value) {
    super.isButton = value;
  }

  @override
  set isLink(bool value) {
    final result = _flaxPeer.call(177, [value], const {});
    if (!result.$1) {
      super.isLink = value;
      return;
    }
  }

  void _flaxSuperSet_isLink(bool value) {
    super.isLink = value;
  }

  @override
  set linkUrl(api4.Uri? value) {
    final result = _flaxPeer.call(178, [value], const {});
    if (!result.$1) {
      super.linkUrl = value;
      return;
    }
  }

  void _flaxSuperSet_linkUrl(api4.Uri? value) {
    super.linkUrl = value;
  }

  @override
  set isHeader(bool value) {
    final result = _flaxPeer.call(179, [value], const {});
    if (!result.$1) {
      super.isHeader = value;
      return;
    }
  }

  void _flaxSuperSet_isHeader(bool value) {
    super.isHeader = value;
  }

  @override
  set headingLevel(int value) {
    final result = _flaxPeer.call(180, [value], const {});
    if (!result.$1) {
      super.headingLevel = value;
      return;
    }
  }

  void _flaxSuperSet_headingLevel(int value) {
    super.headingLevel = value;
  }

  @override
  set isSlider(bool value) {
    final result = _flaxPeer.call(181, [value], const {});
    if (!result.$1) {
      super.isSlider = value;
      return;
    }
  }

  void _flaxSuperSet_isSlider(bool value) {
    super.isSlider = value;
  }

  @override
  set isKeyboardKey(bool value) {
    final result = _flaxPeer.call(182, [value], const {});
    if (!result.$1) {
      super.isKeyboardKey = value;
      return;
    }
  }

  void _flaxSuperSet_isKeyboardKey(bool value) {
    super.isKeyboardKey = value;
  }

  @override
  set isHidden(bool value) {
    final result = _flaxPeer.call(183, [value], const {});
    if (!result.$1) {
      super.isHidden = value;
      return;
    }
  }

  void _flaxSuperSet_isHidden(bool value) {
    super.isHidden = value;
  }

  @override
  set isTextField(bool value) {
    final result = _flaxPeer.call(184, [value], const {});
    if (!result.$1) {
      super.isTextField = value;
      return;
    }
  }

  void _flaxSuperSet_isTextField(bool value) {
    super.isTextField = value;
  }

  @override
  set isReadOnly(bool value) {
    final result = _flaxPeer.call(185, [value], const {});
    if (!result.$1) {
      super.isReadOnly = value;
      return;
    }
  }

  void _flaxSuperSet_isReadOnly(bool value) {
    super.isReadOnly = value;
  }

  @override
  set isObscured(bool value) {
    final result = _flaxPeer.call(186, [value], const {});
    if (!result.$1) {
      super.isObscured = value;
      return;
    }
  }

  void _flaxSuperSet_isObscured(bool value) {
    super.isObscured = value;
  }

  @override
  set isMultiline(bool value) {
    final result = _flaxPeer.call(187, [value], const {});
    if (!result.$1) {
      super.isMultiline = value;
      return;
    }
  }

  void _flaxSuperSet_isMultiline(bool value) {
    super.isMultiline = value;
  }

  @override
  set isRequired(bool? value) {
    final result = _flaxPeer.call(188, [value], const {});
    if (!result.$1) {
      super.isRequired = value;
      return;
    }
  }

  void _flaxSuperSet_isRequired(bool? value) {
    super.isRequired = value;
  }

  @override
  set hasImplicitScrolling(bool value) {
    final result = _flaxPeer.call(189, [value], const {});
    if (!result.$1) {
      super.hasImplicitScrolling = value;
      return;
    }
  }

  void _flaxSuperSet_hasImplicitScrolling(bool value) {
    super.hasImplicitScrolling = value;
  }

  @override
  set textSelection(api6.TextSelection? value) {
    final result = _flaxPeer.call(190, [value], const {});
    if (!result.$1) {
      super.textSelection = value;
      return;
    }
  }

  void _flaxSuperSet_textSelection(api6.TextSelection? value) {
    super.textSelection = value;
  }

  @override
  set scrollPosition(double? value) {
    final result = _flaxPeer.call(191, [value], const {});
    if (!result.$1) {
      super.scrollPosition = value;
      return;
    }
  }

  void _flaxSuperSet_scrollPosition(double? value) {
    super.scrollPosition = value;
  }

  @override
  set scrollExtentMax(double? value) {
    final result = _flaxPeer.call(192, [value], const {});
    if (!result.$1) {
      super.scrollExtentMax = value;
      return;
    }
  }

  void _flaxSuperSet_scrollExtentMax(double? value) {
    super.scrollExtentMax = value;
  }

  @override
  set scrollExtentMin(double? value) {
    final result = _flaxPeer.call(193, [value], const {});
    if (!result.$1) {
      super.scrollExtentMin = value;
      return;
    }
  }

  void _flaxSuperSet_scrollExtentMin(double? value) {
    super.scrollExtentMin = value;
  }

  @override
  set controlsNodes(Set<String>? value) {
    final result = _flaxPeer.call(194, [value], const {});
    if (!result.$1) {
      super.controlsNodes = value;
      return;
    }
  }

  void _flaxSuperSet_controlsNodes(Set<String>? value) {
    super.controlsNodes = value;
  }

  @override
  set validationResult(api1.SemanticsValidationResult value) {
    final result = _flaxPeer.call(195, [value], const {});
    if (!result.$1) {
      super.validationResult = value;
      return;
    }
  }

  void _flaxSuperSet_validationResult(api1.SemanticsValidationResult value) {
    super.validationResult = value;
  }

  @override
  set hitTestBehavior(api1.SemanticsHitTestBehavior value) {
    final result = _flaxPeer.call(196, [value], const {});
    if (!result.$1) {
      super.hitTestBehavior = value;
      return;
    }
  }

  void _flaxSuperSet_hitTestBehavior(api1.SemanticsHitTestBehavior value) {
    super.hitTestBehavior = value;
  }

  @override
  set inputType(api1.SemanticsInputType value) {
    final result = _flaxPeer.call(197, [value], const {});
    if (!result.$1) {
      super.inputType = value;
      return;
    }
  }

  void _flaxSuperSet_inputType(api1.SemanticsInputType value) {
    super.inputType = value;
  }

  @override
  set maxValue(String? value) {
    final result = _flaxPeer.call(198, [value], const {});
    if (!result.$1) {
      super.maxValue = value;
      return;
    }
  }

  void _flaxSuperSet_maxValue(String? value) {
    super.maxValue = value;
  }

  @override
  set minValue(String? value) {
    final result = _flaxPeer.call(199, [value], const {});
    if (!result.$1) {
      super.minValue = value;
      return;
    }
  }

  void _flaxSuperSet_minValue(String? value) {
    super.minValue = value;
  }
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _SemanticsDataProxy extends api.SemanticsData
    implements _FlaxProxyDispatch14, _FlaxProxyDispatch15, _FlaxProxyDispatch9 {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _SemanticsDataProxy(
    this._flaxPeer, {
    required api1.SemanticsFlags super.flagsCollection,
    required int super.actions,
    required String super.identifier,
    required Object? super.traversalParentIdentifier,
    required Object? super.traversalChildIdentifier,
    required api.AttributedString super.attributedLabel,
    required api.AttributedString super.attributedValue,
    required api.AttributedString super.attributedIncreasedValue,
    required api.AttributedString super.attributedDecreasedValue,
    required api.AttributedString super.attributedHint,
    required String super.tooltip,
    required api1.TextDirection? super.textDirection,
    required api1.Rect super.rect,
    required api6.TextSelection? super.textSelection,
    required int? super.scrollIndex,
    required int? super.scrollChildCount,
    required double? super.scrollPosition,
    required double? super.scrollExtentMax,
    required double? super.scrollExtentMin,
    required int? super.platformViewId,
    required int? super.maxValueLength,
    required int? super.currentValueLength,
    required int super.headingLevel,
    required api4.Uri? super.linkUrl,
    required api1.SemanticsRole super.role,
    required Set<String>? super.controlsNodes,
    required api1.SemanticsValidationResult super.validationResult,
    required api1.SemanticsHitTestBehavior super.hitTestBehavior,
    required api1.SemanticsInputType super.inputType,
    required api1.Locale? super.locale,
    required String? super.minValue,
    required String? super.maxValue,
    Set<api.SemanticsTag>? super.tags,
    api5.Matrix4? super.transform,
    List<int>? super.customSemanticsActionIds,
  });
  @override
  String toStringShort() {
    return _FlaxProxyDispatch9_call_toStringShort(this, 0);
  }

  String _flaxSuper_toStringShort() {
    return super.toStringShort();
  }

  @override
  String toString({Object? minLevel = _flaxOmitted}) {
    return _FlaxProxyDispatch9_call_toString(this, 1, minLevel: minLevel);
  }

  String _flaxSuper_toString({Object? minLevel = _flaxOmitted}) {
    if (identical(minLevel, _flaxOmitted)) {
      return super.toString();
    }
    return super.toString(minLevel: minLevel as api2.DiagnosticLevel);
  }

  @override
  api2.DiagnosticsNode toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{
      if (!identical(name, _flaxOmitted)) "name": name,
      if (!identical(style, _flaxOmitted)) "style": style,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toDiagnosticsNode(name: name, style: style);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DiagnosticsNode;
    return _flaxConvertedResult;
  }

  api2.DiagnosticsNode _flaxSuper_toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    if (identical(name, _flaxOmitted)) {
      if (identical(style, _flaxOmitted)) {
        return super.toDiagnosticsNode();
      }
      return super.toDiagnosticsNode(
        style: style as api2.DiagnosticsTreeStyle?,
      );
    }
    if (identical(style, _flaxOmitted)) {
      return super.toDiagnosticsNode(name: name as String?);
    }
    return super.toDiagnosticsNode(
      name: name as String?,
      style: style as api2.DiagnosticsTreeStyle?,
    );
  }

  @override
  // ignore: must_call_super
  void debugFillProperties(api2.DiagnosticPropertiesBuilder properties) {
    if (!_flaxPeer.active) return;
    final _flaxPreviousSuperMember = _flaxActiveSuperMember;
    final _flaxPreviousCalledSuper = _flaxCalledSuper;
    _flaxActiveSuperMember = "debugFillProperties";
    _flaxCalledSuper = false;
    try {
      final _flaxResult = _flaxPeer.call(3, <Object?>[
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
    api2.DiagnosticPropertiesBuilder properties,
  ) {
    if (_flaxActiveSuperMember == "debugFillProperties")
      _flaxCalledSuper = true;
    super.debugFillProperties(properties);
    return;
  }

  @override
  bool hasFlag(api1.SemanticsFlag flag) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[flag], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_hasFlag(flag);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_hasFlag(api1.SemanticsFlag flag) {
    return super.hasFlag(flag);
  }

  @override
  bool hasAction(api1.SemanticsAction action) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      action,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_hasAction(action);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_hasAction(api1.SemanticsAction action) {
    return super.hasAction(action);
  }

  @override
  int get flags {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.flags;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_flags {
    return super.flags;
  }

  @override
  api1.SemanticsFlags get flagsCollection {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.flagsCollection;
    final _flaxConvertedResult = _flaxResult.$2 as api1.SemanticsFlags;
    return _flaxConvertedResult;
  }

  api1.SemanticsFlags get _flaxSuperGet_flagsCollection {
    return super.flagsCollection;
  }

  @override
  int get actions {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.actions;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_actions {
    return super.actions;
  }

  @override
  String get identifier => _FlaxProxyDispatch14_get_identifier(this, 9);
  String get _flaxSuperGet_identifier {
    return super.identifier;
  }

  @override
  Object? get traversalParentIdentifier =>
      _FlaxProxyDispatch15_get_traversalParentIdentifier(this, 10);
  Object? get _flaxSuperGet_traversalParentIdentifier {
    return super.traversalParentIdentifier;
  }

  @override
  Object? get traversalChildIdentifier =>
      _FlaxProxyDispatch15_get_traversalChildIdentifier(this, 11);
  Object? get _flaxSuperGet_traversalChildIdentifier {
    return super.traversalChildIdentifier;
  }

  @override
  String get label => _FlaxProxyDispatch14_get_label(this, 12);
  String get _flaxSuperGet_label {
    return super.label;
  }

  @override
  api.AttributedString get attributedLabel =>
      _FlaxProxyDispatch14_get_attributedLabel(this, 13);
  api.AttributedString get _flaxSuperGet_attributedLabel {
    return super.attributedLabel;
  }

  @override
  String get value => _FlaxProxyDispatch14_get_value(this, 14);
  String get _flaxSuperGet_value {
    return super.value;
  }

  @override
  api.AttributedString get attributedValue =>
      _FlaxProxyDispatch14_get_attributedValue(this, 15);
  api.AttributedString get _flaxSuperGet_attributedValue {
    return super.attributedValue;
  }

  @override
  String get increasedValue =>
      _FlaxProxyDispatch14_get_increasedValue(this, 16);
  String get _flaxSuperGet_increasedValue {
    return super.increasedValue;
  }

  @override
  api.AttributedString get attributedIncreasedValue =>
      _FlaxProxyDispatch14_get_attributedIncreasedValue(this, 17);
  api.AttributedString get _flaxSuperGet_attributedIncreasedValue {
    return super.attributedIncreasedValue;
  }

  @override
  String get decreasedValue =>
      _FlaxProxyDispatch14_get_decreasedValue(this, 18);
  String get _flaxSuperGet_decreasedValue {
    return super.decreasedValue;
  }

  @override
  api.AttributedString get attributedDecreasedValue =>
      _FlaxProxyDispatch14_get_attributedDecreasedValue(this, 19);
  api.AttributedString get _flaxSuperGet_attributedDecreasedValue {
    return super.attributedDecreasedValue;
  }

  @override
  String get hint => _FlaxProxyDispatch14_get_hint(this, 20);
  String get _flaxSuperGet_hint {
    return super.hint;
  }

  @override
  api.AttributedString get attributedHint =>
      _FlaxProxyDispatch14_get_attributedHint(this, 21);
  api.AttributedString get _flaxSuperGet_attributedHint {
    return super.attributedHint;
  }

  @override
  String get tooltip => _FlaxProxyDispatch14_get_tooltip(this, 22);
  String get _flaxSuperGet_tooltip {
    return super.tooltip;
  }

  @override
  int get headingLevel => _FlaxProxyDispatch14_get_headingLevel(this, 23);
  int get _flaxSuperGet_headingLevel {
    return super.headingLevel;
  }

  @override
  api1.TextDirection? get textDirection =>
      _FlaxProxyDispatch15_get_textDirection(this, 24);
  api1.TextDirection? get _flaxSuperGet_textDirection {
    return super.textDirection;
  }

  @override
  api6.TextSelection? get textSelection =>
      _FlaxProxyDispatch14_get_textSelection(this, 25);
  api6.TextSelection? get _flaxSuperGet_textSelection {
    return super.textSelection;
  }

  @override
  int? get scrollChildCount =>
      _FlaxProxyDispatch14_get_scrollChildCount(this, 26);
  int? get _flaxSuperGet_scrollChildCount {
    return super.scrollChildCount;
  }

  @override
  int? get scrollIndex => _FlaxProxyDispatch14_get_scrollIndex(this, 27);
  int? get _flaxSuperGet_scrollIndex {
    return super.scrollIndex;
  }

  @override
  double? get scrollPosition =>
      _FlaxProxyDispatch14_get_scrollPosition(this, 28);
  double? get _flaxSuperGet_scrollPosition {
    return super.scrollPosition;
  }

  @override
  double? get scrollExtentMax =>
      _FlaxProxyDispatch14_get_scrollExtentMax(this, 29);
  double? get _flaxSuperGet_scrollExtentMax {
    return super.scrollExtentMax;
  }

  @override
  double? get scrollExtentMin =>
      _FlaxProxyDispatch14_get_scrollExtentMin(this, 30);
  double? get _flaxSuperGet_scrollExtentMin {
    return super.scrollExtentMin;
  }

  @override
  int? get platformViewId => _FlaxProxyDispatch14_get_platformViewId(this, 31);
  int? get _flaxSuperGet_platformViewId {
    return super.platformViewId;
  }

  @override
  int? get maxValueLength => _FlaxProxyDispatch15_get_maxValueLength(this, 32);
  int? get _flaxSuperGet_maxValueLength {
    return super.maxValueLength;
  }

  @override
  int? get currentValueLength =>
      _FlaxProxyDispatch15_get_currentValueLength(this, 33);
  int? get _flaxSuperGet_currentValueLength {
    return super.currentValueLength;
  }

  @override
  api4.Uri? get linkUrl => _FlaxProxyDispatch15_get_linkUrl(this, 34);
  api4.Uri? get _flaxSuperGet_linkUrl {
    return super.linkUrl;
  }

  @override
  api1.Rect get rect {
    final _flaxResult = _flaxPeer.call(35, const [], const {});
    if (!_flaxResult.$1) return super.rect;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Rect;
    return _flaxConvertedResult;
  }

  api1.Rect get _flaxSuperGet_rect {
    return super.rect;
  }

  @override
  Set<api.SemanticsTag>? get tags {
    final _flaxResult = _flaxPeer.call(36, const [], const {});
    if (!_flaxResult.$1) return super.tags;
    final _flaxConvertedResult = _flaxResult.$2 as Set<api.SemanticsTag>?;
    return _flaxConvertedResult;
  }

  Set<api.SemanticsTag>? get _flaxSuperGet_tags {
    return super.tags;
  }

  @override
  api5.Matrix4? get transform {
    final _flaxResult = _flaxPeer.call(37, const [], const {});
    if (!_flaxResult.$1) return super.transform;
    final _flaxConvertedResult = _flaxResult.$2 as api5.Matrix4?;
    return _flaxConvertedResult;
  }

  api5.Matrix4? get _flaxSuperGet_transform {
    return super.transform;
  }

  @override
  List<int>? get customSemanticsActionIds {
    final _flaxResult = _flaxPeer.call(38, const [], const {});
    if (!_flaxResult.$1) return super.customSemanticsActionIds;
    final _flaxConvertedResult = _flaxResult.$2 as List<int>?;
    return _flaxConvertedResult;
  }

  List<int>? get _flaxSuperGet_customSemanticsActionIds {
    return super.customSemanticsActionIds;
  }

  @override
  api1.SemanticsRole get role => _FlaxProxyDispatch14_get_role(this, 39);
  api1.SemanticsRole get _flaxSuperGet_role {
    return super.role;
  }

  @override
  Set<String>? get controlsNodes =>
      _FlaxProxyDispatch15_get_controlsNodes(this, 40);
  Set<String>? get _flaxSuperGet_controlsNodes {
    return super.controlsNodes;
  }

  @override
  api1.SemanticsValidationResult get validationResult =>
      _FlaxProxyDispatch15_get_validationResult(this, 41);
  api1.SemanticsValidationResult get _flaxSuperGet_validationResult {
    return super.validationResult;
  }

  @override
  api1.SemanticsHitTestBehavior get hitTestBehavior =>
      _FlaxProxyDispatch14_get_hitTestBehavior(this, 42);
  api1.SemanticsHitTestBehavior get _flaxSuperGet_hitTestBehavior {
    return super.hitTestBehavior;
  }

  @override
  api1.SemanticsInputType get inputType =>
      _FlaxProxyDispatch14_get_inputType(this, 43);
  api1.SemanticsInputType get _flaxSuperGet_inputType {
    return super.inputType;
  }

  @override
  api1.Locale? get locale {
    final _flaxResult = _flaxPeer.call(44, const [], const {});
    if (!_flaxResult.$1) return super.locale;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Locale?;
    return _flaxConvertedResult;
  }

  api1.Locale? get _flaxSuperGet_locale {
    return super.locale;
  }

  @override
  String? get maxValue => _FlaxProxyDispatch15_get_maxValue(this, 45);
  String? get _flaxSuperGet_maxValue {
    return super.maxValue;
  }

  @override
  String? get minValue => _FlaxProxyDispatch15_get_minValue(this, 46);
  String? get _flaxSuperGet_minValue {
    return super.minValue;
  }
}

final class _SemanticsEventProxy extends api.SemanticsEvent
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _SemanticsEventProxy(this._flaxPeer, String super.type);
  @override
  Map<String, Object?> toMap({Object? nodeId = _flaxOmitted}) {
    return _FlaxProxyDispatch0_call_toMap(this, 0, nodeId: nodeId);
  }

  Map<String, Object?> _flaxSuper_toMap({Object? nodeId = _flaxOmitted}) {
    if (identical(nodeId, _flaxOmitted)) {
      return super.toMap();
    }
    return super.toMap(nodeId: nodeId as int?);
  }

  @override
  Map<String, Object?> getDataMap() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getDataMap');
    }
    final _flaxConvertedResult = _flaxResult.$2 as Map<String, Object?>;
    return _flaxConvertedResult;
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get type => _FlaxProxyDispatch0_get_type(this, 3);
  String get _flaxSuperGet_type {
    return super.type;
  }
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _SemanticsHintOverridesProxy extends api.SemanticsHintOverrides
    implements _FlaxProxyDispatch9, _FlaxProxyDispatch8 {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _SemanticsHintOverridesProxy(
    this._flaxPeer, {
    String? super.onTapHint,
    String? super.onLongPressHint,
  });
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
      return super.toStringShallow(minLevel: minLevel as api2.DiagnosticLevel);
    }
    if (identical(minLevel, _flaxOmitted)) {
      return super.toStringShallow(joiner: joiner as String);
    }
    return super.toStringShallow(
      joiner: joiner as String,
      minLevel: minLevel as api2.DiagnosticLevel,
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
          return super.toStringDeep(minLevel: minLevel as api2.DiagnosticLevel);
        }
        return super.toStringDeep(
          minLevel: minLevel as api2.DiagnosticLevel,
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
          minLevel: minLevel as api2.DiagnosticLevel,
        );
      }
      return super.toStringDeep(
        prefixOtherLines: prefixOtherLines as String?,
        minLevel: minLevel as api2.DiagnosticLevel,
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
          minLevel: minLevel as api2.DiagnosticLevel,
        );
      }
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        minLevel: minLevel as api2.DiagnosticLevel,
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
        minLevel: minLevel as api2.DiagnosticLevel,
      );
    }
    return super.toStringDeep(
      prefixLineOne: prefixLineOne as String,
      prefixOtherLines: prefixOtherLines as String?,
      minLevel: minLevel as api2.DiagnosticLevel,
      wrapWidth: wrapWidth as int,
    );
  }

  @override
  String toStringShort() {
    return _FlaxProxyDispatch9_call_toStringShort(this, 2);
  }

  String _flaxSuper_toStringShort() {
    return super.toStringShort();
  }

  @override
  api2.DiagnosticsNode toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    return _FlaxProxyDispatch8_call_toDiagnosticsNode(
      this,
      3,
      name: name,
      style: style,
    );
  }

  api2.DiagnosticsNode _flaxSuper_toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    if (identical(name, _flaxOmitted)) {
      if (identical(style, _flaxOmitted)) {
        return super.toDiagnosticsNode();
      }
      return super.toDiagnosticsNode(
        style: style as api2.DiagnosticsTreeStyle?,
      );
    }
    if (identical(style, _flaxOmitted)) {
      return super.toDiagnosticsNode(name: name as String?);
    }
    return super.toDiagnosticsNode(
      name: name as String?,
      style: style as api2.DiagnosticsTreeStyle?,
    );
  }

  @override
  List<api2.DiagnosticsNode> debugDescribeChildren() {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_debugDescribeChildren();
    }
    final _flaxConvertedResult = _flaxResult.$2 as List<api2.DiagnosticsNode>;
    return _flaxConvertedResult;
  }

  List<api2.DiagnosticsNode> _flaxSuper_debugDescribeChildren() {
    return super.debugDescribeChildren();
  }

  @override
  // ignore: must_call_super
  void debugFillProperties(api2.DiagnosticPropertiesBuilder properties) {
    return _FlaxProxyDispatch8_call_debugFillProperties(this, 5, properties);
  }

  void _flaxSuper_debugFillProperties(
    api2.DiagnosticPropertiesBuilder properties,
  ) {
    if (_flaxActiveSuperMember == "debugFillProperties")
      _flaxCalledSuper = true;
    super.debugFillProperties(properties);
    return;
  }

  @override
  String toString({Object? minLevel = _flaxOmitted}) {
    return _FlaxProxyDispatch9_call_toString(this, 6, minLevel: minLevel);
  }

  String _flaxSuper_toString({Object? minLevel = _flaxOmitted}) {
    if (identical(minLevel, _flaxOmitted)) {
      return super.toString();
    }
    return super.toString(minLevel: minLevel as api2.DiagnosticLevel);
  }

  @override
  String? get onTapHint {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.onTapHint;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_onTapHint {
    return super.onTapHint;
  }

  @override
  String? get onLongPressHint {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.onLongPressHint;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_onLongPressHint {
    return super.onLongPressHint;
  }

  @override
  bool get isNotEmpty {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.isNotEmpty;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isNotEmpty {
    return super.isNotEmpty;
  }
}

final class _SemanticsNodeProxy extends api.SemanticsNode
    implements _FlaxProxyDispatch14, _FlaxProxyDispatch15, _FlaxProxyDispatch9 {
  final FlaxProxyPeer _flaxPeer;
  _SemanticsNodeProxy(
    this._flaxPeer, {
    api2.Key? super.key,
    void Function()? super.showOnScreen,
  });
  _SemanticsNodeProxy.root(
    this._flaxPeer, {
    api2.Key? super.key,
    void Function()? super.showOnScreen,
    required api.SemanticsOwner super.owner,
  }) : super.root();
  @override
  String toString({Object? minLevel = _flaxOmitted}) {
    return _FlaxProxyDispatch9_call_toString(this, 0, minLevel: minLevel);
  }

  String _flaxSuper_toString({Object? minLevel = _flaxOmitted}) {
    if (identical(minLevel, _flaxOmitted)) {
      return super.toString();
    }
    return super.toString(minLevel: minLevel as api2.DiagnosticLevel);
  }

  @override
  String toStringShallow({
    Object? joiner = _flaxOmitted,
    Object? minLevel = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{
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
      return super.toStringShallow(minLevel: minLevel as api2.DiagnosticLevel);
    }
    if (identical(minLevel, _flaxOmitted)) {
      return super.toStringShallow(joiner: joiner as String);
    }
    return super.toStringShallow(
      joiner: joiner as String,
      minLevel: minLevel as api2.DiagnosticLevel,
    );
  }

  @override
  String toStringDeep({
    Object? prefixLineOne = _flaxOmitted,
    Object? prefixOtherLines = _flaxOmitted,
    Object? minLevel = _flaxOmitted,
    Object? childOrder = _flaxOmitted,
    Object? wrapWidth = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{
      if (!identical(prefixLineOne, _flaxOmitted))
        "prefixLineOne": prefixLineOne,
      if (!identical(prefixOtherLines, _flaxOmitted))
        "prefixOtherLines": prefixOtherLines,
      if (!identical(minLevel, _flaxOmitted)) "minLevel": minLevel,
      if (!identical(childOrder, _flaxOmitted)) "childOrder": childOrder,
      if (!identical(wrapWidth, _flaxOmitted)) "wrapWidth": wrapWidth,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toStringDeep(
        prefixLineOne: prefixLineOne,
        prefixOtherLines: prefixOtherLines,
        minLevel: minLevel,
        childOrder: childOrder,
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
    Object? childOrder = _flaxOmitted,
    Object? wrapWidth = _flaxOmitted,
  }) {
    if (identical(prefixLineOne, _flaxOmitted)) {
      if (identical(prefixOtherLines, _flaxOmitted)) {
        if (identical(minLevel, _flaxOmitted)) {
          if (identical(childOrder, _flaxOmitted)) {
            if (identical(wrapWidth, _flaxOmitted)) {
              return super.toStringDeep();
            }
            return super.toStringDeep(wrapWidth: wrapWidth as int);
          }
          if (identical(wrapWidth, _flaxOmitted)) {
            return super.toStringDeep(
              childOrder: childOrder as api.DebugSemanticsDumpOrder,
            );
          }
          return super.toStringDeep(
            childOrder: childOrder as api.DebugSemanticsDumpOrder,
            wrapWidth: wrapWidth as int,
          );
        }
        if (identical(childOrder, _flaxOmitted)) {
          if (identical(wrapWidth, _flaxOmitted)) {
            return super.toStringDeep(
              minLevel: minLevel as api2.DiagnosticLevel,
            );
          }
          return super.toStringDeep(
            minLevel: minLevel as api2.DiagnosticLevel,
            wrapWidth: wrapWidth as int,
          );
        }
        if (identical(wrapWidth, _flaxOmitted)) {
          return super.toStringDeep(
            minLevel: minLevel as api2.DiagnosticLevel,
            childOrder: childOrder as api.DebugSemanticsDumpOrder,
          );
        }
        return super.toStringDeep(
          minLevel: minLevel as api2.DiagnosticLevel,
          childOrder: childOrder as api.DebugSemanticsDumpOrder,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(minLevel, _flaxOmitted)) {
        if (identical(childOrder, _flaxOmitted)) {
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
            childOrder: childOrder as api.DebugSemanticsDumpOrder,
          );
        }
        return super.toStringDeep(
          prefixOtherLines: prefixOtherLines as String?,
          childOrder: childOrder as api.DebugSemanticsDumpOrder,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(childOrder, _flaxOmitted)) {
        if (identical(wrapWidth, _flaxOmitted)) {
          return super.toStringDeep(
            prefixOtherLines: prefixOtherLines as String?,
            minLevel: minLevel as api2.DiagnosticLevel,
          );
        }
        return super.toStringDeep(
          prefixOtherLines: prefixOtherLines as String?,
          minLevel: minLevel as api2.DiagnosticLevel,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(wrapWidth, _flaxOmitted)) {
        return super.toStringDeep(
          prefixOtherLines: prefixOtherLines as String?,
          minLevel: minLevel as api2.DiagnosticLevel,
          childOrder: childOrder as api.DebugSemanticsDumpOrder,
        );
      }
      return super.toStringDeep(
        prefixOtherLines: prefixOtherLines as String?,
        minLevel: minLevel as api2.DiagnosticLevel,
        childOrder: childOrder as api.DebugSemanticsDumpOrder,
        wrapWidth: wrapWidth as int,
      );
    }
    if (identical(prefixOtherLines, _flaxOmitted)) {
      if (identical(minLevel, _flaxOmitted)) {
        if (identical(childOrder, _flaxOmitted)) {
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
            childOrder: childOrder as api.DebugSemanticsDumpOrder,
          );
        }
        return super.toStringDeep(
          prefixLineOne: prefixLineOne as String,
          childOrder: childOrder as api.DebugSemanticsDumpOrder,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(childOrder, _flaxOmitted)) {
        if (identical(wrapWidth, _flaxOmitted)) {
          return super.toStringDeep(
            prefixLineOne: prefixLineOne as String,
            minLevel: minLevel as api2.DiagnosticLevel,
          );
        }
        return super.toStringDeep(
          prefixLineOne: prefixLineOne as String,
          minLevel: minLevel as api2.DiagnosticLevel,
          wrapWidth: wrapWidth as int,
        );
      }
      if (identical(wrapWidth, _flaxOmitted)) {
        return super.toStringDeep(
          prefixLineOne: prefixLineOne as String,
          minLevel: minLevel as api2.DiagnosticLevel,
          childOrder: childOrder as api.DebugSemanticsDumpOrder,
        );
      }
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        minLevel: minLevel as api2.DiagnosticLevel,
        childOrder: childOrder as api.DebugSemanticsDumpOrder,
        wrapWidth: wrapWidth as int,
      );
    }
    if (identical(minLevel, _flaxOmitted)) {
      if (identical(childOrder, _flaxOmitted)) {
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
          childOrder: childOrder as api.DebugSemanticsDumpOrder,
        );
      }
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        prefixOtherLines: prefixOtherLines as String?,
        childOrder: childOrder as api.DebugSemanticsDumpOrder,
        wrapWidth: wrapWidth as int,
      );
    }
    if (identical(childOrder, _flaxOmitted)) {
      if (identical(wrapWidth, _flaxOmitted)) {
        return super.toStringDeep(
          prefixLineOne: prefixLineOne as String,
          prefixOtherLines: prefixOtherLines as String?,
          minLevel: minLevel as api2.DiagnosticLevel,
        );
      }
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        prefixOtherLines: prefixOtherLines as String?,
        minLevel: minLevel as api2.DiagnosticLevel,
        wrapWidth: wrapWidth as int,
      );
    }
    if (identical(wrapWidth, _flaxOmitted)) {
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        prefixOtherLines: prefixOtherLines as String?,
        minLevel: minLevel as api2.DiagnosticLevel,
        childOrder: childOrder as api.DebugSemanticsDumpOrder,
      );
    }
    return super.toStringDeep(
      prefixLineOne: prefixLineOne as String,
      prefixOtherLines: prefixOtherLines as String?,
      minLevel: minLevel as api2.DiagnosticLevel,
      childOrder: childOrder as api.DebugSemanticsDumpOrder,
      wrapWidth: wrapWidth as int,
    );
  }

  @override
  String toStringShort() {
    return _FlaxProxyDispatch9_call_toStringShort(this, 3);
  }

  String _flaxSuper_toStringShort() {
    return super.toStringShort();
  }

  @override
  api2.DiagnosticsNode toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
    Object? childOrder = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{
      if (!identical(name, _flaxOmitted)) "name": name,
      if (!identical(style, _flaxOmitted)) "style": style,
      if (!identical(childOrder, _flaxOmitted)) "childOrder": childOrder,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toDiagnosticsNode(
        name: name,
        style: style,
        childOrder: childOrder,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DiagnosticsNode;
    return _flaxConvertedResult;
  }

  api2.DiagnosticsNode _flaxSuper_toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
    Object? childOrder = _flaxOmitted,
  }) {
    if (identical(name, _flaxOmitted)) {
      if (identical(style, _flaxOmitted)) {
        if (identical(childOrder, _flaxOmitted)) {
          return super.toDiagnosticsNode();
        }
        return super.toDiagnosticsNode(
          childOrder: childOrder as api.DebugSemanticsDumpOrder,
        );
      }
      if (identical(childOrder, _flaxOmitted)) {
        return super.toDiagnosticsNode(
          style: style as api2.DiagnosticsTreeStyle?,
        );
      }
      return super.toDiagnosticsNode(
        style: style as api2.DiagnosticsTreeStyle?,
        childOrder: childOrder as api.DebugSemanticsDumpOrder,
      );
    }
    if (identical(style, _flaxOmitted)) {
      if (identical(childOrder, _flaxOmitted)) {
        return super.toDiagnosticsNode(name: name as String?);
      }
      return super.toDiagnosticsNode(
        name: name as String?,
        childOrder: childOrder as api.DebugSemanticsDumpOrder,
      );
    }
    if (identical(childOrder, _flaxOmitted)) {
      return super.toDiagnosticsNode(
        name: name as String?,
        style: style as api2.DiagnosticsTreeStyle?,
      );
    }
    return super.toDiagnosticsNode(
      name: name as String?,
      style: style as api2.DiagnosticsTreeStyle?,
      childOrder: childOrder as api.DebugSemanticsDumpOrder,
    );
  }

  @override
  List<api2.DiagnosticsNode> debugDescribeChildren({
    Object? childOrder = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[], <String, Object?>{
      if (!identical(childOrder, _flaxOmitted)) "childOrder": childOrder,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_debugDescribeChildren(childOrder: childOrder);
    }
    final _flaxConvertedResult = _flaxResult.$2 as List<api2.DiagnosticsNode>;
    return _flaxConvertedResult;
  }

  List<api2.DiagnosticsNode> _flaxSuper_debugDescribeChildren({
    Object? childOrder = _flaxOmitted,
  }) {
    if (identical(childOrder, _flaxOmitted)) {
      return super.debugDescribeChildren();
    }
    return super.debugDescribeChildren(
      childOrder: childOrder as api.DebugSemanticsDumpOrder,
    );
  }

  @override
  void debugFillProperties(api2.DiagnosticPropertiesBuilder properties) {
    final _flaxResult = _flaxPeer.call(6, <Object?>[
      properties,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_debugFillProperties(properties);
      return;
    }
    return;
  }

  void _flaxSuper_debugFillProperties(
    api2.DiagnosticPropertiesBuilder properties,
  ) {
    super.debugFillProperties(properties);
    return;
  }

  @override
  void visitChildren(bool Function(api.SemanticsNode node) visitor) {
    final _flaxResult = _flaxPeer.call(7, <Object?>[
      visitor,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_visitChildren(visitor);
      return;
    }
    return;
  }

  void _flaxSuper_visitChildren(bool Function(api.SemanticsNode node) visitor) {
    super.visitChildren(visitor);
    return;
  }

  @override
  bool isTagged(api.SemanticsTag tag) {
    final _flaxResult = _flaxPeer.call(8, <Object?>[tag], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_isTagged(tag);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_isTagged(api.SemanticsTag tag) {
    return super.isTagged(tag);
  }

  @override
  bool hasFlag(api1.SemanticsFlag flag) {
    final _flaxResult = _flaxPeer.call(9, <Object?>[flag], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_hasFlag(flag);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_hasFlag(api1.SemanticsFlag flag) {
    return super.hasFlag(flag);
  }

  @override
  void updateWith({
    required api.SemanticsConfiguration? config,
    Object? childrenInInversePaintOrder = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{
      "config": config,
      if (!identical(childrenInInversePaintOrder, _flaxOmitted))
        "childrenInInversePaintOrder": childrenInInversePaintOrder,
    });
    if (!_flaxResult.$1) {
      _flaxSuper_updateWith(
        config: config,
        childrenInInversePaintOrder: childrenInInversePaintOrder,
      );
      return;
    }
    return;
  }

  void _flaxSuper_updateWith({
    required api.SemanticsConfiguration? config,
    Object? childrenInInversePaintOrder = _flaxOmitted,
  }) {
    if (identical(childrenInInversePaintOrder, _flaxOmitted)) {
      super.updateWith(config: config);
      return;
    }
    super.updateWith(
      config: config,
      childrenInInversePaintOrder:
          childrenInInversePaintOrder as List<api.SemanticsNode>?,
    );
    return;
  }

  @override
  api.SemanticsData getSemanticsData() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_getSemanticsData();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsData;
    return _flaxConvertedResult;
  }

  api.SemanticsData _flaxSuper_getSemanticsData() {
    return super.getSemanticsData();
  }

  @override
  void sendEvent(api.SemanticsEvent event) {
    final _flaxResult = _flaxPeer.call(12, <Object?>[
      event,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_sendEvent(event);
      return;
    }
    return;
  }

  void _flaxSuper_sendEvent(api.SemanticsEvent event) {
    super.sendEvent(event);
    return;
  }

  @override
  List<api.SemanticsNode> debugListChildrenInOrder(
    api.DebugSemanticsDumpOrder childOrder,
  ) {
    final _flaxResult = _flaxPeer.call(13, <Object?>[
      childOrder,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_debugListChildrenInOrder(childOrder);
    }
    final _flaxConvertedResult = _flaxResult.$2 as List<api.SemanticsNode>;
    return _flaxConvertedResult;
  }

  List<api.SemanticsNode> _flaxSuper_debugListChildrenInOrder(
    api.DebugSemanticsDumpOrder childOrder,
  ) {
    return super.debugListChildrenInOrder(childOrder);
  }

  @override
  api2.Key? get key {
    final _flaxResult = _flaxPeer.call(14, const [], const {});
    if (!_flaxResult.$1) return super.key;
    final _flaxConvertedResult = _flaxResult.$2 as api2.Key?;
    return _flaxConvertedResult;
  }

  api2.Key? get _flaxSuperGet_key {
    return super.key;
  }

  @override
  int get id {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.id;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_id {
    return super.id;
  }

  @override
  api5.Matrix4? get transform {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.transform;
    final _flaxConvertedResult = _flaxResult.$2 as api5.Matrix4?;
    return _flaxConvertedResult;
  }

  api5.Matrix4? get _flaxSuperGet_transform {
    return super.transform;
  }

  @override
  api1.Rect get rect {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.rect;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Rect;
    return _flaxConvertedResult;
  }

  api1.Rect get _flaxSuperGet_rect {
    return super.rect;
  }

  @override
  api1.Rect? get parentSemanticsClipRect {
    final _flaxResult = _flaxPeer.call(18, const [], const {});
    if (!_flaxResult.$1) return super.parentSemanticsClipRect;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Rect?;
    return _flaxConvertedResult;
  }

  api1.Rect? get _flaxSuperGet_parentSemanticsClipRect {
    return super.parentSemanticsClipRect;
  }

  @override
  api1.Rect? get parentPaintClipRect {
    final _flaxResult = _flaxPeer.call(19, const [], const {});
    if (!_flaxResult.$1) return super.parentPaintClipRect;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Rect?;
    return _flaxConvertedResult;
  }

  api1.Rect? get _flaxSuperGet_parentPaintClipRect {
    return super.parentPaintClipRect;
  }

  @override
  int? get indexInParent {
    final _flaxResult = _flaxPeer.call(20, const [], const {});
    if (!_flaxResult.$1) return super.indexInParent;
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  int? get _flaxSuperGet_indexInParent {
    return super.indexInParent;
  }

  @override
  bool get isInvisible {
    final _flaxResult = _flaxPeer.call(21, const [], const {});
    if (!_flaxResult.$1) return super.isInvisible;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isInvisible {
    return super.isInvisible;
  }

  @override
  bool get isMergedIntoParent {
    final _flaxResult = _flaxPeer.call(22, const [], const {});
    if (!_flaxResult.$1) return super.isMergedIntoParent;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isMergedIntoParent {
    return super.isMergedIntoParent;
  }

  @override
  bool get areUserActionsBlocked {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.areUserActionsBlocked;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_areUserActionsBlocked {
    return super.areUserActionsBlocked;
  }

  @override
  bool get isPartOfNodeMerging {
    final _flaxResult = _flaxPeer.call(24, const [], const {});
    if (!_flaxResult.$1) return super.isPartOfNodeMerging;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isPartOfNodeMerging {
    return super.isPartOfNodeMerging;
  }

  @override
  bool get mergeAllDescendantsIntoThisNode {
    final _flaxResult = _flaxPeer.call(25, const [], const {});
    if (!_flaxResult.$1) return super.mergeAllDescendantsIntoThisNode;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_mergeAllDescendantsIntoThisNode {
    return super.mergeAllDescendantsIntoThisNode;
  }

  @override
  bool get hasChildren {
    final _flaxResult = _flaxPeer.call(26, const [], const {});
    if (!_flaxResult.$1) return super.hasChildren;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_hasChildren {
    return super.hasChildren;
  }

  @override
  int get childrenCount {
    final _flaxResult = _flaxPeer.call(27, const [], const {});
    if (!_flaxResult.$1) return super.childrenCount;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_childrenCount {
    return super.childrenCount;
  }

  @override
  int get childrenCountInTraversalOrder {
    final _flaxResult = _flaxPeer.call(28, const [], const {});
    if (!_flaxResult.$1) return super.childrenCountInTraversalOrder;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_childrenCountInTraversalOrder {
    return super.childrenCountInTraversalOrder;
  }

  @override
  api.SemanticsOwner? get owner {
    final _flaxResult = _flaxPeer.call(29, const [], const {});
    if (!_flaxResult.$1) return super.owner;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsOwner?;
    return _flaxConvertedResult;
  }

  api.SemanticsOwner? get _flaxSuperGet_owner {
    return super.owner;
  }

  @override
  bool get attached {
    final _flaxResult = _flaxPeer.call(30, const [], const {});
    if (!_flaxResult.$1) return super.attached;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_attached {
    return super.attached;
  }

  @override
  api.SemanticsNode? get parent {
    final _flaxResult = _flaxPeer.call(31, const [], const {});
    if (!_flaxResult.$1) return super.parent;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsNode?;
    return _flaxConvertedResult;
  }

  api.SemanticsNode? get _flaxSuperGet_parent {
    return super.parent;
  }

  @override
  api.SemanticsNode? get traversalParent {
    final _flaxResult = _flaxPeer.call(32, const [], const {});
    if (!_flaxResult.$1) return super.traversalParent;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsNode?;
    return _flaxConvertedResult;
  }

  api.SemanticsNode? get _flaxSuperGet_traversalParent {
    return super.traversalParent;
  }

  @override
  int get depth {
    final _flaxResult = _flaxPeer.call(33, const [], const {});
    if (!_flaxResult.$1) return super.depth;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_depth {
    return super.depth;
  }

  @override
  Set<api.SemanticsTag>? get tags {
    final _flaxResult = _flaxPeer.call(34, const [], const {});
    if (!_flaxResult.$1) return super.tags;
    final _flaxConvertedResult = _flaxResult.$2 as Set<api.SemanticsTag>?;
    return _flaxConvertedResult;
  }

  Set<api.SemanticsTag>? get _flaxSuperGet_tags {
    return super.tags;
  }

  @override
  api1.SemanticsFlags get flagsCollection {
    final _flaxResult = _flaxPeer.call(35, const [], const {});
    if (!_flaxResult.$1) return super.flagsCollection;
    final _flaxConvertedResult = _flaxResult.$2 as api1.SemanticsFlags;
    return _flaxConvertedResult;
  }

  api1.SemanticsFlags get _flaxSuperGet_flagsCollection {
    return super.flagsCollection;
  }

  @override
  String get identifier => _FlaxProxyDispatch14_get_identifier(this, 36);
  String get _flaxSuperGet_identifier {
    return super.identifier;
  }

  @override
  Object? get traversalParentIdentifier =>
      _FlaxProxyDispatch15_get_traversalParentIdentifier(this, 37);
  Object? get _flaxSuperGet_traversalParentIdentifier {
    return super.traversalParentIdentifier;
  }

  @override
  Object? get traversalChildIdentifier =>
      _FlaxProxyDispatch15_get_traversalChildIdentifier(this, 38);
  Object? get _flaxSuperGet_traversalChildIdentifier {
    return super.traversalChildIdentifier;
  }

  @override
  String get label => _FlaxProxyDispatch14_get_label(this, 39);
  String get _flaxSuperGet_label {
    return super.label;
  }

  @override
  api.AttributedString get attributedLabel =>
      _FlaxProxyDispatch14_get_attributedLabel(this, 40);
  api.AttributedString get _flaxSuperGet_attributedLabel {
    return super.attributedLabel;
  }

  @override
  String get value => _FlaxProxyDispatch14_get_value(this, 41);
  String get _flaxSuperGet_value {
    return super.value;
  }

  @override
  api.AttributedString get attributedValue =>
      _FlaxProxyDispatch14_get_attributedValue(this, 42);
  api.AttributedString get _flaxSuperGet_attributedValue {
    return super.attributedValue;
  }

  @override
  String get increasedValue =>
      _FlaxProxyDispatch14_get_increasedValue(this, 43);
  String get _flaxSuperGet_increasedValue {
    return super.increasedValue;
  }

  @override
  api.AttributedString get attributedIncreasedValue =>
      _FlaxProxyDispatch14_get_attributedIncreasedValue(this, 44);
  api.AttributedString get _flaxSuperGet_attributedIncreasedValue {
    return super.attributedIncreasedValue;
  }

  @override
  String get decreasedValue =>
      _FlaxProxyDispatch14_get_decreasedValue(this, 45);
  String get _flaxSuperGet_decreasedValue {
    return super.decreasedValue;
  }

  @override
  api.AttributedString get attributedDecreasedValue =>
      _FlaxProxyDispatch14_get_attributedDecreasedValue(this, 46);
  api.AttributedString get _flaxSuperGet_attributedDecreasedValue {
    return super.attributedDecreasedValue;
  }

  @override
  String get hint => _FlaxProxyDispatch14_get_hint(this, 47);
  String get _flaxSuperGet_hint {
    return super.hint;
  }

  @override
  api.AttributedString get attributedHint =>
      _FlaxProxyDispatch14_get_attributedHint(this, 48);
  api.AttributedString get _flaxSuperGet_attributedHint {
    return super.attributedHint;
  }

  @override
  String get tooltip => _FlaxProxyDispatch14_get_tooltip(this, 49);
  String get _flaxSuperGet_tooltip {
    return super.tooltip;
  }

  @override
  api.SemanticsHintOverrides? get hintOverrides {
    final _flaxResult = _flaxPeer.call(50, const [], const {});
    if (!_flaxResult.$1) return super.hintOverrides;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsHintOverrides?;
    return _flaxConvertedResult;
  }

  api.SemanticsHintOverrides? get _flaxSuperGet_hintOverrides {
    return super.hintOverrides;
  }

  @override
  api1.TextDirection? get textDirection =>
      _FlaxProxyDispatch15_get_textDirection(this, 51);
  api1.TextDirection? get _flaxSuperGet_textDirection {
    return super.textDirection;
  }

  @override
  api.SemanticsSortKey? get sortKey {
    final _flaxResult = _flaxPeer.call(52, const [], const {});
    if (!_flaxResult.$1) return super.sortKey;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsSortKey?;
    return _flaxConvertedResult;
  }

  api.SemanticsSortKey? get _flaxSuperGet_sortKey {
    return super.sortKey;
  }

  @override
  api6.TextSelection? get textSelection =>
      _FlaxProxyDispatch14_get_textSelection(this, 53);
  api6.TextSelection? get _flaxSuperGet_textSelection {
    return super.textSelection;
  }

  @override
  bool? get isMultiline {
    final _flaxResult = _flaxPeer.call(54, const [], const {});
    if (!_flaxResult.$1) return super.isMultiline;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_isMultiline {
    return super.isMultiline;
  }

  @override
  int? get scrollChildCount =>
      _FlaxProxyDispatch14_get_scrollChildCount(this, 55);
  int? get _flaxSuperGet_scrollChildCount {
    return super.scrollChildCount;
  }

  @override
  int? get scrollIndex => _FlaxProxyDispatch14_get_scrollIndex(this, 56);
  int? get _flaxSuperGet_scrollIndex {
    return super.scrollIndex;
  }

  @override
  double? get scrollPosition =>
      _FlaxProxyDispatch14_get_scrollPosition(this, 57);
  double? get _flaxSuperGet_scrollPosition {
    return super.scrollPosition;
  }

  @override
  double? get scrollExtentMax =>
      _FlaxProxyDispatch14_get_scrollExtentMax(this, 58);
  double? get _flaxSuperGet_scrollExtentMax {
    return super.scrollExtentMax;
  }

  @override
  double? get scrollExtentMin =>
      _FlaxProxyDispatch14_get_scrollExtentMin(this, 59);
  double? get _flaxSuperGet_scrollExtentMin {
    return super.scrollExtentMin;
  }

  @override
  int? get platformViewId => _FlaxProxyDispatch14_get_platformViewId(this, 60);
  int? get _flaxSuperGet_platformViewId {
    return super.platformViewId;
  }

  @override
  int? get maxValueLength => _FlaxProxyDispatch15_get_maxValueLength(this, 61);
  int? get _flaxSuperGet_maxValueLength {
    return super.maxValueLength;
  }

  @override
  int? get currentValueLength =>
      _FlaxProxyDispatch15_get_currentValueLength(this, 62);
  int? get _flaxSuperGet_currentValueLength {
    return super.currentValueLength;
  }

  @override
  int get headingLevel => _FlaxProxyDispatch14_get_headingLevel(this, 63);
  int get _flaxSuperGet_headingLevel {
    return super.headingLevel;
  }

  @override
  api4.Uri? get linkUrl => _FlaxProxyDispatch15_get_linkUrl(this, 64);
  api4.Uri? get _flaxSuperGet_linkUrl {
    return super.linkUrl;
  }

  @override
  api1.SemanticsRole get role => _FlaxProxyDispatch14_get_role(this, 65);
  api1.SemanticsRole get _flaxSuperGet_role {
    return super.role;
  }

  @override
  Set<String>? get controlsNodes =>
      _FlaxProxyDispatch15_get_controlsNodes(this, 66);
  Set<String>? get _flaxSuperGet_controlsNodes {
    return super.controlsNodes;
  }

  @override
  String? get minValue => _FlaxProxyDispatch15_get_minValue(this, 67);
  String? get _flaxSuperGet_minValue {
    return super.minValue;
  }

  @override
  String? get maxValue => _FlaxProxyDispatch15_get_maxValue(this, 68);
  String? get _flaxSuperGet_maxValue {
    return super.maxValue;
  }

  @override
  api1.SemanticsValidationResult get validationResult =>
      _FlaxProxyDispatch15_get_validationResult(this, 69);
  api1.SemanticsValidationResult get _flaxSuperGet_validationResult {
    return super.validationResult;
  }

  @override
  api1.SemanticsHitTestBehavior get hitTestBehavior =>
      _FlaxProxyDispatch14_get_hitTestBehavior(this, 70);
  api1.SemanticsHitTestBehavior get _flaxSuperGet_hitTestBehavior {
    return super.hitTestBehavior;
  }

  @override
  api1.SemanticsInputType get inputType =>
      _FlaxProxyDispatch14_get_inputType(this, 71);
  api1.SemanticsInputType get _flaxSuperGet_inputType {
    return super.inputType;
  }

  @override
  set transform(api5.Matrix4? value) {
    final result = _flaxPeer.call(72, [value], const {});
    if (!result.$1) {
      super.transform = value;
      return;
    }
  }

  void _flaxSuperSet_transform(api5.Matrix4? value) {
    super.transform = value;
  }

  @override
  set rect(api1.Rect value) {
    final result = _flaxPeer.call(73, [value], const {});
    if (!result.$1) {
      super.rect = value;
      return;
    }
  }

  void _flaxSuperSet_rect(api1.Rect value) {
    super.rect = value;
  }

  @override
  set parentSemanticsClipRect(api1.Rect? value) {
    final result = _flaxPeer.call(74, [value], const {});
    if (!result.$1) {
      super.parentSemanticsClipRect = value;
      return;
    }
  }

  void _flaxSuperSet_parentSemanticsClipRect(api1.Rect? value) {
    super.parentSemanticsClipRect = value;
  }

  @override
  set parentPaintClipRect(api1.Rect? value) {
    final result = _flaxPeer.call(75, [value], const {});
    if (!result.$1) {
      super.parentPaintClipRect = value;
      return;
    }
  }

  void _flaxSuperSet_parentPaintClipRect(api1.Rect? value) {
    super.parentPaintClipRect = value;
  }

  @override
  set indexInParent(int? value) {
    final result = _flaxPeer.call(76, [value], const {});
    if (!result.$1) {
      super.indexInParent = value;
      return;
    }
  }

  void _flaxSuperSet_indexInParent(int? value) {
    super.indexInParent = value;
  }

  @override
  set isMergedIntoParent(bool value) {
    final result = _flaxPeer.call(77, [value], const {});
    if (!result.$1) {
      super.isMergedIntoParent = value;
      return;
    }
  }

  void _flaxSuperSet_isMergedIntoParent(bool value) {
    super.isMergedIntoParent = value;
  }

  @override
  set areUserActionsBlocked(bool value) {
    final result = _flaxPeer.call(78, [value], const {});
    if (!result.$1) {
      super.areUserActionsBlocked = value;
      return;
    }
  }

  void _flaxSuperSet_areUserActionsBlocked(bool value) {
    super.areUserActionsBlocked = value;
  }

  @override
  set traversalParent(api.SemanticsNode? value) {
    final result = _flaxPeer.call(79, [value], const {});
    if (!result.$1) {
      super.traversalParent = value;
      return;
    }
  }

  void _flaxSuperSet_traversalParent(api.SemanticsNode? value) {
    super.traversalParent = value;
  }

  @override
  set tags(Set<api.SemanticsTag>? value) {
    final result = _flaxPeer.call(80, [value], const {});
    if (!result.$1) {
      super.tags = value;
      return;
    }
  }

  void _flaxSuperSet_tags(Set<api.SemanticsTag>? value) {
    super.tags = value;
  }
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _SemanticsOwnerProxy extends api.SemanticsOwner
    implements _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _SemanticsOwnerProxy(
    this._flaxPeer, {
    required void Function(api1.SemanticsUpdate update) super.onSemanticsUpdate,
  });
  @override
  void addListener(void Function() listener) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      listener,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_addListener(listener);
      return;
    }
    return;
  }

  void _flaxSuper_addListener(void Function() listener) {
    super.addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      listener,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_removeListener(listener);
      return;
    }
    return;
  }

  void _flaxSuper_removeListener(void Function() listener) {
    super.removeListener(listener);
    return;
  }

  @override
  // ignore: must_call_super
  void dispose() {
    if (!_flaxPeer.active) return;
    final _flaxPreviousSuperMember = _flaxActiveSuperMember;
    final _flaxPreviousCalledSuper = _flaxCalledSuper;
    _flaxActiveSuperMember = "dispose";
    _flaxCalledSuper = false;
    try {
      final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{});
      if (!_flaxResult.$1) {
        _flaxSuper_dispose();
        return;
      }
      if (!(_flaxCalledSuper))
        throw StateError("dispose must call super.dispose()");
      return;
    } finally {
      _flaxActiveSuperMember = _flaxPreviousSuperMember;
      _flaxCalledSuper = _flaxPreviousCalledSuper;
    }
  }

  void _flaxSuper_dispose() {
    if (_flaxActiveSuperMember == "dispose") _flaxCalledSuper = true;
    super.dispose();
    return;
  }

  @override
  api.SemanticsNode? getSemanticsNode(int id) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[id], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_getSemanticsNode(id);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsNode?;
    return _flaxConvertedResult;
  }

  api.SemanticsNode? _flaxSuper_getSemanticsNode(int id) {
    return super.getSemanticsNode(id);
  }

  @override
  void sendSemanticsUpdate() {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_sendSemanticsUpdate();
      return;
    }
    return;
  }

  void _flaxSuper_sendSemanticsUpdate() {
    super.sendSemanticsUpdate();
    return;
  }

  @override
  void performAction(
    int id,
    api1.SemanticsAction action, [
    Object? args = _flaxOmitted,
  ]) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      id,
      action,
      if (!identical(args, _flaxOmitted)) args,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_performAction(id, action, args);
      return;
    }
    return;
  }

  void _flaxSuper_performAction(
    int id,
    api1.SemanticsAction action, [
    Object? args = _flaxOmitted,
  ]) {
    if (identical(args, _flaxOmitted)) {
      super.performAction(id, action);
      return;
    }
    super.performAction(id, action, args);
    return;
  }

  @override
  void performActionAt(
    api1.Offset position,
    api1.SemanticsAction action, [
    Object? args = _flaxOmitted,
  ]) {
    final _flaxResult = _flaxPeer.call(6, <Object?>[
      position,
      action,
      if (!identical(args, _flaxOmitted)) args,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_performActionAt(position, action, args);
      return;
    }
    return;
  }

  void _flaxSuper_performActionAt(
    api1.Offset position,
    api1.SemanticsAction action, [
    Object? args = _flaxOmitted,
  ]) {
    if (identical(args, _flaxOmitted)) {
      super.performActionAt(position, action);
      return;
    }
    super.performActionAt(position, action, args);
    return;
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 7);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  void Function(api1.SemanticsUpdate update) get onSemanticsUpdate {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.onSemanticsUpdate;
    final _flaxConvertedResult =
        _flaxResult.$2 as void Function(api1.SemanticsUpdate update);
    return _flaxConvertedResult;
  }

  void Function(api1.SemanticsUpdate update)
  get _flaxSuperGet_onSemanticsUpdate {
    return super.onSemanticsUpdate;
  }

  @override
  api.SemanticsNode? get rootSemanticsNode {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.rootSemanticsNode;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsNode?;
    return _flaxConvertedResult;
  }

  api.SemanticsNode? get _flaxSuperGet_rootSemanticsNode {
    return super.rootSemanticsNode;
  }

  @override
  bool get hasListeners {
    final _flaxResult = _flaxPeer.call(10, const [], const {});
    if (!_flaxResult.$1) return super.hasListeners;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_hasListeners {
    return super.hasListeners;
  }
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _SemanticsPropertiesProxy extends api.SemanticsProperties
    implements _FlaxProxyDispatch15, _FlaxProxyDispatch11, _FlaxProxyDispatch9 {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _SemanticsPropertiesProxy(
    this._flaxPeer, {
    bool? super.enabled,
    bool? super.checked,
    bool? super.mixed,
    bool? super.expanded,
    bool? super.selected,
    bool? super.toggled,
    bool? super.button,
    bool? super.link,
    api4.Uri? super.linkUrl,
    bool? super.header,
    int? super.headingLevel,
    bool? super.textField,
    bool? super.slider,
    bool? super.keyboardKey,
    bool? super.readOnly,
    bool? super.focusable,
    bool? super.focused,
    api.AccessibilityFocusBlockType? super.accessibilityFocusBlockType,
    bool? super.inMutuallyExclusiveGroup,
    bool? super.hidden,
    bool? super.obscured,
    bool? super.multiline,
    bool? super.scopesRoute,
    bool? super.namesRoute,
    bool? super.image,
    bool? super.liveRegion,
    bool? super.isRequired,
    int? super.maxValueLength,
    int? super.currentValueLength,
    String? super.identifier,
    Object? super.traversalParentIdentifier,
    Object? super.traversalChildIdentifier,
    String? super.label,
    api.AttributedString? super.attributedLabel,
    String? super.value,
    api.AttributedString? super.attributedValue,
    String? super.increasedValue,
    api.AttributedString? super.attributedIncreasedValue,
    String? super.decreasedValue,
    api.AttributedString? super.attributedDecreasedValue,
    String? super.hint,
    String? super.tooltip,
    api.AttributedString? super.attributedHint,
    api.SemanticsHintOverrides? super.hintOverrides,
    api1.TextDirection? super.textDirection,
    api.SemanticsSortKey? super.sortKey,
    api.SemanticsTag? super.tagForChildren,
    api1.SemanticsRole? super.role,
    Set<String>? super.controlsNodes,
    api1.SemanticsInputType? super.inputType,
    api1.SemanticsValidationResult super.validationResult,
    api1.SemanticsHitTestBehavior? super.hitTestBehavior,
    void Function()? super.onTap,
    void Function()? super.onLongPress,
    void Function()? super.onScrollLeft,
    void Function()? super.onScrollRight,
    void Function()? super.onScrollUp,
    void Function()? super.onScrollDown,
    void Function()? super.onIncrease,
    void Function()? super.onDecrease,
    void Function()? super.onCopy,
    void Function()? super.onCut,
    void Function()? super.onPaste,
    void Function(bool extendSelection)? super.onMoveCursorForwardByCharacter,
    void Function(bool extendSelection)? super.onMoveCursorBackwardByCharacter,
    void Function(bool extendSelection)? super.onMoveCursorForwardByWord,
    void Function(bool extendSelection)? super.onMoveCursorBackwardByWord,
    void Function(api6.TextSelection selection)? super.onSetSelection,
    void Function(String text)? super.onSetText,
    void Function()? super.onDidGainAccessibilityFocus,
    void Function()? super.onDidLoseAccessibilityFocus,
    void Function()? super.onFocus,
    void Function()? super.onDismiss,
    void Function()? super.onExpand,
    void Function()? super.onCollapse,
    Map<api.CustomSemanticsAction, void Function()>?
    super.customSemanticsActions,
    String? super.minValue,
    String? super.maxValue,
  });
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
      return super.toStringShallow(minLevel: minLevel as api2.DiagnosticLevel);
    }
    if (identical(minLevel, _flaxOmitted)) {
      return super.toStringShallow(joiner: joiner as String);
    }
    return super.toStringShallow(
      joiner: joiner as String,
      minLevel: minLevel as api2.DiagnosticLevel,
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
          return super.toStringDeep(minLevel: minLevel as api2.DiagnosticLevel);
        }
        return super.toStringDeep(
          minLevel: minLevel as api2.DiagnosticLevel,
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
          minLevel: minLevel as api2.DiagnosticLevel,
        );
      }
      return super.toStringDeep(
        prefixOtherLines: prefixOtherLines as String?,
        minLevel: minLevel as api2.DiagnosticLevel,
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
          minLevel: minLevel as api2.DiagnosticLevel,
        );
      }
      return super.toStringDeep(
        prefixLineOne: prefixLineOne as String,
        minLevel: minLevel as api2.DiagnosticLevel,
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
        minLevel: minLevel as api2.DiagnosticLevel,
      );
    }
    return super.toStringDeep(
      prefixLineOne: prefixLineOne as String,
      prefixOtherLines: prefixOtherLines as String?,
      minLevel: minLevel as api2.DiagnosticLevel,
      wrapWidth: wrapWidth as int,
    );
  }

  @override
  String toStringShort() {
    return _FlaxProxyDispatch9_call_toStringShort(this, 2);
  }

  String _flaxSuper_toStringShort() {
    return super.toStringShort();
  }

  @override
  api2.DiagnosticsNode toDiagnosticsNode({
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
    final _flaxConvertedResult = _flaxResult.$2 as api2.DiagnosticsNode;
    return _flaxConvertedResult;
  }

  api2.DiagnosticsNode _flaxSuper_toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    if (identical(name, _flaxOmitted)) {
      if (identical(style, _flaxOmitted)) {
        return super.toDiagnosticsNode();
      }
      return super.toDiagnosticsNode(
        style: style as api2.DiagnosticsTreeStyle?,
      );
    }
    if (identical(style, _flaxOmitted)) {
      return super.toDiagnosticsNode(name: name as String?);
    }
    return super.toDiagnosticsNode(
      name: name as String?,
      style: style as api2.DiagnosticsTreeStyle?,
    );
  }

  @override
  List<api2.DiagnosticsNode> debugDescribeChildren() {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_debugDescribeChildren();
    }
    final _flaxConvertedResult = _flaxResult.$2 as List<api2.DiagnosticsNode>;
    return _flaxConvertedResult;
  }

  List<api2.DiagnosticsNode> _flaxSuper_debugDescribeChildren() {
    return super.debugDescribeChildren();
  }

  @override
  // ignore: must_call_super
  void debugFillProperties(api2.DiagnosticPropertiesBuilder properties) {
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
    api2.DiagnosticPropertiesBuilder properties,
  ) {
    if (_flaxActiveSuperMember == "debugFillProperties")
      _flaxCalledSuper = true;
    super.debugFillProperties(properties);
    return;
  }

  @override
  String toString({Object? minLevel = _flaxOmitted}) {
    return _FlaxProxyDispatch9_call_toString(this, 6, minLevel: minLevel);
  }

  String _flaxSuper_toString({Object? minLevel = _flaxOmitted}) {
    if (identical(minLevel, _flaxOmitted)) {
      return super.toString();
    }
    return super.toString(minLevel: minLevel as api2.DiagnosticLevel);
  }

  @override
  bool? get enabled {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.enabled;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_enabled {
    return super.enabled;
  }

  @override
  bool? get checked {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.checked;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_checked {
    return super.checked;
  }

  @override
  bool? get mixed {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.mixed;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_mixed {
    return super.mixed;
  }

  @override
  bool? get expanded {
    final _flaxResult = _flaxPeer.call(10, const [], const {});
    if (!_flaxResult.$1) return super.expanded;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_expanded {
    return super.expanded;
  }

  @override
  bool? get toggled {
    final _flaxResult = _flaxPeer.call(11, const [], const {});
    if (!_flaxResult.$1) return super.toggled;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_toggled {
    return super.toggled;
  }

  @override
  bool? get selected {
    final _flaxResult = _flaxPeer.call(12, const [], const {});
    if (!_flaxResult.$1) return super.selected;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_selected {
    return super.selected;
  }

  @override
  bool? get button {
    final _flaxResult = _flaxPeer.call(13, const [], const {});
    if (!_flaxResult.$1) return super.button;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_button {
    return super.button;
  }

  @override
  bool? get link {
    final _flaxResult = _flaxPeer.call(14, const [], const {});
    if (!_flaxResult.$1) return super.link;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_link {
    return super.link;
  }

  @override
  bool? get header {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.header;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_header {
    return super.header;
  }

  @override
  bool? get textField {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.textField;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_textField {
    return super.textField;
  }

  @override
  bool? get slider {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.slider;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_slider {
    return super.slider;
  }

  @override
  bool? get keyboardKey {
    final _flaxResult = _flaxPeer.call(18, const [], const {});
    if (!_flaxResult.$1) return super.keyboardKey;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_keyboardKey {
    return super.keyboardKey;
  }

  @override
  bool? get readOnly {
    final _flaxResult = _flaxPeer.call(19, const [], const {});
    if (!_flaxResult.$1) return super.readOnly;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_readOnly {
    return super.readOnly;
  }

  @override
  bool? get focusable {
    final _flaxResult = _flaxPeer.call(20, const [], const {});
    if (!_flaxResult.$1) return super.focusable;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_focusable {
    return super.focusable;
  }

  @override
  bool? get focused {
    final _flaxResult = _flaxPeer.call(21, const [], const {});
    if (!_flaxResult.$1) return super.focused;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_focused {
    return super.focused;
  }

  @override
  api.AccessibilityFocusBlockType? get accessibilityFocusBlockType {
    final _flaxResult = _flaxPeer.call(22, const [], const {});
    if (!_flaxResult.$1) return super.accessibilityFocusBlockType;
    final _flaxConvertedResult =
        _flaxResult.$2 as api.AccessibilityFocusBlockType?;
    return _flaxConvertedResult;
  }

  api.AccessibilityFocusBlockType?
  get _flaxSuperGet_accessibilityFocusBlockType {
    return super.accessibilityFocusBlockType;
  }

  @override
  bool? get inMutuallyExclusiveGroup {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.inMutuallyExclusiveGroup;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_inMutuallyExclusiveGroup {
    return super.inMutuallyExclusiveGroup;
  }

  @override
  bool? get hidden {
    final _flaxResult = _flaxPeer.call(24, const [], const {});
    if (!_flaxResult.$1) return super.hidden;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_hidden {
    return super.hidden;
  }

  @override
  bool? get obscured {
    final _flaxResult = _flaxPeer.call(25, const [], const {});
    if (!_flaxResult.$1) return super.obscured;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_obscured {
    return super.obscured;
  }

  @override
  bool? get multiline {
    final _flaxResult = _flaxPeer.call(26, const [], const {});
    if (!_flaxResult.$1) return super.multiline;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_multiline {
    return super.multiline;
  }

  @override
  bool? get scopesRoute {
    final _flaxResult = _flaxPeer.call(27, const [], const {});
    if (!_flaxResult.$1) return super.scopesRoute;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_scopesRoute {
    return super.scopesRoute;
  }

  @override
  bool? get namesRoute {
    final _flaxResult = _flaxPeer.call(28, const [], const {});
    if (!_flaxResult.$1) return super.namesRoute;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_namesRoute {
    return super.namesRoute;
  }

  @override
  bool? get image {
    final _flaxResult = _flaxPeer.call(29, const [], const {});
    if (!_flaxResult.$1) return super.image;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_image {
    return super.image;
  }

  @override
  bool? get liveRegion {
    final _flaxResult = _flaxPeer.call(30, const [], const {});
    if (!_flaxResult.$1) return super.liveRegion;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_liveRegion {
    return super.liveRegion;
  }

  @override
  bool? get isRequired => _FlaxProxyDispatch11_get_isRequired(this, 31);
  bool? get _flaxSuperGet_isRequired {
    return super.isRequired;
  }

  @override
  int? get maxValueLength => _FlaxProxyDispatch15_get_maxValueLength(this, 32);
  int? get _flaxSuperGet_maxValueLength {
    return super.maxValueLength;
  }

  @override
  int? get currentValueLength =>
      _FlaxProxyDispatch15_get_currentValueLength(this, 33);
  int? get _flaxSuperGet_currentValueLength {
    return super.currentValueLength;
  }

  @override
  String? get identifier {
    final _flaxResult = _flaxPeer.call(34, const [], const {});
    if (!_flaxResult.$1) return super.identifier;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_identifier {
    return super.identifier;
  }

  @override
  Object? get traversalParentIdentifier =>
      _FlaxProxyDispatch15_get_traversalParentIdentifier(this, 35);
  Object? get _flaxSuperGet_traversalParentIdentifier {
    return super.traversalParentIdentifier;
  }

  @override
  Object? get traversalChildIdentifier =>
      _FlaxProxyDispatch15_get_traversalChildIdentifier(this, 36);
  Object? get _flaxSuperGet_traversalChildIdentifier {
    return super.traversalChildIdentifier;
  }

  @override
  String? get label {
    final _flaxResult = _flaxPeer.call(37, const [], const {});
    if (!_flaxResult.$1) return super.label;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_label {
    return super.label;
  }

  @override
  api.AttributedString? get attributedLabel {
    final _flaxResult = _flaxPeer.call(38, const [], const {});
    if (!_flaxResult.$1) return super.attributedLabel;
    final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString?;
    return _flaxConvertedResult;
  }

  api.AttributedString? get _flaxSuperGet_attributedLabel {
    return super.attributedLabel;
  }

  @override
  String? get value {
    final _flaxResult = _flaxPeer.call(39, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_value {
    return super.value;
  }

  @override
  api.AttributedString? get attributedValue {
    final _flaxResult = _flaxPeer.call(40, const [], const {});
    if (!_flaxResult.$1) return super.attributedValue;
    final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString?;
    return _flaxConvertedResult;
  }

  api.AttributedString? get _flaxSuperGet_attributedValue {
    return super.attributedValue;
  }

  @override
  String? get increasedValue {
    final _flaxResult = _flaxPeer.call(41, const [], const {});
    if (!_flaxResult.$1) return super.increasedValue;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_increasedValue {
    return super.increasedValue;
  }

  @override
  api.AttributedString? get attributedIncreasedValue {
    final _flaxResult = _flaxPeer.call(42, const [], const {});
    if (!_flaxResult.$1) return super.attributedIncreasedValue;
    final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString?;
    return _flaxConvertedResult;
  }

  api.AttributedString? get _flaxSuperGet_attributedIncreasedValue {
    return super.attributedIncreasedValue;
  }

  @override
  String? get decreasedValue {
    final _flaxResult = _flaxPeer.call(43, const [], const {});
    if (!_flaxResult.$1) return super.decreasedValue;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_decreasedValue {
    return super.decreasedValue;
  }

  @override
  api.AttributedString? get attributedDecreasedValue {
    final _flaxResult = _flaxPeer.call(44, const [], const {});
    if (!_flaxResult.$1) return super.attributedDecreasedValue;
    final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString?;
    return _flaxConvertedResult;
  }

  api.AttributedString? get _flaxSuperGet_attributedDecreasedValue {
    return super.attributedDecreasedValue;
  }

  @override
  String? get hint {
    final _flaxResult = _flaxPeer.call(45, const [], const {});
    if (!_flaxResult.$1) return super.hint;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_hint {
    return super.hint;
  }

  @override
  api.AttributedString? get attributedHint {
    final _flaxResult = _flaxPeer.call(46, const [], const {});
    if (!_flaxResult.$1) return super.attributedHint;
    final _flaxConvertedResult = _flaxResult.$2 as api.AttributedString?;
    return _flaxConvertedResult;
  }

  api.AttributedString? get _flaxSuperGet_attributedHint {
    return super.attributedHint;
  }

  @override
  String? get tooltip {
    final _flaxResult = _flaxPeer.call(47, const [], const {});
    if (!_flaxResult.$1) return super.tooltip;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_tooltip {
    return super.tooltip;
  }

  @override
  int? get headingLevel {
    final _flaxResult = _flaxPeer.call(48, const [], const {});
    if (!_flaxResult.$1) return super.headingLevel;
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  int? get _flaxSuperGet_headingLevel {
    return super.headingLevel;
  }

  @override
  api.SemanticsHintOverrides? get hintOverrides {
    final _flaxResult = _flaxPeer.call(49, const [], const {});
    if (!_flaxResult.$1) return super.hintOverrides;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsHintOverrides?;
    return _flaxConvertedResult;
  }

  api.SemanticsHintOverrides? get _flaxSuperGet_hintOverrides {
    return super.hintOverrides;
  }

  @override
  api1.TextDirection? get textDirection =>
      _FlaxProxyDispatch15_get_textDirection(this, 50);
  api1.TextDirection? get _flaxSuperGet_textDirection {
    return super.textDirection;
  }

  @override
  api.SemanticsSortKey? get sortKey {
    final _flaxResult = _flaxPeer.call(51, const [], const {});
    if (!_flaxResult.$1) return super.sortKey;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsSortKey?;
    return _flaxConvertedResult;
  }

  api.SemanticsSortKey? get _flaxSuperGet_sortKey {
    return super.sortKey;
  }

  @override
  api.SemanticsTag? get tagForChildren {
    final _flaxResult = _flaxPeer.call(52, const [], const {});
    if (!_flaxResult.$1) return super.tagForChildren;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsTag?;
    return _flaxConvertedResult;
  }

  api.SemanticsTag? get _flaxSuperGet_tagForChildren {
    return super.tagForChildren;
  }

  @override
  api4.Uri? get linkUrl => _FlaxProxyDispatch15_get_linkUrl(this, 53);
  api4.Uri? get _flaxSuperGet_linkUrl {
    return super.linkUrl;
  }

  @override
  void Function()? get onTap => _FlaxProxyDispatch11_get_onTap(this, 54);
  void Function()? get _flaxSuperGet_onTap {
    return super.onTap;
  }

  @override
  void Function()? get onLongPress =>
      _FlaxProxyDispatch11_get_onLongPress(this, 55);
  void Function()? get _flaxSuperGet_onLongPress {
    return super.onLongPress;
  }

  @override
  void Function()? get onScrollLeft =>
      _FlaxProxyDispatch11_get_onScrollLeft(this, 56);
  void Function()? get _flaxSuperGet_onScrollLeft {
    return super.onScrollLeft;
  }

  @override
  void Function()? get onScrollRight =>
      _FlaxProxyDispatch11_get_onScrollRight(this, 57);
  void Function()? get _flaxSuperGet_onScrollRight {
    return super.onScrollRight;
  }

  @override
  void Function()? get onScrollUp =>
      _FlaxProxyDispatch11_get_onScrollUp(this, 58);
  void Function()? get _flaxSuperGet_onScrollUp {
    return super.onScrollUp;
  }

  @override
  void Function()? get onScrollDown =>
      _FlaxProxyDispatch11_get_onScrollDown(this, 59);
  void Function()? get _flaxSuperGet_onScrollDown {
    return super.onScrollDown;
  }

  @override
  void Function()? get onIncrease =>
      _FlaxProxyDispatch11_get_onIncrease(this, 60);
  void Function()? get _flaxSuperGet_onIncrease {
    return super.onIncrease;
  }

  @override
  void Function()? get onDecrease =>
      _FlaxProxyDispatch11_get_onDecrease(this, 61);
  void Function()? get _flaxSuperGet_onDecrease {
    return super.onDecrease;
  }

  @override
  void Function()? get onCopy => _FlaxProxyDispatch11_get_onCopy(this, 62);
  void Function()? get _flaxSuperGet_onCopy {
    return super.onCopy;
  }

  @override
  void Function()? get onCut => _FlaxProxyDispatch11_get_onCut(this, 63);
  void Function()? get _flaxSuperGet_onCut {
    return super.onCut;
  }

  @override
  void Function()? get onPaste => _FlaxProxyDispatch11_get_onPaste(this, 64);
  void Function()? get _flaxSuperGet_onPaste {
    return super.onPaste;
  }

  @override
  void Function(bool extendSelection)? get onMoveCursorForwardByCharacter =>
      _FlaxProxyDispatch11_get_onMoveCursorForwardByCharacter(this, 65);
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorForwardByCharacter {
    return super.onMoveCursorForwardByCharacter;
  }

  @override
  void Function(bool extendSelection)? get onMoveCursorBackwardByCharacter =>
      _FlaxProxyDispatch11_get_onMoveCursorBackwardByCharacter(this, 66);
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorBackwardByCharacter {
    return super.onMoveCursorBackwardByCharacter;
  }

  @override
  void Function(bool extendSelection)? get onMoveCursorForwardByWord =>
      _FlaxProxyDispatch11_get_onMoveCursorForwardByWord(this, 67);
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorForwardByWord {
    return super.onMoveCursorForwardByWord;
  }

  @override
  void Function(bool extendSelection)? get onMoveCursorBackwardByWord =>
      _FlaxProxyDispatch11_get_onMoveCursorBackwardByWord(this, 68);
  void Function(bool extendSelection)?
  get _flaxSuperGet_onMoveCursorBackwardByWord {
    return super.onMoveCursorBackwardByWord;
  }

  @override
  void Function(api6.TextSelection selection)? get onSetSelection =>
      _FlaxProxyDispatch11_get_onSetSelection(this, 69);
  void Function(api6.TextSelection selection)?
  get _flaxSuperGet_onSetSelection {
    return super.onSetSelection;
  }

  @override
  void Function(String text)? get onSetText =>
      _FlaxProxyDispatch11_get_onSetText(this, 70);
  void Function(String text)? get _flaxSuperGet_onSetText {
    return super.onSetText;
  }

  @override
  void Function()? get onDidGainAccessibilityFocus =>
      _FlaxProxyDispatch11_get_onDidGainAccessibilityFocus(this, 71);
  void Function()? get _flaxSuperGet_onDidGainAccessibilityFocus {
    return super.onDidGainAccessibilityFocus;
  }

  @override
  void Function()? get onDidLoseAccessibilityFocus =>
      _FlaxProxyDispatch11_get_onDidLoseAccessibilityFocus(this, 72);
  void Function()? get _flaxSuperGet_onDidLoseAccessibilityFocus {
    return super.onDidLoseAccessibilityFocus;
  }

  @override
  void Function()? get onFocus => _FlaxProxyDispatch11_get_onFocus(this, 73);
  void Function()? get _flaxSuperGet_onFocus {
    return super.onFocus;
  }

  @override
  void Function()? get onDismiss =>
      _FlaxProxyDispatch11_get_onDismiss(this, 74);
  void Function()? get _flaxSuperGet_onDismiss {
    return super.onDismiss;
  }

  @override
  void Function()? get onExpand => _FlaxProxyDispatch11_get_onExpand(this, 75);
  void Function()? get _flaxSuperGet_onExpand {
    return super.onExpand;
  }

  @override
  void Function()? get onCollapse =>
      _FlaxProxyDispatch11_get_onCollapse(this, 76);
  void Function()? get _flaxSuperGet_onCollapse {
    return super.onCollapse;
  }

  @override
  Map<api.CustomSemanticsAction, void Function()>? get customSemanticsActions {
    final _flaxResult = _flaxPeer.call(77, const [], const {});
    if (!_flaxResult.$1) return super.customSemanticsActions;
    final _flaxConvertedResult =
        _flaxResult.$2 as Map<api.CustomSemanticsAction, void Function()>?;
    return _flaxConvertedResult;
  }

  Map<api.CustomSemanticsAction, void Function()>?
  get _flaxSuperGet_customSemanticsActions {
    return super.customSemanticsActions;
  }

  @override
  api1.SemanticsRole? get role {
    final _flaxResult = _flaxPeer.call(78, const [], const {});
    if (!_flaxResult.$1) return super.role;
    final _flaxConvertedResult = _flaxResult.$2 as api1.SemanticsRole?;
    return _flaxConvertedResult;
  }

  api1.SemanticsRole? get _flaxSuperGet_role {
    return super.role;
  }

  @override
  Set<String>? get controlsNodes =>
      _FlaxProxyDispatch15_get_controlsNodes(this, 79);
  Set<String>? get _flaxSuperGet_controlsNodes {
    return super.controlsNodes;
  }

  @override
  api1.SemanticsValidationResult get validationResult =>
      _FlaxProxyDispatch15_get_validationResult(this, 80);
  api1.SemanticsValidationResult get _flaxSuperGet_validationResult {
    return super.validationResult;
  }

  @override
  api1.SemanticsHitTestBehavior? get hitTestBehavior {
    final _flaxResult = _flaxPeer.call(81, const [], const {});
    if (!_flaxResult.$1) return super.hitTestBehavior;
    final _flaxConvertedResult =
        _flaxResult.$2 as api1.SemanticsHitTestBehavior?;
    return _flaxConvertedResult;
  }

  api1.SemanticsHitTestBehavior? get _flaxSuperGet_hitTestBehavior {
    return super.hitTestBehavior;
  }

  @override
  api1.SemanticsInputType? get inputType {
    final _flaxResult = _flaxPeer.call(82, const [], const {});
    if (!_flaxResult.$1) return super.inputType;
    final _flaxConvertedResult = _flaxResult.$2 as api1.SemanticsInputType?;
    return _flaxConvertedResult;
  }

  api1.SemanticsInputType? get _flaxSuperGet_inputType {
    return super.inputType;
  }

  @override
  String? get maxValue => _FlaxProxyDispatch15_get_maxValue(this, 83);
  String? get _flaxSuperGet_maxValue {
    return super.maxValue;
  }

  @override
  String? get minValue => _FlaxProxyDispatch15_get_minValue(this, 84);
  String? get _flaxSuperGet_minValue {
    return super.minValue;
  }
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _SemanticsSortKeyProxy extends api.SemanticsSortKey
    implements _FlaxProxyDispatch9, _FlaxProxyDispatch8, _FlaxProxyDispatch5 {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _SemanticsSortKeyProxy(this._flaxPeer, {String? super.name});
  @override
  int compareTo(api.SemanticsSortKey other) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_compareTo(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int _flaxSuper_compareTo(api.SemanticsSortKey other) {
    return super.compareTo(other);
  }

  @override
  String toStringShort() {
    return _FlaxProxyDispatch9_call_toStringShort(this, 1);
  }

  String _flaxSuper_toStringShort() {
    return super.toStringShort();
  }

  @override
  String toString({Object? minLevel = _flaxOmitted}) {
    return _FlaxProxyDispatch9_call_toString(this, 2, minLevel: minLevel);
  }

  String _flaxSuper_toString({Object? minLevel = _flaxOmitted}) {
    if (identical(minLevel, _flaxOmitted)) {
      return super.toString();
    }
    return super.toString(minLevel: minLevel as api2.DiagnosticLevel);
  }

  @override
  api2.DiagnosticsNode toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    return _FlaxProxyDispatch8_call_toDiagnosticsNode(
      this,
      3,
      name: name,
      style: style,
    );
  }

  api2.DiagnosticsNode _flaxSuper_toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    if (identical(name, _flaxOmitted)) {
      if (identical(style, _flaxOmitted)) {
        return super.toDiagnosticsNode();
      }
      return super.toDiagnosticsNode(
        style: style as api2.DiagnosticsTreeStyle?,
      );
    }
    if (identical(style, _flaxOmitted)) {
      return super.toDiagnosticsNode(name: name as String?);
    }
    return super.toDiagnosticsNode(
      name: name as String?,
      style: style as api2.DiagnosticsTreeStyle?,
    );
  }

  @override
  // ignore: must_call_super
  void debugFillProperties(api2.DiagnosticPropertiesBuilder properties) {
    return _FlaxProxyDispatch8_call_debugFillProperties(this, 4, properties);
  }

  void _flaxSuper_debugFillProperties(
    api2.DiagnosticPropertiesBuilder properties,
  ) {
    if (_flaxActiveSuperMember == "debugFillProperties")
      _flaxCalledSuper = true;
    super.debugFillProperties(properties);
    return;
  }

  @override
  int doCompare(api.SemanticsSortKey other) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: doCompare');
    }
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  @override
  String? get name => _FlaxProxyDispatch5_get_name(this, 6);
  String? get _flaxSuperGet_name {
    return super.name;
  }
}

final class _SemanticsTagProxy extends api.SemanticsTag
    implements _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _SemanticsTagProxy(this._flaxPeer, String super.name);
  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get name {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.name;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_name {
    return super.name;
  }
}

final class _TapSemanticEventProxy extends api.TapSemanticEvent
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch2, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _TapSemanticEventProxy(this._flaxPeer);
  @override
  Map<String, Object?> toMap({Object? nodeId = _flaxOmitted}) {
    return _FlaxProxyDispatch0_call_toMap(this, 0, nodeId: nodeId);
  }

  Map<String, Object?> _flaxSuper_toMap({Object? nodeId = _flaxOmitted}) {
    if (identical(nodeId, _flaxOmitted)) {
      return super.toMap();
    }
    return super.toMap(nodeId: nodeId as int?);
  }

  @override
  Map<String, Object?> getDataMap() {
    return _FlaxProxyDispatch1_call_getDataMap(this, 1);
  }

  Map<String, Object?> _flaxSuper_getDataMap() {
    return super.getDataMap();
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get type => _FlaxProxyDispatch0_get_type(this, 3);
  String get _flaxSuperGet_type {
    return super.type;
  }
}

final class _TooltipSemanticsEventProxy extends api.TooltipSemanticsEvent
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch2, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _TooltipSemanticsEventProxy(this._flaxPeer, String super.message);
  @override
  Map<String, Object?> toMap({Object? nodeId = _flaxOmitted}) {
    return _FlaxProxyDispatch0_call_toMap(this, 0, nodeId: nodeId);
  }

  Map<String, Object?> _flaxSuper_toMap({Object? nodeId = _flaxOmitted}) {
    if (identical(nodeId, _flaxOmitted)) {
      return super.toMap();
    }
    return super.toMap(nodeId: nodeId as int?);
  }

  @override
  Map<String, Object?> getDataMap() {
    return _FlaxProxyDispatch1_call_getDataMap(this, 1);
  }

  Map<String, Object?> _flaxSuper_getDataMap() {
    return super.getDataMap();
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get message {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.message;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_message {
    return super.message;
  }

  @override
  String get type => _FlaxProxyDispatch0_get_type(this, 4);
  String get _flaxSuperGet_type {
    return super.type;
  }
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[1,1,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape1),
];
Function _flaxShape0<_Shape0, _Shape1>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape1 Function(_Shape0 args)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter.plain(
                "args",
                types.ref<_Shape0>(withinCallback: true),
              ),
            ],
            types.ref<_Shape1>(withinCallback: true),
            FlaxCallbackAdapters.wrap1<_Shape0, _Shape1>,
            id:
                types.key<_Shape1 Function(_Shape0 args)>() +
                ":callback:<>(p:r:args:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke1<_Shape0, _Shape1>,
            matches: FlaxCallbackAdapters.matches1<_Shape0, _Shape1>,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape1<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
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
Object _callback0(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<void>((value) => null);
};
bool _callback0Matches(Object value) => value is Future<void> Function();
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function())();
}

Object _callback1(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<bool>((value) => value as bool);
};
bool _callback1Matches(Object value) => value is Future<bool> Function();
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<bool> Function())();
}

Object _callback2(FlaxCallback _flaxBridgeCallback) => (bool p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<void>((value) => null);
};
bool _callback2Matches(Object value) =>
    value is Future<void> Function(bool value);
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function(bool value))(positional[0] as bool);
}

Object _callback3(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<double>((value) => value as double);
};
bool _callback3Matches(Object value) => value is Future<double> Function();
Object? _callback3Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<double> Function())();
}

Object _callback4(FlaxCallback _flaxBridgeCallback) => (double p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<void>((value) => null);
};
bool _callback4Matches(Object value) =>
    value is Future<void> Function(double value);
Object? _callback4Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function(double value))(
    positional[0] as double,
  );
}

Object _callback5(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<String>((value) => value as String);
};
bool _callback5Matches(Object value) => value is Future<String> Function();
Object? _callback5Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<String> Function())();
}

Object _callback6(FlaxCallback _flaxBridgeCallback) => (String p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<void>((value) => null);
};
bool _callback6Matches(Object value) =>
    value is Future<void> Function(String value);
Object? _callback6Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function(String value))(
    positional[0] as String,
  );
}

Object _callback7(FlaxCallback _flaxBridgeCallback) =>
    (Map<String, String> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
          .then<Map<String, Object?>>((value) => value as Map<String, Object?>);
    };
bool _callback7Matches(Object value) =>
    value
        is Future<Map<String, Object?>> Function(
          Map<String, String> parameters,
        );
Object? _callback7Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as Future<Map<String, Object?>> Function(Map<String, String> parameters))(
    positional[0] as Map<String, String>,
  );
}

Object _collection0Create() => <String, Object?>{};
bool _collection0Matches(Object value) => value is Map<String, Object?>;
Object _collection1Create() => <api1.StringAttribute>[];
bool _collection1Matches(Object value) => value is List<api1.StringAttribute>;
Object _collection2Create() => <api1.StringAttribute>[];
Object _collection2Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.StringAttribute>();
bool _collection2Matches(Object value) =>
    value is Iterable<api1.StringAttribute>;
Object _collection3Create() => <api2.DiagnosticsNode>[];
bool _collection3Matches(Object value) => value is List<api2.DiagnosticsNode>;
Object _collection4Create() => <api2.DiagnosticsNode>[];
Object _collection4Restore(Object value) =>
    (value as Iterable<Object?>).cast<api2.DiagnosticsNode>();
bool _collection4Matches(Object value) =>
    value is Iterable<api2.DiagnosticsNode>;
Object _collection5Create() => <String, String>{};
bool _collection5Matches(Object value) => value is Map<String, String>;
Object _collection6Create() => <api.SemanticsConfiguration>[];
bool _collection6Matches(Object value) =>
    value is List<api.SemanticsConfiguration>;
Object _collection7Create() => <api.SemanticsConfiguration>[];
Object _collection7Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.SemanticsConfiguration>();
bool _collection7Matches(Object value) =>
    value is Iterable<api.SemanticsConfiguration>;
Object _collection8Create() => <List<api.SemanticsConfiguration>>[];
bool _collection8Matches(Object value) =>
    value is List<List<api.SemanticsConfiguration>>;
Object _collection9Create() => <List<api.SemanticsConfiguration>>[];
Object _collection9Restore(Object value) =>
    (value as Iterable<Object?>).cast<List<api.SemanticsConfiguration>>();
bool _collection9Matches(Object value) =>
    value is Iterable<List<api.SemanticsConfiguration>>;
Object _collection10Create() => <api.CustomSemanticsAction, void Function()>{};
bool _collection10Matches(Object value) =>
    value is Map<api.CustomSemanticsAction, void Function()>;
Object _collection11Create() => <String>{};
bool _collection11Matches(Object value) => value is Set<String>;
Object _collection12Create() => <String>[];
Object _collection12Restore(Object value) =>
    (value as Iterable<Object?>).cast<String>();
bool _collection12Matches(Object value) => value is Iterable<String>;
Object _collection13Create() => <api.SemanticsTag>[];
Object _collection13Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.SemanticsTag>();
bool _collection13Matches(Object value) => value is Iterable<api.SemanticsTag>;
Object _collection14Create() => <api.SemanticsTag>{};
bool _collection14Matches(Object value) => value is Set<api.SemanticsTag>;
Object _collection15Create() => <int>[];
bool _collection15Matches(Object value) => value is List<int>;
Object _collection16Create() => <int>[];
Object _collection16Restore(Object value) =>
    (value as Iterable<Object?>).cast<int>();
bool _collection16Matches(Object value) => value is Iterable<int>;
Object _collection17Create() => <api.SemanticsNode>[];
bool _collection17Matches(Object value) => value is List<api.SemanticsNode>;
Object _collection18Create() => <api.SemanticsNode>[];
Object _collection18Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.SemanticsNode>();
bool _collection18Matches(Object value) => value is Iterable<api.SemanticsNode>;
Future<Object?> _future0Adapt(Future<Object?> value) =>
    value.then<void>((_) {});
Future<Object?> _future1Adapt(Future<Object?> value) =>
    value.then<bool>((value) => value as bool);
Future<Object?> _future2Adapt(Future<Object?> value) =>
    value.then<double>((value) => value as double);
Future<Object?> _future3Adapt(Future<Object?> value) =>
    value.then<String>((value) => value as String);
Future<Object?> _future4Adapt(Future<Object?> value) =>
    value.then<Map<String, Object?>>((value) => value as Map<String, Object?>);
const _flaxBinding0 = FlaxTypeRef(
  "map",
  item: flaxNullableAnyType,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[any?:][String:]",
    _collection0Create,
    _collection0Matches,
  ),
);
const _flaxBinding1 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding0,
  id: "callback:<>()->map:[any?:][String:]",
);
const _flaxBinding2 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextDirection",
);
const _flaxBinding3 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding2,
  id: "callback:<>()->enum:flax.core/flutter#type:TextDirection",
);
const _flaxBinding4 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_semantics#type:Assertiveness",
);
const _flaxBinding5 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding4,
  id: "callback:<>()->enum:flax.core/sdk_semantics#type:Assertiveness",
);
const _flaxBinding6 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:AttributedString",
);
const _flaxBinding7 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("other", _flaxBinding6)],
  _flaxBinding6,
  id: "callback:<>(p:r:other:object:flax.core/sdk_semantics#type:AttributedString)->object:flax.core/sdk_semantics#type:AttributedString",
);
const _flaxBinding8 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:StringAttribute",
);
const _flaxBinding9 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding8,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:StringAttribute]",
    _collection2Create,
    _collection2Matches,
    restore: _collection2Restore,
  ),
);
const _flaxBinding10 = FlaxTypeRef(
  "list",
  item: _flaxBinding8,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:StringAttribute]",
    _collection1Create,
    _collection1Matches,
  ),
  iterable: _flaxBinding9,
);
const _flaxBinding11 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding10,
  id: "callback:<>()->list:[object:flax.core/sdk_dart_ui#type:StringAttribute]",
);
const _flaxBinding12 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsSerializationDelegate",
);
const _flaxBinding13 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("delegate", _flaxBinding12)],
  _flaxBinding0,
  id: "callback:<>(p:r:delegate:object:flax.core/sdk_foundation#type:DiagnosticsSerializationDelegate)->map:[any?:][String:]",
);
const _flaxBinding14 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding15 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding14,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection4Create,
    _collection4Matches,
    restore: _collection4Restore,
  ),
);
const _flaxBinding16 = FlaxTypeRef(
  "list",
  item: _flaxBinding14,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection3Create,
    _collection3Matches,
  ),
  iterable: _flaxBinding15,
);
const _flaxBinding17 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding16,
  id: "callback:<>()->list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
);
const _flaxBinding18 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding19 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("minLevel", _flaxBinding18)],
  flaxBoolType,
  id: "callback:<>(p:r:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->bool:",
);
const _flaxBinding20 = FlaxTypeRef(
  "map",
  nullable: true,
  item: flaxStringType,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[String:][String:]",
    _collection5Create,
    _collection5Matches,
  ),
);
const _flaxBinding21 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding20,
  id: "callback:<>()->map?:[String:][String:]",
);
const _flaxBinding22 = FlaxCallbackBinding.signature(
  [],
  flaxTypeType,
  id: "callback:<>()->object:flax.core/flutter#type:Type",
);
const _flaxBinding23 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:AttributedString",
  nullable: true,
);
const _flaxBinding24 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding23,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:AttributedString",
);
const _flaxBinding25 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding18,
  id: "callback:<>()->enum:flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding26 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
  nullable: true,
);
const _flaxBinding27 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding26,
  id: "callback:<>()->enum?:flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
);
const _flaxBinding28 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:TextTreeConfiguration",
  nullable: true,
);
const _flaxBinding29 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding28,
  id: "callback:<>()->object?:flax.core/sdk_foundation#type:TextTreeConfiguration",
);
const _flaxBinding30 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsConfiguration",
);
const _flaxBinding31 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding30,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]",
    _collection7Create,
    _collection7Matches,
    restore: _collection7Restore,
  ),
);
const _flaxBinding32 = FlaxTypeRef(
  "list",
  item: _flaxBinding30,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]",
    _collection6Create,
    _collection6Matches,
  ),
  iterable: _flaxBinding31,
);
const _flaxBinding33 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding32,
  id: "callback:<>()->list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]",
);
const _flaxBinding34 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding32,
  collection: FlaxCollectionBinding(
    "iterable:[list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]]",
    _collection9Create,
    _collection9Matches,
    restore: _collection9Restore,
  ),
);
const _flaxBinding35 = FlaxTypeRef(
  "list",
  item: _flaxBinding32,
  collection: FlaxCollectionBinding(
    "list:[list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]]",
    _collection8Create,
    _collection8Matches,
  ),
  iterable: _flaxBinding34,
);
const _flaxBinding36 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding35,
  id: "callback:<>()->list:[list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]]",
);
const _flaxBinding37 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("config", _flaxBinding30)],
  flaxVoidType,
  id: "callback:<>(p:r:config:object:flax.core/sdk_semantics#type:SemanticsConfiguration)->void:",
);
const _flaxBinding38 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("configs", _flaxBinding32)],
  flaxVoidType,
  id: "callback:<>(p:r:configs:list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration])->void:",
);
const _flaxBinding39 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult",
);
const _flaxBinding40 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding39,
  id: "callback:<>()->object:flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult",
);
const _flaxBinding41 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsAction",
  nullable: true,
);
const _flaxBinding42 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding41,
  id: "callback:<>()->object?:flax.core/sdk_dart_ui#type:SemanticsAction",
);
const _flaxBinding43 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsSortKey",
);
const _flaxBinding44 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("other", _flaxBinding43)],
  flaxIntType,
  id: "callback:<>(p:r:other:object:flax.core/sdk_semantics#type:SemanticsSortKey)->int:",
);
const _flaxBinding45 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:OrdinalSortKey",
);
const _flaxBinding46 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("other", _flaxBinding45)],
  flaxIntType,
  id: "callback:<>(p:r:other:object:flax.core/sdk_semantics#type:OrdinalSortKey)->int:",
);
const _flaxBinding47 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder",
);
const _flaxBinding48 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("properties", _flaxBinding47)],
  flaxVoidType,
  id: "callback:<>(p:r:properties:object:flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder)->void:",
);
const _flaxBinding49 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsAction",
);
const _flaxBinding50 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("args", flaxNullableAnyType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<Object?>,
  id: "callback:<>(p:r:args:any?:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<Object?>,
  matches: FlaxCallbackAdapters.matchesVoid1<Object?>,
);
const _flaxBinding51 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding50,
);
const _flaxBinding52 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("action", _flaxBinding49)],
  _flaxBinding51,
  id: "callback:<>(p:r:action:object:flax.core/sdk_dart_ui#type:SemanticsAction)->callback?:<>(p:r:args:any?:)->void:",
);
const _flaxBinding53 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsTag",
);
const _flaxBinding54 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("tag", _flaxBinding53)],
  flaxBoolType,
  id: "callback:<>(p:r:tag:object:flax.core/sdk_semantics#type:SemanticsTag)->bool:",
);
const _flaxBinding55 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("tag", _flaxBinding53)],
  flaxVoidType,
  id: "callback:<>(p:r:tag:object:flax.core/sdk_semantics#type:SemanticsTag)->void:",
);
const _flaxBinding56 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsConfiguration",
  nullable: true,
);
const _flaxBinding57 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("other", _flaxBinding56)],
  flaxBoolType,
  id: "callback:<>(p:r:other:object?:flax.core/sdk_semantics#type:SemanticsConfiguration)->bool:",
);
const _flaxBinding58 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("child", _flaxBinding30)],
  flaxVoidType,
  id: "callback:<>(p:r:child:object:flax.core/sdk_semantics#type:SemanticsConfiguration)->void:",
);
const _flaxBinding59 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding30,
  id: "callback:<>()->object:flax.core/sdk_semantics#type:SemanticsConfiguration",
);
const _flaxBinding60 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
  nullable: true,
);
const _flaxBinding61 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding60,
  id: "callback:<>()->object?:flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding62 = FlaxCallbackBinding.signature(
  [],
  flaxVoidNullableCallbackType,
  id: "callback:<>()->callback?:<>()->void:",
);
const _flaxBinding63 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("targetOffset", flaxOffsetType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api1.Offset>,
  id: "callback:<>(p:r:targetOffset:object:flax.core/flutter#type:Offset)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api1.Offset>,
  matches: FlaxCallbackAdapters.matchesVoid1<api1.Offset>,
);
const _flaxBinding64 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding63,
);
const _flaxBinding65 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding64,
  id: "callback:<>()->callback?:<>(p:r:targetOffset:object:flax.core/flutter#type:Offset)->void:",
);
const _flaxBinding66 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("extendSelection", flaxBoolType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<bool>,
  id: "callback:<>(p:r:extendSelection:bool:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<bool>,
  matches: FlaxCallbackAdapters.matchesVoid1<bool>,
);
const _flaxBinding67 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding66,
);
const _flaxBinding68 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding67,
  id: "callback:<>()->callback?:<>(p:r:extendSelection:bool:)->void:",
);
const _flaxBinding69 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextSelection",
);
const _flaxBinding70 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("selection", _flaxBinding69)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api6.TextSelection>,
  id: "callback:<>(p:r:selection:object:flax.core/flutter#type:TextSelection)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api6.TextSelection>,
  matches: FlaxCallbackAdapters.matchesVoid1<api6.TextSelection>,
);
const _flaxBinding71 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding70,
);
const _flaxBinding72 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding71,
  id: "callback:<>()->callback?:<>(p:r:selection:object:flax.core/flutter#type:TextSelection)->void:",
);
const _flaxBinding73 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("text", flaxStringType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<String>,
  id: "callback:<>(p:r:text:String:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<String>,
  matches: FlaxCallbackAdapters.matchesVoid1<String>,
);
const _flaxBinding74 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding73,
);
const _flaxBinding75 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding74,
  id: "callback:<>()->callback?:<>(p:r:text:String:)->void:",
);
const _flaxBinding76 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("p0", _flaxBinding32)],
  _flaxBinding39,
  FlaxCallbackAdapters.wrap1<
    List<api.SemanticsConfiguration>,
    api.ChildSemanticsConfigurationsResult
  >,
  id: "callback:<>(p:r:p0:list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration])->object:flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult",
  invoke:
      FlaxCallbackAdapters.invoke1<
        List<api.SemanticsConfiguration>,
        api.ChildSemanticsConfigurationsResult
      >,
  matches:
      FlaxCallbackAdapters.matches1<
        List<api.SemanticsConfiguration>,
        api.ChildSemanticsConfigurationsResult
      >,
);
const _flaxBinding77 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding76,
);
const _flaxBinding78 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding77,
  id: "callback:<>()->callback?:<>(p:r:p0:list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration])->object:flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult",
);
const _flaxBinding79 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsSortKey",
  nullable: true,
);
const _flaxBinding80 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding79,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:SemanticsSortKey",
);
const _flaxBinding81 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:CustomSemanticsAction",
);
const _flaxBinding82 = FlaxTypeRef(
  "map",
  item: flaxVoidCallbackType,
  key: _flaxBinding81,
  collection: FlaxCollectionBinding(
    "map:[callback:<>()->void:][object:flax.core/sdk_semantics#type:CustomSemanticsAction]",
    _collection10Create,
    _collection10Matches,
  ),
);
const _flaxBinding83 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding82,
  id: "callback:<>()->map:[callback:<>()->void:][object:flax.core/sdk_semantics#type:CustomSemanticsAction]",
);
const _flaxBinding84 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsRole",
);
const _flaxBinding85 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding84,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:SemanticsRole",
);
const _flaxBinding86 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding6,
  id: "callback:<>()->object:flax.core/sdk_semantics#type:AttributedString",
);
const _flaxBinding87 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsHintOverrides",
  nullable: true,
);
const _flaxBinding88 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding87,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:SemanticsHintOverrides",
);
const _flaxBinding89 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextDirection",
  nullable: true,
);
const _flaxBinding90 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding89,
  id: "callback:<>()->enum?:flax.core/flutter#type:TextDirection",
);
const _flaxBinding91 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_semantics#type:AccessibilityFocusBlockType",
);
const _flaxBinding92 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding91,
  id: "callback:<>()->enum:flax.core/sdk_semantics#type:AccessibilityFocusBlockType",
);
const _flaxBinding93 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Uri",
  nullable: true,
);
const _flaxBinding94 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding93,
  id: "callback:<>()->object?:flax.core/flutter#type:Uri",
);
const _flaxBinding95 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextSelection",
  nullable: true,
);
const _flaxBinding96 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding95,
  id: "callback:<>()->object?:flax.core/flutter#type:TextSelection",
);
const _flaxBinding97 = FlaxTypeRef(
  "iterable",
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection12Create,
    _collection12Matches,
    restore: _collection12Restore,
  ),
);
const _flaxBinding98 = FlaxTypeRef(
  "set",
  nullable: true,
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "set:[String:]",
    _collection11Create,
    _collection11Matches,
  ),
  iterable: _flaxBinding97,
);
const _flaxBinding99 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding98,
  id: "callback:<>()->set?:[String:]",
);
const _flaxBinding100 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsValidationResult",
);
const _flaxBinding101 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding100,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:SemanticsValidationResult",
);
const _flaxBinding102 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
);
const _flaxBinding103 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding102,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
);
const _flaxBinding104 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsInputType",
);
const _flaxBinding105 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding104,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:SemanticsInputType",
);
const _flaxBinding106 = FlaxTypeRef(
  "iterable",
  nullable: true,
  item: _flaxBinding53,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_semantics#type:SemanticsTag]",
    _collection13Create,
    _collection13Matches,
    restore: _collection13Restore,
  ),
);
const _flaxBinding107 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding106,
  id: "callback:<>()->iterable?:[object:flax.core/sdk_semantics#type:SemanticsTag]",
);
const _flaxBinding108 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxBoolType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:bool:)->void:",
);
const _flaxBinding109 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding60)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_dart_ui#type:Locale)->void:",
);
const _flaxBinding110 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxVoidNullableCallbackType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:callback?:<>()->void:)->void:",
);
const _flaxBinding111 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding64)],
  flaxVoidType,
  id: "callback:<>(p:r:value:callback?:<>(p:r:targetOffset:object:flax.core/flutter#type:Offset)->void:)->void:",
);
const _flaxBinding112 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding67)],
  flaxVoidType,
  id: "callback:<>(p:r:value:callback?:<>(p:r:extendSelection:bool:)->void:)->void:",
);
const _flaxBinding113 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding71)],
  flaxVoidType,
  id: "callback:<>(p:r:value:callback?:<>(p:r:selection:object:flax.core/flutter#type:TextSelection)->void:)->void:",
);
const _flaxBinding114 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding74)],
  flaxVoidType,
  id: "callback:<>(p:r:value:callback?:<>(p:r:text:String:)->void:)->void:",
);
const _flaxBinding115 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding77)],
  flaxVoidType,
  id: "callback:<>(p:r:value:callback?:<>(p:r:p0:list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration])->object:flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult)->void:",
);
const _flaxBinding116 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding79)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_semantics#type:SemanticsSortKey)->void:",
);
const _flaxBinding117 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxNullableIntType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:int?:)->void:",
);
const _flaxBinding118 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding82)],
  flaxVoidType,
  id: "callback:<>(p:r:value:map:[callback:<>()->void:][object:flax.core/sdk_semantics#type:CustomSemanticsAction])->void:",
);
const _flaxBinding119 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxStringType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:String:)->void:",
);
const _flaxBinding120 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxNullableAnyType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:any?:)->void:",
);
const _flaxBinding121 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding84)],
  flaxVoidType,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_dart_ui#type:SemanticsRole)->void:",
);
const _flaxBinding122 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding6)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object:flax.core/sdk_semantics#type:AttributedString)->void:",
);
const _flaxBinding123 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding87)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_semantics#type:SemanticsHintOverrides)->void:",
);
const _flaxBinding124 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding89)],
  flaxVoidType,
  id: "callback:<>(p:r:value:enum?:flax.core/flutter#type:TextDirection)->void:",
);
const _flaxBinding125 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxNullableBoolType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:bool?:)->void:",
);
const _flaxBinding126 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding91)],
  flaxVoidType,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_semantics#type:AccessibilityFocusBlockType)->void:",
);
const _flaxBinding127 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding93)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:Uri)->void:",
);
const _flaxBinding128 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxIntType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:int:)->void:",
);
const _flaxBinding129 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding95)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:TextSelection)->void:",
);
const _flaxBinding130 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxNullableDoubleType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:double?:)->void:",
);
const _flaxBinding131 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding98)],
  flaxVoidType,
  id: "callback:<>(p:r:value:set?:[String:])->void:",
);
const _flaxBinding132 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding100)],
  flaxVoidType,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_dart_ui#type:SemanticsValidationResult)->void:",
);
const _flaxBinding133 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding102)],
  flaxVoidType,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior)->void:",
);
const _flaxBinding134 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding104)],
  flaxVoidType,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_dart_ui#type:SemanticsInputType)->void:",
);
const _flaxBinding135 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxNullableStringType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:String?:)->void:",
);
const _flaxBinding136 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsFlag",
);
const _flaxBinding137 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("flag", _flaxBinding136)],
  flaxBoolType,
  id: "callback:<>(p:r:flag:object:flax.core/sdk_dart_ui#type:SemanticsFlag)->bool:",
);
const _flaxBinding138 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("action", _flaxBinding49)],
  flaxBoolType,
  id: "callback:<>(p:r:action:object:flax.core/sdk_dart_ui#type:SemanticsAction)->bool:",
);
const _flaxBinding139 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsFlags",
);
const _flaxBinding140 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding139,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:SemanticsFlags",
);
const _flaxBinding141 = FlaxCallbackBinding.signature(
  [],
  flaxRectType,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding142 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding53,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_semantics#type:SemanticsTag]",
    _collection13Create,
    _collection13Matches,
    restore: _collection13Restore,
  ),
);
const _flaxBinding143 = FlaxTypeRef(
  "set",
  nullable: true,
  item: _flaxBinding53,
  collection: FlaxCollectionBinding(
    "set:[object:flax.core/sdk_semantics#type:SemanticsTag]",
    _collection14Create,
    _collection14Matches,
  ),
  iterable: _flaxBinding142,
);
const _flaxBinding144 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding143,
  id: "callback:<>()->set?:[object:flax.core/sdk_semantics#type:SemanticsTag]",
);
const _flaxBinding145 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_rendering#type:Matrix4",
  nullable: true,
);
const _flaxBinding146 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding145,
  id: "callback:<>()->object?:flax.core/sdk_rendering#type:Matrix4",
);
const _flaxBinding147 = FlaxTypeRef(
  "iterable",
  item: flaxIntType,
  collection: FlaxCollectionBinding(
    "iterable:[int:]",
    _collection16Create,
    _collection16Matches,
    restore: _collection16Restore,
  ),
);
const _flaxBinding148 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxIntType,
  collection: FlaxCollectionBinding(
    "list:[int:]",
    _collection15Create,
    _collection15Matches,
  ),
  iterable: _flaxBinding147,
);
const _flaxBinding149 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding148,
  id: "callback:<>()->list?:[int:]",
);
const _flaxBinding150 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsNode",
);
const _flaxBinding151 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("node", _flaxBinding150)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<api.SemanticsNode, bool>,
  id: "callback:<>(p:r:node:object:flax.core/sdk_semantics#type:SemanticsNode)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api.SemanticsNode, bool>,
  matches: FlaxCallbackAdapters.matches1<api.SemanticsNode, bool>,
);
const _flaxBinding152 = FlaxTypeRef("callback", callback: _flaxBinding151);
const _flaxBinding153 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("visitor", _flaxBinding152)],
  flaxVoidType,
  id: "callback:<>(p:r:visitor:callback:<>(p:r:node:object:flax.core/sdk_semantics#type:SemanticsNode)->bool:)->void:",
);
const _flaxBinding154 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsData",
);
const _flaxBinding155 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding154,
  id: "callback:<>()->object:flax.core/sdk_semantics#type:SemanticsData",
);
const _flaxBinding156 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsEvent",
);
const _flaxBinding157 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("event", _flaxBinding156)],
  flaxVoidType,
  id: "callback:<>(p:r:event:object:flax.core/sdk_semantics#type:SemanticsEvent)->void:",
);
const _flaxBinding158 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_semantics#type:DebugSemanticsDumpOrder",
);
const _flaxBinding159 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding150,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_semantics#type:SemanticsNode]",
    _collection18Create,
    _collection18Matches,
    restore: _collection18Restore,
  ),
);
const _flaxBinding160 = FlaxTypeRef(
  "list",
  item: _flaxBinding150,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_semantics#type:SemanticsNode]",
    _collection17Create,
    _collection17Matches,
  ),
  iterable: _flaxBinding159,
);
const _flaxBinding161 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("childOrder", _flaxBinding158)],
  _flaxBinding160,
  id: "callback:<>(p:r:childOrder:enum:flax.core/sdk_semantics#type:DebugSemanticsDumpOrder)->list:[object:flax.core/sdk_semantics#type:SemanticsNode]",
);
const _flaxBinding162 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Key",
  nullable: true,
);
const _flaxBinding163 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding162,
  id: "callback:<>()->object?:flax.core/flutter#type:Key",
);
const _flaxBinding164 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Rect",
  nullable: true,
);
const _flaxBinding165 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding164,
  id: "callback:<>()->object?:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding166 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsOwner",
  nullable: true,
);
const _flaxBinding167 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding166,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:SemanticsOwner",
);
const _flaxBinding168 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsNode",
  nullable: true,
);
const _flaxBinding169 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding168,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:SemanticsNode",
);
const _flaxBinding170 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding145)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_rendering#type:Matrix4)->void:",
);
const _flaxBinding171 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxRectType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding172 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding164)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding173 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding168)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_semantics#type:SemanticsNode)->void:",
);
const _flaxBinding174 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding143)],
  flaxVoidType,
  id: "callback:<>(p:r:value:set?:[object:flax.core/sdk_semantics#type:SemanticsTag])->void:",
);
const _flaxBinding175 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("listener", flaxVoidCallbackType)],
  flaxVoidType,
  id: "callback:<>(p:r:listener:callback:<>()->void:)->void:",
);
const _flaxBinding176 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("id", flaxIntType)],
  _flaxBinding168,
  id: "callback:<>(p:r:id:int:)->object?:flax.core/sdk_semantics#type:SemanticsNode",
);
const _flaxBinding177 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsUpdate",
);
const _flaxBinding178 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("update", _flaxBinding177)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api1.SemanticsUpdate>,
  id: "callback:<>(p:r:update:object:flax.core/sdk_dart_ui#type:SemanticsUpdate)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api1.SemanticsUpdate>,
  matches: FlaxCallbackAdapters.matchesVoid1<api1.SemanticsUpdate>,
);
const _flaxBinding179 = FlaxTypeRef("callback", callback: _flaxBinding178);
const _flaxBinding180 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding179,
  id: "callback:<>()->callback:<>(p:r:update:object:flax.core/sdk_dart_ui#type:SemanticsUpdate)->void:",
);
const _flaxBinding181 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_semantics#type:AccessibilityFocusBlockType",
  nullable: true,
);
const _flaxBinding182 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding181,
  id: "callback:<>()->enum?:flax.core/sdk_semantics#type:AccessibilityFocusBlockType",
);
const _flaxBinding183 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsTag",
  nullable: true,
);
const _flaxBinding184 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding183,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:SemanticsTag",
);
const _flaxBinding185 = FlaxTypeRef(
  "map",
  nullable: true,
  item: flaxVoidCallbackType,
  key: _flaxBinding81,
  collection: FlaxCollectionBinding(
    "map:[callback:<>()->void:][object:flax.core/sdk_semantics#type:CustomSemanticsAction]",
    _collection10Create,
    _collection10Matches,
  ),
);
const _flaxBinding186 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding185,
  id: "callback:<>()->map?:[callback:<>()->void:][object:flax.core/sdk_semantics#type:CustomSemanticsAction]",
);
const _flaxBinding187 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsRole",
  nullable: true,
);
const _flaxBinding188 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding187,
  id: "callback:<>()->enum?:flax.core/sdk_dart_ui#type:SemanticsRole",
);
const _flaxBinding189 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
  nullable: true,
);
const _flaxBinding190 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding189,
  id: "callback:<>()->enum?:flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
);
const _flaxBinding191 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsInputType",
  nullable: true,
);
const _flaxBinding192 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding191,
  id: "callback:<>()->enum?:flax.core/sdk_dart_ui#type:SemanticsInputType",
);
const _flaxBinding193 = FlaxGetter.plain(
  "type",
  flaxStringType,
  _SemanticsEvent_type,
);
const _flaxBinding194 = <FlaxParameter>[
  FlaxParameter("nodeId", flaxNullableIntType, required: false),
];
const _flaxBinding195 = FlaxInstanceMethod.plain(
  _flaxBinding194,
  _flaxBinding0,
  _SemanticsEvent_toMap,
);
const _flaxBinding196 = FlaxInstanceMethod.shared(
  _flaxBinding1,
  _SemanticsEvent_getDataMap,
);
const _flaxBinding197 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsEvent_toString,
);
const _flaxBinding198 = FlaxInstanceMethod.plain(
  _flaxBinding194,
  _flaxBinding0,
  _FlaxProxyDispatch0_super_call_toMap,
);
const _flaxBinding199 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch2_super_call_toString,
);
const _flaxBinding200 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch0_super_get_type,
);
const _flaxBinding201 = <FlaxParameter>[
  FlaxParameter.required("type", flaxStringType),
];
const _flaxBinding202 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "nodeId",
      flaxNullableIntType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(n:o:nodeId:int?:)->map:[any?:][String:]",
);
const _flaxBinding203 = FlaxProxyMember(
  "toMap",
  0,
  _flaxBinding202,
  hasSuper: true,
);
const _flaxBinding204 = FlaxProxyMember("getDataMap", 0, _flaxBinding1);
const _flaxBinding205 = FlaxProxyMember(
  "toString",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding206 = FlaxProxyMember(
  "type",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding207 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsEvent",
  [_flaxBinding193],
  {
    "toMap": _flaxBinding195,
    "getDataMap": _flaxBinding196,
    "toString": _flaxBinding197,
    "@super:toMap": _flaxBinding198,
    "@super:toString": _flaxBinding199,
    "@super:get:type": _flaxBinding200,
  },
  constructors: {"@implementation": _flaxBinding201},
  create: _createSemanticsEvent,
  matches: _isSemanticsEvent,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding203,
    _flaxBinding204,
    _flaxBinding205,
    _flaxBinding206,
  ]),
);
const _flaxBinding208 = FlaxGetter.plain(
  "viewId",
  flaxIntType,
  _AnnounceSemanticsEvent_viewId,
);
const _flaxBinding209 = FlaxGetter.plain(
  "message",
  flaxStringType,
  _AnnounceSemanticsEvent_message,
);
const _flaxBinding210 = FlaxGetter.plain(
  "textDirection",
  _flaxBinding2,
  _AnnounceSemanticsEvent_textDirection,
);
const _flaxBinding211 = FlaxGetter.plain(
  "assertiveness",
  _flaxBinding4,
  _AnnounceSemanticsEvent_assertiveness,
);
const _flaxBinding212 = FlaxInstanceMethod.shared(
  _flaxBinding1,
  _FlaxProxyDispatch1_super_call_getDataMap,
);
const _flaxBinding213 = <FlaxParameter>[
  FlaxParameter.required("message", flaxStringType),
  FlaxParameter.required("textDirection", _flaxBinding2),
  FlaxParameter.required("viewId", flaxIntType),
  FlaxParameter(
    "assertiveness",
    _flaxBinding4,
    required: false,
    defaultValue: api.Assertiveness.polite,
  ),
];
const _flaxBinding214 = FlaxProxyMember(
  "getDataMap",
  0,
  _flaxBinding1,
  hasSuper: true,
);
const _flaxBinding215 = FlaxProxyMember(
  "viewId",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding216 = FlaxProxyMember(
  "message",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding217 = FlaxProxyMember(
  "textDirection",
  1,
  _flaxBinding3,
  hasSuper: true,
);
const _flaxBinding218 = FlaxProxyMember(
  "assertiveness",
  1,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding219 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:AnnounceSemanticsEvent",
  [_flaxBinding208, _flaxBinding209, _flaxBinding210, _flaxBinding211],
  {
    "@super:toMap": _flaxBinding198,
    "@super:getDataMap": _flaxBinding212,
    "@super:toString": _flaxBinding199,
    "@super:get:viewId": FlaxInstanceMethod.shared(
      flaxIntCall,
      _AnnounceSemanticsEvent_super_get_viewId,
    ),
    "@super:get:message": FlaxInstanceMethod.shared(
      flaxStringCall,
      _AnnounceSemanticsEvent_super_get_message,
    ),
    "@super:get:textDirection": FlaxInstanceMethod.shared(
      _flaxBinding3,
      _AnnounceSemanticsEvent_super_get_textDirection,
    ),
    "@super:get:assertiveness": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _AnnounceSemanticsEvent_super_get_assertiveness,
    ),
    "@super:get:type": _flaxBinding200,
  },
  constructors: {"": _flaxBinding213, "@implementation": _flaxBinding213},
  create: _createAnnounceSemanticsEvent,
  matches: _isAnnounceSemanticsEvent,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsEvent",
    "dart:core::Object",
  ],
  parent: _flaxBinding207,
  proxy: FlaxProxyBinding([
    _flaxBinding203,
    _flaxBinding214,
    _flaxBinding205,
    _flaxBinding215,
    _flaxBinding216,
    _flaxBinding217,
    _flaxBinding218,
    _flaxBinding206,
  ]),
);
const _flaxBinding220 = FlaxGetter.plain(
  "string",
  flaxStringType,
  _AttributedString_string,
);
const _flaxBinding221 = FlaxGetter.plain(
  "attributes",
  _flaxBinding10,
  _AttributedString_attributes,
);
const _flaxBinding222 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AttributedString_toString,
);
const _flaxBinding223 = FlaxInstanceMethod.shared(
  _flaxBinding7,
  _AttributedString_operatorAdd,
);
const _flaxBinding224 = <FlaxParameter>[
  FlaxParameter.required("string", flaxStringType),
  FlaxParameter(
    "attributes",
    _flaxBinding10,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding225 = FlaxProxyMember(
  "operatorAdd",
  0,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding226 = FlaxProxyMember(
  "string",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding227 = FlaxProxyMember(
  "attributes",
  1,
  _flaxBinding11,
  hasSuper: true,
);
const _flaxBinding228 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:AttributedString",
  [_flaxBinding220, _flaxBinding221],
  {
    "toString": _flaxBinding222,
    "operatorAdd": _flaxBinding223,
    "@super:toString": _flaxBinding199,
    "@super:operatorAdd": FlaxInstanceMethod.shared(
      _flaxBinding7,
      _AttributedString_super_operatorAdd,
    ),
    "@super:get:string": FlaxInstanceMethod.shared(
      flaxStringCall,
      _AttributedString_super_get_string,
    ),
    "@super:get:attributes": FlaxInstanceMethod.shared(
      _flaxBinding11,
      _AttributedString_super_get_attributes,
    ),
  },
  constructors: {"": _flaxBinding224, "@implementation": _flaxBinding224},
  create: _createAttributedString,
  matches: _isAttributedString,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding205,
    _flaxBinding225,
    _flaxBinding226,
    _flaxBinding227,
  ]),
);
const _flaxBinding229 = FlaxGetter.plain(
  "expandableValue",
  flaxBoolType,
  _AttributedStringProperty_expandableValue,
);
const _flaxBinding230 = FlaxGetter.plain(
  "allowWrap",
  flaxBoolType,
  _AttributedStringProperty_allowWrap,
);
const _flaxBinding231 = FlaxGetter.plain(
  "allowNameWrap",
  flaxBoolType,
  _AttributedStringProperty_allowNameWrap,
);
const _flaxBinding232 = FlaxGetter.plain(
  "ifNull",
  flaxNullableStringType,
  _AttributedStringProperty_ifNull,
);
const _flaxBinding233 = FlaxGetter.plain(
  "ifEmpty",
  flaxNullableStringType,
  _AttributedStringProperty_ifEmpty,
);
const _flaxBinding234 = FlaxGetter.plain(
  "tooltip",
  flaxNullableStringType,
  _AttributedStringProperty_tooltip,
);
const _flaxBinding235 = FlaxGetter.plain(
  "missingIfNull",
  flaxBoolType,
  _AttributedStringProperty_missingIfNull,
);
const _flaxBinding236 = FlaxGetter.plain(
  "propertyType",
  flaxTypeType,
  _AttributedStringProperty_propertyType,
);
const _flaxBinding237 = FlaxGetter.plain(
  "value",
  _flaxBinding23,
  _AttributedStringProperty_value,
);
const _flaxBinding238 = FlaxGetter.plain(
  "exception",
  flaxNullableAnyType,
  _AttributedStringProperty_exception,
);
const _flaxBinding239 = FlaxGetter.plain(
  "defaultValue",
  flaxNullableAnyType,
  _AttributedStringProperty_defaultValue,
);
const _flaxBinding240 = FlaxGetter.plain(
  "isInteresting",
  flaxBoolType,
  _AttributedStringProperty_isInteresting,
);
const _flaxBinding241 = FlaxGetter.plain(
  "level",
  _flaxBinding18,
  _AttributedStringProperty_level,
);
const _flaxBinding242 = FlaxGetter.plain(
  "name",
  flaxNullableStringType,
  _AttributedStringProperty_name,
);
const _flaxBinding243 = FlaxGetter.plain(
  "showSeparator",
  flaxBoolType,
  _AttributedStringProperty_showSeparator,
);
const _flaxBinding244 = FlaxGetter.plain(
  "showName",
  flaxBoolType,
  _AttributedStringProperty_showName,
);
const _flaxBinding245 = FlaxGetter.plain(
  "linePrefix",
  flaxNullableStringType,
  _AttributedStringProperty_linePrefix,
);
const _flaxBinding246 = FlaxGetter.plain(
  "emptyBodyDescription",
  flaxNullableStringType,
  _AttributedStringProperty_emptyBodyDescription,
);
const _flaxBinding247 = FlaxGetter.plain(
  "style",
  _flaxBinding26,
  _AttributedStringProperty_style,
);
const _flaxBinding248 = FlaxGetter.plain(
  "allowTruncate",
  flaxBoolType,
  _AttributedStringProperty_allowTruncate,
);
const _flaxBinding249 = FlaxGetter.plain(
  "textTreeConfiguration",
  _flaxBinding28,
  _AttributedStringProperty_textTreeConfiguration,
);
const _flaxBinding250 = FlaxGetter.plain(
  "showWhenEmpty",
  flaxBoolType,
  _AttributedStringProperty_showWhenEmpty,
);
const _flaxBinding251 = FlaxInstanceMethod.shared(
  _flaxBinding13,
  _AttributedStringProperty_toJsonMap,
);
const _flaxBinding252 = <FlaxParameter>[
  FlaxParameter("parentConfiguration", _flaxBinding28, required: false),
];
const _flaxBinding253 = FlaxInstanceMethod.plain(
  _flaxBinding252,
  flaxStringType,
  _AttributedStringProperty_valueToString,
);
const _flaxBinding254 = FlaxInstanceMethod.plain(
  _flaxBinding252,
  flaxStringType,
  _AttributedStringProperty_toDescription,
);
const _flaxBinding255 = FlaxInstanceMethod.shared(
  _flaxBinding17,
  _AttributedStringProperty_getProperties,
);
const _flaxBinding256 = FlaxInstanceMethod.shared(
  _flaxBinding17,
  _AttributedStringProperty_getChildren,
);
const _flaxBinding257 = FlaxInstanceMethod.shared(
  _flaxBinding19,
  _AttributedStringProperty_isFiltered,
);
const _flaxBinding258 = FlaxInstanceMethod.shared(
  _flaxBinding21,
  _AttributedStringProperty_toTimelineArguments,
);
const _flaxBinding259 = FlaxInstanceMethod.shared(
  _flaxBinding13,
  _AttributedStringProperty_toJsonMapIterative,
);
const _flaxBinding260 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding18,
    required: false,
    defaultValue: api2.DiagnosticLevel.debug,
  ),
  FlaxParameter("parentConfiguration", _flaxBinding28, required: false),
  FlaxParameter(
    "prefixLineOne",
    flaxStringType,
    required: false,
    defaultValue: '',
  ),
  FlaxParameter("prefixOtherLines", flaxNullableStringType, required: false),
  FlaxParameter("wrapWidth", flaxIntType, required: false, defaultValue: 65),
];
const _flaxBinding261 = FlaxInstanceMethod.plain(
  _flaxBinding260,
  flaxStringType,
  _AttributedStringProperty_toStringDeep,
);
const _flaxBinding262 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding18,
    required: false,
    defaultValue: api2.DiagnosticLevel.info,
  ),
  FlaxParameter("parentConfiguration", _flaxBinding28, required: false),
];
const _flaxBinding263 = FlaxInstanceMethod.plain(
  _flaxBinding262,
  flaxStringType,
  _AttributedStringProperty_toString,
);
const _flaxBinding264 = FlaxInstanceMethod.shared(
  flaxNullableStringCall,
  _FlaxProxyDispatch5_super_get_name,
);
const _flaxBinding265 = <FlaxParameter>[
  FlaxParameter.required("name", flaxStringType),
  FlaxParameter.required("value", _flaxBinding23),
  FlaxParameter("showName", flaxBoolType, required: false, defaultValue: true),
  FlaxParameter(
    "showWhenEmpty",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "defaultValue",
    flaxNullableAnyType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "level",
    _flaxBinding18,
    required: false,
    defaultValue: api2.DiagnosticLevel.info,
  ),
  FlaxParameter("description", flaxNullableStringType, required: false),
];
const _flaxBinding266 = FlaxProxyMember(
  "toJsonMap",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding267 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "parentConfiguration",
      _flaxBinding28,
      required: false,
      positional: false,
    ),
  ],
  flaxStringType,
  id: "callback:<>(n:o:parentConfiguration:object?:flax.core/sdk_foundation#type:TextTreeConfiguration)->String:",
);
const _flaxBinding268 = FlaxProxyMember(
  "valueToString",
  0,
  _flaxBinding267,
  hasSuper: true,
);
const _flaxBinding269 = FlaxProxyMember(
  "toDescription",
  0,
  _flaxBinding267,
  hasSuper: true,
);
const _flaxBinding270 = FlaxProxyMember(
  "getProperties",
  0,
  _flaxBinding17,
  hasSuper: true,
);
const _flaxBinding271 = FlaxProxyMember(
  "getChildren",
  0,
  _flaxBinding17,
  hasSuper: true,
);
const _flaxBinding272 = FlaxProxyMember(
  "isFiltered",
  0,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding273 = FlaxProxyMember(
  "toTimelineArguments",
  0,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding274 = FlaxProxyMember(
  "toJsonMapIterative",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding275 = FlaxCallbackBinding.signature(
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
      "parentConfiguration",
      _flaxBinding28,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "minLevel",
      _flaxBinding18,
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
  id: "callback:<>(n:o:prefixLineOne:String:,n:o:prefixOtherLines:String?:,n:o:parentConfiguration:object?:flax.core/sdk_foundation#type:TextTreeConfiguration,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel,n:o:wrapWidth:int:)->String:",
);
const _flaxBinding276 = FlaxProxyMember(
  "toStringDeep",
  0,
  _flaxBinding275,
  hasSuper: true,
);
const _flaxBinding277 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "parentConfiguration",
      _flaxBinding28,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "minLevel",
      _flaxBinding18,
      required: false,
      positional: false,
    ),
  ],
  flaxStringType,
  id: "callback:<>(n:o:parentConfiguration:object?:flax.core/sdk_foundation#type:TextTreeConfiguration,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding278 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding277,
  hasSuper: true,
);
const _flaxBinding279 = FlaxProxyMember(
  "showWhenEmpty",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding280 = FlaxProxyMember(
  "isInteresting",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding281 = FlaxProxyMember(
  "expandableValue",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding282 = FlaxProxyMember(
  "allowWrap",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding283 = FlaxProxyMember(
  "allowNameWrap",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding284 = FlaxProxyMember(
  "ifNull",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding285 = FlaxProxyMember(
  "ifEmpty",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding286 = FlaxProxyMember(
  "tooltip",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding287 = FlaxProxyMember(
  "missingIfNull",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding288 = FlaxProxyMember(
  "propertyType",
  1,
  _flaxBinding22,
  hasSuper: true,
);
const _flaxBinding289 = FlaxProxyMember(
  "value",
  1,
  _flaxBinding24,
  hasSuper: true,
);
const _flaxBinding290 = FlaxProxyMember(
  "exception",
  1,
  flaxNullableAnyCall,
  hasSuper: true,
);
const _flaxBinding291 = FlaxProxyMember(
  "defaultValue",
  1,
  flaxNullableAnyCall,
  hasSuper: true,
);
const _flaxBinding292 = FlaxProxyMember(
  "level",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding293 = FlaxProxyMember(
  "name",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding294 = FlaxProxyMember(
  "showSeparator",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding295 = FlaxProxyMember(
  "showName",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding296 = FlaxProxyMember(
  "linePrefix",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding297 = FlaxProxyMember(
  "emptyBodyDescription",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding298 = FlaxProxyMember(
  "style",
  1,
  _flaxBinding27,
  hasSuper: true,
);
const _flaxBinding299 = FlaxProxyMember(
  "allowTruncate",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding300 = FlaxProxyMember(
  "textTreeConfiguration",
  1,
  _flaxBinding29,
  hasSuper: true,
);
const _flaxBinding301 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:AttributedStringProperty",
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
    _flaxBinding242,
    _flaxBinding243,
    _flaxBinding244,
    _flaxBinding245,
    _flaxBinding246,
    _flaxBinding247,
    _flaxBinding248,
    _flaxBinding249,
    _flaxBinding250,
  ],
  {
    "toJsonMap": _flaxBinding251,
    "valueToString": _flaxBinding253,
    "toDescription": _flaxBinding254,
    "getProperties": _flaxBinding255,
    "getChildren": _flaxBinding256,
    "isFiltered": _flaxBinding257,
    "toTimelineArguments": _flaxBinding258,
    "toJsonMapIterative": _flaxBinding259,
    "toStringDeep": _flaxBinding261,
    "toString": _flaxBinding263,
    "@super:toJsonMap": FlaxInstanceMethod.shared(
      _flaxBinding13,
      _AttributedStringProperty_super_toJsonMap,
    ),
    "@super:valueToString": FlaxInstanceMethod.plain(
      _flaxBinding252,
      flaxStringType,
      _AttributedStringProperty_super_valueToString,
    ),
    "@super:toDescription": FlaxInstanceMethod.plain(
      _flaxBinding252,
      flaxStringType,
      _AttributedStringProperty_super_toDescription,
    ),
    "@super:getProperties": FlaxInstanceMethod.shared(
      _flaxBinding17,
      _AttributedStringProperty_super_getProperties,
    ),
    "@super:getChildren": FlaxInstanceMethod.shared(
      _flaxBinding17,
      _AttributedStringProperty_super_getChildren,
    ),
    "@super:isFiltered": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _AttributedStringProperty_super_isFiltered,
    ),
    "@super:toTimelineArguments": FlaxInstanceMethod.shared(
      _flaxBinding21,
      _AttributedStringProperty_super_toTimelineArguments,
    ),
    "@super:toJsonMapIterative": FlaxInstanceMethod.shared(
      _flaxBinding13,
      _AttributedStringProperty_super_toJsonMapIterative,
    ),
    "@super:toStringDeep": FlaxInstanceMethod.plain(
      _flaxBinding260,
      flaxStringType,
      _AttributedStringProperty_super_toStringDeep,
    ),
    "@super:toString": FlaxInstanceMethod.plain(
      _flaxBinding262,
      flaxStringType,
      _AttributedStringProperty_super_toString,
    ),
    "@super:get:showWhenEmpty": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AttributedStringProperty_super_get_showWhenEmpty,
    ),
    "@super:get:isInteresting": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AttributedStringProperty_super_get_isInteresting,
    ),
    "@super:get:expandableValue": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AttributedStringProperty_super_get_expandableValue,
    ),
    "@super:get:allowWrap": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AttributedStringProperty_super_get_allowWrap,
    ),
    "@super:get:allowNameWrap": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AttributedStringProperty_super_get_allowNameWrap,
    ),
    "@super:get:ifNull": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _AttributedStringProperty_super_get_ifNull,
    ),
    "@super:get:ifEmpty": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _AttributedStringProperty_super_get_ifEmpty,
    ),
    "@super:get:tooltip": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _AttributedStringProperty_super_get_tooltip,
    ),
    "@super:get:missingIfNull": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AttributedStringProperty_super_get_missingIfNull,
    ),
    "@super:get:propertyType": FlaxInstanceMethod.shared(
      _flaxBinding22,
      _AttributedStringProperty_super_get_propertyType,
    ),
    "@super:get:value": FlaxInstanceMethod.shared(
      _flaxBinding24,
      _AttributedStringProperty_super_get_value,
    ),
    "@super:get:exception": FlaxInstanceMethod.shared(
      flaxNullableAnyCall,
      _AttributedStringProperty_super_get_exception,
    ),
    "@super:get:defaultValue": FlaxInstanceMethod.shared(
      flaxNullableAnyCall,
      _AttributedStringProperty_super_get_defaultValue,
    ),
    "@super:get:level": FlaxInstanceMethod.shared(
      _flaxBinding25,
      _AttributedStringProperty_super_get_level,
    ),
    "@super:get:name": _flaxBinding264,
    "@super:get:showSeparator": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AttributedStringProperty_super_get_showSeparator,
    ),
    "@super:get:showName": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AttributedStringProperty_super_get_showName,
    ),
    "@super:get:linePrefix": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _AttributedStringProperty_super_get_linePrefix,
    ),
    "@super:get:emptyBodyDescription": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _AttributedStringProperty_super_get_emptyBodyDescription,
    ),
    "@super:get:style": FlaxInstanceMethod.shared(
      _flaxBinding27,
      _AttributedStringProperty_super_get_style,
    ),
    "@super:get:allowTruncate": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AttributedStringProperty_super_get_allowTruncate,
    ),
    "@super:get:textTreeConfiguration": FlaxInstanceMethod.shared(
      _flaxBinding29,
      _AttributedStringProperty_super_get_textTreeConfiguration,
    ),
  },
  constructors: {"": _flaxBinding265, "@implementation": _flaxBinding265},
  create: _createAttributedStringProperty,
  matches: _isAttributedStringProperty,
  setters: [],
  supertypes: [
    "flax.core/sdk_foundation#type:DiagnosticsProperty",
    "flax.core/sdk_foundation#type:DiagnosticsNode",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding266,
    _flaxBinding268,
    _flaxBinding269,
    _flaxBinding270,
    _flaxBinding271,
    _flaxBinding272,
    _flaxBinding273,
    _flaxBinding274,
    _flaxBinding276,
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
  ]),
);
const _flaxBinding302 = FlaxGetter.plain(
  "mergeUp",
  _flaxBinding32,
  _ChildSemanticsConfigurationsResult_mergeUp,
);
const _flaxBinding303 = FlaxGetter.plain(
  "siblingMergeGroups",
  _flaxBinding35,
  _ChildSemanticsConfigurationsResult_siblingMergeGroups,
);
const _flaxBinding304 = <FlaxParameter>[];
const _flaxBinding305 = FlaxProxyMember("mergeUp", 1, _flaxBinding33);
const _flaxBinding306 = FlaxProxyMember(
  "siblingMergeGroups",
  1,
  _flaxBinding36,
);
const _flaxBinding307 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult",
  [_flaxBinding302, _flaxBinding303],
  {},
  constructors: {"@implementation": _flaxBinding304},
  create: _createChildSemanticsConfigurationsResult,
  matches: _isChildSemanticsConfigurationsResult,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding305, _flaxBinding306]),
);
const _flaxBinding308 = FlaxInstanceMethod.shared(
  _flaxBinding37,
  _ChildSemanticsConfigurationsResultBuilder_markAsMergeUp,
);
const _flaxBinding309 = FlaxInstanceMethod.shared(
  _flaxBinding38,
  _ChildSemanticsConfigurationsResultBuilder_markAsSiblingMergeGroup,
);
const _flaxBinding310 = FlaxInstanceMethod.shared(
  _flaxBinding40,
  _ChildSemanticsConfigurationsResultBuilder_build,
);
const _flaxBinding311 = FlaxProxyMember(
  "markAsMergeUp",
  0,
  _flaxBinding37,
  hasSuper: true,
);
const _flaxBinding312 = FlaxProxyMember(
  "markAsSiblingMergeGroup",
  0,
  _flaxBinding38,
  hasSuper: true,
);
const _flaxBinding313 = FlaxProxyMember(
  "build",
  0,
  _flaxBinding40,
  hasSuper: true,
);
const _flaxBinding314 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder",
  [],
  {
    "markAsMergeUp": _flaxBinding308,
    "markAsSiblingMergeGroup": _flaxBinding309,
    "build": _flaxBinding310,
    "@super:markAsMergeUp": FlaxInstanceMethod.shared(
      _flaxBinding37,
      _ChildSemanticsConfigurationsResultBuilder_super_markAsMergeUp,
    ),
    "@super:markAsSiblingMergeGroup": FlaxInstanceMethod.shared(
      _flaxBinding38,
      _ChildSemanticsConfigurationsResultBuilder_super_markAsSiblingMergeGroup,
    ),
    "@super:build": FlaxInstanceMethod.shared(
      _flaxBinding40,
      _ChildSemanticsConfigurationsResultBuilder_super_build,
    ),
  },
  constructors: {"": _flaxBinding304, "@implementation": _flaxBinding304},
  create: _createChildSemanticsConfigurationsResultBuilder,
  matches: _isChildSemanticsConfigurationsResultBuilder,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding311, _flaxBinding312, _flaxBinding313]),
);
const _flaxBinding315 = FlaxGetter.plain(
  "label",
  flaxNullableStringType,
  _CustomSemanticsAction_label,
);
const _flaxBinding316 = FlaxGetter.plain(
  "hint",
  flaxNullableStringType,
  _CustomSemanticsAction_hint,
);
const _flaxBinding317 = FlaxGetter.plain(
  "action",
  _flaxBinding41,
  _CustomSemanticsAction_action,
);
const _flaxBinding318 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _CustomSemanticsAction_toString,
);
const _flaxBinding319 = <FlaxParameter>[
  FlaxParameter.required("label", flaxStringType),
];
const _flaxBinding320 = <FlaxParameter>[
  FlaxParameter.required("hint", flaxStringType),
  FlaxParameter.required("action", _flaxBinding49),
];
const _flaxBinding321 = FlaxProxyMember(
  "label",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding322 = FlaxProxyMember(
  "hint",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding323 = FlaxProxyMember(
  "action",
  1,
  _flaxBinding42,
  hasSuper: true,
);
const _flaxBinding324 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:CustomSemanticsAction",
  [_flaxBinding315, _flaxBinding316, _flaxBinding317],
  {
    "toString": _flaxBinding318,
    "@super:toString": _flaxBinding199,
    "@super:get:label": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _CustomSemanticsAction_super_get_label,
    ),
    "@super:get:hint": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _CustomSemanticsAction_super_get_hint,
    ),
    "@super:get:action": FlaxInstanceMethod.shared(
      _flaxBinding42,
      _CustomSemanticsAction_super_get_action,
    ),
  },
  constructors: {
    "": _flaxBinding319,
    "overridingAction": _flaxBinding320,
    "@implementation": _flaxBinding319,
    "@implementation:overridingAction": _flaxBinding320,
  },
  create: _createCustomSemanticsAction,
  matches: _isCustomSemanticsAction,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding205,
    _flaxBinding321,
    _flaxBinding322,
    _flaxBinding323,
  ]),
);
const _flaxBinding325 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:FocusSemanticEvent",
  [],
  {
    "@super:toMap": _flaxBinding198,
    "@super:getDataMap": _flaxBinding212,
    "@super:toString": _flaxBinding199,
    "@super:get:type": _flaxBinding200,
  },
  constructors: {"": _flaxBinding304, "@implementation": _flaxBinding304},
  create: _createFocusSemanticEvent,
  matches: _isFocusSemanticEvent,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsEvent",
    "dart:core::Object",
  ],
  parent: _flaxBinding207,
  proxy: FlaxProxyBinding([
    _flaxBinding203,
    _flaxBinding214,
    _flaxBinding205,
    _flaxBinding206,
  ]),
);
const _flaxBinding326 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:LongPressSemanticsEvent",
  [],
  {
    "@super:toMap": _flaxBinding198,
    "@super:getDataMap": _flaxBinding212,
    "@super:toString": _flaxBinding199,
    "@super:get:type": _flaxBinding200,
  },
  constructors: {"": _flaxBinding304, "@implementation": _flaxBinding304},
  create: _createLongPressSemanticsEvent,
  matches: _isLongPressSemanticsEvent,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsEvent",
    "dart:core::Object",
  ],
  parent: _flaxBinding207,
  proxy: FlaxProxyBinding([
    _flaxBinding203,
    _flaxBinding214,
    _flaxBinding205,
    _flaxBinding206,
  ]),
);
const _flaxBinding327 = FlaxGetter.plain(
  "name",
  flaxNullableStringType,
  _SemanticsSortKey_name,
);
const _flaxBinding328 = FlaxInstanceMethod.shared(
  _flaxBinding44,
  _SemanticsSortKey_compareTo,
);
const _flaxBinding329 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsSortKey_toStringShort,
);
const _flaxBinding330 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding18,
    required: false,
    defaultValue: api2.DiagnosticLevel.info,
  ),
];
const _flaxBinding331 = FlaxInstanceMethod.plain(
  _flaxBinding330,
  flaxStringType,
  _SemanticsSortKey_toString,
);
const _flaxBinding332 = <FlaxParameter>[
  FlaxParameter("name", flaxNullableStringType, required: false),
  FlaxParameter("style", _flaxBinding26, required: false),
];
const _flaxBinding333 = FlaxInstanceMethod.plain(
  _flaxBinding332,
  _flaxBinding14,
  _SemanticsSortKey_toDiagnosticsNode,
);
const _flaxBinding334 = FlaxInstanceMethod.shared(
  _flaxBinding48,
  _SemanticsSortKey_debugFillProperties,
);
const _flaxBinding335 = FlaxInstanceMethod.shared(
  _flaxBinding44,
  _SemanticsSortKey_doCompare,
);
const _flaxBinding336 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch9_super_call_toStringShort,
);
const _flaxBinding337 = FlaxInstanceMethod.plain(
  _flaxBinding330,
  flaxStringType,
  _FlaxProxyDispatch9_super_call_toString,
);
const _flaxBinding338 = FlaxInstanceMethod.plain(
  _flaxBinding332,
  _flaxBinding14,
  _FlaxProxyDispatch8_super_call_toDiagnosticsNode,
);
const _flaxBinding339 = FlaxInstanceMethod.shared(
  _flaxBinding48,
  _FlaxProxyDispatch8_super_call_debugFillProperties,
);
const _flaxBinding340 = <FlaxParameter>[
  FlaxParameter("name", flaxNullableStringType, required: false),
];
const _flaxBinding341 = FlaxProxyMember(
  "compareTo",
  0,
  _flaxBinding44,
  hasSuper: true,
);
const _flaxBinding342 = FlaxProxyMember(
  "toStringShort",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding343 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "minLevel",
      _flaxBinding18,
      required: false,
      positional: false,
    ),
  ],
  flaxStringType,
  id: "callback:<>(n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding344 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding343,
  hasSuper: true,
);
const _flaxBinding345 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "name",
      flaxNullableStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "style",
      _flaxBinding26,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding14,
  id: "callback:<>(n:o:name:String?:,n:o:style:enum?:flax.core/sdk_foundation#type:DiagnosticsTreeStyle)->object:flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding346 = FlaxProxyMember(
  "toDiagnosticsNode",
  0,
  _flaxBinding345,
  hasSuper: true,
);
const _flaxBinding347 = FlaxProxyMember(
  "debugFillProperties",
  0,
  _flaxBinding48,
  hasSuper: true,
);
const _flaxBinding348 = FlaxProxyMember("doCompare", 0, _flaxBinding44);
const _flaxBinding349 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsSortKey",
  [_flaxBinding327],
  {
    "compareTo": _flaxBinding328,
    "toStringShort": _flaxBinding329,
    "toString": _flaxBinding331,
    "toDiagnosticsNode": _flaxBinding333,
    "debugFillProperties": _flaxBinding334,
    "doCompare": _flaxBinding335,
    "@super:compareTo": FlaxInstanceMethod.shared(
      _flaxBinding44,
      _SemanticsSortKey_super_compareTo,
    ),
    "@super:toStringShort": _flaxBinding336,
    "@super:toString": _flaxBinding337,
    "@super:toDiagnosticsNode": _flaxBinding338,
    "@super:debugFillProperties": _flaxBinding339,
    "@super:get:name": _flaxBinding264,
  },
  constructors: {"@implementation": _flaxBinding340},
  create: _createSemanticsSortKey,
  matches: _isSemanticsSortKey,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/flutter#type:Comparable",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding341,
    _flaxBinding342,
    _flaxBinding344,
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding348,
    _flaxBinding293,
  ]),
);
const _flaxBinding350 = FlaxGetter.plain(
  "order",
  flaxDoubleType,
  _OrdinalSortKey_order,
);
const _flaxBinding351 = FlaxInstanceMethod.shared(
  _flaxBinding46,
  _OrdinalSortKey_doCompare,
);
const _flaxBinding352 = <FlaxParameter>[
  FlaxParameter.required("order", flaxDoubleType),
  FlaxParameter("name", flaxNullableStringType, required: false),
];
const _flaxBinding353 = FlaxProxyMember(
  "doCompare",
  0,
  _flaxBinding46,
  hasSuper: true,
);
const _flaxBinding354 = FlaxProxyMember(
  "order",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding355 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:OrdinalSortKey",
  [_flaxBinding350],
  {
    "doCompare": _flaxBinding351,
    "@super:compareTo": FlaxInstanceMethod.shared(
      _flaxBinding44,
      _OrdinalSortKey_super_compareTo,
    ),
    "@super:doCompare": FlaxInstanceMethod.shared(
      _flaxBinding46,
      _OrdinalSortKey_super_doCompare,
    ),
    "@super:debugFillProperties": _flaxBinding339,
    "@super:toStringShort": _flaxBinding336,
    "@super:toDiagnosticsNode": _flaxBinding338,
    "@super:toString": _flaxBinding337,
    "@super:get:order": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _OrdinalSortKey_super_get_order,
    ),
    "@super:get:name": _flaxBinding264,
  },
  constructors: {"": _flaxBinding352, "@implementation": _flaxBinding352},
  create: _createOrdinalSortKey,
  matches: _isOrdinalSortKey,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsSortKey",
    "dart:core::Object",
    "flax.core/flutter#type:Comparable",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  parent: _flaxBinding349,
  proxy: FlaxProxyBinding([
    _flaxBinding341,
    _flaxBinding353,
    _flaxBinding347,
    _flaxBinding342,
    _flaxBinding346,
    _flaxBinding344,
    _flaxBinding354,
    _flaxBinding293,
  ]),
);
const _flaxBinding356 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SingletonFlutterWindow",
);
const _flaxBinding357 = FlaxGetter.plain(
  "window",
  _flaxBinding356,
  _SemanticsBinding_window,
);
const _flaxBinding358 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PlatformDispatcher",
);
const _flaxBinding359 = FlaxGetter.plain(
  "platformDispatcher",
  _flaxBinding358,
  _SemanticsBinding_platformDispatcher,
);
const _flaxBinding360 = FlaxGetter.plain(
  "locked",
  flaxBoolType,
  _SemanticsBinding_locked,
);
const _flaxBinding361 = FlaxGetter.plain(
  "semanticsEnabled",
  flaxBoolType,
  _SemanticsBinding_semanticsEnabled,
);
const _flaxBinding362 = FlaxGetter.plain(
  "debugOutstandingSemanticsHandles",
  flaxIntType,
  _SemanticsBinding_debugOutstandingSemanticsHandles,
);
const _flaxBinding363 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:AccessibilityFeatures",
);
const _flaxBinding364 = FlaxGetter.plain(
  "accessibilityFeatures",
  _flaxBinding363,
  _SemanticsBinding_accessibilityFeatures,
);
const _flaxBinding365 = FlaxGetter.plain(
  "disableAnimations",
  flaxBoolType,
  _SemanticsBinding_disableAnimations,
);
const _flaxBinding366 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _SemanticsBinding_initInstances,
);
const _flaxBinding367 = <FlaxParameter>[
  FlaxParameter.required("entryPoint", flaxStringType),
];
const _flaxBinding368 = FlaxInstanceMethod.plain(
  _flaxBinding367,
  flaxBoolType,
  _SemanticsBinding_debugCheckZone,
);
const _flaxBinding369 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _SemanticsBinding_initServiceExtensions,
);
const _flaxBinding370 = FlaxTypeRef(
  "future",
  item: flaxVoidType,
  future: FlaxFutureBinding("void:", _future0Adapt),
);
const _flaxBinding371 = FlaxCallbackBinding(
  [],
  _flaxBinding370,
  _callback0,
  id: "callback:<>()->future:[void:]",
  invoke: _callback0Invoke,
  matches: _callback0Matches,
);
const _flaxBinding372 = FlaxTypeRef("callback", callback: _flaxBinding371);
const _flaxBinding373 = <FlaxParameter>[
  FlaxParameter.required("callback", _flaxBinding372),
];
const _flaxBinding374 = FlaxInstanceMethod.plain(
  _flaxBinding373,
  _flaxBinding370,
  _SemanticsBinding_lockEvents,
);
const _flaxBinding375 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _SemanticsBinding_unlocked,
);
const _flaxBinding376 = FlaxInstanceMethod.plain(
  _flaxBinding304,
  _flaxBinding370,
  _SemanticsBinding_reassembleApplication,
);
const _flaxBinding377 = FlaxInstanceMethod.plain(
  _flaxBinding304,
  _flaxBinding370,
  _SemanticsBinding_performReassemble,
);
const _flaxBinding378 = <FlaxParameter>[
  FlaxParameter.required("callback", _flaxBinding372),
  FlaxParameter.required("name", flaxStringType),
];
const _flaxBinding379 = FlaxInstanceMethod.plain(
  _flaxBinding378,
  flaxVoidType,
  _SemanticsBinding_registerSignalServiceExtension,
);
const _flaxBinding380 = FlaxTypeRef(
  "future",
  item: flaxBoolType,
  future: FlaxFutureBinding("bool:", _future1Adapt),
);
const _flaxBinding381 = FlaxCallbackBinding(
  [],
  _flaxBinding380,
  _callback1,
  id: "callback:<>()->future:[bool:]",
  invoke: _callback1Invoke,
  matches: _callback1Matches,
);
const _flaxBinding382 = FlaxTypeRef("callback", callback: _flaxBinding381);
const _flaxBinding383 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", flaxBoolType)],
  _flaxBinding370,
  _callback2,
  id: "callback:<>(p:r:value:bool:)->future:[void:]",
  invoke: _callback2Invoke,
  matches: _callback2Matches,
);
const _flaxBinding384 = FlaxTypeRef("callback", callback: _flaxBinding383);
const _flaxBinding385 = <FlaxParameter>[
  FlaxParameter.required("getter", _flaxBinding382),
  FlaxParameter.required("name", flaxStringType),
  FlaxParameter.required("setter", _flaxBinding384),
];
const _flaxBinding386 = FlaxInstanceMethod.plain(
  _flaxBinding385,
  flaxVoidType,
  _SemanticsBinding_registerBoolServiceExtension,
);
const _flaxBinding387 = FlaxTypeRef(
  "future",
  item: flaxDoubleType,
  future: FlaxFutureBinding("double:", _future2Adapt),
);
const _flaxBinding388 = FlaxCallbackBinding(
  [],
  _flaxBinding387,
  _callback3,
  id: "callback:<>()->future:[double:]",
  invoke: _callback3Invoke,
  matches: _callback3Matches,
);
const _flaxBinding389 = FlaxTypeRef("callback", callback: _flaxBinding388);
const _flaxBinding390 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", flaxDoubleType)],
  _flaxBinding370,
  _callback4,
  id: "callback:<>(p:r:value:double:)->future:[void:]",
  invoke: _callback4Invoke,
  matches: _callback4Matches,
);
const _flaxBinding391 = FlaxTypeRef("callback", callback: _flaxBinding390);
const _flaxBinding392 = <FlaxParameter>[
  FlaxParameter.required("getter", _flaxBinding389),
  FlaxParameter.required("name", flaxStringType),
  FlaxParameter.required("setter", _flaxBinding391),
];
const _flaxBinding393 = FlaxInstanceMethod.plain(
  _flaxBinding392,
  flaxVoidType,
  _SemanticsBinding_registerNumericServiceExtension,
);
const _flaxBinding394 = <FlaxParameter>[
  FlaxParameter.required("eventKind", flaxStringType),
  FlaxParameter.required("eventData", _flaxBinding0),
];
const _flaxBinding395 = FlaxInstanceMethod.plain(
  _flaxBinding394,
  flaxVoidType,
  _SemanticsBinding_postEvent,
);
const _flaxBinding396 = FlaxTypeRef(
  "future",
  item: flaxStringType,
  future: FlaxFutureBinding("String:", _future3Adapt),
);
const _flaxBinding397 = FlaxCallbackBinding(
  [],
  _flaxBinding396,
  _callback5,
  id: "callback:<>()->future:[String:]",
  invoke: _callback5Invoke,
  matches: _callback5Matches,
);
const _flaxBinding398 = FlaxTypeRef("callback", callback: _flaxBinding397);
const _flaxBinding399 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", flaxStringType)],
  _flaxBinding370,
  _callback6,
  id: "callback:<>(p:r:value:String:)->future:[void:]",
  invoke: _callback6Invoke,
  matches: _callback6Matches,
);
const _flaxBinding400 = FlaxTypeRef("callback", callback: _flaxBinding399);
const _flaxBinding401 = <FlaxParameter>[
  FlaxParameter.required("getter", _flaxBinding398),
  FlaxParameter.required("name", flaxStringType),
  FlaxParameter.required("setter", _flaxBinding400),
];
const _flaxBinding402 = FlaxInstanceMethod.plain(
  _flaxBinding401,
  flaxVoidType,
  _SemanticsBinding_registerStringServiceExtension,
);
const _flaxBinding403 = FlaxTypeRef(
  "map",
  item: flaxStringType,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[String:][String:]",
    _collection5Create,
    _collection5Matches,
  ),
);
const _flaxBinding404 = FlaxTypeRef(
  "future",
  item: _flaxBinding0,
  future: FlaxFutureBinding("map:[any?:][String:]", _future4Adapt),
);
const _flaxBinding405 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("parameters", _flaxBinding403)],
  _flaxBinding404,
  _callback7,
  id: "callback:<>(p:r:parameters:map:[String:][String:])->future:[map:[any?:][String:]]",
  invoke: _callback7Invoke,
  matches: _callback7Matches,
);
const _flaxBinding406 = FlaxTypeRef("callback", callback: _flaxBinding405);
const _flaxBinding407 = <FlaxParameter>[
  FlaxParameter.required("callback", _flaxBinding406),
  FlaxParameter.required("name", flaxStringType),
];
const _flaxBinding408 = FlaxInstanceMethod.plain(
  _flaxBinding407,
  flaxVoidType,
  _SemanticsBinding_registerServiceExtension,
);
const _flaxBinding409 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsBinding_toString,
);
const _flaxBinding410 = FlaxInstanceMethod.shared(
  _flaxBinding175,
  _SemanticsBinding_addSemanticsEnabledListener,
);
const _flaxBinding411 = FlaxInstanceMethod.shared(
  _flaxBinding175,
  _SemanticsBinding_removeSemanticsEnabledListener,
);
const _flaxBinding412 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsActionEvent",
);
const _flaxBinding413 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", _flaxBinding412)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api1.SemanticsActionEvent>,
  id: "callback:<>(p:r:value:object:flax.core/sdk_dart_ui#type:SemanticsActionEvent)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api1.SemanticsActionEvent>,
  matches: FlaxCallbackAdapters.matchesVoid1<api1.SemanticsActionEvent>,
);
const _flaxBinding414 = FlaxTypeRef("callback", callback: _flaxBinding413);
const _flaxBinding415 = <FlaxParameter>[
  FlaxParameter.required("listener", _flaxBinding414),
];
const _flaxBinding416 = FlaxInstanceMethod.plain(
  _flaxBinding415,
  flaxVoidType,
  _SemanticsBinding_addSemanticsActionListener,
);
const _flaxBinding417 = FlaxInstanceMethod.plain(
  _flaxBinding415,
  flaxVoidType,
  _SemanticsBinding_removeSemanticsActionListener,
);
const _flaxBinding418 = <FlaxParameter>[
  FlaxParameter.required("viewId", flaxIntType),
  FlaxParameter.required("nodeId", flaxIntType),
];
const _flaxBinding419 = FlaxInstanceMethod.plain(
  _flaxBinding418,
  _flaxBinding164,
  _SemanticsBinding_getRectOfSemanticsNodeInViewCoordinates,
);
const _flaxBinding420 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsHandle",
);
const _flaxBinding421 = FlaxInstanceMethod.plain(
  _flaxBinding304,
  _flaxBinding420,
  _SemanticsBinding_ensureSemantics,
);
const _flaxBinding422 = <FlaxParameter>[
  FlaxParameter.required("action", _flaxBinding412),
];
const _flaxBinding423 = FlaxInstanceMethod.plain(
  _flaxBinding422,
  flaxVoidType,
  _SemanticsBinding_performSemanticsAction,
);
const _flaxBinding424 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _SemanticsBinding_handleAccessibilityFeaturesChanged,
);
const _flaxBinding425 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsUpdateBuilder",
);
const _flaxBinding426 = FlaxInstanceMethod.plain(
  _flaxBinding304,
  _flaxBinding425,
  _SemanticsBinding_createSemanticsUpdateBuilder,
);
const _flaxBinding427 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsBinding",
  [
    _flaxBinding357,
    _flaxBinding359,
    _flaxBinding360,
    _flaxBinding361,
    _flaxBinding362,
    _flaxBinding364,
    _flaxBinding365,
  ],
  {
    "initInstances": _flaxBinding366,
    "debugCheckZone": _flaxBinding368,
    "initServiceExtensions": _flaxBinding369,
    "lockEvents": _flaxBinding374,
    "unlocked": _flaxBinding375,
    "reassembleApplication": _flaxBinding376,
    "performReassemble": _flaxBinding377,
    "registerSignalServiceExtension": _flaxBinding379,
    "registerBoolServiceExtension": _flaxBinding386,
    "registerNumericServiceExtension": _flaxBinding393,
    "postEvent": _flaxBinding395,
    "registerStringServiceExtension": _flaxBinding402,
    "registerServiceExtension": _flaxBinding408,
    "toString": _flaxBinding409,
    "addSemanticsEnabledListener": _flaxBinding410,
    "removeSemanticsEnabledListener": _flaxBinding411,
    "addSemanticsActionListener": _flaxBinding416,
    "removeSemanticsActionListener": _flaxBinding417,
    "getRectOfSemanticsNodeInViewCoordinates": _flaxBinding419,
    "ensureSemantics": _flaxBinding421,
    "performSemanticsAction": _flaxBinding423,
    "handleAccessibilityFeaturesChanged": _flaxBinding424,
    "createSemanticsUpdateBuilder": _flaxBinding426,
  },
  constructors: {},
  create: _createSemanticsBinding,
  matches: _isSemanticsBinding,
  setters: [],
  supertypes: [
    "flax.core/sdk_foundation#type:BindingBase",
    "dart:core::Object",
  ],
);
const _flaxBinding428 = FlaxGetter.plain(
  "isSemanticBoundary",
  flaxBoolType,
  _SemanticsConfiguration_isSemanticBoundary,
);
const _flaxBinding429 = FlaxGetter.plain(
  "localeForSubtree",
  _flaxBinding60,
  _SemanticsConfiguration_localeForSubtree,
);
const _flaxBinding430 = FlaxGetter.plain(
  "locale",
  _flaxBinding60,
  _SemanticsConfiguration_locale,
);
const _flaxBinding431 = FlaxGetter.plain(
  "isBlockingUserActions",
  flaxBoolType,
  _SemanticsConfiguration_isBlockingUserActions,
);
const _flaxBinding432 = FlaxGetter.plain(
  "explicitChildNodes",
  flaxBoolType,
  _SemanticsConfiguration_explicitChildNodes,
);
const _flaxBinding433 = FlaxGetter.plain(
  "isBlockingSemanticsOfPreviouslyPaintedNodes",
  flaxBoolType,
  _SemanticsConfiguration_isBlockingSemanticsOfPreviouslyPaintedNodes,
);
const _flaxBinding434 = FlaxGetter.plain(
  "hasBeenAnnotated",
  flaxBoolType,
  _SemanticsConfiguration_hasBeenAnnotated,
);
const _flaxBinding435 = FlaxGetter.plain(
  "onTap",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onTap,
);
const _flaxBinding436 = FlaxGetter.plain(
  "onLongPress",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onLongPress,
);
const _flaxBinding437 = FlaxGetter.plain(
  "onScrollLeft",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onScrollLeft,
);
const _flaxBinding438 = FlaxGetter.plain(
  "onDismiss",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onDismiss,
);
const _flaxBinding439 = FlaxGetter.plain(
  "onScrollRight",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onScrollRight,
);
const _flaxBinding440 = FlaxGetter.plain(
  "onScrollUp",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onScrollUp,
);
const _flaxBinding441 = FlaxGetter.plain(
  "onScrollDown",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onScrollDown,
);
const _flaxBinding442 = FlaxGetter.plain(
  "onScrollToOffset",
  _flaxBinding64,
  _SemanticsConfiguration_onScrollToOffset,
);
const _flaxBinding443 = FlaxGetter.plain(
  "onIncrease",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onIncrease,
);
const _flaxBinding444 = FlaxGetter.plain(
  "onDecrease",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onDecrease,
);
const _flaxBinding445 = FlaxGetter.plain(
  "onCopy",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onCopy,
);
const _flaxBinding446 = FlaxGetter.plain(
  "onCut",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onCut,
);
const _flaxBinding447 = FlaxGetter.plain(
  "onPaste",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onPaste,
);
const _flaxBinding448 = FlaxGetter.plain(
  "onShowOnScreen",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onShowOnScreen,
);
const _flaxBinding449 = FlaxGetter.plain(
  "onMoveCursorForwardByCharacter",
  _flaxBinding67,
  _SemanticsConfiguration_onMoveCursorForwardByCharacter,
);
const _flaxBinding450 = FlaxGetter.plain(
  "onMoveCursorBackwardByCharacter",
  _flaxBinding67,
  _SemanticsConfiguration_onMoveCursorBackwardByCharacter,
);
const _flaxBinding451 = FlaxGetter.plain(
  "onMoveCursorForwardByWord",
  _flaxBinding67,
  _SemanticsConfiguration_onMoveCursorForwardByWord,
);
const _flaxBinding452 = FlaxGetter.plain(
  "onMoveCursorBackwardByWord",
  _flaxBinding67,
  _SemanticsConfiguration_onMoveCursorBackwardByWord,
);
const _flaxBinding453 = FlaxGetter.plain(
  "onSetSelection",
  _flaxBinding71,
  _SemanticsConfiguration_onSetSelection,
);
const _flaxBinding454 = FlaxGetter.plain(
  "onSetText",
  _flaxBinding74,
  _SemanticsConfiguration_onSetText,
);
const _flaxBinding455 = FlaxGetter.plain(
  "onDidGainAccessibilityFocus",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onDidGainAccessibilityFocus,
);
const _flaxBinding456 = FlaxGetter.plain(
  "onDidLoseAccessibilityFocus",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onDidLoseAccessibilityFocus,
);
const _flaxBinding457 = FlaxGetter.plain(
  "onFocus",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onFocus,
);
const _flaxBinding458 = FlaxGetter.plain(
  "onExpand",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onExpand,
);
const _flaxBinding459 = FlaxGetter.plain(
  "onCollapse",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_onCollapse,
);
const _flaxBinding460 = FlaxGetter.plain(
  "childConfigurationsDelegate",
  _flaxBinding77,
  _SemanticsConfiguration_childConfigurationsDelegate,
);
const _flaxBinding461 = FlaxGetter.plain(
  "sortKey",
  _flaxBinding79,
  _SemanticsConfiguration_sortKey,
);
const _flaxBinding462 = FlaxGetter.plain(
  "indexInParent",
  flaxNullableIntType,
  _SemanticsConfiguration_indexInParent,
);
const _flaxBinding463 = FlaxGetter.plain(
  "scrollChildCount",
  flaxNullableIntType,
  _SemanticsConfiguration_scrollChildCount,
);
const _flaxBinding464 = FlaxGetter.plain(
  "scrollIndex",
  flaxNullableIntType,
  _SemanticsConfiguration_scrollIndex,
);
const _flaxBinding465 = FlaxGetter.plain(
  "platformViewId",
  flaxNullableIntType,
  _SemanticsConfiguration_platformViewId,
);
const _flaxBinding466 = FlaxGetter.plain(
  "maxValueLength",
  flaxNullableIntType,
  _SemanticsConfiguration_maxValueLength,
);
const _flaxBinding467 = FlaxGetter.plain(
  "currentValueLength",
  flaxNullableIntType,
  _SemanticsConfiguration_currentValueLength,
);
const _flaxBinding468 = FlaxGetter.plain(
  "isMergingSemanticsOfDescendants",
  flaxBoolType,
  _SemanticsConfiguration_isMergingSemanticsOfDescendants,
);
const _flaxBinding469 = FlaxGetter.plain(
  "customSemanticsActions",
  _flaxBinding82,
  _SemanticsConfiguration_customSemanticsActions,
);
const _flaxBinding470 = FlaxGetter.plain(
  "identifier",
  flaxStringType,
  _SemanticsConfiguration_identifier,
);
const _flaxBinding471 = FlaxGetter.plain(
  "traversalParentIdentifier",
  flaxNullableAnyType,
  _SemanticsConfiguration_traversalParentIdentifier,
);
const _flaxBinding472 = FlaxGetter.plain(
  "traversalChildIdentifier",
  flaxNullableAnyType,
  _SemanticsConfiguration_traversalChildIdentifier,
);
const _flaxBinding473 = FlaxGetter.plain(
  "role",
  _flaxBinding84,
  _SemanticsConfiguration_role,
);
const _flaxBinding474 = FlaxGetter.plain(
  "label",
  flaxStringType,
  _SemanticsConfiguration_label,
);
const _flaxBinding475 = FlaxGetter.plain(
  "attributedLabel",
  _flaxBinding6,
  _SemanticsConfiguration_attributedLabel,
);
const _flaxBinding476 = FlaxGetter.plain(
  "value",
  flaxStringType,
  _SemanticsConfiguration_value,
);
const _flaxBinding477 = FlaxGetter.plain(
  "attributedValue",
  _flaxBinding6,
  _SemanticsConfiguration_attributedValue,
);
const _flaxBinding478 = FlaxGetter.plain(
  "increasedValue",
  flaxStringType,
  _SemanticsConfiguration_increasedValue,
);
const _flaxBinding479 = FlaxGetter.plain(
  "attributedIncreasedValue",
  _flaxBinding6,
  _SemanticsConfiguration_attributedIncreasedValue,
);
const _flaxBinding480 = FlaxGetter.plain(
  "decreasedValue",
  flaxStringType,
  _SemanticsConfiguration_decreasedValue,
);
const _flaxBinding481 = FlaxGetter.plain(
  "attributedDecreasedValue",
  _flaxBinding6,
  _SemanticsConfiguration_attributedDecreasedValue,
);
const _flaxBinding482 = FlaxGetter.plain(
  "hint",
  flaxStringType,
  _SemanticsConfiguration_hint,
);
const _flaxBinding483 = FlaxGetter.plain(
  "attributedHint",
  _flaxBinding6,
  _SemanticsConfiguration_attributedHint,
);
const _flaxBinding484 = FlaxGetter.plain(
  "tooltip",
  flaxStringType,
  _SemanticsConfiguration_tooltip,
);
const _flaxBinding485 = FlaxGetter.plain(
  "hintOverrides",
  _flaxBinding87,
  _SemanticsConfiguration_hintOverrides,
);
const _flaxBinding486 = FlaxGetter.plain(
  "scopesRoute",
  flaxBoolType,
  _SemanticsConfiguration_scopesRoute,
);
const _flaxBinding487 = FlaxGetter.plain(
  "namesRoute",
  flaxBoolType,
  _SemanticsConfiguration_namesRoute,
);
const _flaxBinding488 = FlaxGetter.plain(
  "isImage",
  flaxBoolType,
  _SemanticsConfiguration_isImage,
);
const _flaxBinding489 = FlaxGetter.plain(
  "liveRegion",
  flaxBoolType,
  _SemanticsConfiguration_liveRegion,
);
const _flaxBinding490 = FlaxGetter.plain(
  "textDirection",
  _flaxBinding89,
  _SemanticsConfiguration_textDirection,
);
const _flaxBinding491 = FlaxGetter.plain(
  "isSelected",
  flaxBoolType,
  _SemanticsConfiguration_isSelected,
);
const _flaxBinding492 = FlaxGetter.plain(
  "isExpanded",
  flaxNullableBoolType,
  _SemanticsConfiguration_isExpanded,
);
const _flaxBinding493 = FlaxGetter.plain(
  "isEnabled",
  flaxNullableBoolType,
  _SemanticsConfiguration_isEnabled,
);
const _flaxBinding494 = FlaxGetter.plain(
  "isChecked",
  flaxNullableBoolType,
  _SemanticsConfiguration_isChecked,
);
const _flaxBinding495 = FlaxGetter.plain(
  "isCheckStateMixed",
  flaxNullableBoolType,
  _SemanticsConfiguration_isCheckStateMixed,
);
const _flaxBinding496 = FlaxGetter.plain(
  "isToggled",
  flaxNullableBoolType,
  _SemanticsConfiguration_isToggled,
);
const _flaxBinding497 = FlaxGetter.plain(
  "isInMutuallyExclusiveGroup",
  flaxBoolType,
  _SemanticsConfiguration_isInMutuallyExclusiveGroup,
);
const _flaxBinding498 = FlaxGetter.plain(
  "isFocusable",
  flaxBoolType,
  _SemanticsConfiguration_isFocusable,
);
const _flaxBinding499 = FlaxGetter.plain(
  "isFocused",
  flaxNullableBoolType,
  _SemanticsConfiguration_isFocused,
);
const _flaxBinding500 = FlaxGetter.plain(
  "accessibilityFocusBlockType",
  _flaxBinding91,
  _SemanticsConfiguration_accessibilityFocusBlockType,
);
const _flaxBinding501 = FlaxGetter.plain(
  "isButton",
  flaxBoolType,
  _SemanticsConfiguration_isButton,
);
const _flaxBinding502 = FlaxGetter.plain(
  "isLink",
  flaxBoolType,
  _SemanticsConfiguration_isLink,
);
const _flaxBinding503 = FlaxGetter.plain(
  "linkUrl",
  _flaxBinding93,
  _SemanticsConfiguration_linkUrl,
);
const _flaxBinding504 = FlaxGetter.plain(
  "isHeader",
  flaxBoolType,
  _SemanticsConfiguration_isHeader,
);
const _flaxBinding505 = FlaxGetter.plain(
  "headingLevel",
  flaxIntType,
  _SemanticsConfiguration_headingLevel,
);
const _flaxBinding506 = FlaxGetter.plain(
  "isSlider",
  flaxBoolType,
  _SemanticsConfiguration_isSlider,
);
const _flaxBinding507 = FlaxGetter.plain(
  "isKeyboardKey",
  flaxBoolType,
  _SemanticsConfiguration_isKeyboardKey,
);
const _flaxBinding508 = FlaxGetter.plain(
  "isHidden",
  flaxBoolType,
  _SemanticsConfiguration_isHidden,
);
const _flaxBinding509 = FlaxGetter.plain(
  "isTextField",
  flaxBoolType,
  _SemanticsConfiguration_isTextField,
);
const _flaxBinding510 = FlaxGetter.plain(
  "isReadOnly",
  flaxBoolType,
  _SemanticsConfiguration_isReadOnly,
);
const _flaxBinding511 = FlaxGetter.plain(
  "isObscured",
  flaxBoolType,
  _SemanticsConfiguration_isObscured,
);
const _flaxBinding512 = FlaxGetter.plain(
  "isMultiline",
  flaxBoolType,
  _SemanticsConfiguration_isMultiline,
);
const _flaxBinding513 = FlaxGetter.plain(
  "isRequired",
  flaxNullableBoolType,
  _SemanticsConfiguration_isRequired,
);
const _flaxBinding514 = FlaxGetter.plain(
  "hasImplicitScrolling",
  flaxBoolType,
  _SemanticsConfiguration_hasImplicitScrolling,
);
const _flaxBinding515 = FlaxGetter.plain(
  "textSelection",
  _flaxBinding95,
  _SemanticsConfiguration_textSelection,
);
const _flaxBinding516 = FlaxGetter.plain(
  "scrollPosition",
  flaxNullableDoubleType,
  _SemanticsConfiguration_scrollPosition,
);
const _flaxBinding517 = FlaxGetter.plain(
  "scrollExtentMax",
  flaxNullableDoubleType,
  _SemanticsConfiguration_scrollExtentMax,
);
const _flaxBinding518 = FlaxGetter.plain(
  "scrollExtentMin",
  flaxNullableDoubleType,
  _SemanticsConfiguration_scrollExtentMin,
);
const _flaxBinding519 = FlaxGetter.plain(
  "controlsNodes",
  _flaxBinding98,
  _SemanticsConfiguration_controlsNodes,
);
const _flaxBinding520 = FlaxGetter.plain(
  "validationResult",
  _flaxBinding100,
  _SemanticsConfiguration_validationResult,
);
const _flaxBinding521 = FlaxGetter.plain(
  "hitTestBehavior",
  _flaxBinding102,
  _SemanticsConfiguration_hitTestBehavior,
);
const _flaxBinding522 = FlaxGetter.plain(
  "inputType",
  _flaxBinding104,
  _SemanticsConfiguration_inputType,
);
const _flaxBinding523 = FlaxGetter.plain(
  "maxValue",
  flaxNullableStringType,
  _SemanticsConfiguration_maxValue,
);
const _flaxBinding524 = FlaxGetter.plain(
  "minValue",
  flaxNullableStringType,
  _SemanticsConfiguration_minValue,
);
const _flaxBinding525 = FlaxGetter.plain(
  "tagsForChildren",
  _flaxBinding106,
  _SemanticsConfiguration_tagsForChildren,
);
const _flaxBinding526 = FlaxSetter(
  "isSemanticBoundary",
  flaxBoolType,
  _SemanticsConfiguration_set_isSemanticBoundary,
);
const _flaxBinding527 = FlaxSetter(
  "localeForSubtree",
  _flaxBinding60,
  _SemanticsConfiguration_set_localeForSubtree,
);
const _flaxBinding528 = FlaxSetter(
  "locale",
  _flaxBinding60,
  _SemanticsConfiguration_set_locale,
);
const _flaxBinding529 = FlaxSetter(
  "isBlockingUserActions",
  flaxBoolType,
  _SemanticsConfiguration_set_isBlockingUserActions,
);
const _flaxBinding530 = FlaxSetter(
  "explicitChildNodes",
  flaxBoolType,
  _SemanticsConfiguration_set_explicitChildNodes,
);
const _flaxBinding531 = FlaxSetter(
  "isBlockingSemanticsOfPreviouslyPaintedNodes",
  flaxBoolType,
  _SemanticsConfiguration_set_isBlockingSemanticsOfPreviouslyPaintedNodes,
);
const _flaxBinding532 = FlaxSetter(
  "onTap",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onTap,
);
const _flaxBinding533 = FlaxSetter(
  "onLongPress",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onLongPress,
);
const _flaxBinding534 = FlaxSetter(
  "onScrollLeft",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onScrollLeft,
);
const _flaxBinding535 = FlaxSetter(
  "onDismiss",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onDismiss,
);
const _flaxBinding536 = FlaxSetter(
  "onScrollRight",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onScrollRight,
);
const _flaxBinding537 = FlaxSetter(
  "onScrollUp",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onScrollUp,
);
const _flaxBinding538 = FlaxSetter(
  "onScrollDown",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onScrollDown,
);
const _flaxBinding539 = FlaxSetter(
  "onScrollToOffset",
  _flaxBinding64,
  _SemanticsConfiguration_set_onScrollToOffset,
);
const _flaxBinding540 = FlaxSetter(
  "onIncrease",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onIncrease,
);
const _flaxBinding541 = FlaxSetter(
  "onDecrease",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onDecrease,
);
const _flaxBinding542 = FlaxSetter(
  "onCopy",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onCopy,
);
const _flaxBinding543 = FlaxSetter(
  "onCut",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onCut,
);
const _flaxBinding544 = FlaxSetter(
  "onPaste",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onPaste,
);
const _flaxBinding545 = FlaxSetter(
  "onShowOnScreen",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onShowOnScreen,
);
const _flaxBinding546 = FlaxSetter(
  "onMoveCursorForwardByCharacter",
  _flaxBinding67,
  _SemanticsConfiguration_set_onMoveCursorForwardByCharacter,
);
const _flaxBinding547 = FlaxSetter(
  "onMoveCursorBackwardByCharacter",
  _flaxBinding67,
  _SemanticsConfiguration_set_onMoveCursorBackwardByCharacter,
);
const _flaxBinding548 = FlaxSetter(
  "onMoveCursorForwardByWord",
  _flaxBinding67,
  _SemanticsConfiguration_set_onMoveCursorForwardByWord,
);
const _flaxBinding549 = FlaxSetter(
  "onMoveCursorBackwardByWord",
  _flaxBinding67,
  _SemanticsConfiguration_set_onMoveCursorBackwardByWord,
);
const _flaxBinding550 = FlaxSetter(
  "onSetSelection",
  _flaxBinding71,
  _SemanticsConfiguration_set_onSetSelection,
);
const _flaxBinding551 = FlaxSetter(
  "onSetText",
  _flaxBinding74,
  _SemanticsConfiguration_set_onSetText,
);
const _flaxBinding552 = FlaxSetter(
  "onDidGainAccessibilityFocus",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onDidGainAccessibilityFocus,
);
const _flaxBinding553 = FlaxSetter(
  "onDidLoseAccessibilityFocus",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onDidLoseAccessibilityFocus,
);
const _flaxBinding554 = FlaxSetter(
  "onFocus",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onFocus,
);
const _flaxBinding555 = FlaxSetter(
  "onExpand",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onExpand,
);
const _flaxBinding556 = FlaxSetter(
  "onCollapse",
  flaxVoidNullableCallbackType,
  _SemanticsConfiguration_set_onCollapse,
);
const _flaxBinding557 = FlaxSetter(
  "childConfigurationsDelegate",
  _flaxBinding77,
  _SemanticsConfiguration_set_childConfigurationsDelegate,
);
const _flaxBinding558 = FlaxSetter(
  "sortKey",
  _flaxBinding79,
  _SemanticsConfiguration_set_sortKey,
);
const _flaxBinding559 = FlaxSetter(
  "indexInParent",
  flaxNullableIntType,
  _SemanticsConfiguration_set_indexInParent,
);
const _flaxBinding560 = FlaxSetter(
  "scrollChildCount",
  flaxNullableIntType,
  _SemanticsConfiguration_set_scrollChildCount,
);
const _flaxBinding561 = FlaxSetter(
  "scrollIndex",
  flaxNullableIntType,
  _SemanticsConfiguration_set_scrollIndex,
);
const _flaxBinding562 = FlaxSetter(
  "platformViewId",
  flaxNullableIntType,
  _SemanticsConfiguration_set_platformViewId,
);
const _flaxBinding563 = FlaxSetter(
  "maxValueLength",
  flaxNullableIntType,
  _SemanticsConfiguration_set_maxValueLength,
);
const _flaxBinding564 = FlaxSetter(
  "currentValueLength",
  flaxNullableIntType,
  _SemanticsConfiguration_set_currentValueLength,
);
const _flaxBinding565 = FlaxSetter(
  "isMergingSemanticsOfDescendants",
  flaxBoolType,
  _SemanticsConfiguration_set_isMergingSemanticsOfDescendants,
);
const _flaxBinding566 = FlaxSetter(
  "customSemanticsActions",
  _flaxBinding82,
  _SemanticsConfiguration_set_customSemanticsActions,
);
const _flaxBinding567 = FlaxSetter(
  "identifier",
  flaxStringType,
  _SemanticsConfiguration_set_identifier,
);
const _flaxBinding568 = FlaxSetter(
  "traversalParentIdentifier",
  flaxNullableAnyType,
  _SemanticsConfiguration_set_traversalParentIdentifier,
);
const _flaxBinding569 = FlaxSetter(
  "traversalChildIdentifier",
  flaxNullableAnyType,
  _SemanticsConfiguration_set_traversalChildIdentifier,
);
const _flaxBinding570 = FlaxSetter(
  "role",
  _flaxBinding84,
  _SemanticsConfiguration_set_role,
);
const _flaxBinding571 = FlaxSetter(
  "label",
  flaxStringType,
  _SemanticsConfiguration_set_label,
);
const _flaxBinding572 = FlaxSetter(
  "attributedLabel",
  _flaxBinding6,
  _SemanticsConfiguration_set_attributedLabel,
);
const _flaxBinding573 = FlaxSetter(
  "value",
  flaxStringType,
  _SemanticsConfiguration_set_value,
);
const _flaxBinding574 = FlaxSetter(
  "attributedValue",
  _flaxBinding6,
  _SemanticsConfiguration_set_attributedValue,
);
const _flaxBinding575 = FlaxSetter(
  "increasedValue",
  flaxStringType,
  _SemanticsConfiguration_set_increasedValue,
);
const _flaxBinding576 = FlaxSetter(
  "attributedIncreasedValue",
  _flaxBinding6,
  _SemanticsConfiguration_set_attributedIncreasedValue,
);
const _flaxBinding577 = FlaxSetter(
  "decreasedValue",
  flaxStringType,
  _SemanticsConfiguration_set_decreasedValue,
);
const _flaxBinding578 = FlaxSetter(
  "attributedDecreasedValue",
  _flaxBinding6,
  _SemanticsConfiguration_set_attributedDecreasedValue,
);
const _flaxBinding579 = FlaxSetter(
  "hint",
  flaxStringType,
  _SemanticsConfiguration_set_hint,
);
const _flaxBinding580 = FlaxSetter(
  "attributedHint",
  _flaxBinding6,
  _SemanticsConfiguration_set_attributedHint,
);
const _flaxBinding581 = FlaxSetter(
  "tooltip",
  flaxStringType,
  _SemanticsConfiguration_set_tooltip,
);
const _flaxBinding582 = FlaxSetter(
  "hintOverrides",
  _flaxBinding87,
  _SemanticsConfiguration_set_hintOverrides,
);
const _flaxBinding583 = FlaxSetter(
  "scopesRoute",
  flaxBoolType,
  _SemanticsConfiguration_set_scopesRoute,
);
const _flaxBinding584 = FlaxSetter(
  "namesRoute",
  flaxBoolType,
  _SemanticsConfiguration_set_namesRoute,
);
const _flaxBinding585 = FlaxSetter(
  "isImage",
  flaxBoolType,
  _SemanticsConfiguration_set_isImage,
);
const _flaxBinding586 = FlaxSetter(
  "liveRegion",
  flaxBoolType,
  _SemanticsConfiguration_set_liveRegion,
);
const _flaxBinding587 = FlaxSetter(
  "textDirection",
  _flaxBinding89,
  _SemanticsConfiguration_set_textDirection,
);
const _flaxBinding588 = FlaxSetter(
  "isSelected",
  flaxBoolType,
  _SemanticsConfiguration_set_isSelected,
);
const _flaxBinding589 = FlaxSetter(
  "isExpanded",
  flaxNullableBoolType,
  _SemanticsConfiguration_set_isExpanded,
);
const _flaxBinding590 = FlaxSetter(
  "isEnabled",
  flaxNullableBoolType,
  _SemanticsConfiguration_set_isEnabled,
);
const _flaxBinding591 = FlaxSetter(
  "isChecked",
  flaxNullableBoolType,
  _SemanticsConfiguration_set_isChecked,
);
const _flaxBinding592 = FlaxSetter(
  "isCheckStateMixed",
  flaxNullableBoolType,
  _SemanticsConfiguration_set_isCheckStateMixed,
);
const _flaxBinding593 = FlaxSetter(
  "isToggled",
  flaxNullableBoolType,
  _SemanticsConfiguration_set_isToggled,
);
const _flaxBinding594 = FlaxSetter(
  "isInMutuallyExclusiveGroup",
  flaxBoolType,
  _SemanticsConfiguration_set_isInMutuallyExclusiveGroup,
);
const _flaxBinding595 = FlaxSetter(
  "isFocusable",
  flaxBoolType,
  _SemanticsConfiguration_set_isFocusable,
);
const _flaxBinding596 = FlaxSetter(
  "isFocused",
  flaxNullableBoolType,
  _SemanticsConfiguration_set_isFocused,
);
const _flaxBinding597 = FlaxSetter(
  "accessibilityFocusBlockType",
  _flaxBinding91,
  _SemanticsConfiguration_set_accessibilityFocusBlockType,
);
const _flaxBinding598 = FlaxSetter(
  "isButton",
  flaxBoolType,
  _SemanticsConfiguration_set_isButton,
);
const _flaxBinding599 = FlaxSetter(
  "isLink",
  flaxBoolType,
  _SemanticsConfiguration_set_isLink,
);
const _flaxBinding600 = FlaxSetter(
  "linkUrl",
  _flaxBinding93,
  _SemanticsConfiguration_set_linkUrl,
);
const _flaxBinding601 = FlaxSetter(
  "isHeader",
  flaxBoolType,
  _SemanticsConfiguration_set_isHeader,
);
const _flaxBinding602 = FlaxSetter(
  "headingLevel",
  flaxIntType,
  _SemanticsConfiguration_set_headingLevel,
);
const _flaxBinding603 = FlaxSetter(
  "isSlider",
  flaxBoolType,
  _SemanticsConfiguration_set_isSlider,
);
const _flaxBinding604 = FlaxSetter(
  "isKeyboardKey",
  flaxBoolType,
  _SemanticsConfiguration_set_isKeyboardKey,
);
const _flaxBinding605 = FlaxSetter(
  "isHidden",
  flaxBoolType,
  _SemanticsConfiguration_set_isHidden,
);
const _flaxBinding606 = FlaxSetter(
  "isTextField",
  flaxBoolType,
  _SemanticsConfiguration_set_isTextField,
);
const _flaxBinding607 = FlaxSetter(
  "isReadOnly",
  flaxBoolType,
  _SemanticsConfiguration_set_isReadOnly,
);
const _flaxBinding608 = FlaxSetter(
  "isObscured",
  flaxBoolType,
  _SemanticsConfiguration_set_isObscured,
);
const _flaxBinding609 = FlaxSetter(
  "isMultiline",
  flaxBoolType,
  _SemanticsConfiguration_set_isMultiline,
);
const _flaxBinding610 = FlaxSetter(
  "isRequired",
  flaxNullableBoolType,
  _SemanticsConfiguration_set_isRequired,
);
const _flaxBinding611 = FlaxSetter(
  "hasImplicitScrolling",
  flaxBoolType,
  _SemanticsConfiguration_set_hasImplicitScrolling,
);
const _flaxBinding612 = FlaxSetter(
  "textSelection",
  _flaxBinding95,
  _SemanticsConfiguration_set_textSelection,
);
const _flaxBinding613 = FlaxSetter(
  "scrollPosition",
  flaxNullableDoubleType,
  _SemanticsConfiguration_set_scrollPosition,
);
const _flaxBinding614 = FlaxSetter(
  "scrollExtentMax",
  flaxNullableDoubleType,
  _SemanticsConfiguration_set_scrollExtentMax,
);
const _flaxBinding615 = FlaxSetter(
  "scrollExtentMin",
  flaxNullableDoubleType,
  _SemanticsConfiguration_set_scrollExtentMin,
);
const _flaxBinding616 = FlaxSetter(
  "controlsNodes",
  _flaxBinding98,
  _SemanticsConfiguration_set_controlsNodes,
);
const _flaxBinding617 = FlaxSetter(
  "validationResult",
  _flaxBinding100,
  _SemanticsConfiguration_set_validationResult,
);
const _flaxBinding618 = FlaxSetter(
  "hitTestBehavior",
  _flaxBinding102,
  _SemanticsConfiguration_set_hitTestBehavior,
);
const _flaxBinding619 = FlaxSetter(
  "inputType",
  _flaxBinding104,
  _SemanticsConfiguration_set_inputType,
);
const _flaxBinding620 = FlaxSetter(
  "maxValue",
  flaxNullableStringType,
  _SemanticsConfiguration_set_maxValue,
);
const _flaxBinding621 = FlaxSetter(
  "minValue",
  flaxNullableStringType,
  _SemanticsConfiguration_set_minValue,
);
const _flaxBinding622 = FlaxInstanceMethod.shared(
  _flaxBinding52,
  _SemanticsConfiguration_getActionHandler,
);
const _flaxBinding623 = FlaxInstanceMethod.shared(
  _flaxBinding54,
  _SemanticsConfiguration_tagsChildrenWith,
);
const _flaxBinding624 = FlaxInstanceMethod.shared(
  _flaxBinding55,
  _SemanticsConfiguration_addTagForChildren,
);
const _flaxBinding625 = FlaxInstanceMethod.shared(
  _flaxBinding57,
  _SemanticsConfiguration_isCompatibleWith,
);
const _flaxBinding626 = FlaxInstanceMethod.shared(
  _flaxBinding58,
  _SemanticsConfiguration_absorb,
);
const _flaxBinding627 = FlaxInstanceMethod.shared(
  _flaxBinding59,
  _SemanticsConfiguration_copy,
);
const _flaxBinding628 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onTap,
);
const _flaxBinding629 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onLongPress,
);
const _flaxBinding630 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onScrollLeft,
);
const _flaxBinding631 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onDismiss,
);
const _flaxBinding632 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onScrollRight,
);
const _flaxBinding633 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onScrollUp,
);
const _flaxBinding634 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onScrollDown,
);
const _flaxBinding635 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onIncrease,
);
const _flaxBinding636 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onDecrease,
);
const _flaxBinding637 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onCopy,
);
const _flaxBinding638 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onCut,
);
const _flaxBinding639 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onPaste,
);
const _flaxBinding640 = FlaxInstanceMethod.shared(
  _flaxBinding68,
  _FlaxProxyDispatch11_super_get_onMoveCursorForwardByCharacter,
);
const _flaxBinding641 = FlaxInstanceMethod.shared(
  _flaxBinding68,
  _FlaxProxyDispatch11_super_get_onMoveCursorBackwardByCharacter,
);
const _flaxBinding642 = FlaxInstanceMethod.shared(
  _flaxBinding68,
  _FlaxProxyDispatch11_super_get_onMoveCursorForwardByWord,
);
const _flaxBinding643 = FlaxInstanceMethod.shared(
  _flaxBinding68,
  _FlaxProxyDispatch11_super_get_onMoveCursorBackwardByWord,
);
const _flaxBinding644 = FlaxInstanceMethod.shared(
  _flaxBinding72,
  _FlaxProxyDispatch11_super_get_onSetSelection,
);
const _flaxBinding645 = FlaxInstanceMethod.shared(
  _flaxBinding75,
  _FlaxProxyDispatch11_super_get_onSetText,
);
const _flaxBinding646 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onDidGainAccessibilityFocus,
);
const _flaxBinding647 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onDidLoseAccessibilityFocus,
);
const _flaxBinding648 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onFocus,
);
const _flaxBinding649 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onExpand,
);
const _flaxBinding650 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _FlaxProxyDispatch11_super_get_onCollapse,
);
const _flaxBinding651 = FlaxInstanceMethod.shared(
  flaxNullableIntCall,
  _FlaxProxyDispatch14_super_get_scrollChildCount,
);
const _flaxBinding652 = FlaxInstanceMethod.shared(
  flaxNullableIntCall,
  _FlaxProxyDispatch14_super_get_scrollIndex,
);
const _flaxBinding653 = FlaxInstanceMethod.shared(
  flaxNullableIntCall,
  _FlaxProxyDispatch14_super_get_platformViewId,
);
const _flaxBinding654 = FlaxInstanceMethod.shared(
  flaxNullableIntCall,
  _FlaxProxyDispatch15_super_get_maxValueLength,
);
const _flaxBinding655 = FlaxInstanceMethod.shared(
  flaxNullableIntCall,
  _FlaxProxyDispatch15_super_get_currentValueLength,
);
const _flaxBinding656 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch14_super_get_identifier,
);
const _flaxBinding657 = FlaxInstanceMethod.shared(
  flaxNullableAnyCall,
  _FlaxProxyDispatch15_super_get_traversalParentIdentifier,
);
const _flaxBinding658 = FlaxInstanceMethod.shared(
  flaxNullableAnyCall,
  _FlaxProxyDispatch15_super_get_traversalChildIdentifier,
);
const _flaxBinding659 = FlaxInstanceMethod.shared(
  _flaxBinding85,
  _FlaxProxyDispatch14_super_get_role,
);
const _flaxBinding660 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch14_super_get_label,
);
const _flaxBinding661 = FlaxInstanceMethod.shared(
  _flaxBinding86,
  _FlaxProxyDispatch14_super_get_attributedLabel,
);
const _flaxBinding662 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch14_super_get_value,
);
const _flaxBinding663 = FlaxInstanceMethod.shared(
  _flaxBinding86,
  _FlaxProxyDispatch14_super_get_attributedValue,
);
const _flaxBinding664 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch14_super_get_increasedValue,
);
const _flaxBinding665 = FlaxInstanceMethod.shared(
  _flaxBinding86,
  _FlaxProxyDispatch14_super_get_attributedIncreasedValue,
);
const _flaxBinding666 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch14_super_get_decreasedValue,
);
const _flaxBinding667 = FlaxInstanceMethod.shared(
  _flaxBinding86,
  _FlaxProxyDispatch14_super_get_attributedDecreasedValue,
);
const _flaxBinding668 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch14_super_get_hint,
);
const _flaxBinding669 = FlaxInstanceMethod.shared(
  _flaxBinding86,
  _FlaxProxyDispatch14_super_get_attributedHint,
);
const _flaxBinding670 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch14_super_get_tooltip,
);
const _flaxBinding671 = FlaxInstanceMethod.shared(
  _flaxBinding90,
  _FlaxProxyDispatch15_super_get_textDirection,
);
const _flaxBinding672 = FlaxInstanceMethod.shared(
  _flaxBinding94,
  _FlaxProxyDispatch15_super_get_linkUrl,
);
const _flaxBinding673 = FlaxInstanceMethod.shared(
  flaxIntCall,
  _FlaxProxyDispatch14_super_get_headingLevel,
);
const _flaxBinding674 = FlaxInstanceMethod.shared(
  flaxNullableBoolCall,
  _FlaxProxyDispatch11_super_get_isRequired,
);
const _flaxBinding675 = FlaxInstanceMethod.shared(
  _flaxBinding96,
  _FlaxProxyDispatch14_super_get_textSelection,
);
const _flaxBinding676 = FlaxInstanceMethod.shared(
  flaxNullableDoubleCall,
  _FlaxProxyDispatch14_super_get_scrollPosition,
);
const _flaxBinding677 = FlaxInstanceMethod.shared(
  flaxNullableDoubleCall,
  _FlaxProxyDispatch14_super_get_scrollExtentMax,
);
const _flaxBinding678 = FlaxInstanceMethod.shared(
  flaxNullableDoubleCall,
  _FlaxProxyDispatch14_super_get_scrollExtentMin,
);
const _flaxBinding679 = FlaxInstanceMethod.shared(
  _flaxBinding99,
  _FlaxProxyDispatch15_super_get_controlsNodes,
);
const _flaxBinding680 = FlaxInstanceMethod.shared(
  _flaxBinding101,
  _FlaxProxyDispatch15_super_get_validationResult,
);
const _flaxBinding681 = FlaxInstanceMethod.shared(
  _flaxBinding103,
  _FlaxProxyDispatch14_super_get_hitTestBehavior,
);
const _flaxBinding682 = FlaxInstanceMethod.shared(
  _flaxBinding105,
  _FlaxProxyDispatch14_super_get_inputType,
);
const _flaxBinding683 = FlaxInstanceMethod.shared(
  flaxNullableStringCall,
  _FlaxProxyDispatch15_super_get_maxValue,
);
const _flaxBinding684 = FlaxInstanceMethod.shared(
  flaxNullableStringCall,
  _FlaxProxyDispatch15_super_get_minValue,
);
const _flaxBinding685 = FlaxProxyMember(
  "getActionHandler",
  0,
  _flaxBinding52,
  hasSuper: true,
);
const _flaxBinding686 = FlaxProxyMember(
  "tagsChildrenWith",
  0,
  _flaxBinding54,
  hasSuper: true,
);
const _flaxBinding687 = FlaxProxyMember(
  "addTagForChildren",
  0,
  _flaxBinding55,
  hasSuper: true,
);
const _flaxBinding688 = FlaxProxyMember(
  "isCompatibleWith",
  0,
  _flaxBinding57,
  hasSuper: true,
);
const _flaxBinding689 = FlaxProxyMember(
  "absorb",
  0,
  _flaxBinding58,
  hasSuper: true,
);
const _flaxBinding690 = FlaxProxyMember(
  "copy",
  0,
  _flaxBinding59,
  hasSuper: true,
);
const _flaxBinding691 = FlaxProxyMember(
  "isSemanticBoundary",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding692 = FlaxProxyMember(
  "localeForSubtree",
  1,
  _flaxBinding61,
  hasSuper: true,
);
const _flaxBinding693 = FlaxProxyMember(
  "locale",
  1,
  _flaxBinding61,
  hasSuper: true,
);
const _flaxBinding694 = FlaxProxyMember(
  "isBlockingUserActions",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding695 = FlaxProxyMember(
  "explicitChildNodes",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding696 = FlaxProxyMember(
  "isBlockingSemanticsOfPreviouslyPaintedNodes",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding697 = FlaxProxyMember(
  "hasBeenAnnotated",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding698 = FlaxProxyMember(
  "onTap",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding699 = FlaxProxyMember(
  "onLongPress",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding700 = FlaxProxyMember(
  "onScrollLeft",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding701 = FlaxProxyMember(
  "onDismiss",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding702 = FlaxProxyMember(
  "onScrollRight",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding703 = FlaxProxyMember(
  "onScrollUp",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding704 = FlaxProxyMember(
  "onScrollDown",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding705 = FlaxProxyMember(
  "onScrollToOffset",
  1,
  _flaxBinding65,
  hasSuper: true,
);
const _flaxBinding706 = FlaxProxyMember(
  "onIncrease",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding707 = FlaxProxyMember(
  "onDecrease",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding708 = FlaxProxyMember(
  "onCopy",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding709 = FlaxProxyMember(
  "onCut",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding710 = FlaxProxyMember(
  "onPaste",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding711 = FlaxProxyMember(
  "onShowOnScreen",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding712 = FlaxProxyMember(
  "onMoveCursorForwardByCharacter",
  1,
  _flaxBinding68,
  hasSuper: true,
);
const _flaxBinding713 = FlaxProxyMember(
  "onMoveCursorBackwardByCharacter",
  1,
  _flaxBinding68,
  hasSuper: true,
);
const _flaxBinding714 = FlaxProxyMember(
  "onMoveCursorForwardByWord",
  1,
  _flaxBinding68,
  hasSuper: true,
);
const _flaxBinding715 = FlaxProxyMember(
  "onMoveCursorBackwardByWord",
  1,
  _flaxBinding68,
  hasSuper: true,
);
const _flaxBinding716 = FlaxProxyMember(
  "onSetSelection",
  1,
  _flaxBinding72,
  hasSuper: true,
);
const _flaxBinding717 = FlaxProxyMember(
  "onSetText",
  1,
  _flaxBinding75,
  hasSuper: true,
);
const _flaxBinding718 = FlaxProxyMember(
  "onDidGainAccessibilityFocus",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding719 = FlaxProxyMember(
  "onDidLoseAccessibilityFocus",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding720 = FlaxProxyMember(
  "onFocus",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding721 = FlaxProxyMember(
  "onExpand",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding722 = FlaxProxyMember(
  "onCollapse",
  1,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding723 = FlaxProxyMember(
  "childConfigurationsDelegate",
  1,
  _flaxBinding78,
  hasSuper: true,
);
const _flaxBinding724 = FlaxProxyMember(
  "sortKey",
  1,
  _flaxBinding80,
  hasSuper: true,
);
const _flaxBinding725 = FlaxProxyMember(
  "indexInParent",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding726 = FlaxProxyMember(
  "scrollChildCount",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding727 = FlaxProxyMember(
  "scrollIndex",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding728 = FlaxProxyMember(
  "platformViewId",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding729 = FlaxProxyMember(
  "maxValueLength",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding730 = FlaxProxyMember(
  "currentValueLength",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding731 = FlaxProxyMember(
  "isMergingSemanticsOfDescendants",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding732 = FlaxProxyMember(
  "customSemanticsActions",
  1,
  _flaxBinding83,
  hasSuper: true,
);
const _flaxBinding733 = FlaxProxyMember(
  "identifier",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding734 = FlaxProxyMember(
  "traversalParentIdentifier",
  1,
  flaxNullableAnyCall,
  hasSuper: true,
);
const _flaxBinding735 = FlaxProxyMember(
  "traversalChildIdentifier",
  1,
  flaxNullableAnyCall,
  hasSuper: true,
);
const _flaxBinding736 = FlaxProxyMember(
  "role",
  1,
  _flaxBinding85,
  hasSuper: true,
);
const _flaxBinding737 = FlaxProxyMember(
  "label",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding738 = FlaxProxyMember(
  "attributedLabel",
  1,
  _flaxBinding86,
  hasSuper: true,
);
const _flaxBinding739 = FlaxProxyMember(
  "value",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding740 = FlaxProxyMember(
  "attributedValue",
  1,
  _flaxBinding86,
  hasSuper: true,
);
const _flaxBinding741 = FlaxProxyMember(
  "increasedValue",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding742 = FlaxProxyMember(
  "attributedIncreasedValue",
  1,
  _flaxBinding86,
  hasSuper: true,
);
const _flaxBinding743 = FlaxProxyMember(
  "decreasedValue",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding744 = FlaxProxyMember(
  "attributedDecreasedValue",
  1,
  _flaxBinding86,
  hasSuper: true,
);
const _flaxBinding745 = FlaxProxyMember(
  "hint",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding746 = FlaxProxyMember(
  "attributedHint",
  1,
  _flaxBinding86,
  hasSuper: true,
);
const _flaxBinding747 = FlaxProxyMember(
  "tooltip",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding748 = FlaxProxyMember(
  "hintOverrides",
  1,
  _flaxBinding88,
  hasSuper: true,
);
const _flaxBinding749 = FlaxProxyMember(
  "scopesRoute",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding750 = FlaxProxyMember(
  "namesRoute",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding751 = FlaxProxyMember(
  "isImage",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding752 = FlaxProxyMember(
  "liveRegion",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding753 = FlaxProxyMember(
  "textDirection",
  1,
  _flaxBinding90,
  hasSuper: true,
);
const _flaxBinding754 = FlaxProxyMember(
  "isSelected",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding755 = FlaxProxyMember(
  "isExpanded",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding756 = FlaxProxyMember(
  "isEnabled",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding757 = FlaxProxyMember(
  "isChecked",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding758 = FlaxProxyMember(
  "isCheckStateMixed",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding759 = FlaxProxyMember(
  "isToggled",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding760 = FlaxProxyMember(
  "isInMutuallyExclusiveGroup",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding761 = FlaxProxyMember(
  "isFocusable",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding762 = FlaxProxyMember(
  "isFocused",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding763 = FlaxProxyMember(
  "accessibilityFocusBlockType",
  1,
  _flaxBinding92,
  hasSuper: true,
);
const _flaxBinding764 = FlaxProxyMember(
  "isButton",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding765 = FlaxProxyMember(
  "isLink",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding766 = FlaxProxyMember(
  "linkUrl",
  1,
  _flaxBinding94,
  hasSuper: true,
);
const _flaxBinding767 = FlaxProxyMember(
  "isHeader",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding768 = FlaxProxyMember(
  "headingLevel",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding769 = FlaxProxyMember(
  "isSlider",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding770 = FlaxProxyMember(
  "isKeyboardKey",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding771 = FlaxProxyMember(
  "isHidden",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding772 = FlaxProxyMember(
  "isTextField",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding773 = FlaxProxyMember(
  "isReadOnly",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding774 = FlaxProxyMember(
  "isObscured",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding775 = FlaxProxyMember(
  "isMultiline",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding776 = FlaxProxyMember(
  "isRequired",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding777 = FlaxProxyMember(
  "hasImplicitScrolling",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding778 = FlaxProxyMember(
  "textSelection",
  1,
  _flaxBinding96,
  hasSuper: true,
);
const _flaxBinding779 = FlaxProxyMember(
  "scrollPosition",
  1,
  flaxNullableDoubleCall,
  hasSuper: true,
);
const _flaxBinding780 = FlaxProxyMember(
  "scrollExtentMax",
  1,
  flaxNullableDoubleCall,
  hasSuper: true,
);
const _flaxBinding781 = FlaxProxyMember(
  "scrollExtentMin",
  1,
  flaxNullableDoubleCall,
  hasSuper: true,
);
const _flaxBinding782 = FlaxProxyMember(
  "controlsNodes",
  1,
  _flaxBinding99,
  hasSuper: true,
);
const _flaxBinding783 = FlaxProxyMember(
  "validationResult",
  1,
  _flaxBinding101,
  hasSuper: true,
);
const _flaxBinding784 = FlaxProxyMember(
  "hitTestBehavior",
  1,
  _flaxBinding103,
  hasSuper: true,
);
const _flaxBinding785 = FlaxProxyMember(
  "inputType",
  1,
  _flaxBinding105,
  hasSuper: true,
);
const _flaxBinding786 = FlaxProxyMember(
  "maxValue",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding787 = FlaxProxyMember(
  "minValue",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding788 = FlaxProxyMember(
  "tagsForChildren",
  1,
  _flaxBinding107,
  hasSuper: true,
);
const _flaxBinding789 = FlaxProxyMember(
  "isSemanticBoundary",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding790 = FlaxProxyMember(
  "localeForSubtree",
  2,
  _flaxBinding109,
  hasSuper: true,
);
const _flaxBinding791 = FlaxProxyMember(
  "locale",
  2,
  _flaxBinding109,
  hasSuper: true,
);
const _flaxBinding792 = FlaxProxyMember(
  "isBlockingUserActions",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding793 = FlaxProxyMember(
  "explicitChildNodes",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding794 = FlaxProxyMember(
  "isBlockingSemanticsOfPreviouslyPaintedNodes",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding795 = FlaxProxyMember(
  "onTap",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding796 = FlaxProxyMember(
  "onLongPress",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding797 = FlaxProxyMember(
  "onScrollLeft",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding798 = FlaxProxyMember(
  "onDismiss",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding799 = FlaxProxyMember(
  "onScrollRight",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding800 = FlaxProxyMember(
  "onScrollUp",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding801 = FlaxProxyMember(
  "onScrollDown",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding802 = FlaxProxyMember(
  "onScrollToOffset",
  2,
  _flaxBinding111,
  hasSuper: true,
);
const _flaxBinding803 = FlaxProxyMember(
  "onIncrease",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding804 = FlaxProxyMember(
  "onDecrease",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding805 = FlaxProxyMember(
  "onCopy",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding806 = FlaxProxyMember(
  "onCut",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding807 = FlaxProxyMember(
  "onPaste",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding808 = FlaxProxyMember(
  "onShowOnScreen",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding809 = FlaxProxyMember(
  "onMoveCursorForwardByCharacter",
  2,
  _flaxBinding112,
  hasSuper: true,
);
const _flaxBinding810 = FlaxProxyMember(
  "onMoveCursorBackwardByCharacter",
  2,
  _flaxBinding112,
  hasSuper: true,
);
const _flaxBinding811 = FlaxProxyMember(
  "onMoveCursorForwardByWord",
  2,
  _flaxBinding112,
  hasSuper: true,
);
const _flaxBinding812 = FlaxProxyMember(
  "onMoveCursorBackwardByWord",
  2,
  _flaxBinding112,
  hasSuper: true,
);
const _flaxBinding813 = FlaxProxyMember(
  "onSetSelection",
  2,
  _flaxBinding113,
  hasSuper: true,
);
const _flaxBinding814 = FlaxProxyMember(
  "onSetText",
  2,
  _flaxBinding114,
  hasSuper: true,
);
const _flaxBinding815 = FlaxProxyMember(
  "onDidGainAccessibilityFocus",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding816 = FlaxProxyMember(
  "onDidLoseAccessibilityFocus",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding817 = FlaxProxyMember(
  "onFocus",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding818 = FlaxProxyMember(
  "onExpand",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding819 = FlaxProxyMember(
  "onCollapse",
  2,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding820 = FlaxProxyMember(
  "childConfigurationsDelegate",
  2,
  _flaxBinding115,
  hasSuper: true,
);
const _flaxBinding821 = FlaxProxyMember(
  "sortKey",
  2,
  _flaxBinding116,
  hasSuper: true,
);
const _flaxBinding822 = FlaxProxyMember(
  "indexInParent",
  2,
  _flaxBinding117,
  hasSuper: true,
);
const _flaxBinding823 = FlaxProxyMember(
  "scrollChildCount",
  2,
  _flaxBinding117,
  hasSuper: true,
);
const _flaxBinding824 = FlaxProxyMember(
  "scrollIndex",
  2,
  _flaxBinding117,
  hasSuper: true,
);
const _flaxBinding825 = FlaxProxyMember(
  "platformViewId",
  2,
  _flaxBinding117,
  hasSuper: true,
);
const _flaxBinding826 = FlaxProxyMember(
  "maxValueLength",
  2,
  _flaxBinding117,
  hasSuper: true,
);
const _flaxBinding827 = FlaxProxyMember(
  "currentValueLength",
  2,
  _flaxBinding117,
  hasSuper: true,
);
const _flaxBinding828 = FlaxProxyMember(
  "isMergingSemanticsOfDescendants",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding829 = FlaxProxyMember(
  "customSemanticsActions",
  2,
  _flaxBinding118,
  hasSuper: true,
);
const _flaxBinding830 = FlaxProxyMember(
  "identifier",
  2,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding831 = FlaxProxyMember(
  "traversalParentIdentifier",
  2,
  _flaxBinding120,
  hasSuper: true,
);
const _flaxBinding832 = FlaxProxyMember(
  "traversalChildIdentifier",
  2,
  _flaxBinding120,
  hasSuper: true,
);
const _flaxBinding833 = FlaxProxyMember(
  "role",
  2,
  _flaxBinding121,
  hasSuper: true,
);
const _flaxBinding834 = FlaxProxyMember(
  "label",
  2,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding835 = FlaxProxyMember(
  "attributedLabel",
  2,
  _flaxBinding122,
  hasSuper: true,
);
const _flaxBinding836 = FlaxProxyMember(
  "value",
  2,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding837 = FlaxProxyMember(
  "attributedValue",
  2,
  _flaxBinding122,
  hasSuper: true,
);
const _flaxBinding838 = FlaxProxyMember(
  "increasedValue",
  2,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding839 = FlaxProxyMember(
  "attributedIncreasedValue",
  2,
  _flaxBinding122,
  hasSuper: true,
);
const _flaxBinding840 = FlaxProxyMember(
  "decreasedValue",
  2,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding841 = FlaxProxyMember(
  "attributedDecreasedValue",
  2,
  _flaxBinding122,
  hasSuper: true,
);
const _flaxBinding842 = FlaxProxyMember(
  "hint",
  2,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding843 = FlaxProxyMember(
  "attributedHint",
  2,
  _flaxBinding122,
  hasSuper: true,
);
const _flaxBinding844 = FlaxProxyMember(
  "tooltip",
  2,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding845 = FlaxProxyMember(
  "hintOverrides",
  2,
  _flaxBinding123,
  hasSuper: true,
);
const _flaxBinding846 = FlaxProxyMember(
  "scopesRoute",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding847 = FlaxProxyMember(
  "namesRoute",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding848 = FlaxProxyMember(
  "isImage",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding849 = FlaxProxyMember(
  "liveRegion",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding850 = FlaxProxyMember(
  "textDirection",
  2,
  _flaxBinding124,
  hasSuper: true,
);
const _flaxBinding851 = FlaxProxyMember(
  "isSelected",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding852 = FlaxProxyMember(
  "isExpanded",
  2,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding853 = FlaxProxyMember(
  "isEnabled",
  2,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding854 = FlaxProxyMember(
  "isChecked",
  2,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding855 = FlaxProxyMember(
  "isCheckStateMixed",
  2,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding856 = FlaxProxyMember(
  "isToggled",
  2,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding857 = FlaxProxyMember(
  "isInMutuallyExclusiveGroup",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding858 = FlaxProxyMember(
  "isFocusable",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding859 = FlaxProxyMember(
  "isFocused",
  2,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding860 = FlaxProxyMember(
  "accessibilityFocusBlockType",
  2,
  _flaxBinding126,
  hasSuper: true,
);
const _flaxBinding861 = FlaxProxyMember(
  "isButton",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding862 = FlaxProxyMember(
  "isLink",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding863 = FlaxProxyMember(
  "linkUrl",
  2,
  _flaxBinding127,
  hasSuper: true,
);
const _flaxBinding864 = FlaxProxyMember(
  "isHeader",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding865 = FlaxProxyMember(
  "headingLevel",
  2,
  _flaxBinding128,
  hasSuper: true,
);
const _flaxBinding866 = FlaxProxyMember(
  "isSlider",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding867 = FlaxProxyMember(
  "isKeyboardKey",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding868 = FlaxProxyMember(
  "isHidden",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding869 = FlaxProxyMember(
  "isTextField",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding870 = FlaxProxyMember(
  "isReadOnly",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding871 = FlaxProxyMember(
  "isObscured",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding872 = FlaxProxyMember(
  "isMultiline",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding873 = FlaxProxyMember(
  "isRequired",
  2,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding874 = FlaxProxyMember(
  "hasImplicitScrolling",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding875 = FlaxProxyMember(
  "textSelection",
  2,
  _flaxBinding129,
  hasSuper: true,
);
const _flaxBinding876 = FlaxProxyMember(
  "scrollPosition",
  2,
  _flaxBinding130,
  hasSuper: true,
);
const _flaxBinding877 = FlaxProxyMember(
  "scrollExtentMax",
  2,
  _flaxBinding130,
  hasSuper: true,
);
const _flaxBinding878 = FlaxProxyMember(
  "scrollExtentMin",
  2,
  _flaxBinding130,
  hasSuper: true,
);
const _flaxBinding879 = FlaxProxyMember(
  "controlsNodes",
  2,
  _flaxBinding131,
  hasSuper: true,
);
const _flaxBinding880 = FlaxProxyMember(
  "validationResult",
  2,
  _flaxBinding132,
  hasSuper: true,
);
const _flaxBinding881 = FlaxProxyMember(
  "hitTestBehavior",
  2,
  _flaxBinding133,
  hasSuper: true,
);
const _flaxBinding882 = FlaxProxyMember(
  "inputType",
  2,
  _flaxBinding134,
  hasSuper: true,
);
const _flaxBinding883 = FlaxProxyMember(
  "maxValue",
  2,
  _flaxBinding135,
  hasSuper: true,
);
const _flaxBinding884 = FlaxProxyMember(
  "minValue",
  2,
  _flaxBinding135,
  hasSuper: true,
);
const _flaxBinding885 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsConfiguration",
  [
    _flaxBinding428,
    _flaxBinding429,
    _flaxBinding430,
    _flaxBinding431,
    _flaxBinding432,
    _flaxBinding433,
    _flaxBinding434,
    _flaxBinding435,
    _flaxBinding436,
    _flaxBinding437,
    _flaxBinding438,
    _flaxBinding439,
    _flaxBinding440,
    _flaxBinding441,
    _flaxBinding442,
    _flaxBinding443,
    _flaxBinding444,
    _flaxBinding445,
    _flaxBinding446,
    _flaxBinding447,
    _flaxBinding448,
    _flaxBinding449,
    _flaxBinding450,
    _flaxBinding451,
    _flaxBinding452,
    _flaxBinding453,
    _flaxBinding454,
    _flaxBinding455,
    _flaxBinding456,
    _flaxBinding457,
    _flaxBinding458,
    _flaxBinding459,
    _flaxBinding460,
    _flaxBinding461,
    _flaxBinding462,
    _flaxBinding463,
    _flaxBinding464,
    _flaxBinding465,
    _flaxBinding466,
    _flaxBinding467,
    _flaxBinding468,
    _flaxBinding469,
    _flaxBinding470,
    _flaxBinding471,
    _flaxBinding472,
    _flaxBinding473,
    _flaxBinding474,
    _flaxBinding475,
    _flaxBinding476,
    _flaxBinding477,
    _flaxBinding478,
    _flaxBinding479,
    _flaxBinding480,
    _flaxBinding481,
    _flaxBinding482,
    _flaxBinding483,
    _flaxBinding484,
    _flaxBinding485,
    _flaxBinding486,
    _flaxBinding487,
    _flaxBinding488,
    _flaxBinding489,
    _flaxBinding490,
    _flaxBinding491,
    _flaxBinding492,
    _flaxBinding493,
    _flaxBinding494,
    _flaxBinding495,
    _flaxBinding496,
    _flaxBinding497,
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
    _flaxBinding513,
    _flaxBinding514,
    _flaxBinding515,
    _flaxBinding516,
    _flaxBinding517,
    _flaxBinding518,
    _flaxBinding519,
    _flaxBinding520,
    _flaxBinding521,
    _flaxBinding522,
    _flaxBinding523,
    _flaxBinding524,
    _flaxBinding525,
  ],
  {
    "getActionHandler": _flaxBinding622,
    "tagsChildrenWith": _flaxBinding623,
    "addTagForChildren": _flaxBinding624,
    "isCompatibleWith": _flaxBinding625,
    "absorb": _flaxBinding626,
    "copy": _flaxBinding627,
    "@super:getActionHandler": FlaxInstanceMethod.shared(
      _flaxBinding52,
      _SemanticsConfiguration_super_getActionHandler,
    ),
    "@super:tagsChildrenWith": FlaxInstanceMethod.shared(
      _flaxBinding54,
      _SemanticsConfiguration_super_tagsChildrenWith,
    ),
    "@super:addTagForChildren": FlaxInstanceMethod.shared(
      _flaxBinding55,
      _SemanticsConfiguration_super_addTagForChildren,
    ),
    "@super:isCompatibleWith": FlaxInstanceMethod.shared(
      _flaxBinding57,
      _SemanticsConfiguration_super_isCompatibleWith,
    ),
    "@super:absorb": FlaxInstanceMethod.shared(
      _flaxBinding58,
      _SemanticsConfiguration_super_absorb,
    ),
    "@super:copy": FlaxInstanceMethod.shared(
      _flaxBinding59,
      _SemanticsConfiguration_super_copy,
    ),
    "@super:get:isSemanticBoundary": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isSemanticBoundary,
    ),
    "@super:get:localeForSubtree": FlaxInstanceMethod.shared(
      _flaxBinding61,
      _SemanticsConfiguration_super_get_localeForSubtree,
    ),
    "@super:get:locale": FlaxInstanceMethod.shared(
      _flaxBinding61,
      _SemanticsConfiguration_super_get_locale,
    ),
    "@super:get:isBlockingUserActions": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isBlockingUserActions,
    ),
    "@super:get:explicitChildNodes": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_explicitChildNodes,
    ),
    "@super:get:isBlockingSemanticsOfPreviouslyPaintedNodes":
        FlaxInstanceMethod.shared(
          flaxBoolCall,
          _SemanticsConfiguration_super_get_isBlockingSemanticsOfPreviouslyPaintedNodes,
        ),
    "@super:get:hasBeenAnnotated": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_hasBeenAnnotated,
    ),
    "@super:get:onTap": _flaxBinding628,
    "@super:get:onLongPress": _flaxBinding629,
    "@super:get:onScrollLeft": _flaxBinding630,
    "@super:get:onDismiss": _flaxBinding631,
    "@super:get:onScrollRight": _flaxBinding632,
    "@super:get:onScrollUp": _flaxBinding633,
    "@super:get:onScrollDown": _flaxBinding634,
    "@super:get:onScrollToOffset": FlaxInstanceMethod.shared(
      _flaxBinding65,
      _SemanticsConfiguration_super_get_onScrollToOffset,
    ),
    "@super:get:onIncrease": _flaxBinding635,
    "@super:get:onDecrease": _flaxBinding636,
    "@super:get:onCopy": _flaxBinding637,
    "@super:get:onCut": _flaxBinding638,
    "@super:get:onPaste": _flaxBinding639,
    "@super:get:onShowOnScreen": FlaxInstanceMethod.shared(
      _flaxBinding62,
      _SemanticsConfiguration_super_get_onShowOnScreen,
    ),
    "@super:get:onMoveCursorForwardByCharacter": _flaxBinding640,
    "@super:get:onMoveCursorBackwardByCharacter": _flaxBinding641,
    "@super:get:onMoveCursorForwardByWord": _flaxBinding642,
    "@super:get:onMoveCursorBackwardByWord": _flaxBinding643,
    "@super:get:onSetSelection": _flaxBinding644,
    "@super:get:onSetText": _flaxBinding645,
    "@super:get:onDidGainAccessibilityFocus": _flaxBinding646,
    "@super:get:onDidLoseAccessibilityFocus": _flaxBinding647,
    "@super:get:onFocus": _flaxBinding648,
    "@super:get:onExpand": _flaxBinding649,
    "@super:get:onCollapse": _flaxBinding650,
    "@super:get:childConfigurationsDelegate": FlaxInstanceMethod.shared(
      _flaxBinding78,
      _SemanticsConfiguration_super_get_childConfigurationsDelegate,
    ),
    "@super:get:sortKey": FlaxInstanceMethod.shared(
      _flaxBinding80,
      _SemanticsConfiguration_super_get_sortKey,
    ),
    "@super:get:indexInParent": FlaxInstanceMethod.shared(
      flaxNullableIntCall,
      _SemanticsConfiguration_super_get_indexInParent,
    ),
    "@super:get:scrollChildCount": _flaxBinding651,
    "@super:get:scrollIndex": _flaxBinding652,
    "@super:get:platformViewId": _flaxBinding653,
    "@super:get:maxValueLength": _flaxBinding654,
    "@super:get:currentValueLength": _flaxBinding655,
    "@super:get:isMergingSemanticsOfDescendants": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isMergingSemanticsOfDescendants,
    ),
    "@super:get:customSemanticsActions": FlaxInstanceMethod.shared(
      _flaxBinding83,
      _SemanticsConfiguration_super_get_customSemanticsActions,
    ),
    "@super:get:identifier": _flaxBinding656,
    "@super:get:traversalParentIdentifier": _flaxBinding657,
    "@super:get:traversalChildIdentifier": _flaxBinding658,
    "@super:get:role": _flaxBinding659,
    "@super:get:label": _flaxBinding660,
    "@super:get:attributedLabel": _flaxBinding661,
    "@super:get:value": _flaxBinding662,
    "@super:get:attributedValue": _flaxBinding663,
    "@super:get:increasedValue": _flaxBinding664,
    "@super:get:attributedIncreasedValue": _flaxBinding665,
    "@super:get:decreasedValue": _flaxBinding666,
    "@super:get:attributedDecreasedValue": _flaxBinding667,
    "@super:get:hint": _flaxBinding668,
    "@super:get:attributedHint": _flaxBinding669,
    "@super:get:tooltip": _flaxBinding670,
    "@super:get:hintOverrides": FlaxInstanceMethod.shared(
      _flaxBinding88,
      _SemanticsConfiguration_super_get_hintOverrides,
    ),
    "@super:get:scopesRoute": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_scopesRoute,
    ),
    "@super:get:namesRoute": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_namesRoute,
    ),
    "@super:get:isImage": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isImage,
    ),
    "@super:get:liveRegion": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_liveRegion,
    ),
    "@super:get:textDirection": _flaxBinding671,
    "@super:get:isSelected": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isSelected,
    ),
    "@super:get:isExpanded": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsConfiguration_super_get_isExpanded,
    ),
    "@super:get:isEnabled": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsConfiguration_super_get_isEnabled,
    ),
    "@super:get:isChecked": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsConfiguration_super_get_isChecked,
    ),
    "@super:get:isCheckStateMixed": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsConfiguration_super_get_isCheckStateMixed,
    ),
    "@super:get:isToggled": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsConfiguration_super_get_isToggled,
    ),
    "@super:get:isInMutuallyExclusiveGroup": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isInMutuallyExclusiveGroup,
    ),
    "@super:get:isFocusable": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isFocusable,
    ),
    "@super:get:isFocused": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsConfiguration_super_get_isFocused,
    ),
    "@super:get:accessibilityFocusBlockType": FlaxInstanceMethod.shared(
      _flaxBinding92,
      _SemanticsConfiguration_super_get_accessibilityFocusBlockType,
    ),
    "@super:get:isButton": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isButton,
    ),
    "@super:get:isLink": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isLink,
    ),
    "@super:get:linkUrl": _flaxBinding672,
    "@super:get:isHeader": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isHeader,
    ),
    "@super:get:headingLevel": _flaxBinding673,
    "@super:get:isSlider": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isSlider,
    ),
    "@super:get:isKeyboardKey": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isKeyboardKey,
    ),
    "@super:get:isHidden": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isHidden,
    ),
    "@super:get:isTextField": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isTextField,
    ),
    "@super:get:isReadOnly": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isReadOnly,
    ),
    "@super:get:isObscured": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isObscured,
    ),
    "@super:get:isMultiline": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_isMultiline,
    ),
    "@super:get:isRequired": _flaxBinding674,
    "@super:get:hasImplicitScrolling": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsConfiguration_super_get_hasImplicitScrolling,
    ),
    "@super:get:textSelection": _flaxBinding675,
    "@super:get:scrollPosition": _flaxBinding676,
    "@super:get:scrollExtentMax": _flaxBinding677,
    "@super:get:scrollExtentMin": _flaxBinding678,
    "@super:get:controlsNodes": _flaxBinding679,
    "@super:get:validationResult": _flaxBinding680,
    "@super:get:hitTestBehavior": _flaxBinding681,
    "@super:get:inputType": _flaxBinding682,
    "@super:get:maxValue": _flaxBinding683,
    "@super:get:minValue": _flaxBinding684,
    "@super:get:tagsForChildren": FlaxInstanceMethod.shared(
      _flaxBinding107,
      _SemanticsConfiguration_super_get_tagsForChildren,
    ),
    "@super:set:isSemanticBoundary": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isSemanticBoundary,
    ),
    "@super:set:localeForSubtree": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding60)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_localeForSubtree,
    ),
    "@super:set:locale": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding60)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_locale,
    ),
    "@super:set:isBlockingUserActions": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isBlockingUserActions,
    ),
    "@super:set:explicitChildNodes": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_explicitChildNodes,
    ),
    "@super:set:isBlockingSemanticsOfPreviouslyPaintedNodes":
        FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _SemanticsConfiguration_super_set_isBlockingSemanticsOfPreviouslyPaintedNodes,
        ),
    "@super:set:onTap": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onTap,
    ),
    "@super:set:onLongPress": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onLongPress,
    ),
    "@super:set:onScrollLeft": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onScrollLeft,
    ),
    "@super:set:onDismiss": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onDismiss,
    ),
    "@super:set:onScrollRight": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onScrollRight,
    ),
    "@super:set:onScrollUp": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onScrollUp,
    ),
    "@super:set:onScrollDown": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onScrollDown,
    ),
    "@super:set:onScrollToOffset": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding64)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onScrollToOffset,
    ),
    "@super:set:onIncrease": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onIncrease,
    ),
    "@super:set:onDecrease": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onDecrease,
    ),
    "@super:set:onCopy": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onCopy,
    ),
    "@super:set:onCut": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onCut,
    ),
    "@super:set:onPaste": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onPaste,
    ),
    "@super:set:onShowOnScreen": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onShowOnScreen,
    ),
    "@super:set:onMoveCursorForwardByCharacter": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding67)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onMoveCursorForwardByCharacter,
    ),
    "@super:set:onMoveCursorBackwardByCharacter": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding67)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onMoveCursorBackwardByCharacter,
    ),
    "@super:set:onMoveCursorForwardByWord": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding67)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onMoveCursorForwardByWord,
    ),
    "@super:set:onMoveCursorBackwardByWord": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding67)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onMoveCursorBackwardByWord,
    ),
    "@super:set:onSetSelection": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding71)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onSetSelection,
    ),
    "@super:set:onSetText": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding74)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onSetText,
    ),
    "@super:set:onDidGainAccessibilityFocus": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onDidGainAccessibilityFocus,
    ),
    "@super:set:onDidLoseAccessibilityFocus": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onDidLoseAccessibilityFocus,
    ),
    "@super:set:onFocus": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onFocus,
    ),
    "@super:set:onExpand": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onExpand,
    ),
    "@super:set:onCollapse": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_onCollapse,
    ),
    "@super:set:childConfigurationsDelegate": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding77)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_childConfigurationsDelegate,
    ),
    "@super:set:sortKey": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding79)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_sortKey,
    ),
    "@super:set:indexInParent": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableIntType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_indexInParent,
    ),
    "@super:set:scrollChildCount": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableIntType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_scrollChildCount,
    ),
    "@super:set:scrollIndex": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableIntType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_scrollIndex,
    ),
    "@super:set:platformViewId": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableIntType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_platformViewId,
    ),
    "@super:set:maxValueLength": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableIntType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_maxValueLength,
    ),
    "@super:set:currentValueLength": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableIntType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_currentValueLength,
    ),
    "@super:set:isMergingSemanticsOfDescendants": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isMergingSemanticsOfDescendants,
    ),
    "@super:set:customSemanticsActions": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding82)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_customSemanticsActions,
    ),
    "@super:set:identifier": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxStringType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_identifier,
    ),
    "@super:set:traversalParentIdentifier": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableAnyType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_traversalParentIdentifier,
    ),
    "@super:set:traversalChildIdentifier": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableAnyType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_traversalChildIdentifier,
    ),
    "@super:set:role": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding84)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_role,
    ),
    "@super:set:label": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxStringType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_label,
    ),
    "@super:set:attributedLabel": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding6)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_attributedLabel,
    ),
    "@super:set:value": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxStringType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_value,
    ),
    "@super:set:attributedValue": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding6)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_attributedValue,
    ),
    "@super:set:increasedValue": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxStringType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_increasedValue,
    ),
    "@super:set:attributedIncreasedValue": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding6)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_attributedIncreasedValue,
    ),
    "@super:set:decreasedValue": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxStringType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_decreasedValue,
    ),
    "@super:set:attributedDecreasedValue": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding6)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_attributedDecreasedValue,
    ),
    "@super:set:hint": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxStringType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_hint,
    ),
    "@super:set:attributedHint": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding6)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_attributedHint,
    ),
    "@super:set:tooltip": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxStringType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_tooltip,
    ),
    "@super:set:hintOverrides": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding87)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_hintOverrides,
    ),
    "@super:set:scopesRoute": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_scopesRoute,
    ),
    "@super:set:namesRoute": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_namesRoute,
    ),
    "@super:set:isImage": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isImage,
    ),
    "@super:set:liveRegion": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_liveRegion,
    ),
    "@super:set:textDirection": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding89)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_textDirection,
    ),
    "@super:set:isSelected": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isSelected,
    ),
    "@super:set:isExpanded": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isExpanded,
    ),
    "@super:set:isEnabled": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isEnabled,
    ),
    "@super:set:isChecked": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isChecked,
    ),
    "@super:set:isCheckStateMixed": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isCheckStateMixed,
    ),
    "@super:set:isToggled": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isToggled,
    ),
    "@super:set:isInMutuallyExclusiveGroup": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isInMutuallyExclusiveGroup,
    ),
    "@super:set:isFocusable": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isFocusable,
    ),
    "@super:set:isFocused": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isFocused,
    ),
    "@super:set:accessibilityFocusBlockType": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding91)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_accessibilityFocusBlockType,
    ),
    "@super:set:isButton": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isButton,
    ),
    "@super:set:isLink": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isLink,
    ),
    "@super:set:linkUrl": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding93)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_linkUrl,
    ),
    "@super:set:isHeader": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isHeader,
    ),
    "@super:set:headingLevel": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxIntType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_headingLevel,
    ),
    "@super:set:isSlider": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isSlider,
    ),
    "@super:set:isKeyboardKey": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isKeyboardKey,
    ),
    "@super:set:isHidden": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isHidden,
    ),
    "@super:set:isTextField": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isTextField,
    ),
    "@super:set:isReadOnly": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isReadOnly,
    ),
    "@super:set:isObscured": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isObscured,
    ),
    "@super:set:isMultiline": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isMultiline,
    ),
    "@super:set:isRequired": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_isRequired,
    ),
    "@super:set:hasImplicitScrolling": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_hasImplicitScrolling,
    ),
    "@super:set:textSelection": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding95)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_textSelection,
    ),
    "@super:set:scrollPosition": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableDoubleType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_scrollPosition,
    ),
    "@super:set:scrollExtentMax": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableDoubleType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_scrollExtentMax,
    ),
    "@super:set:scrollExtentMin": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableDoubleType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_scrollExtentMin,
    ),
    "@super:set:controlsNodes": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding98)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_controlsNodes,
    ),
    "@super:set:validationResult": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding100)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_validationResult,
    ),
    "@super:set:hitTestBehavior": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding102)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_hitTestBehavior,
    ),
    "@super:set:inputType": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding104)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_inputType,
    ),
    "@super:set:maxValue": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableStringType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_maxValue,
    ),
    "@super:set:minValue": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableStringType)],
      flaxVoidType,
      _SemanticsConfiguration_super_set_minValue,
    ),
  },
  constructors: {"": _flaxBinding304, "@implementation": _flaxBinding304},
  create: _createSemanticsConfiguration,
  matches: _isSemanticsConfiguration,
  setters: [
    _flaxBinding526,
    _flaxBinding527,
    _flaxBinding528,
    _flaxBinding529,
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
    _flaxBinding558,
    _flaxBinding559,
    _flaxBinding560,
    _flaxBinding561,
    _flaxBinding562,
    _flaxBinding563,
    _flaxBinding564,
    _flaxBinding565,
    _flaxBinding566,
    _flaxBinding567,
    _flaxBinding568,
    _flaxBinding569,
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
    _flaxBinding588,
    _flaxBinding589,
    _flaxBinding590,
    _flaxBinding591,
    _flaxBinding592,
    _flaxBinding593,
    _flaxBinding594,
    _flaxBinding595,
    _flaxBinding596,
    _flaxBinding597,
    _flaxBinding598,
    _flaxBinding599,
    _flaxBinding600,
    _flaxBinding601,
    _flaxBinding602,
    _flaxBinding603,
    _flaxBinding604,
    _flaxBinding605,
    _flaxBinding606,
    _flaxBinding607,
    _flaxBinding608,
    _flaxBinding609,
    _flaxBinding610,
    _flaxBinding611,
    _flaxBinding612,
    _flaxBinding613,
    _flaxBinding614,
    _flaxBinding615,
    _flaxBinding616,
    _flaxBinding617,
    _flaxBinding618,
    _flaxBinding619,
    _flaxBinding620,
    _flaxBinding621,
  ],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding685,
    _flaxBinding686,
    _flaxBinding687,
    _flaxBinding688,
    _flaxBinding689,
    _flaxBinding690,
    _flaxBinding691,
    _flaxBinding692,
    _flaxBinding693,
    _flaxBinding694,
    _flaxBinding695,
    _flaxBinding696,
    _flaxBinding697,
    _flaxBinding698,
    _flaxBinding699,
    _flaxBinding700,
    _flaxBinding701,
    _flaxBinding702,
    _flaxBinding703,
    _flaxBinding704,
    _flaxBinding705,
    _flaxBinding706,
    _flaxBinding707,
    _flaxBinding708,
    _flaxBinding709,
    _flaxBinding710,
    _flaxBinding711,
    _flaxBinding712,
    _flaxBinding713,
    _flaxBinding714,
    _flaxBinding715,
    _flaxBinding716,
    _flaxBinding717,
    _flaxBinding718,
    _flaxBinding719,
    _flaxBinding720,
    _flaxBinding721,
    _flaxBinding722,
    _flaxBinding723,
    _flaxBinding724,
    _flaxBinding725,
    _flaxBinding726,
    _flaxBinding727,
    _flaxBinding728,
    _flaxBinding729,
    _flaxBinding730,
    _flaxBinding731,
    _flaxBinding732,
    _flaxBinding733,
    _flaxBinding734,
    _flaxBinding735,
    _flaxBinding736,
    _flaxBinding737,
    _flaxBinding738,
    _flaxBinding739,
    _flaxBinding740,
    _flaxBinding741,
    _flaxBinding742,
    _flaxBinding743,
    _flaxBinding744,
    _flaxBinding745,
    _flaxBinding746,
    _flaxBinding747,
    _flaxBinding748,
    _flaxBinding749,
    _flaxBinding750,
    _flaxBinding751,
    _flaxBinding752,
    _flaxBinding753,
    _flaxBinding754,
    _flaxBinding755,
    _flaxBinding756,
    _flaxBinding757,
    _flaxBinding758,
    _flaxBinding759,
    _flaxBinding760,
    _flaxBinding761,
    _flaxBinding762,
    _flaxBinding763,
    _flaxBinding764,
    _flaxBinding765,
    _flaxBinding766,
    _flaxBinding767,
    _flaxBinding768,
    _flaxBinding769,
    _flaxBinding770,
    _flaxBinding771,
    _flaxBinding772,
    _flaxBinding773,
    _flaxBinding774,
    _flaxBinding775,
    _flaxBinding776,
    _flaxBinding777,
    _flaxBinding778,
    _flaxBinding779,
    _flaxBinding780,
    _flaxBinding781,
    _flaxBinding782,
    _flaxBinding783,
    _flaxBinding784,
    _flaxBinding785,
    _flaxBinding786,
    _flaxBinding787,
    _flaxBinding788,
    _flaxBinding789,
    _flaxBinding790,
    _flaxBinding791,
    _flaxBinding792,
    _flaxBinding793,
    _flaxBinding794,
    _flaxBinding795,
    _flaxBinding796,
    _flaxBinding797,
    _flaxBinding798,
    _flaxBinding799,
    _flaxBinding800,
    _flaxBinding801,
    _flaxBinding802,
    _flaxBinding803,
    _flaxBinding804,
    _flaxBinding805,
    _flaxBinding806,
    _flaxBinding807,
    _flaxBinding808,
    _flaxBinding809,
    _flaxBinding810,
    _flaxBinding811,
    _flaxBinding812,
    _flaxBinding813,
    _flaxBinding814,
    _flaxBinding815,
    _flaxBinding816,
    _flaxBinding817,
    _flaxBinding818,
    _flaxBinding819,
    _flaxBinding820,
    _flaxBinding821,
    _flaxBinding822,
    _flaxBinding823,
    _flaxBinding824,
    _flaxBinding825,
    _flaxBinding826,
    _flaxBinding827,
    _flaxBinding828,
    _flaxBinding829,
    _flaxBinding830,
    _flaxBinding831,
    _flaxBinding832,
    _flaxBinding833,
    _flaxBinding834,
    _flaxBinding835,
    _flaxBinding836,
    _flaxBinding837,
    _flaxBinding838,
    _flaxBinding839,
    _flaxBinding840,
    _flaxBinding841,
    _flaxBinding842,
    _flaxBinding843,
    _flaxBinding844,
    _flaxBinding845,
    _flaxBinding846,
    _flaxBinding847,
    _flaxBinding848,
    _flaxBinding849,
    _flaxBinding850,
    _flaxBinding851,
    _flaxBinding852,
    _flaxBinding853,
    _flaxBinding854,
    _flaxBinding855,
    _flaxBinding856,
    _flaxBinding857,
    _flaxBinding858,
    _flaxBinding859,
    _flaxBinding860,
    _flaxBinding861,
    _flaxBinding862,
    _flaxBinding863,
    _flaxBinding864,
    _flaxBinding865,
    _flaxBinding866,
    _flaxBinding867,
    _flaxBinding868,
    _flaxBinding869,
    _flaxBinding870,
    _flaxBinding871,
    _flaxBinding872,
    _flaxBinding873,
    _flaxBinding874,
    _flaxBinding875,
    _flaxBinding876,
    _flaxBinding877,
    _flaxBinding878,
    _flaxBinding879,
    _flaxBinding880,
    _flaxBinding881,
    _flaxBinding882,
    _flaxBinding883,
    _flaxBinding884,
  ]),
);
const _flaxBinding886 = FlaxGetter.plain(
  "flags",
  flaxIntType,
  _SemanticsData_flags,
);
const _flaxBinding887 = FlaxGetter.plain(
  "flagsCollection",
  _flaxBinding139,
  _SemanticsData_flagsCollection,
);
const _flaxBinding888 = FlaxGetter.plain(
  "actions",
  flaxIntType,
  _SemanticsData_actions,
);
const _flaxBinding889 = FlaxGetter.plain(
  "identifier",
  flaxStringType,
  _SemanticsData_identifier,
);
const _flaxBinding890 = FlaxGetter.plain(
  "traversalParentIdentifier",
  flaxNullableAnyType,
  _SemanticsData_traversalParentIdentifier,
);
const _flaxBinding891 = FlaxGetter.plain(
  "traversalChildIdentifier",
  flaxNullableAnyType,
  _SemanticsData_traversalChildIdentifier,
);
const _flaxBinding892 = FlaxGetter.plain(
  "label",
  flaxStringType,
  _SemanticsData_label,
);
const _flaxBinding893 = FlaxGetter.plain(
  "attributedLabel",
  _flaxBinding6,
  _SemanticsData_attributedLabel,
);
const _flaxBinding894 = FlaxGetter.plain(
  "value",
  flaxStringType,
  _SemanticsData_value,
);
const _flaxBinding895 = FlaxGetter.plain(
  "attributedValue",
  _flaxBinding6,
  _SemanticsData_attributedValue,
);
const _flaxBinding896 = FlaxGetter.plain(
  "increasedValue",
  flaxStringType,
  _SemanticsData_increasedValue,
);
const _flaxBinding897 = FlaxGetter.plain(
  "attributedIncreasedValue",
  _flaxBinding6,
  _SemanticsData_attributedIncreasedValue,
);
const _flaxBinding898 = FlaxGetter.plain(
  "decreasedValue",
  flaxStringType,
  _SemanticsData_decreasedValue,
);
const _flaxBinding899 = FlaxGetter.plain(
  "attributedDecreasedValue",
  _flaxBinding6,
  _SemanticsData_attributedDecreasedValue,
);
const _flaxBinding900 = FlaxGetter.plain(
  "hint",
  flaxStringType,
  _SemanticsData_hint,
);
const _flaxBinding901 = FlaxGetter.plain(
  "attributedHint",
  _flaxBinding6,
  _SemanticsData_attributedHint,
);
const _flaxBinding902 = FlaxGetter.plain(
  "tooltip",
  flaxStringType,
  _SemanticsData_tooltip,
);
const _flaxBinding903 = FlaxGetter.plain(
  "headingLevel",
  flaxIntType,
  _SemanticsData_headingLevel,
);
const _flaxBinding904 = FlaxGetter.plain(
  "textDirection",
  _flaxBinding89,
  _SemanticsData_textDirection,
);
const _flaxBinding905 = FlaxGetter.plain(
  "textSelection",
  _flaxBinding95,
  _SemanticsData_textSelection,
);
const _flaxBinding906 = FlaxGetter.plain(
  "scrollChildCount",
  flaxNullableIntType,
  _SemanticsData_scrollChildCount,
);
const _flaxBinding907 = FlaxGetter.plain(
  "scrollIndex",
  flaxNullableIntType,
  _SemanticsData_scrollIndex,
);
const _flaxBinding908 = FlaxGetter.plain(
  "scrollPosition",
  flaxNullableDoubleType,
  _SemanticsData_scrollPosition,
);
const _flaxBinding909 = FlaxGetter.plain(
  "scrollExtentMax",
  flaxNullableDoubleType,
  _SemanticsData_scrollExtentMax,
);
const _flaxBinding910 = FlaxGetter.plain(
  "scrollExtentMin",
  flaxNullableDoubleType,
  _SemanticsData_scrollExtentMin,
);
const _flaxBinding911 = FlaxGetter.plain(
  "platformViewId",
  flaxNullableIntType,
  _SemanticsData_platformViewId,
);
const _flaxBinding912 = FlaxGetter.plain(
  "maxValueLength",
  flaxNullableIntType,
  _SemanticsData_maxValueLength,
);
const _flaxBinding913 = FlaxGetter.plain(
  "currentValueLength",
  flaxNullableIntType,
  _SemanticsData_currentValueLength,
);
const _flaxBinding914 = FlaxGetter.plain(
  "linkUrl",
  _flaxBinding93,
  _SemanticsData_linkUrl,
);
const _flaxBinding915 = FlaxGetter.plain(
  "rect",
  flaxRectType,
  _SemanticsData_rect,
);
const _flaxBinding916 = FlaxGetter.plain(
  "tags",
  _flaxBinding143,
  _SemanticsData_tags,
);
const _flaxBinding917 = FlaxGetter.plain(
  "transform",
  _flaxBinding145,
  _SemanticsData_transform,
);
const _flaxBinding918 = FlaxGetter.plain(
  "customSemanticsActionIds",
  _flaxBinding148,
  _SemanticsData_customSemanticsActionIds,
);
const _flaxBinding919 = FlaxGetter.plain(
  "role",
  _flaxBinding84,
  _SemanticsData_role,
);
const _flaxBinding920 = FlaxGetter.plain(
  "controlsNodes",
  _flaxBinding98,
  _SemanticsData_controlsNodes,
);
const _flaxBinding921 = FlaxGetter.plain(
  "validationResult",
  _flaxBinding100,
  _SemanticsData_validationResult,
);
const _flaxBinding922 = FlaxGetter.plain(
  "hitTestBehavior",
  _flaxBinding102,
  _SemanticsData_hitTestBehavior,
);
const _flaxBinding923 = FlaxGetter.plain(
  "inputType",
  _flaxBinding104,
  _SemanticsData_inputType,
);
const _flaxBinding924 = FlaxGetter.plain(
  "locale",
  _flaxBinding60,
  _SemanticsData_locale,
);
const _flaxBinding925 = FlaxGetter.plain(
  "maxValue",
  flaxNullableStringType,
  _SemanticsData_maxValue,
);
const _flaxBinding926 = FlaxGetter.plain(
  "minValue",
  flaxNullableStringType,
  _SemanticsData_minValue,
);
const _flaxBinding927 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsData_toStringShort,
);
const _flaxBinding928 = FlaxInstanceMethod.plain(
  _flaxBinding330,
  flaxStringType,
  _SemanticsData_toString,
);
const _flaxBinding929 = FlaxInstanceMethod.plain(
  _flaxBinding332,
  _flaxBinding14,
  _SemanticsData_toDiagnosticsNode,
);
const _flaxBinding930 = FlaxInstanceMethod.shared(
  _flaxBinding48,
  _SemanticsData_debugFillProperties,
);
const _flaxBinding931 = FlaxInstanceMethod.shared(
  _flaxBinding137,
  _SemanticsData_hasFlag,
);
const _flaxBinding932 = FlaxInstanceMethod.shared(
  _flaxBinding138,
  _SemanticsData_hasAction,
);
const _flaxBinding933 = <FlaxParameter>[
  FlaxParameter.required("flagsCollection", _flaxBinding139),
  FlaxParameter.required("actions", flaxIntType),
  FlaxParameter.required("identifier", flaxStringType),
  FlaxParameter.required("traversalParentIdentifier", flaxNullableAnyType),
  FlaxParameter.required("traversalChildIdentifier", flaxNullableAnyType),
  FlaxParameter.required("attributedLabel", _flaxBinding6),
  FlaxParameter.required("attributedValue", _flaxBinding6),
  FlaxParameter.required("attributedIncreasedValue", _flaxBinding6),
  FlaxParameter.required("attributedDecreasedValue", _flaxBinding6),
  FlaxParameter.required("attributedHint", _flaxBinding6),
  FlaxParameter.required("tooltip", flaxStringType),
  FlaxParameter.required("textDirection", _flaxBinding89),
  FlaxParameter.required("rect", flaxRectType),
  FlaxParameter.required("textSelection", _flaxBinding95),
  FlaxParameter.required("scrollIndex", flaxNullableIntType),
  FlaxParameter.required("scrollChildCount", flaxNullableIntType),
  FlaxParameter.required("scrollPosition", flaxNullableDoubleType),
  FlaxParameter.required("scrollExtentMax", flaxNullableDoubleType),
  FlaxParameter.required("scrollExtentMin", flaxNullableDoubleType),
  FlaxParameter.required("platformViewId", flaxNullableIntType),
  FlaxParameter.required("maxValueLength", flaxNullableIntType),
  FlaxParameter.required("currentValueLength", flaxNullableIntType),
  FlaxParameter.required("headingLevel", flaxIntType),
  FlaxParameter.required("linkUrl", _flaxBinding93),
  FlaxParameter.required("role", _flaxBinding84),
  FlaxParameter.required("controlsNodes", _flaxBinding98),
  FlaxParameter.required("validationResult", _flaxBinding100),
  FlaxParameter.required("hitTestBehavior", _flaxBinding102),
  FlaxParameter.required("inputType", _flaxBinding104),
  FlaxParameter.required("locale", _flaxBinding60),
  FlaxParameter.required("minValue", flaxNullableStringType),
  FlaxParameter.required("maxValue", flaxNullableStringType),
  FlaxParameter("tags", _flaxBinding143, required: false),
  FlaxParameter("transform", _flaxBinding145, required: false),
  FlaxParameter("customSemanticsActionIds", _flaxBinding148, required: false),
];
const _flaxBinding934 = FlaxProxyMember(
  "hasFlag",
  0,
  _flaxBinding137,
  hasSuper: true,
);
const _flaxBinding935 = FlaxProxyMember(
  "hasAction",
  0,
  _flaxBinding138,
  hasSuper: true,
);
const _flaxBinding936 = FlaxProxyMember(
  "flags",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding937 = FlaxProxyMember(
  "flagsCollection",
  1,
  _flaxBinding140,
  hasSuper: true,
);
const _flaxBinding938 = FlaxProxyMember(
  "actions",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding939 = FlaxProxyMember(
  "rect",
  1,
  _flaxBinding141,
  hasSuper: true,
);
const _flaxBinding940 = FlaxProxyMember(
  "tags",
  1,
  _flaxBinding144,
  hasSuper: true,
);
const _flaxBinding941 = FlaxProxyMember(
  "transform",
  1,
  _flaxBinding146,
  hasSuper: true,
);
const _flaxBinding942 = FlaxProxyMember(
  "customSemanticsActionIds",
  1,
  _flaxBinding149,
  hasSuper: true,
);
const _flaxBinding943 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsData",
  [
    _flaxBinding886,
    _flaxBinding887,
    _flaxBinding888,
    _flaxBinding889,
    _flaxBinding890,
    _flaxBinding891,
    _flaxBinding892,
    _flaxBinding893,
    _flaxBinding894,
    _flaxBinding895,
    _flaxBinding896,
    _flaxBinding897,
    _flaxBinding898,
    _flaxBinding899,
    _flaxBinding900,
    _flaxBinding901,
    _flaxBinding902,
    _flaxBinding903,
    _flaxBinding904,
    _flaxBinding905,
    _flaxBinding906,
    _flaxBinding907,
    _flaxBinding908,
    _flaxBinding909,
    _flaxBinding910,
    _flaxBinding911,
    _flaxBinding912,
    _flaxBinding913,
    _flaxBinding914,
    _flaxBinding915,
    _flaxBinding916,
    _flaxBinding917,
    _flaxBinding918,
    _flaxBinding919,
    _flaxBinding920,
    _flaxBinding921,
    _flaxBinding922,
    _flaxBinding923,
    _flaxBinding924,
    _flaxBinding925,
    _flaxBinding926,
  ],
  {
    "toStringShort": _flaxBinding927,
    "toString": _flaxBinding928,
    "toDiagnosticsNode": _flaxBinding929,
    "debugFillProperties": _flaxBinding930,
    "hasFlag": _flaxBinding931,
    "hasAction": _flaxBinding932,
    "@super:toStringShort": _flaxBinding336,
    "@super:toString": _flaxBinding337,
    "@super:toDiagnosticsNode": FlaxInstanceMethod.plain(
      _flaxBinding332,
      _flaxBinding14,
      _SemanticsData_super_toDiagnosticsNode,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod.shared(
      _flaxBinding48,
      _SemanticsData_super_debugFillProperties,
    ),
    "@super:hasFlag": FlaxInstanceMethod.shared(
      _flaxBinding137,
      _SemanticsData_super_hasFlag,
    ),
    "@super:hasAction": FlaxInstanceMethod.shared(
      _flaxBinding138,
      _SemanticsData_super_hasAction,
    ),
    "@super:get:flags": FlaxInstanceMethod.shared(
      flaxIntCall,
      _SemanticsData_super_get_flags,
    ),
    "@super:get:flagsCollection": FlaxInstanceMethod.shared(
      _flaxBinding140,
      _SemanticsData_super_get_flagsCollection,
    ),
    "@super:get:actions": FlaxInstanceMethod.shared(
      flaxIntCall,
      _SemanticsData_super_get_actions,
    ),
    "@super:get:identifier": _flaxBinding656,
    "@super:get:traversalParentIdentifier": _flaxBinding657,
    "@super:get:traversalChildIdentifier": _flaxBinding658,
    "@super:get:label": _flaxBinding660,
    "@super:get:attributedLabel": _flaxBinding661,
    "@super:get:value": _flaxBinding662,
    "@super:get:attributedValue": _flaxBinding663,
    "@super:get:increasedValue": _flaxBinding664,
    "@super:get:attributedIncreasedValue": _flaxBinding665,
    "@super:get:decreasedValue": _flaxBinding666,
    "@super:get:attributedDecreasedValue": _flaxBinding667,
    "@super:get:hint": _flaxBinding668,
    "@super:get:attributedHint": _flaxBinding669,
    "@super:get:tooltip": _flaxBinding670,
    "@super:get:headingLevel": _flaxBinding673,
    "@super:get:textDirection": _flaxBinding671,
    "@super:get:textSelection": _flaxBinding675,
    "@super:get:scrollChildCount": _flaxBinding651,
    "@super:get:scrollIndex": _flaxBinding652,
    "@super:get:scrollPosition": _flaxBinding676,
    "@super:get:scrollExtentMax": _flaxBinding677,
    "@super:get:scrollExtentMin": _flaxBinding678,
    "@super:get:platformViewId": _flaxBinding653,
    "@super:get:maxValueLength": _flaxBinding654,
    "@super:get:currentValueLength": _flaxBinding655,
    "@super:get:linkUrl": _flaxBinding672,
    "@super:get:rect": FlaxInstanceMethod.shared(
      _flaxBinding141,
      _SemanticsData_super_get_rect,
    ),
    "@super:get:tags": FlaxInstanceMethod.shared(
      _flaxBinding144,
      _SemanticsData_super_get_tags,
    ),
    "@super:get:transform": FlaxInstanceMethod.shared(
      _flaxBinding146,
      _SemanticsData_super_get_transform,
    ),
    "@super:get:customSemanticsActionIds": FlaxInstanceMethod.shared(
      _flaxBinding149,
      _SemanticsData_super_get_customSemanticsActionIds,
    ),
    "@super:get:role": _flaxBinding659,
    "@super:get:controlsNodes": _flaxBinding679,
    "@super:get:validationResult": _flaxBinding680,
    "@super:get:hitTestBehavior": _flaxBinding681,
    "@super:get:inputType": _flaxBinding682,
    "@super:get:locale": FlaxInstanceMethod.shared(
      _flaxBinding61,
      _SemanticsData_super_get_locale,
    ),
    "@super:get:maxValue": _flaxBinding683,
    "@super:get:minValue": _flaxBinding684,
  },
  constructors: {"": _flaxBinding933, "@implementation": _flaxBinding933},
  create: _createSemanticsData,
  matches: _isSemanticsData,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding342,
    _flaxBinding344,
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding934,
    _flaxBinding935,
    _flaxBinding936,
    _flaxBinding937,
    _flaxBinding938,
    _flaxBinding733,
    _flaxBinding734,
    _flaxBinding735,
    _flaxBinding737,
    _flaxBinding738,
    _flaxBinding739,
    _flaxBinding740,
    _flaxBinding741,
    _flaxBinding742,
    _flaxBinding743,
    _flaxBinding744,
    _flaxBinding745,
    _flaxBinding746,
    _flaxBinding747,
    _flaxBinding768,
    _flaxBinding753,
    _flaxBinding778,
    _flaxBinding726,
    _flaxBinding727,
    _flaxBinding779,
    _flaxBinding780,
    _flaxBinding781,
    _flaxBinding728,
    _flaxBinding729,
    _flaxBinding730,
    _flaxBinding766,
    _flaxBinding939,
    _flaxBinding940,
    _flaxBinding941,
    _flaxBinding942,
    _flaxBinding736,
    _flaxBinding782,
    _flaxBinding783,
    _flaxBinding784,
    _flaxBinding785,
    _flaxBinding693,
    _flaxBinding786,
    _flaxBinding787,
  ]),
);
const _flaxBinding944 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _SemanticsHandle_dispose,
);
const _flaxBinding945 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsHandle",
  [],
  {"dispose": _flaxBinding944},
  constructors: {},
  create: _createSemanticsHandle,
  matches: _isSemanticsHandle,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding946 = FlaxGetter.plain(
  "onTapHint",
  flaxNullableStringType,
  _SemanticsHintOverrides_onTapHint,
);
const _flaxBinding947 = FlaxGetter.plain(
  "onLongPressHint",
  flaxNullableStringType,
  _SemanticsHintOverrides_onLongPressHint,
);
const _flaxBinding948 = FlaxGetter.plain(
  "isNotEmpty",
  flaxBoolType,
  _SemanticsHintOverrides_isNotEmpty,
);
const _flaxBinding949 = <FlaxParameter>[
  FlaxParameter("joiner", flaxStringType, required: false, defaultValue: ', '),
  FlaxParameter(
    "minLevel",
    _flaxBinding18,
    required: false,
    defaultValue: api2.DiagnosticLevel.debug,
  ),
];
const _flaxBinding950 = FlaxInstanceMethod.plain(
  _flaxBinding949,
  flaxStringType,
  _SemanticsHintOverrides_toStringShallow,
);
const _flaxBinding951 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding18,
    required: false,
    defaultValue: api2.DiagnosticLevel.debug,
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
const _flaxBinding952 = FlaxInstanceMethod.plain(
  _flaxBinding951,
  flaxStringType,
  _SemanticsHintOverrides_toStringDeep,
);
const _flaxBinding953 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsHintOverrides_toStringShort,
);
const _flaxBinding954 = FlaxInstanceMethod.plain(
  _flaxBinding332,
  _flaxBinding14,
  _SemanticsHintOverrides_toDiagnosticsNode,
);
const _flaxBinding955 = FlaxInstanceMethod.shared(
  _flaxBinding17,
  _SemanticsHintOverrides_debugDescribeChildren,
);
const _flaxBinding956 = FlaxInstanceMethod.shared(
  _flaxBinding48,
  _SemanticsHintOverrides_debugFillProperties,
);
const _flaxBinding957 = FlaxInstanceMethod.plain(
  _flaxBinding330,
  flaxStringType,
  _SemanticsHintOverrides_toString,
);
const _flaxBinding958 = <FlaxParameter>[
  FlaxParameter("onTapHint", flaxNullableStringType, required: false),
  FlaxParameter("onLongPressHint", flaxNullableStringType, required: false),
];
const _flaxBinding959 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "joiner",
      flaxStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "minLevel",
      _flaxBinding18,
      required: false,
      positional: false,
    ),
  ],
  flaxStringType,
  id: "callback:<>(n:o:joiner:String:,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding960 = FlaxProxyMember(
  "toStringShallow",
  0,
  _flaxBinding959,
  hasSuper: true,
);
const _flaxBinding961 = FlaxCallbackBinding.signature(
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
      _flaxBinding18,
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
const _flaxBinding962 = FlaxProxyMember(
  "toStringDeep",
  0,
  _flaxBinding961,
  hasSuper: true,
);
const _flaxBinding963 = FlaxProxyMember(
  "debugDescribeChildren",
  0,
  _flaxBinding17,
  hasSuper: true,
);
const _flaxBinding964 = FlaxProxyMember(
  "onTapHint",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding965 = FlaxProxyMember(
  "onLongPressHint",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding966 = FlaxProxyMember(
  "isNotEmpty",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding967 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsHintOverrides",
  [_flaxBinding946, _flaxBinding947, _flaxBinding948],
  {
    "toStringShallow": _flaxBinding950,
    "toStringDeep": _flaxBinding952,
    "toStringShort": _flaxBinding953,
    "toDiagnosticsNode": _flaxBinding954,
    "debugDescribeChildren": _flaxBinding955,
    "debugFillProperties": _flaxBinding956,
    "toString": _flaxBinding957,
    "@super:toStringShallow": FlaxInstanceMethod.plain(
      _flaxBinding949,
      flaxStringType,
      _SemanticsHintOverrides_super_toStringShallow,
    ),
    "@super:toStringDeep": FlaxInstanceMethod.plain(
      _flaxBinding951,
      flaxStringType,
      _SemanticsHintOverrides_super_toStringDeep,
    ),
    "@super:toStringShort": _flaxBinding336,
    "@super:toDiagnosticsNode": _flaxBinding338,
    "@super:debugDescribeChildren": FlaxInstanceMethod.shared(
      _flaxBinding17,
      _SemanticsHintOverrides_super_debugDescribeChildren,
    ),
    "@super:debugFillProperties": _flaxBinding339,
    "@super:toString": _flaxBinding337,
    "@super:get:onTapHint": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _SemanticsHintOverrides_super_get_onTapHint,
    ),
    "@super:get:onLongPressHint": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _SemanticsHintOverrides_super_get_onLongPressHint,
    ),
    "@super:get:isNotEmpty": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsHintOverrides_super_get_isNotEmpty,
    ),
  },
  constructors: {"": _flaxBinding958, "@implementation": _flaxBinding958},
  create: _createSemanticsHintOverrides,
  matches: _isSemanticsHintOverrides,
  setters: [],
  supertypes: [
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding960,
    _flaxBinding962,
    _flaxBinding342,
    _flaxBinding346,
    _flaxBinding963,
    _flaxBinding347,
    _flaxBinding344,
    _flaxBinding964,
    _flaxBinding965,
    _flaxBinding966,
  ]),
);
const _flaxBinding968 = FlaxGetter.plain(
  "separator",
  flaxStringType,
  _SemanticsLabelBuilder_separator,
);
const _flaxBinding969 = FlaxGetter.plain(
  "textDirection",
  _flaxBinding89,
  _SemanticsLabelBuilder_textDirection,
);
const _flaxBinding970 = FlaxGetter.plain(
  "isEmpty",
  flaxBoolType,
  _SemanticsLabelBuilder_isEmpty,
);
const _flaxBinding971 = FlaxGetter.plain(
  "length",
  flaxIntType,
  _SemanticsLabelBuilder_length,
);
const _flaxBinding972 = <FlaxParameter>[
  FlaxParameter.required("label", flaxStringType),
  FlaxParameter("textDirection", _flaxBinding89, required: false),
];
const _flaxBinding973 = FlaxInstanceMethod.plain(
  _flaxBinding972,
  flaxVoidType,
  _SemanticsLabelBuilder_addPart,
);
const _flaxBinding974 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsLabelBuilder_build,
);
const _flaxBinding975 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _SemanticsLabelBuilder_clear,
);
const _flaxBinding976 = <FlaxParameter>[
  FlaxParameter(
    "separator",
    flaxStringType,
    required: false,
    defaultValue: ' ',
  ),
  FlaxParameter("textDirection", _flaxBinding89, required: false),
];
const _flaxBinding977 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsLabelBuilder",
  [_flaxBinding968, _flaxBinding969, _flaxBinding970, _flaxBinding971],
  {
    "addPart": _flaxBinding973,
    "build": _flaxBinding974,
    "clear": _flaxBinding975,
  },
  constructors: {"": _flaxBinding976},
  create: _createSemanticsLabelBuilder,
  matches: _isSemanticsLabelBuilder,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding978 = FlaxGetter.plain(
  "key",
  _flaxBinding162,
  _SemanticsNode_key,
);
const _flaxBinding979 = FlaxGetter.plain("id", flaxIntType, _SemanticsNode_id);
const _flaxBinding980 = FlaxGetter.plain(
  "transform",
  _flaxBinding145,
  _SemanticsNode_transform,
);
const _flaxBinding981 = FlaxGetter.plain(
  "rect",
  flaxRectType,
  _SemanticsNode_rect,
);
const _flaxBinding982 = FlaxGetter.plain(
  "parentSemanticsClipRect",
  _flaxBinding164,
  _SemanticsNode_parentSemanticsClipRect,
);
const _flaxBinding983 = FlaxGetter.plain(
  "parentPaintClipRect",
  _flaxBinding164,
  _SemanticsNode_parentPaintClipRect,
);
const _flaxBinding984 = FlaxGetter.plain(
  "indexInParent",
  flaxNullableIntType,
  _SemanticsNode_indexInParent,
);
const _flaxBinding985 = FlaxGetter.plain(
  "isInvisible",
  flaxBoolType,
  _SemanticsNode_isInvisible,
);
const _flaxBinding986 = FlaxGetter.plain(
  "isMergedIntoParent",
  flaxBoolType,
  _SemanticsNode_isMergedIntoParent,
);
const _flaxBinding987 = FlaxGetter.plain(
  "areUserActionsBlocked",
  flaxBoolType,
  _SemanticsNode_areUserActionsBlocked,
);
const _flaxBinding988 = FlaxGetter.plain(
  "isPartOfNodeMerging",
  flaxBoolType,
  _SemanticsNode_isPartOfNodeMerging,
);
const _flaxBinding989 = FlaxGetter.plain(
  "mergeAllDescendantsIntoThisNode",
  flaxBoolType,
  _SemanticsNode_mergeAllDescendantsIntoThisNode,
);
const _flaxBinding990 = FlaxGetter.plain(
  "hasChildren",
  flaxBoolType,
  _SemanticsNode_hasChildren,
);
const _flaxBinding991 = FlaxGetter.plain(
  "childrenCount",
  flaxIntType,
  _SemanticsNode_childrenCount,
);
const _flaxBinding992 = FlaxGetter.plain(
  "childrenCountInTraversalOrder",
  flaxIntType,
  _SemanticsNode_childrenCountInTraversalOrder,
);
const _flaxBinding993 = FlaxGetter.plain(
  "owner",
  _flaxBinding166,
  _SemanticsNode_owner,
);
const _flaxBinding994 = FlaxGetter.plain(
  "attached",
  flaxBoolType,
  _SemanticsNode_attached,
);
const _flaxBinding995 = FlaxGetter.plain(
  "parent",
  _flaxBinding168,
  _SemanticsNode_parent,
);
const _flaxBinding996 = FlaxGetter.plain(
  "traversalParent",
  _flaxBinding168,
  _SemanticsNode_traversalParent,
);
const _flaxBinding997 = FlaxGetter.plain(
  "depth",
  flaxIntType,
  _SemanticsNode_depth,
);
const _flaxBinding998 = FlaxGetter.plain(
  "tags",
  _flaxBinding143,
  _SemanticsNode_tags,
);
const _flaxBinding999 = FlaxGetter.plain(
  "flagsCollection",
  _flaxBinding139,
  _SemanticsNode_flagsCollection,
);
const _flaxBinding1000 = FlaxGetter.plain(
  "identifier",
  flaxStringType,
  _SemanticsNode_identifier,
);
const _flaxBinding1001 = FlaxGetter.plain(
  "traversalParentIdentifier",
  flaxNullableAnyType,
  _SemanticsNode_traversalParentIdentifier,
);
const _flaxBinding1002 = FlaxGetter.plain(
  "traversalChildIdentifier",
  flaxNullableAnyType,
  _SemanticsNode_traversalChildIdentifier,
);
const _flaxBinding1003 = FlaxGetter.plain(
  "label",
  flaxStringType,
  _SemanticsNode_label,
);
const _flaxBinding1004 = FlaxGetter.plain(
  "attributedLabel",
  _flaxBinding6,
  _SemanticsNode_attributedLabel,
);
const _flaxBinding1005 = FlaxGetter.plain(
  "value",
  flaxStringType,
  _SemanticsNode_value,
);
const _flaxBinding1006 = FlaxGetter.plain(
  "attributedValue",
  _flaxBinding6,
  _SemanticsNode_attributedValue,
);
const _flaxBinding1007 = FlaxGetter.plain(
  "increasedValue",
  flaxStringType,
  _SemanticsNode_increasedValue,
);
const _flaxBinding1008 = FlaxGetter.plain(
  "attributedIncreasedValue",
  _flaxBinding6,
  _SemanticsNode_attributedIncreasedValue,
);
const _flaxBinding1009 = FlaxGetter.plain(
  "decreasedValue",
  flaxStringType,
  _SemanticsNode_decreasedValue,
);
const _flaxBinding1010 = FlaxGetter.plain(
  "attributedDecreasedValue",
  _flaxBinding6,
  _SemanticsNode_attributedDecreasedValue,
);
const _flaxBinding1011 = FlaxGetter.plain(
  "hint",
  flaxStringType,
  _SemanticsNode_hint,
);
const _flaxBinding1012 = FlaxGetter.plain(
  "attributedHint",
  _flaxBinding6,
  _SemanticsNode_attributedHint,
);
const _flaxBinding1013 = FlaxGetter.plain(
  "tooltip",
  flaxStringType,
  _SemanticsNode_tooltip,
);
const _flaxBinding1014 = FlaxGetter.plain(
  "hintOverrides",
  _flaxBinding87,
  _SemanticsNode_hintOverrides,
);
const _flaxBinding1015 = FlaxGetter.plain(
  "textDirection",
  _flaxBinding89,
  _SemanticsNode_textDirection,
);
const _flaxBinding1016 = FlaxGetter.plain(
  "sortKey",
  _flaxBinding79,
  _SemanticsNode_sortKey,
);
const _flaxBinding1017 = FlaxGetter.plain(
  "textSelection",
  _flaxBinding95,
  _SemanticsNode_textSelection,
);
const _flaxBinding1018 = FlaxGetter.plain(
  "isMultiline",
  flaxNullableBoolType,
  _SemanticsNode_isMultiline,
);
const _flaxBinding1019 = FlaxGetter.plain(
  "scrollChildCount",
  flaxNullableIntType,
  _SemanticsNode_scrollChildCount,
);
const _flaxBinding1020 = FlaxGetter.plain(
  "scrollIndex",
  flaxNullableIntType,
  _SemanticsNode_scrollIndex,
);
const _flaxBinding1021 = FlaxGetter.plain(
  "scrollPosition",
  flaxNullableDoubleType,
  _SemanticsNode_scrollPosition,
);
const _flaxBinding1022 = FlaxGetter.plain(
  "scrollExtentMax",
  flaxNullableDoubleType,
  _SemanticsNode_scrollExtentMax,
);
const _flaxBinding1023 = FlaxGetter.plain(
  "scrollExtentMin",
  flaxNullableDoubleType,
  _SemanticsNode_scrollExtentMin,
);
const _flaxBinding1024 = FlaxGetter.plain(
  "platformViewId",
  flaxNullableIntType,
  _SemanticsNode_platformViewId,
);
const _flaxBinding1025 = FlaxGetter.plain(
  "maxValueLength",
  flaxNullableIntType,
  _SemanticsNode_maxValueLength,
);
const _flaxBinding1026 = FlaxGetter.plain(
  "currentValueLength",
  flaxNullableIntType,
  _SemanticsNode_currentValueLength,
);
const _flaxBinding1027 = FlaxGetter.plain(
  "headingLevel",
  flaxIntType,
  _SemanticsNode_headingLevel,
);
const _flaxBinding1028 = FlaxGetter.plain(
  "linkUrl",
  _flaxBinding93,
  _SemanticsNode_linkUrl,
);
const _flaxBinding1029 = FlaxGetter.plain(
  "role",
  _flaxBinding84,
  _SemanticsNode_role,
);
const _flaxBinding1030 = FlaxGetter.plain(
  "controlsNodes",
  _flaxBinding98,
  _SemanticsNode_controlsNodes,
);
const _flaxBinding1031 = FlaxGetter.plain(
  "minValue",
  flaxNullableStringType,
  _SemanticsNode_minValue,
);
const _flaxBinding1032 = FlaxGetter.plain(
  "maxValue",
  flaxNullableStringType,
  _SemanticsNode_maxValue,
);
const _flaxBinding1033 = FlaxGetter.plain(
  "validationResult",
  _flaxBinding100,
  _SemanticsNode_validationResult,
);
const _flaxBinding1034 = FlaxGetter.plain(
  "hitTestBehavior",
  _flaxBinding102,
  _SemanticsNode_hitTestBehavior,
);
const _flaxBinding1035 = FlaxGetter.plain(
  "inputType",
  _flaxBinding104,
  _SemanticsNode_inputType,
);
const _flaxBinding1036 = FlaxSetter(
  "transform",
  _flaxBinding145,
  _SemanticsNode_set_transform,
);
const _flaxBinding1037 = FlaxSetter(
  "rect",
  flaxRectType,
  _SemanticsNode_set_rect,
);
const _flaxBinding1038 = FlaxSetter(
  "parentSemanticsClipRect",
  _flaxBinding164,
  _SemanticsNode_set_parentSemanticsClipRect,
);
const _flaxBinding1039 = FlaxSetter(
  "parentPaintClipRect",
  _flaxBinding164,
  _SemanticsNode_set_parentPaintClipRect,
);
const _flaxBinding1040 = FlaxSetter(
  "indexInParent",
  flaxNullableIntType,
  _SemanticsNode_set_indexInParent,
);
const _flaxBinding1041 = FlaxSetter(
  "isMergedIntoParent",
  flaxBoolType,
  _SemanticsNode_set_isMergedIntoParent,
);
const _flaxBinding1042 = FlaxSetter(
  "areUserActionsBlocked",
  flaxBoolType,
  _SemanticsNode_set_areUserActionsBlocked,
);
const _flaxBinding1043 = FlaxSetter(
  "traversalParent",
  _flaxBinding168,
  _SemanticsNode_set_traversalParent,
);
const _flaxBinding1044 = FlaxSetter(
  "tags",
  _flaxBinding143,
  _SemanticsNode_set_tags,
);
const _flaxBinding1045 = FlaxInstanceMethod.plain(
  _flaxBinding330,
  flaxStringType,
  _SemanticsNode_toString,
);
const _flaxBinding1046 = FlaxInstanceMethod.plain(
  _flaxBinding949,
  flaxStringType,
  _SemanticsNode_toStringShallow,
);
const _flaxBinding1047 = <FlaxParameter>[
  FlaxParameter(
    "childOrder",
    _flaxBinding158,
    required: false,
    defaultValue: api.DebugSemanticsDumpOrder.traversalOrder,
  ),
  FlaxParameter(
    "minLevel",
    _flaxBinding18,
    required: false,
    defaultValue: api2.DiagnosticLevel.debug,
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
const _flaxBinding1048 = FlaxInstanceMethod.plain(
  _flaxBinding1047,
  flaxStringType,
  _SemanticsNode_toStringDeep,
);
const _flaxBinding1049 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsNode_toStringShort,
);
const _flaxBinding1050 = <FlaxParameter>[
  FlaxParameter(
    "childOrder",
    _flaxBinding158,
    required: false,
    defaultValue: api.DebugSemanticsDumpOrder.traversalOrder,
  ),
  FlaxParameter("name", flaxNullableStringType, required: false),
  FlaxParameter(
    "style",
    _flaxBinding26,
    required: false,
    defaultValue: api2.DiagnosticsTreeStyle.sparse,
  ),
];
const _flaxBinding1051 = FlaxInstanceMethod.plain(
  _flaxBinding1050,
  _flaxBinding14,
  _SemanticsNode_toDiagnosticsNode,
);
const _flaxBinding1052 = <FlaxParameter>[
  FlaxParameter(
    "childOrder",
    _flaxBinding158,
    required: false,
    defaultValue: api.DebugSemanticsDumpOrder.traversalOrder,
  ),
];
const _flaxBinding1053 = FlaxInstanceMethod.plain(
  _flaxBinding1052,
  _flaxBinding16,
  _SemanticsNode_debugDescribeChildren,
);
const _flaxBinding1054 = FlaxInstanceMethod.shared(
  _flaxBinding48,
  _SemanticsNode_debugFillProperties,
);
const _flaxBinding1055 = FlaxInstanceMethod.shared(
  _flaxBinding153,
  _SemanticsNode_visitChildren,
);
const _flaxBinding1056 = FlaxInstanceMethod.shared(
  _flaxBinding54,
  _SemanticsNode_isTagged,
);
const _flaxBinding1057 = FlaxInstanceMethod.shared(
  _flaxBinding137,
  _SemanticsNode_hasFlag,
);
const _flaxBinding1058 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding150,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_semantics#type:SemanticsNode]",
    _collection17Create,
    _collection17Matches,
  ),
  iterable: _flaxBinding159,
);
const _flaxBinding1059 = <FlaxParameter>[
  FlaxParameter(
    "childrenInInversePaintOrder",
    _flaxBinding1058,
    required: false,
  ),
  FlaxParameter.required("config", _flaxBinding56),
];
const _flaxBinding1060 = FlaxInstanceMethod.plain(
  _flaxBinding1059,
  flaxVoidType,
  _SemanticsNode_updateWith,
);
const _flaxBinding1061 = FlaxInstanceMethod.shared(
  _flaxBinding155,
  _SemanticsNode_getSemanticsData,
);
const _flaxBinding1062 = FlaxInstanceMethod.shared(
  _flaxBinding157,
  _SemanticsNode_sendEvent,
);
const _flaxBinding1063 = FlaxInstanceMethod.shared(
  _flaxBinding161,
  _SemanticsNode_debugListChildrenInOrder,
);
const _flaxBinding1064 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding162, required: false),
  FlaxParameter("showOnScreen", flaxVoidNullableCallbackType, required: false),
];
const _flaxBinding1065 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsOwner",
);
const _flaxBinding1066 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding162, required: false),
  FlaxParameter("showOnScreen", flaxVoidNullableCallbackType, required: false),
  FlaxParameter.required("owner", _flaxBinding1065),
];
const _flaxBinding1067 = FlaxCallbackBinding.signature(
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
      _flaxBinding18,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "childOrder",
      _flaxBinding158,
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
  id: "callback:<>(n:o:prefixLineOne:String:,n:o:prefixOtherLines:String?:,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel,n:o:childOrder:enum:flax.core/sdk_semantics#type:DebugSemanticsDumpOrder,n:o:wrapWidth:int:)->String:",
);
const _flaxBinding1068 = FlaxProxyMember(
  "toStringDeep",
  0,
  _flaxBinding1067,
  hasSuper: true,
);
const _flaxBinding1069 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "name",
      flaxNullableStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "style",
      _flaxBinding26,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "childOrder",
      _flaxBinding158,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding14,
  id: "callback:<>(n:o:name:String?:,n:o:style:enum?:flax.core/sdk_foundation#type:DiagnosticsTreeStyle,n:o:childOrder:enum:flax.core/sdk_semantics#type:DebugSemanticsDumpOrder)->object:flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding1070 = FlaxProxyMember(
  "toDiagnosticsNode",
  0,
  _flaxBinding1069,
  hasSuper: true,
);
const _flaxBinding1071 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "childOrder",
      _flaxBinding158,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(n:o:childOrder:enum:flax.core/sdk_semantics#type:DebugSemanticsDumpOrder)->list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
);
const _flaxBinding1072 = FlaxProxyMember(
  "debugDescribeChildren",
  0,
  _flaxBinding1071,
  hasSuper: true,
);
const _flaxBinding1073 = FlaxProxyMember(
  "visitChildren",
  0,
  _flaxBinding153,
  hasSuper: true,
);
const _flaxBinding1074 = FlaxProxyMember(
  "isTagged",
  0,
  _flaxBinding54,
  hasSuper: true,
);
const _flaxBinding1075 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("config", _flaxBinding56, positional: false),
    FlaxCallbackParameter.plain(
      "childrenInInversePaintOrder",
      _flaxBinding1058,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(n:r:config:object?:flax.core/sdk_semantics#type:SemanticsConfiguration,n:o:childrenInInversePaintOrder:list?:[object:flax.core/sdk_semantics#type:SemanticsNode])->void:",
);
const _flaxBinding1076 = FlaxProxyMember(
  "updateWith",
  0,
  _flaxBinding1075,
  hasSuper: true,
);
const _flaxBinding1077 = FlaxProxyMember(
  "getSemanticsData",
  0,
  _flaxBinding155,
  hasSuper: true,
);
const _flaxBinding1078 = FlaxProxyMember(
  "sendEvent",
  0,
  _flaxBinding157,
  hasSuper: true,
);
const _flaxBinding1079 = FlaxProxyMember(
  "debugListChildrenInOrder",
  0,
  _flaxBinding161,
  hasSuper: true,
);
const _flaxBinding1080 = FlaxProxyMember(
  "key",
  1,
  _flaxBinding163,
  hasSuper: true,
);
const _flaxBinding1081 = FlaxProxyMember("id", 1, flaxIntCall, hasSuper: true);
const _flaxBinding1082 = FlaxProxyMember(
  "parentSemanticsClipRect",
  1,
  _flaxBinding165,
  hasSuper: true,
);
const _flaxBinding1083 = FlaxProxyMember(
  "parentPaintClipRect",
  1,
  _flaxBinding165,
  hasSuper: true,
);
const _flaxBinding1084 = FlaxProxyMember(
  "isInvisible",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1085 = FlaxProxyMember(
  "isMergedIntoParent",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1086 = FlaxProxyMember(
  "areUserActionsBlocked",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1087 = FlaxProxyMember(
  "isPartOfNodeMerging",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1088 = FlaxProxyMember(
  "mergeAllDescendantsIntoThisNode",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1089 = FlaxProxyMember(
  "hasChildren",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1090 = FlaxProxyMember(
  "childrenCount",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding1091 = FlaxProxyMember(
  "childrenCountInTraversalOrder",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding1092 = FlaxProxyMember(
  "owner",
  1,
  _flaxBinding167,
  hasSuper: true,
);
const _flaxBinding1093 = FlaxProxyMember(
  "attached",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1094 = FlaxProxyMember(
  "parent",
  1,
  _flaxBinding169,
  hasSuper: true,
);
const _flaxBinding1095 = FlaxProxyMember(
  "traversalParent",
  1,
  _flaxBinding169,
  hasSuper: true,
);
const _flaxBinding1096 = FlaxProxyMember(
  "depth",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding1097 = FlaxProxyMember(
  "isMultiline",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1098 = FlaxProxyMember(
  "transform",
  2,
  _flaxBinding170,
  hasSuper: true,
);
const _flaxBinding1099 = FlaxProxyMember(
  "rect",
  2,
  _flaxBinding171,
  hasSuper: true,
);
const _flaxBinding1100 = FlaxProxyMember(
  "parentSemanticsClipRect",
  2,
  _flaxBinding172,
  hasSuper: true,
);
const _flaxBinding1101 = FlaxProxyMember(
  "parentPaintClipRect",
  2,
  _flaxBinding172,
  hasSuper: true,
);
const _flaxBinding1102 = FlaxProxyMember(
  "isMergedIntoParent",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding1103 = FlaxProxyMember(
  "areUserActionsBlocked",
  2,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding1104 = FlaxProxyMember(
  "traversalParent",
  2,
  _flaxBinding173,
  hasSuper: true,
);
const _flaxBinding1105 = FlaxProxyMember(
  "tags",
  2,
  _flaxBinding174,
  hasSuper: true,
);
const _flaxBinding1106 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsNode",
  [
    _flaxBinding978,
    _flaxBinding979,
    _flaxBinding980,
    _flaxBinding981,
    _flaxBinding982,
    _flaxBinding983,
    _flaxBinding984,
    _flaxBinding985,
    _flaxBinding986,
    _flaxBinding987,
    _flaxBinding988,
    _flaxBinding989,
    _flaxBinding990,
    _flaxBinding991,
    _flaxBinding992,
    _flaxBinding993,
    _flaxBinding994,
    _flaxBinding995,
    _flaxBinding996,
    _flaxBinding997,
    _flaxBinding998,
    _flaxBinding999,
    _flaxBinding1000,
    _flaxBinding1001,
    _flaxBinding1002,
    _flaxBinding1003,
    _flaxBinding1004,
    _flaxBinding1005,
    _flaxBinding1006,
    _flaxBinding1007,
    _flaxBinding1008,
    _flaxBinding1009,
    _flaxBinding1010,
    _flaxBinding1011,
    _flaxBinding1012,
    _flaxBinding1013,
    _flaxBinding1014,
    _flaxBinding1015,
    _flaxBinding1016,
    _flaxBinding1017,
    _flaxBinding1018,
    _flaxBinding1019,
    _flaxBinding1020,
    _flaxBinding1021,
    _flaxBinding1022,
    _flaxBinding1023,
    _flaxBinding1024,
    _flaxBinding1025,
    _flaxBinding1026,
    _flaxBinding1027,
    _flaxBinding1028,
    _flaxBinding1029,
    _flaxBinding1030,
    _flaxBinding1031,
    _flaxBinding1032,
    _flaxBinding1033,
    _flaxBinding1034,
    _flaxBinding1035,
  ],
  {
    "toString": _flaxBinding1045,
    "toStringShallow": _flaxBinding1046,
    "toStringDeep": _flaxBinding1048,
    "toStringShort": _flaxBinding1049,
    "toDiagnosticsNode": _flaxBinding1051,
    "debugDescribeChildren": _flaxBinding1053,
    "debugFillProperties": _flaxBinding1054,
    "visitChildren": _flaxBinding1055,
    "isTagged": _flaxBinding1056,
    "hasFlag": _flaxBinding1057,
    "updateWith": _flaxBinding1060,
    "getSemanticsData": _flaxBinding1061,
    "sendEvent": _flaxBinding1062,
    "debugListChildrenInOrder": _flaxBinding1063,
    "@super:toString": _flaxBinding337,
    "@super:toStringShallow": FlaxInstanceMethod.plain(
      _flaxBinding949,
      flaxStringType,
      _SemanticsNode_super_toStringShallow,
    ),
    "@super:toStringDeep": FlaxInstanceMethod.plain(
      _flaxBinding1047,
      flaxStringType,
      _SemanticsNode_super_toStringDeep,
    ),
    "@super:toStringShort": _flaxBinding336,
    "@super:toDiagnosticsNode": FlaxInstanceMethod.plain(
      _flaxBinding1050,
      _flaxBinding14,
      _SemanticsNode_super_toDiagnosticsNode,
    ),
    "@super:debugDescribeChildren": FlaxInstanceMethod.plain(
      _flaxBinding1052,
      _flaxBinding16,
      _SemanticsNode_super_debugDescribeChildren,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod.shared(
      _flaxBinding48,
      _SemanticsNode_super_debugFillProperties,
    ),
    "@super:visitChildren": FlaxInstanceMethod.shared(
      _flaxBinding153,
      _SemanticsNode_super_visitChildren,
    ),
    "@super:isTagged": FlaxInstanceMethod.shared(
      _flaxBinding54,
      _SemanticsNode_super_isTagged,
    ),
    "@super:hasFlag": FlaxInstanceMethod.shared(
      _flaxBinding137,
      _SemanticsNode_super_hasFlag,
    ),
    "@super:updateWith": FlaxInstanceMethod.plain(
      _flaxBinding1059,
      flaxVoidType,
      _SemanticsNode_super_updateWith,
    ),
    "@super:getSemanticsData": FlaxInstanceMethod.shared(
      _flaxBinding155,
      _SemanticsNode_super_getSemanticsData,
    ),
    "@super:sendEvent": FlaxInstanceMethod.shared(
      _flaxBinding157,
      _SemanticsNode_super_sendEvent,
    ),
    "@super:debugListChildrenInOrder": FlaxInstanceMethod.shared(
      _flaxBinding161,
      _SemanticsNode_super_debugListChildrenInOrder,
    ),
    "@super:get:key": FlaxInstanceMethod.shared(
      _flaxBinding163,
      _SemanticsNode_super_get_key,
    ),
    "@super:get:id": FlaxInstanceMethod.shared(
      flaxIntCall,
      _SemanticsNode_super_get_id,
    ),
    "@super:get:transform": FlaxInstanceMethod.shared(
      _flaxBinding146,
      _SemanticsNode_super_get_transform,
    ),
    "@super:get:rect": FlaxInstanceMethod.shared(
      _flaxBinding141,
      _SemanticsNode_super_get_rect,
    ),
    "@super:get:parentSemanticsClipRect": FlaxInstanceMethod.shared(
      _flaxBinding165,
      _SemanticsNode_super_get_parentSemanticsClipRect,
    ),
    "@super:get:parentPaintClipRect": FlaxInstanceMethod.shared(
      _flaxBinding165,
      _SemanticsNode_super_get_parentPaintClipRect,
    ),
    "@super:get:indexInParent": FlaxInstanceMethod.shared(
      flaxNullableIntCall,
      _SemanticsNode_super_get_indexInParent,
    ),
    "@super:get:isInvisible": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsNode_super_get_isInvisible,
    ),
    "@super:get:isMergedIntoParent": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsNode_super_get_isMergedIntoParent,
    ),
    "@super:get:areUserActionsBlocked": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsNode_super_get_areUserActionsBlocked,
    ),
    "@super:get:isPartOfNodeMerging": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsNode_super_get_isPartOfNodeMerging,
    ),
    "@super:get:mergeAllDescendantsIntoThisNode": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsNode_super_get_mergeAllDescendantsIntoThisNode,
    ),
    "@super:get:hasChildren": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsNode_super_get_hasChildren,
    ),
    "@super:get:childrenCount": FlaxInstanceMethod.shared(
      flaxIntCall,
      _SemanticsNode_super_get_childrenCount,
    ),
    "@super:get:childrenCountInTraversalOrder": FlaxInstanceMethod.shared(
      flaxIntCall,
      _SemanticsNode_super_get_childrenCountInTraversalOrder,
    ),
    "@super:get:owner": FlaxInstanceMethod.shared(
      _flaxBinding167,
      _SemanticsNode_super_get_owner,
    ),
    "@super:get:attached": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsNode_super_get_attached,
    ),
    "@super:get:parent": FlaxInstanceMethod.shared(
      _flaxBinding169,
      _SemanticsNode_super_get_parent,
    ),
    "@super:get:traversalParent": FlaxInstanceMethod.shared(
      _flaxBinding169,
      _SemanticsNode_super_get_traversalParent,
    ),
    "@super:get:depth": FlaxInstanceMethod.shared(
      flaxIntCall,
      _SemanticsNode_super_get_depth,
    ),
    "@super:get:tags": FlaxInstanceMethod.shared(
      _flaxBinding144,
      _SemanticsNode_super_get_tags,
    ),
    "@super:get:flagsCollection": FlaxInstanceMethod.shared(
      _flaxBinding140,
      _SemanticsNode_super_get_flagsCollection,
    ),
    "@super:get:identifier": _flaxBinding656,
    "@super:get:traversalParentIdentifier": _flaxBinding657,
    "@super:get:traversalChildIdentifier": _flaxBinding658,
    "@super:get:label": _flaxBinding660,
    "@super:get:attributedLabel": _flaxBinding661,
    "@super:get:value": _flaxBinding662,
    "@super:get:attributedValue": _flaxBinding663,
    "@super:get:increasedValue": _flaxBinding664,
    "@super:get:attributedIncreasedValue": _flaxBinding665,
    "@super:get:decreasedValue": _flaxBinding666,
    "@super:get:attributedDecreasedValue": _flaxBinding667,
    "@super:get:hint": _flaxBinding668,
    "@super:get:attributedHint": _flaxBinding669,
    "@super:get:tooltip": _flaxBinding670,
    "@super:get:hintOverrides": FlaxInstanceMethod.shared(
      _flaxBinding88,
      _SemanticsNode_super_get_hintOverrides,
    ),
    "@super:get:textDirection": _flaxBinding671,
    "@super:get:sortKey": FlaxInstanceMethod.shared(
      _flaxBinding80,
      _SemanticsNode_super_get_sortKey,
    ),
    "@super:get:textSelection": _flaxBinding675,
    "@super:get:isMultiline": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsNode_super_get_isMultiline,
    ),
    "@super:get:scrollChildCount": _flaxBinding651,
    "@super:get:scrollIndex": _flaxBinding652,
    "@super:get:scrollPosition": _flaxBinding676,
    "@super:get:scrollExtentMax": _flaxBinding677,
    "@super:get:scrollExtentMin": _flaxBinding678,
    "@super:get:platformViewId": _flaxBinding653,
    "@super:get:maxValueLength": _flaxBinding654,
    "@super:get:currentValueLength": _flaxBinding655,
    "@super:get:headingLevel": _flaxBinding673,
    "@super:get:linkUrl": _flaxBinding672,
    "@super:get:role": _flaxBinding659,
    "@super:get:controlsNodes": _flaxBinding679,
    "@super:get:minValue": _flaxBinding684,
    "@super:get:maxValue": _flaxBinding683,
    "@super:get:validationResult": _flaxBinding680,
    "@super:get:hitTestBehavior": _flaxBinding681,
    "@super:get:inputType": _flaxBinding682,
    "@super:set:transform": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding145)],
      flaxVoidType,
      _SemanticsNode_super_set_transform,
    ),
    "@super:set:rect": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxRectType)],
      flaxVoidType,
      _SemanticsNode_super_set_rect,
    ),
    "@super:set:parentSemanticsClipRect": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding164)],
      flaxVoidType,
      _SemanticsNode_super_set_parentSemanticsClipRect,
    ),
    "@super:set:parentPaintClipRect": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding164)],
      flaxVoidType,
      _SemanticsNode_super_set_parentPaintClipRect,
    ),
    "@super:set:indexInParent": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableIntType)],
      flaxVoidType,
      _SemanticsNode_super_set_indexInParent,
    ),
    "@super:set:isMergedIntoParent": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsNode_super_set_isMergedIntoParent,
    ),
    "@super:set:areUserActionsBlocked": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _SemanticsNode_super_set_areUserActionsBlocked,
    ),
    "@super:set:traversalParent": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding168)],
      flaxVoidType,
      _SemanticsNode_super_set_traversalParent,
    ),
    "@super:set:tags": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding143)],
      flaxVoidType,
      _SemanticsNode_super_set_tags,
    ),
  },
  constructors: {
    "": _flaxBinding1064,
    "root": _flaxBinding1066,
    "@implementation": _flaxBinding1064,
    "@implementation:root": _flaxBinding1066,
  },
  create: _createSemanticsNode,
  matches: _isSemanticsNode,
  setters: [
    _flaxBinding1036,
    _flaxBinding1037,
    _flaxBinding1038,
    _flaxBinding1039,
    _flaxBinding1040,
    _flaxBinding1041,
    _flaxBinding1042,
    _flaxBinding1043,
    _flaxBinding1044,
  ],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:DiagnosticableTreeMixin",
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding344,
    _flaxBinding960,
    _flaxBinding1068,
    _flaxBinding342,
    _flaxBinding1070,
    _flaxBinding1072,
    _flaxBinding347,
    _flaxBinding1073,
    _flaxBinding1074,
    _flaxBinding934,
    _flaxBinding1076,
    _flaxBinding1077,
    _flaxBinding1078,
    _flaxBinding1079,
    _flaxBinding1080,
    _flaxBinding1081,
    _flaxBinding941,
    _flaxBinding939,
    _flaxBinding1082,
    _flaxBinding1083,
    _flaxBinding725,
    _flaxBinding1084,
    _flaxBinding1085,
    _flaxBinding1086,
    _flaxBinding1087,
    _flaxBinding1088,
    _flaxBinding1089,
    _flaxBinding1090,
    _flaxBinding1091,
    _flaxBinding1092,
    _flaxBinding1093,
    _flaxBinding1094,
    _flaxBinding1095,
    _flaxBinding1096,
    _flaxBinding940,
    _flaxBinding937,
    _flaxBinding733,
    _flaxBinding734,
    _flaxBinding735,
    _flaxBinding737,
    _flaxBinding738,
    _flaxBinding739,
    _flaxBinding740,
    _flaxBinding741,
    _flaxBinding742,
    _flaxBinding743,
    _flaxBinding744,
    _flaxBinding745,
    _flaxBinding746,
    _flaxBinding747,
    _flaxBinding748,
    _flaxBinding753,
    _flaxBinding724,
    _flaxBinding778,
    _flaxBinding1097,
    _flaxBinding726,
    _flaxBinding727,
    _flaxBinding779,
    _flaxBinding780,
    _flaxBinding781,
    _flaxBinding728,
    _flaxBinding729,
    _flaxBinding730,
    _flaxBinding768,
    _flaxBinding766,
    _flaxBinding736,
    _flaxBinding782,
    _flaxBinding787,
    _flaxBinding786,
    _flaxBinding783,
    _flaxBinding784,
    _flaxBinding785,
    _flaxBinding1098,
    _flaxBinding1099,
    _flaxBinding1100,
    _flaxBinding1101,
    _flaxBinding822,
    _flaxBinding1102,
    _flaxBinding1103,
    _flaxBinding1104,
    _flaxBinding1105,
  ]),
);
const _flaxBinding1107 = FlaxGetter.plain(
  "hasListeners",
  flaxBoolType,
  _SemanticsOwner_hasListeners,
);
const _flaxBinding1108 = FlaxGetter.plain(
  "onSemanticsUpdate",
  _flaxBinding179,
  _SemanticsOwner_onSemanticsUpdate,
);
const _flaxBinding1109 = FlaxGetter.plain(
  "rootSemanticsNode",
  _flaxBinding168,
  _SemanticsOwner_rootSemanticsNode,
);
const _flaxBinding1110 = FlaxInstanceMethod.shared(
  _flaxBinding175,
  _SemanticsOwner_addListener,
);
const _flaxBinding1111 = FlaxInstanceMethod.shared(
  _flaxBinding175,
  _SemanticsOwner_removeListener,
);
const _flaxBinding1112 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _SemanticsOwner_dispose,
);
const _flaxBinding1113 = FlaxInstanceMethod.shared(
  _flaxBinding176,
  _SemanticsOwner_getSemanticsNode,
);
const _flaxBinding1114 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _SemanticsOwner_sendSemanticsUpdate,
);
const _flaxBinding1115 = <FlaxParameter>[
  FlaxParameter.required("id", flaxIntType),
  FlaxParameter.required("action", _flaxBinding49),
  FlaxParameter("args", flaxNullableAnyType, required: false),
];
const _flaxBinding1116 = FlaxInstanceMethod.plain(
  _flaxBinding1115,
  flaxVoidType,
  _SemanticsOwner_performAction,
);
const _flaxBinding1117 = <FlaxParameter>[
  FlaxParameter.required("position", flaxOffsetType),
  FlaxParameter.required("action", _flaxBinding49),
  FlaxParameter("args", flaxNullableAnyType, required: false),
];
const _flaxBinding1118 = FlaxInstanceMethod.plain(
  _flaxBinding1117,
  flaxVoidType,
  _SemanticsOwner_performActionAt,
);
const _flaxBinding1119 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsOwner_toString,
);
const _flaxBinding1120 = <FlaxParameter>[
  FlaxParameter.required("onSemanticsUpdate", _flaxBinding179),
];
const _flaxBinding1121 = FlaxProxyMember(
  "addListener",
  0,
  _flaxBinding175,
  hasSuper: true,
);
const _flaxBinding1122 = FlaxProxyMember(
  "removeListener",
  0,
  _flaxBinding175,
  hasSuper: true,
);
const _flaxBinding1123 = FlaxProxyMember(
  "dispose",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding1124 = FlaxProxyMember(
  "getSemanticsNode",
  0,
  _flaxBinding176,
  hasSuper: true,
);
const _flaxBinding1125 = FlaxProxyMember(
  "sendSemanticsUpdate",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding1126 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("id", flaxIntType),
    FlaxCallbackParameter.plain("action", _flaxBinding49),
    FlaxCallbackParameter.plain("args", flaxNullableAnyType, required: false),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:id:int:,p:r:action:object:flax.core/sdk_dart_ui#type:SemanticsAction,p:o:args:any?:)->void:",
);
const _flaxBinding1127 = FlaxProxyMember(
  "performAction",
  0,
  _flaxBinding1126,
  hasSuper: true,
);
const _flaxBinding1128 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("position", flaxOffsetType),
    FlaxCallbackParameter.plain("action", _flaxBinding49),
    FlaxCallbackParameter.plain("args", flaxNullableAnyType, required: false),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:position:object:flax.core/flutter#type:Offset,p:r:action:object:flax.core/sdk_dart_ui#type:SemanticsAction,p:o:args:any?:)->void:",
);
const _flaxBinding1129 = FlaxProxyMember(
  "performActionAt",
  0,
  _flaxBinding1128,
  hasSuper: true,
);
const _flaxBinding1130 = FlaxProxyMember(
  "onSemanticsUpdate",
  1,
  _flaxBinding180,
  hasSuper: true,
);
const _flaxBinding1131 = FlaxProxyMember(
  "rootSemanticsNode",
  1,
  _flaxBinding169,
  hasSuper: true,
);
const _flaxBinding1132 = FlaxProxyMember(
  "hasListeners",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1133 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsOwner",
  [_flaxBinding1107, _flaxBinding1108, _flaxBinding1109],
  {
    "addListener": _flaxBinding1110,
    "removeListener": _flaxBinding1111,
    "dispose": _flaxBinding1112,
    "getSemanticsNode": _flaxBinding1113,
    "sendSemanticsUpdate": _flaxBinding1114,
    "performAction": _flaxBinding1116,
    "performActionAt": _flaxBinding1118,
    "toString": _flaxBinding1119,
    "@super:addListener": FlaxInstanceMethod.shared(
      _flaxBinding175,
      _SemanticsOwner_super_addListener,
    ),
    "@super:removeListener": FlaxInstanceMethod.shared(
      _flaxBinding175,
      _SemanticsOwner_super_removeListener,
    ),
    "@super:dispose": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _SemanticsOwner_super_dispose,
    ),
    "@super:getSemanticsNode": FlaxInstanceMethod.shared(
      _flaxBinding176,
      _SemanticsOwner_super_getSemanticsNode,
    ),
    "@super:sendSemanticsUpdate": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _SemanticsOwner_super_sendSemanticsUpdate,
    ),
    "@super:performAction": FlaxInstanceMethod.plain(
      _flaxBinding1115,
      flaxVoidType,
      _SemanticsOwner_super_performAction,
    ),
    "@super:performActionAt": FlaxInstanceMethod.plain(
      _flaxBinding1117,
      flaxVoidType,
      _SemanticsOwner_super_performActionAt,
    ),
    "@super:toString": _flaxBinding199,
    "@super:get:onSemanticsUpdate": FlaxInstanceMethod.shared(
      _flaxBinding180,
      _SemanticsOwner_super_get_onSemanticsUpdate,
    ),
    "@super:get:rootSemanticsNode": FlaxInstanceMethod.shared(
      _flaxBinding169,
      _SemanticsOwner_super_get_rootSemanticsNode,
    ),
    "@super:get:hasListeners": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsOwner_super_get_hasListeners,
    ),
  },
  constructors: {"": _flaxBinding1120, "@implementation": _flaxBinding1120},
  create: _createSemanticsOwner,
  matches: _isSemanticsOwner,
  setters: [],
  supertypes: [
    "flax.core/sdk_foundation#type:ChangeNotifier",
    "dart:core::Object",
    "flax.core/flutter#type:Listenable",
  ],
  disposeMethod: "dispose",
  listenerPairs: {"addListener": "removeListener"},
  proxy: FlaxProxyBinding([
    _flaxBinding1121,
    _flaxBinding1122,
    _flaxBinding1123,
    _flaxBinding1124,
    _flaxBinding1125,
    _flaxBinding1127,
    _flaxBinding1129,
    _flaxBinding205,
    _flaxBinding1130,
    _flaxBinding1131,
    _flaxBinding1132,
  ]),
);
const _flaxBinding1134 = FlaxGetter.plain(
  "enabled",
  flaxNullableBoolType,
  _SemanticsProperties_enabled,
);
const _flaxBinding1135 = FlaxGetter.plain(
  "checked",
  flaxNullableBoolType,
  _SemanticsProperties_checked,
);
const _flaxBinding1136 = FlaxGetter.plain(
  "mixed",
  flaxNullableBoolType,
  _SemanticsProperties_mixed,
);
const _flaxBinding1137 = FlaxGetter.plain(
  "expanded",
  flaxNullableBoolType,
  _SemanticsProperties_expanded,
);
const _flaxBinding1138 = FlaxGetter.plain(
  "toggled",
  flaxNullableBoolType,
  _SemanticsProperties_toggled,
);
const _flaxBinding1139 = FlaxGetter.plain(
  "selected",
  flaxNullableBoolType,
  _SemanticsProperties_selected,
);
const _flaxBinding1140 = FlaxGetter.plain(
  "button",
  flaxNullableBoolType,
  _SemanticsProperties_button,
);
const _flaxBinding1141 = FlaxGetter.plain(
  "link",
  flaxNullableBoolType,
  _SemanticsProperties_link,
);
const _flaxBinding1142 = FlaxGetter.plain(
  "header",
  flaxNullableBoolType,
  _SemanticsProperties_header,
);
const _flaxBinding1143 = FlaxGetter.plain(
  "textField",
  flaxNullableBoolType,
  _SemanticsProperties_textField,
);
const _flaxBinding1144 = FlaxGetter.plain(
  "slider",
  flaxNullableBoolType,
  _SemanticsProperties_slider,
);
const _flaxBinding1145 = FlaxGetter.plain(
  "keyboardKey",
  flaxNullableBoolType,
  _SemanticsProperties_keyboardKey,
);
const _flaxBinding1146 = FlaxGetter.plain(
  "readOnly",
  flaxNullableBoolType,
  _SemanticsProperties_readOnly,
);
const _flaxBinding1147 = FlaxGetter.plain(
  "focusable",
  flaxNullableBoolType,
  _SemanticsProperties_focusable,
);
const _flaxBinding1148 = FlaxGetter.plain(
  "focused",
  flaxNullableBoolType,
  _SemanticsProperties_focused,
);
const _flaxBinding1149 = FlaxGetter.plain(
  "accessibilityFocusBlockType",
  _flaxBinding181,
  _SemanticsProperties_accessibilityFocusBlockType,
);
const _flaxBinding1150 = FlaxGetter.plain(
  "inMutuallyExclusiveGroup",
  flaxNullableBoolType,
  _SemanticsProperties_inMutuallyExclusiveGroup,
);
const _flaxBinding1151 = FlaxGetter.plain(
  "hidden",
  flaxNullableBoolType,
  _SemanticsProperties_hidden,
);
const _flaxBinding1152 = FlaxGetter.plain(
  "obscured",
  flaxNullableBoolType,
  _SemanticsProperties_obscured,
);
const _flaxBinding1153 = FlaxGetter.plain(
  "multiline",
  flaxNullableBoolType,
  _SemanticsProperties_multiline,
);
const _flaxBinding1154 = FlaxGetter.plain(
  "scopesRoute",
  flaxNullableBoolType,
  _SemanticsProperties_scopesRoute,
);
const _flaxBinding1155 = FlaxGetter.plain(
  "namesRoute",
  flaxNullableBoolType,
  _SemanticsProperties_namesRoute,
);
const _flaxBinding1156 = FlaxGetter.plain(
  "image",
  flaxNullableBoolType,
  _SemanticsProperties_image,
);
const _flaxBinding1157 = FlaxGetter.plain(
  "liveRegion",
  flaxNullableBoolType,
  _SemanticsProperties_liveRegion,
);
const _flaxBinding1158 = FlaxGetter.plain(
  "isRequired",
  flaxNullableBoolType,
  _SemanticsProperties_isRequired,
);
const _flaxBinding1159 = FlaxGetter.plain(
  "maxValueLength",
  flaxNullableIntType,
  _SemanticsProperties_maxValueLength,
);
const _flaxBinding1160 = FlaxGetter.plain(
  "currentValueLength",
  flaxNullableIntType,
  _SemanticsProperties_currentValueLength,
);
const _flaxBinding1161 = FlaxGetter.plain(
  "identifier",
  flaxNullableStringType,
  _SemanticsProperties_identifier,
);
const _flaxBinding1162 = FlaxGetter.plain(
  "traversalParentIdentifier",
  flaxNullableAnyType,
  _SemanticsProperties_traversalParentIdentifier,
);
const _flaxBinding1163 = FlaxGetter.plain(
  "traversalChildIdentifier",
  flaxNullableAnyType,
  _SemanticsProperties_traversalChildIdentifier,
);
const _flaxBinding1164 = FlaxGetter.plain(
  "label",
  flaxNullableStringType,
  _SemanticsProperties_label,
);
const _flaxBinding1165 = FlaxGetter.plain(
  "attributedLabel",
  _flaxBinding23,
  _SemanticsProperties_attributedLabel,
);
const _flaxBinding1166 = FlaxGetter.plain(
  "value",
  flaxNullableStringType,
  _SemanticsProperties_value,
);
const _flaxBinding1167 = FlaxGetter.plain(
  "attributedValue",
  _flaxBinding23,
  _SemanticsProperties_attributedValue,
);
const _flaxBinding1168 = FlaxGetter.plain(
  "increasedValue",
  flaxNullableStringType,
  _SemanticsProperties_increasedValue,
);
const _flaxBinding1169 = FlaxGetter.plain(
  "attributedIncreasedValue",
  _flaxBinding23,
  _SemanticsProperties_attributedIncreasedValue,
);
const _flaxBinding1170 = FlaxGetter.plain(
  "decreasedValue",
  flaxNullableStringType,
  _SemanticsProperties_decreasedValue,
);
const _flaxBinding1171 = FlaxGetter.plain(
  "attributedDecreasedValue",
  _flaxBinding23,
  _SemanticsProperties_attributedDecreasedValue,
);
const _flaxBinding1172 = FlaxGetter.plain(
  "hint",
  flaxNullableStringType,
  _SemanticsProperties_hint,
);
const _flaxBinding1173 = FlaxGetter.plain(
  "attributedHint",
  _flaxBinding23,
  _SemanticsProperties_attributedHint,
);
const _flaxBinding1174 = FlaxGetter.plain(
  "tooltip",
  flaxNullableStringType,
  _SemanticsProperties_tooltip,
);
const _flaxBinding1175 = FlaxGetter.plain(
  "headingLevel",
  flaxNullableIntType,
  _SemanticsProperties_headingLevel,
);
const _flaxBinding1176 = FlaxGetter.plain(
  "hintOverrides",
  _flaxBinding87,
  _SemanticsProperties_hintOverrides,
);
const _flaxBinding1177 = FlaxGetter.plain(
  "textDirection",
  _flaxBinding89,
  _SemanticsProperties_textDirection,
);
const _flaxBinding1178 = FlaxGetter.plain(
  "sortKey",
  _flaxBinding79,
  _SemanticsProperties_sortKey,
);
const _flaxBinding1179 = FlaxGetter.plain(
  "tagForChildren",
  _flaxBinding183,
  _SemanticsProperties_tagForChildren,
);
const _flaxBinding1180 = FlaxGetter.plain(
  "linkUrl",
  _flaxBinding93,
  _SemanticsProperties_linkUrl,
);
const _flaxBinding1181 = FlaxGetter.plain(
  "onTap",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onTap,
);
const _flaxBinding1182 = FlaxGetter.plain(
  "onLongPress",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onLongPress,
);
const _flaxBinding1183 = FlaxGetter.plain(
  "onScrollLeft",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onScrollLeft,
);
const _flaxBinding1184 = FlaxGetter.plain(
  "onScrollRight",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onScrollRight,
);
const _flaxBinding1185 = FlaxGetter.plain(
  "onScrollUp",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onScrollUp,
);
const _flaxBinding1186 = FlaxGetter.plain(
  "onScrollDown",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onScrollDown,
);
const _flaxBinding1187 = FlaxGetter.plain(
  "onIncrease",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onIncrease,
);
const _flaxBinding1188 = FlaxGetter.plain(
  "onDecrease",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onDecrease,
);
const _flaxBinding1189 = FlaxGetter.plain(
  "onCopy",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onCopy,
);
const _flaxBinding1190 = FlaxGetter.plain(
  "onCut",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onCut,
);
const _flaxBinding1191 = FlaxGetter.plain(
  "onPaste",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onPaste,
);
const _flaxBinding1192 = FlaxGetter.plain(
  "onMoveCursorForwardByCharacter",
  _flaxBinding67,
  _SemanticsProperties_onMoveCursorForwardByCharacter,
);
const _flaxBinding1193 = FlaxGetter.plain(
  "onMoveCursorBackwardByCharacter",
  _flaxBinding67,
  _SemanticsProperties_onMoveCursorBackwardByCharacter,
);
const _flaxBinding1194 = FlaxGetter.plain(
  "onMoveCursorForwardByWord",
  _flaxBinding67,
  _SemanticsProperties_onMoveCursorForwardByWord,
);
const _flaxBinding1195 = FlaxGetter.plain(
  "onMoveCursorBackwardByWord",
  _flaxBinding67,
  _SemanticsProperties_onMoveCursorBackwardByWord,
);
const _flaxBinding1196 = FlaxGetter.plain(
  "onSetSelection",
  _flaxBinding71,
  _SemanticsProperties_onSetSelection,
);
const _flaxBinding1197 = FlaxGetter.plain(
  "onSetText",
  _flaxBinding74,
  _SemanticsProperties_onSetText,
);
const _flaxBinding1198 = FlaxGetter.plain(
  "onDidGainAccessibilityFocus",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onDidGainAccessibilityFocus,
);
const _flaxBinding1199 = FlaxGetter.plain(
  "onDidLoseAccessibilityFocus",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onDidLoseAccessibilityFocus,
);
const _flaxBinding1200 = FlaxGetter.plain(
  "onFocus",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onFocus,
);
const _flaxBinding1201 = FlaxGetter.plain(
  "onDismiss",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onDismiss,
);
const _flaxBinding1202 = FlaxGetter.plain(
  "onExpand",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onExpand,
);
const _flaxBinding1203 = FlaxGetter.plain(
  "onCollapse",
  flaxVoidNullableCallbackType,
  _SemanticsProperties_onCollapse,
);
const _flaxBinding1204 = FlaxGetter.plain(
  "customSemanticsActions",
  _flaxBinding185,
  _SemanticsProperties_customSemanticsActions,
);
const _flaxBinding1205 = FlaxGetter.plain(
  "role",
  _flaxBinding187,
  _SemanticsProperties_role,
);
const _flaxBinding1206 = FlaxGetter.plain(
  "controlsNodes",
  _flaxBinding98,
  _SemanticsProperties_controlsNodes,
);
const _flaxBinding1207 = FlaxGetter.plain(
  "validationResult",
  _flaxBinding100,
  _SemanticsProperties_validationResult,
);
const _flaxBinding1208 = FlaxGetter.plain(
  "hitTestBehavior",
  _flaxBinding189,
  _SemanticsProperties_hitTestBehavior,
);
const _flaxBinding1209 = FlaxGetter.plain(
  "inputType",
  _flaxBinding191,
  _SemanticsProperties_inputType,
);
const _flaxBinding1210 = FlaxGetter.plain(
  "maxValue",
  flaxNullableStringType,
  _SemanticsProperties_maxValue,
);
const _flaxBinding1211 = FlaxGetter.plain(
  "minValue",
  flaxNullableStringType,
  _SemanticsProperties_minValue,
);
const _flaxBinding1212 = FlaxInstanceMethod.plain(
  _flaxBinding949,
  flaxStringType,
  _SemanticsProperties_toStringShallow,
);
const _flaxBinding1213 = FlaxInstanceMethod.plain(
  _flaxBinding951,
  flaxStringType,
  _SemanticsProperties_toStringDeep,
);
const _flaxBinding1214 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsProperties_toStringShort,
);
const _flaxBinding1215 = FlaxInstanceMethod.plain(
  _flaxBinding332,
  _flaxBinding14,
  _SemanticsProperties_toDiagnosticsNode,
);
const _flaxBinding1216 = FlaxInstanceMethod.shared(
  _flaxBinding17,
  _SemanticsProperties_debugDescribeChildren,
);
const _flaxBinding1217 = FlaxInstanceMethod.shared(
  _flaxBinding48,
  _SemanticsProperties_debugFillProperties,
);
const _flaxBinding1218 = FlaxInstanceMethod.plain(
  _flaxBinding330,
  flaxStringType,
  _SemanticsProperties_toString,
);
const _flaxBinding1219 = <FlaxParameter>[
  FlaxParameter("enabled", flaxNullableBoolType, required: false),
  FlaxParameter("checked", flaxNullableBoolType, required: false),
  FlaxParameter("mixed", flaxNullableBoolType, required: false),
  FlaxParameter("expanded", flaxNullableBoolType, required: false),
  FlaxParameter("selected", flaxNullableBoolType, required: false),
  FlaxParameter("toggled", flaxNullableBoolType, required: false),
  FlaxParameter("button", flaxNullableBoolType, required: false),
  FlaxParameter("link", flaxNullableBoolType, required: false),
  FlaxParameter("linkUrl", _flaxBinding93, required: false),
  FlaxParameter("header", flaxNullableBoolType, required: false),
  FlaxParameter("headingLevel", flaxNullableIntType, required: false),
  FlaxParameter("textField", flaxNullableBoolType, required: false),
  FlaxParameter("slider", flaxNullableBoolType, required: false),
  FlaxParameter("keyboardKey", flaxNullableBoolType, required: false),
  FlaxParameter("readOnly", flaxNullableBoolType, required: false),
  FlaxParameter("focusable", flaxNullableBoolType, required: false),
  FlaxParameter("focused", flaxNullableBoolType, required: false),
  FlaxParameter(
    "accessibilityFocusBlockType",
    _flaxBinding181,
    required: false,
  ),
  FlaxParameter(
    "inMutuallyExclusiveGroup",
    flaxNullableBoolType,
    required: false,
  ),
  FlaxParameter("hidden", flaxNullableBoolType, required: false),
  FlaxParameter("obscured", flaxNullableBoolType, required: false),
  FlaxParameter("multiline", flaxNullableBoolType, required: false),
  FlaxParameter("scopesRoute", flaxNullableBoolType, required: false),
  FlaxParameter("namesRoute", flaxNullableBoolType, required: false),
  FlaxParameter("image", flaxNullableBoolType, required: false),
  FlaxParameter("liveRegion", flaxNullableBoolType, required: false),
  FlaxParameter("isRequired", flaxNullableBoolType, required: false),
  FlaxParameter("maxValueLength", flaxNullableIntType, required: false),
  FlaxParameter("currentValueLength", flaxNullableIntType, required: false),
  FlaxParameter("identifier", flaxNullableStringType, required: false),
  FlaxParameter(
    "traversalParentIdentifier",
    flaxNullableAnyType,
    required: false,
  ),
  FlaxParameter(
    "traversalChildIdentifier",
    flaxNullableAnyType,
    required: false,
  ),
  FlaxParameter("label", flaxNullableStringType, required: false),
  FlaxParameter("attributedLabel", _flaxBinding23, required: false),
  FlaxParameter("value", flaxNullableStringType, required: false),
  FlaxParameter("attributedValue", _flaxBinding23, required: false),
  FlaxParameter("increasedValue", flaxNullableStringType, required: false),
  FlaxParameter("attributedIncreasedValue", _flaxBinding23, required: false),
  FlaxParameter("decreasedValue", flaxNullableStringType, required: false),
  FlaxParameter("attributedDecreasedValue", _flaxBinding23, required: false),
  FlaxParameter("hint", flaxNullableStringType, required: false),
  FlaxParameter("tooltip", flaxNullableStringType, required: false),
  FlaxParameter("attributedHint", _flaxBinding23, required: false),
  FlaxParameter("hintOverrides", _flaxBinding87, required: false),
  FlaxParameter("textDirection", _flaxBinding89, required: false),
  FlaxParameter("sortKey", _flaxBinding79, required: false),
  FlaxParameter("tagForChildren", _flaxBinding183, required: false),
  FlaxParameter("role", _flaxBinding187, required: false),
  FlaxParameter("controlsNodes", _flaxBinding98, required: false),
  FlaxParameter("inputType", _flaxBinding191, required: false),
  FlaxParameter(
    "validationResult",
    _flaxBinding100,
    required: false,
    defaultValue: api1.SemanticsValidationResult.none,
  ),
  FlaxParameter("hitTestBehavior", _flaxBinding189, required: false),
  FlaxParameter("onTap", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onLongPress", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onScrollLeft", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onScrollRight", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onScrollUp", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onScrollDown", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onIncrease", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onDecrease", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onCopy", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onCut", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onPaste", flaxVoidNullableCallbackType, required: false),
  FlaxParameter(
    "onMoveCursorForwardByCharacter",
    _flaxBinding67,
    required: false,
  ),
  FlaxParameter(
    "onMoveCursorBackwardByCharacter",
    _flaxBinding67,
    required: false,
  ),
  FlaxParameter("onMoveCursorForwardByWord", _flaxBinding67, required: false),
  FlaxParameter("onMoveCursorBackwardByWord", _flaxBinding67, required: false),
  FlaxParameter("onSetSelection", _flaxBinding71, required: false),
  FlaxParameter("onSetText", _flaxBinding74, required: false),
  FlaxParameter(
    "onDidGainAccessibilityFocus",
    flaxVoidNullableCallbackType,
    required: false,
  ),
  FlaxParameter(
    "onDidLoseAccessibilityFocus",
    flaxVoidNullableCallbackType,
    required: false,
  ),
  FlaxParameter("onFocus", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onDismiss", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onExpand", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onCollapse", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("customSemanticsActions", _flaxBinding185, required: false),
  FlaxParameter("minValue", flaxNullableStringType, required: false),
  FlaxParameter("maxValue", flaxNullableStringType, required: false),
];
const _flaxBinding1220 = FlaxProxyMember(
  "enabled",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1221 = FlaxProxyMember(
  "checked",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1222 = FlaxProxyMember(
  "mixed",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1223 = FlaxProxyMember(
  "expanded",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1224 = FlaxProxyMember(
  "toggled",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1225 = FlaxProxyMember(
  "selected",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1226 = FlaxProxyMember(
  "button",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1227 = FlaxProxyMember(
  "link",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1228 = FlaxProxyMember(
  "header",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1229 = FlaxProxyMember(
  "textField",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1230 = FlaxProxyMember(
  "slider",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1231 = FlaxProxyMember(
  "keyboardKey",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1232 = FlaxProxyMember(
  "readOnly",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1233 = FlaxProxyMember(
  "focusable",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1234 = FlaxProxyMember(
  "focused",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1235 = FlaxProxyMember(
  "accessibilityFocusBlockType",
  1,
  _flaxBinding182,
  hasSuper: true,
);
const _flaxBinding1236 = FlaxProxyMember(
  "inMutuallyExclusiveGroup",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1237 = FlaxProxyMember(
  "hidden",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1238 = FlaxProxyMember(
  "obscured",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1239 = FlaxProxyMember(
  "multiline",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1240 = FlaxProxyMember(
  "scopesRoute",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1241 = FlaxProxyMember(
  "namesRoute",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1242 = FlaxProxyMember(
  "image",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1243 = FlaxProxyMember(
  "liveRegion",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding1244 = FlaxProxyMember(
  "identifier",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding1245 = FlaxProxyMember(
  "attributedLabel",
  1,
  _flaxBinding24,
  hasSuper: true,
);
const _flaxBinding1246 = FlaxProxyMember(
  "value",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding1247 = FlaxProxyMember(
  "attributedValue",
  1,
  _flaxBinding24,
  hasSuper: true,
);
const _flaxBinding1248 = FlaxProxyMember(
  "increasedValue",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding1249 = FlaxProxyMember(
  "attributedIncreasedValue",
  1,
  _flaxBinding24,
  hasSuper: true,
);
const _flaxBinding1250 = FlaxProxyMember(
  "decreasedValue",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding1251 = FlaxProxyMember(
  "attributedDecreasedValue",
  1,
  _flaxBinding24,
  hasSuper: true,
);
const _flaxBinding1252 = FlaxProxyMember(
  "attributedHint",
  1,
  _flaxBinding24,
  hasSuper: true,
);
const _flaxBinding1253 = FlaxProxyMember(
  "headingLevel",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding1254 = FlaxProxyMember(
  "tagForChildren",
  1,
  _flaxBinding184,
  hasSuper: true,
);
const _flaxBinding1255 = FlaxProxyMember(
  "customSemanticsActions",
  1,
  _flaxBinding186,
  hasSuper: true,
);
const _flaxBinding1256 = FlaxProxyMember(
  "role",
  1,
  _flaxBinding188,
  hasSuper: true,
);
const _flaxBinding1257 = FlaxProxyMember(
  "hitTestBehavior",
  1,
  _flaxBinding190,
  hasSuper: true,
);
const _flaxBinding1258 = FlaxProxyMember(
  "inputType",
  1,
  _flaxBinding192,
  hasSuper: true,
);
const _flaxBinding1259 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsProperties",
  [
    _flaxBinding1134,
    _flaxBinding1135,
    _flaxBinding1136,
    _flaxBinding1137,
    _flaxBinding1138,
    _flaxBinding1139,
    _flaxBinding1140,
    _flaxBinding1141,
    _flaxBinding1142,
    _flaxBinding1143,
    _flaxBinding1144,
    _flaxBinding1145,
    _flaxBinding1146,
    _flaxBinding1147,
    _flaxBinding1148,
    _flaxBinding1149,
    _flaxBinding1150,
    _flaxBinding1151,
    _flaxBinding1152,
    _flaxBinding1153,
    _flaxBinding1154,
    _flaxBinding1155,
    _flaxBinding1156,
    _flaxBinding1157,
    _flaxBinding1158,
    _flaxBinding1159,
    _flaxBinding1160,
    _flaxBinding1161,
    _flaxBinding1162,
    _flaxBinding1163,
    _flaxBinding1164,
    _flaxBinding1165,
    _flaxBinding1166,
    _flaxBinding1167,
    _flaxBinding1168,
    _flaxBinding1169,
    _flaxBinding1170,
    _flaxBinding1171,
    _flaxBinding1172,
    _flaxBinding1173,
    _flaxBinding1174,
    _flaxBinding1175,
    _flaxBinding1176,
    _flaxBinding1177,
    _flaxBinding1178,
    _flaxBinding1179,
    _flaxBinding1180,
    _flaxBinding1181,
    _flaxBinding1182,
    _flaxBinding1183,
    _flaxBinding1184,
    _flaxBinding1185,
    _flaxBinding1186,
    _flaxBinding1187,
    _flaxBinding1188,
    _flaxBinding1189,
    _flaxBinding1190,
    _flaxBinding1191,
    _flaxBinding1192,
    _flaxBinding1193,
    _flaxBinding1194,
    _flaxBinding1195,
    _flaxBinding1196,
    _flaxBinding1197,
    _flaxBinding1198,
    _flaxBinding1199,
    _flaxBinding1200,
    _flaxBinding1201,
    _flaxBinding1202,
    _flaxBinding1203,
    _flaxBinding1204,
    _flaxBinding1205,
    _flaxBinding1206,
    _flaxBinding1207,
    _flaxBinding1208,
    _flaxBinding1209,
    _flaxBinding1210,
    _flaxBinding1211,
  ],
  {
    "toStringShallow": _flaxBinding1212,
    "toStringDeep": _flaxBinding1213,
    "toStringShort": _flaxBinding1214,
    "toDiagnosticsNode": _flaxBinding1215,
    "debugDescribeChildren": _flaxBinding1216,
    "debugFillProperties": _flaxBinding1217,
    "toString": _flaxBinding1218,
    "@super:toStringShallow": FlaxInstanceMethod.plain(
      _flaxBinding949,
      flaxStringType,
      _SemanticsProperties_super_toStringShallow,
    ),
    "@super:toStringDeep": FlaxInstanceMethod.plain(
      _flaxBinding951,
      flaxStringType,
      _SemanticsProperties_super_toStringDeep,
    ),
    "@super:toStringShort": _flaxBinding336,
    "@super:toDiagnosticsNode": FlaxInstanceMethod.plain(
      _flaxBinding332,
      _flaxBinding14,
      _SemanticsProperties_super_toDiagnosticsNode,
    ),
    "@super:debugDescribeChildren": FlaxInstanceMethod.shared(
      _flaxBinding17,
      _SemanticsProperties_super_debugDescribeChildren,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod.shared(
      _flaxBinding48,
      _SemanticsProperties_super_debugFillProperties,
    ),
    "@super:toString": _flaxBinding337,
    "@super:get:enabled": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_enabled,
    ),
    "@super:get:checked": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_checked,
    ),
    "@super:get:mixed": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_mixed,
    ),
    "@super:get:expanded": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_expanded,
    ),
    "@super:get:toggled": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_toggled,
    ),
    "@super:get:selected": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_selected,
    ),
    "@super:get:button": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_button,
    ),
    "@super:get:link": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_link,
    ),
    "@super:get:header": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_header,
    ),
    "@super:get:textField": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_textField,
    ),
    "@super:get:slider": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_slider,
    ),
    "@super:get:keyboardKey": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_keyboardKey,
    ),
    "@super:get:readOnly": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_readOnly,
    ),
    "@super:get:focusable": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_focusable,
    ),
    "@super:get:focused": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_focused,
    ),
    "@super:get:accessibilityFocusBlockType": FlaxInstanceMethod.shared(
      _flaxBinding182,
      _SemanticsProperties_super_get_accessibilityFocusBlockType,
    ),
    "@super:get:inMutuallyExclusiveGroup": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_inMutuallyExclusiveGroup,
    ),
    "@super:get:hidden": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_hidden,
    ),
    "@super:get:obscured": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_obscured,
    ),
    "@super:get:multiline": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_multiline,
    ),
    "@super:get:scopesRoute": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_scopesRoute,
    ),
    "@super:get:namesRoute": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_namesRoute,
    ),
    "@super:get:image": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_image,
    ),
    "@super:get:liveRegion": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _SemanticsProperties_super_get_liveRegion,
    ),
    "@super:get:isRequired": _flaxBinding674,
    "@super:get:maxValueLength": _flaxBinding654,
    "@super:get:currentValueLength": _flaxBinding655,
    "@super:get:identifier": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _SemanticsProperties_super_get_identifier,
    ),
    "@super:get:traversalParentIdentifier": _flaxBinding657,
    "@super:get:traversalChildIdentifier": _flaxBinding658,
    "@super:get:label": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _SemanticsProperties_super_get_label,
    ),
    "@super:get:attributedLabel": FlaxInstanceMethod.shared(
      _flaxBinding24,
      _SemanticsProperties_super_get_attributedLabel,
    ),
    "@super:get:value": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _SemanticsProperties_super_get_value,
    ),
    "@super:get:attributedValue": FlaxInstanceMethod.shared(
      _flaxBinding24,
      _SemanticsProperties_super_get_attributedValue,
    ),
    "@super:get:increasedValue": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _SemanticsProperties_super_get_increasedValue,
    ),
    "@super:get:attributedIncreasedValue": FlaxInstanceMethod.shared(
      _flaxBinding24,
      _SemanticsProperties_super_get_attributedIncreasedValue,
    ),
    "@super:get:decreasedValue": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _SemanticsProperties_super_get_decreasedValue,
    ),
    "@super:get:attributedDecreasedValue": FlaxInstanceMethod.shared(
      _flaxBinding24,
      _SemanticsProperties_super_get_attributedDecreasedValue,
    ),
    "@super:get:hint": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _SemanticsProperties_super_get_hint,
    ),
    "@super:get:attributedHint": FlaxInstanceMethod.shared(
      _flaxBinding24,
      _SemanticsProperties_super_get_attributedHint,
    ),
    "@super:get:tooltip": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _SemanticsProperties_super_get_tooltip,
    ),
    "@super:get:headingLevel": FlaxInstanceMethod.shared(
      flaxNullableIntCall,
      _SemanticsProperties_super_get_headingLevel,
    ),
    "@super:get:hintOverrides": FlaxInstanceMethod.shared(
      _flaxBinding88,
      _SemanticsProperties_super_get_hintOverrides,
    ),
    "@super:get:textDirection": _flaxBinding671,
    "@super:get:sortKey": FlaxInstanceMethod.shared(
      _flaxBinding80,
      _SemanticsProperties_super_get_sortKey,
    ),
    "@super:get:tagForChildren": FlaxInstanceMethod.shared(
      _flaxBinding184,
      _SemanticsProperties_super_get_tagForChildren,
    ),
    "@super:get:linkUrl": _flaxBinding672,
    "@super:get:onTap": _flaxBinding628,
    "@super:get:onLongPress": _flaxBinding629,
    "@super:get:onScrollLeft": _flaxBinding630,
    "@super:get:onScrollRight": _flaxBinding632,
    "@super:get:onScrollUp": _flaxBinding633,
    "@super:get:onScrollDown": _flaxBinding634,
    "@super:get:onIncrease": _flaxBinding635,
    "@super:get:onDecrease": _flaxBinding636,
    "@super:get:onCopy": _flaxBinding637,
    "@super:get:onCut": _flaxBinding638,
    "@super:get:onPaste": _flaxBinding639,
    "@super:get:onMoveCursorForwardByCharacter": _flaxBinding640,
    "@super:get:onMoveCursorBackwardByCharacter": _flaxBinding641,
    "@super:get:onMoveCursorForwardByWord": _flaxBinding642,
    "@super:get:onMoveCursorBackwardByWord": _flaxBinding643,
    "@super:get:onSetSelection": _flaxBinding644,
    "@super:get:onSetText": _flaxBinding645,
    "@super:get:onDidGainAccessibilityFocus": _flaxBinding646,
    "@super:get:onDidLoseAccessibilityFocus": _flaxBinding647,
    "@super:get:onFocus": _flaxBinding648,
    "@super:get:onDismiss": _flaxBinding631,
    "@super:get:onExpand": _flaxBinding649,
    "@super:get:onCollapse": _flaxBinding650,
    "@super:get:customSemanticsActions": FlaxInstanceMethod.shared(
      _flaxBinding186,
      _SemanticsProperties_super_get_customSemanticsActions,
    ),
    "@super:get:role": FlaxInstanceMethod.shared(
      _flaxBinding188,
      _SemanticsProperties_super_get_role,
    ),
    "@super:get:controlsNodes": _flaxBinding679,
    "@super:get:validationResult": _flaxBinding680,
    "@super:get:hitTestBehavior": FlaxInstanceMethod.shared(
      _flaxBinding190,
      _SemanticsProperties_super_get_hitTestBehavior,
    ),
    "@super:get:inputType": FlaxInstanceMethod.shared(
      _flaxBinding192,
      _SemanticsProperties_super_get_inputType,
    ),
    "@super:get:maxValue": _flaxBinding683,
    "@super:get:minValue": _flaxBinding684,
  },
  constructors: {"": _flaxBinding1219, "@implementation": _flaxBinding1219},
  create: _createSemanticsProperties,
  matches: _isSemanticsProperties,
  setters: [],
  supertypes: [
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding960,
    _flaxBinding962,
    _flaxBinding342,
    _flaxBinding346,
    _flaxBinding963,
    _flaxBinding347,
    _flaxBinding344,
    _flaxBinding1220,
    _flaxBinding1221,
    _flaxBinding1222,
    _flaxBinding1223,
    _flaxBinding1224,
    _flaxBinding1225,
    _flaxBinding1226,
    _flaxBinding1227,
    _flaxBinding1228,
    _flaxBinding1229,
    _flaxBinding1230,
    _flaxBinding1231,
    _flaxBinding1232,
    _flaxBinding1233,
    _flaxBinding1234,
    _flaxBinding1235,
    _flaxBinding1236,
    _flaxBinding1237,
    _flaxBinding1238,
    _flaxBinding1239,
    _flaxBinding1240,
    _flaxBinding1241,
    _flaxBinding1242,
    _flaxBinding1243,
    _flaxBinding776,
    _flaxBinding729,
    _flaxBinding730,
    _flaxBinding1244,
    _flaxBinding734,
    _flaxBinding735,
    _flaxBinding321,
    _flaxBinding1245,
    _flaxBinding1246,
    _flaxBinding1247,
    _flaxBinding1248,
    _flaxBinding1249,
    _flaxBinding1250,
    _flaxBinding1251,
    _flaxBinding322,
    _flaxBinding1252,
    _flaxBinding286,
    _flaxBinding1253,
    _flaxBinding748,
    _flaxBinding753,
    _flaxBinding724,
    _flaxBinding1254,
    _flaxBinding766,
    _flaxBinding698,
    _flaxBinding699,
    _flaxBinding700,
    _flaxBinding702,
    _flaxBinding703,
    _flaxBinding704,
    _flaxBinding706,
    _flaxBinding707,
    _flaxBinding708,
    _flaxBinding709,
    _flaxBinding710,
    _flaxBinding712,
    _flaxBinding713,
    _flaxBinding714,
    _flaxBinding715,
    _flaxBinding716,
    _flaxBinding717,
    _flaxBinding718,
    _flaxBinding719,
    _flaxBinding720,
    _flaxBinding701,
    _flaxBinding721,
    _flaxBinding722,
    _flaxBinding1255,
    _flaxBinding1256,
    _flaxBinding782,
    _flaxBinding783,
    _flaxBinding1257,
    _flaxBinding1258,
    _flaxBinding786,
    _flaxBinding787,
  ]),
);
const _flaxBinding1260 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsService",
  [],
  {},
  constructors: {},
  create: _createSemanticsService,
  matches: _isSemanticsService,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1261 = FlaxGetter.plain(
  "name",
  flaxStringType,
  _SemanticsTag_name,
);
const _flaxBinding1262 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsTag_toString,
);
const _flaxBinding1263 = <FlaxParameter>[
  FlaxParameter.required("name", flaxStringType),
];
const _flaxBinding1264 = FlaxProxyMember(
  "name",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding1265 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsTag",
  [_flaxBinding1261],
  {
    "toString": _flaxBinding1262,
    "@super:toString": _flaxBinding199,
    "@super:get:name": FlaxInstanceMethod.shared(
      flaxStringCall,
      _SemanticsTag_super_get_name,
    ),
  },
  constructors: {"": _flaxBinding1263, "@implementation": _flaxBinding1263},
  create: _createSemanticsTag,
  matches: _isSemanticsTag,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding205, _flaxBinding1264]),
);
const _flaxBinding1266 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:TapSemanticEvent",
  [],
  {
    "@super:toMap": _flaxBinding198,
    "@super:getDataMap": _flaxBinding212,
    "@super:toString": _flaxBinding199,
    "@super:get:type": _flaxBinding200,
  },
  constructors: {"": _flaxBinding304, "@implementation": _flaxBinding304},
  create: _createTapSemanticEvent,
  matches: _isTapSemanticEvent,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsEvent",
    "dart:core::Object",
  ],
  parent: _flaxBinding207,
  proxy: FlaxProxyBinding([
    _flaxBinding203,
    _flaxBinding214,
    _flaxBinding205,
    _flaxBinding206,
  ]),
);
const _flaxBinding1267 = FlaxGetter.plain(
  "message",
  flaxStringType,
  _TooltipSemanticsEvent_message,
);
const _flaxBinding1268 = <FlaxParameter>[
  FlaxParameter.required("message", flaxStringType),
];
const _flaxBinding1269 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:TooltipSemanticsEvent",
  [_flaxBinding1267],
  {
    "@super:toMap": _flaxBinding198,
    "@super:getDataMap": _flaxBinding212,
    "@super:toString": _flaxBinding199,
    "@super:get:message": FlaxInstanceMethod.shared(
      flaxStringCall,
      _TooltipSemanticsEvent_super_get_message,
    ),
    "@super:get:type": _flaxBinding200,
  },
  constructors: {"": _flaxBinding1268, "@implementation": _flaxBinding1268},
  create: _createTooltipSemanticsEvent,
  matches: _isTooltipSemanticsEvent,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsEvent",
    "dart:core::Object",
  ],
  parent: _flaxBinding207,
  proxy: FlaxProxyBinding([
    _flaxBinding203,
    _flaxBinding214,
    _flaxBinding205,
    _flaxBinding216,
    _flaxBinding206,
  ]),
);
const _flaxBinding1270 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:CustomSemanticsAction",
  nullable: true,
);
const _flaxBinding1271 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsBinding",
);
const _flaxBinding1272 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FlutterView",
);
