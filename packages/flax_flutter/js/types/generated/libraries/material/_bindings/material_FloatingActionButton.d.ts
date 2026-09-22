import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
export interface FloatingActionButton extends WidgetDescription {
    readonly type: "flax.material/material#type:FloatingActionButton";
}
export declare function FloatingActionButton(options: {
    key?: upstream0.Key | null | undefined;
    child?: Bindable<Widget | null> | undefined;
    tooltip?: Bindable<string | null> | undefined;
    foregroundColor?: Bindable<upstream1.Color | null> | undefined;
    backgroundColor?: Bindable<upstream1.Color | null> | undefined;
    elevation?: Bindable<number | null> | undefined;
    onPressed: Bindable<(() => void) | null>;
    mini?: Bindable<boolean> | undefined;
    focusNode?: Bindable<upstream2.FocusNode | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
}): FloatingActionButton;
export declare namespace FloatingActionButton {
    function small(options: {
        key?: upstream0.Key | null | undefined;
        child?: Bindable<Widget | null> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        foregroundColor?: Bindable<upstream1.Color | null> | undefined;
        backgroundColor?: Bindable<upstream1.Color | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<upstream2.FocusNode | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
    }): FloatingActionButton;
}
export declare namespace FloatingActionButton {
    function large(options: {
        key?: upstream0.Key | null | undefined;
        child?: Bindable<Widget | null> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        foregroundColor?: Bindable<upstream1.Color | null> | undefined;
        backgroundColor?: Bindable<upstream1.Color | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<upstream2.FocusNode | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
    }): FloatingActionButton;
}
export declare namespace FloatingActionButton {
    function extended(options: {
        key?: upstream0.Key | null | undefined;
        tooltip?: Bindable<string | null> | undefined;
        foregroundColor?: Bindable<upstream1.Color | null> | undefined;
        backgroundColor?: Bindable<upstream1.Color | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<upstream2.FocusNode | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        icon?: Bindable<Widget | null> | undefined;
        label: Bindable<Widget>;
    }): FloatingActionButton;
}
