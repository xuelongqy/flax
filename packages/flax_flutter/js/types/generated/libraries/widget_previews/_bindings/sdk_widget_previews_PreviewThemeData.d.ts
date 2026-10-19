import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PreviewThemeData extends Readonly<{
    "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [];
}> {
    readonly __PreviewThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: PreviewThemeData;
}
export interface PreviewThemeData {
    readonly [_flaxDartTypeValue]: PreviewThemeData;
}
export declare abstract class PreviewThemeData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PreviewThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PreviewThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widget_previews#type:PreviewThemeData", readonly [], false];
    constructor();
    abstract apply(context: upstream0.BuildContext, child: Widget): Widget;
}
export declare namespace PreviewThemeData {
    function implement(args: [], implementation: {
        apply: ((context: upstream0.BuildContext, child: Widget) => Widget);
    }): PreviewThemeData;
}
