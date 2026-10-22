// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
import { _flaxMemberParameters83, _flaxMemberParameters0, _flaxMemberParameters7 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerSignalResolver extends Readonly<{ "__flaxBound:package:flutter/src/gestures/pointer_signal_resolver.dart::PointerSignalResolver": readonly [] }> { readonly __PointerSignalResolver: unique symbol;
readonly [_flaxDartTypeValue]: PointerSignalResolver;

register(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent": readonly [] }>, callback: ((event: upstream0.PointerSignalEvent) => void)): void;
resolve(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent": readonly [] }>): void;
}
defineObject("flax.core/sdk_gestures#type:PointerSignalResolver", [], [], _flaxBindingMethods("flax.core/sdk_gestures#type:PointerSignalResolver", "object", {"register":_flaxMemberParameters83,"resolve":_flaxMemberParameters0}, {}), []);
export function _PointerSignalResolverFactory(): PointerSignalResolver {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:PointerSignalResolver", "", [], [], {}) as PointerSignalResolver;
}
const _PointerSignalResolverProxy = {type: "flax.core/sdk_gestures#type:PointerSignalResolver", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"register":_flaxMemberParameters83,"resolve":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["register","resolve"]} as const;
export interface _PointerSignalResolverNative extends PointerSignalResolver {
readonly [_flaxDartTypeValue]: _PointerSignalResolverNative;

register(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent": readonly [] }>, callback: ((event: upstream0.PointerSignalEvent) => void)): void;
resolve(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent": readonly [] }>): void;
}
export abstract class _PointerSignalResolverNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerSignalResolver>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PointerSignalResolver;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerSignalResolver", readonly [], false];
constructor() { super(_PointerSignalResolverProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PointerSignalResolverNative.prototype, _PointerSignalResolverProxy);
export namespace _PointerSignalResolverFactory { export function implement(args: [], implementation: {}): PointerSignalResolver {
return constructProxy(_PointerSignalResolverProxy, args, implementation) as PointerSignalResolver; } }
const _PointerSignalResolverBinding = _flaxProxyFactory(_PointerSignalResolverFactory, _PointerSignalResolverNative) as unknown as typeof _PointerSignalResolverFactory & (new() => _PointerSignalResolverNative);
export const PointerSignalResolver: typeof _PointerSignalResolverBinding & _FlaxInstanceType<PointerSignalResolver> & _FlaxDartType<PointerSignalResolver, readonly ["class", "flax.core/sdk_gestures#type:PointerSignalResolver", readonly [], false]> = _flaxBindInstanceType<PointerSignalResolver, typeof _PointerSignalResolverBinding>(_PointerSignalResolverBinding, "flax.core/sdk_gestures#type:PointerSignalResolver", ["dart:core::Object"]) as typeof _PointerSignalResolverBinding & _FlaxInstanceType<PointerSignalResolver> & _FlaxDartType<PointerSignalResolver, readonly ["class", "flax.core/sdk_gestures#type:PointerSignalResolver", readonly [], false]>;
