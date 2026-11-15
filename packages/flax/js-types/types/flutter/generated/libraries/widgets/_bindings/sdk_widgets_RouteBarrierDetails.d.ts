import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RouteBarrierDetails extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::RouteBarrierDetails": readonly [];
}> {
    readonly __RouteBarrierDetails: unique symbol;
    readonly [_flaxDartTypeValue]: RouteBarrierDetails;
    readonly animation: upstream0.Animation<number>;
    readonly barrierColor: upstream1.Color | null;
    readonly barrierLabel: string | null;
    readonly barrierDismissible: boolean;
}
export declare function _RouteBarrierDetailsFactory(options: {
    animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:listen/src/listen.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:listen/src/listen.dart::ValueListenable": readonly [number];
    }>;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierLabel?: string | null | undefined;
    barrierDismissible: boolean;
}): RouteBarrierDetails;
export interface _RouteBarrierDetailsNative extends RouteBarrierDetails {
    readonly [_flaxDartTypeValue]: _RouteBarrierDetailsNative;
    get animation(): upstream0.Animation<number>;
    get barrierColor(): upstream1.Color | null;
    get barrierLabel(): string | null;
    get barrierDismissible(): boolean;
}
export declare abstract class _RouteBarrierDetailsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteBarrierDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RouteBarrierDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteBarrierDetails", readonly [], false];
    constructor(options: {
        animation: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:listen/src/listen.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:listen/src/listen.dart::ValueListenable": readonly [number];
        }>;
        barrierColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        barrierLabel?: string | null | undefined;
        barrierDismissible: boolean;
    });
}
export declare namespace _RouteBarrierDetailsFactory {
    function implement(args: [options: {
        animation: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:listen/src/listen.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:listen/src/listen.dart::ValueListenable": readonly [number];
        }>;
        barrierColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        barrierLabel?: string | null | undefined;
        barrierDismissible: boolean;
    }], implementation: {}): RouteBarrierDetails;
}
declare const _RouteBarrierDetailsBinding: typeof _RouteBarrierDetailsFactory & (new (options: {
    animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:listen/src/listen.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:listen/src/listen.dart::ValueListenable": readonly [number];
    }>;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierLabel?: string | null | undefined;
    barrierDismissible: boolean;
}) => _RouteBarrierDetailsNative);
export declare const RouteBarrierDetails: typeof _RouteBarrierDetailsBinding & _FlaxInstanceType<RouteBarrierDetails> & _FlaxDartType<RouteBarrierDetails, readonly ["class", "flax.core/sdk_widgets#type:RouteBarrierDetails", readonly [], false]>;
export {};
