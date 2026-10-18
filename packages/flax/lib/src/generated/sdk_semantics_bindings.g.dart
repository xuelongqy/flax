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

import 'package:flutter/rendering.dart' as api5;
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
    _flaxBinding35,
    _flaxBinding51,
    _flaxBinding149,
    _flaxBinding161,
    _flaxBinding175,
    _flaxBinding186,
    _flaxBinding187,
    _flaxBinding188,
    _flaxBinding224,
    _flaxBinding300,
    _flaxBinding799,
    _flaxBinding873,
    _flaxBinding18,
    _flaxBinding875,
    _flaxBinding897,
    _flaxBinding907,
    _flaxBinding1061,
    _flaxBinding1096,
    _flaxBinding1234,
    _flaxBinding1235,
    _flaxBinding213,
    _flaxBinding1240,
    _flaxBinding1241,
    _flaxBinding1244,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#read:debugSemanticsDisableAnimations",
      [],
      _flaxBinding385,
      _read_debugSemanticsDisableAnimations,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:debugResetSemanticsIdCounter",
      [],
      _flaxBinding163,
      _function_debugResetSemanticsIdCounter,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:CustomSemanticsAction.getIdentifier",
      [
        FlaxParameter(
          "action",
          _flaxBinding357,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding19,
      _CustomSemanticsAction_getIdentifier,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:CustomSemanticsAction.getAction",
      [
        FlaxParameter(
          "id",
          _flaxBinding19,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1245,
      _CustomSemanticsAction_getAction,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#read:SemanticsBinding.instance",
      [],
      _flaxBinding1246,
      _SemanticsBinding_static_get_instance,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:SemanticsService.announce",
      [
        FlaxParameter(
          "message",
          _flaxBinding0,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "textDirection",
          _flaxBinding22,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "assertiveness",
          _flaxBinding24,
          required: false,
          defaultValue: api.Assertiveness.polite,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding239,
      _SemanticsService_announce,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:SemanticsService.sendAnnouncement",
      [
        FlaxParameter(
          "view",
          _flaxBinding1247,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "message",
          _flaxBinding0,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "textDirection",
          _flaxBinding22,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "assertiveness",
          _flaxBinding24,
          required: false,
          defaultValue: api.Assertiveness.polite,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding239,
      _SemanticsService_sendAnnouncement,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:SemanticsService.tooltip",
      [
        FlaxParameter(
          "message",
          _flaxBinding0,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding239,
      _SemanticsService_tooltip,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_semantics#function:debugSemanticsDisableAnimations%3D",
      [
        FlaxParameter(
          "value",
          _flaxBinding385,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding163,
      _write_debugSemanticsDisableAnimations,
    ),
  ],
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
    case '@implementation':
      return _CustomSemanticsActionProxy(
        values['@peer'] as FlaxProxyPeer,
        label: values["label"] as String,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFocusSemanticEvent(Object value) => value is api.FocusSemanticEvent;
Object _createFocusSemanticEvent(String ctor, Map<String, Object?> values) {
  switch (ctor) {
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
    case '@implementation':
      return _SemanticsNodeProxy(
        values['@peer'] as FlaxProxyPeer,
        key: values["key"] as api2.Key?,
        showOnScreen: values["showOnScreen"] as void Function()?,
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
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[1,1,[],[]]]", _flaxShape1),
];
Function _flaxShape0<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
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
Function _flaxShape1<_Shape0, _Shape1>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape1 Function(_Shape0 value)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "value",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Shape1>(withinCallback: true),
            FlaxCallbackAdapters.wrap1<_Shape0, _Shape1>,
            id:
                types.key<_Shape1 Function(_Shape0 value)>() +
                ":callback:<>(p:r:value:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke1<_Shape0, _Shape1>,
            matches: FlaxCallbackAdapters.matches1<_Shape0, _Shape1>,
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
const _flaxBinding0 = FlaxTypeRef("String");
const _flaxBinding1 = FlaxGetter("type", _flaxBinding0, _SemanticsEvent_type);
const _flaxBinding2 = FlaxTypeRef("int", nullable: true);
const _flaxBinding3 = <FlaxParameter>[
  FlaxParameter("nodeId", _flaxBinding2, required: false),
];
const _flaxBinding4 = FlaxTypeRef("any", nullable: true);
const _flaxBinding5 = FlaxTypeRef(
  "map",
  item: _flaxBinding4,
  key: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "map:[any?:][String:]",
    _collection0Create,
    _collection0Matches,
  ),
);
const _flaxBinding6 = FlaxInstanceMethod(
  _flaxBinding3,
  _flaxBinding5,
  _SemanticsEvent_toMap,
);
const _flaxBinding7 = <FlaxParameter>[];
const _flaxBinding8 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding5,
  _SemanticsEvent_getDataMap,
);
const _flaxBinding9 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _SemanticsEvent_toString,
);
const _flaxBinding10 = <FlaxParameter>[
  FlaxParameter("type", _flaxBinding0, required: true),
];
const _flaxBinding11 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "nodeId",
      _flaxBinding2,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding5,
  id: "callback:<>(n:o:nodeId:int?:)->map:[any?:][String:]",
);
const _flaxBinding12 = FlaxProxyMember(
  "toMap",
  0,
  _flaxBinding11,
  hasSuper: true,
);
const _flaxBinding13 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding5,
  id: "callback:<>()->map:[any?:][String:]",
);
const _flaxBinding14 = FlaxProxyMember("getDataMap", 0, _flaxBinding13);
const _flaxBinding15 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding0,
  id: "callback:<>()->String:",
);
const _flaxBinding16 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding17 = FlaxProxyMember(
  "type",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding18 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsEvent",
  [_flaxBinding1],
  {
    "toMap": _flaxBinding6,
    "getDataMap": _flaxBinding8,
    "toString": _flaxBinding9,
    "@super:toMap": FlaxInstanceMethod(
      _flaxBinding3,
      _flaxBinding5,
      _FlaxProxyDispatch0_super_call_toMap,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:type": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch0_super_get_type,
    ),
  },
  constructors: {"@implementation": _flaxBinding10},
  create: _createSemanticsEvent,
  matches: _isSemanticsEvent,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding12,
    _flaxBinding14,
    _flaxBinding16,
    _flaxBinding17,
  ]),
);
const _flaxBinding19 = FlaxTypeRef("int");
const _flaxBinding20 = FlaxGetter(
  "viewId",
  _flaxBinding19,
  _AnnounceSemanticsEvent_viewId,
);
const _flaxBinding21 = FlaxGetter(
  "message",
  _flaxBinding0,
  _AnnounceSemanticsEvent_message,
);
const _flaxBinding22 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextDirection",
);
const _flaxBinding23 = FlaxGetter(
  "textDirection",
  _flaxBinding22,
  _AnnounceSemanticsEvent_textDirection,
);
const _flaxBinding24 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_semantics#type:Assertiveness",
);
const _flaxBinding25 = FlaxGetter(
  "assertiveness",
  _flaxBinding24,
  _AnnounceSemanticsEvent_assertiveness,
);
const _flaxBinding26 = <FlaxParameter>[
  FlaxParameter("message", _flaxBinding0, required: true),
  FlaxParameter("textDirection", _flaxBinding22, required: true),
  FlaxParameter("viewId", _flaxBinding19, required: true),
  FlaxParameter(
    "assertiveness",
    _flaxBinding24,
    required: false,
    defaultValue: api.Assertiveness.polite,
  ),
];
const _flaxBinding27 = FlaxProxyMember(
  "getDataMap",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding28 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding19,
  id: "callback:<>()->int:",
);
const _flaxBinding29 = FlaxProxyMember(
  "viewId",
  1,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding30 = FlaxProxyMember(
  "message",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding31 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding22,
  id: "callback:<>()->enum:flax.core/flutter#type:TextDirection",
);
const _flaxBinding32 = FlaxProxyMember(
  "textDirection",
  1,
  _flaxBinding31,
  hasSuper: true,
);
const _flaxBinding33 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding24,
  id: "callback:<>()->enum:flax.core/sdk_semantics#type:Assertiveness",
);
const _flaxBinding34 = FlaxProxyMember(
  "assertiveness",
  1,
  _flaxBinding33,
  hasSuper: true,
);
const _flaxBinding35 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:AnnounceSemanticsEvent",
  [_flaxBinding20, _flaxBinding21, _flaxBinding23, _flaxBinding25],
  {
    "@super:toMap": FlaxInstanceMethod(
      _flaxBinding3,
      _flaxBinding5,
      _FlaxProxyDispatch0_super_call_toMap,
    ),
    "@super:getDataMap": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding5,
      _FlaxProxyDispatch1_super_call_getDataMap,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:viewId": FlaxInstanceMethod(
      [],
      _flaxBinding19,
      _AnnounceSemanticsEvent_super_get_viewId,
    ),
    "@super:get:message": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _AnnounceSemanticsEvent_super_get_message,
    ),
    "@super:get:textDirection": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _AnnounceSemanticsEvent_super_get_textDirection,
    ),
    "@super:get:assertiveness": FlaxInstanceMethod(
      [],
      _flaxBinding24,
      _AnnounceSemanticsEvent_super_get_assertiveness,
    ),
    "@super:get:type": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch0_super_get_type,
    ),
  },
  constructors: {"@implementation": _flaxBinding26},
  create: _createAnnounceSemanticsEvent,
  matches: _isAnnounceSemanticsEvent,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsEvent",
    "dart:core::Object",
  ],
  parent: _flaxBinding18,
  proxy: FlaxProxyBinding([
    _flaxBinding12,
    _flaxBinding27,
    _flaxBinding16,
    _flaxBinding29,
    _flaxBinding30,
    _flaxBinding32,
    _flaxBinding34,
    _flaxBinding17,
  ]),
);
const _flaxBinding36 = FlaxGetter(
  "string",
  _flaxBinding0,
  _AttributedString_string,
);
const _flaxBinding37 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:StringAttribute",
);
const _flaxBinding38 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding37,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:StringAttribute]",
    _collection2Create,
    _collection2Matches,
    restore: _collection2Restore,
  ),
);
const _flaxBinding39 = FlaxTypeRef(
  "list",
  item: _flaxBinding37,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:StringAttribute]",
    _collection1Create,
    _collection1Matches,
  ),
  iterable: _flaxBinding38,
);
const _flaxBinding40 = FlaxGetter(
  "attributes",
  _flaxBinding39,
  _AttributedString_attributes,
);
const _flaxBinding41 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _AttributedString_toString,
);
const _flaxBinding42 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:AttributedString",
);
const _flaxBinding43 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding42, required: true),
];
const _flaxBinding44 = FlaxInstanceMethod(
  _flaxBinding43,
  _flaxBinding42,
  _AttributedString_operatorAdd,
);
const _flaxBinding45 = <FlaxParameter>[
  FlaxParameter("string", _flaxBinding0, required: true),
  FlaxParameter(
    "attributes",
    _flaxBinding39,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding46 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "other",
      _flaxBinding42,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding42,
  id: "callback:<>(p:r:other:object:flax.core/sdk_semantics#type:AttributedString)->object:flax.core/sdk_semantics#type:AttributedString",
);
const _flaxBinding47 = FlaxProxyMember(
  "operatorAdd",
  0,
  _flaxBinding46,
  hasSuper: true,
);
const _flaxBinding48 = FlaxProxyMember(
  "string",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding49 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding39,
  id: "callback:<>()->list:[object:flax.core/sdk_dart_ui#type:StringAttribute]",
);
const _flaxBinding50 = FlaxProxyMember(
  "attributes",
  1,
  _flaxBinding49,
  hasSuper: true,
);
const _flaxBinding51 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:AttributedString",
  [_flaxBinding36, _flaxBinding40],
  {
    "toString": _flaxBinding41,
    "operatorAdd": _flaxBinding44,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:operatorAdd": FlaxInstanceMethod(
      _flaxBinding43,
      _flaxBinding42,
      _AttributedString_super_operatorAdd,
    ),
    "@super:get:string": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _AttributedString_super_get_string,
    ),
    "@super:get:attributes": FlaxInstanceMethod(
      [],
      _flaxBinding39,
      _AttributedString_super_get_attributes,
    ),
  },
  constructors: {"@implementation": _flaxBinding45},
  create: _createAttributedString,
  matches: _isAttributedString,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding16,
    _flaxBinding47,
    _flaxBinding48,
    _flaxBinding50,
  ]),
);
const _flaxBinding52 = FlaxTypeRef("bool");
const _flaxBinding53 = FlaxGetter(
  "expandableValue",
  _flaxBinding52,
  _AttributedStringProperty_expandableValue,
);
const _flaxBinding54 = FlaxGetter(
  "allowWrap",
  _flaxBinding52,
  _AttributedStringProperty_allowWrap,
);
const _flaxBinding55 = FlaxGetter(
  "allowNameWrap",
  _flaxBinding52,
  _AttributedStringProperty_allowNameWrap,
);
const _flaxBinding56 = FlaxTypeRef("String", nullable: true);
const _flaxBinding57 = FlaxGetter(
  "ifNull",
  _flaxBinding56,
  _AttributedStringProperty_ifNull,
);
const _flaxBinding58 = FlaxGetter(
  "ifEmpty",
  _flaxBinding56,
  _AttributedStringProperty_ifEmpty,
);
const _flaxBinding59 = FlaxGetter(
  "tooltip",
  _flaxBinding56,
  _AttributedStringProperty_tooltip,
);
const _flaxBinding60 = FlaxGetter(
  "missingIfNull",
  _flaxBinding52,
  _AttributedStringProperty_missingIfNull,
);
const _flaxBinding61 = FlaxTypeRef("object", id: "flax.core/flutter#type:Type");
const _flaxBinding62 = FlaxGetter(
  "propertyType",
  _flaxBinding61,
  _AttributedStringProperty_propertyType,
);
const _flaxBinding63 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:AttributedString",
  nullable: true,
);
const _flaxBinding64 = FlaxGetter(
  "value",
  _flaxBinding63,
  _AttributedStringProperty_value,
);
const _flaxBinding65 = FlaxGetter(
  "exception",
  _flaxBinding4,
  _AttributedStringProperty_exception,
);
const _flaxBinding66 = FlaxGetter(
  "defaultValue",
  _flaxBinding4,
  _AttributedStringProperty_defaultValue,
);
const _flaxBinding67 = FlaxGetter(
  "isInteresting",
  _flaxBinding52,
  _AttributedStringProperty_isInteresting,
);
const _flaxBinding68 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding69 = FlaxGetter(
  "level",
  _flaxBinding68,
  _AttributedStringProperty_level,
);
const _flaxBinding70 = FlaxGetter(
  "name",
  _flaxBinding56,
  _AttributedStringProperty_name,
);
const _flaxBinding71 = FlaxGetter(
  "showSeparator",
  _flaxBinding52,
  _AttributedStringProperty_showSeparator,
);
const _flaxBinding72 = FlaxGetter(
  "showName",
  _flaxBinding52,
  _AttributedStringProperty_showName,
);
const _flaxBinding73 = FlaxGetter(
  "linePrefix",
  _flaxBinding56,
  _AttributedStringProperty_linePrefix,
);
const _flaxBinding74 = FlaxGetter(
  "emptyBodyDescription",
  _flaxBinding56,
  _AttributedStringProperty_emptyBodyDescription,
);
const _flaxBinding75 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
  nullable: true,
);
const _flaxBinding76 = FlaxGetter(
  "style",
  _flaxBinding75,
  _AttributedStringProperty_style,
);
const _flaxBinding77 = FlaxGetter(
  "allowTruncate",
  _flaxBinding52,
  _AttributedStringProperty_allowTruncate,
);
const _flaxBinding78 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:TextTreeConfiguration",
  nullable: true,
);
const _flaxBinding79 = FlaxGetter(
  "textTreeConfiguration",
  _flaxBinding78,
  _AttributedStringProperty_textTreeConfiguration,
);
const _flaxBinding80 = FlaxGetter(
  "showWhenEmpty",
  _flaxBinding52,
  _AttributedStringProperty_showWhenEmpty,
);
const _flaxBinding81 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsSerializationDelegate",
);
const _flaxBinding82 = <FlaxParameter>[
  FlaxParameter("delegate", _flaxBinding81, required: true),
];
const _flaxBinding83 = FlaxInstanceMethod(
  _flaxBinding82,
  _flaxBinding5,
  _AttributedStringProperty_toJsonMap,
);
const _flaxBinding84 = <FlaxParameter>[
  FlaxParameter("parentConfiguration", _flaxBinding78, required: false),
];
const _flaxBinding85 = FlaxInstanceMethod(
  _flaxBinding84,
  _flaxBinding0,
  _AttributedStringProperty_valueToString,
);
const _flaxBinding86 = FlaxInstanceMethod(
  _flaxBinding84,
  _flaxBinding0,
  _AttributedStringProperty_toDescription,
);
const _flaxBinding87 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding88 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding87,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection4Create,
    _collection4Matches,
    restore: _collection4Restore,
  ),
);
const _flaxBinding89 = FlaxTypeRef(
  "list",
  item: _flaxBinding87,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection3Create,
    _collection3Matches,
  ),
  iterable: _flaxBinding88,
);
const _flaxBinding90 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding89,
  _AttributedStringProperty_getProperties,
);
const _flaxBinding91 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding89,
  _AttributedStringProperty_getChildren,
);
const _flaxBinding92 = <FlaxParameter>[
  FlaxParameter("minLevel", _flaxBinding68, required: true),
];
const _flaxBinding93 = FlaxInstanceMethod(
  _flaxBinding92,
  _flaxBinding52,
  _AttributedStringProperty_isFiltered,
);
const _flaxBinding94 = FlaxTypeRef(
  "map",
  nullable: true,
  item: _flaxBinding0,
  key: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "map:[String:][String:]",
    _collection5Create,
    _collection5Matches,
  ),
);
const _flaxBinding95 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding94,
  _AttributedStringProperty_toTimelineArguments,
);
const _flaxBinding96 = FlaxInstanceMethod(
  _flaxBinding82,
  _flaxBinding5,
  _AttributedStringProperty_toJsonMapIterative,
);
const _flaxBinding97 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding68,
    required: false,
    defaultValue: api2.DiagnosticLevel.debug,
  ),
  FlaxParameter("parentConfiguration", _flaxBinding78, required: false),
  FlaxParameter(
    "prefixLineOne",
    _flaxBinding0,
    required: false,
    defaultValue: '',
  ),
  FlaxParameter("prefixOtherLines", _flaxBinding56, required: false),
  FlaxParameter("wrapWidth", _flaxBinding19, required: false, defaultValue: 65),
];
const _flaxBinding98 = FlaxInstanceMethod(
  _flaxBinding97,
  _flaxBinding0,
  _AttributedStringProperty_toStringDeep,
);
const _flaxBinding99 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding68,
    required: false,
    defaultValue: api2.DiagnosticLevel.info,
  ),
  FlaxParameter("parentConfiguration", _flaxBinding78, required: false),
];
const _flaxBinding100 = FlaxInstanceMethod(
  _flaxBinding99,
  _flaxBinding0,
  _AttributedStringProperty_toString,
);
const _flaxBinding101 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding0, required: true),
  FlaxParameter("value", _flaxBinding63, required: true),
  FlaxParameter(
    "showName",
    _flaxBinding52,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "showWhenEmpty",
    _flaxBinding52,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "defaultValue",
    _flaxBinding4,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "level",
    _flaxBinding68,
    required: false,
    defaultValue: api2.DiagnosticLevel.info,
  ),
  FlaxParameter("description", _flaxBinding56, required: false),
];
const _flaxBinding102 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "delegate",
      _flaxBinding81,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding5,
  id: "callback:<>(p:r:delegate:object:flax.core/sdk_foundation#type:DiagnosticsSerializationDelegate)->map:[any?:][String:]",
);
const _flaxBinding103 = FlaxProxyMember(
  "toJsonMap",
  0,
  _flaxBinding102,
  hasSuper: true,
);
const _flaxBinding104 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parentConfiguration",
      _flaxBinding78,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(n:o:parentConfiguration:object?:flax.core/sdk_foundation#type:TextTreeConfiguration)->String:",
);
const _flaxBinding105 = FlaxProxyMember(
  "valueToString",
  0,
  _flaxBinding104,
  hasSuper: true,
);
const _flaxBinding106 = FlaxProxyMember(
  "toDescription",
  0,
  _flaxBinding104,
  hasSuper: true,
);
const _flaxBinding107 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding89,
  id: "callback:<>()->list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
);
const _flaxBinding108 = FlaxProxyMember(
  "getProperties",
  0,
  _flaxBinding107,
  hasSuper: true,
);
const _flaxBinding109 = FlaxProxyMember(
  "getChildren",
  0,
  _flaxBinding107,
  hasSuper: true,
);
const _flaxBinding110 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "minLevel",
      _flaxBinding68,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding52,
  id: "callback:<>(p:r:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->bool:",
);
const _flaxBinding111 = FlaxProxyMember(
  "isFiltered",
  0,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding112 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding94,
  id: "callback:<>()->map?:[String:][String:]",
);
const _flaxBinding113 = FlaxProxyMember(
  "toTimelineArguments",
  0,
  _flaxBinding112,
  hasSuper: true,
);
const _flaxBinding114 = FlaxProxyMember(
  "toJsonMapIterative",
  0,
  _flaxBinding102,
  hasSuper: true,
);
const _flaxBinding115 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "prefixLineOne",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "prefixOtherLines",
      _flaxBinding56,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "parentConfiguration",
      _flaxBinding78,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "minLevel",
      _flaxBinding68,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "wrapWidth",
      _flaxBinding19,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(n:o:prefixLineOne:String:,n:o:prefixOtherLines:String?:,n:o:parentConfiguration:object?:flax.core/sdk_foundation#type:TextTreeConfiguration,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel,n:o:wrapWidth:int:)->String:",
);
const _flaxBinding116 = FlaxProxyMember(
  "toStringDeep",
  0,
  _flaxBinding115,
  hasSuper: true,
);
const _flaxBinding117 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parentConfiguration",
      _flaxBinding78,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "minLevel",
      _flaxBinding68,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(n:o:parentConfiguration:object?:flax.core/sdk_foundation#type:TextTreeConfiguration,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding118 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding117,
  hasSuper: true,
);
const _flaxBinding119 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding52,
  id: "callback:<>()->bool:",
);
const _flaxBinding120 = FlaxProxyMember(
  "showWhenEmpty",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding121 = FlaxProxyMember(
  "isInteresting",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding122 = FlaxProxyMember(
  "expandableValue",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding123 = FlaxProxyMember(
  "allowWrap",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding124 = FlaxProxyMember(
  "allowNameWrap",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding125 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding56,
  id: "callback:<>()->String?:",
);
const _flaxBinding126 = FlaxProxyMember(
  "ifNull",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding127 = FlaxProxyMember(
  "ifEmpty",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding128 = FlaxProxyMember(
  "tooltip",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding129 = FlaxProxyMember(
  "missingIfNull",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding130 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding61,
  id: "callback:<>()->object:flax.core/flutter#type:Type",
);
const _flaxBinding131 = FlaxProxyMember(
  "propertyType",
  1,
  _flaxBinding130,
  hasSuper: true,
);
const _flaxBinding132 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding63,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:AttributedString",
);
const _flaxBinding133 = FlaxProxyMember(
  "value",
  1,
  _flaxBinding132,
  hasSuper: true,
);
const _flaxBinding134 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding4,
  id: "callback:<>()->any?:",
);
const _flaxBinding135 = FlaxProxyMember(
  "exception",
  1,
  _flaxBinding134,
  hasSuper: true,
);
const _flaxBinding136 = FlaxProxyMember(
  "defaultValue",
  1,
  _flaxBinding134,
  hasSuper: true,
);
const _flaxBinding137 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding68,
  id: "callback:<>()->enum:flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding138 = FlaxProxyMember(
  "level",
  1,
  _flaxBinding137,
  hasSuper: true,
);
const _flaxBinding139 = FlaxProxyMember(
  "name",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding140 = FlaxProxyMember(
  "showSeparator",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding141 = FlaxProxyMember(
  "showName",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding142 = FlaxProxyMember(
  "linePrefix",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding143 = FlaxProxyMember(
  "emptyBodyDescription",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding144 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding75,
  id: "callback:<>()->enum?:flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
);
const _flaxBinding145 = FlaxProxyMember(
  "style",
  1,
  _flaxBinding144,
  hasSuper: true,
);
const _flaxBinding146 = FlaxProxyMember(
  "allowTruncate",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding147 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding78,
  id: "callback:<>()->object?:flax.core/sdk_foundation#type:TextTreeConfiguration",
);
const _flaxBinding148 = FlaxProxyMember(
  "textTreeConfiguration",
  1,
  _flaxBinding147,
  hasSuper: true,
);
const _flaxBinding149 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:AttributedStringProperty",
  [
    _flaxBinding53,
    _flaxBinding54,
    _flaxBinding55,
    _flaxBinding57,
    _flaxBinding58,
    _flaxBinding59,
    _flaxBinding60,
    _flaxBinding62,
    _flaxBinding64,
    _flaxBinding65,
    _flaxBinding66,
    _flaxBinding67,
    _flaxBinding69,
    _flaxBinding70,
    _flaxBinding71,
    _flaxBinding72,
    _flaxBinding73,
    _flaxBinding74,
    _flaxBinding76,
    _flaxBinding77,
    _flaxBinding79,
    _flaxBinding80,
  ],
  {
    "toJsonMap": _flaxBinding83,
    "valueToString": _flaxBinding85,
    "toDescription": _flaxBinding86,
    "getProperties": _flaxBinding90,
    "getChildren": _flaxBinding91,
    "isFiltered": _flaxBinding93,
    "toTimelineArguments": _flaxBinding95,
    "toJsonMapIterative": _flaxBinding96,
    "toStringDeep": _flaxBinding98,
    "toString": _flaxBinding100,
    "@super:toJsonMap": FlaxInstanceMethod(
      _flaxBinding82,
      _flaxBinding5,
      _AttributedStringProperty_super_toJsonMap,
    ),
    "@super:valueToString": FlaxInstanceMethod(
      _flaxBinding84,
      _flaxBinding0,
      _AttributedStringProperty_super_valueToString,
    ),
    "@super:toDescription": FlaxInstanceMethod(
      _flaxBinding84,
      _flaxBinding0,
      _AttributedStringProperty_super_toDescription,
    ),
    "@super:getProperties": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding89,
      _AttributedStringProperty_super_getProperties,
    ),
    "@super:getChildren": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding89,
      _AttributedStringProperty_super_getChildren,
    ),
    "@super:isFiltered": FlaxInstanceMethod(
      _flaxBinding92,
      _flaxBinding52,
      _AttributedStringProperty_super_isFiltered,
    ),
    "@super:toTimelineArguments": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding94,
      _AttributedStringProperty_super_toTimelineArguments,
    ),
    "@super:toJsonMapIterative": FlaxInstanceMethod(
      _flaxBinding82,
      _flaxBinding5,
      _AttributedStringProperty_super_toJsonMapIterative,
    ),
    "@super:toStringDeep": FlaxInstanceMethod(
      _flaxBinding97,
      _flaxBinding0,
      _AttributedStringProperty_super_toStringDeep,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding99,
      _flaxBinding0,
      _AttributedStringProperty_super_toString,
    ),
    "@super:get:showWhenEmpty": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _AttributedStringProperty_super_get_showWhenEmpty,
    ),
    "@super:get:isInteresting": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _AttributedStringProperty_super_get_isInteresting,
    ),
    "@super:get:expandableValue": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _AttributedStringProperty_super_get_expandableValue,
    ),
    "@super:get:allowWrap": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _AttributedStringProperty_super_get_allowWrap,
    ),
    "@super:get:allowNameWrap": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _AttributedStringProperty_super_get_allowNameWrap,
    ),
    "@super:get:ifNull": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _AttributedStringProperty_super_get_ifNull,
    ),
    "@super:get:ifEmpty": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _AttributedStringProperty_super_get_ifEmpty,
    ),
    "@super:get:tooltip": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _AttributedStringProperty_super_get_tooltip,
    ),
    "@super:get:missingIfNull": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _AttributedStringProperty_super_get_missingIfNull,
    ),
    "@super:get:propertyType": FlaxInstanceMethod(
      [],
      _flaxBinding61,
      _AttributedStringProperty_super_get_propertyType,
    ),
    "@super:get:value": FlaxInstanceMethod(
      [],
      _flaxBinding63,
      _AttributedStringProperty_super_get_value,
    ),
    "@super:get:exception": FlaxInstanceMethod(
      [],
      _flaxBinding4,
      _AttributedStringProperty_super_get_exception,
    ),
    "@super:get:defaultValue": FlaxInstanceMethod(
      [],
      _flaxBinding4,
      _AttributedStringProperty_super_get_defaultValue,
    ),
    "@super:get:level": FlaxInstanceMethod(
      [],
      _flaxBinding68,
      _AttributedStringProperty_super_get_level,
    ),
    "@super:get:name": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _FlaxProxyDispatch5_super_get_name,
    ),
    "@super:get:showSeparator": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _AttributedStringProperty_super_get_showSeparator,
    ),
    "@super:get:showName": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _AttributedStringProperty_super_get_showName,
    ),
    "@super:get:linePrefix": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _AttributedStringProperty_super_get_linePrefix,
    ),
    "@super:get:emptyBodyDescription": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _AttributedStringProperty_super_get_emptyBodyDescription,
    ),
    "@super:get:style": FlaxInstanceMethod(
      [],
      _flaxBinding75,
      _AttributedStringProperty_super_get_style,
    ),
    "@super:get:allowTruncate": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _AttributedStringProperty_super_get_allowTruncate,
    ),
    "@super:get:textTreeConfiguration": FlaxInstanceMethod(
      [],
      _flaxBinding78,
      _AttributedStringProperty_super_get_textTreeConfiguration,
    ),
  },
  constructors: {"@implementation": _flaxBinding101},
  create: _createAttributedStringProperty,
  matches: _isAttributedStringProperty,
  setters: [],
  supertypes: [
    "flax.core/sdk_foundation#type:DiagnosticsProperty",
    "flax.core/sdk_foundation#type:DiagnosticsNode",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding103,
    _flaxBinding105,
    _flaxBinding106,
    _flaxBinding108,
    _flaxBinding109,
    _flaxBinding111,
    _flaxBinding113,
    _flaxBinding114,
    _flaxBinding116,
    _flaxBinding118,
    _flaxBinding120,
    _flaxBinding121,
    _flaxBinding122,
    _flaxBinding123,
    _flaxBinding124,
    _flaxBinding126,
    _flaxBinding127,
    _flaxBinding128,
    _flaxBinding129,
    _flaxBinding131,
    _flaxBinding133,
    _flaxBinding135,
    _flaxBinding136,
    _flaxBinding138,
    _flaxBinding139,
    _flaxBinding140,
    _flaxBinding141,
    _flaxBinding142,
    _flaxBinding143,
    _flaxBinding145,
    _flaxBinding146,
    _flaxBinding148,
  ]),
);
const _flaxBinding150 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsConfiguration",
);
const _flaxBinding151 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding150,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]",
    _collection7Create,
    _collection7Matches,
    restore: _collection7Restore,
  ),
);
const _flaxBinding152 = FlaxTypeRef(
  "list",
  item: _flaxBinding150,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]",
    _collection6Create,
    _collection6Matches,
  ),
  iterable: _flaxBinding151,
);
const _flaxBinding153 = FlaxGetter(
  "mergeUp",
  _flaxBinding152,
  _ChildSemanticsConfigurationsResult_mergeUp,
);
const _flaxBinding154 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding152,
  collection: FlaxCollectionBinding(
    "iterable:[list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]]",
    _collection9Create,
    _collection9Matches,
    restore: _collection9Restore,
  ),
);
const _flaxBinding155 = FlaxTypeRef(
  "list",
  item: _flaxBinding152,
  collection: FlaxCollectionBinding(
    "list:[list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]]",
    _collection8Create,
    _collection8Matches,
  ),
  iterable: _flaxBinding154,
);
const _flaxBinding156 = FlaxGetter(
  "siblingMergeGroups",
  _flaxBinding155,
  _ChildSemanticsConfigurationsResult_siblingMergeGroups,
);
const _flaxBinding157 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding152,
  id: "callback:<>()->list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]",
);
const _flaxBinding158 = FlaxProxyMember("mergeUp", 1, _flaxBinding157);
const _flaxBinding159 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding155,
  id: "callback:<>()->list:[list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration]]",
);
const _flaxBinding160 = FlaxProxyMember(
  "siblingMergeGroups",
  1,
  _flaxBinding159,
);
const _flaxBinding161 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult",
  [_flaxBinding153, _flaxBinding156],
  {},
  constructors: {"@implementation": _flaxBinding7},
  create: _createChildSemanticsConfigurationsResult,
  matches: _isChildSemanticsConfigurationsResult,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding158, _flaxBinding160]),
);
const _flaxBinding162 = <FlaxParameter>[
  FlaxParameter("config", _flaxBinding150, required: true),
];
const _flaxBinding163 = FlaxTypeRef("void");
const _flaxBinding164 = FlaxInstanceMethod(
  _flaxBinding162,
  _flaxBinding163,
  _ChildSemanticsConfigurationsResultBuilder_markAsMergeUp,
);
const _flaxBinding165 = <FlaxParameter>[
  FlaxParameter("configs", _flaxBinding152, required: true),
];
const _flaxBinding166 = FlaxInstanceMethod(
  _flaxBinding165,
  _flaxBinding163,
  _ChildSemanticsConfigurationsResultBuilder_markAsSiblingMergeGroup,
);
const _flaxBinding167 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult",
);
const _flaxBinding168 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding167,
  _ChildSemanticsConfigurationsResultBuilder_build,
);
const _flaxBinding169 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "config",
      _flaxBinding150,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:config:object:flax.core/sdk_semantics#type:SemanticsConfiguration)->void:",
);
const _flaxBinding170 = FlaxProxyMember(
  "markAsMergeUp",
  0,
  _flaxBinding169,
  hasSuper: true,
);
const _flaxBinding171 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "configs",
      _flaxBinding152,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:configs:list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration])->void:",
);
const _flaxBinding172 = FlaxProxyMember(
  "markAsSiblingMergeGroup",
  0,
  _flaxBinding171,
  hasSuper: true,
);
const _flaxBinding173 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding167,
  id: "callback:<>()->object:flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult",
);
const _flaxBinding174 = FlaxProxyMember(
  "build",
  0,
  _flaxBinding173,
  hasSuper: true,
);
const _flaxBinding175 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder",
  [],
  {
    "markAsMergeUp": _flaxBinding164,
    "markAsSiblingMergeGroup": _flaxBinding166,
    "build": _flaxBinding168,
    "@super:markAsMergeUp": FlaxInstanceMethod(
      _flaxBinding162,
      _flaxBinding163,
      _ChildSemanticsConfigurationsResultBuilder_super_markAsMergeUp,
    ),
    "@super:markAsSiblingMergeGroup": FlaxInstanceMethod(
      _flaxBinding165,
      _flaxBinding163,
      _ChildSemanticsConfigurationsResultBuilder_super_markAsSiblingMergeGroup,
    ),
    "@super:build": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding167,
      _ChildSemanticsConfigurationsResultBuilder_super_build,
    ),
  },
  constructors: {"@implementation": _flaxBinding7},
  create: _createChildSemanticsConfigurationsResultBuilder,
  matches: _isChildSemanticsConfigurationsResultBuilder,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding170, _flaxBinding172, _flaxBinding174]),
);
const _flaxBinding176 = FlaxGetter(
  "label",
  _flaxBinding56,
  _CustomSemanticsAction_label,
);
const _flaxBinding177 = FlaxGetter(
  "hint",
  _flaxBinding56,
  _CustomSemanticsAction_hint,
);
const _flaxBinding178 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsAction",
  nullable: true,
);
const _flaxBinding179 = FlaxGetter(
  "action",
  _flaxBinding178,
  _CustomSemanticsAction_action,
);
const _flaxBinding180 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _CustomSemanticsAction_toString,
);
const _flaxBinding181 = <FlaxParameter>[
  FlaxParameter("label", _flaxBinding0, required: true),
];
const _flaxBinding182 = FlaxProxyMember(
  "label",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding183 = FlaxProxyMember(
  "hint",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding184 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding178,
  id: "callback:<>()->object?:flax.core/sdk_dart_ui#type:SemanticsAction",
);
const _flaxBinding185 = FlaxProxyMember(
  "action",
  1,
  _flaxBinding184,
  hasSuper: true,
);
const _flaxBinding186 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:CustomSemanticsAction",
  [_flaxBinding176, _flaxBinding177, _flaxBinding179],
  {
    "toString": _flaxBinding180,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:label": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _CustomSemanticsAction_super_get_label,
    ),
    "@super:get:hint": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _CustomSemanticsAction_super_get_hint,
    ),
    "@super:get:action": FlaxInstanceMethod(
      [],
      _flaxBinding178,
      _CustomSemanticsAction_super_get_action,
    ),
  },
  constructors: {"@implementation": _flaxBinding181},
  create: _createCustomSemanticsAction,
  matches: _isCustomSemanticsAction,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding16,
    _flaxBinding182,
    _flaxBinding183,
    _flaxBinding185,
  ]),
);
const _flaxBinding187 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:FocusSemanticEvent",
  [],
  {
    "@super:toMap": FlaxInstanceMethod(
      _flaxBinding3,
      _flaxBinding5,
      _FlaxProxyDispatch0_super_call_toMap,
    ),
    "@super:getDataMap": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding5,
      _FlaxProxyDispatch1_super_call_getDataMap,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:type": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch0_super_get_type,
    ),
  },
  constructors: {"@implementation": _flaxBinding7},
  create: _createFocusSemanticEvent,
  matches: _isFocusSemanticEvent,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsEvent",
    "dart:core::Object",
  ],
  parent: _flaxBinding18,
  proxy: FlaxProxyBinding([
    _flaxBinding12,
    _flaxBinding27,
    _flaxBinding16,
    _flaxBinding17,
  ]),
);
const _flaxBinding188 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:LongPressSemanticsEvent",
  [],
  {
    "@super:toMap": FlaxInstanceMethod(
      _flaxBinding3,
      _flaxBinding5,
      _FlaxProxyDispatch0_super_call_toMap,
    ),
    "@super:getDataMap": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding5,
      _FlaxProxyDispatch1_super_call_getDataMap,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:type": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch0_super_get_type,
    ),
  },
  constructors: {"@implementation": _flaxBinding7},
  create: _createLongPressSemanticsEvent,
  matches: _isLongPressSemanticsEvent,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsEvent",
    "dart:core::Object",
  ],
  parent: _flaxBinding18,
  proxy: FlaxProxyBinding([
    _flaxBinding12,
    _flaxBinding27,
    _flaxBinding16,
    _flaxBinding17,
  ]),
);
const _flaxBinding189 = FlaxGetter(
  "name",
  _flaxBinding56,
  _SemanticsSortKey_name,
);
const _flaxBinding190 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsSortKey",
);
const _flaxBinding191 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding190, required: true),
];
const _flaxBinding192 = FlaxInstanceMethod(
  _flaxBinding191,
  _flaxBinding19,
  _SemanticsSortKey_compareTo,
);
const _flaxBinding193 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _SemanticsSortKey_toStringShort,
);
const _flaxBinding194 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding68,
    required: false,
    defaultValue: api2.DiagnosticLevel.info,
  ),
];
const _flaxBinding195 = FlaxInstanceMethod(
  _flaxBinding194,
  _flaxBinding0,
  _SemanticsSortKey_toString,
);
const _flaxBinding196 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding56, required: false),
  FlaxParameter("style", _flaxBinding75, required: false),
];
const _flaxBinding197 = FlaxInstanceMethod(
  _flaxBinding196,
  _flaxBinding87,
  _SemanticsSortKey_toDiagnosticsNode,
);
const _flaxBinding198 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder",
);
const _flaxBinding199 = <FlaxParameter>[
  FlaxParameter("properties", _flaxBinding198, required: true),
];
const _flaxBinding200 = FlaxInstanceMethod(
  _flaxBinding199,
  _flaxBinding163,
  _SemanticsSortKey_debugFillProperties,
);
const _flaxBinding201 = FlaxInstanceMethod(
  _flaxBinding191,
  _flaxBinding19,
  _SemanticsSortKey_doCompare,
);
const _flaxBinding202 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding56, required: false),
];
const _flaxBinding203 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "other",
      _flaxBinding190,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding19,
  id: "callback:<>(p:r:other:object:flax.core/sdk_semantics#type:SemanticsSortKey)->int:",
);
const _flaxBinding204 = FlaxProxyMember(
  "compareTo",
  0,
  _flaxBinding203,
  hasSuper: true,
);
const _flaxBinding205 = FlaxProxyMember(
  "toStringShort",
  0,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding206 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "minLevel",
      _flaxBinding68,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding207 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding206,
  hasSuper: true,
);
const _flaxBinding208 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding56,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "style",
      _flaxBinding75,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding87,
  id: "callback:<>(n:o:name:String?:,n:o:style:enum?:flax.core/sdk_foundation#type:DiagnosticsTreeStyle)->object:flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding209 = FlaxProxyMember(
  "toDiagnosticsNode",
  0,
  _flaxBinding208,
  hasSuper: true,
);
const _flaxBinding210 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "properties",
      _flaxBinding198,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:properties:object:flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder)->void:",
);
const _flaxBinding211 = FlaxProxyMember(
  "debugFillProperties",
  0,
  _flaxBinding210,
  hasSuper: true,
);
const _flaxBinding212 = FlaxProxyMember("doCompare", 0, _flaxBinding203);
const _flaxBinding213 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsSortKey",
  [_flaxBinding189],
  {
    "compareTo": _flaxBinding192,
    "toStringShort": _flaxBinding193,
    "toString": _flaxBinding195,
    "toDiagnosticsNode": _flaxBinding197,
    "debugFillProperties": _flaxBinding200,
    "doCompare": _flaxBinding201,
    "@super:compareTo": FlaxInstanceMethod(
      _flaxBinding191,
      _flaxBinding19,
      _SemanticsSortKey_super_compareTo,
    ),
    "@super:toStringShort": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toStringShort,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding194,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toString,
    ),
    "@super:toDiagnosticsNode": FlaxInstanceMethod(
      _flaxBinding196,
      _flaxBinding87,
      _FlaxProxyDispatch8_super_call_toDiagnosticsNode,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod(
      _flaxBinding199,
      _flaxBinding163,
      _FlaxProxyDispatch8_super_call_debugFillProperties,
    ),
    "@super:get:name": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _FlaxProxyDispatch5_super_get_name,
    ),
  },
  constructors: {"@implementation": _flaxBinding202},
  create: _createSemanticsSortKey,
  matches: _isSemanticsSortKey,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/flutter#type:Comparable",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding204,
    _flaxBinding205,
    _flaxBinding207,
    _flaxBinding209,
    _flaxBinding211,
    _flaxBinding212,
    _flaxBinding139,
  ]),
);
const _flaxBinding214 = FlaxTypeRef("double");
const _flaxBinding215 = FlaxGetter(
  "order",
  _flaxBinding214,
  _OrdinalSortKey_order,
);
const _flaxBinding216 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:OrdinalSortKey",
);
const _flaxBinding217 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding216, required: true),
];
const _flaxBinding218 = FlaxInstanceMethod(
  _flaxBinding217,
  _flaxBinding19,
  _OrdinalSortKey_doCompare,
);
const _flaxBinding219 = <FlaxParameter>[
  FlaxParameter("order", _flaxBinding214, required: true),
  FlaxParameter("name", _flaxBinding56, required: false),
];
const _flaxBinding220 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "other",
      _flaxBinding216,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding19,
  id: "callback:<>(p:r:other:object:flax.core/sdk_semantics#type:OrdinalSortKey)->int:",
);
const _flaxBinding221 = FlaxProxyMember(
  "doCompare",
  0,
  _flaxBinding220,
  hasSuper: true,
);
const _flaxBinding222 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding214,
  id: "callback:<>()->double:",
);
const _flaxBinding223 = FlaxProxyMember(
  "order",
  1,
  _flaxBinding222,
  hasSuper: true,
);
const _flaxBinding224 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:OrdinalSortKey",
  [_flaxBinding215],
  {
    "doCompare": _flaxBinding218,
    "@super:compareTo": FlaxInstanceMethod(
      _flaxBinding191,
      _flaxBinding19,
      _OrdinalSortKey_super_compareTo,
    ),
    "@super:doCompare": FlaxInstanceMethod(
      _flaxBinding217,
      _flaxBinding19,
      _OrdinalSortKey_super_doCompare,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod(
      _flaxBinding199,
      _flaxBinding163,
      _FlaxProxyDispatch8_super_call_debugFillProperties,
    ),
    "@super:toStringShort": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toStringShort,
    ),
    "@super:toDiagnosticsNode": FlaxInstanceMethod(
      _flaxBinding196,
      _flaxBinding87,
      _FlaxProxyDispatch8_super_call_toDiagnosticsNode,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding194,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toString,
    ),
    "@super:get:order": FlaxInstanceMethod(
      [],
      _flaxBinding214,
      _OrdinalSortKey_super_get_order,
    ),
    "@super:get:name": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _FlaxProxyDispatch5_super_get_name,
    ),
  },
  constructors: {"@implementation": _flaxBinding219},
  create: _createOrdinalSortKey,
  matches: _isOrdinalSortKey,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsSortKey",
    "dart:core::Object",
    "flax.core/flutter#type:Comparable",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  parent: _flaxBinding213,
  proxy: FlaxProxyBinding([
    _flaxBinding204,
    _flaxBinding221,
    _flaxBinding211,
    _flaxBinding205,
    _flaxBinding209,
    _flaxBinding207,
    _flaxBinding223,
    _flaxBinding139,
  ]),
);
const _flaxBinding225 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SingletonFlutterWindow",
);
const _flaxBinding226 = FlaxGetter(
  "window",
  _flaxBinding225,
  _SemanticsBinding_window,
);
const _flaxBinding227 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PlatformDispatcher",
);
const _flaxBinding228 = FlaxGetter(
  "platformDispatcher",
  _flaxBinding227,
  _SemanticsBinding_platformDispatcher,
);
const _flaxBinding229 = FlaxGetter(
  "locked",
  _flaxBinding52,
  _SemanticsBinding_locked,
);
const _flaxBinding230 = FlaxGetter(
  "semanticsEnabled",
  _flaxBinding52,
  _SemanticsBinding_semanticsEnabled,
);
const _flaxBinding231 = FlaxGetter(
  "debugOutstandingSemanticsHandles",
  _flaxBinding19,
  _SemanticsBinding_debugOutstandingSemanticsHandles,
);
const _flaxBinding232 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:AccessibilityFeatures",
);
const _flaxBinding233 = FlaxGetter(
  "accessibilityFeatures",
  _flaxBinding232,
  _SemanticsBinding_accessibilityFeatures,
);
const _flaxBinding234 = FlaxGetter(
  "disableAnimations",
  _flaxBinding52,
  _SemanticsBinding_disableAnimations,
);
const _flaxBinding235 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding163,
  _SemanticsBinding_initInstances,
);
const _flaxBinding236 = <FlaxParameter>[
  FlaxParameter("entryPoint", _flaxBinding0, required: true),
];
const _flaxBinding237 = FlaxInstanceMethod(
  _flaxBinding236,
  _flaxBinding52,
  _SemanticsBinding_debugCheckZone,
);
const _flaxBinding238 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding163,
  _SemanticsBinding_initServiceExtensions,
);
const _flaxBinding239 = FlaxTypeRef(
  "future",
  item: _flaxBinding163,
  future: FlaxFutureBinding("void:", _future0Adapt),
);
const _flaxBinding240 = FlaxCallbackBinding(
  [],
  _flaxBinding239,
  _callback0,
  id: "callback:<>()->future:[void:]",
  invoke: _callback0Invoke,
  matches: _callback0Matches,
);
const _flaxBinding241 = FlaxTypeRef("callback", callback: _flaxBinding240);
const _flaxBinding242 = <FlaxParameter>[
  FlaxParameter("callback", _flaxBinding241, required: true),
];
const _flaxBinding243 = FlaxInstanceMethod(
  _flaxBinding242,
  _flaxBinding239,
  _SemanticsBinding_lockEvents,
);
const _flaxBinding244 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding163,
  _SemanticsBinding_unlocked,
);
const _flaxBinding245 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding239,
  _SemanticsBinding_reassembleApplication,
);
const _flaxBinding246 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding239,
  _SemanticsBinding_performReassemble,
);
const _flaxBinding247 = <FlaxParameter>[
  FlaxParameter("callback", _flaxBinding241, required: true),
  FlaxParameter("name", _flaxBinding0, required: true),
];
const _flaxBinding248 = FlaxInstanceMethod(
  _flaxBinding247,
  _flaxBinding163,
  _SemanticsBinding_registerSignalServiceExtension,
);
const _flaxBinding249 = FlaxTypeRef(
  "future",
  item: _flaxBinding52,
  future: FlaxFutureBinding("bool:", _future1Adapt),
);
const _flaxBinding250 = FlaxCallbackBinding(
  [],
  _flaxBinding249,
  _callback1,
  id: "callback:<>()->future:[bool:]",
  invoke: _callback1Invoke,
  matches: _callback1Matches,
);
const _flaxBinding251 = FlaxTypeRef("callback", callback: _flaxBinding250);
const _flaxBinding252 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding52,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding239,
  _callback2,
  id: "callback:<>(p:r:value:bool:)->future:[void:]",
  invoke: _callback2Invoke,
  matches: _callback2Matches,
);
const _flaxBinding253 = FlaxTypeRef("callback", callback: _flaxBinding252);
const _flaxBinding254 = <FlaxParameter>[
  FlaxParameter("getter", _flaxBinding251, required: true),
  FlaxParameter("name", _flaxBinding0, required: true),
  FlaxParameter("setter", _flaxBinding253, required: true),
];
const _flaxBinding255 = FlaxInstanceMethod(
  _flaxBinding254,
  _flaxBinding163,
  _SemanticsBinding_registerBoolServiceExtension,
);
const _flaxBinding256 = FlaxTypeRef(
  "future",
  item: _flaxBinding214,
  future: FlaxFutureBinding("double:", _future2Adapt),
);
const _flaxBinding257 = FlaxCallbackBinding(
  [],
  _flaxBinding256,
  _callback3,
  id: "callback:<>()->future:[double:]",
  invoke: _callback3Invoke,
  matches: _callback3Matches,
);
const _flaxBinding258 = FlaxTypeRef("callback", callback: _flaxBinding257);
const _flaxBinding259 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding214,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding239,
  _callback4,
  id: "callback:<>(p:r:value:double:)->future:[void:]",
  invoke: _callback4Invoke,
  matches: _callback4Matches,
);
const _flaxBinding260 = FlaxTypeRef("callback", callback: _flaxBinding259);
const _flaxBinding261 = <FlaxParameter>[
  FlaxParameter("getter", _flaxBinding258, required: true),
  FlaxParameter("name", _flaxBinding0, required: true),
  FlaxParameter("setter", _flaxBinding260, required: true),
];
const _flaxBinding262 = FlaxInstanceMethod(
  _flaxBinding261,
  _flaxBinding163,
  _SemanticsBinding_registerNumericServiceExtension,
);
const _flaxBinding263 = <FlaxParameter>[
  FlaxParameter("eventKind", _flaxBinding0, required: true),
  FlaxParameter("eventData", _flaxBinding5, required: true),
];
const _flaxBinding264 = FlaxInstanceMethod(
  _flaxBinding263,
  _flaxBinding163,
  _SemanticsBinding_postEvent,
);
const _flaxBinding265 = FlaxTypeRef(
  "future",
  item: _flaxBinding0,
  future: FlaxFutureBinding("String:", _future3Adapt),
);
const _flaxBinding266 = FlaxCallbackBinding(
  [],
  _flaxBinding265,
  _callback5,
  id: "callback:<>()->future:[String:]",
  invoke: _callback5Invoke,
  matches: _callback5Matches,
);
const _flaxBinding267 = FlaxTypeRef("callback", callback: _flaxBinding266);
const _flaxBinding268 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding239,
  _callback6,
  id: "callback:<>(p:r:value:String:)->future:[void:]",
  invoke: _callback6Invoke,
  matches: _callback6Matches,
);
const _flaxBinding269 = FlaxTypeRef("callback", callback: _flaxBinding268);
const _flaxBinding270 = <FlaxParameter>[
  FlaxParameter("getter", _flaxBinding267, required: true),
  FlaxParameter("name", _flaxBinding0, required: true),
  FlaxParameter("setter", _flaxBinding269, required: true),
];
const _flaxBinding271 = FlaxInstanceMethod(
  _flaxBinding270,
  _flaxBinding163,
  _SemanticsBinding_registerStringServiceExtension,
);
const _flaxBinding272 = FlaxTypeRef(
  "map",
  item: _flaxBinding0,
  key: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "map:[String:][String:]",
    _collection5Create,
    _collection5Matches,
  ),
);
const _flaxBinding273 = FlaxTypeRef(
  "future",
  item: _flaxBinding5,
  future: FlaxFutureBinding("map:[any?:][String:]", _future4Adapt),
);
const _flaxBinding274 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "parameters",
      _flaxBinding272,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding273,
  _callback7,
  id: "callback:<>(p:r:parameters:map:[String:][String:])->future:[map:[any?:][String:]]",
  invoke: _callback7Invoke,
  matches: _callback7Matches,
);
const _flaxBinding275 = FlaxTypeRef("callback", callback: _flaxBinding274);
const _flaxBinding276 = <FlaxParameter>[
  FlaxParameter("callback", _flaxBinding275, required: true),
  FlaxParameter("name", _flaxBinding0, required: true),
];
const _flaxBinding277 = FlaxInstanceMethod(
  _flaxBinding276,
  _flaxBinding163,
  _SemanticsBinding_registerServiceExtension,
);
const _flaxBinding278 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _SemanticsBinding_toString,
);
const _flaxBinding279 = FlaxCallbackBinding(
  [],
  _flaxBinding163,
  FlaxCallbackAdapters.wrapVoid0,
  id: "callback:<>()->void:",
  invoke: FlaxCallbackAdapters.invokeVoid0,
  matches: FlaxCallbackAdapters.matchesVoid0,
);
const _flaxBinding280 = FlaxTypeRef("callback", callback: _flaxBinding279);
const _flaxBinding281 = <FlaxParameter>[
  FlaxParameter("listener", _flaxBinding280, required: true),
];
const _flaxBinding282 = FlaxInstanceMethod(
  _flaxBinding281,
  _flaxBinding163,
  _SemanticsBinding_addSemanticsEnabledListener,
);
const _flaxBinding283 = FlaxInstanceMethod(
  _flaxBinding281,
  _flaxBinding163,
  _SemanticsBinding_removeSemanticsEnabledListener,
);
const _flaxBinding284 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsActionEvent",
);
const _flaxBinding285 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding284,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  FlaxCallbackAdapters.wrapVoid1<api1.SemanticsActionEvent>,
  id: "callback:<>(p:r:value:object:flax.core/sdk_dart_ui#type:SemanticsActionEvent)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api1.SemanticsActionEvent>,
  matches: FlaxCallbackAdapters.matchesVoid1<api1.SemanticsActionEvent>,
);
const _flaxBinding286 = FlaxTypeRef("callback", callback: _flaxBinding285);
const _flaxBinding287 = <FlaxParameter>[
  FlaxParameter("listener", _flaxBinding286, required: true),
];
const _flaxBinding288 = FlaxInstanceMethod(
  _flaxBinding287,
  _flaxBinding163,
  _SemanticsBinding_addSemanticsActionListener,
);
const _flaxBinding289 = FlaxInstanceMethod(
  _flaxBinding287,
  _flaxBinding163,
  _SemanticsBinding_removeSemanticsActionListener,
);
const _flaxBinding290 = <FlaxParameter>[
  FlaxParameter("viewId", _flaxBinding19, required: true),
  FlaxParameter("nodeId", _flaxBinding19, required: true),
];
const _flaxBinding291 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Rect",
  nullable: true,
);
const _flaxBinding292 = FlaxInstanceMethod(
  _flaxBinding290,
  _flaxBinding291,
  _SemanticsBinding_getRectOfSemanticsNodeInViewCoordinates,
);
const _flaxBinding293 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsHandle",
);
const _flaxBinding294 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding293,
  _SemanticsBinding_ensureSemantics,
);
const _flaxBinding295 = <FlaxParameter>[
  FlaxParameter("action", _flaxBinding284, required: true),
];
const _flaxBinding296 = FlaxInstanceMethod(
  _flaxBinding295,
  _flaxBinding163,
  _SemanticsBinding_performSemanticsAction,
);
const _flaxBinding297 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding163,
  _SemanticsBinding_handleAccessibilityFeaturesChanged,
);
const _flaxBinding298 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsUpdateBuilder",
);
const _flaxBinding299 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding298,
  _SemanticsBinding_createSemanticsUpdateBuilder,
);
const _flaxBinding300 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsBinding",
  [
    _flaxBinding226,
    _flaxBinding228,
    _flaxBinding229,
    _flaxBinding230,
    _flaxBinding231,
    _flaxBinding233,
    _flaxBinding234,
  ],
  {
    "initInstances": _flaxBinding235,
    "debugCheckZone": _flaxBinding237,
    "initServiceExtensions": _flaxBinding238,
    "lockEvents": _flaxBinding243,
    "unlocked": _flaxBinding244,
    "reassembleApplication": _flaxBinding245,
    "performReassemble": _flaxBinding246,
    "registerSignalServiceExtension": _flaxBinding248,
    "registerBoolServiceExtension": _flaxBinding255,
    "registerNumericServiceExtension": _flaxBinding262,
    "postEvent": _flaxBinding264,
    "registerStringServiceExtension": _flaxBinding271,
    "registerServiceExtension": _flaxBinding277,
    "toString": _flaxBinding278,
    "addSemanticsEnabledListener": _flaxBinding282,
    "removeSemanticsEnabledListener": _flaxBinding283,
    "addSemanticsActionListener": _flaxBinding288,
    "removeSemanticsActionListener": _flaxBinding289,
    "getRectOfSemanticsNodeInViewCoordinates": _flaxBinding292,
    "ensureSemantics": _flaxBinding294,
    "performSemanticsAction": _flaxBinding296,
    "handleAccessibilityFeaturesChanged": _flaxBinding297,
    "createSemanticsUpdateBuilder": _flaxBinding299,
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
const _flaxBinding301 = FlaxGetter(
  "isSemanticBoundary",
  _flaxBinding52,
  _SemanticsConfiguration_isSemanticBoundary,
);
const _flaxBinding302 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
  nullable: true,
);
const _flaxBinding303 = FlaxGetter(
  "localeForSubtree",
  _flaxBinding302,
  _SemanticsConfiguration_localeForSubtree,
);
const _flaxBinding304 = FlaxGetter(
  "locale",
  _flaxBinding302,
  _SemanticsConfiguration_locale,
);
const _flaxBinding305 = FlaxGetter(
  "isBlockingUserActions",
  _flaxBinding52,
  _SemanticsConfiguration_isBlockingUserActions,
);
const _flaxBinding306 = FlaxGetter(
  "explicitChildNodes",
  _flaxBinding52,
  _SemanticsConfiguration_explicitChildNodes,
);
const _flaxBinding307 = FlaxGetter(
  "isBlockingSemanticsOfPreviouslyPaintedNodes",
  _flaxBinding52,
  _SemanticsConfiguration_isBlockingSemanticsOfPreviouslyPaintedNodes,
);
const _flaxBinding308 = FlaxGetter(
  "hasBeenAnnotated",
  _flaxBinding52,
  _SemanticsConfiguration_hasBeenAnnotated,
);
const _flaxBinding309 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding279,
);
const _flaxBinding310 = FlaxGetter(
  "onTap",
  _flaxBinding309,
  _SemanticsConfiguration_onTap,
);
const _flaxBinding311 = FlaxGetter(
  "onLongPress",
  _flaxBinding309,
  _SemanticsConfiguration_onLongPress,
);
const _flaxBinding312 = FlaxGetter(
  "onScrollLeft",
  _flaxBinding309,
  _SemanticsConfiguration_onScrollLeft,
);
const _flaxBinding313 = FlaxGetter(
  "onDismiss",
  _flaxBinding309,
  _SemanticsConfiguration_onDismiss,
);
const _flaxBinding314 = FlaxGetter(
  "onScrollRight",
  _flaxBinding309,
  _SemanticsConfiguration_onScrollRight,
);
const _flaxBinding315 = FlaxGetter(
  "onScrollUp",
  _flaxBinding309,
  _SemanticsConfiguration_onScrollUp,
);
const _flaxBinding316 = FlaxGetter(
  "onScrollDown",
  _flaxBinding309,
  _SemanticsConfiguration_onScrollDown,
);
const _flaxBinding317 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Offset",
);
const _flaxBinding318 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "targetOffset",
      _flaxBinding317,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  FlaxCallbackAdapters.wrapVoid1<api1.Offset>,
  id: "callback:<>(p:r:targetOffset:object:flax.core/flutter#type:Offset)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api1.Offset>,
  matches: FlaxCallbackAdapters.matchesVoid1<api1.Offset>,
);
const _flaxBinding319 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding318,
);
const _flaxBinding320 = FlaxGetter(
  "onScrollToOffset",
  _flaxBinding319,
  _SemanticsConfiguration_onScrollToOffset,
);
const _flaxBinding321 = FlaxGetter(
  "onIncrease",
  _flaxBinding309,
  _SemanticsConfiguration_onIncrease,
);
const _flaxBinding322 = FlaxGetter(
  "onDecrease",
  _flaxBinding309,
  _SemanticsConfiguration_onDecrease,
);
const _flaxBinding323 = FlaxGetter(
  "onCopy",
  _flaxBinding309,
  _SemanticsConfiguration_onCopy,
);
const _flaxBinding324 = FlaxGetter(
  "onCut",
  _flaxBinding309,
  _SemanticsConfiguration_onCut,
);
const _flaxBinding325 = FlaxGetter(
  "onPaste",
  _flaxBinding309,
  _SemanticsConfiguration_onPaste,
);
const _flaxBinding326 = FlaxGetter(
  "onShowOnScreen",
  _flaxBinding309,
  _SemanticsConfiguration_onShowOnScreen,
);
const _flaxBinding327 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "extendSelection",
      _flaxBinding52,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  FlaxCallbackAdapters.wrapVoid1<bool>,
  id: "callback:<>(p:r:extendSelection:bool:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<bool>,
  matches: FlaxCallbackAdapters.matchesVoid1<bool>,
);
const _flaxBinding328 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding327,
);
const _flaxBinding329 = FlaxGetter(
  "onMoveCursorForwardByCharacter",
  _flaxBinding328,
  _SemanticsConfiguration_onMoveCursorForwardByCharacter,
);
const _flaxBinding330 = FlaxGetter(
  "onMoveCursorBackwardByCharacter",
  _flaxBinding328,
  _SemanticsConfiguration_onMoveCursorBackwardByCharacter,
);
const _flaxBinding331 = FlaxGetter(
  "onMoveCursorForwardByWord",
  _flaxBinding328,
  _SemanticsConfiguration_onMoveCursorForwardByWord,
);
const _flaxBinding332 = FlaxGetter(
  "onMoveCursorBackwardByWord",
  _flaxBinding328,
  _SemanticsConfiguration_onMoveCursorBackwardByWord,
);
const _flaxBinding333 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextSelection",
);
const _flaxBinding334 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "selection",
      _flaxBinding333,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  FlaxCallbackAdapters.wrapVoid1<api6.TextSelection>,
  id: "callback:<>(p:r:selection:object:flax.core/flutter#type:TextSelection)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api6.TextSelection>,
  matches: FlaxCallbackAdapters.matchesVoid1<api6.TextSelection>,
);
const _flaxBinding335 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding334,
);
const _flaxBinding336 = FlaxGetter(
  "onSetSelection",
  _flaxBinding335,
  _SemanticsConfiguration_onSetSelection,
);
const _flaxBinding337 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "text",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  FlaxCallbackAdapters.wrapVoid1<String>,
  id: "callback:<>(p:r:text:String:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<String>,
  matches: FlaxCallbackAdapters.matchesVoid1<String>,
);
const _flaxBinding338 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding337,
);
const _flaxBinding339 = FlaxGetter(
  "onSetText",
  _flaxBinding338,
  _SemanticsConfiguration_onSetText,
);
const _flaxBinding340 = FlaxGetter(
  "onDidGainAccessibilityFocus",
  _flaxBinding309,
  _SemanticsConfiguration_onDidGainAccessibilityFocus,
);
const _flaxBinding341 = FlaxGetter(
  "onDidLoseAccessibilityFocus",
  _flaxBinding309,
  _SemanticsConfiguration_onDidLoseAccessibilityFocus,
);
const _flaxBinding342 = FlaxGetter(
  "onFocus",
  _flaxBinding309,
  _SemanticsConfiguration_onFocus,
);
const _flaxBinding343 = FlaxGetter(
  "onExpand",
  _flaxBinding309,
  _SemanticsConfiguration_onExpand,
);
const _flaxBinding344 = FlaxGetter(
  "onCollapse",
  _flaxBinding309,
  _SemanticsConfiguration_onCollapse,
);
const _flaxBinding345 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "p0",
      _flaxBinding152,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding167,
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
const _flaxBinding346 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding345,
);
const _flaxBinding347 = FlaxGetter(
  "childConfigurationsDelegate",
  _flaxBinding346,
  _SemanticsConfiguration_childConfigurationsDelegate,
);
const _flaxBinding348 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsSortKey",
  nullable: true,
);
const _flaxBinding349 = FlaxGetter(
  "sortKey",
  _flaxBinding348,
  _SemanticsConfiguration_sortKey,
);
const _flaxBinding350 = FlaxGetter(
  "indexInParent",
  _flaxBinding2,
  _SemanticsConfiguration_indexInParent,
);
const _flaxBinding351 = FlaxGetter(
  "scrollChildCount",
  _flaxBinding2,
  _SemanticsConfiguration_scrollChildCount,
);
const _flaxBinding352 = FlaxGetter(
  "scrollIndex",
  _flaxBinding2,
  _SemanticsConfiguration_scrollIndex,
);
const _flaxBinding353 = FlaxGetter(
  "platformViewId",
  _flaxBinding2,
  _SemanticsConfiguration_platformViewId,
);
const _flaxBinding354 = FlaxGetter(
  "maxValueLength",
  _flaxBinding2,
  _SemanticsConfiguration_maxValueLength,
);
const _flaxBinding355 = FlaxGetter(
  "currentValueLength",
  _flaxBinding2,
  _SemanticsConfiguration_currentValueLength,
);
const _flaxBinding356 = FlaxGetter(
  "isMergingSemanticsOfDescendants",
  _flaxBinding52,
  _SemanticsConfiguration_isMergingSemanticsOfDescendants,
);
const _flaxBinding357 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:CustomSemanticsAction",
);
const _flaxBinding358 = FlaxTypeRef(
  "map",
  item: _flaxBinding280,
  key: _flaxBinding357,
  collection: FlaxCollectionBinding(
    "map:[callback:<>()->void:][object:flax.core/sdk_semantics#type:CustomSemanticsAction]",
    _collection10Create,
    _collection10Matches,
  ),
);
const _flaxBinding359 = FlaxGetter(
  "customSemanticsActions",
  _flaxBinding358,
  _SemanticsConfiguration_customSemanticsActions,
);
const _flaxBinding360 = FlaxGetter(
  "identifier",
  _flaxBinding0,
  _SemanticsConfiguration_identifier,
);
const _flaxBinding361 = FlaxGetter(
  "traversalParentIdentifier",
  _flaxBinding4,
  _SemanticsConfiguration_traversalParentIdentifier,
);
const _flaxBinding362 = FlaxGetter(
  "traversalChildIdentifier",
  _flaxBinding4,
  _SemanticsConfiguration_traversalChildIdentifier,
);
const _flaxBinding363 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsRole",
);
const _flaxBinding364 = FlaxGetter(
  "role",
  _flaxBinding363,
  _SemanticsConfiguration_role,
);
const _flaxBinding365 = FlaxGetter(
  "label",
  _flaxBinding0,
  _SemanticsConfiguration_label,
);
const _flaxBinding366 = FlaxGetter(
  "attributedLabel",
  _flaxBinding42,
  _SemanticsConfiguration_attributedLabel,
);
const _flaxBinding367 = FlaxGetter(
  "value",
  _flaxBinding0,
  _SemanticsConfiguration_value,
);
const _flaxBinding368 = FlaxGetter(
  "attributedValue",
  _flaxBinding42,
  _SemanticsConfiguration_attributedValue,
);
const _flaxBinding369 = FlaxGetter(
  "increasedValue",
  _flaxBinding0,
  _SemanticsConfiguration_increasedValue,
);
const _flaxBinding370 = FlaxGetter(
  "attributedIncreasedValue",
  _flaxBinding42,
  _SemanticsConfiguration_attributedIncreasedValue,
);
const _flaxBinding371 = FlaxGetter(
  "decreasedValue",
  _flaxBinding0,
  _SemanticsConfiguration_decreasedValue,
);
const _flaxBinding372 = FlaxGetter(
  "attributedDecreasedValue",
  _flaxBinding42,
  _SemanticsConfiguration_attributedDecreasedValue,
);
const _flaxBinding373 = FlaxGetter(
  "hint",
  _flaxBinding0,
  _SemanticsConfiguration_hint,
);
const _flaxBinding374 = FlaxGetter(
  "attributedHint",
  _flaxBinding42,
  _SemanticsConfiguration_attributedHint,
);
const _flaxBinding375 = FlaxGetter(
  "tooltip",
  _flaxBinding0,
  _SemanticsConfiguration_tooltip,
);
const _flaxBinding376 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsHintOverrides",
  nullable: true,
);
const _flaxBinding377 = FlaxGetter(
  "hintOverrides",
  _flaxBinding376,
  _SemanticsConfiguration_hintOverrides,
);
const _flaxBinding378 = FlaxGetter(
  "scopesRoute",
  _flaxBinding52,
  _SemanticsConfiguration_scopesRoute,
);
const _flaxBinding379 = FlaxGetter(
  "namesRoute",
  _flaxBinding52,
  _SemanticsConfiguration_namesRoute,
);
const _flaxBinding380 = FlaxGetter(
  "isImage",
  _flaxBinding52,
  _SemanticsConfiguration_isImage,
);
const _flaxBinding381 = FlaxGetter(
  "liveRegion",
  _flaxBinding52,
  _SemanticsConfiguration_liveRegion,
);
const _flaxBinding382 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextDirection",
  nullable: true,
);
const _flaxBinding383 = FlaxGetter(
  "textDirection",
  _flaxBinding382,
  _SemanticsConfiguration_textDirection,
);
const _flaxBinding384 = FlaxGetter(
  "isSelected",
  _flaxBinding52,
  _SemanticsConfiguration_isSelected,
);
const _flaxBinding385 = FlaxTypeRef("bool", nullable: true);
const _flaxBinding386 = FlaxGetter(
  "isExpanded",
  _flaxBinding385,
  _SemanticsConfiguration_isExpanded,
);
const _flaxBinding387 = FlaxGetter(
  "isEnabled",
  _flaxBinding385,
  _SemanticsConfiguration_isEnabled,
);
const _flaxBinding388 = FlaxGetter(
  "isChecked",
  _flaxBinding385,
  _SemanticsConfiguration_isChecked,
);
const _flaxBinding389 = FlaxGetter(
  "isCheckStateMixed",
  _flaxBinding385,
  _SemanticsConfiguration_isCheckStateMixed,
);
const _flaxBinding390 = FlaxGetter(
  "isToggled",
  _flaxBinding385,
  _SemanticsConfiguration_isToggled,
);
const _flaxBinding391 = FlaxGetter(
  "isInMutuallyExclusiveGroup",
  _flaxBinding52,
  _SemanticsConfiguration_isInMutuallyExclusiveGroup,
);
const _flaxBinding392 = FlaxGetter(
  "isFocusable",
  _flaxBinding52,
  _SemanticsConfiguration_isFocusable,
);
const _flaxBinding393 = FlaxGetter(
  "isFocused",
  _flaxBinding385,
  _SemanticsConfiguration_isFocused,
);
const _flaxBinding394 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_semantics#type:AccessibilityFocusBlockType",
);
const _flaxBinding395 = FlaxGetter(
  "accessibilityFocusBlockType",
  _flaxBinding394,
  _SemanticsConfiguration_accessibilityFocusBlockType,
);
const _flaxBinding396 = FlaxGetter(
  "isButton",
  _flaxBinding52,
  _SemanticsConfiguration_isButton,
);
const _flaxBinding397 = FlaxGetter(
  "isLink",
  _flaxBinding52,
  _SemanticsConfiguration_isLink,
);
const _flaxBinding398 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Uri",
  nullable: true,
);
const _flaxBinding399 = FlaxGetter(
  "linkUrl",
  _flaxBinding398,
  _SemanticsConfiguration_linkUrl,
);
const _flaxBinding400 = FlaxGetter(
  "isHeader",
  _flaxBinding52,
  _SemanticsConfiguration_isHeader,
);
const _flaxBinding401 = FlaxGetter(
  "headingLevel",
  _flaxBinding19,
  _SemanticsConfiguration_headingLevel,
);
const _flaxBinding402 = FlaxGetter(
  "isSlider",
  _flaxBinding52,
  _SemanticsConfiguration_isSlider,
);
const _flaxBinding403 = FlaxGetter(
  "isKeyboardKey",
  _flaxBinding52,
  _SemanticsConfiguration_isKeyboardKey,
);
const _flaxBinding404 = FlaxGetter(
  "isHidden",
  _flaxBinding52,
  _SemanticsConfiguration_isHidden,
);
const _flaxBinding405 = FlaxGetter(
  "isTextField",
  _flaxBinding52,
  _SemanticsConfiguration_isTextField,
);
const _flaxBinding406 = FlaxGetter(
  "isReadOnly",
  _flaxBinding52,
  _SemanticsConfiguration_isReadOnly,
);
const _flaxBinding407 = FlaxGetter(
  "isObscured",
  _flaxBinding52,
  _SemanticsConfiguration_isObscured,
);
const _flaxBinding408 = FlaxGetter(
  "isMultiline",
  _flaxBinding52,
  _SemanticsConfiguration_isMultiline,
);
const _flaxBinding409 = FlaxGetter(
  "isRequired",
  _flaxBinding385,
  _SemanticsConfiguration_isRequired,
);
const _flaxBinding410 = FlaxGetter(
  "hasImplicitScrolling",
  _flaxBinding52,
  _SemanticsConfiguration_hasImplicitScrolling,
);
const _flaxBinding411 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextSelection",
  nullable: true,
);
const _flaxBinding412 = FlaxGetter(
  "textSelection",
  _flaxBinding411,
  _SemanticsConfiguration_textSelection,
);
const _flaxBinding413 = FlaxTypeRef("double", nullable: true);
const _flaxBinding414 = FlaxGetter(
  "scrollPosition",
  _flaxBinding413,
  _SemanticsConfiguration_scrollPosition,
);
const _flaxBinding415 = FlaxGetter(
  "scrollExtentMax",
  _flaxBinding413,
  _SemanticsConfiguration_scrollExtentMax,
);
const _flaxBinding416 = FlaxGetter(
  "scrollExtentMin",
  _flaxBinding413,
  _SemanticsConfiguration_scrollExtentMin,
);
const _flaxBinding417 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection12Create,
    _collection12Matches,
    restore: _collection12Restore,
  ),
);
const _flaxBinding418 = FlaxTypeRef(
  "set",
  nullable: true,
  item: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "set:[String:]",
    _collection11Create,
    _collection11Matches,
  ),
  iterable: _flaxBinding417,
);
const _flaxBinding419 = FlaxGetter(
  "controlsNodes",
  _flaxBinding418,
  _SemanticsConfiguration_controlsNodes,
);
const _flaxBinding420 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsValidationResult",
);
const _flaxBinding421 = FlaxGetter(
  "validationResult",
  _flaxBinding420,
  _SemanticsConfiguration_validationResult,
);
const _flaxBinding422 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
);
const _flaxBinding423 = FlaxGetter(
  "hitTestBehavior",
  _flaxBinding422,
  _SemanticsConfiguration_hitTestBehavior,
);
const _flaxBinding424 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsInputType",
);
const _flaxBinding425 = FlaxGetter(
  "inputType",
  _flaxBinding424,
  _SemanticsConfiguration_inputType,
);
const _flaxBinding426 = FlaxGetter(
  "maxValue",
  _flaxBinding56,
  _SemanticsConfiguration_maxValue,
);
const _flaxBinding427 = FlaxGetter(
  "minValue",
  _flaxBinding56,
  _SemanticsConfiguration_minValue,
);
const _flaxBinding428 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsTag",
);
const _flaxBinding429 = FlaxTypeRef(
  "iterable",
  nullable: true,
  item: _flaxBinding428,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_semantics#type:SemanticsTag]",
    _collection13Create,
    _collection13Matches,
    restore: _collection13Restore,
  ),
);
const _flaxBinding430 = FlaxGetter(
  "tagsForChildren",
  _flaxBinding429,
  _SemanticsConfiguration_tagsForChildren,
);
const _flaxBinding431 = FlaxSetter(
  "isSemanticBoundary",
  _flaxBinding52,
  _SemanticsConfiguration_set_isSemanticBoundary,
);
const _flaxBinding432 = FlaxSetter(
  "localeForSubtree",
  _flaxBinding302,
  _SemanticsConfiguration_set_localeForSubtree,
);
const _flaxBinding433 = FlaxSetter(
  "locale",
  _flaxBinding302,
  _SemanticsConfiguration_set_locale,
);
const _flaxBinding434 = FlaxSetter(
  "isBlockingUserActions",
  _flaxBinding52,
  _SemanticsConfiguration_set_isBlockingUserActions,
);
const _flaxBinding435 = FlaxSetter(
  "explicitChildNodes",
  _flaxBinding52,
  _SemanticsConfiguration_set_explicitChildNodes,
);
const _flaxBinding436 = FlaxSetter(
  "isBlockingSemanticsOfPreviouslyPaintedNodes",
  _flaxBinding52,
  _SemanticsConfiguration_set_isBlockingSemanticsOfPreviouslyPaintedNodes,
);
const _flaxBinding437 = FlaxSetter(
  "onTap",
  _flaxBinding309,
  _SemanticsConfiguration_set_onTap,
);
const _flaxBinding438 = FlaxSetter(
  "onLongPress",
  _flaxBinding309,
  _SemanticsConfiguration_set_onLongPress,
);
const _flaxBinding439 = FlaxSetter(
  "onScrollLeft",
  _flaxBinding309,
  _SemanticsConfiguration_set_onScrollLeft,
);
const _flaxBinding440 = FlaxSetter(
  "onDismiss",
  _flaxBinding309,
  _SemanticsConfiguration_set_onDismiss,
);
const _flaxBinding441 = FlaxSetter(
  "onScrollRight",
  _flaxBinding309,
  _SemanticsConfiguration_set_onScrollRight,
);
const _flaxBinding442 = FlaxSetter(
  "onScrollUp",
  _flaxBinding309,
  _SemanticsConfiguration_set_onScrollUp,
);
const _flaxBinding443 = FlaxSetter(
  "onScrollDown",
  _flaxBinding309,
  _SemanticsConfiguration_set_onScrollDown,
);
const _flaxBinding444 = FlaxSetter(
  "onScrollToOffset",
  _flaxBinding319,
  _SemanticsConfiguration_set_onScrollToOffset,
);
const _flaxBinding445 = FlaxSetter(
  "onIncrease",
  _flaxBinding309,
  _SemanticsConfiguration_set_onIncrease,
);
const _flaxBinding446 = FlaxSetter(
  "onDecrease",
  _flaxBinding309,
  _SemanticsConfiguration_set_onDecrease,
);
const _flaxBinding447 = FlaxSetter(
  "onCopy",
  _flaxBinding309,
  _SemanticsConfiguration_set_onCopy,
);
const _flaxBinding448 = FlaxSetter(
  "onCut",
  _flaxBinding309,
  _SemanticsConfiguration_set_onCut,
);
const _flaxBinding449 = FlaxSetter(
  "onPaste",
  _flaxBinding309,
  _SemanticsConfiguration_set_onPaste,
);
const _flaxBinding450 = FlaxSetter(
  "onShowOnScreen",
  _flaxBinding309,
  _SemanticsConfiguration_set_onShowOnScreen,
);
const _flaxBinding451 = FlaxSetter(
  "onMoveCursorForwardByCharacter",
  _flaxBinding328,
  _SemanticsConfiguration_set_onMoveCursorForwardByCharacter,
);
const _flaxBinding452 = FlaxSetter(
  "onMoveCursorBackwardByCharacter",
  _flaxBinding328,
  _SemanticsConfiguration_set_onMoveCursorBackwardByCharacter,
);
const _flaxBinding453 = FlaxSetter(
  "onMoveCursorForwardByWord",
  _flaxBinding328,
  _SemanticsConfiguration_set_onMoveCursorForwardByWord,
);
const _flaxBinding454 = FlaxSetter(
  "onMoveCursorBackwardByWord",
  _flaxBinding328,
  _SemanticsConfiguration_set_onMoveCursorBackwardByWord,
);
const _flaxBinding455 = FlaxSetter(
  "onSetSelection",
  _flaxBinding335,
  _SemanticsConfiguration_set_onSetSelection,
);
const _flaxBinding456 = FlaxSetter(
  "onSetText",
  _flaxBinding338,
  _SemanticsConfiguration_set_onSetText,
);
const _flaxBinding457 = FlaxSetter(
  "onDidGainAccessibilityFocus",
  _flaxBinding309,
  _SemanticsConfiguration_set_onDidGainAccessibilityFocus,
);
const _flaxBinding458 = FlaxSetter(
  "onDidLoseAccessibilityFocus",
  _flaxBinding309,
  _SemanticsConfiguration_set_onDidLoseAccessibilityFocus,
);
const _flaxBinding459 = FlaxSetter(
  "onFocus",
  _flaxBinding309,
  _SemanticsConfiguration_set_onFocus,
);
const _flaxBinding460 = FlaxSetter(
  "onExpand",
  _flaxBinding309,
  _SemanticsConfiguration_set_onExpand,
);
const _flaxBinding461 = FlaxSetter(
  "onCollapse",
  _flaxBinding309,
  _SemanticsConfiguration_set_onCollapse,
);
const _flaxBinding462 = FlaxSetter(
  "childConfigurationsDelegate",
  _flaxBinding346,
  _SemanticsConfiguration_set_childConfigurationsDelegate,
);
const _flaxBinding463 = FlaxSetter(
  "sortKey",
  _flaxBinding348,
  _SemanticsConfiguration_set_sortKey,
);
const _flaxBinding464 = FlaxSetter(
  "indexInParent",
  _flaxBinding2,
  _SemanticsConfiguration_set_indexInParent,
);
const _flaxBinding465 = FlaxSetter(
  "scrollChildCount",
  _flaxBinding2,
  _SemanticsConfiguration_set_scrollChildCount,
);
const _flaxBinding466 = FlaxSetter(
  "scrollIndex",
  _flaxBinding2,
  _SemanticsConfiguration_set_scrollIndex,
);
const _flaxBinding467 = FlaxSetter(
  "platformViewId",
  _flaxBinding2,
  _SemanticsConfiguration_set_platformViewId,
);
const _flaxBinding468 = FlaxSetter(
  "maxValueLength",
  _flaxBinding2,
  _SemanticsConfiguration_set_maxValueLength,
);
const _flaxBinding469 = FlaxSetter(
  "currentValueLength",
  _flaxBinding2,
  _SemanticsConfiguration_set_currentValueLength,
);
const _flaxBinding470 = FlaxSetter(
  "isMergingSemanticsOfDescendants",
  _flaxBinding52,
  _SemanticsConfiguration_set_isMergingSemanticsOfDescendants,
);
const _flaxBinding471 = FlaxSetter(
  "customSemanticsActions",
  _flaxBinding358,
  _SemanticsConfiguration_set_customSemanticsActions,
);
const _flaxBinding472 = FlaxSetter(
  "identifier",
  _flaxBinding0,
  _SemanticsConfiguration_set_identifier,
);
const _flaxBinding473 = FlaxSetter(
  "traversalParentIdentifier",
  _flaxBinding4,
  _SemanticsConfiguration_set_traversalParentIdentifier,
);
const _flaxBinding474 = FlaxSetter(
  "traversalChildIdentifier",
  _flaxBinding4,
  _SemanticsConfiguration_set_traversalChildIdentifier,
);
const _flaxBinding475 = FlaxSetter(
  "role",
  _flaxBinding363,
  _SemanticsConfiguration_set_role,
);
const _flaxBinding476 = FlaxSetter(
  "label",
  _flaxBinding0,
  _SemanticsConfiguration_set_label,
);
const _flaxBinding477 = FlaxSetter(
  "attributedLabel",
  _flaxBinding42,
  _SemanticsConfiguration_set_attributedLabel,
);
const _flaxBinding478 = FlaxSetter(
  "value",
  _flaxBinding0,
  _SemanticsConfiguration_set_value,
);
const _flaxBinding479 = FlaxSetter(
  "attributedValue",
  _flaxBinding42,
  _SemanticsConfiguration_set_attributedValue,
);
const _flaxBinding480 = FlaxSetter(
  "increasedValue",
  _flaxBinding0,
  _SemanticsConfiguration_set_increasedValue,
);
const _flaxBinding481 = FlaxSetter(
  "attributedIncreasedValue",
  _flaxBinding42,
  _SemanticsConfiguration_set_attributedIncreasedValue,
);
const _flaxBinding482 = FlaxSetter(
  "decreasedValue",
  _flaxBinding0,
  _SemanticsConfiguration_set_decreasedValue,
);
const _flaxBinding483 = FlaxSetter(
  "attributedDecreasedValue",
  _flaxBinding42,
  _SemanticsConfiguration_set_attributedDecreasedValue,
);
const _flaxBinding484 = FlaxSetter(
  "hint",
  _flaxBinding0,
  _SemanticsConfiguration_set_hint,
);
const _flaxBinding485 = FlaxSetter(
  "attributedHint",
  _flaxBinding42,
  _SemanticsConfiguration_set_attributedHint,
);
const _flaxBinding486 = FlaxSetter(
  "tooltip",
  _flaxBinding0,
  _SemanticsConfiguration_set_tooltip,
);
const _flaxBinding487 = FlaxSetter(
  "hintOverrides",
  _flaxBinding376,
  _SemanticsConfiguration_set_hintOverrides,
);
const _flaxBinding488 = FlaxSetter(
  "scopesRoute",
  _flaxBinding52,
  _SemanticsConfiguration_set_scopesRoute,
);
const _flaxBinding489 = FlaxSetter(
  "namesRoute",
  _flaxBinding52,
  _SemanticsConfiguration_set_namesRoute,
);
const _flaxBinding490 = FlaxSetter(
  "isImage",
  _flaxBinding52,
  _SemanticsConfiguration_set_isImage,
);
const _flaxBinding491 = FlaxSetter(
  "liveRegion",
  _flaxBinding52,
  _SemanticsConfiguration_set_liveRegion,
);
const _flaxBinding492 = FlaxSetter(
  "textDirection",
  _flaxBinding382,
  _SemanticsConfiguration_set_textDirection,
);
const _flaxBinding493 = FlaxSetter(
  "isSelected",
  _flaxBinding52,
  _SemanticsConfiguration_set_isSelected,
);
const _flaxBinding494 = FlaxSetter(
  "isExpanded",
  _flaxBinding385,
  _SemanticsConfiguration_set_isExpanded,
);
const _flaxBinding495 = FlaxSetter(
  "isEnabled",
  _flaxBinding385,
  _SemanticsConfiguration_set_isEnabled,
);
const _flaxBinding496 = FlaxSetter(
  "isChecked",
  _flaxBinding385,
  _SemanticsConfiguration_set_isChecked,
);
const _flaxBinding497 = FlaxSetter(
  "isCheckStateMixed",
  _flaxBinding385,
  _SemanticsConfiguration_set_isCheckStateMixed,
);
const _flaxBinding498 = FlaxSetter(
  "isToggled",
  _flaxBinding385,
  _SemanticsConfiguration_set_isToggled,
);
const _flaxBinding499 = FlaxSetter(
  "isInMutuallyExclusiveGroup",
  _flaxBinding52,
  _SemanticsConfiguration_set_isInMutuallyExclusiveGroup,
);
const _flaxBinding500 = FlaxSetter(
  "isFocusable",
  _flaxBinding52,
  _SemanticsConfiguration_set_isFocusable,
);
const _flaxBinding501 = FlaxSetter(
  "isFocused",
  _flaxBinding385,
  _SemanticsConfiguration_set_isFocused,
);
const _flaxBinding502 = FlaxSetter(
  "accessibilityFocusBlockType",
  _flaxBinding394,
  _SemanticsConfiguration_set_accessibilityFocusBlockType,
);
const _flaxBinding503 = FlaxSetter(
  "isButton",
  _flaxBinding52,
  _SemanticsConfiguration_set_isButton,
);
const _flaxBinding504 = FlaxSetter(
  "isLink",
  _flaxBinding52,
  _SemanticsConfiguration_set_isLink,
);
const _flaxBinding505 = FlaxSetter(
  "linkUrl",
  _flaxBinding398,
  _SemanticsConfiguration_set_linkUrl,
);
const _flaxBinding506 = FlaxSetter(
  "isHeader",
  _flaxBinding52,
  _SemanticsConfiguration_set_isHeader,
);
const _flaxBinding507 = FlaxSetter(
  "headingLevel",
  _flaxBinding19,
  _SemanticsConfiguration_set_headingLevel,
);
const _flaxBinding508 = FlaxSetter(
  "isSlider",
  _flaxBinding52,
  _SemanticsConfiguration_set_isSlider,
);
const _flaxBinding509 = FlaxSetter(
  "isKeyboardKey",
  _flaxBinding52,
  _SemanticsConfiguration_set_isKeyboardKey,
);
const _flaxBinding510 = FlaxSetter(
  "isHidden",
  _flaxBinding52,
  _SemanticsConfiguration_set_isHidden,
);
const _flaxBinding511 = FlaxSetter(
  "isTextField",
  _flaxBinding52,
  _SemanticsConfiguration_set_isTextField,
);
const _flaxBinding512 = FlaxSetter(
  "isReadOnly",
  _flaxBinding52,
  _SemanticsConfiguration_set_isReadOnly,
);
const _flaxBinding513 = FlaxSetter(
  "isObscured",
  _flaxBinding52,
  _SemanticsConfiguration_set_isObscured,
);
const _flaxBinding514 = FlaxSetter(
  "isMultiline",
  _flaxBinding52,
  _SemanticsConfiguration_set_isMultiline,
);
const _flaxBinding515 = FlaxSetter(
  "isRequired",
  _flaxBinding385,
  _SemanticsConfiguration_set_isRequired,
);
const _flaxBinding516 = FlaxSetter(
  "hasImplicitScrolling",
  _flaxBinding52,
  _SemanticsConfiguration_set_hasImplicitScrolling,
);
const _flaxBinding517 = FlaxSetter(
  "textSelection",
  _flaxBinding411,
  _SemanticsConfiguration_set_textSelection,
);
const _flaxBinding518 = FlaxSetter(
  "scrollPosition",
  _flaxBinding413,
  _SemanticsConfiguration_set_scrollPosition,
);
const _flaxBinding519 = FlaxSetter(
  "scrollExtentMax",
  _flaxBinding413,
  _SemanticsConfiguration_set_scrollExtentMax,
);
const _flaxBinding520 = FlaxSetter(
  "scrollExtentMin",
  _flaxBinding413,
  _SemanticsConfiguration_set_scrollExtentMin,
);
const _flaxBinding521 = FlaxSetter(
  "controlsNodes",
  _flaxBinding418,
  _SemanticsConfiguration_set_controlsNodes,
);
const _flaxBinding522 = FlaxSetter(
  "validationResult",
  _flaxBinding420,
  _SemanticsConfiguration_set_validationResult,
);
const _flaxBinding523 = FlaxSetter(
  "hitTestBehavior",
  _flaxBinding422,
  _SemanticsConfiguration_set_hitTestBehavior,
);
const _flaxBinding524 = FlaxSetter(
  "inputType",
  _flaxBinding424,
  _SemanticsConfiguration_set_inputType,
);
const _flaxBinding525 = FlaxSetter(
  "maxValue",
  _flaxBinding56,
  _SemanticsConfiguration_set_maxValue,
);
const _flaxBinding526 = FlaxSetter(
  "minValue",
  _flaxBinding56,
  _SemanticsConfiguration_set_minValue,
);
const _flaxBinding527 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsAction",
);
const _flaxBinding528 = <FlaxParameter>[
  FlaxParameter("action", _flaxBinding527, required: true),
];
const _flaxBinding529 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "args",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  FlaxCallbackAdapters.wrapVoid1<Object?>,
  id: "callback:<>(p:r:args:any?:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<Object?>,
  matches: FlaxCallbackAdapters.matchesVoid1<Object?>,
);
const _flaxBinding530 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding529,
);
const _flaxBinding531 = FlaxInstanceMethod(
  _flaxBinding528,
  _flaxBinding530,
  _SemanticsConfiguration_getActionHandler,
);
const _flaxBinding532 = <FlaxParameter>[
  FlaxParameter("tag", _flaxBinding428, required: true),
];
const _flaxBinding533 = FlaxInstanceMethod(
  _flaxBinding532,
  _flaxBinding52,
  _SemanticsConfiguration_tagsChildrenWith,
);
const _flaxBinding534 = FlaxInstanceMethod(
  _flaxBinding532,
  _flaxBinding163,
  _SemanticsConfiguration_addTagForChildren,
);
const _flaxBinding535 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsConfiguration",
  nullable: true,
);
const _flaxBinding536 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding535, required: true),
];
const _flaxBinding537 = FlaxInstanceMethod(
  _flaxBinding536,
  _flaxBinding52,
  _SemanticsConfiguration_isCompatibleWith,
);
const _flaxBinding538 = <FlaxParameter>[
  FlaxParameter("child", _flaxBinding150, required: true),
];
const _flaxBinding539 = FlaxInstanceMethod(
  _flaxBinding538,
  _flaxBinding163,
  _SemanticsConfiguration_absorb,
);
const _flaxBinding540 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding150,
  _SemanticsConfiguration_copy,
);
const _flaxBinding541 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "action",
      _flaxBinding527,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding530,
  id: "callback:<>(p:r:action:object:flax.core/sdk_dart_ui#type:SemanticsAction)->callback?:<>(p:r:args:any?:)->void:",
);
const _flaxBinding542 = FlaxProxyMember(
  "getActionHandler",
  0,
  _flaxBinding541,
  hasSuper: true,
);
const _flaxBinding543 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "tag",
      _flaxBinding428,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding52,
  id: "callback:<>(p:r:tag:object:flax.core/sdk_semantics#type:SemanticsTag)->bool:",
);
const _flaxBinding544 = FlaxProxyMember(
  "tagsChildrenWith",
  0,
  _flaxBinding543,
  hasSuper: true,
);
const _flaxBinding545 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "tag",
      _flaxBinding428,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:tag:object:flax.core/sdk_semantics#type:SemanticsTag)->void:",
);
const _flaxBinding546 = FlaxProxyMember(
  "addTagForChildren",
  0,
  _flaxBinding545,
  hasSuper: true,
);
const _flaxBinding547 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "other",
      _flaxBinding535,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding52,
  id: "callback:<>(p:r:other:object?:flax.core/sdk_semantics#type:SemanticsConfiguration)->bool:",
);
const _flaxBinding548 = FlaxProxyMember(
  "isCompatibleWith",
  0,
  _flaxBinding547,
  hasSuper: true,
);
const _flaxBinding549 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "child",
      _flaxBinding150,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:child:object:flax.core/sdk_semantics#type:SemanticsConfiguration)->void:",
);
const _flaxBinding550 = FlaxProxyMember(
  "absorb",
  0,
  _flaxBinding549,
  hasSuper: true,
);
const _flaxBinding551 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding150,
  id: "callback:<>()->object:flax.core/sdk_semantics#type:SemanticsConfiguration",
);
const _flaxBinding552 = FlaxProxyMember(
  "copy",
  0,
  _flaxBinding551,
  hasSuper: true,
);
const _flaxBinding553 = FlaxProxyMember(
  "isSemanticBoundary",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding554 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding302,
  id: "callback:<>()->object?:flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding555 = FlaxProxyMember(
  "localeForSubtree",
  1,
  _flaxBinding554,
  hasSuper: true,
);
const _flaxBinding556 = FlaxProxyMember(
  "locale",
  1,
  _flaxBinding554,
  hasSuper: true,
);
const _flaxBinding557 = FlaxProxyMember(
  "isBlockingUserActions",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding558 = FlaxProxyMember(
  "explicitChildNodes",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding559 = FlaxProxyMember(
  "isBlockingSemanticsOfPreviouslyPaintedNodes",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding560 = FlaxProxyMember(
  "hasBeenAnnotated",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding561 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding309,
  id: "callback:<>()->callback?:<>()->void:",
);
const _flaxBinding562 = FlaxProxyMember(
  "onTap",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding563 = FlaxProxyMember(
  "onLongPress",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding564 = FlaxProxyMember(
  "onScrollLeft",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding565 = FlaxProxyMember(
  "onDismiss",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding566 = FlaxProxyMember(
  "onScrollRight",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding567 = FlaxProxyMember(
  "onScrollUp",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding568 = FlaxProxyMember(
  "onScrollDown",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding569 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding319,
  id: "callback:<>()->callback?:<>(p:r:targetOffset:object:flax.core/flutter#type:Offset)->void:",
);
const _flaxBinding570 = FlaxProxyMember(
  "onScrollToOffset",
  1,
  _flaxBinding569,
  hasSuper: true,
);
const _flaxBinding571 = FlaxProxyMember(
  "onIncrease",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding572 = FlaxProxyMember(
  "onDecrease",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding573 = FlaxProxyMember(
  "onCopy",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding574 = FlaxProxyMember(
  "onCut",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding575 = FlaxProxyMember(
  "onPaste",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding576 = FlaxProxyMember(
  "onShowOnScreen",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding577 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding328,
  id: "callback:<>()->callback?:<>(p:r:extendSelection:bool:)->void:",
);
const _flaxBinding578 = FlaxProxyMember(
  "onMoveCursorForwardByCharacter",
  1,
  _flaxBinding577,
  hasSuper: true,
);
const _flaxBinding579 = FlaxProxyMember(
  "onMoveCursorBackwardByCharacter",
  1,
  _flaxBinding577,
  hasSuper: true,
);
const _flaxBinding580 = FlaxProxyMember(
  "onMoveCursorForwardByWord",
  1,
  _flaxBinding577,
  hasSuper: true,
);
const _flaxBinding581 = FlaxProxyMember(
  "onMoveCursorBackwardByWord",
  1,
  _flaxBinding577,
  hasSuper: true,
);
const _flaxBinding582 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding335,
  id: "callback:<>()->callback?:<>(p:r:selection:object:flax.core/flutter#type:TextSelection)->void:",
);
const _flaxBinding583 = FlaxProxyMember(
  "onSetSelection",
  1,
  _flaxBinding582,
  hasSuper: true,
);
const _flaxBinding584 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding338,
  id: "callback:<>()->callback?:<>(p:r:text:String:)->void:",
);
const _flaxBinding585 = FlaxProxyMember(
  "onSetText",
  1,
  _flaxBinding584,
  hasSuper: true,
);
const _flaxBinding586 = FlaxProxyMember(
  "onDidGainAccessibilityFocus",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding587 = FlaxProxyMember(
  "onDidLoseAccessibilityFocus",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding588 = FlaxProxyMember(
  "onFocus",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding589 = FlaxProxyMember(
  "onExpand",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding590 = FlaxProxyMember(
  "onCollapse",
  1,
  _flaxBinding561,
  hasSuper: true,
);
const _flaxBinding591 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding346,
  id: "callback:<>()->callback?:<>(p:r:p0:list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration])->object:flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult",
);
const _flaxBinding592 = FlaxProxyMember(
  "childConfigurationsDelegate",
  1,
  _flaxBinding591,
  hasSuper: true,
);
const _flaxBinding593 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding348,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:SemanticsSortKey",
);
const _flaxBinding594 = FlaxProxyMember(
  "sortKey",
  1,
  _flaxBinding593,
  hasSuper: true,
);
const _flaxBinding595 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding2,
  id: "callback:<>()->int?:",
);
const _flaxBinding596 = FlaxProxyMember(
  "indexInParent",
  1,
  _flaxBinding595,
  hasSuper: true,
);
const _flaxBinding597 = FlaxProxyMember(
  "scrollChildCount",
  1,
  _flaxBinding595,
  hasSuper: true,
);
const _flaxBinding598 = FlaxProxyMember(
  "scrollIndex",
  1,
  _flaxBinding595,
  hasSuper: true,
);
const _flaxBinding599 = FlaxProxyMember(
  "platformViewId",
  1,
  _flaxBinding595,
  hasSuper: true,
);
const _flaxBinding600 = FlaxProxyMember(
  "maxValueLength",
  1,
  _flaxBinding595,
  hasSuper: true,
);
const _flaxBinding601 = FlaxProxyMember(
  "currentValueLength",
  1,
  _flaxBinding595,
  hasSuper: true,
);
const _flaxBinding602 = FlaxProxyMember(
  "isMergingSemanticsOfDescendants",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding603 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding358,
  id: "callback:<>()->map:[callback:<>()->void:][object:flax.core/sdk_semantics#type:CustomSemanticsAction]",
);
const _flaxBinding604 = FlaxProxyMember(
  "customSemanticsActions",
  1,
  _flaxBinding603,
  hasSuper: true,
);
const _flaxBinding605 = FlaxProxyMember(
  "identifier",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding606 = FlaxProxyMember(
  "traversalParentIdentifier",
  1,
  _flaxBinding134,
  hasSuper: true,
);
const _flaxBinding607 = FlaxProxyMember(
  "traversalChildIdentifier",
  1,
  _flaxBinding134,
  hasSuper: true,
);
const _flaxBinding608 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding363,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:SemanticsRole",
);
const _flaxBinding609 = FlaxProxyMember(
  "role",
  1,
  _flaxBinding608,
  hasSuper: true,
);
const _flaxBinding610 = FlaxProxyMember(
  "label",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding611 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding42,
  id: "callback:<>()->object:flax.core/sdk_semantics#type:AttributedString",
);
const _flaxBinding612 = FlaxProxyMember(
  "attributedLabel",
  1,
  _flaxBinding611,
  hasSuper: true,
);
const _flaxBinding613 = FlaxProxyMember(
  "value",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding614 = FlaxProxyMember(
  "attributedValue",
  1,
  _flaxBinding611,
  hasSuper: true,
);
const _flaxBinding615 = FlaxProxyMember(
  "increasedValue",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding616 = FlaxProxyMember(
  "attributedIncreasedValue",
  1,
  _flaxBinding611,
  hasSuper: true,
);
const _flaxBinding617 = FlaxProxyMember(
  "decreasedValue",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding618 = FlaxProxyMember(
  "attributedDecreasedValue",
  1,
  _flaxBinding611,
  hasSuper: true,
);
const _flaxBinding619 = FlaxProxyMember(
  "hint",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding620 = FlaxProxyMember(
  "attributedHint",
  1,
  _flaxBinding611,
  hasSuper: true,
);
const _flaxBinding621 = FlaxProxyMember(
  "tooltip",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding622 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding376,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:SemanticsHintOverrides",
);
const _flaxBinding623 = FlaxProxyMember(
  "hintOverrides",
  1,
  _flaxBinding622,
  hasSuper: true,
);
const _flaxBinding624 = FlaxProxyMember(
  "scopesRoute",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding625 = FlaxProxyMember(
  "namesRoute",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding626 = FlaxProxyMember(
  "isImage",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding627 = FlaxProxyMember(
  "liveRegion",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding628 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding382,
  id: "callback:<>()->enum?:flax.core/flutter#type:TextDirection",
);
const _flaxBinding629 = FlaxProxyMember(
  "textDirection",
  1,
  _flaxBinding628,
  hasSuper: true,
);
const _flaxBinding630 = FlaxProxyMember(
  "isSelected",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding631 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding385,
  id: "callback:<>()->bool?:",
);
const _flaxBinding632 = FlaxProxyMember(
  "isExpanded",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding633 = FlaxProxyMember(
  "isEnabled",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding634 = FlaxProxyMember(
  "isChecked",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding635 = FlaxProxyMember(
  "isCheckStateMixed",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding636 = FlaxProxyMember(
  "isToggled",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding637 = FlaxProxyMember(
  "isInMutuallyExclusiveGroup",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding638 = FlaxProxyMember(
  "isFocusable",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding639 = FlaxProxyMember(
  "isFocused",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding640 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding394,
  id: "callback:<>()->enum:flax.core/sdk_semantics#type:AccessibilityFocusBlockType",
);
const _flaxBinding641 = FlaxProxyMember(
  "accessibilityFocusBlockType",
  1,
  _flaxBinding640,
  hasSuper: true,
);
const _flaxBinding642 = FlaxProxyMember(
  "isButton",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding643 = FlaxProxyMember(
  "isLink",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding644 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding398,
  id: "callback:<>()->object?:flax.core/flutter#type:Uri",
);
const _flaxBinding645 = FlaxProxyMember(
  "linkUrl",
  1,
  _flaxBinding644,
  hasSuper: true,
);
const _flaxBinding646 = FlaxProxyMember(
  "isHeader",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding647 = FlaxProxyMember(
  "headingLevel",
  1,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding648 = FlaxProxyMember(
  "isSlider",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding649 = FlaxProxyMember(
  "isKeyboardKey",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding650 = FlaxProxyMember(
  "isHidden",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding651 = FlaxProxyMember(
  "isTextField",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding652 = FlaxProxyMember(
  "isReadOnly",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding653 = FlaxProxyMember(
  "isObscured",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding654 = FlaxProxyMember(
  "isMultiline",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding655 = FlaxProxyMember(
  "isRequired",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding656 = FlaxProxyMember(
  "hasImplicitScrolling",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding657 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding411,
  id: "callback:<>()->object?:flax.core/flutter#type:TextSelection",
);
const _flaxBinding658 = FlaxProxyMember(
  "textSelection",
  1,
  _flaxBinding657,
  hasSuper: true,
);
const _flaxBinding659 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding413,
  id: "callback:<>()->double?:",
);
const _flaxBinding660 = FlaxProxyMember(
  "scrollPosition",
  1,
  _flaxBinding659,
  hasSuper: true,
);
const _flaxBinding661 = FlaxProxyMember(
  "scrollExtentMax",
  1,
  _flaxBinding659,
  hasSuper: true,
);
const _flaxBinding662 = FlaxProxyMember(
  "scrollExtentMin",
  1,
  _flaxBinding659,
  hasSuper: true,
);
const _flaxBinding663 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding418,
  id: "callback:<>()->set?:[String:]",
);
const _flaxBinding664 = FlaxProxyMember(
  "controlsNodes",
  1,
  _flaxBinding663,
  hasSuper: true,
);
const _flaxBinding665 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding420,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:SemanticsValidationResult",
);
const _flaxBinding666 = FlaxProxyMember(
  "validationResult",
  1,
  _flaxBinding665,
  hasSuper: true,
);
const _flaxBinding667 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding422,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
);
const _flaxBinding668 = FlaxProxyMember(
  "hitTestBehavior",
  1,
  _flaxBinding667,
  hasSuper: true,
);
const _flaxBinding669 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding424,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:SemanticsInputType",
);
const _flaxBinding670 = FlaxProxyMember(
  "inputType",
  1,
  _flaxBinding669,
  hasSuper: true,
);
const _flaxBinding671 = FlaxProxyMember(
  "maxValue",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding672 = FlaxProxyMember(
  "minValue",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding673 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding429,
  id: "callback:<>()->iterable?:[object:flax.core/sdk_semantics#type:SemanticsTag]",
);
const _flaxBinding674 = FlaxProxyMember(
  "tagsForChildren",
  1,
  _flaxBinding673,
  hasSuper: true,
);
const _flaxBinding675 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding52,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:bool:)->void:",
);
const _flaxBinding676 = FlaxProxyMember(
  "isSemanticBoundary",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding677 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding302,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_dart_ui#type:Locale)->void:",
);
const _flaxBinding678 = FlaxProxyMember(
  "localeForSubtree",
  2,
  _flaxBinding677,
  hasSuper: true,
);
const _flaxBinding679 = FlaxProxyMember(
  "locale",
  2,
  _flaxBinding677,
  hasSuper: true,
);
const _flaxBinding680 = FlaxProxyMember(
  "isBlockingUserActions",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding681 = FlaxProxyMember(
  "explicitChildNodes",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding682 = FlaxProxyMember(
  "isBlockingSemanticsOfPreviouslyPaintedNodes",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding683 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding309,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:callback?:<>()->void:)->void:",
);
const _flaxBinding684 = FlaxProxyMember(
  "onTap",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding685 = FlaxProxyMember(
  "onLongPress",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding686 = FlaxProxyMember(
  "onScrollLeft",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding687 = FlaxProxyMember(
  "onDismiss",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding688 = FlaxProxyMember(
  "onScrollRight",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding689 = FlaxProxyMember(
  "onScrollUp",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding690 = FlaxProxyMember(
  "onScrollDown",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding691 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding319,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:callback?:<>(p:r:targetOffset:object:flax.core/flutter#type:Offset)->void:)->void:",
);
const _flaxBinding692 = FlaxProxyMember(
  "onScrollToOffset",
  2,
  _flaxBinding691,
  hasSuper: true,
);
const _flaxBinding693 = FlaxProxyMember(
  "onIncrease",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding694 = FlaxProxyMember(
  "onDecrease",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding695 = FlaxProxyMember(
  "onCopy",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding696 = FlaxProxyMember(
  "onCut",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding697 = FlaxProxyMember(
  "onPaste",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding698 = FlaxProxyMember(
  "onShowOnScreen",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding699 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding328,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:callback?:<>(p:r:extendSelection:bool:)->void:)->void:",
);
const _flaxBinding700 = FlaxProxyMember(
  "onMoveCursorForwardByCharacter",
  2,
  _flaxBinding699,
  hasSuper: true,
);
const _flaxBinding701 = FlaxProxyMember(
  "onMoveCursorBackwardByCharacter",
  2,
  _flaxBinding699,
  hasSuper: true,
);
const _flaxBinding702 = FlaxProxyMember(
  "onMoveCursorForwardByWord",
  2,
  _flaxBinding699,
  hasSuper: true,
);
const _flaxBinding703 = FlaxProxyMember(
  "onMoveCursorBackwardByWord",
  2,
  _flaxBinding699,
  hasSuper: true,
);
const _flaxBinding704 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding335,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:callback?:<>(p:r:selection:object:flax.core/flutter#type:TextSelection)->void:)->void:",
);
const _flaxBinding705 = FlaxProxyMember(
  "onSetSelection",
  2,
  _flaxBinding704,
  hasSuper: true,
);
const _flaxBinding706 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding338,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:callback?:<>(p:r:text:String:)->void:)->void:",
);
const _flaxBinding707 = FlaxProxyMember(
  "onSetText",
  2,
  _flaxBinding706,
  hasSuper: true,
);
const _flaxBinding708 = FlaxProxyMember(
  "onDidGainAccessibilityFocus",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding709 = FlaxProxyMember(
  "onDidLoseAccessibilityFocus",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding710 = FlaxProxyMember(
  "onFocus",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding711 = FlaxProxyMember(
  "onExpand",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding712 = FlaxProxyMember(
  "onCollapse",
  2,
  _flaxBinding683,
  hasSuper: true,
);
const _flaxBinding713 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding346,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:callback?:<>(p:r:p0:list:[object:flax.core/sdk_semantics#type:SemanticsConfiguration])->object:flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult)->void:",
);
const _flaxBinding714 = FlaxProxyMember(
  "childConfigurationsDelegate",
  2,
  _flaxBinding713,
  hasSuper: true,
);
const _flaxBinding715 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding348,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_semantics#type:SemanticsSortKey)->void:",
);
const _flaxBinding716 = FlaxProxyMember(
  "sortKey",
  2,
  _flaxBinding715,
  hasSuper: true,
);
const _flaxBinding717 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding2,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:int?:)->void:",
);
const _flaxBinding718 = FlaxProxyMember(
  "indexInParent",
  2,
  _flaxBinding717,
  hasSuper: true,
);
const _flaxBinding719 = FlaxProxyMember(
  "scrollChildCount",
  2,
  _flaxBinding717,
  hasSuper: true,
);
const _flaxBinding720 = FlaxProxyMember(
  "scrollIndex",
  2,
  _flaxBinding717,
  hasSuper: true,
);
const _flaxBinding721 = FlaxProxyMember(
  "platformViewId",
  2,
  _flaxBinding717,
  hasSuper: true,
);
const _flaxBinding722 = FlaxProxyMember(
  "maxValueLength",
  2,
  _flaxBinding717,
  hasSuper: true,
);
const _flaxBinding723 = FlaxProxyMember(
  "currentValueLength",
  2,
  _flaxBinding717,
  hasSuper: true,
);
const _flaxBinding724 = FlaxProxyMember(
  "isMergingSemanticsOfDescendants",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding725 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding358,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:map:[callback:<>()->void:][object:flax.core/sdk_semantics#type:CustomSemanticsAction])->void:",
);
const _flaxBinding726 = FlaxProxyMember(
  "customSemanticsActions",
  2,
  _flaxBinding725,
  hasSuper: true,
);
const _flaxBinding727 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:String:)->void:",
);
const _flaxBinding728 = FlaxProxyMember(
  "identifier",
  2,
  _flaxBinding727,
  hasSuper: true,
);
const _flaxBinding729 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:any?:)->void:",
);
const _flaxBinding730 = FlaxProxyMember(
  "traversalParentIdentifier",
  2,
  _flaxBinding729,
  hasSuper: true,
);
const _flaxBinding731 = FlaxProxyMember(
  "traversalChildIdentifier",
  2,
  _flaxBinding729,
  hasSuper: true,
);
const _flaxBinding732 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding363,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_dart_ui#type:SemanticsRole)->void:",
);
const _flaxBinding733 = FlaxProxyMember(
  "role",
  2,
  _flaxBinding732,
  hasSuper: true,
);
const _flaxBinding734 = FlaxProxyMember(
  "label",
  2,
  _flaxBinding727,
  hasSuper: true,
);
const _flaxBinding735 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding42,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:object:flax.core/sdk_semantics#type:AttributedString)->void:",
);
const _flaxBinding736 = FlaxProxyMember(
  "attributedLabel",
  2,
  _flaxBinding735,
  hasSuper: true,
);
const _flaxBinding737 = FlaxProxyMember(
  "value",
  2,
  _flaxBinding727,
  hasSuper: true,
);
const _flaxBinding738 = FlaxProxyMember(
  "attributedValue",
  2,
  _flaxBinding735,
  hasSuper: true,
);
const _flaxBinding739 = FlaxProxyMember(
  "increasedValue",
  2,
  _flaxBinding727,
  hasSuper: true,
);
const _flaxBinding740 = FlaxProxyMember(
  "attributedIncreasedValue",
  2,
  _flaxBinding735,
  hasSuper: true,
);
const _flaxBinding741 = FlaxProxyMember(
  "decreasedValue",
  2,
  _flaxBinding727,
  hasSuper: true,
);
const _flaxBinding742 = FlaxProxyMember(
  "attributedDecreasedValue",
  2,
  _flaxBinding735,
  hasSuper: true,
);
const _flaxBinding743 = FlaxProxyMember(
  "hint",
  2,
  _flaxBinding727,
  hasSuper: true,
);
const _flaxBinding744 = FlaxProxyMember(
  "attributedHint",
  2,
  _flaxBinding735,
  hasSuper: true,
);
const _flaxBinding745 = FlaxProxyMember(
  "tooltip",
  2,
  _flaxBinding727,
  hasSuper: true,
);
const _flaxBinding746 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding376,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_semantics#type:SemanticsHintOverrides)->void:",
);
const _flaxBinding747 = FlaxProxyMember(
  "hintOverrides",
  2,
  _flaxBinding746,
  hasSuper: true,
);
const _flaxBinding748 = FlaxProxyMember(
  "scopesRoute",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding749 = FlaxProxyMember(
  "namesRoute",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding750 = FlaxProxyMember(
  "isImage",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding751 = FlaxProxyMember(
  "liveRegion",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding752 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding382,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:enum?:flax.core/flutter#type:TextDirection)->void:",
);
const _flaxBinding753 = FlaxProxyMember(
  "textDirection",
  2,
  _flaxBinding752,
  hasSuper: true,
);
const _flaxBinding754 = FlaxProxyMember(
  "isSelected",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding755 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding385,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:bool?:)->void:",
);
const _flaxBinding756 = FlaxProxyMember(
  "isExpanded",
  2,
  _flaxBinding755,
  hasSuper: true,
);
const _flaxBinding757 = FlaxProxyMember(
  "isEnabled",
  2,
  _flaxBinding755,
  hasSuper: true,
);
const _flaxBinding758 = FlaxProxyMember(
  "isChecked",
  2,
  _flaxBinding755,
  hasSuper: true,
);
const _flaxBinding759 = FlaxProxyMember(
  "isCheckStateMixed",
  2,
  _flaxBinding755,
  hasSuper: true,
);
const _flaxBinding760 = FlaxProxyMember(
  "isToggled",
  2,
  _flaxBinding755,
  hasSuper: true,
);
const _flaxBinding761 = FlaxProxyMember(
  "isInMutuallyExclusiveGroup",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding762 = FlaxProxyMember(
  "isFocusable",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding763 = FlaxProxyMember(
  "isFocused",
  2,
  _flaxBinding755,
  hasSuper: true,
);
const _flaxBinding764 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding394,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_semantics#type:AccessibilityFocusBlockType)->void:",
);
const _flaxBinding765 = FlaxProxyMember(
  "accessibilityFocusBlockType",
  2,
  _flaxBinding764,
  hasSuper: true,
);
const _flaxBinding766 = FlaxProxyMember(
  "isButton",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding767 = FlaxProxyMember(
  "isLink",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding768 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding398,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:Uri)->void:",
);
const _flaxBinding769 = FlaxProxyMember(
  "linkUrl",
  2,
  _flaxBinding768,
  hasSuper: true,
);
const _flaxBinding770 = FlaxProxyMember(
  "isHeader",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding771 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding19,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:int:)->void:",
);
const _flaxBinding772 = FlaxProxyMember(
  "headingLevel",
  2,
  _flaxBinding771,
  hasSuper: true,
);
const _flaxBinding773 = FlaxProxyMember(
  "isSlider",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding774 = FlaxProxyMember(
  "isKeyboardKey",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding775 = FlaxProxyMember(
  "isHidden",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding776 = FlaxProxyMember(
  "isTextField",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding777 = FlaxProxyMember(
  "isReadOnly",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding778 = FlaxProxyMember(
  "isObscured",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding779 = FlaxProxyMember(
  "isMultiline",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding780 = FlaxProxyMember(
  "isRequired",
  2,
  _flaxBinding755,
  hasSuper: true,
);
const _flaxBinding781 = FlaxProxyMember(
  "hasImplicitScrolling",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding782 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding411,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:TextSelection)->void:",
);
const _flaxBinding783 = FlaxProxyMember(
  "textSelection",
  2,
  _flaxBinding782,
  hasSuper: true,
);
const _flaxBinding784 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding413,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:double?:)->void:",
);
const _flaxBinding785 = FlaxProxyMember(
  "scrollPosition",
  2,
  _flaxBinding784,
  hasSuper: true,
);
const _flaxBinding786 = FlaxProxyMember(
  "scrollExtentMax",
  2,
  _flaxBinding784,
  hasSuper: true,
);
const _flaxBinding787 = FlaxProxyMember(
  "scrollExtentMin",
  2,
  _flaxBinding784,
  hasSuper: true,
);
const _flaxBinding788 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding418,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:set?:[String:])->void:",
);
const _flaxBinding789 = FlaxProxyMember(
  "controlsNodes",
  2,
  _flaxBinding788,
  hasSuper: true,
);
const _flaxBinding790 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding420,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_dart_ui#type:SemanticsValidationResult)->void:",
);
const _flaxBinding791 = FlaxProxyMember(
  "validationResult",
  2,
  _flaxBinding790,
  hasSuper: true,
);
const _flaxBinding792 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding422,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior)->void:",
);
const _flaxBinding793 = FlaxProxyMember(
  "hitTestBehavior",
  2,
  _flaxBinding792,
  hasSuper: true,
);
const _flaxBinding794 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding424,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_dart_ui#type:SemanticsInputType)->void:",
);
const _flaxBinding795 = FlaxProxyMember(
  "inputType",
  2,
  _flaxBinding794,
  hasSuper: true,
);
const _flaxBinding796 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding56,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:String?:)->void:",
);
const _flaxBinding797 = FlaxProxyMember(
  "maxValue",
  2,
  _flaxBinding796,
  hasSuper: true,
);
const _flaxBinding798 = FlaxProxyMember(
  "minValue",
  2,
  _flaxBinding796,
  hasSuper: true,
);
const _flaxBinding799 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsConfiguration",
  [
    _flaxBinding301,
    _flaxBinding303,
    _flaxBinding304,
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding307,
    _flaxBinding308,
    _flaxBinding310,
    _flaxBinding311,
    _flaxBinding312,
    _flaxBinding313,
    _flaxBinding314,
    _flaxBinding315,
    _flaxBinding316,
    _flaxBinding320,
    _flaxBinding321,
    _flaxBinding322,
    _flaxBinding323,
    _flaxBinding324,
    _flaxBinding325,
    _flaxBinding326,
    _flaxBinding329,
    _flaxBinding330,
    _flaxBinding331,
    _flaxBinding332,
    _flaxBinding336,
    _flaxBinding339,
    _flaxBinding340,
    _flaxBinding341,
    _flaxBinding342,
    _flaxBinding343,
    _flaxBinding344,
    _flaxBinding347,
    _flaxBinding349,
    _flaxBinding350,
    _flaxBinding351,
    _flaxBinding352,
    _flaxBinding353,
    _flaxBinding354,
    _flaxBinding355,
    _flaxBinding356,
    _flaxBinding359,
    _flaxBinding360,
    _flaxBinding361,
    _flaxBinding362,
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
    _flaxBinding374,
    _flaxBinding375,
    _flaxBinding377,
    _flaxBinding378,
    _flaxBinding379,
    _flaxBinding380,
    _flaxBinding381,
    _flaxBinding383,
    _flaxBinding384,
    _flaxBinding386,
    _flaxBinding387,
    _flaxBinding388,
    _flaxBinding389,
    _flaxBinding390,
    _flaxBinding391,
    _flaxBinding392,
    _flaxBinding393,
    _flaxBinding395,
    _flaxBinding396,
    _flaxBinding397,
    _flaxBinding399,
    _flaxBinding400,
    _flaxBinding401,
    _flaxBinding402,
    _flaxBinding403,
    _flaxBinding404,
    _flaxBinding405,
    _flaxBinding406,
    _flaxBinding407,
    _flaxBinding408,
    _flaxBinding409,
    _flaxBinding410,
    _flaxBinding412,
    _flaxBinding414,
    _flaxBinding415,
    _flaxBinding416,
    _flaxBinding419,
    _flaxBinding421,
    _flaxBinding423,
    _flaxBinding425,
    _flaxBinding426,
    _flaxBinding427,
    _flaxBinding430,
  ],
  {
    "getActionHandler": _flaxBinding531,
    "tagsChildrenWith": _flaxBinding533,
    "addTagForChildren": _flaxBinding534,
    "isCompatibleWith": _flaxBinding537,
    "absorb": _flaxBinding539,
    "copy": _flaxBinding540,
    "@super:getActionHandler": FlaxInstanceMethod(
      _flaxBinding528,
      _flaxBinding530,
      _SemanticsConfiguration_super_getActionHandler,
    ),
    "@super:tagsChildrenWith": FlaxInstanceMethod(
      _flaxBinding532,
      _flaxBinding52,
      _SemanticsConfiguration_super_tagsChildrenWith,
    ),
    "@super:addTagForChildren": FlaxInstanceMethod(
      _flaxBinding532,
      _flaxBinding163,
      _SemanticsConfiguration_super_addTagForChildren,
    ),
    "@super:isCompatibleWith": FlaxInstanceMethod(
      _flaxBinding536,
      _flaxBinding52,
      _SemanticsConfiguration_super_isCompatibleWith,
    ),
    "@super:absorb": FlaxInstanceMethod(
      _flaxBinding538,
      _flaxBinding163,
      _SemanticsConfiguration_super_absorb,
    ),
    "@super:copy": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding150,
      _SemanticsConfiguration_super_copy,
    ),
    "@super:get:isSemanticBoundary": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isSemanticBoundary,
    ),
    "@super:get:localeForSubtree": FlaxInstanceMethod(
      [],
      _flaxBinding302,
      _SemanticsConfiguration_super_get_localeForSubtree,
    ),
    "@super:get:locale": FlaxInstanceMethod(
      [],
      _flaxBinding302,
      _SemanticsConfiguration_super_get_locale,
    ),
    "@super:get:isBlockingUserActions": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isBlockingUserActions,
    ),
    "@super:get:explicitChildNodes": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_explicitChildNodes,
    ),
    "@super:get:isBlockingSemanticsOfPreviouslyPaintedNodes": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isBlockingSemanticsOfPreviouslyPaintedNodes,
    ),
    "@super:get:hasBeenAnnotated": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_hasBeenAnnotated,
    ),
    "@super:get:onTap": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onTap,
    ),
    "@super:get:onLongPress": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onLongPress,
    ),
    "@super:get:onScrollLeft": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onScrollLeft,
    ),
    "@super:get:onDismiss": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onDismiss,
    ),
    "@super:get:onScrollRight": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onScrollRight,
    ),
    "@super:get:onScrollUp": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onScrollUp,
    ),
    "@super:get:onScrollDown": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onScrollDown,
    ),
    "@super:get:onScrollToOffset": FlaxInstanceMethod(
      [],
      _flaxBinding319,
      _SemanticsConfiguration_super_get_onScrollToOffset,
    ),
    "@super:get:onIncrease": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onIncrease,
    ),
    "@super:get:onDecrease": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onDecrease,
    ),
    "@super:get:onCopy": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onCopy,
    ),
    "@super:get:onCut": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onCut,
    ),
    "@super:get:onPaste": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onPaste,
    ),
    "@super:get:onShowOnScreen": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _SemanticsConfiguration_super_get_onShowOnScreen,
    ),
    "@super:get:onMoveCursorForwardByCharacter": FlaxInstanceMethod(
      [],
      _flaxBinding328,
      _FlaxProxyDispatch11_super_get_onMoveCursorForwardByCharacter,
    ),
    "@super:get:onMoveCursorBackwardByCharacter": FlaxInstanceMethod(
      [],
      _flaxBinding328,
      _FlaxProxyDispatch11_super_get_onMoveCursorBackwardByCharacter,
    ),
    "@super:get:onMoveCursorForwardByWord": FlaxInstanceMethod(
      [],
      _flaxBinding328,
      _FlaxProxyDispatch11_super_get_onMoveCursorForwardByWord,
    ),
    "@super:get:onMoveCursorBackwardByWord": FlaxInstanceMethod(
      [],
      _flaxBinding328,
      _FlaxProxyDispatch11_super_get_onMoveCursorBackwardByWord,
    ),
    "@super:get:onSetSelection": FlaxInstanceMethod(
      [],
      _flaxBinding335,
      _FlaxProxyDispatch11_super_get_onSetSelection,
    ),
    "@super:get:onSetText": FlaxInstanceMethod(
      [],
      _flaxBinding338,
      _FlaxProxyDispatch11_super_get_onSetText,
    ),
    "@super:get:onDidGainAccessibilityFocus": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onDidGainAccessibilityFocus,
    ),
    "@super:get:onDidLoseAccessibilityFocus": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onDidLoseAccessibilityFocus,
    ),
    "@super:get:onFocus": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onFocus,
    ),
    "@super:get:onExpand": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onExpand,
    ),
    "@super:get:onCollapse": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onCollapse,
    ),
    "@super:get:childConfigurationsDelegate": FlaxInstanceMethod(
      [],
      _flaxBinding346,
      _SemanticsConfiguration_super_get_childConfigurationsDelegate,
    ),
    "@super:get:sortKey": FlaxInstanceMethod(
      [],
      _flaxBinding348,
      _SemanticsConfiguration_super_get_sortKey,
    ),
    "@super:get:indexInParent": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _SemanticsConfiguration_super_get_indexInParent,
    ),
    "@super:get:scrollChildCount": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch14_super_get_scrollChildCount,
    ),
    "@super:get:scrollIndex": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch14_super_get_scrollIndex,
    ),
    "@super:get:platformViewId": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch14_super_get_platformViewId,
    ),
    "@super:get:maxValueLength": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch15_super_get_maxValueLength,
    ),
    "@super:get:currentValueLength": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch15_super_get_currentValueLength,
    ),
    "@super:get:isMergingSemanticsOfDescendants": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isMergingSemanticsOfDescendants,
    ),
    "@super:get:customSemanticsActions": FlaxInstanceMethod(
      [],
      _flaxBinding358,
      _SemanticsConfiguration_super_get_customSemanticsActions,
    ),
    "@super:get:identifier": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_identifier,
    ),
    "@super:get:traversalParentIdentifier": FlaxInstanceMethod(
      [],
      _flaxBinding4,
      _FlaxProxyDispatch15_super_get_traversalParentIdentifier,
    ),
    "@super:get:traversalChildIdentifier": FlaxInstanceMethod(
      [],
      _flaxBinding4,
      _FlaxProxyDispatch15_super_get_traversalChildIdentifier,
    ),
    "@super:get:role": FlaxInstanceMethod(
      [],
      _flaxBinding363,
      _FlaxProxyDispatch14_super_get_role,
    ),
    "@super:get:label": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_label,
    ),
    "@super:get:attributedLabel": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedLabel,
    ),
    "@super:get:value": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_value,
    ),
    "@super:get:attributedValue": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedValue,
    ),
    "@super:get:increasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_increasedValue,
    ),
    "@super:get:attributedIncreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedIncreasedValue,
    ),
    "@super:get:decreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_decreasedValue,
    ),
    "@super:get:attributedDecreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedDecreasedValue,
    ),
    "@super:get:hint": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_hint,
    ),
    "@super:get:attributedHint": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedHint,
    ),
    "@super:get:tooltip": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_tooltip,
    ),
    "@super:get:hintOverrides": FlaxInstanceMethod(
      [],
      _flaxBinding376,
      _SemanticsConfiguration_super_get_hintOverrides,
    ),
    "@super:get:scopesRoute": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_scopesRoute,
    ),
    "@super:get:namesRoute": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_namesRoute,
    ),
    "@super:get:isImage": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isImage,
    ),
    "@super:get:liveRegion": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_liveRegion,
    ),
    "@super:get:textDirection": FlaxInstanceMethod(
      [],
      _flaxBinding382,
      _FlaxProxyDispatch15_super_get_textDirection,
    ),
    "@super:get:isSelected": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isSelected,
    ),
    "@super:get:isExpanded": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsConfiguration_super_get_isExpanded,
    ),
    "@super:get:isEnabled": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsConfiguration_super_get_isEnabled,
    ),
    "@super:get:isChecked": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsConfiguration_super_get_isChecked,
    ),
    "@super:get:isCheckStateMixed": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsConfiguration_super_get_isCheckStateMixed,
    ),
    "@super:get:isToggled": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsConfiguration_super_get_isToggled,
    ),
    "@super:get:isInMutuallyExclusiveGroup": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isInMutuallyExclusiveGroup,
    ),
    "@super:get:isFocusable": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isFocusable,
    ),
    "@super:get:isFocused": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsConfiguration_super_get_isFocused,
    ),
    "@super:get:accessibilityFocusBlockType": FlaxInstanceMethod(
      [],
      _flaxBinding394,
      _SemanticsConfiguration_super_get_accessibilityFocusBlockType,
    ),
    "@super:get:isButton": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isButton,
    ),
    "@super:get:isLink": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isLink,
    ),
    "@super:get:linkUrl": FlaxInstanceMethod(
      [],
      _flaxBinding398,
      _FlaxProxyDispatch15_super_get_linkUrl,
    ),
    "@super:get:isHeader": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isHeader,
    ),
    "@super:get:headingLevel": FlaxInstanceMethod(
      [],
      _flaxBinding19,
      _FlaxProxyDispatch14_super_get_headingLevel,
    ),
    "@super:get:isSlider": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isSlider,
    ),
    "@super:get:isKeyboardKey": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isKeyboardKey,
    ),
    "@super:get:isHidden": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isHidden,
    ),
    "@super:get:isTextField": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isTextField,
    ),
    "@super:get:isReadOnly": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isReadOnly,
    ),
    "@super:get:isObscured": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isObscured,
    ),
    "@super:get:isMultiline": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_isMultiline,
    ),
    "@super:get:isRequired": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _FlaxProxyDispatch11_super_get_isRequired,
    ),
    "@super:get:hasImplicitScrolling": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsConfiguration_super_get_hasImplicitScrolling,
    ),
    "@super:get:textSelection": FlaxInstanceMethod(
      [],
      _flaxBinding411,
      _FlaxProxyDispatch14_super_get_textSelection,
    ),
    "@super:get:scrollPosition": FlaxInstanceMethod(
      [],
      _flaxBinding413,
      _FlaxProxyDispatch14_super_get_scrollPosition,
    ),
    "@super:get:scrollExtentMax": FlaxInstanceMethod(
      [],
      _flaxBinding413,
      _FlaxProxyDispatch14_super_get_scrollExtentMax,
    ),
    "@super:get:scrollExtentMin": FlaxInstanceMethod(
      [],
      _flaxBinding413,
      _FlaxProxyDispatch14_super_get_scrollExtentMin,
    ),
    "@super:get:controlsNodes": FlaxInstanceMethod(
      [],
      _flaxBinding418,
      _FlaxProxyDispatch15_super_get_controlsNodes,
    ),
    "@super:get:validationResult": FlaxInstanceMethod(
      [],
      _flaxBinding420,
      _FlaxProxyDispatch15_super_get_validationResult,
    ),
    "@super:get:hitTestBehavior": FlaxInstanceMethod(
      [],
      _flaxBinding422,
      _FlaxProxyDispatch14_super_get_hitTestBehavior,
    ),
    "@super:get:inputType": FlaxInstanceMethod(
      [],
      _flaxBinding424,
      _FlaxProxyDispatch14_super_get_inputType,
    ),
    "@super:get:maxValue": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _FlaxProxyDispatch15_super_get_maxValue,
    ),
    "@super:get:minValue": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _FlaxProxyDispatch15_super_get_minValue,
    ),
    "@super:get:tagsForChildren": FlaxInstanceMethod(
      [],
      _flaxBinding429,
      _SemanticsConfiguration_super_get_tagsForChildren,
    ),
    "@super:set:isSemanticBoundary": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isSemanticBoundary,
    ),
    "@super:set:localeForSubtree": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding302, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_localeForSubtree,
    ),
    "@super:set:locale": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding302, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_locale,
    ),
    "@super:set:isBlockingUserActions": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isBlockingUserActions,
    ),
    "@super:set:explicitChildNodes": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_explicitChildNodes,
    ),
    "@super:set:isBlockingSemanticsOfPreviouslyPaintedNodes": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isBlockingSemanticsOfPreviouslyPaintedNodes,
    ),
    "@super:set:onTap": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onTap,
    ),
    "@super:set:onLongPress": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onLongPress,
    ),
    "@super:set:onScrollLeft": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onScrollLeft,
    ),
    "@super:set:onDismiss": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onDismiss,
    ),
    "@super:set:onScrollRight": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onScrollRight,
    ),
    "@super:set:onScrollUp": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onScrollUp,
    ),
    "@super:set:onScrollDown": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onScrollDown,
    ),
    "@super:set:onScrollToOffset": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding319, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onScrollToOffset,
    ),
    "@super:set:onIncrease": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onIncrease,
    ),
    "@super:set:onDecrease": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onDecrease,
    ),
    "@super:set:onCopy": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onCopy,
    ),
    "@super:set:onCut": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onCut,
    ),
    "@super:set:onPaste": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onPaste,
    ),
    "@super:set:onShowOnScreen": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onShowOnScreen,
    ),
    "@super:set:onMoveCursorForwardByCharacter": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding328, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onMoveCursorForwardByCharacter,
    ),
    "@super:set:onMoveCursorBackwardByCharacter": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding328, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onMoveCursorBackwardByCharacter,
    ),
    "@super:set:onMoveCursorForwardByWord": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding328, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onMoveCursorForwardByWord,
    ),
    "@super:set:onMoveCursorBackwardByWord": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding328, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onMoveCursorBackwardByWord,
    ),
    "@super:set:onSetSelection": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding335, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onSetSelection,
    ),
    "@super:set:onSetText": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding338, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onSetText,
    ),
    "@super:set:onDidGainAccessibilityFocus": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onDidGainAccessibilityFocus,
    ),
    "@super:set:onDidLoseAccessibilityFocus": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onDidLoseAccessibilityFocus,
    ),
    "@super:set:onFocus": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onFocus,
    ),
    "@super:set:onExpand": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onExpand,
    ),
    "@super:set:onCollapse": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding309, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_onCollapse,
    ),
    "@super:set:childConfigurationsDelegate": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding346, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_childConfigurationsDelegate,
    ),
    "@super:set:sortKey": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding348, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_sortKey,
    ),
    "@super:set:indexInParent": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding2, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_indexInParent,
    ),
    "@super:set:scrollChildCount": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding2, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_scrollChildCount,
    ),
    "@super:set:scrollIndex": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding2, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_scrollIndex,
    ),
    "@super:set:platformViewId": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding2, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_platformViewId,
    ),
    "@super:set:maxValueLength": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding2, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_maxValueLength,
    ),
    "@super:set:currentValueLength": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding2, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_currentValueLength,
    ),
    "@super:set:isMergingSemanticsOfDescendants": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isMergingSemanticsOfDescendants,
    ),
    "@super:set:customSemanticsActions": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding358, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_customSemanticsActions,
    ),
    "@super:set:identifier": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding0, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_identifier,
    ),
    "@super:set:traversalParentIdentifier": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding4, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_traversalParentIdentifier,
    ),
    "@super:set:traversalChildIdentifier": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding4, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_traversalChildIdentifier,
    ),
    "@super:set:role": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding363, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_role,
    ),
    "@super:set:label": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding0, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_label,
    ),
    "@super:set:attributedLabel": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding42, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_attributedLabel,
    ),
    "@super:set:value": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding0, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_value,
    ),
    "@super:set:attributedValue": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding42, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_attributedValue,
    ),
    "@super:set:increasedValue": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding0, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_increasedValue,
    ),
    "@super:set:attributedIncreasedValue": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding42, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_attributedIncreasedValue,
    ),
    "@super:set:decreasedValue": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding0, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_decreasedValue,
    ),
    "@super:set:attributedDecreasedValue": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding42, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_attributedDecreasedValue,
    ),
    "@super:set:hint": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding0, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_hint,
    ),
    "@super:set:attributedHint": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding42, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_attributedHint,
    ),
    "@super:set:tooltip": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding0, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_tooltip,
    ),
    "@super:set:hintOverrides": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding376, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_hintOverrides,
    ),
    "@super:set:scopesRoute": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_scopesRoute,
    ),
    "@super:set:namesRoute": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_namesRoute,
    ),
    "@super:set:isImage": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isImage,
    ),
    "@super:set:liveRegion": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_liveRegion,
    ),
    "@super:set:textDirection": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding382, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_textDirection,
    ),
    "@super:set:isSelected": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isSelected,
    ),
    "@super:set:isExpanded": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding385, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isExpanded,
    ),
    "@super:set:isEnabled": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding385, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isEnabled,
    ),
    "@super:set:isChecked": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding385, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isChecked,
    ),
    "@super:set:isCheckStateMixed": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding385, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isCheckStateMixed,
    ),
    "@super:set:isToggled": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding385, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isToggled,
    ),
    "@super:set:isInMutuallyExclusiveGroup": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isInMutuallyExclusiveGroup,
    ),
    "@super:set:isFocusable": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isFocusable,
    ),
    "@super:set:isFocused": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding385, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isFocused,
    ),
    "@super:set:accessibilityFocusBlockType": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding394, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_accessibilityFocusBlockType,
    ),
    "@super:set:isButton": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isButton,
    ),
    "@super:set:isLink": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isLink,
    ),
    "@super:set:linkUrl": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding398, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_linkUrl,
    ),
    "@super:set:isHeader": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isHeader,
    ),
    "@super:set:headingLevel": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding19, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_headingLevel,
    ),
    "@super:set:isSlider": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isSlider,
    ),
    "@super:set:isKeyboardKey": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isKeyboardKey,
    ),
    "@super:set:isHidden": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isHidden,
    ),
    "@super:set:isTextField": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isTextField,
    ),
    "@super:set:isReadOnly": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isReadOnly,
    ),
    "@super:set:isObscured": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isObscured,
    ),
    "@super:set:isMultiline": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isMultiline,
    ),
    "@super:set:isRequired": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding385, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_isRequired,
    ),
    "@super:set:hasImplicitScrolling": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_hasImplicitScrolling,
    ),
    "@super:set:textSelection": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding411, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_textSelection,
    ),
    "@super:set:scrollPosition": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding413, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_scrollPosition,
    ),
    "@super:set:scrollExtentMax": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding413, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_scrollExtentMax,
    ),
    "@super:set:scrollExtentMin": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding413, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_scrollExtentMin,
    ),
    "@super:set:controlsNodes": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding418, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_controlsNodes,
    ),
    "@super:set:validationResult": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding420, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_validationResult,
    ),
    "@super:set:hitTestBehavior": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding422, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_hitTestBehavior,
    ),
    "@super:set:inputType": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding424, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_inputType,
    ),
    "@super:set:maxValue": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding56, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_maxValue,
    ),
    "@super:set:minValue": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding56, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsConfiguration_super_set_minValue,
    ),
  },
  constructors: {"@implementation": _flaxBinding7},
  create: _createSemanticsConfiguration,
  matches: _isSemanticsConfiguration,
  setters: [
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
    _flaxBinding526,
  ],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding542,
    _flaxBinding544,
    _flaxBinding546,
    _flaxBinding548,
    _flaxBinding550,
    _flaxBinding552,
    _flaxBinding553,
    _flaxBinding555,
    _flaxBinding556,
    _flaxBinding557,
    _flaxBinding558,
    _flaxBinding559,
    _flaxBinding560,
    _flaxBinding562,
    _flaxBinding563,
    _flaxBinding564,
    _flaxBinding565,
    _flaxBinding566,
    _flaxBinding567,
    _flaxBinding568,
    _flaxBinding570,
    _flaxBinding571,
    _flaxBinding572,
    _flaxBinding573,
    _flaxBinding574,
    _flaxBinding575,
    _flaxBinding576,
    _flaxBinding578,
    _flaxBinding579,
    _flaxBinding580,
    _flaxBinding581,
    _flaxBinding583,
    _flaxBinding585,
    _flaxBinding586,
    _flaxBinding587,
    _flaxBinding588,
    _flaxBinding589,
    _flaxBinding590,
    _flaxBinding592,
    _flaxBinding594,
    _flaxBinding596,
    _flaxBinding597,
    _flaxBinding598,
    _flaxBinding599,
    _flaxBinding600,
    _flaxBinding601,
    _flaxBinding602,
    _flaxBinding604,
    _flaxBinding605,
    _flaxBinding606,
    _flaxBinding607,
    _flaxBinding609,
    _flaxBinding610,
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
    _flaxBinding623,
    _flaxBinding624,
    _flaxBinding625,
    _flaxBinding626,
    _flaxBinding627,
    _flaxBinding629,
    _flaxBinding630,
    _flaxBinding632,
    _flaxBinding633,
    _flaxBinding634,
    _flaxBinding635,
    _flaxBinding636,
    _flaxBinding637,
    _flaxBinding638,
    _flaxBinding639,
    _flaxBinding641,
    _flaxBinding642,
    _flaxBinding643,
    _flaxBinding645,
    _flaxBinding646,
    _flaxBinding647,
    _flaxBinding648,
    _flaxBinding649,
    _flaxBinding650,
    _flaxBinding651,
    _flaxBinding652,
    _flaxBinding653,
    _flaxBinding654,
    _flaxBinding655,
    _flaxBinding656,
    _flaxBinding658,
    _flaxBinding660,
    _flaxBinding661,
    _flaxBinding662,
    _flaxBinding664,
    _flaxBinding666,
    _flaxBinding668,
    _flaxBinding670,
    _flaxBinding671,
    _flaxBinding672,
    _flaxBinding674,
    _flaxBinding676,
    _flaxBinding678,
    _flaxBinding679,
    _flaxBinding680,
    _flaxBinding681,
    _flaxBinding682,
    _flaxBinding684,
    _flaxBinding685,
    _flaxBinding686,
    _flaxBinding687,
    _flaxBinding688,
    _flaxBinding689,
    _flaxBinding690,
    _flaxBinding692,
    _flaxBinding693,
    _flaxBinding694,
    _flaxBinding695,
    _flaxBinding696,
    _flaxBinding697,
    _flaxBinding698,
    _flaxBinding700,
    _flaxBinding701,
    _flaxBinding702,
    _flaxBinding703,
    _flaxBinding705,
    _flaxBinding707,
    _flaxBinding708,
    _flaxBinding709,
    _flaxBinding710,
    _flaxBinding711,
    _flaxBinding712,
    _flaxBinding714,
    _flaxBinding716,
    _flaxBinding718,
    _flaxBinding719,
    _flaxBinding720,
    _flaxBinding721,
    _flaxBinding722,
    _flaxBinding723,
    _flaxBinding724,
    _flaxBinding726,
    _flaxBinding728,
    _flaxBinding730,
    _flaxBinding731,
    _flaxBinding733,
    _flaxBinding734,
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
    _flaxBinding747,
    _flaxBinding748,
    _flaxBinding749,
    _flaxBinding750,
    _flaxBinding751,
    _flaxBinding753,
    _flaxBinding754,
    _flaxBinding756,
    _flaxBinding757,
    _flaxBinding758,
    _flaxBinding759,
    _flaxBinding760,
    _flaxBinding761,
    _flaxBinding762,
    _flaxBinding763,
    _flaxBinding765,
    _flaxBinding766,
    _flaxBinding767,
    _flaxBinding769,
    _flaxBinding770,
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
    _flaxBinding783,
    _flaxBinding785,
    _flaxBinding786,
    _flaxBinding787,
    _flaxBinding789,
    _flaxBinding791,
    _flaxBinding793,
    _flaxBinding795,
    _flaxBinding797,
    _flaxBinding798,
  ]),
);
const _flaxBinding800 = FlaxGetter(
  "flags",
  _flaxBinding19,
  _SemanticsData_flags,
);
const _flaxBinding801 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsFlags",
);
const _flaxBinding802 = FlaxGetter(
  "flagsCollection",
  _flaxBinding801,
  _SemanticsData_flagsCollection,
);
const _flaxBinding803 = FlaxGetter(
  "actions",
  _flaxBinding19,
  _SemanticsData_actions,
);
const _flaxBinding804 = FlaxGetter(
  "identifier",
  _flaxBinding0,
  _SemanticsData_identifier,
);
const _flaxBinding805 = FlaxGetter(
  "traversalParentIdentifier",
  _flaxBinding4,
  _SemanticsData_traversalParentIdentifier,
);
const _flaxBinding806 = FlaxGetter(
  "traversalChildIdentifier",
  _flaxBinding4,
  _SemanticsData_traversalChildIdentifier,
);
const _flaxBinding807 = FlaxGetter(
  "label",
  _flaxBinding0,
  _SemanticsData_label,
);
const _flaxBinding808 = FlaxGetter(
  "attributedLabel",
  _flaxBinding42,
  _SemanticsData_attributedLabel,
);
const _flaxBinding809 = FlaxGetter(
  "value",
  _flaxBinding0,
  _SemanticsData_value,
);
const _flaxBinding810 = FlaxGetter(
  "attributedValue",
  _flaxBinding42,
  _SemanticsData_attributedValue,
);
const _flaxBinding811 = FlaxGetter(
  "increasedValue",
  _flaxBinding0,
  _SemanticsData_increasedValue,
);
const _flaxBinding812 = FlaxGetter(
  "attributedIncreasedValue",
  _flaxBinding42,
  _SemanticsData_attributedIncreasedValue,
);
const _flaxBinding813 = FlaxGetter(
  "decreasedValue",
  _flaxBinding0,
  _SemanticsData_decreasedValue,
);
const _flaxBinding814 = FlaxGetter(
  "attributedDecreasedValue",
  _flaxBinding42,
  _SemanticsData_attributedDecreasedValue,
);
const _flaxBinding815 = FlaxGetter("hint", _flaxBinding0, _SemanticsData_hint);
const _flaxBinding816 = FlaxGetter(
  "attributedHint",
  _flaxBinding42,
  _SemanticsData_attributedHint,
);
const _flaxBinding817 = FlaxGetter(
  "tooltip",
  _flaxBinding0,
  _SemanticsData_tooltip,
);
const _flaxBinding818 = FlaxGetter(
  "headingLevel",
  _flaxBinding19,
  _SemanticsData_headingLevel,
);
const _flaxBinding819 = FlaxGetter(
  "textDirection",
  _flaxBinding382,
  _SemanticsData_textDirection,
);
const _flaxBinding820 = FlaxGetter(
  "textSelection",
  _flaxBinding411,
  _SemanticsData_textSelection,
);
const _flaxBinding821 = FlaxGetter(
  "scrollChildCount",
  _flaxBinding2,
  _SemanticsData_scrollChildCount,
);
const _flaxBinding822 = FlaxGetter(
  "scrollIndex",
  _flaxBinding2,
  _SemanticsData_scrollIndex,
);
const _flaxBinding823 = FlaxGetter(
  "scrollPosition",
  _flaxBinding413,
  _SemanticsData_scrollPosition,
);
const _flaxBinding824 = FlaxGetter(
  "scrollExtentMax",
  _flaxBinding413,
  _SemanticsData_scrollExtentMax,
);
const _flaxBinding825 = FlaxGetter(
  "scrollExtentMin",
  _flaxBinding413,
  _SemanticsData_scrollExtentMin,
);
const _flaxBinding826 = FlaxGetter(
  "platformViewId",
  _flaxBinding2,
  _SemanticsData_platformViewId,
);
const _flaxBinding827 = FlaxGetter(
  "maxValueLength",
  _flaxBinding2,
  _SemanticsData_maxValueLength,
);
const _flaxBinding828 = FlaxGetter(
  "currentValueLength",
  _flaxBinding2,
  _SemanticsData_currentValueLength,
);
const _flaxBinding829 = FlaxGetter(
  "linkUrl",
  _flaxBinding398,
  _SemanticsData_linkUrl,
);
const _flaxBinding830 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding831 = FlaxGetter(
  "rect",
  _flaxBinding830,
  _SemanticsData_rect,
);
const _flaxBinding832 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding428,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_semantics#type:SemanticsTag]",
    _collection13Create,
    _collection13Matches,
    restore: _collection13Restore,
  ),
);
const _flaxBinding833 = FlaxTypeRef(
  "set",
  nullable: true,
  item: _flaxBinding428,
  collection: FlaxCollectionBinding(
    "set:[object:flax.core/sdk_semantics#type:SemanticsTag]",
    _collection14Create,
    _collection14Matches,
  ),
  iterable: _flaxBinding832,
);
const _flaxBinding834 = FlaxGetter(
  "tags",
  _flaxBinding833,
  _SemanticsData_tags,
);
const _flaxBinding835 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_rendering#type:Matrix4",
  nullable: true,
);
const _flaxBinding836 = FlaxGetter(
  "transform",
  _flaxBinding835,
  _SemanticsData_transform,
);
const _flaxBinding837 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding19,
  collection: FlaxCollectionBinding(
    "iterable:[int:]",
    _collection16Create,
    _collection16Matches,
    restore: _collection16Restore,
  ),
);
const _flaxBinding838 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding19,
  collection: FlaxCollectionBinding(
    "list:[int:]",
    _collection15Create,
    _collection15Matches,
  ),
  iterable: _flaxBinding837,
);
const _flaxBinding839 = FlaxGetter(
  "customSemanticsActionIds",
  _flaxBinding838,
  _SemanticsData_customSemanticsActionIds,
);
const _flaxBinding840 = FlaxGetter(
  "role",
  _flaxBinding363,
  _SemanticsData_role,
);
const _flaxBinding841 = FlaxGetter(
  "controlsNodes",
  _flaxBinding418,
  _SemanticsData_controlsNodes,
);
const _flaxBinding842 = FlaxGetter(
  "validationResult",
  _flaxBinding420,
  _SemanticsData_validationResult,
);
const _flaxBinding843 = FlaxGetter(
  "hitTestBehavior",
  _flaxBinding422,
  _SemanticsData_hitTestBehavior,
);
const _flaxBinding844 = FlaxGetter(
  "inputType",
  _flaxBinding424,
  _SemanticsData_inputType,
);
const _flaxBinding845 = FlaxGetter(
  "locale",
  _flaxBinding302,
  _SemanticsData_locale,
);
const _flaxBinding846 = FlaxGetter(
  "maxValue",
  _flaxBinding56,
  _SemanticsData_maxValue,
);
const _flaxBinding847 = FlaxGetter(
  "minValue",
  _flaxBinding56,
  _SemanticsData_minValue,
);
const _flaxBinding848 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _SemanticsData_toStringShort,
);
const _flaxBinding849 = FlaxInstanceMethod(
  _flaxBinding194,
  _flaxBinding0,
  _SemanticsData_toString,
);
const _flaxBinding850 = FlaxInstanceMethod(
  _flaxBinding196,
  _flaxBinding87,
  _SemanticsData_toDiagnosticsNode,
);
const _flaxBinding851 = FlaxInstanceMethod(
  _flaxBinding199,
  _flaxBinding163,
  _SemanticsData_debugFillProperties,
);
const _flaxBinding852 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsFlag",
);
const _flaxBinding853 = <FlaxParameter>[
  FlaxParameter("flag", _flaxBinding852, required: true),
];
const _flaxBinding854 = FlaxInstanceMethod(
  _flaxBinding853,
  _flaxBinding52,
  _SemanticsData_hasFlag,
);
const _flaxBinding855 = FlaxInstanceMethod(
  _flaxBinding528,
  _flaxBinding52,
  _SemanticsData_hasAction,
);
const _flaxBinding856 = <FlaxParameter>[
  FlaxParameter("flagsCollection", _flaxBinding801, required: true),
  FlaxParameter("actions", _flaxBinding19, required: true),
  FlaxParameter("identifier", _flaxBinding0, required: true),
  FlaxParameter("traversalParentIdentifier", _flaxBinding4, required: true),
  FlaxParameter("traversalChildIdentifier", _flaxBinding4, required: true),
  FlaxParameter("attributedLabel", _flaxBinding42, required: true),
  FlaxParameter("attributedValue", _flaxBinding42, required: true),
  FlaxParameter("attributedIncreasedValue", _flaxBinding42, required: true),
  FlaxParameter("attributedDecreasedValue", _flaxBinding42, required: true),
  FlaxParameter("attributedHint", _flaxBinding42, required: true),
  FlaxParameter("tooltip", _flaxBinding0, required: true),
  FlaxParameter("textDirection", _flaxBinding382, required: true),
  FlaxParameter("rect", _flaxBinding830, required: true),
  FlaxParameter("textSelection", _flaxBinding411, required: true),
  FlaxParameter("scrollIndex", _flaxBinding2, required: true),
  FlaxParameter("scrollChildCount", _flaxBinding2, required: true),
  FlaxParameter("scrollPosition", _flaxBinding413, required: true),
  FlaxParameter("scrollExtentMax", _flaxBinding413, required: true),
  FlaxParameter("scrollExtentMin", _flaxBinding413, required: true),
  FlaxParameter("platformViewId", _flaxBinding2, required: true),
  FlaxParameter("maxValueLength", _flaxBinding2, required: true),
  FlaxParameter("currentValueLength", _flaxBinding2, required: true),
  FlaxParameter("headingLevel", _flaxBinding19, required: true),
  FlaxParameter("linkUrl", _flaxBinding398, required: true),
  FlaxParameter("role", _flaxBinding363, required: true),
  FlaxParameter("controlsNodes", _flaxBinding418, required: true),
  FlaxParameter("validationResult", _flaxBinding420, required: true),
  FlaxParameter("hitTestBehavior", _flaxBinding422, required: true),
  FlaxParameter("inputType", _flaxBinding424, required: true),
  FlaxParameter("locale", _flaxBinding302, required: true),
  FlaxParameter("minValue", _flaxBinding56, required: true),
  FlaxParameter("maxValue", _flaxBinding56, required: true),
  FlaxParameter("tags", _flaxBinding833, required: false),
  FlaxParameter("transform", _flaxBinding835, required: false),
  FlaxParameter("customSemanticsActionIds", _flaxBinding838, required: false),
];
const _flaxBinding857 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "flag",
      _flaxBinding852,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding52,
  id: "callback:<>(p:r:flag:object:flax.core/sdk_dart_ui#type:SemanticsFlag)->bool:",
);
const _flaxBinding858 = FlaxProxyMember(
  "hasFlag",
  0,
  _flaxBinding857,
  hasSuper: true,
);
const _flaxBinding859 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "action",
      _flaxBinding527,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding52,
  id: "callback:<>(p:r:action:object:flax.core/sdk_dart_ui#type:SemanticsAction)->bool:",
);
const _flaxBinding860 = FlaxProxyMember(
  "hasAction",
  0,
  _flaxBinding859,
  hasSuper: true,
);
const _flaxBinding861 = FlaxProxyMember(
  "flags",
  1,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding862 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding801,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:SemanticsFlags",
);
const _flaxBinding863 = FlaxProxyMember(
  "flagsCollection",
  1,
  _flaxBinding862,
  hasSuper: true,
);
const _flaxBinding864 = FlaxProxyMember(
  "actions",
  1,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding865 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding830,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding866 = FlaxProxyMember(
  "rect",
  1,
  _flaxBinding865,
  hasSuper: true,
);
const _flaxBinding867 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding833,
  id: "callback:<>()->set?:[object:flax.core/sdk_semantics#type:SemanticsTag]",
);
const _flaxBinding868 = FlaxProxyMember(
  "tags",
  1,
  _flaxBinding867,
  hasSuper: true,
);
const _flaxBinding869 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding835,
  id: "callback:<>()->object?:flax.core/sdk_rendering#type:Matrix4",
);
const _flaxBinding870 = FlaxProxyMember(
  "transform",
  1,
  _flaxBinding869,
  hasSuper: true,
);
const _flaxBinding871 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding838,
  id: "callback:<>()->list?:[int:]",
);
const _flaxBinding872 = FlaxProxyMember(
  "customSemanticsActionIds",
  1,
  _flaxBinding871,
  hasSuper: true,
);
const _flaxBinding873 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsData",
  [
    _flaxBinding800,
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
    _flaxBinding831,
    _flaxBinding834,
    _flaxBinding836,
    _flaxBinding839,
    _flaxBinding840,
    _flaxBinding841,
    _flaxBinding842,
    _flaxBinding843,
    _flaxBinding844,
    _flaxBinding845,
    _flaxBinding846,
    _flaxBinding847,
  ],
  {
    "toStringShort": _flaxBinding848,
    "toString": _flaxBinding849,
    "toDiagnosticsNode": _flaxBinding850,
    "debugFillProperties": _flaxBinding851,
    "hasFlag": _flaxBinding854,
    "hasAction": _flaxBinding855,
    "@super:toStringShort": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toStringShort,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding194,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toString,
    ),
    "@super:toDiagnosticsNode": FlaxInstanceMethod(
      _flaxBinding196,
      _flaxBinding87,
      _SemanticsData_super_toDiagnosticsNode,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod(
      _flaxBinding199,
      _flaxBinding163,
      _SemanticsData_super_debugFillProperties,
    ),
    "@super:hasFlag": FlaxInstanceMethod(
      _flaxBinding853,
      _flaxBinding52,
      _SemanticsData_super_hasFlag,
    ),
    "@super:hasAction": FlaxInstanceMethod(
      _flaxBinding528,
      _flaxBinding52,
      _SemanticsData_super_hasAction,
    ),
    "@super:get:flags": FlaxInstanceMethod(
      [],
      _flaxBinding19,
      _SemanticsData_super_get_flags,
    ),
    "@super:get:flagsCollection": FlaxInstanceMethod(
      [],
      _flaxBinding801,
      _SemanticsData_super_get_flagsCollection,
    ),
    "@super:get:actions": FlaxInstanceMethod(
      [],
      _flaxBinding19,
      _SemanticsData_super_get_actions,
    ),
    "@super:get:identifier": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_identifier,
    ),
    "@super:get:traversalParentIdentifier": FlaxInstanceMethod(
      [],
      _flaxBinding4,
      _FlaxProxyDispatch15_super_get_traversalParentIdentifier,
    ),
    "@super:get:traversalChildIdentifier": FlaxInstanceMethod(
      [],
      _flaxBinding4,
      _FlaxProxyDispatch15_super_get_traversalChildIdentifier,
    ),
    "@super:get:label": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_label,
    ),
    "@super:get:attributedLabel": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedLabel,
    ),
    "@super:get:value": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_value,
    ),
    "@super:get:attributedValue": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedValue,
    ),
    "@super:get:increasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_increasedValue,
    ),
    "@super:get:attributedIncreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedIncreasedValue,
    ),
    "@super:get:decreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_decreasedValue,
    ),
    "@super:get:attributedDecreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedDecreasedValue,
    ),
    "@super:get:hint": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_hint,
    ),
    "@super:get:attributedHint": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedHint,
    ),
    "@super:get:tooltip": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_tooltip,
    ),
    "@super:get:headingLevel": FlaxInstanceMethod(
      [],
      _flaxBinding19,
      _FlaxProxyDispatch14_super_get_headingLevel,
    ),
    "@super:get:textDirection": FlaxInstanceMethod(
      [],
      _flaxBinding382,
      _FlaxProxyDispatch15_super_get_textDirection,
    ),
    "@super:get:textSelection": FlaxInstanceMethod(
      [],
      _flaxBinding411,
      _FlaxProxyDispatch14_super_get_textSelection,
    ),
    "@super:get:scrollChildCount": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch14_super_get_scrollChildCount,
    ),
    "@super:get:scrollIndex": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch14_super_get_scrollIndex,
    ),
    "@super:get:scrollPosition": FlaxInstanceMethod(
      [],
      _flaxBinding413,
      _FlaxProxyDispatch14_super_get_scrollPosition,
    ),
    "@super:get:scrollExtentMax": FlaxInstanceMethod(
      [],
      _flaxBinding413,
      _FlaxProxyDispatch14_super_get_scrollExtentMax,
    ),
    "@super:get:scrollExtentMin": FlaxInstanceMethod(
      [],
      _flaxBinding413,
      _FlaxProxyDispatch14_super_get_scrollExtentMin,
    ),
    "@super:get:platformViewId": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch14_super_get_platformViewId,
    ),
    "@super:get:maxValueLength": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch15_super_get_maxValueLength,
    ),
    "@super:get:currentValueLength": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch15_super_get_currentValueLength,
    ),
    "@super:get:linkUrl": FlaxInstanceMethod(
      [],
      _flaxBinding398,
      _FlaxProxyDispatch15_super_get_linkUrl,
    ),
    "@super:get:rect": FlaxInstanceMethod(
      [],
      _flaxBinding830,
      _SemanticsData_super_get_rect,
    ),
    "@super:get:tags": FlaxInstanceMethod(
      [],
      _flaxBinding833,
      _SemanticsData_super_get_tags,
    ),
    "@super:get:transform": FlaxInstanceMethod(
      [],
      _flaxBinding835,
      _SemanticsData_super_get_transform,
    ),
    "@super:get:customSemanticsActionIds": FlaxInstanceMethod(
      [],
      _flaxBinding838,
      _SemanticsData_super_get_customSemanticsActionIds,
    ),
    "@super:get:role": FlaxInstanceMethod(
      [],
      _flaxBinding363,
      _FlaxProxyDispatch14_super_get_role,
    ),
    "@super:get:controlsNodes": FlaxInstanceMethod(
      [],
      _flaxBinding418,
      _FlaxProxyDispatch15_super_get_controlsNodes,
    ),
    "@super:get:validationResult": FlaxInstanceMethod(
      [],
      _flaxBinding420,
      _FlaxProxyDispatch15_super_get_validationResult,
    ),
    "@super:get:hitTestBehavior": FlaxInstanceMethod(
      [],
      _flaxBinding422,
      _FlaxProxyDispatch14_super_get_hitTestBehavior,
    ),
    "@super:get:inputType": FlaxInstanceMethod(
      [],
      _flaxBinding424,
      _FlaxProxyDispatch14_super_get_inputType,
    ),
    "@super:get:locale": FlaxInstanceMethod(
      [],
      _flaxBinding302,
      _SemanticsData_super_get_locale,
    ),
    "@super:get:maxValue": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _FlaxProxyDispatch15_super_get_maxValue,
    ),
    "@super:get:minValue": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _FlaxProxyDispatch15_super_get_minValue,
    ),
  },
  constructors: {"@implementation": _flaxBinding856},
  create: _createSemanticsData,
  matches: _isSemanticsData,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding205,
    _flaxBinding207,
    _flaxBinding209,
    _flaxBinding211,
    _flaxBinding858,
    _flaxBinding860,
    _flaxBinding861,
    _flaxBinding863,
    _flaxBinding864,
    _flaxBinding605,
    _flaxBinding606,
    _flaxBinding607,
    _flaxBinding610,
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
    _flaxBinding647,
    _flaxBinding629,
    _flaxBinding658,
    _flaxBinding597,
    _flaxBinding598,
    _flaxBinding660,
    _flaxBinding661,
    _flaxBinding662,
    _flaxBinding599,
    _flaxBinding600,
    _flaxBinding601,
    _flaxBinding645,
    _flaxBinding866,
    _flaxBinding868,
    _flaxBinding870,
    _flaxBinding872,
    _flaxBinding609,
    _flaxBinding664,
    _flaxBinding666,
    _flaxBinding668,
    _flaxBinding670,
    _flaxBinding556,
    _flaxBinding671,
    _flaxBinding672,
  ]),
);
const _flaxBinding874 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding163,
  _SemanticsHandle_dispose,
);
const _flaxBinding875 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsHandle",
  [],
  {"dispose": _flaxBinding874},
  constructors: {},
  create: _createSemanticsHandle,
  matches: _isSemanticsHandle,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding876 = FlaxGetter(
  "onTapHint",
  _flaxBinding56,
  _SemanticsHintOverrides_onTapHint,
);
const _flaxBinding877 = FlaxGetter(
  "onLongPressHint",
  _flaxBinding56,
  _SemanticsHintOverrides_onLongPressHint,
);
const _flaxBinding878 = FlaxGetter(
  "isNotEmpty",
  _flaxBinding52,
  _SemanticsHintOverrides_isNotEmpty,
);
const _flaxBinding879 = <FlaxParameter>[
  FlaxParameter("joiner", _flaxBinding0, required: false, defaultValue: ', '),
  FlaxParameter(
    "minLevel",
    _flaxBinding68,
    required: false,
    defaultValue: api2.DiagnosticLevel.debug,
  ),
];
const _flaxBinding880 = FlaxInstanceMethod(
  _flaxBinding879,
  _flaxBinding0,
  _SemanticsHintOverrides_toStringShallow,
);
const _flaxBinding881 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding68,
    required: false,
    defaultValue: api2.DiagnosticLevel.debug,
  ),
  FlaxParameter(
    "prefixLineOne",
    _flaxBinding0,
    required: false,
    defaultValue: '',
  ),
  FlaxParameter("prefixOtherLines", _flaxBinding56, required: false),
  FlaxParameter("wrapWidth", _flaxBinding19, required: false, defaultValue: 65),
];
const _flaxBinding882 = FlaxInstanceMethod(
  _flaxBinding881,
  _flaxBinding0,
  _SemanticsHintOverrides_toStringDeep,
);
const _flaxBinding883 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _SemanticsHintOverrides_toStringShort,
);
const _flaxBinding884 = FlaxInstanceMethod(
  _flaxBinding196,
  _flaxBinding87,
  _SemanticsHintOverrides_toDiagnosticsNode,
);
const _flaxBinding885 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding89,
  _SemanticsHintOverrides_debugDescribeChildren,
);
const _flaxBinding886 = FlaxInstanceMethod(
  _flaxBinding199,
  _flaxBinding163,
  _SemanticsHintOverrides_debugFillProperties,
);
const _flaxBinding887 = FlaxInstanceMethod(
  _flaxBinding194,
  _flaxBinding0,
  _SemanticsHintOverrides_toString,
);
const _flaxBinding888 = <FlaxParameter>[
  FlaxParameter("onTapHint", _flaxBinding56, required: false),
  FlaxParameter("onLongPressHint", _flaxBinding56, required: false),
];
const _flaxBinding889 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "joiner",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "minLevel",
      _flaxBinding68,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(n:o:joiner:String:,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding890 = FlaxProxyMember(
  "toStringShallow",
  0,
  _flaxBinding889,
  hasSuper: true,
);
const _flaxBinding891 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "prefixLineOne",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "prefixOtherLines",
      _flaxBinding56,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "minLevel",
      _flaxBinding68,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "wrapWidth",
      _flaxBinding19,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(n:o:prefixLineOne:String:,n:o:prefixOtherLines:String?:,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel,n:o:wrapWidth:int:)->String:",
);
const _flaxBinding892 = FlaxProxyMember(
  "toStringDeep",
  0,
  _flaxBinding891,
  hasSuper: true,
);
const _flaxBinding893 = FlaxProxyMember(
  "debugDescribeChildren",
  0,
  _flaxBinding107,
  hasSuper: true,
);
const _flaxBinding894 = FlaxProxyMember(
  "onTapHint",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding895 = FlaxProxyMember(
  "onLongPressHint",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding896 = FlaxProxyMember(
  "isNotEmpty",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding897 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsHintOverrides",
  [_flaxBinding876, _flaxBinding877, _flaxBinding878],
  {
    "toStringShallow": _flaxBinding880,
    "toStringDeep": _flaxBinding882,
    "toStringShort": _flaxBinding883,
    "toDiagnosticsNode": _flaxBinding884,
    "debugDescribeChildren": _flaxBinding885,
    "debugFillProperties": _flaxBinding886,
    "toString": _flaxBinding887,
    "@super:toStringShallow": FlaxInstanceMethod(
      _flaxBinding879,
      _flaxBinding0,
      _SemanticsHintOverrides_super_toStringShallow,
    ),
    "@super:toStringDeep": FlaxInstanceMethod(
      _flaxBinding881,
      _flaxBinding0,
      _SemanticsHintOverrides_super_toStringDeep,
    ),
    "@super:toStringShort": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toStringShort,
    ),
    "@super:toDiagnosticsNode": FlaxInstanceMethod(
      _flaxBinding196,
      _flaxBinding87,
      _FlaxProxyDispatch8_super_call_toDiagnosticsNode,
    ),
    "@super:debugDescribeChildren": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding89,
      _SemanticsHintOverrides_super_debugDescribeChildren,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod(
      _flaxBinding199,
      _flaxBinding163,
      _FlaxProxyDispatch8_super_call_debugFillProperties,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding194,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toString,
    ),
    "@super:get:onTapHint": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _SemanticsHintOverrides_super_get_onTapHint,
    ),
    "@super:get:onLongPressHint": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _SemanticsHintOverrides_super_get_onLongPressHint,
    ),
    "@super:get:isNotEmpty": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsHintOverrides_super_get_isNotEmpty,
    ),
  },
  constructors: {"@implementation": _flaxBinding888},
  create: _createSemanticsHintOverrides,
  matches: _isSemanticsHintOverrides,
  setters: [],
  supertypes: [
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding890,
    _flaxBinding892,
    _flaxBinding205,
    _flaxBinding209,
    _flaxBinding893,
    _flaxBinding211,
    _flaxBinding207,
    _flaxBinding894,
    _flaxBinding895,
    _flaxBinding896,
  ]),
);
const _flaxBinding898 = FlaxGetter(
  "separator",
  _flaxBinding0,
  _SemanticsLabelBuilder_separator,
);
const _flaxBinding899 = FlaxGetter(
  "textDirection",
  _flaxBinding382,
  _SemanticsLabelBuilder_textDirection,
);
const _flaxBinding900 = FlaxGetter(
  "isEmpty",
  _flaxBinding52,
  _SemanticsLabelBuilder_isEmpty,
);
const _flaxBinding901 = FlaxGetter(
  "length",
  _flaxBinding19,
  _SemanticsLabelBuilder_length,
);
const _flaxBinding902 = <FlaxParameter>[
  FlaxParameter("label", _flaxBinding0, required: true),
  FlaxParameter("textDirection", _flaxBinding382, required: false),
];
const _flaxBinding903 = FlaxInstanceMethod(
  _flaxBinding902,
  _flaxBinding163,
  _SemanticsLabelBuilder_addPart,
);
const _flaxBinding904 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _SemanticsLabelBuilder_build,
);
const _flaxBinding905 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding163,
  _SemanticsLabelBuilder_clear,
);
const _flaxBinding906 = <FlaxParameter>[
  FlaxParameter("separator", _flaxBinding0, required: false, defaultValue: ' '),
  FlaxParameter("textDirection", _flaxBinding382, required: false),
];
const _flaxBinding907 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsLabelBuilder",
  [_flaxBinding898, _flaxBinding899, _flaxBinding900, _flaxBinding901],
  {
    "addPart": _flaxBinding903,
    "build": _flaxBinding904,
    "clear": _flaxBinding905,
  },
  constructors: {"": _flaxBinding906},
  create: _createSemanticsLabelBuilder,
  matches: _isSemanticsLabelBuilder,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding908 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Key",
  nullable: true,
);
const _flaxBinding909 = FlaxGetter("key", _flaxBinding908, _SemanticsNode_key);
const _flaxBinding910 = FlaxGetter("id", _flaxBinding19, _SemanticsNode_id);
const _flaxBinding911 = FlaxGetter(
  "transform",
  _flaxBinding835,
  _SemanticsNode_transform,
);
const _flaxBinding912 = FlaxGetter(
  "rect",
  _flaxBinding830,
  _SemanticsNode_rect,
);
const _flaxBinding913 = FlaxGetter(
  "parentSemanticsClipRect",
  _flaxBinding291,
  _SemanticsNode_parentSemanticsClipRect,
);
const _flaxBinding914 = FlaxGetter(
  "parentPaintClipRect",
  _flaxBinding291,
  _SemanticsNode_parentPaintClipRect,
);
const _flaxBinding915 = FlaxGetter(
  "indexInParent",
  _flaxBinding2,
  _SemanticsNode_indexInParent,
);
const _flaxBinding916 = FlaxGetter(
  "isInvisible",
  _flaxBinding52,
  _SemanticsNode_isInvisible,
);
const _flaxBinding917 = FlaxGetter(
  "isMergedIntoParent",
  _flaxBinding52,
  _SemanticsNode_isMergedIntoParent,
);
const _flaxBinding918 = FlaxGetter(
  "areUserActionsBlocked",
  _flaxBinding52,
  _SemanticsNode_areUserActionsBlocked,
);
const _flaxBinding919 = FlaxGetter(
  "isPartOfNodeMerging",
  _flaxBinding52,
  _SemanticsNode_isPartOfNodeMerging,
);
const _flaxBinding920 = FlaxGetter(
  "mergeAllDescendantsIntoThisNode",
  _flaxBinding52,
  _SemanticsNode_mergeAllDescendantsIntoThisNode,
);
const _flaxBinding921 = FlaxGetter(
  "hasChildren",
  _flaxBinding52,
  _SemanticsNode_hasChildren,
);
const _flaxBinding922 = FlaxGetter(
  "childrenCount",
  _flaxBinding19,
  _SemanticsNode_childrenCount,
);
const _flaxBinding923 = FlaxGetter(
  "childrenCountInTraversalOrder",
  _flaxBinding19,
  _SemanticsNode_childrenCountInTraversalOrder,
);
const _flaxBinding924 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsOwner",
  nullable: true,
);
const _flaxBinding925 = FlaxGetter(
  "owner",
  _flaxBinding924,
  _SemanticsNode_owner,
);
const _flaxBinding926 = FlaxGetter(
  "attached",
  _flaxBinding52,
  _SemanticsNode_attached,
);
const _flaxBinding927 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsNode",
  nullable: true,
);
const _flaxBinding928 = FlaxGetter(
  "parent",
  _flaxBinding927,
  _SemanticsNode_parent,
);
const _flaxBinding929 = FlaxGetter(
  "traversalParent",
  _flaxBinding927,
  _SemanticsNode_traversalParent,
);
const _flaxBinding930 = FlaxGetter(
  "depth",
  _flaxBinding19,
  _SemanticsNode_depth,
);
const _flaxBinding931 = FlaxGetter(
  "tags",
  _flaxBinding833,
  _SemanticsNode_tags,
);
const _flaxBinding932 = FlaxGetter(
  "flagsCollection",
  _flaxBinding801,
  _SemanticsNode_flagsCollection,
);
const _flaxBinding933 = FlaxGetter(
  "identifier",
  _flaxBinding0,
  _SemanticsNode_identifier,
);
const _flaxBinding934 = FlaxGetter(
  "traversalParentIdentifier",
  _flaxBinding4,
  _SemanticsNode_traversalParentIdentifier,
);
const _flaxBinding935 = FlaxGetter(
  "traversalChildIdentifier",
  _flaxBinding4,
  _SemanticsNode_traversalChildIdentifier,
);
const _flaxBinding936 = FlaxGetter(
  "label",
  _flaxBinding0,
  _SemanticsNode_label,
);
const _flaxBinding937 = FlaxGetter(
  "attributedLabel",
  _flaxBinding42,
  _SemanticsNode_attributedLabel,
);
const _flaxBinding938 = FlaxGetter(
  "value",
  _flaxBinding0,
  _SemanticsNode_value,
);
const _flaxBinding939 = FlaxGetter(
  "attributedValue",
  _flaxBinding42,
  _SemanticsNode_attributedValue,
);
const _flaxBinding940 = FlaxGetter(
  "increasedValue",
  _flaxBinding0,
  _SemanticsNode_increasedValue,
);
const _flaxBinding941 = FlaxGetter(
  "attributedIncreasedValue",
  _flaxBinding42,
  _SemanticsNode_attributedIncreasedValue,
);
const _flaxBinding942 = FlaxGetter(
  "decreasedValue",
  _flaxBinding0,
  _SemanticsNode_decreasedValue,
);
const _flaxBinding943 = FlaxGetter(
  "attributedDecreasedValue",
  _flaxBinding42,
  _SemanticsNode_attributedDecreasedValue,
);
const _flaxBinding944 = FlaxGetter("hint", _flaxBinding0, _SemanticsNode_hint);
const _flaxBinding945 = FlaxGetter(
  "attributedHint",
  _flaxBinding42,
  _SemanticsNode_attributedHint,
);
const _flaxBinding946 = FlaxGetter(
  "tooltip",
  _flaxBinding0,
  _SemanticsNode_tooltip,
);
const _flaxBinding947 = FlaxGetter(
  "hintOverrides",
  _flaxBinding376,
  _SemanticsNode_hintOverrides,
);
const _flaxBinding948 = FlaxGetter(
  "textDirection",
  _flaxBinding382,
  _SemanticsNode_textDirection,
);
const _flaxBinding949 = FlaxGetter(
  "sortKey",
  _flaxBinding348,
  _SemanticsNode_sortKey,
);
const _flaxBinding950 = FlaxGetter(
  "textSelection",
  _flaxBinding411,
  _SemanticsNode_textSelection,
);
const _flaxBinding951 = FlaxGetter(
  "isMultiline",
  _flaxBinding385,
  _SemanticsNode_isMultiline,
);
const _flaxBinding952 = FlaxGetter(
  "scrollChildCount",
  _flaxBinding2,
  _SemanticsNode_scrollChildCount,
);
const _flaxBinding953 = FlaxGetter(
  "scrollIndex",
  _flaxBinding2,
  _SemanticsNode_scrollIndex,
);
const _flaxBinding954 = FlaxGetter(
  "scrollPosition",
  _flaxBinding413,
  _SemanticsNode_scrollPosition,
);
const _flaxBinding955 = FlaxGetter(
  "scrollExtentMax",
  _flaxBinding413,
  _SemanticsNode_scrollExtentMax,
);
const _flaxBinding956 = FlaxGetter(
  "scrollExtentMin",
  _flaxBinding413,
  _SemanticsNode_scrollExtentMin,
);
const _flaxBinding957 = FlaxGetter(
  "platformViewId",
  _flaxBinding2,
  _SemanticsNode_platformViewId,
);
const _flaxBinding958 = FlaxGetter(
  "maxValueLength",
  _flaxBinding2,
  _SemanticsNode_maxValueLength,
);
const _flaxBinding959 = FlaxGetter(
  "currentValueLength",
  _flaxBinding2,
  _SemanticsNode_currentValueLength,
);
const _flaxBinding960 = FlaxGetter(
  "headingLevel",
  _flaxBinding19,
  _SemanticsNode_headingLevel,
);
const _flaxBinding961 = FlaxGetter(
  "linkUrl",
  _flaxBinding398,
  _SemanticsNode_linkUrl,
);
const _flaxBinding962 = FlaxGetter(
  "role",
  _flaxBinding363,
  _SemanticsNode_role,
);
const _flaxBinding963 = FlaxGetter(
  "controlsNodes",
  _flaxBinding418,
  _SemanticsNode_controlsNodes,
);
const _flaxBinding964 = FlaxGetter(
  "minValue",
  _flaxBinding56,
  _SemanticsNode_minValue,
);
const _flaxBinding965 = FlaxGetter(
  "maxValue",
  _flaxBinding56,
  _SemanticsNode_maxValue,
);
const _flaxBinding966 = FlaxGetter(
  "validationResult",
  _flaxBinding420,
  _SemanticsNode_validationResult,
);
const _flaxBinding967 = FlaxGetter(
  "hitTestBehavior",
  _flaxBinding422,
  _SemanticsNode_hitTestBehavior,
);
const _flaxBinding968 = FlaxGetter(
  "inputType",
  _flaxBinding424,
  _SemanticsNode_inputType,
);
const _flaxBinding969 = FlaxSetter(
  "transform",
  _flaxBinding835,
  _SemanticsNode_set_transform,
);
const _flaxBinding970 = FlaxSetter(
  "rect",
  _flaxBinding830,
  _SemanticsNode_set_rect,
);
const _flaxBinding971 = FlaxSetter(
  "parentSemanticsClipRect",
  _flaxBinding291,
  _SemanticsNode_set_parentSemanticsClipRect,
);
const _flaxBinding972 = FlaxSetter(
  "parentPaintClipRect",
  _flaxBinding291,
  _SemanticsNode_set_parentPaintClipRect,
);
const _flaxBinding973 = FlaxSetter(
  "indexInParent",
  _flaxBinding2,
  _SemanticsNode_set_indexInParent,
);
const _flaxBinding974 = FlaxSetter(
  "isMergedIntoParent",
  _flaxBinding52,
  _SemanticsNode_set_isMergedIntoParent,
);
const _flaxBinding975 = FlaxSetter(
  "areUserActionsBlocked",
  _flaxBinding52,
  _SemanticsNode_set_areUserActionsBlocked,
);
const _flaxBinding976 = FlaxSetter(
  "traversalParent",
  _flaxBinding927,
  _SemanticsNode_set_traversalParent,
);
const _flaxBinding977 = FlaxSetter(
  "tags",
  _flaxBinding833,
  _SemanticsNode_set_tags,
);
const _flaxBinding978 = FlaxInstanceMethod(
  _flaxBinding194,
  _flaxBinding0,
  _SemanticsNode_toString,
);
const _flaxBinding979 = FlaxInstanceMethod(
  _flaxBinding879,
  _flaxBinding0,
  _SemanticsNode_toStringShallow,
);
const _flaxBinding980 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_semantics#type:DebugSemanticsDumpOrder",
);
const _flaxBinding981 = <FlaxParameter>[
  FlaxParameter(
    "childOrder",
    _flaxBinding980,
    required: false,
    defaultValue: api.DebugSemanticsDumpOrder.traversalOrder,
  ),
  FlaxParameter(
    "minLevel",
    _flaxBinding68,
    required: false,
    defaultValue: api2.DiagnosticLevel.debug,
  ),
  FlaxParameter(
    "prefixLineOne",
    _flaxBinding0,
    required: false,
    defaultValue: '',
  ),
  FlaxParameter("prefixOtherLines", _flaxBinding56, required: false),
  FlaxParameter("wrapWidth", _flaxBinding19, required: false, defaultValue: 65),
];
const _flaxBinding982 = FlaxInstanceMethod(
  _flaxBinding981,
  _flaxBinding0,
  _SemanticsNode_toStringDeep,
);
const _flaxBinding983 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _SemanticsNode_toStringShort,
);
const _flaxBinding984 = <FlaxParameter>[
  FlaxParameter(
    "childOrder",
    _flaxBinding980,
    required: false,
    defaultValue: api.DebugSemanticsDumpOrder.traversalOrder,
  ),
  FlaxParameter("name", _flaxBinding56, required: false),
  FlaxParameter(
    "style",
    _flaxBinding75,
    required: false,
    defaultValue: api2.DiagnosticsTreeStyle.sparse,
  ),
];
const _flaxBinding985 = FlaxInstanceMethod(
  _flaxBinding984,
  _flaxBinding87,
  _SemanticsNode_toDiagnosticsNode,
);
const _flaxBinding986 = <FlaxParameter>[
  FlaxParameter(
    "childOrder",
    _flaxBinding980,
    required: false,
    defaultValue: api.DebugSemanticsDumpOrder.traversalOrder,
  ),
];
const _flaxBinding987 = FlaxInstanceMethod(
  _flaxBinding986,
  _flaxBinding89,
  _SemanticsNode_debugDescribeChildren,
);
const _flaxBinding988 = FlaxInstanceMethod(
  _flaxBinding199,
  _flaxBinding163,
  _SemanticsNode_debugFillProperties,
);
const _flaxBinding989 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsNode",
);
const _flaxBinding990 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "node",
      _flaxBinding989,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding52,
  FlaxCallbackAdapters.wrap1<api.SemanticsNode, bool>,
  id: "callback:<>(p:r:node:object:flax.core/sdk_semantics#type:SemanticsNode)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api.SemanticsNode, bool>,
  matches: FlaxCallbackAdapters.matches1<api.SemanticsNode, bool>,
);
const _flaxBinding991 = FlaxTypeRef("callback", callback: _flaxBinding990);
const _flaxBinding992 = <FlaxParameter>[
  FlaxParameter("visitor", _flaxBinding991, required: true),
];
const _flaxBinding993 = FlaxInstanceMethod(
  _flaxBinding992,
  _flaxBinding163,
  _SemanticsNode_visitChildren,
);
const _flaxBinding994 = FlaxInstanceMethod(
  _flaxBinding532,
  _flaxBinding52,
  _SemanticsNode_isTagged,
);
const _flaxBinding995 = FlaxInstanceMethod(
  _flaxBinding853,
  _flaxBinding52,
  _SemanticsNode_hasFlag,
);
const _flaxBinding996 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding989,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_semantics#type:SemanticsNode]",
    _collection18Create,
    _collection18Matches,
    restore: _collection18Restore,
  ),
);
const _flaxBinding997 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding989,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_semantics#type:SemanticsNode]",
    _collection17Create,
    _collection17Matches,
  ),
  iterable: _flaxBinding996,
);
const _flaxBinding998 = <FlaxParameter>[
  FlaxParameter(
    "childrenInInversePaintOrder",
    _flaxBinding997,
    required: false,
  ),
  FlaxParameter("config", _flaxBinding535, required: true),
];
const _flaxBinding999 = FlaxInstanceMethod(
  _flaxBinding998,
  _flaxBinding163,
  _SemanticsNode_updateWith,
);
const _flaxBinding1000 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsData",
);
const _flaxBinding1001 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding1000,
  _SemanticsNode_getSemanticsData,
);
const _flaxBinding1002 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsEvent",
);
const _flaxBinding1003 = <FlaxParameter>[
  FlaxParameter("event", _flaxBinding1002, required: true),
];
const _flaxBinding1004 = FlaxInstanceMethod(
  _flaxBinding1003,
  _flaxBinding163,
  _SemanticsNode_sendEvent,
);
const _flaxBinding1005 = <FlaxParameter>[
  FlaxParameter("childOrder", _flaxBinding980, required: true),
];
const _flaxBinding1006 = FlaxTypeRef(
  "list",
  item: _flaxBinding989,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_semantics#type:SemanticsNode]",
    _collection17Create,
    _collection17Matches,
  ),
  iterable: _flaxBinding996,
);
const _flaxBinding1007 = FlaxInstanceMethod(
  _flaxBinding1005,
  _flaxBinding1006,
  _SemanticsNode_debugListChildrenInOrder,
);
const _flaxBinding1008 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding908, required: false),
  FlaxParameter("showOnScreen", _flaxBinding309, required: false),
];
const _flaxBinding1009 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "prefixLineOne",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "prefixOtherLines",
      _flaxBinding56,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "minLevel",
      _flaxBinding68,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "childOrder",
      _flaxBinding980,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "wrapWidth",
      _flaxBinding19,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(n:o:prefixLineOne:String:,n:o:prefixOtherLines:String?:,n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel,n:o:childOrder:enum:flax.core/sdk_semantics#type:DebugSemanticsDumpOrder,n:o:wrapWidth:int:)->String:",
);
const _flaxBinding1010 = FlaxProxyMember(
  "toStringDeep",
  0,
  _flaxBinding1009,
  hasSuper: true,
);
const _flaxBinding1011 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding56,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "style",
      _flaxBinding75,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "childOrder",
      _flaxBinding980,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding87,
  id: "callback:<>(n:o:name:String?:,n:o:style:enum?:flax.core/sdk_foundation#type:DiagnosticsTreeStyle,n:o:childOrder:enum:flax.core/sdk_semantics#type:DebugSemanticsDumpOrder)->object:flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding1012 = FlaxProxyMember(
  "toDiagnosticsNode",
  0,
  _flaxBinding1011,
  hasSuper: true,
);
const _flaxBinding1013 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "childOrder",
      _flaxBinding980,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding89,
  id: "callback:<>(n:o:childOrder:enum:flax.core/sdk_semantics#type:DebugSemanticsDumpOrder)->list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
);
const _flaxBinding1014 = FlaxProxyMember(
  "debugDescribeChildren",
  0,
  _flaxBinding1013,
  hasSuper: true,
);
const _flaxBinding1015 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "visitor",
      _flaxBinding991,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:visitor:callback:<>(p:r:node:object:flax.core/sdk_semantics#type:SemanticsNode)->bool:)->void:",
);
const _flaxBinding1016 = FlaxProxyMember(
  "visitChildren",
  0,
  _flaxBinding1015,
  hasSuper: true,
);
const _flaxBinding1017 = FlaxProxyMember(
  "isTagged",
  0,
  _flaxBinding543,
  hasSuper: true,
);
const _flaxBinding1018 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "config",
      _flaxBinding535,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "childrenInInversePaintOrder",
      _flaxBinding997,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(n:r:config:object?:flax.core/sdk_semantics#type:SemanticsConfiguration,n:o:childrenInInversePaintOrder:list?:[object:flax.core/sdk_semantics#type:SemanticsNode])->void:",
);
const _flaxBinding1019 = FlaxProxyMember(
  "updateWith",
  0,
  _flaxBinding1018,
  hasSuper: true,
);
const _flaxBinding1020 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1000,
  id: "callback:<>()->object:flax.core/sdk_semantics#type:SemanticsData",
);
const _flaxBinding1021 = FlaxProxyMember(
  "getSemanticsData",
  0,
  _flaxBinding1020,
  hasSuper: true,
);
const _flaxBinding1022 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "event",
      _flaxBinding1002,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:event:object:flax.core/sdk_semantics#type:SemanticsEvent)->void:",
);
const _flaxBinding1023 = FlaxProxyMember(
  "sendEvent",
  0,
  _flaxBinding1022,
  hasSuper: true,
);
const _flaxBinding1024 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "childOrder",
      _flaxBinding980,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding1006,
  id: "callback:<>(p:r:childOrder:enum:flax.core/sdk_semantics#type:DebugSemanticsDumpOrder)->list:[object:flax.core/sdk_semantics#type:SemanticsNode]",
);
const _flaxBinding1025 = FlaxProxyMember(
  "debugListChildrenInOrder",
  0,
  _flaxBinding1024,
  hasSuper: true,
);
const _flaxBinding1026 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding908,
  id: "callback:<>()->object?:flax.core/flutter#type:Key",
);
const _flaxBinding1027 = FlaxProxyMember(
  "key",
  1,
  _flaxBinding1026,
  hasSuper: true,
);
const _flaxBinding1028 = FlaxProxyMember(
  "id",
  1,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding1029 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding291,
  id: "callback:<>()->object?:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding1030 = FlaxProxyMember(
  "parentSemanticsClipRect",
  1,
  _flaxBinding1029,
  hasSuper: true,
);
const _flaxBinding1031 = FlaxProxyMember(
  "parentPaintClipRect",
  1,
  _flaxBinding1029,
  hasSuper: true,
);
const _flaxBinding1032 = FlaxProxyMember(
  "isInvisible",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding1033 = FlaxProxyMember(
  "isMergedIntoParent",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding1034 = FlaxProxyMember(
  "areUserActionsBlocked",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding1035 = FlaxProxyMember(
  "isPartOfNodeMerging",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding1036 = FlaxProxyMember(
  "mergeAllDescendantsIntoThisNode",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding1037 = FlaxProxyMember(
  "hasChildren",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding1038 = FlaxProxyMember(
  "childrenCount",
  1,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding1039 = FlaxProxyMember(
  "childrenCountInTraversalOrder",
  1,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding1040 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding924,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:SemanticsOwner",
);
const _flaxBinding1041 = FlaxProxyMember(
  "owner",
  1,
  _flaxBinding1040,
  hasSuper: true,
);
const _flaxBinding1042 = FlaxProxyMember(
  "attached",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding1043 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding927,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:SemanticsNode",
);
const _flaxBinding1044 = FlaxProxyMember(
  "parent",
  1,
  _flaxBinding1043,
  hasSuper: true,
);
const _flaxBinding1045 = FlaxProxyMember(
  "traversalParent",
  1,
  _flaxBinding1043,
  hasSuper: true,
);
const _flaxBinding1046 = FlaxProxyMember(
  "depth",
  1,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding1047 = FlaxProxyMember(
  "isMultiline",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1048 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding835,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_rendering#type:Matrix4)->void:",
);
const _flaxBinding1049 = FlaxProxyMember(
  "transform",
  2,
  _flaxBinding1048,
  hasSuper: true,
);
const _flaxBinding1050 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding830,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:object:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding1051 = FlaxProxyMember(
  "rect",
  2,
  _flaxBinding1050,
  hasSuper: true,
);
const _flaxBinding1052 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding291,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding1053 = FlaxProxyMember(
  "parentSemanticsClipRect",
  2,
  _flaxBinding1052,
  hasSuper: true,
);
const _flaxBinding1054 = FlaxProxyMember(
  "parentPaintClipRect",
  2,
  _flaxBinding1052,
  hasSuper: true,
);
const _flaxBinding1055 = FlaxProxyMember(
  "isMergedIntoParent",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding1056 = FlaxProxyMember(
  "areUserActionsBlocked",
  2,
  _flaxBinding675,
  hasSuper: true,
);
const _flaxBinding1057 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding927,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_semantics#type:SemanticsNode)->void:",
);
const _flaxBinding1058 = FlaxProxyMember(
  "traversalParent",
  2,
  _flaxBinding1057,
  hasSuper: true,
);
const _flaxBinding1059 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding833,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:value:set?:[object:flax.core/sdk_semantics#type:SemanticsTag])->void:",
);
const _flaxBinding1060 = FlaxProxyMember(
  "tags",
  2,
  _flaxBinding1059,
  hasSuper: true,
);
const _flaxBinding1061 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsNode",
  [
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
    _flaxBinding925,
    _flaxBinding926,
    _flaxBinding928,
    _flaxBinding929,
    _flaxBinding930,
    _flaxBinding931,
    _flaxBinding932,
    _flaxBinding933,
    _flaxBinding934,
    _flaxBinding935,
    _flaxBinding936,
    _flaxBinding937,
    _flaxBinding938,
    _flaxBinding939,
    _flaxBinding940,
    _flaxBinding941,
    _flaxBinding942,
    _flaxBinding943,
    _flaxBinding944,
    _flaxBinding945,
    _flaxBinding946,
    _flaxBinding947,
    _flaxBinding948,
    _flaxBinding949,
    _flaxBinding950,
    _flaxBinding951,
    _flaxBinding952,
    _flaxBinding953,
    _flaxBinding954,
    _flaxBinding955,
    _flaxBinding956,
    _flaxBinding957,
    _flaxBinding958,
    _flaxBinding959,
    _flaxBinding960,
    _flaxBinding961,
    _flaxBinding962,
    _flaxBinding963,
    _flaxBinding964,
    _flaxBinding965,
    _flaxBinding966,
    _flaxBinding967,
    _flaxBinding968,
  ],
  {
    "toString": _flaxBinding978,
    "toStringShallow": _flaxBinding979,
    "toStringDeep": _flaxBinding982,
    "toStringShort": _flaxBinding983,
    "toDiagnosticsNode": _flaxBinding985,
    "debugDescribeChildren": _flaxBinding987,
    "debugFillProperties": _flaxBinding988,
    "visitChildren": _flaxBinding993,
    "isTagged": _flaxBinding994,
    "hasFlag": _flaxBinding995,
    "updateWith": _flaxBinding999,
    "getSemanticsData": _flaxBinding1001,
    "sendEvent": _flaxBinding1004,
    "debugListChildrenInOrder": _flaxBinding1007,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding194,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toString,
    ),
    "@super:toStringShallow": FlaxInstanceMethod(
      _flaxBinding879,
      _flaxBinding0,
      _SemanticsNode_super_toStringShallow,
    ),
    "@super:toStringDeep": FlaxInstanceMethod(
      _flaxBinding981,
      _flaxBinding0,
      _SemanticsNode_super_toStringDeep,
    ),
    "@super:toStringShort": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toStringShort,
    ),
    "@super:toDiagnosticsNode": FlaxInstanceMethod(
      _flaxBinding984,
      _flaxBinding87,
      _SemanticsNode_super_toDiagnosticsNode,
    ),
    "@super:debugDescribeChildren": FlaxInstanceMethod(
      _flaxBinding986,
      _flaxBinding89,
      _SemanticsNode_super_debugDescribeChildren,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod(
      _flaxBinding199,
      _flaxBinding163,
      _SemanticsNode_super_debugFillProperties,
    ),
    "@super:visitChildren": FlaxInstanceMethod(
      _flaxBinding992,
      _flaxBinding163,
      _SemanticsNode_super_visitChildren,
    ),
    "@super:isTagged": FlaxInstanceMethod(
      _flaxBinding532,
      _flaxBinding52,
      _SemanticsNode_super_isTagged,
    ),
    "@super:hasFlag": FlaxInstanceMethod(
      _flaxBinding853,
      _flaxBinding52,
      _SemanticsNode_super_hasFlag,
    ),
    "@super:updateWith": FlaxInstanceMethod(
      _flaxBinding998,
      _flaxBinding163,
      _SemanticsNode_super_updateWith,
    ),
    "@super:getSemanticsData": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding1000,
      _SemanticsNode_super_getSemanticsData,
    ),
    "@super:sendEvent": FlaxInstanceMethod(
      _flaxBinding1003,
      _flaxBinding163,
      _SemanticsNode_super_sendEvent,
    ),
    "@super:debugListChildrenInOrder": FlaxInstanceMethod(
      _flaxBinding1005,
      _flaxBinding1006,
      _SemanticsNode_super_debugListChildrenInOrder,
    ),
    "@super:get:key": FlaxInstanceMethod(
      [],
      _flaxBinding908,
      _SemanticsNode_super_get_key,
    ),
    "@super:get:id": FlaxInstanceMethod(
      [],
      _flaxBinding19,
      _SemanticsNode_super_get_id,
    ),
    "@super:get:transform": FlaxInstanceMethod(
      [],
      _flaxBinding835,
      _SemanticsNode_super_get_transform,
    ),
    "@super:get:rect": FlaxInstanceMethod(
      [],
      _flaxBinding830,
      _SemanticsNode_super_get_rect,
    ),
    "@super:get:parentSemanticsClipRect": FlaxInstanceMethod(
      [],
      _flaxBinding291,
      _SemanticsNode_super_get_parentSemanticsClipRect,
    ),
    "@super:get:parentPaintClipRect": FlaxInstanceMethod(
      [],
      _flaxBinding291,
      _SemanticsNode_super_get_parentPaintClipRect,
    ),
    "@super:get:indexInParent": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _SemanticsNode_super_get_indexInParent,
    ),
    "@super:get:isInvisible": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsNode_super_get_isInvisible,
    ),
    "@super:get:isMergedIntoParent": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsNode_super_get_isMergedIntoParent,
    ),
    "@super:get:areUserActionsBlocked": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsNode_super_get_areUserActionsBlocked,
    ),
    "@super:get:isPartOfNodeMerging": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsNode_super_get_isPartOfNodeMerging,
    ),
    "@super:get:mergeAllDescendantsIntoThisNode": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsNode_super_get_mergeAllDescendantsIntoThisNode,
    ),
    "@super:get:hasChildren": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsNode_super_get_hasChildren,
    ),
    "@super:get:childrenCount": FlaxInstanceMethod(
      [],
      _flaxBinding19,
      _SemanticsNode_super_get_childrenCount,
    ),
    "@super:get:childrenCountInTraversalOrder": FlaxInstanceMethod(
      [],
      _flaxBinding19,
      _SemanticsNode_super_get_childrenCountInTraversalOrder,
    ),
    "@super:get:owner": FlaxInstanceMethod(
      [],
      _flaxBinding924,
      _SemanticsNode_super_get_owner,
    ),
    "@super:get:attached": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsNode_super_get_attached,
    ),
    "@super:get:parent": FlaxInstanceMethod(
      [],
      _flaxBinding927,
      _SemanticsNode_super_get_parent,
    ),
    "@super:get:traversalParent": FlaxInstanceMethod(
      [],
      _flaxBinding927,
      _SemanticsNode_super_get_traversalParent,
    ),
    "@super:get:depth": FlaxInstanceMethod(
      [],
      _flaxBinding19,
      _SemanticsNode_super_get_depth,
    ),
    "@super:get:tags": FlaxInstanceMethod(
      [],
      _flaxBinding833,
      _SemanticsNode_super_get_tags,
    ),
    "@super:get:flagsCollection": FlaxInstanceMethod(
      [],
      _flaxBinding801,
      _SemanticsNode_super_get_flagsCollection,
    ),
    "@super:get:identifier": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_identifier,
    ),
    "@super:get:traversalParentIdentifier": FlaxInstanceMethod(
      [],
      _flaxBinding4,
      _FlaxProxyDispatch15_super_get_traversalParentIdentifier,
    ),
    "@super:get:traversalChildIdentifier": FlaxInstanceMethod(
      [],
      _flaxBinding4,
      _FlaxProxyDispatch15_super_get_traversalChildIdentifier,
    ),
    "@super:get:label": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_label,
    ),
    "@super:get:attributedLabel": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedLabel,
    ),
    "@super:get:value": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_value,
    ),
    "@super:get:attributedValue": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedValue,
    ),
    "@super:get:increasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_increasedValue,
    ),
    "@super:get:attributedIncreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedIncreasedValue,
    ),
    "@super:get:decreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_decreasedValue,
    ),
    "@super:get:attributedDecreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedDecreasedValue,
    ),
    "@super:get:hint": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_hint,
    ),
    "@super:get:attributedHint": FlaxInstanceMethod(
      [],
      _flaxBinding42,
      _FlaxProxyDispatch14_super_get_attributedHint,
    ),
    "@super:get:tooltip": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch14_super_get_tooltip,
    ),
    "@super:get:hintOverrides": FlaxInstanceMethod(
      [],
      _flaxBinding376,
      _SemanticsNode_super_get_hintOverrides,
    ),
    "@super:get:textDirection": FlaxInstanceMethod(
      [],
      _flaxBinding382,
      _FlaxProxyDispatch15_super_get_textDirection,
    ),
    "@super:get:sortKey": FlaxInstanceMethod(
      [],
      _flaxBinding348,
      _SemanticsNode_super_get_sortKey,
    ),
    "@super:get:textSelection": FlaxInstanceMethod(
      [],
      _flaxBinding411,
      _FlaxProxyDispatch14_super_get_textSelection,
    ),
    "@super:get:isMultiline": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsNode_super_get_isMultiline,
    ),
    "@super:get:scrollChildCount": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch14_super_get_scrollChildCount,
    ),
    "@super:get:scrollIndex": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch14_super_get_scrollIndex,
    ),
    "@super:get:scrollPosition": FlaxInstanceMethod(
      [],
      _flaxBinding413,
      _FlaxProxyDispatch14_super_get_scrollPosition,
    ),
    "@super:get:scrollExtentMax": FlaxInstanceMethod(
      [],
      _flaxBinding413,
      _FlaxProxyDispatch14_super_get_scrollExtentMax,
    ),
    "@super:get:scrollExtentMin": FlaxInstanceMethod(
      [],
      _flaxBinding413,
      _FlaxProxyDispatch14_super_get_scrollExtentMin,
    ),
    "@super:get:platformViewId": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch14_super_get_platformViewId,
    ),
    "@super:get:maxValueLength": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch15_super_get_maxValueLength,
    ),
    "@super:get:currentValueLength": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch15_super_get_currentValueLength,
    ),
    "@super:get:headingLevel": FlaxInstanceMethod(
      [],
      _flaxBinding19,
      _FlaxProxyDispatch14_super_get_headingLevel,
    ),
    "@super:get:linkUrl": FlaxInstanceMethod(
      [],
      _flaxBinding398,
      _FlaxProxyDispatch15_super_get_linkUrl,
    ),
    "@super:get:role": FlaxInstanceMethod(
      [],
      _flaxBinding363,
      _FlaxProxyDispatch14_super_get_role,
    ),
    "@super:get:controlsNodes": FlaxInstanceMethod(
      [],
      _flaxBinding418,
      _FlaxProxyDispatch15_super_get_controlsNodes,
    ),
    "@super:get:minValue": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _FlaxProxyDispatch15_super_get_minValue,
    ),
    "@super:get:maxValue": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _FlaxProxyDispatch15_super_get_maxValue,
    ),
    "@super:get:validationResult": FlaxInstanceMethod(
      [],
      _flaxBinding420,
      _FlaxProxyDispatch15_super_get_validationResult,
    ),
    "@super:get:hitTestBehavior": FlaxInstanceMethod(
      [],
      _flaxBinding422,
      _FlaxProxyDispatch14_super_get_hitTestBehavior,
    ),
    "@super:get:inputType": FlaxInstanceMethod(
      [],
      _flaxBinding424,
      _FlaxProxyDispatch14_super_get_inputType,
    ),
    "@super:set:transform": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding835, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsNode_super_set_transform,
    ),
    "@super:set:rect": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding830, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsNode_super_set_rect,
    ),
    "@super:set:parentSemanticsClipRect": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding291, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsNode_super_set_parentSemanticsClipRect,
    ),
    "@super:set:parentPaintClipRect": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding291, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsNode_super_set_parentPaintClipRect,
    ),
    "@super:set:indexInParent": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding2, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsNode_super_set_indexInParent,
    ),
    "@super:set:isMergedIntoParent": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsNode_super_set_isMergedIntoParent,
    ),
    "@super:set:areUserActionsBlocked": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding52, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsNode_super_set_areUserActionsBlocked,
    ),
    "@super:set:traversalParent": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding927, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsNode_super_set_traversalParent,
    ),
    "@super:set:tags": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding833, required: true)],
      const FlaxTypeRef("void"),
      _SemanticsNode_super_set_tags,
    ),
  },
  constructors: {"@implementation": _flaxBinding1008},
  create: _createSemanticsNode,
  matches: _isSemanticsNode,
  setters: [
    _flaxBinding969,
    _flaxBinding970,
    _flaxBinding971,
    _flaxBinding972,
    _flaxBinding973,
    _flaxBinding974,
    _flaxBinding975,
    _flaxBinding976,
    _flaxBinding977,
  ],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:DiagnosticableTreeMixin",
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding207,
    _flaxBinding890,
    _flaxBinding1010,
    _flaxBinding205,
    _flaxBinding1012,
    _flaxBinding1014,
    _flaxBinding211,
    _flaxBinding1016,
    _flaxBinding1017,
    _flaxBinding858,
    _flaxBinding1019,
    _flaxBinding1021,
    _flaxBinding1023,
    _flaxBinding1025,
    _flaxBinding1027,
    _flaxBinding1028,
    _flaxBinding870,
    _flaxBinding866,
    _flaxBinding1030,
    _flaxBinding1031,
    _flaxBinding596,
    _flaxBinding1032,
    _flaxBinding1033,
    _flaxBinding1034,
    _flaxBinding1035,
    _flaxBinding1036,
    _flaxBinding1037,
    _flaxBinding1038,
    _flaxBinding1039,
    _flaxBinding1041,
    _flaxBinding1042,
    _flaxBinding1044,
    _flaxBinding1045,
    _flaxBinding1046,
    _flaxBinding868,
    _flaxBinding863,
    _flaxBinding605,
    _flaxBinding606,
    _flaxBinding607,
    _flaxBinding610,
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
    _flaxBinding623,
    _flaxBinding629,
    _flaxBinding594,
    _flaxBinding658,
    _flaxBinding1047,
    _flaxBinding597,
    _flaxBinding598,
    _flaxBinding660,
    _flaxBinding661,
    _flaxBinding662,
    _flaxBinding599,
    _flaxBinding600,
    _flaxBinding601,
    _flaxBinding647,
    _flaxBinding645,
    _flaxBinding609,
    _flaxBinding664,
    _flaxBinding672,
    _flaxBinding671,
    _flaxBinding666,
    _flaxBinding668,
    _flaxBinding670,
    _flaxBinding1049,
    _flaxBinding1051,
    _flaxBinding1053,
    _flaxBinding1054,
    _flaxBinding718,
    _flaxBinding1055,
    _flaxBinding1056,
    _flaxBinding1058,
    _flaxBinding1060,
  ]),
);
const _flaxBinding1062 = FlaxGetter(
  "hasListeners",
  _flaxBinding52,
  _SemanticsOwner_hasListeners,
);
const _flaxBinding1063 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsUpdate",
);
const _flaxBinding1064 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "update",
      _flaxBinding1063,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  FlaxCallbackAdapters.wrapVoid1<api1.SemanticsUpdate>,
  id: "callback:<>(p:r:update:object:flax.core/sdk_dart_ui#type:SemanticsUpdate)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api1.SemanticsUpdate>,
  matches: FlaxCallbackAdapters.matchesVoid1<api1.SemanticsUpdate>,
);
const _flaxBinding1065 = FlaxTypeRef("callback", callback: _flaxBinding1064);
const _flaxBinding1066 = FlaxGetter(
  "onSemanticsUpdate",
  _flaxBinding1065,
  _SemanticsOwner_onSemanticsUpdate,
);
const _flaxBinding1067 = FlaxGetter(
  "rootSemanticsNode",
  _flaxBinding927,
  _SemanticsOwner_rootSemanticsNode,
);
const _flaxBinding1068 = FlaxInstanceMethod(
  _flaxBinding281,
  _flaxBinding163,
  _SemanticsOwner_addListener,
);
const _flaxBinding1069 = FlaxInstanceMethod(
  _flaxBinding281,
  _flaxBinding163,
  _SemanticsOwner_removeListener,
);
const _flaxBinding1070 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding163,
  _SemanticsOwner_dispose,
);
const _flaxBinding1071 = <FlaxParameter>[
  FlaxParameter("id", _flaxBinding19, required: true),
];
const _flaxBinding1072 = FlaxInstanceMethod(
  _flaxBinding1071,
  _flaxBinding927,
  _SemanticsOwner_getSemanticsNode,
);
const _flaxBinding1073 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding163,
  _SemanticsOwner_sendSemanticsUpdate,
);
const _flaxBinding1074 = <FlaxParameter>[
  FlaxParameter("id", _flaxBinding19, required: true),
  FlaxParameter("action", _flaxBinding527, required: true),
  FlaxParameter("args", _flaxBinding4, required: false),
];
const _flaxBinding1075 = FlaxInstanceMethod(
  _flaxBinding1074,
  _flaxBinding163,
  _SemanticsOwner_performAction,
);
const _flaxBinding1076 = <FlaxParameter>[
  FlaxParameter("position", _flaxBinding317, required: true),
  FlaxParameter("action", _flaxBinding527, required: true),
  FlaxParameter("args", _flaxBinding4, required: false),
];
const _flaxBinding1077 = FlaxInstanceMethod(
  _flaxBinding1076,
  _flaxBinding163,
  _SemanticsOwner_performActionAt,
);
const _flaxBinding1078 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _SemanticsOwner_toString,
);
const _flaxBinding1079 = <FlaxParameter>[
  FlaxParameter("onSemanticsUpdate", _flaxBinding1065, required: true),
];
const _flaxBinding1080 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "listener",
      _flaxBinding280,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:listener:callback:<>()->void:)->void:",
);
const _flaxBinding1081 = FlaxProxyMember(
  "addListener",
  0,
  _flaxBinding1080,
  hasSuper: true,
);
const _flaxBinding1082 = FlaxProxyMember(
  "removeListener",
  0,
  _flaxBinding1080,
  hasSuper: true,
);
const _flaxBinding1083 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding163,
  id: "callback:<>()->void:",
);
const _flaxBinding1084 = FlaxProxyMember(
  "dispose",
  0,
  _flaxBinding1083,
  hasSuper: true,
);
const _flaxBinding1085 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "id",
      _flaxBinding19,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding927,
  id: "callback:<>(p:r:id:int:)->object?:flax.core/sdk_semantics#type:SemanticsNode",
);
const _flaxBinding1086 = FlaxProxyMember(
  "getSemanticsNode",
  0,
  _flaxBinding1085,
  hasSuper: true,
);
const _flaxBinding1087 = FlaxProxyMember(
  "sendSemanticsUpdate",
  0,
  _flaxBinding1083,
  hasSuper: true,
);
const _flaxBinding1088 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "id",
      _flaxBinding19,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "action",
      _flaxBinding527,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "args",
      _flaxBinding4,
      required: false,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:id:int:,p:r:action:object:flax.core/sdk_dart_ui#type:SemanticsAction,p:o:args:any?:)->void:",
);
const _flaxBinding1089 = FlaxProxyMember(
  "performAction",
  0,
  _flaxBinding1088,
  hasSuper: true,
);
const _flaxBinding1090 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "position",
      _flaxBinding317,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "action",
      _flaxBinding527,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "args",
      _flaxBinding4,
      required: false,
      positional: true,
    ),
  ],
  _flaxBinding163,
  id: "callback:<>(p:r:position:object:flax.core/flutter#type:Offset,p:r:action:object:flax.core/sdk_dart_ui#type:SemanticsAction,p:o:args:any?:)->void:",
);
const _flaxBinding1091 = FlaxProxyMember(
  "performActionAt",
  0,
  _flaxBinding1090,
  hasSuper: true,
);
const _flaxBinding1092 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1065,
  id: "callback:<>()->callback:<>(p:r:update:object:flax.core/sdk_dart_ui#type:SemanticsUpdate)->void:",
);
const _flaxBinding1093 = FlaxProxyMember(
  "onSemanticsUpdate",
  1,
  _flaxBinding1092,
  hasSuper: true,
);
const _flaxBinding1094 = FlaxProxyMember(
  "rootSemanticsNode",
  1,
  _flaxBinding1043,
  hasSuper: true,
);
const _flaxBinding1095 = FlaxProxyMember(
  "hasListeners",
  1,
  _flaxBinding119,
  hasSuper: true,
);
const _flaxBinding1096 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsOwner",
  [_flaxBinding1062, _flaxBinding1066, _flaxBinding1067],
  {
    "addListener": _flaxBinding1068,
    "removeListener": _flaxBinding1069,
    "dispose": _flaxBinding1070,
    "getSemanticsNode": _flaxBinding1072,
    "sendSemanticsUpdate": _flaxBinding1073,
    "performAction": _flaxBinding1075,
    "performActionAt": _flaxBinding1077,
    "toString": _flaxBinding1078,
    "@super:addListener": FlaxInstanceMethod(
      _flaxBinding281,
      _flaxBinding163,
      _SemanticsOwner_super_addListener,
    ),
    "@super:removeListener": FlaxInstanceMethod(
      _flaxBinding281,
      _flaxBinding163,
      _SemanticsOwner_super_removeListener,
    ),
    "@super:dispose": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding163,
      _SemanticsOwner_super_dispose,
    ),
    "@super:getSemanticsNode": FlaxInstanceMethod(
      _flaxBinding1071,
      _flaxBinding927,
      _SemanticsOwner_super_getSemanticsNode,
    ),
    "@super:sendSemanticsUpdate": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding163,
      _SemanticsOwner_super_sendSemanticsUpdate,
    ),
    "@super:performAction": FlaxInstanceMethod(
      _flaxBinding1074,
      _flaxBinding163,
      _SemanticsOwner_super_performAction,
    ),
    "@super:performActionAt": FlaxInstanceMethod(
      _flaxBinding1076,
      _flaxBinding163,
      _SemanticsOwner_super_performActionAt,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:onSemanticsUpdate": FlaxInstanceMethod(
      [],
      _flaxBinding1065,
      _SemanticsOwner_super_get_onSemanticsUpdate,
    ),
    "@super:get:rootSemanticsNode": FlaxInstanceMethod(
      [],
      _flaxBinding927,
      _SemanticsOwner_super_get_rootSemanticsNode,
    ),
    "@super:get:hasListeners": FlaxInstanceMethod(
      [],
      _flaxBinding52,
      _SemanticsOwner_super_get_hasListeners,
    ),
  },
  constructors: {"@implementation": _flaxBinding1079},
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
    _flaxBinding1081,
    _flaxBinding1082,
    _flaxBinding1084,
    _flaxBinding1086,
    _flaxBinding1087,
    _flaxBinding1089,
    _flaxBinding1091,
    _flaxBinding16,
    _flaxBinding1093,
    _flaxBinding1094,
    _flaxBinding1095,
  ]),
);
const _flaxBinding1097 = FlaxGetter(
  "enabled",
  _flaxBinding385,
  _SemanticsProperties_enabled,
);
const _flaxBinding1098 = FlaxGetter(
  "checked",
  _flaxBinding385,
  _SemanticsProperties_checked,
);
const _flaxBinding1099 = FlaxGetter(
  "mixed",
  _flaxBinding385,
  _SemanticsProperties_mixed,
);
const _flaxBinding1100 = FlaxGetter(
  "expanded",
  _flaxBinding385,
  _SemanticsProperties_expanded,
);
const _flaxBinding1101 = FlaxGetter(
  "toggled",
  _flaxBinding385,
  _SemanticsProperties_toggled,
);
const _flaxBinding1102 = FlaxGetter(
  "selected",
  _flaxBinding385,
  _SemanticsProperties_selected,
);
const _flaxBinding1103 = FlaxGetter(
  "button",
  _flaxBinding385,
  _SemanticsProperties_button,
);
const _flaxBinding1104 = FlaxGetter(
  "link",
  _flaxBinding385,
  _SemanticsProperties_link,
);
const _flaxBinding1105 = FlaxGetter(
  "header",
  _flaxBinding385,
  _SemanticsProperties_header,
);
const _flaxBinding1106 = FlaxGetter(
  "textField",
  _flaxBinding385,
  _SemanticsProperties_textField,
);
const _flaxBinding1107 = FlaxGetter(
  "slider",
  _flaxBinding385,
  _SemanticsProperties_slider,
);
const _flaxBinding1108 = FlaxGetter(
  "keyboardKey",
  _flaxBinding385,
  _SemanticsProperties_keyboardKey,
);
const _flaxBinding1109 = FlaxGetter(
  "readOnly",
  _flaxBinding385,
  _SemanticsProperties_readOnly,
);
const _flaxBinding1110 = FlaxGetter(
  "focusable",
  _flaxBinding385,
  _SemanticsProperties_focusable,
);
const _flaxBinding1111 = FlaxGetter(
  "focused",
  _flaxBinding385,
  _SemanticsProperties_focused,
);
const _flaxBinding1112 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_semantics#type:AccessibilityFocusBlockType",
  nullable: true,
);
const _flaxBinding1113 = FlaxGetter(
  "accessibilityFocusBlockType",
  _flaxBinding1112,
  _SemanticsProperties_accessibilityFocusBlockType,
);
const _flaxBinding1114 = FlaxGetter(
  "inMutuallyExclusiveGroup",
  _flaxBinding385,
  _SemanticsProperties_inMutuallyExclusiveGroup,
);
const _flaxBinding1115 = FlaxGetter(
  "hidden",
  _flaxBinding385,
  _SemanticsProperties_hidden,
);
const _flaxBinding1116 = FlaxGetter(
  "obscured",
  _flaxBinding385,
  _SemanticsProperties_obscured,
);
const _flaxBinding1117 = FlaxGetter(
  "multiline",
  _flaxBinding385,
  _SemanticsProperties_multiline,
);
const _flaxBinding1118 = FlaxGetter(
  "scopesRoute",
  _flaxBinding385,
  _SemanticsProperties_scopesRoute,
);
const _flaxBinding1119 = FlaxGetter(
  "namesRoute",
  _flaxBinding385,
  _SemanticsProperties_namesRoute,
);
const _flaxBinding1120 = FlaxGetter(
  "image",
  _flaxBinding385,
  _SemanticsProperties_image,
);
const _flaxBinding1121 = FlaxGetter(
  "liveRegion",
  _flaxBinding385,
  _SemanticsProperties_liveRegion,
);
const _flaxBinding1122 = FlaxGetter(
  "isRequired",
  _flaxBinding385,
  _SemanticsProperties_isRequired,
);
const _flaxBinding1123 = FlaxGetter(
  "maxValueLength",
  _flaxBinding2,
  _SemanticsProperties_maxValueLength,
);
const _flaxBinding1124 = FlaxGetter(
  "currentValueLength",
  _flaxBinding2,
  _SemanticsProperties_currentValueLength,
);
const _flaxBinding1125 = FlaxGetter(
  "identifier",
  _flaxBinding56,
  _SemanticsProperties_identifier,
);
const _flaxBinding1126 = FlaxGetter(
  "traversalParentIdentifier",
  _flaxBinding4,
  _SemanticsProperties_traversalParentIdentifier,
);
const _flaxBinding1127 = FlaxGetter(
  "traversalChildIdentifier",
  _flaxBinding4,
  _SemanticsProperties_traversalChildIdentifier,
);
const _flaxBinding1128 = FlaxGetter(
  "label",
  _flaxBinding56,
  _SemanticsProperties_label,
);
const _flaxBinding1129 = FlaxGetter(
  "attributedLabel",
  _flaxBinding63,
  _SemanticsProperties_attributedLabel,
);
const _flaxBinding1130 = FlaxGetter(
  "value",
  _flaxBinding56,
  _SemanticsProperties_value,
);
const _flaxBinding1131 = FlaxGetter(
  "attributedValue",
  _flaxBinding63,
  _SemanticsProperties_attributedValue,
);
const _flaxBinding1132 = FlaxGetter(
  "increasedValue",
  _flaxBinding56,
  _SemanticsProperties_increasedValue,
);
const _flaxBinding1133 = FlaxGetter(
  "attributedIncreasedValue",
  _flaxBinding63,
  _SemanticsProperties_attributedIncreasedValue,
);
const _flaxBinding1134 = FlaxGetter(
  "decreasedValue",
  _flaxBinding56,
  _SemanticsProperties_decreasedValue,
);
const _flaxBinding1135 = FlaxGetter(
  "attributedDecreasedValue",
  _flaxBinding63,
  _SemanticsProperties_attributedDecreasedValue,
);
const _flaxBinding1136 = FlaxGetter(
  "hint",
  _flaxBinding56,
  _SemanticsProperties_hint,
);
const _flaxBinding1137 = FlaxGetter(
  "attributedHint",
  _flaxBinding63,
  _SemanticsProperties_attributedHint,
);
const _flaxBinding1138 = FlaxGetter(
  "tooltip",
  _flaxBinding56,
  _SemanticsProperties_tooltip,
);
const _flaxBinding1139 = FlaxGetter(
  "headingLevel",
  _flaxBinding2,
  _SemanticsProperties_headingLevel,
);
const _flaxBinding1140 = FlaxGetter(
  "hintOverrides",
  _flaxBinding376,
  _SemanticsProperties_hintOverrides,
);
const _flaxBinding1141 = FlaxGetter(
  "textDirection",
  _flaxBinding382,
  _SemanticsProperties_textDirection,
);
const _flaxBinding1142 = FlaxGetter(
  "sortKey",
  _flaxBinding348,
  _SemanticsProperties_sortKey,
);
const _flaxBinding1143 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsTag",
  nullable: true,
);
const _flaxBinding1144 = FlaxGetter(
  "tagForChildren",
  _flaxBinding1143,
  _SemanticsProperties_tagForChildren,
);
const _flaxBinding1145 = FlaxGetter(
  "linkUrl",
  _flaxBinding398,
  _SemanticsProperties_linkUrl,
);
const _flaxBinding1146 = FlaxGetter(
  "onTap",
  _flaxBinding309,
  _SemanticsProperties_onTap,
);
const _flaxBinding1147 = FlaxGetter(
  "onLongPress",
  _flaxBinding309,
  _SemanticsProperties_onLongPress,
);
const _flaxBinding1148 = FlaxGetter(
  "onScrollLeft",
  _flaxBinding309,
  _SemanticsProperties_onScrollLeft,
);
const _flaxBinding1149 = FlaxGetter(
  "onScrollRight",
  _flaxBinding309,
  _SemanticsProperties_onScrollRight,
);
const _flaxBinding1150 = FlaxGetter(
  "onScrollUp",
  _flaxBinding309,
  _SemanticsProperties_onScrollUp,
);
const _flaxBinding1151 = FlaxGetter(
  "onScrollDown",
  _flaxBinding309,
  _SemanticsProperties_onScrollDown,
);
const _flaxBinding1152 = FlaxGetter(
  "onIncrease",
  _flaxBinding309,
  _SemanticsProperties_onIncrease,
);
const _flaxBinding1153 = FlaxGetter(
  "onDecrease",
  _flaxBinding309,
  _SemanticsProperties_onDecrease,
);
const _flaxBinding1154 = FlaxGetter(
  "onCopy",
  _flaxBinding309,
  _SemanticsProperties_onCopy,
);
const _flaxBinding1155 = FlaxGetter(
  "onCut",
  _flaxBinding309,
  _SemanticsProperties_onCut,
);
const _flaxBinding1156 = FlaxGetter(
  "onPaste",
  _flaxBinding309,
  _SemanticsProperties_onPaste,
);
const _flaxBinding1157 = FlaxGetter(
  "onMoveCursorForwardByCharacter",
  _flaxBinding328,
  _SemanticsProperties_onMoveCursorForwardByCharacter,
);
const _flaxBinding1158 = FlaxGetter(
  "onMoveCursorBackwardByCharacter",
  _flaxBinding328,
  _SemanticsProperties_onMoveCursorBackwardByCharacter,
);
const _flaxBinding1159 = FlaxGetter(
  "onMoveCursorForwardByWord",
  _flaxBinding328,
  _SemanticsProperties_onMoveCursorForwardByWord,
);
const _flaxBinding1160 = FlaxGetter(
  "onMoveCursorBackwardByWord",
  _flaxBinding328,
  _SemanticsProperties_onMoveCursorBackwardByWord,
);
const _flaxBinding1161 = FlaxGetter(
  "onSetSelection",
  _flaxBinding335,
  _SemanticsProperties_onSetSelection,
);
const _flaxBinding1162 = FlaxGetter(
  "onSetText",
  _flaxBinding338,
  _SemanticsProperties_onSetText,
);
const _flaxBinding1163 = FlaxGetter(
  "onDidGainAccessibilityFocus",
  _flaxBinding309,
  _SemanticsProperties_onDidGainAccessibilityFocus,
);
const _flaxBinding1164 = FlaxGetter(
  "onDidLoseAccessibilityFocus",
  _flaxBinding309,
  _SemanticsProperties_onDidLoseAccessibilityFocus,
);
const _flaxBinding1165 = FlaxGetter(
  "onFocus",
  _flaxBinding309,
  _SemanticsProperties_onFocus,
);
const _flaxBinding1166 = FlaxGetter(
  "onDismiss",
  _flaxBinding309,
  _SemanticsProperties_onDismiss,
);
const _flaxBinding1167 = FlaxGetter(
  "onExpand",
  _flaxBinding309,
  _SemanticsProperties_onExpand,
);
const _flaxBinding1168 = FlaxGetter(
  "onCollapse",
  _flaxBinding309,
  _SemanticsProperties_onCollapse,
);
const _flaxBinding1169 = FlaxTypeRef(
  "map",
  nullable: true,
  item: _flaxBinding280,
  key: _flaxBinding357,
  collection: FlaxCollectionBinding(
    "map:[callback:<>()->void:][object:flax.core/sdk_semantics#type:CustomSemanticsAction]",
    _collection10Create,
    _collection10Matches,
  ),
);
const _flaxBinding1170 = FlaxGetter(
  "customSemanticsActions",
  _flaxBinding1169,
  _SemanticsProperties_customSemanticsActions,
);
const _flaxBinding1171 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsRole",
  nullable: true,
);
const _flaxBinding1172 = FlaxGetter(
  "role",
  _flaxBinding1171,
  _SemanticsProperties_role,
);
const _flaxBinding1173 = FlaxGetter(
  "controlsNodes",
  _flaxBinding418,
  _SemanticsProperties_controlsNodes,
);
const _flaxBinding1174 = FlaxGetter(
  "validationResult",
  _flaxBinding420,
  _SemanticsProperties_validationResult,
);
const _flaxBinding1175 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
  nullable: true,
);
const _flaxBinding1176 = FlaxGetter(
  "hitTestBehavior",
  _flaxBinding1175,
  _SemanticsProperties_hitTestBehavior,
);
const _flaxBinding1177 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsInputType",
  nullable: true,
);
const _flaxBinding1178 = FlaxGetter(
  "inputType",
  _flaxBinding1177,
  _SemanticsProperties_inputType,
);
const _flaxBinding1179 = FlaxGetter(
  "maxValue",
  _flaxBinding56,
  _SemanticsProperties_maxValue,
);
const _flaxBinding1180 = FlaxGetter(
  "minValue",
  _flaxBinding56,
  _SemanticsProperties_minValue,
);
const _flaxBinding1181 = FlaxInstanceMethod(
  _flaxBinding879,
  _flaxBinding0,
  _SemanticsProperties_toStringShallow,
);
const _flaxBinding1182 = FlaxInstanceMethod(
  _flaxBinding881,
  _flaxBinding0,
  _SemanticsProperties_toStringDeep,
);
const _flaxBinding1183 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _SemanticsProperties_toStringShort,
);
const _flaxBinding1184 = FlaxInstanceMethod(
  _flaxBinding196,
  _flaxBinding87,
  _SemanticsProperties_toDiagnosticsNode,
);
const _flaxBinding1185 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding89,
  _SemanticsProperties_debugDescribeChildren,
);
const _flaxBinding1186 = FlaxInstanceMethod(
  _flaxBinding199,
  _flaxBinding163,
  _SemanticsProperties_debugFillProperties,
);
const _flaxBinding1187 = FlaxInstanceMethod(
  _flaxBinding194,
  _flaxBinding0,
  _SemanticsProperties_toString,
);
const _flaxBinding1188 = <FlaxParameter>[
  FlaxParameter("enabled", _flaxBinding385, required: false),
  FlaxParameter("checked", _flaxBinding385, required: false),
  FlaxParameter("mixed", _flaxBinding385, required: false),
  FlaxParameter("expanded", _flaxBinding385, required: false),
  FlaxParameter("selected", _flaxBinding385, required: false),
  FlaxParameter("toggled", _flaxBinding385, required: false),
  FlaxParameter("button", _flaxBinding385, required: false),
  FlaxParameter("link", _flaxBinding385, required: false),
  FlaxParameter("linkUrl", _flaxBinding398, required: false),
  FlaxParameter("header", _flaxBinding385, required: false),
  FlaxParameter("headingLevel", _flaxBinding2, required: false),
  FlaxParameter("textField", _flaxBinding385, required: false),
  FlaxParameter("slider", _flaxBinding385, required: false),
  FlaxParameter("keyboardKey", _flaxBinding385, required: false),
  FlaxParameter("readOnly", _flaxBinding385, required: false),
  FlaxParameter("focusable", _flaxBinding385, required: false),
  FlaxParameter("focused", _flaxBinding385, required: false),
  FlaxParameter(
    "accessibilityFocusBlockType",
    _flaxBinding1112,
    required: false,
  ),
  FlaxParameter("inMutuallyExclusiveGroup", _flaxBinding385, required: false),
  FlaxParameter("hidden", _flaxBinding385, required: false),
  FlaxParameter("obscured", _flaxBinding385, required: false),
  FlaxParameter("multiline", _flaxBinding385, required: false),
  FlaxParameter("scopesRoute", _flaxBinding385, required: false),
  FlaxParameter("namesRoute", _flaxBinding385, required: false),
  FlaxParameter("image", _flaxBinding385, required: false),
  FlaxParameter("liveRegion", _flaxBinding385, required: false),
  FlaxParameter("isRequired", _flaxBinding385, required: false),
  FlaxParameter("maxValueLength", _flaxBinding2, required: false),
  FlaxParameter("currentValueLength", _flaxBinding2, required: false),
  FlaxParameter("identifier", _flaxBinding56, required: false),
  FlaxParameter("traversalParentIdentifier", _flaxBinding4, required: false),
  FlaxParameter("traversalChildIdentifier", _flaxBinding4, required: false),
  FlaxParameter("label", _flaxBinding56, required: false),
  FlaxParameter("attributedLabel", _flaxBinding63, required: false),
  FlaxParameter("value", _flaxBinding56, required: false),
  FlaxParameter("attributedValue", _flaxBinding63, required: false),
  FlaxParameter("increasedValue", _flaxBinding56, required: false),
  FlaxParameter("attributedIncreasedValue", _flaxBinding63, required: false),
  FlaxParameter("decreasedValue", _flaxBinding56, required: false),
  FlaxParameter("attributedDecreasedValue", _flaxBinding63, required: false),
  FlaxParameter("hint", _flaxBinding56, required: false),
  FlaxParameter("tooltip", _flaxBinding56, required: false),
  FlaxParameter("attributedHint", _flaxBinding63, required: false),
  FlaxParameter("hintOverrides", _flaxBinding376, required: false),
  FlaxParameter("textDirection", _flaxBinding382, required: false),
  FlaxParameter("sortKey", _flaxBinding348, required: false),
  FlaxParameter("tagForChildren", _flaxBinding1143, required: false),
  FlaxParameter("role", _flaxBinding1171, required: false),
  FlaxParameter("controlsNodes", _flaxBinding418, required: false),
  FlaxParameter("inputType", _flaxBinding1177, required: false),
  FlaxParameter(
    "validationResult",
    _flaxBinding420,
    required: false,
    defaultValue: api1.SemanticsValidationResult.none,
  ),
  FlaxParameter("hitTestBehavior", _flaxBinding1175, required: false),
  FlaxParameter("onTap", _flaxBinding309, required: false),
  FlaxParameter("onLongPress", _flaxBinding309, required: false),
  FlaxParameter("onScrollLeft", _flaxBinding309, required: false),
  FlaxParameter("onScrollRight", _flaxBinding309, required: false),
  FlaxParameter("onScrollUp", _flaxBinding309, required: false),
  FlaxParameter("onScrollDown", _flaxBinding309, required: false),
  FlaxParameter("onIncrease", _flaxBinding309, required: false),
  FlaxParameter("onDecrease", _flaxBinding309, required: false),
  FlaxParameter("onCopy", _flaxBinding309, required: false),
  FlaxParameter("onCut", _flaxBinding309, required: false),
  FlaxParameter("onPaste", _flaxBinding309, required: false),
  FlaxParameter(
    "onMoveCursorForwardByCharacter",
    _flaxBinding328,
    required: false,
  ),
  FlaxParameter(
    "onMoveCursorBackwardByCharacter",
    _flaxBinding328,
    required: false,
  ),
  FlaxParameter("onMoveCursorForwardByWord", _flaxBinding328, required: false),
  FlaxParameter("onMoveCursorBackwardByWord", _flaxBinding328, required: false),
  FlaxParameter("onSetSelection", _flaxBinding335, required: false),
  FlaxParameter("onSetText", _flaxBinding338, required: false),
  FlaxParameter(
    "onDidGainAccessibilityFocus",
    _flaxBinding309,
    required: false,
  ),
  FlaxParameter(
    "onDidLoseAccessibilityFocus",
    _flaxBinding309,
    required: false,
  ),
  FlaxParameter("onFocus", _flaxBinding309, required: false),
  FlaxParameter("onDismiss", _flaxBinding309, required: false),
  FlaxParameter("onExpand", _flaxBinding309, required: false),
  FlaxParameter("onCollapse", _flaxBinding309, required: false),
  FlaxParameter("customSemanticsActions", _flaxBinding1169, required: false),
  FlaxParameter("minValue", _flaxBinding56, required: false),
  FlaxParameter("maxValue", _flaxBinding56, required: false),
];
const _flaxBinding1189 = FlaxProxyMember(
  "enabled",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1190 = FlaxProxyMember(
  "checked",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1191 = FlaxProxyMember(
  "mixed",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1192 = FlaxProxyMember(
  "expanded",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1193 = FlaxProxyMember(
  "toggled",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1194 = FlaxProxyMember(
  "selected",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1195 = FlaxProxyMember(
  "button",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1196 = FlaxProxyMember(
  "link",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1197 = FlaxProxyMember(
  "header",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1198 = FlaxProxyMember(
  "textField",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1199 = FlaxProxyMember(
  "slider",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1200 = FlaxProxyMember(
  "keyboardKey",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1201 = FlaxProxyMember(
  "readOnly",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1202 = FlaxProxyMember(
  "focusable",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1203 = FlaxProxyMember(
  "focused",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1204 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1112,
  id: "callback:<>()->enum?:flax.core/sdk_semantics#type:AccessibilityFocusBlockType",
);
const _flaxBinding1205 = FlaxProxyMember(
  "accessibilityFocusBlockType",
  1,
  _flaxBinding1204,
  hasSuper: true,
);
const _flaxBinding1206 = FlaxProxyMember(
  "inMutuallyExclusiveGroup",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1207 = FlaxProxyMember(
  "hidden",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1208 = FlaxProxyMember(
  "obscured",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1209 = FlaxProxyMember(
  "multiline",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1210 = FlaxProxyMember(
  "scopesRoute",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1211 = FlaxProxyMember(
  "namesRoute",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1212 = FlaxProxyMember(
  "image",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1213 = FlaxProxyMember(
  "liveRegion",
  1,
  _flaxBinding631,
  hasSuper: true,
);
const _flaxBinding1214 = FlaxProxyMember(
  "identifier",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding1215 = FlaxProxyMember(
  "attributedLabel",
  1,
  _flaxBinding132,
  hasSuper: true,
);
const _flaxBinding1216 = FlaxProxyMember(
  "value",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding1217 = FlaxProxyMember(
  "attributedValue",
  1,
  _flaxBinding132,
  hasSuper: true,
);
const _flaxBinding1218 = FlaxProxyMember(
  "increasedValue",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding1219 = FlaxProxyMember(
  "attributedIncreasedValue",
  1,
  _flaxBinding132,
  hasSuper: true,
);
const _flaxBinding1220 = FlaxProxyMember(
  "decreasedValue",
  1,
  _flaxBinding125,
  hasSuper: true,
);
const _flaxBinding1221 = FlaxProxyMember(
  "attributedDecreasedValue",
  1,
  _flaxBinding132,
  hasSuper: true,
);
const _flaxBinding1222 = FlaxProxyMember(
  "attributedHint",
  1,
  _flaxBinding132,
  hasSuper: true,
);
const _flaxBinding1223 = FlaxProxyMember(
  "headingLevel",
  1,
  _flaxBinding595,
  hasSuper: true,
);
const _flaxBinding1224 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1143,
  id: "callback:<>()->object?:flax.core/sdk_semantics#type:SemanticsTag",
);
const _flaxBinding1225 = FlaxProxyMember(
  "tagForChildren",
  1,
  _flaxBinding1224,
  hasSuper: true,
);
const _flaxBinding1226 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1169,
  id: "callback:<>()->map?:[callback:<>()->void:][object:flax.core/sdk_semantics#type:CustomSemanticsAction]",
);
const _flaxBinding1227 = FlaxProxyMember(
  "customSemanticsActions",
  1,
  _flaxBinding1226,
  hasSuper: true,
);
const _flaxBinding1228 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1171,
  id: "callback:<>()->enum?:flax.core/sdk_dart_ui#type:SemanticsRole",
);
const _flaxBinding1229 = FlaxProxyMember(
  "role",
  1,
  _flaxBinding1228,
  hasSuper: true,
);
const _flaxBinding1230 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1175,
  id: "callback:<>()->enum?:flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
);
const _flaxBinding1231 = FlaxProxyMember(
  "hitTestBehavior",
  1,
  _flaxBinding1230,
  hasSuper: true,
);
const _flaxBinding1232 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1177,
  id: "callback:<>()->enum?:flax.core/sdk_dart_ui#type:SemanticsInputType",
);
const _flaxBinding1233 = FlaxProxyMember(
  "inputType",
  1,
  _flaxBinding1232,
  hasSuper: true,
);
const _flaxBinding1234 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsProperties",
  [
    _flaxBinding1097,
    _flaxBinding1098,
    _flaxBinding1099,
    _flaxBinding1100,
    _flaxBinding1101,
    _flaxBinding1102,
    _flaxBinding1103,
    _flaxBinding1104,
    _flaxBinding1105,
    _flaxBinding1106,
    _flaxBinding1107,
    _flaxBinding1108,
    _flaxBinding1109,
    _flaxBinding1110,
    _flaxBinding1111,
    _flaxBinding1113,
    _flaxBinding1114,
    _flaxBinding1115,
    _flaxBinding1116,
    _flaxBinding1117,
    _flaxBinding1118,
    _flaxBinding1119,
    _flaxBinding1120,
    _flaxBinding1121,
    _flaxBinding1122,
    _flaxBinding1123,
    _flaxBinding1124,
    _flaxBinding1125,
    _flaxBinding1126,
    _flaxBinding1127,
    _flaxBinding1128,
    _flaxBinding1129,
    _flaxBinding1130,
    _flaxBinding1131,
    _flaxBinding1132,
    _flaxBinding1133,
    _flaxBinding1134,
    _flaxBinding1135,
    _flaxBinding1136,
    _flaxBinding1137,
    _flaxBinding1138,
    _flaxBinding1139,
    _flaxBinding1140,
    _flaxBinding1141,
    _flaxBinding1142,
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
    _flaxBinding1170,
    _flaxBinding1172,
    _flaxBinding1173,
    _flaxBinding1174,
    _flaxBinding1176,
    _flaxBinding1178,
    _flaxBinding1179,
    _flaxBinding1180,
  ],
  {
    "toStringShallow": _flaxBinding1181,
    "toStringDeep": _flaxBinding1182,
    "toStringShort": _flaxBinding1183,
    "toDiagnosticsNode": _flaxBinding1184,
    "debugDescribeChildren": _flaxBinding1185,
    "debugFillProperties": _flaxBinding1186,
    "toString": _flaxBinding1187,
    "@super:toStringShallow": FlaxInstanceMethod(
      _flaxBinding879,
      _flaxBinding0,
      _SemanticsProperties_super_toStringShallow,
    ),
    "@super:toStringDeep": FlaxInstanceMethod(
      _flaxBinding881,
      _flaxBinding0,
      _SemanticsProperties_super_toStringDeep,
    ),
    "@super:toStringShort": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toStringShort,
    ),
    "@super:toDiagnosticsNode": FlaxInstanceMethod(
      _flaxBinding196,
      _flaxBinding87,
      _SemanticsProperties_super_toDiagnosticsNode,
    ),
    "@super:debugDescribeChildren": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding89,
      _SemanticsProperties_super_debugDescribeChildren,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod(
      _flaxBinding199,
      _flaxBinding163,
      _SemanticsProperties_super_debugFillProperties,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding194,
      _flaxBinding0,
      _FlaxProxyDispatch9_super_call_toString,
    ),
    "@super:get:enabled": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_enabled,
    ),
    "@super:get:checked": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_checked,
    ),
    "@super:get:mixed": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_mixed,
    ),
    "@super:get:expanded": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_expanded,
    ),
    "@super:get:toggled": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_toggled,
    ),
    "@super:get:selected": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_selected,
    ),
    "@super:get:button": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_button,
    ),
    "@super:get:link": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_link,
    ),
    "@super:get:header": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_header,
    ),
    "@super:get:textField": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_textField,
    ),
    "@super:get:slider": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_slider,
    ),
    "@super:get:keyboardKey": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_keyboardKey,
    ),
    "@super:get:readOnly": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_readOnly,
    ),
    "@super:get:focusable": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_focusable,
    ),
    "@super:get:focused": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_focused,
    ),
    "@super:get:accessibilityFocusBlockType": FlaxInstanceMethod(
      [],
      _flaxBinding1112,
      _SemanticsProperties_super_get_accessibilityFocusBlockType,
    ),
    "@super:get:inMutuallyExclusiveGroup": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_inMutuallyExclusiveGroup,
    ),
    "@super:get:hidden": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_hidden,
    ),
    "@super:get:obscured": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_obscured,
    ),
    "@super:get:multiline": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_multiline,
    ),
    "@super:get:scopesRoute": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_scopesRoute,
    ),
    "@super:get:namesRoute": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_namesRoute,
    ),
    "@super:get:image": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_image,
    ),
    "@super:get:liveRegion": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _SemanticsProperties_super_get_liveRegion,
    ),
    "@super:get:isRequired": FlaxInstanceMethod(
      [],
      _flaxBinding385,
      _FlaxProxyDispatch11_super_get_isRequired,
    ),
    "@super:get:maxValueLength": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch15_super_get_maxValueLength,
    ),
    "@super:get:currentValueLength": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _FlaxProxyDispatch15_super_get_currentValueLength,
    ),
    "@super:get:identifier": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _SemanticsProperties_super_get_identifier,
    ),
    "@super:get:traversalParentIdentifier": FlaxInstanceMethod(
      [],
      _flaxBinding4,
      _FlaxProxyDispatch15_super_get_traversalParentIdentifier,
    ),
    "@super:get:traversalChildIdentifier": FlaxInstanceMethod(
      [],
      _flaxBinding4,
      _FlaxProxyDispatch15_super_get_traversalChildIdentifier,
    ),
    "@super:get:label": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _SemanticsProperties_super_get_label,
    ),
    "@super:get:attributedLabel": FlaxInstanceMethod(
      [],
      _flaxBinding63,
      _SemanticsProperties_super_get_attributedLabel,
    ),
    "@super:get:value": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _SemanticsProperties_super_get_value,
    ),
    "@super:get:attributedValue": FlaxInstanceMethod(
      [],
      _flaxBinding63,
      _SemanticsProperties_super_get_attributedValue,
    ),
    "@super:get:increasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _SemanticsProperties_super_get_increasedValue,
    ),
    "@super:get:attributedIncreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding63,
      _SemanticsProperties_super_get_attributedIncreasedValue,
    ),
    "@super:get:decreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _SemanticsProperties_super_get_decreasedValue,
    ),
    "@super:get:attributedDecreasedValue": FlaxInstanceMethod(
      [],
      _flaxBinding63,
      _SemanticsProperties_super_get_attributedDecreasedValue,
    ),
    "@super:get:hint": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _SemanticsProperties_super_get_hint,
    ),
    "@super:get:attributedHint": FlaxInstanceMethod(
      [],
      _flaxBinding63,
      _SemanticsProperties_super_get_attributedHint,
    ),
    "@super:get:tooltip": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _SemanticsProperties_super_get_tooltip,
    ),
    "@super:get:headingLevel": FlaxInstanceMethod(
      [],
      _flaxBinding2,
      _SemanticsProperties_super_get_headingLevel,
    ),
    "@super:get:hintOverrides": FlaxInstanceMethod(
      [],
      _flaxBinding376,
      _SemanticsProperties_super_get_hintOverrides,
    ),
    "@super:get:textDirection": FlaxInstanceMethod(
      [],
      _flaxBinding382,
      _FlaxProxyDispatch15_super_get_textDirection,
    ),
    "@super:get:sortKey": FlaxInstanceMethod(
      [],
      _flaxBinding348,
      _SemanticsProperties_super_get_sortKey,
    ),
    "@super:get:tagForChildren": FlaxInstanceMethod(
      [],
      _flaxBinding1143,
      _SemanticsProperties_super_get_tagForChildren,
    ),
    "@super:get:linkUrl": FlaxInstanceMethod(
      [],
      _flaxBinding398,
      _FlaxProxyDispatch15_super_get_linkUrl,
    ),
    "@super:get:onTap": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onTap,
    ),
    "@super:get:onLongPress": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onLongPress,
    ),
    "@super:get:onScrollLeft": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onScrollLeft,
    ),
    "@super:get:onScrollRight": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onScrollRight,
    ),
    "@super:get:onScrollUp": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onScrollUp,
    ),
    "@super:get:onScrollDown": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onScrollDown,
    ),
    "@super:get:onIncrease": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onIncrease,
    ),
    "@super:get:onDecrease": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onDecrease,
    ),
    "@super:get:onCopy": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onCopy,
    ),
    "@super:get:onCut": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onCut,
    ),
    "@super:get:onPaste": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onPaste,
    ),
    "@super:get:onMoveCursorForwardByCharacter": FlaxInstanceMethod(
      [],
      _flaxBinding328,
      _FlaxProxyDispatch11_super_get_onMoveCursorForwardByCharacter,
    ),
    "@super:get:onMoveCursorBackwardByCharacter": FlaxInstanceMethod(
      [],
      _flaxBinding328,
      _FlaxProxyDispatch11_super_get_onMoveCursorBackwardByCharacter,
    ),
    "@super:get:onMoveCursorForwardByWord": FlaxInstanceMethod(
      [],
      _flaxBinding328,
      _FlaxProxyDispatch11_super_get_onMoveCursorForwardByWord,
    ),
    "@super:get:onMoveCursorBackwardByWord": FlaxInstanceMethod(
      [],
      _flaxBinding328,
      _FlaxProxyDispatch11_super_get_onMoveCursorBackwardByWord,
    ),
    "@super:get:onSetSelection": FlaxInstanceMethod(
      [],
      _flaxBinding335,
      _FlaxProxyDispatch11_super_get_onSetSelection,
    ),
    "@super:get:onSetText": FlaxInstanceMethod(
      [],
      _flaxBinding338,
      _FlaxProxyDispatch11_super_get_onSetText,
    ),
    "@super:get:onDidGainAccessibilityFocus": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onDidGainAccessibilityFocus,
    ),
    "@super:get:onDidLoseAccessibilityFocus": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onDidLoseAccessibilityFocus,
    ),
    "@super:get:onFocus": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onFocus,
    ),
    "@super:get:onDismiss": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onDismiss,
    ),
    "@super:get:onExpand": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onExpand,
    ),
    "@super:get:onCollapse": FlaxInstanceMethod(
      [],
      _flaxBinding309,
      _FlaxProxyDispatch11_super_get_onCollapse,
    ),
    "@super:get:customSemanticsActions": FlaxInstanceMethod(
      [],
      _flaxBinding1169,
      _SemanticsProperties_super_get_customSemanticsActions,
    ),
    "@super:get:role": FlaxInstanceMethod(
      [],
      _flaxBinding1171,
      _SemanticsProperties_super_get_role,
    ),
    "@super:get:controlsNodes": FlaxInstanceMethod(
      [],
      _flaxBinding418,
      _FlaxProxyDispatch15_super_get_controlsNodes,
    ),
    "@super:get:validationResult": FlaxInstanceMethod(
      [],
      _flaxBinding420,
      _FlaxProxyDispatch15_super_get_validationResult,
    ),
    "@super:get:hitTestBehavior": FlaxInstanceMethod(
      [],
      _flaxBinding1175,
      _SemanticsProperties_super_get_hitTestBehavior,
    ),
    "@super:get:inputType": FlaxInstanceMethod(
      [],
      _flaxBinding1177,
      _SemanticsProperties_super_get_inputType,
    ),
    "@super:get:maxValue": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _FlaxProxyDispatch15_super_get_maxValue,
    ),
    "@super:get:minValue": FlaxInstanceMethod(
      [],
      _flaxBinding56,
      _FlaxProxyDispatch15_super_get_minValue,
    ),
  },
  constructors: {"@implementation": _flaxBinding1188},
  create: _createSemanticsProperties,
  matches: _isSemanticsProperties,
  setters: [],
  supertypes: [
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding890,
    _flaxBinding892,
    _flaxBinding205,
    _flaxBinding209,
    _flaxBinding893,
    _flaxBinding211,
    _flaxBinding207,
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
    _flaxBinding1205,
    _flaxBinding1206,
    _flaxBinding1207,
    _flaxBinding1208,
    _flaxBinding1209,
    _flaxBinding1210,
    _flaxBinding1211,
    _flaxBinding1212,
    _flaxBinding1213,
    _flaxBinding655,
    _flaxBinding600,
    _flaxBinding601,
    _flaxBinding1214,
    _flaxBinding606,
    _flaxBinding607,
    _flaxBinding182,
    _flaxBinding1215,
    _flaxBinding1216,
    _flaxBinding1217,
    _flaxBinding1218,
    _flaxBinding1219,
    _flaxBinding1220,
    _flaxBinding1221,
    _flaxBinding183,
    _flaxBinding1222,
    _flaxBinding128,
    _flaxBinding1223,
    _flaxBinding623,
    _flaxBinding629,
    _flaxBinding594,
    _flaxBinding1225,
    _flaxBinding645,
    _flaxBinding562,
    _flaxBinding563,
    _flaxBinding564,
    _flaxBinding566,
    _flaxBinding567,
    _flaxBinding568,
    _flaxBinding571,
    _flaxBinding572,
    _flaxBinding573,
    _flaxBinding574,
    _flaxBinding575,
    _flaxBinding578,
    _flaxBinding579,
    _flaxBinding580,
    _flaxBinding581,
    _flaxBinding583,
    _flaxBinding585,
    _flaxBinding586,
    _flaxBinding587,
    _flaxBinding588,
    _flaxBinding565,
    _flaxBinding589,
    _flaxBinding590,
    _flaxBinding1227,
    _flaxBinding1229,
    _flaxBinding664,
    _flaxBinding666,
    _flaxBinding1231,
    _flaxBinding1233,
    _flaxBinding671,
    _flaxBinding672,
  ]),
);
const _flaxBinding1235 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsService",
  [],
  {},
  constructors: {},
  create: _createSemanticsService,
  matches: _isSemanticsService,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1236 = FlaxGetter("name", _flaxBinding0, _SemanticsTag_name);
const _flaxBinding1237 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding0,
  _SemanticsTag_toString,
);
const _flaxBinding1238 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding0, required: true),
];
const _flaxBinding1239 = FlaxProxyMember(
  "name",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding1240 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:SemanticsTag",
  [_flaxBinding1236],
  {
    "toString": _flaxBinding1237,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:name": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsTag_super_get_name,
    ),
  },
  constructors: {"@implementation": _flaxBinding1238},
  create: _createSemanticsTag,
  matches: _isSemanticsTag,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding16, _flaxBinding1239]),
);
const _flaxBinding1241 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:TapSemanticEvent",
  [],
  {
    "@super:toMap": FlaxInstanceMethod(
      _flaxBinding3,
      _flaxBinding5,
      _FlaxProxyDispatch0_super_call_toMap,
    ),
    "@super:getDataMap": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding5,
      _FlaxProxyDispatch1_super_call_getDataMap,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:type": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch0_super_get_type,
    ),
  },
  constructors: {"@implementation": _flaxBinding7},
  create: _createTapSemanticEvent,
  matches: _isTapSemanticEvent,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsEvent",
    "dart:core::Object",
  ],
  parent: _flaxBinding18,
  proxy: FlaxProxyBinding([
    _flaxBinding12,
    _flaxBinding27,
    _flaxBinding16,
    _flaxBinding17,
  ]),
);
const _flaxBinding1242 = FlaxGetter(
  "message",
  _flaxBinding0,
  _TooltipSemanticsEvent_message,
);
const _flaxBinding1243 = <FlaxParameter>[
  FlaxParameter("message", _flaxBinding0, required: true),
];
const _flaxBinding1244 = FlaxObjectBinding(
  "flax.core/sdk_semantics#type:TooltipSemanticsEvent",
  [_flaxBinding1242],
  {
    "@super:toMap": FlaxInstanceMethod(
      _flaxBinding3,
      _flaxBinding5,
      _FlaxProxyDispatch0_super_call_toMap,
    ),
    "@super:getDataMap": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding5,
      _FlaxProxyDispatch1_super_call_getDataMap,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding7,
      _flaxBinding0,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:message": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _TooltipSemanticsEvent_super_get_message,
    ),
    "@super:get:type": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch0_super_get_type,
    ),
  },
  constructors: {"@implementation": _flaxBinding1243},
  create: _createTooltipSemanticsEvent,
  matches: _isTooltipSemanticsEvent,
  setters: [],
  supertypes: [
    "flax.core/sdk_semantics#type:SemanticsEvent",
    "dart:core::Object",
  ],
  parent: _flaxBinding18,
  proxy: FlaxProxyBinding([
    _flaxBinding12,
    _flaxBinding27,
    _flaxBinding16,
    _flaxBinding30,
    _flaxBinding17,
  ]),
);
const _flaxBinding1245 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:CustomSemanticsAction",
  nullable: true,
);
const _flaxBinding1246 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_semantics#type:SemanticsBinding",
);
const _flaxBinding1247 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FlutterView",
);
