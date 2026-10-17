// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
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
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextEditingController extends Omit<upstream0.Listenable, typeof _flaxDartTypeValue | "value" | "text" | "selection" | "hasListeners" | "addListener" | "removeListener" | "clear" | "clearComposing" | "dispose">, Omit<upstream1.ValueListenable<upstream2.TextEditingValue>, typeof _flaxDartTypeValue | "value" | "text" | "selection" | "hasListeners" | "addListener" | "removeListener" | "clear" | "clearComposing" | "dispose">, Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream2.TextEditingValue] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> { readonly __TextEditingController: unique symbol;

get value(): upstream2.TextEditingValue;
get text(): string;
get selection(): upstream3.TextSelection;
readonly hasListeners: boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
clear(): void;
clearComposing(): void;
dispose(): void;
set text(value: string);
set value(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>);
set selection(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }>);
}
defineObject("flax.core/flutter#type:TextEditingController", ["value","text","selection","hasListeners"], ["text","value","selection"], _flaxBindingMethods("flax.core/flutter#type:TextEditingController", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"clear":_flaxMemberParameters1,"clearComposing":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}, {}), ["removeListener"]);
export function _TextEditingControllerFactory(options: { text?: string | null | undefined } = {}): TextEditingController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingController", "", [{"name":"text","required":false,"positional":false}], [], options) as TextEditingController;
}
export namespace _TextEditingControllerFactory {
export function fromValue(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }> | null): TextEditingController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingController", "fromValue", [{"name":"value","required":true,"positional":true}], [value], {}) as TextEditingController;
}
}
export const TextEditingController: typeof _TextEditingControllerFactory & _FlaxInstanceType<TextEditingController> & _FlaxDartType<TextEditingController, readonly ["class", "flax.core/flutter#type:TextEditingController", readonly [], false]> = _flaxBindInstanceType<TextEditingController, typeof _TextEditingControllerFactory>(_TextEditingControllerFactory, "flax.core/flutter#type:TextEditingController", ["package:flutter/src/foundation/change_notifier.dart::ValueNotifier","package:flutter/src/foundation/change_notifier.dart::ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/flutter#type:ValueListenable"]) as typeof _TextEditingControllerFactory & _FlaxInstanceType<TextEditingController> & _FlaxDartType<TextEditingController, readonly ["class", "flax.core/flutter#type:TextEditingController", readonly [], false]>;
