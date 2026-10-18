import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface LocaleStringAttribute extends Omit<upstream0.StringAttribute, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::LocaleStringAttribute": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::StringAttribute": readonly [];
}> {
    readonly __LocaleStringAttribute: unique symbol;
    readonly [_flaxDartTypeValue]: LocaleStringAttribute;
}
export interface LocaleStringAttribute {
    readonly [_flaxDartTypeValue]: LocaleStringAttribute;
    copy(options: {
        range: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
    }): upstream0.StringAttribute;
    toString(): string;
    get locale(): upstream2.Locale;
    get range(): upstream1.TextRange;
}
export declare abstract class LocaleStringAttribute extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LocaleStringAttribute>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LocaleStringAttribute;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:LocaleStringAttribute", readonly [], false];
    constructor(options: {
        range: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
        locale: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>;
    });
}
export declare namespace LocaleStringAttribute {
    function implement(args: [options: {
        range: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
        locale: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>;
    }], implementation: {}): LocaleStringAttribute;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "range" | "locale" | "copy" | "toString" | "__flaxBound:dart:ui::LocaleStringAttribute" | "__flaxBound:dart:ui::StringAttribute";
export {};
