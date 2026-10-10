import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import '@flax/dart/core/_bindings/flutter_Duration';
export interface ScrollController extends upstream0.Listenable, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> {
    readonly __ScrollController: unique symbol;
    readonly hasClients: boolean;
    readonly offset: number;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    jumpTo(value: number): void;
    animateTo(offset: number, options: {
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }>;
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }>;
    }): Promise<void>;
    dispose(): void;
}
declare function _ScrollControllerFactory(options?: {
    initialScrollOffset?: number | undefined;
    keepScrollOffset?: boolean | undefined;
    debugLabel?: string | null | undefined;
}): ScrollController;
export declare const ScrollController: typeof _ScrollControllerFactory & _FlaxInstanceType<ScrollController>;
export {};
