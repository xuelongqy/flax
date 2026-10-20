import { type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_DropdownMenuEntry';
import '@flax/material-ui/_bindings/material_DropdownMenuEntry';
export type SearchCallback<T extends unknown | null = unknown | null> = ((entries: DartListInput<upstream0.DropdownMenuEntry<T>, Readonly<{
    "__flaxBound:package:material_ui/src/dropdown_menu.dart::DropdownMenuEntry": readonly [T];
}>>, query: string) => number | null);
export type SearchCallbackInput<T extends unknown | null = unknown | null> = ((entries: DartList<upstream0.DropdownMenuEntry<T>>, query: string) => number | null);
