import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_HitTestResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_HitTestResponse';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_HitTestRequest';
import '@flax/dart/ui/_bindings/sdk_dart_ui_HitTestRequest';
export type HitTestCallback = ((request: Readonly<{
    "__flaxBound:dart:ui::HitTestRequest": readonly [];
}>) => upstream0.HitTestResponse);
export type HitTestCallbackInput = ((request: upstream1.HitTestRequest) => Readonly<{
    "__flaxBound:dart:ui::HitTestResponse": readonly [];
}>);
