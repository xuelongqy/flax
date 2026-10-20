import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import '@flax/flutter/services/_bindings/sdk_services_TextLayoutMetrics';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LineBoundary extends Omit<upstream0.TextBoundary, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_boundary.dart::LineBoundary": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary": readonly [];
}> {
    readonly __LineBoundary: unique symbol;
    readonly [_flaxDartTypeValue]: LineBoundary;
    getLeadingTextBoundaryAt(position: number): number | null;
    getTrailingTextBoundaryAt(position: number): number | null;
    getTextBoundaryAt(position: number): upstream2.TextRange;
}
export declare function _LineBoundaryFactory(_textLayout: Readonly<{
    "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [];
}>): LineBoundary;
export interface _LineBoundaryNative extends LineBoundary {
    readonly [_flaxDartTypeValue]: _LineBoundaryNative;
    getLeadingTextBoundaryAt(position: number): number | null;
    getTrailingTextBoundaryAt(position: number): number | null;
    getTextBoundaryAt(position: number): upstream2.TextRange;
}
export declare abstract class _LineBoundaryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LineBoundary>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LineBoundary;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:LineBoundary", readonly [], false];
    constructor(_textLayout: Readonly<{
        "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [];
    }>);
}
export declare namespace _LineBoundaryFactory {
    function implement(args: [_textLayout: Readonly<{
        "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [];
    }>], implementation: {}): LineBoundary;
}
declare const _LineBoundaryBinding: typeof _LineBoundaryFactory & (new (_textLayout: Readonly<{
    "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [];
}>) => _LineBoundaryNative);
export declare const LineBoundary: typeof _LineBoundaryBinding & _FlaxInstanceType<LineBoundary> & _FlaxDartType<LineBoundary, readonly ["class", "flax.core/sdk_services#type:LineBoundary", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getLeadingTextBoundaryAt" | "getTrailingTextBoundaryAt" | "getTextBoundaryAt" | "__flaxBound:package:flutter/src/services/text_boundary.dart::LineBoundary" | "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary";
export {};
