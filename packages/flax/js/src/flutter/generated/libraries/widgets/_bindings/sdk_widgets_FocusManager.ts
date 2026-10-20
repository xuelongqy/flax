// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusHighlightStrategy';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusHighlightStrategy';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusHighlightMode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusHighlightMode';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusScopeNode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusScopeNode';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream14 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import { _flaxMemberParameters12, _flaxMemberParameters2, _flaxMemberParameters157, _flaxMemberParameters9, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters8, _flaxMemberParameters5 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FocusManager extends Omit<upstream0.DiagnosticableTreeMixin, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin | keyof upstream1.DiagnosticableTree>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin | keyof upstream1.DiagnosticableTree | keyof upstream2.Diagnosticable>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin | keyof upstream1.DiagnosticableTree | keyof upstream2.Diagnosticable | keyof upstream3.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __FocusManager: unique symbol;
readonly [_flaxDartTypeValue]: FocusManager;

readonly hasListeners: boolean;
get highlightStrategy(): upstream5.FocusHighlightStrategy;
readonly highlightMode: upstream6.FocusHighlightMode;
readonly rootScope: upstream7.FocusScopeNode;
readonly primaryFocus: upstream8.FocusNode | null;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream9.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
registerGlobalHandlers(): void;
addHighlightModeListener(listener: ((value: upstream6.FocusHighlightMode) => void)): void;
removeHighlightModeListener(listener: ((value: upstream6.FocusHighlightMode) => void)): void;
addEarlyKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
removeEarlyKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
addLateKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
removeLateKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
applyFocusChangesIfNeeded(): void;
set highlightStrategy(value: upstream5.FocusHighlightStrategy);
}
defineObject("flax.core/sdk_widgets#type:FocusManager", ["hasListeners","highlightStrategy","highlightMode","rootScope","primaryFocus"], ["highlightStrategy"], _flaxBindingMethods("flax.core/sdk_widgets#type:FocusManager", "object", {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"registerGlobalHandlers":_flaxMemberParameters2,"addHighlightModeListener":_flaxMemberParameters12,"removeHighlightModeListener":_flaxMemberParameters12,"addEarlyKeyEventHandler":_flaxMemberParameters157,"removeEarlyKeyEventHandler":_flaxMemberParameters157,"addLateKeyEventHandler":_flaxMemberParameters157,"removeLateKeyEventHandler":_flaxMemberParameters157,"applyFocusChangesIfNeeded":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:DiagnosticableTreeMixin");
export function _FocusManagerFactory(): FocusManager {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:FocusManager", "", _flaxMemberParameters2, [], {}) as FocusManager;
}
const _FocusManagerProxy = {type: "flax.core/sdk_widgets#type:FocusManager", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"toString":_flaxMemberParameters9,"toStringShallow":_flaxMemberParameters6,"toStringDeep":_flaxMemberParameters7,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugDescribeChildren":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters5,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"registerGlobalHandlers":_flaxMemberParameters2,"addHighlightModeListener":_flaxMemberParameters12,"removeHighlightModeListener":_flaxMemberParameters12,"addEarlyKeyEventHandler":_flaxMemberParameters157,"removeEarlyKeyEventHandler":_flaxMemberParameters157,"addLateKeyEventHandler":_flaxMemberParameters157,"removeLateKeyEventHandler":_flaxMemberParameters157,"applyFocusChangesIfNeeded":_flaxMemberParameters2}, getters: ["highlightStrategy","highlightMode","rootScope","primaryFocus","hasListeners"], setters: ["highlightStrategy"], contextMembers: [], superMembers: ["get:highlightStrategy","get:highlightMode","get:rootScope","get:primaryFocus","get:hasListeners","set:highlightStrategy","toString","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","debugFillProperties","addListener","removeListener","dispose","registerGlobalHandlers","addHighlightModeListener","removeHighlightModeListener","addEarlyKeyEventHandler","removeEarlyKeyEventHandler","addLateKeyEventHandler","removeLateKeyEventHandler","applyFocusChangesIfNeeded"]} as const;
export interface _FocusManagerNative extends FocusManager {
readonly [_flaxDartTypeValue]: _FocusManagerNative;

toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream9.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
registerGlobalHandlers(): void;
addHighlightModeListener(listener: ((value: upstream6.FocusHighlightMode) => void)): void;
removeHighlightModeListener(listener: ((value: upstream6.FocusHighlightMode) => void)): void;
addEarlyKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
removeEarlyKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
addLateKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
removeLateKeyEventHandler(handler: ((event: upstream14.KeyEvent) => upstream13.KeyEventResult)): void;
applyFocusChangesIfNeeded(): void;
get highlightStrategy(): upstream5.FocusHighlightStrategy;
get highlightMode(): upstream6.FocusHighlightMode;
get rootScope(): upstream7.FocusScopeNode;
get primaryFocus(): upstream8.FocusNode | null;
get hasListeners(): boolean;
set highlightStrategy(value: upstream5.FocusHighlightStrategy);
}
export abstract class _FocusManagerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FocusManager>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FocusManager;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FocusManager", readonly [], false];
constructor() { super(_FocusManagerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_FocusManagerNative.prototype, _FocusManagerProxy);
export namespace _FocusManagerFactory { export function implement(args: [], implementation: {}): FocusManager {
return constructProxy(_FocusManagerProxy, args, implementation) as FocusManager; } }
const _FocusManagerBinding = _flaxProxyFactory(_FocusManagerFactory, _FocusManagerNative) as unknown as typeof _FocusManagerFactory & (new() => _FocusManagerNative);
export namespace _FocusManagerFactory { export declare const instance: FocusManager; }
_flaxDefineStaticGetters(_FocusManagerFactory, "flax.core/sdk_widgets#read:FocusManager.", ["instance"]);
export const FocusManager: typeof _FocusManagerBinding & _FlaxInstanceType<FocusManager> & _FlaxDartType<FocusManager, readonly ["class", "flax.core/sdk_widgets#type:FocusManager", readonly [], false]> = _flaxBindInstanceType<FocusManager, typeof _FocusManagerBinding>(_FocusManagerBinding, "flax.core/sdk_widgets#type:FocusManager", ["dart:core::Object","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_foundation#type:ChangeNotifier","flax.core/flutter#type:Listenable"]) as typeof _FocusManagerBinding & _FlaxInstanceType<FocusManager> & _FlaxDartType<FocusManager, readonly ["class", "flax.core/sdk_widgets#type:FocusManager", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "highlightStrategy" | "highlightMode" | "rootScope" | "primaryFocus" | "toString" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "addListener" | "removeListener" | "dispose" | "registerGlobalHandlers" | "addHighlightModeListener" | "removeHighlightModeListener" | "addEarlyKeyEventHandler" | "removeEarlyKeyEventHandler" | "addLateKeyEventHandler" | "removeLateKeyEventHandler" | "applyFocusChangesIfNeeded" | "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
