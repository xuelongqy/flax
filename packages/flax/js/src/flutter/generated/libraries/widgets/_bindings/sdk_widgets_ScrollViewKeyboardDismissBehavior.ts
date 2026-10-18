// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollViewKeyboardDismissBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/scroll_view.dart::ScrollViewKeyboardDismissBehavior">, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_view.dart::ScrollViewKeyboardDismissBehavior": readonly [] }> { readonly __ScrollViewKeyboardDismissBehavior: unique symbol;
readonly [_flaxDartTypeValue]: ScrollViewKeyboardDismissBehavior;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:ScrollViewKeyboardDismissBehavior", ["manual","onDrag"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ScrollViewKeyboardDismissBehavior_api = {
manual: enumValue<ScrollViewKeyboardDismissBehavior>("flax.core/sdk_widgets#type:ScrollViewKeyboardDismissBehavior", "manual"),
onDrag: enumValue<ScrollViewKeyboardDismissBehavior>("flax.core/sdk_widgets#type:ScrollViewKeyboardDismissBehavior", "onDrag"),
values: Object.freeze([enumValue<ScrollViewKeyboardDismissBehavior>("flax.core/sdk_widgets#type:ScrollViewKeyboardDismissBehavior", "manual"), enumValue<ScrollViewKeyboardDismissBehavior>("flax.core/sdk_widgets#type:ScrollViewKeyboardDismissBehavior", "onDrag")]),
};
export const ScrollViewKeyboardDismissBehavior = Object.freeze(_flaxBindInstanceType<ScrollViewKeyboardDismissBehavior, typeof _flaxEnum_ScrollViewKeyboardDismissBehavior_api>(_flaxEnum_ScrollViewKeyboardDismissBehavior_api, "flax.core/sdk_widgets#type:ScrollViewKeyboardDismissBehavior", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ScrollViewKeyboardDismissBehavior_api & _FlaxInstanceType<ScrollViewKeyboardDismissBehavior> & _FlaxDartType<ScrollViewKeyboardDismissBehavior, readonly ["class", "flax.core/sdk_widgets#type:ScrollViewKeyboardDismissBehavior", readonly [], false]>);
