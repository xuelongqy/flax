import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataSearchWeb';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataSearchWeb';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemSearchWeb extends Omit<upstream0.IOSSystemContextMenuItem, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.IOSSystemContextMenuItem>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemSearchWeb": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __IOSSystemContextMenuItemSearchWeb: unique symbol;
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemSearchWeb;
    readonly title: string | null;
    getData(localizations: Readonly<{
        "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [];
    }>): upstream2.IOSSystemContextMenuItemDataSearchWeb;
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
}
export declare function _IOSSystemContextMenuItemSearchWebFactory(options?: {
    title?: string | null | undefined;
}): IOSSystemContextMenuItemSearchWeb;
export declare const IOSSystemContextMenuItemSearchWeb: typeof _IOSSystemContextMenuItemSearchWebFactory & _FlaxInstanceType<IOSSystemContextMenuItemSearchWeb> & _FlaxDartType<IOSSystemContextMenuItemSearchWeb, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemSearchWeb", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "getData" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemSearchWeb" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
