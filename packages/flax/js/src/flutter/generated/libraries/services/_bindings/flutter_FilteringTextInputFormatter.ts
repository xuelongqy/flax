// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FilteringTextInputFormatter extends Omit<upstream0.TextInputFormatter, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/text_formatter.dart::FilteringTextInputFormatter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [] }> { readonly __FilteringTextInputFormatter: unique symbol;
readonly [_flaxDartTypeValue]: FilteringTextInputFormatter;

readonly filterPattern: upstream1.Pattern | string;
readonly allow: boolean;
readonly replacementString: string;
formatEditUpdate(oldValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>, newValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): upstream2.TextEditingValue;
}
defineObject("flax.core/flutter#type:FilteringTextInputFormatter", ["filterPattern","allow","replacementString"], [], _flaxBindingMethods("flax.core/flutter#type:FilteringTextInputFormatter", "object", {}, {}), [], undefined, "flax.core/flutter#type:TextInputFormatter");
export function _FilteringTextInputFormatterFactory(filterPattern: DartInput<Readonly<{ "__flaxBound:dart:core::Pattern": readonly [] }>> | string, options: { allow: boolean; replacementString?: string | undefined }): FilteringTextInputFormatter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "", [{"name":"filterPattern","required":true,"positional":true},{"name":"allow","required":true},{"name":"replacementString"}], [filterPattern], options) as FilteringTextInputFormatter;
}
export namespace _FilteringTextInputFormatterFactory {
export function allow(filterPattern: DartInput<Readonly<{ "__flaxBound:dart:core::Pattern": readonly [] }>> | string, options: { replacementString?: string | undefined } = {}): FilteringTextInputFormatter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "allow", [{"name":"filterPattern","required":true,"positional":true},{"name":"replacementString"}], [filterPattern], options) as FilteringTextInputFormatter;
}
}
export namespace _FilteringTextInputFormatterFactory {
export function deny(filterPattern: DartInput<Readonly<{ "__flaxBound:dart:core::Pattern": readonly [] }>> | string, options: { replacementString?: string | undefined } = {}): FilteringTextInputFormatter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "deny", [{"name":"filterPattern","required":true,"positional":true},{"name":"replacementString"}], [filterPattern], options) as FilteringTextInputFormatter;
}
}
export namespace _FilteringTextInputFormatterFactory { export declare const singleLineFormatter: upstream0.TextInputFormatter; }
export namespace _FilteringTextInputFormatterFactory { export declare const digitsOnly: upstream0.TextInputFormatter; }
_flaxDefineStaticGetters(_FilteringTextInputFormatterFactory, "flax.core/flutter#read:FilteringTextInputFormatter.", ["singleLineFormatter","digitsOnly"]);
export const FilteringTextInputFormatter: typeof _FilteringTextInputFormatterFactory & _FlaxInstanceType<FilteringTextInputFormatter> & _FlaxDartType<FilteringTextInputFormatter, readonly ["class", "flax.core/flutter#type:FilteringTextInputFormatter", readonly [], false]> = _flaxBindInstanceType<FilteringTextInputFormatter, typeof _FilteringTextInputFormatterFactory>(_FilteringTextInputFormatterFactory, "flax.core/flutter#type:FilteringTextInputFormatter", ["flax.core/flutter#type:TextInputFormatter","dart:core::Object"]) as typeof _FilteringTextInputFormatterFactory & _FlaxInstanceType<FilteringTextInputFormatter> & _FlaxDartType<FilteringTextInputFormatter, readonly ["class", "flax.core/flutter#type:FilteringTextInputFormatter", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "filterPattern" | "allow" | "replacementString" | "formatEditUpdate" | "__flaxBound:package:flutter/src/services/text_formatter.dart::FilteringTextInputFormatter" | "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter";
