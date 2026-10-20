import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BoxBorder';
import '@flax/flutter/painting/_bindings/flutter_BoxBorder';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StepStyle extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/stepper.dart::StepStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __StepStyle: unique symbol;
    readonly [_flaxDartTypeValue]: StepStyle;
    readonly color: upstream1.Color | null;
    readonly errorColor: upstream1.Color | null;
    readonly connectorColor: upstream1.Color | null;
    readonly connectorThickness: number | null;
    readonly border: upstream2.BoxBorder | null;
    readonly boxShadow: upstream3.BoxShadow | null;
    readonly gradient: upstream4.Gradient | null;
    readonly indexStyle: upstream5.TextStyle | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        border?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        boxShadow?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>) | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        connectorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        connectorThickness?: number | null | undefined;
        errorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        gradient?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
        }> | null | undefined;
        indexStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): StepStyle;
    merge(stepStyle: (Readonly<{
        "__flaxBound:package:flutter/src/material/stepper.dart::StepStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): StepStyle;
}
export declare function _StepStyleFactory(options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    errorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    connectorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    connectorThickness?: number | null | undefined;
    border?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    boxShadow?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>) | null | undefined;
    gradient?: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null | undefined;
    indexStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): StepStyle;
export interface _StepStyleNative extends StepStyle {
    readonly [_flaxDartTypeValue]: _StepStyleNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        errorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        connectorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        connectorThickness?: number | null | undefined;
        border?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        boxShadow?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>) | null | undefined;
        gradient?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
        }> | null | undefined;
        indexStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): StepStyle;
    merge(stepStyle: (Readonly<{
        "__flaxBound:package:flutter/src/material/stepper.dart::StepStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): StepStyle;
    get color(): upstream1.Color | null;
    get errorColor(): upstream1.Color | null;
    get connectorColor(): upstream1.Color | null;
    get connectorThickness(): number | null;
    get border(): upstream2.BoxBorder | null;
    get boxShadow(): upstream3.BoxShadow | null;
    get gradient(): upstream4.Gradient | null;
    get indexStyle(): upstream5.TextStyle | null;
}
export declare abstract class _StepStyleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StepStyle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StepStyle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:StepStyle", readonly [], false];
    constructor(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        errorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        connectorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        connectorThickness?: number | null | undefined;
        border?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        boxShadow?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>) | null | undefined;
        gradient?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
        }> | null | undefined;
        indexStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _StepStyleFactory {
    function implement(args: [options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        errorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        connectorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        connectorThickness?: number | null | undefined;
        border?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        boxShadow?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>) | null | undefined;
        gradient?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
        }> | null | undefined;
        indexStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): StepStyle;
}
declare const _StepStyleBinding: typeof _StepStyleFactory & (new (options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    errorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    connectorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    connectorThickness?: number | null | undefined;
    border?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    boxShadow?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>) | null | undefined;
    gradient?: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null | undefined;
    indexStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}) => _StepStyleNative);
export declare const StepStyle: typeof _StepStyleBinding & _FlaxInstanceType<StepStyle> & _FlaxDartType<StepStyle, readonly ["class", "flax.core/sdk_material#type:StepStyle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "errorColor" | "connectorColor" | "connectorThickness" | "border" | "boxShadow" | "gradient" | "indexStyle" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "merge" | "__flaxBound:package:flutter/src/material/stepper.dart::StepStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
