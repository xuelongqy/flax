// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true},{"name":"reversed","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"other","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShapeBorder extends Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __ShapeBorder: unique symbol;

readonly dimensions: upstream0.EdgeInsetsGeometry;
readonly preferPaintInterior: boolean;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): ShapeBorder | null;
scale(t: number): ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): ShapeBorder | null;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): ShapeBorder;
}
defineObject("flax.core/flutter#type:ShapeBorder", ["dimensions","preferPaintInterior"], [], _flaxBindingMethods("flax.core/flutter#type:ShapeBorder", "object", {"add":_flaxMemberParameters0,"scale":_flaxMemberParameters1,"lerpFrom":_flaxMemberParameters2,"lerpTo":_flaxMemberParameters3,"toString":_flaxMemberParameters4,"operatorAdd":_flaxMemberParameters5}, {}), []);
export namespace _ShapeBorderFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): ShapeBorder | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:ShapeBorder.lerp", [a, b, t]);
return _flaxResult as ShapeBorder | null;
} }
export const ShapeBorder: typeof _ShapeBorderFactory & _FlaxInstanceType<ShapeBorder> & _FlaxDartType<ShapeBorder, readonly ["class", "flax.core/flutter#type:ShapeBorder", readonly [], false]> = _flaxBindInstanceType<ShapeBorder, typeof _ShapeBorderFactory>(_ShapeBorderFactory, "flax.core/flutter#type:ShapeBorder", ["dart:core::Object"]) as typeof _ShapeBorderFactory & _FlaxInstanceType<ShapeBorder> & _FlaxDartType<ShapeBorder, readonly ["class", "flax.core/flutter#type:ShapeBorder", readonly [], false]>;
