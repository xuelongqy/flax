import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Key extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
}> {
    readonly __Key: unique symbol;
    readonly [_flaxDartTypeValue]: Key;
}
export declare function _KeyFactory(value: string): Key;
export declare const Key: typeof _KeyFactory & _FlaxInstanceType<Key> & _FlaxDartType<Key, readonly ["class", "flax.core/flutter#type:Key", readonly [], false]>;
