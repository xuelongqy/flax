// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"callback","required":true,"positional":true},{"name":"rescheduling","required":false,"positional":false},{"name":"scheduleNewFrame","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"id","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"reason","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"callback","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"callback","required":true,"positional":true},{"name":"debugLabel","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [{"name":"rawTimeStamp","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"entryPoint","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"callback","required":true,"positional":false},{"name":"name","required":true,"positional":false}] as const;
const _flaxMemberParameters9 = [{"name":"getter","required":true,"positional":false},{"name":"name","required":true,"positional":false},{"name":"setter","required":true,"positional":false}] as const;
const _flaxMemberParameters10 = [{"name":"eventKind","required":true,"positional":true},{"name":"eventData","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SchedulerBinding extends Readonly<{ "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [] }> { readonly __SchedulerBinding: unique symbol;

get schedulingStrategy(): ((options: { priority: number; scheduler: Readonly<{ "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [] }> }) => boolean);
readonly transientCallbackCount: number;
readonly endOfFrame: Promise<void>;
readonly hasScheduledFrame: boolean;
readonly framesEnabled: boolean;
readonly currentFrameTimeStamp: upstream0.Duration;
readonly currentSystemFrameTimeStamp: upstream0.Duration;
readonly locked: boolean;
initInstances(): void;
initServiceExtensions(): void;
unlocked(): void;
scheduleFrameCallback(callback: ((timeStamp: upstream0.Duration) => void), options?: {rescheduling?: boolean | undefined; scheduleNewFrame?: boolean | undefined}): number;
cancelFrameCallbackWithId(id: number): void;
debugAssertNoTransientCallbacks(reason: string): boolean;
debugAssertNoPendingPerformanceModeRequests(reason: string): boolean;
debugAssertNoTimeDilation(reason: string): boolean;
addPersistentFrameCallback(callback: ((timeStamp: upstream0.Duration) => void)): void;
addPostFrameCallback(callback: ((timeStamp: upstream0.Duration) => void), options?: {debugLabel?: string | undefined}): void;
ensureFrameCallbacksRegistered(): void;
ensureVisualUpdate(): void;
scheduleFrame(): void;
scheduleForcedFrame(): void;
scheduleWarmUpFrame(): void;
resetEpoch(): void;
handleBeginFrame(rawTimeStamp: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> | null): void;
handleDrawFrame(): void;
debugCheckZone(entryPoint: string): boolean;
lockEvents(callback: (() => Promise<void>)): Promise<void>;
reassembleApplication(): Promise<void>;
performReassemble(): Promise<void>;
registerSignalServiceExtension(options: {callback: (() => Promise<void>); name: string}): void;
registerBoolServiceExtension(options: {getter: (() => Promise<boolean>); name: string; setter: ((value: boolean) => Promise<void>)}): void;
registerNumericServiceExtension(options: {getter: (() => Promise<number>); name: string; setter: ((value: number) => Promise<void>)}): void;
postEvent(eventKind: string, eventData: DartMapInput<string, unknown | null, string, unknown | null>): void;
registerStringServiceExtension(options: {getter: (() => Promise<string>); name: string; setter: ((value: string) => Promise<void>)}): void;
registerServiceExtension(options: {callback: ((parameters: DartMap<string, string>) => Promise<DartMapInput<string, unknown | null, string, unknown | null>>); name: string}): void;
set schedulingStrategy(value: ((options: { priority: number; scheduler: SchedulerBinding }) => boolean));
}
defineObject("flax.core/flutter#type:SchedulerBinding", ["schedulingStrategy","transientCallbackCount","endOfFrame","hasScheduledFrame","framesEnabled","currentFrameTimeStamp","currentSystemFrameTimeStamp","locked"], ["schedulingStrategy"], _flaxBindingMethods("flax.core/flutter#type:SchedulerBinding", "object", {"initInstances":_flaxMemberParameters0,"initServiceExtensions":_flaxMemberParameters0,"unlocked":_flaxMemberParameters0,"scheduleFrameCallback":_flaxMemberParameters1,"cancelFrameCallbackWithId":_flaxMemberParameters2,"debugAssertNoTransientCallbacks":_flaxMemberParameters3,"debugAssertNoPendingPerformanceModeRequests":_flaxMemberParameters3,"debugAssertNoTimeDilation":_flaxMemberParameters3,"addPersistentFrameCallback":_flaxMemberParameters4,"addPostFrameCallback":_flaxMemberParameters5,"ensureFrameCallbacksRegistered":_flaxMemberParameters0,"ensureVisualUpdate":_flaxMemberParameters0,"scheduleFrame":_flaxMemberParameters0,"scheduleForcedFrame":_flaxMemberParameters0,"scheduleWarmUpFrame":_flaxMemberParameters0,"resetEpoch":_flaxMemberParameters0,"handleBeginFrame":_flaxMemberParameters6,"handleDrawFrame":_flaxMemberParameters0,"debugCheckZone":_flaxMemberParameters7,"lockEvents":_flaxMemberParameters4,"reassembleApplication":_flaxMemberParameters0,"performReassemble":_flaxMemberParameters0,"registerSignalServiceExtension":_flaxMemberParameters8,"registerBoolServiceExtension":_flaxMemberParameters9,"registerNumericServiceExtension":_flaxMemberParameters9,"postEvent":_flaxMemberParameters10,"registerStringServiceExtension":_flaxMemberParameters9,"registerServiceExtension":_flaxMemberParameters8}, {}), []);
export namespace _SchedulerBindingFactory { export declare const instance: SchedulerBinding; }
Object.defineProperty(_SchedulerBindingFactory, "instance", { get: () => invokeTopLevel("flax.core/flutter#read:SchedulerBinding.instance", []) });
export namespace _SchedulerBindingFactory { export function debugPrintTransientCallbackRegistrationStack(): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:SchedulerBinding.debugPrintTransientCallbackRegistrationStack", []);
} }
export const SchedulerBinding: typeof _SchedulerBindingFactory & _FlaxInstanceType<SchedulerBinding> & _FlaxDartType<SchedulerBinding, readonly ["class", "flax.core/flutter#type:SchedulerBinding", readonly [], false]> = _flaxBindInstanceType<SchedulerBinding, typeof _SchedulerBindingFactory>(_SchedulerBindingFactory, "flax.core/flutter#type:SchedulerBinding", ["package:flutter/src/foundation/binding.dart::BindingBase","dart:core::Object"]) as typeof _SchedulerBindingFactory & _FlaxInstanceType<SchedulerBinding> & _FlaxDartType<SchedulerBinding, readonly ["class", "flax.core/flutter#type:SchedulerBinding", readonly [], false]>;
