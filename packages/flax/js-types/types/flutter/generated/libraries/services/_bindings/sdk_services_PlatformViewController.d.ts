import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Size';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PlatformViewController extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewController": readonly [];
}> {
    readonly __PlatformViewController: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformViewController;
}
export interface PlatformViewController {
    readonly [_flaxDartTypeValue]: PlatformViewController;
    create(options?: {
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }): Promise<void>;
    get awaitingCreation(): boolean;
}
export declare abstract class PlatformViewController extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformViewController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PlatformViewController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:PlatformViewController", readonly [], false];
    constructor();
    abstract dispatchPointerEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): Promise<void>;
    abstract dispose(): Promise<void>;
    abstract clearFocus(): Promise<void>;
    abstract get viewId(): number;
}
export declare namespace PlatformViewController {
    function implement(args: [], implementation: {
        dispatchPointerEvent: ((event: upstream0.PointerEvent) => Promise<void>);
        dispose: (() => Promise<void>);
        clearFocus: (() => Promise<void>);
        get viewId(): number;
    }): PlatformViewController;
}
