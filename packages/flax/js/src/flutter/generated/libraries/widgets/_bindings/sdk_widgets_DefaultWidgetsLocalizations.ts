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
import { _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DefaultWidgetsLocalizations extends Omit<upstream0.WidgetsLocalizations, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::DefaultWidgetsLocalizations": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [] }> { readonly __DefaultWidgetsLocalizations: unique symbol;
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
defineObject("flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", ["textDirection","reorderItemToStart","reorderItemToEnd","reorderItemUp","reorderItemDown","reorderItemLeft","reorderItemRight","searchResultsFound","noResultsFound","copyButtonLabel","cutButtonLabel","pasteButtonLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","radioButtonUnselectedLabel"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:WidgetsLocalizations");
export function _DefaultWidgetsLocalizationsFactory(): DefaultWidgetsLocalizations {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", "", [], [], {}) as DefaultWidgetsLocalizations;
}
const _DefaultWidgetsLocalizationsProxy = {type: "flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {}, getters: ["reorderItemUp","reorderItemDown","reorderItemLeft","reorderItemRight","reorderItemToEnd","reorderItemToStart","searchResultsFound","noResultsFound","copyButtonLabel","cutButtonLabel","pasteButtonLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","radioButtonUnselectedLabel","textDirection"], setters: [], contextMembers: [], superMembers: ["get:reorderItemUp","get:reorderItemDown","get:reorderItemLeft","get:reorderItemRight","get:reorderItemToEnd","get:reorderItemToStart","get:searchResultsFound","get:noResultsFound","get:copyButtonLabel","get:cutButtonLabel","get:pasteButtonLabel","get:selectAllButtonLabel","get:lookUpButtonLabel","get:searchWebButtonLabel","get:shareButtonLabel","get:radioButtonUnselectedLabel","get:textDirection"]} as const;
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
export abstract class _DefaultWidgetsLocalizationsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultWidgetsLocalizations>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DefaultWidgetsLocalizations;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", readonly [], false];
constructor() { super(_DefaultWidgetsLocalizationsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DefaultWidgetsLocalizationsNative.prototype, _DefaultWidgetsLocalizationsProxy);
export namespace _DefaultWidgetsLocalizationsFactory { export function implement(args: [], implementation: {}): DefaultWidgetsLocalizations {
return constructProxy(_DefaultWidgetsLocalizationsProxy, args, implementation) as DefaultWidgetsLocalizations; } }
const _DefaultWidgetsLocalizationsBinding = _flaxProxyFactory(_DefaultWidgetsLocalizationsFactory, _DefaultWidgetsLocalizationsNative) as unknown as typeof _DefaultWidgetsLocalizationsFactory & (new() => _DefaultWidgetsLocalizationsNative);
export namespace _DefaultWidgetsLocalizationsFactory { export declare const delegate: upstream2.LocalizationsDelegate<upstream0.WidgetsLocalizations>; }
_flaxDefineStaticGetters(_DefaultWidgetsLocalizationsFactory, "flax.core/sdk_widgets#read:DefaultWidgetsLocalizations.", ["delegate"]);
export namespace _DefaultWidgetsLocalizationsFactory { export function load(locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>): Promise<upstream0.WidgetsLocalizations> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:DefaultWidgetsLocalizations.load", [locale]);
return _flaxResult as Promise<upstream0.WidgetsLocalizations>;
} }
export const DefaultWidgetsLocalizations: typeof _DefaultWidgetsLocalizationsBinding & _FlaxInstanceType<DefaultWidgetsLocalizations> & _FlaxDartType<DefaultWidgetsLocalizations, readonly ["class", "flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", readonly [], false]> = _flaxBindInstanceType<DefaultWidgetsLocalizations, typeof _DefaultWidgetsLocalizationsBinding>(_DefaultWidgetsLocalizationsBinding, "flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", ["dart:core::Object","flax.core/sdk_widgets#type:WidgetsLocalizations"]) as typeof _DefaultWidgetsLocalizationsBinding & _FlaxInstanceType<DefaultWidgetsLocalizations> & _FlaxDartType<DefaultWidgetsLocalizations, readonly ["class", "flax.core/sdk_widgets#type:DefaultWidgetsLocalizations", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "textDirection" | "reorderItemToStart" | "reorderItemToEnd" | "reorderItemUp" | "reorderItemDown" | "reorderItemLeft" | "reorderItemRight" | "searchResultsFound" | "noResultsFound" | "copyButtonLabel" | "cutButtonLabel" | "pasteButtonLabel" | "selectAllButtonLabel" | "lookUpButtonLabel" | "searchWebButtonLabel" | "shareButtonLabel" | "radioButtonUnselectedLabel" | "__flaxBound:package:flutter/src/widgets/localizations.dart::DefaultWidgetsLocalizations" | "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations";
