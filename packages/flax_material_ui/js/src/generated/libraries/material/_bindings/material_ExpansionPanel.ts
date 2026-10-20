// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters132 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ExpansionPanel extends Readonly<{ "__flaxBound:package:material_ui/src/expansion_panel.dart::ExpansionPanel": readonly [] }> { readonly __ExpansionPanel: unique symbol;
readonly [_flaxDartTypeValue]: ExpansionPanel;

readonly headerBuilder: ((context: upstream0.BuildContext, isExpanded: boolean) => Widget);
readonly body: Widget;
readonly isExpanded: boolean;
readonly splashColor: upstream1.Color | null;
readonly highlightColor: upstream1.Color | null;
readonly canTapOnHeader: boolean;
readonly backgroundColor: upstream1.Color | null;
}
defineObject("flax.material/material#type:ExpansionPanel", ["headerBuilder","body","isExpanded","splashColor","highlightColor","canTapOnHeader","backgroundColor"], [], _flaxBindingMethods("flax.material/material#type:ExpansionPanel", "object", {}, {}), []);
export function _ExpansionPanelFactory(options: { headerBuilder: ((context: upstream0.BuildContext, isExpanded: boolean) => Widget); body: Widget; isExpanded?: boolean | undefined; canTapOnHeader?: boolean | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined }): ExpansionPanel {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ExpansionPanel", "", [{"name":"headerBuilder","required":true},{"name":"body","required":true},{"name":"isExpanded"},{"name":"canTapOnHeader"},{"name":"backgroundColor"},{"name":"splashColor"},{"name":"highlightColor"}], [], options) as ExpansionPanel;
}
const _ExpansionPanelProxy = {type: "flax.material/material#type:ExpansionPanel", parameters: _flaxMemberParameters132, constructors: {"": _flaxMemberParameters132}, methods: {}, getters: ["headerBuilder","body","isExpanded","splashColor","highlightColor","canTapOnHeader","backgroundColor"], setters: [], contextMembers: [], superMembers: ["get:headerBuilder","get:body","get:isExpanded","get:splashColor","get:highlightColor","get:canTapOnHeader","get:backgroundColor"]} as const;
export interface _ExpansionPanelNative extends ExpansionPanel {
readonly [_flaxDartTypeValue]: _ExpansionPanelNative;

get headerBuilder(): ((context: upstream0.BuildContext, isExpanded: boolean) => Widget);
get body(): Widget;
get isExpanded(): boolean;
get splashColor(): upstream1.Color | null;
get highlightColor(): upstream1.Color | null;
get canTapOnHeader(): boolean;
get backgroundColor(): upstream1.Color | null;
}
export abstract class _ExpansionPanelNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExpansionPanel>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ExpansionPanel;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ExpansionPanel", readonly [], false];
constructor(options: {headerBuilder: ((context: upstream0.BuildContext, isExpanded: boolean) => Widget); body: Widget; isExpanded?: boolean | undefined; canTapOnHeader?: boolean | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) { super(_ExpansionPanelProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ExpansionPanelNative.prototype, _ExpansionPanelProxy);
export namespace _ExpansionPanelFactory { export function implement(args: [options: {headerBuilder: ((context: upstream0.BuildContext, isExpanded: boolean) => Widget); body: Widget; isExpanded?: boolean | undefined; canTapOnHeader?: boolean | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}], implementation: {}): ExpansionPanel {
return constructProxy(_ExpansionPanelProxy, args, implementation) as ExpansionPanel; } }
const _ExpansionPanelBinding = _flaxProxyFactory(_ExpansionPanelFactory, _ExpansionPanelNative) as unknown as typeof _ExpansionPanelFactory & (new(options: {headerBuilder: ((context: upstream0.BuildContext, isExpanded: boolean) => Widget); body: Widget; isExpanded?: boolean | undefined; canTapOnHeader?: boolean | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) => _ExpansionPanelNative);
export const ExpansionPanel: typeof _ExpansionPanelBinding & _FlaxInstanceType<ExpansionPanel> & _FlaxDartType<ExpansionPanel, readonly ["class", "flax.material/material#type:ExpansionPanel", readonly [], false]> = _flaxBindInstanceType<ExpansionPanel, typeof _ExpansionPanelBinding>(_ExpansionPanelBinding, "flax.material/material#type:ExpansionPanel", ["dart:core::Object"]) as typeof _ExpansionPanelBinding & _FlaxInstanceType<ExpansionPanel> & _FlaxDartType<ExpansionPanel, readonly ["class", "flax.material/material#type:ExpansionPanel", readonly [], false]>;
