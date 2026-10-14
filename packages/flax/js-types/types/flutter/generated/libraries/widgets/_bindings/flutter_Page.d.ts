import { type FlaxInstanceType as _FlaxInstanceType, type NavigationData, type DartValue } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Page<T extends unknown | null = unknown | null> extends DartValue {
    readonly __Page: unique symbol;
    readonly key: upstream0.LocalKey | null;
    readonly name: string | null;
    readonly arguments: NavigationData | null;
}
export declare const Page: object & _FlaxInstanceType<Page<unknown | null>> & _FlaxDartType<Page<unknown | null>, readonly ["class", "flax.core/flutter#type:Page", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: Page<_Selected0>;
    } & _FlaxInstanceType<Page<_Selected0>> & _FlaxDartType<Page<_Selected0>> : never : never;
}
export {};
