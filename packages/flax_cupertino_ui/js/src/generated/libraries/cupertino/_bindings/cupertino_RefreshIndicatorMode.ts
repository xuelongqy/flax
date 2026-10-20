// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RefreshIndicatorMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:cupertino_ui/src/refresh.dart::RefreshIndicatorMode">, Readonly<{ "__flaxBound:package:cupertino_ui/src/refresh.dart::RefreshIndicatorMode": readonly [] }> { readonly __RefreshIndicatorMode: unique symbol;
readonly [_flaxDartTypeValue]: RefreshIndicatorMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.cupertino/cupertino#type:RefreshIndicatorMode", ["inactive","drag","armed","refresh","done"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_RefreshIndicatorMode_api = {
inactive: enumValue<RefreshIndicatorMode>("flax.cupertino/cupertino#type:RefreshIndicatorMode", "inactive"),
drag: enumValue<RefreshIndicatorMode>("flax.cupertino/cupertino#type:RefreshIndicatorMode", "drag"),
armed: enumValue<RefreshIndicatorMode>("flax.cupertino/cupertino#type:RefreshIndicatorMode", "armed"),
refresh: enumValue<RefreshIndicatorMode>("flax.cupertino/cupertino#type:RefreshIndicatorMode", "refresh"),
done: enumValue<RefreshIndicatorMode>("flax.cupertino/cupertino#type:RefreshIndicatorMode", "done"),
values: Object.freeze([enumValue<RefreshIndicatorMode>("flax.cupertino/cupertino#type:RefreshIndicatorMode", "inactive"), enumValue<RefreshIndicatorMode>("flax.cupertino/cupertino#type:RefreshIndicatorMode", "drag"), enumValue<RefreshIndicatorMode>("flax.cupertino/cupertino#type:RefreshIndicatorMode", "armed"), enumValue<RefreshIndicatorMode>("flax.cupertino/cupertino#type:RefreshIndicatorMode", "refresh"), enumValue<RefreshIndicatorMode>("flax.cupertino/cupertino#type:RefreshIndicatorMode", "done")]),
};
export const RefreshIndicatorMode = Object.freeze(_flaxBindInstanceType<RefreshIndicatorMode, typeof _flaxEnum_RefreshIndicatorMode_api>(_flaxEnum_RefreshIndicatorMode_api, "flax.cupertino/cupertino#type:RefreshIndicatorMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_RefreshIndicatorMode_api & _FlaxInstanceType<RefreshIndicatorMode> & _FlaxDartType<RefreshIndicatorMode, readonly ["class", "flax.cupertino/cupertino#type:RefreshIndicatorMode", readonly [], false]>);
