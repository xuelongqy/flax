// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import type * as upstream4 from '@flax/material-ui/_bindings/material_ButtonStyle';
import '@flax/material-ui/_bindings/material_ButtonStyle';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
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
import type * as upstream13 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CheckboxMenuButton extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:material_ui/src/menu_anchor.dart::CheckboxMenuButton": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CheckboxMenuButton: unique symbol;
readonly [_flaxDartTypeValue]: CheckboxMenuButton;

readonly value: boolean | null;
readonly tristate: boolean;
readonly isError: boolean;
readonly onChanged: ((value: boolean | null) => void) | null;
readonly onHover: ((value: boolean) => void) | null;
readonly onFocusChange: ((value: boolean) => void) | null;
readonly focusNode: upstream2.FocusNode | null;
readonly shortcut: upstream3.MenuSerializableShortcut | null;
readonly style: upstream4.ButtonStyle | null;
readonly statesController: upstream5.WidgetStatesController | null;
readonly clipBehavior: upstream6.Clip;
readonly trailingIcon: Widget | null;
readonly closeOnActivate: boolean;
readonly child: Widget | null;
readonly enabled: boolean;
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
defineObject("flax.material/material#type:CheckboxMenuButton", ["value","tristate","isError","onChanged","onHover","onFocusChange","focusNode","shortcut","style","statesController","clipBehavior","trailingIcon","closeOnActivate","child","enabled","key"], [], _flaxBindingMethods("flax.material/material#type:CheckboxMenuButton", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:StatelessWidget");
export function _CheckboxMenuButtonFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; value: boolean | null; tristate?: boolean | undefined; isError?: boolean | undefined; onChanged: ((value: boolean | null) => void) | null; onHover?: ((value: boolean) => void) | null | undefined; onFocusChange?: ((value: boolean) => void) | null | undefined; focusNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; shortcut?: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }> | null | undefined; style?: Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; statesController?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream13.WidgetState>] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream13.WidgetState>] }> | null | undefined; clipBehavior?: upstream6.Clip | undefined; trailingIcon?: Widget | null | undefined; closeOnActivate?: boolean | undefined; child: Widget | null }): CheckboxMenuButton {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:CheckboxMenuButton", "", [{"name":"key"},{"name":"value","required":true},{"name":"tristate"},{"name":"isError"},{"name":"onChanged","required":true},{"name":"onHover"},{"name":"onFocusChange"},{"name":"focusNode"},{"name":"shortcut"},{"name":"style"},{"name":"statesController"},{"name":"clipBehavior"},{"name":"trailingIcon"},{"name":"closeOnActivate"},{"name":"child","required":true}], [], options) as CheckboxMenuButton;
}
export declare namespace _CheckboxMenuButtonFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CheckboxMenuButtonFactory>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof _CheckboxMenuButtonFactory>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof _CheckboxMenuButtonFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export const CheckboxMenuButton: typeof _CheckboxMenuButtonFactory & _FlaxInstanceType<CheckboxMenuButton> & _FlaxDartType<CheckboxMenuButton, readonly ["class", "flax.material/material#type:CheckboxMenuButton", readonly [], false]> = _flaxBindInstanceType<CheckboxMenuButton, typeof _CheckboxMenuButtonFactory>(_CheckboxMenuButtonFactory, "flax.material/material#type:CheckboxMenuButton", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CheckboxMenuButtonFactory & _FlaxInstanceType<CheckboxMenuButton> & _FlaxDartType<CheckboxMenuButton, readonly ["class", "flax.material/material#type:CheckboxMenuButton", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "value" | "tristate" | "isError" | "onChanged" | "onHover" | "onFocusChange" | "focusNode" | "shortcut" | "style" | "statesController" | "clipBehavior" | "trailingIcon" | "closeOnActivate" | "child" | "enabled" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/menu_anchor.dart::CheckboxMenuButton" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
