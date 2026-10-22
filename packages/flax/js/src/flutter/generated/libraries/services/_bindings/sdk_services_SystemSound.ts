// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SystemSoundType';
import '@flax/flutter/services/_bindings/sdk_services_SystemSoundType';
import { _flaxMemberParameters123 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemSound extends Readonly<{ "__flaxBound:package:flutter/src/services/system_sound.dart::SystemSound": readonly [] }> { readonly __SystemSound: unique symbol;
readonly [_flaxDartTypeValue]: SystemSound;

}
defineObject("flax.core/sdk_services#type:SystemSound", [], [], _flaxBindingMethods("flax.core/sdk_services#type:SystemSound", "object", {}, {}), []);
export namespace _SystemSoundFactory { export function play(type: upstream0.SystemSoundType): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:SystemSound.play", [type], _flaxMemberParameters123);
return _flaxResult as Promise<void>;
} }
export const SystemSound: typeof _SystemSoundFactory & _FlaxInstanceType<SystemSound> & _FlaxDartType<SystemSound, readonly ["class", "flax.core/sdk_services#type:SystemSound", readonly [], false]> = _flaxBindInstanceType<SystemSound, typeof _SystemSoundFactory>(_SystemSoundFactory, "flax.core/sdk_services#type:SystemSound", ["dart:core::Object"]) as typeof _SystemSoundFactory & _FlaxInstanceType<SystemSound> & _FlaxDartType<SystemSound, readonly ["class", "flax.core/sdk_services#type:SystemSound", readonly [], false]>;
