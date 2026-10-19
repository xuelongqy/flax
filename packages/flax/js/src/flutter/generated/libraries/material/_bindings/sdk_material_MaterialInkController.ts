// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import { _flaxMemberParameters188, _flaxMemberParameters2 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialInkController extends Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [] }> { readonly __MaterialInkController: unique symbol;
readonly [_flaxDartTypeValue]: MaterialInkController;

readonly color: upstream0.Color | null;
readonly vsync: upstream1.TickerProvider;
addInkFeature(feature: Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::InkFeature": readonly [] }>): void;
markNeedsPaint(): void;
}
defineObject("flax.core/sdk_material#type:MaterialInkController", ["color","vsync"], [], _flaxBindingMethods("flax.core/sdk_material#type:MaterialInkController", "object", {"addInkFeature":_flaxMemberParameters188,"markNeedsPaint":_flaxMemberParameters2}, {}), []);
const _MaterialInkControllerProxy = {type: "flax.core/sdk_material#type:MaterialInkController", parameters: _flaxMemberParameters2, constructors: {}, methods: {"addInkFeature":_flaxMemberParameters188,"markNeedsPaint":_flaxMemberParameters2}, getters: ["color","vsync"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _MaterialInkControllerFactory { export function implement(args: [], implementation: {addInkFeature: ((feature: upstream2.InkFeature) => void); markNeedsPaint: (() => void); get color(): Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null; get vsync(): Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>}): MaterialInkController {
return constructProxy(_MaterialInkControllerProxy, args, implementation) as MaterialInkController; } }
export const MaterialInkController: typeof _MaterialInkControllerFactory & _FlaxInstanceType<MaterialInkController> & _FlaxDartType<MaterialInkController, readonly ["class", "flax.core/sdk_material#type:MaterialInkController", readonly [], false]> = _flaxBindInstanceType<MaterialInkController, typeof _MaterialInkControllerFactory>(_MaterialInkControllerFactory, "flax.core/sdk_material#type:MaterialInkController", ["dart:core::Object"]) as typeof _MaterialInkControllerFactory & _FlaxInstanceType<MaterialInkController> & _FlaxDartType<MaterialInkController, readonly ["class", "flax.core/sdk_material#type:MaterialInkController", readonly [], false]>;
