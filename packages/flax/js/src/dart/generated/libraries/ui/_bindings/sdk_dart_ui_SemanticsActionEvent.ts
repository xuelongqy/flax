// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
const _flaxMemberParameters0 = [{"name":"arguments"},{"name":"nodeId"},{"name":"type"},{"name":"viewId"}] as const;
const _flaxMemberParameters1 = [{"name":"type","required":true},{"name":"viewId","required":true},{"name":"nodeId","required":true},{"name":"arguments"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsActionEvent extends Readonly<{ "__flaxBound:dart:ui::SemanticsActionEvent": readonly [] }> { readonly __SemanticsActionEvent: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsActionEvent;

}
defineObject("flax.core/sdk_dart_ui#type:SemanticsActionEvent", ["type","viewId","nodeId","arguments"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:SemanticsActionEvent", "object", {"copyWith":_flaxMemberParameters0}, {}), []);
const _SemanticsActionEventProxy = {type: "flax.core/sdk_dart_ui#type:SemanticsActionEvent", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"copyWith":_flaxMemberParameters0}, getters: ["type","viewId","nodeId","arguments"], setters: [], contextMembers: [], superMembers: ["get:type","get:viewId","get:nodeId","get:arguments","copyWith"]} as const;
export interface SemanticsActionEvent {
readonly [_flaxDartTypeValue]: SemanticsActionEvent;

copyWith(options?: {type?: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }> | null | undefined; viewId?: number | null | undefined; nodeId?: number | null | undefined; arguments?: unknown | null | undefined}): SemanticsActionEvent;
get type(): upstream0.SemanticsAction;
get viewId(): number;
get nodeId(): number;
get arguments(): unknown | null;
}
export abstract class SemanticsActionEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsActionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SemanticsActionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsActionEvent", readonly [], false];
constructor(options: {type: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>; viewId: number; nodeId: number; arguments?: unknown | null | undefined}) { super(_SemanticsActionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SemanticsActionEvent.prototype, _SemanticsActionEventProxy);
export namespace SemanticsActionEvent { export function implement(args: [options: {type: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>; viewId: number; nodeId: number; arguments?: unknown | null | undefined}], implementation: {}): SemanticsActionEvent {
return constructProxy(_SemanticsActionEventProxy, args, implementation) as SemanticsActionEvent; } }
_flaxBindInstanceType<SemanticsActionEvent, typeof SemanticsActionEvent>(SemanticsActionEvent, "flax.core/sdk_dart_ui#type:SemanticsActionEvent", ["dart:core::Object"]);
