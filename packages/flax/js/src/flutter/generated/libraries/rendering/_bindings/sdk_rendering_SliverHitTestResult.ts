// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [{"name":"crossAxisOffset","required":true,"positional":false},{"name":"crossAxisPosition","required":true,"positional":false},{"name":"hitTest","required":true,"positional":false},{"name":"mainAxisOffset","required":true,"positional":false},{"name":"mainAxisPosition","required":true,"positional":false},{"name":"paintOffset","required":true,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"entry","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"transform","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverHitTestResult extends Omit<upstream0.HitTestResult, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestResult": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }> { readonly __SliverHitTestResult: unique symbol;
readonly [_flaxDartTypeValue]: SliverHitTestResult;

}
defineObject("flax.core/sdk_rendering#type:SliverHitTestResult", ["path"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverHitTestResult", "object", {"addWithAxisOffset":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_gestures#type:HitTestResult");
const _SliverHitTestResultProxy = {type: "flax.core/sdk_rendering#type:SliverHitTestResult", parameters: [], constructors: {"":[]}, methods: {"add":_flaxMemberParameters1,"pushTransform":_flaxMemberParameters2,"pushOffset":_flaxMemberParameters3,"popTransform":_flaxMemberParameters4,"toString":_flaxMemberParameters4,"addWithAxisOffset":_flaxMemberParameters0}, getters: ["path"], setters: [], contextMembers: [], superMembers: ["get:path","add","pushTransform","pushOffset","popTransform","toString","addWithAxisOffset"]} as const;
export interface SliverHitTestResult {
readonly [_flaxDartTypeValue]: SliverHitTestResult;

add(entry: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream2.HitTestTarget] }>): void;
pushTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
pushOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
popTransform(): void;
toString(): string;
addWithAxisOffset(options: {paintOffset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null; mainAxisOffset: number; crossAxisOffset: number; mainAxisPosition: number; crossAxisPosition: number; hitTest: ((result: SliverHitTestResult, options: { crossAxisPosition: number; mainAxisPosition: number }) => boolean)}): boolean;
get path(): DartIterable<upstream1.HitTestEntry<upstream2.HitTestTarget>>;
}
export abstract class SliverHitTestResult extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverHitTestResult>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverHitTestResult;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestResult", readonly [], false];
constructor() { super(_SliverHitTestResultProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverHitTestResult.prototype, _SliverHitTestResultProxy);
export namespace SliverHitTestResult { export function implement(args: [], implementation: {}): SliverHitTestResult {
return constructProxy(_SliverHitTestResultProxy, args, implementation) as SliverHitTestResult; } }
_flaxBindInstanceType<SliverHitTestResult, typeof SliverHitTestResult>(SliverHitTestResult, "flax.core/sdk_rendering#type:SliverHitTestResult", ["flax.core/sdk_gestures#type:HitTestResult","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "add" | "pushTransform" | "pushOffset" | "popTransform" | "toString" | "addWithAxisOffset" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestResult" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult";
