// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TreeSliverIndentationType extends Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_tree.dart::TreeSliverIndentationType": readonly [] }> { readonly __TreeSliverIndentationType: unique symbol;
readonly [_flaxDartTypeValue]: TreeSliverIndentationType;

readonly value: number;
}
defineObject("flax.core/sdk_rendering#type:TreeSliverIndentationType", ["value"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:TreeSliverIndentationType", "object", {}, {}), []);
export namespace _TreeSliverIndentationTypeFactory { export declare const standard: TreeSliverIndentationType; }
export namespace _TreeSliverIndentationTypeFactory { export declare const none: TreeSliverIndentationType; }
_flaxDefineStaticGetters(_TreeSliverIndentationTypeFactory, "flax.core/sdk_rendering#read:TreeSliverIndentationType.", ["standard","none"]);
export namespace _TreeSliverIndentationTypeFactory { export function custom(value: number): TreeSliverIndentationType {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:TreeSliverIndentationType.custom", [value]);
return _flaxResult as TreeSliverIndentationType;
} }
export const TreeSliverIndentationType: typeof _TreeSliverIndentationTypeFactory & _FlaxInstanceType<TreeSliverIndentationType> & _FlaxDartType<TreeSliverIndentationType, readonly ["class", "flax.core/sdk_rendering#type:TreeSliverIndentationType", readonly [], false]> = _flaxBindInstanceType<TreeSliverIndentationType, typeof _TreeSliverIndentationTypeFactory>(_TreeSliverIndentationTypeFactory, "flax.core/sdk_rendering#type:TreeSliverIndentationType", ["dart:core::Object"]) as typeof _TreeSliverIndentationTypeFactory & _FlaxInstanceType<TreeSliverIndentationType> & _FlaxDartType<TreeSliverIndentationType, readonly ["class", "flax.core/sdk_rendering#type:TreeSliverIndentationType", readonly [], false]>;
