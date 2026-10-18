// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HeroFlightDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/heroes.dart::HeroFlightDirection">, Readonly<{ "__flaxBound:package:flutter/src/widgets/heroes.dart::HeroFlightDirection": readonly [] }> { readonly __HeroFlightDirection: unique symbol;
readonly [_flaxDartTypeValue]: HeroFlightDirection;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:HeroFlightDirection", ["push","pop"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_HeroFlightDirection_api = {
push: enumValue<HeroFlightDirection>("flax.core/sdk_widgets#type:HeroFlightDirection", "push"),
pop: enumValue<HeroFlightDirection>("flax.core/sdk_widgets#type:HeroFlightDirection", "pop"),
values: Object.freeze([enumValue<HeroFlightDirection>("flax.core/sdk_widgets#type:HeroFlightDirection", "push"), enumValue<HeroFlightDirection>("flax.core/sdk_widgets#type:HeroFlightDirection", "pop")]),
};
export const HeroFlightDirection = Object.freeze(_flaxBindInstanceType<HeroFlightDirection, typeof _flaxEnum_HeroFlightDirection_api>(_flaxEnum_HeroFlightDirection_api, "flax.core/sdk_widgets#type:HeroFlightDirection", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_HeroFlightDirection_api & _FlaxInstanceType<HeroFlightDirection> & _FlaxDartType<HeroFlightDirection, readonly ["class", "flax.core/sdk_widgets#type:HeroFlightDirection", readonly [], false]>);
