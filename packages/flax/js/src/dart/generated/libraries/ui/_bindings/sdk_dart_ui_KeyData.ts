// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventType';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventDeviceType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventDeviceType';
import { _flaxMemberParameters0, _flaxMemberParameters71 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyData extends Readonly<{ "__flaxBound:dart:ui::KeyData": readonly [] }> { readonly __KeyData: unique symbol;
readonly [_flaxDartTypeValue]: KeyData;

readonly timeStamp: upstream0.Duration;
readonly type: upstream1.KeyEventType;
readonly deviceType: upstream2.KeyEventDeviceType;
readonly physical: number;
readonly logical: number;
readonly character: string | null;
readonly synthesized: boolean;
toString(): string;
toStringFull(): string;
}
defineObject("flax.core/sdk_dart_ui#type:KeyData", ["timeStamp","type","deviceType","physical","logical","character","synthesized"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:KeyData", "object", {"toString":_flaxMemberParameters0,"toStringFull":_flaxMemberParameters0}, {}), []);
export function _KeyDataFactory(options: { timeStamp: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; type: upstream1.KeyEventType; physical: number; logical: number; character: string | null; synthesized: boolean; deviceType?: upstream2.KeyEventDeviceType | undefined }): KeyData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:KeyData", "", [{"name":"timeStamp","required":true},{"name":"type","required":true},{"name":"physical","required":true},{"name":"logical","required":true},{"name":"character","required":true},{"name":"synthesized","required":true},{"name":"deviceType"}], [], options) as KeyData;
}
const _KeyDataProxy = {type: "flax.core/sdk_dart_ui#type:KeyData", parameters: _flaxMemberParameters71, constructors: {"": _flaxMemberParameters71}, methods: {"toString":_flaxMemberParameters0,"toStringFull":_flaxMemberParameters0}, getters: ["timeStamp","type","deviceType","physical","logical","character","synthesized"], setters: [], contextMembers: [], superMembers: ["get:timeStamp","get:type","get:deviceType","get:physical","get:logical","get:character","get:synthesized","toString","toStringFull"]} as const;
export interface _KeyDataNative extends KeyData {
readonly [_flaxDartTypeValue]: _KeyDataNative;

toString(): string;
toStringFull(): string;
get timeStamp(): upstream0.Duration;
get type(): upstream1.KeyEventType;
get deviceType(): upstream2.KeyEventDeviceType;
get physical(): number;
get logical(): number;
get character(): string | null;
get synthesized(): boolean;
}
export abstract class _KeyDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: KeyData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:KeyData", readonly [], false];
constructor(options: {timeStamp: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; type: upstream1.KeyEventType; physical: number; logical: number; character: string | null; synthesized: boolean; deviceType?: upstream2.KeyEventDeviceType | undefined}) { super(_KeyDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_KeyDataNative.prototype, _KeyDataProxy);
export namespace _KeyDataFactory { export function implement(args: [options: {timeStamp: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; type: upstream1.KeyEventType; physical: number; logical: number; character: string | null; synthesized: boolean; deviceType?: upstream2.KeyEventDeviceType | undefined}], implementation: {}): KeyData {
return constructProxy(_KeyDataProxy, args, implementation) as KeyData; } }
const _KeyDataBinding = _flaxProxyFactory(_KeyDataFactory, _KeyDataNative) as unknown as typeof _KeyDataFactory & (new(options: {timeStamp: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; type: upstream1.KeyEventType; physical: number; logical: number; character: string | null; synthesized: boolean; deviceType?: upstream2.KeyEventDeviceType | undefined}) => _KeyDataNative);
export const KeyData: typeof _KeyDataBinding & _FlaxInstanceType<KeyData> & _FlaxDartType<KeyData, readonly ["class", "flax.core/sdk_dart_ui#type:KeyData", readonly [], false]> = _flaxBindInstanceType<KeyData, typeof _KeyDataBinding>(_KeyDataBinding, "flax.core/sdk_dart_ui#type:KeyData", ["dart:core::Object"]) as typeof _KeyDataBinding & _FlaxInstanceType<KeyData> & _FlaxDartType<KeyData, readonly ["class", "flax.core/sdk_dart_ui#type:KeyData", readonly [], false]>;
