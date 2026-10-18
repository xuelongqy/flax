import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GestureArenaEntry extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaEntry": readonly [];
}> {
    readonly __GestureArenaEntry: unique symbol;
    readonly [_flaxDartTypeValue]: GestureArenaEntry;
    resolve(disposition: upstream0.GestureDisposition): void;
}
export declare const GestureArenaEntry: object & _FlaxInstanceType<GestureArenaEntry> & _FlaxDartType<GestureArenaEntry, readonly ["class", "flax.core/sdk_gestures#type:GestureArenaEntry", readonly [], false]>;
