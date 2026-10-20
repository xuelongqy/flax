// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_KeyboardInsertedContent';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardInsertedContent';
import { _flaxMemberParameters61 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContentInsertionConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::ContentInsertionConfiguration": readonly [] }> { readonly __ContentInsertionConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: ContentInsertionConfiguration;

readonly onContentInserted: ((value: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_inserted_content.dart::KeyboardInsertedContent": readonly [] }>) => void);
readonly allowedMimeTypes: DartList<string>;
}
defineObject("flax.core/sdk_widgets#type:ContentInsertionConfiguration", ["onContentInserted","allowedMimeTypes"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ContentInsertionConfiguration", "object", {}, {}), []);
export function _ContentInsertionConfigurationFactory(options: { onContentInserted: ((value: upstream0.KeyboardInsertedContent) => void); allowedMimeTypes?: DartListInput<string, string> | undefined }): ContentInsertionConfiguration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ContentInsertionConfiguration", "", [{"name":"onContentInserted","required":true},{"name":"allowedMimeTypes"}], [], options) as ContentInsertionConfiguration;
}
const _ContentInsertionConfigurationProxy = {type: "flax.core/sdk_widgets#type:ContentInsertionConfiguration", parameters: _flaxMemberParameters61, constructors: {"": _flaxMemberParameters61}, methods: {}, getters: ["onContentInserted","allowedMimeTypes"], setters: [], contextMembers: [], superMembers: ["get:onContentInserted","get:allowedMimeTypes"]} as const;
export interface _ContentInsertionConfigurationNative extends ContentInsertionConfiguration {
readonly [_flaxDartTypeValue]: _ContentInsertionConfigurationNative;

get onContentInserted(): ((value: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_inserted_content.dart::KeyboardInsertedContent": readonly [] }>) => void);
get allowedMimeTypes(): DartList<string>;
}
export abstract class _ContentInsertionConfigurationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContentInsertionConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ContentInsertionConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ContentInsertionConfiguration", readonly [], false];
constructor(options: {onContentInserted: ((value: upstream0.KeyboardInsertedContent) => void); allowedMimeTypes?: DartListInput<string, string> | undefined}) { super(_ContentInsertionConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ContentInsertionConfigurationNative.prototype, _ContentInsertionConfigurationProxy);
export namespace _ContentInsertionConfigurationFactory { export function implement(args: [options: {onContentInserted: ((value: upstream0.KeyboardInsertedContent) => void); allowedMimeTypes?: DartListInput<string, string> | undefined}], implementation: {}): ContentInsertionConfiguration {
return constructProxy(_ContentInsertionConfigurationProxy, args, implementation) as ContentInsertionConfiguration; } }
const _ContentInsertionConfigurationBinding = _flaxProxyFactory(_ContentInsertionConfigurationFactory, _ContentInsertionConfigurationNative) as unknown as typeof _ContentInsertionConfigurationFactory & (new(options: {onContentInserted: ((value: upstream0.KeyboardInsertedContent) => void); allowedMimeTypes?: DartListInput<string, string> | undefined}) => _ContentInsertionConfigurationNative);
export const ContentInsertionConfiguration: typeof _ContentInsertionConfigurationBinding & _FlaxInstanceType<ContentInsertionConfiguration> & _FlaxDartType<ContentInsertionConfiguration, readonly ["class", "flax.core/sdk_widgets#type:ContentInsertionConfiguration", readonly [], false]> = _flaxBindInstanceType<ContentInsertionConfiguration, typeof _ContentInsertionConfigurationBinding>(_ContentInsertionConfigurationBinding, "flax.core/sdk_widgets#type:ContentInsertionConfiguration", ["dart:core::Object"]) as typeof _ContentInsertionConfigurationBinding & _FlaxInstanceType<ContentInsertionConfiguration> & _FlaxDartType<ContentInsertionConfiguration, readonly ["class", "flax.core/sdk_widgets#type:ContentInsertionConfiguration", readonly [], false]>;
