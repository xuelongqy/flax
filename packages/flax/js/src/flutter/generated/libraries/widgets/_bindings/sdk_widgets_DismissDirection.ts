// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DismissDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/dismissible.dart::DismissDirection">, Readonly<{ "__flaxBound:package:flutter/src/widgets/dismissible.dart::DismissDirection": readonly [] }> { readonly __DismissDirection: unique symbol;
readonly [_flaxDartTypeValue]: DismissDirection;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:DismissDirection", ["vertical","horizontal","endToStart","startToEnd","up","down","none"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_DismissDirection_api = {
vertical: enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "vertical"),
horizontal: enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "horizontal"),
endToStart: enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "endToStart"),
startToEnd: enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "startToEnd"),
up: enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "up"),
down: enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "down"),
none: enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "none"),
values: Object.freeze([enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "vertical"), enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "horizontal"), enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "endToStart"), enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "startToEnd"), enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "up"), enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "down"), enumValue<DismissDirection>("flax.core/sdk_widgets#type:DismissDirection", "none")]),
};
export const DismissDirection = Object.freeze(_flaxBindInstanceType<DismissDirection, typeof _flaxEnum_DismissDirection_api>(_flaxEnum_DismissDirection_api, "flax.core/sdk_widgets#type:DismissDirection", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_DismissDirection_api & _FlaxInstanceType<DismissDirection> & _FlaxDartType<DismissDirection, readonly ["class", "flax.core/sdk_widgets#type:DismissDirection", readonly [], false]>);
