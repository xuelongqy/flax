// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FilteringTextInputFormatter extends upstream0.TextInputFormatter, Readonly<{ "__flaxBound:package:flutter/src/services/text_formatter.dart::FilteringTextInputFormatter": readonly [] }> { readonly __FilteringTextInputFormatter: unique symbol;

}
defineObject("flax.core/flutter#type:FilteringTextInputFormatter", [], [], _flaxBindingMethods("flax.core/flutter#type:FilteringTextInputFormatter", "object", {}, {}), []);
function _FilteringTextInputFormatterFactory(filterPattern: DartInput<Readonly<{ "__flaxBound:dart:core::Pattern": readonly [] }>> | string, options: { allow: boolean; replacementString?: string | undefined }): FilteringTextInputFormatter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "", [{"name":"filterPattern","required":true,"positional":true},{"name":"allow","required":true,"positional":false},{"name":"replacementString","required":false,"positional":false}], [filterPattern], options) as FilteringTextInputFormatter;
}
namespace _FilteringTextInputFormatterFactory {
export function allow(filterPattern: DartInput<Readonly<{ "__flaxBound:dart:core::Pattern": readonly [] }>> | string, options: { replacementString?: string | undefined } = {}): FilteringTextInputFormatter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "allow", [{"name":"filterPattern","required":true,"positional":true},{"name":"replacementString","required":false,"positional":false}], [filterPattern], options) as FilteringTextInputFormatter;
}
}
namespace _FilteringTextInputFormatterFactory {
export function deny(filterPattern: DartInput<Readonly<{ "__flaxBound:dart:core::Pattern": readonly [] }>> | string, options: { replacementString?: string | undefined } = {}): FilteringTextInputFormatter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "deny", [{"name":"filterPattern","required":true,"positional":true},{"name":"replacementString","required":false,"positional":false}], [filterPattern], options) as FilteringTextInputFormatter;
}
}
namespace _FilteringTextInputFormatterFactory { export declare const digitsOnly: upstream0.TextInputFormatter; }
Object.defineProperty(_FilteringTextInputFormatterFactory, "digitsOnly", { get: () => invokeTopLevel("flax.core/flutter#read:FilteringTextInputFormatter.digitsOnly", []) });
namespace _FilteringTextInputFormatterFactory { export declare const singleLineFormatter: upstream0.TextInputFormatter; }
Object.defineProperty(_FilteringTextInputFormatterFactory, "singleLineFormatter", { get: () => invokeTopLevel("flax.core/flutter#read:FilteringTextInputFormatter.singleLineFormatter", []) });
export const FilteringTextInputFormatter: typeof _FilteringTextInputFormatterFactory & _FlaxInstanceType<FilteringTextInputFormatter> & _FlaxDartType<FilteringTextInputFormatter, readonly ["class", "flax.core/flutter#type:FilteringTextInputFormatter", readonly [], false]> = _flaxBindInstanceType<FilteringTextInputFormatter, typeof _FilteringTextInputFormatterFactory>(_FilteringTextInputFormatterFactory, "flax.core/flutter#type:FilteringTextInputFormatter", ["flax.core/flutter#type:TextInputFormatter","dart:core::Object"]) as typeof _FilteringTextInputFormatterFactory & _FlaxInstanceType<FilteringTextInputFormatter> & _FlaxDartType<FilteringTextInputFormatter, readonly ["class", "flax.core/flutter#type:FilteringTextInputFormatter", readonly [], false]>;
