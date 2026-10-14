import { type FlaxInstanceType as _FlaxInstanceType, type NavigationData, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
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
    push<T extends NavigationData | null = NavigationData | null>(route: upstream0.Route<(T | DartInput<T>)>): Promise<T | null>;
    pushNamed<T extends NavigationData | null = NavigationData | null>(routeName: string, options?: {
        arguments?: NavigationData | null | undefined;
    }): Promise<T | null>;
    pushReplacement<T extends NavigationData | null = NavigationData | null, TO extends NavigationData | null = NavigationData | null>(newRoute: upstream0.Route<(T | DartInput<T>)>, options?: {
        result?: (TO | DartInput<TO>) | null | undefined;
    }): Promise<T | null>;
    pop<T extends NavigationData | null = NavigationData | null>(result?: (T | DartInput<T>) | null): void;
    maybePop<T extends NavigationData | null = NavigationData | null>(result?: (T | DartInput<T>) | null): Promise<boolean>;
    canPop(): boolean;
}
export declare const NavigatorState: object & _FlaxInstanceType<NavigatorState> & _FlaxDartType<NavigatorState, readonly ["class", "flax.core/flutter#type:NavigatorState", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [NavigationData | null] ? (route: upstream0.Route<(_Selected0 | DartInput<_Selected0>)>) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [NavigationData | null] ? (routeName: string, options?: {
        arguments?: NavigationData | null | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [NavigationData | null] ? [_Selected1] extends [NavigationData | null] ? (newRoute: upstream0.Route<(_Selected0 | DartInput<_Selected0>)>, options?: {
        result?: (_Selected1 | DartInput<_Selected1>) | null | undefined;
    }) => Promise<_Selected0 | null> : never : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [NavigationData | null] ? (result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [NavigationData | null] ? (result?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<boolean> : never : never;
}
export {};
