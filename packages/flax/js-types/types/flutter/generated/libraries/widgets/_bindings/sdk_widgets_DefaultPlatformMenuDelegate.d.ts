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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DefaultPlatformMenuDelegate extends Omit<upstream0.PlatformMenuDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::DefaultPlatformMenuDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [];
}> {
    readonly __DefaultPlatformMenuDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: DefaultPlatformMenuDelegate;
    readonly channel: upstream1.MethodChannel;
    setMenus(topLevelMenus: DartListInput<upstream2.PlatformMenuItem, Readonly<{
        "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): void;
    clearMenus(): void;
    debugLockDelegate(context: upstream3.BuildContext): boolean;
    debugUnlockDelegate(context: upstream3.BuildContext): boolean;
}
export declare function _DefaultPlatformMenuDelegateFactory(options?: {
    channel?: Readonly<{
        "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [];
    }> | null | undefined;
}): DefaultPlatformMenuDelegate;
export interface _DefaultPlatformMenuDelegateNative extends DefaultPlatformMenuDelegate {
    readonly [_flaxDartTypeValue]: _DefaultPlatformMenuDelegateNative;
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
export declare abstract class _DefaultPlatformMenuDelegateNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultPlatformMenuDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DefaultPlatformMenuDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", readonly [], false];
    constructor(options?: {
        channel?: Readonly<{
            "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _DefaultPlatformMenuDelegateFactory {
    function implement(args: [options?: {
        channel?: Readonly<{
            "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [];
        }> | null | undefined;
    }], implementation: {}): DefaultPlatformMenuDelegate;
}
declare const _DefaultPlatformMenuDelegateBinding: typeof _DefaultPlatformMenuDelegateFactory & (new (options?: {
    channel?: Readonly<{
        "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [];
    }> | null | undefined;
}) => _DefaultPlatformMenuDelegateNative);
export declare const DefaultPlatformMenuDelegate: typeof _DefaultPlatformMenuDelegateBinding & _FlaxInstanceType<DefaultPlatformMenuDelegate> & _FlaxDartType<DefaultPlatformMenuDelegate, readonly ["class", "flax.core/sdk_widgets#type:DefaultPlatformMenuDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "channel" | "setMenus" | "clearMenus" | "debugLockDelegate" | "debugUnlockDelegate" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::DefaultPlatformMenuDelegate" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate";
export {};
