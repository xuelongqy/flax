import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput, type DartSetInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RawGestureDetector';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_GestureRecognizerFactory';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GestureRecognizerFactory';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import type * as upstream10 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RawGestureDetectorState extends Omit<upstream0.State<upstream1.RawGestureDetector>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.RawGestureDetector>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::RawGestureDetectorState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.RawGestureDetector];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawGestureDetectorState: unique symbol;
    readonly [_flaxDartTypeValue]: RawGestureDetectorState;
    readonly widget: upstream1.RawGestureDetector;
    readonly context: upstream3.BuildContext;
    readonly mounted: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    initState(): void;
    didUpdateWidget(oldWidget: upstream1.RawGestureDetector): void;
    replaceGestureRecognizers(gestures: DartMapInput<upstream10.Type, upstream8.GestureRecognizerFactory<upstream9.GestureRecognizer>, Readonly<{
        "__flaxBound:dart:core::Type": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::GestureRecognizerFactory": readonly [upstream9.GestureRecognizer];
    }>>): void;
    replaceSemanticsActions(actions: DartSetInput<upstream11.SemanticsAction, Readonly<{
        "__flaxBound:dart:ui::SemanticsAction": readonly [];
    }>>): void;
    dispose(): void;
    build(context: upstream3.BuildContext): Widget;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
    didChangeDependencies(): void;
}
export declare function _RawGestureDetectorStateFactory(): RawGestureDetectorState;
export declare const RawGestureDetectorState: typeof _RawGestureDetectorStateFactory & _FlaxInstanceType<RawGestureDetectorState> & _FlaxDartType<RawGestureDetectorState, readonly ["class", "flax.core/sdk_widgets#type:RawGestureDetectorState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "initState" | "didUpdateWidget" | "replaceGestureRecognizers" | "replaceSemanticsActions" | "dispose" | "build" | "reassemble" | "setState" | "deactivate" | "activate" | "didChangeDependencies" | "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::RawGestureDetectorState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
