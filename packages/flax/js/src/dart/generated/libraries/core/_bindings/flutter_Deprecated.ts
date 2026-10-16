// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Deprecated extends Readonly<{ "__flaxBound:dart:core::Deprecated": readonly [] }> { readonly __Deprecated: unique symbol;

readonly message: string | null;
}
defineObject("flax.core/flutter#type:Deprecated", ["message"], [], _flaxBindingMethods("flax.core/flutter#type:Deprecated", "object", {}, {}), []);
function _DeprecatedFactory(message: string | null): Deprecated {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Deprecated", "", [{"name":"message","required":true,"positional":true}], [message], {}) as Deprecated;
}
export const Deprecated: typeof _DeprecatedFactory & _FlaxInstanceType<Deprecated> & _FlaxDartType<Deprecated, readonly ["class", "flax.core/flutter#type:Deprecated", readonly [], false]> = _flaxBindInstanceType<Deprecated, typeof _DeprecatedFactory>(_DeprecatedFactory, "flax.core/flutter#type:Deprecated", ["dart:core::Object"]) as typeof _DeprecatedFactory & _FlaxInstanceType<Deprecated> & _FlaxDartType<Deprecated, readonly ["class", "flax.core/flutter#type:Deprecated", readonly [], false]>;
