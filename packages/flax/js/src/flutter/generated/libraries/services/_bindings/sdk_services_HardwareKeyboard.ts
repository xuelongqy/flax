// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_KeyboardLockMode';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardLockMode';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import { _flaxMemberParameters37, _flaxMemberParameters10, _flaxMemberParameters19, _flaxMemberParameters0, _flaxMemberParameters6 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HardwareKeyboard extends Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }> { readonly __HardwareKeyboard: unique symbol;
readonly [_flaxDartTypeValue]: HardwareKeyboard;

}
defineObject("flax.core/sdk_services#type:HardwareKeyboard", ["physicalKeysPressed","logicalKeysPressed","lockModesEnabled","isControlPressed","isShiftPressed","isAltPressed","isMetaPressed"], [], _flaxBindingMethods("flax.core/sdk_services#type:HardwareKeyboard", "object", {"lookUpLayout":_flaxMemberParameters37,"isLogicalKeyPressed":_flaxMemberParameters10,"isPhysicalKeyPressed":_flaxMemberParameters10,"addHandler":_flaxMemberParameters19,"removeHandler":_flaxMemberParameters19,"syncKeyboardState":_flaxMemberParameters0,"handleKeyEvent":_flaxMemberParameters6}, {}), []);
const _HardwareKeyboardProxy = {type: "flax.core/sdk_services#type:HardwareKeyboard", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"lookUpLayout":_flaxMemberParameters37,"isLogicalKeyPressed":_flaxMemberParameters10,"isPhysicalKeyPressed":_flaxMemberParameters10,"addHandler":_flaxMemberParameters19,"removeHandler":_flaxMemberParameters19,"syncKeyboardState":_flaxMemberParameters0,"handleKeyEvent":_flaxMemberParameters6}, getters: ["physicalKeysPressed","logicalKeysPressed","lockModesEnabled","isControlPressed","isShiftPressed","isAltPressed","isMetaPressed"], setters: [], contextMembers: [], superMembers: ["get:physicalKeysPressed","get:logicalKeysPressed","get:lockModesEnabled","get:isControlPressed","get:isShiftPressed","get:isAltPressed","get:isMetaPressed","lookUpLayout","isLogicalKeyPressed","isPhysicalKeyPressed","addHandler","removeHandler","syncKeyboardState","handleKeyEvent"]} as const;
export interface HardwareKeyboard {
readonly [_flaxDartTypeValue]: HardwareKeyboard;

lookUpLayout(physicalKey: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): upstream1.LogicalKeyboardKey | null;
isLogicalKeyPressed(key: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
isPhysicalKeyPressed(key: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
addHandler(handler: ((event: upstream3.KeyEvent) => boolean)): void;
removeHandler(handler: ((event: upstream3.KeyEvent) => boolean)): void;
syncKeyboardState(): Promise<void>;
handleKeyEvent(event: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
get physicalKeysPressed(): DartSet<upstream0.PhysicalKeyboardKey>;
get logicalKeysPressed(): DartSet<upstream1.LogicalKeyboardKey>;
get lockModesEnabled(): DartSet<upstream2.KeyboardLockMode>;
get isControlPressed(): boolean;
get isShiftPressed(): boolean;
get isAltPressed(): boolean;
get isMetaPressed(): boolean;
}
export abstract class HardwareKeyboard extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HardwareKeyboard>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HardwareKeyboard;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:HardwareKeyboard", readonly [], false];
constructor() { super(_HardwareKeyboardProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(HardwareKeyboard.prototype, _HardwareKeyboardProxy);
export namespace HardwareKeyboard { export function implement(args: [], implementation: {}): HardwareKeyboard {
return constructProxy(_HardwareKeyboardProxy, args, implementation) as HardwareKeyboard; } }
export namespace HardwareKeyboard { export declare const instance: HardwareKeyboard; }
_flaxDefineStaticGetters(HardwareKeyboard, "flax.core/sdk_services#read:HardwareKeyboard.", ["instance"]);
_flaxBindInstanceType<HardwareKeyboard, typeof HardwareKeyboard>(HardwareKeyboard, "flax.core/sdk_services#type:HardwareKeyboard", ["dart:core::Object"]);
