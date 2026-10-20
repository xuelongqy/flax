import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OverlayVisibilityMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:cupertino_ui/src/text_field.dart::OverlayVisibilityMode">, Readonly<{
    "__flaxBound:package:cupertino_ui/src/text_field.dart::OverlayVisibilityMode": readonly [];
}> {
    readonly __OverlayVisibilityMode: unique symbol;
    readonly [_flaxDartTypeValue]: OverlayVisibilityMode;
    readonly name: string;
    readonly index: number;
}
export declare const OverlayVisibilityMode: Readonly<{
    never: OverlayVisibilityMode;
    editing: OverlayVisibilityMode;
    notEditing: OverlayVisibilityMode;
    always: OverlayVisibilityMode;
    values: readonly OverlayVisibilityMode[];
} & _FlaxInstanceType<OverlayVisibilityMode> & _FlaxDartType<OverlayVisibilityMode, readonly ["class", "flax.cupertino/cupertino#type:OverlayVisibilityMode", readonly [], false]>>;
