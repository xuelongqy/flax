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
import { _flaxMemberParameters22, _flaxMemberParameters23, _flaxMemberParameters24, _flaxMemberParameters1, _flaxMemberParameters19, _flaxMemberParameters25, _flaxMemberParameters26 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxHitTestResult extends Omit<upstream0.HitTestResult, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestResult": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }> { readonly __BoxHitTestResult: unique symbol;
readonly [_flaxDartTypeValue]: BoxHitTestResult;

}
defineObject("flax.core/sdk_rendering#type:BoxHitTestResult", ["path"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:BoxHitTestResult", "object", {"addWithPaintTransform":_flaxMemberParameters22,"addWithPaintOffset":_flaxMemberParameters23,"addWithRawTransform":_flaxMemberParameters22,"addWithOutOfBandPosition":_flaxMemberParameters24}, {}), [], undefined, "flax.core/sdk_gestures#type:HitTestResult");
const _BoxHitTestResultProxy = {type: "flax.core/sdk_rendering#type:BoxHitTestResult", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"add":_flaxMemberParameters19,"pushTransform":_flaxMemberParameters25,"pushOffset":_flaxMemberParameters26,"popTransform":_flaxMemberParameters1,"toString":_flaxMemberParameters1,"addWithPaintTransform":_flaxMemberParameters22,"addWithPaintOffset":_flaxMemberParameters23,"addWithRawTransform":_flaxMemberParameters22,"addWithOutOfBandPosition":_flaxMemberParameters24}, getters: ["path"], setters: [], contextMembers: [], superMembers: ["get:path","add","pushTransform","pushOffset","popTransform","toString","addWithPaintTransform","addWithPaintOffset","addWithRawTransform","addWithOutOfBandPosition"]} as const;
export interface BoxHitTestResult {
readonly [_flaxDartTypeValue]: BoxHitTestResult;

add(entry: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream2.HitTestTarget] }>): void;
pushTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
pushOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
popTransform(): void;
toString(): string;
addWithPaintTransform(options: {transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null; position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean)}): boolean;
addWithPaintOffset(options: {offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null; position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean)}): boolean;
addWithRawTransform(options: {transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null; position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean)}): boolean;
addWithOutOfBandPosition(options: {paintOffset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; paintTransform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined; rawTransform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined; hitTest: ((result: BoxHitTestResult) => boolean)}): boolean;
get path(): DartIterable<upstream1.HitTestEntry<upstream2.HitTestTarget>>;
}
export abstract class BoxHitTestResult extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxHitTestResult>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BoxHitTestResult;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:BoxHitTestResult", readonly [], false];
constructor() { super(_BoxHitTestResultProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BoxHitTestResult.prototype, _BoxHitTestResultProxy);
export namespace BoxHitTestResult { export function implement(args: [], implementation: {}): BoxHitTestResult {
return constructProxy(_BoxHitTestResultProxy, args, implementation) as BoxHitTestResult; } }
_flaxBindInstanceType<BoxHitTestResult, typeof BoxHitTestResult>(BoxHitTestResult, "flax.core/sdk_rendering#type:BoxHitTestResult", ["flax.core/sdk_gestures#type:HitTestResult","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "add" | "pushTransform" | "pushOffset" | "popTransform" | "toString" | "addWithPaintTransform" | "addWithPaintOffset" | "addWithRawTransform" | "addWithOutOfBandPosition" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestResult" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult";
