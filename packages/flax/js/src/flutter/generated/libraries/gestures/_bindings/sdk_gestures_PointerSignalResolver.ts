// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
const _flaxMemberParameters0 = [{"name":"event","required":true,"positional":true},{"name":"callback","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"event","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerSignalResolver extends Readonly<{ "__flaxBound:package:flutter/src/gestures/pointer_signal_resolver.dart::PointerSignalResolver": readonly [] }> { readonly __PointerSignalResolver: unique symbol;
readonly [_flaxDartTypeValue]: PointerSignalResolver;

}
defineObject("flax.core/sdk_gestures#type:PointerSignalResolver", [], [], _flaxBindingMethods("flax.core/sdk_gestures#type:PointerSignalResolver", "object", {"register":_flaxMemberParameters0,"resolve":_flaxMemberParameters1}, {}), []);
const _PointerSignalResolverProxy = {type: "flax.core/sdk_gestures#type:PointerSignalResolver", parameters: [], constructors: {"":[]}, methods: {"register":_flaxMemberParameters0,"resolve":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: [], superMembers: ["register","resolve"]} as const;
export interface PointerSignalResolver {
readonly [_flaxDartTypeValue]: PointerSignalResolver;

register(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent": readonly [] }>, callback: ((event: upstream0.PointerSignalEvent) => void)): void;
resolve(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent": readonly [] }>): void;
}
export abstract class PointerSignalResolver extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerSignalResolver>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PointerSignalResolver;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerSignalResolver", readonly [], false];
constructor() { super(_PointerSignalResolverProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PointerSignalResolver.prototype, _PointerSignalResolverProxy);
export namespace PointerSignalResolver { export function implement(args: [], implementation: {}): PointerSignalResolver {
return constructProxy(_PointerSignalResolverProxy, args, implementation) as PointerSignalResolver; } }
_flaxBindInstanceType<PointerSignalResolver, typeof PointerSignalResolver>(PointerSignalResolver, "flax.core/sdk_gestures#type:PointerSignalResolver", ["dart:core::Object"]);
