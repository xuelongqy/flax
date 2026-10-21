// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainter';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainter';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_BannerLocation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BannerLocation';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters43, _flaxMemberParameters44, _flaxMemberParameters2, _flaxMemberParameters45, _flaxMemberParameters12, _flaxMemberParameters46 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BannerPainter extends Omit<upstream0.CustomPainter, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.CustomPainter>, Readonly<{ "__flaxBound:package:flutter/src/widgets/banner.dart::BannerPainter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __BannerPainter: unique symbol;
readonly [_flaxDartTypeValue]: BannerPainter;

readonly semanticsBuilder: ((size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => DartList<upstream7.CustomPainterSemantics>) | null;
readonly message: string;
readonly textDirection: upstream2.TextDirection;
readonly location: upstream3.BannerLocation;
readonly layoutDirection: upstream2.TextDirection;
readonly color: upstream4.Color;
readonly textStyle: upstream5.TextStyle;
readonly shadow: upstream6.BoxShadow;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
shouldRebuildSemantics(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
shouldRepaint(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/banner.dart::BannerPainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
hitTest(position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
toString(): string;
dispose(): void;
}
defineObject("flax.core/sdk_widgets#type:BannerPainter", ["semanticsBuilder","message","textDirection","location","layoutDirection","color","textStyle","shadow"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:BannerPainter", "object", {"shouldRepaint":_flaxMemberParameters43,"hitTest":_flaxMemberParameters44,"dispose":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_rendering#type:CustomPainter");
export function _BannerPainterFactory(options: { message: string; textDirection: upstream2.TextDirection; location: upstream3.BannerLocation; layoutDirection: upstream2.TextDirection; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; shadow?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | undefined }): BannerPainter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:BannerPainter", "", [{"name":"message","required":true},{"name":"textDirection","required":true},{"name":"location","required":true},{"name":"layoutDirection","required":true},{"name":"color"},{"name":"textStyle"},{"name":"shadow"}], [], options) as BannerPainter;
}
const _BannerPainterProxy = {type: "flax.core/sdk_widgets#type:BannerPainter", parameters: _flaxMemberParameters45, constructors: {"": _flaxMemberParameters45}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"paint":_flaxMemberParameters46,"shouldRebuildSemantics":_flaxMemberParameters43,"shouldRepaint":_flaxMemberParameters43,"hitTest":_flaxMemberParameters44,"toString":_flaxMemberParameters2,"dispose":_flaxMemberParameters2}, getters: ["message","textDirection","location","layoutDirection","color","textStyle","shadow","semanticsBuilder"], setters: [], contextMembers: [], superMembers: ["get:message","get:textDirection","get:location","get:layoutDirection","get:color","get:textStyle","get:shadow","get:semanticsBuilder","addListener","removeListener","paint","shouldRebuildSemantics","shouldRepaint","hitTest","toString","dispose"]} as const;
export interface _BannerPainterNative extends BannerPainter {
readonly [_flaxDartTypeValue]: _BannerPainterNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
shouldRebuildSemantics(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
shouldRepaint(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/banner.dart::BannerPainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
hitTest(position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
toString(): string;
dispose(): void;
get message(): string;
get textDirection(): upstream2.TextDirection;
get location(): upstream3.BannerLocation;
get layoutDirection(): upstream2.TextDirection;
get color(): upstream4.Color;
get textStyle(): upstream5.TextStyle;
get shadow(): upstream6.BoxShadow;
get semanticsBuilder(): ((size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => DartList<upstream7.CustomPainterSemantics>) | null;
}
export abstract class _BannerPainterNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BannerPainter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BannerPainter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BannerPainter", readonly [], false];
constructor(options: {message: string; textDirection: upstream2.TextDirection; location: upstream3.BannerLocation; layoutDirection: upstream2.TextDirection; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; shadow?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | undefined}) { super(_BannerPainterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_BannerPainterNative.prototype, _BannerPainterProxy);
export namespace _BannerPainterFactory { export function implement(args: [options: {message: string; textDirection: upstream2.TextDirection; location: upstream3.BannerLocation; layoutDirection: upstream2.TextDirection; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; shadow?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | undefined}], implementation: {}): BannerPainter {
return constructProxy(_BannerPainterProxy, args, implementation) as BannerPainter; } }
const _BannerPainterBinding = _flaxProxyFactory(_BannerPainterFactory, _BannerPainterNative) as unknown as typeof _BannerPainterFactory & (new(options: {message: string; textDirection: upstream2.TextDirection; location: upstream3.BannerLocation; layoutDirection: upstream2.TextDirection; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; shadow?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | undefined}) => _BannerPainterNative);
export const BannerPainter: typeof _BannerPainterBinding & _FlaxInstanceType<BannerPainter> & _FlaxDartType<BannerPainter, readonly ["class", "flax.core/sdk_widgets#type:BannerPainter", readonly [], false]> = _flaxBindInstanceType<BannerPainter, typeof _BannerPainterBinding>(_BannerPainterBinding, "flax.core/sdk_widgets#type:BannerPainter", ["flax.core/sdk_rendering#type:CustomPainter","flax.core/flutter#type:Listenable","dart:core::Object"]) as typeof _BannerPainterBinding & _FlaxInstanceType<BannerPainter> & _FlaxDartType<BannerPainter, readonly ["class", "flax.core/sdk_widgets#type:BannerPainter", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "semanticsBuilder" | "message" | "textDirection" | "location" | "layoutDirection" | "color" | "textStyle" | "shadow" | "addListener" | "removeListener" | "paint" | "shouldRebuildSemantics" | "shouldRepaint" | "hitTest" | "toString" | "dispose" | "__flaxBound:package:flutter/src/widgets/banner.dart::BannerPainter" | "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
