import type * as upstream0 from '@flax/flutter/scheduler/_bindings/flutter_SchedulerBinding';
import '@flax/flutter/scheduler/_bindings/flutter_SchedulerBinding';
export type SchedulingStrategy = ((options: {
    priority: number;
    scheduler: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
    }>;
}) => boolean);
export type SchedulingStrategyInput = ((options: {
    priority: number;
    scheduler: upstream0.SchedulerBinding;
}) => boolean);
