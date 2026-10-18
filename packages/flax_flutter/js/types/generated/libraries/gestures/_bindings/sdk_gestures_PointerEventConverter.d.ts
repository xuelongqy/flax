import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PointerEventConverter extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/converter.dart::PointerEventConverter": readonly [];
}> {
    readonly __PointerEventConverter: unique symbol;
    readonly [_flaxDartTypeValue]: PointerEventConverter;
}
export declare namespace _PointerEventConverterFactory {
    function expand(data: DartIterableInput<upstream1.PointerData, Readonly<{
        "__flaxBound:dart:ui::PointerData": readonly [];
    }>>, devicePixelRatioForView: ((viewId: number) => number | null)): DartIterable<upstream0.PointerEvent>;
}
export declare const PointerEventConverter: typeof _PointerEventConverterFactory & _FlaxInstanceType<PointerEventConverter> & _FlaxDartType<PointerEventConverter, readonly ["class", "flax.core/sdk_gestures#type:PointerEventConverter", readonly [], false]>;
