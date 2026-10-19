// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_MaterialTextSelectionControls_c191j5';
import '@flax/flutter/material/_bindings/sdk_material_MaterialTextSelectionControls_c191j5';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionHandleControls';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionHandleControls';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatusNotifier';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatusNotifier';
import { _flaxMemberParameters204, _flaxMemberParameters2, _flaxMemberParameters98, _flaxMemberParameters97, _flaxMemberParameters203, _flaxMemberParameters96, _flaxMemberParameters99 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialTextSelectionHandleControls extends Omit<upstream0.MaterialTextSelectionControls, _flaxOwnMembers0>, Omit<upstream1.TextSelectionControls, _flaxOwnMembers0 | keyof upstream0.MaterialTextSelectionControls>, Omit<upstream2.TextSelectionHandleControls, _flaxOwnMembers0 | keyof upstream0.MaterialTextSelectionControls | keyof upstream1.TextSelectionControls>, Readonly<{ "__flaxBound:package:flutter/src/material/text_selection.dart::MaterialTextSelectionHandleControls": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/text_selection.dart::MaterialTextSelectionControls": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionHandleControls": readonly [] }> { readonly __MaterialTextSelectionHandleControls: unique symbol;
readonly [_flaxDartTypeValue]: MaterialTextSelectionHandleControls;

}
defineObject("flax.core/sdk_material#type:MaterialTextSelectionHandleControls", [], [], _flaxBindingMethods("flax.core/sdk_material#type:MaterialTextSelectionHandleControls", "object", {"handleCut":_flaxMemberParameters204,"handleCopy":_flaxMemberParameters204}, {}), [], undefined, "flax.core/sdk_material#type:MaterialTextSelectionControls");
const _MaterialTextSelectionHandleControlsProxy = {type: "flax.core/sdk_material#type:MaterialTextSelectionHandleControls", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"getHandleSize":_flaxMemberParameters98,"buildToolbar":_flaxMemberParameters97,"buildHandle":_flaxMemberParameters203,"getHandleAnchor":_flaxMemberParameters96,"canSelectAll":_flaxMemberParameters99,"canCut":_flaxMemberParameters99,"canCopy":_flaxMemberParameters99,"canPaste":_flaxMemberParameters99,"handleCut":_flaxMemberParameters204,"handleCopy":_flaxMemberParameters204,"handlePaste":_flaxMemberParameters99,"handleSelectAll":_flaxMemberParameters99}, getters: [], setters: [], contextMembers: [], superMembers: ["getHandleSize","buildToolbar","buildHandle","getHandleAnchor","canSelectAll","canCut","canCopy","canPaste","handleCut","handleCopy","handlePaste","handleSelectAll"]} as const;
export interface MaterialTextSelectionHandleControls {
readonly [_flaxDartTypeValue]: MaterialTextSelectionHandleControls;

getHandleSize(textLineHeight: number): upstream3.Size;
buildToolbar(context: upstream4.BuildContext, globalEditableRegion: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, textLineHeight: number, selectionMidpoint: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, endpoints: DartListInput<upstream7.TextSelectionPoint, Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [] }>>, delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>, clipboardStatus: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null, lastSecondaryTapDownPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null): Widget;
buildHandle(context: upstream4.BuildContext, type: upstream11.TextSelectionHandleType, textHeight: number, onTap?: (() => void) | null): Widget;
getHandleAnchor(type: upstream11.TextSelectionHandleType, textLineHeight: number): upstream6.Offset;
canSelectAll(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
canCut(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
canCopy(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
canPaste(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
handleCut(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>, clipboardStatus?: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream10.ClipboardStatus] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> | null): void;
handleCopy(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>, clipboardStatus?: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream10.ClipboardStatus] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> | null): void;
handlePaste(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): Promise<void>;
handleSelectAll(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): void;
}
export abstract class MaterialTextSelectionHandleControls extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialTextSelectionHandleControls>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialTextSelectionHandleControls;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialTextSelectionHandleControls", readonly [], false];
constructor() { super(_MaterialTextSelectionHandleControlsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MaterialTextSelectionHandleControls.prototype, _MaterialTextSelectionHandleControlsProxy);
export namespace MaterialTextSelectionHandleControls { export function implement(args: [], implementation: {}): MaterialTextSelectionHandleControls {
return constructProxy(_MaterialTextSelectionHandleControlsProxy, args, implementation) as MaterialTextSelectionHandleControls; } }
_flaxBindInstanceType<MaterialTextSelectionHandleControls, typeof MaterialTextSelectionHandleControls>(MaterialTextSelectionHandleControls, "flax.core/sdk_material#type:MaterialTextSelectionHandleControls", ["flax.core/sdk_material#type:MaterialTextSelectionControls","flax.core/sdk_widgets#type:TextSelectionControls","dart:core::Object","flax.core/sdk_widgets#type:TextSelectionHandleControls"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getHandleSize" | "buildToolbar" | "buildHandle" | "getHandleAnchor" | "canSelectAll" | "canCut" | "canCopy" | "canPaste" | "handleCut" | "handleCopy" | "handlePaste" | "handleSelectAll" | "__flaxBound:package:flutter/src/material/text_selection.dart::MaterialTextSelectionHandleControls" | "__flaxBound:package:flutter/src/material/text_selection.dart::MaterialTextSelectionControls" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionHandleControls";
