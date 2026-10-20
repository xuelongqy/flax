import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusHighlightStrategy';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusHighlightStrategy';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusHighlightMode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusHighlightMode';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusScopeNode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusScopeNode';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream14 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FocusManager extends Omit<upstream0.DiagnosticableTreeMixin, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin | keyof upstream1.DiagnosticableTree>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin | keyof upstream1.DiagnosticableTree | keyof upstream2.Diagnosticable>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin | keyof upstream1.DiagnosticableTree | keyof upstream2.Diagnosticable | keyof upstream3.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager": readonly [];
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
    readonly __FocusManager: unique symbol;
    readonly [_flaxDartTypeValue]: FocusManager;
    readonly hasListeners: boolean;
    get highlightStrategy(): upstream5.FocusHighlightStrategy;
    readonly highlightMode: upstream6.FocusHighlightMode;
    readonly rootScope: upstream7.FocusScopeNode;
    readonly primaryFocus: upstream8.FocusNode | null;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    registerGlobalHandlers(): void;
    addHighlightModeListener(listener: ((value: upstream6.FocusHighlightMode) => void)): void;
    removeHighlightModeListener(listener: ((value: upstream6.FocusHighlightMode) => void)): void;
    addEarlyKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
    removeEarlyKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
    addLateKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
    removeLateKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
    applyFocusChangesIfNeeded(): void;
    set highlightStrategy(value: upstream5.FocusHighlightStrategy);
}
export declare function _FocusManagerFactory(): FocusManager;
export interface _FocusManagerNative extends FocusManager {
    readonly [_flaxDartTypeValue]: _FocusManagerNative;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream9.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    registerGlobalHandlers(): void;
    addHighlightModeListener(listener: ((value: upstream6.FocusHighlightMode) => void)): void;
    removeHighlightModeListener(listener: ((value: upstream6.FocusHighlightMode) => void)): void;
    addEarlyKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
    removeEarlyKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
    addLateKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
    removeLateKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
    applyFocusChangesIfNeeded(): void;
    get highlightStrategy(): upstream5.FocusHighlightStrategy;
    get highlightMode(): upstream6.FocusHighlightMode;
    get rootScope(): upstream7.FocusScopeNode;
    get primaryFocus(): upstream8.FocusNode | null;
    get hasListeners(): boolean;
    set highlightStrategy(value: upstream5.FocusHighlightStrategy);
}
export declare abstract class _FocusManagerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FocusManager>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FocusManager;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FocusManager", readonly [], false];
    constructor();
}
export declare namespace _FocusManagerFactory {
    function implement(args: [], implementation: {}): FocusManager;
}
declare const _FocusManagerBinding: typeof _FocusManagerFactory & (new () => _FocusManagerNative);
export declare namespace _FocusManagerFactory {
    const instance: FocusManager;
}
export declare const FocusManager: typeof _FocusManagerBinding & _FlaxInstanceType<FocusManager> & _FlaxDartType<FocusManager, readonly ["class", "flax.core/sdk_widgets#type:FocusManager", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "highlightStrategy" | "highlightMode" | "rootScope" | "primaryFocus" | "toString" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "addListener" | "removeListener" | "dispose" | "registerGlobalHandlers" | "addHighlightModeListener" | "removeHighlightModeListener" | "addEarlyKeyEventHandler" | "removeEarlyKeyEventHandler" | "addLateKeyEventHandler" | "removeLateKeyEventHandler" | "applyFocusChangesIfNeeded" | "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
