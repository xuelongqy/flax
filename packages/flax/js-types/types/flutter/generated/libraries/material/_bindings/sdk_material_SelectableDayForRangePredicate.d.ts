import { type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
export type SelectableDayForRangePredicate = ((day: DartInput<Readonly<{
    "__flaxBound:dart:core::DateTime": readonly [];
}>>, selectedStartDay: DartInput<Readonly<{
    "__flaxBound:dart:core::DateTime": readonly [];
}>> | null, selectedEndDay: DartInput<Readonly<{
    "__flaxBound:dart:core::DateTime": readonly [];
}>> | null) => boolean);
export type SelectableDayForRangePredicateInput = ((day: upstream0.DateTime, selectedStartDay: upstream0.DateTime | null, selectedEndDay: upstream0.DateTime | null) => boolean);
