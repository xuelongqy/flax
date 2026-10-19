// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"type","required":true,"positional":true},{"name":"textLineHeight","required":true,"positional":true},{"name":"onTap","positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"type","required":true,"positional":true},{"name":"textLineHeight","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"globalEditableRegion","required":true,"positional":true},{"name":"textLineHeight","required":true,"positional":true},{"name":"selectionMidpoint","required":true,"positional":true},{"name":"endpoints","required":true,"positional":true},{"name":"delegate","required":true,"positional":true},{"name":"clipboardStatus","required":true,"positional":true},{"name":"lastSecondaryTapDownPosition","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"textLineHeight","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"delegate","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EmptyTextSelectionControls extends Omit<upstream0.TextSelectionControls, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::EmptyTextSelectionControls": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [] }> { readonly __EmptyTextSelectionControls: unique symbol;
readonly [_flaxDartTypeValue]: EmptyTextSelectionControls;

}
defineObject("flax.core/sdk_widgets#type:EmptyTextSelectionControls", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:EmptyTextSelectionControls", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:TextSelectionControls");
const _EmptyTextSelectionControlsProxy = {type: "flax.core/sdk_widgets#type:EmptyTextSelectionControls", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"buildHandle":_flaxMemberParameters1,"getHandleAnchor":_flaxMemberParameters2,"buildToolbar":_flaxMemberParameters3,"getHandleSize":_flaxMemberParameters4,"canCut":_flaxMemberParameters5,"canCopy":_flaxMemberParameters5,"canPaste":_flaxMemberParameters5,"canSelectAll":_flaxMemberParameters5,"handleCut":_flaxMemberParameters5,"handleCopy":_flaxMemberParameters5,"handlePaste":_flaxMemberParameters5,"handleSelectAll":_flaxMemberParameters5}, getters: [], setters: [], contextMembers: [], superMembers: ["buildHandle","getHandleAnchor","buildToolbar","getHandleSize","canCut","canCopy","canPaste","canSelectAll","handleCut","handleCopy","handlePaste","handleSelectAll"]} as const;
export interface EmptyTextSelectionControls {
readonly [_flaxDartTypeValue]: EmptyTextSelectionControls;

buildHandle(context: upstream1.BuildContext, type: upstream2.TextSelectionHandleType, textLineHeight: number, onTap?: (() => void) | null): Widget;
getHandleAnchor(type: upstream2.TextSelectionHandleType, textLineHeight: number): upstream3.Offset;
buildToolbar(context: upstream1.BuildContext, globalEditableRegion: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, textLineHeight: number, selectionMidpoint: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, endpoints: DartListInput<upstream5.TextSelectionPoint, Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [] }>>, delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>, clipboardStatus: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream8.ClipboardStatus] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null, lastSecondaryTapDownPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null): Widget;
getHandleSize(textLineHeight: number): upstream9.Size;
canCut(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
canCopy(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
canPaste(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
canSelectAll(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
handleCut(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): void;
handleCopy(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): void;
handlePaste(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): Promise<void>;
handleSelectAll(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): void;
}
export abstract class EmptyTextSelectionControls extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<EmptyTextSelectionControls>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: EmptyTextSelectionControls;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:EmptyTextSelectionControls", readonly [], false];
constructor() { super(_EmptyTextSelectionControlsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(EmptyTextSelectionControls.prototype, _EmptyTextSelectionControlsProxy);
export namespace EmptyTextSelectionControls { export function implement(args: [], implementation: {}): EmptyTextSelectionControls {
return constructProxy(_EmptyTextSelectionControlsProxy, args, implementation) as EmptyTextSelectionControls; } }
_flaxBindInstanceType<EmptyTextSelectionControls, typeof EmptyTextSelectionControls>(EmptyTextSelectionControls, "flax.core/sdk_widgets#type:EmptyTextSelectionControls", ["flax.core/sdk_widgets#type:TextSelectionControls","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "buildHandle" | "getHandleAnchor" | "buildToolbar" | "getHandleSize" | "canCut" | "canCopy" | "canPaste" | "canSelectAll" | "handleCut" | "handleCopy" | "handlePaste" | "handleSelectAll" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::EmptyTextSelectionControls" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls";
