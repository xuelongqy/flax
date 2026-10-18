import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LocalKey extends Omit<upstream0.Key, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
}> {
    readonly __LocalKey: unique symbol;
    readonly [_flaxDartTypeValue]: LocalKey;
}
export declare const LocalKey: object & _FlaxInstanceType<LocalKey> & _FlaxDartType<LocalKey, readonly ["class", "flax.core/flutter#type:LocalKey", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
export {};
