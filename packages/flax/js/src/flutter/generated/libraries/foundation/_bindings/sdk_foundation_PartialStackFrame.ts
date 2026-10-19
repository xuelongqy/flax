// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_StackFrame';
import '@flax/flutter/foundation/_bindings/sdk_foundation_StackFrame';
const _flaxMemberParameters0 = [{"name":"stackFrame","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"package","required":true},{"name":"className","required":true},{"name":"method","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PartialStackFrame extends Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::PartialStackFrame": readonly [] }> { readonly __PartialStackFrame: unique symbol;
readonly [_flaxDartTypeValue]: PartialStackFrame;

}
defineObject("flax.core/sdk_foundation#type:PartialStackFrame", ["package","className","method"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:PartialStackFrame", "object", {"matches":_flaxMemberParameters0}, {}), []);
const _PartialStackFrameProxy = {type: "flax.core/sdk_foundation#type:PartialStackFrame", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"matches":_flaxMemberParameters0}, getters: ["package","className","method"], setters: [], contextMembers: [], superMembers: ["get:package","get:className","get:method","matches"]} as const;
export interface PartialStackFrame {
readonly [_flaxDartTypeValue]: PartialStackFrame;

matches(stackFrame: Readonly<{ "__flaxBound:package:flutter/src/foundation/stack_frame.dart::StackFrame": readonly [] }>): boolean;
get package(): upstream0.Pattern | string;
get className(): string;
get method(): string;
}
export abstract class PartialStackFrame extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PartialStackFrame>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PartialStackFrame;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:PartialStackFrame", readonly [], false];
constructor(options: {package: DartInput<Readonly<{ "__flaxBound:dart:core::Pattern": readonly [] }>> | string; className: string; method: string}) { super(_PartialStackFrameProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PartialStackFrame.prototype, _PartialStackFrameProxy);
export namespace PartialStackFrame { export function implement(args: [options: {package: DartInput<Readonly<{ "__flaxBound:dart:core::Pattern": readonly [] }>> | string; className: string; method: string}], implementation: {}): PartialStackFrame {
return constructProxy(_PartialStackFrameProxy, args, implementation) as PartialStackFrame; } }
export namespace PartialStackFrame { export declare const asynchronousSuspension: PartialStackFrame; }
_flaxDefineStaticGetters(PartialStackFrame, "flax.core/sdk_foundation#read:PartialStackFrame.", ["asynchronousSuspension"]);
_flaxBindInstanceType<PartialStackFrame, typeof PartialStackFrame>(PartialStackFrame, "flax.core/sdk_foundation#type:PartialStackFrame", ["dart:core::Object"]);
