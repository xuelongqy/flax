// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters10, _flaxMemberParameters68, _flaxMemberParameters0, _flaxMemberParameters45, _flaxMemberParameters44, _flaxMemberParameters43 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyEvent extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawKeyEvent: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyEvent;

readonly isControlPressed: boolean;
readonly isShiftPressed: boolean;
readonly isAltPressed: boolean;
readonly isMetaPressed: boolean;
readonly physicalKey: upstream2.PhysicalKeyboardKey;
readonly logicalKey: upstream3.LogicalKeyboardKey;
readonly character: string | null;
readonly repeat: boolean;
readonly data: upstream1.RawKeyEventData;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
isKeyPressed(key: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
}
defineObject("flax.core/sdk_services#type:RawKeyEvent", ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","physicalKey","logicalKey","character","repeat","data"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyEvent", "object", {"isKeyPressed":_flaxMemberParameters10}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export namespace _RawKeyEventFactory {
export function fromMessage(message: DartMapInput<string, unknown | null, string, unknown | null>): RawKeyEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:RawKeyEvent", "fromMessage", [{"name":"message","required":true,"positional":true}], [message], {}) as RawKeyEvent;
}
}
const _RawKeyEventProxy = {type: "flax.core/sdk_services#type:RawKeyEvent", parameters: _flaxMemberParameters68, constructors: {"": _flaxMemberParameters68}, methods: {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters45,"toDiagnosticsNode":_flaxMemberParameters44,"debugFillProperties":_flaxMemberParameters43,"isKeyPressed":_flaxMemberParameters10}, getters: ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","physicalKey","logicalKey","character","repeat","data"], setters: [], contextMembers: [], superMembers: ["get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","get:physicalKey","get:logicalKey","get:character","get:repeat","get:data","toStringShort","toString","toDiagnosticsNode","debugFillProperties","isKeyPressed"]} as const;
export interface _RawKeyEventNative extends RawKeyEvent {
readonly [_flaxDartTypeValue]: _RawKeyEventNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
isKeyPressed(key: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
get isControlPressed(): boolean;
get isShiftPressed(): boolean;
get isAltPressed(): boolean;
get isMetaPressed(): boolean;
get physicalKey(): upstream2.PhysicalKeyboardKey;
get logicalKey(): upstream3.LogicalKeyboardKey;
get character(): string | null;
get repeat(): boolean;
get data(): upstream1.RawKeyEventData;
}
export abstract class _RawKeyEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawKeyEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEvent", readonly [], false];
constructor(options: {data: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; character?: string | null | undefined; repeat?: boolean | undefined}) { super(_RawKeyEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RawKeyEventNative.prototype, _RawKeyEventProxy);
export namespace _RawKeyEventFactory { export function implement(args: [options: {data: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; character?: string | null | undefined; repeat?: boolean | undefined}], implementation: {}): RawKeyEvent {
return constructProxy(_RawKeyEventProxy, args, implementation) as RawKeyEvent; } }
const _RawKeyEventBinding = _flaxProxyFactory(_RawKeyEventFactory, _RawKeyEventNative) as unknown as typeof _RawKeyEventFactory & (abstract new(options: {data: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; character?: string | null | undefined; repeat?: boolean | undefined}) => _RawKeyEventNative);
export const RawKeyEvent: typeof _RawKeyEventBinding & _FlaxInstanceType<RawKeyEvent> & _FlaxDartType<RawKeyEvent, readonly ["class", "flax.core/sdk_services#type:RawKeyEvent", readonly [], false]> = _flaxBindInstanceType<RawKeyEvent, typeof _RawKeyEventBinding>(_RawKeyEventBinding, "flax.core/sdk_services#type:RawKeyEvent", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _RawKeyEventBinding & _FlaxInstanceType<RawKeyEvent> & _FlaxDartType<RawKeyEvent, readonly ["class", "flax.core/sdk_services#type:RawKeyEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "physicalKey" | "logicalKey" | "character" | "repeat" | "data" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "isKeyPressed" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
