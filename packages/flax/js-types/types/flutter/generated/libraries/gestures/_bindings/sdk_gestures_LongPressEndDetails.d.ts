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
export interface LongPressEndDetails extends Omit<upstream0.PositionedGestureDetails, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PositionedGestureDetails>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressEndDetails": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __LongPressEndDetails: unique symbol;
    readonly [_flaxDartTypeValue]: LongPressEndDetails;
    readonly globalPosition: upstream2.Offset;
    readonly localPosition: upstream2.Offset;
    readonly velocity: upstream3.Velocity;
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
export declare function _LongPressEndDetailsFactory(options?: {
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
}): LongPressEndDetails;
export interface _LongPressEndDetailsNative extends LongPressEndDetails {
    readonly [_flaxDartTypeValue]: _LongPressEndDetailsNative;
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
}
export declare abstract class _LongPressEndDetailsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LongPressEndDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LongPressEndDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:LongPressEndDetails", readonly [], false];
    constructor(options?: {
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
    });
}
export declare namespace _LongPressEndDetailsFactory {
    function implement(args: [options?: {
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
    }], implementation: {}): LongPressEndDetails;
}
declare const _LongPressEndDetailsBinding: typeof _LongPressEndDetailsFactory & (new (options?: {
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
}) => _LongPressEndDetailsNative);
export declare const LongPressEndDetails: typeof _LongPressEndDetailsBinding & _FlaxInstanceType<LongPressEndDetails> & _FlaxDartType<LongPressEndDetails, readonly ["class", "flax.core/sdk_gestures#type:LongPressEndDetails", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "globalPosition" | "localPosition" | "velocity" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressEndDetails" | "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
