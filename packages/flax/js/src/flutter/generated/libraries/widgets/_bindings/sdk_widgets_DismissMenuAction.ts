// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissAction';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissAction';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissIntent';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters10, _flaxMemberParameters84, _flaxMemberParameters11, _flaxMemberParameters12, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DismissMenuAction extends Omit<upstream0.DismissAction, _flaxOwnMembers0>, Omit<upstream1.Action<upstream2.DismissIntent>, _flaxOwnMembers0 | keyof upstream0.DismissAction>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DismissAction | keyof upstream1.Action<upstream2.DismissIntent>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::DismissMenuAction": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::DismissAction": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream2.DismissIntent] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DismissMenuAction: unique symbol;
readonly [_flaxDartTypeValue]: DismissMenuAction;

readonly callingAction: upstream1.Action<upstream2.DismissIntent> | null;
readonly intentType: upstream5.Type;
readonly isActionEnabled: boolean;
readonly controller: upstream4.MenuController;
isEnabled(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
consumesKey(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
toKeyEventResult(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, invokeResult: unknown | null): upstream6.KeyEventResult;
invoke(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
addActionListener(listener: ((action: upstream1.Action<upstream7.Intent>) => void)): void;
removeActionListener(listener: ((action: upstream1.Action<upstream7.Intent>) => void)): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream11.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:DismissMenuAction", ["callingAction","intentType","isActionEnabled","controller"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DismissMenuAction", "object", {"invoke":_flaxMemberParameters10}, {}), [], undefined, "flax.core/sdk_widgets#type:DismissAction");
export function _DismissMenuActionFactory(options: { controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [] }> }): DismissMenuAction {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:DismissMenuAction", "", [{"name":"controller","required":true}], [], options) as DismissMenuAction;
}
const _DismissMenuActionProxy = {type: "flax.core/sdk_widgets#type:DismissMenuAction", parameters: _flaxMemberParameters84, constructors: {"": _flaxMemberParameters84}, methods: {"isEnabled":_flaxMemberParameters10,"consumesKey":_flaxMemberParameters10,"toKeyEventResult":_flaxMemberParameters11,"invoke":_flaxMemberParameters10,"addActionListener":_flaxMemberParameters12,"removeActionListener":_flaxMemberParameters12,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["controller","callingAction","intentType","isActionEnabled"], setters: [], contextMembers: [], superMembers: ["get:controller","get:callingAction","get:intentType","get:isActionEnabled","isEnabled","consumesKey","toKeyEventResult","invoke","addActionListener","removeActionListener","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _DismissMenuActionNative extends DismissMenuAction {
readonly [_flaxDartTypeValue]: _DismissMenuActionNative;

isEnabled(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
consumesKey(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
toKeyEventResult(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, invokeResult: unknown | null): upstream6.KeyEventResult;
invoke(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
addActionListener(listener: ((action: upstream1.Action<upstream7.Intent>) => void)): void;
removeActionListener(listener: ((action: upstream1.Action<upstream7.Intent>) => void)): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream11.DiagnosticLevel | undefined}): string;
get controller(): upstream4.MenuController;
get callingAction(): upstream1.Action<upstream2.DismissIntent> | null;
get intentType(): upstream5.Type;
get isActionEnabled(): boolean;
}
export abstract class _DismissMenuActionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DismissMenuAction>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DismissMenuAction;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DismissMenuAction", readonly [], false];
constructor(options: {controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [] }>}) { super(_DismissMenuActionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DismissMenuActionNative.prototype, _DismissMenuActionProxy);
export namespace _DismissMenuActionFactory { export function implement(args: [options: {controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [] }>}], implementation: {}): DismissMenuAction {
return constructProxy(_DismissMenuActionProxy, args, implementation) as DismissMenuAction; } }
const _DismissMenuActionBinding = _flaxProxyFactory(_DismissMenuActionFactory, _DismissMenuActionNative) as unknown as typeof _DismissMenuActionFactory & (new(options: {controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [] }>}) => _DismissMenuActionNative);
export const DismissMenuAction: typeof _DismissMenuActionBinding & _FlaxInstanceType<DismissMenuAction> & _FlaxDartType<DismissMenuAction, readonly ["class", "flax.core/sdk_widgets#type:DismissMenuAction", readonly [], false]> = _flaxBindInstanceType<DismissMenuAction, typeof _DismissMenuActionBinding>(_DismissMenuActionBinding, "flax.core/sdk_widgets#type:DismissMenuAction", ["flax.core/sdk_widgets#type:DismissAction","flax.core/sdk_widgets#type:Action","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _DismissMenuActionBinding & _FlaxInstanceType<DismissMenuAction> & _FlaxDartType<DismissMenuAction, readonly ["class", "flax.core/sdk_widgets#type:DismissMenuAction", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "controller" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::DismissMenuAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::DismissAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
