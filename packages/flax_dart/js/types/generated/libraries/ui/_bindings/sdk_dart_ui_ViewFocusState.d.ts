import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ViewFocusState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::ViewFocusState">, Readonly<{
    "__flaxBound:dart:ui::ViewFocusState": readonly [];
}> {
    readonly __ViewFocusState: unique symbol;
    readonly [_flaxDartTypeValue]: ViewFocusState;
    readonly name: string;
    readonly index: number;
}
export declare const ViewFocusState: Readonly<{
    unfocused: ViewFocusState;
    focused: ViewFocusState;
    values: readonly ViewFocusState[];
} & _FlaxInstanceType<ViewFocusState> & _FlaxDartType<ViewFocusState, readonly ["class", "flax.core/sdk_dart_ui#type:ViewFocusState", readonly [], false]>>;
