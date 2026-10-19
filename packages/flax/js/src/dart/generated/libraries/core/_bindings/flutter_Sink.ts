// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters148, _flaxMemberParameters3 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Sink<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:dart:core::Sink": readonly [T] }> { readonly __Sink: unique symbol;
readonly [_flaxDartTypeValue]: Sink<T>;

add(data: (T | DartInput<T>)): void;
close(): void;
}
defineObject("flax.core/flutter#type:Sink", [], [], _flaxBindingMethods("flax.core/flutter#type:Sink", "object", {"add":_flaxMemberParameters148,"close":_flaxMemberParameters3}, {}), []);
export const Sink: object & _FlaxInstanceType<Sink<unknown | null>> & _FlaxDartType<Sink<unknown | null>, readonly ["class", "flax.core/flutter#type:Sink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<Sink<unknown | null>, object>({}, "flax.core/flutter#type:Sink", ["dart:core::Object"]) as object & _FlaxInstanceType<Sink<unknown | null>> & _FlaxDartType<Sink<unknown | null>, readonly ["class", "flax.core/flutter#type:Sink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(Sink, "flax.core/flutter#type:Sink", {"category":"object","constructors":{}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: Sink<_Selected0>;} & _FlaxInstanceType<Sink<_Selected0>> & _FlaxDartType<Sink<_Selected0>> : never : never; }
