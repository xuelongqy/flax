// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_TimedBlock';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TimedBlock';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_AggregatedTimedBlock';
import '@flax/flutter/foundation/_bindings/sdk_foundation_AggregatedTimedBlock';
const _flaxMemberParameters0 = [{"name":"name","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AggregatedTimings extends Readonly<{ "__flaxBound:package:flutter/src/foundation/timeline.dart::AggregatedTimings": readonly [] }> { readonly __AggregatedTimings: unique symbol;
readonly [_flaxDartTypeValue]: AggregatedTimings;

readonly timedBlocks: DartList<upstream0.TimedBlock>;
readonly aggregatedBlocks: DartList<upstream1.AggregatedTimedBlock>;
getAggregated(name: string): upstream1.AggregatedTimedBlock;
}
defineObject("flax.core/sdk_foundation#type:AggregatedTimings", ["timedBlocks","aggregatedBlocks"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:AggregatedTimings", "object", {"getAggregated":_flaxMemberParameters0}, {}), []);
export function _AggregatedTimingsFactory(timedBlocks: DartListInput<upstream0.TimedBlock, Readonly<{ "__flaxBound:package:flutter/src/foundation/timeline.dart::TimedBlock": readonly [] }>>): AggregatedTimings {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:AggregatedTimings", "", [{"name":"timedBlocks","required":true,"positional":true}], [timedBlocks], {}) as AggregatedTimings;
}
export const AggregatedTimings: typeof _AggregatedTimingsFactory & _FlaxInstanceType<AggregatedTimings> & _FlaxDartType<AggregatedTimings, readonly ["class", "flax.core/sdk_foundation#type:AggregatedTimings", readonly [], false]> = _flaxBindInstanceType<AggregatedTimings, typeof _AggregatedTimingsFactory>(_AggregatedTimingsFactory, "flax.core/sdk_foundation#type:AggregatedTimings", ["dart:core::Object"]) as typeof _AggregatedTimingsFactory & _FlaxInstanceType<AggregatedTimings> & _FlaxDartType<AggregatedTimings, readonly ["class", "flax.core/sdk_foundation#type:AggregatedTimings", readonly [], false]>;
