// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainter';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainter';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollbarOrientation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollbarOrientation';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream15 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream16 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
const _flaxMemberParameters0 = [{"name":"canvas","required":true,"positional":true},{"name":"size","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"oldDelegate","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"position","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
const _flaxMemberParameters4 = [{"name":"metrics","required":true,"positional":true},{"name":"axisDirection","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"nextThickness","required":true,"positional":true},{"name":"nextRadius","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"thumbOffsetLocal","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"position","required":true,"positional":true},{"name":"kind","required":true,"positional":true},{"name":"forHover","required":false,"positional":false}] as const;
const _flaxMemberParameters8 = [{"name":"position","required":true,"positional":true},{"name":"kind","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollbarPainter extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Omit<upstream2.CustomPainter, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier | keyof upstream1.Listenable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollbar.dart::ScrollbarPainter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [] }> { readonly __ScrollbarPainter: unique symbol;
readonly [_flaxDartTypeValue]: ScrollbarPainter;

}
defineObject("flax.core/sdk_widgets#type:ScrollbarPainter", ["hasListeners","semanticsBuilder","color","trackColor","trackBorderColor","trackRadius","textDirection","thickness","fadeoutOpacityAnimation","mainAxisMargin","crossAxisMargin","radius","shape","padding","minLength","minOverscrollLength","scrollbarOrientation","ignorePointer"], ["color","trackColor","trackBorderColor","trackRadius","textDirection","thickness","mainAxisMargin","crossAxisMargin","radius","shape","padding","minLength","minOverscrollLength","scrollbarOrientation","ignorePointer"], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollbarPainter", "object", {"paint":_flaxMemberParameters0,"shouldRebuildSemantics":_flaxMemberParameters1,"shouldRepaint":_flaxMemberParameters1,"hitTest":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"update":_flaxMemberParameters4,"updateThickness":_flaxMemberParameters5,"getTrackToScroll":_flaxMemberParameters6,"getThumbScrollOffset":_flaxMemberParameters3,"hitTestInteractive":_flaxMemberParameters7,"hitTestOnlyThumbInteractive":_flaxMemberParameters8}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _ScrollbarPainterProxy = {type: "flax.core/sdk_widgets#type:ScrollbarPainter", parameters: [{"name":"color","required":true,"positional":false},{"name":"fadeoutOpacityAnimation","required":true,"positional":false},{"name":"trackColor","required":false,"positional":false},{"name":"trackBorderColor","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"thickness","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"mainAxisMargin","required":false,"positional":false},{"name":"crossAxisMargin","required":false,"positional":false},{"name":"radius","required":false,"positional":false},{"name":"trackRadius","required":false,"positional":false},{"name":"shape","required":false,"positional":false},{"name":"minLength","required":false,"positional":false},{"name":"minOverscrollLength","required":false,"positional":false},{"name":"scrollbarOrientation","required":false,"positional":false},{"name":"ignorePointer","required":false,"positional":false}], constructors: {"":[{"name":"color","required":true,"positional":false},{"name":"fadeoutOpacityAnimation","required":true,"positional":false},{"name":"trackColor","required":false,"positional":false},{"name":"trackBorderColor","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"thickness","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"mainAxisMargin","required":false,"positional":false},{"name":"crossAxisMargin","required":false,"positional":false},{"name":"radius","required":false,"positional":false},{"name":"trackRadius","required":false,"positional":false},{"name":"shape","required":false,"positional":false},{"name":"minLength","required":false,"positional":false},{"name":"minOverscrollLength","required":false,"positional":false},{"name":"scrollbarOrientation","required":false,"positional":false},{"name":"ignorePointer","required":false,"positional":false}]}, methods: {"addListener":_flaxMemberParameters9,"removeListener":_flaxMemberParameters9,"dispose":_flaxMemberParameters3,"paint":_flaxMemberParameters0,"shouldRebuildSemantics":_flaxMemberParameters1,"shouldRepaint":_flaxMemberParameters1,"hitTest":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"update":_flaxMemberParameters4,"updateThickness":_flaxMemberParameters5,"getTrackToScroll":_flaxMemberParameters6,"getThumbScrollOffset":_flaxMemberParameters3,"hitTestInteractive":_flaxMemberParameters7,"hitTestOnlyThumbInteractive":_flaxMemberParameters8}, getters: ["color","trackColor","trackBorderColor","trackRadius","textDirection","thickness","fadeoutOpacityAnimation","mainAxisMargin","crossAxisMargin","radius","shape","padding","minLength","minOverscrollLength","scrollbarOrientation","ignorePointer","semanticsBuilder","hasListeners"], setters: ["color","trackColor","trackBorderColor","trackRadius","textDirection","thickness","mainAxisMargin","crossAxisMargin","radius","shape","padding","minLength","minOverscrollLength","scrollbarOrientation","ignorePointer"], contextMembers: [], superMembers: ["get:color","get:trackColor","get:trackBorderColor","get:trackRadius","get:textDirection","get:thickness","get:fadeoutOpacityAnimation","get:mainAxisMargin","get:crossAxisMargin","get:radius","get:shape","get:padding","get:minLength","get:minOverscrollLength","get:scrollbarOrientation","get:ignorePointer","get:semanticsBuilder","get:hasListeners","set:color","set:trackColor","set:trackBorderColor","set:trackRadius","set:textDirection","set:thickness","set:mainAxisMargin","set:crossAxisMargin","set:radius","set:shape","set:padding","set:minLength","set:minOverscrollLength","set:scrollbarOrientation","set:ignorePointer","addListener","removeListener","dispose","paint","shouldRebuildSemantics","shouldRepaint","hitTest","toString","update","updateThickness","getTrackToScroll","getThumbScrollOffset","hitTestInteractive","hitTestOnlyThumbInteractive"]} as const;
export interface ScrollbarPainter {
readonly [_flaxDartTypeValue]: ScrollbarPainter;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
shouldRebuildSemantics(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
shouldRepaint(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollbar.dart::ScrollbarPainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [] }>): boolean;
hitTest(position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null): boolean | null;
toString(): string;
update(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, axisDirection: upstream15.AxisDirection): void;
updateThickness(nextThickness: number, nextRadius: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }>): void;
getTrackToScroll(thumbOffsetLocal: number): number;
getThumbScrollOffset(): number;
hitTestInteractive(position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, kind: upstream16.PointerDeviceKind, options?: {forHover?: boolean | undefined}): boolean;
hitTestOnlyThumbInteractive(position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, kind: upstream16.PointerDeviceKind): boolean;
get color(): upstream3.Color;
get trackColor(): upstream3.Color;
get trackBorderColor(): upstream3.Color;
get trackRadius(): upstream7.Radius | null;
get textDirection(): upstream5.TextDirection | null;
get thickness(): number;
get fadeoutOpacityAnimation(): upstream4.Animation<number>;
get mainAxisMargin(): number;
get crossAxisMargin(): number;
get radius(): upstream7.Radius | null;
get shape(): upstream8.OutlinedBorder | null;
get padding(): upstream6.EdgeInsetsGeometry;
get minLength(): number;
get minOverscrollLength(): number;
get scrollbarOrientation(): upstream9.ScrollbarOrientation | null;
get ignorePointer(): boolean;
get semanticsBuilder(): ((size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => DartList<upstream10.CustomPainterSemantics>) | null;
get hasListeners(): boolean;
set color(value: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>);
set trackColor(value: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>);
set trackBorderColor(value: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>);
set trackRadius(value: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null);
set textDirection(value: upstream5.TextDirection | null);
set thickness(value: number);
set mainAxisMargin(value: number);
set crossAxisMargin(value: number);
set radius(value: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null);
set shape(value: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
set padding(value: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>);
set minLength(value: number);
set minOverscrollLength(value: number);
set scrollbarOrientation(value: upstream9.ScrollbarOrientation | null);
set ignorePointer(value: boolean);
}
export abstract class ScrollbarPainter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollbarPainter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollbarPainter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollbarPainter", readonly [], false];
constructor(options: {color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; fadeoutOpacityAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; trackColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; trackBorderColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; textDirection?: upstream5.TextDirection | null | undefined; thickness?: number | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined; mainAxisMargin?: number | undefined; crossAxisMargin?: number | undefined; radius?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; trackRadius?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; minLength?: number | undefined; minOverscrollLength?: number | null | undefined; scrollbarOrientation?: upstream9.ScrollbarOrientation | null | undefined; ignorePointer?: boolean | undefined}) { super(_ScrollbarPainterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScrollbarPainter.prototype, _ScrollbarPainterProxy);
export namespace ScrollbarPainter { export function implement(args: [options: {color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; fadeoutOpacityAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; trackColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; trackBorderColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; textDirection?: upstream5.TextDirection | null | undefined; thickness?: number | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined; mainAxisMargin?: number | undefined; crossAxisMargin?: number | undefined; radius?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; trackRadius?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; minLength?: number | undefined; minOverscrollLength?: number | null | undefined; scrollbarOrientation?: upstream9.ScrollbarOrientation | null | undefined; ignorePointer?: boolean | undefined}], implementation: {}): ScrollbarPainter {
return constructProxy(_ScrollbarPainterProxy, args, implementation) as ScrollbarPainter; } }
_flaxBindInstanceType<ScrollbarPainter, typeof ScrollbarPainter>(ScrollbarPainter, "flax.core/sdk_widgets#type:ScrollbarPainter", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/sdk_rendering#type:CustomPainter"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "semanticsBuilder" | "color" | "trackColor" | "trackBorderColor" | "trackRadius" | "textDirection" | "thickness" | "fadeoutOpacityAnimation" | "mainAxisMargin" | "crossAxisMargin" | "radius" | "shape" | "padding" | "minLength" | "minOverscrollLength" | "scrollbarOrientation" | "ignorePointer" | "addListener" | "removeListener" | "dispose" | "paint" | "shouldRebuildSemantics" | "shouldRepaint" | "hitTest" | "toString" | "update" | "updateThickness" | "getTrackToScroll" | "getThumbScrollOffset" | "hitTestInteractive" | "hitTestOnlyThumbInteractive" | "__flaxBound:package:flutter/src/widgets/scrollbar.dart::ScrollbarPainter" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter";
