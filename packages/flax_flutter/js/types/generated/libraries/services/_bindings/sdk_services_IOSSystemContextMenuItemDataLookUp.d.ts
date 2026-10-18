import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemDataLookUp extends Omit<upstream0.IOSSystemContextMenuItemData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.IOSSystemContextMenuItemData>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataLookUp": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __IOSSystemContextMenuItemDataLookUp: unique symbol;
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemDataLookUp;
    readonly title: string;
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
}
export declare function _IOSSystemContextMenuItemDataLookUpFactory(options: {
    title: string;
}): IOSSystemContextMenuItemDataLookUp;
export declare const IOSSystemContextMenuItemDataLookUp: typeof _IOSSystemContextMenuItemDataLookUpFactory & _FlaxInstanceType<IOSSystemContextMenuItemDataLookUp> & _FlaxDartType<IOSSystemContextMenuItemDataLookUp, readonly ["class", "flax.core/sdk_services#type:IOSSystemContextMenuItemDataLookUp", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataLookUp" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
