// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters3 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouteSettings extends Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [] }> { readonly __RouteSettings: unique symbol;
readonly [_flaxDartTypeValue]: RouteSettings;

readonly name: string | null;
readonly arguments: unknown | null;
toString(): string;
}
defineObject("flax.core/flutter#type:RouteSettings", ["name","arguments"], [], _flaxBindingMethods("flax.core/flutter#type:RouteSettings", "object", {"toString":_flaxMemberParameters3}, {}), []);
export function _RouteSettingsFactory(options: { name?: string | null | undefined; arguments?: unknown | null | undefined } = {}): RouteSettings {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:RouteSettings", "", [{"name":"name"},{"name":"arguments"}], [], options) as RouteSettings;
}
export const RouteSettings: typeof _RouteSettingsFactory & _FlaxInstanceType<RouteSettings> & _FlaxDartType<RouteSettings, readonly ["class", "flax.core/flutter#type:RouteSettings", readonly [], false]> = _flaxBindInstanceType<RouteSettings, typeof _RouteSettingsFactory>(_RouteSettingsFactory, "flax.core/flutter#type:RouteSettings", ["dart:core::Object"]) as typeof _RouteSettingsFactory & _FlaxInstanceType<RouteSettings> & _FlaxDartType<RouteSettings, readonly ["class", "flax.core/flutter#type:RouteSettings", readonly [], false]>;
