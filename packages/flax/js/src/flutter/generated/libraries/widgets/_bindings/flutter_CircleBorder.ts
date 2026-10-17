// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"eccentricity","required":false,"positional":false},{"name":"side","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"other","required":true,"positional":true},{"name":"reversed","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [] as const;
const _flaxMemberParameters6 = [{"name":"other","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CircleBorder extends Omit<upstream0.OutlinedBorder, typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "eccentricity" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "toString" | "operatorAdd">, Omit<upstream1.ShapeBorder, typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "eccentricity" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "toString" | "operatorAdd">, Readonly<{ "__flaxBound:package:flutter/src/painting/circle_border.dart::CircleBorder": readonly [] }> { readonly __CircleBorder: unique symbol;

readonly dimensions: upstream3.EdgeInsetsGeometry;
readonly side: upstream2.BorderSide;
readonly preferPaintInterior: boolean;
readonly eccentricity: number;
copyWith(options?: {eccentricity?: number | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | null | undefined}): CircleBorder;
scale(t: number): upstream1.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
}
defineObject("flax.core/flutter#type:CircleBorder", ["dimensions","side","preferPaintInterior","eccentricity"], [], _flaxBindingMethods("flax.core/flutter#type:CircleBorder", "object", {"copyWith":_flaxMemberParameters0,"scale":_flaxMemberParameters1,"lerpFrom":_flaxMemberParameters2,"lerpTo":_flaxMemberParameters3,"add":_flaxMemberParameters4,"toString":_flaxMemberParameters5,"operatorAdd":_flaxMemberParameters6}, {}), []);
export function _CircleBorderFactory(options: { side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; eccentricity?: number | undefined } = {}): CircleBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:CircleBorder", "", [{"name":"side","required":false,"positional":false},{"name":"eccentricity","required":false,"positional":false}], [], options) as CircleBorder;
}
export const CircleBorder: typeof _CircleBorderFactory & _FlaxInstanceType<CircleBorder> & _FlaxDartType<CircleBorder, readonly ["class", "flax.core/flutter#type:CircleBorder", readonly [], false]> = _flaxBindInstanceType<CircleBorder, typeof _CircleBorderFactory>(_CircleBorderFactory, "flax.core/flutter#type:CircleBorder", ["flax.core/flutter#type:OutlinedBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _CircleBorderFactory & _FlaxInstanceType<CircleBorder> & _FlaxDartType<CircleBorder, readonly ["class", "flax.core/flutter#type:CircleBorder", readonly [], false]>;
