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
import { _flaxMemberParameters70, _flaxMemberParameters335, _flaxMemberParameters53, _flaxMemberParameters127 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SingleChildLayoutDelegate extends Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }> { readonly __SingleChildLayoutDelegate: unique symbol;
readonly [_flaxDartTypeValue]: SingleChildLayoutDelegate;

}
defineObject("flax.core/sdk_rendering#type:SingleChildLayoutDelegate", [], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SingleChildLayoutDelegate", "object", {"getSize":_flaxMemberParameters70,"getConstraintsForChild":_flaxMemberParameters70,"getPositionForChild":_flaxMemberParameters335,"shouldRelayout":_flaxMemberParameters53}, {}), []);
const _SingleChildLayoutDelegateProxy = {type: "flax.core/sdk_rendering#type:SingleChildLayoutDelegate", parameters: _flaxMemberParameters127, constructors: {"": _flaxMemberParameters127}, methods: {"getSize":_flaxMemberParameters70,"getConstraintsForChild":_flaxMemberParameters70,"getPositionForChild":_flaxMemberParameters335,"shouldRelayout":_flaxMemberParameters53}, getters: [], setters: [], contextMembers: [], superMembers: ["getSize","getConstraintsForChild","getPositionForChild"]} as const;
export interface SingleChildLayoutDelegate {
readonly [_flaxDartTypeValue]: SingleChildLayoutDelegate;

getSize(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream1.Size;
getConstraintsForChild(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream2.BoxConstraints;
getPositionForChild(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, childSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream3.Offset;
}
export abstract class SingleChildLayoutDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SingleChildLayoutDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SingleChildLayoutDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SingleChildLayoutDelegate", readonly [], false];
constructor(options?: {relayout?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}) { super(_SingleChildLayoutDelegateProxy, Array.from(arguments)); }
abstract shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }>): boolean;
}
_flaxDefineProxyBase(SingleChildLayoutDelegate.prototype, _SingleChildLayoutDelegateProxy);
export namespace SingleChildLayoutDelegate { export function implement(args: [options?: {relayout?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}], implementation: {shouldRelayout: ((oldDelegate: SingleChildLayoutDelegate) => boolean)}): SingleChildLayoutDelegate {
return constructProxy(_SingleChildLayoutDelegateProxy, args, implementation) as SingleChildLayoutDelegate; } }
_flaxBindInstanceType<SingleChildLayoutDelegate, typeof SingleChildLayoutDelegate>(SingleChildLayoutDelegate, "flax.core/sdk_rendering#type:SingleChildLayoutDelegate", ["dart:core::Object"]);
