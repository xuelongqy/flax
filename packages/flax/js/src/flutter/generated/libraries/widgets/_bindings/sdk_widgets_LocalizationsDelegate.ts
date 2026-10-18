// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
const _flaxMemberParameters0 = [{"name":"locale","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"old","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LocalizationsDelegate<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [T] }> { readonly __LocalizationsDelegate: unique symbol;
readonly [_flaxDartTypeValue]: LocalizationsDelegate<T>;

}
defineObject("flax.core/sdk_widgets#type:LocalizationsDelegate", ["type"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:LocalizationsDelegate", "object", {"isSupported":_flaxMemberParameters0,"load":_flaxMemberParameters0,"shouldReload":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, {}), []);
const _LocalizationsDelegateProxy = {type: "flax.core/sdk_widgets#type:LocalizationsDelegate", parameters: [], constructors: {"":[]}, methods: {"isSupported":_flaxMemberParameters0,"load":_flaxMemberParameters0,"shouldReload":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, getters: ["type"], setters: [], contextMembers: [], superMembers: ["get:type","toString"]} as const;
export interface LocalizationsDelegate<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: LocalizationsDelegate<T>;

toString(): string;
get type(): upstream1.Type;
}
export abstract class LocalizationsDelegate<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LocalizationsDelegate<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LocalizationsDelegate<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LocalizationsDelegate", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_LocalizationsDelegateProxy, Array.from(arguments)); }
abstract isSupported(locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>): boolean;
abstract load(locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>): Promise<T>;
abstract shouldReload(old: Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [T] }>): boolean;
}
_flaxDefineProxyBase(LocalizationsDelegate.prototype, _LocalizationsDelegateProxy);
export namespace LocalizationsDelegate { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {isSupported: ((locale: upstream2.Locale) => boolean); load: ((locale: upstream2.Locale) => Promise<(T | DartInput<T>)>); shouldReload: ((old: LocalizationsDelegate<T>) => boolean)}): LocalizationsDelegate<T> {
return constructProxy(_LocalizationsDelegateProxy, args, implementation) as LocalizationsDelegate<T>; } }
_flaxBindInstanceType<LocalizationsDelegate<unknown | null>, typeof LocalizationsDelegate>(LocalizationsDelegate, "flax.core/sdk_widgets#type:LocalizationsDelegate", ["dart:core::Object"]);
_flaxDefineDartTypes(LocalizationsDelegate, "flax.core/sdk_widgets#type:LocalizationsDelegate", {...{"category":"object","constructors":{}}, proxy: _LocalizationsDelegateProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => LocalizationsDelegate<_Selected0>) & {readonly prototype: LocalizationsDelegate<_Selected0>;implement(args: readonly [], implementation: Partial<LocalizationsDelegate<_Selected0>>): LocalizationsDelegate<_Selected0>;} & _FlaxInstanceType<LocalizationsDelegate<_Selected0>> & _FlaxDartType<LocalizationsDelegate<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => LocalizationsDelegate<_Selected0>) & {readonly prototype: LocalizationsDelegate<_Selected0>;implement(args: readonly [], implementation: Partial<LocalizationsDelegate<_Selected0>>): LocalizationsDelegate<_Selected0>;} & _FlaxInstanceType<LocalizationsDelegate<_Selected0>> & _FlaxDartType<LocalizationsDelegate<_Selected0>> : never : never; }
