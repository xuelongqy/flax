import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Decoration extends Readonly<{
    "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Decoration: unique symbol;
    readonly padding: upstream0.EdgeInsetsGeometry;
    readonly isComplex: boolean;
    toStringShort(): string;
    debugAssertIsValid(): boolean;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> | null, t: number): Decoration | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> | null, t: number): Decoration | null;
    hitTest(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>, position: upstream2.Offset, options?: {
        textDirection?: upstream3.TextDirection | null | undefined;
    }): boolean;
}
export declare namespace _DecorationFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> | null, t: number): Decoration | null;
}
export declare const Decoration: typeof _DecorationFactory & _FlaxInstanceType<Decoration> & _FlaxDartType<Decoration, readonly ["class", "flax.core/flutter#type:Decoration", readonly [], false]>;
