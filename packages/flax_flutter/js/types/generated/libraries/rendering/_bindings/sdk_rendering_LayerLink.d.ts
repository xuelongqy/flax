import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_LeaderLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LeaderLayer';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LayerLink extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
}> {
    readonly __LayerLink: unique symbol;
    readonly [_flaxDartTypeValue]: LayerLink;
    readonly leader: upstream0.LeaderLayer | null;
    get leaderSize(): upstream1.Size | null;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    set leaderSize(value: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null);
}
export declare function _LayerLinkFactory(): LayerLink;
export interface _LayerLinkNative extends LayerLink {
    readonly [_flaxDartTypeValue]: _LayerLinkNative;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    get leader(): upstream0.LeaderLayer | null;
    get leaderSize(): upstream1.Size | null;
    set leaderSize(value: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null);
}
export declare abstract class _LayerLinkNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LayerLink>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LayerLink;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:LayerLink", readonly [], false];
    constructor();
}
export declare namespace _LayerLinkFactory {
    function implement(args: [], implementation: {}): LayerLink;
}
declare const _LayerLinkBinding: typeof _LayerLinkFactory & (new () => _LayerLinkNative);
export declare const LayerLink: typeof _LayerLinkBinding & _FlaxInstanceType<LayerLink> & _FlaxDartType<LayerLink, readonly ["class", "flax.core/sdk_rendering#type:LayerLink", readonly [], false]>;
export {};
