// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_ExpansionPanel';
import '@flax/flutter/material/_bindings/sdk_material_ExpansionPanel';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters133 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ExpansionPanelRadio extends Omit<upstream0.ExpansionPanel, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/expansion_panel.dart::ExpansionPanelRadio": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/expansion_panel.dart::ExpansionPanel": readonly [] }> { readonly __ExpansionPanelRadio: unique symbol;
readonly [_flaxDartTypeValue]: ExpansionPanelRadio;

readonly headerBuilder: ((context: upstream1.BuildContext, isExpanded: boolean) => Widget);
readonly body: Widget;
readonly isExpanded: boolean;
readonly splashColor: upstream2.Color | null;
readonly highlightColor: upstream2.Color | null;
readonly canTapOnHeader: boolean;
readonly backgroundColor: upstream2.Color | null;
readonly value: {};
}
defineObject("flax.core/sdk_material#type:ExpansionPanelRadio", ["headerBuilder","body","isExpanded","splashColor","highlightColor","canTapOnHeader","backgroundColor","value"], [], _flaxBindingMethods("flax.core/sdk_material#type:ExpansionPanelRadio", "object", {}, {}), [], undefined, "flax.core/sdk_material#type:ExpansionPanel");
export function _ExpansionPanelRadioFactory(options: { value: {}; headerBuilder: ((context: upstream1.BuildContext, isExpanded: boolean) => Widget); body: Widget; canTapOnHeader?: boolean | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined }): ExpansionPanelRadio {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:ExpansionPanelRadio", "", [{"name":"value","required":true},{"name":"headerBuilder","required":true},{"name":"body","required":true},{"name":"canTapOnHeader"},{"name":"backgroundColor"},{"name":"splashColor"},{"name":"highlightColor"}], [], options) as ExpansionPanelRadio;
}
const _ExpansionPanelRadioProxy = {type: "flax.core/sdk_material#type:ExpansionPanelRadio", parameters: _flaxMemberParameters133, constructors: {"": _flaxMemberParameters133}, methods: {}, getters: ["value","headerBuilder","body","isExpanded","splashColor","highlightColor","canTapOnHeader","backgroundColor"], setters: [], contextMembers: [], superMembers: ["get:value","get:headerBuilder","get:body","get:isExpanded","get:splashColor","get:highlightColor","get:canTapOnHeader","get:backgroundColor"]} as const;
export interface _ExpansionPanelRadioNative extends ExpansionPanelRadio {
readonly [_flaxDartTypeValue]: _ExpansionPanelRadioNative;

get value(): {};
get headerBuilder(): ((context: upstream1.BuildContext, isExpanded: boolean) => Widget);
get body(): Widget;
get isExpanded(): boolean;
get splashColor(): upstream2.Color | null;
get highlightColor(): upstream2.Color | null;
get canTapOnHeader(): boolean;
get backgroundColor(): upstream2.Color | null;
}
export abstract class _ExpansionPanelRadioNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExpansionPanelRadio>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ExpansionPanelRadio;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ExpansionPanelRadio", readonly [], false];
constructor(options: {value: {}; headerBuilder: ((context: upstream1.BuildContext, isExpanded: boolean) => Widget); body: Widget; canTapOnHeader?: boolean | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) { super(_ExpansionPanelRadioProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ExpansionPanelRadioNative.prototype, _ExpansionPanelRadioProxy);
export namespace _ExpansionPanelRadioFactory { export function implement(args: [options: {value: {}; headerBuilder: ((context: upstream1.BuildContext, isExpanded: boolean) => Widget); body: Widget; canTapOnHeader?: boolean | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}], implementation: {}): ExpansionPanelRadio {
return constructProxy(_ExpansionPanelRadioProxy, args, implementation) as ExpansionPanelRadio; } }
const _ExpansionPanelRadioBinding = _flaxProxyFactory(_ExpansionPanelRadioFactory, _ExpansionPanelRadioNative) as unknown as typeof _ExpansionPanelRadioFactory & (new(options: {value: {}; headerBuilder: ((context: upstream1.BuildContext, isExpanded: boolean) => Widget); body: Widget; canTapOnHeader?: boolean | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) => _ExpansionPanelRadioNative);
export const ExpansionPanelRadio: typeof _ExpansionPanelRadioBinding & _FlaxInstanceType<ExpansionPanelRadio> & _FlaxDartType<ExpansionPanelRadio, readonly ["class", "flax.core/sdk_material#type:ExpansionPanelRadio", readonly [], false]> = _flaxBindInstanceType<ExpansionPanelRadio, typeof _ExpansionPanelRadioBinding>(_ExpansionPanelRadioBinding, "flax.core/sdk_material#type:ExpansionPanelRadio", ["flax.core/sdk_material#type:ExpansionPanel","dart:core::Object"]) as typeof _ExpansionPanelRadioBinding & _FlaxInstanceType<ExpansionPanelRadio> & _FlaxDartType<ExpansionPanelRadio, readonly ["class", "flax.core/sdk_material#type:ExpansionPanelRadio", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "headerBuilder" | "body" | "isExpanded" | "splashColor" | "highlightColor" | "canTapOnHeader" | "backgroundColor" | "value" | "__flaxBound:package:flutter/src/material/expansion_panel.dart::ExpansionPanelRadio" | "__flaxBound:package:flutter/src/material/expansion_panel.dart::ExpansionPanel";
