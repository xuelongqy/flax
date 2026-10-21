// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream6 from '@flax/material-ui/_bindings/material_SliderInteraction';
import '@flax/material-ui/_bindings/material_SliderInteraction';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/material-ui/_bindings/material_ShowValueIndicator';
import '@flax/material-ui/_bindings/material_ShowValueIndicator';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters4 } from "@flax/material-ui/_bindings/material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Slider extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:material_ui/src/slider.dart::Slider": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Slider: unique symbol;
readonly [_flaxDartTypeValue]: Slider;

readonly value: number;
readonly secondaryTrackValue: number | null;
readonly onChanged: ((value: number) => void) | null;
readonly onChangeStart: ((value: number) => void) | null;
readonly onChangeEnd: ((value: number) => void) | null;
readonly min: number;
readonly max: number;
readonly divisions: number | null;
readonly label: string | null;
readonly activeColor: upstream2.Color | null;
readonly inactiveColor: upstream2.Color | null;
readonly secondaryActiveColor: upstream2.Color | null;
readonly thumbColor: upstream2.Color | null;
readonly overlayColor: upstream3.WidgetStateProperty<upstream2.Color | null> | null;
readonly mouseCursor: upstream4.MouseCursor | null;
readonly semanticFormatterCallback: ((value: number) => string) | null;
readonly focusNode: upstream5.FocusNode | null;
readonly autofocus: boolean;
readonly allowedInteraction: upstream6.SliderInteraction | null;
readonly padding: upstream7.EdgeInsetsGeometry | null;
readonly showValueIndicator: upstream8.ShowValueIndicator | null;
readonly year2023: boolean | null;
readonly key: upstream1.Key | null;
createState(): upstream9.State<Slider>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream11.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream12.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream12.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream14.DiagnosticsTreeStyle | null | undefined}): upstream13.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream13.DiagnosticsNode>;
}
defineObject("flax.material/material#type:Slider", ["value","secondaryTrackValue","onChanged","onChangeStart","onChangeEnd","min","max","divisions","label","activeColor","inactiveColor","secondaryActiveColor","thumbColor","overlayColor","mouseCursor","semanticFormatterCallback","focusNode","autofocus","allowedInteraction","padding","showValueIndicator","year2023","key"], [], _flaxBindingMethods("flax.material/material#type:Slider", "object", {"createState":_flaxMemberParameters4,"createElement":_flaxMemberParameters4}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _SliderFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; value: number; secondaryTrackValue?: number | null | undefined; onChanged: ((value: number) => void) | null; onChangeStart?: ((value: number) => void) | null | undefined; onChangeEnd?: ((value: number) => void) | null | undefined; min?: number | undefined; max?: number | undefined; divisions?: number | null | undefined; label?: string | null | undefined; activeColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; inactiveColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; secondaryActiveColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; thumbColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; semanticFormatterCallback?: ((value: number) => string) | null | undefined; focusNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; autofocus?: boolean | undefined; allowedInteraction?: upstream6.SliderInteraction | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; showValueIndicator?: upstream8.ShowValueIndicator | null | undefined; year2023?: boolean | null | undefined }): Slider {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:Slider", "", [{"name":"key"},{"name":"value","required":true},{"name":"secondaryTrackValue"},{"name":"onChanged","required":true},{"name":"onChangeStart"},{"name":"onChangeEnd"},{"name":"min"},{"name":"max"},{"name":"divisions"},{"name":"label"},{"name":"activeColor"},{"name":"inactiveColor"},{"name":"secondaryActiveColor"},{"name":"thumbColor"},{"name":"overlayColor"},{"name":"mouseCursor"},{"name":"semanticFormatterCallback"},{"name":"focusNode"},{"name":"autofocus"},{"name":"allowedInteraction"},{"name":"padding"},{"name":"showValueIndicator"},{"name":"year2023"}], [], options) as Slider;
}
export namespace _SliderFactory {
export function adaptive(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; value: number; secondaryTrackValue?: number | null | undefined; onChanged: ((value: number) => void) | null; onChangeStart?: ((value: number) => void) | null | undefined; onChangeEnd?: ((value: number) => void) | null | undefined; min?: number | undefined; max?: number | undefined; divisions?: number | null | undefined; label?: string | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; activeColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; inactiveColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; secondaryActiveColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; thumbColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null] }> | null | undefined; semanticFormatterCallback?: ((value: number) => string) | null | undefined; focusNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; autofocus?: boolean | undefined; allowedInteraction?: upstream6.SliderInteraction | null | undefined; showValueIndicator?: upstream8.ShowValueIndicator | null | undefined; year2023?: boolean | null | undefined }): Slider {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:Slider", "adaptive", [{"name":"key"},{"name":"value","required":true},{"name":"secondaryTrackValue"},{"name":"onChanged","required":true},{"name":"onChangeStart"},{"name":"onChangeEnd"},{"name":"min"},{"name":"max"},{"name":"divisions"},{"name":"label"},{"name":"mouseCursor"},{"name":"activeColor"},{"name":"inactiveColor"},{"name":"secondaryActiveColor"},{"name":"thumbColor"},{"name":"overlayColor"},{"name":"semanticFormatterCallback"},{"name":"focusNode"},{"name":"autofocus"},{"name":"allowedInteraction"},{"name":"showValueIndicator"},{"name":"year2023"}], [], options) as Slider;
}
}
export const Slider: typeof _SliderFactory & _FlaxInstanceType<Slider> & _FlaxDartType<Slider, readonly ["class", "flax.material/material#type:Slider", readonly [], false]> = _flaxBindInstanceType<Slider, typeof _SliderFactory>(_SliderFactory, "flax.material/material#type:Slider", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SliderFactory & _FlaxInstanceType<Slider> & _FlaxDartType<Slider, readonly ["class", "flax.material/material#type:Slider", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "value" | "secondaryTrackValue" | "onChanged" | "onChangeStart" | "onChangeEnd" | "min" | "max" | "divisions" | "label" | "activeColor" | "inactiveColor" | "secondaryActiveColor" | "thumbColor" | "overlayColor" | "mouseCursor" | "semanticFormatterCallback" | "focusNode" | "autofocus" | "allowedInteraction" | "padding" | "showValueIndicator" | "year2023" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/slider.dart::Slider" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
