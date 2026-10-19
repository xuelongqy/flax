// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters2 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AbstractNode extends Readonly<{ "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [] }> { readonly __AbstractNode: unique symbol;
readonly [_flaxDartTypeValue]: AbstractNode;

}
defineObject("flax.core/sdk_foundation#type:AbstractNode", ["depth","owner","attached","parent"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:AbstractNode", "object", {"redepthChild":_flaxMemberParameters0,"redepthChildren":_flaxMemberParameters1,"attach":_flaxMemberParameters2,"detach":_flaxMemberParameters1,"adoptChild":_flaxMemberParameters0,"dropChild":_flaxMemberParameters0}, {}), []);
const _AbstractNodeProxy = {type: "flax.core/sdk_foundation#type:AbstractNode", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"redepthChild":_flaxMemberParameters0,"redepthChildren":_flaxMemberParameters1,"attach":_flaxMemberParameters2,"detach":_flaxMemberParameters1,"adoptChild":_flaxMemberParameters0,"dropChild":_flaxMemberParameters0}, getters: ["depth","owner","attached","parent"], setters: [], contextMembers: [], superMembers: ["get:depth","get:owner","get:attached","get:parent","redepthChild","redepthChildren","attach","detach","adoptChild","dropChild"]} as const;
export interface AbstractNode {
readonly [_flaxDartTypeValue]: AbstractNode;

redepthChild(child: Readonly<{ "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [] }>): void;
redepthChildren(): void;
attach(owner: {}): void;
detach(): void;
adoptChild(child: Readonly<{ "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [] }>): void;
dropChild(child: Readonly<{ "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [] }>): void;
get depth(): number;
get owner(): unknown | null;
get attached(): boolean;
get parent(): AbstractNode | null;
}
export abstract class AbstractNode extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AbstractNode>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AbstractNode;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:AbstractNode", readonly [], false];
constructor() { super(_AbstractNodeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AbstractNode.prototype, _AbstractNodeProxy);
export namespace AbstractNode { export function implement(args: [], implementation: {}): AbstractNode {
return constructProxy(_AbstractNodeProxy, args, implementation) as AbstractNode; } }
_flaxBindInstanceType<AbstractNode, typeof AbstractNode>(AbstractNode, "flax.core/sdk_foundation#type:AbstractNode", ["dart:core::Object"]);
