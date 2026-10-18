import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectionDetails';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectionDetails';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionListenerNotifier extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectionListenerNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __SelectionListenerNotifier: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionListenerNotifier;
    readonly hasListeners: boolean;
    readonly selection: upstream2.SelectionDetails;
    readonly registered: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
}
export declare function _SelectionListenerNotifierFactory(): SelectionListenerNotifier;
export declare const SelectionListenerNotifier: typeof _SelectionListenerNotifierFactory & _FlaxInstanceType<SelectionListenerNotifier> & _FlaxDartType<SelectionListenerNotifier, readonly ["class", "flax.core/sdk_widgets#type:SelectionListenerNotifier", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "selection" | "registered" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectionListenerNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
