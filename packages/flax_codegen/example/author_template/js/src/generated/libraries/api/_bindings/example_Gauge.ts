// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"by","positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@your-scope/your-package/api/_bindings/example.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Gauge extends Readonly<{ "__flaxBound:package:your_package/src/gauge.dart::Gauge": readonly [] }> { readonly __Gauge: unique symbol;
readonly [_flaxDartTypeValue]: Gauge;

get value(): number;
increment(by?: number): void;
set value(value: number);
}
defineObject("vendor.example/example#type:Gauge", ["value"], ["value"], _flaxBindingMethods("vendor.example/example#type:Gauge", "object", {"increment":_flaxMemberParameters0}, {}), []);
export function _GaugeFactory(options: { value?: number | undefined } = {}): Gauge {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "vendor.example/example#type:Gauge", "", [{"name":"value"}], [], options) as Gauge;
}
export const Gauge: typeof _GaugeFactory & _FlaxInstanceType<Gauge> & _FlaxDartType<Gauge, readonly ["class", "vendor.example/example#type:Gauge", readonly [], false]> = _flaxBindInstanceType<Gauge, typeof _GaugeFactory>(_GaugeFactory, "vendor.example/example#type:Gauge", ["dart:core::Object"]) as typeof _GaugeFactory & _FlaxInstanceType<Gauge> & _FlaxDartType<Gauge, readonly ["class", "vendor.example/example#type:Gauge", readonly [], false]>;
