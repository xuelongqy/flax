import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FloatingActionButtonAnimator extends Readonly<{
    "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FloatingActionButtonAnimator": readonly [];
}> {
    readonly __FloatingActionButtonAnimator: unique symbol;
    readonly [_flaxDartTypeValue]: FloatingActionButtonAnimator;
}
export interface FloatingActionButtonAnimator {
    readonly [_flaxDartTypeValue]: FloatingActionButtonAnimator;
    getAnimationRestart(previousValue: number): number;
    toString(): string;
}
export declare abstract class FloatingActionButtonAnimator extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FloatingActionButtonAnimator>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FloatingActionButtonAnimator;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:FloatingActionButtonAnimator", readonly [], false];
    constructor();
    abstract getOffset(options: {
        begin: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        end: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        progress: number;
    }): upstream0.Offset;
    abstract getScaleAnimation(options: {
        parent: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>;
    }): upstream1.Animation<number>;
    abstract getRotationAnimation(options: {
        parent: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>;
    }): upstream1.Animation<number>;
}
export declare namespace FloatingActionButtonAnimator {
    function implement(args: [], implementation: {
        getOffset: ((options: {
            begin: upstream0.Offset;
            end: upstream0.Offset;
            progress: number;
        }) => Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>);
        getScaleAnimation: ((options: {
            parent: upstream1.Animation<number>;
        }) => Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>);
        getRotationAnimation: ((options: {
            parent: upstream1.Animation<number>;
        }) => Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>);
    }): FloatingActionButtonAnimator;
}
export declare namespace FloatingActionButtonAnimator {
    const scaling: FloatingActionButtonAnimator;
}
export declare namespace FloatingActionButtonAnimator {
    const noAnimation: FloatingActionButtonAnimator;
}
