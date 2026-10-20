import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LocalHistoryEntry extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryEntry": readonly [];
}> {
    readonly __LocalHistoryEntry: unique symbol;
    readonly [_flaxDartTypeValue]: LocalHistoryEntry;
    readonly onRemove: (() => void) | null;
    readonly impliesAppBarDismissal: boolean;
    remove(): void;
}
export declare function _LocalHistoryEntryFactory(options?: {
    onRemove?: (() => void) | null | undefined;
    impliesAppBarDismissal?: boolean | undefined;
}): LocalHistoryEntry;
export interface _LocalHistoryEntryNative extends LocalHistoryEntry {
    readonly [_flaxDartTypeValue]: _LocalHistoryEntryNative;
    remove(): void;
    get onRemove(): (() => void) | null;
    get impliesAppBarDismissal(): boolean;
}
export declare abstract class _LocalHistoryEntryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LocalHistoryEntry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LocalHistoryEntry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LocalHistoryEntry", readonly [], false];
    constructor(options?: {
        onRemove?: (() => void) | null | undefined;
        impliesAppBarDismissal?: boolean | undefined;
    });
}
export declare namespace _LocalHistoryEntryFactory {
    function implement(args: [options?: {
        onRemove?: (() => void) | null | undefined;
        impliesAppBarDismissal?: boolean | undefined;
    }], implementation: {}): LocalHistoryEntry;
}
declare const _LocalHistoryEntryBinding: typeof _LocalHistoryEntryFactory & (new (options?: {
    onRemove?: (() => void) | null | undefined;
    impliesAppBarDismissal?: boolean | undefined;
}) => _LocalHistoryEntryNative);
export declare const LocalHistoryEntry: typeof _LocalHistoryEntryBinding & _FlaxInstanceType<LocalHistoryEntry> & _FlaxDartType<LocalHistoryEntry, readonly ["class", "flax.core/sdk_widgets#type:LocalHistoryEntry", readonly [], false]>;
export {};
