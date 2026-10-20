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
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoTextSelectionControls extends Omit<upstream0.TextSelectionControls, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/text_selection.dart::CupertinoTextSelectionControls": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [] }> { readonly __CupertinoTextSelectionControls: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoTextSelectionControls;

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
defineObject("flax.core/sdk_cupertino#type:CupertinoTextSelectionControls", [], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoTextSelectionControls", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:TextSelectionControls");
export function _CupertinoTextSelectionControlsFactory(): CupertinoTextSelectionControls {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_cupertino#type:CupertinoTextSelectionControls", "", [], [], {}) as CupertinoTextSelectionControls;
}
const _CupertinoTextSelectionControlsProxy = {type: "flax.core/sdk_cupertino#type:CupertinoTextSelectionControls", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"buildHandle":_flaxMemberParameters1,"getHandleAnchor":_flaxMemberParameters2,"buildToolbar":_flaxMemberParameters3,"getHandleSize":_flaxMemberParameters4,"canCut":_flaxMemberParameters5,"canCopy":_flaxMemberParameters5,"canPaste":_flaxMemberParameters5,"canSelectAll":_flaxMemberParameters5,"handleCut":_flaxMemberParameters5,"handleCopy":_flaxMemberParameters5,"handlePaste":_flaxMemberParameters5,"handleSelectAll":_flaxMemberParameters5}, getters: [], setters: [], contextMembers: [], superMembers: ["buildHandle","getHandleAnchor","buildToolbar","getHandleSize","canCut","canCopy","canPaste","canSelectAll","handleCut","handleCopy","handlePaste","handleSelectAll"]} as const;
export interface _CupertinoTextSelectionControlsNative extends CupertinoTextSelectionControls {
readonly [_flaxDartTypeValue]: _CupertinoTextSelectionControlsNative;

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
export abstract class _CupertinoTextSelectionControlsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoTextSelectionControls>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoTextSelectionControls;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoTextSelectionControls", readonly [], false];
constructor() { super(_CupertinoTextSelectionControlsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CupertinoTextSelectionControlsNative.prototype, _CupertinoTextSelectionControlsProxy);
export namespace _CupertinoTextSelectionControlsFactory { export function implement(args: [], implementation: {}): CupertinoTextSelectionControls {
return constructProxy(_CupertinoTextSelectionControlsProxy, args, implementation) as CupertinoTextSelectionControls; } }
const _CupertinoTextSelectionControlsBinding = _flaxProxyFactory(_CupertinoTextSelectionControlsFactory, _CupertinoTextSelectionControlsNative) as unknown as typeof _CupertinoTextSelectionControlsFactory & (new() => _CupertinoTextSelectionControlsNative);
export const CupertinoTextSelectionControls: typeof _CupertinoTextSelectionControlsBinding & _FlaxInstanceType<CupertinoTextSelectionControls> & _FlaxDartType<CupertinoTextSelectionControls, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoTextSelectionControls", readonly [], false]> = _flaxBindInstanceType<CupertinoTextSelectionControls, typeof _CupertinoTextSelectionControlsBinding>(_CupertinoTextSelectionControlsBinding, "flax.core/sdk_cupertino#type:CupertinoTextSelectionControls", ["flax.core/sdk_widgets#type:TextSelectionControls"]) as typeof _CupertinoTextSelectionControlsBinding & _FlaxInstanceType<CupertinoTextSelectionControls> & _FlaxDartType<CupertinoTextSelectionControls, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoTextSelectionControls", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "buildHandle" | "getHandleAnchor" | "buildToolbar" | "getHandleSize" | "canCut" | "canCopy" | "canPaste" | "canSelectAll" | "handleCut" | "handleCopy" | "handlePaste" | "handleSelectAll" | "__flaxBound:package:flutter/src/cupertino/text_selection.dart::CupertinoTextSelectionControls" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls";
