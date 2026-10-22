// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters75 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FloatingHeaderSnapConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_persistent_header.dart::FloatingHeaderSnapConfiguration": readonly [] }> { readonly __FloatingHeaderSnapConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: FloatingHeaderSnapConfiguration;

readonly curve: upstream0.Curve;
readonly duration: upstream1.Duration;
}
defineObject("flax.core/sdk_rendering#type:FloatingHeaderSnapConfiguration", ["curve","duration"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:FloatingHeaderSnapConfiguration", "object", {}, {}), []);
export function _FloatingHeaderSnapConfigurationFactory(options: { curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | undefined } = {}): FloatingHeaderSnapConfiguration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:FloatingHeaderSnapConfiguration", "", [{"name":"curve"},{"name":"duration"}], [], options) as FloatingHeaderSnapConfiguration;
}
const _FloatingHeaderSnapConfigurationProxy = {type: "flax.core/sdk_rendering#type:FloatingHeaderSnapConfiguration", parameters: _flaxMemberParameters75, constructors: {"": _flaxMemberParameters75}, methods: {}, getters: ["curve","duration"], setters: [], contextMembers: [], superMembers: ["get:curve","get:duration"]} as const;
export interface _FloatingHeaderSnapConfigurationNative extends FloatingHeaderSnapConfiguration {
readonly [_flaxDartTypeValue]: _FloatingHeaderSnapConfigurationNative;

get curve(): upstream0.Curve;
get duration(): upstream1.Duration;
}
export abstract class _FloatingHeaderSnapConfigurationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FloatingHeaderSnapConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FloatingHeaderSnapConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:FloatingHeaderSnapConfiguration", readonly [], false];
constructor(options?: {curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | undefined}) { super(_FloatingHeaderSnapConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_FloatingHeaderSnapConfigurationNative.prototype, _FloatingHeaderSnapConfigurationProxy);
export namespace _FloatingHeaderSnapConfigurationFactory { export function implement(args: [options?: {curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | undefined}], implementation: {}): FloatingHeaderSnapConfiguration {
return constructProxy(_FloatingHeaderSnapConfigurationProxy, args, implementation) as FloatingHeaderSnapConfiguration; } }
const _FloatingHeaderSnapConfigurationBinding = _flaxProxyFactory(_FloatingHeaderSnapConfigurationFactory, _FloatingHeaderSnapConfigurationNative) as unknown as typeof _FloatingHeaderSnapConfigurationFactory & (new(options?: {curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | undefined}) => _FloatingHeaderSnapConfigurationNative);
export const FloatingHeaderSnapConfiguration: typeof _FloatingHeaderSnapConfigurationBinding & _FlaxInstanceType<FloatingHeaderSnapConfiguration> & _FlaxDartType<FloatingHeaderSnapConfiguration, readonly ["class", "flax.core/sdk_rendering#type:FloatingHeaderSnapConfiguration", readonly [], false]> = _flaxBindInstanceType<FloatingHeaderSnapConfiguration, typeof _FloatingHeaderSnapConfigurationBinding>(_FloatingHeaderSnapConfigurationBinding, "flax.core/sdk_rendering#type:FloatingHeaderSnapConfiguration", ["dart:core::Object"]) as typeof _FloatingHeaderSnapConfigurationBinding & _FlaxInstanceType<FloatingHeaderSnapConfiguration> & _FlaxDartType<FloatingHeaderSnapConfiguration, readonly ["class", "flax.core/sdk_rendering#type:FloatingHeaderSnapConfiguration", readonly [], false]>;
