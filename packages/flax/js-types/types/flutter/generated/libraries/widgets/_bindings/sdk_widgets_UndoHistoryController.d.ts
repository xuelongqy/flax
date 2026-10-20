import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_UndoHistoryValue';
import '@flax/flutter/widgets/_bindings/sdk_widgets_UndoHistoryValue';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UndoHistoryController extends Omit<upstream0.ValueNotifier<upstream1.UndoHistoryValue>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.UndoHistoryValue>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.UndoHistoryValue> | keyof upstream2.ChangeNotifier>, Omit<upstream4.ValueListenable<upstream1.UndoHistoryValue>, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.UndoHistoryValue> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream1.UndoHistoryValue];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.UndoHistoryValue];
}> {
    readonly __UndoHistoryController: unique symbol;
    readonly [_flaxDartTypeValue]: UndoHistoryController;
    get value(): upstream1.UndoHistoryValue;
    readonly hasListeners: boolean;
    readonly onUndo: upstream2.ChangeNotifier;
    readonly onRedo: upstream2.ChangeNotifier;
    toString(): string;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    undo(): void;
    redo(): void;
    set value(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [];
    }>);
}
export declare function _UndoHistoryControllerFactory(options?: {
    value?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [];
    }> | null | undefined;
}): UndoHistoryController;
export interface _UndoHistoryControllerNative extends UndoHistoryController {
    readonly [_flaxDartTypeValue]: _UndoHistoryControllerNative;
    toString(): string;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    undo(): void;
    redo(): void;
    get onUndo(): upstream2.ChangeNotifier;
    get onRedo(): upstream2.ChangeNotifier;
    get value(): upstream1.UndoHistoryValue;
    get hasListeners(): boolean;
    set value(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [];
    }>);
}
export declare abstract class _UndoHistoryControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UndoHistoryController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: UndoHistoryController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:UndoHistoryController", readonly [], false];
    constructor(options?: {
        value?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _UndoHistoryControllerFactory {
    function implement(args: [options?: {
        value?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [];
        }> | null | undefined;
    }], implementation: {}): UndoHistoryController;
}
declare const _UndoHistoryControllerBinding: typeof _UndoHistoryControllerFactory & (new (options?: {
    value?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [];
    }> | null | undefined;
}) => _UndoHistoryControllerNative);
export declare const UndoHistoryController: typeof _UndoHistoryControllerBinding & _FlaxInstanceType<UndoHistoryController> & _FlaxDartType<UndoHistoryController, readonly ["class", "flax.core/sdk_widgets#type:UndoHistoryController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "onUndo" | "onRedo" | "toString" | "addListener" | "removeListener" | "dispose" | "undo" | "redo" | "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
export {};
