// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream5 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_TextSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_TextSpan';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import { _flaxMemberParameters3, _flaxMemberParameters174 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextEditingController extends Omit<upstream0.ValueNotifier<upstream1.TextEditingValue>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.TextEditingValue>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.TextEditingValue> | keyof upstream2.ChangeNotifier>, Omit<upstream4.ValueListenable<upstream1.TextEditingValue>, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.TextEditingValue> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream1.TextEditingValue] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.TextEditingValue] }> { readonly __TextEditingController: unique symbol;
readonly [_flaxDartTypeValue]: TextEditingController;

get value(): upstream1.TextEditingValue;
readonly hasListeners: boolean;
get text(): string;
get selection(): upstream5.TextSelection;
toString(): string;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
buildTextSpan(options: {context: upstream7.BuildContext; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; withComposing: boolean}): upstream6.TextSpan;
clear(): void;
clearComposing(): void;
set value(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>);
set text(value: string);
set selection(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>);
}
defineObject("flax.core/flutter#type:TextEditingController", ["value","hasListeners","text","selection"], ["value","text","selection"], _flaxBindingMethods("flax.core/flutter#type:TextEditingController", "object", {"toString":_flaxMemberParameters3,"buildTextSpan":_flaxMemberParameters174,"clear":_flaxMemberParameters3,"clearComposing":_flaxMemberParameters3}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _TextEditingControllerFactory(options: { text?: string | null | undefined } = {}): TextEditingController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingController", "", [{"name":"text"}], [], options) as TextEditingController;
}
export namespace _TextEditingControllerFactory {
export function fromValue(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }> | null): TextEditingController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingController", "fromValue", [{"name":"value","required":true,"positional":true}], [value], {}) as TextEditingController;
}
}
export const TextEditingController: typeof _TextEditingControllerFactory & _FlaxInstanceType<TextEditingController> & _FlaxDartType<TextEditingController, readonly ["class", "flax.core/flutter#type:TextEditingController", readonly [], false]> = _flaxBindInstanceType<TextEditingController, typeof _TextEditingControllerFactory>(_TextEditingControllerFactory, "flax.core/flutter#type:TextEditingController", ["flax.core/sdk_foundation#type:ValueNotifier","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/flutter#type:ValueListenable"]) as typeof _TextEditingControllerFactory & _FlaxInstanceType<TextEditingController> & _FlaxDartType<TextEditingController, readonly ["class", "flax.core/flutter#type:TextEditingController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "text" | "selection" | "toString" | "addListener" | "removeListener" | "dispose" | "buildTextSpan" | "clear" | "clearComposing" | "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
