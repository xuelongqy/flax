// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters100, _flaxMemberParameters7, _flaxMemberParameters56, _flaxMemberParameters101 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Velocity extends Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }> { readonly __Velocity: unique symbol;
readonly [_flaxDartTypeValue]: Velocity;

readonly pixelsPerSecond: upstream0.Offset;
clampMagnitude(minValue: number, maxValue: number): Velocity;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>): Velocity;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>): Velocity;
operatorNegate(): Velocity;
}
defineObject("flax.core/sdk_gestures#type:Velocity", ["pixelsPerSecond"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:Velocity", "object", {"clampMagnitude":_flaxMemberParameters100,"toString":_flaxMemberParameters7,"operatorAdd":_flaxMemberParameters56,"operatorSubtract":_flaxMemberParameters56,"operatorNegate":_flaxMemberParameters7}, {}), []);
export function _VelocityFactory(options: { pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): Velocity {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:Velocity", "", [{"name":"pixelsPerSecond","required":true}], [], options) as Velocity;
}
const _VelocityProxy = {type: "flax.core/sdk_gestures#type:Velocity", parameters: _flaxMemberParameters101, constructors: {"": _flaxMemberParameters101}, methods: {"clampMagnitude":_flaxMemberParameters100,"toString":_flaxMemberParameters7,"operatorAdd":_flaxMemberParameters56,"operatorSubtract":_flaxMemberParameters56,"operatorNegate":_flaxMemberParameters7}, getters: ["pixelsPerSecond"], setters: [], contextMembers: [], superMembers: ["get:pixelsPerSecond","clampMagnitude","toString","operatorAdd","operatorSubtract","operatorNegate"]} as const;
export interface _VelocityNative extends Velocity {
readonly [_flaxDartTypeValue]: _VelocityNative;

clampMagnitude(minValue: number, maxValue: number): Velocity;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>): Velocity;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>): Velocity;
operatorNegate(): Velocity;
get pixelsPerSecond(): upstream0.Offset;
}
export abstract class _VelocityNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Velocity>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Velocity;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:Velocity", readonly [], false];
constructor(options: {pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_VelocityProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_VelocityNative.prototype, _VelocityProxy);
export namespace _VelocityFactory { export function implement(args: [options: {pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): Velocity {
return constructProxy(_VelocityProxy, args, implementation) as Velocity; } }
const _VelocityBinding = _flaxProxyFactory(_VelocityFactory, _VelocityNative) as unknown as typeof _VelocityFactory & (new(options: {pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => _VelocityNative);
export namespace _VelocityFactory { export declare const zero: Velocity; }
_flaxDefineStaticGetters(_VelocityFactory, "flax.core/sdk_gestures#read:Velocity.", ["zero"]);
export const Velocity: typeof _VelocityBinding & _FlaxInstanceType<Velocity> & _FlaxDartType<Velocity, readonly ["class", "flax.core/sdk_gestures#type:Velocity", readonly [], false]> = _flaxBindInstanceType<Velocity, typeof _VelocityBinding>(_VelocityBinding, "flax.core/sdk_gestures#type:Velocity", ["dart:core::Object"]) as typeof _VelocityBinding & _FlaxInstanceType<Velocity> & _FlaxDartType<Velocity, readonly ["class", "flax.core/sdk_gestures#type:Velocity", readonly [], false]>;
