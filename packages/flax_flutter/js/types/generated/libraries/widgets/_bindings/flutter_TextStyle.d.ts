import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_FontWeight';
import '@flax/flutter/services/_bindings/flutter_FontWeight';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FontStyle';
export interface TextStyle extends Readonly<{
    "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TextStyle: unique symbol;
    readonly inherit: boolean;
    readonly color: upstream0.Color | null;
    readonly backgroundColor: upstream0.Color | null;
    readonly fontSize: number | null;
    readonly fontWeight: upstream1.FontWeight | null;
    readonly fontStyle: upstream2.FontStyle | null;
    readonly letterSpacing: number | null;
    readonly wordSpacing: number | null;
    readonly height: number | null;
    copyWith(options?: {
        backgroundColor?: upstream0.Color | null | undefined;
        color?: upstream0.Color | null | undefined;
        fontSize?: number | null | undefined;
        fontStyle?: upstream2.FontStyle | null | undefined;
        fontWeight?: upstream1.FontWeight | null | undefined;
        height?: number | null | undefined;
        inherit?: boolean | null | undefined;
        letterSpacing?: number | null | undefined;
        wordSpacing?: number | null | undefined;
    }): TextStyle;
}
export declare function TextStyle(options?: {
    inherit?: boolean | undefined;
    color?: upstream0.Color | null | undefined;
    backgroundColor?: upstream0.Color | null | undefined;
    fontSize?: number | null | undefined;
    fontWeight?: upstream1.FontWeight | null | undefined;
    fontStyle?: upstream2.FontStyle | null | undefined;
    letterSpacing?: number | null | undefined;
    wordSpacing?: number | null | undefined;
    height?: number | null | undefined;
}): TextStyle;
