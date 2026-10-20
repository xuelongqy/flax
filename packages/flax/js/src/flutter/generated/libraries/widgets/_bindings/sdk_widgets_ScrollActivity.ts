// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters33, _flaxMemberParameters2, _flaxMemberParameters35, _flaxMemberParameters36, _flaxMemberParameters37, _flaxMemberParameters333 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollActivity extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [] }> { readonly __ScrollActivity: unique symbol;
readonly [_flaxDartTypeValue]: ScrollActivity;

}
defineObject("flax.core/sdk_widgets#type:ScrollActivity", ["delegate","shouldIgnorePointer","isScrolling","velocity"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollActivity", "object", {"updateDelegate":_flaxMemberParameters33,"resetActivity":_flaxMemberParameters2,"dispatchScrollStartNotification":_flaxMemberParameters35,"dispatchScrollUpdateNotification":_flaxMemberParameters36,"dispatchOverscrollNotification":_flaxMemberParameters37,"dispatchScrollEndNotification":_flaxMemberParameters35,"applyNewDimensions":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, {}), []);
const _ScrollActivityProxy = {type: "flax.core/sdk_widgets#type:ScrollActivity", parameters: _flaxMemberParameters333, constructors: {"": _flaxMemberParameters333}, methods: {"updateDelegate":_flaxMemberParameters33,"resetActivity":_flaxMemberParameters2,"dispatchScrollStartNotification":_flaxMemberParameters35,"dispatchScrollUpdateNotification":_flaxMemberParameters36,"dispatchOverscrollNotification":_flaxMemberParameters37,"dispatchScrollEndNotification":_flaxMemberParameters35,"applyNewDimensions":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["delegate","shouldIgnorePointer","isScrolling","velocity"], setters: [], contextMembers: [], superMembers: ["get:delegate","updateDelegate","resetActivity","dispatchScrollStartNotification","dispatchScrollUpdateNotification","dispatchOverscrollNotification","dispatchScrollEndNotification","applyNewDimensions","dispose","toString"]} as const;
export interface ScrollActivity {
readonly [_flaxDartTypeValue]: ScrollActivity;

updateDelegate(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>): void;
resetActivity(): void;
dispatchScrollStartNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream2.BuildContext | null): void;
dispatchScrollUpdateNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream2.BuildContext, scrollDelta: number): void;
dispatchOverscrollNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream2.BuildContext, overscroll: number): void;
dispatchScrollEndNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream2.BuildContext): void;
applyNewDimensions(): void;
dispose(): void;
toString(): string;
get delegate(): upstream0.ScrollActivityDelegate;
}
export abstract class ScrollActivity extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollActivity>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollActivity;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollActivity", readonly [], false];
constructor(_delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>) { super(_ScrollActivityProxy, Array.from(arguments)); }
abstract get shouldIgnorePointer(): boolean;
abstract get isScrolling(): boolean;
abstract get velocity(): number;
}
_flaxDefineProxyBase(ScrollActivity.prototype, _ScrollActivityProxy);
export namespace ScrollActivity { export function implement(args: [_delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>], implementation: {get shouldIgnorePointer(): boolean; get isScrolling(): boolean; get velocity(): number}): ScrollActivity {
return constructProxy(_ScrollActivityProxy, args, implementation) as ScrollActivity; } }
_flaxBindInstanceType<ScrollActivity, typeof ScrollActivity>(ScrollActivity, "flax.core/sdk_widgets#type:ScrollActivity", ["dart:core::Object"]);
