import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/material-ui/_bindings/material_ScaffoldPrelayoutGeometry';
import '@flax/material-ui/_bindings/material_ScaffoldPrelayoutGeometry';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FloatingActionButtonLocation extends Readonly<{
    "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FloatingActionButtonLocation": readonly [];
}> {
    readonly __FloatingActionButtonLocation: unique symbol;
    readonly [_flaxDartTypeValue]: FloatingActionButtonLocation;
}
export interface FloatingActionButtonLocation {
    readonly [_flaxDartTypeValue]: FloatingActionButtonLocation;
    toString(): string;
}
export declare abstract class FloatingActionButtonLocation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FloatingActionButtonLocation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FloatingActionButtonLocation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:FloatingActionButtonLocation", readonly [], false];
    constructor();
    abstract getOffset(scaffoldGeometry: Readonly<{
        "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
    }>): upstream0.Offset;
}
export declare namespace FloatingActionButtonLocation {
    function implement(args: [], implementation: {
        getOffset: ((scaffoldGeometry: upstream1.ScaffoldPrelayoutGeometry) => Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>);
    }): FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const startTop: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const miniStartTop: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const centerTop: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const miniCenterTop: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const endTop: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const miniEndTop: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const startFloat: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const miniStartFloat: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const centerFloat: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const miniCenterFloat: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const endFloat: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const miniEndFloat: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const startDocked: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const miniStartDocked: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const centerDocked: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const miniCenterDocked: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const endDocked: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const miniEndDocked: FloatingActionButtonLocation;
}
export declare namespace FloatingActionButtonLocation {
    const endContained: FloatingActionButtonLocation;
}
