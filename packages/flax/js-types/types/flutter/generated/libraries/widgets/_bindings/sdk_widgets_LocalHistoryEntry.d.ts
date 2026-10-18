import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface LocalHistoryEntry extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryEntry": readonly [];
}> {
    readonly __LocalHistoryEntry: unique symbol;
    readonly [_flaxDartTypeValue]: LocalHistoryEntry;
}
export interface LocalHistoryEntry {
    readonly [_flaxDartTypeValue]: LocalHistoryEntry;
    remove(): void;
    get onRemove(): (() => void) | null;
    get impliesAppBarDismissal(): boolean;
}
export declare abstract class LocalHistoryEntry extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LocalHistoryEntry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LocalHistoryEntry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LocalHistoryEntry", readonly [], false];
    constructor(options?: {
        onRemove?: (() => void) | null | undefined;
        impliesAppBarDismissal?: boolean | undefined;
    });
}
export declare namespace LocalHistoryEntry {
    function implement(args: [options?: {
        onRemove?: (() => void) | null | undefined;
        impliesAppBarDismissal?: boolean | undefined;
    }], implementation: {}): LocalHistoryEntry;
}
