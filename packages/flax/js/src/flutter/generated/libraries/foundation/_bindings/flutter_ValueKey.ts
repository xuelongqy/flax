// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_StandardComponentType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StandardComponentType';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ValueKey<T extends unknown | null = unknown | null> extends Omit<upstream0.LocalKey, _flaxOwnMembers0>, Omit<upstream1.Key, _flaxOwnMembers0 | keyof upstream0.LocalKey>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> { readonly __ValueKey: unique symbol;
readonly [_flaxDartTypeValue]: ValueKey<T>;

readonly value: T;
toString(): string;
}
defineObject("flax.core/flutter#type:ValueKey", ["value"], [], _flaxBindingMethods("flax.core/flutter#type:ValueKey", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _ValueKeyFactory<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>)): ValueKey<T>;
export function _ValueKeyFactory(value: unknown | null): ValueKey<unknown | null>;
export function _ValueKeyFactory(value: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ValueKey", "", [{"name":"value","required":true,"positional":true}], [value], {}) as ValueKey<unknown | null>;
}
export const ValueKey: typeof _ValueKeyFactory & _FlaxInstanceType<ValueKey<unknown | null>> & _FlaxDartType<ValueKey<unknown | null>, readonly ["class", "flax.core/flutter#type:ValueKey", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<ValueKey<unknown | null>, typeof _ValueKeyFactory>(_ValueKeyFactory, "flax.core/flutter#type:ValueKey", ["flax.core/flutter#type:LocalKey","flax.core/flutter#type:Key","dart:core::Object"]) as typeof _ValueKeyFactory & _FlaxInstanceType<ValueKey<unknown | null>> & _FlaxDartType<ValueKey<unknown | null>, readonly ["class", "flax.core/flutter#type:ValueKey", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(ValueKey, "flax.core/flutter#type:ValueKey", {"category":"object","constructors":{"":[{"name":"value","required":true,"positional":true}]}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "toString" | "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey" | "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {(value: (_Selected0 | DartInput<_Selected0>)): ValueKey<_Selected0>;readonly prototype: ValueKey<_Selected0>;} & _FlaxInstanceType<ValueKey<_Selected0>> & _FlaxDartType<ValueKey<_Selected0>> : never : never; }
