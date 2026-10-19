// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/isolate/_bindings/sdk_dependencies_SendPort';
import '@flax/dart/isolate/_bindings/sdk_dependencies_SendPort';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IsolateNameServer extends Readonly<{ "__flaxBound:dart:ui::IsolateNameServer": readonly [] }> { readonly __IsolateNameServer: unique symbol;
readonly [_flaxDartTypeValue]: IsolateNameServer;

}
defineObject("flax.core/sdk_dart_ui#type:IsolateNameServer", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:IsolateNameServer", "object", {}, {}), []);
export namespace _IsolateNameServerFactory { export function lookupPortByName(name: string): upstream0.SendPort | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:IsolateNameServer.lookupPortByName", [name]);
return _flaxResult as upstream0.SendPort | null;
} }
export namespace _IsolateNameServerFactory { export function registerPortWithName(port: Readonly<{ "__flaxBound:dart:isolate::SendPort": readonly [] }> & Readonly<{ "__flaxBound:dart:isolate::Capability": readonly [] }>, name: string): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:IsolateNameServer.registerPortWithName", [port, name]);
return _flaxResult as boolean;
} }
export namespace _IsolateNameServerFactory { export function removePortNameMapping(name: string): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:IsolateNameServer.removePortNameMapping", [name]);
return _flaxResult as boolean;
} }
export const IsolateNameServer: typeof _IsolateNameServerFactory & _FlaxInstanceType<IsolateNameServer> & _FlaxDartType<IsolateNameServer, readonly ["class", "flax.core/sdk_dart_ui#type:IsolateNameServer", readonly [], false]> = _flaxBindInstanceType<IsolateNameServer, typeof _IsolateNameServerFactory>(_IsolateNameServerFactory, "flax.core/sdk_dart_ui#type:IsolateNameServer", ["dart:core::Object"]) as typeof _IsolateNameServerFactory & _FlaxInstanceType<IsolateNameServer> & _FlaxDartType<IsolateNameServer, readonly ["class", "flax.core/sdk_dart_ui#type:IsolateNameServer", readonly [], false]>;
