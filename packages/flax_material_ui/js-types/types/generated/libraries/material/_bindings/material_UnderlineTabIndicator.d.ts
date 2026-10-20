import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UnderlineTabIndicator extends Omit<upstream0.Decoration, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Decoration>, Readonly<{
    "__flaxBound:package:material_ui/src/tab_indicator.dart::UnderlineTabIndicator": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __UnderlineTabIndicator: unique symbol;
    readonly [_flaxDartTypeValue]: UnderlineTabIndicator;
    readonly padding: upstream4.EdgeInsetsGeometry;
    readonly isComplex: boolean;
    readonly borderRadius: upstream2.BorderRadius | null;
    readonly borderSide: upstream3.BorderSide;
    readonly insets: upstream4.EdgeInsetsGeometry;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    debugAssertIsValid(): boolean;
    lerpFrom(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): upstream0.Decoration | null;
    lerpTo(b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): upstream0.Decoration | null;
    hitTest(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        textDirection?: upstream11.TextDirection | null | undefined;
    }): boolean;
    createBoxPainter(onChanged?: (() => void) | null): upstream12.BoxPainter;
    getClipPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, textDirection: upstream11.TextDirection): upstream13.Path;
}
export declare function _UnderlineTabIndicatorFactory(options?: {
    borderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
    borderSide?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | undefined;
    insets?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | undefined;
}): UnderlineTabIndicator;
export interface _UnderlineTabIndicatorNative extends UnderlineTabIndicator {
    readonly [_flaxDartTypeValue]: _UnderlineTabIndicatorNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    debugAssertIsValid(): boolean;
    lerpFrom(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): upstream0.Decoration | null;
    lerpTo(b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): upstream0.Decoration | null;
    hitTest(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        textDirection?: upstream11.TextDirection | null | undefined;
    }): boolean;
    createBoxPainter(onChanged?: (() => void) | null): upstream12.BoxPainter;
    getClipPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, textDirection: upstream11.TextDirection): upstream13.Path;
    get borderRadius(): upstream2.BorderRadius | null;
    get borderSide(): upstream3.BorderSide;
    get insets(): upstream4.EdgeInsetsGeometry;
    get padding(): upstream4.EdgeInsetsGeometry;
    get isComplex(): boolean;
}
export declare abstract class _UnderlineTabIndicatorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UnderlineTabIndicator>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: UnderlineTabIndicator;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:UnderlineTabIndicator", readonly [], false];
    constructor(options?: {
        borderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
        borderSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        insets?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | undefined;
    });
}
export declare namespace _UnderlineTabIndicatorFactory {
    function implement(args: [options?: {
        borderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
        borderSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        insets?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | undefined;
    }], implementation: {}): UnderlineTabIndicator;
}
declare const _UnderlineTabIndicatorBinding: typeof _UnderlineTabIndicatorFactory & (new (options?: {
    borderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
    borderSide?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | undefined;
    insets?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | undefined;
}) => _UnderlineTabIndicatorNative);
export declare const UnderlineTabIndicator: typeof _UnderlineTabIndicatorBinding & _FlaxInstanceType<UnderlineTabIndicator> & _FlaxDartType<UnderlineTabIndicator, readonly ["class", "flax.material/material#type:UnderlineTabIndicator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "padding" | "isComplex" | "borderRadius" | "borderSide" | "insets" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "debugAssertIsValid" | "lerpFrom" | "lerpTo" | "hitTest" | "createBoxPainter" | "getClipPath" | "__flaxBound:package:material_ui/src/tab_indicator.dart::UnderlineTabIndicator" | "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
