// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_FlowPaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_FlowPaintingContext';
import { _flaxMemberParameters76, _flaxMemberParameters77, _flaxMemberParameters78, _flaxMemberParameters59, _flaxMemberParameters1, _flaxMemberParameters61 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlowDelegate extends Readonly<{ "__flaxBound:package:flutter/src/rendering/flow.dart::FlowDelegate": readonly [] }> { readonly __FlowDelegate: unique symbol;
readonly [_flaxDartTypeValue]: FlowDelegate;

}
defineObject("flax.core/sdk_rendering#type:FlowDelegate", [], [], _flaxBindingMethods("flax.core/sdk_rendering#type:FlowDelegate", "object", {"getSize":_flaxMemberParameters76,"getConstraintsForChild":_flaxMemberParameters77,"paintChildren":_flaxMemberParameters78,"shouldRelayout":_flaxMemberParameters59,"shouldRepaint":_flaxMemberParameters59,"toString":_flaxMemberParameters1}, {}), []);
const _FlowDelegateProxy = {type: "flax.core/sdk_rendering#type:FlowDelegate", parameters: _flaxMemberParameters61, constructors: {"": _flaxMemberParameters61}, methods: {"getSize":_flaxMemberParameters76,"getConstraintsForChild":_flaxMemberParameters77,"paintChildren":_flaxMemberParameters78,"shouldRelayout":_flaxMemberParameters59,"shouldRepaint":_flaxMemberParameters59,"toString":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: [], superMembers: ["getSize","getConstraintsForChild","shouldRelayout","toString"]} as const;
export interface FlowDelegate {
readonly [_flaxDartTypeValue]: FlowDelegate;

getSize(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream1.Size;
getConstraintsForChild(i: number, constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream2.BoxConstraints;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/flow.dart::FlowDelegate": readonly [] }>): boolean;
toString(): string;
}
export abstract class FlowDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlowDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FlowDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:FlowDelegate", readonly [], false];
constructor(options?: {repaint?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}) { super(_FlowDelegateProxy, Array.from(arguments)); }
abstract paintChildren(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/flow.dart::FlowPaintingContext": readonly [] }>): void;
abstract shouldRepaint(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/flow.dart::FlowDelegate": readonly [] }>): boolean;
}
_flaxDefineProxyBase(FlowDelegate.prototype, _FlowDelegateProxy);
export namespace FlowDelegate { export function implement(args: [options?: {repaint?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}], implementation: {paintChildren: ((context: upstream3.FlowPaintingContext) => void); shouldRepaint: ((oldDelegate: FlowDelegate) => boolean)}): FlowDelegate {
return constructProxy(_FlowDelegateProxy, args, implementation) as FlowDelegate; } }
_flaxBindInstanceType<FlowDelegate, typeof FlowDelegate>(FlowDelegate, "flax.core/sdk_rendering#type:FlowDelegate", ["dart:core::Object"]);
