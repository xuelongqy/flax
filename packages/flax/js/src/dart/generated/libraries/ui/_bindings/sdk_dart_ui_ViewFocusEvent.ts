// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusState';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusDirection';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusDirection';
import { _flaxMemberParameters0 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ViewFocusEvent extends Readonly<{ "__flaxBound:dart:ui::ViewFocusEvent": readonly [] }> { readonly __ViewFocusEvent: unique symbol;
readonly [_flaxDartTypeValue]: ViewFocusEvent;

readonly viewId: number;
readonly state: upstream0.ViewFocusState;
readonly direction: upstream1.ViewFocusDirection;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:ViewFocusEvent", ["viewId","state","direction"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ViewFocusEvent", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _ViewFocusEventFactory(options: { viewId: number; state: upstream0.ViewFocusState; direction: upstream1.ViewFocusDirection }): ViewFocusEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:ViewFocusEvent", "", [{"name":"viewId","required":true},{"name":"state","required":true},{"name":"direction","required":true}], [], options) as ViewFocusEvent;
}
export const ViewFocusEvent: typeof _ViewFocusEventFactory & _FlaxInstanceType<ViewFocusEvent> & _FlaxDartType<ViewFocusEvent, readonly ["class", "flax.core/sdk_dart_ui#type:ViewFocusEvent", readonly [], false]> = _flaxBindInstanceType<ViewFocusEvent, typeof _ViewFocusEventFactory>(_ViewFocusEventFactory, "flax.core/sdk_dart_ui#type:ViewFocusEvent", ["dart:core::Object"]) as typeof _ViewFocusEventFactory & _FlaxInstanceType<ViewFocusEvent> & _FlaxDartType<ViewFocusEvent, readonly ["class", "flax.core/sdk_dart_ui#type:ViewFocusEvent", readonly [], false]>;
