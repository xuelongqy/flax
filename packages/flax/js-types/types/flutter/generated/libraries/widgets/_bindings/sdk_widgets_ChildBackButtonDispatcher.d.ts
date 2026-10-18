import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ChildBackButtonDispatcher extends Omit<upstream0.BackButtonDispatcher, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
}> {
    readonly __ChildBackButtonDispatcher: unique symbol;
    readonly [_flaxDartTypeValue]: ChildBackButtonDispatcher;
}
export interface ChildBackButtonDispatcher {
    readonly [_flaxDartTypeValue]: ChildBackButtonDispatcher;
    invokeCallback(defaultValue: Promise<boolean>): Promise<boolean>;
    createChildBackButtonDispatcher(): ChildBackButtonDispatcher;
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
    notifiedByParent(defaultValue: Promise<boolean>): Promise<boolean>;
    get parent(): upstream0.BackButtonDispatcher;
    get hasCallbacks(): boolean;
}
export declare abstract class ChildBackButtonDispatcher extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChildBackButtonDispatcher>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ChildBackButtonDispatcher;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ChildBackButtonDispatcher", readonly [], false];
    constructor(parent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
    }>);
}
export declare namespace ChildBackButtonDispatcher {
    function implement(args: [parent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
    }>], implementation: {}): ChildBackButtonDispatcher;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasCallbacks" | "parent" | "invokeCallback" | "createChildBackButtonDispatcher" | "takePriority" | "deferTo" | "forget" | "addCallback" | "removeCallback" | "notifiedByParent" | "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider";
export {};
