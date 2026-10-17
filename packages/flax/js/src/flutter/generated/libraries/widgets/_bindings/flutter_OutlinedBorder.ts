// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true},{"name":"reversed","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"side","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [{"name":"other","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OutlinedBorder extends Omit<upstream0.ShapeBorder, typeof _flaxDartTypeValue | "dimensions" | "preferPaintInterior" | "side" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "copyWith" | "operatorAdd">, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> { readonly __OutlinedBorder: unique symbol;

readonly dimensions: upstream1.EdgeInsetsGeometry;
readonly preferPaintInterior: boolean;
readonly side: upstream2.BorderSide;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream0.ShapeBorder | null;
scale(t: number): upstream0.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream0.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream0.ShapeBorder | null;
toString(): string;
copyWith(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | null | undefined}): OutlinedBorder;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream0.ShapeBorder;
}
defineObject("flax.core/flutter#type:OutlinedBorder", ["dimensions","preferPaintInterior","side"], [], _flaxBindingMethods("flax.core/flutter#type:OutlinedBorder", "object", {"add":_flaxMemberParameters0,"scale":_flaxMemberParameters1,"lerpFrom":_flaxMemberParameters2,"lerpTo":_flaxMemberParameters3,"toString":_flaxMemberParameters4,"copyWith":_flaxMemberParameters5,"operatorAdd":_flaxMemberParameters6}, {}), []);
export namespace _OutlinedBorderFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> | null, t: number): OutlinedBorder | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:OutlinedBorder.lerp", [a, b, t]);
return _flaxResult as OutlinedBorder | null;
} }
export const OutlinedBorder: typeof _OutlinedBorderFactory & _FlaxInstanceType<OutlinedBorder> & _FlaxDartType<OutlinedBorder, readonly ["class", "flax.core/flutter#type:OutlinedBorder", readonly [], false]> = _flaxBindInstanceType<OutlinedBorder, typeof _OutlinedBorderFactory>(_OutlinedBorderFactory, "flax.core/flutter#type:OutlinedBorder", ["flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _OutlinedBorderFactory & _FlaxInstanceType<OutlinedBorder> & _FlaxDartType<OutlinedBorder, readonly ["class", "flax.core/flutter#type:OutlinedBorder", readonly [], false]>;
