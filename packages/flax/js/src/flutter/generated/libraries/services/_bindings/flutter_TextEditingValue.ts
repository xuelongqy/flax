// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
const _flaxMemberParameters0 = [{"name":"composing","required":false,"positional":false},{"name":"selection","required":false,"positional":false},{"name":"text","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"replacementRange","required":true,"positional":true},{"name":"replacementString","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextEditingValue extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }> { readonly __TextEditingValue: unique symbol;
readonly [_flaxDartTypeValue]: TextEditingValue;

readonly text: string;
readonly selection: upstream0.TextSelection;
readonly composing: upstream1.TextRange;
readonly isComposingRangeValid: boolean;
copyWith(options?: {composing?: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> | null | undefined; selection?: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> | null | undefined; text?: string | null | undefined}): TextEditingValue;
replaced(replacementRange: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, replacementString: string): TextEditingValue;
toJSON(): DartMap<string, unknown | null>;
toString(): string;
}
defineObject("flax.core/flutter#type:TextEditingValue", ["text","selection","composing","isComposingRangeValid"], [], _flaxBindingMethods("flax.core/flutter#type:TextEditingValue", "object", {"copyWith":_flaxMemberParameters0,"replaced":_flaxMemberParameters1,"toJSON":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, {}), []);
export function _TextEditingValueFactory(options: { text?: string | undefined; selection?: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> | undefined; composing?: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> | undefined } = {}): TextEditingValue {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingValue", "", [{"name":"text","required":false,"positional":false},{"name":"selection","required":false,"positional":false},{"name":"composing","required":false,"positional":false}], [], options) as TextEditingValue;
}
export namespace _TextEditingValueFactory {
export function fromJSON(encoded: DartMapInput<string, unknown | null, string, unknown | null>): TextEditingValue {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingValue", "fromJSON", [{"name":"encoded","required":true,"positional":true}], [encoded], {}) as TextEditingValue;
}
}
export namespace _TextEditingValueFactory { export declare const empty: TextEditingValue; }
_flaxDefineStaticGetters(_TextEditingValueFactory, "flax.core/flutter#read:TextEditingValue.", ["empty"]);
export const TextEditingValue: typeof _TextEditingValueFactory & _FlaxInstanceType<TextEditingValue> & _FlaxDartType<TextEditingValue, readonly ["class", "flax.core/flutter#type:TextEditingValue", readonly [], false]> = _flaxBindInstanceType<TextEditingValue, typeof _TextEditingValueFactory>(_TextEditingValueFactory, "flax.core/flutter#type:TextEditingValue", ["dart:core::Object"]) as typeof _TextEditingValueFactory & _FlaxInstanceType<TextEditingValue> & _FlaxDartType<TextEditingValue, readonly ["class", "flax.core/flutter#type:TextEditingValue", readonly [], false]>;
