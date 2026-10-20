import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_StandardFabLocation';
import '@flax/material-ui/_bindings/material_StandardFabLocation';
import type * as upstream1 from '@flax/material-ui/_bindings/material_FloatingActionButtonLocation';
import '@flax/material-ui/_bindings/material_FloatingActionButtonLocation';
import '@flax/material-ui/_bindings/material_ScaffoldPrelayoutGeometry';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FabContainedOffsetY extends Omit<upstream0.StandardFabLocation, _flaxOwnMembers0>, Omit<upstream1.FloatingActionButtonLocation, _flaxOwnMembers0 | keyof upstream0.StandardFabLocation>, Readonly<{
    "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FabContainedOffsetY": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/floating_action_button_location.dart::StandardFabLocation": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FloatingActionButtonLocation": readonly [];
}> {
    readonly __FabContainedOffsetY: unique symbol;
    readonly [_flaxDartTypeValue]: FabContainedOffsetY;
    getOffsetX(scaffoldGeometry: Readonly<{
        "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
    }>, adjustment: number): number;
    getOffsetY(scaffoldGeometry: Readonly<{
        "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
    }>, adjustment: number): number;
    isMini(): boolean;
    getOffset(scaffoldGeometry: Readonly<{
        "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
    }>): upstream3.Offset;
    toString(): string;
}
export declare const FabContainedOffsetY: object & _FlaxInstanceType<FabContainedOffsetY> & _FlaxDartType<FabContainedOffsetY, readonly ["class", "flax.material/material#type:FabContainedOffsetY", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getOffsetX" | "getOffsetY" | "isMini" | "getOffset" | "toString" | "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FabContainedOffsetY" | "__flaxBound:package:material_ui/src/floating_action_button_location.dart::StandardFabLocation" | "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FloatingActionButtonLocation";
export {};
