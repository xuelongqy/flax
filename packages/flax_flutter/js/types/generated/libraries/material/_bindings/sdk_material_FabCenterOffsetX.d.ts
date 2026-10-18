import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_StandardFabLocation';
import '@flax/flutter/material/_bindings/sdk_material_StandardFabLocation';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_FloatingActionButtonLocation';
import '@flax/flutter/material/_bindings/sdk_material_FloatingActionButtonLocation';
import '@flax/flutter/material/_bindings/sdk_material_ScaffoldPrelayoutGeometry';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FabCenterOffsetX extends Omit<upstream0.StandardFabLocation, _flaxOwnMembers0>, Omit<upstream1.FloatingActionButtonLocation, _flaxOwnMembers0 | keyof upstream0.StandardFabLocation>, Readonly<{
    "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::FabCenterOffsetX": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::StandardFabLocation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::FloatingActionButtonLocation": readonly [];
}> {
    readonly __FabCenterOffsetX: unique symbol;
    readonly [_flaxDartTypeValue]: FabCenterOffsetX;
    getOffsetX(scaffoldGeometry: Readonly<{
        "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
    }>, adjustment: number): number;
    getOffsetY(scaffoldGeometry: Readonly<{
        "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
    }>, adjustment: number): number;
    isMini(): boolean;
    getOffset(scaffoldGeometry: Readonly<{
        "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
    }>): upstream3.Offset;
    toString(): string;
}
export declare const FabCenterOffsetX: object & _FlaxInstanceType<FabCenterOffsetX> & _FlaxDartType<FabCenterOffsetX, readonly ["class", "flax.core/sdk_material#type:FabCenterOffsetX", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getOffsetX" | "getOffsetY" | "isMini" | "getOffset" | "toString" | "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::FabCenterOffsetX" | "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::StandardFabLocation" | "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::FloatingActionButtonLocation";
export {};
