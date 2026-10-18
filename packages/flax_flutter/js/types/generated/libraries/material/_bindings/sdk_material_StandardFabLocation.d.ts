import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_FloatingActionButtonLocation';
import '@flax/flutter/material/_bindings/sdk_material_FloatingActionButtonLocation';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_ScaffoldPrelayoutGeometry';
import '@flax/flutter/material/_bindings/sdk_material_ScaffoldPrelayoutGeometry';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface StandardFabLocation extends Omit<upstream0.FloatingActionButtonLocation, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::StandardFabLocation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::FloatingActionButtonLocation": readonly [];
}> {
    readonly __StandardFabLocation: unique symbol;
    readonly [_flaxDartTypeValue]: StandardFabLocation;
}
export interface StandardFabLocation {
    readonly [_flaxDartTypeValue]: StandardFabLocation;
    getOffset(scaffoldGeometry: Readonly<{
        "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
    }>): upstream1.Offset;
    toString(): string;
    isMini(): boolean;
}
export declare abstract class StandardFabLocation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StandardFabLocation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StandardFabLocation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:StandardFabLocation", readonly [], false];
    constructor();
    abstract getOffsetX(scaffoldGeometry: Readonly<{
        "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
    }>, adjustment: number): number;
    abstract getOffsetY(scaffoldGeometry: Readonly<{
        "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
    }>, adjustment: number): number;
}
export declare namespace StandardFabLocation {
    function implement(args: [], implementation: {
        getOffsetX: ((scaffoldGeometry: upstream2.ScaffoldPrelayoutGeometry, adjustment: number) => number);
        getOffsetY: ((scaffoldGeometry: upstream2.ScaffoldPrelayoutGeometry, adjustment: number) => number);
    }): StandardFabLocation;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getOffset" | "toString" | "getOffsetX" | "getOffsetY" | "isMini" | "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::StandardFabLocation" | "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::FloatingActionButtonLocation";
export {};
