// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_MergeableMaterialItem';
import '@flax/material-ui/_bindings/material_MergeableMaterialItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import { _flaxMemberParameters4, _flaxMemberParameters210 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialGap extends Omit<upstream0.MergeableMaterialItem, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/mergeable_material.dart::MaterialGap": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/mergeable_material.dart::MergeableMaterialItem": readonly [] }> { readonly __MaterialGap: unique symbol;
readonly [_flaxDartTypeValue]: MaterialGap;

readonly key: upstream1.LocalKey;
readonly size: number;
toString(): string;
}
defineObject("flax.material/material#type:MaterialGap", ["key","size"], [], _flaxBindingMethods("flax.material/material#type:MaterialGap", "object", {"toString":_flaxMemberParameters4}, {}), [], undefined, "flax.material/material#type:MergeableMaterialItem");
export function _MaterialGapFactory(options: { key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>; size?: number | undefined }): MaterialGap {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MaterialGap", "", [{"name":"key","required":true},{"name":"size"}], [], options) as MaterialGap;
}
const _MaterialGapProxy = {type: "flax.material/material#type:MaterialGap", parameters: _flaxMemberParameters210, constructors: {"": _flaxMemberParameters210}, methods: {"toString":_flaxMemberParameters4}, getters: ["size","key"], setters: [], contextMembers: [], superMembers: ["get:size","get:key","toString"]} as const;
export interface _MaterialGapNative extends MaterialGap {
readonly [_flaxDartTypeValue]: _MaterialGapNative;

toString(): string;
get size(): number;
get key(): upstream1.LocalKey;
}
export abstract class _MaterialGapNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialGap>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialGap;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialGap", readonly [], false];
constructor(options: {key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>; size?: number | undefined}) { super(_MaterialGapProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MaterialGapNative.prototype, _MaterialGapProxy);
export namespace _MaterialGapFactory { export function implement(args: [options: {key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>; size?: number | undefined}], implementation: {}): MaterialGap {
return constructProxy(_MaterialGapProxy, args, implementation) as MaterialGap; } }
const _MaterialGapBinding = _flaxProxyFactory(_MaterialGapFactory, _MaterialGapNative) as unknown as typeof _MaterialGapFactory & (new(options: {key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>; size?: number | undefined}) => _MaterialGapNative);
export const MaterialGap: typeof _MaterialGapBinding & _FlaxInstanceType<MaterialGap> & _FlaxDartType<MaterialGap, readonly ["class", "flax.material/material#type:MaterialGap", readonly [], false]> = _flaxBindInstanceType<MaterialGap, typeof _MaterialGapBinding>(_MaterialGapBinding, "flax.material/material#type:MaterialGap", ["flax.material/material#type:MergeableMaterialItem","dart:core::Object"]) as typeof _MaterialGapBinding & _FlaxInstanceType<MaterialGap> & _FlaxDartType<MaterialGap, readonly ["class", "flax.material/material#type:MaterialGap", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "key" | "size" | "toString" | "__flaxBound:package:material_ui/src/mergeable_material.dart::MaterialGap" | "__flaxBound:package:material_ui/src/mergeable_material.dart::MergeableMaterialItem";
