// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { _flaxMemberParameters66 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StringAttribute extends Readonly<{ "__flaxBound:dart:ui::StringAttribute": readonly [] }> { readonly __StringAttribute: unique symbol;
readonly [_flaxDartTypeValue]: StringAttribute;

readonly range: upstream0.TextRange;
copy(options: {range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}): StringAttribute;
}
defineObject("flax.core/sdk_dart_ui#type:StringAttribute", ["range"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:StringAttribute", "object", {"copy":_flaxMemberParameters66}, {}), []);
export const StringAttribute: object & _FlaxInstanceType<StringAttribute> & _FlaxDartType<StringAttribute, readonly ["class", "flax.core/sdk_dart_ui#type:StringAttribute", readonly [], false]> = _flaxBindInstanceType<StringAttribute, object>({}, "flax.core/sdk_dart_ui#type:StringAttribute", ["dart:core::Object"]) as object & _FlaxInstanceType<StringAttribute> & _FlaxDartType<StringAttribute, readonly ["class", "flax.core/sdk_dart_ui#type:StringAttribute", readonly [], false]>;
