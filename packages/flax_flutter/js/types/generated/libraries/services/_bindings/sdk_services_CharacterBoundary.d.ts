import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CharacterBoundary extends Omit<upstream0.TextBoundary, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_boundary.dart::CharacterBoundary": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary": readonly [];
}> {
    readonly __CharacterBoundary: unique symbol;
    readonly [_flaxDartTypeValue]: CharacterBoundary;
    getLeadingTextBoundaryAt(position: number): number | null;
    getTrailingTextBoundaryAt(position: number): number | null;
    getTextBoundaryAt(position: number): upstream1.TextRange;
}
export declare function _CharacterBoundaryFactory(_text: string): CharacterBoundary;
export interface _CharacterBoundaryNative extends CharacterBoundary {
    readonly [_flaxDartTypeValue]: _CharacterBoundaryNative;
    getLeadingTextBoundaryAt(position: number): number | null;
    getTrailingTextBoundaryAt(position: number): number | null;
    getTextBoundaryAt(position: number): upstream1.TextRange;
}
export declare abstract class _CharacterBoundaryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CharacterBoundary>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CharacterBoundary;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:CharacterBoundary", readonly [], false];
    constructor(_text: string);
}
export declare namespace _CharacterBoundaryFactory {
    function implement(args: [_text: string], implementation: {}): CharacterBoundary;
}
declare const _CharacterBoundaryBinding: typeof _CharacterBoundaryFactory & (new (_text: string) => _CharacterBoundaryNative);
export declare const CharacterBoundary: typeof _CharacterBoundaryBinding & _FlaxInstanceType<CharacterBoundary> & _FlaxDartType<CharacterBoundary, readonly ["class", "flax.core/sdk_services#type:CharacterBoundary", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getLeadingTextBoundaryAt" | "getTrailingTextBoundaryAt" | "getTextBoundaryAt" | "__flaxBound:package:flutter/src/services/text_boundary.dart::CharacterBoundary" | "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary";
export {};
