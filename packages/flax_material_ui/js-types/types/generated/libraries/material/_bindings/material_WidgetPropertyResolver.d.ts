import { type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
export type WidgetPropertyResolver<T extends unknown | null = unknown | null> = ((states: DartSetInput<upstream0.WidgetState, upstream0.WidgetState>) => T);
export type WidgetPropertyResolverInput<T extends unknown | null = unknown | null> = ((states: DartSet<upstream0.WidgetState>) => T);
