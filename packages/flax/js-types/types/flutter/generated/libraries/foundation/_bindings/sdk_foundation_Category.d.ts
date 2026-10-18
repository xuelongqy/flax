import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Category extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/annotations.dart::Category": readonly [];
}> {
    readonly __Category: unique symbol;
    readonly [_flaxDartTypeValue]: Category;
}
export interface Category {
    readonly [_flaxDartTypeValue]: Category;
    get sections(): DartList<string>;
}
export declare abstract class Category extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Category>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Category;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:Category", readonly [], false];
    constructor(sections: DartListInput<string, string>);
}
export declare namespace Category {
    function implement(args: [sections: DartListInput<string, string>], implementation: {}): Category;
}
