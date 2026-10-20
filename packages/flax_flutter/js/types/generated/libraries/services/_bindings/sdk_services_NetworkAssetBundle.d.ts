import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NetworkAssetBundle extends Omit<upstream0.AssetBundle, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/asset_bundle.dart::NetworkAssetBundle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
}> {
    readonly __NetworkAssetBundle: unique symbol;
    readonly [_flaxDartTypeValue]: NetworkAssetBundle;
    readonly [_flaxDartMethodCases]?: {
        loadStructuredData: _FlaxSignature0;
        loadStructuredBinaryData: _FlaxSignature1;
    };
    load(key: string): Promise<globalThis.DataView>;
    loadBuffer(key: string): Promise<upstream2.ImmutableBuffer>;
    loadString(key: string, options?: {
        cache?: boolean | undefined;
    }): Promise<string>;
    loadStructuredData<T extends unknown | null = unknown | null>(key: string, parser: ((value: string) => Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    loadStructuredBinaryData<T extends unknown | null = unknown | null>(key: string, parser: ((data: globalThis.DataView) => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    evict(key: string): void;
    clear(): void;
    toString(): string;
}
export declare function _NetworkAssetBundleFactory(baseUrl: DartInput<Readonly<{
    "__flaxBound:dart:core::Uri": readonly [];
}>>): NetworkAssetBundle;
export interface _NetworkAssetBundleNative extends NetworkAssetBundle {
    readonly [_flaxDartTypeValue]: _NetworkAssetBundleNative;
    readonly [_flaxDartMethodCases]?: {
        loadStructuredData: _FlaxSignature2;
        loadStructuredBinaryData: _FlaxSignature3;
    };
    load(key: string): Promise<globalThis.DataView>;
    loadBuffer(key: string): Promise<upstream2.ImmutableBuffer>;
    loadString(key: string, options?: {
        cache?: boolean | undefined;
    }): Promise<string>;
    loadStructuredData<T extends unknown | null = unknown | null>(key: string, parser: ((value: string) => Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    loadStructuredBinaryData<T extends unknown | null = unknown | null>(key: string, parser: ((data: globalThis.DataView) => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    evict(key: string): void;
    clear(): void;
    toString(): string;
}
export declare abstract class _NetworkAssetBundleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NetworkAssetBundle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: NetworkAssetBundle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:NetworkAssetBundle", readonly [], false];
    constructor(baseUrl: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>);
}
export declare namespace _NetworkAssetBundleFactory {
    function implement(args: [baseUrl: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>], implementation: {}): NetworkAssetBundle;
}
declare const _NetworkAssetBundleBinding: typeof _NetworkAssetBundleFactory & (new (baseUrl: DartInput<Readonly<{
    "__flaxBound:dart:core::Uri": readonly [];
}>>) => _NetworkAssetBundleNative);
export declare const NetworkAssetBundle: typeof _NetworkAssetBundleBinding & _FlaxInstanceType<NetworkAssetBundle> & _FlaxDartType<NetworkAssetBundle, readonly ["class", "flax.core/sdk_services#type:NetworkAssetBundle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "load" | "loadBuffer" | "loadString" | "loadStructuredData" | "loadStructuredBinaryData" | "evict" | "clear" | "toString" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::NetworkAssetBundle" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle";
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
