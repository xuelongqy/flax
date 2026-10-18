import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_BaseTapAndDragGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_BaseTapAndDragGestureRecognizer';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_OneSequenceGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_OneSequenceGestureRecognizer';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream9 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream10 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragDownDetails';
import type * as upstream11 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpDetails';
import type * as upstream12 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragStartDetails';
import type * as upstream13 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpdateDetails';
import type * as upstream14 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragEndDetails';
import type * as upstream15 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import type * as upstream16 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream17 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import type * as upstream18 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerUpEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerUpEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream20 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomStartEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream24 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream25 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream26 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TapAndPanGestureRecognizer extends Omit<upstream0.BaseTapAndDragGestureRecognizer, _flaxOwnMembers0>, Omit<upstream1.OneSequenceGestureRecognizer, _flaxOwnMembers0 | keyof upstream0.BaseTapAndDragGestureRecognizer>, Omit<upstream2.GestureRecognizer, _flaxOwnMembers0 | keyof upstream0.BaseTapAndDragGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer>, Omit<upstream3.GestureArenaMember, _flaxOwnMembers0 | keyof upstream0.BaseTapAndDragGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer>, Omit<upstream4.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.BaseTapAndDragGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer | keyof upstream3.GestureArenaMember>, Omit<upstream5.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.BaseTapAndDragGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer | keyof upstream3.GestureArenaMember | keyof upstream4.DiagnosticableTreeMixin>, Omit<upstream6.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.BaseTapAndDragGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer | keyof upstream3.GestureArenaMember | keyof upstream4.DiagnosticableTreeMixin | keyof upstream5.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapAndPanGestureRecognizer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::BaseTapAndDragGestureRecognizer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/recognizer.dart::OneSequenceGestureRecognizer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::_TapStatusTrackerMixin": readonly [];
}> {
    readonly __TapAndPanGestureRecognizer: unique symbol;
    readonly [_flaxDartTypeValue]: TapAndPanGestureRecognizer;
    readonly [_flaxDartMethodCases]?: {
        invokeCallback: _FlaxSignature0;
    };
    get dragStartBehavior(): upstream8.DragStartBehavior;
    get dragUpdateThrottleFrequency(): upstream9.Duration | null;
    get maxConsecutiveTap(): number | null;
    get eagerVictoryOnDrag(): boolean;
    get onTapDown(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onTapUp(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onDragStart(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onDragUpdate(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onDragEnd(): ((endDetails: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onCancel(): (() => void) | null;
    readonly debugDescription: string;
    get team(): upstream15.GestureArenaTeam | null;
    readonly debugOwner: unknown | null;
    get gestureSettings(): upstream16.DeviceGestureSettings | null;
    get supportedDevices(): DartSet<upstream7.PointerDeviceKind> | null;
    readonly allowedButtonsFilter: ((buttons: number) => boolean);
    readonly currentDown: upstream17.PointerDownEvent | null;
    readonly currentUp: upstream18.PointerUpEvent | null;
    readonly consecutiveTapCount: number;
    get onTapTrackStart(): (() => void) | null;
    get onTapTrackReset(): (() => void) | null;
    isPointerAllowed(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    addAllowedPointer(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [];
    }>): void;
    handleNonAllowedPointer(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [];
    }>): void;
    acceptGesture(pointer: number): void;
    didStopTrackingLastPointer(pointer: number): void;
    handleEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    rejectGesture(pointer: number): void;
    dispose(): void;
    resolve(disposition: upstream20.GestureDisposition): void;
    resolvePointer(pointer: number, disposition: upstream20.GestureDisposition): void;
    startTrackingPointer(pointer: number, transform?: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null): void;
    stopTrackingPointer(pointer: number): void;
    stopTrackingIfPointerNoLongerDown(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    addPointerPanZoom(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerPanZoomStartEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerPanZoomStartEvent": readonly [];
    }>): void;
    addAllowedPointerPanZoom(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerPanZoomStartEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerPanZoomStartEvent": readonly [];
    }>): void;
    addPointer(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [];
    }>): void;
    handleNonAllowedPointerPanZoom(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerPanZoomStartEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerPanZoomStartEvent": readonly [];
    }>): void;
    isPointerPanZoomAllowed(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerPanZoomStartEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerPanZoomStartEvent": readonly [];
    }>): boolean;
    getKindForPointer(pointer: number): upstream7.PointerDeviceKind;
    getButtonsForPointer(pointer: number): number;
    invokeCallback<T extends unknown | null = unknown | null>(name: string, callback: (() => (T | _FlaxDartOutput<T>)), options?: {
        debugReport?: (() => string) | null | undefined;
    }): _FlaxDartOutput<T> | null;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream24.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream24.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream26.DiagnosticsTreeStyle | null | undefined;
    }): upstream25.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream25.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream24.DiagnosticLevel | undefined;
    }): string;
    set dragStartBehavior(value: upstream8.DragStartBehavior);
    set dragUpdateThrottleFrequency(value: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream9.Duration];
    }>) | null);
    set maxConsecutiveTap(value: number | null);
    set eagerVictoryOnDrag(value: boolean);
    set onTapDown(value: ((details: upstream10.TapDragDownDetails) => void) | null);
    set onTapUp(value: ((details: upstream11.TapDragUpDetails) => void) | null);
    set onDragStart(value: ((details: upstream12.TapDragStartDetails) => void) | null);
    set onDragUpdate(value: ((details: upstream13.TapDragUpdateDetails) => void) | null);
    set onDragEnd(value: ((endDetails: upstream14.TapDragEndDetails) => void) | null);
    set onCancel(value: (() => void) | null);
    set team(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/team.dart::GestureArenaTeam": readonly [];
    }> | null);
    set gestureSettings(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null);
    set supportedDevices(value: DartSetInput<upstream7.PointerDeviceKind, upstream7.PointerDeviceKind> | null);
    set onTapTrackStart(value: (() => void) | null);
    set onTapTrackReset(value: (() => void) | null);
}
export declare function _TapAndPanGestureRecognizerFactory(options?: {
    debugOwner?: unknown | null | undefined;
    supportedDevices?: DartSetInput<upstream7.PointerDeviceKind, upstream7.PointerDeviceKind> | null | undefined;
}): TapAndPanGestureRecognizer;
export declare const TapAndPanGestureRecognizer: typeof _TapAndPanGestureRecognizerFactory & _FlaxInstanceType<TapAndPanGestureRecognizer> & _FlaxDartType<TapAndPanGestureRecognizer, readonly ["class", "flax.core/sdk_gestures#type:TapAndPanGestureRecognizer", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dragStartBehavior" | "dragUpdateThrottleFrequency" | "maxConsecutiveTap" | "eagerVictoryOnDrag" | "onTapDown" | "onTapUp" | "onDragStart" | "onDragUpdate" | "onDragEnd" | "onCancel" | "debugDescription" | "team" | "debugOwner" | "gestureSettings" | "supportedDevices" | "allowedButtonsFilter" | "currentDown" | "currentUp" | "consecutiveTapCount" | "onTapTrackStart" | "onTapTrackReset" | "isPointerAllowed" | "addAllowedPointer" | "handleNonAllowedPointer" | "acceptGesture" | "didStopTrackingLastPointer" | "handleEvent" | "rejectGesture" | "dispose" | "resolve" | "resolvePointer" | "startTrackingPointer" | "stopTrackingPointer" | "stopTrackingIfPointerNoLongerDown" | "addPointerPanZoom" | "addAllowedPointerPanZoom" | "addPointer" | "handleNonAllowedPointerPanZoom" | "isPointerPanZoomAllowed" | "getKindForPointer" | "getButtonsForPointer" | "invokeCallback" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapAndPanGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::BaseTapAndDragGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::OneSequenceGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer" | "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::_TapStatusTrackerMixin";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (name: string, callback: (() => (_Selected0 | DartInput<_Selected0>)), options?: {
        debugReport?: (() => string) | null | undefined;
    }) => _Selected0 | null : never : never;
}
export {};
