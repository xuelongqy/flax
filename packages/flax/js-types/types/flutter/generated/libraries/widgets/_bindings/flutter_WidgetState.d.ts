import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface WidgetState extends DartEnum {
    readonly __WidgetState: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const WidgetState: Readonly<{
    hovered: WidgetState;
    focused: WidgetState;
    pressed: WidgetState;
    dragged: WidgetState;
    selected: WidgetState;
    scrolledUnder: WidgetState;
    disabled: WidgetState;
    error: WidgetState;
    values: readonly WidgetState[];
} & _FlaxInstanceType<WidgetState> & _FlaxDartType<WidgetState, readonly ["class", "flax.core/flutter#type:WidgetState", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
