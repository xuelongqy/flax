// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BaselineOffset {
add(this: BaselineOffset, offset: number): number | null;
readonly offset: number | null;
minOf(this: BaselineOffset, other: number | null): number | null;
}
const _flaxExtension_BaselineOffset_prototype = {
add(this: BaselineOffset, offset: number): number | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const receiver = _flaxExtensionReceiver(this, "flax.core/sdk_rendering#function:BaselineOffset.operator.%2B");
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:BaselineOffset.operator.%2B", [receiver, offset]);
return _flaxResult as number | null;
},
get offset(): number | null {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const receiver = _flaxExtensionReceiver(this, "flax.core/sdk_rendering#function:BaselineOffset.operator.%2B");
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:BaselineOffset.getter.offset", [receiver]);
return _flaxResult as number | null;
},
minOf(this: BaselineOffset, other: number | null): number | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const receiver = _flaxExtensionReceiver(this, "flax.core/sdk_rendering#function:BaselineOffset.operator.%2B");
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:BaselineOffset.method.minOf", [receiver, other]);
return _flaxResult as number | null;
},
};
const _flaxExtension_BaselineOffset_statics = {
get noBaseline(): number | null {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:BaselineOffset.staticGetter.noBaseline", []);
return _flaxResult as number | null;
},
};
const _flaxExtension_BaselineOffset_create = {create(receiver: number | null): BaselineOffset {
if (arguments.length !== 1 || receiver === undefined) throw new TypeError('Expected one extension receiver');
const view = Object.create(_flaxExtension_BaselineOffset_prototype);
_flaxBindDartExtension(view, "flax.core/sdk_rendering#function:BaselineOffset.operator.%2B", receiver, {});
return view;
}}.create; export const BaselineOffset: {view: (receiver: number | null) => BaselineOffset;
readonly noBaseline: number | null;
} = Object.defineProperties({view: _flaxExtension_BaselineOffset_create}, Object.getOwnPropertyDescriptors(_flaxExtension_BaselineOffset_statics)) as typeof BaselineOffset;
