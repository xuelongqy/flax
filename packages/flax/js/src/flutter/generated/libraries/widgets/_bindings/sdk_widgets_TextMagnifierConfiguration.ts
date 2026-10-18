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
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextMagnifierConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [] }> { readonly __TextMagnifierConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: TextMagnifierConfiguration;

}
defineObject("flax.core/sdk_widgets#type:TextMagnifierConfiguration", ["magnifierBuilder","shouldDisplayHandlesInMagnifier"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TextMagnifierConfiguration", "object", {}, {}), []);
const _TextMagnifierConfigurationProxy = {type: "flax.core/sdk_widgets#type:TextMagnifierConfiguration", parameters: [{"name":"magnifierBuilder","required":false,"positional":false},{"name":"shouldDisplayHandlesInMagnifier","required":false,"positional":false}], constructors: {"":[{"name":"magnifierBuilder","required":false,"positional":false},{"name":"shouldDisplayHandlesInMagnifier","required":false,"positional":false}]}, methods: {}, getters: ["magnifierBuilder","shouldDisplayHandlesInMagnifier"], setters: [], contextMembers: [], superMembers: ["get:magnifierBuilder","get:shouldDisplayHandlesInMagnifier"]} as const;
export interface TextMagnifierConfiguration {
readonly [_flaxDartTypeValue]: TextMagnifierConfiguration;

get magnifierBuilder(): ((context: upstream0.BuildContext, controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierController": readonly [] }>, magnifierInfo: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream3.MagnifierInfo] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.MagnifierInfo] }>) => Widget | null);
get shouldDisplayHandlesInMagnifier(): boolean;
}
export abstract class TextMagnifierConfiguration extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextMagnifierConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextMagnifierConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextMagnifierConfiguration", readonly [], false];
constructor(options?: {magnifierBuilder?: ((context: upstream0.BuildContext, controller: upstream1.MagnifierController, magnifierInfo: upstream2.ValueNotifier<upstream3.MagnifierInfo>) => Widget | null) | null | undefined; shouldDisplayHandlesInMagnifier?: boolean | undefined}) { super(_TextMagnifierConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextMagnifierConfiguration.prototype, _TextMagnifierConfigurationProxy);
export namespace TextMagnifierConfiguration { export function implement(args: [options?: {magnifierBuilder?: ((context: upstream0.BuildContext, controller: upstream1.MagnifierController, magnifierInfo: upstream2.ValueNotifier<upstream3.MagnifierInfo>) => Widget | null) | null | undefined; shouldDisplayHandlesInMagnifier?: boolean | undefined}], implementation: {}): TextMagnifierConfiguration {
return constructProxy(_TextMagnifierConfigurationProxy, args, implementation) as TextMagnifierConfiguration; } }
export namespace TextMagnifierConfiguration { export declare const disabled: TextMagnifierConfiguration; }
_flaxDefineStaticGetters(TextMagnifierConfiguration, "flax.core/sdk_widgets#read:TextMagnifierConfiguration.", ["disabled"]);
_flaxBindInstanceType<TextMagnifierConfiguration, typeof TextMagnifierConfiguration>(TextMagnifierConfiguration, "flax.core/sdk_widgets#type:TextMagnifierConfiguration", ["dart:core::Object"]);
