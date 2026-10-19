// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
const _flaxMemberParameters0 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"position"},{"name":"size"}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformViewController extends Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewController": readonly [] }> { readonly __PlatformViewController: unique symbol;
readonly [_flaxDartTypeValue]: PlatformViewController;

}
defineObject("flax.core/sdk_services#type:PlatformViewController", ["viewId","awaitingCreation"], [], _flaxBindingMethods("flax.core/sdk_services#type:PlatformViewController", "object", {"dispatchPointerEvent":_flaxMemberParameters0,"create":_flaxMemberParameters1,"dispose":_flaxMemberParameters2,"clearFocus":_flaxMemberParameters2}, {}), []);
const _PlatformViewControllerProxy = {type: "flax.core/sdk_services#type:PlatformViewController", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"dispatchPointerEvent":_flaxMemberParameters0,"create":_flaxMemberParameters1,"dispose":_flaxMemberParameters2,"clearFocus":_flaxMemberParameters2}, getters: ["viewId","awaitingCreation"], setters: [], contextMembers: [], superMembers: ["get:awaitingCreation","create"]} as const;
export interface PlatformViewController {
readonly [_flaxDartTypeValue]: PlatformViewController;

create(options?: {size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}): Promise<void>;
get awaitingCreation(): boolean;
}
export abstract class PlatformViewController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformViewController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlatformViewController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:PlatformViewController", readonly [], false];
constructor() { super(_PlatformViewControllerProxy, Array.from(arguments)); }
abstract dispatchPointerEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): Promise<void>;
abstract dispose(): Promise<void>;
abstract clearFocus(): Promise<void>;
abstract get viewId(): number;
}
_flaxDefineProxyBase(PlatformViewController.prototype, _PlatformViewControllerProxy);
export namespace PlatformViewController { export function implement(args: [], implementation: {dispatchPointerEvent: ((event: upstream0.PointerEvent) => Promise<void>); dispose: (() => Promise<void>); clearFocus: (() => Promise<void>); get viewId(): number}): PlatformViewController {
return constructProxy(_PlatformViewControllerProxy, args, implementation) as PlatformViewController; } }
_flaxBindInstanceType<PlatformViewController, typeof PlatformViewController>(PlatformViewController, "flax.core/sdk_services#type:PlatformViewController", ["dart:core::Object"]);
