import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewThemeData';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewThemeData';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MultiPreviewThemeData extends Omit<upstream0.PreviewThemeData, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::MultiPreviewThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [];
}> {
    readonly __MultiPreviewThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: MultiPreviewThemeData;
    readonly themes: DartList<upstream0.PreviewThemeData>;
    apply(context: upstream1.BuildContext, child: Widget): Widget;
}
export declare function _MultiPreviewThemeDataFactory(themes: DartListInput<upstream0.PreviewThemeData, Readonly<{
    "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [];
}>>): MultiPreviewThemeData;
export declare const MultiPreviewThemeData: typeof _MultiPreviewThemeDataFactory & _FlaxInstanceType<MultiPreviewThemeData> & _FlaxDartType<MultiPreviewThemeData, readonly ["class", "flax.core/sdk_widget_previews#type:MultiPreviewThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "themes" | "apply" | "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::MultiPreviewThemeData" | "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData";
export {};
