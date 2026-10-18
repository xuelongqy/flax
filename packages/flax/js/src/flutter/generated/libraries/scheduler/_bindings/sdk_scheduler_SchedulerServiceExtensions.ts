// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/scheduler/_bindings/sdk_scheduler.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SchedulerServiceExtensions extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/scheduler/service_extensions.dart::SchedulerServiceExtensions">, Readonly<{ "__flaxBound:package:flutter/src/scheduler/service_extensions.dart::SchedulerServiceExtensions": readonly [] }> { readonly __SchedulerServiceExtensions: unique symbol;
readonly [_flaxDartTypeValue]: SchedulerServiceExtensions;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_scheduler#type:SchedulerServiceExtensions", ["timeDilation"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_SchedulerServiceExtensions_api = {
timeDilation: enumValue<SchedulerServiceExtensions>("flax.core/sdk_scheduler#type:SchedulerServiceExtensions", "timeDilation"),
values: Object.freeze([enumValue<SchedulerServiceExtensions>("flax.core/sdk_scheduler#type:SchedulerServiceExtensions", "timeDilation")]),
};
export const SchedulerServiceExtensions = Object.freeze(_flaxBindInstanceType<SchedulerServiceExtensions, typeof _flaxEnum_SchedulerServiceExtensions_api>(_flaxEnum_SchedulerServiceExtensions_api, "flax.core/sdk_scheduler#type:SchedulerServiceExtensions", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_SchedulerServiceExtensions_api & _FlaxInstanceType<SchedulerServiceExtensions> & _FlaxDartType<SchedulerServiceExtensions, readonly ["class", "flax.core/sdk_scheduler#type:SchedulerServiceExtensions", readonly [], false]>);
