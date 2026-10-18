// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TwoDimensionalChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TwoDimensionalChildDelegate';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
const _flaxMemberParameters0 = [{"name":"oldDelegate","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"vicinity","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TwoDimensionalChildListDelegate extends Omit<upstream0.TwoDimensionalChildDelegate, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.TwoDimensionalChildDelegate>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.TwoDimensionalChildDelegate | keyof upstream1.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildListDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __TwoDimensionalChildListDelegate: unique symbol;
readonly [_flaxDartTypeValue]: TwoDimensionalChildListDelegate;

}
defineObject("flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", ["hasListeners","children","addRepaintBoundaries","addAutomaticKeepAlives"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", "object", {"shouldRebuild":_flaxMemberParameters0}, {}), ["removeListener"], undefined, "flax.core/sdk_widgets#type:TwoDimensionalChildDelegate");
const _TwoDimensionalChildListDelegateProxy = {type: "flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", parameters: [{"name":"addRepaintBoundaries","required":false,"positional":false},{"name":"addAutomaticKeepAlives","required":false,"positional":false},{"name":"children","required":true,"positional":false}], constructors: {"":[{"name":"addRepaintBoundaries","required":false,"positional":false},{"name":"addAutomaticKeepAlives","required":false,"positional":false},{"name":"children","required":true,"positional":false}]}, methods: {"build":_flaxMemberParameters1,"shouldRebuild":_flaxMemberParameters0,"addListener":_flaxMemberParameters2,"removeListener":_flaxMemberParameters2,"dispose":_flaxMemberParameters3}, getters: ["children","addRepaintBoundaries","addAutomaticKeepAlives","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:children","get:addRepaintBoundaries","get:addAutomaticKeepAlives","get:hasListeners","build","shouldRebuild","addListener","removeListener","dispose"]} as const;
export interface TwoDimensionalChildListDelegate {
readonly [_flaxDartTypeValue]: TwoDimensionalChildListDelegate;

build(context: upstream3.BuildContext, vicinity: Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.ChildVicinity] }>): Widget | null;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildListDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
get children(): DartList<DartList<Widget>>;
get addRepaintBoundaries(): boolean;
get addAutomaticKeepAlives(): boolean;
get hasListeners(): boolean;
}
export abstract class TwoDimensionalChildListDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TwoDimensionalChildListDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TwoDimensionalChildListDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", readonly [], false];
constructor(options: {addRepaintBoundaries?: boolean | undefined; addAutomaticKeepAlives?: boolean | undefined; children: DartListInput<DartList<Widget>, DartListInput<Widget, Widget>>}) { super(_TwoDimensionalChildListDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TwoDimensionalChildListDelegate.prototype, _TwoDimensionalChildListDelegateProxy);
export namespace TwoDimensionalChildListDelegate { export function implement(args: [options: {addRepaintBoundaries?: boolean | undefined; addAutomaticKeepAlives?: boolean | undefined; children: DartListInput<DartList<Widget>, DartListInput<Widget, Widget>>}], implementation: {}): TwoDimensionalChildListDelegate {
return constructProxy(_TwoDimensionalChildListDelegateProxy, args, implementation) as TwoDimensionalChildListDelegate; } }
_flaxBindInstanceType<TwoDimensionalChildListDelegate, typeof TwoDimensionalChildListDelegate>(TwoDimensionalChildListDelegate, "flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", ["flax.core/sdk_widgets#type:TwoDimensionalChildDelegate","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "children" | "addRepaintBoundaries" | "addAutomaticKeepAlives" | "build" | "shouldRebuild" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildListDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
