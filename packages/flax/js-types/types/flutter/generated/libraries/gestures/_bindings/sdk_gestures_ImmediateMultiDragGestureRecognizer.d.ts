import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
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
import type * as upstream7 from '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import type * as upstream11 from '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragPointerState';
import '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragPointerState';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomStartEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImmediateMultiDragGestureRecognizer extends Omit<upstream0.MultiDragGestureRecognizer, _flaxOwnMembers0>, Omit<upstream1.GestureRecognizer, _flaxOwnMembers0 | keyof upstream0.MultiDragGestureRecognizer>, Omit<upstream2.GestureArenaMember, _flaxOwnMembers0 | keyof upstream0.MultiDragGestureRecognizer | keyof upstream1.GestureRecognizer>, Omit<upstream3.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.MultiDragGestureRecognizer | keyof upstream1.GestureRecognizer | keyof upstream2.GestureArenaMember>, Omit<upstream4.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.MultiDragGestureRecognizer | keyof upstream1.GestureRecognizer | keyof upstream2.GestureArenaMember | keyof upstream3.DiagnosticableTreeMixin>, Omit<upstream5.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.MultiDragGestureRecognizer | keyof upstream1.GestureRecognizer | keyof upstream2.GestureArenaMember | keyof upstream3.DiagnosticableTreeMixin | keyof upstream4.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/multidrag.dart::ImmediateMultiDragGestureRecognizer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/multidrag.dart::MultiDragGestureRecognizer": readonly [];
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
    readonly __ImmediateMultiDragGestureRecognizer: unique symbol;
    readonly [_flaxDartTypeValue]: ImmediateMultiDragGestureRecognizer;
    readonly [_flaxDartMethodCases]?: {
        invokeCallback: _FlaxSignature0;
    };
    get onStart(): ((position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => upstream7.Drag | null) | null;
    readonly debugOwner: unknown | null;
    get gestureSettings(): upstream9.DeviceGestureSettings | null;
    get supportedDevices(): DartSet<upstream6.PointerDeviceKind> | null;
    readonly allowedButtonsFilter: ((buttons: number) => boolean);
    readonly debugDescription: string;
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
    createNewPointerState(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [];
    }>): upstream11.MultiDragPointerState;
    acceptGesture(pointer: number): void;
    rejectGesture(pointer: number): void;
    dispose(): void;
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
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream14.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream15.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    set onStart(value: ((position: upstream8.Offset) => Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
    }> | null) | null);
    set gestureSettings(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null);
    set supportedDevices(value: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null);
}
export declare function _ImmediateMultiDragGestureRecognizerFactory(options?: {
    debugOwner?: unknown | null | undefined;
    supportedDevices?: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null | undefined;
    allowedButtonsFilter?: ((buttons: number) => boolean) | null | undefined;
}): ImmediateMultiDragGestureRecognizer;
export interface _ImmediateMultiDragGestureRecognizerNative extends ImmediateMultiDragGestureRecognizer {
    readonly [_flaxDartTypeValue]: _ImmediateMultiDragGestureRecognizerNative;
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
    createNewPointerState(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [];
    }>): upstream11.MultiDragPointerState;
    acceptGesture(pointer: number): void;
    rejectGesture(pointer: number): void;
    dispose(): void;
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
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream14.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream15.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    get debugDescription(): string;
    get onStart(): ((position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => upstream7.Drag | null) | null;
    get debugOwner(): unknown | null;
    get gestureSettings(): upstream9.DeviceGestureSettings | null;
    get supportedDevices(): DartSet<upstream6.PointerDeviceKind> | null;
    get allowedButtonsFilter(): ((buttons: number) => boolean);
    set onStart(value: ((position: upstream8.Offset) => Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
    }> | null) | null);
    set gestureSettings(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null);
    set supportedDevices(value: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null);
}
export declare abstract class _ImmediateMultiDragGestureRecognizerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImmediateMultiDragGestureRecognizer>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImmediateMultiDragGestureRecognizer;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:ImmediateMultiDragGestureRecognizer", readonly [], false];
    constructor(options?: {
        debugOwner?: unknown | null | undefined;
        supportedDevices?: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | null | undefined;
    });
}
export declare namespace _ImmediateMultiDragGestureRecognizerFactory {
    function implement(args: [options?: {
        debugOwner?: unknown | null | undefined;
        supportedDevices?: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | null | undefined;
    }], implementation: {}): ImmediateMultiDragGestureRecognizer;
}
declare const _ImmediateMultiDragGestureRecognizerBinding: typeof _ImmediateMultiDragGestureRecognizerFactory & (new (options?: {
    debugOwner?: unknown | null | undefined;
    supportedDevices?: DartSetInput<upstream6.PointerDeviceKind, upstream6.PointerDeviceKind> | null | undefined;
    allowedButtonsFilter?: ((buttons: number) => boolean) | null | undefined;
}) => _ImmediateMultiDragGestureRecognizerNative);
export declare const ImmediateMultiDragGestureRecognizer: typeof _ImmediateMultiDragGestureRecognizerBinding & _FlaxInstanceType<ImmediateMultiDragGestureRecognizer> & _FlaxDartType<ImmediateMultiDragGestureRecognizer, readonly ["class", "flax.core/sdk_gestures#type:ImmediateMultiDragGestureRecognizer", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "onStart" | "debugOwner" | "gestureSettings" | "supportedDevices" | "allowedButtonsFilter" | "debugDescription" | "addAllowedPointer" | "createNewPointerState" | "acceptGesture" | "rejectGesture" | "dispose" | "addPointerPanZoom" | "addAllowedPointerPanZoom" | "addPointer" | "handleNonAllowedPointer" | "isPointerAllowed" | "handleNonAllowedPointerPanZoom" | "isPointerPanZoomAllowed" | "getKindForPointer" | "getButtonsForPointer" | "invokeCallback" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "__flaxBound:package:flutter/src/gestures/multidrag.dart::ImmediateMultiDragGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/multidrag.dart::MultiDragGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer" | "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
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
