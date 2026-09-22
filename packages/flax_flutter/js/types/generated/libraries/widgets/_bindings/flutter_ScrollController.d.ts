import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Curve';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
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
        curve: upstream1.Curve;
        duration: upstream2.Duration;
    }): Promise<void>;
    dispose(): void;
}
export declare function ScrollController(options?: {
    initialScrollOffset?: number | undefined;
    keepScrollOffset?: boolean | undefined;
    debugLabel?: string | null | undefined;
}): ScrollController;
