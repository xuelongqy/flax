// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
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
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
import { _flaxMemberParameters1 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoAdaptiveTextSelectionToolbar extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:cupertino_ui/src/adaptive_text_selection_toolbar.dart::CupertinoAdaptiveTextSelectionToolbar": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoAdaptiveTextSelectionToolbar: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoAdaptiveTextSelectionToolbar;

readonly anchors: upstream2.TextSelectionToolbarAnchors;
readonly children: DartList<Widget> | null;
readonly buttonItems: DartList<upstream3.ContextMenuButtonItem> | null;
readonly key: upstream1.Key | null;
build(context: upstream7.BuildContext): Widget;
createElement(): upstream8.StatelessElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream10.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream12.DiagnosticsTreeStyle | null | undefined}): upstream11.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
defineObject("flax.cupertino/cupertino#type:CupertinoAdaptiveTextSelectionToolbar", ["anchors","children","buttonItems","key"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoAdaptiveTextSelectionToolbar", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:StatelessWidget");
export function _CupertinoAdaptiveTextSelectionToolbarFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; children: DartListInput<Widget, Widget> | null; anchors: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [] }> }): CupertinoAdaptiveTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoAdaptiveTextSelectionToolbar", "", [{"name":"key"},{"name":"children","required":true},{"name":"anchors","required":true}], [], options) as CupertinoAdaptiveTextSelectionToolbar;
}
export namespace _CupertinoAdaptiveTextSelectionToolbarFactory {
export function buttonItems(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; buttonItems: DartListInput<upstream3.ContextMenuButtonItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [] }>> | null; anchors: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [] }> }): CupertinoAdaptiveTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoAdaptiveTextSelectionToolbar", "buttonItems", [{"name":"key"},{"name":"buttonItems","required":true},{"name":"anchors","required":true}], [], options) as CupertinoAdaptiveTextSelectionToolbar;
}
}
export namespace _CupertinoAdaptiveTextSelectionToolbarFactory {
export function editable(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; clipboardStatus: upstream4.ClipboardStatus; onCopy: (() => void) | null; onCut: (() => void) | null; onPaste: (() => void) | null; onSelectAll: (() => void) | null; onLookUp: (() => void) | null; onSearchWeb: (() => void) | null; onShare: (() => void) | null; onLiveTextInput: (() => void) | null; anchors: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [] }> }): CupertinoAdaptiveTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoAdaptiveTextSelectionToolbar", "editable", [{"name":"key"},{"name":"clipboardStatus","required":true},{"name":"onCopy","required":true},{"name":"onCut","required":true},{"name":"onPaste","required":true},{"name":"onSelectAll","required":true},{"name":"onLookUp","required":true},{"name":"onSearchWeb","required":true},{"name":"onShare","required":true},{"name":"onLiveTextInput","required":true},{"name":"anchors","required":true}], [], options) as CupertinoAdaptiveTextSelectionToolbar;
}
}
export namespace _CupertinoAdaptiveTextSelectionToolbarFactory {
export function editableText(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; editableTextState: Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream13.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }> }): CupertinoAdaptiveTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoAdaptiveTextSelectionToolbar", "editableText", [{"name":"key"},{"name":"editableTextState","required":true}], [], options) as CupertinoAdaptiveTextSelectionToolbar;
}
}
export namespace _CupertinoAdaptiveTextSelectionToolbarFactory {
export function selectable(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; onCopy: (() => void); onSelectAll: (() => void); selectionGeometry: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; anchors: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [] }> }): CupertinoAdaptiveTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoAdaptiveTextSelectionToolbar", "selectable", [{"name":"key"},{"name":"onCopy","required":true},{"name":"onSelectAll","required":true},{"name":"selectionGeometry","required":true},{"name":"anchors","required":true}], [], options) as CupertinoAdaptiveTextSelectionToolbar;
}
}
export namespace _CupertinoAdaptiveTextSelectionToolbarFactory { export function getAdaptiveButtons(context: upstream7.BuildContext, buttonItems: DartListInput<upstream3.ContextMenuButtonItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [] }>>): DartIterable<Widget> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.cupertino/cupertino#function:CupertinoAdaptiveTextSelectionToolbar.getAdaptiveButtons", [contextHandle(context, "flax.core/flutter#type:BuildContext"), buttonItems], _flaxMemberParameters1);
return _flaxResult as DartIterable<Widget>;
} }
export const CupertinoAdaptiveTextSelectionToolbar: typeof _CupertinoAdaptiveTextSelectionToolbarFactory & _FlaxInstanceType<CupertinoAdaptiveTextSelectionToolbar> & _FlaxDartType<CupertinoAdaptiveTextSelectionToolbar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoAdaptiveTextSelectionToolbar", readonly [], false]> = _flaxBindInstanceType<CupertinoAdaptiveTextSelectionToolbar, typeof _CupertinoAdaptiveTextSelectionToolbarFactory>(_CupertinoAdaptiveTextSelectionToolbarFactory, "flax.cupertino/cupertino#type:CupertinoAdaptiveTextSelectionToolbar", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoAdaptiveTextSelectionToolbarFactory & _FlaxInstanceType<CupertinoAdaptiveTextSelectionToolbar> & _FlaxDartType<CupertinoAdaptiveTextSelectionToolbar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoAdaptiveTextSelectionToolbar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "anchors" | "children" | "buttonItems" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/adaptive_text_selection_toolbar.dart::CupertinoAdaptiveTextSelectionToolbar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
