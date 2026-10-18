// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContainerParentDataMixin<ChildType extends upstream0.RenderObject = upstream0.RenderObject> extends Omit<upstream1.ParentData, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [ChildType] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }> { readonly __ContainerParentDataMixin: unique symbol;
readonly [_flaxDartTypeValue]: ContainerParentDataMixin<ChildType>;

get previousSibling(): ChildType | null;
get nextSibling(): ChildType | null;
detach(): void;
toString(): string;
set previousSibling(value: (ChildType | DartInput<ChildType>) | null);
set nextSibling(value: (ChildType | DartInput<ChildType>) | null);
}
defineObject("flax.core/sdk_rendering#type:ContainerParentDataMixin", ["previousSibling","nextSibling"], ["previousSibling","nextSibling"], _flaxBindingMethods("flax.core/sdk_rendering#type:ContainerParentDataMixin", "object", {"detach":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
export const ContainerParentDataMixin: object & _FlaxInstanceType<ContainerParentDataMixin<upstream0.RenderObject>> & _FlaxDartType<ContainerParentDataMixin<upstream0.RenderObject>, readonly ["class", "flax.core/sdk_rendering#type:ContainerParentDataMixin", readonly [readonly ["class", "flax.core/sdk_rendering#type:RenderObject", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<ContainerParentDataMixin<upstream0.RenderObject>, object>({}, "flax.core/sdk_rendering#type:ContainerParentDataMixin", ["flax.core/sdk_rendering#type:ParentData","dart:core::Object"]) as object & _FlaxInstanceType<ContainerParentDataMixin<upstream0.RenderObject>> & _FlaxDartType<ContainerParentDataMixin<upstream0.RenderObject>, readonly ["class", "flax.core/sdk_rendering#type:ContainerParentDataMixin", readonly [readonly ["class", "flax.core/sdk_rendering#type:RenderObject", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(ContainerParentDataMixin, "flax.core/sdk_rendering#type:ContainerParentDataMixin", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "previousSibling" | "nextSibling" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.RenderObject] ? {readonly prototype: ContainerParentDataMixin<_Selected0>;} & _FlaxInstanceType<ContainerParentDataMixin<_Selected0>> & _FlaxDartType<ContainerParentDataMixin<_Selected0>> : never : never; }
