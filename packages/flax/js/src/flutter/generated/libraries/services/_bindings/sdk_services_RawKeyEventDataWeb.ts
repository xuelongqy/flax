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
import { _flaxMemberParameters10, _flaxMemberParameters75, _flaxMemberParameters69, _flaxMemberParameters0, _flaxMemberParameters44, _flaxMemberParameters43, _flaxMemberParameters45 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyEventDataWeb extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_web.dart::RawKeyEventDataWeb": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawKeyEventDataWeb: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyEventDataWeb;

readonly isControlPressed: boolean;
readonly isShiftPressed: boolean;
readonly isAltPressed: boolean;
readonly isMetaPressed: boolean;
readonly modifiersPressed: DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
readonly physicalKey: upstream4.PhysicalKeyboardKey;
readonly logicalKey: upstream5.LogicalKeyboardKey;
readonly keyLabel: string;
readonly code: string;
readonly key: string;
readonly location: number;
readonly metaState: number;
readonly keyCode: number;
isModifierPressed(key: upstream3.ModifierKey, options?: {side?: upstream2.KeyboardSide | undefined}): boolean;
getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide;
shouldDispatchEvent(): boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_services#type:RawKeyEventDataWeb", ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed","physicalKey","logicalKey","keyLabel","code","key","location","metaState","keyCode"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyEventDataWeb", "object", {"getModifierSide":_flaxMemberParameters10}, {}), [], undefined, "flax.core/sdk_services#type:RawKeyEventData");
export function _RawKeyEventDataWebFactory(options: { code: string; key: string; location?: number | undefined; metaState?: number | undefined; keyCode?: number | undefined }): RawKeyEventDataWeb {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:RawKeyEventDataWeb", "", [{"name":"code","required":true},{"name":"key","required":true},{"name":"location"},{"name":"metaState"},{"name":"keyCode"}], [], options) as RawKeyEventDataWeb;
}
const _RawKeyEventDataWebProxy = {type: "flax.core/sdk_services#type:RawKeyEventDataWeb", parameters: _flaxMemberParameters75, constructors: {"": _flaxMemberParameters75}, methods: {"isModifierPressed":_flaxMemberParameters69,"getModifierSide":_flaxMemberParameters10,"shouldDispatchEvent":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters44,"debugFillProperties":_flaxMemberParameters43,"toString":_flaxMemberParameters45}, getters: ["code","key","location","metaState","keyCode","keyLabel","physicalKey","logicalKey","isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed"], setters: [], contextMembers: [], superMembers: ["get:code","get:key","get:location","get:metaState","get:keyCode","get:keyLabel","get:physicalKey","get:logicalKey","get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","get:modifiersPressed","isModifierPressed","getModifierSide","shouldDispatchEvent","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _RawKeyEventDataWebNative extends RawKeyEventDataWeb {
readonly [_flaxDartTypeValue]: _RawKeyEventDataWebNative;

isModifierPressed(key: upstream3.ModifierKey, options?: {side?: upstream2.KeyboardSide | undefined}): boolean;
getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide;
shouldDispatchEvent(): boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
get code(): string;
get key(): string;
get location(): number;
get metaState(): number;
get keyCode(): number;
get keyLabel(): string;
get physicalKey(): upstream4.PhysicalKeyboardKey;
get logicalKey(): upstream5.LogicalKeyboardKey;
get isControlPressed(): boolean;
get isShiftPressed(): boolean;
get isAltPressed(): boolean;
get isMetaPressed(): boolean;
get modifiersPressed(): DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
}
export abstract class _RawKeyEventDataWebNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataWeb>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawKeyEventDataWeb;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataWeb", readonly [], false];
constructor(options: {code: string; key: string; location?: number | undefined; metaState?: number | undefined; keyCode?: number | undefined}) { super(_RawKeyEventDataWebProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RawKeyEventDataWebNative.prototype, _RawKeyEventDataWebProxy);
export namespace _RawKeyEventDataWebFactory { export function implement(args: [options: {code: string; key: string; location?: number | undefined; metaState?: number | undefined; keyCode?: number | undefined}], implementation: {}): RawKeyEventDataWeb {
return constructProxy(_RawKeyEventDataWebProxy, args, implementation) as RawKeyEventDataWeb; } }
const _RawKeyEventDataWebBinding = _flaxProxyFactory(_RawKeyEventDataWebFactory, _RawKeyEventDataWebNative) as unknown as typeof _RawKeyEventDataWebFactory & (new(options: {code: string; key: string; location?: number | undefined; metaState?: number | undefined; keyCode?: number | undefined}) => _RawKeyEventDataWebNative);
export namespace _RawKeyEventDataWebFactory { export declare const modifierNone: number; }
export namespace _RawKeyEventDataWebFactory { export declare const modifierShift: number; }
export namespace _RawKeyEventDataWebFactory { export declare const modifierAlt: number; }
export namespace _RawKeyEventDataWebFactory { export declare const modifierControl: number; }
export namespace _RawKeyEventDataWebFactory { export declare const modifierMeta: number; }
export namespace _RawKeyEventDataWebFactory { export declare const modifierNumLock: number; }
export namespace _RawKeyEventDataWebFactory { export declare const modifierCapsLock: number; }
export namespace _RawKeyEventDataWebFactory { export declare const modifierScrollLock: number; }
_flaxDefineStaticGetters(_RawKeyEventDataWebFactory, "flax.core/sdk_services#read:RawKeyEventDataWeb.", ["modifierNone","modifierShift","modifierAlt","modifierControl","modifierMeta","modifierNumLock","modifierCapsLock","modifierScrollLock"]);
export const RawKeyEventDataWeb: typeof _RawKeyEventDataWebBinding & _FlaxInstanceType<RawKeyEventDataWeb> & _FlaxDartType<RawKeyEventDataWeb, readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataWeb", readonly [], false]> = _flaxBindInstanceType<RawKeyEventDataWeb, typeof _RawKeyEventDataWebBinding>(_RawKeyEventDataWebBinding, "flax.core/sdk_services#type:RawKeyEventDataWeb", ["flax.core/sdk_services#type:RawKeyEventData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _RawKeyEventDataWebBinding & _FlaxInstanceType<RawKeyEventDataWeb> & _FlaxDartType<RawKeyEventDataWeb, readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataWeb", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "code" | "key" | "location" | "metaState" | "keyCode" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_web.dart::RawKeyEventDataWeb" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
