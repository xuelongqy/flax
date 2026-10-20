import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RouteInformation extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
}> {
    readonly __RouteInformation: unique symbol;
    readonly [_flaxDartTypeValue]: RouteInformation;
    readonly location: string;
    readonly uri: upstream0.Uri;
    readonly state: unknown | null;
}
export declare function _RouteInformationFactory(options?: {
    location?: string | null | undefined;
    uri?: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>> | null | undefined;
    state?: unknown | null | undefined;
}): RouteInformation;
export interface _RouteInformationNative extends RouteInformation {
    readonly [_flaxDartTypeValue]: _RouteInformationNative;
    get location(): string;
    get uri(): upstream0.Uri;
    get state(): unknown | null;
}
export declare abstract class _RouteInformationNative extends _FlaxProxyBase {
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
export declare namespace _RouteInformationFactory {
    function implement(args: [options?: {
        location?: string | null | undefined;
        uri?: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>> | null | undefined;
        state?: unknown | null | undefined;
    }], implementation: {}): RouteInformation;
}
declare const _RouteInformationBinding: typeof _RouteInformationFactory & (new (options?: {
    location?: string | null | undefined;
    uri?: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>> | null | undefined;
    state?: unknown | null | undefined;
}) => _RouteInformationNative);
export declare const RouteInformation: typeof _RouteInformationBinding & _FlaxInstanceType<RouteInformation> & _FlaxDartType<RouteInformation, readonly ["class", "flax.core/sdk_widgets#type:RouteInformation", readonly [], false]>;
export {};
