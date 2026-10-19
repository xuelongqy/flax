// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_UndoDirection';
import '@flax/flutter/services/_bindings/sdk_services_UndoDirection';
import { _flaxMemberParameters133, _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UndoManagerClient extends Readonly<{ "__flaxBound:package:flutter/src/services/undo_manager.dart::UndoManagerClient": readonly [] }> { readonly __UndoManagerClient: unique symbol;
readonly [_flaxDartTypeValue]: UndoManagerClient;

readonly canUndo: boolean;
readonly canRedo: boolean;
handlePlatformUndo(direction: upstream0.UndoDirection): void;
undo(): void;
redo(): void;
}
defineObject("flax.core/sdk_services#type:UndoManagerClient", ["canUndo","canRedo"], [], _flaxBindingMethods("flax.core/sdk_services#type:UndoManagerClient", "object", {"handlePlatformUndo":_flaxMemberParameters133,"undo":_flaxMemberParameters0,"redo":_flaxMemberParameters0}, {}), []);
export const UndoManagerClient: object & _FlaxInstanceType<UndoManagerClient> & _FlaxDartType<UndoManagerClient, readonly ["class", "flax.core/sdk_services#type:UndoManagerClient", readonly [], false]> = _flaxBindInstanceType<UndoManagerClient, object>({}, "flax.core/sdk_services#type:UndoManagerClient", ["dart:core::Object"]) as object & _FlaxInstanceType<UndoManagerClient> & _FlaxDartType<UndoManagerClient, readonly ["class", "flax.core/sdk_services#type:UndoManagerClient", readonly [], false]>;
