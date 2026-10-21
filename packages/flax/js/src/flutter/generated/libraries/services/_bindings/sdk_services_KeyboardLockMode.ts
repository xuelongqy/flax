// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import { _flaxMemberParameters60 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyboardLockMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "logicalKey" | "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyboardLockMode">, Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyboardLockMode": readonly [] }> { readonly __KeyboardLockMode: unique symbol;
readonly [_flaxDartTypeValue]: KeyboardLockMode;
readonly name: string;
readonly index: number;

readonly logicalKey: upstream1.LogicalKeyboardKey;
}
defineEnum("flax.core/sdk_services#type:KeyboardLockMode", ["numLock","scrollLock","capsLock"], {
get logicalKey(): upstream1.LogicalKeyboardKey { return invokeTopLevel("flax.core/sdk_services#function:KeyboardLockMode.logicalKey%3Aget", [this]) as upstream1.LogicalKeyboardKey; },
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_KeyboardLockMode_api = {
numLock: enumValue<KeyboardLockMode>("flax.core/sdk_services#type:KeyboardLockMode", "numLock"),
scrollLock: enumValue<KeyboardLockMode>("flax.core/sdk_services#type:KeyboardLockMode", "scrollLock"),
capsLock: enumValue<KeyboardLockMode>("flax.core/sdk_services#type:KeyboardLockMode", "capsLock"),
values: Object.freeze([enumValue<KeyboardLockMode>("flax.core/sdk_services#type:KeyboardLockMode", "numLock"), enumValue<KeyboardLockMode>("flax.core/sdk_services#type:KeyboardLockMode", "scrollLock"), enumValue<KeyboardLockMode>("flax.core/sdk_services#type:KeyboardLockMode", "capsLock")]),
findLockByLogicalKey(logicalKey: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): KeyboardLockMode | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:KeyboardLockMode.findLockByLogicalKey%3Acall", [logicalKey], _flaxMemberParameters60);
return _flaxResult as KeyboardLockMode | null;
},
};
export const KeyboardLockMode = Object.freeze(_flaxBindInstanceType<KeyboardLockMode, typeof _flaxEnum_KeyboardLockMode_api>(_flaxEnum_KeyboardLockMode_api, "flax.core/sdk_services#type:KeyboardLockMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_KeyboardLockMode_api & _FlaxInstanceType<KeyboardLockMode> & _FlaxDartType<KeyboardLockMode, readonly ["class", "flax.core/sdk_services#type:KeyboardLockMode", readonly [], false]>);
