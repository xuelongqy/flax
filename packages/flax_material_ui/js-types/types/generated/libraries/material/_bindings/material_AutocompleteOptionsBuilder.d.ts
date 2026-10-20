import { type DartIterable, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
export type AutocompleteOptionsBuilder<T extends {} = {}> = ((textEditingValue: Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
}>) => DartIterable<T> | Promise<DartIterable<T>>);
export type AutocompleteOptionsBuilderInput<T extends {} = {}> = ((textEditingValue: upstream0.TextEditingValue) => DartIterableInput<T, T> | Promise<DartIterableInput<T, T>>);
