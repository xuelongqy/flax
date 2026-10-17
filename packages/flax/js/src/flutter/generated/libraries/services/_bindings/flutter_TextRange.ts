// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"text","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextRange extends Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> { readonly __TextRange: unique symbol;

readonly start: number;
readonly end: number;
readonly isValid: boolean;
readonly isCollapsed: boolean;
readonly isNormalized: boolean;
textBefore(text: string): string;
textAfter(text: string): string;
textInside(text: string): string;
toString(): string;
}
defineObject("flax.core/flutter#type:TextRange", ["start","end","isValid","isCollapsed","isNormalized"], [], _flaxBindingMethods("flax.core/flutter#type:TextRange", "object", {"textBefore":_flaxMemberParameters0,"textAfter":_flaxMemberParameters0,"textInside":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, {}), []);
export function _TextRangeFactory(options: { start: number; end: number }): TextRange {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextRange", "", [{"name":"start","required":true,"positional":false},{"name":"end","required":true,"positional":false}], [], options) as TextRange;
}
export namespace _TextRangeFactory {
export function collapsed(offset: number): TextRange {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextRange", "collapsed", [{"name":"offset","required":true,"positional":true}], [offset], {}) as TextRange;
}
}
export namespace _TextRangeFactory { export declare const empty: TextRange; }
Object.defineProperty(_TextRangeFactory, "empty", { get: () => invokeTopLevel("flax.core/flutter#read:TextRange.empty", []) });
export const TextRange: typeof _TextRangeFactory & _FlaxInstanceType<TextRange> & _FlaxDartType<TextRange, readonly ["class", "flax.core/flutter#type:TextRange", readonly [], false]> = _flaxBindInstanceType<TextRange, typeof _TextRangeFactory>(_TextRangeFactory, "flax.core/flutter#type:TextRange", ["dart:core::Object"]) as typeof _TextRangeFactory & _FlaxInstanceType<TextRange> & _FlaxDartType<TextRange, readonly ["class", "flax.core/flutter#type:TextRange", readonly [], false]>;
