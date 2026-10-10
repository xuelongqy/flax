// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"object","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StringBuffer extends Readonly<{ "__flaxBound:dart:core::StringBuffer": readonly [] }>, Readonly<{ "__flaxBound:dart:core::StringSink": readonly [] }> { readonly __StringBuffer: unique symbol;
readonly length: number;
write(object: unknown | null): void;
toString(): string;
}
defineObject("flax.core/flutter#type:StringBuffer", ["length"], [], _flaxBindingMethods("flax.core/flutter#type:StringBuffer", "object", {"write":_flaxMemberParameters0,"toString":_flaxMemberParameters1}), []);
function _StringBufferFactory(content?: {}): StringBuffer {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StringBuffer", "", [{"name":"content","required":false,"positional":true}], [content], {}) as StringBuffer;
}
export const StringBuffer: typeof _StringBufferFactory & _FlaxInstanceType<StringBuffer> = _flaxBindInstanceType<StringBuffer, typeof _StringBufferFactory>(_StringBufferFactory, "flax.core/flutter#type:StringBuffer", ["dart:core::Object","dart:core::StringSink"]);
