// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"handleData","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"handleError","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"handleDone","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"resumeSignal","required":false,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"futureValue","required":false,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamSubscription<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:dart:async::StreamSubscription": readonly [T] }> { readonly __StreamSubscription: unique symbol;
readonly isPaused: boolean;
cancel(): Promise<void>;
onData(handleData: ((data: T) => void) | null): void;
onError(handleError: ((p0: {}, p1?: upstream0.StackTrace) => void) | null): void;
onDone(handleDone: (() => void) | null): void;
pause(resumeSignal?: Promise<void> | null): void;
resume(): void;
asFuture<E extends unknown | null = unknown | null>(futureValue?: E | null): Promise<E>;
}
defineObject("flax.core/flutter#type:StreamSubscription", ["isPaused"], [], _flaxBindingMethods("flax.core/flutter#type:StreamSubscription", "object", {"cancel":_flaxMemberParameters0,"onData":_flaxMemberParameters1,"onError":_flaxMemberParameters2,"onDone":_flaxMemberParameters3,"pause":_flaxMemberParameters4,"resume":_flaxMemberParameters0,"asFuture":_flaxMemberParameters5}), []);
export const StreamSubscription: object & _FlaxInstanceType<StreamSubscription<any>> = _flaxBindInstanceType<StreamSubscription<any>, object>({}, "flax.core/flutter#type:StreamSubscription", ["dart:core::Object"]);
