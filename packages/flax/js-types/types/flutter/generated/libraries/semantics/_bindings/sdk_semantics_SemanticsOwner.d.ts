import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import type * as upstream3 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsOwner extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsOwner": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __SemanticsOwner: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsOwner;
    readonly hasListeners: boolean;
    readonly onSemanticsUpdate: ((update: Readonly<{
        "__flaxBound:dart:ui::SemanticsUpdate": readonly [];
    }>) => void);
    readonly rootSemanticsNode: upstream3.SemanticsNode | null;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    getSemanticsNode(id: number): upstream3.SemanticsNode | null;
    sendSemanticsUpdate(): void;
    performAction(id: number, action: Readonly<{
        "__flaxBound:dart:ui::SemanticsAction": readonly [];
    }>, args?: unknown | null): void;
    performActionAt(position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, action: Readonly<{
        "__flaxBound:dart:ui::SemanticsAction": readonly [];
    }>, args?: unknown | null): void;
    toString(): string;
}
export declare function _SemanticsOwnerFactory(options: {
    onSemanticsUpdate: ((update: upstream2.SemanticsUpdate) => void);
}): SemanticsOwner;
export interface _SemanticsOwnerNative extends SemanticsOwner {
    readonly [_flaxDartTypeValue]: _SemanticsOwnerNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    getSemanticsNode(id: number): upstream3.SemanticsNode | null;
    sendSemanticsUpdate(): void;
    performAction(id: number, action: Readonly<{
        "__flaxBound:dart:ui::SemanticsAction": readonly [];
    }>, args?: unknown | null): void;
    performActionAt(position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, action: Readonly<{
        "__flaxBound:dart:ui::SemanticsAction": readonly [];
    }>, args?: unknown | null): void;
    toString(): string;
    get onSemanticsUpdate(): ((update: Readonly<{
        "__flaxBound:dart:ui::SemanticsUpdate": readonly [];
    }>) => void);
    get rootSemanticsNode(): upstream3.SemanticsNode | null;
    get hasListeners(): boolean;
}
export declare abstract class _SemanticsOwnerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsOwner>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsOwner;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsOwner", readonly [], false];
    constructor(options: {
        onSemanticsUpdate: ((update: upstream2.SemanticsUpdate) => void);
    });
}
export declare namespace _SemanticsOwnerFactory {
    function implement(args: [options: {
        onSemanticsUpdate: ((update: upstream2.SemanticsUpdate) => void);
    }], implementation: {}): SemanticsOwner;
}
declare const _SemanticsOwnerBinding: typeof _SemanticsOwnerFactory & (new (options: {
    onSemanticsUpdate: ((update: upstream2.SemanticsUpdate) => void);
}) => _SemanticsOwnerNative);
export declare const SemanticsOwner: typeof _SemanticsOwnerBinding & _FlaxInstanceType<SemanticsOwner> & _FlaxDartType<SemanticsOwner, readonly ["class", "flax.core/sdk_semantics#type:SemanticsOwner", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "onSemanticsUpdate" | "rootSemanticsNode" | "addListener" | "removeListener" | "dispose" | "getSemanticsNode" | "sendSemanticsUpdate" | "performAction" | "performActionAt" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsOwner" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
