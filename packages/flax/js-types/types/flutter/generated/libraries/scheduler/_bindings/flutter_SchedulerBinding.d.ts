import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SchedulerBinding extends Readonly<{
    "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
}> {
    readonly __SchedulerBinding: unique symbol;
    readonly endOfFrame: Promise<void>;
}
declare const _SchedulerBindingFactory: {
    readonly instance: SchedulerBinding;
};
export declare const SchedulerBinding: typeof _SchedulerBindingFactory & _FlaxInstanceType<SchedulerBinding> & _FlaxDartType<SchedulerBinding, readonly ["class", "flax.core/flutter#type:SchedulerBinding", readonly [], false]>;
export {};
