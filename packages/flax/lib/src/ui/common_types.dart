part of '../../bindings.dart';

/// Fixed conversion descriptions shared by generated modules. No business values.
const flaxStringType = FlaxTypeRef('String');
const flaxNullableStringType = FlaxTypeRef('String', nullable: true);
const flaxIntType = FlaxTypeRef('int');
const flaxNullableIntType = FlaxTypeRef('int', nullable: true);
const flaxDoubleType = FlaxTypeRef('double');
const flaxNullableDoubleType = FlaxTypeRef('double', nullable: true);
const flaxBoolType = FlaxTypeRef('bool');
const flaxNullableBoolType = FlaxTypeRef('bool', nullable: true);
const flaxNumType = FlaxTypeRef('num');
const flaxNullableNumType = FlaxTypeRef('num', nullable: true);
const flaxAnyType = FlaxTypeRef('any');
const flaxNullableAnyType = FlaxTypeRef('any', nullable: true);
const flaxDataType = FlaxTypeRef('data');
const flaxNullableDataType = FlaxTypeRef('data', nullable: true);
const flaxVoidType = FlaxTypeRef('void');

// Call descriptions are proxy-only signatures; Callback descriptions also adapt functions.
const flaxStringCall = FlaxCallbackBinding.signature(
  [],
  flaxStringType,
  id: 'callback:<>()->String:',
);

const flaxNullableStringCall = FlaxCallbackBinding.signature(
  [],
  flaxNullableStringType,
  id: 'callback:<>()->String?:',
);

const flaxIntCall = FlaxCallbackBinding.signature(
  [],
  flaxIntType,
  id: 'callback:<>()->int:',
);

const flaxNullableIntCall = FlaxCallbackBinding.signature(
  [],
  flaxNullableIntType,
  id: 'callback:<>()->int?:',
);

const flaxDoubleCall = FlaxCallbackBinding.signature(
  [],
  flaxDoubleType,
  id: 'callback:<>()->double:',
);

const flaxNullableDoubleCall = FlaxCallbackBinding.signature(
  [],
  flaxNullableDoubleType,
  id: 'callback:<>()->double?:',
);

const flaxBoolCall = FlaxCallbackBinding.signature(
  [],
  flaxBoolType,
  id: 'callback:<>()->bool:',
);

const flaxNullableBoolCall = FlaxCallbackBinding.signature(
  [],
  flaxNullableBoolType,
  id: 'callback:<>()->bool?:',
);

const flaxNumCall = FlaxCallbackBinding.signature(
  [],
  flaxNumType,
  id: 'callback:<>()->num:',
);

const flaxNullableNumCall = FlaxCallbackBinding.signature(
  [],
  flaxNullableNumType,
  id: 'callback:<>()->num?:',
);

const flaxAnyCall = FlaxCallbackBinding.signature(
  [],
  flaxAnyType,
  id: 'callback:<>()->any:',
);

const flaxNullableAnyCall = FlaxCallbackBinding.signature(
  [],
  flaxNullableAnyType,
  id: 'callback:<>()->any?:',
);

const flaxVoidCall = FlaxCallbackBinding.signature(
  [],
  flaxVoidType,
  id: 'callback:<>()->void:',
);

const flaxStringCallback = FlaxCallbackBinding(
  [],
  flaxStringType,
  FlaxCallbackAdapters.wrap0<String>,
  id: 'callback:<>()->String:',
  invoke: FlaxCallbackAdapters.invoke0<String>,
  matches: FlaxCallbackAdapters.matches0<String>,
);
const flaxStringCallbackType = FlaxTypeRef(
  'callback',
  callback: flaxStringCallback,
);
const flaxStringNullableCallbackType = FlaxTypeRef(
  'callback',
  nullable: true,
  callback: flaxStringCallback,
);

const flaxNullableAnyCallback = FlaxCallbackBinding(
  [],
  flaxNullableAnyType,
  FlaxCallbackAdapters.wrap0<Object?>,
  id: 'callback:<>()->any?:',
  invoke: FlaxCallbackAdapters.invoke0<Object?>,
  matches: FlaxCallbackAdapters.matches0<Object?>,
);
const flaxNullableAnyCallbackType = FlaxTypeRef(
  'callback',
  callback: flaxNullableAnyCallback,
);
const flaxNullableAnyNullableCallbackType = FlaxTypeRef(
  'callback',
  nullable: true,
  callback: flaxNullableAnyCallback,
);

const flaxVoidCallback = FlaxCallbackBinding(
  [],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid0,
  id: 'callback:<>()->void:',
  invoke: FlaxCallbackAdapters.invokeVoid0,
  matches: FlaxCallbackAdapters.matchesVoid0,
);
const flaxVoidCallbackType = FlaxTypeRef(
  'callback',
  callback: flaxVoidCallback,
);
const flaxVoidNullableCallbackType = FlaxTypeRef(
  'callback',
  nullable: true,
  callback: flaxVoidCallback,
);

const flaxStringChanged = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", flaxStringType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<String>,
  id: 'callback:<>(p:r:value:String:)->void:',
  invoke: FlaxCallbackAdapters.invokeVoid1<String>,
  matches: FlaxCallbackAdapters.matchesVoid1<String>,
);
const flaxStringChangedType = FlaxTypeRef(
  'callback',
  callback: flaxStringChanged,
);
const flaxStringChangedNullableType = FlaxTypeRef(
  'callback',
  nullable: true,
  callback: flaxStringChanged,
);

const flaxIntChanged = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", flaxIntType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<int>,
  id: 'callback:<>(p:r:value:int:)->void:',
  invoke: FlaxCallbackAdapters.invokeVoid1<int>,
  matches: FlaxCallbackAdapters.matchesVoid1<int>,
);
const flaxIntChangedType = FlaxTypeRef('callback', callback: flaxIntChanged);
const flaxIntChangedNullableType = FlaxTypeRef(
  'callback',
  nullable: true,
  callback: flaxIntChanged,
);

const flaxDoubleChanged = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", flaxDoubleType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<double>,
  id: 'callback:<>(p:r:value:double:)->void:',
  invoke: FlaxCallbackAdapters.invokeVoid1<double>,
  matches: FlaxCallbackAdapters.matchesVoid1<double>,
);
const flaxDoubleChangedType = FlaxTypeRef(
  'callback',
  callback: flaxDoubleChanged,
);
const flaxDoubleChangedNullableType = FlaxTypeRef(
  'callback',
  nullable: true,
  callback: flaxDoubleChanged,
);

const flaxBoolChanged = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", flaxBoolType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<bool>,
  id: 'callback:<>(p:r:value:bool:)->void:',
  invoke: FlaxCallbackAdapters.invokeVoid1<bool>,
  matches: FlaxCallbackAdapters.matchesVoid1<bool>,
);
const flaxBoolChangedType = FlaxTypeRef('callback', callback: flaxBoolChanged);
const flaxBoolChangedNullableType = FlaxTypeRef(
  'callback',
  nullable: true,
  callback: flaxBoolChanged,
);

const flaxNullableBoolChanged = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", flaxNullableBoolType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<bool?>,
  id: 'callback:<>(p:r:value:bool?:)->void:',
  invoke: FlaxCallbackAdapters.invokeVoid1<bool?>,
  matches: FlaxCallbackAdapters.matchesVoid1<bool?>,
);
const flaxNullableBoolChangedType = FlaxTypeRef(
  'callback',
  callback: flaxNullableBoolChanged,
);
const flaxNullableBoolChangedNullableType = FlaxTypeRef(
  'callback',
  nullable: true,
  callback: flaxNullableBoolChanged,
);

const flaxNullableAnyChanged = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", flaxNullableAnyType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<Object?>,
  id: 'callback:<>(p:r:value:any?:)->void:',
  invoke: FlaxCallbackAdapters.invokeVoid1<Object?>,
  matches: FlaxCallbackAdapters.matchesVoid1<Object?>,
);
const flaxNullableAnyChangedType = FlaxTypeRef(
  'callback',
  callback: flaxNullableAnyChanged,
);
const flaxNullableAnyChangedNullableType = FlaxTypeRef(
  'callback',
  nullable: true,
  callback: flaxNullableAnyChanged,
);

// Native conversion leaves and exact Core-owned provider views.
const flaxRectType = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Rect",
);
const flaxClipType = FlaxTypeRef("enum", id: "flax.core/flutter#type:Clip");
const flaxSizeType = FlaxTypeRef("object", id: "flax.core/flutter#type:Size");
const flaxColorType = FlaxTypeRef("object", id: "flax.core/flutter#type:Color");
const flaxOffsetType = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Offset",
);
const flaxCurveType = FlaxTypeRef("object", id: "flax.core/flutter#type:Curve");
const flaxTypeType = FlaxTypeRef("object", id: "flax.core/flutter#type:Type");
const flaxDurationType = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
);
const flaxMatrix4Type = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_rendering#type:Matrix4",
);
const flaxAxisType = FlaxTypeRef("enum", id: "flax.core/flutter#type:Axis");
const flaxPathType = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Path",
);
const flaxDateTimeType = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:DateTime",
);
const flaxNullableSizeType = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Size",
  nullable: true,
);
const flaxRadiusType = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Radius",
);
const flaxEdgeInsetsType = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EdgeInsets",
);
const flaxTickerFutureType = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_scheduler#type:TickerFuture",
);
const flaxWidgetType = FlaxTypeRef("widget");
const flaxBorderSideType = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:BorderSide",
);
const flaxFunctionType = FlaxTypeRef("function");
const flaxUint8ListType = FlaxTypeRef("Uint8List");
