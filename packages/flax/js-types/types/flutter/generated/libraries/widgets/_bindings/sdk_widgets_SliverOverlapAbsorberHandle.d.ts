import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverOverlapAbsorberHandle extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/nested_scroll_view.dart::SliverOverlapAbsorberHandle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __SliverOverlapAbsorberHandle: unique symbol;
    readonly [_flaxDartTypeValue]: SliverOverlapAbsorberHandle;
}
export interface SliverOverlapAbsorberHandle {
    readonly [_flaxDartTypeValue]: SliverOverlapAbsorberHandle;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    toString(): string;
    get layoutExtent(): number | null;
    get scrollExtent(): number | null;
    get hasListeners(): boolean;
}
export declare abstract class SliverOverlapAbsorberHandle extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverOverlapAbsorberHandle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverOverlapAbsorberHandle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", readonly [], false];
    constructor();
}
export declare namespace SliverOverlapAbsorberHandle {
    function implement(args: [], implementation: {}): SliverOverlapAbsorberHandle;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "layoutExtent" | "scrollExtent" | "addListener" | "removeListener" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/nested_scroll_view.dart::SliverOverlapAbsorberHandle" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
