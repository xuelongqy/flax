import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ExpansionPanel extends Readonly<{
    "__flaxBound:package:flutter/src/material/expansion_panel.dart::ExpansionPanel": readonly [];
}> {
    readonly __ExpansionPanel: unique symbol;
    readonly [_flaxDartTypeValue]: ExpansionPanel;
}
export interface ExpansionPanel {
    readonly [_flaxDartTypeValue]: ExpansionPanel;
    get headerBuilder(): ((context: upstream0.BuildContext, isExpanded: boolean) => Widget);
    get body(): Widget;
    get isExpanded(): boolean;
    get splashColor(): upstream1.Color | null;
    get highlightColor(): upstream1.Color | null;
    get canTapOnHeader(): boolean;
    get backgroundColor(): upstream1.Color | null;
}
export declare abstract class ExpansionPanel extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExpansionPanel>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ExpansionPanel;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ExpansionPanel", readonly [], false];
    constructor(options: {
        headerBuilder: ((context: upstream0.BuildContext, isExpanded: boolean) => Widget);
        body: Widget;
        isExpanded?: boolean | undefined;
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
export declare namespace ExpansionPanel {
    function implement(args: [options: {
        headerBuilder: ((context: upstream0.BuildContext, isExpanded: boolean) => Widget);
        body: Widget;
        isExpanded?: boolean | undefined;
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
    }], implementation: {}): ExpansionPanel;
}
