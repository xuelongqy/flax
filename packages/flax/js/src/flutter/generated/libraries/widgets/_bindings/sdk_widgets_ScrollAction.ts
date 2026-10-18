// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextAction';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextAction';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIntent';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_Scrollable';
const _flaxMemberParameters0 = [{"name":"intent","required":true,"positional":true},{"name":"context","required":false,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters1 = [{"name":"intent","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"intent","required":true,"positional":true},{"name":"invokeResult","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"minLevel","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollAction extends Omit<upstream0.ContextAction<upstream1.ScrollIntent>, _flaxOwnMembers0>, Omit<upstream2.Action<upstream1.ScrollIntent>, _flaxOwnMembers0 | keyof upstream0.ContextAction<upstream1.ScrollIntent>>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ContextAction<upstream1.ScrollIntent> | keyof upstream2.Action<upstream1.ScrollIntent>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollAction": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction": readonly [upstream1.ScrollIntent] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream1.ScrollIntent] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ScrollAction: unique symbol;
readonly [_flaxDartTypeValue]: ScrollAction;

}
defineObject("flax.core/sdk_widgets#type:ScrollAction", ["callingAction","intentType","isActionEnabled"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollAction", "object", {"isEnabled":_flaxMemberParameters0,"invoke":_flaxMemberParameters0,"consumesKey":_flaxMemberParameters1,"toKeyEventResult":_flaxMemberParameters2,"addActionListener":_flaxMemberParameters3,"removeActionListener":_flaxMemberParameters3}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _ScrollActionProxy = {type: "flax.core/sdk_widgets#type:ScrollAction", parameters: [], constructors: {"":[]}, methods: {"isEnabled":_flaxMemberParameters0,"invoke":_flaxMemberParameters0,"consumesKey":_flaxMemberParameters1,"toKeyEventResult":_flaxMemberParameters2,"addActionListener":_flaxMemberParameters3,"removeActionListener":_flaxMemberParameters3,"toStringShort":_flaxMemberParameters4,"toDiagnosticsNode":_flaxMemberParameters5,"debugFillProperties":_flaxMemberParameters6,"toString":_flaxMemberParameters7}, getters: ["callingAction","intentType","isActionEnabled"], setters: [], contextMembers: [], superMembers: ["get:callingAction","get:intentType","get:isActionEnabled","isEnabled","invoke","consumesKey","toKeyEventResult","addActionListener","removeActionListener","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface ScrollAction {
readonly [_flaxDartTypeValue]: ScrollAction;

isEnabled(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, context?: upstream6.BuildContext | null): boolean;
invoke(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, context?: upstream6.BuildContext | null): void;
consumesKey(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
toKeyEventResult(intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, invokeResult: unknown | null): upstream7.KeyEventResult;
addActionListener(listener: ((action: upstream2.Action<upstream8.Intent>) => void)): void;
removeActionListener(listener: ((action: upstream2.Action<upstream8.Intent>) => void)): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream12.DiagnosticLevel | undefined}): string;
get callingAction(): upstream2.Action<upstream1.ScrollIntent> | null;
get intentType(): upstream4.Type;
get isActionEnabled(): boolean;
}
export abstract class ScrollAction extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollAction>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollAction;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollAction", readonly [], false];
constructor() { super(_ScrollActionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScrollAction.prototype, _ScrollActionProxy);
export namespace ScrollAction { export function implement(args: [], implementation: {}): ScrollAction {
return constructProxy(_ScrollActionProxy, args, implementation) as ScrollAction; } }
export namespace ScrollAction { export function getDirectionalIncrement(state: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable.dart::ScrollableState": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream13.Scrollable] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream13.Scrollable] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream13.Scrollable] }>, intent: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ScrollAction.getDirectionalIncrement", [state, intent]);
return _flaxResult as number;
} }
_flaxBindInstanceType<ScrollAction, typeof ScrollAction>(ScrollAction, "flax.core/sdk_widgets#type:ScrollAction", ["flax.core/sdk_widgets#type:ContextAction","flax.core/sdk_widgets#type:Action","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "isEnabled" | "invoke" | "consumesKey" | "toKeyEventResult" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
