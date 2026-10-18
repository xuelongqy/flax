import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlutterVersion extends Readonly<{
    "__flaxBound:package:flutter/src/services/flutter_version.dart::FlutterVersion": readonly [];
}> {
    readonly __FlutterVersion: unique symbol;
    readonly [_flaxDartTypeValue]: FlutterVersion;
}
declare const _FlutterVersionFactory: {
    readonly version: string | null;
    readonly channel: string | null;
    readonly gitUrl: string | null;
    readonly frameworkRevision: string | null;
    readonly engineRevision: string | null;
    readonly dartVersion: string | null;
};
export declare const FlutterVersion: typeof _FlutterVersionFactory & _FlaxInstanceType<FlutterVersion> & _FlaxDartType<FlutterVersion, readonly ["class", "flax.core/sdk_services#type:FlutterVersion", readonly [], false]>;
export {};
