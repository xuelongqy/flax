// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionStatus';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionStatus';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionDetails extends Readonly<{ "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectionDetails": readonly [] }> { readonly __SelectionDetails: unique symbol;
readonly [_flaxDartTypeValue]: SelectionDetails;

readonly range: upstream0.SelectedContentRange | null;
readonly status: upstream1.SelectionStatus;
}
defineObject("flax.core/sdk_widgets#type:SelectionDetails", ["range","status"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SelectionDetails", "object", {}, {}), []);
export const SelectionDetails: object & _FlaxInstanceType<SelectionDetails> & _FlaxDartType<SelectionDetails, readonly ["class", "flax.core/sdk_widgets#type:SelectionDetails", readonly [], false]> = _flaxBindInstanceType<SelectionDetails, object>({}, "flax.core/sdk_widgets#type:SelectionDetails", ["dart:core::Object"]) as object & _FlaxInstanceType<SelectionDetails> & _FlaxDartType<SelectionDetails, readonly ["class", "flax.core/sdk_widgets#type:SelectionDetails", readonly [], false]>;
