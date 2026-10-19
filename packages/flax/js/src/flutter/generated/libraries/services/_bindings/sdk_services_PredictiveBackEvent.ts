// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_SwipeEdge';
import '@flax/flutter/services/_bindings/sdk_services_SwipeEdge';
import { _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PredictiveBackEvent extends Readonly<{ "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [] }> { readonly __PredictiveBackEvent: unique symbol;
readonly [_flaxDartTypeValue]: PredictiveBackEvent;

readonly touchOffset: upstream0.Offset | null;
readonly progress: number;
readonly swipeEdge: upstream1.SwipeEdge;
readonly isButtonEvent: boolean;
toString(): string;
}
defineObject("flax.core/sdk_services#type:PredictiveBackEvent", ["touchOffset","progress","swipeEdge","isButtonEvent"], [], _flaxBindingMethods("flax.core/sdk_services#type:PredictiveBackEvent", "object", {"toString":_flaxMemberParameters0}, {}), []);
export namespace _PredictiveBackEventFactory {
export function fromMap(map: DartMapInput<string | null, unknown | null, string | null, unknown | null>): PredictiveBackEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:PredictiveBackEvent", "fromMap", [{"name":"map","required":true,"positional":true}], [map], {}) as PredictiveBackEvent;
}
}
export const PredictiveBackEvent: typeof _PredictiveBackEventFactory & _FlaxInstanceType<PredictiveBackEvent> & _FlaxDartType<PredictiveBackEvent, readonly ["class", "flax.core/sdk_services#type:PredictiveBackEvent", readonly [], false]> = _flaxBindInstanceType<PredictiveBackEvent, typeof _PredictiveBackEventFactory>(_PredictiveBackEventFactory, "flax.core/sdk_services#type:PredictiveBackEvent", ["dart:core::Object"]) as typeof _PredictiveBackEventFactory & _FlaxInstanceType<PredictiveBackEvent> & _FlaxDartType<PredictiveBackEvent, readonly ["class", "flax.core/sdk_services#type:PredictiveBackEvent", readonly [], false]>;
