import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PrimaryPointerGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PrimaryPointerGestureRecognizer';
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
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizerState';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizerState';
import type * as upstream10 from '@flax/flutter/gestures/_bindings/sdk_gestures_OffsetPair';
import '@flax/flutter/gestures/_bindings/sdk_gestures_OffsetPair';
import type * as upstream11 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import type * as upstream12 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream13 from '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressDownDetails';
import type * as upstream14 from '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressStartDetails';
import type * as upstream15 from '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressMoveUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressMoveUpdateDetails';
import type * as upstream16 from '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream20 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomStartEvent';
import type * as upstream23 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream24 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream25 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface LongPressGestureRecognizer extends Omit<upstream0.PrimaryPointerGestureRecognizer, _flaxOwnMembers0>, Omit<upstream1.OneSequenceGestureRecognizer, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer>, Omit<upstream2.GestureRecognizer, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer>, Omit<upstream3.GestureArenaMember, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer>, Omit<upstream4.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer | keyof upstream3.GestureArenaMember>, Omit<upstream5.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer | keyof upstream3.GestureArenaMember | keyof upstream4.DiagnosticableTreeMixin>, Omit<upstream6.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer | keyof upstream3.GestureArenaMember | keyof upstream4.DiagnosticableTreeMixin | keyof upstream5.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressGestureRecognizer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/recognizer.dart::PrimaryPointerGestureRecognizer": readonly [];
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
}> {
    readonly __LongPressGestureRecognizer: unique symbol;
    readonly [_flaxDartTypeValue]: LongPressGestureRecognizer;
    readonly [_flaxDartMethodCases]?: {
        invokeCallback: _FlaxSignature0;
    };
}
export interface LongPressGestureRecognizer {
    readonly [_flaxDartTypeValue]: LongPressGestureRecognizer;
    readonly [_flaxDartMethodCases]?: {
        invokeCallback: _FlaxSignature1;
    };
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
    handleEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    handlePrimaryPointer(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    didExceedDeadline(): void;
    didExceedDeadlineWithEvent(event: Readonly<{
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
    rejectGesture(pointer: number): void;
    didStopTrackingLastPointer(pointer: number): void;
    dispose(): void;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
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
    isPointerAllowed(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [];
    }>): boolean;
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
    getKindForPointer(pointer: number): upstream8.PointerDeviceKind;
    getButtonsForPointer(pointer: number): number;
    invokeCallback<T extends unknown | null = unknown | null>(name: string, callback: (() => (T | _FlaxDartOutput<T>)), options?: {
        debugReport?: (() => string) | null | undefined;
    }): _FlaxDartOutput<T> | null;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream23.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream23.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream25.DiagnosticsTreeStyle | null | undefined;
    }): upstream24.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream24.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream23.DiagnosticLevel | undefined;
    }): string;
    get onLongPressDown(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onLongPressCancel(): (() => void) | null;
    get onLongPress(): (() => void) | null;
    get onLongPressStart(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onLongPressMoveUpdate(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressMoveUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onLongPressUp(): (() => void) | null;
    get onLongPressEnd(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onSecondaryLongPressDown(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onSecondaryLongPressCancel(): (() => void) | null;
    get onSecondaryLongPress(): (() => void) | null;
    get onSecondaryLongPressStart(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onSecondaryLongPressMoveUpdate(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressMoveUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onSecondaryLongPressUp(): (() => void) | null;
    get onSecondaryLongPressEnd(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onTertiaryLongPressDown(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onTertiaryLongPressCancel(): (() => void) | null;
    get onTertiaryLongPress(): (() => void) | null;
    get onTertiaryLongPressStart(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onTertiaryLongPressMoveUpdate(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressMoveUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onTertiaryLongPressUp(): (() => void) | null;
    get onTertiaryLongPressEnd(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get debugDescription(): string;
    get deadline(): upstream7.Duration | null;
    get preAcceptSlopTolerance(): number | null;
    get postAcceptSlopTolerance(): number | null;
    get state(): upstream9.GestureRecognizerState;
    get primaryPointer(): number | null;
    get initialPosition(): upstream10.OffsetPair | null;
    get team(): upstream11.GestureArenaTeam | null;
    get debugOwner(): unknown | null;
    get gestureSettings(): upstream12.DeviceGestureSettings | null;
    get supportedDevices(): DartSet<upstream8.PointerDeviceKind> | null;
    get allowedButtonsFilter(): ((buttons: number) => boolean);
    set onLongPressDown(value: ((details: upstream13.LongPressDownDetails) => void) | null);
    set onLongPressCancel(value: (() => void) | null);
    set onLongPress(value: (() => void) | null);
    set onLongPressStart(value: ((details: upstream14.LongPressStartDetails) => void) | null);
    set onLongPressMoveUpdate(value: ((details: upstream15.LongPressMoveUpdateDetails) => void) | null);
    set onLongPressUp(value: (() => void) | null);
    set onLongPressEnd(value: ((details: upstream16.LongPressEndDetails) => void) | null);
    set onSecondaryLongPressDown(value: ((details: upstream13.LongPressDownDetails) => void) | null);
    set onSecondaryLongPressCancel(value: (() => void) | null);
    set onSecondaryLongPress(value: (() => void) | null);
    set onSecondaryLongPressStart(value: ((details: upstream14.LongPressStartDetails) => void) | null);
    set onSecondaryLongPressMoveUpdate(value: ((details: upstream15.LongPressMoveUpdateDetails) => void) | null);
    set onSecondaryLongPressUp(value: (() => void) | null);
    set onSecondaryLongPressEnd(value: ((details: upstream16.LongPressEndDetails) => void) | null);
    set onTertiaryLongPressDown(value: ((details: upstream13.LongPressDownDetails) => void) | null);
    set onTertiaryLongPressCancel(value: (() => void) | null);
    set onTertiaryLongPress(value: (() => void) | null);
    set onTertiaryLongPressStart(value: ((details: upstream14.LongPressStartDetails) => void) | null);
    set onTertiaryLongPressMoveUpdate(value: ((details: upstream15.LongPressMoveUpdateDetails) => void) | null);
    set onTertiaryLongPressUp(value: (() => void) | null);
    set onTertiaryLongPressEnd(value: ((details: upstream16.LongPressEndDetails) => void) | null);
    set team(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/team.dart::GestureArenaTeam": readonly [];
    }> | null);
    set gestureSettings(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null);
    set supportedDevices(value: DartSetInput<upstream8.PointerDeviceKind, upstream8.PointerDeviceKind> | null);
}
export declare abstract class LongPressGestureRecognizer extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LongPressGestureRecognizer>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LongPressGestureRecognizer;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:LongPressGestureRecognizer", readonly [], false];
    constructor(options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
        }>) | null | undefined;
        postAcceptSlopTolerance?: number | null | undefined;
        supportedDevices?: DartSetInput<upstream8.PointerDeviceKind, upstream8.PointerDeviceKind> | null | undefined;
        debugOwner?: unknown | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | null | undefined;
    });
}
export declare namespace LongPressGestureRecognizer {
    function implement(args: [options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
        }>) | null | undefined;
        postAcceptSlopTolerance?: number | null | undefined;
        supportedDevices?: DartSetInput<upstream8.PointerDeviceKind, upstream8.PointerDeviceKind> | null | undefined;
        debugOwner?: unknown | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | null | undefined;
    }], implementation: {}): LongPressGestureRecognizer;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "deadline" | "preAcceptSlopTolerance" | "postAcceptSlopTolerance" | "state" | "primaryPointer" | "initialPosition" | "team" | "debugOwner" | "gestureSettings" | "supportedDevices" | "allowedButtonsFilter" | "debugDescription" | "onLongPressDown" | "onLongPressCancel" | "onLongPress" | "onLongPressStart" | "onLongPressMoveUpdate" | "onLongPressUp" | "onLongPressEnd" | "onSecondaryLongPressDown" | "onSecondaryLongPressCancel" | "onSecondaryLongPress" | "onSecondaryLongPressStart" | "onSecondaryLongPressMoveUpdate" | "onSecondaryLongPressUp" | "onSecondaryLongPressEnd" | "onTertiaryLongPressDown" | "onTertiaryLongPressCancel" | "onTertiaryLongPress" | "onTertiaryLongPressStart" | "onTertiaryLongPressMoveUpdate" | "onTertiaryLongPressUp" | "onTertiaryLongPressEnd" | "addAllowedPointer" | "handleNonAllowedPointer" | "handleEvent" | "handlePrimaryPointer" | "didExceedDeadline" | "didExceedDeadlineWithEvent" | "acceptGesture" | "rejectGesture" | "didStopTrackingLastPointer" | "dispose" | "debugFillProperties" | "resolve" | "resolvePointer" | "startTrackingPointer" | "stopTrackingPointer" | "stopTrackingIfPointerNoLongerDown" | "addPointerPanZoom" | "addAllowedPointerPanZoom" | "addPointer" | "isPointerAllowed" | "handleNonAllowedPointerPanZoom" | "isPointerPanZoomAllowed" | "getKindForPointer" | "getButtonsForPointer" | "invokeCallback" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::PrimaryPointerGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::OneSequenceGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer" | "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (name: string, callback: (() => (_Selected0 | DartInput<_Selected0>)), options?: {
        debugReport?: (() => string) | null | undefined;
    }) => _Selected0 | null : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (name: string, callback: (() => (_Selected0 | DartInput<_Selected0>)), options?: {
        debugReport?: (() => string) | null | undefined;
    }) => _Selected0 | null : never : never;
}
export {};
