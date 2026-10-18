// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
const _flaxMemberParameters0 = [{"name":"disposition","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GestureArenaEntry extends Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaEntry": readonly [] }> { readonly __GestureArenaEntry: unique symbol;
readonly [_flaxDartTypeValue]: GestureArenaEntry;

resolve(disposition: upstream0.GestureDisposition): void;
}
defineObject("flax.core/sdk_gestures#type:GestureArenaEntry", [], [], _flaxBindingMethods("flax.core/sdk_gestures#type:GestureArenaEntry", "object", {"resolve":_flaxMemberParameters0}, {}), []);
export const GestureArenaEntry: object & _FlaxInstanceType<GestureArenaEntry> & _FlaxDartType<GestureArenaEntry, readonly ["class", "flax.core/sdk_gestures#type:GestureArenaEntry", readonly [], false]> = _flaxBindInstanceType<GestureArenaEntry, object>({}, "flax.core/sdk_gestures#type:GestureArenaEntry", ["dart:core::Object"]) as object & _FlaxInstanceType<GestureArenaEntry> & _FlaxDartType<GestureArenaEntry, readonly ["class", "flax.core/sdk_gestures#type:GestureArenaEntry", readonly [], false]>;
