import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformProvidedMenuItemType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformProvidedMenuItemType';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlatformProvidedMenuItem extends Omit<upstream0.PlatformMenuItem, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PlatformMenuItem>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformProvidedMenuItem": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PlatformProvidedMenuItem: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformProvidedMenuItem;
    readonly label: string;
    readonly tooltip: string | null;
    readonly shortcut: upstream3.MenuSerializableShortcut | null;
    readonly onSelected: (() => void) | null;
    readonly onOpen: (() => void) | null;
    readonly onClose: (() => void) | null;
    readonly onSelectedIntent: upstream4.Intent | null;
    readonly descendants: DartList<upstream0.PlatformMenuItem>;
    readonly members: DartList<upstream0.PlatformMenuItem>;
    readonly type: upstream2.PlatformProvidedMenuItemType;
    readonly enabled: boolean;
    toChannelRepresentation(delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [];
    }>, options: {
        getId: ((item: upstream0.PlatformMenuItem) => number);
    }): DartIterable<DartMap<string, unknown | null>>;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
}
export declare function _PlatformProvidedMenuItemFactory(options: {
    type: upstream2.PlatformProvidedMenuItemType;
    enabled?: boolean | undefined;
}): PlatformProvidedMenuItem;
export interface _PlatformProvidedMenuItemNative extends PlatformProvidedMenuItem {
    readonly [_flaxDartTypeValue]: _PlatformProvidedMenuItemNative;
    toChannelRepresentation(delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [];
    }>, options: {
        getId: ((item: upstream0.PlatformMenuItem) => number);
    }): DartIterable<DartMap<string, unknown | null>>;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    get type(): upstream2.PlatformProvidedMenuItemType;
    get enabled(): boolean;
    get label(): string;
    get tooltip(): string | null;
    get shortcut(): upstream3.MenuSerializableShortcut | null;
    get onSelected(): (() => void) | null;
    get onOpen(): (() => void) | null;
    get onClose(): (() => void) | null;
    get onSelectedIntent(): upstream4.Intent | null;
    get descendants(): DartList<upstream0.PlatformMenuItem>;
    get members(): DartList<upstream0.PlatformMenuItem>;
}
export declare abstract class _PlatformProvidedMenuItemNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformProvidedMenuItem>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PlatformProvidedMenuItem;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PlatformProvidedMenuItem", readonly [], false];
    constructor(options: {
        type: upstream2.PlatformProvidedMenuItemType;
        enabled?: boolean | undefined;
    });
}
export declare namespace _PlatformProvidedMenuItemFactory {
    function implement(args: [options: {
        type: upstream2.PlatformProvidedMenuItemType;
        enabled?: boolean | undefined;
    }], implementation: {}): PlatformProvidedMenuItem;
}
declare const _PlatformProvidedMenuItemBinding: typeof _PlatformProvidedMenuItemFactory & (new (options: {
    type: upstream2.PlatformProvidedMenuItemType;
    enabled?: boolean | undefined;
}) => _PlatformProvidedMenuItemNative);
export declare namespace _PlatformProvidedMenuItemFactory {
    function hasMenu(menu: upstream2.PlatformProvidedMenuItemType): boolean;
}
export declare const PlatformProvidedMenuItem: typeof _PlatformProvidedMenuItemBinding & _FlaxInstanceType<PlatformProvidedMenuItem> & _FlaxDartType<PlatformProvidedMenuItem, readonly ["class", "flax.core/sdk_widgets#type:PlatformProvidedMenuItem", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "label" | "tooltip" | "shortcut" | "onSelected" | "onOpen" | "onClose" | "onSelectedIntent" | "descendants" | "members" | "type" | "enabled" | "toChannelRepresentation" | "toStringShort" | "debugFillProperties" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformProvidedMenuItem" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
