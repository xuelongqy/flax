import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RootIsolateToken extends Readonly<{
    "__flaxBound:dart:ui::RootIsolateToken": readonly [];
}> {
    readonly __RootIsolateToken: unique symbol;
    readonly [_flaxDartTypeValue]: RootIsolateToken;
}
declare const _RootIsolateTokenFactory: {
    readonly instance: RootIsolateToken | null;
};
export declare const RootIsolateToken: typeof _RootIsolateTokenFactory & _FlaxInstanceType<RootIsolateToken> & _FlaxDartType<RootIsolateToken, readonly ["class", "flax.core/sdk_dart_ui#type:RootIsolateToken", readonly [], false]>;
export {};
