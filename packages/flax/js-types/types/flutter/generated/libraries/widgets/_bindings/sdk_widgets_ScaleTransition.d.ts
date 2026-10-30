import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_MatrixTransition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MatrixTransition';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_Alignment';
import '@flax/flutter/painting/_bindings/flutter_Alignment';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScaleTransition extends _FlaxDartWidget, Omit<upstream0.MatrixTransition, _flaxOwnMembers0>, Omit<upstream1.AnimatedWidget, _flaxOwnMembers0 | keyof upstream0.MatrixTransition>, Omit<upstream2.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.MatrixTransition | keyof upstream1.AnimatedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.MatrixTransition | keyof upstream1.AnimatedWidget | keyof upstream2.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/transitions.dart::ScaleTransition": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/transitions.dart::MatrixTransition": readonly [];
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
    readonly __ScaleTransition: unique symbol;
    readonly [_flaxDartTypeValue]: ScaleTransition;
    readonly scale: upstream4.Animation<number>;
    readonly onTransform: ((animationValue: number) => upstream7.Matrix4);
    readonly animation: upstream4.Animation<number>;
    readonly alignment: upstream5.Alignment;
    readonly filterQuality: upstream6.FilterQuality | null;
    readonly child: Widget | null;
    readonly listenable: upstream8.Listenable;
    readonly key: upstream3.Key | null;
    build(context: upstream9.BuildContext): Widget;
    createState(): upstream10.State<upstream1.AnimatedWidget>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream12.StatefulElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
export declare function _ScaleTransitionFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    scale: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>;
    alignment?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>) | undefined;
    filterQuality?: upstream6.FilterQuality | null | undefined;
    child?: Widget | null | undefined;
}): ScaleTransition;
export declare namespace _ScaleTransitionFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ScaleTransitionFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _ScaleTransitionFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _ScaleTransitionFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const ScaleTransition: typeof _ScaleTransitionFactory & _FlaxInstanceType<ScaleTransition> & _FlaxDartType<ScaleTransition, readonly ["class", "flax.core/sdk_widgets#type:ScaleTransition", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "scale" | "onTransform" | "animation" | "alignment" | "filterQuality" | "child" | "listenable" | "key" | "build" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/transitions.dart::ScaleTransition" | "__flaxBound:package:flutter/src/widgets/transitions.dart::MatrixTransition" | "__flaxBound:package:flutter/src/widgets/transitions.dart::AnimatedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
