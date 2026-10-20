import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MenuController extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
}> {
    readonly __MenuController: unique symbol;
    readonly [_flaxDartTypeValue]: MenuController;
    readonly isOpen: boolean;
    open(options?: {
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }): void;
    close(): void;
    closeChildren(): void;
    toString(): string;
}
export declare function _MenuControllerFactory(): MenuController;
export interface _MenuControllerNative extends MenuController {
    readonly [_flaxDartTypeValue]: _MenuControllerNative;
    open(options?: {
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }): void;
    close(): void;
    closeChildren(): void;
    toString(): string;
    get isOpen(): boolean;
}
export declare abstract class _MenuControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MenuController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MenuController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MenuController", readonly [], false];
    constructor();
}
export declare namespace _MenuControllerFactory {
    function implement(args: [], implementation: {}): MenuController;
}
declare const _MenuControllerBinding: typeof _MenuControllerFactory & (new () => _MenuControllerNative);
export declare namespace _MenuControllerFactory {
    function maybeOf(context: upstream0.BuildContext): MenuController | null;
}
export declare namespace _MenuControllerFactory {
    function maybeIsOpenOf(context: upstream0.BuildContext): boolean | null;
}
export declare const MenuController: typeof _MenuControllerBinding & _FlaxInstanceType<MenuController> & _FlaxDartType<MenuController, readonly ["class", "flax.core/sdk_widgets#type:MenuController", readonly [], false]>;
export {};
