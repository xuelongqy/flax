// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
import { _flaxMemberParameters0, _flaxMemberParameters454, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemContextMenu extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::SystemContextMenu": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SystemContextMenu: unique symbol;
readonly [_flaxDartTypeValue]: SystemContextMenu;

readonly anchor: upstream4.Rect;
readonly items: DartList<upstream3.IOSSystemContextMenuItem>;
readonly onSystemHide: (() => void) | null;
readonly key: upstream1.Key | null;
createState(): upstream6.State<SystemContextMenu>;
createElement(): upstream7.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream9.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:SystemContextMenu", ["anchor","items","onSystemHide","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SystemContextMenu", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export namespace _SystemContextMenuFactory {
export function editableText(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; editableTextState: Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }>; items?: DartListInput<upstream3.IOSSystemContextMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [] }>> | null | undefined }): SystemContextMenu {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SystemContextMenu", "editableText", [{"name":"key"},{"name":"editableTextState","required":true},{"name":"items"}], [], options) as SystemContextMenu;
}
export declare namespace editableText { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof editableText>[0]>); readonly slot: null; readonly many: false; }; }
}
export namespace _SystemContextMenuFactory { export function isSupported(context: upstream5.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:SystemContextMenu.isSupported", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as boolean;
} }
export namespace _SystemContextMenuFactory { export function isSupportedByField(editableTextState: Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }>): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:SystemContextMenu.isSupportedByField", [editableTextState], _flaxMemberParameters454);
return _flaxResult as boolean;
} }
export namespace _SystemContextMenuFactory { export function getDefaultItems(editableTextState: Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }>): DartList<upstream3.IOSSystemContextMenuItem> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:SystemContextMenu.getDefaultItems", [editableTextState], _flaxMemberParameters454);
return _flaxResult as DartList<upstream3.IOSSystemContextMenuItem>;
} }
export const SystemContextMenu: typeof _SystemContextMenuFactory & _FlaxInstanceType<SystemContextMenu> & _FlaxDartType<SystemContextMenu, readonly ["class", "flax.core/sdk_widgets#type:SystemContextMenu", readonly [], false]> = _flaxBindInstanceType<SystemContextMenu, typeof _SystemContextMenuFactory>(_SystemContextMenuFactory, "flax.core/sdk_widgets#type:SystemContextMenu", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SystemContextMenuFactory & _FlaxInstanceType<SystemContextMenu> & _FlaxDartType<SystemContextMenu, readonly ["class", "flax.core/sdk_widgets#type:SystemContextMenu", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "anchor" | "items" | "onSystemHide" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::SystemContextMenu" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
