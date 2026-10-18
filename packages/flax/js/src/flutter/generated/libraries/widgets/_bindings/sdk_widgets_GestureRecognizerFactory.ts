// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"instance","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GestureRecognizerFactory<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::GestureRecognizerFactory": readonly [T] }> { readonly __GestureRecognizerFactory: unique symbol;
readonly [_flaxDartTypeValue]: GestureRecognizerFactory<T>;

}
defineObject("flax.core/sdk_widgets#type:GestureRecognizerFactory", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:GestureRecognizerFactory", "object", {"constructor":_flaxMemberParameters0,"initializer":_flaxMemberParameters1}, {}), []);
const _GestureRecognizerFactoryProxy = {type: "flax.core/sdk_widgets#type:GestureRecognizerFactory", parameters: [], constructors: {"":[]}, methods: {"constructor":_flaxMemberParameters0,"initializer":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export interface GestureRecognizerFactory<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer> {
readonly [_flaxDartTypeValue]: GestureRecognizerFactory<T>;

}
export abstract class GestureRecognizerFactory<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureRecognizerFactory<upstream0.GestureRecognizer>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GestureRecognizerFactory<upstream0.GestureRecognizer>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:GestureRecognizerFactory", readonly [readonly ["class", "flax.core/sdk_gestures#type:GestureRecognizer", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_GestureRecognizerFactoryProxy, Array.from(arguments)); }
abstract ["constructor"](): T;
abstract initializer(instance: (T | DartInput<T>)): void;
}
_flaxDefineProxyBase(GestureRecognizerFactory.prototype, _GestureRecognizerFactoryProxy);
export namespace GestureRecognizerFactory { export function implement<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer>(args: [], implementation: {constructor: (() => (T | DartInput<T>)); initializer: ((instance: T) => void)}): GestureRecognizerFactory<T> {
return constructProxy(_GestureRecognizerFactoryProxy, args, implementation) as GestureRecognizerFactory<T>; } }
_flaxBindInstanceType<GestureRecognizerFactory<upstream0.GestureRecognizer>, typeof GestureRecognizerFactory>(GestureRecognizerFactory, "flax.core/sdk_widgets#type:GestureRecognizerFactory", ["dart:core::Object"]);
_flaxDefineDartTypes(GestureRecognizerFactory, "flax.core/sdk_widgets#type:GestureRecognizerFactory", {...{"category":"object","constructors":{}}, proxy: _GestureRecognizerFactoryProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.GestureRecognizer] ? (abstract new () => GestureRecognizerFactory<_Selected0>) & {readonly prototype: GestureRecognizerFactory<_Selected0>;implement(args: readonly [], implementation: Partial<GestureRecognizerFactory<_Selected0>>): GestureRecognizerFactory<_Selected0>;} & _FlaxInstanceType<GestureRecognizerFactory<_Selected0>> & _FlaxDartType<GestureRecognizerFactory<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.GestureRecognizer] ? (abstract new () => GestureRecognizerFactory<_Selected0>) & {readonly prototype: GestureRecognizerFactory<_Selected0>;implement(args: readonly [], implementation: Partial<GestureRecognizerFactory<_Selected0>>): GestureRecognizerFactory<_Selected0>;} & _FlaxInstanceType<GestureRecognizerFactory<_Selected0>> & _FlaxDartType<GestureRecognizerFactory<_Selected0>> : never : never; }
