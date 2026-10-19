// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_Alignment';
import '@flax/flutter/painting/_bindings/flutter_Alignment';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters21, _flaxMemberParameters2 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FractionalOffset extends Omit<upstream0.Alignment, _flaxOwnMembers0>, Omit<upstream1.AlignmentGeometry, _flaxOwnMembers0 | keyof upstream0.Alignment>, Readonly<{ "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> { readonly __FractionalOffset: unique symbol;
readonly [_flaxDartTypeValue]: FractionalOffset;

readonly x: number;
readonly y: number;
readonly dx: number;
readonly dy: number;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): upstream1.AlignmentGeometry;
alongOffset(other: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream2.Offset;
alongSize(other: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream2.Offset;
withinRect(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream2.Offset;
inscribe(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream4.Rect;
resolve(direction: upstream5.TextDirection | null): upstream0.Alignment;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): upstream0.Alignment;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): upstream0.Alignment;
operatorMultiply(other: number): FractionalOffset;
operatorDivide(other: number): FractionalOffset;
operatorTruncateDivide(other: number): FractionalOffset;
operatorModulo(other: number): FractionalOffset;
operatorNegate(): FractionalOffset;
}
defineObject("flax.core/sdk_painting#type:FractionalOffset", ["x","y","dx","dy"], [], _flaxBindingMethods("flax.core/sdk_painting#type:FractionalOffset", "object", {"operatorMultiply":_flaxMemberParameters21,"operatorDivide":_flaxMemberParameters21,"operatorTruncateDivide":_flaxMemberParameters21,"operatorModulo":_flaxMemberParameters21,"operatorNegate":_flaxMemberParameters2}, {}), [], undefined, "flax.core/flutter#type:Alignment");
export function _FractionalOffsetFactory(dx: number, dy: number): FractionalOffset {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:FractionalOffset", "", [{"name":"dx","required":true,"positional":true},{"name":"dy","required":true,"positional":true}], [dx, dy], {}) as FractionalOffset;
}
export namespace _FractionalOffsetFactory {
export function fromOffsetAndSize(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): FractionalOffset {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:FractionalOffset", "fromOffsetAndSize", [{"name":"offset","required":true,"positional":true},{"name":"size","required":true,"positional":true}], [offset, size], {}) as FractionalOffset;
}
}
export namespace _FractionalOffsetFactory {
export function fromOffsetAndRect(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): FractionalOffset {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:FractionalOffset", "fromOffsetAndRect", [{"name":"offset","required":true,"positional":true},{"name":"rect","required":true,"positional":true}], [offset, rect], {}) as FractionalOffset;
}
}
export namespace _FractionalOffsetFactory { export declare const topLeft: FractionalOffset; }
export namespace _FractionalOffsetFactory { export declare const topCenter: FractionalOffset; }
export namespace _FractionalOffsetFactory { export declare const topRight: FractionalOffset; }
export namespace _FractionalOffsetFactory { export declare const centerLeft: FractionalOffset; }
export namespace _FractionalOffsetFactory { export declare const center: FractionalOffset; }
export namespace _FractionalOffsetFactory { export declare const centerRight: FractionalOffset; }
export namespace _FractionalOffsetFactory { export declare const bottomLeft: FractionalOffset; }
export namespace _FractionalOffsetFactory { export declare const bottomCenter: FractionalOffset; }
export namespace _FractionalOffsetFactory { export declare const bottomRight: FractionalOffset; }
_flaxDefineStaticGetters(_FractionalOffsetFactory, "flax.core/sdk_painting#read:FractionalOffset.", ["topLeft","topCenter","topRight","centerLeft","center","centerRight","bottomLeft","bottomCenter","bottomRight"]);
export namespace _FractionalOffsetFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null, t: number): FractionalOffset | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:FractionalOffset.lerp", [a, b, t]);
return _flaxResult as FractionalOffset | null;
} }
export const FractionalOffset: typeof _FractionalOffsetFactory & _FlaxInstanceType<FractionalOffset> & _FlaxDartType<FractionalOffset, readonly ["class", "flax.core/sdk_painting#type:FractionalOffset", readonly [], false]> = _flaxBindInstanceType<FractionalOffset, typeof _FractionalOffsetFactory>(_FractionalOffsetFactory, "flax.core/sdk_painting#type:FractionalOffset", ["flax.core/flutter#type:Alignment","flax.core/flutter#type:AlignmentGeometry","dart:core::Object"]) as typeof _FractionalOffsetFactory & _FlaxInstanceType<FractionalOffset> & _FlaxDartType<FractionalOffset, readonly ["class", "flax.core/sdk_painting#type:FractionalOffset", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "x" | "y" | "dx" | "dy" | "add" | "alongOffset" | "alongSize" | "withinRect" | "inscribe" | "resolve" | "toString" | "operatorAdd" | "operatorSubtract" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset" | "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment" | "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry";
