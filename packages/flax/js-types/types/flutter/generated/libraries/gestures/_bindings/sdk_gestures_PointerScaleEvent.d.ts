import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PointerScaleEvent extends Omit<upstream0.PointerSignalEvent, _flaxOwnMembers0>, Omit<upstream1.PointerEvent, _flaxOwnMembers0 | keyof upstream0.PointerSignalEvent>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PointerSignalEvent | keyof upstream1.PointerEvent>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/events.dart::PointerScaleEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerScaleEvent": readonly [];
}> {
    readonly __PointerScaleEvent: unique symbol;
    readonly [_flaxDartTypeValue]: PointerScaleEvent;
    readonly viewId: number;
    readonly embedderId: number;
    readonly timeStamp: upstream3.Duration;
    readonly pointer: number;
    readonly kind: upstream4.PointerDeviceKind;
    readonly device: number;
    readonly position: upstream5.Offset;
    readonly localPosition: upstream5.Offset;
    readonly delta: upstream5.Offset;
    readonly localDelta: upstream5.Offset;
    readonly buttons: number;
    readonly down: boolean;
    readonly obscured: boolean;
    readonly pressure: number;
    readonly pressureMin: number;
    readonly pressureMax: number;
    readonly distance: number;
    readonly distanceMin: number;
    readonly distanceMax: number;
    readonly size: number;
    readonly radiusMajor: number;
    readonly radiusMinor: number;
    readonly radiusMin: number;
    readonly radiusMax: number;
    readonly orientation: number;
    readonly tilt: number;
    readonly platformData: number;
    readonly synthesized: boolean;
    readonly transform: upstream6.Matrix4 | null;
    readonly original: upstream1.PointerEvent | null;
    readonly scale: number;
    transformed(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null): PointerScaleEvent;
    copyWith(options?: {
        buttons?: number | null | undefined;
        delta?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        device?: number | null | undefined;
        distance?: number | null | undefined;
        distanceMax?: number | null | undefined;
        embedderId?: number | null | undefined;
        kind?: upstream4.PointerDeviceKind | null | undefined;
        obscured?: boolean | null | undefined;
        orientation?: number | null | undefined;
        pointer?: number | null | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        pressure?: number | null | undefined;
        pressureMax?: number | null | undefined;
        pressureMin?: number | null | undefined;
        radiusMajor?: number | null | undefined;
        radiusMax?: number | null | undefined;
        radiusMin?: number | null | undefined;
        radiusMinor?: number | null | undefined;
        scale?: number | null | undefined;
        size?: number | null | undefined;
        synthesized?: boolean | null | undefined;
        tilt?: number | null | undefined;
        timeStamp?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
        }>) | null | undefined;
        viewId?: number | null | undefined;
    }): PointerScaleEvent;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    respond(options: {
        allowPlatformDefault: boolean;
    }): void;
    toString(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    toStringFull(): string;
}
export declare function _PointerScaleEventFactory(options?: {
    viewId?: number | undefined;
    timeStamp?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
    }>) | undefined;
    kind?: upstream4.PointerDeviceKind | undefined;
    device?: number | undefined;
    position?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    embedderId?: number | undefined;
    scale?: number | undefined;
}): PointerScaleEvent;
export interface _PointerScaleEventNative extends PointerScaleEvent {
    readonly [_flaxDartTypeValue]: _PointerScaleEventNative;
    transformed(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null): PointerScaleEvent;
    copyWith(options?: {
        viewId?: number | null | undefined;
        timeStamp?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
        }>) | null | undefined;
        pointer?: number | null | undefined;
        kind?: upstream4.PointerDeviceKind | null | undefined;
        device?: number | null | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        delta?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        buttons?: number | null | undefined;
        obscured?: boolean | null | undefined;
        pressure?: number | null | undefined;
        pressureMin?: number | null | undefined;
        pressureMax?: number | null | undefined;
        distance?: number | null | undefined;
        distanceMax?: number | null | undefined;
        size?: number | null | undefined;
        radiusMajor?: number | null | undefined;
        radiusMinor?: number | null | undefined;
        radiusMin?: number | null | undefined;
        radiusMax?: number | null | undefined;
        orientation?: number | null | undefined;
        tilt?: number | null | undefined;
        synthesized?: boolean | null | undefined;
        embedderId?: number | null | undefined;
        scale?: number | null | undefined;
    }): PointerScaleEvent;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    respond(options: {
        allowPlatformDefault: boolean;
    }): void;
    toString(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    toStringFull(): string;
    get scale(): number;
    get viewId(): number;
    get embedderId(): number;
    get timeStamp(): upstream3.Duration;
    get pointer(): number;
    get kind(): upstream4.PointerDeviceKind;
    get device(): number;
    get position(): upstream5.Offset;
    get localPosition(): upstream5.Offset;
    get delta(): upstream5.Offset;
    get localDelta(): upstream5.Offset;
    get buttons(): number;
    get down(): boolean;
    get obscured(): boolean;
    get pressure(): number;
    get pressureMin(): number;
    get pressureMax(): number;
    get distance(): number;
    get distanceMin(): number;
    get distanceMax(): number;
    get size(): number;
    get radiusMajor(): number;
    get radiusMinor(): number;
    get radiusMin(): number;
    get radiusMax(): number;
    get orientation(): number;
    get tilt(): number;
    get platformData(): number;
    get synthesized(): boolean;
    get transform(): upstream6.Matrix4 | null;
    get original(): upstream1.PointerEvent | null;
}
export declare abstract class _PointerScaleEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerScaleEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PointerScaleEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerScaleEvent", readonly [], false];
    constructor(options?: {
        viewId?: number | undefined;
        timeStamp?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
        }>) | undefined;
        kind?: upstream4.PointerDeviceKind | undefined;
        device?: number | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        embedderId?: number | undefined;
        scale?: number | undefined;
    });
}
export declare namespace _PointerScaleEventFactory {
    function implement(args: [options?: {
        viewId?: number | undefined;
        timeStamp?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
        }>) | undefined;
        kind?: upstream4.PointerDeviceKind | undefined;
        device?: number | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        embedderId?: number | undefined;
        scale?: number | undefined;
    }], implementation: {}): PointerScaleEvent;
}
declare const _PointerScaleEventBinding: typeof _PointerScaleEventFactory & (new (options?: {
    viewId?: number | undefined;
    timeStamp?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
    }>) | undefined;
    kind?: upstream4.PointerDeviceKind | undefined;
    device?: number | undefined;
    position?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    embedderId?: number | undefined;
    scale?: number | undefined;
}) => _PointerScaleEventNative);
export declare const PointerScaleEvent: typeof _PointerScaleEventBinding & _FlaxInstanceType<PointerScaleEvent> & _FlaxDartType<PointerScaleEvent, readonly ["class", "flax.core/sdk_gestures#type:PointerScaleEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "viewId" | "embedderId" | "timeStamp" | "pointer" | "kind" | "device" | "position" | "localPosition" | "delta" | "localDelta" | "buttons" | "down" | "obscured" | "pressure" | "pressureMin" | "pressureMax" | "distance" | "distanceMin" | "distanceMax" | "size" | "radiusMajor" | "radiusMinor" | "radiusMin" | "radiusMax" | "orientation" | "tilt" | "platformData" | "synthesized" | "transform" | "original" | "scale" | "transformed" | "copyWith" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "respond" | "toString" | "toStringFull" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerScaleEvent" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent" | "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription" | "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerScaleEvent";
export {};
