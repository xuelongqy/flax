// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_MergeableMaterialItem';
import '@flax/flutter/material/_bindings/sdk_material_MergeableMaterialItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import { _flaxMemberParameters2, _flaxMemberParameters187 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialGap extends Omit<upstream0.MergeableMaterialItem, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/mergeable_material.dart::MaterialGap": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/mergeable_material.dart::MergeableMaterialItem": readonly [] }> { readonly __MaterialGap: unique symbol;
readonly [_flaxDartTypeValue]: MaterialGap;

}
defineObject("flax.core/sdk_material#type:MaterialGap", ["key","size"], [], _flaxBindingMethods("flax.core/sdk_material#type:MaterialGap", "object", {"toString":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_material#type:MergeableMaterialItem");
const _MaterialGapProxy = {type: "flax.core/sdk_material#type:MaterialGap", parameters: _flaxMemberParameters187, constructors: {"": _flaxMemberParameters187}, methods: {"toString":_flaxMemberParameters2}, getters: ["size","key"], setters: [], contextMembers: [], superMembers: ["get:size","get:key","toString"]} as const;
export interface MaterialGap {
readonly [_flaxDartTypeValue]: MaterialGap;

toString(): string;
get size(): number;
get key(): upstream1.LocalKey;
}
export abstract class MaterialGap extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialGap>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialGap;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialGap", readonly [], false];
constructor(options: {key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>; size?: number | undefined}) { super(_MaterialGapProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MaterialGap.prototype, _MaterialGapProxy);
export namespace MaterialGap { export function implement(args: [options: {key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>; size?: number | undefined}], implementation: {}): MaterialGap {
return constructProxy(_MaterialGapProxy, args, implementation) as MaterialGap; } }
_flaxBindInstanceType<MaterialGap, typeof MaterialGap>(MaterialGap, "flax.core/sdk_material#type:MaterialGap", ["flax.core/sdk_material#type:MergeableMaterialItem","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "key" | "size" | "toString" | "__flaxBound:package:flutter/src/material/mergeable_material.dart::MaterialGap" | "__flaxBound:package:flutter/src/material/mergeable_material.dart::MergeableMaterialItem";
