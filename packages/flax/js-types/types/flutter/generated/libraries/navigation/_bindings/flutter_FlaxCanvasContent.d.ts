import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlaxCanvasContent extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flax/bindings.dart::FlaxCanvasContent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __FlaxCanvasContent: unique symbol;
    readonly [_flaxDartTypeValue]: FlaxCanvasContent;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
}
export declare const FlaxCanvasContent: object & _FlaxInstanceType<FlaxCanvasContent> & _FlaxDartType<FlaxCanvasContent, readonly ["class", "flax.core/flutter#type:FlaxCanvasContent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "addListener" | "removeListener" | "__flaxBound:package:flax/bindings.dart::FlaxCanvasContent" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
