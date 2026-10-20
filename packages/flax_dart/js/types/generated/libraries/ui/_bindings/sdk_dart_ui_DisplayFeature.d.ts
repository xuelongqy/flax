import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureType';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureState';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DisplayFeature extends Readonly<{
    "__flaxBound:dart:ui::DisplayFeature": readonly [];
}> {
    readonly __DisplayFeature: unique symbol;
    readonly [_flaxDartTypeValue]: DisplayFeature;
    readonly bounds: upstream0.Rect;
    readonly type: upstream1.DisplayFeatureType;
    readonly state: upstream2.DisplayFeatureState;
    toString(): string;
}
export declare function _DisplayFeatureFactory(options: {
    bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>;
    type: upstream1.DisplayFeatureType;
    state: upstream2.DisplayFeatureState;
}): DisplayFeature;
export interface _DisplayFeatureNative extends DisplayFeature {
    readonly [_flaxDartTypeValue]: _DisplayFeatureNative;
    toString(): string;
    get bounds(): upstream0.Rect;
    get type(): upstream1.DisplayFeatureType;
    get state(): upstream2.DisplayFeatureState;
}
export declare abstract class _DisplayFeatureNative extends _FlaxProxyBase {
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
export declare namespace _DisplayFeatureFactory {
    function implement(args: [options: {
        bounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        type: upstream1.DisplayFeatureType;
        state: upstream2.DisplayFeatureState;
    }], implementation: {}): DisplayFeature;
}
declare const _DisplayFeatureBinding: typeof _DisplayFeatureFactory & (new (options: {
    bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>;
    type: upstream1.DisplayFeatureType;
    state: upstream2.DisplayFeatureState;
}) => _DisplayFeatureNative);
export declare const DisplayFeature: typeof _DisplayFeatureBinding & _FlaxInstanceType<DisplayFeature> & _FlaxDartType<DisplayFeature, readonly ["class", "flax.core/sdk_dart_ui#type:DisplayFeature", readonly [], false]>;
export {};
