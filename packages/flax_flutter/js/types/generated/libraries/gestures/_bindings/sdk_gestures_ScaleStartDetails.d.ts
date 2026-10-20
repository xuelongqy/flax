import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScaleStartDetails extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleStartDetails": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ScaleStartDetails: unique symbol;
    readonly [_flaxDartTypeValue]: ScaleStartDetails;
    readonly focalPoint: upstream1.Offset;
    readonly localFocalPoint: upstream1.Offset;
    readonly pointerCount: number;
    readonly sourceTimeStamp: upstream2.Duration | null;
    readonly kind: upstream3.PointerDeviceKind | null;
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
export declare function _ScaleStartDetailsFactory(options?: {
    focalPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    localFocalPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    pointerCount?: number | undefined;
    sourceTimeStamp?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
    }>) | null | undefined;
    kind?: upstream3.PointerDeviceKind | null | undefined;
}): ScaleStartDetails;
export interface _ScaleStartDetailsNative extends ScaleStartDetails {
    readonly [_flaxDartTypeValue]: _ScaleStartDetailsNative;
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
    get focalPoint(): upstream1.Offset;
    get localFocalPoint(): upstream1.Offset;
    get pointerCount(): number;
    get sourceTimeStamp(): upstream2.Duration | null;
    get kind(): upstream3.PointerDeviceKind | null;
}
export declare abstract class _ScaleStartDetailsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScaleStartDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScaleStartDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:ScaleStartDetails", readonly [], false];
    constructor(options?: {
        focalPoint?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        localFocalPoint?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        pointerCount?: number | undefined;
        sourceTimeStamp?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
        }>) | null | undefined;
        kind?: upstream3.PointerDeviceKind | null | undefined;
    });
}
export declare namespace _ScaleStartDetailsFactory {
    function implement(args: [options?: {
        focalPoint?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        localFocalPoint?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        pointerCount?: number | undefined;
        sourceTimeStamp?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
        }>) | null | undefined;
        kind?: upstream3.PointerDeviceKind | null | undefined;
    }], implementation: {}): ScaleStartDetails;
}
declare const _ScaleStartDetailsBinding: typeof _ScaleStartDetailsFactory & (new (options?: {
    focalPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    localFocalPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    pointerCount?: number | undefined;
    sourceTimeStamp?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
    }>) | null | undefined;
    kind?: upstream3.PointerDeviceKind | null | undefined;
}) => _ScaleStartDetailsNative);
export declare const ScaleStartDetails: typeof _ScaleStartDetailsBinding & _FlaxInstanceType<ScaleStartDetails> & _FlaxDartType<ScaleStartDetails, readonly ["class", "flax.core/sdk_gestures#type:ScaleStartDetails", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "focalPoint" | "localFocalPoint" | "pointerCount" | "sourceTimeStamp" | "kind" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleStartDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
