// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { _flaxMemberParameters201, _flaxMemberParameters385, _flaxMemberParameters386, _flaxMemberParameters38, _flaxMemberParameters387, _flaxMemberParameters2, _flaxMemberParameters98 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverChildDelegate extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [] }> { readonly __SliverChildDelegate: unique symbol;
readonly [_flaxDartTypeValue]: SliverChildDelegate;

}
defineObject("flax.core/sdk_widgets#type:SliverChildDelegate", ["estimatedChildCount"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverChildDelegate", "object", {"build":_flaxMemberParameters201,"estimateMaxScrollOffset":_flaxMemberParameters385,"didFinishLayout":_flaxMemberParameters386,"shouldRebuild":_flaxMemberParameters38,"findIndexByKey":_flaxMemberParameters387,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters98}, {}), []);
const _SliverChildDelegateProxy = {type: "flax.core/sdk_widgets#type:SliverChildDelegate", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"build":_flaxMemberParameters201,"estimateMaxScrollOffset":_flaxMemberParameters385,"didFinishLayout":_flaxMemberParameters386,"shouldRebuild":_flaxMemberParameters38,"findIndexByKey":_flaxMemberParameters387,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters98}, getters: ["estimatedChildCount"], setters: [], contextMembers: [], superMembers: ["get:estimatedChildCount","estimateMaxScrollOffset","didFinishLayout","findIndexByKey","toString","debugFillDescription"]} as const;
export interface SliverChildDelegate {
readonly [_flaxDartTypeValue]: SliverChildDelegate;

estimateMaxScrollOffset(firstIndex: number, lastIndex: number, leadingScrollOffset: number, trailingScrollOffset: number): number | null;
didFinishLayout(firstIndex: number, lastIndex: number): void;
findIndexByKey(key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>): number | null;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
get estimatedChildCount(): number | null;
}
export abstract class SliverChildDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverChildDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverChildDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverChildDelegate", readonly [], false];
constructor() { super(_SliverChildDelegateProxy, Array.from(arguments)); }
abstract build(context: upstream0.BuildContext, index: number): Widget | null;
abstract shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [] }>): boolean;
}
_flaxDefineProxyBase(SliverChildDelegate.prototype, _SliverChildDelegateProxy);
export namespace SliverChildDelegate { export function implement(args: [], implementation: {build: ((context: upstream0.BuildContext, index: number) => Widget | null); shouldRebuild: ((oldDelegate: SliverChildDelegate) => boolean)}): SliverChildDelegate {
return constructProxy(_SliverChildDelegateProxy, args, implementation) as SliverChildDelegate; } }
_flaxBindInstanceType<SliverChildDelegate, typeof SliverChildDelegate>(SliverChildDelegate, "flax.core/sdk_widgets#type:SliverChildDelegate", ["dart:core::Object"]);
