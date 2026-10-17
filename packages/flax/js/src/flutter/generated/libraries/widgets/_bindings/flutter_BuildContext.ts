// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BuildContext extends ComponentContext { readonly __BuildContext: unique symbol;

readonly widget: Widget;
readonly mounted: boolean;
readonly debugDoingBuild: boolean;
readonly size: upstream0.Size | null;
}
defineContext("flax.core/flutter#type:BuildContext", ["widget","mounted","debugDoingBuild","size"]);
export const BuildContext: object & _FlaxInstanceType<BuildContext> & _FlaxDartType<BuildContext, readonly ["class", "flax.core/flutter#type:BuildContext", readonly [], false]> = _flaxBindInstanceType<BuildContext, object>({}, "flax.core/flutter#type:BuildContext", ["dart:core::Object"]) as object & _FlaxInstanceType<BuildContext> & _FlaxDartType<BuildContext, readonly ["class", "flax.core/flutter#type:BuildContext", readonly [], false]>;
