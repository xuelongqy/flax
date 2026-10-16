import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigatorState {
    readonly __NavigatorState: unique symbol;
    readonly [_flaxDartMethodCases]?: {
        push: _FlaxSignature0;
        pushNamed: _FlaxSignature1;
        pushReplacement: _FlaxSignature2;
        pop: _FlaxSignature3;
        maybePop: _FlaxSignature4;
    };
    readonly mounted: boolean;
    push<T extends unknown | null = unknown | null>(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>): Promise<_FlaxDartOutput<T> | null>;
    pushNamed<T extends unknown | null = unknown | null>(routeName: string, options?: {
        arguments?: unknown | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    pushReplacement<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }>, options?: {
        result?: (TO | _FlaxDartOutput<TO>) | null | undefined;
    }): Promise<_FlaxDartOutput<T> | null>;
    pop<T extends unknown | null = unknown | null>(result?: (T | _FlaxDartOutput<T>) | null): void;
    maybePop<T extends unknown | null = unknown | null>(result?: (T | _FlaxDartOutput<T>) | null): Promise<boolean>;
    canPop(): boolean;
}
export declare const NavigatorState: object & _FlaxInstanceType<NavigatorState> & _FlaxDartType<NavigatorState, readonly ["class", "flax.core/flutter#type:NavigatorState", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (routeName: string, options?: {
        arguments?: unknown | null | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (newRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }>, options?: {
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => Promise<_Selected0 | null> : never : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (result?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<boolean> : never : never;
}
export {};
