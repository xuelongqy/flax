import { type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export type DragTargetBuilder<T extends unknown | null = unknown | null> = ((context: upstream0.BuildContext, candidateData: DartListInput<T | null, T | null>, rejectedData: DartListInput<unknown | null, unknown | null>) => Widget);
export type DragTargetBuilderInput<T extends unknown | null = unknown | null> = ((context: upstream0.BuildContext, candidateData: DartList<T | null>, rejectedData: DartList<unknown | null>) => Widget);
