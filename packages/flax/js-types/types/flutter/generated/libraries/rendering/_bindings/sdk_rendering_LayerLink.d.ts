import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_LeaderLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LeaderLayer';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface LayerLink extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
}> {
    readonly __LayerLink: unique symbol;
    readonly [_flaxDartTypeValue]: LayerLink;
}
export interface LayerLink {
    readonly [_flaxDartTypeValue]: LayerLink;
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
export declare abstract class LayerLink extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LayerLink>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LayerLink;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:LayerLink", readonly [], false];
    constructor();
}
export declare namespace LayerLink {
    function implement(args: [], implementation: {}): LayerLink;
}
