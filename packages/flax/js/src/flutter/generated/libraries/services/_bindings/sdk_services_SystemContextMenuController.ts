// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SystemContextMenuClient';
import '@flax/flutter/services/_bindings/sdk_services_SystemContextMenuClient';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import { _flaxMemberParameters0, _flaxMemberParameters116, _flaxMemberParameters117, _flaxMemberParameters118, _flaxMemberParameters119, _flaxMemberParameters52, _flaxMemberParameters51, _flaxMemberParameters50 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemContextMenuController extends Omit<upstream0.SystemContextMenuClient, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.SystemContextMenuClient>, Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::SystemContextMenuController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/binding.dart::SystemContextMenuClient": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SystemContextMenuController: unique symbol;
readonly [_flaxDartTypeValue]: SystemContextMenuController;

readonly onSystemHide: (() => void) | null;
handleSystemHide(): void;
handleCustomContextMenuAction(callbackId: string): void;
toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
show(targetRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): Promise<void>;
showWithItems(targetRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, items: DartListInput<upstream7.IOSSystemContextMenuItemData, Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData": readonly [] }>>): Promise<void>;
hide(): Promise<void>;
dispose(): void;
}
defineObject("flax.core/sdk_services#type:SystemContextMenuController", ["onSystemHide"], [], _flaxBindingMethods("flax.core/sdk_services#type:SystemContextMenuController", "object", {"handleSystemHide":_flaxMemberParameters0,"handleCustomContextMenuAction":_flaxMemberParameters116,"show":_flaxMemberParameters117,"showWithItems":_flaxMemberParameters118,"hide":_flaxMemberParameters0,"dispose":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _SystemContextMenuControllerFactory(options: { onSystemHide?: (() => void) | null | undefined } = {}): SystemContextMenuController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:SystemContextMenuController", "", [{"name":"onSystemHide"}], [], options) as SystemContextMenuController;
}
const _SystemContextMenuControllerProxy = {type: "flax.core/sdk_services#type:SystemContextMenuController", parameters: _flaxMemberParameters119, constructors: {"": _flaxMemberParameters119}, methods: {"handleSystemHide":_flaxMemberParameters0,"handleCustomContextMenuAction":_flaxMemberParameters116,"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters52,"toDiagnosticsNode":_flaxMemberParameters51,"debugFillProperties":_flaxMemberParameters50,"show":_flaxMemberParameters117,"showWithItems":_flaxMemberParameters118,"hide":_flaxMemberParameters0,"dispose":_flaxMemberParameters0}, getters: ["onSystemHide"], setters: [], contextMembers: [], superMembers: ["get:onSystemHide","handleSystemHide","handleCustomContextMenuAction","toStringShort","toString","toDiagnosticsNode","debugFillProperties","show","showWithItems","hide","dispose"]} as const;
export interface _SystemContextMenuControllerNative extends SystemContextMenuController {
readonly [_flaxDartTypeValue]: _SystemContextMenuControllerNative;

handleSystemHide(): void;
handleCustomContextMenuAction(callbackId: string): void;
toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
show(targetRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): Promise<void>;
showWithItems(targetRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, items: DartListInput<upstream7.IOSSystemContextMenuItemData, Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData": readonly [] }>>): Promise<void>;
hide(): Promise<void>;
dispose(): void;
get onSystemHide(): (() => void) | null;
}
export abstract class _SystemContextMenuControllerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SystemContextMenuController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SystemContextMenuController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SystemContextMenuController", readonly [], false];
constructor(options?: {onSystemHide?: (() => void) | null | undefined}) { super(_SystemContextMenuControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SystemContextMenuControllerNative.prototype, _SystemContextMenuControllerProxy);
export namespace _SystemContextMenuControllerFactory { export function implement(args: [options?: {onSystemHide?: (() => void) | null | undefined}], implementation: {}): SystemContextMenuController {
return constructProxy(_SystemContextMenuControllerProxy, args, implementation) as SystemContextMenuController; } }
const _SystemContextMenuControllerBinding = _flaxProxyFactory(_SystemContextMenuControllerFactory, _SystemContextMenuControllerNative) as unknown as typeof _SystemContextMenuControllerFactory & (new(options?: {onSystemHide?: (() => void) | null | undefined}) => _SystemContextMenuControllerNative);
export const SystemContextMenuController: typeof _SystemContextMenuControllerBinding & _FlaxInstanceType<SystemContextMenuController> & _FlaxDartType<SystemContextMenuController, readonly ["class", "flax.core/sdk_services#type:SystemContextMenuController", readonly [], false]> = _flaxBindInstanceType<SystemContextMenuController, typeof _SystemContextMenuControllerBinding>(_SystemContextMenuControllerBinding, "flax.core/sdk_services#type:SystemContextMenuController", ["dart:core::Object","flax.core/sdk_services#type:SystemContextMenuClient","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SystemContextMenuControllerBinding & _FlaxInstanceType<SystemContextMenuController> & _FlaxDartType<SystemContextMenuController, readonly ["class", "flax.core/sdk_services#type:SystemContextMenuController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "onSystemHide" | "handleSystemHide" | "handleCustomContextMenuAction" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "show" | "showWithItems" | "hide" | "dispose" | "__flaxBound:package:flutter/src/services/text_input.dart::SystemContextMenuController" | "__flaxBound:package:flutter/src/services/binding.dart::SystemContextMenuClient" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
