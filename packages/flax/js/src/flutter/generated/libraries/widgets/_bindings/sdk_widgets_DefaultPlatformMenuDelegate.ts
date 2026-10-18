// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [{"name":"topLevelMenus","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DefaultPlatformMenuDelegate extends Omit<upstream0.PlatformMenuDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::DefaultPlatformMenuDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }> { readonly __DefaultPlatformMenuDelegate: unique symbol;
readonly [_flaxDartTypeValue]: DefaultPlatformMenuDelegate;

}
defineObject("flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", ["channel"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:PlatformMenuDelegate");
const _DefaultPlatformMenuDelegateProxy = {type: "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", parameters: [{"name":"channel","required":false,"positional":false}], constructors: {"":[{"name":"channel","required":false,"positional":false}]}, methods: {"setMenus":_flaxMemberParameters0,"clearMenus":_flaxMemberParameters1,"debugLockDelegate":_flaxMemberParameters2,"debugUnlockDelegate":_flaxMemberParameters2}, getters: ["channel"], setters: [], contextMembers: [], superMembers: ["get:channel","setMenus","clearMenus","debugLockDelegate","debugUnlockDelegate"]} as const;
export interface DefaultPlatformMenuDelegate {
readonly [_flaxDartTypeValue]: DefaultPlatformMenuDelegate;

setMenus(topLevelMenus: DartListInput<upstream2.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): void;
clearMenus(): void;
debugLockDelegate(context: upstream3.BuildContext): boolean;
debugUnlockDelegate(context: upstream3.BuildContext): boolean;
get channel(): upstream1.MethodChannel;
}
export abstract class DefaultPlatformMenuDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultPlatformMenuDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DefaultPlatformMenuDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", readonly [], false];
constructor(options?: {channel?: Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }> | null | undefined}) { super(_DefaultPlatformMenuDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DefaultPlatformMenuDelegate.prototype, _DefaultPlatformMenuDelegateProxy);
export namespace DefaultPlatformMenuDelegate { export function implement(args: [options?: {channel?: Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }> | null | undefined}], implementation: {}): DefaultPlatformMenuDelegate {
return constructProxy(_DefaultPlatformMenuDelegateProxy, args, implementation) as DefaultPlatformMenuDelegate; } }
_flaxBindInstanceType<DefaultPlatformMenuDelegate, typeof DefaultPlatformMenuDelegate>(DefaultPlatformMenuDelegate, "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", ["flax.core/sdk_widgets#type:PlatformMenuDelegate","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "channel" | "setMenus" | "clearMenus" | "debugLockDelegate" | "debugUnlockDelegate" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::DefaultPlatformMenuDelegate" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate";
