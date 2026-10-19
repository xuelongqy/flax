// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"number","required":true},{"name":"column","required":true},{"name":"line","required":true},{"name":"packageScheme","required":true},{"name":"package","required":true},{"name":"packagePath","required":true},{"name":"className"},{"name":"method","required":true},{"name":"isConstructor"},{"name":"source","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StackFrame extends Readonly<{ "__flaxBound:package:flutter/src/foundation/stack_frame.dart::StackFrame": readonly [] }> { readonly __StackFrame: unique symbol;
readonly [_flaxDartTypeValue]: StackFrame;

}
defineObject("flax.core/sdk_foundation#type:StackFrame", ["source","number","packageScheme","package","packagePath","line","column","className","method","isConstructor"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:StackFrame", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _StackFrameProxy = {type: "flax.core/sdk_foundation#type:StackFrame", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["source","number","packageScheme","package","packagePath","line","column","className","method","isConstructor"], setters: [], contextMembers: [], superMembers: ["get:source","get:number","get:packageScheme","get:package","get:packagePath","get:line","get:column","get:className","get:method","get:isConstructor","toString"]} as const;
export interface StackFrame {
readonly [_flaxDartTypeValue]: StackFrame;

toString(): string;
get source(): string;
get number(): number;
get packageScheme(): string;
get package(): string;
get packagePath(): string;
get line(): number;
get column(): number;
get className(): string;
get method(): string;
get isConstructor(): boolean;
}
export abstract class StackFrame extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StackFrame>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StackFrame;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:StackFrame", readonly [], false];
constructor(options: {number: number; column: number; line: number; packageScheme: string; package: string; packagePath: string; className?: string | undefined; method: string; isConstructor?: boolean | undefined; source: string}) { super(_StackFrameProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(StackFrame.prototype, _StackFrameProxy);
export namespace StackFrame { export function implement(args: [options: {number: number; column: number; line: number; packageScheme: string; package: string; packagePath: string; className?: string | undefined; method: string; isConstructor?: boolean | undefined; source: string}], implementation: {}): StackFrame {
return constructProxy(_StackFrameProxy, args, implementation) as StackFrame; } }
export namespace StackFrame { export declare const asynchronousSuspension: StackFrame; }
export namespace StackFrame { export declare const stackOverFlowElision: StackFrame; }
_flaxDefineStaticGetters(StackFrame, "flax.core/sdk_foundation#read:StackFrame.", ["asynchronousSuspension","stackOverFlowElision"]);
export namespace StackFrame { export function fromStackTrace(stack: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }>): DartList<StackFrame> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:StackFrame.fromStackTrace", [stack]);
return _flaxResult as DartList<StackFrame>;
} }
export namespace StackFrame { export function fromStackString(stack: string): DartList<StackFrame> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:StackFrame.fromStackString", [stack]);
return _flaxResult as DartList<StackFrame>;
} }
export namespace StackFrame { export function fromStackTraceLine(line: string): StackFrame | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:StackFrame.fromStackTraceLine", [line]);
return _flaxResult as StackFrame | null;
} }
_flaxBindInstanceType<StackFrame, typeof StackFrame>(StackFrame, "flax.core/sdk_foundation#type:StackFrame", ["dart:core::Object"]);
