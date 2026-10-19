// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters114, _flaxMemberParameters115, _flaxMemberParameters116, _flaxMemberParameters2, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DraggableScrollableController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/draggable_scrollable_sheet.dart::DraggableScrollableController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __DraggableScrollableController: unique symbol;
readonly [_flaxDartTypeValue]: DraggableScrollableController;

}
defineObject("flax.core/sdk_widgets#type:DraggableScrollableController", ["hasListeners","size","pixels","isAttached"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DraggableScrollableController", "object", {"sizeToPixels":_flaxMemberParameters114,"pixelsToSize":_flaxMemberParameters115,"animateTo":_flaxMemberParameters116,"jumpTo":_flaxMemberParameters114,"reset":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _DraggableScrollableControllerProxy = {type: "flax.core/sdk_widgets#type:DraggableScrollableController", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"sizeToPixels":_flaxMemberParameters114,"pixelsToSize":_flaxMemberParameters115,"animateTo":_flaxMemberParameters116,"jumpTo":_flaxMemberParameters114,"reset":_flaxMemberParameters2}, getters: ["size","pixels","isAttached","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:size","get:pixels","get:isAttached","get:hasListeners","addListener","removeListener","dispose","sizeToPixels","pixelsToSize","animateTo","jumpTo","reset"]} as const;
export interface DraggableScrollableController {
readonly [_flaxDartTypeValue]: DraggableScrollableController;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
sizeToPixels(size: number): number;
pixelsToSize(pixels: number): number;
animateTo(size: number, options: {duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }>; curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>}): Promise<void>;
jumpTo(size: number): void;
reset(): void;
get size(): number;
get pixels(): number;
get isAttached(): boolean;
get hasListeners(): boolean;
}
export abstract class DraggableScrollableController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DraggableScrollableController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DraggableScrollableController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DraggableScrollableController", readonly [], false];
constructor() { super(_DraggableScrollableControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DraggableScrollableController.prototype, _DraggableScrollableControllerProxy);
export namespace DraggableScrollableController { export function implement(args: [], implementation: {}): DraggableScrollableController {
return constructProxy(_DraggableScrollableControllerProxy, args, implementation) as DraggableScrollableController; } }
_flaxBindInstanceType<DraggableScrollableController, typeof DraggableScrollableController>(DraggableScrollableController, "flax.core/sdk_widgets#type:DraggableScrollableController", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "size" | "pixels" | "isAttached" | "addListener" | "removeListener" | "dispose" | "sizeToPixels" | "pixelsToSize" | "animateTo" | "jumpTo" | "reset" | "__flaxBound:package:flutter/src/widgets/draggable_scrollable_sheet.dart::DraggableScrollableController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
