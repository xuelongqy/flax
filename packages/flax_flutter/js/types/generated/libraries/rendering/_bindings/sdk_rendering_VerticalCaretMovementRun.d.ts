import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VerticalCaretMovementRun extends Omit<upstream0.Iterator<upstream1.TextPosition>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/editable.dart::VerticalCaretMovementRun": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Iterator": readonly [upstream1.TextPosition];
}> {
    readonly __VerticalCaretMovementRun: unique symbol;
    readonly [_flaxDartTypeValue]: VerticalCaretMovementRun;
    readonly current: upstream1.TextPosition;
    readonly isValid: boolean;
    moveNext(): boolean;
    movePrevious(): boolean;
    moveByOffset(offset: number): boolean;
}
export declare const VerticalCaretMovementRun: object & _FlaxInstanceType<VerticalCaretMovementRun> & _FlaxDartType<VerticalCaretMovementRun, readonly ["class", "flax.core/sdk_rendering#type:VerticalCaretMovementRun", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "current" | "isValid" | "moveNext" | "movePrevious" | "moveByOffset" | "__flaxBound:package:flutter/src/rendering/editable.dart::VerticalCaretMovementRun" | "__flaxBound:dart:core::Iterator";
export {};
