import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusHighlightMode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusHighlightMode';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/flutter_UnfocusDisposition';
import '@flax/flutter/widgets/_bindings/flutter_UnfocusDisposition';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusAttachment';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusAttachment';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalDirection';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FocusScopeNode extends Omit<upstream0.FocusNode, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.FocusNode>, Omit<upstream2.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.FocusNode | keyof upstream1.DiagnosticableTreeMixin>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.FocusNode | keyof upstream1.DiagnosticableTreeMixin | keyof upstream2.DiagnosticableTree>, Omit<upstream4.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.FocusNode | keyof upstream1.DiagnosticableTreeMixin | keyof upstream2.DiagnosticableTree | keyof upstream3.Diagnosticable>, Omit<upstream5.Listenable, _flaxOwnMembers0 | keyof upstream0.FocusNode | keyof upstream1.DiagnosticableTreeMixin | keyof upstream2.DiagnosticableTree | keyof upstream3.Diagnosticable | keyof upstream4.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusScopeNode": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __FocusScopeNode: unique symbol;
    readonly [_flaxDartTypeValue]: FocusScopeNode;
    get skipTraversal(): boolean;
    get canRequestFocus(): boolean;
    get descendantsAreFocusable(): boolean;
    get descendantsAreTraversable(): boolean;
    readonly context: upstream10.BuildContext | null;
    get onKey(): ((node: Readonly<{
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
        "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => upstream6.KeyEventResult) | null;
    get onKeyEvent(): ((node: Readonly<{
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
    }>) => upstream6.KeyEventResult) | null;
    readonly parent: upstream0.FocusNode | null;
    readonly children: DartIterable<upstream0.FocusNode>;
    readonly traversalChildren: DartIterable<upstream0.FocusNode>;
    get debugLabel(): string | null;
    readonly descendants: DartIterable<upstream0.FocusNode>;
    readonly traversalDescendants: DartIterable<upstream0.FocusNode>;
    readonly ancestors: DartIterable<upstream0.FocusNode>;
    readonly hasFocus: boolean;
    readonly hasPrimaryFocus: boolean;
    readonly highlightMode: upstream11.FocusHighlightMode;
    readonly nearestScope: FocusScopeNode;
    readonly enclosingScope: FocusScopeNode | null;
    readonly size: upstream12.Size;
    readonly offset: upstream13.Offset;
    readonly rect: upstream14.Rect;
    readonly hasListeners: boolean;
    get traversalEdgeBehavior(): upstream9.TraversalEdgeBehavior;
    get directionalTraversalEdgeBehavior(): upstream9.TraversalEdgeBehavior;
    readonly isFirstFocus: boolean;
    readonly focusedChild: upstream0.FocusNode | null;
    unfocus(options?: {
        disposition?: upstream15.UnfocusDisposition | undefined;
    }): void;
    consumeKeyboardToken(): boolean;
    attach(context: upstream10.BuildContext | null, options?: {
        onKey?: ((node: upstream0.FocusNode, event: upstream8.RawKeyEvent) => upstream6.KeyEventResult) | null | undefined;
        onKeyEvent?: ((node: upstream0.FocusNode, event: upstream7.KeyEvent) => upstream6.KeyEventResult) | null | undefined;
    }): upstream16.FocusAttachment;
    dispose(): void;
    requestFocus(node?: (Readonly<{
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
    }>) | null): void;
    nextFocus(): boolean;
    previousFocus(): boolean;
    focusInDirection(direction: upstream17.TraversalDirection): boolean;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    debugDescribeChildren(): DartList<upstream19.DiagnosticsNode>;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream20.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream21.DiagnosticsTreeStyle | null | undefined;
    }): upstream19.DiagnosticsNode;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    toString(options?: {
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    setFirstFocus(scope: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusScopeNode": readonly [];
    }> & Readonly<{
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
    }>): void;
    autofocus(node: Readonly<{
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
    }>): void;
    requestScopeFocus(): void;
    set skipTraversal(value: boolean);
    set canRequestFocus(value: boolean);
    set descendantsAreFocusable(value: boolean);
    set descendantsAreTraversable(value: boolean);
    set onKey(value: ((node: upstream0.FocusNode, event: upstream8.RawKeyEvent) => upstream6.KeyEventResult) | null);
    set onKeyEvent(value: ((node: upstream0.FocusNode, event: upstream7.KeyEvent) => upstream6.KeyEventResult) | null);
    set debugLabel(value: string | null);
    set traversalEdgeBehavior(value: upstream9.TraversalEdgeBehavior);
    set directionalTraversalEdgeBehavior(value: upstream9.TraversalEdgeBehavior);
}
export declare function _FocusScopeNodeFactory(options?: {
    debugLabel?: string | null | undefined;
    onKeyEvent?: ((node: upstream0.FocusNode, event: upstream7.KeyEvent) => upstream6.KeyEventResult) | null | undefined;
    onKey?: ((node: upstream0.FocusNode, event: upstream8.RawKeyEvent) => upstream6.KeyEventResult) | null | undefined;
    skipTraversal?: boolean | undefined;
    canRequestFocus?: boolean | undefined;
    traversalEdgeBehavior?: upstream9.TraversalEdgeBehavior | undefined;
    directionalTraversalEdgeBehavior?: upstream9.TraversalEdgeBehavior | undefined;
}): FocusScopeNode;
export interface _FocusScopeNodeNative extends FocusScopeNode {
    readonly [_flaxDartTypeValue]: _FocusScopeNodeNative;
    unfocus(options?: {
        disposition?: upstream15.UnfocusDisposition | undefined;
    }): void;
    consumeKeyboardToken(): boolean;
    attach(context: upstream10.BuildContext | null, options?: {
        onKeyEvent?: ((node: upstream0.FocusNode, event: upstream7.KeyEvent) => upstream6.KeyEventResult) | null | undefined;
        onKey?: ((node: upstream0.FocusNode, event: upstream8.RawKeyEvent) => upstream6.KeyEventResult) | null | undefined;
    }): upstream16.FocusAttachment;
    dispose(): void;
    requestFocus(node?: (Readonly<{
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
    }>) | null): void;
    nextFocus(): boolean;
    previousFocus(): boolean;
    focusInDirection(direction: upstream17.TraversalDirection): boolean;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    debugDescribeChildren(): DartList<upstream19.DiagnosticsNode>;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream20.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream21.DiagnosticsTreeStyle | null | undefined;
    }): upstream19.DiagnosticsNode;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    toString(options?: {
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    setFirstFocus(scope: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusScopeNode": readonly [];
    }> & Readonly<{
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
    }>): void;
    autofocus(node: Readonly<{
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
    }>): void;
    requestScopeFocus(): void;
    get nearestScope(): FocusScopeNode;
    get descendantsAreFocusable(): boolean;
    get traversalEdgeBehavior(): upstream9.TraversalEdgeBehavior;
    get directionalTraversalEdgeBehavior(): upstream9.TraversalEdgeBehavior;
    get isFirstFocus(): boolean;
    get focusedChild(): upstream0.FocusNode | null;
    get traversalChildren(): DartIterable<upstream0.FocusNode>;
    get traversalDescendants(): DartIterable<upstream0.FocusNode>;
    get skipTraversal(): boolean;
    get canRequestFocus(): boolean;
    get descendantsAreTraversable(): boolean;
    get context(): upstream10.BuildContext | null;
    get onKey(): ((node: Readonly<{
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
        "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => upstream6.KeyEventResult) | null;
    get onKeyEvent(): ((node: Readonly<{
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
    }>) => upstream6.KeyEventResult) | null;
    get parent(): upstream0.FocusNode | null;
    get children(): DartIterable<upstream0.FocusNode>;
    get debugLabel(): string | null;
    get descendants(): DartIterable<upstream0.FocusNode>;
    get ancestors(): DartIterable<upstream0.FocusNode>;
    get hasFocus(): boolean;
    get hasPrimaryFocus(): boolean;
    get highlightMode(): upstream11.FocusHighlightMode;
    get enclosingScope(): FocusScopeNode | null;
    get size(): upstream12.Size;
    get offset(): upstream13.Offset;
    get rect(): upstream14.Rect;
    get hasListeners(): boolean;
    set traversalEdgeBehavior(value: upstream9.TraversalEdgeBehavior);
    set directionalTraversalEdgeBehavior(value: upstream9.TraversalEdgeBehavior);
    set skipTraversal(value: boolean);
    set canRequestFocus(value: boolean);
    set descendantsAreFocusable(value: boolean);
    set descendantsAreTraversable(value: boolean);
    set onKey(value: ((node: upstream0.FocusNode, event: upstream8.RawKeyEvent) => upstream6.KeyEventResult) | null);
    set onKeyEvent(value: ((node: upstream0.FocusNode, event: upstream7.KeyEvent) => upstream6.KeyEventResult) | null);
    set debugLabel(value: string | null);
}
export declare abstract class _FocusScopeNodeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FocusScopeNode>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FocusScopeNode;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FocusScopeNode", readonly [], false];
    constructor(options?: {
        debugLabel?: string | null | undefined;
        onKeyEvent?: ((node: upstream0.FocusNode, event: upstream7.KeyEvent) => upstream6.KeyEventResult) | null | undefined;
        onKey?: ((node: upstream0.FocusNode, event: upstream8.RawKeyEvent) => upstream6.KeyEventResult) | null | undefined;
        skipTraversal?: boolean | undefined;
        canRequestFocus?: boolean | undefined;
        traversalEdgeBehavior?: upstream9.TraversalEdgeBehavior | undefined;
        directionalTraversalEdgeBehavior?: upstream9.TraversalEdgeBehavior | undefined;
    });
}
export declare namespace _FocusScopeNodeFactory {
    function implement(args: [options?: {
        debugLabel?: string | null | undefined;
        onKeyEvent?: ((node: upstream0.FocusNode, event: upstream7.KeyEvent) => upstream6.KeyEventResult) | null | undefined;
        onKey?: ((node: upstream0.FocusNode, event: upstream8.RawKeyEvent) => upstream6.KeyEventResult) | null | undefined;
        skipTraversal?: boolean | undefined;
        canRequestFocus?: boolean | undefined;
        traversalEdgeBehavior?: upstream9.TraversalEdgeBehavior | undefined;
        directionalTraversalEdgeBehavior?: upstream9.TraversalEdgeBehavior | undefined;
    }], implementation: {}): FocusScopeNode;
}
declare const _FocusScopeNodeBinding: typeof _FocusScopeNodeFactory & (new (options?: {
    debugLabel?: string | null | undefined;
    onKeyEvent?: ((node: upstream0.FocusNode, event: upstream7.KeyEvent) => upstream6.KeyEventResult) | null | undefined;
    onKey?: ((node: upstream0.FocusNode, event: upstream8.RawKeyEvent) => upstream6.KeyEventResult) | null | undefined;
    skipTraversal?: boolean | undefined;
    canRequestFocus?: boolean | undefined;
    traversalEdgeBehavior?: upstream9.TraversalEdgeBehavior | undefined;
    directionalTraversalEdgeBehavior?: upstream9.TraversalEdgeBehavior | undefined;
}) => _FocusScopeNodeNative);
export declare const FocusScopeNode: typeof _FocusScopeNodeBinding & _FlaxInstanceType<FocusScopeNode> & _FlaxDartType<FocusScopeNode, readonly ["class", "flax.core/sdk_widgets#type:FocusScopeNode", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "skipTraversal" | "canRequestFocus" | "descendantsAreFocusable" | "descendantsAreTraversable" | "context" | "onKey" | "onKeyEvent" | "parent" | "children" | "traversalChildren" | "debugLabel" | "descendants" | "traversalDescendants" | "ancestors" | "hasFocus" | "hasPrimaryFocus" | "highlightMode" | "nearestScope" | "enclosingScope" | "size" | "offset" | "rect" | "hasListeners" | "traversalEdgeBehavior" | "directionalTraversalEdgeBehavior" | "isFirstFocus" | "focusedChild" | "unfocus" | "consumeKeyboardToken" | "attach" | "dispose" | "requestFocus" | "nextFocus" | "previousFocus" | "focusInDirection" | "debugFillProperties" | "debugDescribeChildren" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "addListener" | "removeListener" | "toString" | "setFirstFocus" | "autofocus" | "requestScopeFocus" | "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusScopeNode" | "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
