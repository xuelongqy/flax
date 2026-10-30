// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionToolbarAnchors';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionToolbarAnchors';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
import { _flaxMemberParameters317, _flaxMemberParameters318 } from "@flax/material-ui/_bindings/material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SpellCheckSuggestionsToolbar extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:material_ui/src/spell_check_suggestions_toolbar.dart::SpellCheckSuggestionsToolbar": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SpellCheckSuggestionsToolbar: unique symbol;
readonly [_flaxDartTypeValue]: SpellCheckSuggestionsToolbar;

readonly anchor: upstream2.Offset;
readonly buttonItems: DartList<upstream3.ContextMenuButtonItem>;
readonly key: upstream1.Key | null;
build(context: upstream6.BuildContext): Widget;
createElement(): upstream7.StatelessElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream9.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
defineObject("flax.material/material#type:SpellCheckSuggestionsToolbar", ["anchor","buttonItems","key"], [], _flaxBindingMethods("flax.material/material#type:SpellCheckSuggestionsToolbar", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:StatelessWidget");
export function _SpellCheckSuggestionsToolbarFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; anchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; buttonItems: DartListInput<upstream3.ContextMenuButtonItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [] }>> }): SpellCheckSuggestionsToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:SpellCheckSuggestionsToolbar", "", [{"name":"key"},{"name":"anchor","required":true},{"name":"buttonItems","required":true}], [], options) as SpellCheckSuggestionsToolbar;
}
export declare namespace _SpellCheckSuggestionsToolbarFactory { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _SpellCheckSuggestionsToolbarFactory>[0]>); readonly slot: null; readonly many: false; }; }
export namespace _SpellCheckSuggestionsToolbarFactory {
export function editableText(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; editableTextState: Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream12.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream12.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream12.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }> }): SpellCheckSuggestionsToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:SpellCheckSuggestionsToolbar", "editableText", [{"name":"key"},{"name":"editableTextState","required":true}], [], options) as SpellCheckSuggestionsToolbar;
}
export declare namespace editableText { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof editableText>[0]>); readonly slot: null; readonly many: false; }; }
}
export namespace _SpellCheckSuggestionsToolbarFactory { export function buildButtonItems(editableTextState: Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream12.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream12.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream12.EditableText] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }>): DartList<upstream3.ContextMenuButtonItem> | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:SpellCheckSuggestionsToolbar.buildButtonItems", [editableTextState], _flaxMemberParameters317);
return _flaxResult as DartList<upstream3.ContextMenuButtonItem> | null;
} }
export namespace _SpellCheckSuggestionsToolbarFactory { export function getToolbarAnchor(anchors: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [] }>): upstream2.Offset {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:SpellCheckSuggestionsToolbar.getToolbarAnchor", [anchors], _flaxMemberParameters318);
return _flaxResult as upstream2.Offset;
} }
export const SpellCheckSuggestionsToolbar: typeof _SpellCheckSuggestionsToolbarFactory & _FlaxInstanceType<SpellCheckSuggestionsToolbar> & _FlaxDartType<SpellCheckSuggestionsToolbar, readonly ["class", "flax.material/material#type:SpellCheckSuggestionsToolbar", readonly [], false]> = _flaxBindInstanceType<SpellCheckSuggestionsToolbar, typeof _SpellCheckSuggestionsToolbarFactory>(_SpellCheckSuggestionsToolbarFactory, "flax.material/material#type:SpellCheckSuggestionsToolbar", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SpellCheckSuggestionsToolbarFactory & _FlaxInstanceType<SpellCheckSuggestionsToolbar> & _FlaxDartType<SpellCheckSuggestionsToolbar, readonly ["class", "flax.material/material#type:SpellCheckSuggestionsToolbar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "anchor" | "buttonItems" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/spell_check_suggestions_toolbar.dart::SpellCheckSuggestionsToolbar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
