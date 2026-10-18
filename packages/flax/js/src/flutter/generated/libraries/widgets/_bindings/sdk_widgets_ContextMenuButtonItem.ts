// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonType';
const _flaxMemberParameters0 = [{"name":"label","required":false,"positional":false},{"name":"onPressed","required":false,"positional":false},{"name":"type","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContextMenuButtonItem extends Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [] }> { readonly __ContextMenuButtonItem: unique symbol;
readonly [_flaxDartTypeValue]: ContextMenuButtonItem;

}
defineObject("flax.core/sdk_widgets#type:ContextMenuButtonItem", ["onPressed","type","label"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ContextMenuButtonItem", "object", {"copyWith":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, {}), []);
const _ContextMenuButtonItemProxy = {type: "flax.core/sdk_widgets#type:ContextMenuButtonItem", parameters: [{"name":"onPressed","required":true,"positional":false},{"name":"type","required":false,"positional":false},{"name":"label","required":false,"positional":false}], constructors: {"":[{"name":"onPressed","required":true,"positional":false},{"name":"type","required":false,"positional":false},{"name":"label","required":false,"positional":false}]}, methods: {"copyWith":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, getters: ["onPressed","type","label"], setters: [], contextMembers: [], superMembers: ["get:onPressed","get:type","get:label","copyWith","toString"]} as const;
export interface ContextMenuButtonItem {
readonly [_flaxDartTypeValue]: ContextMenuButtonItem;

copyWith(options?: {onPressed?: (() => void) | null | undefined; type?: upstream0.ContextMenuButtonType | null | undefined; label?: string | null | undefined}): ContextMenuButtonItem;
toString(): string;
get onPressed(): (() => void) | null;
get type(): upstream0.ContextMenuButtonType;
get label(): string | null;
}
export abstract class ContextMenuButtonItem extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContextMenuButtonItem>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ContextMenuButtonItem;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ContextMenuButtonItem", readonly [], false];
constructor(options: {onPressed: (() => void) | null; type?: upstream0.ContextMenuButtonType | undefined; label?: string | null | undefined}) { super(_ContextMenuButtonItemProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ContextMenuButtonItem.prototype, _ContextMenuButtonItemProxy);
export namespace ContextMenuButtonItem { export function implement(args: [options: {onPressed: (() => void) | null; type?: upstream0.ContextMenuButtonType | undefined; label?: string | null | undefined}], implementation: {}): ContextMenuButtonItem {
return constructProxy(_ContextMenuButtonItemProxy, args, implementation) as ContextMenuButtonItem; } }
_flaxBindInstanceType<ContextMenuButtonItem, typeof ContextMenuButtonItem>(ContextMenuButtonItem, "flax.core/sdk_widgets#type:ContextMenuButtonItem", ["dart:core::Object"]);
