import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DraggableScrollableController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/draggable_scrollable_sheet.dart::DraggableScrollableController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __DraggableScrollableController: unique symbol;
    readonly [_flaxDartTypeValue]: DraggableScrollableController;
    readonly hasListeners: boolean;
    readonly size: number;
    readonly pixels: number;
    readonly isAttached: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    sizeToPixels(size: number): number;
    pixelsToSize(pixels: number): number;
    animateTo(size: number, options: {
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>;
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
        }>;
    }): Promise<void>;
    jumpTo(size: number): void;
    reset(): void;
}
export declare function _DraggableScrollableControllerFactory(): DraggableScrollableController;
export interface _DraggableScrollableControllerNative extends DraggableScrollableController {
    readonly [_flaxDartTypeValue]: _DraggableScrollableControllerNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    sizeToPixels(size: number): number;
    pixelsToSize(pixels: number): number;
    animateTo(size: number, options: {
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
        }>;
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>;
    }): Promise<void>;
    jumpTo(size: number): void;
    reset(): void;
    get size(): number;
    get pixels(): number;
    get isAttached(): boolean;
    get hasListeners(): boolean;
}
export declare abstract class _DraggableScrollableControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DraggableScrollableController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DraggableScrollableController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DraggableScrollableController", readonly [], false];
    constructor();
}
export declare namespace _DraggableScrollableControllerFactory {
    function implement(args: [], implementation: {}): DraggableScrollableController;
}
declare const _DraggableScrollableControllerBinding: typeof _DraggableScrollableControllerFactory & (new () => _DraggableScrollableControllerNative);
export declare const DraggableScrollableController: typeof _DraggableScrollableControllerBinding & _FlaxInstanceType<DraggableScrollableController> & _FlaxDartType<DraggableScrollableController, readonly ["class", "flax.core/sdk_widgets#type:DraggableScrollableController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "size" | "pixels" | "isAttached" | "addListener" | "removeListener" | "dispose" | "sizeToPixels" | "pixelsToSize" | "animateTo" | "jumpTo" | "reset" | "__flaxBound:package:flutter/src/widgets/draggable_scrollable_sheet.dart::DraggableScrollableController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
