// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FontWeight extends Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> { readonly __FontWeight: unique symbol;

readonly index: number;
readonly value: number;
toString(): string;
}
defineObject("flax.core/flutter#type:FontWeight", ["index","value"], [], _flaxBindingMethods("flax.core/flutter#type:FontWeight", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _FontWeightFactory(value: number): FontWeight {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FontWeight", "", [{"name":"value","required":true,"positional":true}], [value], {}) as FontWeight;
}
export namespace _FontWeightFactory { export declare const w100: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w100", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w100", []) });
export namespace _FontWeightFactory { export declare const w200: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w200", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w200", []) });
export namespace _FontWeightFactory { export declare const w300: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w300", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w300", []) });
export namespace _FontWeightFactory { export declare const w400: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w400", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w400", []) });
export namespace _FontWeightFactory { export declare const w500: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w500", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w500", []) });
export namespace _FontWeightFactory { export declare const w600: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w600", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w600", []) });
export namespace _FontWeightFactory { export declare const w700: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w700", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w700", []) });
export namespace _FontWeightFactory { export declare const w800: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w800", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w800", []) });
export namespace _FontWeightFactory { export declare const w900: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w900", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w900", []) });
export namespace _FontWeightFactory { export declare const normal: FontWeight; }
Object.defineProperty(_FontWeightFactory, "normal", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.normal", []) });
export namespace _FontWeightFactory { export declare const bold: FontWeight; }
Object.defineProperty(_FontWeightFactory, "bold", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.bold", []) });
export namespace _FontWeightFactory { export declare const values: DartList<FontWeight>; }
Object.defineProperty(_FontWeightFactory, "values", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.values", []) });
export namespace _FontWeightFactory { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null, b: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null, t: number): FontWeight | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:FontWeight.lerp", [a, b, t]);
return _flaxResult as FontWeight | null;
} }
export const FontWeight: typeof _FontWeightFactory & _FlaxInstanceType<FontWeight> & _FlaxDartType<FontWeight, readonly ["class", "flax.core/flutter#type:FontWeight", readonly [], false]> = _flaxBindInstanceType<FontWeight, typeof _FontWeightFactory>(_FontWeightFactory, "flax.core/flutter#type:FontWeight", ["dart:core::Object"]) as typeof _FontWeightFactory & _FlaxInstanceType<FontWeight> & _FlaxDartType<FontWeight, readonly ["class", "flax.core/flutter#type:FontWeight", readonly [], false]>;
