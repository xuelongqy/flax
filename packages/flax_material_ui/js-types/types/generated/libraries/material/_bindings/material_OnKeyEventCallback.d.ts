import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
export type OnKeyEventCallback = ((event: Readonly<{
    "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) => upstream0.KeyEventResult);
export type OnKeyEventCallbackInput = ((event: upstream1.KeyEvent) => upstream0.KeyEventResult);
