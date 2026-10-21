// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_KeyHelper';
import '@flax/flutter/services/_bindings/sdk_services_KeyHelper';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import { _flaxMemberParameters0, _flaxMemberParameters11, _flaxMemberParameters42, _flaxMemberParameters43 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GtkKeyHelper extends Omit<upstream0.KeyHelper, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GtkKeyHelper": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [] }> { readonly __GtkKeyHelper: unique symbol;
readonly [_flaxDartTypeValue]: GtkKeyHelper;

readonly debugToolkit: string;
readonly platformPlane: number;
getModifierSide(key: upstream2.ModifierKey): upstream1.KeyboardSide;
isModifierPressed(key: upstream2.ModifierKey, modifiers: number, options: {isDown: boolean; keyCode: number; side?: upstream1.KeyboardSide | undefined}): boolean;
numpadKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
logicalKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
}
defineObject("flax.core/sdk_services#type:GtkKeyHelper", ["debugToolkit","platformPlane"], [], _flaxBindingMethods("flax.core/sdk_services#type:GtkKeyHelper", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:KeyHelper");
export function _GtkKeyHelperFactory(): GtkKeyHelper {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:GtkKeyHelper", "", [], [], {}) as GtkKeyHelper;
}
const _GtkKeyHelperProxy = {type: "flax.core/sdk_services#type:GtkKeyHelper", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"getModifierSide":_flaxMemberParameters11,"isModifierPressed":_flaxMemberParameters42,"numpadKey":_flaxMemberParameters43,"logicalKey":_flaxMemberParameters43}, getters: ["debugToolkit","platformPlane"], setters: [], contextMembers: [], superMembers: ["get:debugToolkit","get:platformPlane","getModifierSide","isModifierPressed","numpadKey","logicalKey"]} as const;
export interface _GtkKeyHelperNative extends GtkKeyHelper {
readonly [_flaxDartTypeValue]: _GtkKeyHelperNative;

getModifierSide(key: upstream2.ModifierKey): upstream1.KeyboardSide;
isModifierPressed(key: upstream2.ModifierKey, modifiers: number, options: {side?: upstream1.KeyboardSide | undefined; keyCode: number; isDown: boolean}): boolean;
numpadKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
logicalKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
get debugToolkit(): string;
get platformPlane(): number;
}
export abstract class _GtkKeyHelperNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GtkKeyHelper>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GtkKeyHelper;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:GtkKeyHelper", readonly [], false];
constructor() { super(_GtkKeyHelperProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_GtkKeyHelperNative.prototype, _GtkKeyHelperProxy);
export namespace _GtkKeyHelperFactory { export function implement(args: [], implementation: {}): GtkKeyHelper {
return constructProxy(_GtkKeyHelperProxy, args, implementation) as GtkKeyHelper; } }
const _GtkKeyHelperBinding = _flaxProxyFactory(_GtkKeyHelperFactory, _GtkKeyHelperNative) as unknown as typeof _GtkKeyHelperFactory & (new() => _GtkKeyHelperNative);
export namespace _GtkKeyHelperFactory { export declare const modifierShift: number; }
export namespace _GtkKeyHelperFactory { export declare const modifierCapsLock: number; }
export namespace _GtkKeyHelperFactory { export declare const modifierControl: number; }
export namespace _GtkKeyHelperFactory { export declare const modifierMod1: number; }
export namespace _GtkKeyHelperFactory { export declare const modifierMod2: number; }
export namespace _GtkKeyHelperFactory { export declare const modifierMeta: number; }
_flaxDefineStaticGetters(_GtkKeyHelperFactory, "flax.core/sdk_services#read:GtkKeyHelper.", ["modifierShift","modifierCapsLock","modifierControl","modifierMod1","modifierMod2","modifierMeta"]);
export const GtkKeyHelper: typeof _GtkKeyHelperBinding & _FlaxInstanceType<GtkKeyHelper> & _FlaxDartType<GtkKeyHelper, readonly ["class", "flax.core/sdk_services#type:GtkKeyHelper", readonly [], false]> = _flaxBindInstanceType<GtkKeyHelper, typeof _GtkKeyHelperBinding>(_GtkKeyHelperBinding, "flax.core/sdk_services#type:GtkKeyHelper", ["dart:core::Object","flax.core/sdk_services#type:KeyHelper"]) as typeof _GtkKeyHelperBinding & _FlaxInstanceType<GtkKeyHelper> & _FlaxDartType<GtkKeyHelper, readonly ["class", "flax.core/sdk_services#type:GtkKeyHelper", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugToolkit" | "platformPlane" | "getModifierSide" | "isModifierPressed" | "numpadKey" | "logicalKey" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GtkKeyHelper" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper";
