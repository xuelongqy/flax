// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface FilteringTextInputFormatter extends upstream0.TextInputFormatter, Readonly<{ "__flaxBound:package:flutter/src/services/text_formatter.dart::FilteringTextInputFormatter": readonly [] }> { readonly __FilteringTextInputFormatter: unique symbol;
}
defineObject("flax.core/flutter#type:FilteringTextInputFormatter", [], [], {}, []);
export function FilteringTextInputFormatter(filterPattern: upstream1.Pattern | string, options: { allow: boolean; replacementString?: string | undefined }): FilteringTextInputFormatter {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "", [{"name":"filterPattern","required":true,"positional":true},{"name":"allow","required":true,"positional":false},{"name":"replacementString","required":false,"positional":false}], [filterPattern], options) as FilteringTextInputFormatter;
}
export namespace FilteringTextInputFormatter {
export function allow(filterPattern: upstream1.Pattern | string, options: { replacementString?: string | undefined } = {}): FilteringTextInputFormatter {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "allow", [{"name":"filterPattern","required":true,"positional":true},{"name":"replacementString","required":false,"positional":false}], [filterPattern], options) as FilteringTextInputFormatter;
}
}
export namespace FilteringTextInputFormatter {
export function deny(filterPattern: upstream1.Pattern | string, options: { replacementString?: string | undefined } = {}): FilteringTextInputFormatter {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "deny", [{"name":"filterPattern","required":true,"positional":true},{"name":"replacementString","required":false,"positional":false}], [filterPattern], options) as FilteringTextInputFormatter;
}
}
export namespace FilteringTextInputFormatter { export declare const digitsOnly: upstream0.TextInputFormatter; }
Object.defineProperty(FilteringTextInputFormatter, "digitsOnly", { get: () => invokeObjectStatic("flax.core/flutter#type:FilteringTextInputFormatter", "digitsOnly") });
export namespace FilteringTextInputFormatter { export declare const singleLineFormatter: upstream0.TextInputFormatter; }
Object.defineProperty(FilteringTextInputFormatter, "singleLineFormatter", { get: () => invokeObjectStatic("flax.core/flutter#type:FilteringTextInputFormatter", "singleLineFormatter") });
