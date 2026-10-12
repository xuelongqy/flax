// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"input","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface RegExp extends upstream0.Pattern, Readonly<{ "__flaxBound:dart:core::RegExp": readonly [] }> { readonly __RegExp: unique symbol;
readonly pattern: string;
readonly isMultiLine: boolean;
readonly isCaseSensitive: boolean;
readonly isUnicode: boolean;
readonly isDotAll: boolean;
hasMatch(input: string): boolean;
}
defineObject("flax.core/flutter#type:RegExp", ["pattern","isMultiLine","isCaseSensitive","isUnicode","isDotAll"], [], _flaxBindingMethods("flax.core/flutter#type:RegExp", "object", {"hasMatch":_flaxMemberParameters0}), []);
function _RegExpFactory(source: string, options: { multiLine?: boolean | undefined; caseSensitive?: boolean | undefined; unicode?: boolean | undefined; dotAll?: boolean | undefined } = {}): RegExp {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:RegExp", "", [{"name":"source","required":true,"positional":true},{"name":"multiLine","required":false,"positional":false},{"name":"caseSensitive","required":false,"positional":false},{"name":"unicode","required":false,"positional":false},{"name":"dotAll","required":false,"positional":false}], [source], options) as RegExp;
}
export const RegExp: typeof _RegExpFactory & _FlaxInstanceType<RegExp> = _flaxBindInstanceType<RegExp, typeof _RegExpFactory>(_RegExpFactory, "flax.core/flutter#type:RegExp", ["dart:core::Object","flax.core/flutter#type:Pattern"]);
