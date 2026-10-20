part of 'emitter.dart';

// Match complete emitted descriptions; provider and generic-local metadata stay local.
const _sharedDartDescriptions = <String, String>{
  'FlaxTypeRef("String")': 'flaxStringType',
  'FlaxTypeRef("String", nullable: true)': 'flaxNullableStringType',
  'FlaxTypeRef("int")': 'flaxIntType',
  'FlaxTypeRef("int", nullable: true)': 'flaxNullableIntType',
  'FlaxTypeRef("double")': 'flaxDoubleType',
  'FlaxTypeRef("double", nullable: true)': 'flaxNullableDoubleType',
  'FlaxTypeRef("bool")': 'flaxBoolType',
  'FlaxTypeRef("bool", nullable: true)': 'flaxNullableBoolType',
  'FlaxTypeRef("num")': 'flaxNumType',
  'FlaxTypeRef("num", nullable: true)': 'flaxNullableNumType',
  'FlaxTypeRef("any")': 'flaxAnyType',
  'FlaxTypeRef("any", nullable: true)': 'flaxNullableAnyType',
  'FlaxTypeRef("data")': 'flaxDataType',
  'FlaxTypeRef("data", nullable: true)': 'flaxNullableDataType',
  'FlaxTypeRef("void")': 'flaxVoidType',
  'FlaxCallbackBinding.signature([], flaxStringType, id: "callback:<>()->String:")':
      'flaxStringCall',
  'FlaxCallbackBinding.signature([], flaxNullableStringType, id: "callback:<>()->String?:")':
      'flaxNullableStringCall',
  'FlaxCallbackBinding.signature([], flaxIntType, id: "callback:<>()->int:")':
      'flaxIntCall',
  'FlaxCallbackBinding.signature([], flaxNullableIntType, id: "callback:<>()->int?:")':
      'flaxNullableIntCall',
  'FlaxCallbackBinding.signature([], flaxDoubleType, id: "callback:<>()->double:")':
      'flaxDoubleCall',
  'FlaxCallbackBinding.signature([], flaxNullableDoubleType, id: "callback:<>()->double?:")':
      'flaxNullableDoubleCall',
  'FlaxCallbackBinding.signature([], flaxBoolType, id: "callback:<>()->bool:")':
      'flaxBoolCall',
  'FlaxCallbackBinding.signature([], flaxNullableBoolType, id: "callback:<>()->bool?:")':
      'flaxNullableBoolCall',
  'FlaxCallbackBinding.signature([], flaxNumType, id: "callback:<>()->num:")':
      'flaxNumCall',
  'FlaxCallbackBinding.signature([], flaxNullableNumType, id: "callback:<>()->num?:")':
      'flaxNullableNumCall',
  'FlaxCallbackBinding.signature([], flaxAnyType, id: "callback:<>()->any:")':
      'flaxAnyCall',
  'FlaxCallbackBinding.signature([], flaxNullableAnyType, id: "callback:<>()->any?:")':
      'flaxNullableAnyCall',
  'FlaxCallbackBinding.signature([], flaxVoidType, id: "callback:<>()->void:")':
      'flaxVoidCall',
  'FlaxCallbackBinding([], flaxStringType, FlaxCallbackAdapters.wrap0<String>, id: "callback:<>()->String:", invoke: FlaxCallbackAdapters.invoke0<String>, matches: FlaxCallbackAdapters.matches0<String>)':
      'flaxStringCallback',
  'FlaxTypeRef("callback", callback: flaxStringCallback)':
      'flaxStringCallbackType',
  'FlaxTypeRef("callback", nullable: true, callback: flaxStringCallback)':
      'flaxStringNullableCallbackType',
  'FlaxCallbackBinding([], flaxNullableAnyType, FlaxCallbackAdapters.wrap0<Object?>, id: "callback:<>()->any?:", invoke: FlaxCallbackAdapters.invoke0<Object?>, matches: FlaxCallbackAdapters.matches0<Object?>)':
      'flaxNullableAnyCallback',
  'FlaxTypeRef("callback", callback: flaxNullableAnyCallback)':
      'flaxNullableAnyCallbackType',
  'FlaxTypeRef("callback", nullable: true, callback: flaxNullableAnyCallback)':
      'flaxNullableAnyNullableCallbackType',
  'FlaxCallbackBinding([], flaxVoidType, FlaxCallbackAdapters.wrapVoid0, id: "callback:<>()->void:", invoke: FlaxCallbackAdapters.invokeVoid0, matches: FlaxCallbackAdapters.matchesVoid0)':
      'flaxVoidCallback',
  'FlaxTypeRef("callback", callback: flaxVoidCallback)': 'flaxVoidCallbackType',
  'FlaxTypeRef("callback", nullable: true, callback: flaxVoidCallback)':
      'flaxVoidNullableCallbackType',
  'FlaxCallbackBinding([FlaxCallbackParameter.plain("value", flaxStringType)], flaxVoidType, FlaxCallbackAdapters.wrapVoid1<String>, id: "callback:<>(p:r:value:String:)->void:", invoke: FlaxCallbackAdapters.invokeVoid1<String>, matches: FlaxCallbackAdapters.matchesVoid1<String>)':
      'flaxStringChanged',
  'FlaxTypeRef("callback", callback: flaxStringChanged)':
      'flaxStringChangedType',
  'FlaxTypeRef("callback", nullable: true, callback: flaxStringChanged)':
      'flaxStringChangedNullableType',
  'FlaxCallbackBinding([FlaxCallbackParameter.plain("value", flaxIntType)], flaxVoidType, FlaxCallbackAdapters.wrapVoid1<int>, id: "callback:<>(p:r:value:int:)->void:", invoke: FlaxCallbackAdapters.invokeVoid1<int>, matches: FlaxCallbackAdapters.matchesVoid1<int>)':
      'flaxIntChanged',
  'FlaxTypeRef("callback", callback: flaxIntChanged)': 'flaxIntChangedType',
  'FlaxTypeRef("callback", nullable: true, callback: flaxIntChanged)':
      'flaxIntChangedNullableType',
  'FlaxCallbackBinding([FlaxCallbackParameter.plain("value", flaxDoubleType)], flaxVoidType, FlaxCallbackAdapters.wrapVoid1<double>, id: "callback:<>(p:r:value:double:)->void:", invoke: FlaxCallbackAdapters.invokeVoid1<double>, matches: FlaxCallbackAdapters.matchesVoid1<double>)':
      'flaxDoubleChanged',
  'FlaxTypeRef("callback", callback: flaxDoubleChanged)':
      'flaxDoubleChangedType',
  'FlaxTypeRef("callback", nullable: true, callback: flaxDoubleChanged)':
      'flaxDoubleChangedNullableType',
  'FlaxCallbackBinding([FlaxCallbackParameter.plain("value", flaxBoolType)], flaxVoidType, FlaxCallbackAdapters.wrapVoid1<bool>, id: "callback:<>(p:r:value:bool:)->void:", invoke: FlaxCallbackAdapters.invokeVoid1<bool>, matches: FlaxCallbackAdapters.matchesVoid1<bool>)':
      'flaxBoolChanged',
  'FlaxTypeRef("callback", callback: flaxBoolChanged)': 'flaxBoolChangedType',
  'FlaxTypeRef("callback", nullable: true, callback: flaxBoolChanged)':
      'flaxBoolChangedNullableType',
  'FlaxCallbackBinding([FlaxCallbackParameter.plain("value", flaxNullableBoolType)], flaxVoidType, FlaxCallbackAdapters.wrapVoid1<bool?>, id: "callback:<>(p:r:value:bool?:)->void:", invoke: FlaxCallbackAdapters.invokeVoid1<bool?>, matches: FlaxCallbackAdapters.matchesVoid1<bool?>)':
      'flaxNullableBoolChanged',
  'FlaxTypeRef("callback", callback: flaxNullableBoolChanged)':
      'flaxNullableBoolChangedType',
  'FlaxTypeRef("callback", nullable: true, callback: flaxNullableBoolChanged)':
      'flaxNullableBoolChangedNullableType',
  'FlaxCallbackBinding([FlaxCallbackParameter.plain("value", flaxNullableAnyType)], flaxVoidType, FlaxCallbackAdapters.wrapVoid1<Object?>, id: "callback:<>(p:r:value:any?:)->void:", invoke: FlaxCallbackAdapters.invokeVoid1<Object?>, matches: FlaxCallbackAdapters.matchesVoid1<Object?>)':
      'flaxNullableAnyChanged',
  'FlaxTypeRef("callback", callback: flaxNullableAnyChanged)':
      'flaxNullableAnyChangedType',
  'FlaxTypeRef("callback", nullable: true, callback: flaxNullableAnyChanged)':
      'flaxNullableAnyChangedNullableType',
  'FlaxTypeRef("object", id: "flax.core/sdk_dart_ui#type:Rect")':
      'flaxRectType',
  'FlaxTypeRef("enum", id: "flax.core/flutter#type:Clip")': 'flaxClipType',
  'FlaxTypeRef("object", id: "flax.core/flutter#type:Size")': 'flaxSizeType',
  'FlaxTypeRef("object", id: "flax.core/flutter#type:Color")': 'flaxColorType',
  'FlaxTypeRef("object", id: "flax.core/flutter#type:Offset")':
      'flaxOffsetType',
  'FlaxTypeRef("object", id: "flax.core/flutter#type:Curve")': 'flaxCurveType',
  'FlaxTypeRef("object", id: "flax.core/flutter#type:Type")': 'flaxTypeType',
  'FlaxTypeRef("object", id: "flax.core/flutter#type:Duration")':
      'flaxDurationType',
  'FlaxTypeRef("object", id: "flax.core/sdk_rendering#type:Matrix4")':
      'flaxMatrix4Type',
  'FlaxTypeRef("enum", id: "flax.core/flutter#type:Axis")': 'flaxAxisType',
  'FlaxTypeRef("object", id: "flax.core/sdk_dart_ui#type:Path")':
      'flaxPathType',
  'FlaxTypeRef("object", id: "flax.core/flutter#type:DateTime")':
      'flaxDateTimeType',
  'FlaxTypeRef("object", id: "flax.core/flutter#type:Size", nullable: true)':
      'flaxNullableSizeType',
  'FlaxTypeRef("object", id: "flax.core/flutter#type:Radius")':
      'flaxRadiusType',
  'FlaxTypeRef("object", id: "flax.core/flutter#type:EdgeInsets")':
      'flaxEdgeInsetsType',
  'FlaxTypeRef("object", id: "flax.core/sdk_scheduler#type:TickerFuture")':
      'flaxTickerFutureType',
  'FlaxTypeRef("widget")': 'flaxWidgetType',
  'FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide")':
      'flaxBorderSideType',
  'FlaxTypeRef("function")': 'flaxFunctionType',
  'FlaxTypeRef("Uint8List")': 'flaxUint8ListType',
};
