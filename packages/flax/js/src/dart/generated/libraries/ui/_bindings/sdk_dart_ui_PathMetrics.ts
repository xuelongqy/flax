// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetric';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetric';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import { _flaxMemberParameters0, _flaxMemberParameters59, _flaxMemberParameters104, _flaxMemberParameters105, _flaxMemberParameters106, _flaxMemberParameters107, _flaxMemberParameters108, _flaxMemberParameters109, _flaxMemberParameters110, _flaxMemberParameters111, _flaxMemberParameters112, _flaxMemberParameters3, _flaxMemberParameters113, _flaxMemberParameters114 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PathMetrics extends Omit<DartIterable<upstream0.PathMetric>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:ui::PathMetrics": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Iterable": readonly [upstream0.PathMetric] }> { readonly __PathMetrics: unique symbol;
readonly [_flaxDartTypeValue]: PathMetrics;
readonly [_flaxDartMethodCases]?: {cast: _FlaxSignature0;map: _FlaxSignature1;whereType: _FlaxSignature2;expand: _FlaxSignature3;fold: _FlaxSignature4;};
readonly iterator: upstream1.Iterator<upstream0.PathMetric>;
readonly length: number;
readonly isEmpty: boolean;
readonly isNotEmpty: boolean;
readonly first: upstream0.PathMetric;
readonly last: upstream0.PathMetric;
readonly single: upstream0.PathMetric;
cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
followedBy(other: DartIterableInput<upstream0.PathMetric, Readonly<{ "__flaxBound:dart:ui::PathMetric": readonly [] }>>): DartIterable<upstream0.PathMetric>;
map<T extends unknown | null = unknown | null>(toElement: ((e: upstream0.PathMetric) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
where(test: ((element: upstream0.PathMetric) => boolean)): DartIterable<upstream0.PathMetric>;
whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
expand<T extends unknown | null = unknown | null>(toElements: ((element: upstream0.PathMetric) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
contains(element: unknown | null): boolean;
forEach(action: ((element: upstream0.PathMetric) => void)): void;
reduce(combine: ((value: upstream0.PathMetric, element: upstream0.PathMetric) => Readonly<{ "__flaxBound:dart:ui::PathMetric": readonly [] }>)): upstream0.PathMetric;
fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: upstream0.PathMetric) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
every(test: ((element: upstream0.PathMetric) => boolean)): boolean;
join(separator?: string): string;
any(test: ((element: upstream0.PathMetric) => boolean)): boolean;
toList(options?: {growable?: boolean | undefined}): DartList<upstream0.PathMetric>;
toSet(): DartSet<upstream0.PathMetric>;
take(count: number): DartIterable<upstream0.PathMetric>;
takeWhile(test: ((value: upstream0.PathMetric) => boolean)): DartIterable<upstream0.PathMetric>;
skip(count: number): DartIterable<upstream0.PathMetric>;
skipWhile(test: ((value: upstream0.PathMetric) => boolean)): DartIterable<upstream0.PathMetric>;
firstWhere(test: ((element: upstream0.PathMetric) => boolean), options?: {orElse?: (() => Readonly<{ "__flaxBound:dart:ui::PathMetric": readonly [] }>) | null | undefined}): upstream0.PathMetric;
lastWhere(test: ((element: upstream0.PathMetric) => boolean), options?: {orElse?: (() => Readonly<{ "__flaxBound:dart:ui::PathMetric": readonly [] }>) | null | undefined}): upstream0.PathMetric;
singleWhere(test: ((element: upstream0.PathMetric) => boolean), options?: {orElse?: (() => Readonly<{ "__flaxBound:dart:ui::PathMetric": readonly [] }>) | null | undefined}): upstream0.PathMetric;
elementAt(index: number): upstream0.PathMetric;
}
defineObject("flax.core/sdk_dart_ui#type:PathMetrics", ["iterator","length","isEmpty","isNotEmpty","first","last","single"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:PathMetrics", "object", {"cast":_flaxMemberParameters0,"followedBy":_flaxMemberParameters59,"map":_flaxMemberParameters104,"where":_flaxMemberParameters105,"whereType":_flaxMemberParameters0,"expand":_flaxMemberParameters106,"contains":_flaxMemberParameters107,"forEach":_flaxMemberParameters108,"reduce":_flaxMemberParameters109,"fold":_flaxMemberParameters110,"every":_flaxMemberParameters105,"join":_flaxMemberParameters111,"any":_flaxMemberParameters105,"toList":_flaxMemberParameters112,"toSet":_flaxMemberParameters0,"take":_flaxMemberParameters3,"takeWhile":_flaxMemberParameters105,"skip":_flaxMemberParameters3,"skipWhile":_flaxMemberParameters105,"firstWhere":_flaxMemberParameters113,"lastWhere":_flaxMemberParameters113,"singleWhere":_flaxMemberParameters113,"elementAt":_flaxMemberParameters114}, {"cast":{"id":"cast","parameters":[]},"map":{"id":"map","parameters":[{"name":"toElement","required":true,"positional":true}]},"whereType":{"id":"whereType","parameters":[]},"expand":{"id":"expand","parameters":[{"name":"toElements","required":true,"positional":true}]},"fold":{"id":"fold","parameters":[{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}]}}), [], "iterable");
export const PathMetrics: object & _FlaxInstanceType<PathMetrics> & _FlaxDartType<PathMetrics, readonly ["class", "flax.core/sdk_dart_ui#type:PathMetrics", readonly [], false]> = _flaxBindInstanceType<PathMetrics, object>({}, "flax.core/sdk_dart_ui#type:PathMetrics", ["dart:core::Iterable","dart:core::Object"]) as object & _FlaxInstanceType<PathMetrics> & _FlaxDartType<PathMetrics, readonly ["class", "flax.core/sdk_dart_ui#type:PathMetrics", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "iterator" | "length" | "isEmpty" | "isNotEmpty" | "first" | "last" | "single" | "cast" | "followedBy" | "map" | "where" | "whereType" | "expand" | "contains" | "forEach" | "reduce" | "fold" | "every" | "join" | "any" | "toList" | "toSet" | "take" | "takeWhile" | "skip" | "skipWhile" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt" | "__flaxBound:dart:ui::PathMetrics" | "__flaxBound:dart:core::Iterable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: upstream0.PathMetric) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: upstream0.PathMetric) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>),combine: ((previousValue: _Selected0, element: upstream0.PathMetric) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never; }
