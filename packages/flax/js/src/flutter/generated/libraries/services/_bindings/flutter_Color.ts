// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"alpha","required":false,"positional":false},{"name":"blue","required":false,"positional":false},{"name":"green","required":false,"positional":false},{"name":"red","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"a","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"opacity","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"r","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"g","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"b","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Color extends Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> { readonly __Color: unique symbol;

readonly a: number;
readonly r: number;
readonly g: number;
readonly b: number;
readonly value: number;
readonly alpha: number;
readonly opacity: number;
readonly red: number;
readonly green: number;
readonly blue: number;
toARGB32(): number;
withValues(options?: {alpha?: number | null | undefined; blue?: number | null | undefined; green?: number | null | undefined; red?: number | null | undefined}): Color;
withAlpha(a: number): Color;
withOpacity(opacity: number): Color;
withRed(r: number): Color;
withGreen(g: number): Color;
withBlue(b: number): Color;
computeLuminance(): number;
toString(): string;
}
defineObject("flax.core/flutter#type:Color", ["a","r","g","b","value","alpha","opacity","red","green","blue"], [], _flaxBindingMethods("flax.core/flutter#type:Color", "object", {"toARGB32":_flaxMemberParameters0,"withValues":_flaxMemberParameters1,"withAlpha":_flaxMemberParameters2,"withOpacity":_flaxMemberParameters3,"withRed":_flaxMemberParameters4,"withGreen":_flaxMemberParameters5,"withBlue":_flaxMemberParameters6,"computeLuminance":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
export function _ColorFactory(value: number): Color {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Color", "", [{"name":"value","required":true,"positional":true}], [value], {}) as Color;
}
export namespace _ColorFactory {
export function from(options: { alpha: number; red: number; green: number; blue: number }): Color {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Color", "from", [{"name":"alpha","required":true,"positional":false},{"name":"red","required":true,"positional":false},{"name":"green","required":true,"positional":false},{"name":"blue","required":true,"positional":false}], [], options) as Color;
}
}
export namespace _ColorFactory {
export function fromARGB(a: number, r: number, g: number, b: number): Color {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Color", "fromARGB", [{"name":"a","required":true,"positional":true},{"name":"r","required":true,"positional":true},{"name":"g","required":true,"positional":true},{"name":"b","required":true,"positional":true}], [a, r, g, b], {}) as Color;
}
}
export namespace _ColorFactory {
export function fromRGBO(r: number, g: number, b: number, opacity: number): Color {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Color", "fromRGBO", [{"name":"r","required":true,"positional":true},{"name":"g","required":true,"positional":true},{"name":"b","required":true,"positional":true},{"name":"opacity","required":true,"positional":true}], [r, g, b, opacity], {}) as Color;
}
}
export namespace _ColorFactory { export function lerp(x: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, y: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, t: number): Color | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Color.lerp", [x, y, t]);
return _flaxResult as Color | null;
} }
export namespace _ColorFactory { export function alphaBlend(foreground: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, background: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>): Color {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Color.alphaBlend", [foreground, background]);
return _flaxResult as Color;
} }
export namespace _ColorFactory { export function getAlphaFromOpacity(opacity: number): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Color.getAlphaFromOpacity", [opacity]);
return _flaxResult as number;
} }
export const Color: typeof _ColorFactory & _FlaxInstanceType<Color> & _FlaxDartType<Color, readonly ["class", "flax.core/flutter#type:Color", readonly [], false]> = _flaxBindInstanceType<Color, typeof _ColorFactory>(_ColorFactory, "flax.core/flutter#type:Color", ["dart:core::Object"]) as typeof _ColorFactory & _FlaxInstanceType<Color> & _FlaxDartType<Color, readonly ["class", "flax.core/flutter#type:Color", readonly [], false]>;
