// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ObjectEvent';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"className","required":true,"positional":false},{"name":"library","required":true,"positional":false},{"name":"object","required":true,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"object","required":true,"positional":false}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlutterMemoryAllocations extends Readonly<{ "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::FlutterMemoryAllocations": readonly [] }> { readonly __FlutterMemoryAllocations: unique symbol;
readonly [_flaxDartTypeValue]: FlutterMemoryAllocations;

readonly hasListeners: boolean;
addListener(listener: ((event: upstream0.ObjectEvent) => void)): void;
removeListener(listener: ((event: upstream0.ObjectEvent) => void)): void;
dispatchObjectEvent(event: Readonly<{ "__flaxBound:package:flutter/src/foundation/memory_allocations.dart::ObjectEvent": readonly [] }>): void;
dispatchObjectCreated(options: {className: string; library: string; object: {}}): void;
dispatchObjectDisposed(options: {object: {}}): void;
}
defineObject("flax.core/sdk_foundation#type:FlutterMemoryAllocations", ["hasListeners"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:FlutterMemoryAllocations", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"dispatchObjectEvent":_flaxMemberParameters1,"dispatchObjectCreated":_flaxMemberParameters2,"dispatchObjectDisposed":_flaxMemberParameters3}, {}), []);
const _FlutterMemoryAllocationsFactory = {} as {readonly instance: FlutterMemoryAllocations};
_flaxDefineStaticGetters(_FlutterMemoryAllocationsFactory, "flax.core/sdk_foundation#read:FlutterMemoryAllocations.", ["instance"]);
export const FlutterMemoryAllocations: typeof _FlutterMemoryAllocationsFactory & _FlaxInstanceType<FlutterMemoryAllocations> & _FlaxDartType<FlutterMemoryAllocations, readonly ["class", "flax.core/sdk_foundation#type:FlutterMemoryAllocations", readonly [], false]> = _flaxBindInstanceType<FlutterMemoryAllocations, typeof _FlutterMemoryAllocationsFactory>(_FlutterMemoryAllocationsFactory, "flax.core/sdk_foundation#type:FlutterMemoryAllocations", ["dart:core::Object"]) as typeof _FlutterMemoryAllocationsFactory & _FlaxInstanceType<FlutterMemoryAllocations> & _FlaxDartType<FlutterMemoryAllocations, readonly ["class", "flax.core/sdk_foundation#type:FlutterMemoryAllocations", readonly [], false]>;
