// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AggregatedTimedBlock extends Readonly<{ "__flaxBound:package:flutter/src/foundation/timeline.dart::AggregatedTimedBlock": readonly [] }> { readonly __AggregatedTimedBlock: unique symbol;
readonly [_flaxDartTypeValue]: AggregatedTimedBlock;

readonly name: string;
readonly duration: number;
readonly count: number;
toString(): string;
}
defineObject("flax.core/sdk_foundation#type:AggregatedTimedBlock", ["name","duration","count"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:AggregatedTimedBlock", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _AggregatedTimedBlockFactory(options: { name: string; duration: number; count: number }): AggregatedTimedBlock {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:AggregatedTimedBlock", "", [{"name":"name","required":true},{"name":"duration","required":true},{"name":"count","required":true}], [], options) as AggregatedTimedBlock;
}
export const AggregatedTimedBlock: typeof _AggregatedTimedBlockFactory & _FlaxInstanceType<AggregatedTimedBlock> & _FlaxDartType<AggregatedTimedBlock, readonly ["class", "flax.core/sdk_foundation#type:AggregatedTimedBlock", readonly [], false]> = _flaxBindInstanceType<AggregatedTimedBlock, typeof _AggregatedTimedBlockFactory>(_AggregatedTimedBlockFactory, "flax.core/sdk_foundation#type:AggregatedTimedBlock", ["dart:core::Object"]) as typeof _AggregatedTimedBlockFactory & _FlaxInstanceType<AggregatedTimedBlock> & _FlaxDartType<AggregatedTimedBlock, readonly ["class", "flax.core/sdk_foundation#type:AggregatedTimedBlock", readonly [], false]>;
