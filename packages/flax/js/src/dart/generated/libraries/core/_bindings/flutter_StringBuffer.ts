// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"object","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"charCode","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"objects","required":true,"positional":true},{"name":"separator","required":false,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"obj","required":false,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StringBuffer extends Readonly<{ "__flaxBound:dart:core::StringBuffer": readonly [] }>, Readonly<{ "__flaxBound:dart:core::StringSink": readonly [] }> { readonly __StringBuffer: unique symbol;

readonly length: number;
readonly isEmpty: boolean;
readonly isNotEmpty: boolean;
write(object: unknown | null): void;
writeCharCode(charCode: number): void;
writeAll(objects: DartIterableInput<unknown | null, unknown | null>, separator?: string): void;
writeln(obj?: unknown | null): void;
clear(): void;
toString(): string;
}
defineObject("flax.core/flutter#type:StringBuffer", ["length","isEmpty","isNotEmpty"], [], _flaxBindingMethods("flax.core/flutter#type:StringBuffer", "object", {"write":_flaxMemberParameters0,"writeCharCode":_flaxMemberParameters1,"writeAll":_flaxMemberParameters2,"writeln":_flaxMemberParameters3,"clear":_flaxMemberParameters4,"toString":_flaxMemberParameters4}, {}), []);
export function _StringBufferFactory(content?: {}): StringBuffer {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StringBuffer", "", [{"name":"content","required":false,"positional":true}], [content], {}) as StringBuffer;
}
export const StringBuffer: typeof _StringBufferFactory & _FlaxInstanceType<StringBuffer> & _FlaxDartType<StringBuffer, readonly ["class", "flax.core/flutter#type:StringBuffer", readonly [], false]> = _flaxBindInstanceType<StringBuffer, typeof _StringBufferFactory>(_StringBufferFactory, "flax.core/flutter#type:StringBuffer", ["dart:core::Object","dart:core::StringSink"]) as typeof _StringBufferFactory & _FlaxInstanceType<StringBuffer> & _FlaxDartType<StringBuffer, readonly ["class", "flax.core/flutter#type:StringBuffer", readonly [], false]>;
