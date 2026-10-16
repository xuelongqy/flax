// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface WrapAlignment extends DartEnum { readonly __WrapAlignment: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.core/flutter#type:WrapAlignment", ["start","end","center","spaceBetween","spaceAround","spaceEvenly"]);
const _flaxEnum_WrapAlignment_api = {
start: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "start"),
end: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "end"),
center: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "center"),
spaceBetween: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "spaceBetween"),
spaceAround: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "spaceAround"),
spaceEvenly: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "spaceEvenly"),
values: Object.freeze([enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "start"), enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "end"), enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "center"), enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "spaceBetween"), enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "spaceAround"), enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "spaceEvenly")]),
};
export const WrapAlignment = Object.freeze(_flaxBindInstanceType<WrapAlignment, typeof _flaxEnum_WrapAlignment_api>(_flaxEnum_WrapAlignment_api, "flax.core/flutter#type:WrapAlignment", []) as typeof _flaxEnum_WrapAlignment_api & _FlaxInstanceType<WrapAlignment> & _FlaxDartType<WrapAlignment, readonly ["class", "flax.core/flutter#type:WrapAlignment", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
