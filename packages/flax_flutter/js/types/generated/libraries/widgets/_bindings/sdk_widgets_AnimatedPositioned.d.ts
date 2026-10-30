import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ImplicitlyAnimatedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ImplicitlyAnimatedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedWidgetBaseState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedWidgetBaseState';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AnimatedPositioned extends _FlaxDartWidget, Omit<upstream0.ImplicitlyAnimatedWidget, _flaxOwnMembers0>, Omit<upstream1.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.ImplicitlyAnimatedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ImplicitlyAnimatedWidget | keyof upstream1.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::AnimatedPositioned": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::ImplicitlyAnimatedWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __AnimatedPositioned: unique symbol;
    readonly [_flaxDartTypeValue]: AnimatedPositioned;
    readonly child: Widget;
    readonly left: number | null;
    readonly top: number | null;
    readonly right: number | null;
    readonly bottom: number | null;
    readonly width: number | null;
    readonly height: number | null;
    readonly curve: upstream3.Curve;
    readonly duration: upstream4.Duration;
    readonly onEnd: (() => void) | null;
    readonly key: upstream2.Key | null;
    createState(): upstream6.AnimatedWidgetBaseState<AnimatedPositioned>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream8.StatefulElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
export declare function _AnimatedPositionedFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Widget;
    left?: number | null | undefined;
    top?: number | null | undefined;
    right?: number | null | undefined;
    bottom?: number | null | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    curve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
    duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration];
    }>;
    onEnd?: (() => void) | null | undefined;
}): AnimatedPositioned;
export declare namespace _AnimatedPositionedFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _AnimatedPositionedFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _AnimatedPositionedFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _AnimatedPositionedFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _AnimatedPositionedFactory {
    function fromRect(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child: Widget;
        rect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration];
        }>;
        onEnd?: (() => void) | null | undefined;
    }): AnimatedPositioned;
    namespace fromRect {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof fromRect>[0]>), "child"> & ({
                "child": (globalThis.NonNullable<globalThis.Parameters<typeof fromRect>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children: (globalThis.NonNullable<globalThis.Parameters<typeof fromRect>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare const AnimatedPositioned: typeof _AnimatedPositionedFactory & _FlaxInstanceType<AnimatedPositioned> & _FlaxDartType<AnimatedPositioned, readonly ["class", "flax.core/sdk_widgets#type:AnimatedPositioned", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "left" | "top" | "right" | "bottom" | "width" | "height" | "curve" | "duration" | "onEnd" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::AnimatedPositioned" | "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::ImplicitlyAnimatedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
