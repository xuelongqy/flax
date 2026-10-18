import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ExpansibleController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/expansible.dart::ExpansibleController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __ExpansibleController: unique symbol;
    readonly [_flaxDartTypeValue]: ExpansibleController;
}
export interface ExpansibleController {
    readonly [_flaxDartTypeValue]: ExpansibleController;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    expand(): void;
    collapse(): void;
    toggle(): void;
    get isExpanded(): boolean;
    get hasListeners(): boolean;
}
export declare abstract class ExpansibleController extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExpansibleController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ExpansibleController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ExpansibleController", readonly [], false];
    constructor();
}
export declare namespace ExpansibleController {
    function implement(args: [], implementation: {}): ExpansibleController;
}
export declare namespace ExpansibleController {
    function of(context: upstream2.BuildContext): ExpansibleController;
}
export declare namespace ExpansibleController {
    function maybeOf(context: upstream2.BuildContext): ExpansibleController | null;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "isExpanded" | "addListener" | "removeListener" | "dispose" | "expand" | "collapse" | "toggle" | "__flaxBound:package:flutter/src/widgets/expansible.dart::ExpansibleController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
