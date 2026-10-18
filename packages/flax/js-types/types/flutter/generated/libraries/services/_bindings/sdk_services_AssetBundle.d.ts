import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AssetBundle extends Readonly<{
    "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
}> {
    readonly __AssetBundle: unique symbol;
    readonly [_flaxDartTypeValue]: AssetBundle;
    readonly [_flaxDartMethodCases]?: {
        loadStructuredData: _FlaxSignature0;
        loadStructuredBinaryData: _FlaxSignature1;
    };
}
export interface AssetBundle {
    readonly [_flaxDartTypeValue]: AssetBundle;
    readonly [_flaxDartMethodCases]?: {
        loadStructuredData: _FlaxSignature2;
        loadStructuredBinaryData: _FlaxSignature3;
    };
    loadBuffer(key: string): Promise<upstream0.ImmutableBuffer>;
    loadString(key: string, options?: {
        cache?: boolean | undefined;
    }): Promise<string>;
    loadStructuredData<T extends unknown | null = unknown | null>(key: string, parser: ((value: string) => Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    loadStructuredBinaryData<T extends unknown | null = unknown | null>(key: string, parser: ((data: globalThis.DataView) => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
    evict(key: string): void;
    clear(): void;
    toString(): string;
}
export declare abstract class AssetBundle extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetBundle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AssetBundle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AssetBundle", readonly [], false];
    constructor();
    abstract load(key: string): Promise<globalThis.DataView>;
}
export declare namespace AssetBundle {
    function implement(args: [], implementation: {
        load: ((key: string) => Promise<globalThis.DataView>);
    }): AssetBundle;
}
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
