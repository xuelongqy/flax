// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"rawIndex","positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RuneIterator extends Omit<upstream0.Iterator<number>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:core::RuneIterator": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Iterator": readonly [number] }> { readonly __RuneIterator: unique symbol;
readonly [_flaxDartTypeValue]: RuneIterator;

readonly current: number;
readonly string: string;
get rawIndex(): number;
readonly currentSize: number;
readonly currentAsString: string;
moveNext(): boolean;
reset(rawIndex?: number): void;
movePrevious(): boolean;
set rawIndex(value: number);
}
defineObject("flax.core/flutter#type:RuneIterator", ["current","string","rawIndex","currentSize","currentAsString"], ["rawIndex"], _flaxBindingMethods("flax.core/flutter#type:RuneIterator", "object", {"moveNext":_flaxMemberParameters0,"reset":_flaxMemberParameters1,"movePrevious":_flaxMemberParameters0}, {}), []);
export function _RuneIteratorFactory(string: string): RuneIterator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:RuneIterator", "", [{"name":"string","required":true,"positional":true}], [string], {}) as RuneIterator;
}
export namespace _RuneIteratorFactory {
export function at(string: string, index: number): RuneIterator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:RuneIterator", "at", [{"name":"string","required":true,"positional":true},{"name":"index","required":true,"positional":true}], [string, index], {}) as RuneIterator;
}
}
export const RuneIterator: typeof _RuneIteratorFactory & _FlaxInstanceType<RuneIterator> & _FlaxDartType<RuneIterator, readonly ["class", "flax.core/flutter#type:RuneIterator", readonly [], false]> = _flaxBindInstanceType<RuneIterator, typeof _RuneIteratorFactory>(_RuneIteratorFactory, "flax.core/flutter#type:RuneIterator", ["dart:core::Object","flax.core/flutter#type:Iterator"]) as typeof _RuneIteratorFactory & _FlaxInstanceType<RuneIterator> & _FlaxDartType<RuneIterator, readonly ["class", "flax.core/flutter#type:RuneIterator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "current" | "string" | "rawIndex" | "currentSize" | "currentAsString" | "moveNext" | "reset" | "movePrevious" | "__flaxBound:dart:core::RuneIterator" | "__flaxBound:dart:core::Iterator";
