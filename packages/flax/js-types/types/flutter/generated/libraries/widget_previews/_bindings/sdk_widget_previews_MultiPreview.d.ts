import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_Preview';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_Preview';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MultiPreview extends Readonly<{
    "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::MultiPreview": readonly [];
}> {
    readonly __MultiPreview: unique symbol;
    readonly [_flaxDartTypeValue]: MultiPreview;
}
export interface MultiPreview {
    readonly [_flaxDartTypeValue]: MultiPreview;
    transform(): DartList<upstream0.Preview>;
}
export declare abstract class MultiPreview extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MultiPreview>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MultiPreview;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widget_previews#type:MultiPreview", readonly [], false];
    constructor();
    abstract get previews(): DartList<upstream0.Preview>;
}
export declare namespace MultiPreview {
    function implement(args: [], implementation: {
        get previews(): DartListInput<upstream0.Preview, Readonly<{
            "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::Preview": readonly [];
        }>>;
    }): MultiPreview;
}
