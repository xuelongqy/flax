// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters72 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ControlsDetails extends Readonly<{ "__flaxBound:package:material_ui/src/stepper.dart::ControlsDetails": readonly [] }> { readonly __ControlsDetails: unique symbol;
readonly [_flaxDartTypeValue]: ControlsDetails;

readonly currentStep: number;
readonly stepIndex: number;
readonly onStepContinue: (() => void) | null;
readonly onStepCancel: (() => void) | null;
readonly isActive: boolean;
}
defineObject("flax.material/material#type:ControlsDetails", ["currentStep","stepIndex","onStepContinue","onStepCancel","isActive"], [], _flaxBindingMethods("flax.material/material#type:ControlsDetails", "object", {}, {}), []);
export function _ControlsDetailsFactory(options: { currentStep: number; stepIndex: number; onStepCancel?: (() => void) | null | undefined; onStepContinue?: (() => void) | null | undefined }): ControlsDetails {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ControlsDetails", "", [{"name":"currentStep","required":true},{"name":"stepIndex","required":true},{"name":"onStepCancel"},{"name":"onStepContinue"}], [], options) as ControlsDetails;
}
const _ControlsDetailsProxy = {type: "flax.material/material#type:ControlsDetails", parameters: _flaxMemberParameters72, constructors: {"": _flaxMemberParameters72}, methods: {}, getters: ["currentStep","stepIndex","onStepContinue","onStepCancel","isActive"], setters: [], contextMembers: [], superMembers: ["get:currentStep","get:stepIndex","get:onStepContinue","get:onStepCancel","get:isActive"]} as const;
export interface _ControlsDetailsNative extends ControlsDetails {
readonly [_flaxDartTypeValue]: _ControlsDetailsNative;

get currentStep(): number;
get stepIndex(): number;
get onStepContinue(): (() => void) | null;
get onStepCancel(): (() => void) | null;
get isActive(): boolean;
}
export abstract class _ControlsDetailsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ControlsDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ControlsDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ControlsDetails", readonly [], false];
constructor(options: {currentStep: number; stepIndex: number; onStepCancel?: (() => void) | null | undefined; onStepContinue?: (() => void) | null | undefined}) { super(_ControlsDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ControlsDetailsNative.prototype, _ControlsDetailsProxy);
export namespace _ControlsDetailsFactory { export function implement(args: [options: {currentStep: number; stepIndex: number; onStepCancel?: (() => void) | null | undefined; onStepContinue?: (() => void) | null | undefined}], implementation: {}): ControlsDetails {
return constructProxy(_ControlsDetailsProxy, args, implementation) as ControlsDetails; } }
const _ControlsDetailsBinding = _flaxProxyFactory(_ControlsDetailsFactory, _ControlsDetailsNative) as unknown as typeof _ControlsDetailsFactory & (new(options: {currentStep: number; stepIndex: number; onStepCancel?: (() => void) | null | undefined; onStepContinue?: (() => void) | null | undefined}) => _ControlsDetailsNative);
export const ControlsDetails: typeof _ControlsDetailsBinding & _FlaxInstanceType<ControlsDetails> & _FlaxDartType<ControlsDetails, readonly ["class", "flax.material/material#type:ControlsDetails", readonly [], false]> = _flaxBindInstanceType<ControlsDetails, typeof _ControlsDetailsBinding>(_ControlsDetailsBinding, "flax.material/material#type:ControlsDetails", ["dart:core::Object"]) as typeof _ControlsDetailsBinding & _FlaxInstanceType<ControlsDetails> & _FlaxDartType<ControlsDetails, readonly ["class", "flax.material/material#type:ControlsDetails", readonly [], false]>;
