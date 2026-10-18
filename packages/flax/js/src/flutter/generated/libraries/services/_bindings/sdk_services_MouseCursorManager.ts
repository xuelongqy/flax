// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
const _flaxMemberParameters0 = [{"name":"device","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"device","required":true,"positional":true},{"name":"triggeringEvent","required":true,"positional":true},{"name":"cursorCandidates","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MouseCursorManager extends Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursorManager": readonly [] }> { readonly __MouseCursorManager: unique symbol;
readonly [_flaxDartTypeValue]: MouseCursorManager;

}
defineObject("flax.core/sdk_services#type:MouseCursorManager", ["fallbackMouseCursor"], [], _flaxBindingMethods("flax.core/sdk_services#type:MouseCursorManager", "object", {"debugDeviceActiveCursor":_flaxMemberParameters0,"handleDeviceCursorUpdate":_flaxMemberParameters1}, {}), []);
const _MouseCursorManagerProxy = {type: "flax.core/sdk_services#type:MouseCursorManager", parameters: [{"name":"fallbackMouseCursor","required":true,"positional":true}], constructors: {"":[{"name":"fallbackMouseCursor","required":true,"positional":true}]}, methods: {"debugDeviceActiveCursor":_flaxMemberParameters0,"handleDeviceCursorUpdate":_flaxMemberParameters1}, getters: ["fallbackMouseCursor"], setters: [], contextMembers: [], superMembers: ["get:fallbackMouseCursor","debugDeviceActiveCursor","handleDeviceCursorUpdate"]} as const;
export interface MouseCursorManager {
readonly [_flaxDartTypeValue]: MouseCursorManager;

debugDeviceActiveCursor(device: number): upstream0.MouseCursor | null;
handleDeviceCursorUpdate(device: number, triggeringEvent: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, cursorCandidates: DartIterableInput<upstream0.MouseCursor, Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): void;
get fallbackMouseCursor(): upstream0.MouseCursor;
}
export abstract class MouseCursorManager extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MouseCursorManager>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MouseCursorManager;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MouseCursorManager", readonly [], false];
constructor(fallbackMouseCursor: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) { super(_MouseCursorManagerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MouseCursorManager.prototype, _MouseCursorManagerProxy);
export namespace MouseCursorManager { export function implement(args: [fallbackMouseCursor: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>], implementation: {}): MouseCursorManager {
return constructProxy(_MouseCursorManagerProxy, args, implementation) as MouseCursorManager; } }
_flaxBindInstanceType<MouseCursorManager, typeof MouseCursorManager>(MouseCursorManager, "flax.core/sdk_services#type:MouseCursorManager", ["dart:core::Object"]);
