// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { _flaxMemberParameters1, _flaxMemberParameters83 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StackFrame extends Readonly<{ "__flaxBound:package:flutter/src/foundation/stack_frame.dart::StackFrame": readonly [] }> { readonly __StackFrame: unique symbol;
readonly [_flaxDartTypeValue]: StackFrame;

readonly source: string;
readonly number: number;
readonly packageScheme: string;
readonly package: string;
readonly packagePath: string;
readonly line: number;
readonly column: number;
readonly className: string;
readonly method: string;
readonly isConstructor: boolean;
toString(): string;
}
defineObject("flax.core/sdk_foundation#type:StackFrame", ["source","number","packageScheme","package","packagePath","line","column","className","method","isConstructor"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:StackFrame", "object", {"toString":_flaxMemberParameters1}, {}), []);
export function _StackFrameFactory(options: { number: number; column: number; line: number; packageScheme: string; package: string; packagePath: string; className?: string | undefined; method: string; isConstructor?: boolean | undefined; source: string }): StackFrame {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:StackFrame", "", [{"name":"number","required":true},{"name":"column","required":true},{"name":"line","required":true},{"name":"packageScheme","required":true},{"name":"package","required":true},{"name":"packagePath","required":true},{"name":"className"},{"name":"method","required":true},{"name":"isConstructor"},{"name":"source","required":true}], [], options) as StackFrame;
}
const _StackFrameProxy = {type: "flax.core/sdk_foundation#type:StackFrame", parameters: _flaxMemberParameters83, constructors: {"": _flaxMemberParameters83}, methods: {"toString":_flaxMemberParameters1}, getters: ["source","number","packageScheme","package","packagePath","line","column","className","method","isConstructor"], setters: [], contextMembers: [], superMembers: ["get:source","get:number","get:packageScheme","get:package","get:packagePath","get:line","get:column","get:className","get:method","get:isConstructor","toString"]} as const;
export interface _StackFrameNative extends StackFrame {
readonly [_flaxDartTypeValue]: _StackFrameNative;

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
export abstract class _StackFrameNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StackFrame>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StackFrame;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:StackFrame", readonly [], false];
constructor(options: {number: number; column: number; line: number; packageScheme: string; package: string; packagePath: string; className?: string | undefined; method: string; isConstructor?: boolean | undefined; source: string}) { super(_StackFrameProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_StackFrameNative.prototype, _StackFrameProxy);
export namespace _StackFrameFactory { export function implement(args: [options: {number: number; column: number; line: number; packageScheme: string; package: string; packagePath: string; className?: string | undefined; method: string; isConstructor?: boolean | undefined; source: string}], implementation: {}): StackFrame {
return constructProxy(_StackFrameProxy, args, implementation) as StackFrame; } }
const _StackFrameBinding = _flaxProxyFactory(_StackFrameFactory, _StackFrameNative) as unknown as typeof _StackFrameFactory & (new(options: {number: number; column: number; line: number; packageScheme: string; package: string; packagePath: string; className?: string | undefined; method: string; isConstructor?: boolean | undefined; source: string}) => _StackFrameNative);
export namespace _StackFrameFactory { export declare const asynchronousSuspension: StackFrame; }
export namespace _StackFrameFactory { export declare const stackOverFlowElision: StackFrame; }
_flaxDefineStaticGetters(_StackFrameFactory, "flax.core/sdk_foundation#read:StackFrame.", ["asynchronousSuspension","stackOverFlowElision"]);
export namespace _StackFrameFactory { export function fromStackTrace(stack: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }>): DartList<StackFrame> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:StackFrame.fromStackTrace", [stack]);
return _flaxResult as DartList<StackFrame>;
} }
export namespace _StackFrameFactory { export function fromStackString(stack: string): DartList<StackFrame> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:StackFrame.fromStackString", [stack]);
return _flaxResult as DartList<StackFrame>;
} }
export namespace _StackFrameFactory { export function fromStackTraceLine(line: string): StackFrame | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:StackFrame.fromStackTraceLine", [line]);
return _flaxResult as StackFrame | null;
} }
export const StackFrame: typeof _StackFrameBinding & _FlaxInstanceType<StackFrame> & _FlaxDartType<StackFrame, readonly ["class", "flax.core/sdk_foundation#type:StackFrame", readonly [], false]> = _flaxBindInstanceType<StackFrame, typeof _StackFrameBinding>(_StackFrameBinding, "flax.core/sdk_foundation#type:StackFrame", ["dart:core::Object"]) as typeof _StackFrameBinding & _FlaxInstanceType<StackFrame> & _FlaxDartType<StackFrame, readonly ["class", "flax.core/sdk_foundation#type:StackFrame", readonly [], false]>;
