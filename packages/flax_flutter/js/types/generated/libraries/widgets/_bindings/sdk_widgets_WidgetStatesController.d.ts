import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface WidgetStatesController extends Omit<upstream0.ValueNotifier<DartSet<upstream1.WidgetState>>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<DartSet<upstream1.WidgetState>>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<DartSet<upstream1.WidgetState>> | keyof upstream2.ChangeNotifier>, Omit<upstream4.ValueListenable<DartSet<upstream1.WidgetState>>, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<DartSet<upstream1.WidgetState>> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream1.WidgetState>];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream1.WidgetState>];
}> {
    readonly __WidgetStatesController: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetStatesController;
}
export interface WidgetStatesController {
    readonly [_flaxDartTypeValue]: WidgetStatesController;
    toString(): string;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    update(state: upstream1.WidgetState, add: boolean): void;
    get value(): DartSet<upstream1.WidgetState>;
    get hasListeners(): boolean;
    set value(value: DartSetInput<upstream1.WidgetState, upstream1.WidgetState>);
}
export declare abstract class WidgetStatesController extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStatesController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStatesController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStatesController", readonly [], false];
    constructor(value?: DartSetInput<upstream1.WidgetState, upstream1.WidgetState> | null);
}
export declare namespace WidgetStatesController {
    function implement(args: [value?: DartSetInput<upstream1.WidgetState, upstream1.WidgetState> | null], implementation: {}): WidgetStatesController;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "toString" | "addListener" | "removeListener" | "dispose" | "update" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
export {};
