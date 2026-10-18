import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface GestureArenaManager extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaManager": readonly [];
}> {
    readonly __GestureArenaManager: unique symbol;
    readonly [_flaxDartTypeValue]: GestureArenaManager;
}
export interface GestureArenaManager {
    readonly [_flaxDartTypeValue]: GestureArenaManager;
    add(pointer: number, member: Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }>): upstream0.GestureArenaEntry;
    close(pointer: number): void;
    sweep(pointer: number): void;
    hold(pointer: number): void;
    release(pointer: number): void;
}
export declare abstract class GestureArenaManager extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureArenaManager>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GestureArenaManager;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:GestureArenaManager", readonly [], false];
    constructor();
}
export declare namespace GestureArenaManager {
    function implement(args: [], implementation: {}): GestureArenaManager;
}
