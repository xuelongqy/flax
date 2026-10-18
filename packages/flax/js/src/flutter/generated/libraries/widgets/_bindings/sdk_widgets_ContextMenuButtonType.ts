// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContextMenuButtonType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonType">, Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonType": readonly [] }> { readonly __ContextMenuButtonType: unique symbol;
readonly [_flaxDartTypeValue]: ContextMenuButtonType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:ContextMenuButtonType", ["cut","copy","paste","selectAll","delete","lookUp","searchWeb","share","liveTextInput","custom"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ContextMenuButtonType_api = {
cut: enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "cut"),
copy: enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "copy"),
paste: enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "paste"),
selectAll: enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "selectAll"),
delete: enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "delete"),
lookUp: enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "lookUp"),
searchWeb: enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "searchWeb"),
share: enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "share"),
liveTextInput: enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "liveTextInput"),
custom: enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "custom"),
values: Object.freeze([enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "cut"), enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "copy"), enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "paste"), enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "selectAll"), enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "delete"), enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "lookUp"), enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "searchWeb"), enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "share"), enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "liveTextInput"), enumValue<ContextMenuButtonType>("flax.core/sdk_widgets#type:ContextMenuButtonType", "custom")]),
};
export const ContextMenuButtonType = Object.freeze(_flaxBindInstanceType<ContextMenuButtonType, typeof _flaxEnum_ContextMenuButtonType_api>(_flaxEnum_ContextMenuButtonType_api, "flax.core/sdk_widgets#type:ContextMenuButtonType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ContextMenuButtonType_api & _FlaxInstanceType<ContextMenuButtonType> & _FlaxDartType<ContextMenuButtonType, readonly ["class", "flax.core/sdk_widgets#type:ContextMenuButtonType", readonly [], false]>);
