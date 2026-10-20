import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_OneSequenceGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_OneSequenceGestureRecognizer';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_ForcePressDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_ForcePressDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream12 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomStartEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ForcePressGestureRecognizer extends Omit<upstream0.OneSequenceGestureRecognizer, _flaxOwnMembers0>, Omit<upstream1.GestureRecognizer, _flaxOwnMembers0 | keyof upstream0.OneSequenceGestureRecognizer>, Omit<upstream2.GestureArenaMember, _flaxOwnMembers0 | keyof upstream0.OneSequenceGestureRecognizer | keyof upstream1.GestureRecognizer>, Omit<upstream3.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.OneSequenceGestureRecognizer | keyof upstream1.GestureRecognizer | keyof upstream2.GestureArenaMember>, Omit<upstream4.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.OneSequenceGestureRecognizer | keyof upstream1.GestureRecognizer | keyof upstream2.GestureArenaMember | keyof upstream3.DiagnosticableTreeMixin>, Omit<upstream5.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.OneSequenceGestureRecognizer | keyof upstream1.GestureRecognizer | keyof upstream2.GestureArenaMember | keyof upstream3.DiagnosticableTreeMixin | keyof upstream4.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressGestureRecognizer": readonly [];
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
    readonly __ForcePressGestureRecognizer: unique symbol;
    readonly [_flaxDartTypeValue]: ForcePressGestureRecognizer;
    readonly [_flaxDartMethodCases]?: {
        invokeCallback: _FlaxSignature0;
    };
    get team(): upstream7.GestureArenaTeam | null;
    readonly debugOwner: unknown | null;
    get gestureSettings(): upstream8.DeviceGestureSettings | null;
    get supportedDevices(): DartSet<upstream6.PointerDeviceKind> | null;
    readonly allowedButtonsFilter: ((buttons: number) => boolean);
    readonly debugDescription: string;
    get onStart(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onUpdate(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onPeak(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onEnd(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly startPressure: number;
    readonly peakPressure: number;
    readonly interpolation: ((pressureMin: number, pressureMax: number, pressure: number) => number);
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
    acceptGesture(pointer: number): void;
    rejectGesture(pointer: number): void;
    didStopTrackingLastPointer(pointer: number): void;
    resolve(disposition: upstream12.GestureDisposition): void;
    resolvePointer(pointer: number, disposition: upstream12.GestureDisposition): void;
    dispose(): void;
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
    getKindForPointer(pointer: number): upstream6.PointerDeviceKind;
    getButtonsForPointer(pointer: number): number;
    invokeCallback<T extends unknown | null = unknown | null>(name: string, callback: (() => (T | _FlaxDartOutput<T>)), options?: {
        debugReport?: (() => string) | null | undefined;
    }): _FlaxDartOutput<T> | null;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream16.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream16.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream18.DiagnosticsTreeStyle | null | undefined;
    }): upstream17.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream17.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream16.DiagnosticLevel | undefined;
    }): string;
    set team(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/team.dart::GestureArenaTeam": readonly [];
    }> | null);
    set gestureSettings(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null);
    set supportedDevices(value: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null);
    set onStart(value: ((details: upstream9.ForcePressDetails) => void) | null);
    set onUpdate(value: ((details: upstream9.ForcePressDetails) => void) | null);
    set onPeak(value: ((details: upstream9.ForcePressDetails) => void) | null);
    set onEnd(value: ((details: upstream9.ForcePressDetails) => void) | null);
}
export declare function _ForcePressGestureRecognizerFactory(options?: {
    startPressure?: number | undefined;
    peakPressure?: number | undefined;
    interpolation?: ((pressureMin: number, pressureMax: number, pressure: number) => number) | undefined;
    debugOwner?: unknown | null | undefined;
    supportedDevices?: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null | undefined;
    allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
}): ForcePressGestureRecognizer;
export interface _ForcePressGestureRecognizerNative extends ForcePressGestureRecognizer {
    readonly [_flaxDartTypeValue]: _ForcePressGestureRecognizerNative;
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
    acceptGesture(pointer: number): void;
    rejectGesture(pointer: number): void;
    didStopTrackingLastPointer(pointer: number): void;
    resolve(disposition: upstream12.GestureDisposition): void;
    resolvePointer(pointer: number, disposition: upstream12.GestureDisposition): void;
    dispose(): void;
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
    getKindForPointer(pointer: number): upstream6.PointerDeviceKind;
    getButtonsForPointer(pointer: number): number;
    invokeCallback<T extends unknown | null = unknown | null>(name: string, callback: (() => (T | _FlaxDartOutput<T>)), options?: {
        debugReport?: (() => string) | null | undefined;
    }): _FlaxDartOutput<T> | null;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream16.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream16.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream18.DiagnosticsTreeStyle | null | undefined;
    }): upstream17.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream17.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream16.DiagnosticLevel | undefined;
    }): string;
    get onStart(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onUpdate(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onPeak(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onEnd(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get startPressure(): number;
    get peakPressure(): number;
    get interpolation(): ((pressureMin: number, pressureMax: number, pressure: number) => number);
    get debugDescription(): string;
    get team(): upstream7.GestureArenaTeam | null;
    get debugOwner(): unknown | null;
    get gestureSettings(): upstream8.DeviceGestureSettings | null;
    get supportedDevices(): DartSet<upstream6.PointerDeviceKind> | null;
    get allowedButtonsFilter(): ((buttons: number) => boolean);
    set onStart(value: ((details: upstream9.ForcePressDetails) => void) | null);
    set onUpdate(value: ((details: upstream9.ForcePressDetails) => void) | null);
    set onPeak(value: ((details: upstream9.ForcePressDetails) => void) | null);
    set onEnd(value: ((details: upstream9.ForcePressDetails) => void) | null);
    set team(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/team.dart::GestureArenaTeam": readonly [];
    }> | null);
    set gestureSettings(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null);
    set supportedDevices(value: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null);
}
export declare abstract class _ForcePressGestureRecognizerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ForcePressGestureRecognizer>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ForcePressGestureRecognizer;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:ForcePressGestureRecognizer", readonly [], false];
    constructor(options?: {
        startPressure?: number | undefined;
        peakPressure?: number | undefined;
        interpolation?: ((pressureMin: number, pressureMax: number, pressure: number) => number) | undefined;
        debugOwner?: unknown | null | undefined;
        supportedDevices?: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
    });
}
export declare namespace _ForcePressGestureRecognizerFactory {
    function implement(args: [options?: {
        startPressure?: number | undefined;
        peakPressure?: number | undefined;
        interpolation?: ((pressureMin: number, pressureMax: number, pressure: number) => number) | undefined;
        debugOwner?: unknown | null | undefined;
        supportedDevices?: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
    }], implementation: {}): ForcePressGestureRecognizer;
}
declare const _ForcePressGestureRecognizerBinding: typeof _ForcePressGestureRecognizerFactory & (new (options?: {
    startPressure?: number | undefined;
    peakPressure?: number | undefined;
    interpolation?: ((pressureMin: number, pressureMax: number, pressure: number) => number) | undefined;
    debugOwner?: unknown | null | undefined;
    supportedDevices?: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null | undefined;
    allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
}) => _ForcePressGestureRecognizerNative);
export declare const ForcePressGestureRecognizer: typeof _ForcePressGestureRecognizerBinding & _FlaxInstanceType<ForcePressGestureRecognizer> & _FlaxDartType<ForcePressGestureRecognizer, readonly ["class", "flax.core/sdk_gestures#type:ForcePressGestureRecognizer", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "team" | "debugOwner" | "gestureSettings" | "supportedDevices" | "allowedButtonsFilter" | "debugDescription" | "onStart" | "onUpdate" | "onPeak" | "onEnd" | "startPressure" | "peakPressure" | "interpolation" | "addAllowedPointer" | "handleNonAllowedPointer" | "handleEvent" | "acceptGesture" | "rejectGesture" | "didStopTrackingLastPointer" | "resolve" | "resolvePointer" | "dispose" | "startTrackingPointer" | "stopTrackingPointer" | "stopTrackingIfPointerNoLongerDown" | "addPointerPanZoom" | "addAllowedPointerPanZoom" | "addPointer" | "isPointerAllowed" | "handleNonAllowedPointerPanZoom" | "isPointerPanZoomAllowed" | "getKindForPointer" | "getButtonsForPointer" | "invokeCallback" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::OneSequenceGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer" | "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
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
