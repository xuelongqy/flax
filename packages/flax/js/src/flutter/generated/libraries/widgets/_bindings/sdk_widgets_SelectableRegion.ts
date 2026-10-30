// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextMagnifierConfiguration';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextMagnifierConfiguration';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters420, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectableRegion extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegion": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SelectableRegion: unique symbol;
readonly [_flaxDartTypeValue]: SelectableRegion;

readonly magnifierConfiguration: upstream5.TextMagnifierConfiguration;
readonly focusNode: upstream4.FocusNode | null;
readonly child: Widget;
readonly contextMenuBuilder: ((context: upstream2.BuildContext, selectableRegionState: Readonly<{ "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegionState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [SelectableRegion] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [] }>) => Widget) | null;
readonly selectionControls: upstream7.TextSelectionControls;
readonly onSelectionChanged: ((value: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null) => void) | null;
readonly key: upstream1.Key | null;
createState(): upstream10.State<upstream0.StatefulWidget>;
createElement(): upstream11.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream13.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream13.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream15.DiagnosticsTreeStyle | null | undefined}): upstream14.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:SelectableRegion", ["magnifierConfiguration","focusNode","child","contextMenuBuilder","selectionControls","onSelectionChanged","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SelectableRegion", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _SelectableRegionFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; contextMenuBuilder?: ((context: upstream2.BuildContext, selectableRegionState: upstream3.SelectableRegionState) => Widget) | null | undefined; focusNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; magnifierConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [] }> | undefined; onSelectionChanged?: ((value: upstream6.SelectedContent | null) => void) | null | undefined; selectionControls: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [] }>; child: Widget }): SelectableRegion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SelectableRegion", "", [{"name":"key"},{"name":"contextMenuBuilder"},{"name":"focusNode"},{"name":"magnifierConfiguration"},{"name":"onSelectionChanged"},{"name":"selectionControls","required":true},{"name":"child","required":true}], [], options) as SelectableRegion;
}
export declare namespace _SelectableRegionFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _SelectableRegionFactory>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof _SelectableRegionFactory>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof _SelectableRegionFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export namespace _SelectableRegionFactory { export function getSelectableButtonItems(options: { onCopy: (() => void); onSelectAll: (() => void); onShare: (() => void) | null; selectionGeometry: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> }): DartList<upstream8.ContextMenuButtonItem> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["onCopy","onSelectAll","onShare","selectionGeometry"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:SelectableRegion.getSelectableButtonItems", [options.onCopy, options.onSelectAll, options.onShare, options.selectionGeometry], _flaxMemberParameters420);
return _flaxResult as DartList<upstream8.ContextMenuButtonItem>;
} }
export const SelectableRegion: typeof _SelectableRegionFactory & _FlaxInstanceType<SelectableRegion> & _FlaxDartType<SelectableRegion, readonly ["class", "flax.core/sdk_widgets#type:SelectableRegion", readonly [], false]> = _flaxBindInstanceType<SelectableRegion, typeof _SelectableRegionFactory>(_SelectableRegionFactory, "flax.core/sdk_widgets#type:SelectableRegion", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SelectableRegionFactory & _FlaxInstanceType<SelectableRegion> & _FlaxDartType<SelectableRegion, readonly ["class", "flax.core/sdk_widgets#type:SelectableRegion", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "magnifierConfiguration" | "focusNode" | "child" | "contextMenuBuilder" | "selectionControls" | "onSelectionChanged" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegion" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
