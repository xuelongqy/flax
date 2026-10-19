// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_StackFrame';
import '@flax/flutter/foundation/_bindings/sdk_foundation_StackFrame';
const _flaxMemberParameters0 = [{"name":"stackFrames","required":true,"positional":true},{"name":"reasons","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StackFilter extends Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::StackFilter": readonly [] }> { readonly __StackFilter: unique symbol;
readonly [_flaxDartTypeValue]: StackFilter;

filter(stackFrames: DartListInput<upstream0.StackFrame, Readonly<{ "__flaxBound:package:flutter/src/foundation/stack_frame.dart::StackFrame": readonly [] }>>, reasons: DartListInput<string | null, string | null>): void;
}
defineObject("flax.core/sdk_foundation#type:StackFilter", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:StackFilter", "object", {"filter":_flaxMemberParameters0}, {}), []);
const _StackFilterProxy = {type: "flax.core/sdk_foundation#type:StackFilter", parameters: _flaxMemberParameters1, constructors: {}, methods: {"filter":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _StackFilterFactory { export function implement(args: [], implementation: {filter: ((stackFrames: DartList<upstream0.StackFrame>, reasons: DartList<string | null>) => void)}): StackFilter {
return constructProxy(_StackFilterProxy, args, implementation) as StackFilter; } }
export const StackFilter: typeof _StackFilterFactory & _FlaxInstanceType<StackFilter> & _FlaxDartType<StackFilter, readonly ["class", "flax.core/sdk_foundation#type:StackFilter", readonly [], false]> = _flaxBindInstanceType<StackFilter, typeof _StackFilterFactory>(_StackFilterFactory, "flax.core/sdk_foundation#type:StackFilter", ["dart:core::Object"]) as typeof _StackFilterFactory & _FlaxInstanceType<StackFilter> & _FlaxDartType<StackFilter, readonly ["class", "flax.core/sdk_foundation#type:StackFilter", readonly [], false]>;
