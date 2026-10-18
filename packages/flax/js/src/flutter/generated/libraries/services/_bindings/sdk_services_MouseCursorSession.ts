// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MouseCursorSession extends Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursorSession": readonly [] }> { readonly __MouseCursorSession: unique symbol;
readonly [_flaxDartTypeValue]: MouseCursorSession;

}
defineObject("flax.core/sdk_services#type:MouseCursorSession", ["cursor","device"], [], _flaxBindingMethods("flax.core/sdk_services#type:MouseCursorSession", "object", {"activate":_flaxMemberParameters0,"dispose":_flaxMemberParameters0}, {}), []);
const _MouseCursorSessionProxy = {type: "flax.core/sdk_services#type:MouseCursorSession", parameters: [{"name":"cursor","required":true,"positional":true},{"name":"device","required":true,"positional":true}], constructors: {"":[{"name":"cursor","required":true,"positional":true},{"name":"device","required":true,"positional":true}]}, methods: {"activate":_flaxMemberParameters0,"dispose":_flaxMemberParameters0}, getters: ["cursor","device"], setters: [], contextMembers: [], superMembers: ["get:cursor","get:device"]} as const;
export interface MouseCursorSession {
readonly [_flaxDartTypeValue]: MouseCursorSession;

get cursor(): upstream0.MouseCursor;
get device(): number;
}
export abstract class MouseCursorSession extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MouseCursorSession>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MouseCursorSession;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MouseCursorSession", readonly [], false];
constructor(cursor: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, device: number) { super(_MouseCursorSessionProxy, Array.from(arguments)); }
abstract activate(): Promise<void>;
abstract dispose(): void;
}
_flaxDefineProxyBase(MouseCursorSession.prototype, _MouseCursorSessionProxy);
export namespace MouseCursorSession { export function implement(args: [cursor: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, device: number], implementation: {activate: (() => Promise<void>); dispose: (() => void)}): MouseCursorSession {
return constructProxy(_MouseCursorSessionProxy, args, implementation) as MouseCursorSession; } }
_flaxBindInstanceType<MouseCursorSession, typeof MouseCursorSession>(MouseCursorSession, "flax.core/sdk_services#type:MouseCursorSession", ["dart:core::Object"]);
