// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_KeyHelper';
import '@flax/flutter/services/_bindings/sdk_services_KeyHelper';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import type * as upstream5 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters10, _flaxMemberParameters73, _flaxMemberParameters69, _flaxMemberParameters0, _flaxMemberParameters44, _flaxMemberParameters43, _flaxMemberParameters45 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyEventDataLinux extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::RawKeyEventDataLinux": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawKeyEventDataLinux: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyEventDataLinux;

}
defineObject("flax.core/sdk_services#type:RawKeyEventDataLinux", ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed","physicalKey","logicalKey","keyLabel","keyHelper","unicodeScalarValues","scanCode","keyCode","modifiers","isDown","specifiedLogicalKey"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyEventDataLinux", "object", {"getModifierSide":_flaxMemberParameters10}, {}), [], undefined, "flax.core/sdk_services#type:RawKeyEventData");
const _RawKeyEventDataLinuxProxy = {type: "flax.core/sdk_services#type:RawKeyEventDataLinux", parameters: _flaxMemberParameters73, constructors: {"": _flaxMemberParameters73}, methods: {"isModifierPressed":_flaxMemberParameters69,"getModifierSide":_flaxMemberParameters10,"shouldDispatchEvent":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters44,"debugFillProperties":_flaxMemberParameters43,"toString":_flaxMemberParameters45}, getters: ["keyHelper","unicodeScalarValues","scanCode","keyCode","modifiers","isDown","specifiedLogicalKey","keyLabel","physicalKey","logicalKey","isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed"], setters: [], contextMembers: [], superMembers: ["get:keyHelper","get:unicodeScalarValues","get:scanCode","get:keyCode","get:modifiers","get:isDown","get:specifiedLogicalKey","get:keyLabel","get:physicalKey","get:logicalKey","get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","get:modifiersPressed","isModifierPressed","getModifierSide","shouldDispatchEvent","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface RawKeyEventDataLinux {
readonly [_flaxDartTypeValue]: RawKeyEventDataLinux;

isModifierPressed(key: upstream4.ModifierKey, options?: {side?: upstream3.KeyboardSide | undefined}): boolean;
getModifierSide(key: upstream4.ModifierKey): upstream3.KeyboardSide;
shouldDispatchEvent(): boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream10.DiagnosticLevel | undefined}): string;
get keyHelper(): upstream2.KeyHelper;
get unicodeScalarValues(): number;
get scanCode(): number;
get keyCode(): number;
get modifiers(): number;
get isDown(): boolean;
get specifiedLogicalKey(): number | null;
get keyLabel(): string;
get physicalKey(): upstream5.PhysicalKeyboardKey;
get logicalKey(): upstream6.LogicalKeyboardKey;
get isControlPressed(): boolean;
get isShiftPressed(): boolean;
get isAltPressed(): boolean;
get isMetaPressed(): boolean;
get modifiersPressed(): DartMap<upstream4.ModifierKey, upstream3.KeyboardSide>;
}
export abstract class RawKeyEventDataLinux extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataLinux>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawKeyEventDataLinux;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataLinux", readonly [], false];
constructor(options: {keyHelper: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [] }>; unicodeScalarValues?: number | undefined; scanCode?: number | undefined; keyCode?: number | undefined; modifiers?: number | undefined; isDown: boolean; specifiedLogicalKey?: number | null | undefined}) { super(_RawKeyEventDataLinuxProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RawKeyEventDataLinux.prototype, _RawKeyEventDataLinuxProxy);
export namespace RawKeyEventDataLinux { export function implement(args: [options: {keyHelper: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [] }>; unicodeScalarValues?: number | undefined; scanCode?: number | undefined; keyCode?: number | undefined; modifiers?: number | undefined; isDown: boolean; specifiedLogicalKey?: number | null | undefined}], implementation: {}): RawKeyEventDataLinux {
return constructProxy(_RawKeyEventDataLinuxProxy, args, implementation) as RawKeyEventDataLinux; } }
_flaxBindInstanceType<RawKeyEventDataLinux, typeof RawKeyEventDataLinux>(RawKeyEventDataLinux, "flax.core/sdk_services#type:RawKeyEventDataLinux", ["flax.core/sdk_services#type:RawKeyEventData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "keyHelper" | "unicodeScalarValues" | "scanCode" | "keyCode" | "modifiers" | "isDown" | "specifiedLogicalKey" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::RawKeyEventDataLinux" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
