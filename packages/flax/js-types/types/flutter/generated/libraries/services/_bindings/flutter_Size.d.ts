import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface Size extends Readonly<{
    "__flaxBound:dart:ui::Size": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}> {
    readonly __Size: unique symbol;
    readonly width: number;
    readonly height: number;
}
declare function _SizeFactory(width: number, height: number): Size;
declare namespace _SizeFactory {
    function fromHeight(height: number): Size;
}
export declare const Size: typeof _SizeFactory & _FlaxInstanceType<Size>;
export {};
