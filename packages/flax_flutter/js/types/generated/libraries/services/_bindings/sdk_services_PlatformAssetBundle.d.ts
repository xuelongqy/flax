import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_CachingAssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_CachingAssetBundle';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlatformAssetBundle extends Omit<upstream0.CachingAssetBundle, _flaxOwnMembers0>, Omit<upstream1.AssetBundle, _flaxOwnMembers0 | keyof upstream0.CachingAssetBundle>, Readonly<{
    "__flaxBound:package:flutter/src/services/asset_bundle.dart::PlatformAssetBundle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/asset_bundle.dart::CachingAssetBundle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
}> {
    readonly __PlatformAssetBundle: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformAssetBundle;
    readonly [_flaxDartMethodCases]?: {
        loadStructuredData: _FlaxSignature0;
        loadStructuredBinaryData: _FlaxSignature1;
    };
    loadString(key: string, options?: {
        cache?: boolean | undefined;
    }): Promise<string>;
    loadStructuredData<T extends unknown | null = unknown | null>(key: string, parser: ((value: string) => Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    loadStructuredBinaryData<T extends unknown | null = unknown | null>(key: string, parser: ((data: globalThis.DataView) => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    evict(key: string): void;
    clear(): void;
    loadBuffer(key: string): Promise<upstream2.ImmutableBuffer>;
    load(key: string): Promise<globalThis.DataView>;
    toString(): string;
}
export declare function _PlatformAssetBundleFactory(): PlatformAssetBundle;
export interface _PlatformAssetBundleNative extends PlatformAssetBundle {
    readonly [_flaxDartTypeValue]: _PlatformAssetBundleNative;
    readonly [_flaxDartMethodCases]?: {
        loadStructuredData: _FlaxSignature2;
        loadStructuredBinaryData: _FlaxSignature3;
    };
    loadString(key: string, options?: {
        cache?: boolean | undefined;
    }): Promise<string>;
    loadStructuredData<T extends unknown | null = unknown | null>(key: string, parser: ((value: string) => Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    loadStructuredBinaryData<T extends unknown | null = unknown | null>(key: string, parser: ((data: globalThis.DataView) => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    evict(key: string): void;
    clear(): void;
    loadBuffer(key: string): Promise<upstream2.ImmutableBuffer>;
    load(key: string): Promise<globalThis.DataView>;
    toString(): string;
}
export declare abstract class _PlatformAssetBundleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformAssetBundle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PlatformAssetBundle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:PlatformAssetBundle", readonly [], false];
    constructor();
}
export declare namespace _PlatformAssetBundleFactory {
    function implement(args: [], implementation: {}): PlatformAssetBundle;
}
declare const _PlatformAssetBundleBinding: typeof _PlatformAssetBundleFactory & (new () => _PlatformAssetBundleNative);
export declare const PlatformAssetBundle: typeof _PlatformAssetBundleBinding & _FlaxInstanceType<PlatformAssetBundle> & _FlaxDartType<PlatformAssetBundle, readonly ["class", "flax.core/sdk_services#type:PlatformAssetBundle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "loadString" | "loadStructuredData" | "loadStructuredBinaryData" | "evict" | "clear" | "loadBuffer" | "load" | "toString" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::PlatformAssetBundle" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::CachingAssetBundle" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string, parser: ((value: string) => Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string, parser: ((data: globalThis.DataView) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string, parser: ((value: string) => Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string, parser: ((data: globalThis.DataView) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never;
}
export {};
