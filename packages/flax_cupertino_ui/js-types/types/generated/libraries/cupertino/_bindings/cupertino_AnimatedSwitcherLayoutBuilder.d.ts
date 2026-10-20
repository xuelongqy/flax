import { type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
export type AnimatedSwitcherLayoutBuilder = ((currentChild: Widget | null, previousChildren: DartListInput<Widget, Widget>) => Widget);
export type AnimatedSwitcherLayoutBuilderInput = ((currentChild: Widget | null, previousChildren: DartList<Widget>) => Widget);
