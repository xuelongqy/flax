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
const _flaxMemberParameters0 = [{"name":"keyCode"},{"name":"scanCode"},{"name":"characterCodePoint"},{"name":"modifiers"}] as const;
const _flaxMemberParameters1 = [{"name":"key","required":true,"positional":true},{"name":"side"}] as const;
const _flaxMemberParameters2 = [{"name":"key","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
const _flaxMemberParameters4 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters5 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"minLevel"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyEventDataWindows extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_windows.dart::RawKeyEventDataWindows": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawKeyEventDataWindows: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyEventDataWindows;

}
defineObject("flax.core/sdk_services#type:RawKeyEventDataWindows", ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed","physicalKey","logicalKey","keyLabel","keyCode","scanCode","characterCodePoint","modifiers"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyEventDataWindows", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:RawKeyEventData");
const _RawKeyEventDataWindowsProxy = {type: "flax.core/sdk_services#type:RawKeyEventDataWindows", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"isModifierPressed":_flaxMemberParameters1,"getModifierSide":_flaxMemberParameters2,"shouldDispatchEvent":_flaxMemberParameters3,"toStringShort":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters6}, getters: ["keyCode","scanCode","characterCodePoint","modifiers","keyLabel","physicalKey","logicalKey","isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed"], setters: [], contextMembers: [], superMembers: ["get:keyCode","get:scanCode","get:characterCodePoint","get:modifiers","get:keyLabel","get:physicalKey","get:logicalKey","get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","get:modifiersPressed","isModifierPressed","getModifierSide","shouldDispatchEvent","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface RawKeyEventDataWindows {
readonly [_flaxDartTypeValue]: RawKeyEventDataWindows;

isModifierPressed(key: upstream3.ModifierKey, options?: {side?: upstream2.KeyboardSide | undefined}): boolean;
getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide | null;
shouldDispatchEvent(): boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
get keyCode(): number;
get scanCode(): number;
get characterCodePoint(): number;
get modifiers(): number;
get keyLabel(): string;
get physicalKey(): upstream4.PhysicalKeyboardKey;
get logicalKey(): upstream5.LogicalKeyboardKey;
get isControlPressed(): boolean;
get isShiftPressed(): boolean;
get isAltPressed(): boolean;
get isMetaPressed(): boolean;
get modifiersPressed(): DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
}
export abstract class RawKeyEventDataWindows extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataWindows>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawKeyEventDataWindows;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataWindows", readonly [], false];
constructor(options?: {keyCode?: number | undefined; scanCode?: number | undefined; characterCodePoint?: number | undefined; modifiers?: number | undefined}) { super(_RawKeyEventDataWindowsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RawKeyEventDataWindows.prototype, _RawKeyEventDataWindowsProxy);
export namespace RawKeyEventDataWindows { export function implement(args: [options?: {keyCode?: number | undefined; scanCode?: number | undefined; characterCodePoint?: number | undefined; modifiers?: number | undefined}], implementation: {}): RawKeyEventDataWindows {
return constructProxy(_RawKeyEventDataWindowsProxy, args, implementation) as RawKeyEventDataWindows; } }
export namespace RawKeyEventDataWindows { export declare const modifierShift: number; }
export namespace RawKeyEventDataWindows { export declare const modifierLeftShift: number; }
export namespace RawKeyEventDataWindows { export declare const modifierRightShift: number; }
export namespace RawKeyEventDataWindows { export declare const modifierControl: number; }
export namespace RawKeyEventDataWindows { export declare const modifierLeftControl: number; }
export namespace RawKeyEventDataWindows { export declare const modifierRightControl: number; }
export namespace RawKeyEventDataWindows { export declare const modifierAlt: number; }
export namespace RawKeyEventDataWindows { export declare const modifierLeftAlt: number; }
export namespace RawKeyEventDataWindows { export declare const modifierRightAlt: number; }
export namespace RawKeyEventDataWindows { export declare const modifierLeftMeta: number; }
export namespace RawKeyEventDataWindows { export declare const modifierRightMeta: number; }
export namespace RawKeyEventDataWindows { export declare const modifierCaps: number; }
export namespace RawKeyEventDataWindows { export declare const modifierNumLock: number; }
export namespace RawKeyEventDataWindows { export declare const modifierScrollLock: number; }
_flaxDefineStaticGetters(RawKeyEventDataWindows, "flax.core/sdk_services#read:RawKeyEventDataWindows.", ["modifierShift","modifierLeftShift","modifierRightShift","modifierControl","modifierLeftControl","modifierRightControl","modifierAlt","modifierLeftAlt","modifierRightAlt","modifierLeftMeta","modifierRightMeta","modifierCaps","modifierNumLock","modifierScrollLock"]);
_flaxBindInstanceType<RawKeyEventDataWindows, typeof RawKeyEventDataWindows>(RawKeyEventDataWindows, "flax.core/sdk_services#type:RawKeyEventDataWindows", ["flax.core/sdk_services#type:RawKeyEventData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "keyCode" | "scanCode" | "characterCodePoint" | "modifiers" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_windows.dart::RawKeyEventDataWindows" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
