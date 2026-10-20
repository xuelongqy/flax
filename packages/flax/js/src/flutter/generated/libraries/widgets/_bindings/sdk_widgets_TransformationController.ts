// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters2, _flaxMemberParameters421, _flaxMemberParameters422, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TransformationController extends Omit<upstream0.ValueNotifier<upstream1.Matrix4>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.Matrix4>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.Matrix4> | keyof upstream2.ChangeNotifier>, Omit<upstream4.ValueListenable<upstream1.Matrix4>, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.Matrix4> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/interactive_viewer.dart::TransformationController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream1.Matrix4] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.Matrix4] }> { readonly __TransformationController: unique symbol;
readonly [_flaxDartTypeValue]: TransformationController;

get value(): upstream1.Matrix4;
readonly hasListeners: boolean;
toString(): string;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
toScene(viewportPoint: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream5.Offset;
set value(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>);
}
defineObject("flax.core/sdk_widgets#type:TransformationController", ["value","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:TransformationController", "object", {"toString":_flaxMemberParameters2,"toScene":_flaxMemberParameters421}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _TransformationControllerFactory(value?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): TransformationController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:TransformationController", "", [{"name":"value","positional":true}], [value], {}) as TransformationController;
}
const _TransformationControllerProxy = {type: "flax.core/sdk_widgets#type:TransformationController", parameters: _flaxMemberParameters422, constructors: {"": _flaxMemberParameters422}, methods: {"toString":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"toScene":_flaxMemberParameters421}, getters: ["value","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:hasListeners","set:value","toString","addListener","removeListener","dispose","toScene"]} as const;
export interface _TransformationControllerNative extends TransformationController {
readonly [_flaxDartTypeValue]: _TransformationControllerNative;

toString(): string;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
toScene(viewportPoint: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream5.Offset;
get value(): upstream1.Matrix4;
get hasListeners(): boolean;
set value(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>);
}
export abstract class _TransformationControllerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TransformationController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TransformationController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TransformationController", readonly [], false];
constructor(value?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null) { super(_TransformationControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TransformationControllerNative.prototype, _TransformationControllerProxy);
export namespace _TransformationControllerFactory { export function implement(args: [value?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null], implementation: {}): TransformationController {
return constructProxy(_TransformationControllerProxy, args, implementation) as TransformationController; } }
const _TransformationControllerBinding = _flaxProxyFactory(_TransformationControllerFactory, _TransformationControllerNative) as unknown as typeof _TransformationControllerFactory & (new(value?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null) => _TransformationControllerNative);
export const TransformationController: typeof _TransformationControllerBinding & _FlaxInstanceType<TransformationController> & _FlaxDartType<TransformationController, readonly ["class", "flax.core/sdk_widgets#type:TransformationController", readonly [], false]> = _flaxBindInstanceType<TransformationController, typeof _TransformationControllerBinding>(_TransformationControllerBinding, "flax.core/sdk_widgets#type:TransformationController", ["flax.core/sdk_foundation#type:ValueNotifier","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/flutter#type:ValueListenable"]) as typeof _TransformationControllerBinding & _FlaxInstanceType<TransformationController> & _FlaxDartType<TransformationController, readonly ["class", "flax.core/sdk_widgets#type:TransformationController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "toString" | "addListener" | "removeListener" | "dispose" | "toScene" | "__flaxBound:package:flutter/src/widgets/interactive_viewer.dart::TransformationController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
