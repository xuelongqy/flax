import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_ExpansionPanel';
import '@flax/flutter/material/_bindings/sdk_material_ExpansionPanel';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ExpansionPanelRadio extends Omit<upstream0.ExpansionPanel, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/expansion_panel.dart::ExpansionPanelRadio": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/expansion_panel.dart::ExpansionPanel": readonly [];
}> {
    readonly __ExpansionPanelRadio: unique symbol;
    readonly [_flaxDartTypeValue]: ExpansionPanelRadio;
    readonly headerBuilder: ((context: upstream1.BuildContext, isExpanded: boolean) => Widget);
    readonly body: Widget;
    readonly isExpanded: boolean;
    readonly splashColor: upstream2.Color | null;
    readonly highlightColor: upstream2.Color | null;
    readonly canTapOnHeader: boolean;
    readonly backgroundColor: upstream2.Color | null;
    readonly value: {};
}
export declare function _ExpansionPanelRadioFactory(options: {
    value: {};
    headerBuilder: ((context: upstream1.BuildContext, isExpanded: boolean) => Widget);
    body: Widget;
    canTapOnHeader?: boolean | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    splashColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    highlightColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}): ExpansionPanelRadio;
export interface _ExpansionPanelRadioNative extends ExpansionPanelRadio {
    readonly [_flaxDartTypeValue]: _ExpansionPanelRadioNative;
    get value(): {};
    get headerBuilder(): ((context: upstream1.BuildContext, isExpanded: boolean) => Widget);
    get body(): Widget;
    get isExpanded(): boolean;
    get splashColor(): upstream2.Color | null;
    get highlightColor(): upstream2.Color | null;
    get canTapOnHeader(): boolean;
    get backgroundColor(): upstream2.Color | null;
}
export declare abstract class _ExpansionPanelRadioNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExpansionPanelRadio>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ExpansionPanelRadio;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ExpansionPanelRadio", readonly [], false];
    constructor(options: {
        value: {};
        headerBuilder: ((context: upstream1.BuildContext, isExpanded: boolean) => Widget);
        body: Widget;
        canTapOnHeader?: boolean | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        splashColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        highlightColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _ExpansionPanelRadioFactory {
    function implement(args: [options: {
        value: {};
        headerBuilder: ((context: upstream1.BuildContext, isExpanded: boolean) => Widget);
        body: Widget;
        canTapOnHeader?: boolean | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        splashColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        highlightColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }], implementation: {}): ExpansionPanelRadio;
}
declare const _ExpansionPanelRadioBinding: typeof _ExpansionPanelRadioFactory & (new (options: {
    value: {};
    headerBuilder: ((context: upstream1.BuildContext, isExpanded: boolean) => Widget);
    body: Widget;
    canTapOnHeader?: boolean | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    splashColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    highlightColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}) => _ExpansionPanelRadioNative);
export declare const ExpansionPanelRadio: typeof _ExpansionPanelRadioBinding & _FlaxInstanceType<ExpansionPanelRadio> & _FlaxDartType<ExpansionPanelRadio, readonly ["class", "flax.core/sdk_material#type:ExpansionPanelRadio", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "headerBuilder" | "body" | "isExpanded" | "splashColor" | "highlightColor" | "canTapOnHeader" | "backgroundColor" | "value" | "__flaxBound:package:flutter/src/material/expansion_panel.dart::ExpansionPanelRadio" | "__flaxBound:package:flutter/src/material/expansion_panel.dart::ExpansionPanel";
export {};
