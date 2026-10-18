// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
const _flaxMemberParameters0 = [{"name":"onTick","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TickerProvider extends Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> { readonly __TickerProvider: unique symbol;
readonly [_flaxDartTypeValue]: TickerProvider;

createTicker(onTick: ((elapsed: upstream1.Duration) => void)): upstream0.Ticker;
}
defineObject("flax.core/flutter#type:TickerProvider", [], [], _flaxBindingMethods("flax.core/flutter#type:TickerProvider", "object", {"createTicker":_flaxMemberParameters0}, {}), []);
export const TickerProvider: object & _FlaxInstanceType<TickerProvider> & _FlaxDartType<TickerProvider, readonly ["class", "flax.core/flutter#type:TickerProvider", readonly [], false]> = _flaxBindInstanceType<TickerProvider, object>({}, "flax.core/flutter#type:TickerProvider", ["dart:core::Object"]) as object & _FlaxInstanceType<TickerProvider> & _FlaxDartType<TickerProvider, readonly ["class", "flax.core/flutter#type:TickerProvider", readonly [], false]>;
