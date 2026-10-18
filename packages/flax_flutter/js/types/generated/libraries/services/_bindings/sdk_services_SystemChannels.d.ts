import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_OptionalMethodChannel';
import '@flax/flutter/services/_bindings/sdk_services_OptionalMethodChannel';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_BasicMessageChannel';
import '@flax/flutter/services/_bindings/sdk_services_BasicMessageChannel';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemChannels extends Readonly<{
    "__flaxBound:package:flutter/src/services/system_channels.dart::SystemChannels": readonly [];
}> {
    readonly __SystemChannels: unique symbol;
    readonly [_flaxDartTypeValue]: SystemChannels;
}
declare const _SystemChannelsFactory: {
    readonly navigation: upstream0.MethodChannel;
    readonly backGesture: upstream0.MethodChannel;
    readonly platform: upstream0.MethodChannel;
    readonly statusBar: upstream1.OptionalMethodChannel;
    readonly processText: upstream0.MethodChannel;
    readonly textInput: upstream0.MethodChannel;
    readonly scribe: upstream0.MethodChannel;
    readonly spellCheck: upstream0.MethodChannel;
    readonly undoManager: upstream0.MethodChannel;
    readonly keyEvent: upstream2.BasicMessageChannel<unknown | null>;
    readonly lifecycle: upstream2.BasicMessageChannel<string | null>;
    readonly system: upstream2.BasicMessageChannel<unknown | null>;
    readonly accessibility: upstream2.BasicMessageChannel<unknown | null>;
    readonly platform_views: upstream0.MethodChannel;
    readonly platform_views_2: upstream0.MethodChannel;
    readonly skia: upstream0.MethodChannel;
    readonly mouseCursor: upstream0.MethodChannel;
    readonly restoration: upstream0.MethodChannel;
    readonly deferredComponent: upstream0.MethodChannel;
    readonly localization: upstream0.MethodChannel;
    readonly menu: upstream0.MethodChannel;
    readonly contextMenu: upstream0.MethodChannel;
    readonly keyboard: upstream0.MethodChannel;
    readonly sensitiveContent: upstream0.MethodChannel;
};
export declare const SystemChannels: typeof _SystemChannelsFactory & _FlaxInstanceType<SystemChannels> & _FlaxDartType<SystemChannels, readonly ["class", "flax.core/sdk_services#type:SystemChannels", readonly [], false]>;
export {};
