// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_FramePhase';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FramePhase';
const _flaxMemberParameters0 = [{"name":"phase","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FrameTiming extends Readonly<{ "__flaxBound:dart:ui::FrameTiming": readonly [] }> { readonly __FrameTiming: unique symbol;
readonly [_flaxDartTypeValue]: FrameTiming;

readonly buildDuration: upstream0.Duration;
readonly rasterDuration: upstream0.Duration;
readonly vsyncOverhead: upstream0.Duration;
readonly totalSpan: upstream0.Duration;
readonly layerCacheCount: number;
readonly layerCacheBytes: number;
readonly layerCacheMegabytes: number;
readonly pictureCacheCount: number;
readonly pictureCacheBytes: number;
readonly pictureCacheMegabytes: number;
readonly frameNumber: number;
timestampInMicroseconds(phase: upstream1.FramePhase): number;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:FrameTiming", ["buildDuration","rasterDuration","vsyncOverhead","totalSpan","layerCacheCount","layerCacheBytes","layerCacheMegabytes","pictureCacheCount","pictureCacheBytes","pictureCacheMegabytes","frameNumber"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:FrameTiming", "object", {"timestampInMicroseconds":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, {}), []);
export function _FrameTimingFactory(options: { vsyncStart: number; buildStart: number; buildFinish: number; rasterStart: number; rasterFinish: number; rasterFinishWallTime: number; layerCacheCount?: number | undefined; layerCacheBytes?: number | undefined; pictureCacheCount?: number | undefined; pictureCacheBytes?: number | undefined; frameNumber?: number | undefined }): FrameTiming {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FrameTiming", "", [{"name":"vsyncStart","required":true,"positional":false},{"name":"buildStart","required":true,"positional":false},{"name":"buildFinish","required":true,"positional":false},{"name":"rasterStart","required":true,"positional":false},{"name":"rasterFinish","required":true,"positional":false},{"name":"rasterFinishWallTime","required":true,"positional":false},{"name":"layerCacheCount","required":false,"positional":false},{"name":"layerCacheBytes","required":false,"positional":false},{"name":"pictureCacheCount","required":false,"positional":false},{"name":"pictureCacheBytes","required":false,"positional":false},{"name":"frameNumber","required":false,"positional":false}], [], options) as FrameTiming;
}
export const FrameTiming: typeof _FrameTimingFactory & _FlaxInstanceType<FrameTiming> & _FlaxDartType<FrameTiming, readonly ["class", "flax.core/sdk_dart_ui#type:FrameTiming", readonly [], false]> = _flaxBindInstanceType<FrameTiming, typeof _FrameTimingFactory>(_FrameTimingFactory, "flax.core/sdk_dart_ui#type:FrameTiming", ["dart:core::Object"]) as typeof _FrameTimingFactory & _FlaxInstanceType<FrameTiming> & _FlaxDartType<FrameTiming, readonly ["class", "flax.core/sdk_dart_ui#type:FrameTiming", readonly [], false]>;
