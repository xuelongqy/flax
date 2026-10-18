import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImageByteFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImageByteFormat';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Image extends Readonly<{
    "__flaxBound:dart:ui::Image": readonly [];
}> {
    readonly __Image: unique symbol;
    readonly [_flaxDartTypeValue]: Image;
    readonly width: number;
    readonly height: number;
    readonly debugDisposed: boolean;
    readonly colorSpace: upstream0.ColorSpace;
    dispose(): void;
    toByteData(options?: {
        format?: upstream1.ImageByteFormat | undefined;
    }): Promise<globalThis.DataView | null>;
    debugGetOpenHandleStackTraces(): DartList<upstream2.StackTrace> | null;
    clone(): Image;
    isCloneOf(other: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>): boolean;
    toString(): string;
}
export declare namespace _ImageFactory {
    function setOnCreate(value: ((image: Image) => void) | null): void;
}
export declare namespace _ImageFactory {
    function setOnDispose(value: ((image: Image) => void) | null): void;
}
export declare namespace _ImageFactory {
    const onCreate: ((image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>) => void) | null;
}
export declare namespace _ImageFactory {
    const onDispose: ((image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>) => void) | null;
}
export declare const Image: typeof _ImageFactory & _FlaxInstanceType<Image> & _FlaxDartType<Image, readonly ["class", "flax.core/sdk_dart_ui#type:Image", readonly [], false]>;
