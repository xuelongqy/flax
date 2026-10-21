// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import { _flaxMemberParameters162, _flaxMemberParameters163 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsActionEvent extends Readonly<{ "__flaxBound:dart:ui::SemanticsActionEvent": readonly [] }> { readonly __SemanticsActionEvent: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsActionEvent;

readonly type: upstream0.SemanticsAction;
readonly viewId: number;
readonly nodeId: number;
readonly arguments: unknown | null;
copyWith(options?: {arguments?: unknown | null | undefined; nodeId?: number | null | undefined; type?: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }> | null | undefined; viewId?: number | null | undefined}): SemanticsActionEvent;
}
defineObject("flax.core/sdk_dart_ui#type:SemanticsActionEvent", ["type","viewId","nodeId","arguments"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:SemanticsActionEvent", "object", {"copyWith":_flaxMemberParameters162}, {}), []);
export function _SemanticsActionEventFactory(options: { type: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>; viewId: number; nodeId: number; arguments?: unknown | null | undefined }): SemanticsActionEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:SemanticsActionEvent", "", [{"name":"type","required":true},{"name":"viewId","required":true},{"name":"nodeId","required":true},{"name":"arguments"}], [], options) as SemanticsActionEvent;
}
const _SemanticsActionEventProxy = {type: "flax.core/sdk_dart_ui#type:SemanticsActionEvent", parameters: _flaxMemberParameters163, constructors: {"": _flaxMemberParameters163}, methods: {"copyWith":_flaxMemberParameters162}, getters: ["type","viewId","nodeId","arguments"], setters: [], contextMembers: [], superMembers: ["get:type","get:viewId","get:nodeId","get:arguments","copyWith"]} as const;
export interface _SemanticsActionEventNative extends SemanticsActionEvent {
readonly [_flaxDartTypeValue]: _SemanticsActionEventNative;

copyWith(options?: {type?: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }> | null | undefined; viewId?: number | null | undefined; nodeId?: number | null | undefined; arguments?: unknown | null | undefined}): SemanticsActionEvent;
get type(): upstream0.SemanticsAction;
get viewId(): number;
get nodeId(): number;
get arguments(): unknown | null;
}
export abstract class _SemanticsActionEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsActionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SemanticsActionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsActionEvent", readonly [], false];
constructor(options: {type: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>; viewId: number; nodeId: number; arguments?: unknown | null | undefined}) { super(_SemanticsActionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SemanticsActionEventNative.prototype, _SemanticsActionEventProxy);
export namespace _SemanticsActionEventFactory { export function implement(args: [options: {type: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>; viewId: number; nodeId: number; arguments?: unknown | null | undefined}], implementation: {}): SemanticsActionEvent {
return constructProxy(_SemanticsActionEventProxy, args, implementation) as SemanticsActionEvent; } }
const _SemanticsActionEventBinding = _flaxProxyFactory(_SemanticsActionEventFactory, _SemanticsActionEventNative) as unknown as typeof _SemanticsActionEventFactory & (new(options: {type: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>; viewId: number; nodeId: number; arguments?: unknown | null | undefined}) => _SemanticsActionEventNative);
export const SemanticsActionEvent: typeof _SemanticsActionEventBinding & _FlaxInstanceType<SemanticsActionEvent> & _FlaxDartType<SemanticsActionEvent, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsActionEvent", readonly [], false]> = _flaxBindInstanceType<SemanticsActionEvent, typeof _SemanticsActionEventBinding>(_SemanticsActionEventBinding, "flax.core/sdk_dart_ui#type:SemanticsActionEvent", ["dart:core::Object"]) as typeof _SemanticsActionEventBinding & _FlaxInstanceType<SemanticsActionEvent> & _FlaxDartType<SemanticsActionEvent, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsActionEvent", readonly [], false]>;
