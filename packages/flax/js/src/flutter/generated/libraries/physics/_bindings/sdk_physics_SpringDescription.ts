// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters3, _flaxMemberParameters9, _flaxMemberParameters10 } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SpringDescription extends Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }> { readonly __SpringDescription: unique symbol;
readonly [_flaxDartTypeValue]: SpringDescription;

readonly mass: number;
readonly stiffness: number;
readonly damping: number;
readonly duration: upstream0.Duration;
readonly bounce: number;
toString(): string;
}
defineObject("flax.core/sdk_physics#type:SpringDescription", ["mass","stiffness","damping","duration","bounce"], [], _flaxBindingMethods("flax.core/sdk_physics#type:SpringDescription", "object", {"toString":_flaxMemberParameters3}, {}), []);
export function _SpringDescriptionFactory(options: { mass: number; stiffness: number; damping: number }): SpringDescription {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_physics#type:SpringDescription", "", [{"name":"mass","required":true},{"name":"stiffness","required":true},{"name":"damping","required":true}], [], options) as SpringDescription;
}
export namespace _SpringDescriptionFactory {
export function withDampingRatio(options: { mass: number; stiffness: number; ratio?: number | undefined }): SpringDescription {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_physics#type:SpringDescription", "withDampingRatio", [{"name":"mass","required":true},{"name":"stiffness","required":true},{"name":"ratio"}], [], options) as SpringDescription;
}
}
export namespace _SpringDescriptionFactory {
export function withDurationAndBounce(options: { duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; bounce?: number | undefined } = {}): SpringDescription {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_physics#type:SpringDescription", "withDurationAndBounce", [{"name":"duration"},{"name":"bounce"}], [], options) as SpringDescription;
}
}
const _SpringDescriptionProxy = {type: "flax.core/sdk_physics#type:SpringDescription", parameters: _flaxMemberParameters9, constructors: {"": _flaxMemberParameters9,"withDampingRatio": _flaxMemberParameters10}, methods: {"toString":_flaxMemberParameters3}, getters: ["mass","stiffness","damping","duration","bounce"], setters: [], contextMembers: [], superMembers: ["get:mass","get:stiffness","get:damping","get:duration","get:bounce","toString"]} as const;
export interface _SpringDescriptionNative extends SpringDescription {
readonly [_flaxDartTypeValue]: _SpringDescriptionNative;
readonly [_flaxDartConstructors]?: {"": (options: {mass: number; stiffness: number; damping: number}) => void;"withDampingRatio": (options: {mass: number; stiffness: number; ratio?: number | undefined}) => void;};

toString(): string;
get mass(): number;
get stiffness(): number;
get damping(): number;
get duration(): upstream0.Duration;
get bounce(): number;
}
export abstract class _SpringDescriptionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpringDescription>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SpringDescription;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:SpringDescription", readonly [], false];
constructor(options: {mass: number; stiffness: number; damping: number}); constructor(call: _FlaxProxySuper<_SpringDescriptionNative>); constructor(...args: unknown[]) { super(_SpringDescriptionProxy, args); }
}
_flaxDefineProxyBase(_SpringDescriptionNative.prototype, _SpringDescriptionProxy);
export namespace _SpringDescriptionFactory { export function implement(args: [options: {mass: number; stiffness: number; damping: number}], implementation: {}): SpringDescription {
return constructProxy(_SpringDescriptionProxy, args, implementation) as SpringDescription; } }
const _SpringDescriptionBinding = _flaxProxyFactory(_SpringDescriptionFactory, _SpringDescriptionNative) as unknown as typeof _SpringDescriptionFactory & (new(options: {mass: number; stiffness: number; damping: number}) => _SpringDescriptionNative) & (new(call: _FlaxProxySuper<_SpringDescriptionNative>) => _SpringDescriptionNative);
export const SpringDescription: typeof _SpringDescriptionBinding & _FlaxInstanceType<SpringDescription> & _FlaxDartType<SpringDescription, readonly ["class", "flax.core/sdk_physics#type:SpringDescription", readonly [], false]> = _flaxBindInstanceType<SpringDescription, typeof _SpringDescriptionBinding>(_SpringDescriptionBinding, "flax.core/sdk_physics#type:SpringDescription", ["dart:core::Object"]) as typeof _SpringDescriptionBinding & _FlaxInstanceType<SpringDescription> & _FlaxDartType<SpringDescription, readonly ["class", "flax.core/sdk_physics#type:SpringDescription", readonly [], false]>;
