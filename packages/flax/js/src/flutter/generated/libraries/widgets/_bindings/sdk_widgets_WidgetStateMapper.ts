// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
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
const _flaxMemberParameters0 = [{"name":"states","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true},{"name":"prefix","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateMapper<T extends unknown | null = unknown | null> extends Omit<upstream0.WidgetStateProperty<T>, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.WidgetStateProperty<T>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateMapper": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __WidgetStateMapper: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStateMapper<T>;

}
defineObject("flax.core/sdk_widgets#type:WidgetStateMapper", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStateMapper", "object", {"resolve":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters4}, {}), []);
const _WidgetStateMapperProxy = {type: "flax.core/sdk_widgets#type:WidgetStateMapper", parameters: [{"name":"map","required":true,"positional":true}], constructors: {"":[{"name":"map","required":true,"positional":true}]}, methods: {"resolve":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters4}, getters: [], setters: [], contextMembers: [], superMembers: ["resolve","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface WidgetStateMapper<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: WidgetStateMapper<T>;

resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): T;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>, options?: {prefix?: string | undefined}): void;
}
export abstract class WidgetStateMapper<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateMapper<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetStateMapper<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMapper", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>) { super(_WidgetStateMapperProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(WidgetStateMapper.prototype, _WidgetStateMapperProxy);
export namespace WidgetStateMapper { export function implement<T extends unknown | null = unknown | null>(args: [map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>], implementation: {}): WidgetStateMapper<T> {
return constructProxy(_WidgetStateMapperProxy, args, implementation) as WidgetStateMapper<T>; } }
_flaxBindInstanceType<WidgetStateMapper<unknown | null>, typeof WidgetStateMapper>(WidgetStateMapper, "flax.core/sdk_widgets#type:WidgetStateMapper", ["dart:core::Object","flax.core/flutter#type:WidgetStateProperty","flax.core/sdk_foundation#type:Diagnosticable"]);
_flaxDefineDartTypes(WidgetStateMapper, "flax.core/sdk_widgets#type:WidgetStateMapper", {...{"category":"object","constructors":{}}, proxy: _WidgetStateMapperProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "resolve" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateMapper" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>) => WidgetStateMapper<_Selected0>) & {readonly prototype: WidgetStateMapper<_Selected0>;implement(args: readonly [DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>], implementation: Partial<WidgetStateMapper<_Selected0>>): WidgetStateMapper<_Selected0>;} & _FlaxInstanceType<WidgetStateMapper<_Selected0>> & _FlaxDartType<WidgetStateMapper<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>) => WidgetStateMapper<_Selected0>) & {readonly prototype: WidgetStateMapper<_Selected0>;implement(args: readonly [DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, unknown | null>], implementation: Partial<WidgetStateMapper<_Selected0>>): WidgetStateMapper<_Selected0>;} & _FlaxInstanceType<WidgetStateMapper<_Selected0>> & _FlaxDartType<WidgetStateMapper<_Selected0>> : never : never; }
