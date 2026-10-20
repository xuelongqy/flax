// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierController';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierInfo';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierInfo';
import { _flaxMemberParameters405 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextMagnifierConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [] }> { readonly __TextMagnifierConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: TextMagnifierConfiguration;

readonly magnifierBuilder: ((context: upstream0.BuildContext, controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierController": readonly [] }>, magnifierInfo: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream3.MagnifierInfo] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.MagnifierInfo] }>) => Widget | null);
readonly shouldDisplayHandlesInMagnifier: boolean;
}
defineObject("flax.core/sdk_widgets#type:TextMagnifierConfiguration", ["magnifierBuilder","shouldDisplayHandlesInMagnifier"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TextMagnifierConfiguration", "object", {}, {}), []);
export function _TextMagnifierConfigurationFactory(options: { magnifierBuilder?: ((context: upstream0.BuildContext, controller: upstream1.MagnifierController, magnifierInfo: upstream2.ValueNotifier<upstream3.MagnifierInfo>) => Widget | null) | null | undefined; shouldDisplayHandlesInMagnifier?: boolean | undefined } = {}): TextMagnifierConfiguration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:TextMagnifierConfiguration", "", [{"name":"magnifierBuilder"},{"name":"shouldDisplayHandlesInMagnifier"}], [], options) as TextMagnifierConfiguration;
}
const _TextMagnifierConfigurationProxy = {type: "flax.core/sdk_widgets#type:TextMagnifierConfiguration", parameters: _flaxMemberParameters405, constructors: {"": _flaxMemberParameters405}, methods: {}, getters: ["magnifierBuilder","shouldDisplayHandlesInMagnifier"], setters: [], contextMembers: [], superMembers: ["get:magnifierBuilder","get:shouldDisplayHandlesInMagnifier"]} as const;
export interface _TextMagnifierConfigurationNative extends TextMagnifierConfiguration {
readonly [_flaxDartTypeValue]: _TextMagnifierConfigurationNative;

get magnifierBuilder(): ((context: upstream0.BuildContext, controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierController": readonly [] }>, magnifierInfo: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream3.MagnifierInfo] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.MagnifierInfo] }>) => Widget | null);
get shouldDisplayHandlesInMagnifier(): boolean;
}
export abstract class _TextMagnifierConfigurationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextMagnifierConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextMagnifierConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextMagnifierConfiguration", readonly [], false];
constructor(options?: {magnifierBuilder?: ((context: upstream0.BuildContext, controller: upstream1.MagnifierController, magnifierInfo: upstream2.ValueNotifier<upstream3.MagnifierInfo>) => Widget | null) | null | undefined; shouldDisplayHandlesInMagnifier?: boolean | undefined}) { super(_TextMagnifierConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextMagnifierConfigurationNative.prototype, _TextMagnifierConfigurationProxy);
export namespace _TextMagnifierConfigurationFactory { export function implement(args: [options?: {magnifierBuilder?: ((context: upstream0.BuildContext, controller: upstream1.MagnifierController, magnifierInfo: upstream2.ValueNotifier<upstream3.MagnifierInfo>) => Widget | null) | null | undefined; shouldDisplayHandlesInMagnifier?: boolean | undefined}], implementation: {}): TextMagnifierConfiguration {
return constructProxy(_TextMagnifierConfigurationProxy, args, implementation) as TextMagnifierConfiguration; } }
const _TextMagnifierConfigurationBinding = _flaxProxyFactory(_TextMagnifierConfigurationFactory, _TextMagnifierConfigurationNative) as unknown as typeof _TextMagnifierConfigurationFactory & (new(options?: {magnifierBuilder?: ((context: upstream0.BuildContext, controller: upstream1.MagnifierController, magnifierInfo: upstream2.ValueNotifier<upstream3.MagnifierInfo>) => Widget | null) | null | undefined; shouldDisplayHandlesInMagnifier?: boolean | undefined}) => _TextMagnifierConfigurationNative);
export namespace _TextMagnifierConfigurationFactory { export declare const disabled: TextMagnifierConfiguration; }
_flaxDefineStaticGetters(_TextMagnifierConfigurationFactory, "flax.core/sdk_widgets#read:TextMagnifierConfiguration.", ["disabled"]);
export const TextMagnifierConfiguration: typeof _TextMagnifierConfigurationBinding & _FlaxInstanceType<TextMagnifierConfiguration> & _FlaxDartType<TextMagnifierConfiguration, readonly ["class", "flax.core/sdk_widgets#type:TextMagnifierConfiguration", readonly [], false]> = _flaxBindInstanceType<TextMagnifierConfiguration, typeof _TextMagnifierConfigurationBinding>(_TextMagnifierConfigurationBinding, "flax.core/sdk_widgets#type:TextMagnifierConfiguration", ["dart:core::Object"]) as typeof _TextMagnifierConfigurationBinding & _FlaxInstanceType<TextMagnifierConfiguration> & _FlaxDartType<TextMagnifierConfiguration, readonly ["class", "flax.core/sdk_widgets#type:TextMagnifierConfiguration", readonly [], false]>;
