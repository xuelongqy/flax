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
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Border extends Omit<upstream0.BoxBorder, typeof _flaxDartTypeValue | "top" | "bottom" | "isUniform" | "preferPaintInterior" | "dimensions" | "right" | "left" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "operatorAdd">, Omit<upstream1.ShapeBorder, typeof _flaxDartTypeValue | "top" | "bottom" | "isUniform" | "preferPaintInterior" | "dimensions" | "right" | "left" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "operatorAdd">, Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> { readonly __Border: unique symbol;

readonly top: upstream2.BorderSide;
readonly bottom: upstream2.BorderSide;
readonly isUniform: boolean;
readonly preferPaintInterior: boolean;
readonly dimensions: upstream5.EdgeInsetsGeometry;
readonly right: upstream2.BorderSide;
readonly left: upstream2.BorderSide;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): Border | null;
scale(t: number): Border;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
}
defineObject("flax.core/flutter#type:Border", ["top","bottom","isUniform","preferPaintInterior","dimensions","right","left"], [], _flaxBindingMethods("flax.core/flutter#type:Border", "object", {"add":_flaxMemberParameters0,"scale":_flaxMemberParameters1,"lerpFrom":_flaxMemberParameters2,"lerpTo":_flaxMemberParameters3,"toString":_flaxMemberParameters4,"operatorAdd":_flaxMemberParameters5}, {}), []);
export function _BorderFactory(options: { top?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; right?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; left?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined } = {}): Border {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Border", "", [{"name":"top","required":false,"positional":false},{"name":"right","required":false,"positional":false},{"name":"bottom","required":false,"positional":false},{"name":"left","required":false,"positional":false}], [], options) as Border;
}
export namespace _BorderFactory {
export function fromBorderSide(side: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }>): Border {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Border", "fromBorderSide", [{"name":"side","required":true,"positional":true}], [side], {}) as Border;
}
}
export namespace _BorderFactory {
export function symmetric(options: { vertical?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; horizontal?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined } = {}): Border {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Border", "symmetric", [{"name":"vertical","required":false,"positional":false},{"name":"horizontal","required":false,"positional":false}], [], options) as Border;
}
}
export namespace _BorderFactory {
export function all(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; width?: number | undefined; style?: upstream4.BorderStyle | undefined; strokeAlign?: number | undefined } = {}): Border {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Border", "all", [{"name":"color","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"strokeAlign","required":false,"positional":false}], [], options) as Border;
}
}
export namespace _BorderFactory { export function merge(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }>, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }>): Border {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Border.merge", [a, b]);
return _flaxResult as Border;
} }
export namespace _BorderFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> | null, t: number): Border | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Border.lerp", [a, b, t]);
return _flaxResult as Border | null;
} }
export const Border: typeof _BorderFactory & _FlaxInstanceType<Border> & _FlaxDartType<Border, readonly ["class", "flax.core/flutter#type:Border", readonly [], false]> = _flaxBindInstanceType<Border, typeof _BorderFactory>(_BorderFactory, "flax.core/flutter#type:Border", ["flax.core/flutter#type:BoxBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _BorderFactory & _FlaxInstanceType<Border> & _FlaxDartType<Border, readonly ["class", "flax.core/flutter#type:Border", readonly [], false]>;
