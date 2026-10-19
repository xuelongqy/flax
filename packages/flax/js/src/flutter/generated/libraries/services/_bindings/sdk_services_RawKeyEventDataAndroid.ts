// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream5 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters70, _flaxMemberParameters69, _flaxMemberParameters10, _flaxMemberParameters0, _flaxMemberParameters44, _flaxMemberParameters43, _flaxMemberParameters45 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyEventDataAndroid extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_android.dart::RawKeyEventDataAndroid": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawKeyEventDataAndroid: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyEventDataAndroid;

}
defineObject("flax.core/sdk_services#type:RawKeyEventDataAndroid", ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed","physicalKey","logicalKey","keyLabel","flags","codePoint","plainCodePoint","keyCode","scanCode","metaState","eventSource","vendorId","productId","deviceId","repeatCount"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyEventDataAndroid", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:RawKeyEventData");
const _RawKeyEventDataAndroidProxy = {type: "flax.core/sdk_services#type:RawKeyEventDataAndroid", parameters: _flaxMemberParameters70, constructors: {"": _flaxMemberParameters70}, methods: {"isModifierPressed":_flaxMemberParameters69,"getModifierSide":_flaxMemberParameters10,"shouldDispatchEvent":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters44,"debugFillProperties":_flaxMemberParameters43,"toString":_flaxMemberParameters45}, getters: ["flags","codePoint","plainCodePoint","keyCode","scanCode","metaState","eventSource","vendorId","productId","deviceId","repeatCount","keyLabel","physicalKey","logicalKey","isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed"], setters: [], contextMembers: [], superMembers: ["get:flags","get:codePoint","get:plainCodePoint","get:keyCode","get:scanCode","get:metaState","get:eventSource","get:vendorId","get:productId","get:deviceId","get:repeatCount","get:keyLabel","get:physicalKey","get:logicalKey","get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","get:modifiersPressed","isModifierPressed","getModifierSide","shouldDispatchEvent","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface RawKeyEventDataAndroid {
readonly [_flaxDartTypeValue]: RawKeyEventDataAndroid;

isModifierPressed(key: upstream3.ModifierKey, options?: {side?: upstream2.KeyboardSide | undefined}): boolean;
getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide | null;
shouldDispatchEvent(): boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
get flags(): number;
get codePoint(): number;
get plainCodePoint(): number;
get keyCode(): number;
get scanCode(): number;
get metaState(): number;
get eventSource(): number;
get vendorId(): number;
get productId(): number;
get deviceId(): number;
get repeatCount(): number;
get keyLabel(): string;
get physicalKey(): upstream4.PhysicalKeyboardKey;
get logicalKey(): upstream5.LogicalKeyboardKey;
get isControlPressed(): boolean;
get isShiftPressed(): boolean;
get isAltPressed(): boolean;
get isMetaPressed(): boolean;
get modifiersPressed(): DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
}
export abstract class RawKeyEventDataAndroid extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataAndroid>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawKeyEventDataAndroid;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataAndroid", readonly [], false];
constructor(options?: {flags?: number | undefined; codePoint?: number | undefined; plainCodePoint?: number | undefined; keyCode?: number | undefined; scanCode?: number | undefined; metaState?: number | undefined; eventSource?: number | undefined; vendorId?: number | undefined; productId?: number | undefined; deviceId?: number | undefined; repeatCount?: number | undefined}) { super(_RawKeyEventDataAndroidProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RawKeyEventDataAndroid.prototype, _RawKeyEventDataAndroidProxy);
export namespace RawKeyEventDataAndroid { export function implement(args: [options?: {flags?: number | undefined; codePoint?: number | undefined; plainCodePoint?: number | undefined; keyCode?: number | undefined; scanCode?: number | undefined; metaState?: number | undefined; eventSource?: number | undefined; vendorId?: number | undefined; productId?: number | undefined; deviceId?: number | undefined; repeatCount?: number | undefined}], implementation: {}): RawKeyEventDataAndroid {
return constructProxy(_RawKeyEventDataAndroidProxy, args, implementation) as RawKeyEventDataAndroid; } }
export namespace RawKeyEventDataAndroid { export declare const modifierNone: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierAlt: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierLeftAlt: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierRightAlt: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierShift: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierLeftShift: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierRightShift: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierSym: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierFunction: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierControl: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierLeftControl: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierRightControl: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierMeta: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierLeftMeta: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierRightMeta: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierCapsLock: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierNumLock: number; }
export namespace RawKeyEventDataAndroid { export declare const modifierScrollLock: number; }
_flaxDefineStaticGetters(RawKeyEventDataAndroid, "flax.core/sdk_services#read:RawKeyEventDataAndroid.", ["modifierNone","modifierAlt","modifierLeftAlt","modifierRightAlt","modifierShift","modifierLeftShift","modifierRightShift","modifierSym","modifierFunction","modifierControl","modifierLeftControl","modifierRightControl","modifierMeta","modifierLeftMeta","modifierRightMeta","modifierCapsLock","modifierNumLock","modifierScrollLock"]);
_flaxBindInstanceType<RawKeyEventDataAndroid, typeof RawKeyEventDataAndroid>(RawKeyEventDataAndroid, "flax.core/sdk_services#type:RawKeyEventDataAndroid", ["flax.core/sdk_services#type:RawKeyEventData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "flags" | "codePoint" | "plainCodePoint" | "keyCode" | "scanCode" | "metaState" | "eventSource" | "vendorId" | "productId" | "deviceId" | "repeatCount" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_android.dart::RawKeyEventDataAndroid" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
