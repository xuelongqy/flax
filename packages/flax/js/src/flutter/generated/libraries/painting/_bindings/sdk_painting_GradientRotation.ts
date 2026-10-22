// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import '@flax/flutter/painting/_bindings/sdk_painting_GradientTransform';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters61, _flaxMemberParameters2, _flaxMemberParameters62 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GradientRotation extends Omit<upstream0.GradientTransform, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientRotation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> { readonly __GradientRotation: unique symbol;
readonly [_flaxDartTypeValue]: GradientRotation;

readonly radians: number;
transform(bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream3.TextDirection | null | undefined}): upstream1.Matrix4;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:GradientRotation", ["radians"], [], _flaxBindingMethods("flax.core/sdk_painting#type:GradientRotation", "object", {"transform":_flaxMemberParameters61,"toString":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_painting#type:GradientTransform");
export function _GradientRotationFactory(radians: number): GradientRotation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:GradientRotation", "", [{"name":"radians","required":true,"positional":true}], [radians], {}) as GradientRotation;
}
const _GradientRotationProxy = {type: "flax.core/sdk_painting#type:GradientRotation", parameters: _flaxMemberParameters62, constructors: {"": _flaxMemberParameters62}, methods: {"transform":_flaxMemberParameters61,"toString":_flaxMemberParameters2}, getters: ["radians"], setters: [], contextMembers: [], superMembers: ["get:radians","transform","toString"]} as const;
export interface _GradientRotationNative extends GradientRotation {
readonly [_flaxDartTypeValue]: _GradientRotationNative;

transform(bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream3.TextDirection | null | undefined}): upstream1.Matrix4;
toString(): string;
get radians(): number;
}
export abstract class _GradientRotationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GradientRotation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GradientRotation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:GradientRotation", readonly [], false];
constructor(radians: number) { super(_GradientRotationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_GradientRotationNative.prototype, _GradientRotationProxy);
export namespace _GradientRotationFactory { export function implement(args: [radians: number], implementation: {}): GradientRotation {
return constructProxy(_GradientRotationProxy, args, implementation) as GradientRotation; } }
const _GradientRotationBinding = _flaxProxyFactory(_GradientRotationFactory, _GradientRotationNative) as unknown as typeof _GradientRotationFactory & (new(radians: number) => _GradientRotationNative);
export const GradientRotation: typeof _GradientRotationBinding & _FlaxInstanceType<GradientRotation> & _FlaxDartType<GradientRotation, readonly ["class", "flax.core/sdk_painting#type:GradientRotation", readonly [], false]> = _flaxBindInstanceType<GradientRotation, typeof _GradientRotationBinding>(_GradientRotationBinding, "flax.core/sdk_painting#type:GradientRotation", ["flax.core/sdk_painting#type:GradientTransform","dart:core::Object"]) as typeof _GradientRotationBinding & _FlaxInstanceType<GradientRotation> & _FlaxDartType<GradientRotation, readonly ["class", "flax.core/sdk_painting#type:GradientRotation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "radians" | "transform" | "toString" | "__flaxBound:package:flutter/src/painting/gradient.dart::GradientRotation" | "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform";
