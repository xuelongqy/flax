// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters4 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Symbol extends Readonly<{ "__flaxBound:dart:core::Symbol": readonly [] }> { readonly __Symbol: unique symbol;
readonly [_flaxDartTypeValue]: Symbol;

toString(): string;
}
defineObject("flax.core/flutter#type:Symbol", [], [], _flaxBindingMethods("flax.core/flutter#type:Symbol", "object", {"toString":_flaxMemberParameters4}, {}), []);
export function _SymbolFactory(name: string): Symbol {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Symbol", "", [{"name":"name","required":true,"positional":true}], [name], {}) as Symbol;
}
export namespace _SymbolFactory { export declare const unaryMinus: Symbol; }
export namespace _SymbolFactory { export declare const empty: Symbol; }
_flaxDefineStaticGetters(_SymbolFactory, "flax.core/flutter#read:Symbol.", ["unaryMinus","empty"]);
export const Symbol: typeof _SymbolFactory & _FlaxInstanceType<Symbol> & _FlaxDartType<Symbol, readonly ["class", "flax.core/flutter#type:Symbol", readonly [], false]> = _flaxBindInstanceType<Symbol, typeof _SymbolFactory>(_SymbolFactory, "flax.core/flutter#type:Symbol", ["dart:core::Object"]) as typeof _SymbolFactory & _FlaxInstanceType<Symbol> & _FlaxDartType<Symbol, readonly ["class", "flax.core/flutter#type:Symbol", readonly [], false]>;
