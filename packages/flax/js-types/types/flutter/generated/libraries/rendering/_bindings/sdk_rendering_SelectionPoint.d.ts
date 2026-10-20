import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionPoint extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SelectionPoint: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionPoint;
    readonly localPosition: upstream1.Offset;
    readonly lineHeight: number;
    readonly handleType: upstream2.TextSelectionHandleType;
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
}
export declare function _SelectionPointFactory(options: {
    localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    lineHeight: number;
    handleType: upstream2.TextSelectionHandleType;
}): SelectionPoint;
export interface _SelectionPointNative extends SelectionPoint {
    readonly [_flaxDartTypeValue]: _SelectionPointNative;
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
    get localPosition(): upstream1.Offset;
    get lineHeight(): number;
    get handleType(): upstream2.TextSelectionHandleType;
}
export declare abstract class _SelectionPointNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectionPoint>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SelectionPoint;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectionPoint", readonly [], false];
    constructor(options: {
        localPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        lineHeight: number;
        handleType: upstream2.TextSelectionHandleType;
    });
}
export declare namespace _SelectionPointFactory {
    function implement(args: [options: {
        localPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        lineHeight: number;
        handleType: upstream2.TextSelectionHandleType;
    }], implementation: {}): SelectionPoint;
}
declare const _SelectionPointBinding: typeof _SelectionPointFactory & (new (options: {
    localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    lineHeight: number;
    handleType: upstream2.TextSelectionHandleType;
}) => _SelectionPointNative);
export declare const SelectionPoint: typeof _SelectionPointBinding & _FlaxInstanceType<SelectionPoint> & _FlaxDartType<SelectionPoint, readonly ["class", "flax.core/sdk_rendering#type:SelectionPoint", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "localPosition" | "lineHeight" | "handleType" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
