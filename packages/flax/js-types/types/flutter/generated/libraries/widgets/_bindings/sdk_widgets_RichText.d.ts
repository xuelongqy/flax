import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_TextOverflow';
import '@flax/flutter/painting/_bindings/flutter_TextOverflow';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import type * as upstream10 from '@flax/flutter/painting/_bindings/sdk_painting_TextWidthBasis';
import '@flax/flutter/painting/_bindings/sdk_painting_TextWidthBasis';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream14 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderParagraph';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderParagraph';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectElement';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream22 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream23 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextParentData';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RichText extends _FlaxDartWidget, Omit<upstream0.MultiChildRenderObjectWidget, _flaxOwnMembers0>, Omit<upstream1.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream0.MultiChildRenderObjectWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.MultiChildRenderObjectWidget | keyof upstream1.RenderObjectWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::RichText": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RichText: unique symbol;
    readonly [_flaxDartTypeValue]: RichText;
    readonly text: upstream3.InlineSpan;
    readonly textAlign: upstream4.TextAlign;
    readonly textDirection: upstream5.TextDirection | null;
    readonly softWrap: boolean;
    readonly overflow: upstream6.TextOverflow;
    readonly textScaleFactor: number;
    readonly textScaler: upstream7.TextScaler;
    readonly maxLines: number | null;
    readonly locale: upstream8.Locale | null;
    readonly strutStyle: upstream9.StrutStyle | null;
    readonly textWidthBasis: upstream10.TextWidthBasis;
    readonly textHeightBehavior: upstream11.TextHeightBehavior | null;
    readonly selectionRegistrar: upstream12.SelectionRegistrar | null;
    readonly selectionColor: upstream13.Color | null;
    readonly children: DartList<Widget>;
    readonly key: upstream2.Key | null;
    createRenderObject(context: upstream15.BuildContext): upstream14.RenderParagraph;
    updateRenderObject(context: upstream15.BuildContext, renderObject: Readonly<{
        "__flaxBound:package:flutter/src/rendering/paragraph.dart::RenderParagraph": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::ContainerRenderObjectMixin": readonly [upstream22.RenderBox, upstream23.TextParentData];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/paragraph.dart::RenderInlineChildrenContainerDefaults": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RelayoutWhenSystemFontsChangeMixin": readonly [];
    }>): void;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream17.MultiChildRenderObjectElement;
    didUnmountRenderObject(renderObject: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream19.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream21.DiagnosticsTreeStyle | null | undefined;
    }): upstream20.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream20.DiagnosticsNode>;
}
export declare function _RichTextFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    text: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    textAlign?: upstream4.TextAlign | undefined;
    textDirection?: upstream5.TextDirection | null | undefined;
    softWrap?: boolean | undefined;
    overflow?: upstream6.TextOverflow | undefined;
    textScaleFactor?: number | undefined;
    textScaler?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
    }> | undefined;
    maxLines?: number | null | undefined;
    locale?: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null | undefined;
    strutStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textWidthBasis?: upstream10.TextWidthBasis | undefined;
    textHeightBehavior?: Readonly<{
        "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
    }> | null | undefined;
    selectionRegistrar?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [];
    }> | null | undefined;
    selectionColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}): RichText;
export declare namespace _RichTextFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _RichTextFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare const RichText: typeof _RichTextFactory & _FlaxInstanceType<RichText> & _FlaxDartType<RichText, readonly ["class", "flax.core/sdk_widgets#type:RichText", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "text" | "textAlign" | "textDirection" | "softWrap" | "overflow" | "textScaleFactor" | "textScaler" | "maxLines" | "locale" | "strutStyle" | "textWidthBasis" | "textHeightBehavior" | "selectionRegistrar" | "selectionColor" | "children" | "key" | "createRenderObject" | "updateRenderObject" | "debugFillProperties" | "createElement" | "didUnmountRenderObject" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/basic.dart::RichText" | "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
