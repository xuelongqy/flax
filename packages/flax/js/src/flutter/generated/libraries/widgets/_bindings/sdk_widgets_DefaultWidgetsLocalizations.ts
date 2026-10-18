// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DefaultWidgetsLocalizations extends Omit<upstream0.WidgetsLocalizations, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::DefaultWidgetsLocalizations": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [] }> { readonly __DefaultWidgetsLocalizations: unique symbol;
readonly [_flaxDartTypeValue]: DefaultWidgetsLocalizations;

}
defineObject("flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", ["textDirection","reorderItemToStart","reorderItemToEnd","reorderItemUp","reorderItemDown","reorderItemLeft","reorderItemRight","searchResultsFound","noResultsFound","copyButtonLabel","cutButtonLabel","pasteButtonLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","radioButtonUnselectedLabel"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:WidgetsLocalizations");
const _DefaultWidgetsLocalizationsProxy = {type: "flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", parameters: [], constructors: {"":[]}, methods: {}, getters: ["reorderItemUp","reorderItemDown","reorderItemLeft","reorderItemRight","reorderItemToEnd","reorderItemToStart","searchResultsFound","noResultsFound","copyButtonLabel","cutButtonLabel","pasteButtonLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","radioButtonUnselectedLabel","textDirection"], setters: [], contextMembers: [], superMembers: ["get:reorderItemUp","get:reorderItemDown","get:reorderItemLeft","get:reorderItemRight","get:reorderItemToEnd","get:reorderItemToStart","get:searchResultsFound","get:noResultsFound","get:copyButtonLabel","get:cutButtonLabel","get:pasteButtonLabel","get:selectAllButtonLabel","get:lookUpButtonLabel","get:searchWebButtonLabel","get:shareButtonLabel","get:radioButtonUnselectedLabel","get:textDirection"]} as const;
export interface DefaultWidgetsLocalizations {
readonly [_flaxDartTypeValue]: DefaultWidgetsLocalizations;

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
export abstract class DefaultWidgetsLocalizations extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultWidgetsLocalizations>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DefaultWidgetsLocalizations;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", readonly [], false];
constructor() { super(_DefaultWidgetsLocalizationsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DefaultWidgetsLocalizations.prototype, _DefaultWidgetsLocalizationsProxy);
export namespace DefaultWidgetsLocalizations { export function implement(args: [], implementation: {}): DefaultWidgetsLocalizations {
return constructProxy(_DefaultWidgetsLocalizationsProxy, args, implementation) as DefaultWidgetsLocalizations; } }
export namespace DefaultWidgetsLocalizations { export declare const delegate: upstream2.LocalizationsDelegate<upstream0.WidgetsLocalizations>; }
_flaxDefineStaticGetters(DefaultWidgetsLocalizations, "flax.core/sdk_widgets#read:DefaultWidgetsLocalizations.", ["delegate"]);
export namespace DefaultWidgetsLocalizations { export function load(locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>): Promise<upstream0.WidgetsLocalizations> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:DefaultWidgetsLocalizations.load", [locale]);
return _flaxResult as Promise<upstream0.WidgetsLocalizations>;
} }
_flaxBindInstanceType<DefaultWidgetsLocalizations, typeof DefaultWidgetsLocalizations>(DefaultWidgetsLocalizations, "flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", ["dart:core::Object","flax.core/sdk_widgets#type:WidgetsLocalizations"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "textDirection" | "reorderItemToStart" | "reorderItemToEnd" | "reorderItemUp" | "reorderItemDown" | "reorderItemLeft" | "reorderItemRight" | "searchResultsFound" | "noResultsFound" | "copyButtonLabel" | "cutButtonLabel" | "pasteButtonLabel" | "selectAllButtonLabel" | "lookUpButtonLabel" | "searchWebButtonLabel" | "shareButtonLabel" | "radioButtonUnselectedLabel" | "__flaxBound:package:flutter/src/widgets/localizations.dart::DefaultWidgetsLocalizations" | "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations";
