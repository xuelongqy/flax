import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
export type SelectionChangedCallback = ((selection: Readonly<{
    "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::TextRange": readonly [];
}>, cause: upstream1.SelectionChangedCause | null) => void);
export type SelectionChangedCallbackInput = ((selection: upstream0.TextSelection, cause: upstream1.SelectionChangedCause | null) => void);
