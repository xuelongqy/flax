import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_StandardFabLocation';
import '@flax/material-ui/_bindings/material_StandardFabLocation';
import type * as upstream1 from '@flax/material-ui/_bindings/material_FloatingActionButtonLocation';
import '@flax/material-ui/_bindings/material_FloatingActionButtonLocation';
import '@flax/material-ui/_bindings/material_ScaffoldPrelayoutGeometry';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FabStartOffsetX extends Omit<upstream0.StandardFabLocation, _flaxOwnMembers0>, Omit<upstream1.FloatingActionButtonLocation, _flaxOwnMembers0 | keyof upstream0.StandardFabLocation>, Readonly<{
    "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FabStartOffsetX": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/floating_action_button_location.dart::StandardFabLocation": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FloatingActionButtonLocation": readonly [];
}> {
    readonly __FabStartOffsetX: unique symbol;
    readonly [_flaxDartTypeValue]: FabStartOffsetX;
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
export declare const FabStartOffsetX: object & _FlaxInstanceType<FabStartOffsetX> & _FlaxDartType<FabStartOffsetX, readonly ["class", "flax.material/material#type:FabStartOffsetX", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getOffsetX" | "getOffsetY" | "isMini" | "getOffset" | "toString" | "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FabStartOffsetX" | "__flaxBound:package:material_ui/src/floating_action_button_location.dart::StandardFabLocation" | "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FloatingActionButtonLocation";
export {};
