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
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { _flaxMemberParameters359, _flaxMemberParameters360, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters178, _flaxMemberParameters179, _flaxMemberParameters361, _flaxMemberParameters362 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UnderlineTabIndicator extends Omit<upstream0.Decoration, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Decoration>, Readonly<{ "__flaxBound:package:material_ui/src/tab_indicator.dart::UnderlineTabIndicator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __UnderlineTabIndicator: unique symbol;
readonly [_flaxDartTypeValue]: UnderlineTabIndicator;

readonly padding: upstream4.EdgeInsetsGeometry;
readonly isComplex: boolean;
readonly borderRadius: upstream2.BorderRadius | null;
readonly borderSide: upstream3.BorderSide;
readonly insets: upstream4.EdgeInsetsGeometry;
toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
debugAssertIsValid(): boolean;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): upstream0.Decoration | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): upstream0.Decoration | null;
hitTest(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options?: {textDirection?: upstream11.TextDirection | null | undefined}): boolean;
createBoxPainter(onChanged?: (() => void) | null): upstream12.BoxPainter;
getClipPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, textDirection: upstream11.TextDirection): upstream13.Path;
}
defineObject("flax.material/material#type:UnderlineTabIndicator", ["padding","isComplex","borderRadius","borderSide","insets"], [], _flaxBindingMethods("flax.material/material#type:UnderlineTabIndicator", "object", {"createBoxPainter":_flaxMemberParameters359}, {}), [], undefined, "flax.core/flutter#type:Decoration");
export function _UnderlineTabIndicatorFactory(options: { borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; insets?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined } = {}): UnderlineTabIndicator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:UnderlineTabIndicator", "", [{"name":"borderRadius"},{"name":"borderSide"},{"name":"insets"}], [], options) as UnderlineTabIndicator;
}
const _UnderlineTabIndicatorProxy = {type: "flax.material/material#type:UnderlineTabIndicator", parameters: _flaxMemberParameters360, constructors: {"": _flaxMemberParameters360}, methods: {"toStringShort":_flaxMemberParameters4,"toString":_flaxMemberParameters5,"toDiagnosticsNode":_flaxMemberParameters6,"debugFillProperties":_flaxMemberParameters7,"debugAssertIsValid":_flaxMemberParameters4,"lerpFrom":_flaxMemberParameters178,"lerpTo":_flaxMemberParameters179,"hitTest":_flaxMemberParameters361,"createBoxPainter":_flaxMemberParameters359,"getClipPath":_flaxMemberParameters362}, getters: ["borderRadius","borderSide","insets","padding","isComplex"], setters: [], contextMembers: [], superMembers: ["get:borderRadius","get:borderSide","get:insets","get:padding","get:isComplex","toStringShort","toString","toDiagnosticsNode","debugFillProperties","debugAssertIsValid","lerpFrom","lerpTo","hitTest","createBoxPainter","getClipPath"]} as const;
export interface _UnderlineTabIndicatorNative extends UnderlineTabIndicator {
readonly [_flaxDartTypeValue]: _UnderlineTabIndicatorNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
debugAssertIsValid(): boolean;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): upstream0.Decoration | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): upstream0.Decoration | null;
hitTest(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options?: {textDirection?: upstream11.TextDirection | null | undefined}): boolean;
createBoxPainter(onChanged?: (() => void) | null): upstream12.BoxPainter;
getClipPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, textDirection: upstream11.TextDirection): upstream13.Path;
get borderRadius(): upstream2.BorderRadius | null;
get borderSide(): upstream3.BorderSide;
get insets(): upstream4.EdgeInsetsGeometry;
get padding(): upstream4.EdgeInsetsGeometry;
get isComplex(): boolean;
}
export abstract class _UnderlineTabIndicatorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UnderlineTabIndicator>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: UnderlineTabIndicator;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:UnderlineTabIndicator", readonly [], false];
constructor(options?: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; insets?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined}) { super(_UnderlineTabIndicatorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_UnderlineTabIndicatorNative.prototype, _UnderlineTabIndicatorProxy);
export namespace _UnderlineTabIndicatorFactory { export function implement(args: [options?: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; insets?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined}], implementation: {}): UnderlineTabIndicator {
return constructProxy(_UnderlineTabIndicatorProxy, args, implementation) as UnderlineTabIndicator; } }
const _UnderlineTabIndicatorBinding = _flaxProxyFactory(_UnderlineTabIndicatorFactory, _UnderlineTabIndicatorNative) as unknown as typeof _UnderlineTabIndicatorFactory & (new(options?: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; insets?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined}) => _UnderlineTabIndicatorNative);
export const UnderlineTabIndicator: typeof _UnderlineTabIndicatorBinding & _FlaxInstanceType<UnderlineTabIndicator> & _FlaxDartType<UnderlineTabIndicator, readonly ["class", "flax.material/material#type:UnderlineTabIndicator", readonly [], false]> = _flaxBindInstanceType<UnderlineTabIndicator, typeof _UnderlineTabIndicatorBinding>(_UnderlineTabIndicatorBinding, "flax.material/material#type:UnderlineTabIndicator", ["flax.core/flutter#type:Decoration","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _UnderlineTabIndicatorBinding & _FlaxInstanceType<UnderlineTabIndicator> & _FlaxDartType<UnderlineTabIndicator, readonly ["class", "flax.material/material#type:UnderlineTabIndicator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "padding" | "isComplex" | "borderRadius" | "borderSide" | "insets" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "debugAssertIsValid" | "lerpFrom" | "lerpTo" | "hitTest" | "createBoxPainter" | "getClipPath" | "__flaxBound:package:material_ui/src/tab_indicator.dart::UnderlineTabIndicator" | "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
