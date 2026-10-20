import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OverlayPortalController extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortalController": readonly [];
}> {
    readonly __OverlayPortalController: unique symbol;
    readonly [_flaxDartTypeValue]: OverlayPortalController;
    readonly isShowing: boolean;
    show(): void;
    hide(): void;
    toggle(): void;
    toString(): string;
}
export declare function _OverlayPortalControllerFactory(options?: {
    debugLabel?: string | null | undefined;
}): OverlayPortalController;
export interface _OverlayPortalControllerNative extends OverlayPortalController {
    readonly [_flaxDartTypeValue]: _OverlayPortalControllerNative;
    show(): void;
    hide(): void;
    toggle(): void;
    toString(): string;
    get isShowing(): boolean;
}
export declare abstract class _OverlayPortalControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverlayPortalController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OverlayPortalController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:OverlayPortalController", readonly [], false];
    constructor(options?: {
        debugLabel?: string | null | undefined;
    });
}
export declare namespace _OverlayPortalControllerFactory {
    function implement(args: [options?: {
        debugLabel?: string | null | undefined;
    }], implementation: {}): OverlayPortalController;
}
declare const _OverlayPortalControllerBinding: typeof _OverlayPortalControllerFactory & (new (options?: {
    debugLabel?: string | null | undefined;
}) => _OverlayPortalControllerNative);
export declare const OverlayPortalController: typeof _OverlayPortalControllerBinding & _FlaxInstanceType<OverlayPortalController> & _FlaxDartType<OverlayPortalController, readonly ["class", "flax.core/sdk_widgets#type:OverlayPortalController", readonly [], false]>;
export {};
