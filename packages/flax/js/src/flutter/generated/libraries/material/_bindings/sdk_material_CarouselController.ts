// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPosition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPosition';
import type * as upstream4 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollContext';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollContext';
import { _flaxMemberParameters45, _flaxMemberParameters46, _flaxMemberParameters47, _flaxMemberParameters48, _flaxMemberParameters49, _flaxMemberParameters2, _flaxMemberParameters50, _flaxMemberParameters51, _flaxMemberParameters52 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CarouselController extends Omit<upstream0.ScrollController, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ScrollController>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.ScrollController | keyof upstream1.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/material/carousel.dart::CarouselController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __CarouselController: unique symbol;
readonly [_flaxDartTypeValue]: CarouselController;

}
defineObject("flax.core/sdk_material#type:CarouselController", ["initialScrollOffset","keepScrollOffset","onAttach","onDetach","debugLabel","positions","hasClients","position","offset","hasListeners","initialItem","leadingItem"], [], _flaxBindingMethods("flax.core/sdk_material#type:CarouselController", "object", {"animateToItem":_flaxMemberParameters45}, {}), ["removeListener"], undefined, "flax.core/flutter#type:ScrollController");
const _CarouselControllerProxy = {type: "flax.core/sdk_material#type:CarouselController", parameters: _flaxMemberParameters46, constructors: {"": _flaxMemberParameters46}, methods: {"animateTo":_flaxMemberParameters47,"jumpTo":_flaxMemberParameters48,"attach":_flaxMemberParameters49,"detach":_flaxMemberParameters49,"dispose":_flaxMemberParameters2,"createScrollPosition":_flaxMemberParameters50,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters51,"addListener":_flaxMemberParameters52,"removeListener":_flaxMemberParameters52,"animateToItem":_flaxMemberParameters45}, getters: ["initialItem","leadingItem","initialScrollOffset","keepScrollOffset","onAttach","onDetach","debugLabel","positions","hasClients","position","offset","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:initialItem","get:leadingItem","get:initialScrollOffset","get:keepScrollOffset","get:onAttach","get:onDetach","get:debugLabel","get:positions","get:hasClients","get:position","get:offset","get:hasListeners","animateTo","jumpTo","attach","detach","dispose","createScrollPosition","toString","debugFillDescription","addListener","removeListener","animateToItem"]} as const;
export interface CarouselController {
readonly [_flaxDartTypeValue]: CarouselController;

animateTo(offset: number, options: {duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration] }>; curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>}): Promise<void>;
jumpTo(value: number): void;
attach(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): void;
detach(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): void;
dispose(): void;
createScrollPosition(physics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }>, context: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [] }>, oldPosition: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }> | null): upstream3.ScrollPosition;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
animateToItem(index: number, options?: {duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration] }> | undefined; curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined}): Promise<void>;
get initialItem(): number;
get leadingItem(): number;
get initialScrollOffset(): number;
get keepScrollOffset(): boolean;
get onAttach(): ((position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>) => void) | null;
get onDetach(): ((position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>) => void) | null;
get debugLabel(): string | null;
get positions(): DartIterable<upstream3.ScrollPosition>;
get hasClients(): boolean;
get position(): upstream3.ScrollPosition;
get offset(): number;
get hasListeners(): boolean;
}
export abstract class CarouselController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CarouselController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CarouselController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:CarouselController", readonly [], false];
constructor(options?: {initialItem?: number | undefined}) { super(_CarouselControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CarouselController.prototype, _CarouselControllerProxy);
export namespace CarouselController { export function implement(args: [options?: {initialItem?: number | undefined}], implementation: {}): CarouselController {
return constructProxy(_CarouselControllerProxy, args, implementation) as CarouselController; } }
_flaxBindInstanceType<CarouselController, typeof CarouselController>(CarouselController, "flax.core/sdk_material#type:CarouselController", ["flax.core/flutter#type:ScrollController","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "initialScrollOffset" | "keepScrollOffset" | "onAttach" | "onDetach" | "debugLabel" | "positions" | "hasClients" | "position" | "offset" | "hasListeners" | "initialItem" | "leadingItem" | "animateTo" | "jumpTo" | "attach" | "detach" | "dispose" | "createScrollPosition" | "toString" | "debugFillDescription" | "addListener" | "removeListener" | "animateToItem" | "__flaxBound:package:flutter/src/material/carousel.dart::CarouselController" | "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
