import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaEntry';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface GestureArenaTeam extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/team.dart::GestureArenaTeam": readonly [];
}> {
    readonly __GestureArenaTeam: unique symbol;
    readonly [_flaxDartTypeValue]: GestureArenaTeam;
}
export interface GestureArenaTeam {
    readonly [_flaxDartTypeValue]: GestureArenaTeam;
    add(pointer: number, member: Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }>): upstream1.GestureArenaEntry;
    get captain(): upstream0.GestureArenaMember | null;
    set captain(value: Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }> | null);
}
export declare abstract class GestureArenaTeam extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureArenaTeam>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GestureArenaTeam;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:GestureArenaTeam", readonly [], false];
    constructor();
}
export declare namespace GestureArenaTeam {
    function implement(args: [], implementation: {}): GestureArenaTeam;
}
