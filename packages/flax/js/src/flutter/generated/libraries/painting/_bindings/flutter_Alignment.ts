// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Alignment extends Omit<upstream0.AlignmentGeometry, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> { readonly __Alignment: unique symbol;
readonly [_flaxDartTypeValue]: Alignment;

readonly x: number;
readonly y: number;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): upstream0.AlignmentGeometry;
resolve(direction: upstream1.TextDirection | null): Alignment;
toString(): string;
alongOffset(other: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream2.Offset;
alongSize(other: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream2.Offset;
withinRect(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream2.Offset;
inscribe(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream4.Rect;
operatorMultiply(other: number): Alignment;
operatorDivide(other: number): Alignment;
operatorTruncateDivide(other: number): Alignment;
operatorModulo(other: number): Alignment;
operatorNegate(): Alignment;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): Alignment;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): Alignment;
}
defineObject("flax.core/flutter#type:Alignment", ["x","y"], [], _flaxBindingMethods("flax.core/flutter#type:Alignment", "object", {"alongOffset":_flaxMemberParameters1,"alongSize":_flaxMemberParameters1,"withinRect":_flaxMemberParameters2,"inscribe":_flaxMemberParameters3,"operatorMultiply":_flaxMemberParameters1,"operatorDivide":_flaxMemberParameters1,"operatorTruncateDivide":_flaxMemberParameters1,"operatorModulo":_flaxMemberParameters1,"operatorNegate":_flaxMemberParameters4,"operatorAdd":_flaxMemberParameters1,"operatorSubtract":_flaxMemberParameters1}, {}), [], undefined, "flax.core/flutter#type:AlignmentGeometry");
export function _AlignmentFactory(x: number, y: number): Alignment {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Alignment", "", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [x, y], {}) as Alignment;
}
export namespace _AlignmentFactory { export declare const topLeft: Alignment; }
export namespace _AlignmentFactory { export declare const topCenter: Alignment; }
export namespace _AlignmentFactory { export declare const topRight: Alignment; }
export namespace _AlignmentFactory { export declare const centerLeft: Alignment; }
export namespace _AlignmentFactory { export declare const center: Alignment; }
export namespace _AlignmentFactory { export declare const centerRight: Alignment; }
export namespace _AlignmentFactory { export declare const bottomLeft: Alignment; }
export namespace _AlignmentFactory { export declare const bottomCenter: Alignment; }
export namespace _AlignmentFactory { export declare const bottomRight: Alignment; }
_flaxDefineStaticGetters(_AlignmentFactory, "flax.core/flutter#read:Alignment.", ["topLeft","topCenter","topRight","centerLeft","center","centerRight","bottomLeft","bottomCenter","bottomRight"]);
export namespace _AlignmentFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null, t: number): Alignment | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Alignment.lerp", [a, b, t], _flaxMemberParameters0);
return _flaxResult as Alignment | null;
} }
export const Alignment: typeof _AlignmentFactory & _FlaxInstanceType<Alignment> & _FlaxDartType<Alignment, readonly ["class", "flax.core/flutter#type:Alignment", readonly [], false]> = _flaxBindInstanceType<Alignment, typeof _AlignmentFactory>(_AlignmentFactory, "flax.core/flutter#type:Alignment", ["flax.core/flutter#type:AlignmentGeometry","dart:core::Object"]) as typeof _AlignmentFactory & _FlaxInstanceType<Alignment> & _FlaxDartType<Alignment, readonly ["class", "flax.core/flutter#type:Alignment", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "x" | "y" | "add" | "resolve" | "toString" | "alongOffset" | "alongSize" | "withinRect" | "inscribe" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract" | "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment" | "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry";
