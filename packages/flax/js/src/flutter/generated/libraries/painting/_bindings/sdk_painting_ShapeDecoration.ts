// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_DecorationImage';
import '@flax/flutter/painting/_bindings/sdk_painting_DecorationImage';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream11 from '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters15, _flaxMemberParameters16, _flaxMemberParameters23, _flaxMemberParameters116, _flaxMemberParameters2, _flaxMemberParameters53, _flaxMemberParameters54, _flaxMemberParameters55, _flaxMemberParameters56, _flaxMemberParameters57 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShapeDecoration extends Omit<upstream0.Decoration, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Decoration>, Readonly<{ "__flaxBound:package:flutter/src/painting/shape_decoration.dart::ShapeDecoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ShapeDecoration: unique symbol;
readonly [_flaxDartTypeValue]: ShapeDecoration;

}
defineObject("flax.core/sdk_painting#type:ShapeDecoration", ["padding","isComplex","color","gradient","image","shadows","shape"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ShapeDecoration", "object", {"lerpFrom":_flaxMemberParameters15,"lerpTo":_flaxMemberParameters16,"createBoxPainter":_flaxMemberParameters23}, {}), [], undefined, "flax.core/flutter#type:Decoration");
const _ShapeDecorationProxy = {type: "flax.core/sdk_painting#type:ShapeDecoration", parameters: _flaxMemberParameters116, constructors: {"": _flaxMemberParameters116}, methods: {"toStringShort":_flaxMemberParameters2,"debugAssertIsValid":_flaxMemberParameters2,"lerpFrom":_flaxMemberParameters15,"lerpTo":_flaxMemberParameters16,"hitTest":_flaxMemberParameters53,"createBoxPainter":_flaxMemberParameters23,"getClipPath":_flaxMemberParameters54,"toDiagnosticsNode":_flaxMemberParameters55,"debugFillProperties":_flaxMemberParameters56,"toString":_flaxMemberParameters57}, getters: ["color","gradient","image","shadows","shape","padding","isComplex"], setters: [], contextMembers: [], superMembers: ["get:color","get:gradient","get:image","get:shadows","get:shape","get:padding","get:isComplex","toStringShort","debugAssertIsValid","lerpFrom","lerpTo","hitTest","createBoxPainter","getClipPath","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface ShapeDecoration {
readonly [_flaxDartTypeValue]: ShapeDecoration;

toStringShort(): string;
debugAssertIsValid(): boolean;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): ShapeDecoration | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): ShapeDecoration | null;
hitTest(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options?: {textDirection?: upstream10.TextDirection | null | undefined}): boolean;
createBoxPainter(onChanged?: (() => void) | null): upstream11.BoxPainter;
getClipPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, textDirection: upstream10.TextDirection): upstream12.Path;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream15.DiagnosticsTreeStyle | null | undefined}): upstream14.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream17.DiagnosticLevel | undefined}): string;
get color(): upstream2.Color | null;
get gradient(): upstream4.Gradient | null;
get image(): upstream3.DecorationImage | null;
get shadows(): DartList<upstream5.BoxShadow> | null;
get shape(): upstream6.ShapeBorder;
get padding(): upstream7.EdgeInsetsGeometry;
get isComplex(): boolean;
}
export abstract class ShapeDecoration extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShapeDecoration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShapeDecoration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ShapeDecoration", readonly [], false];
constructor(options: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; image?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [] }> | null | undefined; gradient?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null | undefined; shadows?: DartListInput<upstream5.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>}) { super(_ShapeDecorationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ShapeDecoration.prototype, _ShapeDecorationProxy);
export namespace ShapeDecoration { export function implement(args: [options: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; image?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [] }> | null | undefined; gradient?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null | undefined; shadows?: DartListInput<upstream5.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>}], implementation: {}): ShapeDecoration {
return constructProxy(_ShapeDecorationProxy, args, implementation) as ShapeDecoration; } }
export namespace ShapeDecoration { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/shape_decoration.dart::ShapeDecoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/shape_decoration.dart::ShapeDecoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): ShapeDecoration | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:ShapeDecoration.lerp", [a, b, t]);
return _flaxResult as ShapeDecoration | null;
} }
_flaxBindInstanceType<ShapeDecoration, typeof ShapeDecoration>(ShapeDecoration, "flax.core/sdk_painting#type:ShapeDecoration", ["flax.core/flutter#type:Decoration","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "padding" | "isComplex" | "color" | "gradient" | "image" | "shadows" | "shape" | "toStringShort" | "debugAssertIsValid" | "lerpFrom" | "lerpTo" | "hitTest" | "createBoxPainter" | "getClipPath" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/painting/shape_decoration.dart::ShapeDecoration" | "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
