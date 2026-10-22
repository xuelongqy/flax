// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters56 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Enum extends Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }> { readonly __Enum: unique symbol;
readonly [_flaxDartTypeValue]: Enum;

readonly index: number;
}
defineObject("flax.core/flutter#type:Enum", ["index"], [], _flaxBindingMethods("flax.core/flutter#type:Enum", "object", {}, {}), []);
export namespace _EnumFactory { function _flaxDefault_compareByIndex<T extends Enum = Enum>(value1: (T | DartInput<T>), value2: (T | DartInput<T>)): number {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Enum.compareByIndex", [value1, value2], _flaxMemberParameters56);
return _flaxResult as number;
}
export const compareByIndex = _flaxDefineDartCallTypes(_flaxDefault_compareByIndex, {"id":"flax.core/flutter#function:Enum.compareByIndex","parameters":[{"name":"value1","required":true,"positional":true},{"name":"value2","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_compareByIndex, _FlaxSignature0>;
}
export namespace _EnumFactory { function _flaxDefault_compareByName<T extends Enum = Enum>(value1: (T | DartInput<T>), value2: (T | DartInput<T>)): number {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Enum.compareByName", [value1, value2], _flaxMemberParameters56);
return _flaxResult as number;
}
export const compareByName = _flaxDefineDartCallTypes(_flaxDefault_compareByName, {"id":"flax.core/flutter#function:Enum.compareByName","parameters":[{"name":"value1","required":true,"positional":true},{"name":"value2","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_compareByName, _FlaxSignature1>;
}
export const Enum: typeof _EnumFactory & _FlaxInstanceType<Enum> & _FlaxDartType<Enum, readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]> = _flaxBindInstanceType<Enum, typeof _EnumFactory>(_EnumFactory, "flax.core/flutter#type:Enum", ["dart:core::Object"]) as typeof _EnumFactory & _FlaxInstanceType<Enum> & _FlaxDartType<Enum, readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Enum] ? (value1: (_Selected0 | DartInput<_Selected0>),value2: (_Selected0 | DartInput<_Selected0>)) => number : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Enum] ? (value1: (_Selected0 | DartInput<_Selected0>),value2: (_Selected0 | DartInput<_Selected0>)) => number : never : never; }
