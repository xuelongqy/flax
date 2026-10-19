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
const _flaxMemberParameters0 = [{"name":"initialScrollOffset"},{"name":"keepScrollOffset"},{"name":"debugLabel"},{"name":"onAttach"},{"name":"onDetach"}] as const;
const _flaxMemberParameters1 = [{"name":"offset","required":true,"positional":true},{"name":"curve","required":true},{"name":"duration","required":true}] as const;
const _flaxMemberParameters2 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"position","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"physics","required":true,"positional":true},{"name":"context","required":true,"positional":true},{"name":"oldPosition","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"description","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TrackingScrollController extends Omit<upstream0.ScrollController, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ScrollController>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.ScrollController | keyof upstream1.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::TrackingScrollController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __TrackingScrollController: unique symbol;
readonly [_flaxDartTypeValue]: TrackingScrollController;

}
defineObject("flax.core/sdk_widgets#type:TrackingScrollController", ["initialScrollOffset","keepScrollOffset","onAttach","onDetach","debugLabel","positions","hasClients","position","offset","hasListeners","mostRecentlyUpdatedPosition"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TrackingScrollController", "object", {}, {}), ["removeListener"], undefined, "flax.core/flutter#type:ScrollController");
const _TrackingScrollControllerProxy = {type: "flax.core/sdk_widgets#type:TrackingScrollController", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"animateTo":_flaxMemberParameters1,"jumpTo":_flaxMemberParameters2,"attach":_flaxMemberParameters3,"detach":_flaxMemberParameters3,"dispose":_flaxMemberParameters4,"createScrollPosition":_flaxMemberParameters5,"toString":_flaxMemberParameters4,"debugFillDescription":_flaxMemberParameters6,"addListener":_flaxMemberParameters7,"removeListener":_flaxMemberParameters7}, getters: ["mostRecentlyUpdatedPosition","initialScrollOffset","keepScrollOffset","onAttach","onDetach","debugLabel","positions","hasClients","position","offset","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:mostRecentlyUpdatedPosition","get:initialScrollOffset","get:keepScrollOffset","get:onAttach","get:onDetach","get:debugLabel","get:positions","get:hasClients","get:position","get:offset","get:hasListeners","animateTo","jumpTo","attach","detach","dispose","createScrollPosition","toString","debugFillDescription","addListener","removeListener"]} as const;
export interface TrackingScrollController {
readonly [_flaxDartTypeValue]: TrackingScrollController;

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
get mostRecentlyUpdatedPosition(): upstream3.ScrollPosition | null;
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
export abstract class TrackingScrollController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TrackingScrollController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TrackingScrollController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TrackingScrollController", readonly [], false];
constructor(options?: {initialScrollOffset?: number | undefined; keepScrollOffset?: boolean | undefined; debugLabel?: string | null | undefined; onAttach?: ((position: upstream3.ScrollPosition) => void) | null | undefined; onDetach?: ((position: upstream3.ScrollPosition) => void) | null | undefined}) { super(_TrackingScrollControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TrackingScrollController.prototype, _TrackingScrollControllerProxy);
export namespace TrackingScrollController { export function implement(args: [options?: {initialScrollOffset?: number | undefined; keepScrollOffset?: boolean | undefined; debugLabel?: string | null | undefined; onAttach?: ((position: upstream3.ScrollPosition) => void) | null | undefined; onDetach?: ((position: upstream3.ScrollPosition) => void) | null | undefined}], implementation: {}): TrackingScrollController {
return constructProxy(_TrackingScrollControllerProxy, args, implementation) as TrackingScrollController; } }
_flaxBindInstanceType<TrackingScrollController, typeof TrackingScrollController>(TrackingScrollController, "flax.core/sdk_widgets#type:TrackingScrollController", ["flax.core/flutter#type:ScrollController","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "initialScrollOffset" | "keepScrollOffset" | "onAttach" | "onDetach" | "debugLabel" | "positions" | "hasClients" | "position" | "offset" | "hasListeners" | "mostRecentlyUpdatedPosition" | "animateTo" | "jumpTo" | "attach" | "detach" | "dispose" | "createScrollPosition" | "toString" | "debugFillDescription" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::TrackingScrollController" | "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
