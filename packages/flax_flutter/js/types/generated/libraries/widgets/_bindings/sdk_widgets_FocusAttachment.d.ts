import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FocusAttachment extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusAttachment": readonly [];
}> {
    readonly __FocusAttachment: unique symbol;
    readonly [_flaxDartTypeValue]: FocusAttachment;
    readonly isAttached: boolean;
    detach(): void;
    reparent(options?: {
        parent?: (Readonly<{
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
        }>) | null | undefined;
    }): void;
}
export declare const FocusAttachment: object & _FlaxInstanceType<FocusAttachment> & _FlaxDartType<FocusAttachment, readonly ["class", "flax.core/sdk_widgets#type:FocusAttachment", readonly [], false]>;
