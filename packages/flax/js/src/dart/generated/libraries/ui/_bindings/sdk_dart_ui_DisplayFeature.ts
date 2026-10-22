// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureType';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeatureState';
import { _flaxMemberParameters0, _flaxMemberParameters43 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DisplayFeature extends Readonly<{ "__flaxBound:dart:ui::DisplayFeature": readonly [] }> { readonly __DisplayFeature: unique symbol;
readonly [_flaxDartTypeValue]: DisplayFeature;

readonly bounds: upstream0.Rect;
readonly type: upstream1.DisplayFeatureType;
readonly state: upstream2.DisplayFeatureState;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:DisplayFeature", ["bounds","type","state"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:DisplayFeature", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _DisplayFeatureFactory(options: { bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; type: upstream1.DisplayFeatureType; state: upstream2.DisplayFeatureState }): DisplayFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:DisplayFeature", "", [{"name":"bounds","required":true},{"name":"type","required":true},{"name":"state","required":true}], [], options) as DisplayFeature;
}
const _DisplayFeatureProxy = {type: "flax.core/sdk_dart_ui#type:DisplayFeature", parameters: _flaxMemberParameters43, constructors: {"": _flaxMemberParameters43}, methods: {"toString":_flaxMemberParameters0}, getters: ["bounds","type","state"], setters: [], contextMembers: [], superMembers: ["get:bounds","get:type","get:state","toString"]} as const;
export interface _DisplayFeatureNative extends DisplayFeature {
readonly [_flaxDartTypeValue]: _DisplayFeatureNative;

toString(): string;
get bounds(): upstream0.Rect;
get type(): upstream1.DisplayFeatureType;
get state(): upstream2.DisplayFeatureState;
}
export abstract class _DisplayFeatureNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DisplayFeature>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DisplayFeature;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:DisplayFeature", readonly [], false];
constructor(options: {bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; type: upstream1.DisplayFeatureType; state: upstream2.DisplayFeatureState}) { super(_DisplayFeatureProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DisplayFeatureNative.prototype, _DisplayFeatureProxy);
export namespace _DisplayFeatureFactory { export function implement(args: [options: {bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; type: upstream1.DisplayFeatureType; state: upstream2.DisplayFeatureState}], implementation: {}): DisplayFeature {
return constructProxy(_DisplayFeatureProxy, args, implementation) as DisplayFeature; } }
const _DisplayFeatureBinding = _flaxProxyFactory(_DisplayFeatureFactory, _DisplayFeatureNative) as unknown as typeof _DisplayFeatureFactory & (new(options: {bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; type: upstream1.DisplayFeatureType; state: upstream2.DisplayFeatureState}) => _DisplayFeatureNative);
export const DisplayFeature: typeof _DisplayFeatureBinding & _FlaxInstanceType<DisplayFeature> & _FlaxDartType<DisplayFeature, readonly ["class", "flax.core/sdk_dart_ui#type:DisplayFeature", readonly [], false]> = _flaxBindInstanceType<DisplayFeature, typeof _DisplayFeatureBinding>(_DisplayFeatureBinding, "flax.core/sdk_dart_ui#type:DisplayFeature", ["dart:core::Object"]) as typeof _DisplayFeatureBinding & _FlaxInstanceType<DisplayFeature> & _FlaxDartType<DisplayFeature, readonly ["class", "flax.core/sdk_dart_ui#type:DisplayFeature", readonly [], false]>;
