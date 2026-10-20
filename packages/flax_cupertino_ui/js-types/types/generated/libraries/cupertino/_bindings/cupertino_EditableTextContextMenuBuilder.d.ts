import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
export type EditableTextContextMenuBuilder = ((context: upstream0.BuildContext, editableTextState: Readonly<{
    "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream2.EditableText];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream2.EditableText];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream2.EditableText];
}> & Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
}>) => Widget);
export type EditableTextContextMenuBuilderInput = ((context: upstream0.BuildContext, editableTextState: upstream1.EditableTextState) => Widget);
