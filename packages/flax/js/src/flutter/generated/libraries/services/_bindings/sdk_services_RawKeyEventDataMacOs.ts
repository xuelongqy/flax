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
import { _flaxMemberParameters83, _flaxMemberParameters78, _flaxMemberParameters11, _flaxMemberParameters0, _flaxMemberParameters51, _flaxMemberParameters50, _flaxMemberParameters52 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyEventDataMacOs extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_macos.dart::RawKeyEventDataMacOs": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawKeyEventDataMacOs: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyEventDataMacOs;

readonly isControlPressed: boolean;
readonly isShiftPressed: boolean;
readonly isAltPressed: boolean;
readonly isMetaPressed: boolean;
readonly modifiersPressed: DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
readonly physicalKey: upstream4.PhysicalKeyboardKey;
readonly logicalKey: upstream5.LogicalKeyboardKey;
readonly keyLabel: string;
readonly characters: string;
readonly charactersIgnoringModifiers: string;
readonly keyCode: number;
readonly modifiers: number;
readonly specifiedLogicalKey: number | null;
isModifierPressed(key: upstream3.ModifierKey, options?: {side?: upstream2.KeyboardSide | undefined}): boolean;
getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide | null;
shouldDispatchEvent(): boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_services#type:RawKeyEventDataMacOs", ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed","physicalKey","logicalKey","keyLabel","characters","charactersIgnoringModifiers","keyCode","modifiers","specifiedLogicalKey"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyEventDataMacOs", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:RawKeyEventData");
export function _RawKeyEventDataMacOsFactory(options: { characters?: string | undefined; charactersIgnoringModifiers?: string | undefined; keyCode?: number | undefined; modifiers?: number | undefined; specifiedLogicalKey?: number | null | undefined } = {}): RawKeyEventDataMacOs {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:RawKeyEventDataMacOs", "", [{"name":"characters"},{"name":"charactersIgnoringModifiers"},{"name":"keyCode"},{"name":"modifiers"},{"name":"specifiedLogicalKey"}], [], options) as RawKeyEventDataMacOs;
}
const _RawKeyEventDataMacOsProxy = {type: "flax.core/sdk_services#type:RawKeyEventDataMacOs", parameters: _flaxMemberParameters83, constructors: {"": _flaxMemberParameters83}, methods: {"isModifierPressed":_flaxMemberParameters78,"getModifierSide":_flaxMemberParameters11,"shouldDispatchEvent":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters51,"debugFillProperties":_flaxMemberParameters50,"toString":_flaxMemberParameters52}, getters: ["characters","charactersIgnoringModifiers","keyCode","modifiers","specifiedLogicalKey","keyLabel","physicalKey","logicalKey","isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed"], setters: [], contextMembers: [], superMembers: ["get:characters","get:charactersIgnoringModifiers","get:keyCode","get:modifiers","get:specifiedLogicalKey","get:keyLabel","get:physicalKey","get:logicalKey","get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","get:modifiersPressed","isModifierPressed","getModifierSide","shouldDispatchEvent","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _RawKeyEventDataMacOsNative extends RawKeyEventDataMacOs {
readonly [_flaxDartTypeValue]: _RawKeyEventDataMacOsNative;

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
export abstract class _RawKeyEventDataMacOsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataMacOs>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawKeyEventDataMacOs;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataMacOs", readonly [], false];
constructor(options?: {characters?: string | undefined; charactersIgnoringModifiers?: string | undefined; keyCode?: number | undefined; modifiers?: number | undefined; specifiedLogicalKey?: number | null | undefined}) { super(_RawKeyEventDataMacOsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RawKeyEventDataMacOsNative.prototype, _RawKeyEventDataMacOsProxy);
export namespace _RawKeyEventDataMacOsFactory { export function implement(args: [options?: {characters?: string | undefined; charactersIgnoringModifiers?: string | undefined; keyCode?: number | undefined; modifiers?: number | undefined; specifiedLogicalKey?: number | null | undefined}], implementation: {}): RawKeyEventDataMacOs {
return constructProxy(_RawKeyEventDataMacOsProxy, args, implementation) as RawKeyEventDataMacOs; } }
const _RawKeyEventDataMacOsBinding = _flaxProxyFactory(_RawKeyEventDataMacOsFactory, _RawKeyEventDataMacOsNative) as unknown as typeof _RawKeyEventDataMacOsFactory & (new(options?: {characters?: string | undefined; charactersIgnoringModifiers?: string | undefined; keyCode?: number | undefined; modifiers?: number | undefined; specifiedLogicalKey?: number | null | undefined}) => _RawKeyEventDataMacOsNative);
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierCapsLock: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierShift: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierLeftShift: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierRightShift: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierControl: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierLeftControl: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierRightControl: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierOption: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierLeftOption: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierRightOption: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierCommand: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierLeftCommand: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierRightCommand: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierNumericPad: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierHelp: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const modifierFunction: number; }
export namespace _RawKeyEventDataMacOsFactory { export declare const deviceIndependentMask: number; }
_flaxDefineStaticGetters(_RawKeyEventDataMacOsFactory, "flax.core/sdk_services#read:RawKeyEventDataMacOs.", ["modifierCapsLock","modifierShift","modifierLeftShift","modifierRightShift","modifierControl","modifierLeftControl","modifierRightControl","modifierOption","modifierLeftOption","modifierRightOption","modifierCommand","modifierLeftCommand","modifierRightCommand","modifierNumericPad","modifierHelp","modifierFunction","deviceIndependentMask"]);
export const RawKeyEventDataMacOs: typeof _RawKeyEventDataMacOsBinding & _FlaxInstanceType<RawKeyEventDataMacOs> & _FlaxDartType<RawKeyEventDataMacOs, readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataMacOs", readonly [], false]> = _flaxBindInstanceType<RawKeyEventDataMacOs, typeof _RawKeyEventDataMacOsBinding>(_RawKeyEventDataMacOsBinding, "flax.core/sdk_services#type:RawKeyEventDataMacOs", ["flax.core/sdk_services#type:RawKeyEventData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _RawKeyEventDataMacOsBinding & _FlaxInstanceType<RawKeyEventDataMacOs> & _FlaxDartType<RawKeyEventDataMacOs, readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataMacOs", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "characters" | "charactersIgnoringModifiers" | "keyCode" | "modifiers" | "specifiedLogicalKey" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_macos.dart::RawKeyEventDataMacOs" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
