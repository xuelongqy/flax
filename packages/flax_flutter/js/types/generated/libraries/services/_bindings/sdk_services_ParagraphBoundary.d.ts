import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ParagraphBoundary extends Omit<upstream0.TextBoundary, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_boundary.dart::ParagraphBoundary": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary": readonly [];
}> {
    readonly __ParagraphBoundary: unique symbol;
    readonly [_flaxDartTypeValue]: ParagraphBoundary;
    getLeadingTextBoundaryAt(position: number): number | null;
    getTrailingTextBoundaryAt(position: number): number | null;
    getTextBoundaryAt(position: number): upstream1.TextRange;
}
export declare function _ParagraphBoundaryFactory(_text: string): ParagraphBoundary;
export interface _ParagraphBoundaryNative extends ParagraphBoundary {
    readonly [_flaxDartTypeValue]: _ParagraphBoundaryNative;
    getLeadingTextBoundaryAt(position: number): number | null;
    getTrailingTextBoundaryAt(position: number): number | null;
    getTextBoundaryAt(position: number): upstream1.TextRange;
}
export declare abstract class _ParagraphBoundaryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParagraphBoundary>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ParagraphBoundary;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ParagraphBoundary", readonly [], false];
    constructor(_text: string);
}
export declare namespace _ParagraphBoundaryFactory {
    function implement(args: [_text: string], implementation: {}): ParagraphBoundary;
}
declare const _ParagraphBoundaryBinding: typeof _ParagraphBoundaryFactory & (new (_text: string) => _ParagraphBoundaryNative);
export declare const ParagraphBoundary: typeof _ParagraphBoundaryBinding & _FlaxInstanceType<ParagraphBoundary> & _FlaxDartType<ParagraphBoundary, readonly ["class", "flax.core/sdk_services#type:ParagraphBoundary", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getLeadingTextBoundaryAt" | "getTrailingTextBoundaryAt" | "getTextBoundaryAt" | "__flaxBound:package:flutter/src/services/text_boundary.dart::ParagraphBoundary" | "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary";
export {};
