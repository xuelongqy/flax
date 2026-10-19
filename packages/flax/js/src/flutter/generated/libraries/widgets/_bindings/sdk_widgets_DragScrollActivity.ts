// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollDragController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollDragController';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [{"name":"delegate","required":true,"positional":true},{"name":"controller","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"metrics","required":true,"positional":true},{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters4 = [{"name":"metrics","required":true,"positional":true},{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"scrollDelta","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"metrics","required":true,"positional":true},{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"overscroll","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DragScrollActivity extends Omit<upstream0.ScrollActivity, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::DragScrollActivity": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [] }> { readonly __DragScrollActivity: unique symbol;
readonly [_flaxDartTypeValue]: DragScrollActivity;

}
defineObject("flax.core/sdk_widgets#type:DragScrollActivity", ["delegate","shouldIgnorePointer","isScrolling","velocity"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DragScrollActivity", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollActivity");
const _DragScrollActivityProxy = {type: "flax.core/sdk_widgets#type:DragScrollActivity", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"updateDelegate":_flaxMemberParameters1,"resetActivity":_flaxMemberParameters2,"dispatchScrollStartNotification":_flaxMemberParameters3,"dispatchScrollUpdateNotification":_flaxMemberParameters4,"dispatchOverscrollNotification":_flaxMemberParameters5,"dispatchScrollEndNotification":_flaxMemberParameters3,"applyNewDimensions":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["shouldIgnorePointer","isScrolling","velocity","delegate"], setters: [], contextMembers: [], superMembers: ["get:shouldIgnorePointer","get:isScrolling","get:velocity","get:delegate","updateDelegate","resetActivity","dispatchScrollStartNotification","dispatchScrollUpdateNotification","dispatchOverscrollNotification","dispatchScrollEndNotification","applyNewDimensions","dispose","toString"]} as const;
export interface DragScrollActivity {
readonly [_flaxDartTypeValue]: DragScrollActivity;

updateDelegate(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>): void;
resetActivity(): void;
dispatchScrollStartNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext | null): void;
dispatchScrollUpdateNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext, scrollDelta: number): void;
dispatchOverscrollNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext, overscroll: number): void;
dispatchScrollEndNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext): void;
applyNewDimensions(): void;
dispose(): void;
toString(): string;
get shouldIgnorePointer(): boolean;
get isScrolling(): boolean;
get velocity(): number;
get delegate(): upstream1.ScrollActivityDelegate;
}
export abstract class DragScrollActivity extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DragScrollActivity>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DragScrollActivity;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DragScrollActivity", readonly [], false];
constructor(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>, controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [] }>) { super(_DragScrollActivityProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DragScrollActivity.prototype, _DragScrollActivityProxy);
export namespace DragScrollActivity { export function implement(args: [delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>, controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [] }>], implementation: {}): DragScrollActivity {
return constructProxy(_DragScrollActivityProxy, args, implementation) as DragScrollActivity; } }
_flaxBindInstanceType<DragScrollActivity, typeof DragScrollActivity>(DragScrollActivity, "flax.core/sdk_widgets#type:DragScrollActivity", ["flax.core/sdk_widgets#type:ScrollActivity","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "shouldIgnorePointer" | "isScrolling" | "velocity" | "updateDelegate" | "resetActivity" | "dispatchScrollStartNotification" | "dispatchScrollUpdateNotification" | "dispatchOverscrollNotification" | "dispatchScrollEndNotification" | "applyNewDimensions" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::DragScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity";
