// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"color","required":false,"positional":false},{"name":"strokeAlign","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"width","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BorderSide extends Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __BorderSide: unique symbol;

readonly color: upstream0.Color;
readonly width: number;
readonly style: upstream1.BorderStyle;
readonly strokeAlign: number;
readonly strokeInset: number;
readonly strokeOutset: number;
readonly strokeOffset: number;
copyWith(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; strokeAlign?: number | null | undefined; style?: upstream1.BorderStyle | null | undefined; width?: number | null | undefined}): BorderSide;
scale(t: number): BorderSide;
toStringShort(): string;
}
defineObject("flax.core/flutter#type:BorderSide", ["color","width","style","strokeAlign","strokeInset","strokeOutset","strokeOffset"], [], _flaxBindingMethods("flax.core/flutter#type:BorderSide", "object", {"copyWith":_flaxMemberParameters0,"scale":_flaxMemberParameters1,"toStringShort":_flaxMemberParameters2}, {}), []);
export function _BorderSideFactory(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; width?: number | undefined; style?: upstream1.BorderStyle | undefined; strokeAlign?: number | undefined } = {}): BorderSide {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderSide", "", [{"name":"color","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"strokeAlign","required":false,"positional":false}], [], options) as BorderSide;
}
export namespace _BorderSideFactory { export declare const none: BorderSide; }
Object.defineProperty(_BorderSideFactory, "none", { get: () => invokeTopLevel("flax.core/flutter#read:BorderSide.none", []) });
export namespace _BorderSideFactory { export declare const strokeAlignInside: number; }
Object.defineProperty(_BorderSideFactory, "strokeAlignInside", { get: () => invokeTopLevel("flax.core/flutter#read:BorderSide.strokeAlignInside", []) });
export namespace _BorderSideFactory { export declare const strokeAlignCenter: number; }
Object.defineProperty(_BorderSideFactory, "strokeAlignCenter", { get: () => invokeTopLevel("flax.core/flutter#read:BorderSide.strokeAlignCenter", []) });
export namespace _BorderSideFactory { export declare const strokeAlignOutside: number; }
Object.defineProperty(_BorderSideFactory, "strokeAlignOutside", { get: () => invokeTopLevel("flax.core/flutter#read:BorderSide.strokeAlignOutside", []) });
export namespace _BorderSideFactory { export function merge(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }>, b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }>): BorderSide {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderSide.merge", [a, b]);
return _flaxResult as BorderSide;
} }
export namespace _BorderSideFactory { export function canMerge(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }>, b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }>): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderSide.canMerge", [a, b]);
return _flaxResult as boolean;
} }
export namespace _BorderSideFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }>, b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }>, t: number): BorderSide {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:BorderSide.lerp", [a, b, t]);
return _flaxResult as BorderSide;
} }
export const BorderSide: typeof _BorderSideFactory & _FlaxInstanceType<BorderSide> & _FlaxDartType<BorderSide, readonly ["class", "flax.core/flutter#type:BorderSide", readonly [], false]> = _flaxBindInstanceType<BorderSide, typeof _BorderSideFactory>(_BorderSideFactory, "flax.core/flutter#type:BorderSide", ["dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _BorderSideFactory & _FlaxInstanceType<BorderSide> & _FlaxDartType<BorderSide, readonly ["class", "flax.core/flutter#type:BorderSide", readonly [], false]>;
