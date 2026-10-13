import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface UnfocusDisposition extends DartEnum {
    readonly __UnfocusDisposition: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const UnfocusDisposition: Readonly<{
    scope: UnfocusDisposition;
    previouslyFocusedChild: UnfocusDisposition;
    values: readonly UnfocusDisposition[];
} & _FlaxInstanceType<UnfocusDisposition> & _FlaxDartType<UnfocusDisposition, readonly ["class", "flax.core/flutter#type:UnfocusDisposition", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
