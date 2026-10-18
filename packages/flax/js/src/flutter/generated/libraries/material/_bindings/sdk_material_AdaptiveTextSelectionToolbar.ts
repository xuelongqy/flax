// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionToolbarAnchors';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionToolbarAnchors';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionState';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegion';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AdaptiveTextSelectionToolbar extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/adaptive_text_selection_toolbar.dart::AdaptiveTextSelectionToolbar": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __AdaptiveTextSelectionToolbar: unique symbol;
readonly [_flaxDartTypeValue]: AdaptiveTextSelectionToolbar;

readonly buttonItems: DartList<upstream3.ContextMenuButtonItem> | null;
readonly children: DartList<Widget> | null;
readonly anchors: upstream2.TextSelectionToolbarAnchors;
readonly key: upstream1.Key | null;
build(context: upstream8.BuildContext): Widget;
createElement(): upstream9.StatelessElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream11.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", ["buttonItems","children","anchors","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", "object", {"build":_flaxMemberParameters0,"createElement":_flaxMemberParameters1,"toStringShort":_flaxMemberParameters1,"debugFillProperties":_flaxMemberParameters2,"toStringShallow":_flaxMemberParameters3,"toStringDeep":_flaxMemberParameters4,"toDiagnosticsNode":_flaxMemberParameters5,"debugDescribeChildren":_flaxMemberParameters1}, {}), []);
export function _AdaptiveTextSelectionToolbarFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; children: DartListInput<Widget, Widget> | null; anchors: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [] }> }): AdaptiveTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", "", [{"name":"key","required":false,"positional":false},{"name":"children","required":true,"positional":false},{"name":"anchors","required":true,"positional":false}], [], options) as AdaptiveTextSelectionToolbar;
}
export namespace _AdaptiveTextSelectionToolbarFactory {
export function buttonItems(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; buttonItems: DartListInput<upstream3.ContextMenuButtonItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [] }>> | null; anchors: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [] }> }): AdaptiveTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", "buttonItems", [{"name":"key","required":false,"positional":false},{"name":"buttonItems","required":true,"positional":false},{"name":"anchors","required":true,"positional":false}], [], options) as AdaptiveTextSelectionToolbar;
}
}
export namespace _AdaptiveTextSelectionToolbarFactory {
export function editable(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; clipboardStatus: upstream4.ClipboardStatus; onCopy: (() => void) | null; onCut: (() => void) | null; onPaste: (() => void) | null; onSelectAll: (() => void) | null; onLookUp: (() => void) | null; onSearchWeb: (() => void) | null; onShare: (() => void) | null; onLiveTextInput: (() => void) | null; anchors: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [] }> }): AdaptiveTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", "editable", [{"name":"key","required":false,"positional":false},{"name":"clipboardStatus","required":true,"positional":false},{"name":"onCopy","required":true,"positional":false},{"name":"onCut","required":true,"positional":false},{"name":"onPaste","required":true,"positional":false},{"name":"onSelectAll","required":true,"positional":false},{"name":"onLookUp","required":true,"positional":false},{"name":"onSearchWeb","required":true,"positional":false},{"name":"onShare","required":true,"positional":false},{"name":"onLiveTextInput","required":true,"positional":false},{"name":"anchors","required":true,"positional":false}], [], options) as AdaptiveTextSelectionToolbar;
}
}
export namespace _AdaptiveTextSelectionToolbarFactory {
export function editableText(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; editableTextState: Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream14.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream14.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream14.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }> }): AdaptiveTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", "editableText", [{"name":"key","required":false,"positional":false},{"name":"editableTextState","required":true,"positional":false}], [], options) as AdaptiveTextSelectionToolbar;
}
}
export namespace _AdaptiveTextSelectionToolbarFactory {
export function selectable(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; onCopy: (() => void); onSelectAll: (() => void); onShare: (() => void) | null; selectionGeometry: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; anchors: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [] }> }): AdaptiveTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", "selectable", [{"name":"key","required":false,"positional":false},{"name":"onCopy","required":true,"positional":false},{"name":"onSelectAll","required":true,"positional":false},{"name":"onShare","required":true,"positional":false},{"name":"selectionGeometry","required":true,"positional":false},{"name":"anchors","required":true,"positional":false}], [], options) as AdaptiveTextSelectionToolbar;
}
}
export namespace _AdaptiveTextSelectionToolbarFactory {
export function selectableRegion(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; selectableRegionState: Readonly<{ "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegionState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream15.SelectableRegion] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }> }): AdaptiveTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", "selectableRegion", [{"name":"key","required":false,"positional":false},{"name":"selectableRegionState","required":true,"positional":false}], [], options) as AdaptiveTextSelectionToolbar;
}
}
export namespace _AdaptiveTextSelectionToolbarFactory { export function getButtonLabel(context: upstream8.BuildContext, buttonItem: Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [] }>): string {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:AdaptiveTextSelectionToolbar.getButtonLabel", [contextHandle(context, "flax.core/flutter#type:BuildContext"), buttonItem]);
return _flaxResult as string;
} }
export namespace _AdaptiveTextSelectionToolbarFactory { export function getAdaptiveButtons(context: upstream8.BuildContext, buttonItems: DartListInput<upstream3.ContextMenuButtonItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [] }>>): DartIterable<Widget> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:AdaptiveTextSelectionToolbar.getAdaptiveButtons", [contextHandle(context, "flax.core/flutter#type:BuildContext"), buttonItems]);
return _flaxResult as DartIterable<Widget>;
} }
export const AdaptiveTextSelectionToolbar: typeof _AdaptiveTextSelectionToolbarFactory & _FlaxInstanceType<AdaptiveTextSelectionToolbar> & _FlaxDartType<AdaptiveTextSelectionToolbar, readonly ["class", "flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", readonly [], false]> = _flaxBindInstanceType<AdaptiveTextSelectionToolbar, typeof _AdaptiveTextSelectionToolbarFactory>(_AdaptiveTextSelectionToolbarFactory, "flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _AdaptiveTextSelectionToolbarFactory & _FlaxInstanceType<AdaptiveTextSelectionToolbar> & _FlaxDartType<AdaptiveTextSelectionToolbar, readonly ["class", "flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "buttonItems" | "children" | "anchors" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/adaptive_text_selection_toolbar.dart::AdaptiveTextSelectionToolbar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
