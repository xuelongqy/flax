// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface DragStartBehavior extends DartEnum { readonly __DragStartBehavior: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.core/flutter#type:DragStartBehavior", ["down","start"]);
const _flaxEnum_DragStartBehavior_api = {
down: enumValue<DragStartBehavior>("flax.core/flutter#type:DragStartBehavior", "down"),
start: enumValue<DragStartBehavior>("flax.core/flutter#type:DragStartBehavior", "start"),
values: Object.freeze([enumValue<DragStartBehavior>("flax.core/flutter#type:DragStartBehavior", "down"), enumValue<DragStartBehavior>("flax.core/flutter#type:DragStartBehavior", "start")]),
};
export const DragStartBehavior = Object.freeze(_flaxBindInstanceType<DragStartBehavior, typeof _flaxEnum_DragStartBehavior_api>(_flaxEnum_DragStartBehavior_api, "flax.core/flutter#type:DragStartBehavior", []) as typeof _flaxEnum_DragStartBehavior_api & _FlaxInstanceType<DragStartBehavior> & _FlaxDartType<DragStartBehavior, readonly ["class", "flax.core/flutter#type:DragStartBehavior", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
