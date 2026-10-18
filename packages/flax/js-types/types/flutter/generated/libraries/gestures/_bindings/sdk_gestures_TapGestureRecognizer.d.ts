import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_BaseTapGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_BaseTapGestureRecognizer';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_PrimaryPointerGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PrimaryPointerGestureRecognizer';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_OneSequenceGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_OneSequenceGestureRecognizer';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream9 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream10 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizerState';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizerState';
import type * as upstream11 from '@flax/flutter/gestures/_bindings/sdk_gestures_OffsetPair';
import '@flax/flutter/gestures/_bindings/sdk_gestures_OffsetPair';
import type * as upstream12 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import type * as upstream13 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream14 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import type * as upstream15 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapUpDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapUpDetails';
import type * as upstream16 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapMoveDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapMoveDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerUpEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerMoveEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerCancelEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream23 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomStartEvent';
import type * as upstream26 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream27 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream28 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TapGestureRecognizer extends Omit<upstream0.BaseTapGestureRecognizer, _flaxOwnMembers0>, Omit<upstream1.PrimaryPointerGestureRecognizer, _flaxOwnMembers0 | keyof upstream0.BaseTapGestureRecognizer>, Omit<upstream2.OneSequenceGestureRecognizer, _flaxOwnMembers0 | keyof upstream0.BaseTapGestureRecognizer | keyof upstream1.PrimaryPointerGestureRecognizer>, Omit<upstream3.GestureRecognizer, _flaxOwnMembers0 | keyof upstream0.BaseTapGestureRecognizer | keyof upstream1.PrimaryPointerGestureRecognizer | keyof upstream2.OneSequenceGestureRecognizer>, Omit<upstream4.GestureArenaMember, _flaxOwnMembers0 | keyof upstream0.BaseTapGestureRecognizer | keyof upstream1.PrimaryPointerGestureRecognizer | keyof upstream2.OneSequenceGestureRecognizer | keyof upstream3.GestureRecognizer>, Omit<upstream5.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.BaseTapGestureRecognizer | keyof upstream1.PrimaryPointerGestureRecognizer | keyof upstream2.OneSequenceGestureRecognizer | keyof upstream3.GestureRecognizer | keyof upstream4.GestureArenaMember>, Omit<upstream6.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.BaseTapGestureRecognizer | keyof upstream1.PrimaryPointerGestureRecognizer | keyof upstream2.OneSequenceGestureRecognizer | keyof upstream3.GestureRecognizer | keyof upstream4.GestureArenaMember | keyof upstream5.DiagnosticableTreeMixin>, Omit<upstream7.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.BaseTapGestureRecognizer | keyof upstream1.PrimaryPointerGestureRecognizer | keyof upstream2.OneSequenceGestureRecognizer | keyof upstream3.GestureRecognizer | keyof upstream4.GestureArenaMember | keyof upstream5.DiagnosticableTreeMixin | keyof upstream6.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/tap.dart::TapGestureRecognizer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/tap.dart::BaseTapGestureRecognizer": readonly [];
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
    readonly __TapGestureRecognizer: unique symbol;
    readonly [_flaxDartTypeValue]: TapGestureRecognizer;
    readonly [_flaxDartMethodCases]?: {
        invokeCallback: _FlaxSignature0;
    };
}
export interface TapGestureRecognizer {
    readonly [_flaxDartTypeValue]: TapGestureRecognizer;
    readonly [_flaxDartMethodCases]?: {
        invokeCallback: _FlaxSignature1;
    };
    handleTapDown(options: {
        down: Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [];
        }>;
    }): void;
    handleTapUp(options: {
        down: Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [];
        }>;
        up: Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerUpEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerUpEvent": readonly [];
        }>;
    }): void;
    handleTapMove(options: {
        move: Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerMoveEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerMoveEvent": readonly [];
        }>;
    }): void;
    handleTapCancel(options: {
        down: Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [];
        }>;
        cancel?: (Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerCancelEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerCancelEvent": readonly [];
        }>) | null | undefined;
        reason: string;
    }): void;
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
    startTrackingPointer(pointer: number, transform?: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null): void;
    handlePrimaryPointer(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    resolve(disposition: upstream23.GestureDisposition): void;
    didExceedDeadline(): void;
    acceptGesture(pointer: number): void;
    rejectGesture(pointer: number): void;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
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
    didStopTrackingLastPointer(pointer: number): void;
    dispose(): void;
    resolvePointer(pointer: number, disposition: upstream23.GestureDisposition): void;
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
        minLevel?: upstream26.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream26.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream28.DiagnosticsTreeStyle | null | undefined;
    }): upstream27.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream27.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream26.DiagnosticLevel | undefined;
    }): string;
    get onTapDown(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onTapUp(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapUpDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onTap(): (() => void) | null;
    get onTapMove(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapMoveDetails": readonly [];
    }>) => void) | null;
    get onTapCancel(): (() => void) | null;
    get onSecondaryTap(): (() => void) | null;
    get onSecondaryTapDown(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onSecondaryTapUp(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapUpDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onSecondaryTapCancel(): (() => void) | null;
    get onTertiaryTapDown(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onTertiaryTapUp(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapUpDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onTertiaryTapCancel(): (() => void) | null;
    get debugDescription(): string;
    get deadline(): upstream9.Duration | null;
    get preAcceptSlopTolerance(): number | null;
    get postAcceptSlopTolerance(): number | null;
    get state(): upstream10.GestureRecognizerState;
    get primaryPointer(): number | null;
    get initialPosition(): upstream11.OffsetPair | null;
    get team(): upstream12.GestureArenaTeam | null;
    get debugOwner(): unknown | null;
    get gestureSettings(): upstream13.DeviceGestureSettings | null;
    get supportedDevices(): DartSet<upstream8.PointerDeviceKind> | null;
    get allowedButtonsFilter(): ((buttons: number) => boolean);
    set onTapDown(value: ((details: upstream14.TapDownDetails) => void) | null);
    set onTapUp(value: ((details: upstream15.TapUpDetails) => void) | null);
    set onTap(value: (() => void) | null);
    set onTapMove(value: ((details: upstream16.TapMoveDetails) => void) | null);
    set onTapCancel(value: (() => void) | null);
    set onSecondaryTap(value: (() => void) | null);
    set onSecondaryTapDown(value: ((details: upstream14.TapDownDetails) => void) | null);
    set onSecondaryTapUp(value: ((details: upstream15.TapUpDetails) => void) | null);
    set onSecondaryTapCancel(value: (() => void) | null);
    set onTertiaryTapDown(value: ((details: upstream14.TapDownDetails) => void) | null);
    set onTertiaryTapUp(value: ((details: upstream15.TapUpDetails) => void) | null);
    set onTertiaryTapCancel(value: (() => void) | null);
    set team(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/team.dart::GestureArenaTeam": readonly [];
    }> | null);
    set gestureSettings(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null);
    set supportedDevices(value: DartSetInput<upstream8.PointerDeviceKind, upstream8.PointerDeviceKind> | null);
}
export declare abstract class TapGestureRecognizer extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TapGestureRecognizer>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TapGestureRecognizer;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:TapGestureRecognizer", readonly [], false];
    constructor(options?: {
        debugOwner?: unknown | null | undefined;
        supportedDevices?: DartSetInput<upstream8.PointerDeviceKind, upstream8.PointerDeviceKind> | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
        preAcceptSlopTolerance?: number | null | undefined;
        postAcceptSlopTolerance?: number | null | undefined;
    });
}
export declare namespace TapGestureRecognizer {
    function implement(args: [options?: {
        debugOwner?: unknown | null | undefined;
        supportedDevices?: DartSetInput<upstream8.PointerDeviceKind, upstream8.PointerDeviceKind> | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
        preAcceptSlopTolerance?: number | null | undefined;
        postAcceptSlopTolerance?: number | null | undefined;
    }], implementation: {}): TapGestureRecognizer;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugDescription" | "deadline" | "preAcceptSlopTolerance" | "postAcceptSlopTolerance" | "state" | "primaryPointer" | "initialPosition" | "team" | "debugOwner" | "gestureSettings" | "supportedDevices" | "allowedButtonsFilter" | "onTapDown" | "onTapUp" | "onTap" | "onTapMove" | "onTapCancel" | "onSecondaryTap" | "onSecondaryTapDown" | "onSecondaryTapUp" | "onSecondaryTapCancel" | "onTertiaryTapDown" | "onTertiaryTapUp" | "onTertiaryTapCancel" | "handleTapDown" | "handleTapUp" | "handleTapMove" | "handleTapCancel" | "addAllowedPointer" | "startTrackingPointer" | "handlePrimaryPointer" | "resolve" | "didExceedDeadline" | "acceptGesture" | "rejectGesture" | "debugFillProperties" | "handleNonAllowedPointer" | "handleEvent" | "didExceedDeadlineWithEvent" | "didStopTrackingLastPointer" | "dispose" | "resolvePointer" | "stopTrackingPointer" | "stopTrackingIfPointerNoLongerDown" | "addPointerPanZoom" | "addAllowedPointerPanZoom" | "addPointer" | "isPointerAllowed" | "handleNonAllowedPointerPanZoom" | "isPointerPanZoomAllowed" | "getKindForPointer" | "getButtonsForPointer" | "invokeCallback" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "__flaxBound:package:flutter/src/gestures/tap.dart::TapGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/tap.dart::BaseTapGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::PrimaryPointerGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::OneSequenceGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer" | "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
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
