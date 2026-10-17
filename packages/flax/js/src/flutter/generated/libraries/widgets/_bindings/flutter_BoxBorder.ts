// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true},{"name":"reversed","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"other","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxBorder extends Omit<upstream0.ShapeBorder, typeof _flaxDartTypeValue | "dimensions" | "preferPaintInterior" | "top" | "bottom" | "isUniform" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "operatorAdd">, Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> { readonly __BoxBorder: unique symbol;

readonly dimensions: upstream4.EdgeInsetsGeometry;
readonly preferPaintInterior: boolean;
readonly top: upstream1.BorderSide;
readonly bottom: upstream1.BorderSide;
readonly isUniform: boolean;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): BoxBorder | null;
scale(t: number): upstream0.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream0.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream0.ShapeBorder | null;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream0.ShapeBorder;
}
defineObject("flax.core/flutter#type:BoxBorder", ["dimensions","preferPaintInterior","top","bottom","isUniform"], [], _flaxBindingMethods("flax.core/flutter#type:BoxBorder", "object", {"add":_flaxMemberParameters0,"scale":_flaxMemberParameters1,"lerpFrom":_flaxMemberParameters2,"lerpTo":_flaxMemberParameters3,"toString":_flaxMemberParameters4,"operatorAdd":_flaxMemberParameters5}, {}), []);
export namespace _BoxBorderFactory {
export function fromLTRB(options: { top?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; right?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; left?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined } = {}): BoxBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxBorder", "fromLTRB", [{"name":"top","required":false,"positional":false},{"name":"right","required":false,"positional":false},{"name":"bottom","required":false,"positional":false},{"name":"left","required":false,"positional":false}], [], options) as BoxBorder;
}
}
export namespace _BoxBorderFactory {
export function all(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; width?: number | undefined; style?: upstream3.BorderStyle | undefined; strokeAlign?: number | undefined } = {}): BoxBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxBorder", "all", [{"name":"color","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"strokeAlign","required":false,"positional":false}], [], options) as BoxBorder;
}
}
export namespace _BoxBorderFactory {
export function fromBorderSide(side: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }>): BoxBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxBorder", "fromBorderSide", [{"name":"side","required":true,"positional":true}], [side], {}) as BoxBorder;
}
}
export namespace _BoxBorderFactory {
export function symmetric(options: { vertical?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; horizontal?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined } = {}): BoxBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxBorder", "symmetric", [{"name":"vertical","required":false,"positional":false},{"name":"horizontal","required":false,"positional":false}], [], options) as BoxBorder;
}
}
export namespace _BoxBorderFactory {
export function fromSTEB(options: { top?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined } = {}): BoxBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxBorder", "fromSTEB", [{"name":"top","required":false,"positional":false},{"name":"start","required":false,"positional":false},{"name":"end","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as BoxBorder;
}
}
export namespace _BoxBorderFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> | null, t: number): BoxBorder | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BoxBorder.lerp", [a, b, t]);
return _flaxResult as BoxBorder | null;
} }
export const BoxBorder: typeof _BoxBorderFactory & _FlaxInstanceType<BoxBorder> & _FlaxDartType<BoxBorder, readonly ["class", "flax.core/flutter#type:BoxBorder", readonly [], false]> = _flaxBindInstanceType<BoxBorder, typeof _BoxBorderFactory>(_BoxBorderFactory, "flax.core/flutter#type:BoxBorder", ["flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _BoxBorderFactory & _FlaxInstanceType<BoxBorder> & _FlaxDartType<BoxBorder, readonly ["class", "flax.core/flutter#type:BoxBorder", readonly [], false]>;
