import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
export interface InputDecoration extends Readonly<{
    "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecoration": readonly [];
}> {
    readonly __InputDecoration: unique symbol;
    readonly labelText: string | null;
    readonly hintText: string | null;
    readonly helperText: string | null;
    readonly errorText: string | null;
    readonly labelStyle: upstream0.TextStyle | null;
    readonly hintStyle: upstream0.TextStyle | null;
    readonly helperStyle: upstream0.TextStyle | null;
    readonly errorStyle: upstream0.TextStyle | null;
    readonly isDense: boolean | null;
    readonly contentPadding: upstream1.EdgeInsetsGeometry | null;
    readonly filled: boolean | null;
    readonly fillColor: upstream2.Color | null;
    copyWith(options?: {
        contentPadding?: upstream1.EdgeInsetsGeometry | null | undefined;
        errorStyle?: upstream0.TextStyle | null | undefined;
        errorText?: string | null | undefined;
        fillColor?: upstream2.Color | null | undefined;
        filled?: boolean | null | undefined;
        helperStyle?: upstream0.TextStyle | null | undefined;
        helperText?: string | null | undefined;
        hintStyle?: upstream0.TextStyle | null | undefined;
        hintText?: string | null | undefined;
        isDense?: boolean | null | undefined;
        labelStyle?: upstream0.TextStyle | null | undefined;
        labelText?: string | null | undefined;
    }): InputDecoration;
}
export declare function InputDecoration(options?: {
    labelText?: string | null | undefined;
    labelStyle?: upstream0.TextStyle | null | undefined;
    helperText?: string | null | undefined;
    helperStyle?: upstream0.TextStyle | null | undefined;
    hintText?: string | null | undefined;
    hintStyle?: upstream0.TextStyle | null | undefined;
    errorText?: string | null | undefined;
    errorStyle?: upstream0.TextStyle | null | undefined;
    isDense?: boolean | null | undefined;
    contentPadding?: upstream1.EdgeInsetsGeometry | null | undefined;
    filled?: boolean | null | undefined;
    fillColor?: upstream2.Color | null | undefined;
}): InputDecoration;
