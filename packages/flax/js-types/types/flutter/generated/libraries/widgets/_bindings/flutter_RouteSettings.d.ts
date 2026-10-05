import { type NavigationData } from '@flax/core/bindings';
export interface RouteSettings extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
}> {
    readonly __RouteSettings: unique symbol;
    readonly name: string | null;
    readonly arguments: NavigationData | null;
}
export declare function RouteSettings(options?: {
    name?: string | null | undefined;
    arguments?: NavigationData | null | undefined;
}): RouteSettings;
