// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"child","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widget_previews/_bindings/sdk_widget_previews.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PreviewThemeData extends Readonly<{ "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [] }> { readonly __PreviewThemeData: unique symbol;
readonly [_flaxDartTypeValue]: PreviewThemeData;

}
defineObject("flax.core/sdk_widget_previews#type:PreviewThemeData", [], [], _flaxBindingMethods("flax.core/sdk_widget_previews#type:PreviewThemeData", "object", {"apply":_flaxMemberParameters0}, {}), []);
const _PreviewThemeDataProxy = {type: "flax.core/sdk_widget_previews#type:PreviewThemeData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"apply":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export interface PreviewThemeData {
readonly [_flaxDartTypeValue]: PreviewThemeData;

}
export abstract class PreviewThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PreviewThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PreviewThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widget_previews#type:PreviewThemeData", readonly [], false];
constructor() { super(_PreviewThemeDataProxy, Array.from(arguments)); }
abstract apply(context: upstream0.BuildContext, child: Widget): Widget;
}
_flaxDefineProxyBase(PreviewThemeData.prototype, _PreviewThemeDataProxy);
export namespace PreviewThemeData { export function implement(args: [], implementation: {apply: ((context: upstream0.BuildContext, child: Widget) => Widget)}): PreviewThemeData {
return constructProxy(_PreviewThemeDataProxy, args, implementation) as PreviewThemeData; } }
_flaxBindInstanceType<PreviewThemeData, typeof PreviewThemeData>(PreviewThemeData, "flax.core/sdk_widget_previews#type:PreviewThemeData", ["dart:core::Object"]);
