import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SpellOutStringAttribute extends Omit<upstream0.StringAttribute, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::SpellOutStringAttribute": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::StringAttribute": readonly [];
}> {
    readonly __SpellOutStringAttribute: unique symbol;
    readonly [_flaxDartTypeValue]: SpellOutStringAttribute;
    readonly range: upstream1.TextRange;
    copy(options: {
        range: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
    }): upstream0.StringAttribute;
    toString(): string;
}
export declare function _SpellOutStringAttributeFactory(options: {
    range: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>;
}): SpellOutStringAttribute;
export interface _SpellOutStringAttributeNative extends SpellOutStringAttribute {
    readonly [_flaxDartTypeValue]: _SpellOutStringAttributeNative;
    copy(options: {
        range: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
    }): upstream0.StringAttribute;
    toString(): string;
    get range(): upstream1.TextRange;
}
export declare abstract class _SpellOutStringAttributeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpellOutStringAttribute>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SpellOutStringAttribute;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:SpellOutStringAttribute", readonly [], false];
    constructor(options: {
        range: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
    });
}
export declare namespace _SpellOutStringAttributeFactory {
    function implement(args: [options: {
        range: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
    }], implementation: {}): SpellOutStringAttribute;
}
declare const _SpellOutStringAttributeBinding: typeof _SpellOutStringAttributeFactory & (new (options: {
    range: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>;
}) => _SpellOutStringAttributeNative);
export declare const SpellOutStringAttribute: typeof _SpellOutStringAttributeBinding & _FlaxInstanceType<SpellOutStringAttribute> & _FlaxDartType<SpellOutStringAttribute, readonly ["class", "flax.core/sdk_dart_ui#type:SpellOutStringAttribute", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "range" | "copy" | "toString" | "__flaxBound:dart:ui::SpellOutStringAttribute" | "__flaxBound:dart:ui::StringAttribute";
export {};
