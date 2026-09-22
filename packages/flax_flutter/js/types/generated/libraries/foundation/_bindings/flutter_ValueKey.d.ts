import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface ValueKey<T extends (string | number) = (string | number)> extends upstream0.LocalKey, upstream1.Key, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey": readonly [T];
}> {
    readonly __ValueKey: unique symbol;
    readonly value: T;
}
export declare function ValueKey<T extends (string | number) = (string | number)>(value: T): ValueKey<T>;
