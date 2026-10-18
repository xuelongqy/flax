// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextDecoration extends Readonly<{ "__flaxBound:dart:ui::TextDecoration": readonly [] }> { readonly __TextDecoration: unique symbol;
readonly [_flaxDartTypeValue]: TextDecoration;

readonly maskValue: number;
contains(other: Readonly<{ "__flaxBound:dart:ui::TextDecoration": readonly [] }>): boolean;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:TextDecoration", ["maskValue"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:TextDecoration", "object", {"contains":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, {}), []);
export namespace _TextDecorationFactory {
export function combine(decorations: DartListInput<TextDecoration, Readonly<{ "__flaxBound:dart:ui::TextDecoration": readonly [] }>>): TextDecoration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:TextDecoration", "combine", [{"name":"decorations","required":true,"positional":true}], [decorations], {}) as TextDecoration;
}
}
export namespace _TextDecorationFactory { export declare const none: TextDecoration; }
export namespace _TextDecorationFactory { export declare const underline: TextDecoration; }
export namespace _TextDecorationFactory { export declare const overline: TextDecoration; }
export namespace _TextDecorationFactory { export declare const lineThrough: TextDecoration; }
_flaxDefineStaticGetters(_TextDecorationFactory, "flax.core/sdk_dart_ui#read:TextDecoration.", ["none","underline","overline","lineThrough"]);
export const TextDecoration: typeof _TextDecorationFactory & _FlaxInstanceType<TextDecoration> & _FlaxDartType<TextDecoration, readonly ["class", "flax.core/sdk_dart_ui#type:TextDecoration", readonly [], false]> = _flaxBindInstanceType<TextDecoration, typeof _TextDecorationFactory>(_TextDecorationFactory, "flax.core/sdk_dart_ui#type:TextDecoration", ["dart:core::Object"]) as typeof _TextDecorationFactory & _FlaxInstanceType<TextDecoration> & _FlaxDartType<TextDecoration, readonly ["class", "flax.core/sdk_dart_ui#type:TextDecoration", readonly [], false]>;
