// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
const _flaxMemberParameters0 = [{"name":"key"},{"name":"icon","required":true},{"name":"label"},{"name":"activeIcon"},{"name":"backgroundColor"},{"name":"tooltip"},{"name":"semanticsLabel"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BottomNavigationBarItem extends Readonly<{ "__flaxBound:package:flutter/src/widgets/bottom_navigation_bar_item.dart::BottomNavigationBarItem": readonly [] }> { readonly __BottomNavigationBarItem: unique symbol;
readonly [_flaxDartTypeValue]: BottomNavigationBarItem;

}
defineObject("flax.core/sdk_widgets#type:BottomNavigationBarItem", ["key","icon","activeIcon","label","backgroundColor","tooltip","semanticsLabel"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:BottomNavigationBarItem", "object", {}, {}), []);
const _BottomNavigationBarItemProxy = {type: "flax.core/sdk_widgets#type:BottomNavigationBarItem", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["key","icon","activeIcon","label","backgroundColor","tooltip","semanticsLabel"], setters: [], contextMembers: [], superMembers: ["get:key","get:icon","get:activeIcon","get:label","get:backgroundColor","get:tooltip","get:semanticsLabel"]} as const;
export interface BottomNavigationBarItem {
readonly [_flaxDartTypeValue]: BottomNavigationBarItem;

get key(): upstream0.Key | null;
get icon(): Widget;
get activeIcon(): Widget;
get label(): string | null;
get backgroundColor(): upstream1.Color | null;
get tooltip(): string | null;
get semanticsLabel(): string | null;
}
export abstract class BottomNavigationBarItem extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BottomNavigationBarItem>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BottomNavigationBarItem;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BottomNavigationBarItem", readonly [], false];
constructor(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; icon: Widget; label?: string | null | undefined; activeIcon?: Widget | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; tooltip?: string | null | undefined; semanticsLabel?: string | null | undefined}) { super(_BottomNavigationBarItemProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BottomNavigationBarItem.prototype, _BottomNavigationBarItemProxy);
export namespace BottomNavigationBarItem { export function implement(args: [options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; icon: Widget; label?: string | null | undefined; activeIcon?: Widget | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; tooltip?: string | null | undefined; semanticsLabel?: string | null | undefined}], implementation: {}): BottomNavigationBarItem {
return constructProxy(_BottomNavigationBarItemProxy, args, implementation) as BottomNavigationBarItem; } }
_flaxBindInstanceType<BottomNavigationBarItem, typeof BottomNavigationBarItem>(BottomNavigationBarItem, "flax.core/sdk_widgets#type:BottomNavigationBarItem", ["dart:core::Object"]);
