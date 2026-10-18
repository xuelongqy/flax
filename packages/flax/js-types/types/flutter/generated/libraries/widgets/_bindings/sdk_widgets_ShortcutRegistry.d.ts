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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ShortcutRegistry extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutRegistry": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __ShortcutRegistry: unique symbol;
    readonly [_flaxDartTypeValue]: ShortcutRegistry;
}
export interface ShortcutRegistry {
    readonly [_flaxDartTypeValue]: ShortcutRegistry;
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
export declare abstract class ShortcutRegistry extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShortcutRegistry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ShortcutRegistry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ShortcutRegistry", readonly [], false];
    constructor();
}
export declare namespace ShortcutRegistry {
    function implement(args: [], implementation: {}): ShortcutRegistry;
}
export declare namespace ShortcutRegistry {
    function of(context: upstream4.BuildContext): ShortcutRegistry;
}
export declare namespace ShortcutRegistry {
    function maybeOf(context: upstream4.BuildContext): ShortcutRegistry | null;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "shortcuts" | "addListener" | "removeListener" | "dispose" | "addAll" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutRegistry" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
