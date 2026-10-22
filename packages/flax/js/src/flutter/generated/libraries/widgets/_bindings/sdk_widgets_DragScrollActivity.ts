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
import { _flaxMemberParameters101, _flaxMemberParameters38, _flaxMemberParameters2, _flaxMemberParameters40, _flaxMemberParameters41, _flaxMemberParameters42 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DragScrollActivity extends Omit<upstream0.ScrollActivity, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::DragScrollActivity": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [] }> { readonly __DragScrollActivity: unique symbol;
readonly [_flaxDartTypeValue]: DragScrollActivity;

readonly delegate: upstream1.ScrollActivityDelegate;
readonly shouldIgnorePointer: boolean;
readonly isScrolling: boolean;
readonly velocity: number;
updateDelegate(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>): void;
resetActivity(): void;
dispatchScrollStartNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext | null): void;
dispatchScrollUpdateNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext, scrollDelta: number): void;
dispatchOverscrollNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext, overscroll: number): void;
dispatchScrollEndNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext): void;
applyNewDimensions(): void;
dispose(): void;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:DragScrollActivity", ["delegate","shouldIgnorePointer","isScrolling","velocity"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DragScrollActivity", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollActivity");
export function _DragScrollActivityFactory(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>, controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [] }>): DragScrollActivity {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:DragScrollActivity", "", [{"name":"delegate","required":true,"positional":true},{"name":"controller","required":true,"positional":true}], [delegate, controller], {}) as DragScrollActivity;
}
const _DragScrollActivityProxy = {type: "flax.core/sdk_widgets#type:DragScrollActivity", parameters: _flaxMemberParameters101, constructors: {"": _flaxMemberParameters101}, methods: {"updateDelegate":_flaxMemberParameters38,"resetActivity":_flaxMemberParameters2,"dispatchScrollStartNotification":_flaxMemberParameters40,"dispatchScrollUpdateNotification":_flaxMemberParameters41,"dispatchOverscrollNotification":_flaxMemberParameters42,"dispatchScrollEndNotification":_flaxMemberParameters40,"applyNewDimensions":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["shouldIgnorePointer","isScrolling","velocity","delegate"], setters: [], contextMembers: [], superMembers: ["get:shouldIgnorePointer","get:isScrolling","get:velocity","get:delegate","updateDelegate","resetActivity","dispatchScrollStartNotification","dispatchScrollUpdateNotification","dispatchOverscrollNotification","dispatchScrollEndNotification","applyNewDimensions","dispose","toString"]} as const;
export interface _DragScrollActivityNative extends DragScrollActivity {
readonly [_flaxDartTypeValue]: _DragScrollActivityNative;

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
export abstract class _DragScrollActivityNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DragScrollActivity>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DragScrollActivity;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DragScrollActivity", readonly [], false];
constructor(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>, controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [] }>) { super(_DragScrollActivityProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DragScrollActivityNative.prototype, _DragScrollActivityProxy);
export namespace _DragScrollActivityFactory { export function implement(args: [delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>, controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [] }>], implementation: {}): DragScrollActivity {
return constructProxy(_DragScrollActivityProxy, args, implementation) as DragScrollActivity; } }
const _DragScrollActivityBinding = _flaxProxyFactory(_DragScrollActivityFactory, _DragScrollActivityNative) as unknown as typeof _DragScrollActivityFactory & (new(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>, controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [] }>) => _DragScrollActivityNative);
export const DragScrollActivity: typeof _DragScrollActivityBinding & _FlaxInstanceType<DragScrollActivity> & _FlaxDartType<DragScrollActivity, readonly ["class", "flax.core/sdk_widgets#type:DragScrollActivity", readonly [], false]> = _flaxBindInstanceType<DragScrollActivity, typeof _DragScrollActivityBinding>(_DragScrollActivityBinding, "flax.core/sdk_widgets#type:DragScrollActivity", ["flax.core/sdk_widgets#type:ScrollActivity","dart:core::Object"]) as typeof _DragScrollActivityBinding & _FlaxInstanceType<DragScrollActivity> & _FlaxDartType<DragScrollActivity, readonly ["class", "flax.core/sdk_widgets#type:DragScrollActivity", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "shouldIgnorePointer" | "isScrolling" | "velocity" | "updateDelegate" | "resetActivity" | "dispatchScrollStartNotification" | "dispatchScrollUpdateNotification" | "dispatchOverscrollNotification" | "dispatchScrollEndNotification" | "applyNewDimensions" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::DragScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity";
