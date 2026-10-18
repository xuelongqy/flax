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
const _flaxMemberParameters0 = [{"name":"key","required":true,"positional":true},{"name":"side","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"key","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"minLevel","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyEventDataMacOs extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_macos.dart::RawKeyEventDataMacOs": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawKeyEventDataMacOs: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyEventDataMacOs;

}
defineObject("flax.core/sdk_services#type:RawKeyEventDataMacOs", ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed","physicalKey","logicalKey","keyLabel","characters","charactersIgnoringModifiers","keyCode","modifiers","specifiedLogicalKey"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyEventDataMacOs", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:RawKeyEventData");
const _RawKeyEventDataMacOsProxy = {type: "flax.core/sdk_services#type:RawKeyEventDataMacOs", parameters: [{"name":"characters","required":false,"positional":false},{"name":"charactersIgnoringModifiers","required":false,"positional":false},{"name":"keyCode","required":false,"positional":false},{"name":"modifiers","required":false,"positional":false},{"name":"specifiedLogicalKey","required":false,"positional":false}], constructors: {"":[{"name":"characters","required":false,"positional":false},{"name":"charactersIgnoringModifiers","required":false,"positional":false},{"name":"keyCode","required":false,"positional":false},{"name":"modifiers","required":false,"positional":false},{"name":"specifiedLogicalKey","required":false,"positional":false}]}, methods: {"isModifierPressed":_flaxMemberParameters0,"getModifierSide":_flaxMemberParameters1,"shouldDispatchEvent":_flaxMemberParameters2,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters4,"toString":_flaxMemberParameters5}, getters: ["characters","charactersIgnoringModifiers","keyCode","modifiers","specifiedLogicalKey","keyLabel","physicalKey","logicalKey","isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed"], setters: [], contextMembers: [], superMembers: ["get:characters","get:charactersIgnoringModifiers","get:keyCode","get:modifiers","get:specifiedLogicalKey","get:keyLabel","get:physicalKey","get:logicalKey","get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","get:modifiersPressed","isModifierPressed","getModifierSide","shouldDispatchEvent","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface RawKeyEventDataMacOs {
readonly [_flaxDartTypeValue]: RawKeyEventDataMacOs;

isModifierPressed(key: upstream3.ModifierKey, options?: {side?: upstream2.KeyboardSide | undefined}): boolean;
getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide | null;
shouldDispatchEvent(): boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
get characters(): string;
get charactersIgnoringModifiers(): string;
get keyCode(): number;
get modifiers(): number;
get specifiedLogicalKey(): number | null;
get keyLabel(): string;
get physicalKey(): upstream4.PhysicalKeyboardKey;
get logicalKey(): upstream5.LogicalKeyboardKey;
get isControlPressed(): boolean;
get isShiftPressed(): boolean;
get isAltPressed(): boolean;
get isMetaPressed(): boolean;
get modifiersPressed(): DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
}
export abstract class RawKeyEventDataMacOs extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataMacOs>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawKeyEventDataMacOs;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataMacOs", readonly [], false];
constructor(options?: {characters?: string | undefined; charactersIgnoringModifiers?: string | undefined; keyCode?: number | undefined; modifiers?: number | undefined; specifiedLogicalKey?: number | null | undefined}) { super(_RawKeyEventDataMacOsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RawKeyEventDataMacOs.prototype, _RawKeyEventDataMacOsProxy);
export namespace RawKeyEventDataMacOs { export function implement(args: [options?: {characters?: string | undefined; charactersIgnoringModifiers?: string | undefined; keyCode?: number | undefined; modifiers?: number | undefined; specifiedLogicalKey?: number | null | undefined}], implementation: {}): RawKeyEventDataMacOs {
return constructProxy(_RawKeyEventDataMacOsProxy, args, implementation) as RawKeyEventDataMacOs; } }
export namespace RawKeyEventDataMacOs { export declare const modifierCapsLock: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierShift: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierLeftShift: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierRightShift: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierControl: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierLeftControl: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierRightControl: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierOption: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierLeftOption: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierRightOption: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierCommand: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierLeftCommand: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierRightCommand: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierNumericPad: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierHelp: number; }
export namespace RawKeyEventDataMacOs { export declare const modifierFunction: number; }
export namespace RawKeyEventDataMacOs { export declare const deviceIndependentMask: number; }
_flaxDefineStaticGetters(RawKeyEventDataMacOs, "flax.core/sdk_services#read:RawKeyEventDataMacOs.", ["modifierCapsLock","modifierShift","modifierLeftShift","modifierRightShift","modifierControl","modifierLeftControl","modifierRightControl","modifierOption","modifierLeftOption","modifierRightOption","modifierCommand","modifierLeftCommand","modifierRightCommand","modifierNumericPad","modifierHelp","modifierFunction","deviceIndependentMask"]);
_flaxBindInstanceType<RawKeyEventDataMacOs, typeof RawKeyEventDataMacOs>(RawKeyEventDataMacOs, "flax.core/sdk_services#type:RawKeyEventDataMacOs", ["flax.core/sdk_services#type:RawKeyEventData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "characters" | "charactersIgnoringModifiers" | "keyCode" | "modifiers" | "specifiedLogicalKey" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_macos.dart::RawKeyEventDataMacOs" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
