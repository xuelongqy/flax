// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonType';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonKind';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonKind';
import { _flaxMemberParameters70, _flaxMemberParameters2, _flaxMemberParameters71 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContextMenuButtonItem extends Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [] }> { readonly __ContextMenuButtonItem: unique symbol;
readonly [_flaxDartTypeValue]: ContextMenuButtonItem;

readonly onPressed: (() => void) | null;
readonly kind: upstream1.ContextMenuButtonKind;
readonly type: upstream0.ContextMenuButtonType;
readonly label: string | null;
copyWith(options?: {kind?: Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonKind": readonly [] }> | null | undefined; label?: string | null | undefined; onPressed?: (() => void) | null | undefined; type?: upstream0.ContextMenuButtonType | null | undefined}): ContextMenuButtonItem;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:ContextMenuButtonItem", ["onPressed","kind","type","label"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ContextMenuButtonItem", "object", {"copyWith":_flaxMemberParameters70,"toString":_flaxMemberParameters2}, {}), []);
export function _ContextMenuButtonItemFactory(options: { onPressed: (() => void) | null; type?: upstream0.ContextMenuButtonType | null | undefined; kind?: Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonKind": readonly [] }> | null | undefined; label?: string | null | undefined }): ContextMenuButtonItem {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ContextMenuButtonItem", "", [{"name":"onPressed","required":true},{"name":"type"},{"name":"kind"},{"name":"label"}], [], options) as ContextMenuButtonItem;
}
const _ContextMenuButtonItemProxy = {type: "flax.core/sdk_widgets#type:ContextMenuButtonItem", parameters: _flaxMemberParameters71, constructors: {"": _flaxMemberParameters71}, methods: {"copyWith":_flaxMemberParameters70,"toString":_flaxMemberParameters2}, getters: ["onPressed","kind","type","label"], setters: [], contextMembers: [], superMembers: ["get:onPressed","get:kind","get:type","get:label","copyWith","toString"]} as const;
export interface _ContextMenuButtonItemNative extends ContextMenuButtonItem {
readonly [_flaxDartTypeValue]: _ContextMenuButtonItemNative;

copyWith(options?: {onPressed?: (() => void) | null | undefined; type?: upstream0.ContextMenuButtonType | null | undefined; kind?: Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonKind": readonly [] }> | null | undefined; label?: string | null | undefined}): ContextMenuButtonItem;
toString(): string;
get onPressed(): (() => void) | null;
get kind(): upstream1.ContextMenuButtonKind;
get type(): upstream0.ContextMenuButtonType;
get label(): string | null;
}
export abstract class _ContextMenuButtonItemNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContextMenuButtonItem>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ContextMenuButtonItem;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ContextMenuButtonItem", readonly [], false];
constructor(options: {onPressed: (() => void) | null; type?: upstream0.ContextMenuButtonType | null | undefined; kind?: Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonKind": readonly [] }> | null | undefined; label?: string | null | undefined}) { super(_ContextMenuButtonItemProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ContextMenuButtonItemNative.prototype, _ContextMenuButtonItemProxy);
export namespace _ContextMenuButtonItemFactory { export function implement(args: [options: {onPressed: (() => void) | null; type?: upstream0.ContextMenuButtonType | null | undefined; kind?: Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonKind": readonly [] }> | null | undefined; label?: string | null | undefined}], implementation: {}): ContextMenuButtonItem {
return constructProxy(_ContextMenuButtonItemProxy, args, implementation) as ContextMenuButtonItem; } }
const _ContextMenuButtonItemBinding = _flaxProxyFactory(_ContextMenuButtonItemFactory, _ContextMenuButtonItemNative) as unknown as typeof _ContextMenuButtonItemFactory & (new(options: {onPressed: (() => void) | null; type?: upstream0.ContextMenuButtonType | null | undefined; kind?: Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonKind": readonly [] }> | null | undefined; label?: string | null | undefined}) => _ContextMenuButtonItemNative);
export const ContextMenuButtonItem: typeof _ContextMenuButtonItemBinding & _FlaxInstanceType<ContextMenuButtonItem> & _FlaxDartType<ContextMenuButtonItem, readonly ["class", "flax.core/sdk_widgets#type:ContextMenuButtonItem", readonly [], false]> = _flaxBindInstanceType<ContextMenuButtonItem, typeof _ContextMenuButtonItemBinding>(_ContextMenuButtonItemBinding, "flax.core/sdk_widgets#type:ContextMenuButtonItem", ["dart:core::Object"]) as typeof _ContextMenuButtonItemBinding & _FlaxInstanceType<ContextMenuButtonItem> & _FlaxDartType<ContextMenuButtonItem, readonly ["class", "flax.core/sdk_widgets#type:ContextMenuButtonItem", readonly [], false]>;
