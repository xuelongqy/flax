// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [{"name":"entry","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"transform","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HitTestResult extends Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }> { readonly __HitTestResult: unique symbol;
readonly [_flaxDartTypeValue]: HitTestResult;

}
defineObject("flax.core/sdk_gestures#type:HitTestResult", ["path"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:HitTestResult", "object", {"add":_flaxMemberParameters0,"pushTransform":_flaxMemberParameters1,"pushOffset":_flaxMemberParameters2,"popTransform":_flaxMemberParameters3,"toString":_flaxMemberParameters3}, {}), []);
const _HitTestResultProxy = {type: "flax.core/sdk_gestures#type:HitTestResult", parameters: [], constructors: {"":[]}, methods: {"add":_flaxMemberParameters0,"pushTransform":_flaxMemberParameters1,"pushOffset":_flaxMemberParameters2,"popTransform":_flaxMemberParameters3,"toString":_flaxMemberParameters3}, getters: ["path"], setters: [], contextMembers: [], superMembers: ["get:path","add","pushTransform","pushOffset","popTransform","toString"]} as const;
export interface HitTestResult {
readonly [_flaxDartTypeValue]: HitTestResult;

add(entry: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream1.HitTestTarget] }>): void;
pushTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
pushOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
popTransform(): void;
toString(): string;
get path(): DartIterable<upstream0.HitTestEntry<upstream1.HitTestTarget>>;
}
export abstract class HitTestResult extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestResult>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HitTestResult;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:HitTestResult", readonly [], false];
constructor() { super(_HitTestResultProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(HitTestResult.prototype, _HitTestResultProxy);
export namespace HitTestResult { export function implement(args: [], implementation: {}): HitTestResult {
return constructProxy(_HitTestResultProxy, args, implementation) as HitTestResult; } }
_flaxBindInstanceType<HitTestResult, typeof HitTestResult>(HitTestResult, "flax.core/sdk_gestures#type:HitTestResult", ["dart:core::Object"]);
