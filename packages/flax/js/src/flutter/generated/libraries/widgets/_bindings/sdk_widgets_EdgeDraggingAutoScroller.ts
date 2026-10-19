// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Scrollable';
import { _flaxMemberParameters121, _flaxMemberParameters2, _flaxMemberParameters122 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EdgeDraggingAutoScroller extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::EdgeDraggingAutoScroller": readonly [] }> { readonly __EdgeDraggingAutoScroller: unique symbol;
readonly [_flaxDartTypeValue]: EdgeDraggingAutoScroller;

}
defineObject("flax.core/sdk_widgets#type:EdgeDraggingAutoScroller", ["scrollable","onScrollViewScrolled","velocityScalar","scrolling"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:EdgeDraggingAutoScroller", "object", {"startAutoScrollIfNecessary":_flaxMemberParameters121,"stopAutoScroll":_flaxMemberParameters2}, {}), []);
const _EdgeDraggingAutoScrollerProxy = {type: "flax.core/sdk_widgets#type:EdgeDraggingAutoScroller", parameters: _flaxMemberParameters122, constructors: {"": _flaxMemberParameters122}, methods: {"startAutoScrollIfNecessary":_flaxMemberParameters121,"stopAutoScroll":_flaxMemberParameters2}, getters: ["scrollable","onScrollViewScrolled","velocityScalar","scrolling"], setters: [], contextMembers: [], superMembers: ["get:scrollable","get:onScrollViewScrolled","get:velocityScalar","get:scrolling","startAutoScrollIfNecessary","stopAutoScroll"]} as const;
export interface EdgeDraggingAutoScroller {
readonly [_flaxDartTypeValue]: EdgeDraggingAutoScroller;

startAutoScrollIfNecessary(dragTarget: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): void;
stopAutoScroll(): void;
get scrollable(): upstream0.ScrollableState;
get onScrollViewScrolled(): (() => void) | null;
get velocityScalar(): number;
get scrolling(): boolean;
}
export abstract class EdgeDraggingAutoScroller extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<EdgeDraggingAutoScroller>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: EdgeDraggingAutoScroller;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:EdgeDraggingAutoScroller", readonly [], false];
constructor(scrollable: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable.dart::ScrollableState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream2.Scrollable] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream2.Scrollable] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream2.Scrollable] }>, options: {onScrollViewScrolled?: (() => void) | null | undefined; velocityScalar: number}) { super(_EdgeDraggingAutoScrollerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(EdgeDraggingAutoScroller.prototype, _EdgeDraggingAutoScrollerProxy);
export namespace EdgeDraggingAutoScroller { export function implement(args: [scrollable: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable.dart::ScrollableState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream2.Scrollable] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream2.Scrollable] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream2.Scrollable] }>, options: {onScrollViewScrolled?: (() => void) | null | undefined; velocityScalar: number}], implementation: {}): EdgeDraggingAutoScroller {
return constructProxy(_EdgeDraggingAutoScrollerProxy, args, implementation) as EdgeDraggingAutoScroller; } }
_flaxBindInstanceType<EdgeDraggingAutoScroller, typeof EdgeDraggingAutoScroller>(EdgeDraggingAutoScroller, "flax.core/sdk_widgets#type:EdgeDraggingAutoScroller", ["dart:core::Object"]);
