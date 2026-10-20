import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GestureArenaManager extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaManager": readonly [];
}> {
    readonly __GestureArenaManager: unique symbol;
    readonly [_flaxDartTypeValue]: GestureArenaManager;
    add(pointer: number, member: Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }>): upstream0.GestureArenaEntry;
    close(pointer: number): void;
    sweep(pointer: number): void;
    hold(pointer: number): void;
    release(pointer: number): void;
}
export declare function _GestureArenaManagerFactory(): GestureArenaManager;
export interface _GestureArenaManagerNative extends GestureArenaManager {
    readonly [_flaxDartTypeValue]: _GestureArenaManagerNative;
    add(pointer: number, member: Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }>): upstream0.GestureArenaEntry;
    close(pointer: number): void;
    sweep(pointer: number): void;
    hold(pointer: number): void;
    release(pointer: number): void;
}
export declare abstract class _GestureArenaManagerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureArenaManager>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GestureArenaManager;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:GestureArenaManager", readonly [], false];
    constructor();
}
export declare namespace _GestureArenaManagerFactory {
    function implement(args: [], implementation: {}): GestureArenaManager;
}
declare const _GestureArenaManagerBinding: typeof _GestureArenaManagerFactory & (new () => _GestureArenaManagerNative);
export declare const GestureArenaManager: typeof _GestureArenaManagerBinding & _FlaxInstanceType<GestureArenaManager> & _FlaxDartType<GestureArenaManager, readonly ["class", "flax.core/sdk_gestures#type:GestureArenaManager", readonly [], false]>;
export {};
