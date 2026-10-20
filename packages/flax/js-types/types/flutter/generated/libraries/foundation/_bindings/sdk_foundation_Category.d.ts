import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Category extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/annotations.dart::Category": readonly [];
}> {
    readonly __Category: unique symbol;
    readonly [_flaxDartTypeValue]: Category;
    readonly sections: DartList<string>;
}
export declare function _CategoryFactory(sections: DartListInput<string, string>): Category;
export interface _CategoryNative extends Category {
    readonly [_flaxDartTypeValue]: _CategoryNative;
    get sections(): DartList<string>;
}
export declare abstract class _CategoryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Category>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Category;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:Category", readonly [], false];
    constructor(sections: DartListInput<string, string>);
}
export declare namespace _CategoryFactory {
    function implement(args: [sections: DartListInput<string, string>], implementation: {}): Category;
}
declare const _CategoryBinding: typeof _CategoryFactory & (new (sections: DartListInput<string, string>) => _CategoryNative);
export declare const Category: typeof _CategoryBinding & _FlaxInstanceType<Category> & _FlaxDartType<Category, readonly ["class", "flax.core/sdk_foundation#type:Category", readonly [], false]>;
export {};
