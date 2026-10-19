// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters68, _flaxMemberParameters10, _flaxMemberParameters43, _flaxMemberParameters0, _flaxMemberParameters44, _flaxMemberParameters45 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyDownEvent extends Omit<upstream0.RawKeyEvent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEvent>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyDownEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawKeyDownEvent: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyDownEvent;

}
defineObject("flax.core/sdk_services#type:RawKeyDownEvent", ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","physicalKey","logicalKey","character","repeat","data"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyDownEvent", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:RawKeyEvent");
const _RawKeyDownEventProxy = {type: "flax.core/sdk_services#type:RawKeyDownEvent", parameters: _flaxMemberParameters68, constructors: {"": _flaxMemberParameters68}, methods: {"isKeyPressed":_flaxMemberParameters10,"debugFillProperties":_flaxMemberParameters43,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters44,"toString":_flaxMemberParameters45}, getters: ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","physicalKey","logicalKey","character","repeat","data"], setters: [], contextMembers: [], superMembers: ["get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","get:physicalKey","get:logicalKey","get:character","get:repeat","get:data","isKeyPressed","debugFillProperties","toStringShort","toDiagnosticsNode","toString"]} as const;
export interface RawKeyDownEvent {
readonly [_flaxDartTypeValue]: RawKeyDownEvent;

isKeyPressed(key: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
get isControlPressed(): boolean;
get isShiftPressed(): boolean;
get isAltPressed(): boolean;
get isMetaPressed(): boolean;
get physicalKey(): upstream3.PhysicalKeyboardKey;
get logicalKey(): upstream4.LogicalKeyboardKey;
get character(): string | null;
get repeat(): boolean;
get data(): upstream2.RawKeyEventData;
}
export abstract class RawKeyDownEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyDownEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawKeyDownEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyDownEvent", readonly [], false];
constructor(options: {data: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; character?: string | null | undefined; repeat?: boolean | undefined}) { super(_RawKeyDownEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RawKeyDownEvent.prototype, _RawKeyDownEventProxy);
export namespace RawKeyDownEvent { export function implement(args: [options: {data: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; character?: string | null | undefined; repeat?: boolean | undefined}], implementation: {}): RawKeyDownEvent {
return constructProxy(_RawKeyDownEventProxy, args, implementation) as RawKeyDownEvent; } }
_flaxBindInstanceType<RawKeyDownEvent, typeof RawKeyDownEvent>(RawKeyDownEvent, "flax.core/sdk_services#type:RawKeyDownEvent", ["flax.core/sdk_services#type:RawKeyEvent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "physicalKey" | "logicalKey" | "character" | "repeat" | "data" | "isKeyPressed" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyDownEvent" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
