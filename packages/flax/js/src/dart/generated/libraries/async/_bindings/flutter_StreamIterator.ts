// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamIterator<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:dart:async::StreamIterator": readonly [T] }> { readonly __StreamIterator: unique symbol;
readonly current: T;
moveNext(): Promise<boolean>;
cancel(): Promise<unknown | null>;
}
defineObject("flax.core/flutter#type:StreamIterator", ["current"], [], _flaxBindingMethods("flax.core/flutter#type:StreamIterator", "object", {"moveNext":_flaxMemberParameters0,"cancel":_flaxMemberParameters0}), []);
function _StreamIteratorFactory<T extends unknown | null = unknown | null>(stream: upstream0.Stream<T>): StreamIterator<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamIterator", "", [{"name":"stream","required":true,"positional":true}], [stream], {}) as StreamIterator<T>;
}
export const StreamIterator: typeof _StreamIteratorFactory & _FlaxInstanceType<StreamIterator<any>> = _flaxBindInstanceType<StreamIterator<any>, typeof _StreamIteratorFactory>(_StreamIteratorFactory, "flax.core/flutter#type:StreamIterator", ["dart:core::Object"]);
