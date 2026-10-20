import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_TooltipTriggerMode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TooltipTriggerMode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TooltipThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/tooltip_theme.dart::TooltipThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TooltipThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: TooltipThemeData;
    readonly height: number | null;
    readonly constraints: upstream1.BoxConstraints | null;
    readonly padding: upstream2.EdgeInsetsGeometry | null;
    readonly margin: upstream2.EdgeInsetsGeometry | null;
    readonly verticalOffset: number | null;
    readonly preferBelow: boolean | null;
    readonly excludeFromSemantics: boolean | null;
    readonly decoration: upstream3.Decoration | null;
    readonly textStyle: upstream4.TextStyle | null;
    readonly textAlign: upstream5.TextAlign | null;
    readonly waitDuration: upstream6.Duration | null;
    readonly showDuration: upstream6.Duration | null;
    readonly exitDuration: upstream6.Duration | null;
    readonly triggerMode: upstream7.TooltipTriggerMode | null;
    readonly enableFeedback: boolean | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        decoration?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        enableFeedback?: boolean | null | undefined;
        excludeFromSemantics?: boolean | null | undefined;
        exitDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        height?: number | null | undefined;
        margin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        preferBelow?: boolean | null | undefined;
        showDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        textAlign?: upstream5.TextAlign | null | undefined;
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        triggerMode?: upstream7.TooltipTriggerMode | null | undefined;
        verticalOffset?: number | null | undefined;
        waitDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
    }): TooltipThemeData;
}
export declare function _TooltipThemeDataFactory(options?: {
    height?: number | null | undefined;
    constraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    margin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    verticalOffset?: number | null | undefined;
    preferBelow?: boolean | null | undefined;
    excludeFromSemantics?: boolean | null | undefined;
    decoration?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textAlign?: upstream5.TextAlign | null | undefined;
    waitDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | null | undefined;
    showDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | null | undefined;
    exitDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | null | undefined;
    triggerMode?: upstream7.TooltipTriggerMode | null | undefined;
    enableFeedback?: boolean | null | undefined;
}): TooltipThemeData;
export interface _TooltipThemeDataNative extends TooltipThemeData {
    readonly [_flaxDartTypeValue]: _TooltipThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        height?: number | null | undefined;
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        margin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        verticalOffset?: number | null | undefined;
        preferBelow?: boolean | null | undefined;
        excludeFromSemantics?: boolean | null | undefined;
        decoration?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textAlign?: upstream5.TextAlign | null | undefined;
        waitDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        showDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        exitDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        triggerMode?: upstream7.TooltipTriggerMode | null | undefined;
        enableFeedback?: boolean | null | undefined;
    }): TooltipThemeData;
    get height(): number | null;
    get constraints(): upstream1.BoxConstraints | null;
    get padding(): upstream2.EdgeInsetsGeometry | null;
    get margin(): upstream2.EdgeInsetsGeometry | null;
    get verticalOffset(): number | null;
    get preferBelow(): boolean | null;
    get excludeFromSemantics(): boolean | null;
    get decoration(): upstream3.Decoration | null;
    get textStyle(): upstream4.TextStyle | null;
    get textAlign(): upstream5.TextAlign | null;
    get waitDuration(): upstream6.Duration | null;
    get showDuration(): upstream6.Duration | null;
    get exitDuration(): upstream6.Duration | null;
    get triggerMode(): upstream7.TooltipTriggerMode | null;
    get enableFeedback(): boolean | null;
}
export declare abstract class _TooltipThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TooltipThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TooltipThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:TooltipThemeData", readonly [], false];
    constructor(options?: {
        height?: number | null | undefined;
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        margin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        verticalOffset?: number | null | undefined;
        preferBelow?: boolean | null | undefined;
        excludeFromSemantics?: boolean | null | undefined;
        decoration?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textAlign?: upstream5.TextAlign | null | undefined;
        waitDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        showDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        exitDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        triggerMode?: upstream7.TooltipTriggerMode | null | undefined;
        enableFeedback?: boolean | null | undefined;
    });
}
export declare namespace _TooltipThemeDataFactory {
    function implement(args: [options?: {
        height?: number | null | undefined;
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        margin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        verticalOffset?: number | null | undefined;
        preferBelow?: boolean | null | undefined;
        excludeFromSemantics?: boolean | null | undefined;
        decoration?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textAlign?: upstream5.TextAlign | null | undefined;
        waitDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        showDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        exitDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
        }>) | null | undefined;
        triggerMode?: upstream7.TooltipTriggerMode | null | undefined;
        enableFeedback?: boolean | null | undefined;
    }], implementation: {}): TooltipThemeData;
}
declare const _TooltipThemeDataBinding: typeof _TooltipThemeDataFactory & (new (options?: {
    height?: number | null | undefined;
    constraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    margin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    verticalOffset?: number | null | undefined;
    preferBelow?: boolean | null | undefined;
    excludeFromSemantics?: boolean | null | undefined;
    decoration?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textAlign?: upstream5.TextAlign | null | undefined;
    waitDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | null | undefined;
    showDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | null | undefined;
    exitDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | null | undefined;
    triggerMode?: upstream7.TooltipTriggerMode | null | undefined;
    enableFeedback?: boolean | null | undefined;
}) => _TooltipThemeDataNative);
export declare namespace _TooltipThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/material/tooltip_theme.dart::TooltipThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/material/tooltip_theme.dart::TooltipThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): TooltipThemeData | null;
}
export declare const TooltipThemeData: typeof _TooltipThemeDataBinding & _FlaxInstanceType<TooltipThemeData> & _FlaxDartType<TooltipThemeData, readonly ["class", "flax.core/sdk_material#type:TooltipThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "height" | "constraints" | "padding" | "margin" | "verticalOffset" | "preferBelow" | "excludeFromSemantics" | "decoration" | "textStyle" | "textAlign" | "waitDuration" | "showDuration" | "exitDuration" | "triggerMode" | "enableFeedback" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/tooltip_theme.dart::TooltipThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
