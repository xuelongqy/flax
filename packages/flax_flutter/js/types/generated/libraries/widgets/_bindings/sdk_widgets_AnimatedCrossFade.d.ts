import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_CrossFadeState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_CrossFadeState';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
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
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AnimatedCrossFade extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/animated_cross_fade.dart::AnimatedCrossFade": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __AnimatedCrossFade: unique symbol;
    readonly [_flaxDartTypeValue]: AnimatedCrossFade;
    readonly firstChild: Widget;
    readonly secondChild: Widget;
    readonly crossFadeState: upstream4.CrossFadeState;
    readonly duration: upstream5.Duration;
    readonly reverseDuration: upstream5.Duration | null;
    readonly firstCurve: upstream2.Curve;
    readonly secondCurve: upstream2.Curve;
    readonly sizeCurve: upstream2.Curve;
    readonly alignment: upstream3.AlignmentGeometry;
    readonly layoutBuilder: ((topChild: Widget, topChildKey: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>, bottomChild: Widget, bottomChildKey: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) => Widget);
    readonly excludeBottomFocus: boolean;
    readonly clipBehavior: upstream6.Clip;
    readonly onEnd: (() => void) | null;
    readonly key: upstream1.Key | null;
    createState(): upstream7.State<AnimatedCrossFade>;
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
export declare function _AnimatedCrossFadeFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    firstChild: Widget;
    secondChild: Widget;
    firstCurve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
    secondCurve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
    sizeCurve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
    alignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | undefined;
    crossFadeState: upstream4.CrossFadeState;
    duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
    }>;
    reverseDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
    }>) | null | undefined;
    layoutBuilder?: ((topChild: Widget, topChildKey: upstream1.Key, bottomChild: Widget, bottomChildKey: upstream1.Key) => Widget) | undefined;
    excludeBottomFocus?: boolean | undefined;
    clipBehavior?: upstream6.Clip | undefined;
    onEnd?: (() => void) | null | undefined;
}): AnimatedCrossFade;
export declare namespace _AnimatedCrossFadeFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _AnimatedCrossFadeFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _AnimatedCrossFadeFactory {
    function defaultLayoutBuilder(topChild: Widget, topChildKey: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>, bottomChild: Widget, bottomChildKey: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>): Widget;
}
export declare const AnimatedCrossFade: typeof _AnimatedCrossFadeFactory & _FlaxInstanceType<AnimatedCrossFade> & _FlaxDartType<AnimatedCrossFade, readonly ["class", "flax.core/sdk_widgets#type:AnimatedCrossFade", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "firstChild" | "secondChild" | "crossFadeState" | "duration" | "reverseDuration" | "firstCurve" | "secondCurve" | "sizeCurve" | "alignment" | "layoutBuilder" | "excludeBottomFocus" | "clipBehavior" | "onEnd" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/animated_cross_fade.dart::AnimatedCrossFade" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
