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
export declare function StringBuffer(content?: {}): StringBuffer;
