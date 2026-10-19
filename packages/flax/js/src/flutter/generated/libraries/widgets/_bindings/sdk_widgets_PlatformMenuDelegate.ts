// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters90, _flaxMemberParameters2, _flaxMemberParameters0 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformMenuDelegate extends Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }> { readonly __PlatformMenuDelegate: unique symbol;
readonly [_flaxDartTypeValue]: PlatformMenuDelegate;

setMenus(topLevelMenus: DartListInput<upstream0.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): void;
clearMenus(): void;
debugLockDelegate(context: upstream1.BuildContext): boolean;
debugUnlockDelegate(context: upstream1.BuildContext): boolean;
}
defineObject("flax.core/sdk_widgets#type:PlatformMenuDelegate", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PlatformMenuDelegate", "object", {"setMenus":_flaxMemberParameters90,"clearMenus":_flaxMemberParameters2,"debugLockDelegate":_flaxMemberParameters0,"debugUnlockDelegate":_flaxMemberParameters0}, {}), []);
const _PlatformMenuDelegateProxy = {type: "flax.core/sdk_widgets#type:PlatformMenuDelegate", parameters: _flaxMemberParameters2, constructors: {}, methods: {"setMenus":_flaxMemberParameters90,"clearMenus":_flaxMemberParameters2,"debugLockDelegate":_flaxMemberParameters0,"debugUnlockDelegate":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _PlatformMenuDelegateFactory { export function implement(args: [], implementation: {setMenus: ((topLevelMenus: DartList<upstream0.PlatformMenuItem>) => void); clearMenus: (() => void); debugLockDelegate: ((context: upstream1.BuildContext) => boolean); debugUnlockDelegate: ((context: upstream1.BuildContext) => boolean)}): PlatformMenuDelegate {
return constructProxy(_PlatformMenuDelegateProxy, args, implementation) as PlatformMenuDelegate; } }
export const PlatformMenuDelegate: typeof _PlatformMenuDelegateFactory & _FlaxInstanceType<PlatformMenuDelegate> & _FlaxDartType<PlatformMenuDelegate, readonly ["class", "flax.core/sdk_widgets#type:PlatformMenuDelegate", readonly [], false]> = _flaxBindInstanceType<PlatformMenuDelegate, typeof _PlatformMenuDelegateFactory>(_PlatformMenuDelegateFactory, "flax.core/sdk_widgets#type:PlatformMenuDelegate", ["dart:core::Object"]) as typeof _PlatformMenuDelegateFactory & _FlaxInstanceType<PlatformMenuDelegate> & _FlaxDartType<PlatformMenuDelegate, readonly ["class", "flax.core/sdk_widgets#type:PlatformMenuDelegate", readonly [], false]>;
