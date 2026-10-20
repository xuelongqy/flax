// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream1 from '@flax/material-ui/_bindings/material_InputDecorationTheme';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream7 from '@flax/material-ui/_bindings/material_ThemeData';
import '@flax/material-ui/_bindings/material_ThemeData';
import { _flaxMemberParameters9, _flaxMemberParameters277, _flaxMemberParameters2, _flaxMemberParameters278 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SearchDelegate<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:material_ui/src/search.dart::SearchDelegate": readonly [T] }> { readonly __SearchDelegate: unique symbol;
readonly [_flaxDartTypeValue]: SearchDelegate<T>;

}
defineObject("flax.material/material#type:SearchDelegate", ["automaticallyImplyLeading","leadingWidth","query","searchFieldLabel","searchFieldStyle","searchFieldDecorationTheme","keyboardType","autocorrect","enableSuggestions","textInputAction","transitionAnimation"], ["automaticallyImplyLeading","leadingWidth","query"], _flaxBindingMethods("flax.material/material#type:SearchDelegate", "object", {"buildSuggestions":_flaxMemberParameters9,"buildResults":_flaxMemberParameters9,"buildLeading":_flaxMemberParameters9,"buildActions":_flaxMemberParameters9,"buildBottom":_flaxMemberParameters9,"buildFlexibleSpace":_flaxMemberParameters9,"appBarTheme":_flaxMemberParameters9,"showResults":_flaxMemberParameters9,"showSuggestions":_flaxMemberParameters9,"close":_flaxMemberParameters277,"dispose":_flaxMemberParameters2}, {}), []);
const _SearchDelegateProxy = {type: "flax.material/material#type:SearchDelegate", parameters: _flaxMemberParameters278, constructors: {"": _flaxMemberParameters278}, methods: {"buildSuggestions":_flaxMemberParameters9,"buildResults":_flaxMemberParameters9,"buildLeading":_flaxMemberParameters9,"buildActions":_flaxMemberParameters9,"buildBottom":_flaxMemberParameters9,"buildFlexibleSpace":_flaxMemberParameters9,"appBarTheme":_flaxMemberParameters9,"showResults":_flaxMemberParameters9,"showSuggestions":_flaxMemberParameters9,"close":_flaxMemberParameters277,"dispose":_flaxMemberParameters2}, getters: ["automaticallyImplyLeading","leadingWidth","query","searchFieldLabel","searchFieldStyle","searchFieldDecorationTheme","keyboardType","autocorrect","enableSuggestions","textInputAction","transitionAnimation"], setters: ["automaticallyImplyLeading","leadingWidth","query"], contextMembers: [], superMembers: ["get:automaticallyImplyLeading","get:leadingWidth","get:query","get:searchFieldLabel","get:searchFieldStyle","get:searchFieldDecorationTheme","get:keyboardType","get:autocorrect","get:enableSuggestions","get:textInputAction","get:transitionAnimation","set:automaticallyImplyLeading","set:leadingWidth","set:query","buildBottom","buildFlexibleSpace","appBarTheme","showResults","showSuggestions","close","dispose"]} as const;
export interface SearchDelegate<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: SearchDelegate<T>;

buildBottom(context: upstream5.BuildContext): upstream6.PreferredSizeWidget | null;
buildFlexibleSpace(context: upstream5.BuildContext): Widget | null;
appBarTheme(context: upstream5.BuildContext): upstream7.ThemeData;
showResults(context: upstream5.BuildContext): void;
showSuggestions(context: upstream5.BuildContext): void;
close(context: upstream5.BuildContext, result: (T | DartInput<T>)): void;
dispose(): void;
get automaticallyImplyLeading(): boolean | null;
get leadingWidth(): number | null;
get query(): string;
get searchFieldLabel(): string | null;
get searchFieldStyle(): upstream0.TextStyle | null;
get searchFieldDecorationTheme(): upstream1.InputDecorationTheme | null;
get keyboardType(): upstream2.TextInputType | null;
get autocorrect(): boolean;
get enableSuggestions(): boolean;
get textInputAction(): upstream3.TextInputAction;
get transitionAnimation(): upstream4.Animation<number>;
set automaticallyImplyLeading(value: boolean | null);
set leadingWidth(value: number | null);
set query(value: string);
}
export abstract class SearchDelegate<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SearchDelegate<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SearchDelegate<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:SearchDelegate", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options?: {searchFieldLabel?: string | null | undefined; searchFieldStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; searchFieldDecorationTheme?: upstream1.InputDecorationTheme | null | undefined; keyboardType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | null | undefined; textInputAction?: upstream3.TextInputAction | undefined; autocorrect?: boolean | undefined; enableSuggestions?: boolean | undefined}) { super(_SearchDelegateProxy, Array.from(arguments)); }
abstract buildSuggestions(context: upstream5.BuildContext): Widget;
abstract buildResults(context: upstream5.BuildContext): Widget;
abstract buildLeading(context: upstream5.BuildContext): Widget | null;
abstract buildActions(context: upstream5.BuildContext): DartList<Widget> | null;
}
_flaxDefineProxyBase(SearchDelegate.prototype, _SearchDelegateProxy);
export namespace SearchDelegate { export function implement<T extends unknown | null = unknown | null>(args: [options?: {searchFieldLabel?: string | null | undefined; searchFieldStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; searchFieldDecorationTheme?: upstream1.InputDecorationTheme | null | undefined; keyboardType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | null | undefined; textInputAction?: upstream3.TextInputAction | undefined; autocorrect?: boolean | undefined; enableSuggestions?: boolean | undefined}], implementation: {buildSuggestions: ((context: upstream5.BuildContext) => Widget); buildResults: ((context: upstream5.BuildContext) => Widget); buildLeading: ((context: upstream5.BuildContext) => Widget | null); buildActions: ((context: upstream5.BuildContext) => DartListInput<Widget, Widget> | null)}): SearchDelegate<T> {
return constructProxy(_SearchDelegateProxy, args, implementation) as SearchDelegate<T>; } }
_flaxBindInstanceType<SearchDelegate<unknown | null>, typeof SearchDelegate>(SearchDelegate, "flax.material/material#type:SearchDelegate", ["dart:core::Object"]);
_flaxDefineDartTypes(SearchDelegate, "flax.material/material#type:SearchDelegate", {...{"category":"object","constructors":{}}, proxy: _SearchDelegateProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options?: {searchFieldLabel?: string | null | undefined;searchFieldStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined;searchFieldDecorationTheme?: upstream1.InputDecorationTheme | null | undefined;keyboardType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | null | undefined;textInputAction?: upstream3.TextInputAction | undefined;autocorrect?: boolean | undefined;enableSuggestions?: boolean | undefined}) => SearchDelegate<_Selected0>) & {readonly prototype: SearchDelegate<_Selected0>;implement(args: readonly [options?: {searchFieldLabel?: string | null | undefined; searchFieldStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; searchFieldDecorationTheme?: upstream1.InputDecorationTheme | null | undefined; keyboardType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | null | undefined; textInputAction?: upstream3.TextInputAction | undefined; autocorrect?: boolean | undefined; enableSuggestions?: boolean | undefined}], implementation: Partial<SearchDelegate<_Selected0>>): SearchDelegate<_Selected0>;} & _FlaxInstanceType<SearchDelegate<_Selected0>> & _FlaxDartType<SearchDelegate<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options?: {searchFieldLabel?: string | null | undefined;searchFieldStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined;searchFieldDecorationTheme?: upstream1.InputDecorationTheme | null | undefined;keyboardType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | null | undefined;textInputAction?: upstream3.TextInputAction | undefined;autocorrect?: boolean | undefined;enableSuggestions?: boolean | undefined}) => SearchDelegate<_Selected0>) & {readonly prototype: SearchDelegate<_Selected0>;implement(args: readonly [options?: {searchFieldLabel?: string | null | undefined; searchFieldStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; searchFieldDecorationTheme?: upstream1.InputDecorationTheme | null | undefined; keyboardType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | null | undefined; textInputAction?: upstream3.TextInputAction | undefined; autocorrect?: boolean | undefined; enableSuggestions?: boolean | undefined}], implementation: Partial<SearchDelegate<_Selected0>>): SearchDelegate<_Selected0>;} & _FlaxInstanceType<SearchDelegate<_Selected0>> & _FlaxDartType<SearchDelegate<_Selected0>> : never : never; }
