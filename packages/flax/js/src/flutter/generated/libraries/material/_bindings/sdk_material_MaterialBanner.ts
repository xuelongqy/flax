// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverflowBarAlignment';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverflowBarAlignment';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream8 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters185, _flaxMemberParameters2 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialBanner extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/banner.dart::MaterialBanner": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MaterialBanner: unique symbol;
readonly [_flaxDartTypeValue]: MaterialBanner;

readonly content: Widget;
readonly contentTextStyle: upstream2.TextStyle | null;
readonly actions: DartList<Widget>;
readonly elevation: number | null;
readonly leading: Widget | null;
readonly minActionBarHeight: number;
readonly backgroundColor: upstream3.Color | null;
readonly surfaceTintColor: upstream3.Color | null;
readonly shadowColor: upstream3.Color | null;
readonly dividerColor: upstream3.Color | null;
readonly padding: upstream4.EdgeInsetsGeometry | null;
readonly margin: upstream4.EdgeInsetsGeometry | null;
readonly leadingPadding: upstream4.EdgeInsetsGeometry | null;
readonly forceActionsBelow: boolean;
readonly overflowAlignment: upstream5.OverflowBarAlignment;
readonly animation: upstream6.Animation<number> | null;
readonly onVisible: (() => void) | null;
readonly key: upstream1.Key | null;
withAnimation(newAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, options?: {fallbackKey?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined}): MaterialBanner;
createState(): upstream9.State<MaterialBanner>;
createElement(): upstream10.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream12.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream12.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream14.DiagnosticsTreeStyle | null | undefined}): upstream13.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream13.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:MaterialBanner", ["content","contentTextStyle","actions","elevation","leading","minActionBarHeight","backgroundColor","surfaceTintColor","shadowColor","dividerColor","padding","margin","leadingPadding","forceActionsBelow","overflowAlignment","animation","onVisible","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:MaterialBanner", "object", {"withAnimation":_flaxMemberParameters185,"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _MaterialBannerFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; content: Widget; contentTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; actions: DartListInput<Widget, Widget>; elevation?: number | null | undefined; leading?: Widget | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; margin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; leadingPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; forceActionsBelow?: boolean | undefined; overflowAlignment?: upstream5.OverflowBarAlignment | undefined; animation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null | undefined; onVisible?: (() => void) | null | undefined; minActionBarHeight?: number | undefined }): MaterialBanner {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:MaterialBanner", "", [{"name":"key"},{"name":"content","required":true},{"name":"contentTextStyle"},{"name":"actions","required":true},{"name":"elevation"},{"name":"leading"},{"name":"backgroundColor"},{"name":"surfaceTintColor"},{"name":"shadowColor"},{"name":"dividerColor"},{"name":"padding"},{"name":"margin"},{"name":"leadingPadding"},{"name":"forceActionsBelow"},{"name":"overflowAlignment"},{"name":"animation"},{"name":"onVisible"},{"name":"minActionBarHeight"}], [], options) as MaterialBanner;
}
export namespace _MaterialBannerFactory { export function createAnimationController(options: { vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> }): upstream7.AnimationController {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["vsync"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:MaterialBanner.createAnimationController", [options.vsync]);
return _flaxResult as upstream7.AnimationController;
} }
export const MaterialBanner: typeof _MaterialBannerFactory & _FlaxInstanceType<MaterialBanner> & _FlaxDartType<MaterialBanner, readonly ["class", "flax.core/sdk_material#type:MaterialBanner", readonly [], false]> = _flaxBindInstanceType<MaterialBanner, typeof _MaterialBannerFactory>(_MaterialBannerFactory, "flax.core/sdk_material#type:MaterialBanner", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _MaterialBannerFactory & _FlaxInstanceType<MaterialBanner> & _FlaxDartType<MaterialBanner, readonly ["class", "flax.core/sdk_material#type:MaterialBanner", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "content" | "contentTextStyle" | "actions" | "elevation" | "leading" | "minActionBarHeight" | "backgroundColor" | "surfaceTintColor" | "shadowColor" | "dividerColor" | "padding" | "margin" | "leadingPadding" | "forceActionsBelow" | "overflowAlignment" | "animation" | "onVisible" | "key" | "withAnimation" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/banner.dart::MaterialBanner" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
