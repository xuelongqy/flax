import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DefaultPlatformMenuDelegate extends Omit<upstream0.PlatformMenuDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::DefaultPlatformMenuDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [];
}> {
    readonly __DefaultPlatformMenuDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: DefaultPlatformMenuDelegate;
}
export interface DefaultPlatformMenuDelegate {
    readonly [_flaxDartTypeValue]: DefaultPlatformMenuDelegate;
    setMenus(topLevelMenus: DartListInput<upstream2.PlatformMenuItem, Readonly<{
        "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): void;
    clearMenus(): void;
    debugLockDelegate(context: upstream3.BuildContext): boolean;
    debugUnlockDelegate(context: upstream3.BuildContext): boolean;
    get channel(): upstream1.MethodChannel;
}
export declare abstract class DefaultPlatformMenuDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultPlatformMenuDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DefaultPlatformMenuDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", readonly [], false];
    constructor(options?: {
        channel?: Readonly<{
            "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [];
        }> | null | undefined;
    });
}
export declare namespace DefaultPlatformMenuDelegate {
    function implement(args: [options?: {
        channel?: Readonly<{
            "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [];
        }> | null | undefined;
    }], implementation: {}): DefaultPlatformMenuDelegate;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "channel" | "setMenus" | "clearMenus" | "debugLockDelegate" | "debugUnlockDelegate" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::DefaultPlatformMenuDelegate" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate";
export {};
