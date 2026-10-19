// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters71 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ControlsDetails extends Readonly<{ "__flaxBound:package:flutter/src/material/stepper.dart::ControlsDetails": readonly [] }> { readonly __ControlsDetails: unique symbol;
readonly [_flaxDartTypeValue]: ControlsDetails;

}
defineObject("flax.core/sdk_material#type:ControlsDetails", ["currentStep","stepIndex","onStepContinue","onStepCancel","isActive"], [], _flaxBindingMethods("flax.core/sdk_material#type:ControlsDetails", "object", {}, {}), []);
const _ControlsDetailsProxy = {type: "flax.core/sdk_material#type:ControlsDetails", parameters: _flaxMemberParameters71, constructors: {"": _flaxMemberParameters71}, methods: {}, getters: ["currentStep","stepIndex","onStepContinue","onStepCancel","isActive"], setters: [], contextMembers: [], superMembers: ["get:currentStep","get:stepIndex","get:onStepContinue","get:onStepCancel","get:isActive"]} as const;
export interface ControlsDetails {
readonly [_flaxDartTypeValue]: ControlsDetails;

get currentStep(): number;
get stepIndex(): number;
get onStepContinue(): (() => void) | null;
get onStepCancel(): (() => void) | null;
get isActive(): boolean;
}
export abstract class ControlsDetails extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ControlsDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ControlsDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ControlsDetails", readonly [], false];
constructor(options: {currentStep: number; stepIndex: number; onStepCancel?: (() => void) | null | undefined; onStepContinue?: (() => void) | null | undefined}) { super(_ControlsDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ControlsDetails.prototype, _ControlsDetailsProxy);
export namespace ControlsDetails { export function implement(args: [options: {currentStep: number; stepIndex: number; onStepCancel?: (() => void) | null | undefined; onStepContinue?: (() => void) | null | undefined}], implementation: {}): ControlsDetails {
return constructProxy(_ControlsDetailsProxy, args, implementation) as ControlsDetails; } }
_flaxBindInstanceType<ControlsDetails, typeof ControlsDetails>(ControlsDetails, "flax.core/sdk_material#type:ControlsDetails", ["dart:core::Object"]);
