import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MediaQueryData';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DisplayFeatureSubScreen extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/display_feature_sub_screen.dart::DisplayFeatureSubScreen": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DisplayFeatureSubScreen: unique symbol;
    readonly [_flaxDartTypeValue]: DisplayFeatureSubScreen;
    readonly anchorPoint: upstream2.Offset | null;
    readonly child: Widget;
    readonly key: upstream1.Key | null;
    build(context: upstream5.BuildContext): Widget;
    createElement(): upstream6.StatelessElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
export declare function _DisplayFeatureSubScreenFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    anchorPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    child: Widget;
}): DisplayFeatureSubScreen;
export declare namespace _DisplayFeatureSubScreenFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _DisplayFeatureSubScreenFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _DisplayFeatureSubScreenFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _DisplayFeatureSubScreenFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _DisplayFeatureSubScreenFactory {
    function avoidBounds(mediaQuery: Readonly<{
        "__flaxBound:package:flutter/src/widgets/media_query.dart::MediaQueryData": readonly [];
    }>): DartIterable<upstream3.Rect>;
}
export declare namespace _DisplayFeatureSubScreenFactory {
    function subScreensInBounds(wantedBounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, avoidBounds: DartIterableInput<upstream3.Rect, Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>>): DartIterable<upstream3.Rect>;
}
export declare const DisplayFeatureSubScreen: typeof _DisplayFeatureSubScreenFactory & _FlaxInstanceType<DisplayFeatureSubScreen> & _FlaxDartType<DisplayFeatureSubScreen, readonly ["class", "flax.core/sdk_widgets#type:DisplayFeatureSubScreen", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "anchorPoint" | "child" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/display_feature_sub_screen.dart::DisplayFeatureSubScreen" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
