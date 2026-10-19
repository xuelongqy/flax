// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_ProgressIndicator';
import '@flax/flutter/material/_bindings/sdk_material_ProgressIndicator';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_StrokeCap';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StrokeCap';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream9 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CircularProgressIndicator extends _FlaxDartWidget, Omit<upstream0.ProgressIndicator, _flaxOwnMembers0>, Omit<upstream1.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.ProgressIndicator>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ProgressIndicator | keyof upstream1.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/progress_indicator.dart::CircularProgressIndicator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/progress_indicator.dart::ProgressIndicator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CircularProgressIndicator: unique symbol;
readonly [_flaxDartTypeValue]: CircularProgressIndicator;

readonly backgroundColor: upstream3.Color | null;
readonly strokeWidth: number | null;
readonly strokeAlign: number | null;
readonly strokeCap: upstream5.StrokeCap | null;
readonly constraints: upstream6.BoxConstraints | null;
readonly trackGap: number | null;
readonly year2023: boolean | null;
readonly padding: upstream7.EdgeInsetsGeometry | null;
readonly controller: upstream8.AnimationController | null;
readonly value: number | null;
readonly color: upstream3.Color | null;
readonly valueColor: upstream4.Animation<upstream3.Color | null> | null;
readonly semanticsLabel: string | null;
readonly semanticsValue: string | null;
readonly key: upstream2.Key | null;
createState(): upstream10.State<CircularProgressIndicator>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream12.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream13.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream13.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream15.DiagnosticsTreeStyle | null | undefined}): upstream14.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:CircularProgressIndicator", ["backgroundColor","strokeWidth","strokeAlign","strokeCap","constraints","trackGap","year2023","padding","controller","value","color","valueColor","semanticsLabel","semanticsValue","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:CircularProgressIndicator", "object", {"createState":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_material#type:ProgressIndicator");
export function _CircularProgressIndicatorFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; value?: number | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; valueColor?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [upstream3.Color | null] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.Color | null] }> | null | undefined; strokeWidth?: number | null | undefined; strokeAlign?: number | null | undefined; semanticsLabel?: string | null | undefined; semanticsValue?: string | null | undefined; strokeCap?: upstream5.StrokeCap | null | undefined; constraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined; trackGap?: number | null | undefined; year2023?: boolean | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [] }> | null | undefined } = {}): CircularProgressIndicator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:CircularProgressIndicator", "", [{"name":"key"},{"name":"value"},{"name":"backgroundColor"},{"name":"color"},{"name":"valueColor"},{"name":"strokeWidth"},{"name":"strokeAlign"},{"name":"semanticsLabel"},{"name":"semanticsValue"},{"name":"strokeCap"},{"name":"constraints"},{"name":"trackGap"},{"name":"year2023"},{"name":"padding"},{"name":"controller"}], [], options) as CircularProgressIndicator;
}
export namespace _CircularProgressIndicatorFactory {
export function adaptive(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; value?: number | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; valueColor?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [upstream3.Color | null] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.Color | null] }> | null | undefined; strokeWidth?: number | null | undefined; semanticsLabel?: string | null | undefined; semanticsValue?: string | null | undefined; strokeCap?: upstream5.StrokeCap | null | undefined; strokeAlign?: number | null | undefined; constraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined; trackGap?: number | null | undefined; year2023?: boolean | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [] }> | null | undefined } = {}): CircularProgressIndicator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:CircularProgressIndicator", "adaptive", [{"name":"key"},{"name":"value"},{"name":"backgroundColor"},{"name":"valueColor"},{"name":"strokeWidth"},{"name":"semanticsLabel"},{"name":"semanticsValue"},{"name":"strokeCap"},{"name":"strokeAlign"},{"name":"constraints"},{"name":"trackGap"},{"name":"year2023"},{"name":"padding"},{"name":"controller"}], [], options) as CircularProgressIndicator;
}
}
export namespace _CircularProgressIndicatorFactory { export declare const strokeAlignInside: number; }
export namespace _CircularProgressIndicatorFactory { export declare const strokeAlignCenter: number; }
export namespace _CircularProgressIndicatorFactory { export declare const strokeAlignOutside: number; }
export namespace _CircularProgressIndicatorFactory { export declare const defaultAnimationDuration: upstream9.Duration; }
_flaxDefineStaticGetters(_CircularProgressIndicatorFactory, "flax.core/sdk_material#read:CircularProgressIndicator.", ["strokeAlignInside","strokeAlignCenter","strokeAlignOutside","defaultAnimationDuration"]);
export const CircularProgressIndicator: typeof _CircularProgressIndicatorFactory & _FlaxInstanceType<CircularProgressIndicator> & _FlaxDartType<CircularProgressIndicator, readonly ["class", "flax.core/sdk_material#type:CircularProgressIndicator", readonly [], false]> = _flaxBindInstanceType<CircularProgressIndicator, typeof _CircularProgressIndicatorFactory>(_CircularProgressIndicatorFactory, "flax.core/sdk_material#type:CircularProgressIndicator", ["flax.core/sdk_material#type:ProgressIndicator","flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CircularProgressIndicatorFactory & _FlaxInstanceType<CircularProgressIndicator> & _FlaxDartType<CircularProgressIndicator, readonly ["class", "flax.core/sdk_material#type:CircularProgressIndicator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "backgroundColor" | "strokeWidth" | "strokeAlign" | "strokeCap" | "constraints" | "trackGap" | "year2023" | "padding" | "controller" | "value" | "color" | "valueColor" | "semanticsLabel" | "semanticsValue" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/progress_indicator.dart::CircularProgressIndicator" | "__flaxBound:package:flutter/src/material/progress_indicator.dart::ProgressIndicator" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
