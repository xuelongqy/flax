import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilter';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_BoxFit';
import '@flax/flutter/painting/_bindings/flutter_BoxFit';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream11 from '@flax/flutter/painting/_bindings/sdk_painting_ImageRepeat';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageRepeat';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Ink extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/ink_decoration.dart::Ink": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Ink: unique symbol;
    readonly [_flaxDartTypeValue]: Ink;
    readonly child: Widget | null;
    readonly padding: upstream2.EdgeInsetsGeometry | null;
    readonly decoration: upstream4.Decoration | null;
    readonly width: number | null;
    readonly height: number | null;
    readonly key: upstream1.Key | null;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createState(): upstream13.State<Ink>;
    createElement(): upstream14.StatefulElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream15.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream17.DiagnosticsTreeStyle | null | undefined;
    }): upstream16.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream16.DiagnosticsNode>;
}
export declare function _InkFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    decoration?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    child?: Widget | null | undefined;
}): Ink;
export declare namespace _InkFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _InkFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _InkFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _InkFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _InkFactory {
    function image(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        image: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
        }>;
        onImageError?: ((exception: {}, stackTrace: upstream6.StackTrace | null) => void) | null | undefined;
        colorFilter?: (Readonly<{
            "__flaxBound:dart:ui::ColorFilter": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::ImageFilter": readonly [];
        }>) | null | undefined;
        fit?: upstream8.BoxFit | null | undefined;
        alignment?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | undefined;
        centerSlice?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
        repeat?: upstream11.ImageRepeat | undefined;
        matchTextDirection?: boolean | undefined;
        width?: number | null | undefined;
        height?: number | null | undefined;
        child?: Widget | null | undefined;
    }): Ink;
    namespace image {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof image>[0]>), "child"> & ({
                "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof image>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children?: (globalThis.NonNullable<globalThis.Parameters<typeof image>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare const Ink: typeof _InkFactory & _FlaxInstanceType<Ink> & _FlaxDartType<Ink, readonly ["class", "flax.material/material#type:Ink", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "padding" | "decoration" | "width" | "height" | "key" | "debugFillProperties" | "createState" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/ink_decoration.dart::Ink" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
