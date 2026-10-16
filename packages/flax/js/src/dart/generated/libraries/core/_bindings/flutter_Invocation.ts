// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Symbol';
import '@flax/dart/core/_bindings/flutter_Symbol';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Invocation extends Readonly<{ "__flaxBound:dart:core::Invocation": readonly [] }> { readonly __Invocation: unique symbol;

readonly memberName: upstream0.Symbol;
readonly positionalArguments: DartList<unknown | null>;
readonly namedArguments: DartMap<upstream0.Symbol, unknown | null>;
readonly isGetter: boolean;
readonly isSetter: boolean;
readonly isMethod: boolean;
readonly isAccessor: boolean;
}
defineObject("flax.core/flutter#type:Invocation", ["memberName","positionalArguments","namedArguments","isGetter","isSetter","isMethod","isAccessor"], [], _flaxBindingMethods("flax.core/flutter#type:Invocation", "object", {}, {}), []);
export const Invocation: object & _FlaxInstanceType<Invocation> & _FlaxDartType<Invocation, readonly ["class", "flax.core/flutter#type:Invocation", readonly [], false]> = _flaxBindInstanceType<Invocation, object>({}, "flax.core/flutter#type:Invocation", ["dart:core::Object"]) as object & _FlaxInstanceType<Invocation> & _FlaxDartType<Invocation, readonly ["class", "flax.core/flutter#type:Invocation", readonly [], false]>;
