// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"input","required":true,"positional":true},{"name":"start","required":false,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"string","required":true,"positional":true},{"name":"start","required":false,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"input","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_RegExpMatch';
import '@flax/dart/core/_bindings/flutter_RegExpMatch';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Match';
import '@flax/dart/core/_bindings/flutter_Match';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RegExp extends Omit<upstream0.Pattern, typeof _flaxDartTypeValue | "pattern" | "isMultiLine" | "isCaseSensitive" | "isUnicode" | "isDotAll" | "allMatches" | "matchAsPrefix" | "firstMatch" | "hasMatch" | "stringMatch">, Readonly<{ "__flaxBound:dart:core::RegExp": readonly [] }> { readonly __RegExp: unique symbol;

readonly pattern: string;
readonly isMultiLine: boolean;
readonly isCaseSensitive: boolean;
readonly isUnicode: boolean;
readonly isDotAll: boolean;
allMatches(input: string, start?: number): DartIterable<upstream1.RegExpMatch>;
matchAsPrefix(string: string, start?: number): upstream2.Match | null;
firstMatch(input: string): upstream1.RegExpMatch | null;
hasMatch(input: string): boolean;
stringMatch(input: string): string | null;
}
defineObject("flax.core/flutter#type:RegExp", ["pattern","isMultiLine","isCaseSensitive","isUnicode","isDotAll"], [], _flaxBindingMethods("flax.core/flutter#type:RegExp", "object", {"allMatches":_flaxMemberParameters0,"matchAsPrefix":_flaxMemberParameters1,"firstMatch":_flaxMemberParameters2,"hasMatch":_flaxMemberParameters2,"stringMatch":_flaxMemberParameters2}, {}), []);
export function _RegExpFactory(source: string, options: { multiLine?: boolean | undefined; caseSensitive?: boolean | undefined; unicode?: boolean | undefined; dotAll?: boolean | undefined } = {}): RegExp {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:RegExp", "", [{"name":"source","required":true,"positional":true},{"name":"multiLine","required":false,"positional":false},{"name":"caseSensitive","required":false,"positional":false},{"name":"unicode","required":false,"positional":false},{"name":"dotAll","required":false,"positional":false}], [source], options) as RegExp;
}
export namespace _RegExpFactory { export function escape(text: string): string {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:RegExp.escape", [text]);
return _flaxResult as string;
} }
export const RegExp: typeof _RegExpFactory & _FlaxInstanceType<RegExp> & _FlaxDartType<RegExp, readonly ["class", "flax.core/flutter#type:RegExp", readonly [], false]> = _flaxBindInstanceType<RegExp, typeof _RegExpFactory>(_RegExpFactory, "flax.core/flutter#type:RegExp", ["dart:core::Object","flax.core/flutter#type:Pattern"]) as typeof _RegExpFactory & _FlaxInstanceType<RegExp> & _FlaxDartType<RegExp, readonly ["class", "flax.core/flutter#type:RegExp", readonly [], false]>;
