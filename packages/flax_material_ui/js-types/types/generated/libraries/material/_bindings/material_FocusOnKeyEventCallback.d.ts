import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
export type FocusOnKeyEventCallback = ((node: Readonly<{
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
}>, event: Readonly<{
    "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) => upstream0.KeyEventResult);
export type FocusOnKeyEventCallbackInput = ((node: upstream1.FocusNode, event: upstream2.KeyEvent) => upstream0.KeyEventResult);
