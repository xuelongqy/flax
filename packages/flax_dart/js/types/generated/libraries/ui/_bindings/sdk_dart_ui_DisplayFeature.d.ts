import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureType';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureState';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DisplayFeature extends Readonly<{
    "__flaxBound:dart:ui::DisplayFeature": readonly [];
}> {
    readonly __DisplayFeature: unique symbol;
    readonly [_flaxDartTypeValue]: DisplayFeature;
}
export interface DisplayFeature {
    readonly [_flaxDartTypeValue]: DisplayFeature;
    toString(): string;
    get bounds(): upstream0.Rect;
    get type(): upstream1.DisplayFeatureType;
    get state(): upstream2.DisplayFeatureState;
}
export declare abstract class DisplayFeature extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DisplayFeature>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DisplayFeature;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:DisplayFeature", readonly [], false];
    constructor(options: {
        bounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        type: upstream1.DisplayFeatureType;
        state: upstream2.DisplayFeatureState;
    });
}
export declare namespace DisplayFeature {
    function implement(args: [options: {
        bounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        type: upstream1.DisplayFeatureType;
        state: upstream2.DisplayFeatureState;
    }], implementation: {}): DisplayFeature;
}
