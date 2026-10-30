import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PreferredSize extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSize": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [];
}>, Omit<upstream1.PreferredSizeWidget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget | keyof Widget> {
    readonly __PreferredSize: unique symbol;
    readonly [_flaxDartTypeValue]: PreferredSize;
    readonly preferredSize: upstream3.Size;
    readonly child: Widget;
    readonly key: upstream2.Key | null;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream5.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    build(context: upstream8.BuildContext): Widget;
    createElement(): upstream9.StatelessElement;
}
export declare function _PreferredSizeFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    preferredSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    child: Widget;
}): PreferredSize;
export declare namespace _PreferredSizeFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _PreferredSizeFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _PreferredSizeFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _PreferredSizeFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const PreferredSize: typeof _PreferredSizeFactory & _FlaxInstanceType<PreferredSize> & _FlaxDartType<PreferredSize, readonly ["class", "flax.core/flutter#type:PreferredSize", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "preferredSize" | "child" | "key" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "build" | "createElement" | "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSize" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget";
export {};
