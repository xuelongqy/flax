// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [{"name":"childId","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"childId","required":true,"positional":true},{"name":"constraints","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"childId","required":true,"positional":true},{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"constraints","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"size","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"oldDelegate","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [] as const;
const _flaxMemberParameters7 = [{"name":"relayout"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MultiChildLayoutDelegate extends Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_layout.dart::MultiChildLayoutDelegate": readonly [] }> { readonly __MultiChildLayoutDelegate: unique symbol;
readonly [_flaxDartTypeValue]: MultiChildLayoutDelegate;

}
defineObject("flax.core/sdk_rendering#type:MultiChildLayoutDelegate", [], [], _flaxBindingMethods("flax.core/sdk_rendering#type:MultiChildLayoutDelegate", "object", {"hasChild":_flaxMemberParameters0,"layoutChild":_flaxMemberParameters1,"positionChild":_flaxMemberParameters2,"getSize":_flaxMemberParameters3,"performLayout":_flaxMemberParameters4,"shouldRelayout":_flaxMemberParameters5,"toString":_flaxMemberParameters6}, {}), []);
const _MultiChildLayoutDelegateProxy = {type: "flax.core/sdk_rendering#type:MultiChildLayoutDelegate", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"hasChild":_flaxMemberParameters0,"layoutChild":_flaxMemberParameters1,"positionChild":_flaxMemberParameters2,"getSize":_flaxMemberParameters3,"performLayout":_flaxMemberParameters4,"shouldRelayout":_flaxMemberParameters5,"toString":_flaxMemberParameters6}, getters: [], setters: [], contextMembers: [], superMembers: ["hasChild","layoutChild","positionChild","getSize","toString"]} as const;
export interface MultiChildLayoutDelegate {
readonly [_flaxDartTypeValue]: MultiChildLayoutDelegate;

hasChild(childId: {}): boolean;
layoutChild(childId: {}, constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream1.Size;
positionChild(childId: {}, offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
getSize(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream1.Size;
toString(): string;
}
export abstract class MultiChildLayoutDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MultiChildLayoutDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MultiChildLayoutDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:MultiChildLayoutDelegate", readonly [], false];
constructor(options?: {relayout?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}) { super(_MultiChildLayoutDelegateProxy, Array.from(arguments)); }
abstract performLayout(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
abstract shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_layout.dart::MultiChildLayoutDelegate": readonly [] }>): boolean;
}
_flaxDefineProxyBase(MultiChildLayoutDelegate.prototype, _MultiChildLayoutDelegateProxy);
export namespace MultiChildLayoutDelegate { export function implement(args: [options?: {relayout?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}], implementation: {performLayout: ((size: upstream1.Size) => void); shouldRelayout: ((oldDelegate: MultiChildLayoutDelegate) => boolean)}): MultiChildLayoutDelegate {
return constructProxy(_MultiChildLayoutDelegateProxy, args, implementation) as MultiChildLayoutDelegate; } }
_flaxBindInstanceType<MultiChildLayoutDelegate, typeof MultiChildLayoutDelegate>(MultiChildLayoutDelegate, "flax.core/sdk_rendering#type:MultiChildLayoutDelegate", ["dart:core::Object"]);
