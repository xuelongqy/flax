// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters1 } from "@flax/flutter/scheduler/_bindings/sdk_scheduler.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/scheduler/_bindings/sdk_scheduler.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Priority extends Readonly<{ "__flaxBound:package:flutter/src/scheduler/priority.dart::Priority": readonly [] }> { readonly __Priority: unique symbol;
readonly [_flaxDartTypeValue]: Priority;

readonly value: number;
operatorAdd(offset: number): Priority;
operatorSubtract(offset: number): Priority;
}
defineObject("flax.core/sdk_scheduler#type:Priority", ["value"], [], _flaxBindingMethods("flax.core/sdk_scheduler#type:Priority", "object", {"operatorAdd":_flaxMemberParameters1,"operatorSubtract":_flaxMemberParameters1}, {}), []);
const _PriorityFactory = {} as {readonly idle: Priority;readonly animation: Priority;readonly touch: Priority;readonly kMaxOffset: number};
_flaxDefineStaticGetters(_PriorityFactory, "flax.core/sdk_scheduler#read:Priority.", ["idle","animation","touch","kMaxOffset"]);
export const Priority: typeof _PriorityFactory & _FlaxInstanceType<Priority> & _FlaxDartType<Priority, readonly ["class", "flax.core/sdk_scheduler#type:Priority", readonly [], false]> = _flaxBindInstanceType<Priority, typeof _PriorityFactory>(_PriorityFactory, "flax.core/sdk_scheduler#type:Priority", ["dart:core::Object"]) as typeof _PriorityFactory & _FlaxInstanceType<Priority> & _FlaxDartType<Priority, readonly ["class", "flax.core/sdk_scheduler#type:Priority", readonly [], false]>;
