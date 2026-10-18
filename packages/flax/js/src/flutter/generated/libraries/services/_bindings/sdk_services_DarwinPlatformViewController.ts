// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
const _flaxMemberParameters0 = [{"name":"layoutDirection","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DarwinPlatformViewController extends Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::DarwinPlatformViewController": readonly [] }> { readonly __DarwinPlatformViewController: unique symbol;
readonly [_flaxDartTypeValue]: DarwinPlatformViewController;

}
defineObject("flax.core/sdk_services#type:DarwinPlatformViewController", ["id"], [], _flaxBindingMethods("flax.core/sdk_services#type:DarwinPlatformViewController", "object", {"setLayoutDirection":_flaxMemberParameters0,"acceptGesture":_flaxMemberParameters1,"rejectGesture":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}, {}), []);
const _DarwinPlatformViewControllerProxy = {type: "flax.core/sdk_services#type:DarwinPlatformViewController", parameters: [{"name":"id","required":true,"positional":true},{"name":"layoutDirection","required":true,"positional":true}], constructors: {"":[{"name":"id","required":true,"positional":true},{"name":"layoutDirection","required":true,"positional":true}]}, methods: {"setLayoutDirection":_flaxMemberParameters0,"acceptGesture":_flaxMemberParameters1,"rejectGesture":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}, getters: ["id"], setters: [], contextMembers: [], superMembers: ["get:id","setLayoutDirection","acceptGesture","rejectGesture","dispose"]} as const;
export interface DarwinPlatformViewController {
readonly [_flaxDartTypeValue]: DarwinPlatformViewController;

setLayoutDirection(layoutDirection: upstream0.TextDirection): Promise<void>;
acceptGesture(): Promise<void>;
rejectGesture(): Promise<void>;
dispose(): Promise<void>;
get id(): number;
}
export abstract class DarwinPlatformViewController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DarwinPlatformViewController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DarwinPlatformViewController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:DarwinPlatformViewController", readonly [], false];
constructor(id: number, layoutDirection: upstream0.TextDirection) { super(_DarwinPlatformViewControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DarwinPlatformViewController.prototype, _DarwinPlatformViewControllerProxy);
export namespace DarwinPlatformViewController { export function implement(args: [id: number, layoutDirection: upstream0.TextDirection], implementation: {}): DarwinPlatformViewController {
return constructProxy(_DarwinPlatformViewControllerProxy, args, implementation) as DarwinPlatformViewController; } }
_flaxBindInstanceType<DarwinPlatformViewController, typeof DarwinPlatformViewController>(DarwinPlatformViewController, "flax.core/sdk_services#type:DarwinPlatformViewController", ["dart:core::Object"]);
