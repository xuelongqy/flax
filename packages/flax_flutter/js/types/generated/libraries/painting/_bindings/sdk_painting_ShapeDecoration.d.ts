import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_DecorationImage';
import '@flax/flutter/painting/_bindings/sdk_painting_DecorationImage';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ShapeDecoration extends Omit<upstream0.Decoration, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Decoration>, Readonly<{
    "__flaxBound:package:flutter/src/painting/shape_decoration.dart::ShapeDecoration": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ShapeDecoration: unique symbol;
    readonly [_flaxDartTypeValue]: ShapeDecoration;
    readonly padding: upstream8.EdgeInsetsGeometry;
    readonly isComplex: boolean;
    readonly color: upstream2.Color | null;
    readonly gradient: upstream4.Gradient | null;
    readonly image: upstream3.DecorationImage | null;
    readonly shadows: DartList<upstream5.BoxShadow> | null;
    readonly shape: upstream6.ShapeBorder;
    toStringShort(): string;
    debugAssertIsValid(): boolean;
    lerpFrom(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): ShapeDecoration | null;
    lerpTo(b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): ShapeDecoration | null;
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
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream15.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream18.DiagnosticLevel | undefined;
    }): string;
}
export declare function _ShapeDecorationFactory(options: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    image?: Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [];
    }> | null | undefined;
    gradient?: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null | undefined;
    shadows?: DartListInput<upstream5.BoxShadow, Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null | undefined;
    shape: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>;
}): ShapeDecoration;
export declare namespace _ShapeDecorationFactory {
    function fromBoxDecoration(source: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): ShapeDecoration;
}
export interface _ShapeDecorationNative extends ShapeDecoration {
    readonly [_flaxDartTypeValue]: _ShapeDecorationNative;
    toStringShort(): string;
    debugAssertIsValid(): boolean;
    lerpFrom(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): ShapeDecoration | null;
    lerpTo(b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): ShapeDecoration | null;
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
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream15.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream18.DiagnosticLevel | undefined;
    }): string;
    get color(): upstream2.Color | null;
    get gradient(): upstream4.Gradient | null;
    get image(): upstream3.DecorationImage | null;
    get shadows(): DartList<upstream5.BoxShadow> | null;
    get shape(): upstream6.ShapeBorder;
    get padding(): upstream8.EdgeInsetsGeometry;
    get isComplex(): boolean;
}
export declare abstract class _ShapeDecorationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShapeDecoration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ShapeDecoration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ShapeDecoration", readonly [], false];
    constructor(options: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        image?: Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [];
        }> | null | undefined;
        gradient?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
        }> | null | undefined;
        shadows?: DartListInput<upstream5.BoxShadow, Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        shape: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>;
    });
}
export declare namespace _ShapeDecorationFactory {
    function implement(args: [options: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        image?: Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [];
        }> | null | undefined;
        gradient?: Readonly<{
            "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
        }> | null | undefined;
        shadows?: DartListInput<upstream5.BoxShadow, Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        shape: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>;
    }], implementation: {}): ShapeDecoration;
}
declare const _ShapeDecorationBinding: typeof _ShapeDecorationFactory & (new (options: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    image?: Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [];
    }> | null | undefined;
    gradient?: Readonly<{
        "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [];
    }> | null | undefined;
    shadows?: DartListInput<upstream5.BoxShadow, Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null | undefined;
    shape: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>;
}) => _ShapeDecorationNative);
export declare namespace _ShapeDecorationFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/shape_decoration.dart::ShapeDecoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/shape_decoration.dart::ShapeDecoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): ShapeDecoration | null;
}
export declare const ShapeDecoration: typeof _ShapeDecorationBinding & _FlaxInstanceType<ShapeDecoration> & _FlaxDartType<ShapeDecoration, readonly ["class", "flax.core/sdk_painting#type:ShapeDecoration", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "padding" | "isComplex" | "color" | "gradient" | "image" | "shadows" | "shape" | "toStringShort" | "debugAssertIsValid" | "lerpFrom" | "lerpTo" | "hitTest" | "createBoxPainter" | "getClipPath" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/painting/shape_decoration.dart::ShapeDecoration" | "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
