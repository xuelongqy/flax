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
const _flaxMemberParameters0 = [{"name":"key","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"key","required":true,"positional":true},{"name":"modifiers","required":true,"positional":true},{"name":"isDown","required":true,"positional":false},{"name":"keyCode","required":true,"positional":false},{"name":"side","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"keyCode","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GLFWKeyHelper extends Omit<upstream0.KeyHelper, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GLFWKeyHelper": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [] }> { readonly __GLFWKeyHelper: unique symbol;
readonly [_flaxDartTypeValue]: GLFWKeyHelper;

}
defineObject("flax.core/sdk_services#type:GLFWKeyHelper", ["debugToolkit","platformPlane"], [], _flaxBindingMethods("flax.core/sdk_services#type:GLFWKeyHelper", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:KeyHelper");
const _GLFWKeyHelperProxy = {type: "flax.core/sdk_services#type:GLFWKeyHelper", parameters: [], constructors: {"":[]}, methods: {"getModifierSide":_flaxMemberParameters0,"isModifierPressed":_flaxMemberParameters1,"numpadKey":_flaxMemberParameters2,"logicalKey":_flaxMemberParameters2}, getters: ["debugToolkit","platformPlane"], setters: [], contextMembers: [], superMembers: ["get:debugToolkit","get:platformPlane","getModifierSide","isModifierPressed","numpadKey","logicalKey"]} as const;
export interface GLFWKeyHelper {
readonly [_flaxDartTypeValue]: GLFWKeyHelper;

getModifierSide(key: upstream2.ModifierKey): upstream1.KeyboardSide;
isModifierPressed(key: upstream2.ModifierKey, modifiers: number, options: {side?: upstream1.KeyboardSide | undefined; keyCode: number; isDown: boolean}): boolean;
numpadKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
logicalKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
get debugToolkit(): string;
get platformPlane(): number;
}
export abstract class GLFWKeyHelper extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GLFWKeyHelper>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GLFWKeyHelper;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:GLFWKeyHelper", readonly [], false];
constructor() { super(_GLFWKeyHelperProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(GLFWKeyHelper.prototype, _GLFWKeyHelperProxy);
export namespace GLFWKeyHelper { export function implement(args: [], implementation: {}): GLFWKeyHelper {
return constructProxy(_GLFWKeyHelperProxy, args, implementation) as GLFWKeyHelper; } }
export namespace GLFWKeyHelper { export declare const modifierCapsLock: number; }
export namespace GLFWKeyHelper { export declare const modifierShift: number; }
export namespace GLFWKeyHelper { export declare const modifierControl: number; }
export namespace GLFWKeyHelper { export declare const modifierAlt: number; }
export namespace GLFWKeyHelper { export declare const modifierMeta: number; }
export namespace GLFWKeyHelper { export declare const modifierNumericPad: number; }
_flaxDefineStaticGetters(GLFWKeyHelper, "flax.core/sdk_services#read:GLFWKeyHelper.", ["modifierCapsLock","modifierShift","modifierControl","modifierAlt","modifierMeta","modifierNumericPad"]);
_flaxBindInstanceType<GLFWKeyHelper, typeof GLFWKeyHelper>(GLFWKeyHelper, "flax.core/sdk_services#type:GLFWKeyHelper", ["dart:core::Object","flax.core/sdk_services#type:KeyHelper"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugToolkit" | "platformPlane" | "getModifierSide" | "isModifierPressed" | "numpadKey" | "logicalKey" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GLFWKeyHelper" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper";
