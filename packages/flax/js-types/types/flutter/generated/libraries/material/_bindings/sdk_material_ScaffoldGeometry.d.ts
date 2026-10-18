import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ScaffoldGeometry extends Readonly<{
    "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldGeometry": readonly [];
}> {
    readonly __ScaffoldGeometry: unique symbol;
    readonly [_flaxDartTypeValue]: ScaffoldGeometry;
}
export interface ScaffoldGeometry {
    readonly [_flaxDartTypeValue]: ScaffoldGeometry;
    copyWith(options?: {
        bottomNavigationBarTop?: number | null | undefined;
        floatingActionButtonArea?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    }): ScaffoldGeometry;
    get bottomNavigationBarTop(): number | null;
    get floatingActionButtonArea(): upstream0.Rect | null;
}
export declare abstract class ScaffoldGeometry extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScaffoldGeometry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScaffoldGeometry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ScaffoldGeometry", readonly [], false];
    constructor(options?: {
        bottomNavigationBarTop?: number | null | undefined;
        floatingActionButtonArea?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    });
}
export declare namespace ScaffoldGeometry {
    function implement(args: [options?: {
        bottomNavigationBarTop?: number | null | undefined;
        floatingActionButtonArea?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    }], implementation: {}): ScaffoldGeometry;
}
