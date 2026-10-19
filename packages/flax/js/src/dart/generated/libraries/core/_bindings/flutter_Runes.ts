// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_RuneIterator';
import '@flax/dart/core/_bindings/flutter_RuneIterator';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"toElement","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"test","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"toElements","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"element","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"action","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"combine","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"separator","positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"growable"}] as const;
const _flaxMemberParameters11 = [{"name":"count","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"test","required":true,"positional":true},{"name":"orElse"}] as const;
const _flaxMemberParameters13 = [{"name":"index","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Runes extends Omit<DartIterable<number>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:core::Runes": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Iterable": readonly [number] }> { readonly __Runes: unique symbol;
readonly [_flaxDartTypeValue]: Runes;
readonly [_flaxDartMethodCases]?: {cast: _FlaxSignature0;map: _FlaxSignature1;whereType: _FlaxSignature2;expand: _FlaxSignature3;fold: _FlaxSignature4;};
readonly string: string;
readonly iterator: upstream0.RuneIterator;
readonly last: number;
readonly length: number;
readonly isEmpty: boolean;
readonly isNotEmpty: boolean;
readonly first: number;
readonly single: number;
cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
followedBy(other: DartIterableInput<number, number>): DartIterable<number>;
map<T extends unknown | null = unknown | null>(toElement: ((e: number) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
where(test: ((element: number) => boolean)): DartIterable<number>;
whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
expand<T extends unknown | null = unknown | null>(toElements: ((element: number) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
contains(element: unknown | null): boolean;
forEach(action: ((element: number) => void)): void;
reduce(combine: ((value: number, element: number) => number)): number;
fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: number) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
every(test: ((element: number) => boolean)): boolean;
join(separator?: string): string;
any(test: ((element: number) => boolean)): boolean;
toList(options?: {growable?: boolean | undefined}): DartList<number>;
toSet(): DartSet<number>;
take(count: number): DartIterable<number>;
takeWhile(test: ((value: number) => boolean)): DartIterable<number>;
skip(count: number): DartIterable<number>;
skipWhile(test: ((value: number) => boolean)): DartIterable<number>;
firstWhere(test: ((element: number) => boolean), options?: {orElse?: (() => number) | null | undefined}): number;
lastWhere(test: ((element: number) => boolean), options?: {orElse?: (() => number) | null | undefined}): number;
singleWhere(test: ((element: number) => boolean), options?: {orElse?: (() => number) | null | undefined}): number;
elementAt(index: number): number;
}
defineObject("flax.core/flutter#type:Runes", ["string","iterator","last","length","isEmpty","isNotEmpty","first","single"], [], _flaxBindingMethods("flax.core/flutter#type:Runes", "object", {"cast":_flaxMemberParameters0,"followedBy":_flaxMemberParameters1,"map":_flaxMemberParameters2,"where":_flaxMemberParameters3,"whereType":_flaxMemberParameters0,"expand":_flaxMemberParameters4,"contains":_flaxMemberParameters5,"forEach":_flaxMemberParameters6,"reduce":_flaxMemberParameters7,"fold":_flaxMemberParameters8,"every":_flaxMemberParameters3,"join":_flaxMemberParameters9,"any":_flaxMemberParameters3,"toList":_flaxMemberParameters10,"toSet":_flaxMemberParameters0,"take":_flaxMemberParameters11,"takeWhile":_flaxMemberParameters3,"skip":_flaxMemberParameters11,"skipWhile":_flaxMemberParameters3,"firstWhere":_flaxMemberParameters12,"lastWhere":_flaxMemberParameters12,"singleWhere":_flaxMemberParameters12,"elementAt":_flaxMemberParameters13}, {"cast":{"id":"cast","parameters":[]},"map":{"id":"map","parameters":[{"name":"toElement","required":true,"positional":true}]},"whereType":{"id":"whereType","parameters":[]},"expand":{"id":"expand","parameters":[{"name":"toElements","required":true,"positional":true}]},"fold":{"id":"fold","parameters":[{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}]}}), [], "iterable");
export function _RunesFactory(string: string): Runes {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Runes", "", [{"name":"string","required":true,"positional":true}], [string], {}) as Runes;
}
export const Runes: typeof _RunesFactory & _FlaxInstanceType<Runes> & _FlaxDartType<Runes, readonly ["class", "flax.core/flutter#type:Runes", readonly [], false]> = _flaxBindInstanceType<Runes, typeof _RunesFactory>(_RunesFactory, "flax.core/flutter#type:Runes", ["dart:core::Iterable","dart:core::Object"]) as typeof _RunesFactory & _FlaxInstanceType<Runes> & _FlaxDartType<Runes, readonly ["class", "flax.core/flutter#type:Runes", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "string" | "iterator" | "last" | "length" | "isEmpty" | "isNotEmpty" | "first" | "single" | "cast" | "followedBy" | "map" | "where" | "whereType" | "expand" | "contains" | "forEach" | "reduce" | "fold" | "every" | "join" | "any" | "toList" | "toSet" | "take" | "takeWhile" | "skip" | "skipWhile" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt" | "__flaxBound:dart:core::Runes" | "__flaxBound:dart:core::Iterable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: number) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: number) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>),combine: ((previousValue: _Selected0, element: number) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never; }
