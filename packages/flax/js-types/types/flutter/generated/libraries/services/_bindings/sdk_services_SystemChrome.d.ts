import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_DeviceOrientation';
import '@flax/flutter/services/_bindings/sdk_services_DeviceOrientation';
import '@flax/flutter/services/_bindings/sdk_services_ApplicationSwitcherDescription';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_SystemUiMode';
import '@flax/flutter/services/_bindings/sdk_services_SystemUiMode';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_SystemUiOverlay';
import '@flax/flutter/services/_bindings/sdk_services_SystemUiOverlay';
import '@flax/flutter/services/_bindings/sdk_services_SystemUiOverlayStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemChrome extends Readonly<{
    "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemChrome": readonly [];
}> {
    readonly __SystemChrome: unique symbol;
    readonly [_flaxDartTypeValue]: SystemChrome;
}
export declare namespace _SystemChromeFactory {
    function setPreferredOrientations(orientations: DartListInput<upstream0.DeviceOrientation, upstream0.DeviceOrientation>): Promise<void>;
}
export declare namespace _SystemChromeFactory {
    function setApplicationSwitcherDescription(description: Readonly<{
        "__flaxBound:package:flutter/src/services/system_chrome.dart::ApplicationSwitcherDescription": readonly [];
    }>): Promise<void>;
}
export declare namespace _SystemChromeFactory {
    function setEnabledSystemUIMode(mode: upstream2.SystemUiMode, options?: {
        overlays?: DartListInput<upstream3.SystemUiOverlay, upstream3.SystemUiOverlay> | null | undefined;
    }): Promise<void>;
}
export declare namespace _SystemChromeFactory {
    function setSystemUIChangeCallback(callback: ((systemOverlaysAreVisible: boolean) => Promise<void>) | null): Promise<void>;
}
export declare namespace _SystemChromeFactory {
    function restoreSystemUIOverlays(): Promise<void>;
}
export declare namespace _SystemChromeFactory {
    function setSystemUIOverlayStyle(style: Readonly<{
        "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlayStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
}
export declare namespace _SystemChromeFactory {
    function handleAppLifecycleStateChanged(state: upstream5.AppLifecycleState): void;
}
export declare const SystemChrome: typeof _SystemChromeFactory & _FlaxInstanceType<SystemChrome> & _FlaxDartType<SystemChrome, readonly ["class", "flax.core/sdk_services#type:SystemChrome", readonly [], false]>;
