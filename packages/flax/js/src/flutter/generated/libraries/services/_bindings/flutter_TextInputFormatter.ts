// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface TextInputFormatter extends Readonly<{ "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [] }> { readonly __TextInputFormatter: unique symbol;
}
defineObject("flax.core/flutter#type:TextInputFormatter", [], [], _flaxBindingMethods("flax.core/flutter#type:TextInputFormatter", "object", {}), []);
namespace _TextInputFormatterFactory {
export function withFunction(formatFunction: ((oldValue: upstream0.TextEditingValue, newValue: upstream0.TextEditingValue) => Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>)): TextInputFormatter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextInputFormatter", "withFunction", [{"name":"formatFunction","required":true,"positional":true}], [formatFunction], {}) as TextInputFormatter;
}
}
export const TextInputFormatter: typeof _TextInputFormatterFactory & _FlaxInstanceType<TextInputFormatter> = _flaxBindInstanceType<TextInputFormatter, typeof _TextInputFormatterFactory>(_TextInputFormatterFactory, "flax.core/flutter#type:TextInputFormatter", ["dart:core::Object"]);
