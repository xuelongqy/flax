import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemCustom extends Omit<upstream0.IOSSystemContextMenuItem, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.IOSSystemContextMenuItem>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemCustom": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __IOSSystemContextMenuItemCustom: unique symbol;
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemCustom;
}
export interface IOSSystemContextMenuItemCustom {
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemCustom;
    getData(localizations: Readonly<{
        "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [];
    }>): upstream2.IOSSystemContextMenuItemData;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    get title(): string;
    get onPressed(): (() => void);
}
export declare abstract class IOSSystemContextMenuItemCustom extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IOSSystemContextMenuItemCustom>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: IOSSystemContextMenuItemCustom;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemCustom", readonly [], false];
    constructor(options: {
        title: string;
        onPressed: (() => void);
    });
}
export declare namespace IOSSystemContextMenuItemCustom {
    function implement(args: [options: {
        title: string;
        onPressed: (() => void);
    }], implementation: {}): IOSSystemContextMenuItemCustom;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "onPressed" | "getData" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemCustom" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
