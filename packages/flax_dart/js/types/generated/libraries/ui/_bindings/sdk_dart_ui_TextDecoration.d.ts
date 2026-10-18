import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextDecoration extends Readonly<{
    "__flaxBound:dart:ui::TextDecoration": readonly [];
}> {
    readonly __TextDecoration: unique symbol;
    readonly [_flaxDartTypeValue]: TextDecoration;
    readonly maskValue: number;
    contains(other: Readonly<{
        "__flaxBound:dart:ui::TextDecoration": readonly [];
    }>): boolean;
    toString(): string;
}
export declare namespace _TextDecorationFactory {
    function combine(decorations: DartListInput<TextDecoration, Readonly<{
        "__flaxBound:dart:ui::TextDecoration": readonly [];
    }>>): TextDecoration;
}
export declare namespace _TextDecorationFactory {
    const none: TextDecoration;
}
export declare namespace _TextDecorationFactory {
    const underline: TextDecoration;
}
export declare namespace _TextDecorationFactory {
    const overline: TextDecoration;
}
export declare namespace _TextDecorationFactory {
    const lineThrough: TextDecoration;
}
export declare const TextDecoration: typeof _TextDecorationFactory & _FlaxInstanceType<TextDecoration> & _FlaxDartType<TextDecoration, readonly ["class", "flax.core/sdk_dart_ui#type:TextDecoration", readonly [], false]>;
