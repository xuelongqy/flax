// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters46 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BottomNavigationBarItem extends Readonly<{ "__flaxBound:package:flutter/src/widgets/bottom_navigation_bar_item.dart::BottomNavigationBarItem": readonly [] }> { readonly __BottomNavigationBarItem: unique symbol;
readonly [_flaxDartTypeValue]: BottomNavigationBarItem;

readonly key: upstream0.Key | null;
readonly icon: Widget;
readonly activeIcon: Widget;
readonly label: string | null;
readonly backgroundColor: upstream1.Color | null;
readonly tooltip: string | null;
readonly semanticsLabel: string | null;
}
defineObject("flax.core/sdk_widgets#type:BottomNavigationBarItem", ["key","icon","activeIcon","label","backgroundColor","tooltip","semanticsLabel"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:BottomNavigationBarItem", "object", {}, {}), []);
export function _BottomNavigationBarItemFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; icon: Widget; label?: string | null | undefined; activeIcon?: Widget | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; tooltip?: string | null | undefined; semanticsLabel?: string | null | undefined }): BottomNavigationBarItem {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:BottomNavigationBarItem", "", [{"name":"key"},{"name":"icon","required":true},{"name":"label"},{"name":"activeIcon"},{"name":"backgroundColor"},{"name":"tooltip"},{"name":"semanticsLabel"}], [], options) as BottomNavigationBarItem;
}
const _BottomNavigationBarItemProxy = {type: "flax.core/sdk_widgets#type:BottomNavigationBarItem", parameters: _flaxMemberParameters46, constructors: {"": _flaxMemberParameters46}, methods: {}, getters: ["key","icon","activeIcon","label","backgroundColor","tooltip","semanticsLabel"], setters: [], contextMembers: [], superMembers: ["get:key","get:icon","get:activeIcon","get:label","get:backgroundColor","get:tooltip","get:semanticsLabel"]} as const;
export interface _BottomNavigationBarItemNative extends BottomNavigationBarItem {
readonly [_flaxDartTypeValue]: _BottomNavigationBarItemNative;

get key(): upstream0.Key | null;
get icon(): Widget;
get activeIcon(): Widget;
get label(): string | null;
get backgroundColor(): upstream1.Color | null;
get tooltip(): string | null;
get semanticsLabel(): string | null;
}
export abstract class _BottomNavigationBarItemNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BottomNavigationBarItem>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BottomNavigationBarItem;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BottomNavigationBarItem", readonly [], false];
constructor(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; icon: Widget; label?: string | null | undefined; activeIcon?: Widget | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; tooltip?: string | null | undefined; semanticsLabel?: string | null | undefined}) { super(_BottomNavigationBarItemProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_BottomNavigationBarItemNative.prototype, _BottomNavigationBarItemProxy);
export namespace _BottomNavigationBarItemFactory { export function implement(args: [options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; icon: Widget; label?: string | null | undefined; activeIcon?: Widget | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; tooltip?: string | null | undefined; semanticsLabel?: string | null | undefined}], implementation: {}): BottomNavigationBarItem {
return constructProxy(_BottomNavigationBarItemProxy, args, implementation) as BottomNavigationBarItem; } }
const _BottomNavigationBarItemBinding = _flaxProxyFactory(_BottomNavigationBarItemFactory, _BottomNavigationBarItemNative) as unknown as typeof _BottomNavigationBarItemFactory & (new(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; icon: Widget; label?: string | null | undefined; activeIcon?: Widget | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; tooltip?: string | null | undefined; semanticsLabel?: string | null | undefined}) => _BottomNavigationBarItemNative);
export const BottomNavigationBarItem: typeof _BottomNavigationBarItemBinding & _FlaxInstanceType<BottomNavigationBarItem> & _FlaxDartType<BottomNavigationBarItem, readonly ["class", "flax.core/sdk_widgets#type:BottomNavigationBarItem", readonly [], false]> = _flaxBindInstanceType<BottomNavigationBarItem, typeof _BottomNavigationBarItemBinding>(_BottomNavigationBarItemBinding, "flax.core/sdk_widgets#type:BottomNavigationBarItem", ["dart:core::Object"]) as typeof _BottomNavigationBarItemBinding & _FlaxInstanceType<BottomNavigationBarItem> & _FlaxDartType<BottomNavigationBarItem, readonly ["class", "flax.core/sdk_widgets#type:BottomNavigationBarItem", readonly [], false]>;
