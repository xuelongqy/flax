// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectIntent';
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
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectAction extends Omit<upstream0.Action<upstream1.SelectIntent>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Action<upstream1.SelectIntent>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::SelectAction": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream1.SelectIntent] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SelectAction: unique symbol;
readonly [_flaxDartTypeValue]: SelectAction;

}
defineObject("flax.core/sdk_widgets#type:SelectAction", ["callingAction","intentType","isActionEnabled"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SelectAction", "object", {"isEnabled":_flaxMemberParameters10,"consumesKey":_flaxMemberParameters10,"toKeyEventResult":_flaxMemberParameters11,"invoke":_flaxMemberParameters10,"addActionListener":_flaxMemberParameters12,"removeActionListener":_flaxMemberParameters12}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _SelectActionProxy = {type: "flax.core/sdk_widgets#type:SelectAction", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"isEnabled":_flaxMemberParameters10,"consumesKey":_flaxMemberParameters10,"toKeyEventResult":_flaxMemberParameters11,"invoke":_flaxMemberParameters10,"addActionListener":_flaxMemberParameters12,"removeActionListener":_flaxMemberParameters12,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["callingAction","intentType","isActionEnabled"], setters: [], contextMembers: [], superMembers: ["get:callingAction","get:intentType","get:isActionEnabled","isEnabled","consumesKey","toKeyEventResult","addActionListener","removeActionListener","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface SelectAction {
readonly [_flaxDartTypeValue]: SelectAction;

isEnabled(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::SelectIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
consumesKey(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::SelectIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
toKeyEventResult(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::SelectIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, invokeResult: unknown | null): upstream4.KeyEventResult;
addActionListener(listener: ((action: upstream0.Action<upstream5.Intent>) => void)): void;
removeActionListener(listener: ((action: upstream0.Action<upstream5.Intent>) => void)): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
get callingAction(): upstream0.Action<upstream1.SelectIntent> | null;
get intentType(): upstream3.Type;
get isActionEnabled(): boolean;
}
export abstract class SelectAction extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectAction>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectAction;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SelectAction", readonly [], false];
constructor() { super(_SelectActionProxy, Array.from(arguments)); }
abstract invoke(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::SelectIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): unknown | null;
}
_flaxDefineProxyBase(SelectAction.prototype, _SelectActionProxy);
export namespace SelectAction { export function implement(args: [], implementation: {invoke: ((intent: upstream1.SelectIntent) => unknown | null)}): SelectAction {
return constructProxy(_SelectActionProxy, args, implementation) as SelectAction; } }
_flaxBindInstanceType<SelectAction, typeof SelectAction>(SelectAction, "flax.core/sdk_widgets#type:SelectAction", ["flax.core/sdk_widgets#type:Action","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/actions.dart::SelectAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
