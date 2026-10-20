import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
export type AutocompleteFieldViewBuilder = ((context: upstream0.BuildContext, textEditingController: Readonly<{
    "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream3.TextEditingValue];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.TextEditingValue];
}>, focusNode: Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, onFieldSubmitted: (() => void)) => Widget);
export type AutocompleteFieldViewBuilderInput = ((context: upstream0.BuildContext, textEditingController: upstream1.TextEditingController, focusNode: upstream2.FocusNode, onFieldSubmitted: (() => void)) => Widget);
