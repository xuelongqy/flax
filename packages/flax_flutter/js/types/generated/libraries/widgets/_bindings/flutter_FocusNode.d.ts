import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_UnfocusDisposition';
export interface FocusNode extends upstream0.Listenable, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> {
    readonly __FocusNode: unique symbol;
    readonly hasFocus: boolean;
    readonly hasPrimaryFocus: boolean;
    get canRequestFocus(): boolean;
    get skipTraversal(): boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    requestFocus(node?: FocusNode | null): void;
    unfocus(options?: {
        disposition?: upstream1.UnfocusDisposition | undefined;
    }): void;
    nextFocus(): boolean;
    previousFocus(): boolean;
    dispose(): void;
    set canRequestFocus(value: boolean);
    set skipTraversal(value: boolean);
}
export declare function FocusNode(options?: {
    debugLabel?: string | null | undefined;
    skipTraversal?: boolean | undefined;
    canRequestFocus?: boolean | undefined;
}): FocusNode;
