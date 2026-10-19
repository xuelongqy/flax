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
const _flaxMemberParameters0 = [{"name":"key","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"code","required":true},{"name":"key","required":true},{"name":"location"},{"name":"metaState"},{"name":"keyCode"}] as const;
const _flaxMemberParameters2 = [{"name":"key","required":true,"positional":true},{"name":"side"}] as const;
const _flaxMemberParameters3 = [] as const;
const _flaxMemberParameters4 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters5 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"minLevel"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyEventDataWeb extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_web.dart::RawKeyEventDataWeb": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawKeyEventDataWeb: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyEventDataWeb;

}
defineObject("flax.core/sdk_services#type:RawKeyEventDataWeb", ["isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed","physicalKey","logicalKey","keyLabel","code","key","location","metaState","keyCode"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyEventDataWeb", "object", {"getModifierSide":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_services#type:RawKeyEventData");
const _RawKeyEventDataWebProxy = {type: "flax.core/sdk_services#type:RawKeyEventDataWeb", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"isModifierPressed":_flaxMemberParameters2,"getModifierSide":_flaxMemberParameters0,"shouldDispatchEvent":_flaxMemberParameters3,"toStringShort":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters6}, getters: ["code","key","location","metaState","keyCode","keyLabel","physicalKey","logicalKey","isControlPressed","isShiftPressed","isAltPressed","isMetaPressed","modifiersPressed"], setters: [], contextMembers: [], superMembers: ["get:code","get:key","get:location","get:metaState","get:keyCode","get:keyLabel","get:physicalKey","get:logicalKey","get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","get:modifiersPressed","isModifierPressed","getModifierSide","shouldDispatchEvent","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface RawKeyEventDataWeb {
readonly [_flaxDartTypeValue]: RawKeyEventDataWeb;

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
export abstract class RawKeyEventDataWeb extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataWeb>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawKeyEventDataWeb;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataWeb", readonly [], false];
constructor(options: {code: string; key: string; location?: number | undefined; metaState?: number | undefined; keyCode?: number | undefined}) { super(_RawKeyEventDataWebProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RawKeyEventDataWeb.prototype, _RawKeyEventDataWebProxy);
export namespace RawKeyEventDataWeb { export function implement(args: [options: {code: string; key: string; location?: number | undefined; metaState?: number | undefined; keyCode?: number | undefined}], implementation: {}): RawKeyEventDataWeb {
return constructProxy(_RawKeyEventDataWebProxy, args, implementation) as RawKeyEventDataWeb; } }
export namespace RawKeyEventDataWeb { export declare const modifierNone: number; }
export namespace RawKeyEventDataWeb { export declare const modifierShift: number; }
export namespace RawKeyEventDataWeb { export declare const modifierAlt: number; }
export namespace RawKeyEventDataWeb { export declare const modifierControl: number; }
export namespace RawKeyEventDataWeb { export declare const modifierMeta: number; }
export namespace RawKeyEventDataWeb { export declare const modifierNumLock: number; }
export namespace RawKeyEventDataWeb { export declare const modifierCapsLock: number; }
export namespace RawKeyEventDataWeb { export declare const modifierScrollLock: number; }
_flaxDefineStaticGetters(RawKeyEventDataWeb, "flax.core/sdk_services#read:RawKeyEventDataWeb.", ["modifierNone","modifierShift","modifierAlt","modifierControl","modifierMeta","modifierNumLock","modifierCapsLock","modifierScrollLock"]);
_flaxBindInstanceType<RawKeyEventDataWeb, typeof RawKeyEventDataWeb>(RawKeyEventDataWeb, "flax.core/sdk_services#type:RawKeyEventDataWeb", ["flax.core/sdk_services#type:RawKeyEventData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "code" | "key" | "location" | "metaState" | "keyCode" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_web.dart::RawKeyEventDataWeb" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
