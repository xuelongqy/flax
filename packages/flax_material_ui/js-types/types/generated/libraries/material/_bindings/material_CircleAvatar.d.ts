import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
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
export interface CircleAvatar extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/circle_avatar.dart::CircleAvatar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CircleAvatar: unique symbol;
    readonly [_flaxDartTypeValue]: CircleAvatar;
    readonly child: Widget | null;
    readonly backgroundColor: upstream2.Color | null;
    readonly foregroundColor: upstream2.Color | null;
    readonly backgroundImage: upstream3.ImageProvider<any> | null;
    readonly foregroundImage: upstream3.ImageProvider<any> | null;
    readonly onBackgroundImageError: ((exception: {}, stackTrace: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null) => void) | null;
    readonly onForegroundImageError: ((exception: {}, stackTrace: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null) => void) | null;
    readonly radius: number | null;
    readonly minRadius: number | null;
    readonly maxRadius: number | null;
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
export declare function _CircleAvatarFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child?: Widget | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    backgroundImage?: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
    }> | null | undefined;
    foregroundImage?: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
    }> | null | undefined;
    onBackgroundImageError?: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void) | null | undefined;
    onForegroundImageError?: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void) | null | undefined;
    foregroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    radius?: number | null | undefined;
    minRadius?: number | null | undefined;
    maxRadius?: number | null | undefined;
}): CircleAvatar;
export declare namespace _CircleAvatarFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CircleAvatarFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _CircleAvatarFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _CircleAvatarFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const CircleAvatar: typeof _CircleAvatarFactory & _FlaxInstanceType<CircleAvatar> & _FlaxDartType<CircleAvatar, readonly ["class", "flax.material/material#type:CircleAvatar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "backgroundColor" | "foregroundColor" | "backgroundImage" | "foregroundImage" | "onBackgroundImageError" | "onForegroundImageError" | "radius" | "minRadius" | "maxRadius" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/circle_avatar.dart::CircleAvatar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
