// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"source","required":true,"positional":true},{"name":"cancelOnError","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamSink';
import '@flax/dart/async/_bindings/flutter_StreamSink';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamController<T extends unknown | null = unknown | null> extends upstream0.StreamSink<T>, upstream1.EventSink<T>, upstream2.Sink<T>, upstream3.StreamConsumer<T>, Readonly<{ "__flaxBound:dart:async::StreamController": readonly [T] }> { readonly __StreamController: unique symbol;
readonly done: Promise<unknown | null>;
get onListen(): (() => void) | null;
get onPause(): (() => void) | null;
get onResume(): (() => void) | null;
get onCancel(): (() => void | Promise<void>) | null;
readonly stream: upstream4.Stream<T>;
readonly sink: upstream0.StreamSink<T>;
readonly isClosed: boolean;
readonly isPaused: boolean;
readonly hasListener: boolean;
add(event: T): void;
addError(error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null): void;
close(): Promise<unknown | null>;
addStream(source: upstream4.Stream<T>, options?: {cancelOnError?: boolean | null | undefined}): Promise<unknown | null>;
set onListen(value: (() => void) | null);
set onPause(value: (() => void) | null);
set onResume(value: (() => void) | null);
set onCancel(value: (() => void | Promise<void>) | null);
}
defineObject("flax.core/flutter#type:StreamController", ["done","onListen","onPause","onResume","onCancel","stream","sink","isClosed","isPaused","hasListener"], ["onListen","onPause","onResume","onCancel"], _flaxBindingMethods("flax.core/flutter#type:StreamController", "object", {"add":_flaxMemberParameters0,"addError":_flaxMemberParameters1,"close":_flaxMemberParameters2,"addStream":_flaxMemberParameters3}), []);
function _StreamControllerFactory<T extends unknown | null = unknown | null>(options: { onListen?: (() => void) | null | undefined; onPause?: (() => void) | null | undefined; onResume?: (() => void) | null | undefined; onCancel?: (() => void | Promise<void>) | null | undefined; sync?: boolean | undefined } = {}): StreamController<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamController", "", [{"name":"onListen","required":false,"positional":false},{"name":"onPause","required":false,"positional":false},{"name":"onResume","required":false,"positional":false},{"name":"onCancel","required":false,"positional":false},{"name":"sync","required":false,"positional":false}], [], options) as StreamController<T>;
}
namespace _StreamControllerFactory {
export function broadcast<T extends unknown | null = unknown | null>(options: { onListen?: (() => void) | null | undefined; onCancel?: (() => void) | null | undefined; sync?: boolean | undefined } = {}): StreamController<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamController", "broadcast", [{"name":"onListen","required":false,"positional":false},{"name":"onCancel","required":false,"positional":false},{"name":"sync","required":false,"positional":false}], [], options) as StreamController<T>;
}
}
export const StreamController: typeof _StreamControllerFactory & _FlaxInstanceType<StreamController<any>> = _flaxBindInstanceType<StreamController<any>, typeof _StreamControllerFactory>(_StreamControllerFactory, "flax.core/flutter#type:StreamController", ["dart:core::Object","flax.core/flutter#type:StreamSink","flax.core/flutter#type:EventSink","flax.core/flutter#type:Sink","flax.core/flutter#type:StreamConsumer"]);
