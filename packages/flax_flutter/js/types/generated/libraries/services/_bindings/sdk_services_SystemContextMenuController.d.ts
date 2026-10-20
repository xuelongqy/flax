import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SystemContextMenuClient';
import '@flax/flutter/services/_bindings/sdk_services_SystemContextMenuClient';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemContextMenuController extends Omit<upstream0.SystemContextMenuClient, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.SystemContextMenuClient>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::SystemContextMenuController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/binding.dart::SystemContextMenuClient": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SystemContextMenuController: unique symbol;
    readonly [_flaxDartTypeValue]: SystemContextMenuController;
    readonly onSystemHide: (() => void) | null;
    handleSystemHide(): void;
    handleCustomContextMenuAction(callbackId: string): void;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    show(targetRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): Promise<void>;
    showWithItems(targetRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, items: DartListInput<upstream7.IOSSystemContextMenuItemData, Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData": readonly [];
    }>>): Promise<void>;
    hide(): Promise<void>;
    dispose(): void;
}
export declare function _SystemContextMenuControllerFactory(options?: {
    onSystemHide?: (() => void) | null | undefined;
}): SystemContextMenuController;
export interface _SystemContextMenuControllerNative extends SystemContextMenuController {
    readonly [_flaxDartTypeValue]: _SystemContextMenuControllerNative;
    handleSystemHide(): void;
    handleCustomContextMenuAction(callbackId: string): void;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    show(targetRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): Promise<void>;
    showWithItems(targetRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, items: DartListInput<upstream7.IOSSystemContextMenuItemData, Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData": readonly [];
    }>>): Promise<void>;
    hide(): Promise<void>;
    dispose(): void;
    get onSystemHide(): (() => void) | null;
}
export declare abstract class _SystemContextMenuControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SystemContextMenuController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SystemContextMenuController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SystemContextMenuController", readonly [], false];
    constructor(options?: {
        onSystemHide?: (() => void) | null | undefined;
    });
}
export declare namespace _SystemContextMenuControllerFactory {
    function implement(args: [options?: {
        onSystemHide?: (() => void) | null | undefined;
    }], implementation: {}): SystemContextMenuController;
}
declare const _SystemContextMenuControllerBinding: typeof _SystemContextMenuControllerFactory & (new (options?: {
    onSystemHide?: (() => void) | null | undefined;
}) => _SystemContextMenuControllerNative);
export declare const SystemContextMenuController: typeof _SystemContextMenuControllerBinding & _FlaxInstanceType<SystemContextMenuController> & _FlaxDartType<SystemContextMenuController, readonly ["class", "flax.core/sdk_services#type:SystemContextMenuController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "onSystemHide" | "handleSystemHide" | "handleCustomContextMenuAction" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "show" | "showWithItems" | "hide" | "dispose" | "__flaxBound:package:flutter/src/services/text_input.dart::SystemContextMenuController" | "__flaxBound:package:flutter/src/services/binding.dart::SystemContextMenuClient" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
