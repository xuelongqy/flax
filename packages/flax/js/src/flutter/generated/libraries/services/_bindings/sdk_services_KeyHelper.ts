// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import { _flaxMemberParameters10, _flaxMemberParameters35, _flaxMemberParameters36, _flaxMemberParameters0, _flaxMemberParameters48 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyHelper extends Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [] }> { readonly __KeyHelper: unique symbol;
readonly [_flaxDartTypeValue]: KeyHelper;

readonly debugToolkit: string;
readonly platformPlane: number;
getModifierSide(key: upstream1.ModifierKey): upstream0.KeyboardSide;
isModifierPressed(key: upstream1.ModifierKey, modifiers: number, options: {isDown: boolean; keyCode: number; side?: upstream0.KeyboardSide | undefined}): boolean;
numpadKey(keyCode: number): upstream2.LogicalKeyboardKey | null;
logicalKey(keyCode: number): upstream2.LogicalKeyboardKey | null;
}
defineObject("flax.core/sdk_services#type:KeyHelper", ["debugToolkit","platformPlane"], [], _flaxBindingMethods("flax.core/sdk_services#type:KeyHelper", "object", {"getModifierSide":_flaxMemberParameters10,"isModifierPressed":_flaxMemberParameters35,"numpadKey":_flaxMemberParameters36,"logicalKey":_flaxMemberParameters36}, {}), []);
export function _KeyHelperFactory(toolkit: string): KeyHelper {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:KeyHelper", "", [{"name":"toolkit","required":true,"positional":true}], [toolkit], {}) as KeyHelper;
}
const _KeyHelperProxy = {type: "flax.core/sdk_services#type:KeyHelper", parameters: _flaxMemberParameters0, constructors: {}, methods: {"getModifierSide":_flaxMemberParameters10,"isModifierPressed":_flaxMemberParameters48,"numpadKey":_flaxMemberParameters36,"logicalKey":_flaxMemberParameters36}, getters: ["debugToolkit","platformPlane"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _KeyHelperFactory { export function implement(args: [], implementation: {getModifierSide: ((key: upstream1.ModifierKey) => upstream0.KeyboardSide); isModifierPressed: ((key: upstream1.ModifierKey, modifiers: number, options: { side?: upstream0.KeyboardSide | undefined; keyCode: number; isDown: boolean }) => boolean); numpadKey: ((keyCode: number) => Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null); logicalKey: ((keyCode: number) => Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null); get debugToolkit(): string; get platformPlane(): number}): KeyHelper {
return constructProxy(_KeyHelperProxy, args, implementation) as KeyHelper; } }
export const KeyHelper: typeof _KeyHelperFactory & _FlaxInstanceType<KeyHelper> & _FlaxDartType<KeyHelper, readonly ["class", "flax.core/sdk_services#type:KeyHelper", readonly [], false]> = _flaxBindInstanceType<KeyHelper, typeof _KeyHelperFactory>(_KeyHelperFactory, "flax.core/sdk_services#type:KeyHelper", ["dart:core::Object"]) as typeof _KeyHelperFactory & _FlaxInstanceType<KeyHelper> & _FlaxDartType<KeyHelper, readonly ["class", "flax.core/sdk_services#type:KeyHelper", readonly [], false]>;
