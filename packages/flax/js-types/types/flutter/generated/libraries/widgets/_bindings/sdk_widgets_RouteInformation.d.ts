import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RouteInformation extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
}> {
    readonly __RouteInformation: unique symbol;
    readonly [_flaxDartTypeValue]: RouteInformation;
}
export interface RouteInformation {
    readonly [_flaxDartTypeValue]: RouteInformation;
    get location(): string;
    get uri(): upstream0.Uri;
    get state(): unknown | null;
}
export declare abstract class RouteInformation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteInformation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RouteInformation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteInformation", readonly [], false];
    constructor(options?: {
        location?: string | null | undefined;
        uri?: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>> | null | undefined;
        state?: unknown | null | undefined;
    });
}
export declare namespace RouteInformation {
    function implement(args: [options?: {
        location?: string | null | undefined;
        uri?: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>> | null | undefined;
        state?: unknown | null | undefined;
    }], implementation: {}): RouteInformation;
}
