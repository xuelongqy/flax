// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_SelectionRect';
import '@flax/flutter/services/_bindings/sdk_services_SelectionRect';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_FontWeight';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream10 from '@flax/flutter/services/_bindings/sdk_services_TextInputStyle';
import '@flax/flutter/services/_bindings/sdk_services_TextInputStyle';
import { _flaxMemberParameters126, _flaxMemberParameters127, _flaxMemberParameters0, _flaxMemberParameters121, _flaxMemberParameters107, _flaxMemberParameters122, _flaxMemberParameters86, _flaxMemberParameters123, _flaxMemberParameters124, _flaxMemberParameters125, _flaxMemberParameters128 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextInputControl extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputControl": readonly [] }> { readonly __TextInputControl: unique symbol;
readonly [_flaxDartTypeValue]: TextInputControl;

attach(client: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }>, configuration: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [] }>): void;
detach(client: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }>): void;
show(): void;
hide(): void;
updateConfig(configuration: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [] }>): void;
setEditingState(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): void;
setEditableSizeAndTransform(editableBoxSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
setComposingRect(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): void;
setCaretRect(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): void;
setSelectionRects(selectionRects: DartListInput<upstream6.SelectionRect, Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::SelectionRect": readonly [] }>>): void;
setStyle(options: {fontFamily: string | null; fontSize: number | null; fontWeight: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null; textAlign: upstream8.TextAlign; textDirection: upstream9.TextDirection}): void;
updateStyle(style: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
requestAutofill(): void;
finishAutofillContext(options?: {shouldSave?: boolean | undefined}): void;
}
defineObject("flax.core/sdk_services#type:TextInputControl", [], [], _flaxBindingMethods("flax.core/sdk_services#type:TextInputControl", "object", {"attach":_flaxMemberParameters126,"detach":_flaxMemberParameters127,"show":_flaxMemberParameters0,"hide":_flaxMemberParameters0,"updateConfig":_flaxMemberParameters121,"setEditingState":_flaxMemberParameters107,"setEditableSizeAndTransform":_flaxMemberParameters122,"setComposingRect":_flaxMemberParameters86,"setCaretRect":_flaxMemberParameters86,"setSelectionRects":_flaxMemberParameters123,"setStyle":_flaxMemberParameters124,"updateStyle":_flaxMemberParameters125,"requestAutofill":_flaxMemberParameters0,"finishAutofillContext":_flaxMemberParameters128}, {}), []);
export const TextInputControl: object & _FlaxInstanceType<TextInputControl> & _FlaxDartType<TextInputControl, readonly ["class", "flax.core/sdk_services#type:TextInputControl", readonly [], false]> = _flaxBindInstanceType<TextInputControl, object>({}, "flax.core/sdk_services#type:TextInputControl", ["dart:core::Object"]) as object & _FlaxInstanceType<TextInputControl> & _FlaxDartType<TextInputControl, readonly ["class", "flax.core/sdk_services#type:TextInputControl", readonly [], false]>;
