import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlatformMenuDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [];
}> {
    readonly __PlatformMenuDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformMenuDelegate;
    setMenus(topLevelMenus: DartListInput<upstream0.PlatformMenuItem, Readonly<{
        "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): void;
    clearMenus(): void;
    debugLockDelegate(context: upstream1.BuildContext): boolean;
    debugUnlockDelegate(context: upstream1.BuildContext): boolean;
}
export declare namespace _PlatformMenuDelegateFactory {
    function implement(args: [], implementation: {
        setMenus: ((topLevelMenus: DartList<upstream0.PlatformMenuItem>) => void);
        clearMenus: (() => void);
        debugLockDelegate: ((context: upstream1.BuildContext) => boolean);
        debugUnlockDelegate: ((context: upstream1.BuildContext) => boolean);
    }): PlatformMenuDelegate;
}
export declare const PlatformMenuDelegate: typeof _PlatformMenuDelegateFactory & _FlaxInstanceType<PlatformMenuDelegate> & _FlaxDartType<PlatformMenuDelegate, readonly ["class", "flax.core/sdk_widgets#type:PlatformMenuDelegate", readonly [], false]>;
