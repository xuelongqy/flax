// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { _flaxMemberParameters122 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
function _flaxTopLevel_setEquals<T extends unknown | null = unknown | null>(a: DartSetInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)> | null, b: DartSetInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)> | null): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:setEquals", [a, b], _flaxMemberParameters122);
return _flaxResult as boolean;
}
const _flaxGeneric_setEquals = _flaxDefineDartCallTypes(_flaxTopLevel_setEquals, {"id":"flax.core/sdk_foundation#function:setEquals","parameters":[{"name":"a","required":true,"positional":true},{"name":"b","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxTopLevel_setEquals, _FlaxSignature0>;
export { _flaxGeneric_setEquals as setEquals };
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (a: DartSetInput<_Selected0, (_Selected0 | DartInput<_Selected0>)> | null,b: DartSetInput<_Selected0, (_Selected0 | DartInput<_Selected0>)> | null) => boolean : never : never; }
