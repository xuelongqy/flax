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
import { _flaxMemberParameters2, _flaxMemberParameters0, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoDesktopTextSelectionControls extends Omit<upstream0.TextSelectionControls, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:cupertino_ui/src/desktop_text_selection.dart::CupertinoDesktopTextSelectionControls": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [] }> { readonly __CupertinoDesktopTextSelectionControls: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoDesktopTextSelectionControls;

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
defineObject("flax.cupertino/cupertino#type:CupertinoDesktopTextSelectionControls", [], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoDesktopTextSelectionControls", "object", {"buildToolbar":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:TextSelectionControls");
export function _CupertinoDesktopTextSelectionControlsFactory(): CupertinoDesktopTextSelectionControls {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoDesktopTextSelectionControls", "", [], [], {}) as CupertinoDesktopTextSelectionControls;
}
const _CupertinoDesktopTextSelectionControlsProxy = {type: "flax.cupertino/cupertino#type:CupertinoDesktopTextSelectionControls", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"buildHandle":_flaxMemberParameters3,"getHandleAnchor":_flaxMemberParameters4,"buildToolbar":_flaxMemberParameters2,"getHandleSize":_flaxMemberParameters5,"canCut":_flaxMemberParameters6,"canCopy":_flaxMemberParameters6,"canPaste":_flaxMemberParameters6,"canSelectAll":_flaxMemberParameters6,"handleCut":_flaxMemberParameters6,"handleCopy":_flaxMemberParameters6,"handlePaste":_flaxMemberParameters6,"handleSelectAll":_flaxMemberParameters6}, getters: [], setters: [], contextMembers: [], superMembers: ["buildHandle","getHandleAnchor","buildToolbar","getHandleSize","canCut","canCopy","canPaste","canSelectAll","handleCut","handleCopy","handlePaste","handleSelectAll"]} as const;
export interface _CupertinoDesktopTextSelectionControlsNative extends CupertinoDesktopTextSelectionControls {
readonly [_flaxDartTypeValue]: _CupertinoDesktopTextSelectionControlsNative;

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
export abstract class _CupertinoDesktopTextSelectionControlsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoDesktopTextSelectionControls>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoDesktopTextSelectionControls;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:CupertinoDesktopTextSelectionControls", readonly [], false];
constructor() { super(_CupertinoDesktopTextSelectionControlsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CupertinoDesktopTextSelectionControlsNative.prototype, _CupertinoDesktopTextSelectionControlsProxy);
export namespace _CupertinoDesktopTextSelectionControlsFactory { export function implement(args: [], implementation: {}): CupertinoDesktopTextSelectionControls {
return constructProxy(_CupertinoDesktopTextSelectionControlsProxy, args, implementation) as CupertinoDesktopTextSelectionControls; } }
const _CupertinoDesktopTextSelectionControlsBinding = _flaxProxyFactory(_CupertinoDesktopTextSelectionControlsFactory, _CupertinoDesktopTextSelectionControlsNative) as unknown as typeof _CupertinoDesktopTextSelectionControlsFactory & (new() => _CupertinoDesktopTextSelectionControlsNative);
export const CupertinoDesktopTextSelectionControls: typeof _CupertinoDesktopTextSelectionControlsBinding & _FlaxInstanceType<CupertinoDesktopTextSelectionControls> & _FlaxDartType<CupertinoDesktopTextSelectionControls, readonly ["class", "flax.cupertino/cupertino#type:CupertinoDesktopTextSelectionControls", readonly [], false]> = _flaxBindInstanceType<CupertinoDesktopTextSelectionControls, typeof _CupertinoDesktopTextSelectionControlsBinding>(_CupertinoDesktopTextSelectionControlsBinding, "flax.cupertino/cupertino#type:CupertinoDesktopTextSelectionControls", ["flax.core/sdk_widgets#type:TextSelectionControls","dart:core::Object"]) as typeof _CupertinoDesktopTextSelectionControlsBinding & _FlaxInstanceType<CupertinoDesktopTextSelectionControls> & _FlaxDartType<CupertinoDesktopTextSelectionControls, readonly ["class", "flax.cupertino/cupertino#type:CupertinoDesktopTextSelectionControls", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "buildHandle" | "getHandleAnchor" | "buildToolbar" | "getHandleSize" | "canCut" | "canCopy" | "canPaste" | "canSelectAll" | "handleCut" | "handleCopy" | "handlePaste" | "handleSelectAll" | "__flaxBound:package:cupertino_ui/src/desktop_text_selection.dart::CupertinoDesktopTextSelectionControls" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls";
