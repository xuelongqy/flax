import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutRegistry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutRegistry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ShortcutRegistryEntry extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutRegistryEntry": readonly [];
}> {
    readonly __ShortcutRegistryEntry: unique symbol;
    readonly [_flaxDartTypeValue]: ShortcutRegistryEntry;
    readonly registry: upstream0.ShortcutRegistry;
    replaceAll(value: DartMapInput<upstream2.ShortcutActivator, upstream1.Intent, Readonly<{
        "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): void;
    dispose(): void;
}
export declare namespace _ShortcutRegistryEntryFactory {
    function implement(args: [], implementation: {
        replaceAll: ((value: DartMap<upstream2.ShortcutActivator, upstream1.Intent>) => void);
        dispose: (() => void);
        get registry(): Readonly<{
            "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutRegistry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>;
    }): ShortcutRegistryEntry;
}
export declare const ShortcutRegistryEntry: typeof _ShortcutRegistryEntryFactory & _FlaxInstanceType<ShortcutRegistryEntry> & _FlaxDartType<ShortcutRegistryEntry, readonly ["class", "flax.core/sdk_widgets#type:ShortcutRegistryEntry", readonly [], false]>;
