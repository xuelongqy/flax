// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/flutter/semantics/_bindings/sdk_semantics_Assertiveness';
import '@flax/flutter/semantics/_bindings/sdk_semantics_Assertiveness';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters2 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnnounceSemanticsEvent extends Omit<upstream0.SemanticsEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics_event.dart::AnnounceSemanticsEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [] }> { readonly __AnnounceSemanticsEvent: unique symbol;
readonly [_flaxDartTypeValue]: AnnounceSemanticsEvent;

readonly type: string;
readonly viewId: number;
readonly message: string;
readonly textDirection: upstream1.TextDirection;
readonly assertiveness: upstream2.Assertiveness;
toMap(options?: {nodeId?: number | null | undefined}): DartMap<string, unknown | null>;
getDataMap(): DartMap<string, unknown | null>;
toString(): string;
}
defineObject("flax.core/sdk_semantics#type:AnnounceSemanticsEvent", ["type","viewId","message","textDirection","assertiveness"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:AnnounceSemanticsEvent", "object", {}, {}), [], undefined, "flax.core/sdk_semantics#type:SemanticsEvent");
export function _AnnounceSemanticsEventFactory(message: string, textDirection: upstream1.TextDirection, viewId: number, options: { assertiveness?: upstream2.Assertiveness | undefined } = {}): AnnounceSemanticsEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_semantics#type:AnnounceSemanticsEvent", "", [{"name":"message","required":true,"positional":true},{"name":"textDirection","required":true,"positional":true},{"name":"viewId","required":true,"positional":true},{"name":"assertiveness"}], [message, textDirection, viewId], options) as AnnounceSemanticsEvent;
}
const _AnnounceSemanticsEventProxy = {type: "flax.core/sdk_semantics#type:AnnounceSemanticsEvent", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"toMap":_flaxMemberParameters1,"getDataMap":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["viewId","message","textDirection","assertiveness","type"], setters: [], contextMembers: [], superMembers: ["get:viewId","get:message","get:textDirection","get:assertiveness","get:type","toMap","getDataMap","toString"]} as const;
export interface _AnnounceSemanticsEventNative extends AnnounceSemanticsEvent {
readonly [_flaxDartTypeValue]: _AnnounceSemanticsEventNative;

toMap(options?: {nodeId?: number | null | undefined}): DartMap<string, unknown | null>;
getDataMap(): DartMap<string, unknown | null>;
toString(): string;
get viewId(): number;
get message(): string;
get textDirection(): upstream1.TextDirection;
get assertiveness(): upstream2.Assertiveness;
get type(): string;
}
export abstract class _AnnounceSemanticsEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnnounceSemanticsEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AnnounceSemanticsEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:AnnounceSemanticsEvent", readonly [], false];
constructor(message: string, textDirection: upstream1.TextDirection, viewId: number, options?: {assertiveness?: upstream2.Assertiveness | undefined}) { super(_AnnounceSemanticsEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AnnounceSemanticsEventNative.prototype, _AnnounceSemanticsEventProxy);
export namespace _AnnounceSemanticsEventFactory { export function implement(args: [message: string, textDirection: upstream1.TextDirection, viewId: number, options?: {assertiveness?: upstream2.Assertiveness | undefined}], implementation: {}): AnnounceSemanticsEvent {
return constructProxy(_AnnounceSemanticsEventProxy, args, implementation) as AnnounceSemanticsEvent; } }
const _AnnounceSemanticsEventBinding = _flaxProxyFactory(_AnnounceSemanticsEventFactory, _AnnounceSemanticsEventNative) as unknown as typeof _AnnounceSemanticsEventFactory & (new(message: string, textDirection: upstream1.TextDirection, viewId: number, options?: {assertiveness?: upstream2.Assertiveness | undefined}) => _AnnounceSemanticsEventNative);
export const AnnounceSemanticsEvent: typeof _AnnounceSemanticsEventBinding & _FlaxInstanceType<AnnounceSemanticsEvent> & _FlaxDartType<AnnounceSemanticsEvent, readonly ["class", "flax.core/sdk_semantics#type:AnnounceSemanticsEvent", readonly [], false]> = _flaxBindInstanceType<AnnounceSemanticsEvent, typeof _AnnounceSemanticsEventBinding>(_AnnounceSemanticsEventBinding, "flax.core/sdk_semantics#type:AnnounceSemanticsEvent", ["flax.core/sdk_semantics#type:SemanticsEvent","dart:core::Object"]) as typeof _AnnounceSemanticsEventBinding & _FlaxInstanceType<AnnounceSemanticsEvent> & _FlaxDartType<AnnounceSemanticsEvent, readonly ["class", "flax.core/sdk_semantics#type:AnnounceSemanticsEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "viewId" | "message" | "textDirection" | "assertiveness" | "toMap" | "getDataMap" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::AnnounceSemanticsEvent" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent";
