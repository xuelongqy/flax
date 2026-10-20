import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TransformationController extends Omit<upstream0.ValueNotifier<upstream1.Matrix4>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.Matrix4>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.Matrix4> | keyof upstream2.ChangeNotifier>, Omit<upstream4.ValueListenable<upstream1.Matrix4>, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.Matrix4> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/interactive_viewer.dart::TransformationController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream1.Matrix4];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.Matrix4];
}> {
    readonly __TransformationController: unique symbol;
    readonly [_flaxDartTypeValue]: TransformationController;
    get value(): upstream1.Matrix4;
    readonly hasListeners: boolean;
    toString(): string;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    toScene(viewportPoint: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream5.Offset;
    set value(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>);
}
export declare function _TransformationControllerFactory(value?: Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
}> | null): TransformationController;
export interface _TransformationControllerNative extends TransformationController {
    readonly [_flaxDartTypeValue]: _TransformationControllerNative;
    toString(): string;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    toScene(viewportPoint: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream5.Offset;
    get value(): upstream1.Matrix4;
    get hasListeners(): boolean;
    set value(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>);
}
export declare abstract class _TransformationControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TransformationController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TransformationController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TransformationController", readonly [], false];
    constructor(value?: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null);
}
export declare namespace _TransformationControllerFactory {
    function implement(args: [value?: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null], implementation: {}): TransformationController;
}
declare const _TransformationControllerBinding: typeof _TransformationControllerFactory & (new (value?: Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
}> | null) => _TransformationControllerNative);
export declare const TransformationController: typeof _TransformationControllerBinding & _FlaxInstanceType<TransformationController> & _FlaxDartType<TransformationController, readonly ["class", "flax.core/sdk_widgets#type:TransformationController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "toString" | "addListener" | "removeListener" | "dispose" | "toScene" | "__flaxBound:package:flutter/src/widgets/interactive_viewer.dart::TransformationController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
export {};
