// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream10 from '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/material-ui/_bindings/material_VisualDensity';
import type * as upstream11 from '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream14 from '@flax/material-ui/_bindings/material_ChipAnimationStyle';
import '@flax/material-ui/_bindings/material_ChipAnimationStyle';
import type * as upstream15 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ActionChip extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:material_ui/src/action_chip.dart::ActionChip": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/chip.dart::ChipAttributes": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/chip.dart::TappableChipAttributes": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/chip.dart::DisabledChipAttributes": readonly [] }> { readonly __ActionChip: unique symbol;
readonly [_flaxDartTypeValue]: ActionChip;

readonly avatar: Widget | null;
readonly label: Widget;
readonly labelStyle: upstream2.TextStyle | null;
readonly labelPadding: upstream3.EdgeInsetsGeometry | null;
readonly onPressed: (() => void) | null;
readonly pressElevation: number | null;
readonly tooltip: string | null;
readonly side: upstream4.BorderSide | null;
readonly shape: upstream5.OutlinedBorder | null;
readonly clipBehavior: upstream6.Clip;
readonly focusNode: upstream7.FocusNode | null;
readonly autofocus: boolean;
readonly color: upstream8.WidgetStateProperty<upstream9.Color | null> | null;
readonly backgroundColor: upstream9.Color | null;
readonly disabledColor: upstream9.Color | null;
readonly padding: upstream3.EdgeInsetsGeometry | null;
readonly visualDensity: upstream10.VisualDensity | null;
readonly materialTapTargetSize: upstream11.MaterialTapTargetSize | null;
readonly elevation: number | null;
readonly shadowColor: upstream9.Color | null;
readonly surfaceTintColor: upstream9.Color | null;
readonly iconTheme: upstream12.IconThemeData | null;
readonly avatarBoxConstraints: upstream13.BoxConstraints | null;
readonly chipAnimationStyle: upstream14.ChipAnimationStyle | null;
readonly mouseCursor: upstream15.MouseCursor | null;
readonly isEnabled: boolean;
readonly key: upstream1.Key | null;
build(context: upstream16.BuildContext): Widget;
createElement(): upstream17.StatelessElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream19.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream19.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream21.DiagnosticsTreeStyle | null | undefined}): upstream20.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream20.DiagnosticsNode>;
}
defineObject("flax.material/material#type:ActionChip", ["avatar","label","labelStyle","labelPadding","onPressed","pressElevation","tooltip","side","shape","clipBehavior","focusNode","autofocus","color","backgroundColor","disabledColor","padding","visualDensity","materialTapTargetSize","elevation","shadowColor","surfaceTintColor","iconTheme","avatarBoxConstraints","chipAnimationStyle","mouseCursor","isEnabled","key"], [], _flaxBindingMethods("flax.material/material#type:ActionChip", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:StatelessWidget");
export function _ActionChipFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; avatar?: Widget | null | undefined; label: Widget; labelStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; labelPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; onPressed?: (() => void) | null | undefined; pressElevation?: number | null | undefined; tooltip?: string | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; clipBehavior?: upstream6.Clip | undefined; focusNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; autofocus?: boolean | undefined; color?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream9.Color | null] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; materialTapTargetSize?: upstream11.MaterialTapTargetSize | null | undefined; elevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; iconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; avatarBoxConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined; chipAnimationStyle?: Readonly<{ "__flaxBound:package:material_ui/src/chip.dart::ChipAnimationStyle": readonly [] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined }): ActionChip {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ActionChip", "", [{"name":"key"},{"name":"avatar"},{"name":"label","required":true},{"name":"labelStyle"},{"name":"labelPadding"},{"name":"onPressed"},{"name":"pressElevation"},{"name":"tooltip"},{"name":"side"},{"name":"shape"},{"name":"clipBehavior"},{"name":"focusNode"},{"name":"autofocus"},{"name":"color"},{"name":"backgroundColor"},{"name":"disabledColor"},{"name":"padding"},{"name":"visualDensity"},{"name":"materialTapTargetSize"},{"name":"elevation"},{"name":"shadowColor"},{"name":"surfaceTintColor"},{"name":"iconTheme"},{"name":"avatarBoxConstraints"},{"name":"chipAnimationStyle"},{"name":"mouseCursor"}], [], options) as ActionChip;
}
export namespace _ActionChipFactory {
export function elevated(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; avatar?: Widget | null | undefined; label: Widget; labelStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; labelPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; onPressed?: (() => void) | null | undefined; pressElevation?: number | null | undefined; tooltip?: string | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; clipBehavior?: upstream6.Clip | undefined; focusNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; autofocus?: boolean | undefined; color?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream9.Color | null] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; materialTapTargetSize?: upstream11.MaterialTapTargetSize | null | undefined; elevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; iconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; avatarBoxConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined; chipAnimationStyle?: Readonly<{ "__flaxBound:package:material_ui/src/chip.dart::ChipAnimationStyle": readonly [] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined }): ActionChip {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ActionChip", "elevated", [{"name":"key"},{"name":"avatar"},{"name":"label","required":true},{"name":"labelStyle"},{"name":"labelPadding"},{"name":"onPressed"},{"name":"pressElevation"},{"name":"tooltip"},{"name":"side"},{"name":"shape"},{"name":"clipBehavior"},{"name":"focusNode"},{"name":"autofocus"},{"name":"color"},{"name":"backgroundColor"},{"name":"disabledColor"},{"name":"padding"},{"name":"visualDensity"},{"name":"materialTapTargetSize"},{"name":"elevation"},{"name":"shadowColor"},{"name":"surfaceTintColor"},{"name":"iconTheme"},{"name":"avatarBoxConstraints"},{"name":"chipAnimationStyle"},{"name":"mouseCursor"}], [], options) as ActionChip;
}
}
export const ActionChip: typeof _ActionChipFactory & _FlaxInstanceType<ActionChip> & _FlaxDartType<ActionChip, readonly ["class", "flax.material/material#type:ActionChip", readonly [], false]> = _flaxBindInstanceType<ActionChip, typeof _ActionChipFactory>(_ActionChipFactory, "flax.material/material#type:ActionChip", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.material/material#type:ChipAttributes","flax.material/material#type:TappableChipAttributes","flax.material/material#type:DisabledChipAttributes"]) as typeof _ActionChipFactory & _FlaxInstanceType<ActionChip> & _FlaxDartType<ActionChip, readonly ["class", "flax.material/material#type:ActionChip", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "avatar" | "label" | "labelStyle" | "labelPadding" | "onPressed" | "pressElevation" | "tooltip" | "side" | "shape" | "clipBehavior" | "focusNode" | "autofocus" | "color" | "backgroundColor" | "disabledColor" | "padding" | "visualDensity" | "materialTapTargetSize" | "elevation" | "shadowColor" | "surfaceTintColor" | "iconTheme" | "avatarBoxConstraints" | "chipAnimationStyle" | "mouseCursor" | "isEnabled" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/action_chip.dart::ActionChip" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:material_ui/src/chip.dart::ChipAttributes" | "__flaxBound:package:material_ui/src/chip.dart::TappableChipAttributes" | "__flaxBound:package:material_ui/src/chip.dart::DisabledChipAttributes";
