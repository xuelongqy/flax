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
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_BoxBorder';
import '@flax/flutter/painting/_bindings/flutter_BoxBorder';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_BoxShape';
import '@flax/flutter/painting/_bindings/flutter_BoxShape';
import type * as upstream10 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream14 from '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxPainter';
import type * as upstream15 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream16 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters23, _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters26, _flaxMemberParameters21 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxDecoration extends Omit<upstream0.Decoration, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Decoration>, Readonly<{ "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __BoxDecoration: unique symbol;
readonly [_flaxDartTypeValue]: BoxDecoration;

readonly padding: upstream10.EdgeInsetsGeometry;
readonly isComplex: boolean;
readonly color: upstream2.Color | null;
readonly image: upstream3.DecorationImage | null;
readonly border: upstream4.BoxBorder | null;
readonly borderRadius: upstream5.BorderRadiusGeometry | null;
readonly boxShadow: DartList<upstream6.BoxShadow> | null;
readonly gradient: upstream7.Gradient | null;
readonly backgroundBlendMode: upstream8.BlendMode | null;
readonly shape: upstream9.BoxShape;
toStringShort(): string;
debugAssertIsValid(): boolean;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): BoxDecoration | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): BoxDecoration | null;
hitTest(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options?: {textDirection?: upstream13.TextDirection | null | undefined}): boolean;
createBoxPainter(onChanged?: (() => void) | null): upstream14.BoxPainter;
getClipPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, textDirection: upstream13.TextDirection): upstream15.Path;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream18.DiagnosticsTreeStyle | null | undefined}): upstream17.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream20.DiagnosticLevel | undefined}): string;
copyWith(options?: {backgroundBlendMode?: upstream8.BlendMode | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; boxShadow?: DartListInput<upstream6.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; gradient?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null | undefined; image?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [] }> | null | undefined; shape?: upstream9.BoxShape | null | undefined}): BoxDecoration;
scale(factor: number): BoxDecoration;
}
defineObject("flax.core/flutter#type:BoxDecoration", ["padding","isComplex","color","image","border","borderRadius","boxShadow","gradient","backgroundBlendMode","shape"], [], _flaxBindingMethods("flax.core/flutter#type:BoxDecoration", "object", {"lerpFrom":_flaxMemberParameters23,"lerpTo":_flaxMemberParameters24,"createBoxPainter":_flaxMemberParameters25,"copyWith":_flaxMemberParameters26,"scale":_flaxMemberParameters21}, {}), [], undefined, "flax.core/flutter#type:Decoration");
export function _BoxDecorationFactory(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; image?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [] }> | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; boxShadow?: DartListInput<upstream6.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; gradient?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null | undefined; backgroundBlendMode?: upstream8.BlendMode | null | undefined; shape?: upstream9.BoxShape | undefined } = {}): BoxDecoration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxDecoration", "", [{"name":"color"},{"name":"image"},{"name":"border"},{"name":"borderRadius"},{"name":"boxShadow"},{"name":"gradient"},{"name":"backgroundBlendMode"},{"name":"shape"}], [], options) as BoxDecoration;
}
export namespace _BoxDecorationFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): BoxDecoration | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BoxDecoration.lerp", [a, b, t]);
return _flaxResult as BoxDecoration | null;
} }
export const BoxDecoration: typeof _BoxDecorationFactory & _FlaxInstanceType<BoxDecoration> & _FlaxDartType<BoxDecoration, readonly ["class", "flax.core/flutter#type:BoxDecoration", readonly [], false]> = _flaxBindInstanceType<BoxDecoration, typeof _BoxDecorationFactory>(_BoxDecorationFactory, "flax.core/flutter#type:BoxDecoration", ["flax.core/flutter#type:Decoration","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _BoxDecorationFactory & _FlaxInstanceType<BoxDecoration> & _FlaxDartType<BoxDecoration, readonly ["class", "flax.core/flutter#type:BoxDecoration", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "padding" | "isComplex" | "color" | "image" | "border" | "borderRadius" | "boxShadow" | "gradient" | "backgroundBlendMode" | "shape" | "toStringShort" | "debugAssertIsValid" | "lerpFrom" | "lerpTo" | "hitTest" | "createBoxPainter" | "getClipPath" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "copyWith" | "scale" | "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration" | "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
