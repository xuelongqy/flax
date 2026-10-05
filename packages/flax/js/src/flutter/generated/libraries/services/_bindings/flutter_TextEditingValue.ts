// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"composing","required":false,"positional":false},{"name":"selection","required":false,"positional":false},{"name":"text","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextRange';
import '@flax/flutter/services/_bindings/flutter_TextRange';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface TextEditingValue extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }> { readonly __TextEditingValue: unique symbol;
readonly text: string;
readonly selection: upstream0.TextSelection;
readonly composing: upstream1.TextRange;
readonly isComposingRangeValid: boolean;
copyWith(options?: {composing?: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> | null | undefined; selection?: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> | null | undefined; text?: string | null | undefined}): TextEditingValue;
}
defineObject("flax.core/flutter#type:TextEditingValue", ["text","selection","composing","isComposingRangeValid"], [], _flaxBindingMethods("flax.core/flutter#type:TextEditingValue", "object", {"copyWith":_flaxMemberParameters0}), []);
export function TextEditingValue(options: { text?: string | undefined; selection?: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> | undefined; composing?: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> | undefined } = {}): TextEditingValue {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingValue", "", [{"name":"text","required":false,"positional":false},{"name":"selection","required":false,"positional":false},{"name":"composing","required":false,"positional":false}], [], options) as TextEditingValue;
}
export namespace TextEditingValue { export declare const empty: TextEditingValue; }
Object.defineProperty(TextEditingValue, "empty", { get: () => invokeTopLevel("flax.core/flutter#read:TextEditingValue.empty", []) });
