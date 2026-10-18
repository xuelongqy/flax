// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_StepState';
import '@flax/flutter/material/_bindings/sdk_material_StepState';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_StepStyle';
import '@flax/flutter/material/_bindings/sdk_material_StepStyle';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Step extends Readonly<{ "__flaxBound:package:flutter/src/material/stepper.dart::Step": readonly [] }> { readonly __Step: unique symbol;
readonly [_flaxDartTypeValue]: Step;

}
defineObject("flax.core/sdk_material#type:Step", ["title","subtitle","content","state","isActive","label","stepStyle"], [], _flaxBindingMethods("flax.core/sdk_material#type:Step", "object", {}, {}), []);
const _StepProxy = {type: "flax.core/sdk_material#type:Step", parameters: [{"name":"title","required":true,"positional":false},{"name":"subtitle","required":false,"positional":false},{"name":"content","required":true,"positional":false},{"name":"state","required":false,"positional":false},{"name":"isActive","required":false,"positional":false},{"name":"label","required":false,"positional":false},{"name":"stepStyle","required":false,"positional":false}], constructors: {"":[{"name":"title","required":true,"positional":false},{"name":"subtitle","required":false,"positional":false},{"name":"content","required":true,"positional":false},{"name":"state","required":false,"positional":false},{"name":"isActive","required":false,"positional":false},{"name":"label","required":false,"positional":false},{"name":"stepStyle","required":false,"positional":false}]}, methods: {}, getters: ["title","subtitle","content","state","isActive","label","stepStyle"], setters: [], contextMembers: [], superMembers: ["get:title","get:subtitle","get:content","get:state","get:isActive","get:label","get:stepStyle"]} as const;
export interface Step {
readonly [_flaxDartTypeValue]: Step;

get title(): Widget;
get subtitle(): Widget | null;
get content(): Widget;
get state(): upstream0.StepState;
get isActive(): boolean;
get label(): Widget | null;
get stepStyle(): upstream1.StepStyle | null;
}
export abstract class Step extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Step>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Step;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:Step", readonly [], false];
constructor(options: {title: Widget; subtitle?: Widget | null | undefined; content: Widget; state?: upstream0.StepState | undefined; isActive?: boolean | undefined; label?: Widget | null | undefined; stepStyle?: Readonly<{ "__flaxBound:package:flutter/src/material/stepper.dart::StepStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_StepProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Step.prototype, _StepProxy);
export namespace Step { export function implement(args: [options: {title: Widget; subtitle?: Widget | null | undefined; content: Widget; state?: upstream0.StepState | undefined; isActive?: boolean | undefined; label?: Widget | null | undefined; stepStyle?: Readonly<{ "__flaxBound:package:flutter/src/material/stepper.dart::StepStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): Step {
return constructProxy(_StepProxy, args, implementation) as Step; } }
_flaxBindInstanceType<Step, typeof Step>(Step, "flax.core/sdk_material#type:Step", ["dart:core::Object"]);
