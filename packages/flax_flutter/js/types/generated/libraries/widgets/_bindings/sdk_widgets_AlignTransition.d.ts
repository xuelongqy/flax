import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AlignTransition extends _FlaxDartWidget, Omit<upstream0.AnimatedWidget, _flaxOwnMembers0>, Omit<upstream1.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.AnimatedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.AnimatedWidget | keyof upstream1.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/transitions.dart::AlignTransition": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/transitions.dart::AnimatedWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __AlignTransition: unique symbol;
    readonly [_flaxDartTypeValue]: AlignTransition;
    readonly alignment: upstream3.Animation<upstream4.AlignmentGeometry>;
    readonly widthFactor: number | null;
    readonly heightFactor: number | null;
    readonly child: Widget;
    readonly listenable: upstream5.Listenable;
    readonly key: upstream2.Key | null;
    build(context: upstream6.BuildContext): Widget;
    createState(): upstream7.State<upstream0.AnimatedWidget>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream9.StatefulElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream12.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
export declare function _AlignTransitionFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    alignment: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [upstream4.AlignmentGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.AlignmentGeometry];
    }>;
    child: Widget;
    widthFactor?: number | null | undefined;
    heightFactor?: number | null | undefined;
}): AlignTransition;
export declare namespace _AlignTransitionFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _AlignTransitionFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _AlignTransitionFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _AlignTransitionFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const AlignTransition: typeof _AlignTransitionFactory & _FlaxInstanceType<AlignTransition> & _FlaxDartType<AlignTransition, readonly ["class", "flax.core/sdk_widgets#type:AlignTransition", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "alignment" | "widthFactor" | "heightFactor" | "child" | "listenable" | "key" | "build" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/transitions.dart::AlignTransition" | "__flaxBound:package:flutter/src/widgets/transitions.dart::AnimatedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
