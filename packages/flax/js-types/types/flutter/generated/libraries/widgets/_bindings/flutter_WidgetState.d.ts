import { type DartEnum } from '@flax/core/bindings';
export interface WidgetState extends DartEnum {
    readonly type: "flax.core/flutter#type:WidgetState";
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
}>;
