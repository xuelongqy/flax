// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerEventConverter extends Readonly<{ "__flaxBound:package:flutter/src/gestures/converter.dart::PointerEventConverter": readonly [] }> { readonly __PointerEventConverter: unique symbol;
readonly [_flaxDartTypeValue]: PointerEventConverter;

}
defineObject("flax.core/sdk_gestures#type:PointerEventConverter", [], [], _flaxBindingMethods("flax.core/sdk_gestures#type:PointerEventConverter", "object", {}, {}), []);
export namespace _PointerEventConverterFactory { export function expand(data: DartIterableInput<upstream1.PointerData, Readonly<{ "__flaxBound:dart:ui::PointerData": readonly [] }>>, devicePixelRatioForView: ((viewId: number) => number | null)): DartIterable<upstream0.PointerEvent> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_gestures#function:PointerEventConverter.expand", [data, devicePixelRatioForView]);
return _flaxResult as DartIterable<upstream0.PointerEvent>;
} }
export const PointerEventConverter: typeof _PointerEventConverterFactory & _FlaxInstanceType<PointerEventConverter> & _FlaxDartType<PointerEventConverter, readonly ["class", "flax.core/sdk_gestures#type:PointerEventConverter", readonly [], false]> = _flaxBindInstanceType<PointerEventConverter, typeof _PointerEventConverterFactory>(_PointerEventConverterFactory, "flax.core/sdk_gestures#type:PointerEventConverter", ["dart:core::Object"]) as typeof _PointerEventConverterFactory & _FlaxInstanceType<PointerEventConverter> & _FlaxDartType<PointerEventConverter, readonly ["class", "flax.core/sdk_gestures#type:PointerEventConverter", readonly [], false]>;
