// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverflowBoxFit extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/shifted_box.dart::OverflowBoxFit">, Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::OverflowBoxFit": readonly [] }> { readonly __OverflowBoxFit: unique symbol;
readonly [_flaxDartTypeValue]: OverflowBoxFit;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_rendering#type:OverflowBoxFit", ["max","deferToChild"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_OverflowBoxFit_api = {
max: enumValue<OverflowBoxFit>("flax.core/sdk_rendering#type:OverflowBoxFit", "max"),
deferToChild: enumValue<OverflowBoxFit>("flax.core/sdk_rendering#type:OverflowBoxFit", "deferToChild"),
values: Object.freeze([enumValue<OverflowBoxFit>("flax.core/sdk_rendering#type:OverflowBoxFit", "max"), enumValue<OverflowBoxFit>("flax.core/sdk_rendering#type:OverflowBoxFit", "deferToChild")]),
};
export const OverflowBoxFit = Object.freeze(_flaxBindInstanceType<OverflowBoxFit, typeof _flaxEnum_OverflowBoxFit_api>(_flaxEnum_OverflowBoxFit_api, "flax.core/sdk_rendering#type:OverflowBoxFit", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_OverflowBoxFit_api & _FlaxInstanceType<OverflowBoxFit> & _FlaxDartType<OverflowBoxFit, readonly ["class", "flax.core/sdk_rendering#type:OverflowBoxFit", readonly [], false]>);
