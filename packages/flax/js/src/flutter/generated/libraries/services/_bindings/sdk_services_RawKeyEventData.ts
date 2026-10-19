// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters69, _flaxMemberParameters10, _flaxMemberParameters0, _flaxMemberParameters45, _flaxMemberParameters44, _flaxMemberParameters43 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyEventData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawKeyEventData: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyEventData;

}
defineObject("flax.core/sdk_services#type:RawKeyEventData", ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed","physicalKey","logicalKey","keyLabel"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyEventData", "object", {"isModifierPressed":_flaxMemberParameters69,"getModifierSide":_flaxMemberParameters10,"shouldDispatchEvent":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _RawKeyEventDataProxy = {type: "flax.core/sdk_services#type:RawKeyEventData", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters45,"toDiagnosticsNode":_flaxMemberParameters44,"debugFillProperties":_flaxMemberParameters43,"isModifierPressed":_flaxMemberParameters69,"getModifierSide":_flaxMemberParameters10,"shouldDispatchEvent":_flaxMemberParameters0}, getters: ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed","physicalKey","logicalKey","keyLabel"], setters: [], contextMembers: [], superMembers: ["get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","get:modifiersPressed","toStringShort","toString","toDiagnosticsNode","debugFillProperties","shouldDispatchEvent"]} as const;
export interface RawKeyEventData {
readonly [_flaxDartTypeValue]: RawKeyEventData;

toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
shouldDispatchEvent(): boolean;
get isControlPressed(): boolean;
get isShiftPressed(): boolean;
get isAltPressed(): boolean;
get isMetaPressed(): boolean;
get modifiersPressed(): DartMap<upstream2.ModifierKey, upstream1.KeyboardSide>;
}
export abstract class RawKeyEventData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawKeyEventData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventData", readonly [], false];
constructor() { super(_RawKeyEventDataProxy, Array.from(arguments)); }
abstract isModifierPressed(key: upstream2.ModifierKey, options?: {side?: upstream1.KeyboardSide | undefined}): boolean;
abstract getModifierSide(key: upstream2.ModifierKey): upstream1.KeyboardSide | null;
abstract get physicalKey(): upstream3.PhysicalKeyboardKey;
abstract get logicalKey(): upstream4.LogicalKeyboardKey;
abstract get keyLabel(): string;
}
_flaxDefineProxyBase(RawKeyEventData.prototype, _RawKeyEventDataProxy);
export namespace RawKeyEventData { export function implement(args: [], implementation: {isModifierPressed: ((key: upstream2.ModifierKey, options?: { side?: upstream1.KeyboardSide | undefined }) => boolean); getModifierSide: ((key: upstream2.ModifierKey) => upstream1.KeyboardSide | null); get physicalKey(): Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; get logicalKey(): Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; get keyLabel(): string}): RawKeyEventData {
return constructProxy(_RawKeyEventDataProxy, args, implementation) as RawKeyEventData; } }
_flaxBindInstanceType<RawKeyEventData, typeof RawKeyEventData>(RawKeyEventData, "flax.core/sdk_services#type:RawKeyEventData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
