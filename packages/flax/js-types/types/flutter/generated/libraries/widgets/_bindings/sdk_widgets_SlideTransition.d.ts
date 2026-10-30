import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SlideTransition extends _FlaxDartWidget, Omit<upstream0.AnimatedWidget, _flaxOwnMembers0>, Omit<upstream1.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.AnimatedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.AnimatedWidget | keyof upstream1.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/transitions.dart::SlideTransition": readonly [];
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
    readonly __SlideTransition: unique symbol;
    readonly [_flaxDartTypeValue]: SlideTransition;
    readonly position: upstream3.Animation<upstream4.Offset>;
    readonly textDirection: upstream5.TextDirection | null;
    readonly transformHitTests: boolean;
    readonly child: Widget | null;
    readonly listenable: upstream6.Listenable;
    readonly key: upstream2.Key | null;
    build(context: upstream7.BuildContext): Widget;
    createState(): upstream8.State<upstream0.AnimatedWidget>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream10.StatefulElement;
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
export declare function _SlideTransitionFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    position: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [upstream4.Offset];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.Offset];
    }>;
    transformHitTests?: boolean | undefined;
    textDirection?: upstream5.TextDirection | null | undefined;
    child?: Widget | null | undefined;
}): SlideTransition;
export declare namespace _SlideTransitionFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _SlideTransitionFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _SlideTransitionFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _SlideTransitionFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const SlideTransition: typeof _SlideTransitionFactory & _FlaxInstanceType<SlideTransition> & _FlaxDartType<SlideTransition, readonly ["class", "flax.core/sdk_widgets#type:SlideTransition", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "position" | "textDirection" | "transformHitTests" | "child" | "listenable" | "key" | "build" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/transitions.dart::SlideTransition" | "__flaxBound:package:flutter/src/widgets/transitions.dart::AnimatedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
