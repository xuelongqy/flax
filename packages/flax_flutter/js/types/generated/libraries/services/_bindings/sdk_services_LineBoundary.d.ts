import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import '@flax/flutter/services/_bindings/sdk_services_TextLayoutMetrics';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface LineBoundary extends Omit<upstream0.TextBoundary, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_boundary.dart::LineBoundary": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary": readonly [];
}> {
    readonly __LineBoundary: unique symbol;
    readonly [_flaxDartTypeValue]: LineBoundary;
}
export interface LineBoundary {
    readonly [_flaxDartTypeValue]: LineBoundary;
    getLeadingTextBoundaryAt(position: number): number | null;
    getTrailingTextBoundaryAt(position: number): number | null;
    getTextBoundaryAt(position: number): upstream2.TextRange;
}
export declare abstract class LineBoundary extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LineBoundary>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LineBoundary;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:LineBoundary", readonly [], false];
    constructor(_textLayout: Readonly<{
        "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [];
    }>);
}
export declare namespace LineBoundary {
    function implement(args: [_textLayout: Readonly<{
        "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [];
    }>], implementation: {}): LineBoundary;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getLeadingTextBoundaryAt" | "getTrailingTextBoundaryAt" | "getTextBoundaryAt" | "__flaxBound:package:flutter/src/services/text_boundary.dart::LineBoundary" | "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary";
export {};
