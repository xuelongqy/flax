// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_KeyboardInsertedContent';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardInsertedContent';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_RawFloatingCursorPoint';
import '@flax/flutter/services/_bindings/sdk_services_RawFloatingCursorPoint';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_TextInputControl';
import '@flax/flutter/services/_bindings/sdk_services_TextInputControl';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { _flaxMemberParameters107, _flaxMemberParameters112, _flaxMemberParameters113, _flaxMemberParameters114, _flaxMemberParameters115, _flaxMemberParameters116, _flaxMemberParameters0, _flaxMemberParameters117, _flaxMemberParameters4, _flaxMemberParameters118 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextInputClient extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }> { readonly __TextInputClient: unique symbol;
readonly [_flaxDartTypeValue]: TextInputClient;

readonly currentTextEditingValue: upstream0.TextEditingValue | null;
readonly currentAutofillScope: upstream1.AutofillScope | null;
updateEditingValue(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): void;
performAction(action: upstream2.TextInputAction): void;
insertContent(content: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_inserted_content.dart::KeyboardInsertedContent": readonly [] }>): void;
performPrivateCommand(action: string, data: DartMapInput<string, unknown | null, string, unknown | null>): void;
updateFloatingCursor(point: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::RawFloatingCursorPoint": readonly [] }>): void;
showAutocorrectionPromptRect(start: number, end: number): void;
onFocusReceived(): boolean;
connectionClosed(): void;
didChangeInputControl(oldControl: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputControl": readonly [] }> | null, newControl: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputControl": readonly [] }> | null): void;
showToolbar(): void;
insertTextPlaceholder(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
removeTextPlaceholder(): void;
performSelector(selectorName: string): void;
}
defineObject("flax.core/sdk_services#type:TextInputClient", ["currentTextEditingValue","currentAutofillScope"], [], _flaxBindingMethods("flax.core/sdk_services#type:TextInputClient", "object", {"updateEditingValue":_flaxMemberParameters107,"performAction":_flaxMemberParameters112,"insertContent":_flaxMemberParameters113,"performPrivateCommand":_flaxMemberParameters114,"updateFloatingCursor":_flaxMemberParameters115,"showAutocorrectionPromptRect":_flaxMemberParameters116,"onFocusReceived":_flaxMemberParameters0,"connectionClosed":_flaxMemberParameters0,"didChangeInputControl":_flaxMemberParameters117,"showToolbar":_flaxMemberParameters0,"insertTextPlaceholder":_flaxMemberParameters4,"removeTextPlaceholder":_flaxMemberParameters0,"performSelector":_flaxMemberParameters118}, {}), []);
export const TextInputClient: object & _FlaxInstanceType<TextInputClient> & _FlaxDartType<TextInputClient, readonly ["class", "flax.core/sdk_services#type:TextInputClient", readonly [], false]> = _flaxBindInstanceType<TextInputClient, object>({}, "flax.core/sdk_services#type:TextInputClient", ["dart:core::Object"]) as object & _FlaxInstanceType<TextInputClient> & _FlaxDartType<TextInputClient, readonly ["class", "flax.core/sdk_services#type:TextInputClient", readonly [], false]>;
