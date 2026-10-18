// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Characters';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Characters';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StringCharacters {
readonly characters: upstream0.Characters;
}
const _flaxExtension_StringCharacters_prototype = {
get characters(): upstream0.Characters {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const receiver = _flaxExtensionReceiver(this, "flax.core/sdk_widgets#function:StringCharacters.getter.characters");
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:StringCharacters.getter.characters", [receiver]);
return _flaxResult as upstream0.Characters;
},
};
const _flaxExtension_StringCharacters_statics = {
};
const _flaxExtension_StringCharacters_create = {create(receiver: string): StringCharacters {
if (arguments.length !== 1 || receiver === undefined) throw new TypeError('Expected one extension receiver');
const view = Object.create(_flaxExtension_StringCharacters_prototype);
_flaxBindDartExtension(view, "flax.core/sdk_widgets#function:StringCharacters.getter.characters", receiver, {});
return view;
}}.create; export const StringCharacters: {(receiver: string): StringCharacters;
} = Object.defineProperties(_flaxExtension_StringCharacters_create, Object.getOwnPropertyDescriptors(_flaxExtension_StringCharacters_statics)) as typeof StringCharacters;
