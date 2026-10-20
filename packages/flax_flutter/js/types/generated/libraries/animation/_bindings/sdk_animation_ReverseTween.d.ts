import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ReverseTween<T extends unknown | null = unknown | null> extends Omit<upstream0.Tween<T>, _flaxOwnMembers0>, Omit<upstream1.Animatable<T>, _flaxOwnMembers0 | keyof upstream0.Tween<T>>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::ReverseTween": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T];
}> {
    readonly __ReverseTween: unique symbol;
    readonly [_flaxDartTypeValue]: ReverseTween<T>;
    get begin(): T | null;
    get end(): T | null;
    readonly parent: upstream0.Tween<T>;
    lerp(t: number): T;
    transform(t: number): T;
    toString(): string;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): T;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream2.Animation<T>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream1.Animatable<T>;
    set begin(value: (T | DartInput<T>) | null);
    set end(value: (T | DartInput<T>) | null);
}
export declare function _ReverseTweenFactory<T extends unknown | null = unknown | null>(parent: Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [_FlaxDartOutput<T>];
}> & Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<T>];
}>): ReverseTween<T>;
export declare function _ReverseTweenFactory(parent: Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null];
}> & Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
}>): ReverseTween<unknown | null>;
export interface _ReverseTweenNative<T extends unknown | null = unknown | null> extends ReverseTween<T> {
    readonly [_flaxDartTypeValue]: _ReverseTweenNative<T>;
    lerp(t: number): T;
    transform(t: number): T;
    toString(): string;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): T;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream2.Animation<T>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream1.Animatable<T>;
    get parent(): upstream0.Tween<T>;
    get begin(): T | null;
    get end(): T | null;
    set begin(value: (T | DartInput<T>) | null);
    set end(value: (T | DartInput<T>) | null);
}
export declare abstract class _ReverseTweenNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ReverseTween<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ReverseTween<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ReverseTween", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
    }>);
}
export declare namespace _ReverseTweenFactory {
    function implement<T extends unknown | null = unknown | null>(args: [parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
    }>], implementation: {}): ReverseTween<T>;
}
declare const _ReverseTweenBinding: typeof _ReverseTweenFactory & (new <T extends unknown | null = unknown | null>(parent: Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null];
}> & Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
}>) => _ReverseTweenNative<T>);
export declare const ReverseTween: typeof _ReverseTweenBinding & _FlaxInstanceType<ReverseTween<unknown | null>> & _FlaxDartType<ReverseTween<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:ReverseTween", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "parent" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween.dart::ReverseTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
    }>) => _ReverseTweenNative<_Selected0>) & {
        (parent: Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [_Selected0];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
        }>): _ReverseTweenNative<_Selected0>;
        readonly prototype: _ReverseTweenNative<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
        }>], implementation: Partial<_ReverseTweenNative<_Selected0>>): _ReverseTweenNative<_Selected0>;
    } & _FlaxInstanceType<_ReverseTweenNative<_Selected0>> & _FlaxDartType<_ReverseTweenNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
    }>) => _ReverseTweenNative<_Selected0>) & {
        (parent: Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [_Selected0];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
        }>): _ReverseTweenNative<_Selected0>;
        readonly prototype: _ReverseTweenNative<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
        }>], implementation: Partial<_ReverseTweenNative<_Selected0>>): _ReverseTweenNative<_Selected0>;
    } & _FlaxInstanceType<_ReverseTweenNative<_Selected0>> & _FlaxDartType<_ReverseTweenNative<_Selected0>> : never : never;
}
export {};
