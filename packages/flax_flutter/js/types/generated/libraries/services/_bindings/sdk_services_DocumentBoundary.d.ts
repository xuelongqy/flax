import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DocumentBoundary extends Omit<upstream0.TextBoundary, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_boundary.dart::DocumentBoundary": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary": readonly [];
}> {
    readonly __DocumentBoundary: unique symbol;
    readonly [_flaxDartTypeValue]: DocumentBoundary;
    getLeadingTextBoundaryAt(position: number): number | null;
    getTrailingTextBoundaryAt(position: number): number | null;
    getTextBoundaryAt(position: number): upstream1.TextRange;
}
export declare function _DocumentBoundaryFactory(_text: string): DocumentBoundary;
export interface _DocumentBoundaryNative extends DocumentBoundary {
    readonly [_flaxDartTypeValue]: _DocumentBoundaryNative;
    getLeadingTextBoundaryAt(position: number): number | null;
    getTrailingTextBoundaryAt(position: number): number | null;
    getTextBoundaryAt(position: number): upstream1.TextRange;
}
export declare abstract class _DocumentBoundaryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DocumentBoundary>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DocumentBoundary;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:DocumentBoundary", readonly [], false];
    constructor(_text: string);
}
export declare namespace _DocumentBoundaryFactory {
    function implement(args: [_text: string], implementation: {}): DocumentBoundary;
}
declare const _DocumentBoundaryBinding: typeof _DocumentBoundaryFactory & (new (_text: string) => _DocumentBoundaryNative);
export declare const DocumentBoundary: typeof _DocumentBoundaryBinding & _FlaxInstanceType<DocumentBoundary> & _FlaxDartType<DocumentBoundary, readonly ["class", "flax.core/sdk_services#type:DocumentBoundary", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getLeadingTextBoundaryAt" | "getTrailingTextBoundaryAt" | "getTextBoundaryAt" | "__flaxBound:package:flutter/src/services/text_boundary.dart::DocumentBoundary" | "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary";
export {};
