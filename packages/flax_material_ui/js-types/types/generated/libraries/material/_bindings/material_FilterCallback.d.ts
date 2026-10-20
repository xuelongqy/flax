import { type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_DropdownMenuEntry';
import '@flax/material-ui/_bindings/material_DropdownMenuEntry';
export type FilterCallback<T extends unknown | null = unknown | null> = ((entries: DartListInput<upstream0.DropdownMenuEntry<T>, Readonly<{
    "__flaxBound:package:material_ui/src/dropdown_menu.dart::DropdownMenuEntry": readonly [T];
}>>, filter: string) => DartList<upstream0.DropdownMenuEntry<T>>);
export type FilterCallbackInput<T extends unknown | null = unknown | null> = ((entries: DartList<upstream0.DropdownMenuEntry<T>>, filter: string) => DartListInput<upstream0.DropdownMenuEntry<T>, Readonly<{
    "__flaxBound:package:material_ui/src/dropdown_menu.dart::DropdownMenuEntry": readonly [T];
}>>);
