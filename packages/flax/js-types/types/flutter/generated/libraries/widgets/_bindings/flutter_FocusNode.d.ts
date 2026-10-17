import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_UnfocusDisposition';
import '@flax/flutter/widgets/_bindings/flutter_UnfocusDisposition';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FocusNode extends Omit<upstream0.Listenable, typeof _flaxDartTypeValue | "skipTraversal" | "canRequestFocus" | "descendantsAreFocusable" | "descendantsAreTraversable" | "context" | "parent" | "children" | "traversalChildren" | "debugLabel" | "descendants" | "traversalDescendants" | "ancestors" | "hasFocus" | "hasPrimaryFocus" | "size" | "offset" | "hasListeners" | "addListener" | "removeListener" | "unfocus" | "consumeKeyboardToken" | "dispose" | "requestFocus" | "nextFocus" | "previousFocus" | "toStringShort" | "toStringShallow" | "toStringDeep">, Readonly<{
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
    get skipTraversal(): boolean;
    get canRequestFocus(): boolean;
    get descendantsAreFocusable(): boolean;
    get descendantsAreTraversable(): boolean;
    readonly context: upstream1.BuildContext | null;
    readonly parent: FocusNode | null;
    readonly children: DartIterable<FocusNode>;
    readonly traversalChildren: DartIterable<FocusNode>;
    get debugLabel(): string | null;
    readonly descendants: DartIterable<FocusNode>;
    readonly traversalDescendants: DartIterable<FocusNode>;
    readonly ancestors: DartIterable<FocusNode>;
    readonly hasFocus: boolean;
    readonly hasPrimaryFocus: boolean;
    readonly size: upstream2.Size;
    readonly offset: upstream3.Offset;
    readonly hasListeners: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    unfocus(options?: {
        disposition?: upstream4.UnfocusDisposition | undefined;
    }): void;
    consumeKeyboardToken(): boolean;
    dispose(): void;
    requestFocus(node?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> | null): void;
    nextFocus(): boolean;
    previousFocus(): boolean;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    set skipTraversal(value: boolean);
    set canRequestFocus(value: boolean);
    set descendantsAreFocusable(value: boolean);
    set descendantsAreTraversable(value: boolean);
    set debugLabel(value: string | null);
}
export declare function _FocusNodeFactory(options?: {
    debugLabel?: string | null | undefined;
    skipTraversal?: boolean | undefined;
    canRequestFocus?: boolean | undefined;
    descendantsAreFocusable?: boolean | undefined;
    descendantsAreTraversable?: boolean | undefined;
}): FocusNode;
export declare const FocusNode: typeof _FocusNodeFactory & _FlaxInstanceType<FocusNode> & _FlaxDartType<FocusNode, readonly ["class", "flax.core/flutter#type:FocusNode", readonly [], false]>;
