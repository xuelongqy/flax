// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters98, _flaxMemberParameters33, _flaxMemberParameters2, _flaxMemberParameters35, _flaxMemberParameters36, _flaxMemberParameters37 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IdleScrollActivity extends Omit<upstream0.ScrollActivity, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::IdleScrollActivity": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [] }> { readonly __IdleScrollActivity: unique symbol;
readonly [_flaxDartTypeValue]: IdleScrollActivity;

}
defineObject("flax.core/sdk_widgets#type:IdleScrollActivity", ["delegate","shouldIgnorePointer","isScrolling","velocity"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:IdleScrollActivity", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollActivity");
const _IdleScrollActivityProxy = {type: "flax.core/sdk_widgets#type:IdleScrollActivity", parameters: _flaxMemberParameters98, constructors: {"": _flaxMemberParameters98}, methods: {"updateDelegate":_flaxMemberParameters33,"resetActivity":_flaxMemberParameters2,"dispatchScrollStartNotification":_flaxMemberParameters35,"dispatchScrollUpdateNotification":_flaxMemberParameters36,"dispatchOverscrollNotification":_flaxMemberParameters37,"dispatchScrollEndNotification":_flaxMemberParameters35,"applyNewDimensions":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["shouldIgnorePointer","isScrolling","velocity","delegate"], setters: [], contextMembers: [], superMembers: ["get:shouldIgnorePointer","get:isScrolling","get:velocity","get:delegate","updateDelegate","resetActivity","dispatchScrollStartNotification","dispatchScrollUpdateNotification","dispatchOverscrollNotification","dispatchScrollEndNotification","applyNewDimensions","dispose","toString"]} as const;
export interface IdleScrollActivity {
readonly [_flaxDartTypeValue]: IdleScrollActivity;

updateDelegate(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>): void;
resetActivity(): void;
dispatchScrollStartNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream3.BuildContext | null): void;
dispatchScrollUpdateNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream3.BuildContext, scrollDelta: number): void;
dispatchOverscrollNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream3.BuildContext, overscroll: number): void;
dispatchScrollEndNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream3.BuildContext): void;
applyNewDimensions(): void;
dispose(): void;
toString(): string;
get shouldIgnorePointer(): boolean;
get isScrolling(): boolean;
get velocity(): number;
get delegate(): upstream1.ScrollActivityDelegate;
}
export abstract class IdleScrollActivity extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IdleScrollActivity>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: IdleScrollActivity;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:IdleScrollActivity", readonly [], false];
constructor(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>) { super(_IdleScrollActivityProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(IdleScrollActivity.prototype, _IdleScrollActivityProxy);
export namespace IdleScrollActivity { export function implement(args: [delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>], implementation: {}): IdleScrollActivity {
return constructProxy(_IdleScrollActivityProxy, args, implementation) as IdleScrollActivity; } }
_flaxBindInstanceType<IdleScrollActivity, typeof IdleScrollActivity>(IdleScrollActivity, "flax.core/sdk_widgets#type:IdleScrollActivity", ["flax.core/sdk_widgets#type:ScrollActivity","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "shouldIgnorePointer" | "isScrolling" | "velocity" | "updateDelegate" | "resetActivity" | "dispatchScrollStartNotification" | "dispatchScrollUpdateNotification" | "dispatchOverscrollNotification" | "dispatchScrollEndNotification" | "applyNewDimensions" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::IdleScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity";
