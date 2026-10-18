// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FittedSizes extends Readonly<{ "__flaxBound:package:flutter/src/painting/box_fit.dart::FittedSizes": readonly [] }> { readonly __FittedSizes: unique symbol;
readonly [_flaxDartTypeValue]: FittedSizes;

readonly source: upstream0.Size;
readonly destination: upstream0.Size;
}
defineObject("flax.core/flutter#type:FittedSizes", ["source","destination"], [], _flaxBindingMethods("flax.core/flutter#type:FittedSizes", "object", {}, {}), []);
export function _FittedSizesFactory(source: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, destination: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): FittedSizes {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FittedSizes", "", [{"name":"source","required":true,"positional":true},{"name":"destination","required":true,"positional":true}], [source, destination], {}) as FittedSizes;
}
export const FittedSizes: typeof _FittedSizesFactory & _FlaxInstanceType<FittedSizes> & _FlaxDartType<FittedSizes, readonly ["class", "flax.core/flutter#type:FittedSizes", readonly [], false]> = _flaxBindInstanceType<FittedSizes, typeof _FittedSizesFactory>(_FittedSizesFactory, "flax.core/flutter#type:FittedSizes", ["dart:core::Object"]) as typeof _FittedSizesFactory & _FlaxInstanceType<FittedSizes> & _FlaxDartType<FittedSizes, readonly ["class", "flax.core/flutter#type:FittedSizes", readonly [], false]>;
