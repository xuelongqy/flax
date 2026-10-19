// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BuildScope extends Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildScope": readonly [] }> { readonly __BuildScope: unique symbol;
readonly [_flaxDartTypeValue]: BuildScope;

readonly scheduleRebuild: (() => void) | null;
}
defineObject("flax.core/sdk_widgets#type:BuildScope", ["scheduleRebuild"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:BuildScope", "object", {}, {}), []);
export function _BuildScopeFactory(options: { scheduleRebuild?: (() => void) | null | undefined } = {}): BuildScope {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:BuildScope", "", [{"name":"scheduleRebuild"}], [], options) as BuildScope;
}
export const BuildScope: typeof _BuildScopeFactory & _FlaxInstanceType<BuildScope> & _FlaxDartType<BuildScope, readonly ["class", "flax.core/sdk_widgets#type:BuildScope", readonly [], false]> = _flaxBindInstanceType<BuildScope, typeof _BuildScopeFactory>(_BuildScopeFactory, "flax.core/sdk_widgets#type:BuildScope", ["dart:core::Object"]) as typeof _BuildScopeFactory & _FlaxInstanceType<BuildScope> & _FlaxDartType<BuildScope, readonly ["class", "flax.core/sdk_widgets#type:BuildScope", readonly [], false]>;
