// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters327, _flaxMemberParameters328, _flaxMemberParameters2, _flaxMemberParameters161, _flaxMemberParameters162, _flaxMemberParameters329, _flaxMemberParameters330, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters3 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UnderlineTabIndicator extends Omit<upstream0.Decoration, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Decoration>, Readonly<{ "__flaxBound:package:flutter/src/material/tab_indicator.dart::UnderlineTabIndicator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __UnderlineTabIndicator: unique symbol;
readonly [_flaxDartTypeValue]: UnderlineTabIndicator;

readonly padding: upstream4.EdgeInsetsGeometry;
readonly isComplex: boolean;
readonly borderRadius: upstream2.BorderRadius | null;
readonly borderSide: upstream3.BorderSide;
readonly insets: upstream4.EdgeInsetsGeometry;
toStringShort(): string;
debugAssertIsValid(): boolean;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): upstream0.Decoration | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): upstream0.Decoration | null;
hitTest(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): boolean;
createBoxPainter(onChanged?: (() => void) | null): upstream8.BoxPainter;
getClipPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, textDirection: upstream7.TextDirection): upstream9.Path;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream12.DiagnosticsTreeStyle | null | undefined}): upstream11.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream14.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_material#type:UnderlineTabIndicator", ["padding","isComplex","borderRadius","borderSide","insets"], [], _flaxBindingMethods("flax.core/sdk_material#type:UnderlineTabIndicator", "object", {"createBoxPainter":_flaxMemberParameters327}, {}), [], undefined, "flax.core/flutter#type:Decoration");
export function _UnderlineTabIndicatorFactory(options: { borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; insets?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined } = {}): UnderlineTabIndicator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:UnderlineTabIndicator", "", [{"name":"borderRadius"},{"name":"borderSide"},{"name":"insets"}], [], options) as UnderlineTabIndicator;
}
const _UnderlineTabIndicatorProxy = {type: "flax.core/sdk_material#type:UnderlineTabIndicator", parameters: _flaxMemberParameters328, constructors: {"": _flaxMemberParameters328}, methods: {"toStringShort":_flaxMemberParameters2,"debugAssertIsValid":_flaxMemberParameters2,"lerpFrom":_flaxMemberParameters161,"lerpTo":_flaxMemberParameters162,"hitTest":_flaxMemberParameters329,"createBoxPainter":_flaxMemberParameters327,"getClipPath":_flaxMemberParameters330,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters3}, getters: ["borderRadius","borderSide","insets","padding","isComplex"], setters: [], contextMembers: [], superMembers: ["get:borderRadius","get:borderSide","get:insets","get:padding","get:isComplex","toStringShort","debugAssertIsValid","lerpFrom","lerpTo","hitTest","createBoxPainter","getClipPath","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _UnderlineTabIndicatorNative extends UnderlineTabIndicator {
readonly [_flaxDartTypeValue]: _UnderlineTabIndicatorNative;

toStringShort(): string;
debugAssertIsValid(): boolean;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): upstream0.Decoration | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): upstream0.Decoration | null;
hitTest(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): boolean;
createBoxPainter(onChanged?: (() => void) | null): upstream8.BoxPainter;
getClipPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, textDirection: upstream7.TextDirection): upstream9.Path;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream12.DiagnosticsTreeStyle | null | undefined}): upstream11.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream14.DiagnosticLevel | undefined}): string;
get borderRadius(): upstream2.BorderRadius | null;
get borderSide(): upstream3.BorderSide;
get insets(): upstream4.EdgeInsetsGeometry;
get padding(): upstream4.EdgeInsetsGeometry;
get isComplex(): boolean;
}
export abstract class _UnderlineTabIndicatorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UnderlineTabIndicator>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: UnderlineTabIndicator;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:UnderlineTabIndicator", readonly [], false];
constructor(options?: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; insets?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined}) { super(_UnderlineTabIndicatorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_UnderlineTabIndicatorNative.prototype, _UnderlineTabIndicatorProxy);
export namespace _UnderlineTabIndicatorFactory { export function implement(args: [options?: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; insets?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined}], implementation: {}): UnderlineTabIndicator {
return constructProxy(_UnderlineTabIndicatorProxy, args, implementation) as UnderlineTabIndicator; } }
const _UnderlineTabIndicatorBinding = _flaxProxyFactory(_UnderlineTabIndicatorFactory, _UnderlineTabIndicatorNative) as unknown as typeof _UnderlineTabIndicatorFactory & (new(options?: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; insets?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined}) => _UnderlineTabIndicatorNative);
export const UnderlineTabIndicator: typeof _UnderlineTabIndicatorBinding & _FlaxInstanceType<UnderlineTabIndicator> & _FlaxDartType<UnderlineTabIndicator, readonly ["class", "flax.core/sdk_material#type:UnderlineTabIndicator", readonly [], false]> = _flaxBindInstanceType<UnderlineTabIndicator, typeof _UnderlineTabIndicatorBinding>(_UnderlineTabIndicatorBinding, "flax.core/sdk_material#type:UnderlineTabIndicator", ["flax.core/flutter#type:Decoration","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _UnderlineTabIndicatorBinding & _FlaxInstanceType<UnderlineTabIndicator> & _FlaxDartType<UnderlineTabIndicator, readonly ["class", "flax.core/sdk_material#type:UnderlineTabIndicator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "padding" | "isComplex" | "borderRadius" | "borderSide" | "insets" | "toStringShort" | "debugAssertIsValid" | "lerpFrom" | "lerpTo" | "hitTest" | "createBoxPainter" | "getClipPath" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/material/tab_indicator.dart::UnderlineTabIndicator" | "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
