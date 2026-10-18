import { type DartIterable, type DartIterableInput, type Widget } from '@flax/core/bindings';
export type ViewBuilder = ((suggestions: DartIterableInput<Widget, Widget>) => Widget);
export type ViewBuilderInput = ((suggestions: DartIterable<Widget>) => Widget);
