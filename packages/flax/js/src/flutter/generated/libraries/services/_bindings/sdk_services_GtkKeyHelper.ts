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
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"key","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"key","required":true,"positional":true},{"name":"modifiers","required":true,"positional":true},{"name":"isDown","required":true},{"name":"keyCode","required":true},{"name":"side"}] as const;
const _flaxMemberParameters3 = [{"name":"keyCode","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GtkKeyHelper extends Omit<upstream0.KeyHelper, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GtkKeyHelper": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [] }> { readonly __GtkKeyHelper: unique symbol;
readonly [_flaxDartTypeValue]: GtkKeyHelper;

}
defineObject("flax.core/sdk_services#type:GtkKeyHelper", ["debugToolkit","platformPlane"], [], _flaxBindingMethods("flax.core/sdk_services#type:GtkKeyHelper", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:KeyHelper");
const _GtkKeyHelperProxy = {type: "flax.core/sdk_services#type:GtkKeyHelper", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"getModifierSide":_flaxMemberParameters1,"isModifierPressed":_flaxMemberParameters2,"numpadKey":_flaxMemberParameters3,"logicalKey":_flaxMemberParameters3}, getters: ["debugToolkit","platformPlane"], setters: [], contextMembers: [], superMembers: ["get:debugToolkit","get:platformPlane","getModifierSide","isModifierPressed","numpadKey","logicalKey"]} as const;
export interface GtkKeyHelper {
readonly [_flaxDartTypeValue]: GtkKeyHelper;

getModifierSide(key: upstream2.ModifierKey): upstream1.KeyboardSide;
isModifierPressed(key: upstream2.ModifierKey, modifiers: number, options: {side?: upstream1.KeyboardSide | undefined; keyCode: number; isDown: boolean}): boolean;
numpadKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
logicalKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
get debugToolkit(): string;
get platformPlane(): number;
}
export abstract class GtkKeyHelper extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GtkKeyHelper>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GtkKeyHelper;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:GtkKeyHelper", readonly [], false];
constructor() { super(_GtkKeyHelperProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(GtkKeyHelper.prototype, _GtkKeyHelperProxy);
export namespace GtkKeyHelper { export function implement(args: [], implementation: {}): GtkKeyHelper {
return constructProxy(_GtkKeyHelperProxy, args, implementation) as GtkKeyHelper; } }
export namespace GtkKeyHelper { export declare const modifierShift: number; }
export namespace GtkKeyHelper { export declare const modifierCapsLock: number; }
export namespace GtkKeyHelper { export declare const modifierControl: number; }
export namespace GtkKeyHelper { export declare const modifierMod1: number; }
export namespace GtkKeyHelper { export declare const modifierMod2: number; }
export namespace GtkKeyHelper { export declare const modifierMeta: number; }
_flaxDefineStaticGetters(GtkKeyHelper, "flax.core/sdk_services#read:GtkKeyHelper.", ["modifierShift","modifierCapsLock","modifierControl","modifierMod1","modifierMod2","modifierMeta"]);
_flaxBindInstanceType<GtkKeyHelper, typeof GtkKeyHelper>(GtkKeyHelper, "flax.core/sdk_services#type:GtkKeyHelper", ["dart:core::Object","flax.core/sdk_services#type:KeyHelper"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugToolkit" | "platformPlane" | "getModifierSide" | "isModifierPressed" | "numpadKey" | "logicalKey" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GtkKeyHelper" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper";
