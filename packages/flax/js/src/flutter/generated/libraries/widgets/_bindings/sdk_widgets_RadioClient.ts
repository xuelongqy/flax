// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RadioGroupRegistry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RadioGroupRegistry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RadioClient<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioClient": readonly [T] }> { readonly __RadioClient: unique symbol;
readonly [_flaxDartTypeValue]: RadioClient<T>;

readonly tristate: boolean;
readonly radioValue: T;
readonly enabled: boolean;
readonly focusNode: upstream0.FocusNode;
get registry(): upstream1.RadioGroupRegistry<T> | null;
set registry(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioGroupRegistry": readonly [T] }> | null);
}
defineObject("flax.core/sdk_widgets#type:RadioClient", ["tristate","radioValue","enabled","focusNode","registry"], ["registry"], _flaxBindingMethods("flax.core/sdk_widgets#type:RadioClient", "object", {}, {}), []);
export const RadioClient: object & _FlaxInstanceType<RadioClient<unknown | null>> & _FlaxDartType<RadioClient<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:RadioClient", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<RadioClient<unknown | null>, object>({}, "flax.core/sdk_widgets#type:RadioClient", ["dart:core::Object"]) as object & _FlaxInstanceType<RadioClient<unknown | null>> & _FlaxDartType<RadioClient<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:RadioClient", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(RadioClient, "flax.core/sdk_widgets#type:RadioClient", {"category":"object","constructors":{}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: RadioClient<_Selected0>;} & _FlaxInstanceType<RadioClient<_Selected0>> & _FlaxDartType<RadioClient<_Selected0>> : never : never; }
