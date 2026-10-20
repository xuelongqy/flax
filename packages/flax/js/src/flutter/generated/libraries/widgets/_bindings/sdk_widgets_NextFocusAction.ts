// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_NextFocusIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_NextFocusIntent';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters10, _flaxMemberParameters11, _flaxMemberParameters12, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NextFocusAction extends Omit<upstream0.Action<upstream1.NextFocusIntent>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Action<upstream1.NextFocusIntent>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NextFocusAction": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream1.NextFocusIntent] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __NextFocusAction: unique symbol;
readonly [_flaxDartTypeValue]: NextFocusAction;

readonly callingAction: upstream0.Action<upstream1.NextFocusIntent> | null;
readonly intentType: upstream3.Type;
readonly isActionEnabled: boolean;
isEnabled(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NextFocusIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
consumesKey(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NextFocusIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
toKeyEventResult(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NextFocusIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, invokeResult: boolean): upstream4.KeyEventResult;
invoke(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NextFocusIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
addActionListener(listener: ((action: upstream0.Action<upstream5.Intent>) => void)): void;
removeActionListener(listener: ((action: upstream0.Action<upstream5.Intent>) => void)): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:NextFocusAction", ["callingAction","intentType","isActionEnabled"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:NextFocusAction", "object", {"isEnabled":_flaxMemberParameters10,"consumesKey":_flaxMemberParameters10,"toKeyEventResult":_flaxMemberParameters11,"invoke":_flaxMemberParameters10,"addActionListener":_flaxMemberParameters12,"removeActionListener":_flaxMemberParameters12}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _NextFocusActionFactory(): NextFocusAction {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:NextFocusAction", "", [], [], {}) as NextFocusAction;
}
const _NextFocusActionProxy = {type: "flax.core/sdk_widgets#type:NextFocusAction", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"isEnabled":_flaxMemberParameters10,"consumesKey":_flaxMemberParameters10,"toKeyEventResult":_flaxMemberParameters11,"invoke":_flaxMemberParameters10,"addActionListener":_flaxMemberParameters12,"removeActionListener":_flaxMemberParameters12,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["callingAction","intentType","isActionEnabled"], setters: [], contextMembers: [], superMembers: ["get:callingAction","get:intentType","get:isActionEnabled","isEnabled","consumesKey","toKeyEventResult","invoke","addActionListener","removeActionListener","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _NextFocusActionNative extends NextFocusAction {
readonly [_flaxDartTypeValue]: _NextFocusActionNative;

isEnabled(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NextFocusIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
consumesKey(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NextFocusIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
toKeyEventResult(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NextFocusIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, invokeResult: boolean): upstream4.KeyEventResult;
invoke(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NextFocusIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
addActionListener(listener: ((action: upstream0.Action<upstream5.Intent>) => void)): void;
removeActionListener(listener: ((action: upstream0.Action<upstream5.Intent>) => void)): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
get callingAction(): upstream0.Action<upstream1.NextFocusIntent> | null;
get intentType(): upstream3.Type;
get isActionEnabled(): boolean;
}
export abstract class _NextFocusActionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NextFocusAction>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NextFocusAction;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:NextFocusAction", readonly [], false];
constructor() { super(_NextFocusActionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_NextFocusActionNative.prototype, _NextFocusActionProxy);
export namespace _NextFocusActionFactory { export function implement(args: [], implementation: {}): NextFocusAction {
return constructProxy(_NextFocusActionProxy, args, implementation) as NextFocusAction; } }
const _NextFocusActionBinding = _flaxProxyFactory(_NextFocusActionFactory, _NextFocusActionNative) as unknown as typeof _NextFocusActionFactory & (new() => _NextFocusActionNative);
export const NextFocusAction: typeof _NextFocusActionBinding & _FlaxInstanceType<NextFocusAction> & _FlaxDartType<NextFocusAction, readonly ["class", "flax.core/sdk_widgets#type:NextFocusAction", readonly [], false]> = _flaxBindInstanceType<NextFocusAction, typeof _NextFocusActionBinding>(_NextFocusActionBinding, "flax.core/sdk_widgets#type:NextFocusAction", ["flax.core/sdk_widgets#type:Action","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _NextFocusActionBinding & _FlaxInstanceType<NextFocusAction> & _FlaxDartType<NextFocusAction, readonly ["class", "flax.core/sdk_widgets#type:NextFocusAction", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NextFocusAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
