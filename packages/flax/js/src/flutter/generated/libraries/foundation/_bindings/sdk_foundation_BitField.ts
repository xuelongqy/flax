// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters9, _flaxMemberParameters10, _flaxMemberParameters11, _flaxMemberParameters1, _flaxMemberParameters12, _flaxMemberParameters13 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BitField<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/foundation/bitfield.dart::BitField": readonly [T] }> { readonly __BitField: unique symbol;
readonly [_flaxDartTypeValue]: BitField<T>;

reset(value?: boolean): void;
operatorGetIndex(index: (T | DartInput<T>)): boolean;
operatorSetIndex(index: (T | DartInput<T>), value: boolean): void;
}
defineObject("flax.core/sdk_foundation#type:BitField", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:BitField", "object", {"reset":_flaxMemberParameters9,"operatorGetIndex":_flaxMemberParameters10,"operatorSetIndex":_flaxMemberParameters11}, {}), []);
export function _BitFieldFactory<T extends unknown | null = unknown | null>(length: number): BitField<T>;
export function _BitFieldFactory(length: number): BitField<unknown | null>;
export function _BitFieldFactory(length: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:BitField", "", [{"name":"length","required":true,"positional":true}], [length], {}) as BitField<unknown | null>;
}
export namespace _BitFieldFactory {
export function filled<T extends unknown | null = unknown | null>(length: number, value: boolean): BitField<T>;
export function filled(length: number, value: boolean): BitField<unknown | null>;
export function filled(length: unknown, value: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:BitField", "filled", [{"name":"length","required":true,"positional":true},{"name":"value","required":true,"positional":true}], [length, value], {}) as BitField<unknown | null>;
}
}
const _BitFieldProxy = {type: "flax.core/sdk_foundation#type:BitField", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters12,"filled": _flaxMemberParameters13}, methods: {"reset":_flaxMemberParameters9,"operatorGetIndex":_flaxMemberParameters10,"operatorSetIndex":_flaxMemberParameters11}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _BitFieldFactory { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {reset: ((value?: boolean) => void); operatorGetIndex: ((index: T) => boolean); operatorSetIndex: ((index: T, value: boolean) => void)}): BitField<T> {
return constructProxy(_BitFieldProxy, args, implementation) as BitField<T>; } }
export const BitField: typeof _BitFieldFactory & _FlaxInstanceType<BitField<unknown | null>> & _FlaxDartType<BitField<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:BitField", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<BitField<unknown | null>, typeof _BitFieldFactory>(_BitFieldFactory, "flax.core/sdk_foundation#type:BitField", ["dart:core::Object"]) as typeof _BitFieldFactory & _FlaxInstanceType<BitField<unknown | null>> & _FlaxDartType<BitField<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:BitField", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(BitField, "flax.core/sdk_foundation#type:BitField", {...{"category":"object","constructors":{"":[{"name":"length","required":true,"positional":true}],"filled":[{"name":"length","required":true,"positional":true},{"name":"value","required":true,"positional":true}]}}, proxy: _BitFieldProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {(length: number): BitField<_Selected0>;filled: (length: number, value: boolean)=> BitField<_Selected0>;readonly prototype: BitField<_Selected0>;implement(args: readonly [], implementation: Partial<BitField<_Selected0>>): BitField<_Selected0>;} & _FlaxInstanceType<BitField<_Selected0>> & _FlaxDartType<BitField<_Selected0>> : never : never; }
