import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverGeometry extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverGeometry": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SliverGeometry: unique symbol;
    readonly [_flaxDartTypeValue]: SliverGeometry;
    readonly scrollExtent: number;
    readonly paintOrigin: number;
    readonly paintExtent: number;
    readonly layoutExtent: number;
    readonly maxPaintExtent: number;
    readonly maxScrollObstructionExtent: number;
    readonly hitTestExtent: number;
    readonly visible: boolean;
    readonly hasVisualOverflow: boolean;
    readonly scrollOffsetCorrection: number | null;
    readonly cacheExtent: number;
    readonly crossAxisExtent: number | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        cacheExtent?: number | null | undefined;
        crossAxisExtent?: number | null | undefined;
        hasVisualOverflow?: boolean | null | undefined;
        hitTestExtent?: number | null | undefined;
        layoutExtent?: number | null | undefined;
        maxPaintExtent?: number | null | undefined;
        maxScrollObstructionExtent?: number | null | undefined;
        paintExtent?: number | null | undefined;
        paintOrigin?: number | null | undefined;
        scrollExtent?: number | null | undefined;
        visible?: boolean | null | undefined;
    }): SliverGeometry;
    debugAssertIsValid(options?: {
        informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
    }): boolean;
}
export declare function _SliverGeometryFactory(options?: {
    scrollExtent?: number | undefined;
    paintExtent?: number | undefined;
    paintOrigin?: number | undefined;
    layoutExtent?: number | null | undefined;
    maxPaintExtent?: number | undefined;
    maxScrollObstructionExtent?: number | undefined;
    crossAxisExtent?: number | null | undefined;
    hitTestExtent?: number | null | undefined;
    visible?: boolean | null | undefined;
    hasVisualOverflow?: boolean | undefined;
    scrollOffsetCorrection?: number | null | undefined;
    cacheExtent?: number | null | undefined;
}): SliverGeometry;
export interface _SliverGeometryNative extends SliverGeometry {
    readonly [_flaxDartTypeValue]: _SliverGeometryNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        scrollExtent?: number | null | undefined;
        paintExtent?: number | null | undefined;
        paintOrigin?: number | null | undefined;
        layoutExtent?: number | null | undefined;
        maxPaintExtent?: number | null | undefined;
        maxScrollObstructionExtent?: number | null | undefined;
        crossAxisExtent?: number | null | undefined;
        hitTestExtent?: number | null | undefined;
        visible?: boolean | null | undefined;
        hasVisualOverflow?: boolean | null | undefined;
        cacheExtent?: number | null | undefined;
    }): SliverGeometry;
    debugAssertIsValid(options?: {
        informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
    }): boolean;
    get scrollExtent(): number;
    get paintOrigin(): number;
    get paintExtent(): number;
    get layoutExtent(): number;
    get maxPaintExtent(): number;
    get maxScrollObstructionExtent(): number;
    get hitTestExtent(): number;
    get visible(): boolean;
    get hasVisualOverflow(): boolean;
    get scrollOffsetCorrection(): number | null;
    get cacheExtent(): number;
    get crossAxisExtent(): number | null;
}
export declare abstract class _SliverGeometryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGeometry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverGeometry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGeometry", readonly [], false];
    constructor(options?: {
        scrollExtent?: number | undefined;
        paintExtent?: number | undefined;
        paintOrigin?: number | undefined;
        layoutExtent?: number | null | undefined;
        maxPaintExtent?: number | undefined;
        maxScrollObstructionExtent?: number | undefined;
        crossAxisExtent?: number | null | undefined;
        hitTestExtent?: number | null | undefined;
        visible?: boolean | null | undefined;
        hasVisualOverflow?: boolean | undefined;
        scrollOffsetCorrection?: number | null | undefined;
        cacheExtent?: number | null | undefined;
    });
}
export declare namespace _SliverGeometryFactory {
    function implement(args: [options?: {
        scrollExtent?: number | undefined;
        paintExtent?: number | undefined;
        paintOrigin?: number | undefined;
        layoutExtent?: number | null | undefined;
        maxPaintExtent?: number | undefined;
        maxScrollObstructionExtent?: number | undefined;
        crossAxisExtent?: number | null | undefined;
        hitTestExtent?: number | null | undefined;
        visible?: boolean | null | undefined;
        hasVisualOverflow?: boolean | undefined;
        scrollOffsetCorrection?: number | null | undefined;
        cacheExtent?: number | null | undefined;
    }], implementation: {}): SliverGeometry;
}
declare const _SliverGeometryBinding: typeof _SliverGeometryFactory & (new (options?: {
    scrollExtent?: number | undefined;
    paintExtent?: number | undefined;
    paintOrigin?: number | undefined;
    layoutExtent?: number | null | undefined;
    maxPaintExtent?: number | undefined;
    maxScrollObstructionExtent?: number | undefined;
    crossAxisExtent?: number | null | undefined;
    hitTestExtent?: number | null | undefined;
    visible?: boolean | null | undefined;
    hasVisualOverflow?: boolean | undefined;
    scrollOffsetCorrection?: number | null | undefined;
    cacheExtent?: number | null | undefined;
}) => _SliverGeometryNative);
export declare namespace _SliverGeometryFactory {
    const zero: SliverGeometry;
}
export declare const SliverGeometry: typeof _SliverGeometryBinding & _FlaxInstanceType<SliverGeometry> & _FlaxDartType<SliverGeometry, readonly ["class", "flax.core/sdk_rendering#type:SliverGeometry", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "scrollExtent" | "paintOrigin" | "paintExtent" | "layoutExtent" | "maxPaintExtent" | "maxScrollObstructionExtent" | "hitTestExtent" | "visible" | "hasVisualOverflow" | "scrollOffsetCorrection" | "cacheExtent" | "crossAxisExtent" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "debugAssertIsValid" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverGeometry" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
