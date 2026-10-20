// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { _flaxMemberParameters58, _flaxMemberParameters59, _flaxMemberParameters60 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MouseCursorManager extends Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursorManager": readonly [] }> { readonly __MouseCursorManager: unique symbol;
readonly [_flaxDartTypeValue]: MouseCursorManager;

readonly fallbackMouseCursor: upstream0.MouseCursor;
debugDeviceActiveCursor(device: number): upstream0.MouseCursor | null;
handleDeviceCursorUpdate(device: number, triggeringEvent: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, cursorCandidates: DartIterableInput<upstream0.MouseCursor, Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): void;
}
defineObject("flax.core/sdk_services#type:MouseCursorManager", ["fallbackMouseCursor"], [], _flaxBindingMethods("flax.core/sdk_services#type:MouseCursorManager", "object", {"debugDeviceActiveCursor":_flaxMemberParameters58,"handleDeviceCursorUpdate":_flaxMemberParameters59}, {}), []);
export function _MouseCursorManagerFactory(fallbackMouseCursor: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): MouseCursorManager {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:MouseCursorManager", "", [{"name":"fallbackMouseCursor","required":true,"positional":true}], [fallbackMouseCursor], {}) as MouseCursorManager;
}
const _MouseCursorManagerProxy = {type: "flax.core/sdk_services#type:MouseCursorManager", parameters: _flaxMemberParameters60, constructors: {"": _flaxMemberParameters60}, methods: {"debugDeviceActiveCursor":_flaxMemberParameters58,"handleDeviceCursorUpdate":_flaxMemberParameters59}, getters: ["fallbackMouseCursor"], setters: [], contextMembers: [], superMembers: ["get:fallbackMouseCursor","debugDeviceActiveCursor","handleDeviceCursorUpdate"]} as const;
export interface _MouseCursorManagerNative extends MouseCursorManager {
readonly [_flaxDartTypeValue]: _MouseCursorManagerNative;

debugDeviceActiveCursor(device: number): upstream0.MouseCursor | null;
handleDeviceCursorUpdate(device: number, triggeringEvent: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, cursorCandidates: DartIterableInput<upstream0.MouseCursor, Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): void;
get fallbackMouseCursor(): upstream0.MouseCursor;
}
export abstract class _MouseCursorManagerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MouseCursorManager>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MouseCursorManager;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MouseCursorManager", readonly [], false];
constructor(fallbackMouseCursor: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) { super(_MouseCursorManagerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MouseCursorManagerNative.prototype, _MouseCursorManagerProxy);
export namespace _MouseCursorManagerFactory { export function implement(args: [fallbackMouseCursor: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>], implementation: {}): MouseCursorManager {
return constructProxy(_MouseCursorManagerProxy, args, implementation) as MouseCursorManager; } }
const _MouseCursorManagerBinding = _flaxProxyFactory(_MouseCursorManagerFactory, _MouseCursorManagerNative) as unknown as typeof _MouseCursorManagerFactory & (new(fallbackMouseCursor: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => _MouseCursorManagerNative);
export const MouseCursorManager: typeof _MouseCursorManagerBinding & _FlaxInstanceType<MouseCursorManager> & _FlaxDartType<MouseCursorManager, readonly ["class", "flax.core/sdk_services#type:MouseCursorManager", readonly [], false]> = _flaxBindInstanceType<MouseCursorManager, typeof _MouseCursorManagerBinding>(_MouseCursorManagerBinding, "flax.core/sdk_services#type:MouseCursorManager", ["dart:core::Object"]) as typeof _MouseCursorManagerBinding & _FlaxInstanceType<MouseCursorManager> & _FlaxDartType<MouseCursorManager, readonly ["class", "flax.core/sdk_services#type:MouseCursorManager", readonly [], false]>;
