// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters2 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Stopwatch extends Readonly<{ "__flaxBound:dart:core::Stopwatch": readonly [] }> { readonly __Stopwatch: unique symbol;
readonly [_flaxDartTypeValue]: Stopwatch;

readonly frequency: number;
readonly elapsedTicks: number;
readonly elapsed: upstream0.Duration;
readonly elapsedMicroseconds: number;
readonly elapsedMilliseconds: number;
readonly isRunning: boolean;
start(): void;
stop(): void;
reset(): void;
}
defineObject("flax.core/sdk_dependencies#type:Stopwatch", ["frequency","elapsedTicks","elapsed","elapsedMicroseconds","elapsedMilliseconds","isRunning"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:Stopwatch", "object", {"start":_flaxMemberParameters2,"stop":_flaxMemberParameters2,"reset":_flaxMemberParameters2}, {}), []);
export function _StopwatchFactory(): Stopwatch {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Stopwatch", "", _flaxMemberParameters2, [], {}) as Stopwatch;
}
export const Stopwatch: typeof _StopwatchFactory & _FlaxInstanceType<Stopwatch> & _FlaxDartType<Stopwatch, readonly ["class", "flax.core/sdk_dependencies#type:Stopwatch", readonly [], false]> = _flaxBindInstanceType<Stopwatch, typeof _StopwatchFactory>(_StopwatchFactory, "flax.core/sdk_dependencies#type:Stopwatch", ["dart:core::Object"]) as typeof _StopwatchFactory & _FlaxInstanceType<Stopwatch> & _FlaxDartType<Stopwatch, readonly ["class", "flax.core/sdk_dependencies#type:Stopwatch", readonly [], false]>;
