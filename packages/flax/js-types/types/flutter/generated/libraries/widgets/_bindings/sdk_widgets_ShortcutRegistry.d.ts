import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutRegistryEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutRegistryEntry';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ShortcutRegistry extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutRegistry": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __ShortcutRegistry: unique symbol;
    readonly [_flaxDartTypeValue]: ShortcutRegistry;
    readonly hasListeners: boolean;
    readonly shortcuts: DartMap<upstream3.ShortcutActivator, upstream2.Intent>;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    addAll(value: DartMapInput<upstream3.ShortcutActivator, upstream2.Intent, Readonly<{
        "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): upstream5.ShortcutRegistryEntry;
}
export declare function _ShortcutRegistryFactory(): ShortcutRegistry;
export interface _ShortcutRegistryNative extends ShortcutRegistry {
    readonly [_flaxDartTypeValue]: _ShortcutRegistryNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    addAll(value: DartMapInput<upstream3.ShortcutActivator, upstream2.Intent, Readonly<{
        "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): upstream5.ShortcutRegistryEntry;
    get shortcuts(): DartMap<upstream3.ShortcutActivator, upstream2.Intent>;
    get hasListeners(): boolean;
}
export declare abstract class _ShortcutRegistryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShortcutRegistry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ShortcutRegistry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ShortcutRegistry", readonly [], false];
    constructor();
}
export declare namespace _ShortcutRegistryFactory {
    function implement(args: [], implementation: {}): ShortcutRegistry;
}
declare const _ShortcutRegistryBinding: typeof _ShortcutRegistryFactory & (new () => _ShortcutRegistryNative);
export declare namespace _ShortcutRegistryFactory {
    function of(context: upstream4.BuildContext): ShortcutRegistry;
}
export declare namespace _ShortcutRegistryFactory {
    function maybeOf(context: upstream4.BuildContext): ShortcutRegistry | null;
}
export declare const ShortcutRegistry: typeof _ShortcutRegistryBinding & _FlaxInstanceType<ShortcutRegistry> & _FlaxDartType<ShortcutRegistry, readonly ["class", "flax.core/sdk_widgets#type:ShortcutRegistry", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "shortcuts" | "addListener" | "removeListener" | "dispose" | "addAll" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutRegistry" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
