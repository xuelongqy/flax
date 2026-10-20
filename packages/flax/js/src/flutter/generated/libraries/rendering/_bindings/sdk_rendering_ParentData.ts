// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ParentData extends Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }> { readonly __ParentData: unique symbol;
readonly [_flaxDartTypeValue]: ParentData;

detach(): void;
toString(): string;
}
defineObject("flax.core/sdk_rendering#type:ParentData", [], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ParentData", "object", {"detach":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, {}), []);
export function _ParentDataFactory(): ParentData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ParentData", "", _flaxMemberParameters1, [], {}) as ParentData;
}
const _ParentDataProxy = {type: "flax.core/sdk_rendering#type:ParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"detach":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: [], superMembers: ["detach","toString"]} as const;
export interface _ParentDataNative extends ParentData {
readonly [_flaxDartTypeValue]: _ParentDataNative;

detach(): void;
toString(): string;
}
export abstract class _ParentDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ParentData", readonly [], false];
constructor() { super(_ParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ParentDataNative.prototype, _ParentDataProxy);
export namespace _ParentDataFactory { export function implement(args: [], implementation: {}): ParentData {
return constructProxy(_ParentDataProxy, args, implementation) as ParentData; } }
const _ParentDataBinding = _flaxProxyFactory(_ParentDataFactory, _ParentDataNative) as unknown as typeof _ParentDataFactory & (new() => _ParentDataNative);
export const ParentData: typeof _ParentDataBinding & _FlaxInstanceType<ParentData> & _FlaxDartType<ParentData, readonly ["class", "flax.core/sdk_rendering#type:ParentData", readonly [], false]> = _flaxBindInstanceType<ParentData, typeof _ParentDataBinding>(_ParentDataBinding, "flax.core/sdk_rendering#type:ParentData", ["dart:core::Object"]) as typeof _ParentDataBinding & _FlaxInstanceType<ParentData> & _FlaxDartType<ParentData, readonly ["class", "flax.core/sdk_rendering#type:ParentData", readonly [], false]>;
