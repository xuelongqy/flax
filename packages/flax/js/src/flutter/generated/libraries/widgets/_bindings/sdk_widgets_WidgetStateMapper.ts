// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters454, _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters462, _flaxMemberParameters463 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateMapper<T extends unknown | null = unknown | null> extends Omit<upstream0.WidgetStateProperty<T>, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.WidgetStateProperty<T>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateMapper": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __WidgetStateMapper: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStateMapper<T>;

resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): T;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>, options?: {prefix?: string | undefined}): void;
}
defineObject("flax.core/sdk_widgets#type:WidgetStateMapper", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStateMapper", "object", {"resolve":_flaxMemberParameters454,"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters462}, {}), []);
export function _WidgetStateMapperFactory<T extends unknown | null = unknown | null>(map: DartMapInput<upstream2.WidgetStatesConstraint, _FlaxDartOutput<T>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, (T | _FlaxDartOutput<T>)>): WidgetStateMapper<T>;
export function _WidgetStateMapperFactory(map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>): WidgetStateMapper<unknown | null>;
export function _WidgetStateMapperFactory(map: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:WidgetStateMapper", "", [{"name":"map","required":true,"positional":true}], [map], {}) as WidgetStateMapper<unknown | null>;
}
const _WidgetStateMapperProxy = {type: "flax.core/sdk_widgets#type:WidgetStateMapper", parameters: _flaxMemberParameters463, constructors: {"": _flaxMemberParameters463}, methods: {"resolve":_flaxMemberParameters454,"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters462}, getters: [], setters: [], contextMembers: [], superMembers: ["resolve","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _WidgetStateMapperNative<T extends unknown | null = unknown | null> extends WidgetStateMapper<T> {
readonly [_flaxDartTypeValue]: _WidgetStateMapperNative<T>;

resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): T;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>, options?: {prefix?: string | undefined}): void;
}
export abstract class _WidgetStateMapperNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateMapper<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetStateMapper<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMapper", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>) { super(_WidgetStateMapperProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_WidgetStateMapperNative.prototype, _WidgetStateMapperProxy);
export namespace _WidgetStateMapperFactory { export function implement<T extends unknown | null = unknown | null>(args: [map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>], implementation: {}): WidgetStateMapper<T> {
return constructProxy(_WidgetStateMapperProxy, args, implementation) as WidgetStateMapper<T>; } }
const _WidgetStateMapperBinding = _flaxProxyFactory(_WidgetStateMapperFactory, _WidgetStateMapperNative) as unknown as typeof _WidgetStateMapperFactory & (new<T extends unknown | null = unknown | null>(map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>) => _WidgetStateMapperNative<T>);
export const WidgetStateMapper: typeof _WidgetStateMapperBinding & _FlaxInstanceType<WidgetStateMapper<unknown | null>> & _FlaxDartType<WidgetStateMapper<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMapper", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<WidgetStateMapper<unknown | null>, typeof _WidgetStateMapperBinding>(_WidgetStateMapperBinding, "flax.core/sdk_widgets#type:WidgetStateMapper", ["dart:core::Object","flax.core/flutter#type:WidgetStateProperty","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _WidgetStateMapperBinding & _FlaxInstanceType<WidgetStateMapper<unknown | null>> & _FlaxDartType<WidgetStateMapper<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMapper", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(WidgetStateMapper, "flax.core/sdk_widgets#type:WidgetStateMapper", {...{"category":"object","constructors":{"":[{"name":"map","required":true,"positional":true}]}}, proxy: _WidgetStateMapperProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "resolve" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateMapper" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>) => _WidgetStateMapperNative<_Selected0>) & {(map: DartMapInput<upstream2.WidgetStatesConstraint, _Selected0, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, (_Selected0 | DartInput<_Selected0>)>): _WidgetStateMapperNative<_Selected0>;readonly prototype: _WidgetStateMapperNative<_Selected0>;implement(args: readonly [DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>], implementation: Partial<_WidgetStateMapperNative<_Selected0>>): _WidgetStateMapperNative<_Selected0>;} & _FlaxInstanceType<_WidgetStateMapperNative<_Selected0>> & _FlaxDartType<_WidgetStateMapperNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>) => _WidgetStateMapperNative<_Selected0>) & {(map: DartMapInput<upstream2.WidgetStatesConstraint, _Selected0, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, (_Selected0 | DartInput<_Selected0>)>): _WidgetStateMapperNative<_Selected0>;readonly prototype: _WidgetStateMapperNative<_Selected0>;implement(args: readonly [DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>], implementation: Partial<_WidgetStateMapperNative<_Selected0>>): _WidgetStateMapperNative<_Selected0>;} & _FlaxInstanceType<_WidgetStateMapperNative<_Selected0>> & _FlaxDartType<_WidgetStateMapperNative<_Selected0>> : never : never; }
