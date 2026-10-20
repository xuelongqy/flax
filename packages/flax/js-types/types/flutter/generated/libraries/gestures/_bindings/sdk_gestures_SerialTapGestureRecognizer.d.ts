import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/sdk_gestures_SerialTapDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_SerialTapDownDetails';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_SerialTapCancelDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_SerialTapCancelDetails';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_SerialTapUpDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_SerialTapUpDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomStartEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SerialTapGestureRecognizer extends Omit<upstream0.GestureRecognizer, _flaxOwnMembers0>, Omit<upstream1.GestureArenaMember, _flaxOwnMembers0 | keyof upstream0.GestureRecognizer>, Omit<upstream2.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.GestureRecognizer | keyof upstream1.GestureArenaMember>, Omit<upstream3.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.GestureRecognizer | keyof upstream1.GestureArenaMember | keyof upstream2.DiagnosticableTreeMixin>, Omit<upstream4.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.GestureRecognizer | keyof upstream1.GestureArenaMember | keyof upstream2.DiagnosticableTreeMixin | keyof upstream3.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapGestureRecognizer": readonly [];
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
    readonly __SerialTapGestureRecognizer: unique symbol;
    readonly [_flaxDartTypeValue]: SerialTapGestureRecognizer;
    readonly [_flaxDartMethodCases]?: {
        invokeCallback: _FlaxSignature0;
    };
    readonly debugOwner: unknown | null;
    get gestureSettings(): upstream6.DeviceGestureSettings | null;
    get supportedDevices(): DartSet<upstream5.PointerDeviceKind> | null;
    readonly allowedButtonsFilter: ((buttons: number) => boolean);
    readonly debugDescription: string;
    get onSerialTapDown(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onSerialTapCancel(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapCancelDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onSerialTapUp(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapUpDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly isTrackingPointer: boolean;
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
    getKindForPointer(pointer: number): upstream5.PointerDeviceKind;
    getButtonsForPointer(pointer: number): number;
    dispose(): void;
    invokeCallback<T extends unknown | null = unknown | null>(name: string, callback: (() => (T | _FlaxDartOutput<T>)), options?: {
        debugReport?: (() => string) | null | undefined;
    }): _FlaxDartOutput<T> | null;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    acceptGesture(pointer: number): void;
    rejectGesture(pointer: number): void;
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
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    set gestureSettings(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null);
    set supportedDevices(value: DartSetInput<upstream5.PointerDeviceKind, upstream5.PointerDeviceKind> | null);
    set onSerialTapDown(value: ((details: upstream7.SerialTapDownDetails) => void) | null);
    set onSerialTapCancel(value: ((details: upstream8.SerialTapCancelDetails) => void) | null);
    set onSerialTapUp(value: ((details: upstream9.SerialTapUpDetails) => void) | null);
}
export declare function _SerialTapGestureRecognizerFactory(options?: {
    debugOwner?: unknown | null | undefined;
    supportedDevices?: DartSetInput<upstream5.PointerDeviceKind, upstream5.PointerDeviceKind> | null | undefined;
    allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
}): SerialTapGestureRecognizer;
export interface _SerialTapGestureRecognizerNative extends SerialTapGestureRecognizer {
    readonly [_flaxDartTypeValue]: _SerialTapGestureRecognizerNative;
    readonly [_flaxDartMethodCases]?: {
        invokeCallback: _FlaxSignature1;
    };
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
    getKindForPointer(pointer: number): upstream5.PointerDeviceKind;
    getButtonsForPointer(pointer: number): number;
    dispose(): void;
    invokeCallback<T extends unknown | null = unknown | null>(name: string, callback: (() => (T | _FlaxDartOutput<T>)), options?: {
        debugReport?: (() => string) | null | undefined;
    }): _FlaxDartOutput<T> | null;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    acceptGesture(pointer: number): void;
    rejectGesture(pointer: number): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream13.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    get onSerialTapDown(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onSerialTapCancel(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapCancelDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onSerialTapUp(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapUpDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get isTrackingPointer(): boolean;
    get debugDescription(): string;
    get debugOwner(): unknown | null;
    get gestureSettings(): upstream6.DeviceGestureSettings | null;
    get supportedDevices(): DartSet<upstream5.PointerDeviceKind> | null;
    get allowedButtonsFilter(): ((buttons: number) => boolean);
    set onSerialTapDown(value: ((details: upstream7.SerialTapDownDetails) => void) | null);
    set onSerialTapCancel(value: ((details: upstream8.SerialTapCancelDetails) => void) | null);
    set onSerialTapUp(value: ((details: upstream9.SerialTapUpDetails) => void) | null);
    set gestureSettings(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null);
    set supportedDevices(value: DartSetInput<upstream5.PointerDeviceKind, upstream5.PointerDeviceKind> | null);
}
export declare abstract class _SerialTapGestureRecognizerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SerialTapGestureRecognizer>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SerialTapGestureRecognizer;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:SerialTapGestureRecognizer", readonly [], false];
    constructor(options?: {
        debugOwner?: unknown | null | undefined;
        supportedDevices?: DartSetInput<upstream5.PointerDeviceKind, upstream5.PointerDeviceKind> | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
    });
}
export declare namespace _SerialTapGestureRecognizerFactory {
    function implement(args: [options?: {
        debugOwner?: unknown | null | undefined;
        supportedDevices?: DartSetInput<upstream5.PointerDeviceKind, upstream5.PointerDeviceKind> | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
    }], implementation: {}): SerialTapGestureRecognizer;
}
declare const _SerialTapGestureRecognizerBinding: typeof _SerialTapGestureRecognizerFactory & (new (options?: {
    debugOwner?: unknown | null | undefined;
    supportedDevices?: DartSetInput<upstream5.PointerDeviceKind, upstream5.PointerDeviceKind> | null | undefined;
    allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
}) => _SerialTapGestureRecognizerNative);
export declare const SerialTapGestureRecognizer: typeof _SerialTapGestureRecognizerBinding & _FlaxInstanceType<SerialTapGestureRecognizer> & _FlaxDartType<SerialTapGestureRecognizer, readonly ["class", "flax.core/sdk_gestures#type:SerialTapGestureRecognizer", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugOwner" | "gestureSettings" | "supportedDevices" | "allowedButtonsFilter" | "debugDescription" | "onSerialTapDown" | "onSerialTapCancel" | "onSerialTapUp" | "isTrackingPointer" | "addPointerPanZoom" | "addAllowedPointerPanZoom" | "addPointer" | "addAllowedPointer" | "handleNonAllowedPointer" | "isPointerAllowed" | "handleNonAllowedPointerPanZoom" | "isPointerPanZoomAllowed" | "getKindForPointer" | "getButtonsForPointer" | "dispose" | "invokeCallback" | "debugFillProperties" | "acceptGesture" | "rejectGesture" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer" | "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
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
