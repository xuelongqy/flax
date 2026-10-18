import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface VisualDensity extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __VisualDensity: unique symbol;
    readonly [_flaxDartTypeValue]: VisualDensity;
}
export interface VisualDensity {
    readonly [_flaxDartTypeValue]: VisualDensity;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        horizontal?: number | null | undefined;
        vertical?: number | null | undefined;
    }): VisualDensity;
    effectiveConstraints(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream7.BoxConstraints;
    get horizontal(): number;
    get vertical(): number;
    get baseSizeAdjustment(): upstream1.Offset;
}
export declare abstract class VisualDensity extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VisualDensity>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: VisualDensity;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:VisualDensity", readonly [], false];
    constructor(options?: {
        horizontal?: number | undefined;
        vertical?: number | undefined;
    });
}
export declare namespace VisualDensity {
    function implement(args: [options?: {
        horizontal?: number | undefined;
        vertical?: number | undefined;
    }], implementation: {}): VisualDensity;
}
export declare namespace VisualDensity {
    const minimumDensity: number;
}
export declare namespace VisualDensity {
    const maximumDensity: number;
}
export declare namespace VisualDensity {
    const standard: VisualDensity;
}
export declare namespace VisualDensity {
    const comfortable: VisualDensity;
}
export declare namespace VisualDensity {
    const compact: VisualDensity;
}
export declare namespace VisualDensity {
    const adaptivePlatformDensity: VisualDensity;
}
export declare namespace VisualDensity {
    function defaultDensityForPlatform(platform: upstream2.TargetPlatform): VisualDensity;
}
export declare namespace VisualDensity {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, t: number): VisualDensity;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "horizontal" | "vertical" | "baseSizeAdjustment" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "effectiveConstraints" | "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
