import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AccessibilityFocusBlockType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/semantics/semantics.dart::AccessibilityFocusBlockType">, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::AccessibilityFocusBlockType": readonly [];
}> {
    readonly __AccessibilityFocusBlockType: unique symbol;
    readonly [_flaxDartTypeValue]: AccessibilityFocusBlockType;
    readonly name: string;
    readonly index: number;
}
export declare const AccessibilityFocusBlockType: Readonly<{
    none: AccessibilityFocusBlockType;
    blockSubtree: AccessibilityFocusBlockType;
    blockNode: AccessibilityFocusBlockType;
    values: readonly AccessibilityFocusBlockType[];
} & _FlaxInstanceType<AccessibilityFocusBlockType> & _FlaxDartType<AccessibilityFocusBlockType, readonly ["class", "flax.core/sdk_semantics#type:AccessibilityFocusBlockType", readonly [], false]>>;
