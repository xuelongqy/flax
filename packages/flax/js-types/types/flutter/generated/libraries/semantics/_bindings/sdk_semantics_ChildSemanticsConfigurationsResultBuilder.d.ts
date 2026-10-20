import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsConfiguration';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsConfiguration';
import type * as upstream1 from '@flax/flutter/semantics/_bindings/sdk_semantics_ChildSemanticsConfigurationsResult';
import '@flax/flutter/semantics/_bindings/sdk_semantics_ChildSemanticsConfigurationsResult';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ChildSemanticsConfigurationsResultBuilder extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::ChildSemanticsConfigurationsResultBuilder": readonly [];
}> {
    readonly __ChildSemanticsConfigurationsResultBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: ChildSemanticsConfigurationsResultBuilder;
    markAsMergeUp(config: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>): void;
    markAsSiblingMergeGroup(configs: DartListInput<upstream0.SemanticsConfiguration, Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>>): void;
    build(): upstream1.ChildSemanticsConfigurationsResult;
}
export declare function _ChildSemanticsConfigurationsResultBuilderFactory(): ChildSemanticsConfigurationsResultBuilder;
export interface _ChildSemanticsConfigurationsResultBuilderNative extends ChildSemanticsConfigurationsResultBuilder {
    readonly [_flaxDartTypeValue]: _ChildSemanticsConfigurationsResultBuilderNative;
    markAsMergeUp(config: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>): void;
    markAsSiblingMergeGroup(configs: DartListInput<upstream0.SemanticsConfiguration, Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>>): void;
    build(): upstream1.ChildSemanticsConfigurationsResult;
}
export declare abstract class _ChildSemanticsConfigurationsResultBuilderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChildSemanticsConfigurationsResultBuilder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ChildSemanticsConfigurationsResultBuilder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder", readonly [], false];
    constructor();
}
export declare namespace _ChildSemanticsConfigurationsResultBuilderFactory {
    function implement(args: [], implementation: {}): ChildSemanticsConfigurationsResultBuilder;
}
declare const _ChildSemanticsConfigurationsResultBuilderBinding: typeof _ChildSemanticsConfigurationsResultBuilderFactory & (new () => _ChildSemanticsConfigurationsResultBuilderNative);
export declare const ChildSemanticsConfigurationsResultBuilder: typeof _ChildSemanticsConfigurationsResultBuilderBinding & _FlaxInstanceType<ChildSemanticsConfigurationsResultBuilder> & _FlaxDartType<ChildSemanticsConfigurationsResultBuilder, readonly ["class", "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder", readonly [], false]>;
export {};
