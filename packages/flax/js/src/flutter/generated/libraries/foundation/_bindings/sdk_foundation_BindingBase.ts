// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"entryPoint","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"callback","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"callback","required":true,"positional":false},{"name":"name","required":true,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"getter","required":true,"positional":false},{"name":"name","required":true,"positional":false},{"name":"setter","required":true,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"eventKind","required":true,"positional":true},{"name":"eventData","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BindingBase extends Readonly<{ "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [] }> { readonly __BindingBase: unique symbol;
readonly [_flaxDartTypeValue]: BindingBase;

}
defineObject("flax.core/sdk_foundation#type:BindingBase", ["window","platformDispatcher","locked"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:BindingBase", "object", {"initInstances":_flaxMemberParameters0,"debugCheckZone":_flaxMemberParameters1,"initServiceExtensions":_flaxMemberParameters0,"lockEvents":_flaxMemberParameters2,"unlocked":_flaxMemberParameters0,"reassembleApplication":_flaxMemberParameters0,"performReassemble":_flaxMemberParameters0,"registerSignalServiceExtension":_flaxMemberParameters3,"registerBoolServiceExtension":_flaxMemberParameters4,"registerNumericServiceExtension":_flaxMemberParameters4,"postEvent":_flaxMemberParameters5,"registerStringServiceExtension":_flaxMemberParameters4,"registerServiceExtension":_flaxMemberParameters3,"toString":_flaxMemberParameters0}, {}), []);
const _BindingBaseProxy = {type: "flax.core/sdk_foundation#type:BindingBase", parameters: [], constructors: {"":[]}, methods: {"initInstances":_flaxMemberParameters0,"debugCheckZone":_flaxMemberParameters1,"initServiceExtensions":_flaxMemberParameters0,"lockEvents":_flaxMemberParameters2,"unlocked":_flaxMemberParameters0,"reassembleApplication":_flaxMemberParameters0,"performReassemble":_flaxMemberParameters0,"registerSignalServiceExtension":_flaxMemberParameters3,"registerBoolServiceExtension":_flaxMemberParameters4,"registerNumericServiceExtension":_flaxMemberParameters4,"postEvent":_flaxMemberParameters5,"registerStringServiceExtension":_flaxMemberParameters4,"registerServiceExtension":_flaxMemberParameters3,"toString":_flaxMemberParameters0}, getters: ["window","platformDispatcher","locked"], setters: [], contextMembers: [], superMembers: ["get:window","get:platformDispatcher","get:locked","initInstances","debugCheckZone","initServiceExtensions","lockEvents","unlocked","reassembleApplication","performReassemble","registerSignalServiceExtension","registerBoolServiceExtension","registerNumericServiceExtension","postEvent","registerStringServiceExtension","registerServiceExtension","toString"]} as const;
export interface BindingBase {
readonly [_flaxDartTypeValue]: BindingBase;

initInstances(): void;
debugCheckZone(entryPoint: string): boolean;
initServiceExtensions(): void;
lockEvents(callback: (() => Promise<void>)): Promise<void>;
unlocked(): void;
reassembleApplication(): Promise<void>;
performReassemble(): Promise<void>;
registerSignalServiceExtension(options: {name: string; callback: (() => Promise<void>)}): void;
registerBoolServiceExtension(options: {name: string; getter: (() => Promise<boolean>); setter: ((value: boolean) => Promise<void>)}): void;
registerNumericServiceExtension(options: {name: string; getter: (() => Promise<number>); setter: ((value: number) => Promise<void>)}): void;
postEvent(eventKind: string, eventData: DartMapInput<string, unknown | null, string, unknown | null>): void;
registerStringServiceExtension(options: {name: string; getter: (() => Promise<string>); setter: ((value: string) => Promise<void>)}): void;
registerServiceExtension(options: {name: string; callback: ((parameters: DartMap<string, string>) => Promise<DartMapInput<string, unknown | null, string, unknown | null>>)}): void;
toString(): string;
get window(): upstream0.SingletonFlutterWindow;
get platformDispatcher(): upstream1.PlatformDispatcher;
get locked(): boolean;
}
export abstract class BindingBase extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BindingBase>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BindingBase;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:BindingBase", readonly [], false];
constructor() { super(_BindingBaseProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BindingBase.prototype, _BindingBaseProxy);
export namespace BindingBase { export function implement(args: [], implementation: {}): BindingBase {
return constructProxy(_BindingBaseProxy, args, implementation) as BindingBase; } }
export namespace BindingBase { export function setDebugZoneErrorsAreFatal(value: boolean): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:BindingBase.debugZoneErrorsAreFatal%3D", [value]);
} }
export namespace BindingBase { export declare const debugZoneErrorsAreFatal: boolean; }
_flaxDefineStaticGetters(BindingBase, "flax.core/sdk_foundation#read:BindingBase.", ["debugZoneErrorsAreFatal"]);
export namespace BindingBase { function _flaxDefault_checkInstance<T extends BindingBase = BindingBase>(instance: (T | DartInput<T>) | null): T {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:BindingBase.checkInstance", [instance]);
return _flaxResult as T;
}
export const checkInstance = _flaxDefineDartCallTypes(_flaxDefault_checkInstance, {"id":"flax.core/sdk_foundation#function:BindingBase.checkInstance","parameters":[{"name":"instance","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_checkInstance, _FlaxSignature0>;
}
export namespace BindingBase { export function debugBindingType(): upstream2.Type | null {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:BindingBase.debugBindingType", []);
return _flaxResult as upstream2.Type | null;
} }
_flaxBindInstanceType<BindingBase, typeof BindingBase>(BindingBase, "flax.core/sdk_foundation#type:BindingBase", ["dart:core::Object"]);
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [BindingBase] ? (instance: (_Selected0 | DartInput<_Selected0>) | null) => _Selected0 : never : never; }
