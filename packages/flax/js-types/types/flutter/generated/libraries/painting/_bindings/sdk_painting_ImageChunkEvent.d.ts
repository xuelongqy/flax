import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageChunkEvent extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ImageChunkEvent: unique symbol;
    readonly [_flaxDartTypeValue]: ImageChunkEvent;
    readonly cumulativeBytesLoaded: number;
    readonly expectedTotalBytes: number | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
}
export declare function _ImageChunkEventFactory(options: {
    cumulativeBytesLoaded: number;
    expectedTotalBytes: number | null;
}): ImageChunkEvent;
export interface _ImageChunkEventNative extends ImageChunkEvent {
    readonly [_flaxDartTypeValue]: _ImageChunkEventNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    get cumulativeBytesLoaded(): number;
    get expectedTotalBytes(): number | null;
}
export declare abstract class _ImageChunkEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageChunkEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageChunkEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageChunkEvent", readonly [], false];
    constructor(options: {
        cumulativeBytesLoaded: number;
        expectedTotalBytes: number | null;
    });
}
export declare namespace _ImageChunkEventFactory {
    function implement(args: [options: {
        cumulativeBytesLoaded: number;
        expectedTotalBytes: number | null;
    }], implementation: {}): ImageChunkEvent;
}
declare const _ImageChunkEventBinding: typeof _ImageChunkEventFactory & (new (options: {
    cumulativeBytesLoaded: number;
    expectedTotalBytes: number | null;
}) => _ImageChunkEventNative);
export declare const ImageChunkEvent: typeof _ImageChunkEventBinding & _FlaxInstanceType<ImageChunkEvent> & _FlaxDartType<ImageChunkEvent, readonly ["class", "flax.core/sdk_painting#type:ImageChunkEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "cumulativeBytesLoaded" | "expectedTotalBytes" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
