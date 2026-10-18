import { type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_DropdownMenuEntry';
import '@flax/flutter/material/_bindings/sdk_material_DropdownMenuEntry';
export type SearchCallback<T extends unknown | null = unknown | null> = ((entries: DartListInput<upstream0.DropdownMenuEntry<T>, Readonly<{
    "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [T];
}>>, query: string) => number | null);
export type SearchCallbackInput<T extends unknown | null = unknown | null> = ((entries: DartList<upstream0.DropdownMenuEntry<T>>, query: string) => number | null);
