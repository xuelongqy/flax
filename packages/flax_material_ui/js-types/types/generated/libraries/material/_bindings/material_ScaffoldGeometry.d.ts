import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScaffoldGeometry extends Readonly<{
    "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldGeometry": readonly [];
}> {
    readonly __ScaffoldGeometry: unique symbol;
    readonly [_flaxDartTypeValue]: ScaffoldGeometry;
    readonly bottomNavigationBarTop: number | null;
    readonly floatingActionButtonArea: upstream0.Rect | null;
    copyWith(options?: {
        bottomNavigationBarTop?: number | null | undefined;
        floatingActionButtonArea?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    }): ScaffoldGeometry;
}
export declare function _ScaffoldGeometryFactory(options?: {
    bottomNavigationBarTop?: number | null | undefined;
    floatingActionButtonArea?: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null | undefined;
}): ScaffoldGeometry;
export interface _ScaffoldGeometryNative extends ScaffoldGeometry {
    readonly [_flaxDartTypeValue]: _ScaffoldGeometryNative;
    copyWith(options?: {
        bottomNavigationBarTop?: number | null | undefined;
        floatingActionButtonArea?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    }): ScaffoldGeometry;
    get bottomNavigationBarTop(): number | null;
    get floatingActionButtonArea(): upstream0.Rect | null;
}
export declare abstract class _ScaffoldGeometryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScaffoldGeometry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScaffoldGeometry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ScaffoldGeometry", readonly [], false];
    constructor(options?: {
        bottomNavigationBarTop?: number | null | undefined;
        floatingActionButtonArea?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _ScaffoldGeometryFactory {
    function implement(args: [options?: {
        bottomNavigationBarTop?: number | null | undefined;
        floatingActionButtonArea?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    }], implementation: {}): ScaffoldGeometry;
}
declare const _ScaffoldGeometryBinding: typeof _ScaffoldGeometryFactory & (new (options?: {
    bottomNavigationBarTop?: number | null | undefined;
    floatingActionButtonArea?: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null | undefined;
}) => _ScaffoldGeometryNative);
export declare const ScaffoldGeometry: typeof _ScaffoldGeometryBinding & _FlaxInstanceType<ScaffoldGeometry> & _FlaxDartType<ScaffoldGeometry, readonly ["class", "flax.material/material#type:ScaffoldGeometry", readonly [], false]>;
export {};
