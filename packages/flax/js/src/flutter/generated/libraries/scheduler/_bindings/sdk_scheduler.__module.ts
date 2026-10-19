// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
export const sdk_schedulerBindingModule = _flaxInstallBindingModule("flax.core/sdk_scheduler", 24, Object.freeze(["engine-type-handles","generic-call-types","generic-member-views","inherited-binding-members","instance-checks","native-async-objects","native-functions","native-navigation-objects","native-widget-proxies","shared-static-readers"]) as readonly string[]);
const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineDartTypes: _flaxDefineDartTypes, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = sdk_schedulerBindingModule;
export { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel };
import type { MemberParameter as _FlaxMemberParameter } from '@flax/core/bindings';
export const _flaxMemberParameters0: readonly _FlaxMemberParameter[] = [] as const;
export const _flaxMemberParameters1: readonly _FlaxMemberParameter[] = [{"name":"offset","required":true,"positional":true}] as const;
export const _flaxMemberParameters2: readonly _FlaxMemberParameter[] = [{"name":"name","required":true,"positional":true}] as const;
export const _flaxMemberParameters3: readonly _FlaxMemberParameter[] = [{"name":"canceled"}] as const;
export const _flaxMemberParameters4: readonly _FlaxMemberParameter[] = [{"name":"rescheduling"}] as const;
export const _flaxMemberParameters5: readonly _FlaxMemberParameter[] = [{"name":"originalTicker","required":true,"positional":true}] as const;
export const _flaxMemberParameters6: readonly _FlaxMemberParameter[] = [{"name":"debugIncludeStack"}] as const;
export const _flaxMemberParameters7: readonly _FlaxMemberParameter[] = [{"name":"_onTick","required":true,"positional":true},{"name":"debugLabel"}] as const;
export const _flaxMemberParameters8: readonly _FlaxMemberParameter[] = [{"name":"ticker","positional":true}] as const;
export const _flaxMemberParameters9: readonly _FlaxMemberParameter[] = [{"name":"callback","required":true,"positional":true}] as const;
export const _flaxMemberParameters10: readonly _FlaxMemberParameter[] = [{"name":"onError","required":true,"positional":true},{"name":"test"}] as const;
export const _flaxMemberParameters11: readonly _FlaxMemberParameter[] = [{"name":"onValue","required":true,"positional":true},{"name":"onError"}] as const;
export const _flaxMemberParameters12: readonly _FlaxMemberParameter[] = [{"name":"timeLimit","required":true,"positional":true},{"name":"onTimeout"}] as const;
export const _flaxMemberParameters13: readonly _FlaxMemberParameter[] = [{"name":"action","required":true,"positional":true}] as const;
