// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_MergeableMaterialItem';
import '@flax/flutter/material/_bindings/sdk_material_MergeableMaterialItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters2, _flaxMemberParameters199 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialSlice extends Omit<upstream0.MergeableMaterialItem, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/mergeable_material.dart::MaterialSlice": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/mergeable_material.dart::MergeableMaterialItem": readonly [] }> { readonly __MaterialSlice: unique symbol;
readonly [_flaxDartTypeValue]: MaterialSlice;

readonly key: upstream1.LocalKey;
readonly child: Widget;
readonly color: upstream2.Color | null;
toString(): string;
}
defineObject("flax.core/sdk_material#type:MaterialSlice", ["key","child","color"], [], _flaxBindingMethods("flax.core/sdk_material#type:MaterialSlice", "object", {"toString":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_material#type:MergeableMaterialItem");
export function _MaterialSliceFactory(options: { key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>; child: Widget; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined }): MaterialSlice {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:MaterialSlice", "", [{"name":"key","required":true},{"name":"child","required":true},{"name":"color"}], [], options) as MaterialSlice;
}
const _MaterialSliceProxy = {type: "flax.core/sdk_material#type:MaterialSlice", parameters: _flaxMemberParameters199, constructors: {"": _flaxMemberParameters199}, methods: {"toString":_flaxMemberParameters2}, getters: ["child","color","key"], setters: [], contextMembers: [], superMembers: ["get:child","get:color","get:key","toString"]} as const;
export interface _MaterialSliceNative extends MaterialSlice {
readonly [_flaxDartTypeValue]: _MaterialSliceNative;

toString(): string;
get child(): Widget;
get color(): upstream2.Color | null;
get key(): upstream1.LocalKey;
}
export abstract class _MaterialSliceNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialSlice>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialSlice;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialSlice", readonly [], false];
constructor(options: {key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>; child: Widget; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) { super(_MaterialSliceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MaterialSliceNative.prototype, _MaterialSliceProxy);
export namespace _MaterialSliceFactory { export function implement(args: [options: {key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>; child: Widget; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}], implementation: {}): MaterialSlice {
return constructProxy(_MaterialSliceProxy, args, implementation) as MaterialSlice; } }
const _MaterialSliceBinding = _flaxProxyFactory(_MaterialSliceFactory, _MaterialSliceNative) as unknown as typeof _MaterialSliceFactory & (new(options: {key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>; child: Widget; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) => _MaterialSliceNative);
export const MaterialSlice: typeof _MaterialSliceBinding & _FlaxInstanceType<MaterialSlice> & _FlaxDartType<MaterialSlice, readonly ["class", "flax.core/sdk_material#type:MaterialSlice", readonly [], false]> = _flaxBindInstanceType<MaterialSlice, typeof _MaterialSliceBinding>(_MaterialSliceBinding, "flax.core/sdk_material#type:MaterialSlice", ["flax.core/sdk_material#type:MergeableMaterialItem","dart:core::Object"]) as typeof _MaterialSliceBinding & _FlaxInstanceType<MaterialSlice> & _FlaxDartType<MaterialSlice, readonly ["class", "flax.core/sdk_material#type:MaterialSlice", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "key" | "child" | "color" | "toString" | "__flaxBound:package:flutter/src/material/mergeable_material.dart::MaterialSlice" | "__flaxBound:package:flutter/src/material/mergeable_material.dart::MergeableMaterialItem";
