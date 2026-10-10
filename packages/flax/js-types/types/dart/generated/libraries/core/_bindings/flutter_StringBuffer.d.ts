import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface StringBuffer extends Readonly<{
    "__flaxBound:dart:core::StringBuffer": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::StringSink": readonly [];
}> {
    readonly __StringBuffer: unique symbol;
    readonly length: number;
    write(object: unknown | null): void;
    toString(): string;
}
declare function _StringBufferFactory(content?: {}): StringBuffer;
export declare const StringBuffer: typeof _StringBufferFactory & _FlaxInstanceType<StringBuffer>;
export {};
