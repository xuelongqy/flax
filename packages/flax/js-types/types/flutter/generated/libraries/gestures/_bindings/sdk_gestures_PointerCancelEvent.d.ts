import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PointerCancelEvent extends Omit<upstream0.PointerEvent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PointerEvent>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/events.dart::PointerCancelEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerCancelEvent": readonly [];
}> {
    readonly __PointerCancelEvent: unique symbol;
    readonly [_flaxDartTypeValue]: PointerCancelEvent;
}
export interface PointerCancelEvent {
    readonly [_flaxDartTypeValue]: PointerCancelEvent;
    transformed(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null): PointerCancelEvent;
    copyWith(options?: {
        viewId?: number | null | undefined;
        timeStamp?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
        }>) | null | undefined;
        pointer?: number | null | undefined;
        kind?: upstream3.PointerDeviceKind | null | undefined;
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
    }): PointerCancelEvent;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringFull(): string;
    get viewId(): number;
    get embedderId(): number;
    get timeStamp(): upstream2.Duration;
    get pointer(): number;
    get kind(): upstream3.PointerDeviceKind;
    get device(): number;
    get position(): upstream4.Offset;
    get localPosition(): upstream4.Offset;
    get delta(): upstream4.Offset;
    get localDelta(): upstream4.Offset;
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
    get transform(): upstream5.Matrix4 | null;
    get original(): upstream0.PointerEvent | null;
}
export declare abstract class PointerCancelEvent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerCancelEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PointerCancelEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerCancelEvent", readonly [], false];
    constructor(options?: {
        viewId?: number | undefined;
        timeStamp?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
        }>) | undefined;
        pointer?: number | undefined;
        kind?: upstream3.PointerDeviceKind | undefined;
        device?: number | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        buttons?: number | undefined;
        obscured?: boolean | undefined;
        pressureMin?: number | undefined;
        pressureMax?: number | undefined;
        distance?: number | undefined;
        distanceMax?: number | undefined;
        size?: number | undefined;
        radiusMajor?: number | undefined;
        radiusMinor?: number | undefined;
        radiusMin?: number | undefined;
        radiusMax?: number | undefined;
        orientation?: number | undefined;
        tilt?: number | undefined;
        embedderId?: number | undefined;
    });
}
export declare namespace PointerCancelEvent {
    function implement(args: [options?: {
        viewId?: number | undefined;
        timeStamp?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
        }>) | undefined;
        pointer?: number | undefined;
        kind?: upstream3.PointerDeviceKind | undefined;
        device?: number | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        buttons?: number | undefined;
        obscured?: boolean | undefined;
        pressureMin?: number | undefined;
        pressureMax?: number | undefined;
        distance?: number | undefined;
        distanceMax?: number | undefined;
        size?: number | undefined;
        radiusMajor?: number | undefined;
        radiusMinor?: number | undefined;
        radiusMin?: number | undefined;
        radiusMax?: number | undefined;
        orientation?: number | undefined;
        tilt?: number | undefined;
        embedderId?: number | undefined;
    }], implementation: {}): PointerCancelEvent;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "viewId" | "embedderId" | "timeStamp" | "pointer" | "kind" | "device" | "position" | "localPosition" | "delta" | "localDelta" | "buttons" | "down" | "obscured" | "pressure" | "pressureMin" | "pressureMax" | "distance" | "distanceMin" | "distanceMax" | "size" | "radiusMajor" | "radiusMinor" | "radiusMin" | "radiusMax" | "orientation" | "tilt" | "platformData" | "synthesized" | "transform" | "original" | "transformed" | "copyWith" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "toStringFull" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerCancelEvent" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription" | "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerCancelEvent";
export {};
