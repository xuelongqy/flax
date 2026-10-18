// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
const _flaxMemberParameters0 = [{"name":"oldValue","required":true,"positional":true},{"name":"newValue","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextInputFormatter extends Readonly<{ "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [] }> { readonly __TextInputFormatter: unique symbol;
readonly [_flaxDartTypeValue]: TextInputFormatter;

formatEditUpdate(oldValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>, newValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): upstream0.TextEditingValue;
}
defineObject("flax.core/flutter#type:TextInputFormatter", [], [], _flaxBindingMethods("flax.core/flutter#type:TextInputFormatter", "object", {"formatEditUpdate":_flaxMemberParameters0}, {}), []);
export namespace _TextInputFormatterFactory {
export function withFunction(formatFunction: ((oldValue: upstream0.TextEditingValue, newValue: upstream0.TextEditingValue) => Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>)): TextInputFormatter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextInputFormatter", "withFunction", [{"name":"formatFunction","required":true,"positional":true}], [formatFunction], {}) as TextInputFormatter;
}
}
export const TextInputFormatter: typeof _TextInputFormatterFactory & _FlaxInstanceType<TextInputFormatter> & _FlaxDartType<TextInputFormatter, readonly ["class", "flax.core/flutter#type:TextInputFormatter", readonly [], false]> = _flaxBindInstanceType<TextInputFormatter, typeof _TextInputFormatterFactory>(_TextInputFormatterFactory, "flax.core/flutter#type:TextInputFormatter", ["dart:core::Object"]) as typeof _TextInputFormatterFactory & _FlaxInstanceType<TextInputFormatter> & _FlaxDartType<TextInputFormatter, readonly ["class", "flax.core/flutter#type:TextInputFormatter", readonly [], false]>;
