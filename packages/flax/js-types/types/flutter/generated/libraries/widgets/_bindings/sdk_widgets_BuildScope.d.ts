import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BuildScope extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::BuildScope": readonly [];
}> {
    readonly __BuildScope: unique symbol;
    readonly [_flaxDartTypeValue]: BuildScope;
    readonly scheduleRebuild: (() => void) | null;
}
export declare function _BuildScopeFactory(options?: {
    scheduleRebuild?: (() => void) | null | undefined;
}): BuildScope;
export declare const BuildScope: typeof _BuildScopeFactory & _FlaxInstanceType<BuildScope> & _FlaxDartType<BuildScope, readonly ["class", "flax.core/sdk_widgets#type:BuildScope", readonly [], false]>;
