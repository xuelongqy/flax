// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters0, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetsLocalizations extends Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [] }> { readonly __WidgetsLocalizations: unique symbol;
readonly [_flaxDartTypeValue]: WidgetsLocalizations;

}
defineObject("flax.core/sdk_widgets#type:WidgetsLocalizations", ["textDirection","reorderItemToStart","reorderItemToEnd","reorderItemUp","reorderItemDown","reorderItemLeft","reorderItemRight","searchResultsFound","noResultsFound","copyButtonLabel","cutButtonLabel","pasteButtonLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","radioButtonUnselectedLabel"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetsLocalizations", "object", {}, {}), []);
const _WidgetsLocalizationsProxy = {type: "flax.core/sdk_widgets#type:WidgetsLocalizations", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {}, getters: ["textDirection","reorderItemToStart","reorderItemToEnd","reorderItemUp","reorderItemDown","reorderItemLeft","reorderItemRight","searchResultsFound","noResultsFound","copyButtonLabel","cutButtonLabel","pasteButtonLabel","selectAllButtonLabel","lookUpButtonLabel","searchWebButtonLabel","shareButtonLabel","radioButtonUnselectedLabel"], setters: [], contextMembers: [], superMembers: ["get:searchResultsFound","get:noResultsFound"]} as const;
export interface WidgetsLocalizations {
readonly [_flaxDartTypeValue]: WidgetsLocalizations;

get searchResultsFound(): string;
get noResultsFound(): string;
}
export abstract class WidgetsLocalizations extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetsLocalizations>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetsLocalizations;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetsLocalizations", readonly [], false];
constructor() { super(_WidgetsLocalizationsProxy, Array.from(arguments)); }
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
_flaxDefineProxyBase(WidgetsLocalizations.prototype, _WidgetsLocalizationsProxy);
export namespace WidgetsLocalizations { export function implement(args: [], implementation: {get textDirection(): upstream0.TextDirection; get reorderItemToStart(): string; get reorderItemToEnd(): string; get reorderItemUp(): string; get reorderItemDown(): string; get reorderItemLeft(): string; get reorderItemRight(): string; get copyButtonLabel(): string; get cutButtonLabel(): string; get pasteButtonLabel(): string; get selectAllButtonLabel(): string; get lookUpButtonLabel(): string; get searchWebButtonLabel(): string; get shareButtonLabel(): string; get radioButtonUnselectedLabel(): string}): WidgetsLocalizations {
return constructProxy(_WidgetsLocalizationsProxy, args, implementation) as WidgetsLocalizations; } }
export namespace WidgetsLocalizations { export function of(context: upstream1.BuildContext): WidgetsLocalizations {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:WidgetsLocalizations.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as WidgetsLocalizations;
} }
_flaxBindInstanceType<WidgetsLocalizations, typeof WidgetsLocalizations>(WidgetsLocalizations, "flax.core/sdk_widgets#type:WidgetsLocalizations", ["dart:core::Object"]);
