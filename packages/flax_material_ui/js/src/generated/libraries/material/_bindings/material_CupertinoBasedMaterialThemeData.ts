// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoThemeData';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoThemeData';
import type * as upstream1 from '@flax/material-ui/_bindings/material_ThemeData';
import '@flax/material-ui/_bindings/material_ThemeData';
import { _flaxMemberParameters73 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoBasedMaterialThemeData extends Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::CupertinoBasedMaterialThemeData": readonly [] }> { readonly __CupertinoBasedMaterialThemeData: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoBasedMaterialThemeData;

readonly materialTheme: upstream1.ThemeData;
}
defineObject("flax.material/material#type:CupertinoBasedMaterialThemeData", ["materialTheme"], [], _flaxBindingMethods("flax.material/material#type:CupertinoBasedMaterialThemeData", "object", {}, {}), []);
export function _CupertinoBasedMaterialThemeDataFactory(options: { themeData: Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> }): CupertinoBasedMaterialThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:CupertinoBasedMaterialThemeData", "", [{"name":"themeData","required":true}], [], options) as CupertinoBasedMaterialThemeData;
}
const _CupertinoBasedMaterialThemeDataProxy = {type: "flax.material/material#type:CupertinoBasedMaterialThemeData", parameters: _flaxMemberParameters73, constructors: {"": _flaxMemberParameters73}, methods: {}, getters: ["materialTheme"], setters: [], contextMembers: [], superMembers: ["get:materialTheme"]} as const;
export interface _CupertinoBasedMaterialThemeDataNative extends CupertinoBasedMaterialThemeData {
readonly [_flaxDartTypeValue]: _CupertinoBasedMaterialThemeDataNative;

get materialTheme(): upstream1.ThemeData;
}
export abstract class _CupertinoBasedMaterialThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoBasedMaterialThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoBasedMaterialThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:CupertinoBasedMaterialThemeData", readonly [], false];
constructor(options: {themeData: Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>}) { super(_CupertinoBasedMaterialThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CupertinoBasedMaterialThemeDataNative.prototype, _CupertinoBasedMaterialThemeDataProxy);
export namespace _CupertinoBasedMaterialThemeDataFactory { export function implement(args: [options: {themeData: Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>}], implementation: {}): CupertinoBasedMaterialThemeData {
return constructProxy(_CupertinoBasedMaterialThemeDataProxy, args, implementation) as CupertinoBasedMaterialThemeData; } }
const _CupertinoBasedMaterialThemeDataBinding = _flaxProxyFactory(_CupertinoBasedMaterialThemeDataFactory, _CupertinoBasedMaterialThemeDataNative) as unknown as typeof _CupertinoBasedMaterialThemeDataFactory & (new(options: {themeData: Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>}) => _CupertinoBasedMaterialThemeDataNative);
export const CupertinoBasedMaterialThemeData: typeof _CupertinoBasedMaterialThemeDataBinding & _FlaxInstanceType<CupertinoBasedMaterialThemeData> & _FlaxDartType<CupertinoBasedMaterialThemeData, readonly ["class", "flax.material/material#type:CupertinoBasedMaterialThemeData", readonly [], false]> = _flaxBindInstanceType<CupertinoBasedMaterialThemeData, typeof _CupertinoBasedMaterialThemeDataBinding>(_CupertinoBasedMaterialThemeDataBinding, "flax.material/material#type:CupertinoBasedMaterialThemeData", ["dart:core::Object"]) as typeof _CupertinoBasedMaterialThemeDataBinding & _FlaxInstanceType<CupertinoBasedMaterialThemeData> & _FlaxDartType<CupertinoBasedMaterialThemeData, readonly ["class", "flax.material/material#type:CupertinoBasedMaterialThemeData", readonly [], false]>;
