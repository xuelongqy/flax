import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DefaultWidgetsLocalizations extends Omit<upstream0.WidgetsLocalizations, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/localizations.dart::DefaultWidgetsLocalizations": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [];
}> {
    readonly __DefaultWidgetsLocalizations: unique symbol;
    readonly [_flaxDartTypeValue]: DefaultWidgetsLocalizations;
    readonly textDirection: upstream1.TextDirection;
    readonly reorderItemToStart: string;
    readonly reorderItemToEnd: string;
    readonly reorderItemUp: string;
    readonly reorderItemDown: string;
    readonly reorderItemLeft: string;
    readonly reorderItemRight: string;
    readonly searchResultsFound: string;
    readonly noResultsFound: string;
    readonly copyButtonLabel: string;
    readonly cutButtonLabel: string;
    readonly pasteButtonLabel: string;
    readonly selectAllButtonLabel: string;
    readonly lookUpButtonLabel: string;
    readonly searchWebButtonLabel: string;
    readonly shareButtonLabel: string;
    readonly radioButtonUnselectedLabel: string;
}
export declare function _DefaultWidgetsLocalizationsFactory(): DefaultWidgetsLocalizations;
export interface _DefaultWidgetsLocalizationsNative extends DefaultWidgetsLocalizations {
    readonly [_flaxDartTypeValue]: _DefaultWidgetsLocalizationsNative;
    get reorderItemUp(): string;
    get reorderItemDown(): string;
    get reorderItemLeft(): string;
    get reorderItemRight(): string;
    get reorderItemToEnd(): string;
    get reorderItemToStart(): string;
    get searchResultsFound(): string;
    get noResultsFound(): string;
    get copyButtonLabel(): string;
    get cutButtonLabel(): string;
    get pasteButtonLabel(): string;
    get selectAllButtonLabel(): string;
    get lookUpButtonLabel(): string;
    get searchWebButtonLabel(): string;
    get shareButtonLabel(): string;
    get radioButtonUnselectedLabel(): string;
    get textDirection(): upstream1.TextDirection;
}
export declare abstract class _DefaultWidgetsLocalizationsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultWidgetsLocalizations>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DefaultWidgetsLocalizations;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", readonly [], false];
    constructor();
}
export declare namespace _DefaultWidgetsLocalizationsFactory {
    function implement(args: [], implementation: {}): DefaultWidgetsLocalizations;
}
declare const _DefaultWidgetsLocalizationsBinding: typeof _DefaultWidgetsLocalizationsFactory & (new () => _DefaultWidgetsLocalizationsNative);
export declare namespace _DefaultWidgetsLocalizationsFactory {
    const delegate: upstream2.LocalizationsDelegate<upstream0.WidgetsLocalizations>;
}
export declare namespace _DefaultWidgetsLocalizationsFactory {
    function load(locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>): Promise<upstream0.WidgetsLocalizations>;
}
export declare const DefaultWidgetsLocalizations: typeof _DefaultWidgetsLocalizationsBinding & _FlaxInstanceType<DefaultWidgetsLocalizations> & _FlaxDartType<DefaultWidgetsLocalizations, readonly ["class", "flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "textDirection" | "reorderItemToStart" | "reorderItemToEnd" | "reorderItemUp" | "reorderItemDown" | "reorderItemLeft" | "reorderItemRight" | "searchResultsFound" | "noResultsFound" | "copyButtonLabel" | "cutButtonLabel" | "pasteButtonLabel" | "selectAllButtonLabel" | "lookUpButtonLabel" | "searchWebButtonLabel" | "shareButtonLabel" | "radioButtonUnselectedLabel" | "__flaxBound:package:flutter/src/widgets/localizations.dart::DefaultWidgetsLocalizations" | "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations";
export {};
