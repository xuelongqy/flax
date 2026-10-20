import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AttributedString extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
}> {
    readonly __AttributedString: unique symbol;
    readonly [_flaxDartTypeValue]: AttributedString;
    readonly string: string;
    readonly attributes: DartList<upstream0.StringAttribute>;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>): AttributedString;
}
export declare function _AttributedStringFactory(string: string, options?: {
    attributes?: DartListInput<upstream0.StringAttribute, Readonly<{
        "__flaxBound:dart:ui::StringAttribute": readonly [];
    }>> | undefined;
}): AttributedString;
export interface _AttributedStringNative extends AttributedString {
    readonly [_flaxDartTypeValue]: _AttributedStringNative;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>): AttributedString;
    get string(): string;
    get attributes(): DartList<upstream0.StringAttribute>;
}
export declare abstract class _AttributedStringNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AttributedString>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AttributedString;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:AttributedString", readonly [], false];
    constructor(string: string, options?: {
        attributes?: DartListInput<upstream0.StringAttribute, Readonly<{
            "__flaxBound:dart:ui::StringAttribute": readonly [];
        }>> | undefined;
    });
}
export declare namespace _AttributedStringFactory {
    function implement(args: [string: string, options?: {
        attributes?: DartListInput<upstream0.StringAttribute, Readonly<{
            "__flaxBound:dart:ui::StringAttribute": readonly [];
        }>> | undefined;
    }], implementation: {}): AttributedString;
}
declare const _AttributedStringBinding: typeof _AttributedStringFactory & (new (string: string, options?: {
    attributes?: DartListInput<upstream0.StringAttribute, Readonly<{
        "__flaxBound:dart:ui::StringAttribute": readonly [];
    }>> | undefined;
}) => _AttributedStringNative);
export declare const AttributedString: typeof _AttributedStringBinding & _FlaxInstanceType<AttributedString> & _FlaxDartType<AttributedString, readonly ["class", "flax.core/sdk_semantics#type:AttributedString", readonly [], false]>;
export {};
