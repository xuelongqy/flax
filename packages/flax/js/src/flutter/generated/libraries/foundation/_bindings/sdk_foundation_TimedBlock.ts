// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TimedBlock extends Readonly<{ "__flaxBound:package:flutter/src/foundation/timeline.dart::TimedBlock": readonly [] }> { readonly __TimedBlock: unique symbol;
readonly [_flaxDartTypeValue]: TimedBlock;

readonly name: string;
readonly start: number;
readonly end: number;
readonly duration: number;
toString(): string;
}
defineObject("flax.core/sdk_foundation#type:TimedBlock", ["name","start","end","duration"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:TimedBlock", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _TimedBlockFactory(options: { name: string; start: number; end: number }): TimedBlock {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:TimedBlock", "", [{"name":"name","required":true},{"name":"start","required":true},{"name":"end","required":true}], [], options) as TimedBlock;
}
export const TimedBlock: typeof _TimedBlockFactory & _FlaxInstanceType<TimedBlock> & _FlaxDartType<TimedBlock, readonly ["class", "flax.core/sdk_foundation#type:TimedBlock", readonly [], false]> = _flaxBindInstanceType<TimedBlock, typeof _TimedBlockFactory>(_TimedBlockFactory, "flax.core/sdk_foundation#type:TimedBlock", ["dart:core::Object"]) as typeof _TimedBlockFactory & _FlaxInstanceType<TimedBlock> & _FlaxDartType<TimedBlock, readonly ["class", "flax.core/sdk_foundation#type:TimedBlock", readonly [], false]>;
