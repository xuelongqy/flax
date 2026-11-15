// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters370 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouteBarrierDetails extends Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::RouteBarrierDetails": readonly [] }> { readonly __RouteBarrierDetails: unique symbol;
readonly [_flaxDartTypeValue]: RouteBarrierDetails;

readonly animation: upstream0.Animation<number>;
readonly barrierColor: upstream1.Color | null;
readonly barrierLabel: string | null;
readonly barrierDismissible: boolean;
}
defineObject("flax.core/sdk_widgets#type:RouteBarrierDetails", ["animation","barrierColor","barrierLabel","barrierDismissible"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RouteBarrierDetails", "object", {}, {}), []);
export function _RouteBarrierDetailsFactory(options: { animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:listen/src/listen.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:listen/src/listen.dart::ValueListenable": readonly [number] }>; barrierColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; barrierLabel?: string | null | undefined; barrierDismissible: boolean }): RouteBarrierDetails {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RouteBarrierDetails", "", [{"name":"animation","required":true},{"name":"barrierColor"},{"name":"barrierLabel"},{"name":"barrierDismissible","required":true}], [], options) as RouteBarrierDetails;
}
const _RouteBarrierDetailsProxy = {type: "flax.core/sdk_widgets#type:RouteBarrierDetails", parameters: _flaxMemberParameters370, constructors: {"": _flaxMemberParameters370}, methods: {}, getters: ["animation","barrierColor","barrierLabel","barrierDismissible"], setters: [], contextMembers: [], superMembers: ["get:animation","get:barrierColor","get:barrierLabel","get:barrierDismissible"]} as const;
export interface _RouteBarrierDetailsNative extends RouteBarrierDetails {
readonly [_flaxDartTypeValue]: _RouteBarrierDetailsNative;

get animation(): upstream0.Animation<number>;
get barrierColor(): upstream1.Color | null;
get barrierLabel(): string | null;
get barrierDismissible(): boolean;
}
export abstract class _RouteBarrierDetailsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteBarrierDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RouteBarrierDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteBarrierDetails", readonly [], false];
constructor(options: {animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:listen/src/listen.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:listen/src/listen.dart::ValueListenable": readonly [number] }>; barrierColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; barrierLabel?: string | null | undefined; barrierDismissible: boolean}) { super(_RouteBarrierDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RouteBarrierDetailsNative.prototype, _RouteBarrierDetailsProxy);
export namespace _RouteBarrierDetailsFactory { export function implement(args: [options: {animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:listen/src/listen.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:listen/src/listen.dart::ValueListenable": readonly [number] }>; barrierColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; barrierLabel?: string | null | undefined; barrierDismissible: boolean}], implementation: {}): RouteBarrierDetails {
return constructProxy(_RouteBarrierDetailsProxy, args, implementation) as RouteBarrierDetails; } }
const _RouteBarrierDetailsBinding = _flaxProxyFactory(_RouteBarrierDetailsFactory, _RouteBarrierDetailsNative) as unknown as typeof _RouteBarrierDetailsFactory & (new(options: {animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:listen/src/listen.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:listen/src/listen.dart::ValueListenable": readonly [number] }>; barrierColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; barrierLabel?: string | null | undefined; barrierDismissible: boolean}) => _RouteBarrierDetailsNative);
export const RouteBarrierDetails: typeof _RouteBarrierDetailsBinding & _FlaxInstanceType<RouteBarrierDetails> & _FlaxDartType<RouteBarrierDetails, readonly ["class", "flax.core/sdk_widgets#type:RouteBarrierDetails", readonly [], false]> = _flaxBindInstanceType<RouteBarrierDetails, typeof _RouteBarrierDetailsBinding>(_RouteBarrierDetailsBinding, "flax.core/sdk_widgets#type:RouteBarrierDetails", ["dart:core::Object"]) as typeof _RouteBarrierDetailsBinding & _FlaxInstanceType<RouteBarrierDetails> & _FlaxDartType<RouteBarrierDetails, readonly ["class", "flax.core/sdk_widgets#type:RouteBarrierDetails", readonly [], false]>;
