import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoFocusHalo extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/cupertino_focus_halo.dart::CupertinoFocusHalo": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoFocusHalo: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoFocusHalo;
    readonly child: Widget;
    readonly key: upstream1.Key | null;
    createState(): upstream3.State<CupertinoFocusHalo>;
    createElement(): upstream4.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream7.DiagnosticsNode>;
}
export declare namespace _CupertinoFocusHaloFactory {
    function withRect(options: {
        child: Widget;
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
    }): CupertinoFocusHalo;
    namespace withRect {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof withRect>[0]>), "child"> & ({
                "child": (globalThis.NonNullable<globalThis.Parameters<typeof withRect>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children: (globalThis.NonNullable<globalThis.Parameters<typeof withRect>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare namespace _CupertinoFocusHaloFactory {
    function withRRect(options: {
        child: Widget;
        borderRadius: Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>;
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
    }): CupertinoFocusHalo;
    namespace withRRect {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof withRRect>[0]>), "child"> & ({
                "child": (globalThis.NonNullable<globalThis.Parameters<typeof withRRect>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children: (globalThis.NonNullable<globalThis.Parameters<typeof withRRect>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare namespace _CupertinoFocusHaloFactory {
    function withRoundedSuperellipse(options: {
        child: Widget;
        borderRadius: Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>;
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
    }): CupertinoFocusHalo;
    namespace withRoundedSuperellipse {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof withRoundedSuperellipse>[0]>), "child"> & ({
                "child": (globalThis.NonNullable<globalThis.Parameters<typeof withRoundedSuperellipse>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children: (globalThis.NonNullable<globalThis.Parameters<typeof withRoundedSuperellipse>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare const CupertinoFocusHalo: typeof _CupertinoFocusHaloFactory & _FlaxInstanceType<CupertinoFocusHalo> & _FlaxDartType<CupertinoFocusHalo, readonly ["class", "flax.cupertino/cupertino#type:CupertinoFocusHalo", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/cupertino_focus_halo.dart::CupertinoFocusHalo" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
