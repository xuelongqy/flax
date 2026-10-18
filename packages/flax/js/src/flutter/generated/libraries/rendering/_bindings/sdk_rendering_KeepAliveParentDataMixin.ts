// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeepAliveParentDataMixin extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }> { readonly __KeepAliveParentDataMixin: unique symbol;
readonly [_flaxDartTypeValue]: KeepAliveParentDataMixin;

get keepAlive(): boolean;
readonly keptAlive: boolean;
detach(): void;
toString(): string;
set keepAlive(value: boolean);
}
defineObject("flax.core/sdk_rendering#type:KeepAliveParentDataMixin", ["keepAlive","keptAlive"], ["keepAlive"], _flaxBindingMethods("flax.core/sdk_rendering#type:KeepAliveParentDataMixin", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:ParentData");
export const KeepAliveParentDataMixin: object & _FlaxInstanceType<KeepAliveParentDataMixin> & _FlaxDartType<KeepAliveParentDataMixin, readonly ["class", "flax.core/sdk_rendering#type:KeepAliveParentDataMixin", readonly [], false]> = _flaxBindInstanceType<KeepAliveParentDataMixin, object>({}, "flax.core/sdk_rendering#type:KeepAliveParentDataMixin", ["dart:core::Object","flax.core/sdk_rendering#type:ParentData"]) as object & _FlaxInstanceType<KeepAliveParentDataMixin> & _FlaxDartType<KeepAliveParentDataMixin, readonly ["class", "flax.core/sdk_rendering#type:KeepAliveParentDataMixin", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "keepAlive" | "keptAlive" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";
