// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StackTrace extends Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> { readonly __StackTrace: unique symbol;

toString(): string;
}
defineObject("flax.core/flutter#type:StackTrace", [], [], _flaxBindingMethods("flax.core/flutter#type:StackTrace", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _StackTraceFactory = {} as {readonly current: StackTrace;readonly empty: StackTrace};
Object.defineProperty(_StackTraceFactory, "current", { get: () => invokeTopLevel("flax.core/flutter#read:StackTrace.current", []) });
Object.defineProperty(_StackTraceFactory, "empty", { get: () => invokeTopLevel("flax.core/flutter#read:StackTrace.empty", []) });
export const StackTrace: typeof _StackTraceFactory & _FlaxInstanceType<StackTrace> & _FlaxDartType<StackTrace, readonly ["class", "flax.core/flutter#type:StackTrace", readonly [], false]> = _flaxBindInstanceType<StackTrace, typeof _StackTraceFactory>(_StackTraceFactory, "flax.core/flutter#type:StackTrace", ["dart:core::Object"]) as typeof _StackTraceFactory & _FlaxInstanceType<StackTrace> & _FlaxDartType<StackTrace, readonly ["class", "flax.core/flutter#type:StackTrace", readonly [], false]>;
