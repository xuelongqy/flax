import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChildBackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChildBackButtonDispatcher';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface BackButtonDispatcher extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
}> {
    readonly __BackButtonDispatcher: unique symbol;
    readonly [_flaxDartTypeValue]: BackButtonDispatcher;
}
export interface BackButtonDispatcher {
    readonly [_flaxDartTypeValue]: BackButtonDispatcher;
    invokeCallback(defaultValue: Promise<boolean>): Promise<boolean>;
    createChildBackButtonDispatcher(): upstream0.ChildBackButtonDispatcher;
    takePriority(): void;
    deferTo(child: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
    }>): void;
    forget(child: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
    }>): void;
    addCallback(callback: (() => Promise<boolean>)): void;
    removeCallback(callback: (() => Promise<boolean>)): void;
    get hasCallbacks(): boolean;
}
export declare abstract class BackButtonDispatcher extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BackButtonDispatcher>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BackButtonDispatcher;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BackButtonDispatcher", readonly [], false];
    constructor();
}
export declare namespace BackButtonDispatcher {
    function implement(args: [], implementation: {}): BackButtonDispatcher;
}
