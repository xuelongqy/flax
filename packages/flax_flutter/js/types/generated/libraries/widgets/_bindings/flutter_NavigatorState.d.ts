import { type NavigationData } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
export interface NavigatorState {
    readonly __NavigatorState: unique symbol;
    readonly mounted: boolean;
    push<T extends NavigationData | null = NavigationData | null>(route: upstream0.Route<T>): Promise<T | null>;
    pushNamed<T extends NavigationData | null = NavigationData | null>(routeName: string, options?: {
        arguments?: NavigationData | null | undefined;
    }): Promise<T | null>;
    pushReplacement<T extends NavigationData | null = NavigationData | null, TO extends NavigationData | null = NavigationData | null>(newRoute: upstream0.Route<T>, options?: {
        result?: TO | null | undefined;
    }): Promise<T | null>;
    pop<T extends NavigationData | null = NavigationData | null>(result?: T | null): void;
    maybePop<T extends NavigationData | null = NavigationData | null>(result?: T | null): Promise<boolean>;
    canPop(): boolean;
}
