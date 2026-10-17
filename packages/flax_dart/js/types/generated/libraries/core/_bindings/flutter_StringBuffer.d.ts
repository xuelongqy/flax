import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StringBuffer extends Readonly<{
    "__flaxBound:dart:core::StringBuffer": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::StringSink": readonly [];
}> {
    readonly __StringBuffer: unique symbol;
    readonly length: number;
    readonly isEmpty: boolean;
    readonly isNotEmpty: boolean;
    write(object: unknown | null): void;
    writeCharCode(charCode: number): void;
    writeAll(objects: DartIterableInput<unknown | null, unknown | null>, separator?: string): void;
    writeln(obj?: unknown | null): void;
    clear(): void;
    toString(): string;
}
export declare function _StringBufferFactory(content?: {}): StringBuffer;
export declare const StringBuffer: typeof _StringBufferFactory & _FlaxInstanceType<StringBuffer> & _FlaxDartType<StringBuffer, readonly ["class", "flax.core/flutter#type:StringBuffer", readonly [], false]>;
