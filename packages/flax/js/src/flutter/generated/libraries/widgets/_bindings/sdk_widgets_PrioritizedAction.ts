// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextAction';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextAction';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_PrioritizedIntents';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PrioritizedIntents';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
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
import { _flaxMemberParameters83, _flaxMemberParameters10, _flaxMemberParameters11, _flaxMemberParameters12, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PrioritizedAction extends Omit<upstream0.ContextAction<upstream1.PrioritizedIntents>, _flaxOwnMembers0>, Omit<upstream2.Action<upstream1.PrioritizedIntents>, _flaxOwnMembers0 | keyof upstream0.ContextAction<upstream1.PrioritizedIntents>>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ContextAction<upstream1.PrioritizedIntents> | keyof upstream2.Action<upstream1.PrioritizedIntents>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedAction": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction": readonly [upstream1.PrioritizedIntents] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream1.PrioritizedIntents] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PrioritizedAction: unique symbol;
readonly [_flaxDartTypeValue]: PrioritizedAction;

}
defineObject("flax.core/sdk_widgets#type:PrioritizedAction", ["callingAction","intentType","isActionEnabled"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PrioritizedAction", "object", {"isEnabled":_flaxMemberParameters83,"invoke":_flaxMemberParameters83,"consumesKey":_flaxMemberParameters10,"toKeyEventResult":_flaxMemberParameters11,"addActionListener":_flaxMemberParameters12,"removeActionListener":_flaxMemberParameters12}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _PrioritizedActionProxy = {type: "flax.core/sdk_widgets#type:PrioritizedAction", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"isEnabled":_flaxMemberParameters83,"invoke":_flaxMemberParameters83,"consumesKey":_flaxMemberParameters10,"toKeyEventResult":_flaxMemberParameters11,"addActionListener":_flaxMemberParameters12,"removeActionListener":_flaxMemberParameters12,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["callingAction","intentType","isActionEnabled"], setters: [], contextMembers: [], superMembers: ["get:callingAction","get:intentType","get:isActionEnabled","isEnabled","invoke","consumesKey","toKeyEventResult","addActionListener","removeActionListener","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface PrioritizedAction {
readonly [_flaxDartTypeValue]: PrioritizedAction;

isEnabled(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, context?: upstream5.BuildContext | null): boolean;
invoke(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, context?: upstream5.BuildContext | null): void;
consumesKey(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
toKeyEventResult(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, invokeResult: unknown | null): upstream6.KeyEventResult;
addActionListener(listener: ((action: upstream2.Action<upstream7.Intent>) => void)): void;
removeActionListener(listener: ((action: upstream2.Action<upstream7.Intent>) => void)): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream11.DiagnosticLevel | undefined}): string;
get callingAction(): upstream2.Action<upstream1.PrioritizedIntents> | null;
get intentType(): upstream4.Type;
get isActionEnabled(): boolean;
}
export abstract class PrioritizedAction extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PrioritizedAction>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PrioritizedAction;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PrioritizedAction", readonly [], false];
constructor() { super(_PrioritizedActionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PrioritizedAction.prototype, _PrioritizedActionProxy);
export namespace PrioritizedAction { export function implement(args: [], implementation: {}): PrioritizedAction {
return constructProxy(_PrioritizedActionProxy, args, implementation) as PrioritizedAction; } }
_flaxBindInstanceType<PrioritizedAction, typeof PrioritizedAction>(PrioritizedAction, "flax.core/sdk_widgets#type:PrioritizedAction", ["flax.core/sdk_widgets#type:ContextAction","flax.core/sdk_widgets#type:Action","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "isEnabled" | "invoke" | "consumesKey" | "toKeyEventResult" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
