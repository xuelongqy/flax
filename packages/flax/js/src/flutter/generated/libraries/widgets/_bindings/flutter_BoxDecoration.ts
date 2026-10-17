// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"size","required":true,"positional":true},{"name":"position","required":true,"positional":true},{"name":"textDirection","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"border","required":false,"positional":false},{"name":"borderRadius","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"shape","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"factor","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Decoration';
import '@flax/flutter/widgets/_bindings/flutter_Decoration';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BoxShape';
import '@flax/flutter/widgets/_bindings/flutter_BoxShape';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import type * as upstream8 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxDecoration extends Omit<upstream0.Decoration, typeof _flaxDartTypeValue | "padding" | "isComplex" | "color" | "border" | "borderRadius" | "shape" | "toStringShort" | "debugAssertIsValid" | "lerpFrom" | "lerpTo" | "hitTest" | "copyWith" | "scale">, Readonly<{ "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __BoxDecoration: unique symbol;

readonly padding: upstream5.EdgeInsetsGeometry;
readonly isComplex: boolean;
readonly color: upstream1.Color | null;
readonly border: upstream2.BoxBorder | null;
readonly borderRadius: upstream3.BorderRadiusGeometry | null;
readonly shape: upstream4.BoxShape;
toStringShort(): string;
debugAssertIsValid(): boolean;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> | null, t: number): BoxDecoration | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> | null, t: number): BoxDecoration | null;
hitTest(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>, position: upstream7.Offset, options?: {textDirection?: upstream8.TextDirection | null | undefined}): boolean;
copyWith(options?: {border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: upstream4.BoxShape | null | undefined}): BoxDecoration;
scale(factor: number): BoxDecoration;
}
defineObject("flax.core/flutter#type:BoxDecoration", ["padding","isComplex","color","border","borderRadius","shape"], [], _flaxBindingMethods("flax.core/flutter#type:BoxDecoration", "object", {"toStringShort":_flaxMemberParameters0,"debugAssertIsValid":_flaxMemberParameters0,"lerpFrom":_flaxMemberParameters1,"lerpTo":_flaxMemberParameters2,"hitTest":_flaxMemberParameters3,"copyWith":_flaxMemberParameters4,"scale":_flaxMemberParameters5}, {}), []);
export function _BoxDecorationFactory(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; shape?: upstream4.BoxShape | undefined } = {}): BoxDecoration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxDecoration", "", [{"name":"color","required":false,"positional":false},{"name":"border","required":false,"positional":false},{"name":"borderRadius","required":false,"positional":false},{"name":"shape","required":false,"positional":false}], [], options) as BoxDecoration;
}
export namespace _BoxDecorationFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [] }> | null, t: number): BoxDecoration | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BoxDecoration.lerp", [a, b, t]);
return _flaxResult as BoxDecoration | null;
} }
export const BoxDecoration: typeof _BoxDecorationFactory & _FlaxInstanceType<BoxDecoration> & _FlaxDartType<BoxDecoration, readonly ["class", "flax.core/flutter#type:BoxDecoration", readonly [], false]> = _flaxBindInstanceType<BoxDecoration, typeof _BoxDecorationFactory>(_BoxDecorationFactory, "flax.core/flutter#type:BoxDecoration", ["flax.core/flutter#type:Decoration","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _BoxDecorationFactory & _FlaxInstanceType<BoxDecoration> & _FlaxDartType<BoxDecoration, readonly ["class", "flax.core/flutter#type:BoxDecoration", readonly [], false]>;
