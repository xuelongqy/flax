// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_CarouselController';
import '@flax/flutter/material/_bindings/sdk_material_CarouselController';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
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
const _flaxMemberParameters0 = [] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CarouselView extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/carousel.dart::CarouselView": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CarouselView: unique symbol;
readonly [_flaxDartTypeValue]: CarouselView;

readonly padding: upstream2.EdgeInsets | null;
readonly backgroundColor: upstream3.Color | null;
readonly elevation: number | null;
readonly shape: upstream4.ShapeBorder | null;
readonly itemClipBehavior: upstream5.Clip | null;
readonly overlayColor: upstream6.WidgetStateProperty<upstream3.Color | null> | null;
readonly shrinkExtent: number;
readonly itemSnapping: boolean;
readonly controller: upstream7.CarouselController | null;
readonly scrollDirection: upstream8.Axis;
readonly reverse: boolean;
readonly consumeMaxWeight: boolean;
readonly onTap: ((value: number) => void) | null;
readonly enableSplash: boolean;
readonly itemExtent: number | null;
readonly flexWeights: DartList<number> | null;
readonly children: DartList<Widget>;
readonly onIndexChanged: ((value: number) => void) | null;
readonly itemBuilder: ((context: upstream9.BuildContext, index: number) => Widget | null) | null;
readonly itemCount: number | null;
readonly infinite: boolean;
readonly key: upstream1.Key | null;
createState(): upstream10.State<CarouselView>;
createElement(): upstream11.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream13.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream13.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream15.DiagnosticsTreeStyle | null | undefined}): upstream14.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:CarouselView", ["padding","backgroundColor","elevation","shape","itemClipBehavior","overlayColor","shrinkExtent","itemSnapping","controller","scrollDirection","reverse","consumeMaxWeight","onTap","enableSplash","itemExtent","flexWeights","children","onIndexChanged","itemBuilder","itemCount","infinite","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:CarouselView", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _CarouselViewFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; itemClipBehavior?: upstream5.Clip | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; itemSnapping?: boolean | undefined; shrinkExtent?: number | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/material/carousel.dart::CarouselController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; scrollDirection?: upstream8.Axis | undefined; reverse?: boolean | undefined; onTap?: ((value: number) => void) | null | undefined; enableSplash?: boolean | undefined; infinite?: boolean | undefined; itemExtent: number; children: DartListInput<Widget, Widget>; onIndexChanged?: ((value: number) => void) | null | undefined }): CarouselView {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:CarouselView", "", [{"name":"key"},{"name":"padding"},{"name":"backgroundColor"},{"name":"elevation"},{"name":"shape"},{"name":"itemClipBehavior"},{"name":"overlayColor"},{"name":"itemSnapping"},{"name":"shrinkExtent"},{"name":"controller"},{"name":"scrollDirection"},{"name":"reverse"},{"name":"onTap"},{"name":"enableSplash"},{"name":"infinite"},{"name":"itemExtent","required":true},{"name":"children","required":true},{"name":"onIndexChanged"}], [], options) as CarouselView;
}
export namespace _CarouselViewFactory {
export function weighted(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; itemClipBehavior?: upstream5.Clip | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; itemSnapping?: boolean | undefined; shrinkExtent?: number | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/material/carousel.dart::CarouselController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; scrollDirection?: upstream8.Axis | undefined; reverse?: boolean | undefined; consumeMaxWeight?: boolean | undefined; onTap?: ((value: number) => void) | null | undefined; enableSplash?: boolean | undefined; infinite?: boolean | undefined; flexWeights: DartListInput<number, number>; children: DartListInput<Widget, Widget>; onIndexChanged?: ((value: number) => void) | null | undefined }): CarouselView {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:CarouselView", "weighted", [{"name":"key"},{"name":"padding"},{"name":"backgroundColor"},{"name":"elevation"},{"name":"shape"},{"name":"itemClipBehavior"},{"name":"overlayColor"},{"name":"itemSnapping"},{"name":"shrinkExtent"},{"name":"controller"},{"name":"scrollDirection"},{"name":"reverse"},{"name":"consumeMaxWeight"},{"name":"onTap"},{"name":"enableSplash"},{"name":"infinite"},{"name":"flexWeights","required":true},{"name":"children","required":true},{"name":"onIndexChanged"}], [], options) as CarouselView;
}
}
export namespace _CarouselViewFactory {
export function builder(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; itemClipBehavior?: upstream5.Clip | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; itemSnapping?: boolean | undefined; shrinkExtent?: number | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/material/carousel.dart::CarouselController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; scrollDirection?: upstream8.Axis | undefined; reverse?: boolean | undefined; onTap?: ((value: number) => void) | null | undefined; enableSplash?: boolean | undefined; itemExtent: number; itemBuilder: ((context: upstream9.BuildContext, index: number) => Widget | null) | null; itemCount?: number | null | undefined; onIndexChanged?: ((value: number) => void) | null | undefined; infinite?: boolean | undefined }): CarouselView {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:CarouselView", "builder", [{"name":"key"},{"name":"padding"},{"name":"backgroundColor"},{"name":"elevation"},{"name":"shape"},{"name":"itemClipBehavior"},{"name":"overlayColor"},{"name":"itemSnapping"},{"name":"shrinkExtent"},{"name":"controller"},{"name":"scrollDirection"},{"name":"reverse"},{"name":"onTap"},{"name":"enableSplash"},{"name":"itemExtent","required":true},{"name":"itemBuilder","required":true},{"name":"itemCount"},{"name":"onIndexChanged"},{"name":"infinite"}], [], options) as CarouselView;
}
}
export namespace _CarouselViewFactory {
export function weightedBuilder(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; itemClipBehavior?: upstream5.Clip | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; itemSnapping?: boolean | undefined; shrinkExtent?: number | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/material/carousel.dart::CarouselController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; scrollDirection?: upstream8.Axis | undefined; reverse?: boolean | undefined; consumeMaxWeight?: boolean | undefined; onTap?: ((value: number) => void) | null | undefined; enableSplash?: boolean | undefined; flexWeights: DartListInput<number, number>; itemBuilder: ((context: upstream9.BuildContext, index: number) => Widget | null) | null; itemCount?: number | null | undefined; onIndexChanged?: ((value: number) => void) | null | undefined; infinite?: boolean | undefined }): CarouselView {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:CarouselView", "weightedBuilder", [{"name":"key"},{"name":"padding"},{"name":"backgroundColor"},{"name":"elevation"},{"name":"shape"},{"name":"itemClipBehavior"},{"name":"overlayColor"},{"name":"itemSnapping"},{"name":"shrinkExtent"},{"name":"controller"},{"name":"scrollDirection"},{"name":"reverse"},{"name":"consumeMaxWeight"},{"name":"onTap"},{"name":"enableSplash"},{"name":"flexWeights","required":true},{"name":"itemBuilder","required":true},{"name":"itemCount"},{"name":"onIndexChanged"},{"name":"infinite"}], [], options) as CarouselView;
}
}
export const CarouselView: typeof _CarouselViewFactory & _FlaxInstanceType<CarouselView> & _FlaxDartType<CarouselView, readonly ["class", "flax.core/sdk_material#type:CarouselView", readonly [], false]> = _flaxBindInstanceType<CarouselView, typeof _CarouselViewFactory>(_CarouselViewFactory, "flax.core/sdk_material#type:CarouselView", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CarouselViewFactory & _FlaxInstanceType<CarouselView> & _FlaxDartType<CarouselView, readonly ["class", "flax.core/sdk_material#type:CarouselView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "padding" | "backgroundColor" | "elevation" | "shape" | "itemClipBehavior" | "overlayColor" | "shrinkExtent" | "itemSnapping" | "controller" | "scrollDirection" | "reverse" | "consumeMaxWeight" | "onTap" | "enableSplash" | "itemExtent" | "flexWeights" | "children" | "onIndexChanged" | "itemBuilder" | "itemCount" | "infinite" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/carousel.dart::CarouselView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
