// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
const _flaxMemberParameters0 = [{"name":"value","required":true,"positional":true},{"name":"cause","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"hideHandles","positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"position","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"cause","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelectionDelegate extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }> { readonly __TextSelectionDelegate: unique symbol;
readonly [_flaxDartTypeValue]: TextSelectionDelegate;

readonly textEditingValue: upstream0.TextEditingValue;
readonly cutEnabled: boolean;
readonly copyEnabled: boolean;
readonly pasteEnabled: boolean;
readonly selectAllEnabled: boolean;
readonly lookUpEnabled: boolean;
readonly searchWebEnabled: boolean;
readonly shareEnabled: boolean;
readonly liveTextInputEnabled: boolean;
userUpdateTextEditingValue(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>, cause: upstream1.SelectionChangedCause): void;
hideToolbar(hideHandles?: boolean): void;
bringIntoView(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): void;
cutSelection(cause: upstream1.SelectionChangedCause): void;
pasteText(cause: upstream1.SelectionChangedCause): Promise<void>;
selectAll(cause: upstream1.SelectionChangedCause): void;
copySelection(cause: upstream1.SelectionChangedCause): void;
}
defineObject("flax.core/sdk_services#type:TextSelectionDelegate", ["textEditingValue","cutEnabled","copyEnabled","pasteEnabled","selectAllEnabled","lookUpEnabled","searchWebEnabled","shareEnabled","liveTextInputEnabled"], [], _flaxBindingMethods("flax.core/sdk_services#type:TextSelectionDelegate", "object", {"userUpdateTextEditingValue":_flaxMemberParameters0,"hideToolbar":_flaxMemberParameters1,"bringIntoView":_flaxMemberParameters2,"cutSelection":_flaxMemberParameters3,"pasteText":_flaxMemberParameters3,"selectAll":_flaxMemberParameters3,"copySelection":_flaxMemberParameters3}, {}), []);
export const TextSelectionDelegate: object & _FlaxInstanceType<TextSelectionDelegate> & _FlaxDartType<TextSelectionDelegate, readonly ["class", "flax.core/sdk_services#type:TextSelectionDelegate", readonly [], false]> = _flaxBindInstanceType<TextSelectionDelegate, object>({}, "flax.core/sdk_services#type:TextSelectionDelegate", ["dart:core::Object"]) as object & _FlaxInstanceType<TextSelectionDelegate> & _FlaxDartType<TextSelectionDelegate, readonly ["class", "flax.core/sdk_services#type:TextSelectionDelegate", readonly [], false]>;
