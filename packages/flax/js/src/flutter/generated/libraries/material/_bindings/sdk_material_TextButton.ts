// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_ButtonStyleButton';
import '@flax/flutter/material/_bindings/sdk_material_ButtonStyleButton';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_IconAlignment';
import '@flax/flutter/material/_bindings/sdk_material_IconAlignment';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream9 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream13 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream14 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream15 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream16 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream17 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream18 from '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeatureFactory';
import '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeatureFactory';
import type * as upstream19 from '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
import '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
import type * as upstream20 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream21 from '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import type * as upstream22 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream23 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream24 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream25 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream26 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream27 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextButton extends _FlaxDartWidget, Omit<upstream0.ButtonStyleButton, _flaxOwnMembers0>, Omit<upstream1.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.ButtonStyleButton>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ButtonStyleButton | keyof upstream1.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/text_button.dart::TextButton": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/button_style_button.dart::ButtonStyleButton": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextButton: unique symbol;
readonly [_flaxDartTypeValue]: TextButton;

readonly onPressed: (() => void) | null;
readonly onLongPress: (() => void) | null;
readonly onHover: ((value: boolean) => void) | null;
readonly onFocusChange: ((value: boolean) => void) | null;
readonly style: upstream3.ButtonStyle | null;
readonly clipBehavior: upstream5.Clip | null;
readonly focusNode: upstream4.FocusNode | null;
readonly autofocus: boolean;
readonly statesController: upstream6.WidgetStatesController | null;
readonly isSemanticButton: boolean | null;
readonly iconAlignment: upstream7.IconAlignment | null;
readonly tooltip: string | null;
readonly child: Widget | null;
readonly enabled: boolean;
readonly key: upstream2.Key | null;
defaultStyleOf(context: upstream10.BuildContext): upstream3.ButtonStyle;
themeStyleOf(context: upstream10.BuildContext): upstream3.ButtonStyle | null;
createState(): upstream22.State<upstream0.ButtonStyleButton>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream24.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream25.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream25.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream27.DiagnosticsTreeStyle | null | undefined}): upstream26.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream26.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:TextButton", ["onPressed","onLongPress","onHover","onFocusChange","style","clipBehavior","focusNode","autofocus","statesController","isSemanticButton","iconAlignment","tooltip","child","enabled","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:TextButton", "object", {}, {}), [], undefined, "flax.core/sdk_material#type:ButtonStyleButton");
export function _TextButtonFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; onPressed: (() => void) | null; onLongPress?: (() => void) | null | undefined; onHover?: ((value: boolean) => void) | null | undefined; onFocusChange?: ((value: boolean) => void) | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; focusNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; autofocus?: boolean | undefined; clipBehavior?: upstream5.Clip | null | undefined; statesController?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream11.WidgetState>] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream11.WidgetState>] }> | null | undefined; isSemanticButton?: boolean | null | undefined; child: Widget }): TextButton {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:TextButton", "", [{"name":"key"},{"name":"onPressed","required":true},{"name":"onLongPress"},{"name":"onHover"},{"name":"onFocusChange"},{"name":"style"},{"name":"focusNode"},{"name":"autofocus"},{"name":"clipBehavior"},{"name":"statesController"},{"name":"isSemanticButton"},{"name":"child","required":true}], [], options) as TextButton;
}
export namespace _TextButtonFactory {
export function icon(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; onPressed: (() => void) | null; onLongPress?: (() => void) | null | undefined; onHover?: ((value: boolean) => void) | null | undefined; onFocusChange?: ((value: boolean) => void) | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; focusNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; autofocus?: boolean | undefined; clipBehavior?: upstream5.Clip | null | undefined; statesController?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream11.WidgetState>] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream11.WidgetState>] }> | null | undefined; icon?: Widget | null | undefined; label: Widget; iconAlignment?: upstream7.IconAlignment | null | undefined }): TextButton {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:TextButton", "icon", [{"name":"key"},{"name":"onPressed","required":true},{"name":"onLongPress"},{"name":"onHover"},{"name":"onFocusChange"},{"name":"style"},{"name":"focusNode"},{"name":"autofocus"},{"name":"clipBehavior"},{"name":"statesController"},{"name":"icon"},{"name":"label","required":true},{"name":"iconAlignment"}], [], options) as TextButton;
}
}
export namespace _TextButtonFactory { export function styleFrom(options: { alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined; animationDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream9.Duration] }> | null | undefined; backgroundBuilder?: ((context: upstream10.BuildContext, states: DartSet<upstream11.WidgetState>, child: Widget | null) => Widget) | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledForegroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledIconColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledMouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; elevation?: number | null | undefined; enableFeedback?: boolean | null | undefined; enabledMouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; fixedSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; foregroundBuilder?: ((context: upstream10.BuildContext, states: DartSet<upstream11.WidgetState>, child: Widget | null) => Widget) | null | undefined; foregroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; iconAlignment?: upstream7.IconAlignment | null | undefined; iconColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; iconSize?: number | null | undefined; maximumSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; minimumSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; splashFactory?: Readonly<{ "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeatureFactory": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; tapTargetSize?: upstream19.MaterialTapTargetSize | null | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined } = {}): upstream3.ButtonStyle {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["alignment","animationDuration","backgroundBuilder","backgroundColor","disabledBackgroundColor","disabledForegroundColor","disabledIconColor","disabledMouseCursor","elevation","enableFeedback","enabledMouseCursor","fixedSize","foregroundBuilder","foregroundColor","iconAlignment","iconColor","iconSize","maximumSize","minimumSize","overlayColor","padding","shadowColor","shape","side","splashFactory","surfaceTintColor","tapTargetSize","textStyle","visualDensity"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:TextButton.styleFrom", [options.alignment, options.animationDuration, options.backgroundBuilder, options.backgroundColor, options.disabledBackgroundColor, options.disabledForegroundColor, options.disabledIconColor, options.disabledMouseCursor, options.elevation, options.enableFeedback, options.enabledMouseCursor, options.fixedSize, options.foregroundBuilder, options.foregroundColor, options.iconAlignment, options.iconColor, options.iconSize, options.maximumSize, options.minimumSize, options.overlayColor, options.padding, options.shadowColor, options.shape, options.side, options.splashFactory, options.surfaceTintColor, options.tapTargetSize, options.textStyle, options.visualDensity]);
return _flaxResult as upstream3.ButtonStyle;
} }
export const TextButton: typeof _TextButtonFactory & _FlaxInstanceType<TextButton> & _FlaxDartType<TextButton, readonly ["class", "flax.core/sdk_material#type:TextButton", readonly [], false]> = _flaxBindInstanceType<TextButton, typeof _TextButtonFactory>(_TextButtonFactory, "flax.core/sdk_material#type:TextButton", ["flax.core/sdk_material#type:ButtonStyleButton","flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TextButtonFactory & _FlaxInstanceType<TextButton> & _FlaxDartType<TextButton, readonly ["class", "flax.core/sdk_material#type:TextButton", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "onPressed" | "onLongPress" | "onHover" | "onFocusChange" | "style" | "clipBehavior" | "focusNode" | "autofocus" | "statesController" | "isSemanticButton" | "iconAlignment" | "tooltip" | "child" | "enabled" | "key" | "defaultStyleOf" | "themeStyleOf" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/text_button.dart::TextButton" | "__flaxBound:package:flutter/src/material/button_style_button.dart::ButtonStyleButton" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
