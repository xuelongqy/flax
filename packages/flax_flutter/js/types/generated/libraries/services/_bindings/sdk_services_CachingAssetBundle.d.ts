import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CachingAssetBundle extends Omit<upstream0.AssetBundle, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/asset_bundle.dart::CachingAssetBundle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
}> {
    readonly __CachingAssetBundle: unique symbol;
    readonly [_flaxDartTypeValue]: CachingAssetBundle;
    readonly [_flaxDartMethodCases]?: {
        loadStructuredData: _FlaxSignature0;
        loadStructuredBinaryData: _FlaxSignature1;
    };
}
export interface CachingAssetBundle {
    readonly [_flaxDartTypeValue]: CachingAssetBundle;
    readonly [_flaxDartMethodCases]?: {
        loadStructuredData: _FlaxSignature2;
        loadStructuredBinaryData: _FlaxSignature3;
    };
    loadBuffer(key: string): Promise<upstream1.ImmutableBuffer>;
    loadString(key: string, options?: {
        cache?: boolean | undefined;
    }): Promise<string>;
    loadStructuredData<T extends unknown | null = unknown | null>(key: string, parser: ((value: string) => Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    loadStructuredBinaryData<T extends unknown | null = unknown | null>(key: string, parser: ((data: globalThis.DataView) => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    evict(key: string): void;
    clear(): void;
    toString(): string;
}
export declare abstract class CachingAssetBundle extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CachingAssetBundle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CachingAssetBundle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:CachingAssetBundle", readonly [], false];
    constructor();
    abstract load(key: string): Promise<globalThis.DataView>;
}
export declare namespace CachingAssetBundle {
    function implement(args: [], implementation: {
        load: ((key: string) => Promise<globalThis.DataView>);
    }): CachingAssetBundle;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "load" | "loadBuffer" | "loadString" | "loadStructuredData" | "loadStructuredBinaryData" | "evict" | "clear" | "toString" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::CachingAssetBundle" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle";
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
