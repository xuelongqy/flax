// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollHoldController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollHoldController';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"metrics","required":true,"positional":true},{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters3 = [{"name":"metrics","required":true,"positional":true},{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"scrollDelta","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"metrics","required":true,"positional":true},{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"overscroll","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HoldScrollActivity extends Omit<upstream0.ScrollActivity, _flaxOwnMembers0>, Omit<upstream1.ScrollHoldController, _flaxOwnMembers0 | keyof upstream0.ScrollActivity>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::HoldScrollActivity": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollHoldController": readonly [] }> { readonly __HoldScrollActivity: unique symbol;
readonly [_flaxDartTypeValue]: HoldScrollActivity;

}
defineObject("flax.core/sdk_widgets#type:HoldScrollActivity", ["delegate","shouldIgnorePointer","isScrolling","velocity","onHoldCanceled"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:HoldScrollActivity", "object", {"cancel":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollActivity");
const _HoldScrollActivityProxy = {type: "flax.core/sdk_widgets#type:HoldScrollActivity", parameters: [{"name":"delegate","required":true,"positional":false},{"name":"onHoldCanceled","required":false,"positional":false}], constructors: {"":[{"name":"delegate","required":true,"positional":false},{"name":"onHoldCanceled","required":false,"positional":false}]}, methods: {"updateDelegate":_flaxMemberParameters1,"resetActivity":_flaxMemberParameters0,"dispatchScrollStartNotification":_flaxMemberParameters2,"dispatchScrollUpdateNotification":_flaxMemberParameters3,"dispatchOverscrollNotification":_flaxMemberParameters4,"dispatchScrollEndNotification":_flaxMemberParameters2,"applyNewDimensions":_flaxMemberParameters0,"dispose":_flaxMemberParameters0,"toString":_flaxMemberParameters0,"cancel":_flaxMemberParameters0}, getters: ["onHoldCanceled","shouldIgnorePointer","isScrolling","velocity","delegate"], setters: [], contextMembers: [], superMembers: ["get:onHoldCanceled","get:shouldIgnorePointer","get:isScrolling","get:velocity","get:delegate","updateDelegate","resetActivity","dispatchScrollStartNotification","dispatchScrollUpdateNotification","dispatchOverscrollNotification","dispatchScrollEndNotification","applyNewDimensions","dispose","toString","cancel"]} as const;
export interface HoldScrollActivity {
readonly [_flaxDartTypeValue]: HoldScrollActivity;

updateDelegate(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>): void;
resetActivity(): void;
dispatchScrollStartNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext | null): void;
dispatchScrollUpdateNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext, scrollDelta: number): void;
dispatchOverscrollNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext, overscroll: number): void;
dispatchScrollEndNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext): void;
applyNewDimensions(): void;
dispose(): void;
toString(): string;
cancel(): void;
get onHoldCanceled(): (() => void) | null;
get shouldIgnorePointer(): boolean;
get isScrolling(): boolean;
get velocity(): number;
get delegate(): upstream2.ScrollActivityDelegate;
}
export abstract class HoldScrollActivity extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HoldScrollActivity>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HoldScrollActivity;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:HoldScrollActivity", readonly [], false];
constructor(options: {delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>; onHoldCanceled?: (() => void) | null | undefined}) { super(_HoldScrollActivityProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(HoldScrollActivity.prototype, _HoldScrollActivityProxy);
export namespace HoldScrollActivity { export function implement(args: [options: {delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>; onHoldCanceled?: (() => void) | null | undefined}], implementation: {}): HoldScrollActivity {
return constructProxy(_HoldScrollActivityProxy, args, implementation) as HoldScrollActivity; } }
_flaxBindInstanceType<HoldScrollActivity, typeof HoldScrollActivity>(HoldScrollActivity, "flax.core/sdk_widgets#type:HoldScrollActivity", ["flax.core/sdk_widgets#type:ScrollActivity","dart:core::Object","flax.core/sdk_widgets#type:ScrollHoldController"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "shouldIgnorePointer" | "isScrolling" | "velocity" | "onHoldCanceled" | "updateDelegate" | "resetActivity" | "dispatchScrollStartNotification" | "dispatchScrollUpdateNotification" | "dispatchOverscrollNotification" | "dispatchScrollEndNotification" | "applyNewDimensions" | "dispose" | "toString" | "cancel" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::HoldScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollHoldController";
