// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
const _flaxMemberParameters0 = [{"name":"event","required":true,"positional":true},{"name":"result","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HitTestDispatcher extends Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestDispatcher": readonly [] }> { readonly __HitTestDispatcher: unique symbol;
readonly [_flaxDartTypeValue]: HitTestDispatcher;

dispatchEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, result: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }>): void;
}
defineObject("flax.core/sdk_gestures#type:HitTestDispatcher", [], [], _flaxBindingMethods("flax.core/sdk_gestures#type:HitTestDispatcher", "object", {"dispatchEvent":_flaxMemberParameters0}, {}), []);
const _HitTestDispatcherProxy = {type: "flax.core/sdk_gestures#type:HitTestDispatcher", parameters: _flaxMemberParameters1, constructors: {}, methods: {"dispatchEvent":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _HitTestDispatcherFactory { export function implement(args: [], implementation: {dispatchEvent: ((event: upstream0.PointerEvent, result: upstream1.HitTestResult) => void)}): HitTestDispatcher {
return constructProxy(_HitTestDispatcherProxy, args, implementation) as HitTestDispatcher; } }
export const HitTestDispatcher: typeof _HitTestDispatcherFactory & _FlaxInstanceType<HitTestDispatcher> & _FlaxDartType<HitTestDispatcher, readonly ["class", "flax.core/sdk_gestures#type:HitTestDispatcher", readonly [], false]> = _flaxBindInstanceType<HitTestDispatcher, typeof _HitTestDispatcherFactory>(_HitTestDispatcherFactory, "flax.core/sdk_gestures#type:HitTestDispatcher", ["dart:core::Object"]) as typeof _HitTestDispatcherFactory & _FlaxInstanceType<HitTestDispatcher> & _FlaxDartType<HitTestDispatcher, readonly ["class", "flax.core/sdk_gestures#type:HitTestDispatcher", readonly [], false]>;
