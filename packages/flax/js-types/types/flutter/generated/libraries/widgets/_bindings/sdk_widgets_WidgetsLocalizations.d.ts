import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface WidgetsLocalizations extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [];
}> {
    readonly __WidgetsLocalizations: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetsLocalizations;
}
export interface WidgetsLocalizations {
    readonly [_flaxDartTypeValue]: WidgetsLocalizations;
    get searchResultsFound(): string;
    get noResultsFound(): string;
}
export declare abstract class WidgetsLocalizations extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetsLocalizations>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetsLocalizations;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetsLocalizations", readonly [], false];
    constructor();
    abstract get textDirection(): upstream0.TextDirection;
    abstract get reorderItemToStart(): string;
    abstract get reorderItemToEnd(): string;
    abstract get reorderItemUp(): string;
    abstract get reorderItemDown(): string;
    abstract get reorderItemLeft(): string;
    abstract get reorderItemRight(): string;
    abstract get copyButtonLabel(): string;
    abstract get cutButtonLabel(): string;
    abstract get pasteButtonLabel(): string;
    abstract get selectAllButtonLabel(): string;
    abstract get lookUpButtonLabel(): string;
    abstract get searchWebButtonLabel(): string;
    abstract get shareButtonLabel(): string;
    abstract get radioButtonUnselectedLabel(): string;
}
export declare namespace WidgetsLocalizations {
    function implement(args: [], implementation: {
        get textDirection(): upstream0.TextDirection;
        get reorderItemToStart(): string;
        get reorderItemToEnd(): string;
        get reorderItemUp(): string;
        get reorderItemDown(): string;
        get reorderItemLeft(): string;
        get reorderItemRight(): string;
        get copyButtonLabel(): string;
        get cutButtonLabel(): string;
        get pasteButtonLabel(): string;
        get selectAllButtonLabel(): string;
        get lookUpButtonLabel(): string;
        get searchWebButtonLabel(): string;
        get shareButtonLabel(): string;
        get radioButtonUnselectedLabel(): string;
    }): WidgetsLocalizations;
}
export declare namespace WidgetsLocalizations {
    function of(context: upstream1.BuildContext): WidgetsLocalizations;
}
