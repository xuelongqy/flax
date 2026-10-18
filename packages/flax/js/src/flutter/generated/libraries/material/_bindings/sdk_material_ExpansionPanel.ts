// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ExpansionPanel extends Readonly<{ "__flaxBound:package:flutter/src/material/expansion_panel.dart::ExpansionPanel": readonly [] }> { readonly __ExpansionPanel: unique symbol;
readonly [_flaxDartTypeValue]: ExpansionPanel;

}
defineObject("flax.core/sdk_material#type:ExpansionPanel", ["headerBuilder","body","isExpanded","splashColor","highlightColor","canTapOnHeader","backgroundColor"], [], _flaxBindingMethods("flax.core/sdk_material#type:ExpansionPanel", "object", {}, {}), []);
const _ExpansionPanelProxy = {type: "flax.core/sdk_material#type:ExpansionPanel", parameters: [{"name":"headerBuilder","required":true,"positional":false},{"name":"body","required":true,"positional":false},{"name":"isExpanded","required":false,"positional":false},{"name":"canTapOnHeader","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"splashColor","required":false,"positional":false},{"name":"highlightColor","required":false,"positional":false}], constructors: {"":[{"name":"headerBuilder","required":true,"positional":false},{"name":"body","required":true,"positional":false},{"name":"isExpanded","required":false,"positional":false},{"name":"canTapOnHeader","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"splashColor","required":false,"positional":false},{"name":"highlightColor","required":false,"positional":false}]}, methods: {}, getters: ["headerBuilder","body","isExpanded","splashColor","highlightColor","canTapOnHeader","backgroundColor"], setters: [], contextMembers: [], superMembers: ["get:headerBuilder","get:body","get:isExpanded","get:splashColor","get:highlightColor","get:canTapOnHeader","get:backgroundColor"]} as const;
export interface ExpansionPanel {
readonly [_flaxDartTypeValue]: ExpansionPanel;

get headerBuilder(): ((context: upstream0.BuildContext, isExpanded: boolean) => Widget);
get body(): Widget;
get isExpanded(): boolean;
get splashColor(): upstream1.Color | null;
get highlightColor(): upstream1.Color | null;
get canTapOnHeader(): boolean;
get backgroundColor(): upstream1.Color | null;
}
export abstract class ExpansionPanel extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExpansionPanel>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ExpansionPanel;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ExpansionPanel", readonly [], false];
constructor(options: {headerBuilder: ((context: upstream0.BuildContext, isExpanded: boolean) => Widget); body: Widget; isExpanded?: boolean | undefined; canTapOnHeader?: boolean | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) { super(_ExpansionPanelProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ExpansionPanel.prototype, _ExpansionPanelProxy);
export namespace ExpansionPanel { export function implement(args: [options: {headerBuilder: ((context: upstream0.BuildContext, isExpanded: boolean) => Widget); body: Widget; isExpanded?: boolean | undefined; canTapOnHeader?: boolean | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}], implementation: {}): ExpansionPanel {
return constructProxy(_ExpansionPanelProxy, args, implementation) as ExpansionPanel; } }
_flaxBindInstanceType<ExpansionPanel, typeof ExpansionPanel>(ExpansionPanel, "flax.core/sdk_material#type:ExpansionPanel", ["dart:core::Object"]);
