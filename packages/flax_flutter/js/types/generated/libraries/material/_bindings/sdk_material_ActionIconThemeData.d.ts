import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ActionIconThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/action_icons_theme.dart::ActionIconThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ActionIconThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: ActionIconThemeData;
}
export interface ActionIconThemeData {
    readonly [_flaxDartTypeValue]: ActionIconThemeData;
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
    copyWith(options?: {
        backButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
        closeButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
        drawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
        endDrawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
    }): ActionIconThemeData;
    get backButtonIconBuilder(): ((context: upstream1.BuildContext) => Widget) | null;
    get closeButtonIconBuilder(): ((context: upstream1.BuildContext) => Widget) | null;
    get drawerButtonIconBuilder(): ((context: upstream1.BuildContext) => Widget) | null;
    get endDrawerButtonIconBuilder(): ((context: upstream1.BuildContext) => Widget) | null;
}
export declare abstract class ActionIconThemeData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ActionIconThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ActionIconThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ActionIconThemeData", readonly [], false];
    constructor(options?: {
        backButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
        closeButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
        drawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
        endDrawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
    });
}
export declare namespace ActionIconThemeData {
    function implement(args: [options?: {
        backButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
        closeButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
        drawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
        endDrawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined;
    }], implementation: {}): ActionIconThemeData;
}
export declare namespace ActionIconThemeData {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/material/action_icons_theme.dart::ActionIconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/material/action_icons_theme.dart::ActionIconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): ActionIconThemeData | null;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "backButtonIconBuilder" | "closeButtonIconBuilder" | "drawerButtonIconBuilder" | "endDrawerButtonIconBuilder" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/action_icons_theme.dart::ActionIconThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
