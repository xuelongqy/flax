// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSemanticsGestureHandler';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSemanticsGestureHandler';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
const _flaxMemberParameters0 = [{"name":"renderObject","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsGestureDelegate extends Readonly<{ "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::SemanticsGestureDelegate": readonly [] }> { readonly __SemanticsGestureDelegate: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsGestureDelegate;

}
defineObject("flax.core/sdk_widgets#type:SemanticsGestureDelegate", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SemanticsGestureDelegate", "object", {"assignSemantics":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, {}), []);
const _SemanticsGestureDelegateProxy = {type: "flax.core/sdk_widgets#type:SemanticsGestureDelegate", parameters: [], constructors: {"":[]}, methods: {"assignSemantics":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: [], superMembers: ["toString"]} as const;
export interface SemanticsGestureDelegate {
readonly [_flaxDartTypeValue]: SemanticsGestureDelegate;

toString(): string;
}
export abstract class SemanticsGestureDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsGestureDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SemanticsGestureDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SemanticsGestureDelegate", readonly [], false];
constructor() { super(_SemanticsGestureDelegateProxy, Array.from(arguments)); }
abstract assignSemantics(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderSemanticsGestureHandler": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBoxWithHitTestBehavior": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [upstream1.RenderBox] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBoxMixin": readonly [upstream1.RenderBox] }>): void;
}
_flaxDefineProxyBase(SemanticsGestureDelegate.prototype, _SemanticsGestureDelegateProxy);
export namespace SemanticsGestureDelegate { export function implement(args: [], implementation: {assignSemantics: ((renderObject: upstream0.RenderSemanticsGestureHandler) => void)}): SemanticsGestureDelegate {
return constructProxy(_SemanticsGestureDelegateProxy, args, implementation) as SemanticsGestureDelegate; } }
_flaxBindInstanceType<SemanticsGestureDelegate, typeof SemanticsGestureDelegate>(SemanticsGestureDelegate, "flax.core/sdk_widgets#type:SemanticsGestureDelegate", ["dart:core::Object"]);
