import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CupertinoIconThemeData extends Omit<upstream0.IconThemeData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.IconThemeData>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/icon_theme_data.dart::CupertinoIconThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoIconThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoIconThemeData;
}
export interface CupertinoIconThemeData {
    readonly [_flaxDartTypeValue]: CupertinoIconThemeData;
    copyWith(options?: {
        size?: number | null | undefined;
        fill?: number | null | undefined;
        weight?: number | null | undefined;
        grade?: number | null | undefined;
        opticalSize?: number | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        opacity?: number | null | undefined;
        shadows?: DartListInput<upstream3.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        applyTextScaling?: boolean | null | undefined;
    }): CupertinoIconThemeData;
    merge(other: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): upstream0.IconThemeData;
    resolve(context: upstream4.BuildContext): upstream0.IconThemeData;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    get isConcrete(): boolean;
    get size(): number | null;
    get fill(): number | null;
    get weight(): number | null;
    get grade(): number | null;
    get opticalSize(): number | null;
    get color(): upstream2.Color | null;
    get opacity(): number | null;
    get shadows(): DartList<upstream3.Shadow> | null;
    get applyTextScaling(): boolean | null;
}
export declare abstract class CupertinoIconThemeData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoIconThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CupertinoIconThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoIconThemeData", readonly [], false];
    constructor(options?: {
        size?: number | null | undefined;
        fill?: number | null | undefined;
        weight?: number | null | undefined;
        grade?: number | null | undefined;
        opticalSize?: number | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        opacity?: number | null | undefined;
        shadows?: DartListInput<upstream3.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        applyTextScaling?: boolean | null | undefined;
    });
}
export declare namespace CupertinoIconThemeData {
    function implement(args: [options?: {
        size?: number | null | undefined;
        fill?: number | null | undefined;
        weight?: number | null | undefined;
        grade?: number | null | undefined;
        opticalSize?: number | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        opacity?: number | null | undefined;
        shadows?: DartListInput<upstream3.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        applyTextScaling?: boolean | null | undefined;
    }], implementation: {}): CupertinoIconThemeData;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isConcrete" | "size" | "fill" | "weight" | "grade" | "opticalSize" | "color" | "opacity" | "shadows" | "applyTextScaling" | "copyWith" | "merge" | "resolve" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/cupertino/icon_theme_data.dart::CupertinoIconThemeData" | "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
