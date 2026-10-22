// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LiveText extends Readonly<{ "__flaxBound:package:flutter/src/services/live_text.dart::LiveText": readonly [] }> { readonly __LiveText: unique symbol;
readonly [_flaxDartTypeValue]: LiveText;

}
defineObject("flax.core/sdk_services#type:LiveText", [], [], _flaxBindingMethods("flax.core/sdk_services#type:LiveText", "object", {}, {}), []);
export namespace _LiveTextFactory { export function isLiveTextInputAvailable(): Promise<boolean> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:LiveText.isLiveTextInputAvailable", [], _flaxMemberParameters0);
return _flaxResult as Promise<boolean>;
} }
export namespace _LiveTextFactory { export function startLiveTextInput(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:LiveText.startLiveTextInput", [], _flaxMemberParameters0);
return _flaxResult as Promise<void>;
} }
export const LiveText: typeof _LiveTextFactory & _FlaxInstanceType<LiveText> & _FlaxDartType<LiveText, readonly ["class", "flax.core/sdk_services#type:LiveText", readonly [], false]> = _flaxBindInstanceType<LiveText, typeof _LiveTextFactory>(_LiveTextFactory, "flax.core/sdk_services#type:LiveText", ["dart:core::Object"]) as typeof _LiveTextFactory & _FlaxInstanceType<LiveText> & _FlaxDartType<LiveText, readonly ["class", "flax.core/sdk_services#type:LiveText", readonly [], false]>;
