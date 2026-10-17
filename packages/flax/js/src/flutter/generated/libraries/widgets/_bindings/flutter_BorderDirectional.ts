// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true},{"name":"reversed","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"other","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BorderDirectional extends Omit<upstream0.BoxBorder, typeof _flaxDartTypeValue | "top" | "bottom" | "isUniform" | "preferPaintInterior" | "dimensions" | "start" | "end" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "operatorAdd">, Omit<upstream1.ShapeBorder, typeof _flaxDartTypeValue | "top" | "bottom" | "isUniform" | "preferPaintInterior" | "dimensions" | "start" | "end" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "operatorAdd">, Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [] }> { readonly __BorderDirectional: unique symbol;

readonly top: upstream2.BorderSide;
readonly bottom: upstream2.BorderSide;
readonly isUniform: boolean;
readonly preferPaintInterior: boolean;
readonly dimensions: upstream3.EdgeInsetsGeometry;
readonly start: upstream2.BorderSide;
readonly end: upstream2.BorderSide;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream0.BoxBorder | null;
scale(t: number): BorderDirectional;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
}
defineObject("flax.core/flutter#type:BorderDirectional", ["top","bottom","isUniform","preferPaintInterior","dimensions","start","end"], [], _flaxBindingMethods("flax.core/flutter#type:BorderDirectional", "object", {"add":_flaxMemberParameters0,"scale":_flaxMemberParameters1,"lerpFrom":_flaxMemberParameters2,"lerpTo":_flaxMemberParameters3,"toString":_flaxMemberParameters4,"operatorAdd":_flaxMemberParameters5}, {}), []);
export function _BorderDirectionalFactory(options: { top?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined } = {}): BorderDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderDirectional", "", [{"name":"top","required":false,"positional":false},{"name":"start","required":false,"positional":false},{"name":"end","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as BorderDirectional;
}
export namespace _BorderDirectionalFactory { export function merge(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [] }>, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [] }>): BorderDirectional {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderDirectional.merge", [a, b]);
return _flaxResult as BorderDirectional;
} }
export namespace _BorderDirectionalFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [] }> | null, t: number): BorderDirectional | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderDirectional.lerp", [a, b, t]);
return _flaxResult as BorderDirectional | null;
} }
export const BorderDirectional: typeof _BorderDirectionalFactory & _FlaxInstanceType<BorderDirectional> & _FlaxDartType<BorderDirectional, readonly ["class", "flax.core/flutter#type:BorderDirectional", readonly [], false]> = _flaxBindInstanceType<BorderDirectional, typeof _BorderDirectionalFactory>(_BorderDirectionalFactory, "flax.core/flutter#type:BorderDirectional", ["flax.core/flutter#type:BoxBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _BorderDirectionalFactory & _FlaxInstanceType<BorderDirectional> & _FlaxDartType<BorderDirectional, readonly ["class", "flax.core/flutter#type:BorderDirectional", readonly [], false]>;
