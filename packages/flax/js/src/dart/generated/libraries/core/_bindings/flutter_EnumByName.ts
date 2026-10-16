// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, defineDartTypes as _flaxHostDefineDartTypes, bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
import type { flaxDartExtensionTypes as _flaxDartExtensionTypes } from '@flax/core/bindings';
export interface EnumByName<T extends upstream0.Enum = upstream0.Enum> {
readonly [_flaxDartExtensionTypes]?: readonly [T];
readonly [_flaxDartMethodCases]?: {asNameMap: _FlaxSignature0;byName: _FlaxSignature1;};
asNameMap(this: EnumByName<T>): DartMap<string, T>;
byName(this: EnumByName<T>, name: string): T;
}
const _flaxExtension_EnumByName_prototype = {
asNameMap(this: EnumByName<upstream0.Enum>): DartMap<string, upstream0.Enum> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const receiver = _flaxExtensionReceiver(this, "flax.core/flutter#function:EnumByName.method.asNameMap");
const _flaxResult = invokeTopLevel("flax.core/flutter#function:EnumByName.method.asNameMap", [receiver]);
return _flaxResult as DartMap<string, upstream0.Enum>;
},
byName(this: EnumByName<upstream0.Enum>, name: string): upstream0.Enum {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const receiver = _flaxExtensionReceiver(this, "flax.core/flutter#function:EnumByName.method.asNameMap");
const _flaxResult = invokeTopLevel("flax.core/flutter#function:EnumByName.method.byName", [receiver, name]);
return _flaxResult as upstream0.Enum;
},
};
const _flaxExtension_EnumByName_statics = {
};
const _flaxExtension_EnumByName_create = {create<T extends upstream0.Enum = upstream0.Enum>(receiver: DartIterableInput<T, (T | DartInput<T>)>): EnumByName<T> {
if (arguments.length !== 1 || receiver === undefined) throw new TypeError('Expected one extension receiver');
const view = Object.create(_flaxExtension_EnumByName_prototype);
_flaxBindDartExtension(view, "flax.core/flutter#function:EnumByName.method.asNameMap", receiver, {"asNameMap":{"id":"flax.core/flutter#function:EnumByName.method.asNameMap","parameters":[{"name":"receiver","required":true,"positional":true}]},"byName":{"id":"flax.core/flutter#function:EnumByName.method.byName","parameters":[{"name":"receiver","required":true,"positional":true},{"name":"name","required":true,"positional":true}]}});
return view;
}}.create; export const EnumByName: {<T extends upstream0.Enum = upstream0.Enum>(receiver: DartIterableInput<T, (T | DartInput<T>)>): EnumByName<T>;
} = Object.defineProperties(_flaxExtension_EnumByName_create, Object.getOwnPropertyDescriptors(_flaxExtension_EnumByName_statics)) as typeof EnumByName;
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? () => DartMap<string, _Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? (name: string) => _Selected0 : never : never; }
