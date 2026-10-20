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
import { _flaxMemberParameters68, _flaxMemberParameters69, _flaxMemberParameters2, _flaxMemberParameters0 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DefaultPlatformMenuDelegate extends Omit<upstream0.PlatformMenuDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::DefaultPlatformMenuDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }> { readonly __DefaultPlatformMenuDelegate: unique symbol;
readonly [_flaxDartTypeValue]: DefaultPlatformMenuDelegate;

readonly channel: upstream1.MethodChannel;
setMenus(topLevelMenus: DartListInput<upstream2.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): void;
clearMenus(): void;
debugLockDelegate(context: upstream3.BuildContext): boolean;
debugUnlockDelegate(context: upstream3.BuildContext): boolean;
}
defineObject("flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", ["channel"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:PlatformMenuDelegate");
export function _DefaultPlatformMenuDelegateFactory(options: { channel?: Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }> | null | undefined } = {}): DefaultPlatformMenuDelegate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", "", [{"name":"channel"}], [], options) as DefaultPlatformMenuDelegate;
}
const _DefaultPlatformMenuDelegateProxy = {type: "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", parameters: _flaxMemberParameters68, constructors: {"": _flaxMemberParameters68}, methods: {"setMenus":_flaxMemberParameters69,"clearMenus":_flaxMemberParameters2,"debugLockDelegate":_flaxMemberParameters0,"debugUnlockDelegate":_flaxMemberParameters0}, getters: ["channel"], setters: [], contextMembers: [], superMembers: ["get:channel","setMenus","clearMenus","debugLockDelegate","debugUnlockDelegate"]} as const;
export interface _DefaultPlatformMenuDelegateNative extends DefaultPlatformMenuDelegate {
readonly [_flaxDartTypeValue]: _DefaultPlatformMenuDelegateNative;

setMenus(topLevelMenus: DartListInput<upstream2.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): void;
clearMenus(): void;
debugLockDelegate(context: upstream3.BuildContext): boolean;
debugUnlockDelegate(context: upstream3.BuildContext): boolean;
get channel(): upstream1.MethodChannel;
}
export abstract class _DefaultPlatformMenuDelegateNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultPlatformMenuDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DefaultPlatformMenuDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", readonly [], false];
constructor(options?: {channel?: Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }> | null | undefined}) { super(_DefaultPlatformMenuDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DefaultPlatformMenuDelegateNative.prototype, _DefaultPlatformMenuDelegateProxy);
export namespace _DefaultPlatformMenuDelegateFactory { export function implement(args: [options?: {channel?: Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }> | null | undefined}], implementation: {}): DefaultPlatformMenuDelegate {
return constructProxy(_DefaultPlatformMenuDelegateProxy, args, implementation) as DefaultPlatformMenuDelegate; } }
const _DefaultPlatformMenuDelegateBinding = _flaxProxyFactory(_DefaultPlatformMenuDelegateFactory, _DefaultPlatformMenuDelegateNative) as unknown as typeof _DefaultPlatformMenuDelegateFactory & (new(options?: {channel?: Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }> | null | undefined}) => _DefaultPlatformMenuDelegateNative);
export const DefaultPlatformMenuDelegate: typeof _DefaultPlatformMenuDelegateBinding & _FlaxInstanceType<DefaultPlatformMenuDelegate> & _FlaxDartType<DefaultPlatformMenuDelegate, readonly ["class", "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", readonly [], false]> = _flaxBindInstanceType<DefaultPlatformMenuDelegate, typeof _DefaultPlatformMenuDelegateBinding>(_DefaultPlatformMenuDelegateBinding, "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", ["flax.core/sdk_widgets#type:PlatformMenuDelegate","dart:core::Object"]) as typeof _DefaultPlatformMenuDelegateBinding & _FlaxInstanceType<DefaultPlatformMenuDelegate> & _FlaxDartType<DefaultPlatformMenuDelegate, readonly ["class", "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "channel" | "setMenus" | "clearMenus" | "debugLockDelegate" | "debugUnlockDelegate" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::DefaultPlatformMenuDelegate" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate";
