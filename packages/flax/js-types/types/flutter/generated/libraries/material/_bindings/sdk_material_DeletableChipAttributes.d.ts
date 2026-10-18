import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DeletableChipAttributes extends Readonly<{
    "__flaxBound:package:flutter/src/material/chip.dart::DeletableChipAttributes": readonly [];
}> {
    readonly __DeletableChipAttributes: unique symbol;
    readonly [_flaxDartTypeValue]: DeletableChipAttributes;
    readonly deleteIcon: Widget | null;
    readonly onDeleted: (() => void) | null;
    readonly deleteIconColor: upstream0.Color | null;
    readonly deleteButtonTooltipMessage: string | null;
    readonly deleteIconBoxConstraints: upstream1.BoxConstraints | null;
}
export declare namespace _DeletableChipAttributesFactory {
    function implement(args: [], implementation: {
        get deleteIcon(): Widget | null;
        get onDeleted(): (() => void) | null;
        get deleteIconColor(): Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null;
        get deleteButtonTooltipMessage(): string | null;
        get deleteIconBoxConstraints(): (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null;
    }): DeletableChipAttributes;
}
export declare const DeletableChipAttributes: typeof _DeletableChipAttributesFactory & _FlaxInstanceType<DeletableChipAttributes> & _FlaxDartType<DeletableChipAttributes, readonly ["class", "flax.core/sdk_material#type:DeletableChipAttributes", readonly [], false]>;
