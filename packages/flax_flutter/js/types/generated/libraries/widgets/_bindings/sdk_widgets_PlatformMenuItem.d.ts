import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PlatformMenuItem extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PlatformMenuItem: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformMenuItem;
}
export interface PlatformMenuItem {
    readonly [_flaxDartTypeValue]: PlatformMenuItem;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toChannelRepresentation(delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [];
    }>, options: {
        getId: ((item: PlatformMenuItem) => number);
    }): DartIterable<DartMap<string, unknown | null>>;
    get label(): string;
    get tooltip(): string | null;
    get shortcut(): upstream1.MenuSerializableShortcut | null;
    get onSelected(): (() => void) | null;
    get onOpen(): (() => void) | null;
    get onClose(): (() => void) | null;
    get onSelectedIntent(): upstream2.Intent | null;
    get descendants(): DartList<PlatformMenuItem>;
    get members(): DartList<PlatformMenuItem>;
}
export declare abstract class PlatformMenuItem extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformMenuItem>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PlatformMenuItem;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PlatformMenuItem", readonly [], false];
    constructor(options: {
        label: string;
        tooltip?: string | null | undefined;
        shortcut?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
        }>) | null | undefined;
        onSelected?: (() => void) | null | undefined;
        onSelectedIntent?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace PlatformMenuItem {
    function implement(args: [options: {
        label: string;
        tooltip?: string | null | undefined;
        shortcut?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
        }>) | null | undefined;
        onSelected?: (() => void) | null | undefined;
        onSelectedIntent?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): PlatformMenuItem;
}
export declare namespace PlatformMenuItem {
    function serialize(item: Readonly<{
        "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [];
    }>, getId: ((item: PlatformMenuItem) => number)): DartMap<string, unknown | null>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "label" | "tooltip" | "shortcut" | "onSelected" | "onOpen" | "onClose" | "onSelectedIntent" | "descendants" | "members" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "toChannelRepresentation" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
