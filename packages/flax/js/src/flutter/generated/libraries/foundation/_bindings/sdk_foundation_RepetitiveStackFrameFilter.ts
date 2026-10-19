// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_StackFilter';
import '@flax/flutter/foundation/_bindings/sdk_foundation_StackFilter';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_PartialStackFrame';
import '@flax/flutter/foundation/_bindings/sdk_foundation_PartialStackFrame';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_StackFrame';
import '@flax/flutter/foundation/_bindings/sdk_foundation_StackFrame';
import { _flaxMemberParameters78, _flaxMemberParameters79 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RepetitiveStackFrameFilter extends Omit<upstream0.StackFilter, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::RepetitiveStackFrameFilter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::StackFilter": readonly [] }> { readonly __RepetitiveStackFrameFilter: unique symbol;
readonly [_flaxDartTypeValue]: RepetitiveStackFrameFilter;

}
defineObject("flax.core/sdk_foundation#type:RepetitiveStackFrameFilter", ["frames","numFrames","replacement"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:RepetitiveStackFrameFilter", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:StackFilter");
const _RepetitiveStackFrameFilterProxy = {type: "flax.core/sdk_foundation#type:RepetitiveStackFrameFilter", parameters: _flaxMemberParameters78, constructors: {"": _flaxMemberParameters78}, methods: {"filter":_flaxMemberParameters79}, getters: ["frames","numFrames","replacement"], setters: [], contextMembers: [], superMembers: ["get:frames","get:numFrames","get:replacement","filter"]} as const;
export interface RepetitiveStackFrameFilter {
readonly [_flaxDartTypeValue]: RepetitiveStackFrameFilter;

filter(stackFrames: DartListInput<upstream2.StackFrame, Readonly<{ "__flaxBound:package:flutter/src/foundation/stack_frame.dart::StackFrame": readonly [] }>>, reasons: DartListInput<string | null, string | null>): void;
get frames(): DartList<upstream1.PartialStackFrame>;
get numFrames(): number;
get replacement(): string;
}
export abstract class RepetitiveStackFrameFilter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RepetitiveStackFrameFilter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RepetitiveStackFrameFilter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:RepetitiveStackFrameFilter", readonly [], false];
constructor(options: {frames: DartListInput<upstream1.PartialStackFrame, Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::PartialStackFrame": readonly [] }>>; replacement: string}) { super(_RepetitiveStackFrameFilterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RepetitiveStackFrameFilter.prototype, _RepetitiveStackFrameFilterProxy);
export namespace RepetitiveStackFrameFilter { export function implement(args: [options: {frames: DartListInput<upstream1.PartialStackFrame, Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::PartialStackFrame": readonly [] }>>; replacement: string}], implementation: {}): RepetitiveStackFrameFilter {
return constructProxy(_RepetitiveStackFrameFilterProxy, args, implementation) as RepetitiveStackFrameFilter; } }
_flaxBindInstanceType<RepetitiveStackFrameFilter, typeof RepetitiveStackFrameFilter>(RepetitiveStackFrameFilter, "flax.core/sdk_foundation#type:RepetitiveStackFrameFilter", ["flax.core/sdk_foundation#type:StackFilter","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "frames" | "numFrames" | "replacement" | "filter" | "__flaxBound:package:flutter/src/foundation/assertions.dart::RepetitiveStackFrameFilter" | "__flaxBound:package:flutter/src/foundation/assertions.dart::StackFilter";
