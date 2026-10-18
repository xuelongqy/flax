import { type DartIterable, type DartIterableInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_SearchController';
import '@flax/flutter/material/_bindings/sdk_material_SearchController';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
export type SuggestionsBuilder = ((context: upstream0.BuildContext, controller: Readonly<{
    "__flaxBound:package:flutter/src/material/search_anchor.dart::SearchController": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream2.TextEditingValue];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.TextEditingValue];
}>) => DartIterable<Widget> | Promise<DartIterable<Widget>>);
export type SuggestionsBuilderInput = ((context: upstream0.BuildContext, controller: upstream1.SearchController) => DartIterableInput<Widget, Widget> | Promise<DartIterableInput<Widget, Widget>>);
