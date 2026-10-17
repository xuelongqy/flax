import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import '@flax/dart/core/_bindings/flutter_Duration';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollController extends Omit<upstream0.Listenable, typeof _flaxDartTypeValue | "initialScrollOffset" | "keepScrollOffset" | "debugLabel" | "hasClients" | "offset" | "hasListeners" | "addListener" | "removeListener" | "animateTo" | "jumpTo" | "dispose" | "toString" | "debugFillDescription">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> {
    readonly __ScrollController: unique symbol;
    readonly initialScrollOffset: number;
    readonly keepScrollOffset: boolean;
    readonly debugLabel: string | null;
    readonly hasClients: boolean;
    readonly offset: number;
    readonly hasListeners: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    animateTo(offset: number, options: {
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }>;
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }>;
    }): Promise<void>;
    jumpTo(value: number): void;
    dispose(): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
}
export declare function _ScrollControllerFactory(options?: {
    initialScrollOffset?: number | undefined;
    keepScrollOffset?: boolean | undefined;
    debugLabel?: string | null | undefined;
}): ScrollController;
export declare const ScrollController: typeof _ScrollControllerFactory & _FlaxInstanceType<ScrollController> & _FlaxDartType<ScrollController, readonly ["class", "flax.core/flutter#type:ScrollController", readonly [], false]>;
