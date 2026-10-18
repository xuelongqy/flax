// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"physicalKey","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawKeyboard extends Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyboard": readonly [] }> { readonly __RawKeyboard: unique symbol;
readonly [_flaxDartTypeValue]: RawKeyboard;

get keyEventHandler(): ((event: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => boolean) | null;
readonly keysPressed: DartSet<upstream1.LogicalKeyboardKey>;
readonly physicalKeysPressed: DartSet<upstream2.PhysicalKeyboardKey>;
addListener(listener: ((value: upstream0.RawKeyEvent) => void)): void;
removeListener(listener: ((value: upstream0.RawKeyEvent) => void)): void;
handleRawKeyEvent(event: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
lookUpLayout(physicalKey: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): upstream1.LogicalKeyboardKey | null;
set keyEventHandler(value: ((event: upstream0.RawKeyEvent) => boolean) | null);
}
defineObject("flax.core/sdk_services#type:RawKeyboard", ["keyEventHandler","keysPressed","physicalKeysPressed"], ["keyEventHandler"], _flaxBindingMethods("flax.core/sdk_services#type:RawKeyboard", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"handleRawKeyEvent":_flaxMemberParameters1,"lookUpLayout":_flaxMemberParameters2}, {}), []);
const _RawKeyboardFactory = {} as {readonly instance: RawKeyboard};
_flaxDefineStaticGetters(_RawKeyboardFactory, "flax.core/sdk_services#read:RawKeyboard.", ["instance"]);
export const RawKeyboard: typeof _RawKeyboardFactory & _FlaxInstanceType<RawKeyboard> & _FlaxDartType<RawKeyboard, readonly ["class", "flax.core/sdk_services#type:RawKeyboard", readonly [], false]> = _flaxBindInstanceType<RawKeyboard, typeof _RawKeyboardFactory>(_RawKeyboardFactory, "flax.core/sdk_services#type:RawKeyboard", ["dart:core::Object"]) as typeof _RawKeyboardFactory & _FlaxInstanceType<RawKeyboard> & _FlaxDartType<RawKeyboard, readonly ["class", "flax.core/sdk_services#type:RawKeyboard", readonly [], false]>;
