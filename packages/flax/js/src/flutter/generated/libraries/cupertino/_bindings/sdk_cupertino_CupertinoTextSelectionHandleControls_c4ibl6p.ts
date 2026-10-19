// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextSelectionControls_c2i329';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextSelectionControls_c2i329';
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
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"textLineHeight","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"globalEditableRegion","required":true,"positional":true},{"name":"textLineHeight","required":true,"positional":true},{"name":"selectionMidpoint","required":true,"positional":true},{"name":"endpoints","required":true,"positional":true},{"name":"delegate","required":true,"positional":true},{"name":"clipboardStatus","required":true,"positional":true},{"name":"lastSecondaryTapDownPosition","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"type","required":true,"positional":true},{"name":"textLineHeight","required":true,"positional":true},{"name":"onTap","positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"type","required":true,"positional":true},{"name":"textLineHeight","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"delegate","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"delegate","required":true,"positional":true},{"name":"clipboardStatus","positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoTextSelectionHandleControls extends Omit<upstream0.CupertinoTextSelectionControls, _flaxOwnMembers0>, Omit<upstream1.TextSelectionControls, _flaxOwnMembers0 | keyof upstream0.CupertinoTextSelectionControls>, Omit<upstream2.TextSelectionHandleControls, _flaxOwnMembers0 | keyof upstream0.CupertinoTextSelectionControls | keyof upstream1.TextSelectionControls>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/text_selection.dart::CupertinoTextSelectionHandleControls": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/text_selection.dart::CupertinoTextSelectionControls": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionHandleControls": readonly [] }> { readonly __CupertinoTextSelectionHandleControls: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoTextSelectionHandleControls;

}
defineObject("flax.core/sdk_cupertino#type:CupertinoTextSelectionHandleControls", [], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoTextSelectionHandleControls", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:TextSelectionHandleControls");
const _CupertinoTextSelectionHandleControlsProxy = {type: "flax.core/sdk_cupertino#type:CupertinoTextSelectionHandleControls", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"getHandleSize":_flaxMemberParameters1,"buildToolbar":_flaxMemberParameters2,"buildHandle":_flaxMemberParameters3,"getHandleAnchor":_flaxMemberParameters4,"canCut":_flaxMemberParameters5,"canCopy":_flaxMemberParameters5,"canPaste":_flaxMemberParameters5,"canSelectAll":_flaxMemberParameters5,"handleCut":_flaxMemberParameters6,"handleCopy":_flaxMemberParameters6,"handlePaste":_flaxMemberParameters5,"handleSelectAll":_flaxMemberParameters5}, getters: [], setters: [], contextMembers: [], superMembers: ["getHandleSize","buildToolbar","buildHandle","getHandleAnchor","canCut","canCopy","canPaste","canSelectAll","handleCut","handleCopy","handlePaste","handleSelectAll"]} as const;
export interface CupertinoTextSelectionHandleControls {
readonly [_flaxDartTypeValue]: CupertinoTextSelectionHandleControls;

getHandleSize(textLineHeight: number): upstream3.Size;
buildToolbar(context: upstream4.BuildContext, globalEditableRegion: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, textLineHeight: number, selectionMidpoint: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, endpoints: DartListInput<upstream7.TextSelectionPoint, Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [] }>>, delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>, clipboardStatus: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null, lastSecondaryTapDownPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null): Widget;
buildHandle(context: upstream4.BuildContext, type: upstream11.TextSelectionHandleType, textLineHeight: number, onTap?: (() => void) | null): Widget;
getHandleAnchor(type: upstream11.TextSelectionHandleType, textLineHeight: number): upstream6.Offset;
canCut(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
canCopy(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
canPaste(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
canSelectAll(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): boolean;
handleCut(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>, clipboardStatus?: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream10.ClipboardStatus] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> | null): void;
handleCopy(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>, clipboardStatus?: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream10.ClipboardStatus] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream10.ClipboardStatus] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> | null): void;
handlePaste(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): Promise<void>;
handleSelectAll(delegate: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>): void;
}
export abstract class CupertinoTextSelectionHandleControls extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoTextSelectionHandleControls>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoTextSelectionHandleControls;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoTextSelectionHandleControls", readonly [], false];
constructor() { super(_CupertinoTextSelectionHandleControlsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CupertinoTextSelectionHandleControls.prototype, _CupertinoTextSelectionHandleControlsProxy);
export namespace CupertinoTextSelectionHandleControls { export function implement(args: [], implementation: {}): CupertinoTextSelectionHandleControls {
return constructProxy(_CupertinoTextSelectionHandleControlsProxy, args, implementation) as CupertinoTextSelectionHandleControls; } }
_flaxBindInstanceType<CupertinoTextSelectionHandleControls, typeof CupertinoTextSelectionHandleControls>(CupertinoTextSelectionHandleControls, "flax.core/sdk_cupertino#type:CupertinoTextSelectionHandleControls", ["flax.core/sdk_cupertino#type:CupertinoTextSelectionControls","flax.core/sdk_widgets#type:TextSelectionControls","flax.core/sdk_widgets#type:TextSelectionHandleControls","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getHandleSize" | "buildToolbar" | "buildHandle" | "getHandleAnchor" | "canCut" | "canCopy" | "canPaste" | "canSelectAll" | "handleCut" | "handleCopy" | "handlePaste" | "handleSelectAll" | "__flaxBound:package:flutter/src/cupertino/text_selection.dart::CupertinoTextSelectionHandleControls" | "__flaxBound:package:flutter/src/cupertino/text_selection.dart::CupertinoTextSelectionControls" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionHandleControls";
