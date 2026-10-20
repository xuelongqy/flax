import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OverlayEntry extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __OverlayEntry: unique symbol;
    readonly [_flaxDartTypeValue]: OverlayEntry;
    readonly builder: ((context: upstream1.BuildContext) => Widget);
    get opaque(): boolean;
    get maintainState(): boolean;
    readonly canSizeOverlay: boolean;
    readonly mounted: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    remove(): void;
    markNeedsBuild(): void;
    dispose(): void;
    toString(): string;
    set opaque(value: boolean);
    set maintainState(value: boolean);
}
export declare function _OverlayEntryFactory(options: {
    builder: ((context: upstream1.BuildContext) => Widget);
    opaque?: boolean | undefined;
    maintainState?: boolean | undefined;
    canSizeOverlay?: boolean | undefined;
}): OverlayEntry;
export interface _OverlayEntryNative extends OverlayEntry {
    readonly [_flaxDartTypeValue]: _OverlayEntryNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    remove(): void;
    markNeedsBuild(): void;
    dispose(): void;
    toString(): string;
    get builder(): ((context: upstream1.BuildContext) => Widget);
    get opaque(): boolean;
    get maintainState(): boolean;
    get canSizeOverlay(): boolean;
    get mounted(): boolean;
    set opaque(value: boolean);
    set maintainState(value: boolean);
}
export declare abstract class _OverlayEntryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverlayEntry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OverlayEntry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:OverlayEntry", readonly [], false];
    constructor(options: {
        builder: ((context: upstream1.BuildContext) => Widget);
        opaque?: boolean | undefined;
        maintainState?: boolean | undefined;
        canSizeOverlay?: boolean | undefined;
    });
}
export declare namespace _OverlayEntryFactory {
    function implement(args: [options: {
        builder: ((context: upstream1.BuildContext) => Widget);
        opaque?: boolean | undefined;
        maintainState?: boolean | undefined;
        canSizeOverlay?: boolean | undefined;
    }], implementation: {}): OverlayEntry;
}
declare const _OverlayEntryBinding: typeof _OverlayEntryFactory & (new (options: {
    builder: ((context: upstream1.BuildContext) => Widget);
    opaque?: boolean | undefined;
    maintainState?: boolean | undefined;
    canSizeOverlay?: boolean | undefined;
}) => _OverlayEntryNative);
export declare const OverlayEntry: typeof _OverlayEntryBinding & _FlaxInstanceType<OverlayEntry> & _FlaxDartType<OverlayEntry, readonly ["class", "flax.core/sdk_widgets#type:OverlayEntry", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "builder" | "opaque" | "maintainState" | "canSizeOverlay" | "mounted" | "addListener" | "removeListener" | "remove" | "markNeedsBuild" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
