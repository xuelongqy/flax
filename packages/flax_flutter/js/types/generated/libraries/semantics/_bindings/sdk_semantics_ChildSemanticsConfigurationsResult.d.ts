import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsConfiguration';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsConfiguration';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ChildSemanticsConfigurationsResult extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::ChildSemanticsConfigurationsResult": readonly [];
}> {
    readonly __ChildSemanticsConfigurationsResult: unique symbol;
    readonly [_flaxDartTypeValue]: ChildSemanticsConfigurationsResult;
    readonly mergeUp: DartList<upstream0.SemanticsConfiguration>;
    readonly siblingMergeGroups: DartList<DartList<upstream0.SemanticsConfiguration>>;
}
export declare namespace _ChildSemanticsConfigurationsResultFactory {
    function implement(args: [], implementation: {
        get mergeUp(): DartListInput<upstream0.SemanticsConfiguration, Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
        }>>;
        get siblingMergeGroups(): DartListInput<DartList<upstream0.SemanticsConfiguration>, DartListInput<upstream0.SemanticsConfiguration, Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
        }>>>;
    }): ChildSemanticsConfigurationsResult;
}
export declare const ChildSemanticsConfigurationsResult: typeof _ChildSemanticsConfigurationsResultFactory & _FlaxInstanceType<ChildSemanticsConfigurationsResult> & _FlaxDartType<ChildSemanticsConfigurationsResult, readonly ["class", "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResult", readonly [], false]>;
