// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_StepState';
import '@flax/material-ui/_bindings/material_StepState';
import type * as upstream1 from '@flax/material-ui/_bindings/material_StepStyle';
import '@flax/material-ui/_bindings/material_StepStyle';
import { _flaxMemberParameters295 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Step extends Readonly<{ "__flaxBound:package:material_ui/src/stepper.dart::Step": readonly [] }> { readonly __Step: unique symbol;
readonly [_flaxDartTypeValue]: Step;

readonly title: Widget;
readonly subtitle: Widget | null;
readonly content: Widget;
readonly state: upstream0.StepState;
readonly isActive: boolean;
readonly label: Widget | null;
readonly stepStyle: upstream1.StepStyle | null;
}
defineObject("flax.material/material#type:Step", ["title","subtitle","content","state","isActive","label","stepStyle"], [], _flaxBindingMethods("flax.material/material#type:Step", "object", {}, {}), []);
export function _StepFactory(options: { title: Widget; subtitle?: Widget | null | undefined; content: Widget; state?: upstream0.StepState | undefined; isActive?: boolean | undefined; label?: Widget | null | undefined; stepStyle?: Readonly<{ "__flaxBound:package:material_ui/src/stepper.dart::StepStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined }): Step {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:Step", "", [{"name":"title","required":true},{"name":"subtitle"},{"name":"content","required":true},{"name":"state"},{"name":"isActive"},{"name":"label"},{"name":"stepStyle"}], [], options) as Step;
}
const _StepProxy = {type: "flax.material/material#type:Step", parameters: _flaxMemberParameters295, constructors: {"": _flaxMemberParameters295}, methods: {}, getters: ["title","subtitle","content","state","isActive","label","stepStyle"], setters: [], contextMembers: [], superMembers: ["get:title","get:subtitle","get:content","get:state","get:isActive","get:label","get:stepStyle"]} as const;
export interface _StepNative extends Step {
readonly [_flaxDartTypeValue]: _StepNative;

get title(): Widget;
get subtitle(): Widget | null;
get content(): Widget;
get state(): upstream0.StepState;
get isActive(): boolean;
get label(): Widget | null;
get stepStyle(): upstream1.StepStyle | null;
}
export abstract class _StepNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Step>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Step;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:Step", readonly [], false];
constructor(options: {title: Widget; subtitle?: Widget | null | undefined; content: Widget; state?: upstream0.StepState | undefined; isActive?: boolean | undefined; label?: Widget | null | undefined; stepStyle?: Readonly<{ "__flaxBound:package:material_ui/src/stepper.dart::StepStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_StepProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_StepNative.prototype, _StepProxy);
export namespace _StepFactory { export function implement(args: [options: {title: Widget; subtitle?: Widget | null | undefined; content: Widget; state?: upstream0.StepState | undefined; isActive?: boolean | undefined; label?: Widget | null | undefined; stepStyle?: Readonly<{ "__flaxBound:package:material_ui/src/stepper.dart::StepStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): Step {
return constructProxy(_StepProxy, args, implementation) as Step; } }
const _StepBinding = _flaxProxyFactory(_StepFactory, _StepNative) as unknown as typeof _StepFactory & (new(options: {title: Widget; subtitle?: Widget | null | undefined; content: Widget; state?: upstream0.StepState | undefined; isActive?: boolean | undefined; label?: Widget | null | undefined; stepStyle?: Readonly<{ "__flaxBound:package:material_ui/src/stepper.dart::StepStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) => _StepNative);
export const Step: typeof _StepBinding & _FlaxInstanceType<Step> & _FlaxDartType<Step, readonly ["class", "flax.material/material#type:Step", readonly [], false]> = _flaxBindInstanceType<Step, typeof _StepBinding>(_StepBinding, "flax.material/material#type:Step", ["dart:core::Object"]) as typeof _StepBinding & _FlaxInstanceType<Step> & _FlaxDartType<Step, readonly ["class", "flax.material/material#type:Step", readonly [], false]>;
