import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/core/navigation/_bindings/flutter_FlaxCanvasContent';
import '@flax/core/navigation/_bindings/flutter_FlaxCanvasContent';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlaxCanvasTarget extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Omit<upstream2.FlaxCanvasContent, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier | keyof upstream1.Listenable>, Readonly<{
    "__flaxBound:package:flax/bindings.dart::FlaxCanvasTarget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flax/bindings.dart::FlaxCanvasContent": readonly [];
}> {
    readonly __FlaxCanvasTarget: unique symbol;
    readonly [_flaxDartTypeValue]: FlaxCanvasTarget;
    readonly hasListeners: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
}
export declare const FlaxCanvasTarget: object & _FlaxInstanceType<FlaxCanvasTarget> & _FlaxDartType<FlaxCanvasTarget, readonly ["class", "flax.core/flutter#type:FlaxCanvasTarget", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flax/bindings.dart::FlaxCanvasTarget" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flax/bindings.dart::FlaxCanvasContent";
export {};
