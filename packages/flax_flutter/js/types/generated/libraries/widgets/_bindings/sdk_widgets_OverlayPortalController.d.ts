import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface OverlayPortalController extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortalController": readonly [];
}> {
    readonly __OverlayPortalController: unique symbol;
    readonly [_flaxDartTypeValue]: OverlayPortalController;
}
export interface OverlayPortalController {
    readonly [_flaxDartTypeValue]: OverlayPortalController;
    show(): void;
    hide(): void;
    toggle(): void;
    toString(): string;
    get isShowing(): boolean;
}
export declare abstract class OverlayPortalController extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverlayPortalController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OverlayPortalController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:OverlayPortalController", readonly [], false];
    constructor(options?: {
        debugLabel?: string | null | undefined;
    });
}
export declare namespace OverlayPortalController {
    function implement(args: [options?: {
        debugLabel?: string | null | undefined;
    }], implementation: {}): OverlayPortalController;
}
