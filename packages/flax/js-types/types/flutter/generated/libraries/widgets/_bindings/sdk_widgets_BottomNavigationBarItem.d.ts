import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface BottomNavigationBarItem extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/bottom_navigation_bar_item.dart::BottomNavigationBarItem": readonly [];
}> {
    readonly __BottomNavigationBarItem: unique symbol;
    readonly [_flaxDartTypeValue]: BottomNavigationBarItem;
}
export interface BottomNavigationBarItem {
    readonly [_flaxDartTypeValue]: BottomNavigationBarItem;
    get key(): upstream0.Key | null;
    get icon(): Widget;
    get activeIcon(): Widget;
    get label(): string | null;
    get backgroundColor(): upstream1.Color | null;
    get tooltip(): string | null;
    get semanticsLabel(): string | null;
}
export declare abstract class BottomNavigationBarItem extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BottomNavigationBarItem>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BottomNavigationBarItem;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BottomNavigationBarItem", readonly [], false];
    constructor(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        icon: Widget;
        label?: string | null | undefined;
        activeIcon?: Widget | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tooltip?: string | null | undefined;
        semanticsLabel?: string | null | undefined;
    });
}
export declare namespace BottomNavigationBarItem {
    function implement(args: [options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        icon: Widget;
        label?: string | null | undefined;
        activeIcon?: Widget | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tooltip?: string | null | undefined;
        semanticsLabel?: string | null | undefined;
    }], implementation: {}): BottomNavigationBarItem;
}
