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
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream8 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizerState';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizerState';
import type * as upstream10 from '@flax/flutter/gestures/_bindings/sdk_gestures_OffsetPair';
import '@flax/flutter/gestures/_bindings/sdk_gestures_OffsetPair';
import type * as upstream11 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import type * as upstream12 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream13 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream16 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomStartEvent';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream22 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerUpEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerUpEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerMoveEvent';
import type * as upstream24 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerCancelEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerCancelEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface BaseTapGestureRecognizer extends Omit<upstream0.PrimaryPointerGestureRecognizer, _flaxOwnMembers0>, Omit<upstream1.OneSequenceGestureRecognizer, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer>, Omit<upstream2.GestureRecognizer, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer>, Omit<upstream3.GestureArenaMember, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer>, Omit<upstream4.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer | keyof upstream3.GestureArenaMember>, Omit<upstream5.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer | keyof upstream3.GestureArenaMember | keyof upstream4.DiagnosticableTreeMixin>, Omit<upstream6.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PrimaryPointerGestureRecognizer | keyof upstream1.OneSequenceGestureRecognizer | keyof upstream2.GestureRecognizer | keyof upstream3.GestureArenaMember | keyof upstream4.DiagnosticableTreeMixin | keyof upstream5.DiagnosticableTree>, Readonly<{
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
    readonly __BaseTapGestureRecognizer: unique symbol;
    readonly [_flaxDartTypeValue]: BaseTapGestureRecognizer;
    readonly [_flaxDartMethodCases]?: {
        invokeCallback: _FlaxSignature0;
    };
}
export interface BaseTapGestureRecognizer {
    readonly [_flaxDartTypeValue]: BaseTapGestureRecognizer;
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
    resolve(disposition: upstream16.GestureDisposition): void;
    resolvePointer(pointer: number, disposition: upstream16.GestureDisposition): void;
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
    getKindForPointer(pointer: number): upstream7.PointerDeviceKind;
    getButtonsForPointer(pointer: number): number;
    invokeCallback<T extends unknown | null = unknown | null>(name: string, callback: (() => (T | _FlaxDartOutput<T>)), options?: {
        debugReport?: (() => string) | null | undefined;
    }): _FlaxDartOutput<T> | null;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream19.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream21.DiagnosticsTreeStyle | null | undefined;
    }): upstream20.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream20.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
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
    get debugDescription(): string;
    get deadline(): upstream8.Duration | null;
    get preAcceptSlopTolerance(): number | null;
    get postAcceptSlopTolerance(): number | null;
    get state(): upstream9.GestureRecognizerState;
    get primaryPointer(): number | null;
    get initialPosition(): upstream10.OffsetPair | null;
    get team(): upstream11.GestureArenaTeam | null;
    get debugOwner(): unknown | null;
    get gestureSettings(): upstream12.DeviceGestureSettings | null;
    get supportedDevices(): DartSet<upstream7.PointerDeviceKind> | null;
    get allowedButtonsFilter(): ((buttons: number) => boolean);
    set team(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/team.dart::GestureArenaTeam": readonly [];
    }> | null);
    set gestureSettings(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null);
    set supportedDevices(value: DartSetInput<upstream7.PointerDeviceKind, upstream7.PointerDeviceKind> | null);
}
export declare abstract class BaseTapGestureRecognizer extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BaseTapGestureRecognizer>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BaseTapGestureRecognizer;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:BaseTapGestureRecognizer", readonly [], false];
    constructor(options?: {
        debugOwner?: unknown | null | undefined;
        supportedDevices?: DartSetInput<upstream7.PointerDeviceKind, upstream7.PointerDeviceKind> | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
        preAcceptSlopTolerance?: number | null | undefined;
        postAcceptSlopTolerance?: number | null | undefined;
    });
    abstract handleTapDown(options: {
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
    abstract handleTapUp(options: {
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
    abstract handleTapCancel(options: {
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
}
export declare namespace BaseTapGestureRecognizer {
    function implement(args: [options?: {
        debugOwner?: unknown | null | undefined;
        supportedDevices?: DartSetInput<upstream7.PointerDeviceKind, upstream7.PointerDeviceKind> | null | undefined;
        allowedButtonsFilter?: ((buttons: number) => boolean) | undefined;
        preAcceptSlopTolerance?: number | null | undefined;
        postAcceptSlopTolerance?: number | null | undefined;
    }], implementation: {
        handleTapDown: ((options: {
            down: upstream13.PointerDownEvent;
        }) => void);
        handleTapUp: ((options: {
            down: upstream13.PointerDownEvent;
            up: upstream22.PointerUpEvent;
        }) => void);
        handleTapCancel: ((options: {
            down: upstream13.PointerDownEvent;
            cancel?: upstream24.PointerCancelEvent | null | undefined;
            reason: string;
        }) => void);
    }): BaseTapGestureRecognizer;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "deadline" | "preAcceptSlopTolerance" | "postAcceptSlopTolerance" | "state" | "primaryPointer" | "initialPosition" | "team" | "debugOwner" | "gestureSettings" | "supportedDevices" | "allowedButtonsFilter" | "debugDescription" | "addAllowedPointer" | "handleNonAllowedPointer" | "handleEvent" | "handlePrimaryPointer" | "didExceedDeadline" | "didExceedDeadlineWithEvent" | "acceptGesture" | "rejectGesture" | "didStopTrackingLastPointer" | "dispose" | "debugFillProperties" | "resolve" | "resolvePointer" | "startTrackingPointer" | "stopTrackingPointer" | "stopTrackingIfPointerNoLongerDown" | "addPointerPanZoom" | "addAllowedPointerPanZoom" | "addPointer" | "isPointerAllowed" | "handleNonAllowedPointerPanZoom" | "isPointerPanZoomAllowed" | "getKindForPointer" | "getButtonsForPointer" | "invokeCallback" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "handleTapDown" | "handleTapUp" | "handleTapMove" | "handleTapCancel" | "__flaxBound:package:flutter/src/gestures/tap.dart::BaseTapGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::PrimaryPointerGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::OneSequenceGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer" | "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
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
