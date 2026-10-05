// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface TextEditingController extends upstream0.Listenable, upstream1.ValueListenable<upstream2.TextEditingValue>, Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream2.TextEditingValue] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> { readonly __TextEditingController: unique symbol;
get value(): upstream2.TextEditingValue;
get text(): string;
get selection(): upstream3.TextSelection;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
clear(): void;
clearComposing(): void;
dispose(): void;
set text(value: string);
set value(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>);
set selection(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }>);
}
defineObject("flax.core/flutter#type:TextEditingController", ["value","text","selection"], ["text","value","selection"], _flaxBindingMethods("flax.core/flutter#type:TextEditingController", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"clear":_flaxMemberParameters1,"clearComposing":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}), ["removeListener"]);
export function TextEditingController(options: { text?: string | null | undefined } = {}): TextEditingController {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingController", "", [{"name":"text","required":false,"positional":false}], [], options) as TextEditingController;
}
export namespace TextEditingController {
export function fromValue(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }> | null): TextEditingController {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingController", "fromValue", [{"name":"value","required":true,"positional":true}], [value], {}) as TextEditingController;
}
}
