// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters30, _flaxMemberParameters2 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsLabelBuilder extends Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsLabelBuilder": readonly [] }> { readonly __SemanticsLabelBuilder: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsLabelBuilder;

readonly separator: string;
readonly textDirection: upstream0.TextDirection | null;
readonly isEmpty: boolean;
readonly length: number;
addPart(label: string, options?: {textDirection?: upstream0.TextDirection | null | undefined}): void;
build(): string;
clear(): void;
}
defineObject("flax.core/sdk_semantics#type:SemanticsLabelBuilder", ["separator","textDirection","isEmpty","length"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:SemanticsLabelBuilder", "object", {"addPart":_flaxMemberParameters30,"build":_flaxMemberParameters2,"clear":_flaxMemberParameters2}, {}), []);
export function _SemanticsLabelBuilderFactory(options: { separator?: string | undefined; textDirection?: upstream0.TextDirection | null | undefined } = {}): SemanticsLabelBuilder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_semantics#type:SemanticsLabelBuilder", "", [{"name":"separator"},{"name":"textDirection"}], [], options) as SemanticsLabelBuilder;
}
export const SemanticsLabelBuilder: typeof _SemanticsLabelBuilderFactory & _FlaxInstanceType<SemanticsLabelBuilder> & _FlaxDartType<SemanticsLabelBuilder, readonly ["class", "flax.core/sdk_semantics#type:SemanticsLabelBuilder", readonly [], false]> = _flaxBindInstanceType<SemanticsLabelBuilder, typeof _SemanticsLabelBuilderFactory>(_SemanticsLabelBuilderFactory, "flax.core/sdk_semantics#type:SemanticsLabelBuilder", ["dart:core::Object"]) as typeof _SemanticsLabelBuilderFactory & _FlaxInstanceType<SemanticsLabelBuilder> & _FlaxDartType<SemanticsLabelBuilder, readonly ["class", "flax.core/sdk_semantics#type:SemanticsLabelBuilder", readonly [], false]>;
