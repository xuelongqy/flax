// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"handleData","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"handleError","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"handleDone","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"resumeSignal","required":false,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"futureValue","required":false,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamSubscription<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:dart:async::StreamSubscription": readonly [T] }> { readonly __StreamSubscription: unique symbol;
readonly [_flaxDartMethodCases]?: {asFuture: _FlaxSignature1<T>;};
readonly isPaused: boolean;
cancel(): Promise<void>;
onData(handleData: ((data: T) => void) | null): void;
onError(handleError: ((p0: {}, p1?: upstream0.StackTrace) => void) | null): void;
onDone(handleDone: (() => void) | null): void;
pause(resumeSignal?: Promise<unknown> | null): void;
resume(): void;
asFuture<E extends unknown | null = unknown | null>(futureValue?: (E | _FlaxDartOutput<E>) | null): Promise<_FlaxDartOutput<E>>;
}
defineObject("flax.core/flutter#type:StreamSubscription", ["isPaused"], [], _flaxBindingMethods("flax.core/flutter#type:StreamSubscription", "object", {"cancel":_flaxMemberParameters0,"onData":_flaxMemberParameters1,"onError":_flaxMemberParameters2,"onDone":_flaxMemberParameters3,"pause":_flaxMemberParameters4,"resume":_flaxMemberParameters0,"asFuture":_flaxMemberParameters5}, {"asFuture":{"id":"asFuture","parameters":[{"name":"futureValue","required":false,"positional":true}]}}), []);
export const StreamSubscription: object & _FlaxInstanceType<StreamSubscription<unknown | null>> & _FlaxDartType<StreamSubscription<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamSubscription", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<StreamSubscription<unknown | null>, object>({}, "flax.core/flutter#type:StreamSubscription", ["dart:core::Object"]) as object & _FlaxInstanceType<StreamSubscription<unknown | null>> & _FlaxDartType<StreamSubscription<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamSubscription", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(StreamSubscription, "flax.core/flutter#type:StreamSubscription", {"category":"object","constructors":{}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: StreamSubscription<_Selected0>;} & _FlaxInstanceType<StreamSubscription<_Selected0>> & _FlaxDartType<StreamSubscription<_Selected0>> : never : never; }
interface _FlaxSignature1<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (futureValue?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<_Selected0> : never : never; }
