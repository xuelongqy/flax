import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Animation<T extends unknown | null = unknown | null> extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Omit<upstream1.ValueListenable<T>, _flaxOwnMembers0 | keyof upstream0.Listenable>, Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T];
}> {
    readonly __Animation: unique symbol;
    readonly [_flaxDartTypeValue]: Animation<T>;
    readonly [_flaxDartMethodCases]?: {
        drive: _FlaxSignature1<T>;
    };
}
export interface Animation<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: Animation<T>;
    readonly [_flaxDartMethodCases]?: {
        drive: _FlaxSignature2<T>;
    };
    drive<U extends unknown | null = unknown | null>(child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>];
    }>): Animation<_FlaxDartOutput<U>>;
    toString(): string;
    toStringDetails(): string;
    get isDismissed(): boolean;
    get isCompleted(): boolean;
    get isAnimating(): boolean;
    get isForwardOrCompleted(): boolean;
}
export declare abstract class Animation<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Animation<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Animation<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Animation", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature3;
    constructor();
    abstract addListener(listener: (() => void)): void;
    abstract removeListener(listener: (() => void)): void;
    abstract addStatusListener(listener: ((status: upstream2.AnimationStatus) => void)): void;
    abstract removeStatusListener(listener: ((status: upstream2.AnimationStatus) => void)): void;
    abstract get status(): upstream2.AnimationStatus;
    abstract get value(): T;
}
export declare namespace Animation {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        addListener: ((listener: (() => void)) => void);
        removeListener: ((listener: (() => void)) => void);
        addStatusListener: ((listener: ((status: upstream2.AnimationStatus) => void)) => void);
        removeStatusListener: ((listener: ((status: upstream2.AnimationStatus) => void)) => void);
        get status(): upstream2.AnimationStatus;
        get value(): (T | DartInput<T>);
    }): Animation<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "status" | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "addListener" | "removeListener" | "addStatusListener" | "removeStatusListener" | "drive" | "toString" | "toStringDetails" | "__flaxBound:package:flutter/src/animation/animation.dart::Animation" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
interface _FlaxSignature1<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
    }>) => Animation<_Selected0> : never : never;
}
interface _FlaxSignature2<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0];
    }>) => Animation<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => Animation<_Selected0>) & {
        readonly prototype: Animation<_Selected0>;
        implement(args: readonly [], implementation: Partial<Animation<_Selected0>>): Animation<_Selected0>;
    } & _FlaxInstanceType<Animation<_Selected0>> & _FlaxDartType<Animation<_Selected0>> : never : never;
}
export {};
