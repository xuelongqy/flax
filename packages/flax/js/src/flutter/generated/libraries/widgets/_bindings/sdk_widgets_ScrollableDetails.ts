// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
const _flaxMemberParameters0 = [{"name":"controller"},{"name":"decorationClipBehavior"},{"name":"direction"},{"name":"physics"}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"direction","required":true},{"name":"controller"},{"name":"physics"},{"name":"clipBehavior"},{"name":"decorationClipBehavior"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollableDetails extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [] }> { readonly __ScrollableDetails: unique symbol;
readonly [_flaxDartTypeValue]: ScrollableDetails;

}
defineObject("flax.core/sdk_widgets#type:ScrollableDetails", ["direction","controller","physics","decorationClipBehavior","clipBehavior"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollableDetails", "object", {"copyWith":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, {}), []);
const _ScrollableDetailsProxy = {type: "flax.core/sdk_widgets#type:ScrollableDetails", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"copyWith":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, getters: ["direction","controller","physics","decorationClipBehavior","clipBehavior"], setters: [], contextMembers: [], superMembers: ["get:direction","get:controller","get:physics","get:decorationClipBehavior","get:clipBehavior","copyWith","toString"]} as const;
export interface ScrollableDetails {
readonly [_flaxDartTypeValue]: ScrollableDetails;

copyWith(options?: {direction?: upstream0.AxisDirection | null | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; decorationClipBehavior?: upstream3.Clip | null | undefined}): ScrollableDetails;
toString(): string;
get direction(): upstream0.AxisDirection;
get controller(): upstream1.ScrollController | null;
get physics(): upstream2.ScrollPhysics | null;
get decorationClipBehavior(): upstream3.Clip | null;
get clipBehavior(): upstream3.Clip | null;
}
export abstract class ScrollableDetails extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollableDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollableDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollableDetails", readonly [], false];
constructor(options: {direction: upstream0.AxisDirection; controller?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; clipBehavior?: upstream3.Clip | null | undefined; decorationClipBehavior?: upstream3.Clip | null | undefined}) { super(_ScrollableDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScrollableDetails.prototype, _ScrollableDetailsProxy);
export namespace ScrollableDetails { export function implement(args: [options: {direction: upstream0.AxisDirection; controller?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; clipBehavior?: upstream3.Clip | null | undefined; decorationClipBehavior?: upstream3.Clip | null | undefined}], implementation: {}): ScrollableDetails {
return constructProxy(_ScrollableDetailsProxy, args, implementation) as ScrollableDetails; } }
_flaxBindInstanceType<ScrollableDetails, typeof ScrollableDetails>(ScrollableDetails, "flax.core/sdk_widgets#type:ScrollableDetails", ["dart:core::Object"]);
