import { type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_PopupMenuEntry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export type PopupMenuItemBuilder<T extends unknown | null = unknown | null> = ((context: upstream1.BuildContext) => DartList<upstream0.PopupMenuEntry<T>>);
export type PopupMenuItemBuilderInput<T extends unknown | null = unknown | null> = ((context: upstream1.BuildContext) => DartListInput<upstream0.PopupMenuEntry<T>, upstream0.PopupMenuEntry<T>>);
