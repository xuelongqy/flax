// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_FlutterLogoStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_FlutterLogoStyle';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
const _flaxMemberParameters0 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"onChanged","positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"textColor"},{"name":"style"},{"name":"margin"}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"size","required":true,"positional":true},{"name":"position","required":true,"positional":true},{"name":"textDirection"}] as const;
const _flaxMemberParameters6 = [{"name":"rect","required":true,"positional":true},{"name":"textDirection","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters8 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"minLevel"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlutterLogoDecoration extends Omit<upstream0.Decoration, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Decoration>, Readonly<{ "__flaxBound:package:flutter/src/painting/flutter_logo.dart::FlutterLogoDecoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __FlutterLogoDecoration: unique symbol;
readonly [_flaxDartTypeValue]: FlutterLogoDecoration;

}
defineObject("flax.core/sdk_painting#type:FlutterLogoDecoration", ["padding","isComplex","textColor","style","margin"], [], _flaxBindingMethods("flax.core/sdk_painting#type:FlutterLogoDecoration", "object", {"lerpFrom":_flaxMemberParameters0,"lerpTo":_flaxMemberParameters1,"createBoxPainter":_flaxMemberParameters2}, {}), [], undefined, "flax.core/flutter#type:Decoration");
const _FlutterLogoDecorationProxy = {type: "flax.core/sdk_painting#type:FlutterLogoDecoration", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"toStringShort":_flaxMemberParameters4,"debugAssertIsValid":_flaxMemberParameters4,"lerpFrom":_flaxMemberParameters0,"lerpTo":_flaxMemberParameters1,"hitTest":_flaxMemberParameters5,"createBoxPainter":_flaxMemberParameters2,"getClipPath":_flaxMemberParameters6,"toDiagnosticsNode":_flaxMemberParameters7,"debugFillProperties":_flaxMemberParameters8,"toString":_flaxMemberParameters9}, getters: ["textColor","style","margin","isComplex","padding"], setters: [], contextMembers: [], superMembers: ["get:textColor","get:style","get:margin","get:isComplex","get:padding","toStringShort","debugAssertIsValid","lerpFrom","lerpTo","hitTest","createBoxPainter","getClipPath","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface FlutterLogoDecoration {
readonly [_flaxDartTypeValue]: FlutterLogoDecoration;

toStringShort(): string;
debugAssertIsValid(): boolean;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): FlutterLogoDecoration | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): FlutterLogoDecoration | null;
hitTest(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options?: {textDirection?: upstream8.TextDirection | null | undefined}): boolean;
createBoxPainter(onChanged?: (() => void) | null): upstream9.BoxPainter;
getClipPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, textDirection: upstream8.TextDirection): upstream10.Path;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream15.DiagnosticLevel | undefined}): string;
get textColor(): upstream2.Color;
get style(): upstream3.FlutterLogoStyle;
get margin(): upstream4.EdgeInsets;
get isComplex(): boolean;
get padding(): upstream5.EdgeInsetsGeometry;
}
export abstract class FlutterLogoDecoration extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlutterLogoDecoration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FlutterLogoDecoration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:FlutterLogoDecoration", readonly [], false];
constructor(options?: {textColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; style?: upstream3.FlutterLogoStyle | undefined; margin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined}) { super(_FlutterLogoDecorationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FlutterLogoDecoration.prototype, _FlutterLogoDecorationProxy);
export namespace FlutterLogoDecoration { export function implement(args: [options?: {textColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; style?: upstream3.FlutterLogoStyle | undefined; margin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined}], implementation: {}): FlutterLogoDecoration {
return constructProxy(_FlutterLogoDecorationProxy, args, implementation) as FlutterLogoDecoration; } }
export namespace FlutterLogoDecoration { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/flutter_logo.dart::FlutterLogoDecoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/flutter_logo.dart::FlutterLogoDecoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): FlutterLogoDecoration | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:FlutterLogoDecoration.lerp", [a, b, t]);
return _flaxResult as FlutterLogoDecoration | null;
} }
_flaxBindInstanceType<FlutterLogoDecoration, typeof FlutterLogoDecoration>(FlutterLogoDecoration, "flax.core/sdk_painting#type:FlutterLogoDecoration", ["flax.core/flutter#type:Decoration","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "padding" | "isComplex" | "textColor" | "style" | "margin" | "toStringShort" | "debugAssertIsValid" | "lerpFrom" | "lerpTo" | "hitTest" | "createBoxPainter" | "getClipPath" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/painting/flutter_logo.dart::FlutterLogoDecoration" | "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
