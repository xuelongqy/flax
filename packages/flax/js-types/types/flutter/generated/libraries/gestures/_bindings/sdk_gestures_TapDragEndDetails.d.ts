import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PositionedGestureDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PositionedGestureDetails';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TapDragEndDetails extends Omit<upstream0.PositionedGestureDetails, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PositionedGestureDetails>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragEndDetails": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TapDragEndDetails: unique symbol;
    readonly [_flaxDartTypeValue]: TapDragEndDetails;
    readonly globalPosition: upstream2.Offset;
    readonly localPosition: upstream2.Offset;
    readonly velocity: upstream3.Velocity;
    readonly primaryVelocity: number | null;
    readonly consecutiveTapCount: number;
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
}
export declare function _TapDragEndDetailsFactory(options: {
    globalPosition?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    localPosition?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    velocity?: Readonly<{
        "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
    }> | undefined;
    primaryVelocity?: number | null | undefined;
    consecutiveTapCount: number;
}): TapDragEndDetails;
export interface _TapDragEndDetailsNative extends TapDragEndDetails {
    readonly [_flaxDartTypeValue]: _TapDragEndDetailsNative;
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
    get globalPosition(): upstream2.Offset;
    get localPosition(): upstream2.Offset;
    get velocity(): upstream3.Velocity;
    get primaryVelocity(): number | null;
    get consecutiveTapCount(): number;
}
export declare abstract class _TapDragEndDetailsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TapDragEndDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TapDragEndDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:TapDragEndDetails", readonly [], false];
    constructor(options: {
        globalPosition?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        localPosition?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        velocity?: Readonly<{
            "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
        }> | undefined;
        primaryVelocity?: number | null | undefined;
        consecutiveTapCount: number;
    });
}
export declare namespace _TapDragEndDetailsFactory {
    function implement(args: [options: {
        globalPosition?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        localPosition?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        velocity?: Readonly<{
            "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
        }> | undefined;
        primaryVelocity?: number | null | undefined;
        consecutiveTapCount: number;
    }], implementation: {}): TapDragEndDetails;
}
declare const _TapDragEndDetailsBinding: typeof _TapDragEndDetailsFactory & (new (options: {
    globalPosition?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    localPosition?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    velocity?: Readonly<{
        "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
    }> | undefined;
    primaryVelocity?: number | null | undefined;
    consecutiveTapCount: number;
}) => _TapDragEndDetailsNative);
export declare const TapDragEndDetails: typeof _TapDragEndDetailsBinding & _FlaxInstanceType<TapDragEndDetails> & _FlaxDartType<TapDragEndDetails, readonly ["class", "flax.core/sdk_gestures#type:TapDragEndDetails", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "globalPosition" | "localPosition" | "velocity" | "primaryVelocity" | "consecutiveTapCount" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragEndDetails" | "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
