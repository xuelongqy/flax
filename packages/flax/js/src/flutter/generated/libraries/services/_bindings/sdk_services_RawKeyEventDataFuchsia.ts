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
import { _flaxMemberParameters80, _flaxMemberParameters78, _flaxMemberParameters11, _flaxMemberParameters0, _flaxMemberParameters51, _flaxMemberParameters50, _flaxMemberParameters52 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyEventDataFuchsia extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_fuchsia.dart::RawKeyEventDataFuchsia": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawKeyEventDataFuchsia: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyEventDataFuchsia;

readonly isControlPressed: boolean;
readonly isShiftPressed: boolean;
readonly isAltPressed: boolean;
readonly isMetaPressed: boolean;
readonly modifiersPressed: DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
readonly physicalKey: upstream4.PhysicalKeyboardKey;
readonly logicalKey: upstream5.LogicalKeyboardKey;
readonly keyLabel: string;
readonly hidUsage: number;
readonly codePoint: number;
readonly modifiers: number;
isModifierPressed(key: upstream3.ModifierKey, options?: {side?: upstream2.KeyboardSide | undefined}): boolean;
getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide | null;
shouldDispatchEvent(): boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_services#type:RawKeyEventDataFuchsia", ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed","physicalKey","logicalKey","keyLabel","hidUsage","codePoint","modifiers"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyEventDataFuchsia", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:RawKeyEventData");
export function _RawKeyEventDataFuchsiaFactory(options: { hidUsage?: number | undefined; codePoint?: number | undefined; modifiers?: number | undefined } = {}): RawKeyEventDataFuchsia {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:RawKeyEventDataFuchsia", "", [{"name":"hidUsage"},{"name":"codePoint"},{"name":"modifiers"}], [], options) as RawKeyEventDataFuchsia;
}
const _RawKeyEventDataFuchsiaProxy = {type: "flax.core/sdk_services#type:RawKeyEventDataFuchsia", parameters: _flaxMemberParameters80, constructors: {"": _flaxMemberParameters80}, methods: {"isModifierPressed":_flaxMemberParameters78,"getModifierSide":_flaxMemberParameters11,"shouldDispatchEvent":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters51,"debugFillProperties":_flaxMemberParameters50,"toString":_flaxMemberParameters52}, getters: ["hidUsage","codePoint","modifiers","keyLabel","logicalKey","physicalKey","isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed"], setters: [], contextMembers: [], superMembers: ["get:hidUsage","get:codePoint","get:modifiers","get:keyLabel","get:logicalKey","get:physicalKey","get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","get:modifiersPressed","isModifierPressed","getModifierSide","shouldDispatchEvent","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _RawKeyEventDataFuchsiaNative extends RawKeyEventDataFuchsia {
readonly [_flaxDartTypeValue]: _RawKeyEventDataFuchsiaNative;

isModifierPressed(key: upstream3.ModifierKey, options?: {side?: upstream2.KeyboardSide | undefined}): boolean;
getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide | null;
shouldDispatchEvent(): boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
get hidUsage(): number;
get codePoint(): number;
get modifiers(): number;
get keyLabel(): string;
get logicalKey(): upstream5.LogicalKeyboardKey;
get physicalKey(): upstream4.PhysicalKeyboardKey;
get isControlPressed(): boolean;
get isShiftPressed(): boolean;
get isAltPressed(): boolean;
get isMetaPressed(): boolean;
get modifiersPressed(): DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
}
export abstract class _RawKeyEventDataFuchsiaNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataFuchsia>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawKeyEventDataFuchsia;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataFuchsia", readonly [], false];
constructor(options?: {hidUsage?: number | undefined; codePoint?: number | undefined; modifiers?: number | undefined}) { super(_RawKeyEventDataFuchsiaProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RawKeyEventDataFuchsiaNative.prototype, _RawKeyEventDataFuchsiaProxy);
export namespace _RawKeyEventDataFuchsiaFactory { export function implement(args: [options?: {hidUsage?: number | undefined; codePoint?: number | undefined; modifiers?: number | undefined}], implementation: {}): RawKeyEventDataFuchsia {
return constructProxy(_RawKeyEventDataFuchsiaProxy, args, implementation) as RawKeyEventDataFuchsia; } }
const _RawKeyEventDataFuchsiaBinding = _flaxProxyFactory(_RawKeyEventDataFuchsiaFactory, _RawKeyEventDataFuchsiaNative) as unknown as typeof _RawKeyEventDataFuchsiaFactory & (new(options?: {hidUsage?: number | undefined; codePoint?: number | undefined; modifiers?: number | undefined}) => _RawKeyEventDataFuchsiaNative);
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierNone: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierCapsLock: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierLeftShift: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierRightShift: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierShift: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierLeftControl: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierRightControl: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierControl: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierLeftAlt: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierRightAlt: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierAlt: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierLeftMeta: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierRightMeta: number; }
export namespace _RawKeyEventDataFuchsiaFactory { export declare const modifierMeta: number; }
_flaxDefineStaticGetters(_RawKeyEventDataFuchsiaFactory, "flax.core/sdk_services#read:RawKeyEventDataFuchsia.", ["modifierNone","modifierCapsLock","modifierLeftShift","modifierRightShift","modifierShift","modifierLeftControl","modifierRightControl","modifierControl","modifierLeftAlt","modifierRightAlt","modifierAlt","modifierLeftMeta","modifierRightMeta","modifierMeta"]);
export const RawKeyEventDataFuchsia: typeof _RawKeyEventDataFuchsiaBinding & _FlaxInstanceType<RawKeyEventDataFuchsia> & _FlaxDartType<RawKeyEventDataFuchsia, readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataFuchsia", readonly [], false]> = _flaxBindInstanceType<RawKeyEventDataFuchsia, typeof _RawKeyEventDataFuchsiaBinding>(_RawKeyEventDataFuchsiaBinding, "flax.core/sdk_services#type:RawKeyEventDataFuchsia", ["flax.core/sdk_services#type:RawKeyEventData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _RawKeyEventDataFuchsiaBinding & _FlaxInstanceType<RawKeyEventDataFuchsia> & _FlaxDartType<RawKeyEventDataFuchsia, readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataFuchsia", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "hidUsage" | "codePoint" | "modifiers" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_fuchsia.dart::RawKeyEventDataFuchsia" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
