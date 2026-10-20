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
import { _flaxMemberParameters38, _flaxMemberParameters427, _flaxMemberParameters426, _flaxMemberParameters12, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TwoDimensionalChildListDelegate extends Omit<upstream0.TwoDimensionalChildDelegate, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.TwoDimensionalChildDelegate>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.TwoDimensionalChildDelegate | keyof upstream1.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildListDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __TwoDimensionalChildListDelegate: unique symbol;
readonly [_flaxDartTypeValue]: TwoDimensionalChildListDelegate;

readonly hasListeners: boolean;
readonly children: DartList<DartList<Widget>>;
readonly addRepaintBoundaries: boolean;
readonly addAutomaticKeepAlives: boolean;
build(context: upstream3.BuildContext, vicinity: Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.ChildVicinity] }>): Widget | null;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildListDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
}
defineObject("flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", ["hasListeners","children","addRepaintBoundaries","addAutomaticKeepAlives"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", "object", {"shouldRebuild":_flaxMemberParameters38}, {}), ["removeListener"], undefined, "flax.core/sdk_widgets#type:TwoDimensionalChildDelegate");
export function _TwoDimensionalChildListDelegateFactory(options: { addRepaintBoundaries?: boolean | undefined; addAutomaticKeepAlives?: boolean | undefined; children: DartListInput<DartList<Widget>, DartListInput<Widget, Widget>> }): TwoDimensionalChildListDelegate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", "", [{"name":"addRepaintBoundaries"},{"name":"addAutomaticKeepAlives"},{"name":"children","required":true}], [], options) as TwoDimensionalChildListDelegate;
}
const _TwoDimensionalChildListDelegateProxy = {type: "flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", parameters: _flaxMemberParameters427, constructors: {"": _flaxMemberParameters427}, methods: {"build":_flaxMemberParameters426,"shouldRebuild":_flaxMemberParameters38,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2}, getters: ["children","addRepaintBoundaries","addAutomaticKeepAlives","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:children","get:addRepaintBoundaries","get:addAutomaticKeepAlives","get:hasListeners","build","shouldRebuild","addListener","removeListener","dispose"]} as const;
export interface _TwoDimensionalChildListDelegateNative extends TwoDimensionalChildListDelegate {
readonly [_flaxDartTypeValue]: _TwoDimensionalChildListDelegateNative;

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
export abstract class _TwoDimensionalChildListDelegateNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TwoDimensionalChildListDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TwoDimensionalChildListDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", readonly [], false];
constructor(options: {addRepaintBoundaries?: boolean | undefined; addAutomaticKeepAlives?: boolean | undefined; children: DartListInput<DartList<Widget>, DartListInput<Widget, Widget>>}) { super(_TwoDimensionalChildListDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TwoDimensionalChildListDelegateNative.prototype, _TwoDimensionalChildListDelegateProxy);
export namespace _TwoDimensionalChildListDelegateFactory { export function implement(args: [options: {addRepaintBoundaries?: boolean | undefined; addAutomaticKeepAlives?: boolean | undefined; children: DartListInput<DartList<Widget>, DartListInput<Widget, Widget>>}], implementation: {}): TwoDimensionalChildListDelegate {
return constructProxy(_TwoDimensionalChildListDelegateProxy, args, implementation) as TwoDimensionalChildListDelegate; } }
const _TwoDimensionalChildListDelegateBinding = _flaxProxyFactory(_TwoDimensionalChildListDelegateFactory, _TwoDimensionalChildListDelegateNative) as unknown as typeof _TwoDimensionalChildListDelegateFactory & (new(options: {addRepaintBoundaries?: boolean | undefined; addAutomaticKeepAlives?: boolean | undefined; children: DartListInput<DartList<Widget>, DartListInput<Widget, Widget>>}) => _TwoDimensionalChildListDelegateNative);
export const TwoDimensionalChildListDelegate: typeof _TwoDimensionalChildListDelegateBinding & _FlaxInstanceType<TwoDimensionalChildListDelegate> & _FlaxDartType<TwoDimensionalChildListDelegate, readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", readonly [], false]> = _flaxBindInstanceType<TwoDimensionalChildListDelegate, typeof _TwoDimensionalChildListDelegateBinding>(_TwoDimensionalChildListDelegateBinding, "flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", ["flax.core/sdk_widgets#type:TwoDimensionalChildDelegate","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _TwoDimensionalChildListDelegateBinding & _FlaxInstanceType<TwoDimensionalChildListDelegate> & _FlaxDartType<TwoDimensionalChildListDelegate, readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "children" | "addRepaintBoundaries" | "addAutomaticKeepAlives" | "build" | "shouldRebuild" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildListDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
