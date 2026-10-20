import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SnapshotController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __SnapshotController: unique symbol;
    readonly [_flaxDartTypeValue]: SnapshotController;
    readonly hasListeners: boolean;
    get allowSnapshotting(): boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    clear(): void;
    set allowSnapshotting(value: boolean);
}
export declare function _SnapshotControllerFactory(options?: {
    allowSnapshotting?: boolean | undefined;
}): SnapshotController;
export interface _SnapshotControllerNative extends SnapshotController {
    readonly [_flaxDartTypeValue]: _SnapshotControllerNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    clear(): void;
    get allowSnapshotting(): boolean;
    get hasListeners(): boolean;
    set allowSnapshotting(value: boolean);
}
export declare abstract class _SnapshotControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SnapshotController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SnapshotController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SnapshotController", readonly [], false];
    constructor(options?: {
        allowSnapshotting?: boolean | undefined;
    });
}
export declare namespace _SnapshotControllerFactory {
    function implement(args: [options?: {
        allowSnapshotting?: boolean | undefined;
    }], implementation: {}): SnapshotController;
}
declare const _SnapshotControllerBinding: typeof _SnapshotControllerFactory & (new (options?: {
    allowSnapshotting?: boolean | undefined;
}) => _SnapshotControllerNative);
export declare const SnapshotController: typeof _SnapshotControllerBinding & _FlaxInstanceType<SnapshotController> & _FlaxDartType<SnapshotController, readonly ["class", "flax.core/sdk_widgets#type:SnapshotController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "allowSnapshotting" | "addListener" | "removeListener" | "dispose" | "clear" | "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
