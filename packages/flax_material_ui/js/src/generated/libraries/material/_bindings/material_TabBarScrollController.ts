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
import { _flaxMemberParameters2 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TabBarScrollController extends Omit<upstream0.ScrollController, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ScrollController>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.ScrollController | keyof upstream1.ChangeNotifier>, Readonly<{ "__flaxBound:package:material_ui/src/tabs.dart::TabBarScrollController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __TabBarScrollController: unique symbol;
readonly [_flaxDartTypeValue]: TabBarScrollController;

readonly hasListeners: boolean;
readonly initialScrollOffset: number;
readonly keepScrollOffset: boolean;
readonly onAttach: ((position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>) => void) | null;
readonly onDetach: ((position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>) => void) | null;
readonly debugLabel: string | null;
readonly positions: DartIterable<upstream3.ScrollPosition>;
readonly hasClients: boolean;
readonly position: upstream3.ScrollPosition;
readonly offset: number;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
animateTo(offset: number, options: {curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration] }>}): Promise<void>;
jumpTo(value: number): void;
attach(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): void;
detach(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): void;
createScrollPosition(physics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }>, context: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [] }>, oldPosition: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }> | null): upstream3.ScrollPosition;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
debugCheckHasTabBarState(): boolean;
}
defineObject("flax.material/material#type:TabBarScrollController", ["hasListeners","initialScrollOffset","keepScrollOffset","onAttach","onDetach","debugLabel","positions","hasClients","position","offset"], [], _flaxBindingMethods("flax.material/material#type:TabBarScrollController", "object", {"debugCheckHasTabBarState":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/flutter#type:ScrollController");
export function _TabBarScrollControllerFactory(): TabBarScrollController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:TabBarScrollController", "", _flaxMemberParameters2, [], {}) as TabBarScrollController;
}
export const TabBarScrollController: typeof _TabBarScrollControllerFactory & _FlaxInstanceType<TabBarScrollController> & _FlaxDartType<TabBarScrollController, readonly ["class", "flax.material/material#type:TabBarScrollController", readonly [], false]> = _flaxBindInstanceType<TabBarScrollController, typeof _TabBarScrollControllerFactory>(_TabBarScrollControllerFactory, "flax.material/material#type:TabBarScrollController", ["flax.core/flutter#type:ScrollController","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _TabBarScrollControllerFactory & _FlaxInstanceType<TabBarScrollController> & _FlaxDartType<TabBarScrollController, readonly ["class", "flax.material/material#type:TabBarScrollController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "initialScrollOffset" | "keepScrollOffset" | "onAttach" | "onDetach" | "debugLabel" | "positions" | "hasClients" | "position" | "offset" | "addListener" | "removeListener" | "dispose" | "animateTo" | "jumpTo" | "attach" | "detach" | "createScrollPosition" | "toString" | "debugFillDescription" | "debugCheckHasTabBarState" | "__flaxBound:package:material_ui/src/tabs.dart::TabBarScrollController" | "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
