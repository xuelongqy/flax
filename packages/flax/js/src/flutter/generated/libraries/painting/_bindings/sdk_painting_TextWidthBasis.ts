// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextWidthBasis extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/painting/text_painter.dart::TextWidthBasis">, Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::TextWidthBasis": readonly [] }> { readonly __TextWidthBasis: unique symbol;
readonly [_flaxDartTypeValue]: TextWidthBasis;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_painting#type:TextWidthBasis", ["parent","longestLine"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TextWidthBasis_api = {
parent: enumValue<TextWidthBasis>("flax.core/sdk_painting#type:TextWidthBasis", "parent"),
longestLine: enumValue<TextWidthBasis>("flax.core/sdk_painting#type:TextWidthBasis", "longestLine"),
values: Object.freeze([enumValue<TextWidthBasis>("flax.core/sdk_painting#type:TextWidthBasis", "parent"), enumValue<TextWidthBasis>("flax.core/sdk_painting#type:TextWidthBasis", "longestLine")]),
};
export const TextWidthBasis = Object.freeze(_flaxBindInstanceType<TextWidthBasis, typeof _flaxEnum_TextWidthBasis_api>(_flaxEnum_TextWidthBasis_api, "flax.core/sdk_painting#type:TextWidthBasis", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TextWidthBasis_api & _FlaxInstanceType<TextWidthBasis> & _FlaxDartType<TextWidthBasis, readonly ["class", "flax.core/sdk_painting#type:TextWidthBasis", readonly [], false]>);
