import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconData';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_FontWeight';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Icon extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/icon.dart::Icon": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Icon: unique symbol;
    readonly [_flaxDartTypeValue]: Icon;
    readonly icon: upstream1.IconData | null;
    readonly size: number | null;
    readonly fill: number | null;
    readonly weight: number | null;
    readonly grade: number | null;
    readonly opticalSize: number | null;
    readonly color: upstream3.Color | null;
    readonly shadows: DartList<upstream4.Shadow> | null;
    readonly semanticLabel: string | null;
    readonly textDirection: upstream5.TextDirection | null;
    readonly applyTextScaling: boolean | null;
    readonly blendMode: upstream6.BlendMode | null;
    readonly fontWeight: upstream7.FontWeight | null;
    readonly key: upstream2.Key | null;
    build(context: upstream8.BuildContext): Widget;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream10.StatelessElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
export declare function _IconFactory(icon: Readonly<{
    "__flaxBound:package:flutter/src/widgets/icon_data.dart::IconData": readonly [];
}> | null, options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    size?: number | null | undefined;
    fill?: number | null | undefined;
    weight?: number | null | undefined;
    grade?: number | null | undefined;
    opticalSize?: number | null | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    shadows?: DartListInput<upstream4.Shadow, Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null | undefined;
    semanticLabel?: string | null | undefined;
    textDirection?: upstream5.TextDirection | null | undefined;
    applyTextScaling?: boolean | null | undefined;
    blendMode?: upstream6.BlendMode | null | undefined;
    fontWeight?: Readonly<{
        "__flaxBound:dart:ui::FontWeight": readonly [];
    }> | null | undefined;
}): Icon;
export declare namespace _IconFactory {
    const __flaxJsx: {
        readonly props: ({
            "icon": globalThis.Parameters<typeof _IconFactory>[0];
        } & globalThis.NonNullable<globalThis.Parameters<typeof _IconFactory>[1]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare const Icon: typeof _IconFactory & _FlaxInstanceType<Icon> & _FlaxDartType<Icon, readonly ["class", "flax.core/sdk_widgets#type:Icon", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "icon" | "size" | "fill" | "weight" | "grade" | "opticalSize" | "color" | "shadows" | "semanticLabel" | "textDirection" | "applyTextScaling" | "blendMode" | "fontWeight" | "key" | "build" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/icon.dart::Icon" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
