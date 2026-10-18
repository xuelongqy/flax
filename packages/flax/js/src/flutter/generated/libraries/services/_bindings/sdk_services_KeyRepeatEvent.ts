// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventDeviceType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventDeviceType';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
const _flaxMemberParameters0 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyRepeatEvent extends Omit<upstream0.KeyEvent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.KeyEvent>, Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyRepeatEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __KeyRepeatEvent: unique symbol;
readonly [_flaxDartTypeValue]: KeyRepeatEvent;

}
defineObject("flax.core/sdk_services#type:KeyRepeatEvent", ["physicalKey","logicalKey","character","timeStamp","deviceType","synthesized"], [], _flaxBindingMethods("flax.core/sdk_services#type:KeyRepeatEvent", "object", {}, {}), [], undefined, "flax.core/flutter#type:KeyEvent");
const _KeyRepeatEventProxy = {type: "flax.core/sdk_services#type:KeyRepeatEvent", parameters: [{"name":"physicalKey","required":true,"positional":false},{"name":"logicalKey","required":true,"positional":false},{"name":"character","required":false,"positional":false},{"name":"timeStamp","required":true,"positional":false},{"name":"deviceType","required":false,"positional":false}], constructors: {"":[{"name":"physicalKey","required":true,"positional":false},{"name":"logicalKey","required":true,"positional":false},{"name":"character","required":false,"positional":false},{"name":"timeStamp","required":true,"positional":false},{"name":"deviceType","required":false,"positional":false}]}, methods: {"debugFillProperties":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"toString":_flaxMemberParameters3}, getters: ["physicalKey","logicalKey","character","timeStamp","deviceType","synthesized"], setters: [], contextMembers: [], superMembers: ["get:physicalKey","get:logicalKey","get:character","get:timeStamp","get:deviceType","get:synthesized","debugFillProperties","toStringShort","toDiagnosticsNode","toString"]} as const;
export interface KeyRepeatEvent {
readonly [_flaxDartTypeValue]: KeyRepeatEvent;

debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
get physicalKey(): upstream2.PhysicalKeyboardKey;
get logicalKey(): upstream3.LogicalKeyboardKey;
get character(): string | null;
get timeStamp(): upstream4.Duration;
get deviceType(): upstream5.KeyEventDeviceType;
get synthesized(): boolean;
}
export abstract class KeyRepeatEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyRepeatEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: KeyRepeatEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:KeyRepeatEvent", readonly [], false];
constructor(options: {physicalKey: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; logicalKey: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; character?: string | null | undefined; timeStamp: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }>; deviceType?: upstream5.KeyEventDeviceType | undefined}) { super(_KeyRepeatEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(KeyRepeatEvent.prototype, _KeyRepeatEventProxy);
export namespace KeyRepeatEvent { export function implement(args: [options: {physicalKey: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; logicalKey: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; character?: string | null | undefined; timeStamp: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }>; deviceType?: upstream5.KeyEventDeviceType | undefined}], implementation: {}): KeyRepeatEvent {
return constructProxy(_KeyRepeatEventProxy, args, implementation) as KeyRepeatEvent; } }
_flaxBindInstanceType<KeyRepeatEvent, typeof KeyRepeatEvent>(KeyRepeatEvent, "flax.core/sdk_services#type:KeyRepeatEvent", ["flax.core/flutter#type:KeyEvent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "physicalKey" | "logicalKey" | "character" | "timeStamp" | "deviceType" | "synthesized" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyRepeatEvent" | "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
